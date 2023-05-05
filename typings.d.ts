declare module '*.less' {
    interface IClassName {
        [className: string]: string;
    }
    const classNames: IClassName;
    export = classNames;
}

declare module 'csstype' {
    interface Properties {
        [index: string]: any;
    }
}
