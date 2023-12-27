import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TradingModule } from './trading/trading.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), TradingModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
