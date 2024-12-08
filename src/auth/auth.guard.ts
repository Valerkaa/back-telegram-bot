import * as process from "process";
import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";

@Injectable()
export class AdminGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-api-key'];
        const envToken = process.env.X_API_KEY
        if (token !== envToken) {
            throw new UnauthorizedException();
        }
        return true;
    }
}