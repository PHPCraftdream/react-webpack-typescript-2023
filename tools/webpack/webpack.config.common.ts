import {rules} from './webpack.rules';
import {IWebpackConf} from './models';
import {plugins} from './webpack.plugins';
import {WebpackHelpers} from './webpack.helpers';

export const configCommon = (isDev: boolean): IWebpackConf => {
    const outputName = '[name]' + (isDev ? '' : '.[contenthash:8]');

    const result: IWebpackConf = {
        entry: ['./src/main.tsx'],
        mode: isDev ? 'development' : 'production',
        module: {
            rules,
        },
        output: {
            filename: `${outputName}.js`,
            chunkFilename: `${outputName}.chunk.js`,
            clean: true,
            pathinfo: false,
        },
        plugins,
        resolve: {
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.less', '.sass'],
            alias: WebpackHelpers.createWebpackAliases({
                '@assets': 'assets',
                '@src': 'src',
            }),
        }
    };

    if (process.env.PUBLIC_PATH) {
        result.output.publicPath = process.env.PUBLIC_PATH;
    }

    return result;
};
