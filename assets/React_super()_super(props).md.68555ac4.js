import{_ as s,c as n,o as a,a as p}from"./app.755f10b0.js";const d=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1Asuper() \u548C super(props) \u6709\u4EC0\u4E48\u533A\u522B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001ES6 \u7C7B","slug":"\u4E00\u3001es6-\u7C7B","link":"#\u4E00\u3001es6-\u7C7B","children":[]},{"level":2,"title":"\u4E8C\u3001\u7C7B\u7EC4\u4EF6","slug":"\u4E8C\u3001\u7C7B\u7EC4\u4EF6","link":"#\u4E8C\u3001\u7C7B\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"React/super()_super(props).md","lastUpdated":1663841780000}'),o={name:"React/super()_super(props).md"},l=p(`<h1 id="\u9762\u8BD5\u5B98\uFF1Asuper-\u548C-super-props-\u6709\u4EC0\u4E48\u533A\u522B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1Asuper() \u548C super(props) \u6709\u4EC0\u4E48\u533A\u522B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1Asuper-\u548C-super-props-\u6709\u4EC0\u4E48\u533A\u522B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/618abaf0-d71c-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001es6-\u7C7B" tabindex="-1">\u4E00\u3001ES6 \u7C7B <a class="header-anchor" href="#\u4E00\u3001es6-\u7C7B" aria-hidden="true">#</a></h2><p>\u5728 <code>ES6</code> \u4E2D\uFF0C\u901A\u8FC7 <code>extends</code> \u5173\u952E\u5B57\u5B9E\u73B0\u7C7B\u7684\u7EE7\u627F\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">printName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sub</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// super\u4EE3\u8868\u7684\u4E8B\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">printAge</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> jack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sub</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">jack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printName</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u8F93\u51FA : jack</span></span>
<span class="line"><span style="color:#A6ACCD;">jack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printAge</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u8F93\u51FA : 20</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u901A\u8FC7 <code>super</code> \u5173\u952E\u5B57\u5B9E\u73B0\u8C03\u7528\u7236\u7C7B\uFF0C<code>super</code> \u4EE3\u66FF\u7684\u662F\u7236\u7C7B\u7684\u6784\u5EFA\u51FD\u6570\uFF0C\u4F7F\u7528 <code>super(name)</code> \u76F8\u5F53\u4E8E\u8C03\u7528 <code>sup.prototype.constructor.call(this,name)</code></p><p>\u5982\u679C\u5728\u5B50\u7C7B\u4E2D\u4E0D\u4F7F\u7528 <code>super</code>\uFF0C\u5173\u952E\u5B57\uFF0C\u5219\u4F1A\u5F15\u53D1\u62A5\u9519\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/6ab40190-d71c-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u62A5\u9519\u7684\u539F\u56E0\u662F \u5B50\u7C7B\u662F\u6CA1\u6709\u81EA\u5DF1\u7684 <code>this</code> \u5BF9\u8C61\u7684\uFF0C\u5B83\u53EA\u80FD\u7EE7\u627F\u7236\u7C7B\u7684 <code>this</code> \u5BF9\u8C61\uFF0C\u7136\u540E\u5BF9\u5176\u8FDB\u884C\u52A0\u5DE5</p><p>\u800C <code>super()</code> \u5C31\u662F\u5C06\u7236\u7C7B\u4E2D\u7684 <code>this</code> \u5BF9\u8C61\u7EE7\u627F\u7ED9\u5B50\u7C7B\u7684\uFF0C\u6CA1\u6709 <code>super()</code> \u5B50\u7C7B\u5C31\u5F97\u4E0D\u5230 <code>this</code> \u5BF9\u8C61</p><p>\u5982\u679C\u5148\u8C03\u7528 <code>this</code>\uFF0C\u518D\u521D\u59CB\u5316 <code>super()</code>\uFF0C\u540C\u6837\u662F\u7981\u6B62\u7684\u884C\u4E3A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sub</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// super\u4EE3\u8868\u7684\u4E8B\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6240\u4EE5\u5728\u5B50\u7C7B <code>constructor</code> \u4E2D\uFF0C\u5FC5\u987B\u5148\u4EE3\u7528 <code>super</code> \u624D\u80FD\u5F15\u7528 <code>this</code></p><h2 id="\u4E8C\u3001\u7C7B\u7EC4\u4EF6" tabindex="-1">\u4E8C\u3001\u7C7B\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E8C\u3001\u7C7B\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728 <code>React</code> \u4E2D\uFF0C\u7C7B\u7EC4\u4EF6\u662F\u57FA\u4E8E <code>ES6</code> \u7684\u89C4\u8303\u5B9E\u73B0\u7684\uFF0C\u7EE7\u627F <code>React.Component</code>\uFF0C\u56E0\u6B64\u5982\u679C\u7528\u5230 <code>constructor</code> \u5C31\u5FC5\u987B\u5199 <code>super()</code> \u624D\u521D\u59CB\u5316 <code>this</code></p><p>\u8FD9\u65F6\u5019\uFF0C\u5728\u8C03\u7528 <code>super()</code> \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E00\u822C\u90FD\u9700\u8981\u4F20\u5165 <code>props</code> \u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u4E0D\u4F20\u8FDB\u53BB\uFF0C<code>React</code> \u5185\u90E8\u4E5F\u4F1A\u5C06\u5176\u5B9A\u4E49\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// React \u5185\u90E8</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> instance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">YourComponent</span><span style="color:#A6ACCD;">(props)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> props</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6240\u4EE5\u65E0\u8BBA\u6709\u6CA1\u6709 <code>constructor</code>\uFF0C\u5728 <code>render</code> \u4E2D <code>this.props</code> \u90FD\u662F\u53EF\u4EE5\u4F7F\u7528\u7684\uFF0C\u8FD9\u662F <code>React</code> \u81EA\u52A8\u9644\u5E26\u7684\uFF0C\u662F\u53EF\u4EE5\u4E0D\u5199\u7684\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloMessage</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">nice to meet you! </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u4E5F\u4E0D\u5EFA\u8BAE\u4F7F\u7528 <code>super()</code> \u4EE3\u66FF <code>super(props)</code></p><p>\u56E0\u4E3A\u5728 <code>React</code> \u4F1A\u5728\u7C7B\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u751F\u6210\u5B9E\u4F8B\u540E\u518D\u7ED9 <code>this.props</code> \u8D4B\u503C\uFF0C\u6240\u4EE5\u5728\u4E0D\u4F20\u9012 <code>props</code> \u5728 <code>super</code> \u7684\u60C5\u51B5\u4E0B\uFF0C\u8C03\u7528 <code>this.props</code> \u4E3A <code>undefined</code>\uFF0C\u5982\u4E0B\u60C5\u51B5\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u6CA1\u4F20\u5165 props</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">      </span><span style="color:#676E95;">//  {}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//  undefined</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u800C\u4F20\u5165 <code>props</code> \u7684\u5219\u90FD\u80FD\u6B63\u5E38\u8BBF\u95EE\uFF0C\u786E\u4FDD\u4E86 <code>this.props</code> \u5728\u6784\u9020\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D\u5DF2\u88AB\u8D4B\u503C\uFF0C\u66F4\u7B26\u5408\u903B\u8F91\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u6CA1\u4F20\u5165 props</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">      </span><span style="color:#676E95;">//  {}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//  {}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1">\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u5728 <code>React</code> \u4E2D\uFF0C\u7C7B\u7EC4\u4EF6\u57FA\u4E8E <code>ES6</code>\uFF0C\u6240\u4EE5\u5728 <code>constructor</code> \u4E2D\u5FC5\u987B\u4F7F\u7528 <code>super</code></p><p>\u5728\u8C03\u7528 <code>super</code> \u8FC7\u7A0B\uFF0C\u65E0\u8BBA\u662F\u5426\u4F20\u5165 <code>props</code>\uFF0C<code>React</code> \u5185\u90E8\u90FD\u4F1A\u5C06 <code>porps</code> \u8D4B\u503C\u7ED9\u7EC4\u4EF6\u5B9E\u4F8B <code>porps</code> \u5C5E\u6027\u4E2D</p><p>\u5982\u679C\u53EA\u8C03\u7528\u4E86 <code>super()</code>\uFF0C\u90A3\u4E48 <code>this.props</code> \u5728 <code>super()</code> \u548C\u6784\u9020\u51FD\u6570\u7ED3\u675F\u4E4B\u95F4\u4ECD\u662F <code>undefined</code></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://overreacted.io/zh-hans/why-do-we-write-super-props/" target="_blank" rel="noreferrer">https://overreacted.io/zh-hans/why-do-we-write-super-props/</a></li><li><a href="https://segmentfault.com/q/1010000008340434" target="_blank" rel="noreferrer">https://segmentfault.com/q/1010000008340434</a></li></ul>`,30),e=[l];function c(t,r,y,F,D,A){return a(),n("div",null,e)}const i=s(o,[["render",c]]);export{d as __pageData,i as default};
