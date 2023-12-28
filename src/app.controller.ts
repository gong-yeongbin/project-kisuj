import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthRepository } from './auth/auth.repository';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly authRepository: AuthRepository
	) {}

	@Get()
	async getHello(): Promise<string> {
		console.log(await this.authRepository.token());
		return this.appService.getHello();
	}
}
