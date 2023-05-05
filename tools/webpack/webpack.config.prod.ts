import {IWebpackConf} from './models';
import {configCommon} from './webpack.config.common';
import TerserPlugin from 'terser-webpack-plugin';

export const prodConfig: IWebpackConf = {
    ...configCommon(false),
    stats: 'errors-warnings',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
        sideEffects: true,
        concatenateModules: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 10,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
            },
        },
    },
};
