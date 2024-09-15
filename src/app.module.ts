import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [ApiController, ApiController],
  providers: [AppService],
})
export class AppModule {}
