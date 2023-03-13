import{_ as s,c as a,o as l,a as n}from"./app.755f10b0.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u4E0Ewebpack\u7C7B\u4F3C\u7684\u5DE5\u5177\u8FD8\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u6A21\u5757\u5316\u5DE5\u5177","slug":"\u4E00\u3001\u6A21\u5757\u5316\u5DE5\u5177","link":"#\u4E00\u3001\u6A21\u5757\u5316\u5DE5\u5177","children":[{"level":3,"title":"Rollup","slug":"rollup","link":"#rollup","children":[]},{"level":3,"title":"Parcel","slug":"parcel","link":"#parcel","children":[]},{"level":3,"title":"Snowpack","slug":"snowpack","link":"#snowpack","children":[]},{"level":3,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":3,"title":"webpack","slug":"webpack","link":"#webpack","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"webpack/Rollup_Parcel_snowpack_Vite.md","lastUpdated":1663846277000}'),p={name:"webpack/Rollup_Parcel_snowpack_Vite.md"},o=n(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u4E0Ewebpack\u7C7B\u4F3C\u7684\u5DE5\u5177\u8FD8\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u4E0Ewebpack\u7C7B\u4F3C\u7684\u5DE5\u5177\u8FD8\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u4E0Ewebpack\u7C7B\u4F3C\u7684\u5DE5\u5177\u8FD8\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/8ed8d520-b1a4-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u6A21\u5757\u5316\u5DE5\u5177" tabindex="-1">\u4E00\u3001\u6A21\u5757\u5316\u5DE5\u5177 <a class="header-anchor" href="#\u4E00\u3001\u6A21\u5757\u5316\u5DE5\u5177" aria-hidden="true">#</a></h2><p>\u6A21\u5757\u5316\u662F\u4E00\u79CD\u5904\u7406\u590D\u6742\u7CFB\u7EDF\u5206\u89E3\u4E3A\u66F4\u597D\u7684\u53EF\u7BA1\u7406\u6A21\u5757\u7684\u65B9\u5F0F</p><p>\u53EF\u4EE5\u7528\u6765\u5206\u5272\uFF0C\u7EC4\u7EC7\u548C\u6253\u5305\u5E94\u7528\u3002\u6BCF\u4E2A\u6A21\u5757\u5B8C\u6210\u4E00\u4E2A\u7279\u5B9A\u7684\u5B50\u529F\u80FD\uFF0C\u6240\u6709\u7684\u6A21\u5757\u6309\u67D0\u79CD\u65B9\u6CD5\u7EC4\u88C5\u8D77\u6765\uFF0C\u6210\u4E3A\u4E00\u4E2A\u6574\u4F53(<code>bundle</code>)</p><p>\u5728\u524D\u7AEF\u9886\u57DF\u4E2D\uFF0C\u5E76\u975E\u53EA\u6709<code>webpack</code>\u8FD9\u4E00\u6B3E\u4F18\u79C0\u7684\u6A21\u5757\u6253\u5305\u5DE5\u5177\uFF0C\u8FD8\u6709\u5176\u4ED6\u7C7B\u4F3C\u7684\u5DE5\u5177\uFF0C\u4F8B\u5982<code>Rollup</code>\u3001<code>Parcel</code>\u3001<code>snowpack</code>\uFF0C\u4EE5\u53CA\u6700\u8FD1\u98CE\u5934\u65E0\u4E24\u7684<code>Vite</code></p><p>\u901A\u8FC7\u8FD9\u4E9B\u6A21\u5757\u6253\u5305\u5DE5\u5177\uFF0C\u80FD\u591F\u63D0\u9AD8\u6211\u4EEC\u7684\u5F00\u53D1\u6548\u7387\uFF0C\u51CF\u5C11\u5F00\u53D1\u6210\u672C</p><p>\u8FD9\u91CC\u6CA1\u6709\u63D0\u53CA<code>gulp</code>\u3001<code>grunt</code>\u662F\u56E0\u4E3A\u5B83\u4EEC\u53EA\u662F\u5B9A\u4E49\u4E3A\u6784\u5EFA\u5DE5\u5177\uFF0C\u4E0D\u80FD\u7C7B\u6BD4</p><h3 id="rollup" tabindex="-1">Rollup <a class="header-anchor" href="#rollup" aria-hidden="true">#</a></h3><p><code>Rollup</code> \u662F\u4E00\u6B3E <code>ES Modules</code> \u6253\u5305\u5668\uFF0C\u4ECE\u4F5C\u7528\u4E0A\u6765\u770B\uFF0C<code>Rollup</code> \u4E0E <code>Webpack</code> \u975E\u5E38\u7C7B\u4F3C\u3002\u4E0D\u8FC7\u76F8\u6BD4\u4E8E <code>Webpack</code>\uFF0C<code>Rollup </code>\u8981\u5C0F\u5DE7\u7684\u591A</p><p>\u73B0\u5728\u5F88\u591A\u6211\u4EEC\u719F\u77E5\u7684\u5E93\u90FD\u90FD\u4F7F\u7528\u5B83\u8FDB\u884C\u6253\u5305\uFF0C\u6BD4\u5982\uFF1A<code>Vue</code>\u3001<code>React</code>\u548C<code>three.js</code>\u7B49</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/messages.js</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hi</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hey Guys, I am zce~</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ./src/logger.js</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> log </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">msg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---------- INFO ----------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">--------------------------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> error </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">msg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---------- ERROR ----------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---------------------------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ./src/index.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">log</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logger</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> messages </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./messages</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(messages</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hi)</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u901A\u8FC7<code>rollup</code>\u8FDB\u884C\u6253\u5305</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npx rollup </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">file </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">dist</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">bundle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>
<span class="line"></span></code></pre></div><p>\u6253\u5305\u7ED3\u679C\u5982\u4E0B\u56FE<img src="https://static.vue-js.com/8fe07830-b143-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4EE3\u7801\u975E\u5E38\u7B80\u6D01\uFF0C\u5B8C\u6210\u4E0D\u50CF<code>webpack</code>\u90A3\u6837\u5B58\u5728\u5927\u91CF\u5F15\u5BFC\u4EE3\u7801\u548C\u6A21\u5757\u51FD\u6570</p><p>\u5E76\u4E14<code>error</code>\u65B9\u6CD5\u7531\u4E8E\u6CA1\u6709\u88AB\u4F7F\u7528\uFF0C\u8F93\u51FA\u7684\u7ED3\u679C\u4E2D\u5E76\u65E0<code>error</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C<code>rollup</code>\u9ED8\u8BA4\u5F00\u59CB<code>Tree-shaking</code> \u4F18\u5316\u8F93\u51FA\u7ED3\u679C</p><p>\u56E0\u6B64\uFF0C\u53EF\u4EE5\u770B\u5230<code>Rollup</code>\u7684\u4F18\u70B9\uFF1A</p><ul><li>\u4EE3\u7801\u6548\u7387\u66F4\u7B80\u6D01\u3001\u6548\u7387\u66F4\u9AD8</li><li>\u9ED8\u8BA4\u652F\u6301 Tree-shaking</li></ul><p>\u4F46\u7F3A\u70B9\u4E5F\u5341\u5206\u660E\u663E\uFF0C\u52A0\u8F7D\u5176\u4ED6\u7C7B\u578B\u7684\u8D44\u6E90\u6587\u4EF6\u6216\u8005\u652F\u6301\u5BFC\u5165 <code>CommonJS</code> \u6A21\u5757\uFF0C\u53C8\u6216\u662F\u7F16\u8BD1 <code>ES</code> \u65B0\u7279\u6027\uFF0C\u8FD9\u4E9B\u989D\u5916\u7684\u9700\u6C42 <code>Rollup </code>\u9700\u8981\u4F7F\u7528\u63D2\u4EF6\u53BB\u5B8C\u6210</p><p>\u7EFC\u5408\u6765\u770B\uFF0C<code>rollup</code>\u5E76\u4E0D\u9002\u5408\u5F00\u53D1\u5E94\u7528\u4F7F\u7528\uFF0C\u56E0\u4E3A\u9700\u8981\u4F7F\u7528\u7B2C\u4E09\u65B9\u6A21\u5757\uFF0C\u800C\u76EE\u524D\u7B2C\u4E09\u65B9\u6A21\u5757\u5927\u591A\u6570\u4F7F\u7528<code>CommonJs</code>\u65B9\u5F0F\u5BFC\u51FA\u6210\u5458\uFF0C\u5E76\u4E14<code>rollup</code>\u4E0D\u652F\u6301<code>HMR</code>\uFF0C\u4F7F\u5F00\u53D1\u6548\u7387\u964D\u4F4E</p><p>\u4F46\u662F\u5728\u7528\u4E8E\u6253\u5305<code> JavaScript</code> \u5E93\u65F6\uFF0C<code>rollup</code>\u6BD4 <code>webpack</code> \u66F4\u6709\u4F18\u52BF\uFF0C\u56E0\u4E3A\u5176\u6253\u5305\u51FA\u6765\u7684\u4EE3\u7801\u66F4\u5C0F\u3001\u66F4\u5FEB\uFF0C\u5176\u5B58\u5728\u7684\u7F3A\u70B9\u53EF\u4EE5\u5FFD\u7565</p><h3 id="parcel" tabindex="-1">Parcel <a class="header-anchor" href="#parcel" aria-hidden="true">#</a></h3><p>Parcel \uFF0C\u662F\u4E00\u6B3E\u5B8C\u5168\u96F6\u914D\u7F6E\u7684\u524D\u7AEF\u6253\u5305\u5668\uFF0C\u5B83\u63D0\u4F9B\u4E86 \u201C\u50BB\u74DC\u5F0F\u201D \u7684\u4F7F\u7528\u4F53\u9A8C\uFF0C\u53EA\u9700\u4E86\u89E3\u7B80\u5355\u7684\u547D\u4EE4\uFF0C\u5C31\u80FD\u6784\u5EFA\u524D\u7AEF\u5E94\u7528\u7A0B\u5E8F</p><p><code>Parcel</code> \u8DDF <code>Webpack</code> \u4E00\u6837\u90FD\u652F\u6301\u4EE5\u4EFB\u610F\u7C7B\u578B\u6587\u4EF6\u4F5C\u4E3A\u6253\u5305\u5165\u53E3\uFF0C\u4F46\u5EFA\u8BAE\u4F7F\u7528<code>HTML</code>\u6587\u4EF6\u4F5C\u4E3A\u5165\u53E3\uFF0C\u8BE5<code>HTML</code>\u6587\u4EF6\u50CF\u5E73\u65F6\u4E00\u6837\u6B63\u5E38\u7F16\u5199\u4EE3\u7801\u3001\u5F15\u7528\u8D44\u6E90\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html </span><span style="color:#89DDFF;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Parcel Tutorials</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>main.js\u6587\u4EF6\u901A\u8FC7<code>ES Moudle</code>\u65B9\u6CD5\u5BFC\u5165\u5176\u4ED6\u6A21\u5757\u6210\u5458</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/main.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">log</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logger</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello parcel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// ./src/logger.js</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> log </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">msg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---------- INFO ----------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u4E4B\u540E\uFF0C\u4F7F\u7528\u547D\u4EE4\u6253\u5305</p><div class="language-cmd"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx parcel src/index.html</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u547D\u4EE4\u540E\uFF0C<code>Parcel</code>\u4E0D\u4EC5\u6253\u5305\u4E86\u5E94\u7528\uFF0C\u540C\u65F6\u4E5F\u542F\u52A8\u4E86\u4E00\u4E2A\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u8DDF<code>webpack Dev Server</code>\u4E00\u6837</p><p>\u8DDF<code>webpack</code>\u7C7B\u4F3C\uFF0C\u4E5F\u652F\u6301\u6A21\u5757\u70ED\u66FF\u6362\uFF0C\u4F46\u7528\u6CD5\u66F4\u7B80\u5355</p><p>\u540C\u65F6\uFF0C<code>Parcel</code>\u6709\u4E2A\u5341\u5206\u597D\u7528\u7684\u529F\u80FD\uFF1A\u652F\u6301\u81EA\u52A8\u5B89\u88C5\u4F9D\u8D56\uFF0C\u50CF<code>webpack</code>\u5F00\u53D1\u9636\u6BB5\u7A81\u7136\u4F7F\u7528\u5B89\u88C5\u67D0\u4E2A\u7B2C\u4E09\u65B9\u4F9D\u8D56\uFF0C\u5FC5\u7136\u4F1A\u7EC8\u6B62<code>dev server</code>\u7136\u540E\u5B89\u88C5\u518D\u542F\u52A8\u3002\u800C<code>Parcel</code>\u5219\u514D\u4E86\u8FD9\u7E41\u7410\u7684\u5DE5\u4F5C\u6D41\u7A0B</p><p>\u540C\u65F6\uFF0C<code>Parcel</code>\u80FD\u591F\u96F6\u914D\u7F6E\u52A0\u8F7D\u5176\u4ED6\u7C7B\u578B\u7684\u8D44\u6E90\u6587\u4EF6\uFF0C\u65E0\u987B\u50CF<code>webpack</code>\u90A3\u6837\u914D\u7F6E\u5BF9\u5E94\u7684<code>loader</code></p><p>\u6253\u5305\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-cmd"><button class="copy"></button><span class="lang">cmd</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx parcel src/index.html</span></span>
<span class="line"></span></code></pre></div><p>\u7531\u4E8E\u6253\u5305\u8FC7\u7A0B\u662F\u591A\u8FDB\u7A0B\u540C\u65F6\u5DE5\u4F5C\uFF0C\u6784\u5EFA\u901F\u5EA6\u4F1A\u6BD4<code>Webpack</code> \u5FEB\uFF0C\u8F93\u51FA\u6587\u4EF6\u4E5F\u4F1A\u88AB\u538B\u7F29\uFF0C\u5E76\u4E14\u6837\u5F0F\u4EE3\u7801\u4E5F\u4F1A\u88AB\u5355\u72EC\u63D0\u53D6\u5230\u5355\u4E2A\u6587\u4EF6\u4E2D</p><p><img src="https://static.vue-js.com/ec17e7a0-b1a2-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u53EF\u4EE5\u611F\u53D7\u5230\uFF0C<code>Parcel </code>\u7ED9\u5F00\u53D1\u8005\u4E00\u79CD\u5F88\u5927\u7684\u81EA\u7531\u5EA6\uFF0C\u53EA\u7BA1\u53BB\u5B9E\u73B0\u4E1A\u52A1\u4EE3\u7801\uFF0C\u5176\u4ED6\u4E8B\u60C5\u7528<code>Parcel</code>\u89E3\u51B3</p><h3 id="snowpack" tabindex="-1">Snowpack <a class="header-anchor" href="#snowpack" aria-hidden="true">#</a></h3><p>Snowpack\uFF0C\u662F\u4E00\u79CD\u95EA\u7535\u822C\u5FEB\u901F\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u4E13\u4E3A\u73B0\u4EE3<code>Web</code>\u8BBE\u8BA1\uFF0C\u8F83\u590D\u6742\u7684\u6253\u5305\u5DE5\u5177\uFF08\u5982<code>Webpack</code>\u6216<code>Parcel</code>\uFF09\u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u5229\u7528<code>JavaScript</code>\u7684\u672C\u673A\u6A21\u5757\u7CFB\u7EDF\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5DE5\u4F5C\u5E76\u4FDD\u6301\u6D41\u7545\u7684\u5F00\u53D1\u4F53\u9A8C</p><p>\u5F00\u53D1\u9636\u6BB5\uFF0C\u6BCF\u6B21\u4FDD\u5B58\u5355\u4E2A\u6587\u4EF6\u65F6\uFF0C<code>Webpack</code>\u548C<code>Parcel</code>\u90FD\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u548C\u91CD\u65B0\u6253\u5305\u5E94\u7528\u7A0B\u5E8F\u7684\u6574\u4E2A<code>bundle</code>\u3002\u800C<code>Snowpack</code>\u4E3A\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u6BCF\u4E2A\u6587\u4EF6\u6784\u5EFA\u4E00\u6B21\uFF0C\u5C31\u53EF\u4EE5\u6C38\u4E45\u7F13\u5B58\uFF0C\u6587\u4EF6\u66F4\u6539\u65F6\uFF0C<code>Snowpack</code>\u4F1A\u91CD\u65B0\u6784\u5EFA\u8BE5\u5355\u4E2A\u6587\u4EF6</p><p>\u4E0B\u56FE\u7ED9\u51FA<code>webpack</code>\u4E0E<code>snowpack</code>\u6253\u5305\u533A\u522B\uFF1A</p><p><img src="https://static.vue-js.com/79197830-b1a3-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5728\u91CD\u65B0\u6784\u5EFA\u6BCF\u6B21\u53D8\u66F4\u65F6\u6CA1\u6709\u4EFB\u4F55\u7684\u65F6\u95F4\u6D6A\u8D39\uFF0C\u53EA\u9700\u8981\u5728\u6D4F\u89C8\u5668\u4E2D\u8FDB\u884CHMR\u66F4\u65B0</p><h3 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h3><p>vite \uFF0C\u662F\u4E00\u79CD\u65B0\u578B\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u80FD\u591F\u663E\u8457\u63D0\u5347\u524D\u7AEF\u5F00\u53D1\u4F53\u9A8C</p><p>\u5B83\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li>\u4E00\u4E2A\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5B83\u57FA\u4E8E \u539F\u751F ES \u6A21\u5757 \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u5185\u5EFA\u529F\u80FD\uFF0C\u5982\u901F\u5EA6\u5FEB\u5230\u60CA\u4EBA\u7684 [\u6A21\u5757\u70ED\u66F4\u65B0HMR</li><li>\u4E00\u5957\u6784\u5EFA\u6307\u4EE4\uFF0C\u5B83\u4F7F\u7528 Rollup\u6253\u5305\u4F60\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u5B83\u662F\u9884\u914D\u7F6E\u7684\uFF0C\u53EF\u4EE5\u8F93\u51FA\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u4F18\u5316\u8FC7\u7684\u9759\u6001\u8D44\u6E90</li></ul><p>\u5176\u4F5C\u7528\u7C7B\u4F3C<code>webpack </code>+ <code>webpack-dev-server</code>\uFF0C\u5176\u7279\u70B9\u5982\u4E0B\uFF1A</p><ul><li>\u5FEB\u901F\u7684\u51B7\u542F\u52A8</li><li>\u5373\u65F6\u7684\u6A21\u5757\u70ED\u66F4\u65B0</li><li>\u771F\u6B63\u7684\u6309\u9700\u7F16\u8BD1</li></ul><p><code>vite</code>\u4F1A\u76F4\u63A5\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u6253\u5305\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u4E0D\u9700\u8981\u5206\u6790\u6A21\u5757\u7684\u4F9D\u8D56\u3001\u4E0D\u9700\u8981\u7F16\u8BD1\uFF0C\u56E0\u6B64\u542F\u52A8\u901F\u5EA6\u975E\u5E38\u5FEB</p><p>\u5229\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301<code>ES Module</code>\u7684\u7279\u6027\uFF0C\u5F53\u6D4F\u89C8\u5668\u8BF7\u6C42\u67D0\u4E2A\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u518D\u6839\u636E\u9700\u8981\u5BF9\u6A21\u5757\u7684\u5185\u5BB9\u8FDB\u884C\u7F16\u8BD1\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5927\u5927\u7F29\u77ED\u4E86\u7F16\u8BD1\u65F6\u95F4</p><p>\u539F\u7406\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/9f2eed30-b143-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5728\u70ED\u6A21\u5757<code>HMR</code>\u65B9\u9762\uFF0C\u5F53\u4FEE\u6539\u4E00\u4E2A\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u4EC5\u9700\u8BA9\u6D4F\u89C8\u5668\u91CD\u65B0\u8BF7\u6C42\u8BE5\u6A21\u5757\u5373\u53EF\uFF0C\u65E0\u987B\u50CF<code>webpack</code>\u90A3\u6837\u9700\u8981\u628A\u8BE5\u6A21\u5757\u7684\u76F8\u5173\u4F9D\u8D56\u6A21\u5757\u5168\u90E8\u7F16\u8BD1\u4E00\u6B21\uFF0C\u6548\u7387\u66F4\u9AD8</p><h3 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h3><p>\u76F8\u6BD4\u4E0A\u8FF0\u7684\u6A21\u5757\u5316\u5DE5\u5177\uFF0C<code>webpack</code>\u5927\u800C\u5168\uFF0C\u5F88\u591A\u5E38\u7528\u7684\u529F\u80FD\u505A\u5230\u5F00\u7BB1\u5373\u7528\u3002\u6709\u4E24\u5927\u6700\u6838\u5FC3\u7684\u7279\u70B9\uFF1A<strong>\u4E00\u5207\u7686\u6A21\u5757</strong>\u548C<strong>\u6309\u9700\u52A0\u8F7D</strong></p><p>\u4E0E\u5176\u4ED6\u6784\u5EFA\u5DE5\u5177\u76F8\u6BD4\uFF0C\u6709\u5982\u4E0B\u4F18\u52BF\uFF1A</p><ul><li>\u667A\u80FD\u89E3\u6790\uFF1A\u5BF9 CommonJS \u3001 AMD \u3001ES6 \u7684\u8BED\u6CD5\u505A\u4E86\u517C\u5BB9</li><li>\u4E07\u7269\u6A21\u5757\uFF1A\u5BF9 js\u3001css\u3001\u56FE\u7247\u7B49\u8D44\u6E90\u6587\u4EF6\u90FD\u652F\u6301\u6253\u5305</li><li>\u5F00\u7BB1\u5373\u7528\uFF1AHRM\u3001Tree-shaking\u7B49\u529F\u80FD</li><li>\u4EE3\u7801\u5206\u5272\uFF1A\u53EF\u4EE5\u5C06\u4EE3\u7801\u5207\u5272\u6210\u4E0D\u540C\u7684 chunk\uFF0C\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\uFF0C\u964D\u4F4E\u4E86\u521D\u59CB\u5316\u65F6\u95F4</li><li>\u63D2\u4EF6\u7CFB\u7EDF\uFF0C\u5177\u6709\u5F3A\u5927\u7684 Plugin \u63A5\u53E3\uFF0C\u5177\u6709\u66F4\u597D\u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027</li><li>\u6613\u4E8E\u8C03\u8BD5\uFF1A\u652F\u6301 SourceUrls \u548C SourceMaps</li><li>\u5FEB\u901F\u8FD0\u884C\uFF1Awebpack \u4F7F\u7528\u5F02\u6B65 IO \u5E76\u5177\u6709\u591A\u7EA7\u7F13\u5B58\uFF0C\u8FD9\u4F7F\u5F97 webpack \u5F88\u5FEB\u4E14\u5728\u589E\u91CF\u7F16\u8BD1\u4E0A\u66F4\u52A0\u5FEB</li><li>\u751F\u6001\u73AF\u5883\u597D\uFF1A\u793E\u533A\u66F4\u4E30\u5BCC\uFF0C\u51FA\u73B0\u7684\u95EE\u9898\u66F4\u5BB9\u6613\u89E3\u51B3</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/95684686" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/95684686</a></li><li><a href="https://cn.vitejs.dev/guide/" target="_blank" rel="noreferrer">https://cn.vitejs.dev/guide/</a></li><li><a href="https://segmentfault.com/a/1190000039370642" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000039370642</a></li></ul>`,63),e=[o];function c(t,r,D,F,d,y){return l(),a("div",null,e)}const C=s(p,[["render",c]]);export{A as __pageData,C as default};
