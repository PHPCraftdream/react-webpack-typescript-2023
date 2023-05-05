import {Compiler, HotModuleReplacementPlugin, WebpackPluginInstance} from 'webpack';
import {WebpackHelpers} from './webpack.helpers';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

type TPluginCallBack = (this: Compiler, compiler: Compiler) => void
type TPluginCallConfig = WebpackPluginInstance
type TPlugin = TPluginCallBack | TPluginCallConfig;

export const plugins: TPlugin[] = [
    new ForkTsCheckerWebpackPlugin(),
    WebpackHelpers.isDev() && new HotModuleReplacementPlugin(),
    WebpackHelpers.isDev() && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'assets/images/logo.png',
        inject: true,
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css',
    }),
].filter(Boolean);
