import { Module } from '@nestjs/common';
import { TradingRepository } from './trading.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
	imports: [
		HttpModule.register({
			baseURL: '/uapi/domestic-stock/v1/trading',
			headers: { 'Content-Type': 'application/json; charset=utf-8', appkey: '', appsecret: '', custtype: 'P' },
		}),
	],
	providers: [TradingRepository],
	exports: [TradingRepository],
})
export class TradingModule {}
