import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';

@Module({
  imports: [],
  controllers: [AppController, ClientController],
  providers: [AppService, ClientService],
})
export class AppModule {}
