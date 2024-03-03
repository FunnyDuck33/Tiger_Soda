export interface TitleImage {
    src: string;
    srcM?: string;
    styles?: Record<string, number>;
    stylesM?: Record<string, number>;
    floatySrc?: string;
}

export interface Cover {
    text: string;
    src?: string;
    styles?: Record<string, number>;
    stylesM?: Record<string, number>;
}
