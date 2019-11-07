export declare const eventuallySync: <R>(f: () => R, timeout?: number, interval?: number) => Promise<R>;
export declare const eventually: <R>(f: () => Promise<R>, timeout?: number, interval?: number) => Promise<R>;
