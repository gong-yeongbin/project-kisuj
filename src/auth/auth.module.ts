import { Module } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		HttpModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				baseURL: configService.get('ebest.domain'),
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				params: {
					grant_type: 'client_credentials',
					appkey: configService.get('ebest.appKey'),
					appsecretkey: configService.get('ebest.secretKey'),
					scope: 'oob',
				},
			}),
			inject: [ConfigService],
		}),
	],
	providers: [AuthRepository],
	exports: [AuthRepository],
})
export class AuthModule {}
