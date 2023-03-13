import{_ as s,c as n,o as a,a as l}from"./app.755f10b0.js";const C=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5F52\u5E76\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0","slug":"\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0","link":"#\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0","children":[]},{"level":2,"title":"\u4E09\u3001\u5E94\u7528\u573A\u666F","slug":"\u4E09\u3001\u5E94\u7528\u573A\u666F","link":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"algorithm/mergeSort.md","lastUpdated":1663896216000}'),p={name:"algorithm/mergeSort.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5F52\u5E76\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5F52\u5E76\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5F52\u5E76\u6392\u5E8F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F\u5E94\u7528\u573A\u666F\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/fa1d5720-26ac-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u5F52\u5E76\u6392\u5E8F\uFF08Merge Sort\uFF09\u662F\u5EFA\u7ACB\u5F52\u5E76\u64CD\u4F5C\u4E0A\u7684\u4E00\u79CD\u6709\u6548\uFF0C\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u8BE5\u7B97\u6CD5\u662F\u91C7\u7528\u5206\u6CBB\u6CD5\u7684\u4E00\u4E2A\u975E\u5E38\u5178\u578B\u7684\u5E94\u7528</p><p>\u5C06\u5DF2\u6709\u5E8F\u7684\u5B50\u5E8F\u5217\u5408\u5E76\uFF0C\u5F97\u5230\u5B8C\u5168\u6709\u5E8F\u7684\u5E8F\u5217\uFF0C\u5373\u5148\u4F7F\u6BCF\u4E2A\u5B50\u5E8F\u5217\u6709\u5E8F\uFF0C\u518D\u4F7F\u5B50\u5E8F\u5217\u6BB5\u95F4\u6709\u5E8F</p><p>\u4F8B\u5982\u5BF9\u4E8E\u542B\u6709 <code>n</code> \u4E2A\u8BB0\u5F55\u7684\u65E0\u5E8F\u8868\uFF0C\u9996\u5148\u9ED8\u8BA4\u8868\u4E2D\u6BCF\u4E2A\u8BB0\u5F55\u5404\u4E3A\u4E00\u4E2A\u6709\u5E8F\u8868\uFF08\u53EA\u4E0D\u8FC7\u8868\u7684\u957F\u5EA6\u90FD\u4E3A 1\uFF09</p><p>\u7136\u540E\u8FDB\u884C\u4E24\u4E24\u5408\u5E76\uFF0C\u4F7F <code>n</code> \u4E2A\u6709\u5E8F\u8868\u53D8\u4E3A<code>n/2</code> \u4E2A\u957F\u5EA6\u4E3A 2 \u6216\u8005 1 \u7684\u6709\u5E8F\u8868\uFF08\u4F8B\u5982 4 \u4E2A\u5C0F\u6709\u5E8F\u8868\u5408\u5E76\u4E3A 2 \u4E2A\u5927\u7684\u6709\u5E8F\u8868\uFF09</p><p>\u901A\u8FC7\u4E0D\u65AD\u5730\u8FDB\u884C\u4E24\u4E24\u5408\u5E76\uFF0C\u76F4\u5230\u5F97\u5230\u4E00\u4E2A\u957F\u5EA6\u4E3A <code>n</code> \u7684\u6709\u5E8F\u8868\u4E3A\u6B62</p><p>\u4F8B\u5982\u5BF9\u65E0\u5E8F\u8868{49\uFF0C38\uFF0C65\uFF0C97\uFF0C76\uFF0C13\uFF0C27}\u8FDB\u884C\u5F52\u5E76\u6392\u5E8F\u5206\u6210\u4E86\u5206\u3001\u5408\u4E24\u90E8\u5206\uFF1A</p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/05f14b60-26ad-11ec-a752-75723a64e8f5.png" alt=""></p><p>\u5F52\u5E76\u5408\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u6B21\u5F97\u5230\u7684\u65B0\u7684\u5B50\u8868\u672C\u8EAB\u6709\u5E8F\uFF0C\u6240\u4EE5\u6700\u7EC8\u5F97\u5230\u6709\u5E8F\u8868</p><p>\u4E0A\u8FF0\u5206\u6210\u4E24\u90E8\u5206\uFF0C\u5219\u79F0\u4E3A\u4E8C\u8DEF\u5F52\u5E76\uFF0C\u5982\u679C\u5206\u6210\u4E09\u4E2A\u90E8\u5206\u5219\u79F0\u4E3A\u4E09\u8DEF\u5F52\u5E76\uFF0C\u4EE5\u6B64\u7C7B\u63A8</p><h2 id="\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" tabindex="-1">\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0 <a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u5F52\u5E76\u6392\u5E8F\u7684\u7B97\u6CD5\u601D\u8DEF\u5982\u4E0B\uFF1A</p><ul><li><p>\u5206\uFF1A\u628A\u6570\u7EC4\u5206\u6210\u4E24\u534A\uFF0C\u518D\u9012\u5F52\u5BF9\u5B50\u6570\u7EC4\u8FDB\u884C\u5206\u64CD\u4F5C\uFF0C\u76F4\u81F3\u5230\u4E00\u4E2A\u4E2A\u5355\u72EC\u6570\u5B57</p></li><li><p>\u5408\uFF1A\u628A\u4E24\u4E2A\u6570\u5408\u6210\u6709\u5E8F\u6570\u7EC4\uFF0C\u518D\u5BF9\u6709\u5E8F\u6570\u7EC4\u8FDB\u884C\u5408\u5E76\u64CD\u4F5C\uFF0C\u76F4\u5230\u5168\u90E8\u5B50\u6570\u7EC4\u5408\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u6570\u7EC4</p><ul><li>\u5408\u5E76\u64CD\u4F5C\u53EF\u4EE5\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7528\u4E8E\u5B58\u653E\u6392\u5E8F\u540E\u7684\u6570\u7EC4</li><li>\u6BD4\u8F83\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4\u7684\u5934\u90E8\uFF0C\u8F83\u5C0F\u8005\u51FA\u961F\u5E76\u4E14\u63A8\u5165\u5230\u4E0A\u8FF0\u65B0\u5EFA\u7684\u6570\u7EC4\u4E2D</li><li>\u5982\u679C\u4E24\u4E2A\u6570\u7EC4\u8FD8\u6709\u503C\uFF0C\u5219\u91CD\u590D\u4E0A\u8FF0\u7B2C\u4E8C\u6B65</li><li>\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u6570\u7EC4\u6709\u503C\uFF0C\u5219\u5C06\u8BE5\u6570\u7EC4\u7684\u503C\u51FA\u961F\u5E76\u63A8\u5165\u5230\u4E0A\u8FF0\u65B0\u5EFA\u7684\u6570\u7EC4\u4E2D</li></ul></li></ul><p><img src="https://www.runoob.com/wp-content/uploads/2019/03/mergeSort.gif" alt=""></p><p>\u7528\u4EE3\u7801\u8868\u793A\u5219\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mergeSort</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#676E95;">// \u91C7\u7528\u81EA\u4E0A\u800C\u4E0B\u7684\u9012\u5F52\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middle</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">middle</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">merge</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">mergeSort</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">mergeSort</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">merge</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u5F52\u5E76\u5206\u6210\u4E86\u5206\u3001\u5408\u4E24\u90E8\u5206\uFF0C\u5728\u5904\u7406\u5206\u8FC7\u7A0B\u4E2D\u9012\u5F52\u8C03\u7528\u4E24\u4E2A\u5206\u7684\u64CD\u4F5C\uFF0C\u6240\u82B1\u8D39\u7684\u65F6\u95F4\u4E3A2\u4E58<code>T(n/2)</code>\uFF0C\u5408\u7684\u64CD\u4F5C\u65F6\u95F4\u590D\u6742\u5EA6\u5219\u4E3A<code>O(n)</code>\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5F97\u5230\u4EE5\u4E0B\u516C\u5F0F\uFF1A</p><p>\u603B\u7684\u6267\u884C\u65F6\u95F4 = 2 \xD7 \u8F93\u5165\u957F\u5EA6\u4E3A<code>n/2</code>\u7684<code>sort</code>\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4 + <code>merge</code>\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4<code>O(n)</code></p><p>\u5F53\u53EA\u6709\u4E00\u4E2A\u5143\u7D20\u65F6\uFF0C<code>T(1) = O(1)</code></p><p>\u5982\u679C\u5BF9<code>T(n) = 2 * T(n/2) + O(n) </code>\u8FDB\u884C\u5DE6\u53F3 / n\u7684\u64CD\u4F5C\uFF0C\u5F97\u5230 <code>T(n) / n = (n / 2) * T(n/2) + O(1)</code></p><p>\u73B0\u5728\u4EE4 <code>S(n) = T(n)/n</code>\uFF0C\u5219<code>S(1) = O(1)</code>\uFF0C\u7136\u540E\u5229\u7528\u8868\u8FBE\u5F0F\u5E26\u5165\u5F97\u5230<code>S(n) = S(n/2) + O(1)</code></p><p>\u6240\u4EE5\u53EF\u4EE5\u5F97\u5230\uFF1A<code>S(n) = S(n/2) + O(1) = S(n/4) + O(2) = S(n/8) + O(3) = S(n/2^k) + O(k) = S(1) + O(logn) = O(logn)</code></p><p>\u7EFC\u4E0A\u53EF\u5F97\uFF0C<code>T(n) = n * log(n) = nlogn</code></p><p>\u5173\u4E8E\u5F52\u5E76\u6392\u5E8F\u7684\u7A33\u5B9A\u6027\uFF0C\u5728\u8FDB\u884C\u5408\u5E76\u8FC7\u7A0B\uFF0C\u57281\u4E2A\u62162\u4E2A\u5143\u7D20\u65F6\uFF0C1\u4E2A\u5143\u7D20\u4E0D\u4F1A\u4EA4\u6362\uFF0C2\u4E2A\u5143\u7D20\u5982\u679C\u5927\u5C0F\u76F8\u7B49\u4E5F\u4E0D\u4F1A\u4EA4\u6362\uFF0C\u7531\u6B64\u53EF\u89C1\u5F52\u5E76\u6392\u5E8F\u662F\u7A33\u5B9A\u7684\u6392\u5E8F\u7B97\u6CD5</p><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1">\u4E09\u3001\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5728\u5916\u6392\u5E8F\u4E2D\u901A\u5E38\u4F7F\u7528\u6392\u5E8F-\u5F52\u5E76\u7684\u7B56\u7565\uFF0C\u5916\u6392\u5E8F\u662F\u6307\u5904\u7406\u8D85\u8FC7\u5185\u5B58\u9650\u5EA6\u7684\u6570\u636E\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u901A\u5E38\u5C06\u4E2D\u95F4\u7ED3\u679C\u653E\u5728\u8BFB\u5199\u8F83\u6162\u7684\u5916\u5B58\u50A8\u5668\uFF0C\u5982\u4E0B\u5206\u6210\u4E24\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u6392\u5E8F\u9636\u6BB5\uFF1A\u8BFB\u5165\u80FD\u591F\u653E\u8FDB\u5185\u5B58\u4E2D\u7684\u6570\u636E\u91CF\uFF0C\u5C06\u5176\u6392\u5E8F\u8F93\u51FA\u5230\u4E34\u65F6\u6587\u4EF6\uFF0C\u4E00\u6B21\u8FDB\u884C\uFF0C\u5C06\u5E26\u6392\u5E8F\u6570\u636E\u7EC4\u7EC7\u4E3A\u591A\u4E2A\u6709\u5E8F\u7684\u4E34\u65F6\u6587\u4EF6</li><li>\u5F52\u5E76\u9636\u6BB5\uFF1A\u5C06\u8FD9\u4E9B\u4E34\u65F6\u6587\u4EF6\u7EC4\u5408\u4E3A\u5927\u7684\u6709\u5E8F\u6587\u4EF6</li></ul><p>\u4F8B\u5982\uFF0C\u4F7F\u7528100m\u5185\u5B58\u5BF9900m\u7684\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF0C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u8BFB\u5165100m\u6570\u636E\u5185\u5B58\uFF0C\u7528\u5E38\u89C4\u65B9\u5F0F\u6392\u5E8F</li><li>\u5C06\u6392\u5E8F\u540E\u7684\u6570\u636E\u5199\u5165\u78C1\u76D8</li><li>\u91CD\u590D\u524D\u4E24\u4E2A\u6B65\u9AA4\uFF0C\u5F97\u52309\u4E2A100m\u7684\u4E34\u65F6\u6587\u4EF6</li><li>\u5C06100m\u7684\u5185\u5B58\u5212\u5206\u4E3A10\u4EFD\uFF0C\u5C069\u4EFD\u4E3A\u8F93\u5165\u7F13\u51B2\u533A\uFF0C\u7B2C10\u4EFD\u4E3A\u8F93\u51FA\u7F13\u51B2\u533A</li><li>\u8FDB\u884C\u4E5D\u8DEF\u5F52\u5E76\u6392\u5E8F\uFF0C\u5C06\u7ED3\u679C\u8F93\u51FA\u5230\u7F13\u51B2\u533A <ul><li>\u82E5\u8F93\u51FA\u7F13\u51B2\u533A\u6EE1\uFF0C\u5C06\u6570\u636E\u5199\u5230\u76EE\u6807\u6587\u4EF6\uFF0C\u6E05\u7A7A\u7F13\u51B2\u533A</li><li>\u82E5\u7F13\u51B2\u533A\u7A7A\uFF0C\u8BFB\u5165\u76F8\u5E94\u6587\u4EF6\u7684\u4E0B\u4E00\u4EFD\u6570\u636E</li></ul></li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://baike.baidu.com/item/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F/1639015" target="_blank" rel="noreferrer">https://baike.baidu.com/item/\u5F52\u5E76\u6392\u5E8F/1639015</a></li><li><a href="https://chowdera.com/2021/09/20210920201630258d.html#_127" target="_blank" rel="noreferrer">https://chowdera.com/2021/09/20210920201630258d.html#_127</a></li><li><a href="https://juejin.cn/post/6844904007899561998" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904007899561998</a></li></ul>`,34),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
