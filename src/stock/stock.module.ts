import { Module } from '@nestjs/common';
import { EtcRepository } from './etc.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		HttpModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				baseURL: configService.get('ebest.domain'),
				headers: { 'Content-Type': 'application/json; charset=utf-8', tr_cont: 'N', tr_cont_key: '', mac_address: '' },
			}),
			inject: [ConfigService],
		}),
	],
	providers: [EtcRepository],
	exports: [EtcRepository],
})
export class StockModule {}
