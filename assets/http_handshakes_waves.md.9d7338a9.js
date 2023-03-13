import{_ as e,c as a,o as t,a as l}from"./app.755f10b0.js";const b=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4TCP\u4E3A\u4EC0\u4E48\u9700\u8981\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u4E09\u6B21\u63E1\u624B","slug":"\u4E00\u3001\u4E09\u6B21\u63E1\u624B","link":"#\u4E00\u3001\u4E09\u6B21\u63E1\u624B","children":[{"level":3,"title":"\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E24\u6B21\u63E1\u624B?","slug":"\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E24\u6B21\u63E1\u624B","link":"#\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E24\u6B21\u63E1\u624B","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u56DB\u6B21\u6325\u624B","slug":"\u4E8C\u3001\u56DB\u6B21\u6325\u624B","link":"#\u4E8C\u3001\u56DB\u6B21\u6325\u624B","children":[{"level":3,"title":"\u56DB\u6B21\u6325\u624B\u539F\u56E0","slug":"\u56DB\u6B21\u6325\u624B\u539F\u56E0","link":"#\u56DB\u6B21\u6325\u624B\u539F\u56E0","children":[]}]},{"level":2,"title":"\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"http/handshakes_waves.md","lastUpdated":1663851972000}'),i={name:"http/handshakes_waves.md"},c=l('<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4tcp\u4E3A\u4EC0\u4E48\u9700\u8981\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4TCP\u4E3A\u4EC0\u4E48\u9700\u8981\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4tcp\u4E3A\u4EC0\u4E48\u9700\u8981\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/ef4696a0-beb9-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u4E09\u6B21\u63E1\u624B" tabindex="-1">\u4E00\u3001\u4E09\u6B21\u63E1\u624B <a class="header-anchor" href="#\u4E00\u3001\u4E09\u6B21\u63E1\u624B" aria-hidden="true">#</a></h2><p>\u4E09\u6B21\u63E1\u624B\uFF08Three-way Handshake\uFF09\u5176\u5B9E\u5C31\u662F\u6307\u5EFA\u7ACB\u4E00\u4E2ATCP\u8FDE\u63A5\u65F6\uFF0C\u9700\u8981\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u603B\u5171\u53D1\u90013\u4E2A\u5305</p><p>\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u4E3A\u4E86\u786E\u8BA4\u53CC\u65B9\u7684\u63A5\u6536\u80FD\u529B\u548C\u53D1\u9001\u80FD\u529B\u662F\u5426\u6B63\u5E38\u3001\u6307\u5B9A\u81EA\u5DF1\u7684\u521D\u59CB\u5316\u5E8F\u5217\u53F7\u4E3A\u540E\u9762\u7684\u53EF\u9760\u6027\u4F20\u9001\u505A\u51C6\u5907</p><p>\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u7ED9\u670D\u52A1\u7AEF\u53D1\u4E00\u4E2A SYN \u62A5\u6587\uFF0C\u5E76\u6307\u660E\u5BA2\u6237\u7AEF\u7684\u521D\u59CB\u5316\u5E8F\u5217\u53F7 ISN(c)\uFF0C\u6B64\u65F6\u5BA2\u6237\u7AEF\u5904\u4E8E SYN_SENT \u72B6\u6001</li><li>\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF1A\u670D\u52A1\u5668\u6536\u5230\u5BA2\u6237\u7AEF\u7684 SYN \u62A5\u6587\u4E4B\u540E\uFF0C\u4F1A\u4EE5\u81EA\u5DF1\u7684 SYN \u62A5\u6587\u4F5C\u4E3A\u5E94\u7B54\uFF0C\u4E3A\u4E86\u786E\u8BA4\u5BA2\u6237\u7AEF\u7684 SYN\uFF0C\u5C06\u5BA2\u6237\u7AEF\u7684 ISN+1\u4F5C\u4E3AACK\u7684\u503C\uFF0C\u6B64\u65F6\u670D\u52A1\u5668\u5904\u4E8E SYN_RCVD \u7684\u72B6\u6001</li><li>\u7B2C\u4E09\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u6536\u5230 SYN \u62A5\u6587\u4E4B\u540E\uFF0C\u4F1A\u53D1\u9001\u4E00\u4E2A ACK \u62A5\u6587\uFF0C\u503C\u4E3A\u670D\u52A1\u5668\u7684ISN+1\u3002\u6B64\u65F6\u5BA2\u6237\u7AEF\u5904\u4E8E ESTABLISHED \u72B6\u6001\u3002\u670D\u52A1\u5668\u6536\u5230 ACK \u62A5\u6587\u4E4B\u540E\uFF0C\u4E5F\u5904\u4E8E ESTABLISHED \u72B6\u6001\uFF0C\u6B64\u65F6\uFF0C\u53CC\u65B9\u5DF2\u5EFA\u7ACB\u8D77\u4E86\u8FDE\u63A5</li></ul><p><img src="https://static.vue-js.com/fb489fc0-beb9-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u4E0A\u8FF0\u6BCF\u4E00\u6B21\u63E1\u624B\u7684\u4F5C\u7528\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u53D1\u9001\u7F51\u7EDC\u5305\uFF0C\u670D\u52A1\u7AEF\u6536\u5230\u4E86 \u8FD9\u6837\u670D\u52A1\u7AEF\u5C31\u80FD\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u5BA2\u6237\u7AEF\u7684\u53D1\u9001\u80FD\u529B\u3001\u670D\u52A1\u7AEF\u7684\u63A5\u6536\u80FD\u529B\u662F\u6B63\u5E38\u7684\u3002</li><li>\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF1A\u670D\u52A1\u7AEF\u53D1\u5305\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u4E86 \u8FD9\u6837\u5BA2\u6237\u7AEF\u5C31\u80FD\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u670D\u52A1\u7AEF\u7684\u63A5\u6536\u3001\u53D1\u9001\u80FD\u529B\uFF0C\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u3001\u53D1\u9001\u80FD\u529B\u662F\u6B63\u5E38\u7684\u3002\u4E0D\u8FC7\u6B64\u65F6\u670D\u52A1\u5668\u5E76\u4E0D\u80FD\u786E\u8BA4\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u80FD\u529B\u662F\u5426\u6B63\u5E38</li><li>\u7B2C\u4E09\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u53D1\u5305\uFF0C\u670D\u52A1\u7AEF\u6536\u5230\u4E86\u3002 \u8FD9\u6837\u670D\u52A1\u7AEF\u5C31\u80FD\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u3001\u53D1\u9001\u80FD\u529B\u6B63\u5E38\uFF0C\u670D\u52A1\u5668\u81EA\u5DF1\u7684\u53D1\u9001\u3001\u63A5\u6536\u80FD\u529B\u4E5F\u6B63\u5E38</li></ul><p>\u901A\u8FC7\u4E09\u6B21\u63E1\u624B\uFF0C\u5C31\u80FD\u786E\u5B9A\u53CC\u65B9\u7684\u63A5\u6536\u548C\u53D1\u9001\u80FD\u529B\u662F\u6B63\u5E38\u7684\u3002\u4E4B\u540E\u5C31\u53EF\u4EE5\u6B63\u5E38\u901A\u4FE1\u4E86</p><h3 id="\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E24\u6B21\u63E1\u624B" tabindex="-1">\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E24\u6B21\u63E1\u624B? <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E24\u6B21\u63E1\u624B" aria-hidden="true">#</a></h3><p>\u5982\u679C\u662F\u4E24\u6B21\u63E1\u624B\uFF0C\u53D1\u9001\u7AEF\u53EF\u4EE5\u786E\u5B9A\u81EA\u5DF1\u53D1\u9001\u7684\u4FE1\u606F\u80FD\u5BF9\u65B9\u80FD\u6536\u5230\uFF0C\u4E5F\u80FD\u786E\u5B9A\u5BF9\u65B9\u53D1\u7684\u5305\u81EA\u5DF1\u80FD\u6536\u5230\uFF0C\u4F46\u63A5\u6536\u7AEF\u53EA\u80FD\u786E\u5B9A\u5BF9\u65B9\u53D1\u7684\u5305\u81EA\u5DF1\u80FD\u6536\u5230 \u65E0\u6CD5\u786E\u5B9A\u81EA\u5DF1\u53D1\u7684\u5305\u5BF9\u65B9\u80FD\u6536\u5230</p><p>\u5E76\u4E14\u4E24\u6B21\u63E1\u624B\u7684\u8BDD, \u5BA2\u6237\u7AEF\u6709\u53EF\u80FD\u56E0\u4E3A\u7F51\u7EDC\u963B\u585E\u7B49\u539F\u56E0\u4F1A\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\u62A5\u6587\uFF0C\u5EF6\u65F6\u5230\u8FBE\u7684\u8BF7\u6C42\u53C8\u4F1A\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u6D6A\u8D39\u6389\u8BB8\u591A\u670D\u52A1\u5668\u7684\u8D44\u6E90</p><h2 id="\u4E8C\u3001\u56DB\u6B21\u6325\u624B" tabindex="-1">\u4E8C\u3001\u56DB\u6B21\u6325\u624B <a class="header-anchor" href="#\u4E8C\u3001\u56DB\u6B21\u6325\u624B" aria-hidden="true">#</a></h2><p><code>tcp</code>\u7EC8\u6B62\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u9700\u8981\u7ECF\u8FC7\u56DB\u6B21\u6325\u624B</p><p>\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u6B21\u6325\u624B\uFF1A\u5BA2\u6237\u7AEF\u53D1\u9001\u4E00\u4E2A FIN \u62A5\u6587\uFF0C\u62A5\u6587\u4E2D\u4F1A\u6307\u5B9A\u4E00\u4E2A\u5E8F\u5217\u53F7\u3002\u6B64\u65F6\u5BA2\u6237\u7AEF\u5904\u4E8E FIN_WAIT1 \u72B6\u6001\uFF0C\u505C\u6B62\u53D1\u9001\u6570\u636E\uFF0C\u7B49\u5F85\u670D\u52A1\u7AEF\u7684\u786E\u8BA4</li><li>\u7B2C\u4E8C\u6B21\u6325\u624B\uFF1A\u670D\u52A1\u7AEF\u6536\u5230 FIN \u4E4B\u540E\uFF0C\u4F1A\u53D1\u9001 ACK \u62A5\u6587\uFF0C\u4E14\u628A\u5BA2\u6237\u7AEF\u7684\u5E8F\u5217\u53F7\u503C +1 \u4F5C\u4E3A ACK \u62A5\u6587\u7684\u5E8F\u5217\u53F7\u503C\uFF0C\u8868\u660E\u5DF2\u7ECF\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u62A5\u6587\u4E86\uFF0C\u6B64\u65F6\u670D\u52A1\u7AEF\u5904\u4E8E CLOSE_WAIT\u72B6\u6001</li><li>\u7B2C\u4E09\u6B21\u6325\u624B\uFF1A\u5982\u679C\u670D\u52A1\u7AEF\u4E5F\u60F3\u65AD\u5F00\u8FDE\u63A5\u4E86\uFF0C\u548C\u5BA2\u6237\u7AEF\u7684\u7B2C\u4E00\u6B21\u6325\u624B\u4E00\u6837\uFF0C\u53D1\u7ED9 FIN \u62A5\u6587\uFF0C\u4E14\u6307\u5B9A\u4E00\u4E2A\u5E8F\u5217\u53F7\u3002\u6B64\u65F6\u670D\u52A1\u7AEF\u5904\u4E8E <code>LAST_ACK</code> \u7684\u72B6\u6001</li><li>\u7B2C\u56DB\u6B21\u6325\u624B\uFF1A\u5BA2\u6237\u7AEF\u6536\u5230 FIN \u4E4B\u540E\uFF0C\u4E00\u6837\u53D1\u9001\u4E00\u4E2A ACK \u62A5\u6587\u4F5C\u4E3A\u5E94\u7B54\uFF0C\u4E14\u628A\u670D\u52A1\u7AEF\u7684\u5E8F\u5217\u53F7\u503C +1 \u4F5C\u4E3A\u81EA\u5DF1 ACK \u62A5\u6587\u7684\u5E8F\u5217\u53F7\u503C\uFF0C\u6B64\u65F6\u5BA2\u6237\u7AEF\u5904\u4E8E TIME_WAIT\u72B6\u6001\u3002\u9700\u8981\u8FC7\u4E00\u9635\u5B50\u4EE5\u786E\u4FDD\u670D\u52A1\u7AEF\u6536\u5230\u81EA\u5DF1\u7684 ACK \u62A5\u6587\u4E4B\u540E\u624D\u4F1A\u8FDB\u5165 CLOSED \u72B6\u6001\uFF0C\u670D\u52A1\u7AEF\u6536\u5230 ACK \u62A5\u6587\u4E4B\u540E\uFF0C\u5C31\u5904\u4E8E\u5173\u95ED\u8FDE\u63A5\u4E86\uFF0C\u5904\u4E8E CLOSED \u72B6\u6001</li></ul><p><img src="https://static.vue-js.com/0a3ebb90-beba-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="\u56DB\u6B21\u6325\u624B\u539F\u56E0" tabindex="-1">\u56DB\u6B21\u6325\u624B\u539F\u56E0 <a class="header-anchor" href="#\u56DB\u6B21\u6325\u624B\u539F\u56E0" aria-hidden="true">#</a></h3><p>\u670D\u52A1\u7AEF\u5728\u6536\u5230\u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5<code>Fin</code>\u62A5\u6587\u540E\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u5173\u95ED\u8FDE\u63A5\uFF0C\u800C\u662F\u5148\u53D1\u9001\u4E00\u4E2A<code>ACK</code>\u5305\u5148\u544A\u8BC9\u5BA2\u6237\u7AEF\u6536\u5230\u5173\u95ED\u8FDE\u63A5\u7684\u8BF7\u6C42\uFF0C\u53EA\u6709\u5F53\u670D\u52A1\u5668\u7684\u6240\u6709\u62A5\u6587\u53D1\u9001\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u624D\u53D1\u9001<code>FIN</code>\u62A5\u6587\u65AD\u5F00\u8FDE\u63A5\uFF0C\u56E0\u6B64\u9700\u8981\u56DB\u6B21\u6325\u624B</p><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1">\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u4E09\u6B21\u63E1\u624B\u56DB\u6B21\u6325\u624B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/65941490-beba-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/53374516" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/53374516</a></li><li><a href="https://segmentfault.com/a/1190000020610336" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000020610336</a></li></ul>',26),h=[c];function r(s,d,n,p,o,_){return t(),a("div",null,h)}const f=e(i,[["render",r]]);export{b as __pageData,f as default};
