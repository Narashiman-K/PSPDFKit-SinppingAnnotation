"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/jsx-runtime.ts
var jsx_runtime_exports = {};
__export(jsx_runtime_exports, {
  Fragment: () => Fragment,
  jsx: () => jsx2,
  jsxs: () => jsxs
});
module.exports = __toCommonJS(jsx_runtime_exports);
var import_react = __toESM(require("react"));

// src/Block.tsx
var import_utils = require("@baseline-ui/utils");
var import_react_dom = __toESM(require("react-dom"));
var import_jsx_runtime = require("react/jsx-runtime");
var blockIdKey = "data-blockid";
function ensureValidChildren(children) {
  (0, import_utils.invariant)(
    !children || children.filter(Boolean).every(
      (child) => child instanceof Block || typeof child === "string" || typeof child === "number" || typeof child === "function"
    ),
    "The children must be an array of Block instances, strings, function or numbers."
  );
}
var Block = class _Block {
  id;
  _container;
  _component;
  _props;
  _children = [];
  parent;
  constructor(component, props, options = {}) {
    if (options?.container) {
      this._container = options.container;
    } else {
      this._container = (options.ownerDocument || document).createElement(
        "div"
      );
      this._container.style.display = "contents";
    }
    const { children: _children, ..._props } = props;
    this._component = component;
    this._props = _props;
    this.id = props[blockIdKey] || `__@Block@__${crypto.getRandomValues(new Uint32Array(1))[0].toString(16)}`;
    this.children = _children || [];
  }
  _setParent(parent) {
    this.parent = parent;
  }
  /**
   * This getter returns the props of the block.
   *
   * ```tsx
   * const block = new Block("div", { className: "test" });
   *
   * block.props; // { className: "test" }
   * ```
   */
  get props() {
    return this._props;
  }
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
  set props(props) {
    if (props.children) {
      throw new Error(
        "Do not pass children in the props. Use the `children` setter instead."
      );
    }
    this._props = props;
    this.id = this._props[blockIdKey] || this.id;
  }
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
  createComponent(key) {
    const Component = this._component;
    const children = this._children.map(
      (child, index) => child instanceof _Block ? child.createComponent(index) : child
    ) ?? [];
    const hasFunction = children.some((child) => typeof child === "function");
    if (hasFunction) {
      (0, import_utils.invariant)(
        children.length === 1,
        "The children must be a single function."
      );
    }
    const { children: _, ...props } = this._props;
    const isVoidElement = !children.length;
    const _children = children.length === 1 ? children[0] : children;
    const keyToUse = this._props.key || key;
    return isVoidElement ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ...props }, keyToUse) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ...props, children: _children }, keyToUse);
  }
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
  get children() {
    return this._children;
  }
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
  set children(children) {
    const _children = Array.isArray(children) ? children : [children];
    ensureValidChildren(_children);
    for (const child of _children) {
      if (child instanceof _Block) {
        child._setParent(this);
      }
    }
    this._children = _children;
  }
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
  prependChildren(...children) {
    ensureValidChildren(children);
    this._children = [...children, ...this._children];
    return this;
  }
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
  appendChildren(...children) {
    ensureValidChildren(children);
    this._children = [...this._children, ...children];
    return this;
  }
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
  insertBefore(block, ...children) {
    const id = typeof block === "string" ? block : block.id;
    (0, import_utils.invariant)(id, "The block must have an id.");
    const child = this.getBlockById(id);
    if (child instanceof _Block) {
      const parent = child.parent;
      if (parent) {
        const index = parent.children.findIndex(
          (child2) => child2 instanceof _Block && child2.id && child2.id === id
        );
        parent.children.splice(index, 0, ...children);
      }
    }
    return this;
  }
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
  insertAfter(block, ...children) {
    const id = typeof block === "string" ? block : block.id;
    (0, import_utils.invariant)(id, "The block must have an id.");
    const child = this.getBlockById(id);
    if (child instanceof _Block) {
      const parent = child.parent;
      if (parent) {
        const index = parent.children.findIndex(
          (child2) => child2 instanceof _Block && child2.id && child2.id === id
        );
        parent.children.splice(index + 1, 0, ...children);
      }
    }
    return this;
  }
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
  replace(block, ...children) {
    const id = typeof block === "string" ? block : block.id;
    (0, import_utils.invariant)(id, "The block must have an id.");
    const child = this.getBlockById(id);
    if (child instanceof _Block) {
      const parent = child.parent;
      if (parent) {
        const index = parent.children.findIndex(
          (child2) => child2 instanceof _Block && child2.id && child2.id === id
        );
        parent.children.splice(index, 1, ...children);
      }
    }
    return this;
  }
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
  getBlockById(id) {
    const child = this._getChild(id);
    if (child instanceof _Block) {
      return child;
    }
    for (const child2 of this._children) {
      if (child2 instanceof _Block) {
        const result = child2.getBlockById(id);
        if (result) {
          return result;
        }
      }
    }
  }
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
  getBlocksByComponent(component) {
    const blocks = [];
    if (this._component === component) {
      blocks.push(this);
    }
    for (const child of this._children) {
      if (child instanceof _Block) {
        const result = child.getBlocksByComponent(component);
        if (result) {
          blocks.push(...result);
        }
      }
    }
    return blocks;
  }
  _getChild(id) {
    return id instanceof _Block ? this._children.find((child) => child instanceof _Block && child === id) : this._children.find(
      (child) => child instanceof _Block && child.id === id
    );
  }
  _removeChild(_id) {
    const index = this._children.findIndex(
      (child) => child instanceof _Block && child.id === _id
    );
    if (index !== -1) {
      this._children.splice(index, 1);
    }
  }
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
  removeChildById(id) {
    this._removeChild(id);
    for (const child of this.children) {
      if (child instanceof _Block) {
        child.removeChildById(id);
      }
    }
  }
  /**
   * Returns a DOM Node that can be added directly to the DOM. This method will
   * create a DOM Node from the block and all of its children.
   */
  createDOMNode(container) {
    const element = this.createComponent();
    import_react_dom.default.render(element, container || this._container);
    return this._container;
  }
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
  mergeProps(props) {
    this._props = { ...this._props, ...props };
    this.id = this._props[blockIdKey] || this.id;
    return this;
  }
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
  setProp(key, value) {
    this._props = { ...this._props, [key]: value };
    this.id = this._props[blockIdKey] || this.id;
    return this;
  }
  /**
   * This method will return a JSON representation of the block and all of its
   * children.
   */
  toJS() {
    const componentName = typeof this._component === "string" ? this._component : this._component.displayName;
    return {
      id: this.id,
      component: componentName,
      props: this._props,
      children: this.children.map(
        (child) => child instanceof _Block ? child.toJS() : { value: child }
      )
    };
  }
};

// src/createBlock.ts
function createBlock(component, props = {}, ...children) {
  return new Block(component, { ...props, children });
}

// src/jsx-runtime.ts
function jsx2(component, props) {
  const { children, ...rest } = props;
  return children ? createBlock(
    component,
    rest,
    ...Array.isArray(children) ? children : [children]
  ) : createBlock(component, rest);
}
var jsxs = jsx2;
var Fragment = import_react.default.Fragment;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Fragment,
  jsx,
  jsxs
});
