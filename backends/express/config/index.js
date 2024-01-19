import dotenv from 'dotenv';
import path from 'path';

dotenv.config({});

let showStacktrace = true;

if ('SHOW_STACKTRACE' in process.env) {
	showStacktrace = process.env.SHOW_STACKTRACE;
}

const prodApiBaseUrl = 'https://api.food-delivery.mishast.com/';
const devApiBaseUrl = 'http://localhost:2000/';

const config = {
	env: process.env.NODE_ENV || 'development',
	server: {
		host: process.env.HOST || '127.0.0.1',
		port: process.env.PORT || 2000
	},
//	mongoUrl: 'mongodb://172.16.0.245/foodDelivery',
mongoUrl: 'mongodb://demofood_user:Prsj3TbYhx8yp@172.16.0.245:27017/demofood',
//mongodb+srv://demofood_user:Prsj3TbYhx8yp@172.16.0.245:27017/?authSource=demofood
	



	jwtSecret: process.env.JWT_SECRET || 'sdfsdfsdf',
	uploadDir: path.join(__dirname, '../upload'),
	showStacktrace,
	baseUrl: process.env.NODE_ENV === 'production' ? prodApiBaseUrl : devApiBaseUrl
};

export default config;
