import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';
import * as path from 'path';
import { delay } from './common/util/delay';

@Injectable()
export class AppService {
	async getHello(): Promise<string> {
		for (let i = 0; i < 2000; i++) {
			const workerData = {
				shcode: i,
			};
			new Worker(path.join(__dirname, 'worker', 'node-worker.js'), { workerData });

			await delay(1);
		}

		return 'Hello World!';
	}
}
