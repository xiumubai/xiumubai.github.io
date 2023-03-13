import{_ as s,c as n,o as a,a as l}from"./app.755f10b0.js";const i=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4React\u7684\u4E8B\u4EF6\u673A\u5236\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u6267\u884C\u987A\u5E8F","slug":"\u4E8C\u3001\u6267\u884C\u987A\u5E8F","link":"#\u4E8C\u3001\u6267\u884C\u987A\u5E8F","children":[]},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"React/SyntheticEvent.md","lastUpdated":1663841780000}'),p={name:"React/SyntheticEvent.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4react\u7684\u4E8B\u4EF6\u673A\u5236\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4React\u7684\u4E8B\u4EF6\u673A\u5236\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4react\u7684\u4E8B\u4EF6\u673A\u5236\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/f054f080-d86f-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><code>React</code>\u57FA\u4E8E\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u673A\u5236\u81EA\u8EAB\u5B9E\u73B0\u4E86\u4E00\u5957\u4E8B\u4EF6\u673A\u5236\uFF0C\u5305\u62EC\u4E8B\u4EF6\u6CE8\u518C\u3001\u4E8B\u4EF6\u7684\u5408\u6210\u3001\u4E8B\u4EF6\u5192\u6CE1\u3001\u4E8B\u4EF6\u6D3E\u53D1\u7B49</p><p>\u5728<code>React</code>\u4E2D\u8FD9\u5957\u4E8B\u4EF6\u673A\u5236\u88AB\u79F0\u4E4B\u4E3A\u5408\u6210\u4E8B\u4EF6</p><h4 id="\u5408\u6210\u4E8B\u4EF6\uFF08syntheticevent\uFF09" tabindex="-1">\u5408\u6210\u4E8B\u4EF6\uFF08SyntheticEvent\uFF09 <a class="header-anchor" href="#\u5408\u6210\u4E8B\u4EF6\uFF08syntheticevent\uFF09" aria-hidden="true">#</a></h4><p>\u5408\u6210\u4E8B\u4EF6\u662F <code>React </code>\u6A21\u62DF\u539F\u751F <code>DOM </code>\u4E8B\u4EF6\u6240\u6709\u80FD\u529B\u7684\u4E00\u4E2A\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u5373\u6D4F\u89C8\u5668\u539F\u751F\u4E8B\u4EF6\u7684\u8DE8\u6D4F\u89C8\u5668\u5305\u88C5\u5668</p><p>\u6839\u636E <code>W3C </code>\u89C4\u8303\u6765\u5B9A\u4E49\u5408\u6210\u4E8B\u4EF6\uFF0C\u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\uFF0C\u62E5\u6709\u4E0E\u6D4F\u89C8\u5668\u539F\u751F\u4E8B\u4EF6\u76F8\u540C\u7684\u63A5\u53E3\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u60F3\u8981\u83B7\u5F97\u539F\u751F<code>DOM</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>e.nativeEvent</code>\u5C5E\u6027\u83B7\u53D6</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleClick </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nativeEvent)</span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230<code>React</code>\u4E8B\u4EF6\u548C\u539F\u751F\u4E8B\u4EF6\u4E5F\u975E\u5E38\u7684\u76F8\u4F3C\uFF0C\u4F46\u4E5F\u6709\u4E00\u5B9A\u7684\u533A\u522B\uFF1A</p><ul><li>\u4E8B\u4EF6\u540D\u79F0\u547D\u540D\u65B9\u5F0F\u4E0D\u540C</li></ul><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#676E95;">// \u539F\u751F\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleClick()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE\u547D\u540D</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#676E95;">// React \u5408\u6210\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE\u547D\u540D</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E66\u5199\u4E0D\u540C</li></ul><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#676E95;">// \u539F\u751F\u4E8B\u4EF6 \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5199\u6CD5</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleClick()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE\u547D\u540D</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#676E95;">// React \u5408\u6210\u4E8B\u4EF6 \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5199\u6CD5</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">\u6309\u94AE\u547D\u540D</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u867D\u7136<code>onclick</code>\u770B\u4F3C\u7ED1\u5B9A\u5230<code>DOM</code>\u5143\u7D20\u4E0A\uFF0C\u4F46\u5B9E\u9645\u5E76\u4E0D\u4F1A\u628A\u4E8B\u4EF6\u4EE3\u7406\u51FD\u6570\u76F4\u63A5\u7ED1\u5B9A\u5230\u771F\u5B9E\u7684\u8282\u70B9\u4E0A\uFF0C\u800C\u662F\u628A\u6240\u6709\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u5230\u7ED3\u6784\u7684\u6700\u5916\u5C42\uFF0C\u4F7F\u7528\u4E00\u4E2A\u7EDF\u4E00\u7684\u4E8B\u4EF6\u53BB\u76D1\u542C</p><p>\u8FD9\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\u4E0A\u7EF4\u6301\u4E86\u4E00\u4E2A\u6620\u5C04\u6765\u4FDD\u5B58\u6240\u6709\u7EC4\u4EF6\u5185\u90E8\u7684\u4E8B\u4EF6\u76D1\u542C\u548C\u5904\u7406\u51FD\u6570\u3002\u5F53\u7EC4\u4EF6\u6302\u8F7D\u6216\u5378\u8F7D\u65F6\uFF0C\u53EA\u662F\u5728\u8FD9\u4E2A\u7EDF\u4E00\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u4E0A\u63D2\u5165\u6216\u5220\u9664\u4E00\u4E9B\u5BF9\u8C61</p><p>\u5F53\u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0C\u9996\u5148\u88AB\u8FD9\u4E2A\u7EDF\u4E00\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u5904\u7406\uFF0C\u7136\u540E\u5728\u6620\u5C04\u91CC\u627E\u5230\u771F\u6B63\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5E76\u8C03\u7528\u3002\u8FD9\u6837\u505A\u7B80\u5316\u4E86\u4E8B\u4EF6\u5904\u7406\u548C\u56DE\u6536\u673A\u5236\uFF0C\u6548\u7387\u4E5F\u6709\u5F88\u5927\u63D0\u5347</p><h2 id="\u4E8C\u3001\u6267\u884C\u987A\u5E8F" tabindex="-1">\u4E8C\u3001\u6267\u884C\u987A\u5E8F <a class="header-anchor" href="#\u4E8C\u3001\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a></h2><p>\u5173\u4E8E<code>React </code>\u5408\u6210\u4E8B\u4EF6\u4E0E\u539F\u751F\u4E8B\u4EF6\u6267\u884C\u987A\u5E8F\uFF0C\u53EF\u4EE5\u770B\u770B\u4E0B\u9762\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">  React  </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">parentRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRef</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">childRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRef</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentDidMount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">React componentDidMount\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">parentRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u539F\u751F\u4E8B\u4EF6\uFF1A\u7236\u5143\u7D20 DOM \u4E8B\u4EF6\u76D1\u542C\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">childRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u539F\u751F\u4E8B\u4EF6\uFF1A\u5B50\u5143\u7D20 DOM \u4E8B\u4EF6\u76D1\u542C\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u539F\u751F\u4E8B\u4EF6\uFF1Adocument DOM \u4E8B\u4EF6\u76D1\u542C\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parentClickFun</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">log(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">React \u4E8B\u4EF6\uFF1A\u7236\u5143\u7D20\u4E8B\u4EF6\u76D1\u542C\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">childClickFun</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">log(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">React \u4E8B\u4EF6\uFF1A\u5B50\u5143\u7D20\u4E8B\u4EF6\u76D1\u542C\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">parentRef</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">parentClickFun</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">childRef</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">childClickFun</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          \u5206\u6790\u4E8B\u4EF6\u6267\u884C\u987A\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> App</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8F93\u51FA\u987A\u5E8F\u4E3A\uFF1A</p><div class="language-tex"><button class="copy"></button><span class="lang">tex</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u539F\u751F\u4E8B\u4EF6\uFF1A\u5B50\u5143\u7D20 DOM \u4E8B\u4EF6\u76D1\u542C\uFF01 </span></span>
<span class="line"><span style="color:#A6ACCD;">\u539F\u751F\u4E8B\u4EF6\uFF1A\u7236\u5143\u7D20 DOM \u4E8B\u4EF6\u76D1\u542C\uFF01 </span></span>
<span class="line"><span style="color:#A6ACCD;">React \u4E8B\u4EF6\uFF1A\u5B50\u5143\u7D20\u4E8B\u4EF6\u76D1\u542C\uFF01 </span></span>
<span class="line"><span style="color:#A6ACCD;">React \u4E8B\u4EF6\uFF1A\u7236\u5143\u7D20\u4E8B\u4EF6\u76D1\u542C\uFF01 </span></span>
<span class="line"><span style="color:#A6ACCD;">\u539F\u751F\u4E8B\u4EF6\uFF1Adocument DOM \u4E8B\u4EF6\u76D1\u542C\uFF01 </span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u5F97\u51FA\u4EE5\u4E0B\u7ED3\u8BBA\uFF1A</p><ul><li>React \u6240\u6709\u4E8B\u4EF6\u90FD\u6302\u8F7D\u5728 document \u5BF9\u8C61\u4E0A</li><li>\u5F53\u771F\u5B9E DOM \u5143\u7D20\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4F1A\u5192\u6CE1\u5230 document \u5BF9\u8C61\u540E\uFF0C\u518D\u5904\u7406 React \u4E8B\u4EF6</li><li>\u6240\u4EE5\u4F1A\u5148\u6267\u884C\u539F\u751F\u4E8B\u4EF6\uFF0C\u7136\u540E\u5904\u7406 React \u4E8B\u4EF6</li><li>\u6700\u540E\u771F\u6B63\u6267\u884C document \u4E0A\u6302\u8F7D\u7684\u4E8B\u4EF6</li></ul><p>\u5BF9\u5E94\u8FC7\u7A0B\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/08e22ff0-d870-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u6240\u4EE5\u60F3\u8981\u963B\u6B62\u4E0D\u540C\u65F6\u95F4\u6BB5\u7684\u5192\u6CE1\u884C\u4E3A\uFF0C\u5BF9\u5E94\u4F7F\u7528\u4E0D\u540C\u7684\u65B9\u6CD5\uFF0C\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><ul><li><p>\u963B\u6B62\u5408\u6210\u4E8B\u4EF6\u95F4\u7684\u5192\u6CE1\uFF0C\u7528e.stopPropagation()</p></li><li><p>\u963B\u6B62\u5408\u6210\u4E8B\u4EF6\u4E0E\u6700\u5916\u5C42 document \u4E0A\u7684\u4E8B\u4EF6\u95F4\u7684\u5192\u6CE1\uFF0C\u7528e.nativeEvent.stopImmediatePropagation()</p></li><li><p>\u963B\u6B62\u5408\u6210\u4E8B\u4EF6\u4E0E\u9664\u6700\u5916\u5C42document\u4E0A\u7684\u539F\u751F\u4E8B\u4EF6\u4E0A\u7684\u5192\u6CE1\uFF0C\u901A\u8FC7\u5224\u65ADe.target\u6765\u907F\u514D</p></li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">   </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">matches</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div.code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">   active</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1">\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p><code>React</code>\u4E8B\u4EF6\u673A\u5236\u603B\u7ED3\u5982\u4E0B\uFF1A</p><ul><li>React \u4E0A\u6CE8\u518C\u7684\u4E8B\u4EF6\u6700\u7EC8\u4F1A\u7ED1\u5B9A\u5728document\u8FD9\u4E2A DOM \u4E0A\uFF0C\u800C\u4E0D\u662F React \u7EC4\u4EF6\u5BF9\u5E94\u7684 DOM(\u51CF\u5C11\u5185\u5B58\u5F00\u9500\u5C31\u662F\u56E0\u4E3A\u6240\u6709\u7684\u4E8B\u4EF6\u90FD\u7ED1\u5B9A\u5728 document \u4E0A\uFF0C\u5176\u4ED6\u8282\u70B9\u6CA1\u6709\u7ED1\u5B9A\u4E8B\u4EF6)</li><li>React \u81EA\u8EAB\u5B9E\u73B0\u4E86\u4E00\u5957\u4E8B\u4EF6\u5192\u6CE1\u673A\u5236\uFF0C\u6240\u4EE5\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC event.stopPropagation()\u65E0\u6548\u7684\u539F\u56E0\u3002</li><li>React \u901A\u8FC7\u961F\u5217\u7684\u5F62\u5F0F\uFF0C\u4ECE\u89E6\u53D1\u7684\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u56DE\u6EAF\uFF0C\u7136\u540E\u8C03\u7528\u4ED6\u4EEC JSX \u4E2D\u5B9A\u4E49\u7684 callback</li><li>React \u6709\u4E00\u5957\u81EA\u5DF1\u7684\u5408\u6210\u4E8B\u4EF6 SyntheticEvent</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://zh-hans.reactjs.org/docs/events.html" target="_blank" rel="noreferrer">https://zh-hans.reactjs.org/docs/events.html</a></li><li><a href="https://segmentfault.com/a/1190000015725214?utm_source=sf-similar-article" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000015725214?utm_source=sf-similar-article</a></li><li><a href="https://segmentfault.com/a/1190000038251163" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000038251163</a></li></ul>`,36),e=[o];function t(c,r,F,D,y,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
