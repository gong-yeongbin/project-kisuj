import * as process from 'process';

export default () => ({
	env: process.env.ENV,
	port: parseInt(process.env.PORT, 10) || 3000,
});
