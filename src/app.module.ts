import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { StockModule } from './stock/stock.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), AuthModule, StockModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
