//ambient declarations to allow modules do not have type definition
declare module 'mocha/lib/interfaces/common' {
}

declare module 'escape-string-regexp' {
    interface escapeRe extends Function {
        (re: string): string;
    }
}

declare module 'mocha/lib/suite' {
}

declare module 'mocha/lib/test' {
}
