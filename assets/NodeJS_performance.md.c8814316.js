import{_ as s,c as a,o as n,a as l}from"./app.755f10b0.js";const i=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1ANode\u6027\u80FD\u5982\u4F55\u8FDB\u884C\u76D1\u63A7\u4EE5\u53CA\u4F18\u5316\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001 \u662F\u4EC0\u4E48","slug":"\u4E00\u3001-\u662F\u4EC0\u4E48","link":"#\u4E00\u3001-\u662F\u4EC0\u4E48","children":[{"level":3,"title":"CPU","slug":"cpu","link":"#cpu","children":[]},{"level":3,"title":"\u5185\u5B58\u6307\u6807","slug":"\u5185\u5B58\u6307\u6807","link":"#\u5185\u5B58\u6307\u6807","children":[]},{"level":3,"title":"\u78C1\u76D8 I/O","slug":"\u78C1\u76D8-i-o","link":"#\u78C1\u76D8-i-o","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u5982\u4F55\u76D1\u63A7","slug":"\u4E8C\u3001\u5982\u4F55\u76D1\u63A7","link":"#\u4E8C\u3001\u5982\u4F55\u76D1\u63A7","children":[]},{"level":2,"title":"\u4E09\u3001\u5982\u4F55\u4F18\u5316","slug":"\u4E09\u3001\u5982\u4F55\u4F18\u5316","link":"#\u4E09\u3001\u5982\u4F55\u4F18\u5316","children":[{"level":3,"title":"\u4F7F\u7528\u6700\u65B0\u7248\u672CNode.js","slug":"\u4F7F\u7528\u6700\u65B0\u7248\u672Cnode-js","link":"#\u4F7F\u7528\u6700\u65B0\u7248\u672Cnode-js","children":[]},{"level":3,"title":"\u6B63\u786E\u4F7F\u7528\u6D41 Stream","slug":"\u6B63\u786E\u4F7F\u7528\u6D41-stream","link":"#\u6B63\u786E\u4F7F\u7528\u6D41-stream","children":[]},{"level":3,"title":"\u4EE3\u7801\u5C42\u9762\u4F18\u5316","slug":"\u4EE3\u7801\u5C42\u9762\u4F18\u5316","link":"#\u4EE3\u7801\u5C42\u9762\u4F18\u5316","children":[]},{"level":3,"title":"\u5185\u5B58\u7BA1\u7406\u4F18\u5316","slug":"\u5185\u5B58\u7BA1\u7406\u4F18\u5316","link":"#\u5185\u5B58\u7BA1\u7406\u4F18\u5316","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"NodeJS/performance.md","lastUpdated":1663851979000}'),p={name:"NodeJS/performance.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1Anode\u6027\u80FD\u5982\u4F55\u8FDB\u884C\u76D1\u63A7\u4EE5\u53CA\u4F18\u5316\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1ANode\u6027\u80FD\u5982\u4F55\u8FDB\u884C\u76D1\u63A7\u4EE5\u53CA\u4F18\u5316\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1Anode\u6027\u80FD\u5982\u4F55\u8FDB\u884C\u76D1\u63A7\u4EE5\u53CA\u4F18\u5316\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/bb37dae0-d179-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001-\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001 \u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><code>Node</code>\u4F5C\u4E3A\u4E00\u95E8\u670D\u52A1\u7AEF\u8BED\u8A00\uFF0C\u6027\u80FD\u65B9\u9762\u5C24\u4E3A\u91CD\u8981\uFF0C\u5176\u8861\u91CF\u6307\u6807\u4E00\u822C\u6709\u5982\u4E0B\uFF1A</p><ul><li>CPU</li><li>\u5185\u5B58</li><li>I/O</li><li>\u7F51\u7EDC</li></ul><h3 id="cpu" tabindex="-1">CPU <a class="header-anchor" href="#cpu" aria-hidden="true">#</a></h3><p>\u4E3B\u8981\u5206\u6210\u4E86\u4E24\u90E8\u5206\uFF1A</p><ul><li>CPU\u8D1F\u8F7D\uFF1A\u5728\u67D0\u4E2A\u65F6\u95F4\u6BB5\u5185\uFF0C\u5360\u7528\u4EE5\u53CA\u7B49\u5F85CPU\u7684\u8FDB\u7A0B\u603B\u6570</li><li>CPU\u4F7F\u7528\u7387\uFF1ACPU\u65F6\u95F4\u5360\u7528\u72B6\u51B5\uFF0C\u7B49\u4E8E 1 - \u7A7A\u95F2CPU\u65F6\u95F4(idle time) / CPU\u603B\u65F6\u95F4</li></ul><p>\u8FD9\u4E24\u4E2A\u6307\u6807\u90FD\u662F\u7528\u6765\u8BC4\u4F30\u7CFB\u7EDF\u5F53\u524DCPU\u7684\u7E41\u5FD9\u7A0B\u5EA6\u7684\u91CF\u5316\u6307\u6807</p><p><code>Node</code>\u5E94\u7528\u4E00\u822C\u4E0D\u4F1A\u6D88\u8017\u5F88\u591A\u7684<code>CPU</code>\uFF0C\u5982\u679C<code>CPU</code>\u5360\u7528\u7387\u9AD8\uFF0C\u5219\u8868\u660E\u5E94\u7528\u5B58\u5728\u5F88\u591A\u540C\u6B65\u64CD\u4F5C\uFF0C\u5BFC\u81F4\u5F02\u6B65\u4EFB\u52A1\u56DE\u8C03\u88AB\u963B\u585E</p><h3 id="\u5185\u5B58\u6307\u6807" tabindex="-1">\u5185\u5B58\u6307\u6807 <a class="header-anchor" href="#\u5185\u5B58\u6307\u6807" aria-hidden="true">#</a></h3><p>\u5185\u5B58\u662F\u4E00\u4E2A\u975E\u5E38\u5BB9\u6613\u91CF\u5316\u7684\u6307\u6807\u3002 \u5185\u5B58\u5360\u7528\u7387\u662F\u8BC4\u5224\u4E00\u4E2A\u7CFB\u7EDF\u7684\u5185\u5B58\u74F6\u9888\u7684\u5E38\u89C1\u6307\u6807\u3002 \u5BF9\u4E8ENode\u6765\u8BF4\uFF0C\u5185\u90E8\u5185\u5B58\u5806\u6808\u7684\u4F7F\u7528\u72B6\u6001\u4E5F\u662F\u4E00\u4E2A\u53EF\u4EE5\u91CF\u5316\u7684\u6307\u6807</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// /app/lib/memory.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> os </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">os</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5F53\u524DNode\u5185\u5B58\u5806\u6808\u60C5\u51B5</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> rss</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> heapUsed</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> heapTotal </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">memoryUsage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u7CFB\u7EDF\u7A7A\u95F2\u5185\u5B58</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sysFree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freemem</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u7CFB\u7EDF\u603B\u5185\u5B58</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sysTotal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">totalmem</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">memory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      sys</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sysFree</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sysTotal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#676E95;">// \u7CFB\u7EDF\u5185\u5B58\u5360\u7528\u7387</span></span>
<span class="line"><span style="color:#F07178;">      heap</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">heapUsed</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">headTotal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">   </span><span style="color:#676E95;">// Node\u5806\u5185\u5B58\u5360\u7528\u7387</span></span>
<span class="line"><span style="color:#F07178;">      node</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rss</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sysTotal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">         </span><span style="color:#676E95;">// Node\u5360\u7528\u7CFB\u7EDF\u5185\u5B58\u7684\u6BD4\u4F8B</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>rss\uFF1A\u8868\u793Anode\u8FDB\u7A0B\u5360\u7528\u7684\u5185\u5B58\u603B\u91CF\u3002</li><li>heapTotal\uFF1A\u8868\u793A\u5806\u5185\u5B58\u7684\u603B\u91CF\u3002</li><li>heapUsed\uFF1A\u5B9E\u9645\u5806\u5185\u5B58\u7684\u4F7F\u7528\u91CF\u3002</li><li>external \uFF1A\u5916\u90E8\u7A0B\u5E8F\u7684\u5185\u5B58\u4F7F\u7528\u91CF\uFF0C\u5305\u542BNode\u6838\u5FC3\u7684C++\u7A0B\u5E8F\u7684\u5185\u5B58\u4F7F\u7528\u91CF</li></ul><p>\u5728<code>Node</code>\u4E2D\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u7684\u6700\u5927\u5185\u5B58\u5BB9\u91CF\u4E3A1.5GB\u3002\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u51CF\u5C11\u5185\u5B58\u6CC4\u9732</p><h3 id="\u78C1\u76D8-i-o" tabindex="-1">\u78C1\u76D8 I/O <a class="header-anchor" href="#\u78C1\u76D8-i-o" aria-hidden="true">#</a></h3><p>\u786C\u76D8\u7684<code> IO</code> \u5F00\u9500\u662F\u975E\u5E38\u6602\u8D35\u7684\uFF0C\u786C\u76D8 IO \u82B1\u8D39\u7684 CPU \u65F6\u949F\u5468\u671F\u662F\u5185\u5B58\u7684 164000 \u500D</p><p>\u5185\u5B58 <code>IO </code>\u6BD4\u78C1\u76D8<code> IO</code> \u5FEB\u975E\u5E38\u591A\uFF0C\u6240\u4EE5\u4F7F\u7528\u5185\u5B58\u7F13\u5B58\u6570\u636E\u662F\u6709\u6548\u7684\u4F18\u5316\u65B9\u6CD5\u3002\u5E38\u7528\u7684\u5DE5\u5177\u5982 <code>redis</code>\u3001<code>memcached </code>\u7B49</p><p>\u5E76\u4E0D\u662F\u6240\u6709\u6570\u636E\u90FD\u9700\u8981\u7F13\u5B58\uFF0C\u8BBF\u95EE\u9891\u7387\u9AD8\uFF0C\u751F\u6210\u4EE3\u4EF7\u6BD4\u8F83\u9AD8\u7684\u624D\u8003\u8651\u662F\u5426\u7F13\u5B58\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F71\u54CD\u4F60\u6027\u80FD\u74F6\u9888\u7684\u8003\u8651\u53BB\u7F13\u5B58\uFF0C\u5E76\u4E14\u800C\u4E14\u7F13\u5B58\u8FD8\u6709\u7F13\u5B58\u96EA\u5D29\u3001\u7F13\u5B58\u7A7F\u900F\u7B49\u95EE\u9898\u8981\u89E3\u51B3</p><h2 id="\u4E8C\u3001\u5982\u4F55\u76D1\u63A7" tabindex="-1">\u4E8C\u3001\u5982\u4F55\u76D1\u63A7 <a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u76D1\u63A7" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u6027\u80FD\u65B9\u9762\u7684\u76D1\u63A7\uFF0C\u4E00\u822C\u60C5\u51B5\u90FD\u9700\u8981\u501F\u52A9\u5DE5\u5177\u6765\u5B9E\u73B0</p><p>\u8FD9\u91CC\u91C7\u7528<code>Easy-Monitor 2.0</code>\uFF0C\u5176\u662F\u8F7B\u91CF\u7EA7\u7684 <code>Node.js</code> \u9879\u76EE\u5185\u6838\u6027\u80FD\u76D1\u63A7 + \u5206\u6790\u5DE5\u5177\uFF0C\u5728\u9ED8\u8BA4\u6A21\u5F0F\u4E0B\uFF0C\u53EA\u9700\u8981\u5728\u9879\u76EE\u5165\u53E3\u6587\u4EF6 <code>require</code> \u4E00\u6B21\uFF0C\u65E0\u9700\u6539\u52A8\u4EFB\u4F55\u4E1A\u52A1\u4EE3\u7801\u5373\u53EF\u5F00\u542F\u5185\u6838\u7EA7\u522B\u7684\u6027\u80FD\u76D1\u63A7\u5206\u6790</p><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><p>\u5728\u4F60\u7684\u9879\u76EE\u5165\u53E3\u6587\u4EF6\u4E2D\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u5F15\u5165\uFF0C\u5F53\u7136\u8BF7\u4F20\u5165\u4F60\u7684\u9879\u76EE\u540D\u79F0\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> easyMonitor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">easy-monitor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">easyMonitor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4F60\u7684\u9879\u76EE\u540D\u79F0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6253\u5F00\u4F60\u7684\u6D4F\u89C8\u5668\uFF0C\u8BBF\u95EE <code>http://localhost:12333</code> \uFF0C\u5373\u53EF\u770B\u5230\u8FDB\u7A0B\u754C\u9762</p><p>\u5173\u4E8E\u5B9A\u5236\u5316\u5F00\u53D1\u3001\u901A\u7528\u914D\u7F6E\u9879\u4EE5\u53CA\u5982\u4F55\u52A8\u6001\u66F4\u65B0\u914D\u7F6E\u9879\u8BE6\u89C1\u5B98\u65B9\u6587\u6863</p><h2 id="\u4E09\u3001\u5982\u4F55\u4F18\u5316" tabindex="-1">\u4E09\u3001\u5982\u4F55\u4F18\u5316 <a class="header-anchor" href="#\u4E09\u3001\u5982\u4F55\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u5173\u4E8E<code>Node</code>\u7684\u6027\u80FD\u4F18\u5316\u7684\u65B9\u5F0F\u6709\uFF1A</p><ul><li>\u4F7F\u7528\u6700\u65B0\u7248\u672CNode.js</li><li>\u6B63\u786E\u4F7F\u7528\u6D41 Stream</li><li>\u4EE3\u7801\u5C42\u9762\u4F18\u5316</li><li>\u5185\u5B58\u7BA1\u7406\u4F18\u5316</li></ul><h3 id="\u4F7F\u7528\u6700\u65B0\u7248\u672Cnode-js" tabindex="-1">\u4F7F\u7528\u6700\u65B0\u7248\u672CNode.js <a class="header-anchor" href="#\u4F7F\u7528\u6700\u65B0\u7248\u672Cnode-js" aria-hidden="true">#</a></h3><p>\u6BCF\u4E2A\u7248\u672C\u7684\u6027\u80FD\u63D0\u5347\u4E3B\u8981\u6765\u81EA\u4E8E\u4E24\u4E2A\u65B9\u9762\uFF1A</p><ul><li>V8 \u7684\u7248\u672C\u66F4\u65B0</li><li>Node.js \u5185\u90E8\u4EE3\u7801\u7684\u66F4\u65B0\u4F18\u5316</li></ul><h3 id="\u6B63\u786E\u4F7F\u7528\u6D41-stream" tabindex="-1">\u6B63\u786E\u4F7F\u7528\u6D41 Stream <a class="header-anchor" href="#\u6B63\u786E\u4F7F\u7528\u6D41-stream" aria-hidden="true">#</a></h3><p>\u5728<code>Node</code>\u4E2D\uFF0C\u5F88\u591A\u5BF9\u8C61\u90FD\u5B9E\u73B0\u4E86\u6D41\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5927\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7\u6D41\u7684\u5F62\u5F0F\u53D1\u9001\uFF0C\u4E0D\u9700\u8981\u5C06\u5176\u5B8C\u5168\u8BFB\u5165\u5185\u5B58</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFile</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/data.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// good</span></span>
<span class="line"><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stream</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createReadStream</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/data.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">stream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pipe</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4EE3\u7801\u5C42\u9762\u4F18\u5316" tabindex="-1">\u4EE3\u7801\u5C42\u9762\u4F18\u5316 <a class="header-anchor" href="#\u4EE3\u7801\u5C42\u9762\u4F18\u5316" aria-hidden="true">#</a></h3><p>\u5408\u5E76\u67E5\u8BE2\uFF0C\u5C06\u591A\u6B21\u67E5\u8BE2\u5408\u5E76\u4E00\u6B21\uFF0C\u51CF\u5C11\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u6B21\u6570</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// bad</span></span>
<span class="line"><span style="color:#A6ACCD;">for user_id </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> userIds </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> account </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> user_account</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findOne</span><span style="color:#A6ACCD;">(user_id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// good</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user_account_map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;">// \u6CE8\u610F\u8FD9\u4E2A\u5BF9\u8C61\u5C06\u4F1A\u6D88\u8017\u5927\u91CF\u5185\u5B58\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">user_account</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#A6ACCD;">(user_id </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> user_ids)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(account)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">user_account_map</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">account</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">user_id</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">account</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for user_id </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> userIds </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> account </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> user_account_map[user_id]</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5185\u5B58\u7BA1\u7406\u4F18\u5316" tabindex="-1">\u5185\u5B58\u7BA1\u7406\u4F18\u5316 <a class="header-anchor" href="#\u5185\u5B58\u7BA1\u7406\u4F18\u5316" aria-hidden="true">#</a></h3><p>\u5728 V8 \u4E2D\uFF0C\u4E3B\u8981\u5C06\u5185\u5B58\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u751F\u4EE3\u4E24\u4EE3\uFF1A</p><ul><li>\u65B0\u751F\u4EE3\uFF1A\u5BF9\u8C61\u7684\u5B58\u6D3B\u65F6\u95F4\u8F83\u77ED\u3002\u65B0\u751F\u5BF9\u8C61\u6216\u53EA\u7ECF\u8FC7\u4E00\u6B21\u5783\u573E\u56DE\u6536\u7684\u5BF9\u8C61</li><li>\u8001\u751F\u4EE3\uFF1A\u5BF9\u8C61\u5B58\u6D3B\u65F6\u95F4\u8F83\u957F\u3002\u7ECF\u5386\u8FC7\u4E00\u6B21\u6216\u591A\u6B21\u5783\u573E\u56DE\u6536\u7684\u5BF9\u8C61</li></ul><p>\u82E5\u65B0\u751F\u4EE3\u5185\u5B58\u7A7A\u95F4\u4E0D\u591F\uFF0C\u76F4\u63A5\u5206\u914D\u5230\u8001\u751F\u4EE3</p><p>\u901A\u8FC7\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u670D\u52A1\u5668\u7684\u6027\u80FD\u3002\u5982\u679C\u6709\u5185\u5B58\u6CC4\u9732\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u5927\u91CF\u7684\u5BF9\u8C61\u5B58\u50A8\u5230\u8001\u751F\u4EE3\u4E2D\uFF0C\u670D\u52A1\u5668\u6027\u80FD\u4F1A\u5927\u5927\u964D\u4F4E</p><p>\u5982\u4E0B\u9762\u60C5\u51B5\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> buffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFileSync</span><span style="color:#A6ACCD;">(__dirname </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/source/index.htm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">buffer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">leak</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFileSync</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/source/index.htm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> leak </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><code>leak</code>\u7684\u5185\u5B58\u975E\u5E38\u5927\uFF0C\u9020\u6210\u5185\u5B58\u6CC4\u9732\uFF0C\u5E94\u5F53\u907F\u514D\u8FD9\u6837\u7684\u64CD\u4F5C\uFF0C\u901A\u8FC7\u51CF\u5C11\u5185\u5B58\u4F7F\u7528\uFF0C\u662F\u63D0\u9AD8\u670D\u52A1\u6027\u80FD\u7684\u624B\u6BB5\u4E4B\u4E00</p><p>\u800C\u8282\u7701\u5185\u5B58\u6700\u597D\u7684\u65B9\u5F0F\u662F\u4F7F\u7528\u6C60\uFF0C\u5176\u5C06\u9891\u7528\u3001\u53EF\u590D\u7528\u5BF9\u8C61\u5B58\u50A8\u8D77\u6765\uFF0C\u51CF\u5C11\u521B\u5EFA\u548C\u9500\u6BC1\u64CD\u4F5C</p><p>\u4F8B\u5982\u6709\u4E2A\u56FE\u7247\u8BF7\u6C42\u63A5\u53E3\uFF0C\u6BCF\u6B21\u8BF7\u6C42\uFF0C\u90FD\u9700\u8981\u7528\u5230\u7C7B\u3002\u82E5\u6BCF\u6B21\u90FD\u9700\u8981\u91CD\u65B0new\u8FD9\u4E9B\u7C7B\uFF0C\u5E76\u4E0D\u662F\u5F88\u5408\u9002\uFF0C\u5728\u5927\u91CF\u8BF7\u6C42\u65F6\uFF0C\u9891\u7E41\u521B\u5EFA\u548C\u9500\u6BC1\u8FD9\u4E9B\u7C7B\uFF0C\u9020\u6210\u5185\u5B58\u6296\u52A8</p><p>\u4F7F\u7528\u5BF9\u8C61\u6C60\u7684\u673A\u5236\uFF0C\u5BF9\u8FD9\u79CD\u9891\u7E41\u9700\u8981\u521B\u5EFA\u548C\u9500\u6BC1\u7684\u5BF9\u8C61\u4FDD\u5B58\u5728\u4E00\u4E2A\u5BF9\u8C61\u6C60\u4E2D\u3002\u6BCF\u6B21\u7528\u5230\u8BE5\u5BF9\u8C61\u65F6\uFF0C\u5C31\u53D6\u5BF9\u8C61\u6C60\u7A7A\u95F2\u7684\u5BF9\u8C61\uFF0C\u5E76\u5BF9\u5B83\u8FDB\u884C\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6846\u67B6\u7684\u6027\u80FD</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://segmentfault.com/a/1190000039327565" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000039327565</a></li><li><a href="https://zhuanlan.zhihu.com/p/50055740" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/50055740</a></li><li><a href="https://segmentfault.com/a/1190000010231628" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000010231628</a></li></ul>`,52),e=[o];function c(t,r,y,D,F,A){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
