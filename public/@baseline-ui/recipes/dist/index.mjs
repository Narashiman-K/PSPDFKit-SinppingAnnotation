import { mergeRefs } from '@react-aria/utils';
import I, { useRef, useMemo, useEffect, useCallback } from 'react';
import { defineMessages, useI18n, useDevice, Separator, Text, ActionButton, ActionIconButton, Preview, ColorPresetInlineInput, TabItem, RadioGroup, Select, ImageDropZone, FreehandCanvas, Tabs, Checkbox, TextInput } from '@baseline-ui/core';
import { invariant, classNames, lightenColor } from '@baseline-ui/utils';
import { PlusIcon, CrossIcon } from '@baseline-ui/icons/20';
import { jsx, jsxs } from '@baseline-ui/blocks/jsx-runtime';
import { themeVars } from '@baseline-ui/tokens';
import { SignatureTextInput, Stamp } from '@baseline-ui/app';
import { jsxs as jsxs$1, jsx as jsx$1 } from 'react/jsx-runtime';
import { useDateFormatter } from 'react-aria';

/**
 * Copyright (c) 2023-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 */
function S({state:t,initialState:r={},onChange:o,ref:e}){let[n,p]=I.useState({...r,...t}),d=useI18n(),c=useDevice(e?.current),s=useRef(Object.fromEntries(Object.entries(t||{}).map(([a,z])=>[a,z!==void 0]))),i=useMemo(()=>Object.fromEntries(Object.entries(t||{}).map(([a,z])=>[a,z!==void 0])),[t]);useEffect(()=>{for(let a in s.current){let z=s.current[a];z!==i[a]&&console.warn(`WARN: A component changed from ${z?"controlled":"uncontrolled"} to ${i[a]?"controlled":"uncontrolled"}.`),s.current[a]=i[a];}},[i]);let _=I.useMemo(()=>({get:a=>i[a]?t?.[a]:n[a],set:(a,z)=>{if((i[a]?t?.[a]:n[a])===z)return;let C={[a]:z};if(o?.(C),i[a]){invariant(o,"If you provide a controlled state, you must also provide an onChange handler.");return}p({...n,[a]:z});},toJS:()=>({...n,...t})}),[t,i,o,n]);return {intl:d,state:_,device:c}}function pt(t,r){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var e=o.call(t,r||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return (r==="string"?String:Number)(t)}function nt(t){var r=pt(t,"string");return typeof r=="symbol"?r:String(r)}function it(t,r,o){return r=nt(r),r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Q(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,e);}return o}function X(t){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Q(Object(o),!0).forEach(function(e){it(t,e,o[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Q(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e));});}return t}function $(t,r){var o={};for(var e in t)o[e]=r(t[e],e);return o}var st=(t,r,o)=>{for(var e of Object.keys(t)){var n;if(t[e]!==((n=r[e])!==null&&n!==void 0?n:o[e]))return !1}return !0},y=t=>{var r=o=>{var e=t.defaultClassName,n=X(X({},t.defaultVariants),o);for(var p in n){var d,c=(d=n[p])!==null&&d!==void 0?d:t.defaultVariants[p];if(c!=null){var s=c;typeof s=="boolean"&&(s=s===!0?"true":"false");var i=t.variantClassNames[p][s];i&&(e+=" "+i);}}for(var[_,a]of t.compoundVariants)st(_,n,t.defaultVariants)&&(e+=" "+a);return e};return r.variants=()=>Object.keys(t.variantClassNames),r.classNames={get base(){return t.defaultClassName.split(" ")[0]},get variants(){return $(t.variantClassNames,o=>$(o,e=>e.split(" ")[0]))}},r};var M="_1yep5z63r _1yep5z63s _1yep5z63t _1yep5z61f _1yep5z61g _1yep5z61h _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hy _1yep5z6hz _1yep5z6i0 _1yep5z6gy _1yep5z6gz _1yep5z6h0",ee="_1yep5z64r _1yep5z64s _1yep5z64t _1yep5z673 _1yep5z674 _1yep5z675",te=y({defaultClassName:"x0o33h6 _1yep5z6gd _1yep5z6ge _1yep5z6gf _1yep5z6e0",variantClassNames:{variant:{wide:"x0o33h7 _1yep5z69 _1yep5z6g _1yep5z6h _1yep5z62l _1yep5z62s _1yep5z62t _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z69l _1yep5z69p _1yep5z69q",narrow:"x0o33h8 _1yep5z63r _1yep5z63s _1yep5z63t _1yep5z61f _1yep5z61g _1yep5z61h _1yep5z63 _1yep5z64 _1yep5z65 _1yep5z62f _1yep5z62g _1yep5z62h _1yep5z69i _1yep5z69j _1yep5z69k"}},defaultVariants:{},compoundVariants:[]}),ae="_1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z69 _1yep5z6d _1yep5z6e _1yep5z62l _1yep5z62p _1yep5z62q _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hv _1yep5z6hw _1yep5z6hx _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6e2",re=y({defaultClassName:"x0o33h3 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hy _1yep5z6hz _1yep5z6i0 _1yep5z6gy _1yep5z6gz _1yep5z6h0",variantClassNames:{variant:{wide:"x0o33h4 _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z6e2",narrow:"x0o33h5 _1yep5z63 _1yep5z64 _1yep5z65 _1yep5z63r _1yep5z63s _1yep5z63t _1yep5z61f _1yep5z61g _1yep5z61h"}},defaultVariants:{},compoundVariants:[]}),oe=y({defaultClassName:"x0o33h0 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gj _1yep5z6gk _1yep5z6gl",variantClassNames:{variant:{narrow:"_1yep5z6e0",wide:"x0o33h2"}},defaultVariants:{},compoundVariants:[]});var B=({className:t,style:r,titleId:o,items:e,ref:n,onAdd:p,onAddFromPreview:d,onRemoveFromPreview:c,onCancel:s,variant:i="wide",intl:{formatMessage:_}})=>{let a=i==="narrow",z=jsx(Separator,{className:ee});return jsxs("div",{style:r,className:classNames(oe({variant:i}),t),ref:n,"data-blockid":"signatures-list",children:[jsxs("div",{className:re({variant:i}),"data-blockid":"header",children:[jsx(Text,{id:o,type:"title",size:a?"sm":"md","data-blockid":"title",className:"PSPDFKit-Electronic-Signatures-Signature-Heading",children:_(x.signatures)}),i==="wide"&&jsx(ActionButton,{id:"add-signature",size:"md",label:_(x.addSignature),"data-blockid":"add-signature",onPress:p,className:"PSPDFKit-Electronic-Signatures-Add-Signature-Button"})]}),a&&jsxs("div",{children:[z,jsxs("div",{className:M,children:[jsx(Text,{type:"subtitle",size:"sm",children:_(x.addSignature)}),jsx(ActionIconButton,{variant:"secondary",size:"md",icon:PlusIcon,onPress:p,"data-blockid":"add-signature","aria-label":_(x.addSignature)})]})]}),jsx("div",{className:classNames(te({variant:i}),"PSPDFKit-Signature-Picker PSPDFKit-Signature-Dialog-Picker"),"data-blockid":"body",children:e.map(({id:f,...C})=>jsx(Preview,{className:"PSPDFKit-Signature-Dialog-Picker-Item-Button",...C,"data-blockid":f,addAriaLabel:_(x.addSignature),onPress:()=>d?.(f),onDelete:c?()=>c(f):void 0,deleteAriaLabel:_(x.delete)},f))}),!a&&jsx("div",{className:ae,"data-blockid":"footer",children:jsx(ActionButton,{variant:"secondary",size:"md",label:_(x.cancel),onPress:s,"data-blockid":"cancel",className:"PSPDFKit-Signature-Dialog-Cancel-Button"})}),a&&z]})},x=defineMessages({signatures:{defaultMessage:"Signatures",id:"signatures"},addSignature:{defaultMessage:"Add Signature",id:"addSignature"},cancel:{defaultMessage:"Cancel",id:"cancel"},delete:{defaultMessage:"Delete",id:"delete"}});var le=I.forwardRef(({children:t,state:r,onStateChange:o,initialState:e,...n},p)=>{let d=I.useRef(null),c=S({ref:d,initialState:e,state:r,onChange:o}),s={...n,...c,ref:mergeRefs(p,d)},i=B(s);return t?t({...s,ui:i}):i.createComponent()});le.displayName="SignaturesList";var O=y({defaultClassName:"_1pebngc18 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9",variantClassNames:{variant:{wide:"_1pebngc19",narrow:"_1yep5z63r _1yep5z63y _1yep5z63z _1yep5z619 _1yep5z61j _1yep5z61k _1yep5z63 _1yep5z67 _1yep5z68 _1yep5z62f _1yep5z62j _1yep5z62k _1yep5z6e0"}},defaultVariants:{},compoundVariants:[]}),ce=y({defaultClassName:"_1pebngc6 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gj _1yep5z6gk _1yep5z6gl",variantClassNames:{variant:{wide:"_1pebngc7",narrow:"_1pebngc8"}},defaultVariants:{},compoundVariants:[]}),de=y({defaultClassName:"_1pebngc0",variantClassNames:{variant:{wide:"_1pebngc1",narrow:"_1pebngc2"}},defaultVariants:{},compoundVariants:[]}),ye="_1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z69l _1yep5z69m _1yep5z69n",_e=y({defaultClassName:"_1pebngc15 _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z69 _1yep5z6d _1yep5z6e _1yep5z62l _1yep5z62p _1yep5z62q _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hy _1yep5z6hz _1yep5z6i0",variantClassNames:{variant:{wide:"_1yep5z6e2",narrow:"_1yep5z6e0"}},defaultVariants:{},compoundVariants:[]}),ze=y({defaultClassName:"_1pebngc3 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hy _1yep5z6hz _1yep5z6i0 _1yep5z6gy _1yep5z6gz _1yep5z6h0",variantClassNames:{variant:{narrow:"_1pebngc4 _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z619 _1yep5z61g _1yep5z61h _1yep5z6e0",wide:"_1pebngc5 _1yep5z69 _1yep5z6g _1yep5z6h _1yep5z62l _1yep5z62s _1yep5z62t _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z6e2"}},defaultVariants:{},compoundVariants:[]}),ue=y({defaultClassName:"_1pebngcs _1pebngch _1yep5z6j2",variantClassNames:{variant:{wide:"_1pebngct",narrow:"_1pebngcu"}},defaultVariants:{},compoundVariants:[]}),ge="_1pebngch _1yep5z6j2 _1yep5z6j3",H=y({defaultClassName:"_1pebngcm",variantClassNames:{variant:{wide:"_1pebngcn",narrow:"_1pebngco"}},defaultVariants:{},compoundVariants:[]}),me="_1pebngc11 _1yep5z650 _1yep5z651 _1yep5z652 _1yep5z6e2",be="_1pebngc14",fe="_1pebngc12 _1yep5z63x _1yep5z63y _1yep5z63z _1yep5z61l _1yep5z61m _1yep5z61n _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6d3 _1yep5z69i _1yep5z69j _1yep5z69k _1yep5z6j4",he=y({defaultClassName:"_1pebngch _1yep5z6j2 _1yep5z6j3",variantClassNames:{variant:{wide:"_1yep5z65c _1yep5z65d _1yep5z65e",narrow:"_1pebngcr"}},defaultVariants:{},compoundVariants:[]}),ve=y({defaultClassName:"_1pebngcv _1pebngch _1yep5z6j2",variantClassNames:{variant:{wide:"_1pebngct",narrow:"_1pebngcx"}},defaultVariants:{},compoundVariants:[]}),Ce="_1pebngc13 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0",Se=y({defaultClassName:"_1pebngcy _1pebngch _1yep5z6j2",variantClassNames:{variant:{wide:"_1pebngcz",narrow:"_1pebngc10"}},defaultVariants:{},compoundVariants:[]}),xe=y({defaultClassName:"_1pebngci _1pebngch _1yep5z6j2",variantClassNames:{variant:{wide:"_1pebngcj",narrow:"_1yep5z6af _1yep5z6ag _1yep5z6ah"}},defaultVariants:{},compoundVariants:[]}),Pe=y({defaultClassName:"_1pebngc9 _1yep5z6iz",variantClassNames:{variant:{wide:"_1pebngca _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z6e2",narrow:"_1pebngcb _1yep5z64l _1yep5z63s _1yep5z63t _1yep5z629 _1yep5z61g _1yep5z61h _1yep5z6e0"}},defaultVariants:{},compoundVariants:[]}),T=y({defaultClassName:"_1pebngcc _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gj _1yep5z6gk _1yep5z6gl _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6j3",variantClassNames:{type:{image:"_1yep5z6c _1yep5z6d _1yep5z6e _1yep5z62o _1yep5z62p _1yep5z62q _1yep5z6hs _1yep5z6ht _1yep5z6hu",type:"_1pebngce"},variant:{wide:"_1yep5z6c _1yep5z6d _1yep5z6e _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z69o _1yep5z69p _1yep5z69q",narrow:"_1yep5z613 _1yep5z614 _1yep5z615 _1yep5z63f _1yep5z63g _1yep5z63h"}},defaultVariants:{},compoundVariants:[]}),Ne="_1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gj _1yep5z6gk _1yep5z6gl _1yep5z6hj _1yep5z6hk _1yep5z6hl";y({defaultClassName:"yje7uq8 _1yep5z6d4 _1yep5z6c3",variantClassNames:{isDisabled:{true:"_1yep5z6wo"}},defaultVariants:{},compoundVariants:[]});var ke="yje7uq7";y({defaultClassName:"yje7uq0 _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6gg _1yep5z6gh _1yep5z6gi",variantClassNames:{labelPosition:{end:"_1yep5z6zy _1yep5z6zz _1yep5z6100 _1yep5z6t0 _1yep5z6t1 _1yep5z6t2",start:"_1yep5z6104 _1yep5z6105 _1yep5z6106 _1yep5z611g _1yep5z611h _1yep5z611i"}},defaultVariants:{},compoundVariants:[]});var we=y({defaultClassName:"yje7uq3 _1dlrtbb5",variantClassNames:{isFocusVisible:{true:"_1dlrtbb8"},isSelected:{true:"_1dlrtbb7"},isDisabled:{true:"_1dlrtbba"}},defaultVariants:{},compoundVariants:[]});var Fe=({item:{id:t,label:r},options:{isSelected:o,isFocusVisible:e,isDisabled:n}})=>jsxs$1("div",{className:classNames(fe,"PSPDFKit-Electronic-Signatures-Font-Family-Wrapper"),"aria-label":t,style:{fontFamily:t},children:[jsx$1("div",{className:we({isSelected:o,isFocusVisible:e,isDisabled:n}),children:o&&jsx$1("div",{className:classNames(ke,"PSPDFKit-Electronic-Signatures-Font-Family-Radio-Input")})}),jsx$1("span",{className:"PSPDFKit-Electronic-Signatures-Font-Family-Label",children:r})]});var Re=({className:t,style:r,colorPresets:o,state:e,ref:n,intl:{formatMessage:p},titleId:d,fonts:c,onCloseRequest:s,onAdd:i,defaultInputText:_="",variant:a="wide",allowedTabs:z=["DRAW","IMAGE","TYPE"],allowStoringSignature:f=!0,"data-blockid":C="create-signature"})=>{let l=a==="narrow",A=I.useRef(null),k=e.get("signature"),D=k?.type==="type"?k:{type:"type",value:""},Qe=I.useCallback(u=>{e.set("signature",u==="type"&&_?{type:"type",value:_}:void 0);},[e,_]),Y=I.useCallback(u=>{u.length?e.set("signature",{type:"draw",value:u}):e.set("signature",void 0);},[e]),J=I.useCallback(u=>{u.length?e.set("signature",{type:"image",value:u[0]}):e.set("signature",void 0);},[e]),w=useMemo(()=>jsx(ColorPresetInlineInput,{items:o||[],"aria-label":l?void 0:p("color"),className:classNames(O({variant:a}),"PSPDFKit-Input-ColorPicker"),value:e.get("color"),onChange:u=>e.set("color",u),"data-blockid":"color-selector",label:l?p("color"):void 0,labelPosition:"start",optionClassName:"PSPDFKit-Input-ColorPicker-Swatch PSPDFKit-Input-ColorPicker-Label"}),[o,p,l,e,a]),Xe=useCallback(u=>{switch(u){case"DRAW":return jsxs(TabItem,{title:p("draw"),value:"draw",titleClassName:"PSPDFKit-Electronic-Signatures-Tab PSPDFKit-Electronic-Signatures-Tab-Draw",className:T({variant:a}),"data-blockid":"draw-tab",children:[!l&&w,jsx(FreehandCanvas,{"data-blockid":"freehand-canvas",placeholder:p("signHere"),clearLabel:p("clearSignature"),strokeColor:e.get("color"),className:ge,isInline:!l,canvasRef:A,canvasClassName:classNames(ue({variant:a}),"PSPDFKit-Electronic-Signatures-Canvas"),footerClassName:classNames(H({variant:a}),{"PSPDFKit-Electronic-Signatures-Sign-Here-Label":!k,"PSPDFKit-Electronic-Signatures-Clear-Signature-Button":k}),onChange:Y}),l&&w]},u);case"IMAGE":return jsx(TabItem,{title:p("image"),value:"image",titleClassName:"PSPDFKit-Electronic-Signatures-Tab PSPDFKit-Electronic-Signatures-Tab-Image",className:T({type:"image",variant:a}),"data-blockid":"image-tab",children:jsx(ImageDropZone,{className:classNames(he({variant:a}),"PSPDFKit-Electronic-Signatures-Image-Dropzone"),pickerButtonClassName:k?"PSPDFKit-Electronic-Signatures-Replace-Image-Button":"PSPDFKit-Electronic-Signatures-Add-Image-Button",labelClassName:ve({variant:a}),isInline:!l,"data-blockid":"image-drop-zone",onValueChange:J,placeholder:p("selectDragImage"),footerClassName:H({variant:a}),clearLabel:p("clearSignature")})},u);case"TYPE":return jsxs(TabItem,{title:p("type"),value:"type",titleClassName:"PSPDFKit-Electronic-Signatures-Tab PSPDFKit-Electronic-Signatures-Tab-Type","data-blockid":"type-tab",children:[jsxs("div",{className:T({type:"type",variant:a}),children:[!l&&w,jsx(SignatureTextInput,{inputStyle:{color:e.get("color"),fontFamily:e.get("selectedFont")},placeholder:p("signature"),onChange:m=>e.set("signature",{type:"type",value:m}),label:p("signHere"),"data-blockid":"signature-text-input",value:D.value,inputClassName:classNames(Se({variant:a}),"PSPDFKit-Electronic-Signatures-Text-Input"),className:classNames(xe({variant:a}),"PSPDFKit-Text-Input"),clearLabel:p("clearSignature"),isInline:!l,footerStyle:{padding:l?themeVars.spacing.sm:void 0},footerClassName:"PSPDFKit-Electronic-Signatures-Clear-Signature-Button"})]}),!l&&c.length!==1&&jsx(RadioGroup,{optionsContainerClassName:classNames(be,"PSPDFKit-Electronic-Signatures-Font-Families-Container"),orientation:"horizontal",className:me,items:c.map(m=>({id:m,label:D.value||p("signature")})),"data-blockid":"font-selector",value:e.get("selectedFont"),onChange:m=>e.set("selectedFont",m),optionClassName:Ce,"aria-label":p("fonts"),renderOption:(m,$e)=>jsx(Fe,{item:m,options:$e}).createComponent()}),l&&w,l&&jsx(Select,{isReadOnly:c.length===1,labelPosition:"start",label:"Font","data-blockid":"font-selector",className:O({variant:a}),placement:"bottom end",selectedKey:e.get("selectedFont"),onSelectionChange:m=>e.set("selectedFont",m),style:{fontFamily:e.get("selectedFont")},variant:"ghost",items:c.map(m=>({id:m,label:D.value||p("signature")}))})]},u)}},[p,a,l,w,e,k,Y,J,D.value,c]);return jsxs("div",{className:classNames(de({variant:a}),t),style:r,"data-blockid":C,ref:n,children:[jsxs("div",{"data-blockid":"header",className:ze({variant:a}),children:[jsx(Text,{elementType:"h3",type:"title",size:l?"sm":"md","data-blockid":"title",id:d,children:p("addSignature")}),l&&jsx(ActionIconButton,{variant:"secondary","data-blockid":"close-button",size:"md",icon:CrossIcon,onPress:s,"aria-label":p("close")})]}),l&&jsx(Separator,{}),jsx("div",{"data-blockid":"body",className:classNames(ce({variant:a}),"PSPDFKit-Electronic-Signatures-Tabs-Container"),children:jsx(Tabs,{variant:"ghost","data-blockid":"tabs",className:Ne,tabHeaderClassName:classNames(Pe({variant:a}),"PSPDFKit-Electronic-Signatures-Tabs-List"),onSelectionChange:Qe,children:z.map(u=>Xe(u))})}),l&&jsx(Separator,{}),jsxs("div",{"data-blockid":"footer",className:_e({variant:a}),children:[f?jsx(Checkbox,{"data-blockid":"save-signature-checkbox",label:p("saveSignature"),className:"PSPDFKit-Electronic-Signatures-Store-Signature-Checkbox",onChange:u=>e.set("shouldStoreSignature",u)}):jsx("div",{}),jsxs("div",{className:ye,children:[!l&&jsx(ActionButton,{"data-blockid":"cancel-button",variant:"secondary",size:"md",label:p("cancel"),onPress:s,className:"PSPDFKit-Electronic-Signatures-Cancel-Button"}),jsx(ActionButton,{"data-blockid":"done-button",onPress:()=>i({...e.toJS(),canvasSize:{width:A.current?.clientWidth||0,height:A.current?.clientHeight||0}}),label:p("done"),isDisabled:!e.get("signature"),size:"md",className:"PSPDFKit-Electronic-Signatures-Done-Button"})]})]})]})};var je=I.forwardRef(({children:t,initialState:r,state:o,onStateChange:e,...n},p)=>{let d=S({initialState:{selectedFont:n.fonts[0],color:n.colorPresets[0].color||"#000000",shouldStoreSignature:!1,...r},state:o,onChange:e}),c={...n,...d,ref:p},s=Re(c);return t?t({...c,ui:s}):s.createComponent()});je.displayName="CreateSignature";var Ke="_1yep5z69 _1yep5z6g _1yep5z6h _1yep5z6e0",Ee="_1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61j _1yep5z61k _1yep5z66 _1yep5z67 _1yep5z68 _1yep5z62i _1yep5z62j _1yep5z62k",Le="dabjfd3",R="_1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gg _1yep5z6gh _1yep5z6gi _1yep5z69l _1yep5z69m _1yep5z69n",j="dabjfd2 dabjfd0 _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z6c _1yep5z6d _1yep5z6e _1yep5z62o _1yep5z62p _1yep5z62q _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hs _1yep5z6hz _1yep5z6i0 _1yep5z6gv _1yep5z6gz _1yep5z6h0 _1yep5z6e2 _1yep5z6gj _1yep5z6gh _1yep5z6gi _1yep5z69l _1yep5z6ag _1yep5z6ah _1yep5z6jl _1yep5z6lx _1yep5z611d _1yep5z611e _1yep5z611f _1yep5z610g _1yep5z610h _1yep5z610i _1yep5z6zy _1yep5z6zz _1yep5z6100",K="dabjfd0 _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z6c _1yep5z6d _1yep5z6e _1yep5z62o _1yep5z62p _1yep5z62q _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6hs _1yep5z6hz _1yep5z6i0 _1yep5z6gv _1yep5z6gz _1yep5z6h0 _1yep5z6e2 _1yep5z6gj _1yep5z6gh _1yep5z6gi _1yep5z69l _1yep5z6ag _1yep5z6ah",Ve="dabjfd1 _1yep5z63r _1yep5z63s _1yep5z63t _1yep5z61f _1yep5z61g _1yep5z61h _1yep5z68f _1yep5z68m _1yep5z68n _1yep5z663 _1yep5z66a _1yep5z66b _1yep5z6aj _1yep5z6ar _1yep5z6az _1yep5z6b7 _1yep5z6jg _1yep5z6je _1yep5z6ex _1yep5z6g7 _1yep5z6g8 _1yep5z6g9 _1yep5z6gy _1yep5z6gz _1yep5z6h0 _1yep5z6hs _1yep5z6ht _1yep5z6hu",E="_1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z69 _1yep5z6d _1yep5z6e _1yep5z62l _1yep5z62p _1yep5z62q";function Vt(t){return lightenColor(t,80)}var Be=190,At=94,Oe=({intl:{formatMessage:t},titleId:r,className:o,state:e,device:n,onCloseRequest:p,ref:d,onCreate:c,colorPresets:s,onExistingStampPress:i,getLighterVariant:_=Vt,"data-blockid":a="create-stamp"})=>{let z=useDateFormatter({...e.get("includeDate")?{year:"2-digit",month:"2-digit",day:"2-digit"}:{},...e.get("includeTime")?{hour:"2-digit",minute:"2-digit"}:{}}),f=e.get("includeDate")||e.get("includeTime"),C=useRef(Be);return jsxs("div",{ref:d,className:o,"data-blockid":a,children:[jsxs("div",{"data-blockid":"header",className:classNames(K,"PSPDFKit-Modal-Section"),children:[jsx(Text,{elementType:"h3",id:r,"data-blockid":"title",children:t("customStamp")}),jsx(ActionButton,{size:"md","data-blockid":"stamp-presets-button",label:t("useAnExistingStampDesign"),variant:"tertiary",className:"PSPDFKit-Stamp-Dialog-Existing-Stamp-Button",onPress:i})]}),jsxs("div",{"data-blockid":"body",className:Ke,children:[jsx("div",{className:classNames(Ve,"PSPDFKit-Stamp-Editor"),children:jsx(Stamp,{"data-blockid":"stamp-preview",strokeColor:e.get("color"),fontColor:e.get("color"),fillColor:_(e.get("color")),text:e.get("text"),subText:f?z.format(new Date):void 0,height:At,minWidth:Be,onDimensionsChange:l=>{C.current=l.width;}})}),jsx(TextInput,{"data-blockid":"stamp-text-input",value:e.get("text"),className:E,label:t("stampText"),onChange:l=>e.set("text",l?.toUpperCase())}),jsx(Checkbox,{"data-blockid":"include-date-checkbox",label:t("date"),className:E,labelPosition:"start",defaultSelected:e.get("includeDate"),onChange:l=>e.set("includeDate",l)}),jsx(Checkbox,{"data-blockid":"include-time-checkbox",label:t("time"),className:E,labelPosition:"start",defaultSelected:e.get("includeTime"),onChange:l=>e.set("includeTime",l)}),jsx(ColorPresetInlineInput,{"data-blockid":"color-selector",items:s,defaultValue:e.get("color"),className:classNames(Ee,"PSPDFKit-Input-ColorPicker"),optionClassName:"PSPDFKit-Input-ColorPicker-Label PSPDFKit-Input-ColorPicker-Swatch",onChange:l=>e.set("color",l),optionsContainerClassName:Le,labelPosition:n==="mobile"?"top":"start",label:t("chooseColor")})]}),jsx("div",{"data-blockid":"footer",className:classNames(j,"PSPDFKit-Modal-Section"),children:jsxs("div",{className:R,children:[jsx(ActionButton,{size:"md",label:t("cancel"),variant:"secondary","data-blockid":"cancel-button",onPress:()=>p?.()}),jsx(ActionButton,{label:t("createStamp"),"data-blockid":"done-button",size:"md",onPress:()=>{c({text:e.get("text"),subText:f?z.format(new Date):void 0,width:C.current,color:e.get("color")});}})]})})]})};var qe=I.forwardRef(({children:t,initialState:r={},state:o,onStateChange:e,...n},p)=>{let d=I.useRef(null),c=S({ref:d,initialState:{color:n.colorPresets[0].color,includeDate:!0,includeTime:!1,...r},state:o,onChange:e}),s={...n,...c,ref:mergeRefs(p,d)},i=Oe(s);return t?t({...s,ui:i}):i.createComponent()});qe.displayName="CreateStamp";var Ge="_1dk00840 x0o33h6 _1yep5z6gd _1yep5z6ge _1yep5z6gf _1yep5z6e0 x0o33h7 _1yep5z69 _1yep5z6g _1yep5z6h _1yep5z62l _1yep5z62s _1yep5z62t _1yep5z63r _1yep5z63y _1yep5z63z _1yep5z61f _1yep5z61m _1yep5z61n _1yep5z69l _1yep5z69p _1yep5z69q";var Ye=({intl:{formatMessage:t},titleId:r,ref:o,items:e,className:n,onAdd:p,onCancel:d,onCustomStampPress:c,"data-blockid":s="create-stamp"})=>jsxs("div",{ref:o,className:n,"data-blockid":s,children:[jsxs("div",{"data-blockid":"header",className:classNames(K,"PSPDFKit-Modal-Section"),children:[jsx(Text,{elementType:"h3",id:r,"data-blockid":"title",children:t("useAnExistingStampDesign")}),jsx(ActionButton,{onPress:c,size:"md","data-blockid":"stamp-presets-button",label:t("customStamp"),variant:"tertiary",className:"PSPDFKit-Stamp-Dialog-Custom-Stamp-Button"})]}),jsx("div",{className:classNames(Ge,"PSPDFKit-Stamp-Picker"),children:e.map(({id:i,..._})=>jsx(Preview,{..._,addAriaLabel:_["aria-label"],"data-blockid":`preview-${i}`,onPress:()=>p?.(i)},i))}),jsx("div",{"data-blockid":"footer",className:classNames(j,"PSPDFKit-Modal-Section"),children:jsx("div",{className:R,children:jsx(ActionButton,{onPress:d,size:"md",label:t("cancel"),variant:"secondary","data-blockid":"cancel-button"})})})]});var Ue=I.forwardRef(({children:t,initialState:r={},state:o,onStateChange:e,...n},p)=>{let d=I.useRef(null),c=S({ref:d,initialState:r,state:o,onChange:e}),s={...n,...c,ref:mergeRefs(p,d)},i=Ye(s);return t?t({...s,ui:i}):i.createComponent()});Ue.displayName="StampsList";

export { je as CreateSignature, qe as CreateStamp, le as SignaturesList, B as SignaturesListBlock, Ue as StampsList };