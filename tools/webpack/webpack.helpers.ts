import path from 'path';
import {TAlias} from './models';
const cwd = process.cwd();

export class WebpackHelpers {
    /**
     * Are we in development mode?
     */
    static isDev(): boolean {
        return process.env.NODE_ENV == 'development';
    }

    /**
     * Create webpack aliases
     */
    static createWebpackAliases(aliases: Record<string, string>): TAlias {
        const result: Record<string, string> = {};

        for (const name in aliases) {
            result[name] = path.join(cwd, aliases[name]);
        }

        return result;
    }
}
