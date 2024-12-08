import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as process from 'process';
import { generateRandomLetters } from '../utils/generateRandomLetters';

@Injectable()
export class S3UploadService {
  private s3 = new AWS.S3({
    accessKeyId: process.env.AWS_SESSION_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY,
  });

  private AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;

  async uploadFile(
    fileBuffer: Buffer,
    mimetype: string,
    folder: string,
  ): Promise<AWS.S3.ManagedUpload.SendData> {
    const randomLatter = generateRandomLetters(5);
    const format = mimetype.split('/')[1];
    const key = `${folder}/${randomLatter}.${format}`;

    const params = {
      Bucket: this.AWS_S3_BUCKET,
      Key: key,
      Body: fileBuffer,
      ACL: 'private',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: process.env.AWS_DEFAULT_REGION,
      },
    };

    try {
      return await this.s3.upload(params).promise();
    } catch (e) {
      console.error('S3 upload error:', e);
      throw e;
    }
  }

  async remove(imageUrl: string) {
    const baseUrl = process.env.AWS_S3_BASE_URL;
    const path = imageUrl.replace(baseUrl, '');
    const params = {
      Bucket: this.AWS_S3_BUCKET,
      Key: path,
    };
    try {
      await this.s3.deleteObject(params).promise();
    } catch (e) {
      console.log('File not found in aws');
    }
    return true;
  }
}
