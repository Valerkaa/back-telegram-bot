FROM node:19.9.0-alpine3.17
WORKDIR /nest-back
COPY package.json .
RUN apk add --no-cache \
      ttf-freefont

RUN npm install bull-repl -g
RUN echo 'alias migrations="npm run typeorm:run-migrations"' >> /etc/profile
ENV ENV="/etc/profile"

COPY . .
EXPOSE 3001
CMD ["npm", "start"]