(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(29),a(13)),i=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{name:"row"},r.a.createElement("div",{name:"col",className:"top-header"},r.a.createElement("h2",null,r.a.createElement("a",{href:"/",className:"header-link"},"Square Calculator")))),r.a.createElement("div",{name:"row",className:"pt-4"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement(o.b,{to:"/fees",className:"btn btn-secondary",activeClassName:"active"},"Fee Calculator"),r.a.createElement(o.b,{to:"/decimals",className:"btn btn-secondary",activeClassName:"active"},"Decimal Quantities"))))},s=function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{name:"row"},r.a.createElement("div",{name:"col"},r.a.createElement("div",{className:"footer"},"Square Calculator. \xa9 ",r.a.createElement("span",{id:"year-copy"})," Dylan Jhaveri. Not affiliated with Square, inc. All the code for this calculator lives here: ",r.a.createElement("a",{href:"https://github.com/dylanjha/square-calculator",target:"_blank"},"dylanjha/square-calculator")))))},m=a(7),u=a(6),d=a(10),h=a(9),f=a(11),p=function(e){return(Math.round(1e3*e/10)/100).toFixed(2)},E={"swipe/chip/contactless-pos":{name:"swipe/chip/contactless (pos)",description:"Swipe, chip, contactless or giftcard on the POS app",rate:.0275,flat:0},"swipe/chip/contactless-reg":{name:"swipe/chip/contactless (Square Register)",description:"Swipe, chip, contactless or giftcard on Square Register",rate:.025,flat:.1},"swipe/chip/contactless-terminal":{name:"swipe/chip/contactless (Terminal)",description:"Swipe, chip, contactless or giftcard on Square Terminal",rate:.026,flat:.1},cof:{name:"card on file (pos & Square Register)",description:"Card on file, for both POS app and Square Register",rate:.035,flat:.15},manual:{name:"manual entry (pos & Square Register)",description:"Manual, for both POS app and Square Register",rate:.035,flat:.15},invoice:{name:"invoice",rate:.029,flat:.3},"invoice-cof":{name:"invoice card on file",rate:.035,flat:.15},"online-store":{name:"online store",rate:.029,flat:.3},"ecommerce/api":{name:"ecommerce & api",rate:.029,flat:.3},"ecommerce/cof":{name:"ecommerce card on file",rate:.029,flat:.3}},v={"swipe/chip/contactless":{name:"swipe/chip/contactless",description:"Swipe, chip, contactless or giftcard",rate:.0265,flat:0},"interac-debit-contactless":{name:"debit (Interac - max $100)",description:"Interac debit contactless (max $100)",rate:0,flat:.1},"manual/cof":{name:"manual entry & card on file",description:"Manual",rate:.034,flat:.15},invoice:{name:"invoice",rate:.029,flat:.3},"online-store":{name:"online store",rate:.029,flat:.3},"ecommerce/api":{name:"ecommerce & api",rate:.029,flat:.3}};function g(e){var t;switch(e){case"US":t=E;break;case"CA":t=v;break;default:throw new Error("Missing country")}return t}var b=function(){function e(t,a){var n=this;Object(m.a)(this,e);var r=g(t);if(!r)throw new Error("Missing country ".concat(t));var l=r[a];if(!l)throw new Error("Missing payment method: ".concat(a));this.id=a,Object.keys(l).forEach(function(e){n[e]=l[e]})}return Object(u.a)(e,null,[{key:"allForCountry",value:function(t){var a=g(t);return Object.keys(a).map(function(a){return new e(t,a)})}}]),Object(u.a)(e,[{key:"getCalculations",value:function(e){var t=this.getPercentFee(e),a=p(e-t);return{saleAmt:"$".concat(p(e)),percentFeeLabel:"".concat(p(e)," * ").concat(this.rate," ="),percentFeeAmount:"- ".concat(p(t)),amountAfterPercentFee:"$".concat(p(a)),flatFeeLabel:"$".concat(p(this.flat)),flatFeeAmount:"- ".concat(p(this.flat)),totalFee:p(this.getFee(e)),netAmount:"$".concat(this.getNetAmount(e))}}},{key:"getPercentFee",value:function(e){return e*this.rate}},{key:"getFee",value:function(e){return this.getPercentFee(e)+this.flat}},{key:"getNetAmount",value:function(e){var t=this.getFee(e);return p(e-t)}},{key:"feeToHuman",value:function(){var e=p(100*this.rate)+"%";return this.flat&&(e+=" + $".concat(p(this.flat))),e}}]),e}();var y=function(e){var t=e.country,a=e.method;return r.a.createElement("table",{className:"table table-striped method-details-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment Method for Country: ",t),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Fee"))),r.a.createElement("tbody",null,b.allForCountry(t).map(function(e){return r.a.createElement("tr",{key:e.id,className:e.id===a?"table-success":""},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.feeToHuman()))})))},w=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.props.onChange(e)}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=b.allForCountry(this.props.country).map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)});return r.a.createElement("form",{id:"calculator-form",className:"inputs-form",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"method",style:{paddingRight:"10px"}},"Country"),r.a.createElement("span",{style:{paddingRight:"10px"}},r.a.createElement("input",{type:"radio",name:"country",value:"US",onChange:this.handleChange.bind(this),checked:"US"===this.props.country})," US"),r.a.createElement("span",{style:{paddingRight:"10px"}},r.a.createElement("input",{type:"radio",name:"country",value:"CA",onChange:this.handleChange.bind(this),checked:"CA"===this.props.country})," CA")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"method"},"Method"),r.a.createElement("select",{id:"method",className:"form-control",onChange:this.handleChange.bind(this),name:"method",defaultValue:this.props.method||""},r.a.createElement("option",{value:""}," -- select a payment method -- "),e)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"},"Sale Amount"),r.a.createElement("input",{id:"amount",type:"number",className:"form-control",onChange:this.handleChange.bind(this),name:"amount",defaultValue:this.props.amount})))}}]),t}(n.Component);var N=function(){return r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("strong",null,"Articles from Square support center:")," ",r.a.createElement("a",{href:"https://squareup.com/help/us/en/article/5068-what-are-square-s-fees",target:"_blank",rel:"noopener noreferrer"},"US fees")," & ",r.a.createElement("a",{href:"https://squareup.com/help/ca/en/article/5068-what-are-square-s-fees",target:"_blank",rel:"noopener noreferrer"},"Canada fees"))};function C(e){var t=e.saleAmt,a=e.percentFeeLabel,n=e.percentFeeAmount,l=e.amountAfterPercentFee,c=e.flatFeeLabel,o=e.flatFeeAmount,i=e.netAmount;return r.a.createElement("div",{className:"col-12 col-md-9 results-math"},r.a.createElement("table",{className:"table results-math-table"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"math-sale"},r.a.createElement("td",null),r.a.createElement("td",null,"sale"),r.a.createElement("td",null,t)),r.a.createElement("tr",{className:"math-fee"},r.a.createElement("td",null,"percent fee"),r.a.createElement("td",null,a),r.a.createElement("td",null,n)),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,l)),r.a.createElement("tr",{className:"math-fee"},r.a.createElement("td",null,"flat fee"),r.a.createElement("td",null,c),r.a.createElement("td",null,o)),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,i)))))}var S=function(e){var t,a=e.amount,n=e.country,l=e.paymentMethod;return l&&a&&(t=l.getCalculations(a)),r.a.createElement("div",{className:"row results clearfix"},r.a.createElement("div",{className:"col-12 col-md-3 results-summary"},r.a.createElement("div",null," ",n," (country) "),r.a.createElement("div",{className:"fee-line"},r.a.createElement("span",null,t?t.totalFee:"0"," "),r.a.createElement("span",{className:"fee"},"fee")),r.a.createElement("div",null,r.a.createElement("span",null,t?t.netAmount:"0"," "),r.a.createElement("span",{className:"net-amount"},"net amount"))),t?r.a.createElement(C,t):r.a.createElement("div",null))},k={method:"",country:"US",amount:0},F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state=k,a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){var t=e.target;if("country"===t.name)return t.form.reset(),this.setState(Object.assign({},k,{country:t.value}));var a="number"===t.type?Number(t.value):t.value,n={};if(!["method","amount","country"].includes(t.name))throw new Error("Unexpected onChange target name: ".concat(t.name));n[t.name]=a,this.setState(n)}},{key:"render",value:function(){var e;return console.log("debug:rendering state:",this.state),this.state.country&&this.state.method&&this.state.amount&&(e=new b(this.state.country,this.state.method)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col mt-4"},r.a.createElement("h5",{className:"text-muted"},"Calculate Square transaction fees for US & Canada."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(N,null),r.a.createElement(w,{onChange:this.onChange.bind(this),country:this.state.country,amount:this.state.amount,method:this.state.method}),r.a.createElement(S,{amount:this.state.amount,country:this.state.country,paymentMethod:e}),r.a.createElement(y,{country:this.state.country,method:this.state.method}))))}}]),t}(n.Component),A={pricePerUnit:"",numUnits:"",modifiers:[]},j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state=A,a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target,a="number"===t.type?Number(t.value):t.value,n={};n[t.name]=a,this.setState(n)}},{key:"render",value:function(){var e=this,t=this.state,a=t.pricePerUnit,n=t.numUnits,l=t.modifiers;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col mt-4"},r.a.createElement("h5",{className:"text-muted"},"Calculate Square Decimal Quantities"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("form",{className:"inputs-form",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pricePerUnit"},"Price per unit"),r.a.createElement("input",{id:"pricePerUnit",type:"number",className:"form-control",onChange:this.handleChange.bind(this),name:"pricePerUnit",defaultValue:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pricePerUnit"},"Number of units"),r.a.createElement("input",{id:"numUnits",type:"number",className:"form-control",onChange:this.handleChange.bind(this),name:"numUnits",defaultValue:n})),l.map(function(t,a){var n="modifier_".concat(a);return r.a.createElement("div",{className:"form-group",key:a},r.a.createElement("label",{htmlFor:"modifierPrice"},"Modifier ",a+1," price:"),r.a.createElement("input",{id:n,type:"number",className:"form-control",onChange:function(t){var n=e.state.modifiers;n[a]=+t.target.value,e.setState({modifiers:n})},name:"modifierPrice",defaultValue:""}))}),r.a.createElement("div",{className:"form-name"},r.a.createElement("a",{href:"javascript://",className:"btn btn-primary",onClick:function(t){var a=e.state.modifiers;a.push(0),e.setState({modifiers:a})}},"Add modifier"))))),this.renderResults)}},{key:"renderResults",get:function(){var e=this.state,t=e.pricePerUnit,a=e.numUnits,n=e.modifiers;if(!t||!a)return null;var l=t*a,c=l;return r.a.createElement("div",{className:"row results clearfix"},r.a.createElement("div",{className:"col"},"$".concat(p(t)," x ").concat(a," = $").concat(l),n.map(function(e,t){if(!e)return null;var n=e*a;return c+=n,r.a.createElement("div",{key:t},"$",p(e)," x ",a," = $",n)}),r.a.createElement("div",null,"Total: $",p(c))))}}]),t}(n.Component),O=a(17),U=a(8);a(34);console.info("REACT_APP_GA_ID","UA-109104864-1"),O.a.initialize("UA-109104864-1"),O.a.pageview(window.location.pathname+window.location.search),function(){var e=document.getElementById("year-copy");if(e){var t;try{t=(new Date).getFullYear()}catch(a){console&&console.error(a)}e.innerHTML=t}}();var q=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(U.a,{path:"/fees",component:F}),r.a.createElement(U.a,{path:"/decimals",component:j}),r.a.createElement(s,null)))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/square-calculator",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/square-calculator","/service-worker.js");P?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.e66cb5d4.chunk.js.map