!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"08bT":function(t,i,r){"use strict";r.r(i),r.d(i,"homePageRoutes",(function(){return _})),r.d(i,"HomePageModule",(function(){return x}));var a=r("kg5w"),c=r("i508"),s=r("EcY3"),m=r("l7P3"),l=r("tyNb"),u=r("ofXK"),g=r("SDlU"),f=r("fXoL"),b=r("1kSV");function d(e,t){if(1&e&&(f.Rb(0,"div",3),f.Nb(1,"img",4),f.Qb(),f.Rb(2,"h3",5),f.Bc(3),f.Qb()),2&e){var n=f.ec().$implicit;f.zb(1),f.jc("src",n.imageUrl,f.sc),f.zb(2),f.Cc(n.name)}}function p(e,t){1&e&&f.zc(0,d,4,2,"ng-template",2)}var h,v,w,O=((v=function e(){o(this,e)}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=f.Gb({type:v,selectors:[["app-favorite-carousel"]],inputs:{favoritesList:"favoritesList"},decls:2,vars:1,consts:[[1,"carousel"],[4,"ngFor","ngForOf"],["class","carousel-slide","ngbSlide",""],[1,"picsum-img-wrapper"],["alt","Pok\xe9mon",1,"carousel-img",3,"src"],[1,"carousel-title"]],template:function(e,t){1&e&&(f.Rb(0,"ngb-carousel",0),f.zc(1,p,1,0,void 0,1),f.Qb()),2&e&&(f.zb(1),f.jc("ngForOf",t.favoritesList))},directives:[b.a,u.l,b.c],styles:[".carousel[_ngcontent-%COMP%]{height:20rem;width:40vw;overflow:hidden}.carousel-slide[_ngcontent-%COMP%]{height:100%;position:relative}.picsum-img-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.carousel-img[_ngcontent-%COMP%]{width:15rem;height:15rem;margin-bottom:2rem}.carousel-title[_ngcontent-%COMP%]{color:var(--black);position:absolute;bottom:2rem;bottom:0;left:50%;text-transform:capitalize;transform:translate(-50%);font-weight:700;font-size:var(--carouse-title-size)}@media (max-width:600px){.carousel[_ngcontent-%COMP%]{width:70vw}}@media (max-width:900px){.carousel[_ngcontent-%COMP%]{width:60vw}}"]}),v),P=((h=function(){function e(t,n){o(this,e),this.pokemonService=t,this.store=n}var t,i,r;return t=e,(i=[{key:"ngOnInit",value:function(){this.favoritePokemonsList$=this.store.select(g.a)}}])&&n(t.prototype,i),r&&n(t,r),e}()).\u0275fac=function(e){return new(e||h)(f.Mb(s.a),f.Mb(m.i))},h.\u0275cmp=f.Gb({type:h,selectors:[["app-home-page"]],decls:7,vars:3,consts:[[1,"welcome-container"],[1,"welcome-card"],[1,"welcome-message-container"],[1,"welcome-message"],[3,"favoritesList"]],template:function(e,t){1&e&&(f.Rb(0,"div",0),f.Rb(1,"div",1),f.Rb(2,"div",2),f.Rb(3,"h1",3),f.Bc(4,"Favorite Pokemons"),f.Qb(),f.Nb(5,"app-favorite-carousel",4),f.fc(6,"async"),f.Qb(),f.Qb(),f.Qb()),2&e&&(f.zb(5),f.jc("favoritesList",f.gc(6,1,t.favoritePokemonsList$)))},directives:[O],pipes:[u.b],styles:[".welcome-container[_ngcontent-%COMP%]{position:relative;background:url(/assets/images/pokedex-bg.jpg);height:100vh}.welcome-card[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50vw;height:50vh;background:var(--light-white);border-radius:5rem}.welcome-message-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.welcome-message[_ngcontent-%COMP%]{font-size:var(--welcome-message-size);margin-bottom:1rem;text-align:center;color:var(--light-black)}@media (max-width:900px){.welcome-card[_ngcontent-%COMP%]{width:70vw;height:50vh}.welcome-img[_ngcontent-%COMP%]{width:5rem}}@media (max-width:600px){.welcome-card[_ngcontent-%COMP%]{width:80vw;height:50vh}.welcome-message[_ngcontent-%COMP%]{font-size:var(--big-welcome-message-size)}.welcome-button[_ngcontent-%COMP%]{text-decoration:none;color:var(--white);background:var(--redish);padding:.8rem 1.5rem;border-radius:1rem}.welcome-img[_ngcontent-%COMP%]{width:4rem}}"]}),h),k=r("cxbk"),y=r("J+3D"),j=r("Y3La"),C={favoritePokemonList:[{id:1,name:"Bulbasaur",imageUrl:k.a.SPRITES_URL+"1.png"},{id:4,name:"Charmander",imageUrl:k.a.SPRITES_URL+"4.png"},{id:7,name:"Squirtle",imageUrl:k.a.SPRITES_URL+"7.png"}],isComparing:!1,firstPokemon:void 0,secondPokemon:void 0,searchContent:""},M=Object(m.r)(C,Object(m.t)(y.addFavorite,(function(t,n){return Object.assign(Object.assign({},t),{favoritePokemonList:[].concat(e(t.favoritePokemonList),[n.pokemon])})})),Object(m.t)(y.removeFavorite,(function(t,n){return Object.assign(Object.assign({},t),{favoritePokemonList:e(t.favoritePokemonList.filter((function(e){return e.id!=n.pokemonId})))})})),Object(m.t)(j.updateIsComparing,(function(e,t){return Object.assign(Object.assign({},e),{isComparing:!e.isComparing})})),Object(m.t)(j.selectFirstPokemon,(function(e,t){return Object.assign(Object.assign({},e),{firstPokemon:t.id})})),Object(m.t)(j.selectSecondPokemon,(function(e,t){return Object.assign(Object.assign({},e),{secondPokemon:t.id})})),Object(m.t)(j.updateSearchContent,(function(e,t){return Object.assign(Object.assign({},e),{searchContent:t.searchContent})}))),S=r("hlQ1"),_=[{path:"",component:P}],L={PokemonItem:{}},x=((w=function e(t,n,i){o(this,e),this.eds=t,this.entityDataService=n,this.pokemonDataService=i,t.registerMetadataMap(L),n.registerService("PokemonItem",i)}).\u0275mod=f.Kb({type:w}),w.\u0275inj=f.Jb({factory:function(e){return new(e||w)(f.Zb(S.f),f.Zb(S.e),f.Zb(a.a))},providers:[s.a,c.a,a.a],imports:[[u.c,l.g.forChild(_),m.k.forFeature("pokemonsState",M),b.b]]}),w)}}])}();