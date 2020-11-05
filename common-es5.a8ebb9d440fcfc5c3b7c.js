!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{EcY3:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var c=o("hlQ1"),u=o("fXoL"),a=function(){var t=function(t){r(o,t);var e=i(o);function o(t){return n(this,o),e.call(this,"PokemonItem",t)}return o}(c.b);return t.\u0275fac=function(e){return new(e||t)(u.Zb(c.c))},t.\u0275prov=u.Ib({token:t,factory:t.\u0275fac}),t}()},"J+3D":function(t,e,n){"use strict";n.r(e),n.d(e,"addFavorite",(function(){return o})),n.d(e,"removeFavorite",(function(){return i}));var r=n("l7P3"),o=Object(r.p)("[Pokemon List] Add New Favorite",Object(r.u)()),i=Object(r.p)("[Pokemon List] Remove Favorite",Object(r.u)())},SDlU:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return b}));var r=n("l7P3"),o=n("R0sL"),i=Object(r.q)("pokemonsState"),c=Object(r.s)(i,(function(t){return t.favoritePokemonList})),u=Object(r.s)(i,(function(t){return t.isComparing})),a=Object(r.s)(i,(function(t){return t.searchContent})),f=Object(r.q)("entityCache"),s=Object(o.a)().getSelectors().selectAll,p=Object(r.s)(f,(function(t){return t.PokemonItem})),l=Object(r.s)(p,s),b=Object(r.s)(l,(function(t,e){return t.find((function(t){return t.id===e.id}))}))},Y3La:function(t,e,n){"use strict";n.r(e),n.d(e,"selectFirstPokemon",(function(){return o})),n.d(e,"selectSecondPokemon",(function(){return i})),n.d(e,"updateIsComparing",(function(){return c})),n.d(e,"updateSearchContent",(function(){return u}));var r=n("l7P3"),o=Object(r.p)("[Pokemon List] Select First Pokemon",Object(r.u)()),i=Object(r.p)("[Pokemon List] Select Second Pokemon",Object(r.u)()),c=Object(r.p)("[Pokemon List] Update isComparing Flag"),u=Object(r.p)("[Pokemon List] Update Search Content",Object(r.u)())},i508:function(t,r,o){"use strict";o.d(r,"a",(function(){return s}));var i=o("vkgz"),c=o("pLZG"),u=o("SxV6"),a=o("fXoL"),f=o("EcY3"),s=function(){var t=function(){function t(e){n(this,t),this.pokemonsService=e}return e(t,[{key:"resolve",value:function(t,e){var n=this;return this.pokemonsService.loaded$.pipe(Object(i.a)((function(t){t||n.pokemonsService.getAll()})),Object(c.a)((function(t){return!!t})),Object(u.a)())}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Zb(f.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac}),t}()},kg5w:function(t,o,c){"use strict";c.d(o,"a",(function(){return d}));var u,a=c("lJxs"),f=c("itXk"),s=c("hlQ1"),p=c("AytR"),l=function(){function t(){n(this,t)}return e(t,null,[{key:"buildPokemon",value:function(t,e,n){return{id:t+1+parseInt(n),name:e.name,url:e.url,imageUrl:p.a.SPRITES_URL+(t+parseInt(n)+1)+".png"}}},{key:"buildFullPokemon",value:function(t,e){var n=e[0],r=e[1];return{id:t.changes.id,name:t.changes.name,url:t.changes.url,imageUrl:t.changes.imageUrl,description:r.flavor_text_entries[0].flavor_text,information:{height:n.height,weight:n.weight,gender:this.getStringGender(r.gender_rate)},abilities:n.abilities,types:n.types,stats:n.stats}}},{key:"getStringGender",value:function(t){return t>=0&&t<=4?"Male":t>=4&&t<=8?"Female":-1===t?"Genderless":"Unknown"}}]),t}(),b=c("fXoL"),h=c("tk/3"),d=((u=function(t){r(c,t);var o=i(c);function c(t,e){return n(this,c),o.call(this,"PokemonItem",t,e)}return e(c,[{key:"getAll",value:function(){var t=[];return this.http.get("https://pokeapi.co/api/v2/pokemon").pipe(Object(a.a)((function(e){return e.results.map((function(e,n){return t.push(l.buildPokemon(n,e,"0"))})),t})))}},{key:"getWithQuery",value:function(t){var e=[];return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=".concat(t.offset,"&limit=").concat(t.limit)).pipe(Object(a.a)((function(n){return n.results.map((function(n,r){return e.push(l.buildPokemon(r,n,t.offset.toString()))})),e})))}},{key:"update",value:function(t){return Object(f.a)([this.http.get("https://pokeapi.co/api/v2/pokemon/"+t.id),this.http.get("https://pokeapi.co/api/v2/pokemon-species/"+t.id)]).pipe(Object(a.a)((function(e){return l.buildFullPokemon(t,e)})))}}]),c}(s.a)).\u0275fac=function(t){return new(t||u)(b.Zb(h.a),b.Zb(s.g))},u.\u0275prov=b.Ib({token:u,factory:u.\u0275fac}),u)}}])}();