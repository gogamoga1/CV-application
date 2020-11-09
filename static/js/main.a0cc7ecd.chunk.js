(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),r=n(6),l=n.n(r),s=(n(12),n(13),n(3)),o=n(4),b=n(2),j=function(e){var t=e.formData,n=e.setFormData,c=e.htmlready,i=e.editable,r=e.className,l=function(e,a){n(Object(b.a)(Object(b.a)({},t),{},Object(o.a)({},a,e.target.value)))};return Object(a.jsxs)("div",{className:r?"".concat(r," form-container"):"form-container",children:[Object(a.jsx)("h3",{className:"block-name",children:"General information"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c((function(e){return!e}))},children:[Object(a.jsxs)("label",{htmlFor:"name",children:["Name",Object(a.jsx)("input",{id:"name",placeholder:"Your name..",onChange:function(e){return l(e,"name")},disabled:i,required:!0})]}),Object(a.jsxs)("label",{htmlFor:"email",children:["E-mail",Object(a.jsx)("input",{type:"email",id:"email",placeholder:"Your e-mail..",onChange:function(e){return l(e,"email")},disabled:i,required:!0})]}),Object(a.jsxs)("label",{htmlFor:"tel",children:["Telephone",Object(a.jsx)("input",{type:"tel",id:"tel",placeholder:"Your telephone..",onChange:function(e){return l(e,"tel")},disabled:i,required:!0})]}),Object(a.jsx)("button",{children:i?"Edit":"Submit"})]})]})},d=function(e){var t=e.formData,n=e.setFormData,c=e.htmlready,i=e.editable,r=e.className,l=function(e,a){n(Object(b.a)(Object(b.a)({},t),{},Object(o.a)({},a,e.target.value)))};return Object(a.jsxs)("div",{className:r?"".concat(r," form-container"):"form-container",children:[Object(a.jsx)("h3",{className:"block-name",children:"Practical experience"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c((function(e){return!e}))},children:[Object(a.jsxs)("label",{htmlFor:"company-name",children:["Company name",Object(a.jsx)("input",{id:"company-name",placeholder:"Your company name..",onChange:function(e){return l(e,"companyName")},disabled:i,required:!0})]}),Object(a.jsxs)("label",{htmlFor:"position-title",children:["Position title",Object(a.jsx)("input",{id:"position-title",placeholder:"Your position title..",onChange:function(e){return l(e,"positionTitle")},disabled:i,required:!0})]}),Object(a.jsxs)("label",{htmlFor:"main-tasks",children:["Your main tasks",Object(a.jsx)("textarea",{id:"main-tasks",rows:"5",cols:"33",onChange:function(e){return l(e,"mainTasks")},disabled:i,required:!0})]}),Object(a.jsxs)("label",{htmlFor:"date-working",children:["When you worked for company",Object(a.jsx)("input",{id:"date-working",type:"date",onChange:function(e){return l(e,"workingDate")},value:t.workingDate,disabled:i,required:!0})]}),Object(a.jsx)("button",{children:i?"Edit":"Submit"})]})]})},u=function(e){var t=e.formData,n=e.setFormData,c=e.htmlready,i=e.editable,r=e.className,l=function(e,a){n(Object(b.a)(Object(b.a)({},t),{},Object(o.a)({},a,e.target.value)))};return Object(a.jsxs)("div",{className:r?"".concat(r," form-container"):"form-container",children:[Object(a.jsx)("h3",{className:"block-name",children:"Educational experience"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c((function(e){return!e}))},children:[Object(a.jsxs)("label",{htmlFor:"school-name",children:["School name",Object(a.jsx)("input",{id:"school-name",value:t.schoolName,onChange:function(e){return l(e,"schoolName")},placeholder:"Your school name..",disabled:i,required:!0})]}),Object(a.jsxs)("label",{htmlFor:"study-title",children:["Title of study",Object(a.jsx)("input",{id:"position-title",value:t.studyTitle,onChange:function(e){return l(e,"studyTitle")},placeholder:"Your position title..",required:!0,disabled:i})]}),Object(a.jsxs)("label",{htmlFor:"date-study",children:["Date of study",Object(a.jsx)("input",{id:"date-working",type:"date",value:t.studyDate,onChange:function(e){return l(e,"studyDate")},required:!0,disabled:i})]}),Object(a.jsx)("button",{children:i?"Edit":"Submit"})]})]})},h=function(e){var t=e.generalData,n=e.schoolData,c=e.practicalData;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"General information"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Name:"})," ",t.name]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"E-mail:"})," ",t.email]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Telephone:"})," ",t.tel]}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"Educational experience"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"School name:"})," ",n.schoolName]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Title of study:"})," ",n.studyTitle]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Date of study:"})," ",n.studyDate]}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"Practical experience"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Company name:"})," ",c.companyName]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Position title:"})," ",c.positionTitle]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Main tasks:"})," ",c.mainTasks]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Date when worked for company:"})," ",c.workingDate]})]})},m=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),l=Object(s.a)(r,2),o=l[0],b=l[1],m=Object(c.useState)(!1),O=Object(s.a)(m,2),x=O[0],A=O[1],p=Object(c.useState)(!1),g=Object(s.a)(p,2),D=g[0],v=g[1],y=Object(c.useState)(!1),N=Object(s.a)(y,2),G=N[0],f=N[1],k=Object(c.useState)({name:"",email:"",tel:""}),T=Object(s.a)(k,2),w=T[0],C=T[1],I=Object(c.useState)({schoolName:"",studyTitle:"",studyDate:"2020-01-01"}),Y=Object(s.a)(I,2),F=Y[0],M=Y[1],E=Object(c.useState)({companyName:"",positionTitle:"",mainTasks:"",workingDate:"2020-01-01"}),Z=Object(s.a)(E,2),J=Z[0],L=Z[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{children:Object(a.jsxs)("div",{className:G?"main-form paper":"main-form",children:[G?Object(a.jsx)(h,{generalData:w,schoolData:F,practicalData:J}):Object(a.jsxs)("div",{className:"Form",children:[Object(a.jsx)(j,{htmlready:i,editable:n,formData:w,setFormData:C,className:D&&!n?"required-filling":null}),Object(a.jsx)("hr",{}),Object(a.jsx)(u,{htmlready:b,editable:o,formData:F,setFormData:M,className:D&&!o?"required-filling":null}),Object(a.jsx)("hr",{}),Object(a.jsx)(d,{htmlready:A,editable:x,formData:J,setFormData:L,className:D&&!x?"required-filling":null})]}),Object(a.jsx)("button",{className:"form-button",onClick:function(){n&&o&&x?f(!G):(v(!0),setTimeout((function(){return v(!1)}),1500))},children:G?"Edit Forms":"Generate CV"})]})})})};var O=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("h1",{className:"logo-name",children:Object(a.jsxs)("a",{href:"https://github.com/gogamoga1/CV-application",children:[Object(a.jsx)("img",{id:"github",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEzMjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTQxNEFCQzk5QTExMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMwOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTMxOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R7ClIwAADR5JREFUeNrsnQuw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",alt:"github"})," CV Application"]})})}),Object(a.jsx)(m,{})]})};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a0cc7ecd.chunk.js.map