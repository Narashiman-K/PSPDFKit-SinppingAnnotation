'use strict';

var color = require('@react-stately/color');

/**
 * Copyright (c) 2023-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 */
function a(t,n){if(!t)throw new Error(n||"Invariant failed")}function l(...t){let n=t.filter(Boolean),e=[];for(let r of n)if(Array.isArray(r))e.push(l(...r));else if(typeof r=="object"){let o=Object.keys(r);for(let i of o)r[i]&&e.push(i);}else typeof r=="string"&&e.push(r);return e.join(" ")}function b(t,n){if(!t)return null;if(typeof t=="string")return n.querySelector(t);if(t instanceof HTMLElement)return t;if("current"in t)return t.current}function f({text:t,fontSize:n,fontFamily:e="Arial",fontWeight:r="normal",fontStyle:o="normal"}){let c=document.createElement("canvas").getContext("2d");if(!c)return {width:0,height:0};c.font=`${o} ${r} ${n}px ${e}`;let s=c.measureText(t);return {width:s.width,height:s.actualBoundingBoxAscent+s.actualBoundingBoxDescent}}function y({text:t,maxWidth:n,initialFontSize:e=50,fontFamily:r="Arial",fontWeight:o="normal",fontStyle:i="normal"}){let{width:c}=f({text:t,fontSize:e,fontFamily:r,fontWeight:o,fontStyle:i}),s=e,u=c;for(;u>n;)s-=.5,u=f({text:t,fontSize:s,fontFamily:r,fontWeight:o,fontStyle:i}).width;return Math.max(s,1)}function m(t,n,e,r){return [(t+e)/2,(n+r)/2]}function w(t){if(!t.length)return "";let n=["M",...t[0],"Q"];for(let e=0;e<t.length;e++){let[r,o]=t[e],[i,c]=t[(e+1)%t.length],s=m(r,o,i,c);n=[...n,r,o,...s];}return n.push("Z"),n.join(" ")}function g(t){return t.split("/").pop()?.split(".").shift()}function S(t){let n={};for(let e of Object.keys(t)){let r=g(e)??"";n[r]=t[e];}return n}function P(t){return Object.fromEntries(Object.entries(t).filter(([,n])=>!!n))}function $(t,n){a(n>=0&&n<=100,"Percent must be between 0 and 100");let e=color.parseColor(t),r=e.getChannelValue("red"),o=e.getChannelValue("green"),i=e.getChannelValue("blue"),c=Math.round(r+(255-r)*n/100),s=Math.round(o+(255-o)*n/100),u=Math.round(i+(255-i)*n/100);return `#${c.toString(16)}${s.toString(16)}${u.toString(16)}`}function d(t,n){if(t=t.trim(),t.includes(" "))return !1;try{return new URL(t),!0}catch{return n?d(`https://${t}`):!1}}

exports.calculateFontSizeToFitWidth = y;
exports.classNames = l;
exports.cleanKeyFromGlobImport = S;
exports.filterTruthyValues = P;
exports.getHTMLElement = b;
exports.getSvgPathFromStroke = w;
exports.getTextDimensions = f;
exports.invariant = a;
exports.isUrl = d;
exports.lightenColor = $;
