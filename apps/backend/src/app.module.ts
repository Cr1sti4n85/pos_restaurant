import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { OrdersModule } from './orders/orders.module';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '../../../.env'),
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.getOrThrow('MONGO_URI'),
        };
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'frontend/dist'),
    }),
    AuthModule,
    UserModule,
    OrdersModule,
    TablesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // global pipe
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule {}
