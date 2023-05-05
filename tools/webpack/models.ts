import {Configuration, RuleSetRule} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';

export interface IWebpackConf extends Configuration {
    devServer?: WebpackDevServerConfiguration;
}

interface IAliasObj {
    alias: string | false | string[];
    name: string;
    onlyModule?: boolean;
}

type TAliasHash = {
    [index: string]: string | false | string[]
};

export type TAlias = IAliasObj[] | TAliasHash;

export type TRule = (RuleSetRule | "...");
