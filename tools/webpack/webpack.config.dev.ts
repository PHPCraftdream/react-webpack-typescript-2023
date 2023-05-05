import {IWebpackConf} from './models';
import {configCommon} from './webpack.config.common';

export const devConfig: IWebpackConf = {
    ...configCommon(true),
    stats: 'errors-warnings',
    devtool: 'cheap-module-source-map',
    devServer: {
        open: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    performance: {
        hints: false,
    },
};

export default devConfig;
