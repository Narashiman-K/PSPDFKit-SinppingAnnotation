import { Group, ActionButton, MessageFormat, Avatar, Box, Text, Menu, ActionIconButton, Reaction, useI18n, useLocalStorage, useResizeObserver, Portal, Separator, Select } from '@baseline-ui/core';
import T, { useMemo, Fragment, useCallback, useLayoutEffect } from 'react';
import { classNames, getTextDimensions, calculateFontSizeToFitWidth, invariant } from '@baseline-ui/utils';
import { useTextField, useFocusRing, mergeProps, useButton, useMove } from 'react-aria';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useViewportSize, clamp, getOwnerDocument, getOwnerWindow } from '@react-aria/utils';
import { useSpring, animated } from '@react-spring/web';
import { useGranularLayoutEffect } from 'granular-hooks';
import { DragIndicatorIcon } from '@baseline-ui/icons/24';
import { RotateCounterClockwiseIcon } from '@baseline-ui/icons/24/index';
import { sprinkles } from '@baseline-ui/tokens';
import pi from 'react-dom';
import { MoreIcon } from '@baseline-ui/icons/16';
import * as hu from 'dompurify';

/**
 * Copyright (c) 2023-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 */
function ju(i,r){if(typeof i!="object"||i===null)return i;var a=i[Symbol.toPrimitive];if(a!==void 0){var u=a.call(i,r||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return (r==="string"?String:Number)(i)}function _u(i){var r=ju(i,"string");return typeof r=="symbol"?r:String(r)}function qu(i,r,a){return r=_u(r),r in i?Object.defineProperty(i,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[r]=a,i}function W(i,r){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);r&&(u=u.filter(function(p){return Object.getOwnPropertyDescriptor(i,p).enumerable})),a.push.apply(a,u);}return a}function X(i){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?W(Object(a),!0).forEach(function(u){qu(i,u,a[u]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(a,u));});}return i}function Y(i,r){var a={};for(var u in i)a[u]=r(i[u],u);return a}var Cu=(i,r,a)=>{for(var u of Object.keys(i)){var p;if(i[u]!==((p=r[u])!==null&&p!==void 0?p:a[u]))return !1}return !0},v=i=>{var r=a=>{var u=i.defaultClassName,p=X(X({},i.defaultVariants),a);for(var s in p){var o,e=(o=p[s])!==null&&o!==void 0?o:i.defaultVariants[s];if(e!=null){var n=e;typeof n=="boolean"&&(n=n===!0?"true":"false");var l=i.variantClassNames[s][n];l&&(u+=" "+l);}}for(var[t,g]of i.compoundVariants)Cu(t,p,i.defaultVariants)&&(u+=" "+g);return u};return r.variants=()=>Object.keys(i.variantClassNames),r.classNames={get base(){return i.defaultClassName.split(" ")[0]},get variants(){return Y(i.variantClassNames,a=>Y(a,u=>u.split(" ")[0]))}},r};var Z="_1yep5z66 _1yep5z67 _1yep5z68 _1yep5z62i _1yep5z62j _1yep5z62k _1yep5z63o _1yep5z63p _1yep5z63q _1yep5z61c _1yep5z61d _1yep5z61e _1yep5z6e2 _1yep5z6j2 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hs _1yep5z6ht _1yep5z6hu",J=v({defaultClassName:"_96lriw3",variantClassNames:{isFocusVisible:{true:"_96lriw4"},isDisabled:{true:"_1yep5z6bi"},isInline:{false:"_96lriw6 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hj _1yep5z6hk _1yep5z6hl _1yep5z6j2 _1yep5z6ed",true:"_96lriw7 _1yep5z6ai _1yep5z6aq _1yep5z6ay _1yep5z6b6 _1yep5z6ex _1yep5z6eb"}},defaultVariants:{},compoundVariants:[]}),Q=v({defaultClassName:"_96lriw8 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6hs _1yep5z6ht _1yep5z6hu _1yep5z6c6 _1yep5z6dh",variantClassNames:{isInline:{false:"_96lriw9",true:"_96lriwa"}},defaultVariants:{},compoundVariants:[]}),uu=v({defaultClassName:"_96lriw0 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gj _1yep5z6gk _1yep5z6gl _1yep5z6gy _1yep5z6gz _1yep5z6h0",variantClassNames:{isInline:{false:"_96lriw1",true:"_1yep5z69o _1yep5z69p _1yep5z69q"}},defaultVariants:{},compoundVariants:[]});var iu=T.forwardRef(({className:i,style:r,inputStyle:a,inputClassName:u,clearLabel:p,defaultValue:s,value:o,"data-blockid":e,isInline:n=!0,label:l,footerStyle:t,footerClassName:g,...c},d)=>{let b=T.useRef(null),[x,f]=T.useState(o||s||""),{inputProps:y,labelProps:w}=useTextField({...c,value:o||x,onChange:_=>{c.onChange?.(_),f(_);},"aria-label":l},b),{isFocusVisible:P,focusProps:k}=useFocusRing({isTextInput:!0});return jsxs(Group,{className:classNames(uu({isInline:n}),"BaselineUI-SignatureTextInput",i),style:r,ref:d,"data-blockid":e,children:[jsx("input",{...mergeProps(y,k),className:classNames(J({isFocusVisible:P,isDisabled:c.isDisabled,isInline:n}),u),ref:b,style:a}),jsx("div",{className:classNames(n?void 0:Z,g),style:t,children:b.current?.value?jsx(ActionButton,{label:p,variant:"ghost",size:n?"md":"sm",isDisabled:c.isDisabled||!x,onPress:()=>{f(""),c.onChange?.("");}}):jsx("label",{...w,"aria-disabled":"true",className:Q({isInline:n}),children:l})})]})});iu.displayName="SignatureTextInput";function Fu({initialState:i={},children:r,onChange:a,state:u}){invariant(i&&typeof i=="object"||u&&typeof u=="object","StateContainer must either be controlled or have an initial state and they should be objects"),invariant(typeof r=="function","StateContainer must have function child");let[p,s]=T.useState(u||i),o=useI18n(),e=T.useMemo(()=>({get:n=>u?.[n]||p[n],set:(n,l)=>{s(t=>{let g={...t,[n]:l};return setTimeout(()=>{a?.(g);},0),u||g});},intl:o}),[u,a,p,o]);return r(e)}var nu="jzfzia0",pu=v({defaultClassName:"jzfzia3",variantClassNames:{isFocusVisible:{true:"jzfzia4"}},defaultVariants:{},compoundVariants:[]}),eu="jzfzia5",ou="jzfzia1 _1yep5z6ai _1yep5z6aq _1yep5z6ay _1yep5z6b6 _1yep5z6bf _1yep5z6ex _1yep5z6e0 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6d8",lu="jzfzia2 _1yep5z63l _1yep5z63m _1yep5z63n _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6hy _1yep5z6hz _1yep5z6i0 _1yep5z6gg _1yep5z6gh _1yep5z6gi";var su=({children:i})=>{let r=T.useRef(null),{focusProps:a,isFocusVisible:u}=useFocusRing(),[p,s]=useLocalStorage("bui-devtools",{x:0,y:0}),{buttonProps:o}=useButton({},r),[e,n]=useSpring(()=>({left:p.x,top:p.y,config:{tension:600,friction:30}})),l=T.useRef(null),t=useViewportSize(),{size:g={width:0,height:0}}=useResizeObserver({ref:l}),{moveProps:c}=useMove({onMove:d=>{s(({x:b,y:x})=>{d.pointerType==="keyboard"&&(b=clamp(b,0,t.width),x=clamp(x,0,t.height));let f=d.shiftKey?10:1;return b+=d.deltaX*f,x+=d.deltaY*f,{x:b,y:x}});}});return useGranularLayoutEffect(()=>{n.start({left:clamp(p.x,0,t.width-g.width),top:clamp(p.y,0,t.height-g.height)});},[p],[n,t,g]),jsx(Portal,{children:jsxs(animated.div,{role:"toolbar",ref:l,className:ou,style:e,children:[jsx("button",{...mergeProps(c,a,o),className:pu({isFocusVisible:u}),ref:r,"aria-label":"Drag to move",children:jsx(DragIndicatorIcon,{className:eu,size:20})}),jsx(Separator,{orientation:"vertical"}),i]})})};function B(i,r){return Math.floor(Math.random()*(r-i+1)+i)}function gu(){let i=B(180,255),r=B(180,255),a=B(180,255);return `#${i.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`}var ei=[{id:"none",label:"None"},{id:"blockid",label:"Block ID"},{id:"classnames",label:"Class Names"}],du=({classStartsWith:i,onForceUpdate:r})=>{let a=T.useRef("none"),u=T.useRef(null),p=T.useRef(null),s=useCallback(()=>{let e,n=getOwnerDocument(u.current);if(a.current==="blockid")e=n.body.querySelectorAll("[data-blockid]");else {let l=n.body.querySelectorAll(`[class*="${i}"]`),t=p.current?.closest("[role='toolbar']");e=[...l].filter(g=>!t?.contains(g)&&[...g.classList].filter(c=>c.startsWith(i)));}return [...e]},[i]),o=useCallback(()=>{if(u.current&&(u.current.innerHTML="",a.current!=="none"))for(let e of s()){let n=gu();e.style.outline=`2px solid ${n}`,e.style.outlineOffset="-2px";let l=a.current==="blockid"?e.dataset.blockid:[...e.classList.values()].filter(d=>d.startsWith(i)).join(" "),t=e.getBoundingClientRect(),c=getOwnerDocument(e).createElement("div");pi.render(jsx(oi,{container:u.current||void 0,blockId:l||"",style:{top:`${t.top}px`,left:`${t.left}px`,backgroundColor:n}}),c),u.current?.append(c);}},[i,s]);return useLayoutEffect(()=>{let e=getOwnerDocument(u.current),n=getOwnerWindow(u.current);return u.current=e.createElement("div"),e.body.append(u.current),n.addEventListener("resize",o),()=>{u.current?.remove(),n.removeEventListener("resize",o);}},[o]),jsxs(Fragment$1,{children:[jsx(Select,{placement:"bottom start",onSelectionChange:e=>{invariant(u.current,"containerRef.current"),u.current.innerHTML="",a.current=e,e==="none"?r():o();},defaultSelectedKey:"none",items:ei,ref:p,"aria-label":"Select debug type"}),jsx(ActionIconButton,{icon:RotateCounterClockwiseIcon,size:"md",onPress:o,"aria-label":"Refresh"})]})};function oi({blockId:i,style:r,container:a}){return jsx(Portal,{portalContainer:a,children:jsx("div",{style:r,className:nu,children:jsx(Text,{className:sprinkles({padding:"xs"}),style:{color:"black"},type:"value",size:"sm",children:i})})})}var vu=T.forwardRef(({className:i,style:r,children:a,classStartsWith:u="BaselineUI"},p)=>{let[s,o]=T.useState(0),e=useMemo(()=>()=>o(n=>n+1),[]);return jsxs("div",{className:i,style:r,ref:p,children:[jsx(su,{children:jsx("div",{className:lu,children:jsx(du,{classStartsWith:u,onForceUpdate:e})})}),jsx(Fragment,{children:a},s)]})});vu.displayName="Devtools";var E=24*2,xu=T.forwardRef(({className:i,minWidth:r=10,maxWidth:a=Number.MAX_SAFE_INTEGER,height:u=96,strokeWidth:p=1,strokeColor:s="#3F87EA",fillColor:o="#AFFCFE",fontColor:e="#3F87EA",fontFamily:n="Arial",text:l,subText:t,style:g,label:c=jsx(MessageFormat,{id:"preview",defaultMessage:"Preview"}),"data-blockid":d,onDimensionsChange:b,...x},f)=>{let y=(t?.6:.7)*u,[w,P]=T.useState(y),[k,_]=T.useState(Math.min(r,a)),G=T.useRef(null);return useGranularLayoutEffect(()=>{if(!l||!G.current)return;let zu=getTextDimensions({text:l,fontFamily:"Arial",fontWeight:"bold",fontSize:w}).width,$=E+zu,K=E+getTextDimensions({text:l,fontFamily:"Arial",fontWeight:"bold",fontSize:y}).width,D=y,R=Math.max($,r);($>a||K>a)&&(D=calculateFontSizeToFitWidth({text:l,maxWidth:a-E,fontFamily:"Arial",fontWeight:"bold",initialFontSize:y}),R=D<y?a:K),P(D),_(R),b?.({width:R,height:u});},[l],[w,r,b]),jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.2",width:k,height:Math.round(u),viewBox:`0 0 ${k} ${Math.round(u)}`,className:classNames("BaselineUI-Stamp",i),style:g,ref:f,role:"img",fontFamily:n,"data-blockid":d,...x,children:[jsx("title",{children:c}),jsx("rect",{width:k-p*2,height:u-p*2,fill:o,rx:7,ry:7,strokeWidth:p,stroke:s,x:p,y:p}),jsx("text",{x:k/2,textAnchor:"middle",fontWeight:"bold",fontSize:w,fill:e,dominantBaseline:"central",y:t?u*.4:u/2,ref:G,children:l}),t&&jsx("text",{x:k/2,textAnchor:"middle",fontSize:u*.175,fill:e,dominantBaseline:"central",y:u*.85,children:t})]})});xu.displayName="Stamp";var fu=v({defaultClassName:"oub0v60 _1yep5z63r _1yep5z63s _1yep5z63t _1yep5z61f _1yep5z61g _1yep5z61h _1yep5z69 _1yep5z6a _1yep5z6b _1yep5z62l _1yep5z62m _1yep5z62n _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gj _1yep5z6gk _1yep5z6gl",variantClassNames:{hasName:{true:"_1yep5z6t0 _1yep5z6t1 _1yep5z6t2"}},defaultVariants:{},compoundVariants:[]}),V="oub0v67",O=v({defaultClassName:"oub0v62 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gg _1yep5z6gh _1yep5z6gi _1yep5z69i _1yep5z69j _1yep5z69k",variantClassNames:{isInline:{true:"_1yep5z610g _1yep5z610h _1yep5z610i"}},defaultVariants:{},compoundVariants:[]}),yu=v({defaultClassName:"oub0v64 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hj _1yep5z6hk _1yep5z6hl _1yep5z69l _1yep5z69m _1yep5z69n",variantClassNames:{isInline:{true:"_1yep5z6zy _1yep5z6zz _1yep5z6100 _1yep5z610g _1yep5z610h _1yep5z610i",false:"_1yep5z6101 _1yep5z6102 _1yep5z6103 _1yep5z611a _1yep5z611b _1yep5z611c"}},defaultVariants:{},compoundVariants:[]}),A="_1yep5z6cb _1yep5z6d2";var wu=T.forwardRef(({className:i,style:r,reactions:a,name:u,content:p,description:s,menuProps:o,avatarProps:e,isInline:n=!0,children:l,contentStringType:t="text","data-blockid":g},c)=>jsxs("div",{className:classNames(fu({hasName:!!u}),"BaselineUI-Comment",i),style:r,ref:c,"data-blockid":g,children:[jsxs("div",{className:O({isInline:n}),children:[jsxs("div",{className:yu({isInline:n}),children:[e&&jsx(Avatar,{...e,size:"md"}),jsxs(Box,{display:"flex",flexDirection:"column",flex:1,justifyContent:"center",children:[u&&jsx(Text,{type:"subtitle",size:"sm",children:u}),jsx(Text,{type:"helper",size:"sm",children:s})]})]}),o&&jsx(Menu,{placement:"bottom end",...o,children:jsx(ActionIconButton,{size:"sm",variant:"secondary",icon:MoreIcon,"aria-label":o["aria-label"]})})]}),jsx(Box,{paddingLeft:n&&e?"2xl":void 0,children:jsxs(Box,{paddingLeft:n&&e?"lg":void 0,display:"flex",gap:"md",flexDirection:"column",children:[typeof p=="string"&&t==="html"?jsx("div",{className:classNames(A,V),dangerouslySetInnerHTML:{__html:hu.default.sanitize(p)}}):jsx("div",{className:classNames(A,V),children:p}),!!a?.length&&jsx("div",{className:O({isInline:!0}),children:a.map(d=>jsx(Reaction,{...d},d.id))}),l]})})]}));wu.displayName="Comment";

export { wu as Comment, vu as Devtools, iu as SignatureTextInput, xu as Stamp, Fu as StateContainer };
