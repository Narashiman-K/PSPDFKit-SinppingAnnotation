import React, { CSSProperties, SVGProps } from 'react';

declare const Icon: React.ForwardRefExoticComponent<{
    svg: string;
} & {
    className?: string | undefined;
    size?: string | number | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
} & React.RefAttributes<HTMLSpanElement>>;

type SharedProps = {
    /** The `className` property assigned to the SVG element of the component. */
    className?: string;
    /**
     * The `width` and `height` of the icon. This can be a string or a number. If
     * you want to set the width and height to different values, you can pass
     * `width` and `height` as separate props.
     *
     * @default "1em"
     */
    size?: string | number;
    /** The style applicable to the SVG element of the component. */
    style?: React.CSSProperties;
    title?: string;
};
type IconComponentProps = {
    /**
     * The SVG string of the icon to render. This is useful if you want to render
     * an icon that is not in the catalog of icons provided in the list above. You
     * can use the `createIcon` function to create an icon from an SVG string.
     *
     * @default undefined
     */
    svg: string;
} & SharedProps;
type SVGRProps = {
    title?: string;
    titleId?: string;
    size?: CSSProperties["width"];
};
type IconProps = SVGRProps & SVGProps<SVGSVGElement>;

export { Icon, type IconComponentProps, type IconProps, type SVGRProps };
