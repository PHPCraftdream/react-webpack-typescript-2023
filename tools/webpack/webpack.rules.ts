import {WebpackHelpers} from './webpack.helpers';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {TRule} from './models';

export const rules: TRule[] = [
    {
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
            },
        },
    },
    {
        test: /\.css$/,
        use: [
            {loader: WebpackHelpers.isDev() ? 'style-loader' : MiniCssExtractPlugin.loader},
            {loader: 'css-loader'},
        ],
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            {loader: WebpackHelpers.isDev() ? 'style-loader' : MiniCssExtractPlugin.loader},
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
        ],
    },
    {
        test: /\.less$/,
        use: [
            {loader: WebpackHelpers.isDev() ? 'style-loader' : MiniCssExtractPlugin.loader},
            {loader: 'css-loader'},
            {loader: 'less-loader'},
        ],
    },
    {
        // More information here https://webpack.js.org/guides/asset-modules/
        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset',
        generator: {
            filename: 'assets/[hash][ext][query]',
        },
    },
];
