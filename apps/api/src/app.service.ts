import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; version: string; timestamp: string } {
    return {
      message: 'Todo Demo v4 API',
      version: process.env.COMMIT_SHA || 'dev',
      timestamp: new Date().toISOString(),
    };
  }
}
