import{_ as s,c as n,o as a,a as l}from"./app.755f10b0.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u94FE\u8868\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u64CD\u4F5C","slug":"\u4E8C\u3001\u64CD\u4F5C","link":"#\u4E8C\u3001\u64CD\u4F5C","children":[{"level":3,"title":"\u904D\u5386","slug":"\u904D\u5386","link":"#\u904D\u5386","children":[]},{"level":3,"title":"\u63D2\u5165","slug":"\u63D2\u5165","link":"#\u63D2\u5165","children":[]},{"level":3,"title":"\u5220\u9664","slug":"\u5220\u9664","link":"#\u5220\u9664","children":[]}]},{"level":2,"title":"\u4E09\u3001\u5E94\u7528\u573A\u666F","slug":"\u4E09\u3001\u5E94\u7528\u573A\u666F","link":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"algorithm/Linked List.md","lastUpdated":1663896216000}'),p={name:"algorithm/Linked List.md"},e=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u94FE\u8868\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u94FE\u8868\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u94FE\u8868\u7684\u7406\u89E3\uFF1F\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/d6638dd0-1c76-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u94FE\u8868\uFF08Linked List\uFF09\u662F\u4E00\u79CD\u7269\u7406\u5B58\u50A8\u5355\u5143\u4E0A\u975E\u8FDE\u7EED\u3001\u975E\u987A\u5E8F\u7684\u5B58\u50A8\u7ED3\u6784\uFF0C\u6570\u636E\u5143\u7D20\u7684\u903B\u8F91\u987A\u5E8F\u662F\u901A\u8FC7\u94FE\u8868\u4E2D\u7684\u6307\u9488\u94FE\u63A5\u6B21\u5E8F\u5B9E\u73B0\u7684\uFF0C\u7531\u4E00\u7CFB\u5217\u7ED3\u70B9\uFF08\u94FE\u8868\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u79F0\u4E3A\u7ED3\u70B9\uFF09\u7EC4\u6210</p><p>\u6BCF\u4E2A\u7ED3\u70B9\u5305\u62EC\u4E24\u4E2A\u90E8\u5206\uFF1A\u4E00\u4E2A\u662F\u5B58\u50A8\u6570\u636E\u5143\u7D20\u7684\u6570\u636E\u57DF\uFF0C\u53E6\u4E00\u4E2A\u662F\u5B58\u50A8\u4E0B\u4E00\u4E2A\u7ED3\u70B9\u5730\u5740\u7684\u6307\u9488\u57DF</p><p><img src="https://static.vue-js.com/e4e93490-1c76-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u8282\u70B9\u7528\u4EE3\u7801\u8868\u793A\uFF0C\u5219\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Node</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>data \u8868\u793A\u8282\u70B9\u5B58\u653E\u7684\u6570\u636E</li><li>next \u8868\u793A\u4E0B\u4E00\u4E2A\u8282\u70B9\u6307\u5411\u7684\u5185\u5B58\u7A7A\u95F4</li></ul><p>\u76F8\u6BD4\u4E8E\u7EBF\u6027\u8868\u987A\u5E8F\u7ED3\u6784\uFF0C\u64CD\u4F5C\u590D\u6742\u3002\u7531\u4E8E\u4E0D\u5FC5\u987B\u6309\u987A\u5E8F\u5B58\u50A8\uFF0C\u94FE\u8868\u5728\u63D2\u5165\u7684\u65F6\u5019\u53EF\u4EE5\u8FBE\u5230<code>O(1)</code>\u7684\u590D\u6742\u5EA6\uFF0C\u6BD4\u53E6\u4E00\u79CD\u7EBF\u6027\u8868\u987A\u5E8F\u8868\u5FEB\u5F97\u591A\uFF0C\u4F46\u662F\u67E5\u627E\u4E00\u4E2A\u8282\u70B9\u6216\u8005\u8BBF\u95EE\u7279\u5B9A\u7F16\u53F7\u7684\u8282\u70B9\u5219\u9700\u8981O(n)\u7684\u65F6\u95F4\uFF0C\u800C\u7EBF\u6027\u8868\u548C\u987A\u5E8F\u8868\u76F8\u5E94\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5206\u522B\u662F<code>O(logn)</code>\u548C<code>O(1)</code></p><p>\u94FE\u8868\u7684\u7ED3\u6784\u4E5F\u5341\u5206\u591A\uFF0C\u5E38\u89C1\u7684\u6709\u56DB\u79CD\u5F62\u5F0F\uFF1A</p><ul><li>\u5355\u94FE\u8868\uFF1A\u9664\u4E86\u5934\u8282\u70B9\u548C\u5C3E\u8282\u70B9\uFF0C\u5176\u4ED6\u8282\u70B9\u53EA\u5305\u542B\u4E00\u4E2A\u540E\u7EE7\u6307\u9488</li><li>\u5FAA\u73AF\u94FE\u8868\uFF1A\u8DDF\u5355\u94FE\u8868\u552F\u4E00\u7684\u533A\u522B\u5C31\u5728\u4E8E\u5B83\u7684\u5C3E\u7ED3\u70B9\u53C8\u6307\u56DE\u4E86\u94FE\u8868\u7684\u5934\u7ED3\u70B9\uFF0C\u9996\u5C3E\u76F8\u8FDE\uFF0C\u5F62\u6210\u4E86\u4E00\u4E2A\u73AF</li><li>\u53CC\u5411\u94FE\u8868\uFF1A\u6BCF\u4E2A\u7ED3\u70B9\u5177\u6709\u4E24\u4E2A\u65B9\u5411\u6307\u9488\uFF0C\u540E\u7EE7\u6307\u9488(next)\u6307\u5411\u540E\u9762\u7684\u7ED3\u70B9\uFF0C\u524D\u9A71\u6307\u9488(prev)\u6307\u5411\u524D\u9762\u7684\u7ED3\u70B9\uFF0C\u5176\u4E2D\u8282\u70B9\u7684\u524D\u9A71\u6307\u9488\u548C\u5C3E\u7ED3\u70B9\u7684\u540E\u7EE7\u6307\u9488\u5747\u6307\u5411\u7A7A\u5730\u5740NULL</li><li>\u53CC\u5411\u5FAA\u73AF\u94FE\u8868\uFF1A\u8DDF\u53CC\u5411\u94FE\u8868\u57FA\u672C\u4E00\u81F4\uFF0C\u4E0D\u8FC7\u5934\u8282\u70B9\u524D\u9A71\u6307\u9488\u6307\u5411\u5C3E\u8FF9\u8BF6\u5355\u548C\u5C3E\u8282\u70B9\u7684\u540E\u7EE7\u6307\u9488\u6307\u5411\u5934\u8282\u70B9</li></ul><h2 id="\u4E8C\u3001\u64CD\u4F5C" tabindex="-1">\u4E8C\u3001\u64CD\u4F5C <a class="header-anchor" href="#\u4E8C\u3001\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u94FE\u8868\u7684\u64CD\u4F5C\u53EF\u4EE5\u4E3B\u8981\u5206\u6210\u5982\u4E0B\uFF1A</p><ul><li>\u904D\u5386</li><li>\u63D2\u5165</li><li>\u5220\u9664</li></ul><h3 id="\u904D\u5386" tabindex="-1">\u904D\u5386 <a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a></h3><p>\u904D\u5386\u5F88\u597D\u7406\u89E3\uFF0C\u5C31\u662F\u6839\u636E<code>next</code>\u6307\u9488\u904D\u5386\u4E0B\u53BB\uFF0C\u76F4\u5230\u4E3A<code>null</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> current </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> head</span></span>
<span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;">(current)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u63D2\u5165" tabindex="-1">\u63D2\u5165 <a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a></h3><p>\u5411\u94FE\u8868\u4E2D\u95F4\u63D2\u5165\u4E00\u4E2A\u5143\u7D20\uFF0C\u53EF\u4EE5\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/f5fe5fd0-1c76-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u63D2\u5165\u8282\u70B9\u53EF\u4EE5\u5206\u6210\u5982\u4E0B\u6B65\u9AA4\uFF1A</p><ul><li><p>\u5B58\u50A8\u63D2\u5165\u4F4D\u7F6E\u7684\u524D\u4E00\u4E2A\u8282\u70B9</p></li><li><p>\u5B58\u50A8\u63D2\u5165\u4F4D\u7F6E\u7684\u540E\u4E00\u4E2A\u8282\u70B9</p></li><li><p>\u5C06\u63D2\u5165\u4F4D\u7F6E\u7684\u524D\u4E00\u4E2A\u8282\u70B9\u7684 next \u6307\u5411\u63D2\u5165\u8282\u70B9</p></li><li><p>\u5C06\u63D2\u5165\u8282\u70B9\u7684 next \u6307\u5411\u524D\u9762\u5B58\u50A8\u7684 next \u8282\u70B9</p></li></ul><p>\u76F8\u5173\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> current </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> head</span></span>
<span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (current </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> position)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pervious</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">pervious</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> current</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u5728\u5934\u8282\u70B9\u8FDB\u884C\u63D2\u5165\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u4F1A\u5B9E\u73B0<code>previousNode</code>\u8282\u70B9\u4E3A<code>undefined</code>\uFF0C\u4E0D\u9002\u5408\u4E0A\u8FF0\u65B9\u5F0F</p><p>\u89E3\u653E\u65B9\u5F0F\u53EF\u4EE5\u662F\u5728\u5934\u8282\u70B9\u524D\u9762\u6DFB\u52A0\u4E00\u4E2A\u865A\u62DF\u5934\u8282\u70B9\uFF0C\u4FDD\u8BC1\u63D2\u5165\u884C\u4E3A\u4E00\u81F4</p><h3 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h3><p>\u5411\u94FE\u8868\u4EFB\u610F\u4F4D\u7F6E\u5220\u9664\u8282\u70B9\uFF0C\u5982\u4E0B\u56FE\u64CD\u4F5C\uFF1A</p><p><img src="https://static.vue-js.com/0160cd90-1c77-11ec-a752-75723a64e8f5.png" alt=""></p><p>\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\u5220\u9664\u8282\u70B9\u7684\u6B65\u9AA4\u4E3A\u5982\u4E0B\uFF1A</p><ul><li>\u83B7\u53D6\u5220\u9664\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9</li><li>\u83B7\u53D6\u5220\u9664\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u8282\u70B9</li><li>\u5C06\u524D\u4E00\u4E2A\u8282\u70B9\u7684 next \u6307\u5411\u540E\u4E00\u4E2A\u8282\u70B9</li><li>\u5411\u5220\u9664\u8282\u70B9\u7684 next \u6307\u5411\u4E3Anull</li></ul><p>\u5982\u679C\u60F3\u8981\u5220\u9664\u5236\u5B9A\u7684\u8282\u70B9\uFF0C\u793A\u610F\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (current </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> node)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pervious</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">nextNode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">pervious</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nextNode</span></span>
<span class="line"></span></code></pre></div><p>\u540C\u6837\u5982\u4F55\u5E0C\u671B\u5220\u9664\u8282\u70B9\u5904\u7406\u884C\u4E3A\u4E00\u81F4\uFF0C\u53EF\u4EE5\u5728\u5934\u8282\u70B9\u524D\u9762\u6DFB\u52A0\u4E00\u4E2A\u865A\u62DF\u5934\u8282\u70B9</p><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1">\u4E09\u3001\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u7F13\u5B58\u662F\u4E00\u79CD\u63D0\u9AD8\u6570\u636E\u8BFB\u53D6\u6027\u80FD\u7684\u6280\u672F\uFF0C\u5728\u786C\u4EF6\u8BBE\u8BA1\u3001\u8F6F\u4EF6\u5F00\u53D1\u4E2D\u90FD\u6709\u7740\u975E\u5E38\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u6BD4\u5982\u5E38\u89C1\u7684<code>CPU</code>\u7F13\u5B58\u3001\u6570\u636E\u5E93\u7F13\u5B58\u3001\u6D4F\u89C8\u5668\u7F13\u5B58\u7B49\u7B49</p><p>\u5F53\u7F13\u5B58\u7A7A\u95F4\u88AB\u7528\u6EE1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u4F7F\u7528<code>LRU</code>\u6700\u8FD1\u6700\u597D\u4F7F\u7528\u7B56\u7565\u53BB\u6E05\u695A\uFF0C\u800C\u5B9E\u73B0<code>LRU</code>\u7B97\u6CD5\u7684\u6570\u636E\u7ED3\u6784\u662F\u94FE\u8868\uFF0C\u601D\u8DEF\u5982\u4E0B\uFF1A</p><p>\u7EF4\u62A4\u4E00\u4E2A\u6709\u5E8F\u5355\u94FE\u8868\uFF0C\u8D8A\u9760\u8FD1\u94FE\u8868\u5C3E\u90E8\u7684\u7ED3\u70B9\u662F\u8D8A\u65E9\u4E4B\u524D\u8BBF\u95EE\u7684\u3002\u5F53\u6709\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u88AB\u8BBF\u95EE\u65F6\uFF0C\u6211\u4EEC\u4ECE\u94FE\u8868\u5934\u90E8\u5F00\u59CB\u987A\u5E8F\u904D\u5386\u94FE\u8868</p><ul><li>\u5982\u679C\u6B64\u6570\u636E\u4E4B\u524D\u5DF2\u7ECF\u88AB\u7F13\u5B58\u5728\u94FE\u8868\u4E2D\u4E86\uFF0C\u6211\u4EEC\u904D\u5386\u5F97\u5230\u8FD9\u4E2A\u6570\u636E\u7684\u5BF9\u5E94\u7ED3\u70B9\uFF0C\u5E76\u5C06\u5176\u4ECE\u539F\u6765\u7684\u4F4D\u7F6E\u5220\u9664\uFF0C\u5E76\u63D2\u5165\u5230\u94FE\u8868\u5934\u90E8</li><li>\u5982\u679C\u6B64\u6570\u636E\u6CA1\u5728\u7F13\u5B58\u94FE\u8868\u4E2D <ul><li>\u5982\u679C\u6B64\u65F6\u7F13\u5B58\u672A\u6EE1\uFF0C\u53EF\u76F4\u63A5\u5728\u94FE\u8868\u5934\u90E8\u63D2\u5165\u65B0\u8282\u70B9\u5B58\u50A8\u6B64\u6570\u636E</li><li>\u5982\u679C\u6B64\u65F6\u7F13\u5B58\u5DF2\u6EE1\uFF0C\u5219\u5220\u9664\u94FE\u8868\u5C3E\u90E8\u8282\u70B9\uFF0C\u518D\u5728\u94FE\u8868\u5934\u90E8\u63D2\u5165\u65B0\u8282\u70B9</li></ul></li></ul><p>\u7531\u4E8E\u94FE\u8868\u63D2\u5165\u5220\u9664\u6548\u7387\u6781\u9AD8\uFF0C\u8FBE\u5230O(1)\u3002\u5BF9\u4E8E\u4E0D\u9700\u8981\u641C\u7D22\u4F46\u53D8\u52A8\u9891\u7E41\u4E14\u65E0\u6CD5\u9884\u77E5\u6570\u91CF\u4E0A\u9650\u7684\u6570\u636E\u7684\u60C5\u51B5\u7684\u65F6\u5019\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528\u94FE\u8868</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://zh.wikipedia.org/zh-hans/%E9%93%BE%E8%A1%A8" target="_blank" rel="noreferrer">https://zh.wikipedia.org/zh-hans/\u94FE\u8868</a></li><li><a href="https://mah93.github.io/2019/07/19/js-linked/" target="_blank" rel="noreferrer">https://mah93.github.io/2019/07/19/js-linked/</a></li></ul>`,43),o=[e];function t(c,r,i,D,y,F){return a(),n("div",null,o)}const C=s(p,[["render",t]]);export{A as __pageData,C as default};
