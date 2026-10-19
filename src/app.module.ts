import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
<<<<<<< HEAD
import { UsersModule } from './modules/users/users.module.js';
import { UsersController } from './modules/users/users.controller.js';
=======
import { AuthModule } from './modules/auth/auth.module.js';
>>>>>>> feat/auth

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'api-app-chamados-nestjs',
    }),
<<<<<<< HEAD
    UsersModule,
=======
    AuthModule,
>>>>>>> feat/auth
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
