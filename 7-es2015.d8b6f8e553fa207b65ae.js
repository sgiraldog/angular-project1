(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"08bT":function(e,t,o){"use strict";o.r(t),o.d(t,"homePageRoutes",(function(){return O})),o.d(t,"HomePageModule",(function(){return C}));var n=o("kg5w"),i=o("i508"),s=o("EcY3"),r=o("l7P3"),c=o("FpXt"),a=o("tyNb"),m=o("ofXK"),g=o("SDlU"),l=o("fXoL"),d=o("1kSV");function b(e,t){if(1&e&&(l.Rb(0,"div",3),l.Nb(1,"img",4),l.Qb(),l.Rb(2,"h3",5),l.Bc(3),l.Qb()),2&e){const e=l.ec().$implicit;l.zb(1),l.jc("src",e.imageUrl,l.sc),l.zb(2),l.Cc(e.name)}}function p(e,t){1&e&&l.zc(0,b,4,2,"ng-template",2)}let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["app-favorite-carousel"]],inputs:{favoritesList:"favoritesList"},decls:2,vars:1,consts:[[1,"carousel"],[4,"ngFor","ngForOf"],["class","carousel-slide","ngbSlide",""],[1,"picsum-img-wrapper"],["alt","Pok\xe9mon",1,"carousel-img",3,"src"],[1,"carousel-title"]],template:function(e,t){1&e&&(l.Rb(0,"ngb-carousel",0),l.zc(1,p,1,0,void 0,1),l.Qb()),2&e&&(l.zb(1),l.jc("ngForOf",t.favoritesList))},directives:[d.a,m.l,d.c],styles:[".carousel[_ngcontent-%COMP%]{height:20rem;width:40vw;overflow:hidden}.carousel-slide[_ngcontent-%COMP%]{height:100%;position:relative}.picsum-img-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.carousel-img[_ngcontent-%COMP%]{width:15rem;height:15rem;margin-bottom:2rem}.carousel-title[_ngcontent-%COMP%]{color:var(--black);position:absolute;bottom:2rem;bottom:0;left:50%;text-transform:capitalize;transform:translate(-50%);font-weight:700;font-size:1.4rem}@media (max-width:600px){.carousel[_ngcontent-%COMP%]{width:70vw}}@media (max-width:900px){.carousel[_ngcontent-%COMP%]{width:60vw}}"]}),e})(),u=(()=>{class e{constructor(e,t){this.pokemonService=e,this.store=t}ngOnInit(){this.favoritePokemonsList$=this.store.select(g.a)}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(s.a),l.Mb(r.i))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-home-page"]],decls:7,vars:3,consts:[[1,"welcome-container"],[1,"welcome-card"],[1,"welcome-message-container"],[1,"welcome-message"],[3,"favoritesList"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Rb(3,"h1",3),l.Bc(4,"Favorite Pokemons"),l.Qb(),l.Nb(5,"app-favorite-carousel",4),l.fc(6,"async"),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(5),l.jc("favoritesList",l.gc(6,1,t.favoritePokemonsList$)))},directives:[h],pipes:[m.b],styles:[".welcome-container[_ngcontent-%COMP%]{position:relative;background:url(/assets/images/pokedex-bg.jpg);height:100vh}.welcome-card[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50vw;height:50vh;background:var(--light-white);border-radius:5rem}.welcome-message-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}.welcome-message[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem;text-align:center;color:var(--light-black)}@media (max-width:900px){.welcome-card[_ngcontent-%COMP%]{width:70vw;height:50vh}.welcome-img[_ngcontent-%COMP%]{width:5rem}}@media (max-width:600px){.welcome-card[_ngcontent-%COMP%]{width:80vw;height:50vh}.welcome-message[_ngcontent-%COMP%]{font-size:3rem}.welcome-button[_ngcontent-%COMP%]{text-decoration:none;color:var(--white);background:var(--redish);padding:.8rem 1.5rem;border-radius:1rem}.welcome-img[_ngcontent-%COMP%]{width:4rem}}"]}),e})();var f=o("J+3D"),v=o("Y3La");const w=Object(r.r)({favoritePokemonList:[{id:1,name:"Bulbasaur",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/1.png"},{id:4,name:"Charmander",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/4.png"},{id:7,name:"Squirtle",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/7.png"}],isComparing:!1,firstPokemon:void 0,secondPokemon:void 0,searchContent:""},Object(r.t)(f.addFavorite,(e,t)=>Object.assign(Object.assign({},e),{favoritePokemonList:[...e.favoritePokemonList,t.pokemon]})),Object(r.t)(f.removeFavorite,(e,t)=>Object.assign(Object.assign({},e),{favoritePokemonList:[...e.favoritePokemonList.filter(e=>e.id!=t.pokemonId)]})),Object(r.t)(v.updateIsComparing,(e,t)=>Object.assign(Object.assign({},e),{isComparing:!e.isComparing})),Object(r.t)(v.selectFirstPokemon,(e,t)=>Object.assign(Object.assign({},e),{firstPokemon:t.id})),Object(r.t)(v.selectSecondPokemon,(e,t)=>Object.assign(Object.assign({},e),{secondPokemon:t.id})),Object(r.t)(v.updateSearchContent,(e,t)=>Object.assign(Object.assign({},e),{searchContent:t.searchContent})));var P=o("hlQ1");const O=[{path:"",component:u}],k={PokemonItem:{}};let C=(()=>{class e{constructor(e,t,o){this.eds=e,this.entityDataService=t,this.pokemonDataService=o,e.registerMetadataMap(k),t.registerService("PokemonItem",o)}}return e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({factory:function(t){return new(t||e)(l.Zb(P.f),l.Zb(P.e),l.Zb(n.a))},providers:[s.a,i.a,n.a],imports:[[m.c,a.g.forChild(O),c.a,r.k.forFeature("pokemonsState",w),d.b]]}),e})()}}]);