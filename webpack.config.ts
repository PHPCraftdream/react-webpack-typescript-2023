import {WebpackHelpers} from './tools/webpack/webpack.helpers';
import devConfig from './tools/webpack/webpack.config.dev';
import {prodConfig} from './tools/webpack/webpack.config.prod';

const isDev = WebpackHelpers.isDev();
const config = isDev ? devConfig : prodConfig;

export default config;
