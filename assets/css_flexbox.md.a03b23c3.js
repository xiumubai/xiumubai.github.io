import{_ as s,c as e,o as l,a}from"./app.755f10b0.js";const y=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4flexbox\uFF08\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B\uFF09,\u4EE5\u53CA\u9002\u7528\u573A\u666F\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u5C5E\u6027","slug":"\u4E8C\u3001\u5C5E\u6027","link":"#\u4E8C\u3001\u5C5E\u6027","children":[{"level":3,"title":"flex-direction","slug":"flex-direction","link":"#flex-direction","children":[]},{"level":3,"title":"flex-wrap","slug":"flex-wrap","link":"#flex-wrap","children":[]},{"level":3,"title":"flex-flow","slug":"flex-flow","link":"#flex-flow","children":[]},{"level":3,"title":"justify-content","slug":"justify-content","link":"#justify-content","children":[]},{"level":3,"title":"align-items","slug":"align-items","link":"#align-items","children":[]},{"level":3,"title":"align-content","slug":"align-content","link":"#align-content","children":[]},{"level":3,"title":"order","slug":"order","link":"#order","children":[]},{"level":3,"title":"flex-grow","slug":"flex-grow","link":"#flex-grow","children":[]},{"level":3,"title":"flex-shrink","slug":"flex-shrink","link":"#flex-shrink","children":[]},{"level":3,"title":"flex-basis","slug":"flex-basis","link":"#flex-basis","children":[]},{"level":3,"title":"flex","slug":"flex","link":"#flex","children":[]},{"level":3,"title":"align-self","slug":"align-self","link":"#align-self","children":[]}]},{"level":2,"title":"\u4E09\u3001\u5E94\u7528\u573A\u666F","slug":"\u4E09\u3001\u5E94\u7528\u573A\u666F","link":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"css/flexbox.md","lastUpdated":1663837874000}'),n={name:"css/flexbox.md"},p=a(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4flexbox\uFF08\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B\uFF09-\u4EE5\u53CA\u9002\u7528\u573A\u666F\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4flexbox\uFF08\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B\uFF09,\u4EE5\u53CA\u9002\u7528\u573A\u666F\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4flexbox\uFF08\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B\uFF09-\u4EE5\u53CA\u9002\u7528\u573A\u666F\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/ef25b0a0-9837-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><code>Flexible Box</code> \u7B80\u79F0 <code>flex</code>\uFF0C\u610F\u4E3A\u201D\u5F39\u6027\u5E03\u5C40\u201D\uFF0C\u53EF\u4EE5\u7B80\u4FBF\u3001\u5B8C\u6574\u3001\u54CD\u5E94\u5F0F\u5730\u5B9E\u73B0\u5404\u79CD\u9875\u9762\u5E03\u5C40</p><p>\u91C7\u7528Flex\u5E03\u5C40\u7684\u5143\u7D20\uFF0C\u79F0\u4E3A<code>flex</code>\u5BB9\u5668<code>container</code></p><p>\u5B83\u7684\u6240\u6709\u5B50\u5143\u7D20\u81EA\u52A8\u6210\u4E3A\u5BB9\u5668\u6210\u5458\uFF0C\u79F0\u4E3A<code>flex</code>\u9879\u76EE<code>item</code></p><p><img src="https://static.vue-js.com/fbc5f590-9837-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5BB9\u5668\u4E2D\u9ED8\u8BA4\u5B58\u5728\u4E24\u6761\u8F74\uFF0C\u4E3B\u8F74\u548C\u4EA4\u53C9\u8F74\uFF0C\u544890\u5EA6\u5173\u7CFB\u3002\u9879\u76EE\u9ED8\u8BA4\u6CBF\u4E3B\u8F74\u6392\u5217\uFF0C\u901A\u8FC7<code>flex-direction</code>\u6765\u51B3\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411</p><p>\u6BCF\u6839\u8F74\u90FD\u6709\u8D77\u70B9\u548C\u7EC8\u70B9\uFF0C\u8FD9\u5BF9\u4E8E\u5143\u7D20\u7684\u5BF9\u9F50\u975E\u5E38\u91CD\u8981</p><h2 id="\u4E8C\u3001\u5C5E\u6027" tabindex="-1">\u4E8C\u3001\u5C5E\u6027 <a class="header-anchor" href="#\u4E8C\u3001\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u5173\u4E8E<code>flex</code>\u5E38\u7528\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5212\u5206\u4E3A\u5BB9\u5668\u5C5E\u6027\u548C\u5BB9\u5668\u6210\u5458\u5C5E\u6027</p><p>\u5BB9\u5668\u5C5E\u6027\u6709\uFF1A</p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><h3 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a></h3><p>\u51B3\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411(\u5373\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411)</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> row | row-reverse | column | column-reverse</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p>\u5C5E\u6027\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><ul><li>row\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF</li><li>row-reverse\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u53F3\u7AEF</li><li>column\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF\u3002</li><li>column-reverse\uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0B\u6CBF</li></ul><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/0c9abc70-9838-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a></h3><p>\u5F39\u6027\u5143\u7D20\u6C38\u8FDC\u6CBF\u4E3B\u8F74\u6392\u5217\uFF0C\u90A3\u4E48\u5982\u679C\u4E3B\u8F74\u6392\u4E0D\u4E0B\uFF0C\u901A\u8FC7<code>flex-wrap</code>\u51B3\u5B9A\u5BB9\u5668\u5185\u9879\u76EE\u662F\u5426\u53EF\u6362\u884C</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap | wrap | wrap-reverse</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre></div><p>\u5C5E\u6027\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><ul><li>nowrap\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u4E0D\u6362\u884C</li><li>wrap\uFF1A\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u65B9</li><li>wrap-reverse\uFF1A\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0A\u65B9</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u662F\u4E0D\u6362\u884C\uFF0C\u4F46\u8FD9\u91CC\u4E5F\u4E0D\u4F1A\u4EFB\u7531\u5143\u7D20\u76F4\u63A5\u6EA2\u51FA\u5BB9\u5668\uFF0C\u4F1A\u6D89\u53CA\u5230\u5143\u7D20\u7684\u5F39\u6027\u4F38\u7F29</p><h3 id="flex-flow" tabindex="-1">flex-flow <a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a></h3><p>\u662F<code>flex-direction</code>\u5C5E\u6027\u548C<code>flex-wrap</code>\u5C5E\u6027\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A<code>row nowrap</code></p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-flow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &lt;flex-direction&gt; || &lt;flex-wrap&gt;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-hidden="true">#</a></h3><p>\u5B9A\u4E49\u4E86\u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start | flex-end | center | space-between | space-around</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5C5E\u6027\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><ul><li>flex-start\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u5DE6\u5BF9\u9F50</li><li>flex-end\uFF1A\u53F3\u5BF9\u9F50</li><li>center\uFF1A\u5C45\u4E2D</li><li>space-between\uFF1A\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49</li><li>space-around\uFF1A\u4E24\u4E2A\u9879\u76EE\u4E24\u4FA7\u95F4\u9694\u76F8\u7B49</li></ul><p>\u6548\u679C\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/2d5ca950-9838-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-hidden="true">#</a></h3><p>\u5B9A\u4E49\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u5982\u4F55\u5BF9\u9F50</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start | flex-end | center | baseline | stretch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5C5E\u6027\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><ul><li>flex-start\uFF1A\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50</li><li>flex-end\uFF1A\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50</li><li>center\uFF1A\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50</li><li>baseline: \u9879\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7EBF\u5BF9\u9F50</li><li>stretch\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6</li></ul><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-hidden="true">#</a></h3><p>\u5B9A\u4E49\u4E86\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u5982\u679C\u9879\u76EE\u53EA\u6709\u4E00\u6839\u8F74\u7EBF\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u8D77\u4F5C\u7528</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start | flex-end | center | space-between | space-around | stretch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5C5E\u6027\u5BF9\u5E94\u5982\u5413\uFF1A</p><ul><li>flex-start\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50</li><li>flex-end\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50</li><li>center\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50</li><li>space-between\uFF1A\u4E0E\u4EA4\u53C9\u8F74\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u5E73\u5747\u5206\u5E03</li><li>space-around\uFF1A\u6BCF\u6839\u8F74\u7EBF\u4E24\u4FA7\u7684\u95F4\u9694\u90FD\u76F8\u7B49\u3002\u6240\u4EE5\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u6BD4\u8F74\u7EBF\u4E0E\u8FB9\u6846\u7684\u95F4\u9694\u5927\u4E00\u500D</li><li>stretch\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1A\u8F74\u7EBF\u5360\u6EE1\u6574\u4E2A\u4EA4\u53C9\u8F74</li></ul><p>\u6548\u679C\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/39bcb0f0-9838-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5BB9\u5668\u6210\u5458\u5C5E\u6027\u5982\u4E0B\uFF1A</p><ul><li><code>order</code></li><li><code>flex-grow</code></li><li><code>flex-shrink</code></li><li><code>flex-basis</code></li><li><code>flex</code></li><li><code>align-self</code></li></ul><h3 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-hidden="true">#</a></h3><p>\u5B9A\u4E49\u9879\u76EE\u7684\u6392\u5217\u987A\u5E8F\u3002\u6570\u503C\u8D8A\u5C0F\uFF0C\u6392\u5217\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u4E3A0</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">order</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &lt;integer&gt;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="flex-grow" tabindex="-1">flex-grow <a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a></h3><p>\u4E0A\u9762\u8BB2\u5230\u5F53\u5BB9\u5668\u8BBE\u4E3A<code>flex-wrap: nowrap;</code>\u4E0D\u6362\u884C\u7684\u65F6\u5019\uFF0C\u5BB9\u5668\u5BBD\u5EA6\u6709\u4E0D\u591F\u5206\u7684\u60C5\u51B5\uFF0C\u5F39\u6027\u5143\u7D20\u4F1A\u6839\u636E<code>flex-grow</code>\u6765\u51B3\u5B9A</p><p>\u5B9A\u4E49\u9879\u76EE\u7684\u653E\u5927\u6BD4\u4F8B\uFF08\u5BB9\u5668\u5BBD\u5EA6&gt;\u5143\u7D20\u603B\u5BBD\u5EA6\u65F6\u5982\u4F55\u4F38\u5C55\uFF09</p><p>\u9ED8\u8BA4\u4E3A<code>0</code>\uFF0C\u5373\u5982\u679C\u5B58\u5728\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E5F\u4E0D\u653E\u5927</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-grow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &lt;number&gt;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6240\u6709\u9879\u76EE\u7684<code>flex-grow</code>\u5C5E\u6027\u90FD\u4E3A1\uFF0C\u5219\u5B83\u4EEC\u5C06\u7B49\u5206\u5269\u4F59\u7A7A\u95F4\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09</p><p><img src="https://static.vue-js.com/48c8c5c0-9838-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u7684<code>flex-grow</code>\u5C5E\u6027\u4E3A2\uFF0C\u5176\u4ED6\u9879\u76EE\u90FD\u4E3A1\uFF0C\u5219\u524D\u8005\u5360\u636E\u7684\u5269\u4F59\u7A7A\u95F4\u5C06\u6BD4\u5176\u4ED6\u9879\u591A\u4E00\u500D</p><p><img src="https://static.vue-js.com/5b822b20-9838-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5F39\u6027\u5BB9\u5668\u7684\u5BBD\u5EA6\u6B63\u597D\u7B49\u4E8E\u5143\u7D20\u5BBD\u5EA6\u603B\u548C\uFF0C\u65E0\u591A\u4F59\u5BBD\u5EA6\uFF0C\u6B64\u65F6\u65E0\u8BBA<code>flex-grow</code>\u662F\u4EC0\u4E48\u503C\u90FD\u4E0D\u4F1A\u751F\u6548</p><h3 id="flex-shrink" tabindex="-1">flex-shrink <a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a></h3><p>\u5B9A\u4E49\u4E86\u9879\u76EE\u7684\u7F29\u5C0F\u6BD4\u4F8B\uFF08\u5BB9\u5668\u5BBD\u5EA6&lt;\u5143\u7D20\u603B\u5BBD\u5EA6\u65F6\u5982\u4F55\u6536\u7F29\uFF09\uFF0C\u9ED8\u8BA4\u4E3A1\uFF0C\u5373\u5982\u679C\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u8BE5\u9879\u76EE\u5C06\u7F29\u5C0F</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-shrink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &lt;number&gt;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* default 1 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6240\u6709\u9879\u76EE\u7684<code>flex-shrink</code>\u5C5E\u6027\u90FD\u4E3A1\uFF0C\u5F53\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u90FD\u5C06\u7B49\u6BD4\u4F8B\u7F29\u5C0F</p><p>\u5982\u679C\u4E00\u4E2A\u9879\u76EE\u7684<code>flex-shrink</code>\u5C5E\u6027\u4E3A0\uFF0C\u5176\u4ED6\u9879\u76EE\u90FD\u4E3A1\uFF0C\u5219\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u524D\u8005\u4E0D\u7F29\u5C0F</p><p><img src="https://static.vue-js.com/658c5be0-9838-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5728\u5BB9\u5668\u5BBD\u5EA6\u6709\u5269\u4F59\u65F6\uFF0C<code>flex-shrink</code>\u4E5F\u662F\u4E0D\u4F1A\u751F\u6548\u7684</p><h3 id="flex-basis" tabindex="-1">flex-basis <a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a></h3><p>\u8BBE\u7F6E\u7684\u662F\u5143\u7D20\u5728\u4E3B\u8F74\u4E0A\u7684\u521D\u59CB\u5C3A\u5BF8\uFF0C\u6240\u8C13\u7684\u521D\u59CB\u5C3A\u5BF8\u5C31\u662F\u5143\u7D20\u5728<code>flex-grow</code>\u548C<code>flex-shrink</code>\u751F\u6548\u524D\u7684\u5C3A\u5BF8</p><p>\u6D4F\u89C8\u5668\u6839\u636E\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u8BA1\u7B97\u4E3B\u8F74\u662F\u5426\u6709\u591A\u4F59\u7A7A\u95F4\uFF0C\u9ED8\u8BA4\u503C\u4E3A<code>auto</code>\uFF0C\u5373\u9879\u76EE\u7684\u672C\u6765\u5927\u5C0F\uFF0C\u5982\u8BBE\u7F6E\u4E86<code>width</code>\u5219\u5143\u7D20\u5C3A\u5BF8\u7531<code>width/height</code>\u51B3\u5B9A\uFF08\u4E3B\u8F74\u65B9\u5411\uFF09\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u5219\u7531\u5185\u5BB9\u51B3\u5B9A</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">flex-basis</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &lt;length&gt; | auto</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* default auto */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u8BBE\u7F6E\u4E3A0\u7684\u662F\uFF0C\u4F1A\u6839\u636E\u5185\u5BB9\u6491\u5F00</p><p>\u5B83\u53EF\u4EE5\u8BBE\u4E3A\u8DDF<code>width</code>\u6216<code>height</code>\u5C5E\u6027\u4E00\u6837\u7684\u503C\uFF08\u6BD4\u5982350px\uFF09\uFF0C\u5219\u9879\u76EE\u5C06\u5360\u636E\u56FA\u5B9A\u7A7A\u95F4</p><h3 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-hidden="true">#</a></h3><p><code>flex</code>\u5C5E\u6027\u662F<code>flex-grow</code>, <code>flex-shrink</code> \u548C <code>flex-basis</code>\u7684\u7B80\u5199\uFF0C\u9ED8\u8BA4\u503C\u4E3A<code>0 1 auto</code>\uFF0C\u4E5F\u662F\u6BD4\u8F83\u96BE\u61C2\u7684\u4E00\u4E2A\u590D\u5408\u5C5E\u6027</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none | [ &lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flex-grow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">&gt; &lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flex-shrink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">&gt;? || &lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flex-basis</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">&gt; ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u4E9B\u5C5E\u6027\u6709\uFF1A</p><ul><li>flex: 1 = flex: 1 1 0%</li><li>flex: 2 = flex: 2 1 0%</li><li>flex: auto = flex: 1 1 auto</li><li>flex: none = flex: 0 0 auto\uFF0C\u5E38\u7528\u4E8E\u56FA\u5B9A\u5C3A\u5BF8\u4E0D\u4F38\u7F29</li></ul><p><code>flex:1</code> \u548C <code>flex:auto</code> \u7684\u533A\u522B\uFF0C\u53EF\u4EE5\u5F52\u7ED3\u4E8E<code>flex-basis:0</code>\u548C<code>flex-basis:auto</code>\u7684\u533A\u522B</p><p>\u5F53\u8BBE\u7F6E\u4E3A0\u65F6\uFF08\u7EDD\u5BF9\u5F39\u6027\u5143\u7D20\uFF09\uFF0C\u6B64\u65F6\u76F8\u5F53\u4E8E\u544A\u8BC9<code>flex-grow</code>\u548C<code>flex-shrink</code>\u5728\u4F38\u7F29\u7684\u65F6\u5019\u4E0D\u9700\u8981\u8003\u8651\u6211\u7684\u5C3A\u5BF8</p><p>\u5F53\u8BBE\u7F6E\u4E3A<code>auto</code>\u65F6\uFF08\u76F8\u5BF9\u5F39\u6027\u5143\u7D20\uFF09\uFF0C\u6B64\u65F6\u5219\u9700\u8981\u5728\u4F38\u7F29\u65F6\u5C06\u5143\u7D20\u5C3A\u5BF8\u7EB3\u5165\u8003\u8651</p><p>\u6CE8\u610F\uFF1A\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u5199\u4E09\u4E2A\u5206\u79BB\u7684\u5C5E\u6027\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u4F1A\u63A8\u7B97\u76F8\u5173\u503C</p><h3 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-hidden="true">#</a></h3><p>\u5141\u8BB8\u5355\u4E2A\u9879\u76EE\u6709\u4E0E\u5176\u4ED6\u9879\u76EE\u4E0D\u4E00\u6837\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u8986\u76D6<code>align-items</code>\u5C5E\u6027</p><p>\u9ED8\u8BA4\u503C\u4E3A<code>auto</code>\uFF0C\u8868\u793A\u7EE7\u627F\u7236\u5143\u7D20\u7684<code>align-items</code>\u5C5E\u6027\uFF0C\u5982\u679C\u6CA1\u6709\u7236\u5143\u7D20\uFF0C\u5219\u7B49\u540C\u4E8E<code>stretch</code></p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-self</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto | flex-start | flex-end | center | baseline | stretch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6548\u679C\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/6f8304a0-9838-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1">\u4E09\u3001\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5728\u4EE5\u524D\u7684\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u80FD\u591F\u901A\u8FC7<code>flex</code>\u7B80\u5355\u7C97\u66B4\u7684\u5B9E\u73B0\u5143\u7D20\u6C34\u5E73\u5782\u76F4\u65B9\u5411\u7684\u5C45\u4E2D\uFF0C\u4EE5\u53CA\u5728\u4E24\u680F\u4E09\u680F\u81EA\u9002\u5E94\u5E03\u5C40\u4E2D\u901A\u8FC7<code>flex</code>\u5B8C\u6210\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u5C55\u5F00\u4EE3\u7801\u7684\u6F14\u793A</p><p>\u5305\u62EC\u73B0\u5728\u5728\u79FB\u52A8\u7AEF\u3001\u5C0F\u7A0B\u5E8F\u8FD9\u8FB9\u7684\u5F00\u53D1\uFF0C\u90FD\u5EFA\u8BAE\u4F7F\u7528<code>flex</code>\u8FDB\u884C\u5E03\u5C40</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex</a></li><li><a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</a></li></ul>`,96),o=[p];function c(t,r,i,d,D,f){return l(),e("div",null,o)}const x=s(n,[["render",c]]);export{y as __pageData,x as default};
