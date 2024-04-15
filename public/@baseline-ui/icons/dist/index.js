'use strict';

var utils = require('@react-aria/utils');
var g = require('dompurify');
var m = require('react');
var reactAria = require('react-aria');
var utils$1 = require('@baseline-ui/utils');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var g__namespace = /*#__PURE__*/_interopNamespace(g);
var m__default = /*#__PURE__*/_interopDefault(m);

var a="_1rl8ope0";var E=(e,t)=>{e.setAttribute("height",typeof t=="number"?`${t}px`:t),e.setAttribute("width",typeof t=="number"?`${t}px`:t);},x=(e,t,n)=>{let o=e.querySelector("title"),s=utils.getOwnerDocument(e);if(o)o.textContent=t,o.setAttribute("id",n);else {let r=s.createElement("title");r.textContent=t,r.setAttribute("id",n),e.prepend(r);}},T=(e,t)=>{t&&e.classList.add(t);},w=(e,t)=>{let n=t.createElement("span");n.innerHTML=g__namespace.default.sanitize(e);let o=n.querySelector("svg");return utils$1.invariant(o,"Icon: svg prop must be a valid svg string"),o},d=m__default.default.forwardRef(({size:e,title:t,className:n,style:o,...s},r)=>{let c=reactAria.useId(),u=m__default.default.useRef(null),i="svg"in s?s.svg:void 0,f=m__default.default.useMemo(()=>{if(i){let y=utils.getOwnerDocument(u.current),p=w(i,y);return e&&E(p,e),t&&x(p,t,c),T(p,n),p.outerHTML}},[i,e,t,n,c]);return jsxRuntime.jsx("span",{className:utils$1.classNames(a,n),ref:utils.mergeRefs(r,u),style:o,dangerouslySetInnerHTML:f?{__html:f}:void 0})});d.displayName="Icon";

exports.Icon = d;
