import { CSSProperties, SVGProps } from 'react';

type SVGRProps = {
    title?: string;
    titleId?: string;
    size?: CSSProperties["width"];
};

declare const SvgCaretDownIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgCaretLeftIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgCaretRightIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgCaretUpIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgChevronDownIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgChevronRightFilledIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgChevronRightIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgCloseIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgEllipseIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgMinusIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgPlusIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

declare const SvgXIcon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => any;

export { SvgCaretDownIcon as CaretDownIcon, SvgCaretLeftIcon as CaretLeftIcon, SvgCaretRightIcon as CaretRightIcon, SvgCaretUpIcon as CaretUpIcon, SvgChevronDownIcon as ChevronDownIcon, SvgChevronRightFilledIcon as ChevronRightFilledIcon, SvgChevronRightIcon as ChevronRightIcon, SvgCloseIcon as CloseIcon, SvgEllipseIcon as EllipseIcon, SvgMinusIcon as MinusIcon, SvgPlusIcon as PlusIcon, SvgXIcon as XIcon };
