import {
  createBlock
} from "./chunk-WRYL6J35.mjs";

// src/jsx-runtime.ts
import React from "react";
function jsx(component, props) {
  const { children, ...rest } = props;
  return children ? createBlock(
    component,
    rest,
    ...Array.isArray(children) ? children : [children]
  ) : createBlock(component, rest);
}
var jsxs = jsx;
var Fragment = React.Fragment;

export {
  jsx,
  jsxs,
  Fragment
};
