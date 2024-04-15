import React, { Key, ReactHTML } from 'react';

type Any = any;
type IRecord = Record<Any, Any>;
type AnyComponent = React.ComponentType<Any> | keyof ReactHTML;
type Child = Block | string | number | ((...args: Any[]) => React.ReactElement);
type Props<T extends AnyComponent> = Omit<React.ComponentPropsWithRef<T>, "children"> & {
    "data-blockid"?: string;
    children?: Child[];
};
type PropsWithoutChildren<T extends AnyComponent> = Omit<Props<T>, "children">;
/**
 * The Block class is a wrapper around React components. It is used to create a
 * virtual DOM tree that can be rendered to the DOM.
 */
declare class Block<T extends AnyComponent = AnyComponent> {
    id: string;
    private readonly _container;
    private readonly _component;
    private _props;
    private _children;
    private parent?;
    constructor(component: AnyComponent, props: Props<T>, options?: {
        container?: HTMLElement;
        ownerDocument?: Document;
    });
    private _setParent;
    /**
     * This getter returns the props of the block.
     *
     * ```tsx
     * const block = new Block("div", { className: "test" });
     *
     * block.props; // { className: "test" }
     * ```
     */
    get props(): PropsWithoutChildren<T>;
    /**
     * This setter sets the props of the block. This method will replace the
     * existing props with the new props. Do not pass children in the props. Use
     * the `children` setter instead.
     *
     * ```tsx
     * const block = new Block("div", { className: "test" });
     *
     * block.props = { className: "test2" };
     * ```
     *
     * @param props
     */
    set props(props: PropsWithoutChildren<T>);
    /**
     * This method will create a React element from the block and all of its
     * children.
     *
     * ```ts
     * const App = () => {
     *   const block = new Block("div", { className: "test" });
     *   return block.createComponent();
     *   // <div className="test" />
     * };
     * ```
     *
     * @param key The key to use for the component.
     * @returns A React element.
     */
    createComponent(key?: Key): React.ReactElement;
    /**
     * This getter returns a list of the children of the block.
     *
     * ```ts
     * const block = new Block("div", { className: "test" });
     *
     * block.children = ["test"];
     * block.children; // ["test"]
     * ```
     */
    get children(): Child[];
    /**
     * This setter sets the children of the block. This method will replace the
     * existing children with the new children.
     *
     * ```ts
     * const block = new Block("div", { className: "test" });
     *
     * block.children = ["test"];
     * block.children; // ["test"]
     * ```
     *
     * @param children The new children to use.
     */
    set children(children: Child[]);
    /**
     * Prepends children to the block. This method will prepend the children to
     * the beginning of the existing children.
     *
     * ```ts
     * const child1 = new Block("div", { className: "test1", data-blockid: "test1" });
     * const child2 = new Block("div", { className: "test2", data-blockid: "test2" });
     * const block = new Block("div", { className: "test", children: [
     *  child1,
     *  child2,
     * ]});
     *
     * const child3 = new Block("div", { className: "test3", data-blockid: "test3" });
     * block.prependChildren(child3);
     * block.children; // [child3, child1, child2]
     * ```
     *
     * @param children The children to prepend.
     * @returns The Block instance.
     */
    prependChildren(...children: Child[]): this;
    /**
     * Appends children to the block. This method will append the children to the
     * end of the existing children.
     *
     * ```ts
     * const child1 = new Block("div", { className: "test1", data-blockid: "test1" });
     * const child2 = new Block("div", { className: "test2", data-blockid: "test2" });
     * const block = new Block("div", { className: "test", children: [
     *  child1,
     *  child2,
     * ]});
     *
     * const child3 = new Block("div", { className: "test3", data-blockid: "test3" });
     *
     * block.appendChildren(child3);
     * block.children; // [child1, child2, child3]
     * ```
     *
     * @param children
     * @returns The Block instance.
     */
    appendChildren(...children: Child[]): this;
    /**
     * This method will search the entire tree of children and then inserts
     * children after the child with the given id. This method will insert the
     * children after the first child with the given id. If the child is not
     * found, the children will not be inserted.
     *
     * ```ts
     * const child1 = new Block("div", { className: "test1", data-blockid: "test1" });
     * const child2 = new Block("div", { className: "test2", data-blockid: "test2" });
     *
     * const block = new Block("div", { className: "test", children: [
     *  child1,
     *  child2,
     * ]});
     *
     * const child3 = new Block("div", { className: "test3", data-blockid: "test3" });
     * block.insertAfter(child2.id, child3);
     * block.children; // [child1, child2, child3]
     * ```
     *
     * @param block The id of the child block or the block to insert the children
     *   after.
     * @param children The children to insert.
     * @returns The Block instance.
     */
    insertBefore(block: string | Block, ...children: Child[]): this;
    /**
     * This method will search the entire tree of children and then inserts
     * children after the child with the given id. This method will insert the
     * children after the first child with the given id. If the child is not
     * found, the children will not be inserted.
     *
     * ```ts
     * const child1 = new Block("div", { className: "test1", data-blockid: "test1" });
     * const child2 = new Block("div", { className: "test2", data-blockid: "test2" });
     * const block = new Block("div", { className: "test", children: [child1, child2] });
     *
     * const child3 = new Block("div", { className: "test3", data-blockid: "test3" });
     *
     * block.insertAfter(child1.id, child3);
     * block.children; // [child1, child3, child2]
     * ```
     *
     * @param block
     * @param children The children to insert.
     * @returns The Block instance.
     */
    insertAfter(block: string | Block, ...children: Child[]): this;
    /**
     * This method will search the entire tree of children and then replaces the
     * child with the given id with the new children. This method will replace the
     * first child with the given id. If the child is not found, the children will
     * not be inserted.
     *
     * ```ts
     * const child1 = new Block("div", { className: "test1", data-blockid: "test1" });
     * const child2 = new Block("div", { className: "test2", data-blockid: "test2" });
     * const block = new Block("div", { className: "test", children: [child1, child2] });
     *
     * const child3 = new Block("div", { className: "test3", data-blockid: "test3" });
     *
     * block.replace(child1.id, child3);
     * block.children; // [child3, child2]
     * ```
     *
     * @param block The id of the child block or the block to replace.
     * @param children The children to insert.
     * @returns The Block instance.
     */
    replace(block: string | Block, ...children: Child[]): this;
    /**
     * Finds a child block by its id. This method will search the entire tree of
     * children. If the child is not found, undefined is returned.
     *
     * ```ts
     * const child1 = new Block("div", {
     *   className: "test1",
     *   "data-blockid": "test1",
     * });
     * const child2 = new Block("div", {
     *   className: "test2",
     *   "data-blockid": "test2",
     * });
     * const block = new Block("div", { className: "test" }, child1, child2);
     *
     * block.getBlockById(child2.id); // child2
     * ```
     *
     * @param id The id of the child to find.
     * @returns The child block or undefined.
     */
    getBlockById<T extends AnyComponent>(id: string): Block<T> | undefined;
    /**
     * Finds the blocks by the component. This method will search the entire tree
     * of children. If the child is not found, undefined is returned.
     *
     * ```ts
     * const child1 = new Block("div", {
     *   className: "test1",
     *   "data-blockid": "test1",
     * });
     * const child2 = new Block("div", {
     *   className: "test2",
     *   "data-blockid": "test2",
     * });
     * const slider = new Block(Slider, {
     *   className: "test",
     *   "data-blockid": "test",
     * });
     *
     * const block = new Block(
     *   "div",
     *   { className: "test" },
     *   child1,
     *   child2,
     *   slider,
     * );
     *
     * block.getBlocksByComponent(Slider); // [slider]
     * ```
     *
     * @param component
     * @returns An array of blocks.
     */
    getBlocksByComponent<T extends AnyComponent>(component: T): Block<T>[];
    private _getChild;
    private _removeChild;
    /**
     * Removes a child block by its id. This method will search the entire tree of
     * children. If the child is not found, undefined is returned.
     *
     * ```ts
     * const child1 = new Block("div", { className: "test1", data-blockid: "test1" });
     * const child2 = new Block("div", { className: "test2", data-blockid: "test2" });
     *
     * const block = new Block("div", { className: "test", children: [child1, child2] });
     *
     * block.removeChildById(child2.id);
     * block.children; // [child1]
     * ```
     *
     * @param id
     */
    removeChildById(id: string): void;
    /**
     * Returns a DOM Node that can be added directly to the DOM. This method will
     * create a DOM Node from the block and all of its children.
     */
    createDOMNode(container?: HTMLElement): HTMLElement;
    /**
     * This method will merge the props of the block with the new props.
     *
     * ```ts
     * const block = new Block("div", { className: "test", id: "testid" });
     *
     * block.mergeProps({ className: "test2" });
     * block.props; // { className: "test2", id: "testid" }
     * ```
     *
     * @param props The new props to use.
     * @returns The Block instance.
     */
    mergeProps(props: Partial<Props<T>>): this;
    /**
     * Sets a single prop on the component. This method will not re-render the
     * component.
     *
     * ```ts
     * const block = new Block("div", { className: "test", id: "testid" });
     *
     * block.setProp("className", "test2");
     * block.props; // { className: "test2", id: "testid" }
     * ```
     *
     * @param key
     * @param value
     * @returns The Block instance.
     */
    setProp<U extends keyof Props<T>>(key: U, value: Props<T>[U]): this;
    /**
     * This method will return a JSON representation of the block and all of its
     * children.
     */
    toJS(): IJSON;
}
interface IJSON {
    id?: string;
    component: string;
    props: IRecord;
    children: (IJSON | {
        value: string | number | ((...args: Any[]) => React.ReactElement);
    })[];
}

export { Block as B, type Child as C };
