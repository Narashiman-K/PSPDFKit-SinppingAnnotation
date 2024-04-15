import { getOwnerDocument, mergeRefs } from '@react-aria/utils';
import * as g from 'dompurify';
import m from 'react';
import { useId } from 'react-aria';
import { classNames, invariant } from '@baseline-ui/utils';
import { jsx } from 'react/jsx-runtime';

var a="_1rl8ope0";var E=(e,t)=>{e.setAttribute("height",typeof t=="number"?`${t}px`:t),e.setAttribute("width",typeof t=="number"?`${t}px`:t);},x=(e,t,n)=>{let o=e.querySelector("title"),s=getOwnerDocument(e);if(o)o.textContent=t,o.setAttribute("id",n);else {let r=s.createElement("title");r.textContent=t,r.setAttribute("id",n),e.prepend(r);}},T=(e,t)=>{t&&e.classList.add(t);},w=(e,t)=>{let n=t.createElement("span");n.innerHTML=g.default.sanitize(e);let o=n.querySelector("svg");return invariant(o,"Icon: svg prop must be a valid svg string"),o},d=m.forwardRef(({size:e,title:t,className:n,style:o,...s},r)=>{let c=useId(),u=m.useRef(null),i="svg"in s?s.svg:void 0,f=m.useMemo(()=>{if(i){let y=getOwnerDocument(u.current),p=w(i,y);return e&&E(p,e),t&&x(p,t,c),T(p,n),p.outerHTML}},[i,e,t,n,c]);return jsx("span",{className:classNames(a,n),ref:mergeRefs(r,u),style:o,dangerouslySetInnerHTML:f?{__html:f}:void 0})});d.displayName="Icon";

export { d as Icon };
