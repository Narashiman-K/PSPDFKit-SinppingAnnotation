import React from 'react';
import { B as Block } from '../Block-Co0xpuQa.mjs';

type Child = Block | string | number;
declare function jsx<T extends React.ForwardRefExoticComponent<unknown>>(component: T, props: React.ComponentPropsWithRef<T> & {
    children?: Child | Child[];
}): Block<T>;
declare const jsxs: typeof jsx;
declare const Fragment: React.ExoticComponent<{
    children?: React.ReactNode;
}>;

export { Fragment, jsx, jsxs };
