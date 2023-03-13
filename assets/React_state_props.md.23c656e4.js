import{_ as s,c as a,o as n,a as p}from"./app.755f10b0.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1Astate \u548C props \u6709\u4EC0\u4E48\u533A\u522B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001state","slug":"\u4E00\u3001state","link":"#\u4E00\u3001state","children":[]},{"level":2,"title":"\u4E8C\u3001props","slug":"\u4E8C\u3001props","link":"#\u4E8C\u3001props","children":[]},{"level":2,"title":"\u4E09\u3001\u533A\u522B","slug":"\u4E09\u3001\u533A\u522B","link":"#\u4E09\u3001\u533A\u522B","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"React/state_props.md","lastUpdated":1663841780000}'),l={name:"React/state_props.md"},o=p(`<h1 id="\u9762\u8BD5\u5B98\uFF1Astate-\u548C-props-\u6709\u4EC0\u4E48\u533A\u522B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1Astate \u548C props \u6709\u4EC0\u4E48\u533A\u522B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1Astate-\u548C-props-\u6709\u4EC0\u4E48\u533A\u522B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/7f272780-d440-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001state" tabindex="-1">\u4E00\u3001state <a class="header-anchor" href="#\u4E00\u3001state" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u7EC4\u4EF6\u7684\u663E\u793A\u5F62\u6001\u53EF\u4EE5\u7531\u6570\u636E\u72B6\u6001\u548C\u5916\u90E8\u53C2\u6570\u6240\u51B3\u5B9A\uFF0C\u800C\u6570\u636E\u72B6\u6001\u5C31\u662F <code>state</code>\uFF0C\u4E00\u822C\u5728 <code>constructor</code> \u4E2D\u521D\u59CB\u5316</p><p>\u5F53\u9700\u8981\u4FEE\u6539\u91CC\u9762\u7684\u503C\u7684\u72B6\u6001\u9700\u8981\u901A\u8FC7\u8C03\u7528 <code>setState</code> \u6765\u6539\u53D8\uFF0C\u4ECE\u800C\u8FBE\u5230\u66F4\u65B0\u7EC4\u4EF6\u5185\u90E8\u6570\u636E\u7684\u4F5C\u7528\uFF0C\u5E76\u4E14\u91CD\u65B0\u8C03\u7528\u7EC4\u4EF6 <code>render</code> \u65B9\u6CD5\uFF0C\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">updateCount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prevState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prevState</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">updateCount</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Clicked </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> times</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>setState</code> \u8FD8\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5B83\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F1A\u5728 <code>setState</code> \u8C03\u7528\u5B8C\u6210\u5E76\u4E14\u7EC4\u4EF6\u5F00\u59CB\u91CD\u65B0\u6E32\u67D3\u65F6\u88AB\u8C03\u7528\uFF0C\u53EF\u4EE5\u7528\u6765\u76D1\u542C\u6E32\u67D3\u662F\u5426\u5B8C\u6210</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JS\u6BCF\u65E5\u4E00\u9898</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">setState finished</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001props" tabindex="-1">\u4E8C\u3001props <a class="header-anchor" href="#\u4E8C\u3001props" aria-hidden="true">#</a></h2><p><code>React</code> \u7684\u6838\u5FC3\u601D\u60F3\u5C31\u662F\u7EC4\u4EF6\u5316\u601D\u60F3\uFF0C\u9875\u9762\u4F1A\u88AB\u5207\u5206\u6210\u4E00\u4E9B\u72EC\u7ACB\u7684\u3001\u53EF\u590D\u7528\u7684\u7EC4\u4EF6</p><p>\u7EC4\u4EF6\u4ECE\u6982\u5FF5\u4E0A\u770B\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u8F93\u5165\u503C\uFF0C\u8FD9\u4E2A\u53C2\u6570\u5C31\u662F <code>props</code>\uFF0C\u6240\u4EE5\u53EF\u4EE5\u628A <code>props</code> \u7406\u89E3\u4E3A\u4ECE\u5916\u90E8\u4F20\u5165\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E</p><p><code>react</code> \u5177\u6709\u5355\u5411\u6570\u636E\u6D41\u7684\u7279\u6027\uFF0C\u6240\u4EE5\u4ED6\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u4ECE\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012\u6570\u636E</p><p><code>props</code> \u9664\u4E86\u53EF\u4EE5\u4F20\u5B57\u7B26\u4E32\uFF0C\u6570\u5B57\uFF0C\u8FD8\u53EF\u4EE5\u4F20\u9012\u5BF9\u8C61\uFF0C\u6570\u7EC4\u751A\u81F3\u662F\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Welcome</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Welcome</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Sara</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onNameChanged</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleName</span><span style="color:#89DDFF;">} /&gt;;</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0 <code>name</code> \u5C5E\u6027\u4E0E <code>onNameChanged</code> \u65B9\u6CD5\u90FD\u80FD\u5728\u5B50\u7EC4\u4EF6\u7684 <code>props</code> \u53D8\u91CF\u4E2D\u8BBF\u95EE</p><p>\u5728\u5B50\u7EC4\u4EF6\u4E2D\uFF0C<code>props</code> \u5728\u5185\u90E8\u4E0D\u53EF\u53D8\u7684\uFF0C\u5982\u679C\u60F3\u8981\u6539\u53D8\u5B83\u770B\uFF0C\u53EA\u80FD\u901A\u8FC7\u5916\u90E8\u7EC4\u4EF6\u4F20\u5165\u65B0\u7684 <code>props</code> \u6765\u91CD\u65B0\u6E32\u67D3\u5B50\u7EC4\u4EF6\uFF0C\u5426\u5219\u5B50\u7EC4\u4EF6\u7684 <code>props</code> \u548C\u5C55\u793A\u5F62\u5F0F\u4E0D\u4F1A\u6539\u53D8</p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1">\u4E09\u3001\u533A\u522B <a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a></h2><p>\u76F8\u540C\u70B9\uFF1A</p><ul><li>\u4E24\u8005\u90FD\u662F JavaScript \u5BF9\u8C61</li><li>\u4E24\u8005\u90FD\u662F\u7528\u4E8E\u4FDD\u5B58\u4FE1\u606F</li><li>props \u548C state \u90FD\u80FD\u89E6\u53D1\u6E32\u67D3\u66F4\u65B0</li></ul><p>\u533A\u522B\uFF1A</p><ul><li>props \u662F\u5916\u90E8\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684\uFF0C\u800C state \u662F\u5728\u7EC4\u4EF6\u5185\u88AB\u7EC4\u4EF6\u81EA\u5DF1\u7BA1\u7406\u7684\uFF0C\u4E00\u822C\u5728 constructor \u4E2D\u521D\u59CB\u5316</li><li>props \u5728\u7EC4\u4EF6\u5185\u90E8\u662F\u4E0D\u53EF\u4FEE\u6539\u7684\uFF0C\u4F46 state \u5728\u7EC4\u4EF6\u5185\u90E8\u53EF\u4EE5\u8FDB\u884C\u4FEE\u6539</li><li>state \u662F\u591A\u53D8\u7684\u3001\u53EF\u4EE5\u4FEE\u6539</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://lucybain.com/blog/2016/react-state-vs-pros/" target="_blank" rel="noreferrer">https://lucybain.com/blog/2016/react-state-vs-pros/</a></li><li><a href="https://juejin.cn/post/6844904009203974158" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904009203974158</a></li></ul>`,23),e=[o];function t(c,r,F,D,y,C){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
