import{_ as c,o as l,c as u,b as n,d as s,a,e as p,r as t}from"./app.bfb27956.js";const i={},k=p('<h1 id="single-field-sorting" tabindex="-1"><a class="header-anchor" href="#single-field-sorting" aria-hidden="true">#</a> Single field sorting</h1><p>Use <code>sort-by</code> and <code>sort-type</code> props to determine the initial sorting field and sorting type (&#39;asc&#39; or &#39;desc&#39;).</p><p>Set <code>sortable</code> property <code>true</code> in header items to make the corresponding columns sortable. If you add <code>sortable</code> properties in multi header items, you can select a different column to sort the table on.</p>',3),d=n("strong",null,"Attention",-1),g={href:"https://hc200ok.github.io/vue3-easy-data-table-doc/features/server-side-paginate-and-sort.html",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EasyDataTable</span>
    <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>headers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:sort-by</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sortBy<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:sort-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sortType<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Item<span class="token punctuation">,</span> SortType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-easy-data-table&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sortBy <span class="token operator">=</span> <span class="token string">&quot;weight&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">sortType</span><span class="token operator">:</span> SortType <span class="token operator">=</span> <span class="token string">&quot;desc&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> Header<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;PLAYER&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;player&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;TEAM&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;team&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;NUMBER&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;POSITION&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;position&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;HEIGHT&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;height&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;WEIGHT (lbs)&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;weight&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;LAST ATTENDED&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;lastAttended&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;COUNTRY&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;country&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">items</span><span class="token operator">:</span> Item<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token string-property property">&quot;player&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Stephen Curry&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;team&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GSW&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&#39;G&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&#39;6-2&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">185</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;lastAttended&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Davidson&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;country&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USA&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string-property property">&quot;player&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lebron James&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;team&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LAL&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&#39;6-9&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;lastAttended&quot;</span><span class="token operator">:</span> <span class="token string">&quot;St. Vincent-St. Mary HS (OH)&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;country&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USA&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string-property property">&quot;player&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kevin Durant&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;team&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BKN&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&#39;6-10&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;lastAttended&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Texas-Austin&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;country&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USA&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string-property property">&quot;player&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Giannis Antetokounmpo&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;team&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIL&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&#39;6-11&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">242</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;lastAttended&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Filathlitikos&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;country&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Greece&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y={href:"https://codesandbox.io/s/single-field-sorting-rjniui?file=/src/App.vue",target:"_blank",rel:"noopener noreferrer"},q=n("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit on CodeSandbox"},null,-1),m=p(`<h1 id="update-sort-event" tabindex="-1"><a class="header-anchor" href="#update-sort-event" aria-hidden="true">#</a> update-sort event</h1><p><code>update-sort</code> event emits when sort type or sort filed change. The argument of the event includes the new sort type and sort filed.</p><h2 id="type-declaration-of-event-argument" tabindex="-1"><a class="header-anchor" href="#type-declaration-of-event-argument" aria-hidden="true">#</a> Type declaration of event argument</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UpdateSortArgument</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  sortType<span class="token operator">:</span> SortType <span class="token operator">|</span> <span class="token keyword">null</span>
  sortBy<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EasyDataTable</span>
    <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>headers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@update-sort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateSort<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
  New sort options:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>new-sort<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> type <span class="token punctuation">{</span> UpdateSortArgument <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-easy-data-table&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">updateSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">sortOptions</span><span class="token operator">:</span> UpdateSortArgument</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;new-sort&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>sortOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// omit</span>
<span class="token comment">// ...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(h,f){const e=t("ExternalLinkIcon"),o=t("SingleFieldSorting"),r=t("UpdateSortEvent");return l(),u("div",null,[k,n("blockquote",null,[n("p",null,[s("\u26A0\uFE0F "),d,s(": Single field sorting is only available in client-side mode. In server-side mode, you need to request sorted data from server when you navigate to a new page. Click "),n("a",g,[s("here"),a(e)]),s(" to check more information about server-side mode.")])]),v,n("p",null,[n("a",y,[q,a(e)])]),a(o),m,a(r)])}var x=c(i,[["render",b],["__file","single-field-sorting.html.vue"]]);export{x as default};
