import{j as n}from"./app.bfb27956.js";function s(r){const t=n(()=>{var e;return(e=r.value)==null?void 0:e.currentPageFirstIndex}),i=n(()=>{var e;return(e=r.value)==null?void 0:e.currentPageLastIndex}),a=n(()=>{var e;return(e=r.value)==null?void 0:e.clientItemsLength}),u=n(()=>{var e;return(e=r.value)==null?void 0:e.maxPaginationNumber}),v=n(()=>{var e;return(e=r.value)==null?void 0:e.currentPaginationNumber}),o=n(()=>{var e;return(e=r.value)==null?void 0:e.isFirstPage}),P=n(()=>{var e;return(e=r.value)==null?void 0:e.isLastPage});return{currentPageFirstIndex:t,currentPageLastIndex:i,clientItemsLength:a,maxPaginationNumber:u,currentPaginationNumber:v,isFirstPage:o,isLastPage:P,nextPage:()=>{var e;(e=r.value)==null||e.nextPage()},prevPage:()=>{var e;(e=r.value)==null||e.prevPage()},updatePage:e=>{var l;(l=r.value)==null||l.updatePage(e)}}}function c(r){const t=n(()=>{var a;return(a=r.value)==null?void 0:a.rowsPerPageOptions}),i=n(()=>{var a;return(a=r.value)==null?void 0:a.rowsPerPageActiveOption});return{rowsPerPageOptions:t,rowsPerPageActiveOption:i,updateRowsPerPageActiveOption:a=>{var u;(u=r.value)==null||u.updateRowsPerPageActiveOption(a)}}}export{c as w,s as x};