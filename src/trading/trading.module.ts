import { Module } from '@nestjs/common';
import { TradingRepository } from './trading.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
	imports: [
		HttpModule.registerAsync({
			imports: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				baseURL: '/uapi/domestic-stock/v1/trading',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					appkey: configService.get<string>('appKey'),
					appsecret: configService.get<string>('appSecret'),
					custtype: 'P',
				},
			}),
		}),
	],
	providers: [TradingRepository],
	exports: [TradingRepository],
})
export class TradingModule {}
