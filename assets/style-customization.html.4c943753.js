import{_ as o,o as l,c,b as n,d as s,a,e as i,r as e}from"./app.bfb27956.js";const u={},r=n("h1",{id:"style-customization",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#style-customization","aria-hidden":"true"},"#"),s(" Style customization")],-1),d=n("blockquote",null,[n("p",null,[s("This is a new feature since version "),n("code",null,"1.3.11")])],-1),k={href:"https://hc200ok.github.io/vue3-easy-data-table-doc/css-variables.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"table-class-name",-1),b=i(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EasyDataTable</span>
    <span class="token attr-name">theme-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#1d90ff<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">table-class-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customize-table<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">header-text-direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">body-text-direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.customize-table</span> <span class="token punctuation">{</span>
  <span class="token property">--easy-table-border</span><span class="token punctuation">:</span> 1px solid #445269<span class="token punctuation">;</span>
  <span class="token property">--easy-table-row-border</span><span class="token punctuation">:</span> 1px solid #445269<span class="token punctuation">;</span>

  <span class="token property">--easy-table-header-font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">--easy-table-header-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">--easy-table-header-font-color</span><span class="token punctuation">:</span> #c1cad4<span class="token punctuation">;</span>
  <span class="token property">--easy-table-header-background-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>

  <span class="token property">--easy-table-header-item-padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>

  <span class="token property">--easy-table-body-even-row-font-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--easy-table-body-even-row-background-color</span><span class="token punctuation">:</span> #4c5d7a<span class="token punctuation">;</span>

  <span class="token property">--easy-table-body-row-font-color</span><span class="token punctuation">:</span> #c0c7d2<span class="token punctuation">;</span>
  <span class="token property">--easy-table-body-row-background-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>
  <span class="token property">--easy-table-body-row-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">--easy-table-body-row-font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>

  <span class="token property">--easy-table-body-row-hover-font-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>
  <span class="token property">--easy-table-body-row-hover-background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>

  <span class="token property">--easy-table-body-item-padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>

  <span class="token property">--easy-table-footer-background-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>
  <span class="token property">--easy-table-footer-font-color</span><span class="token punctuation">:</span> #c0c7d2<span class="token punctuation">;</span>
  <span class="token property">--easy-table-footer-font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">--easy-table-footer-padding</span><span class="token punctuation">:</span> 0px 10px<span class="token punctuation">;</span>
  <span class="token property">--easy-table-footer-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

  <span class="token property">--easy-table-rows-per-page-selector-width</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
  <span class="token property">--easy-table-rows-per-page-selector-option-padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--easy-table-rows-per-page-selector-z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>


  <span class="token property">--easy-table-scrollbar-track-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>
  <span class="token property">--easy-table-scrollbar-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>
  <span class="token property">--easy-table-scrollbar-thumb-color</span><span class="token punctuation">:</span> #4c5d7a<span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token property">--easy-table-scrollbar-corner-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>

  <span class="token property">--easy-table-loading-mask-background-color</span><span class="token punctuation">:</span> #2d3a4f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m={href:"https://codesandbox.io/s/style-customization-0plwsy?file=/src/App.vue",target:"_blank",rel:"noopener noreferrer"},y=n("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit on CodeSandbox"},null,-1);function h(g,f){const t=e("ExternalLinkIcon"),p=e("StyleCustomization");return l(),c("div",null,[r,d,n("p",null,[s("Custom table style by using "),n("a",k,[s("css variables"),a(t)]),s(" with "),v,s(" prop.")]),b,n("p",null,[n("a",m,[y,a(t)])]),a(p)])}var _=o(u,[["render",h],["__file","style-customization.html.vue"]]);export{_ as default};
