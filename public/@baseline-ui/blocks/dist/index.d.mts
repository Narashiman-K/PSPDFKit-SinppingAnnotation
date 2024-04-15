import { B as Block, C as Child } from './Block-Co0xpuQa';
import React from 'react';

type BlockJSX<T = object> = (props: T) => Block;

type Any = any;
type BlockId = {
    "data-blockid"?: string;
};
/**
 * Creates a new Block instance.
 *
 * @param component The component to render.
 * @param props The props to pass to the component.
 * @param children
 */
declare function createBlock<const T extends keyof React.ReactHTML>(component: T, props?: Omit<React.ComponentPropsWithRef<T>, "children"> & BlockId, ...children: Child[]): Block<T>;
declare function createBlock<T extends React.ForwardRefExoticComponent<any>>(component: T, props?: Omit<React.ComponentPropsWithRef<T>, "children"> & BlockId, ...children: Child[]): Block<T>;
declare function createBlock<T extends (...args: Any[]) => Any>(component: T, props?: Omit<Parameters<T>[0], "children"> & BlockId, ...children: Child[]): Block<T>;

export { Block, type BlockJSX, createBlock };
