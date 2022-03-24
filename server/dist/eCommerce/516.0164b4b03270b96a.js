"use strict";(self.webpackChunkeCommerce=self.webpackChunkeCommerce||[]).push([[516],{2516:(bt,D,s)=>{s.r(D),s.d(D,{DashboardModule:()=>wt});var g=s(9808),F=s(6643),S=s(4004),Y=s(262),T=s(9646),z=s(160),i=s(5e3);let C=(()=>{class t{constructor(o){this.http=o}getProducts(o,n){return this.http.post("products",{page:o.page,limit:12,filter:n,sortKey:"createdAt",sortOrder:-1}).pipe((0,S.U)(r=>r.data),(0,Y.K)(r=>(0,T.of)(Object.assign({},o))))}formateProduct(o,n){return(0,z.cloneDeep)(o).map(r=>{const c=n.find(d=>d._id===r._id);return c&&(r=Object.assign(Object.assign({},r),c)),r.cartQty=r.cartQty||0,r})}}return t.\u0275fac=function(o){return new(o||t)(i.LFG(F.O))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})();var N=s(4292),R=s(4968),Q=s(5577),w=s(8505),x=s(9300),A=s(4986),j=s(4482),b=s(5403),J=s(8421);const O={leading:!0,trailing:!1};var V=s(5963);function X(t,e,o,n){const l=window&&!!window.document&&window.document.documentElement;let r=l&&e?window:o;if(t&&(r=t&&l&&"string"==typeof t?function Z(t,e,o){return(o?window.document:e).querySelector(t)}(t,o.nativeElement,n):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function m(t){return t&&!t.firstChange}const $={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},k={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class q{constructor(e=!0){this.vertical=e,this.propsMap=e?$:k}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function ot(t){return["Window","global"].some(o=>Object.prototype.toString.call(t).includes(o))}function v(t,e){return t?e.document.documentElement:null}function H(t,e){const o=function rt({container:t,isWindow:e,axis:o}){const{offsetHeightKey:n,clientHeightKey:l}=P(o);return W(t,e,n,l)}(e);return e.isWindow?function nt(t,e,o){const{axis:n,container:l,isWindow:r}=o,{offsetHeightKey:c,clientHeightKey:d}=P(n),a=t+E(v(r,l),n,r),f=W(e.nativeElement,r,c,d),u=function lt(t,e,o){const n=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[n]+E(t,e,o)}(e.nativeElement,n,r)+f;return{height:t,scrolled:a,totalToScroll:u,isWindow:r}}(o,t,e):function it(t,e,o){const{axis:n,container:l}=o;return{height:t,scrolled:l[n.scrollTopKey()],totalToScroll:l[n.scrollHeightKey()],isWindow:!1}}(o,0,e)}function P(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function W(t,e,o,n){if(isNaN(t[o])){const l=v(e,t);return l?l[n]:0}return t[o]}function E(t,e,o){const n=e.pageYOffsetKey(),l=e.scrollTopKey(),r=e.offsetTopKey();return isNaN(window.pageYOffset)?v(o,t)[l]:t.ownerDocument?t.ownerDocument.defaultView[n]:t[r]}function st(t,e,o){let n,l;if(t.totalToScroll<=0)return!1;const r=t.isWindow?t.scrolled:t.height+t.scrolled;return o?(n=(t.totalToScroll-r)/t.totalToScroll,l=e.down/10):(n=t.scrolled/(t.scrolled+(t.totalToScroll-r)),l=e.up/10),n<=l}class ft{constructor({totalToScroll:e}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=e}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,o){this.updateScrollPosition(e),this.updateTotalToScroll(o)}updateTriggeredFlag(e,o){o?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,o){return o?this.triggered.down===e:this.triggered.up===e}}function dt(t){const{scrollContainer:e,scrollWindow:o,element:n,fromRoot:l}=t,r=function tt({windowElement:t,axis:e}){return function et(t,e){const o=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return Object.assign(Object.assign({},t),{container:o})}({axis:e,isWindow:ot(t)},t)}({axis:new q(!t.horizontal),windowElement:X(e,o,n,l)}),c=new ft({totalToScroll:H(n,r)}),a={up:t.upDistance,down:t.downDistance};return function ut(t){let e=(0,R.R)(t.container,"scroll");return t.throttle&&(e=e.pipe(function G(t,e=A.z,o=O){const n=(0,V.H)(t,e);return function B(t,e=O){return(0,j.e)((o,n)=>{const{leading:l,trailing:r}=e;let c=!1,d=null,a=null,f=!1;const u=()=>{null==a||a.unsubscribe(),a=null,r&&(U(),f&&n.complete())},y=()=>{a=null,f&&n.complete()},I=h=>a=(0,J.Xf)(t(h)).subscribe(new b.Q(n,u,y)),U=()=>{if(c){c=!1;const h=d;d=null,n.next(h),!f&&I(h)}};o.subscribe(new b.Q(n,h=>{c=!0,d=h,(!a||a.closed)&&(l?U():I(h))},()=>{f=!0,(!(r&&c&&a)||a.closed)&&n.complete()}))})}(()=>n,o)}(t.throttle))),e}({container:r.container,throttle:t.throttle}).pipe((0,Q.z)(()=>(0,T.of)(H(n,r))),(0,S.U)(f=>function ht(t,e,o){const{scrollDown:n,fire:l}=function at(t,e,o){const n=function ct(t,e){return t<e.scrolled}(t,e);return{fire:st(e,o,n),scrollDown:n}}(t,e,o);return{scrollDown:n,fire:l,stats:e}}(c.lastScrollPosition,f,a)),(0,w.b)(({stats:f})=>c.updateScroll(f.scrolled,f.totalToScroll)),(0,x.h)(({fire:f,scrollDown:u,stats:{totalToScroll:y}})=>function _(t,e,o){return!!(t&&e||!o&&e)}(t.alwaysCallback,f,c.isTriggeredScroll(y,u))),(0,w.b)(({scrollDown:f,stats:{totalToScroll:u}})=>{c.updateTriggeredFlag(u,f)}),(0,S.U)(pt))}function pt(t){const{scrollDown:e,stats:{scrolled:o}}=t;return{type:e?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:o}}}let M=(()=>{class t{constructor(o,n){this.element=o,this.zone=n,this.scrolled=new i.vpe,this.scrolledUp=new i.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:o,infiniteScrollDisabled:n,infiniteScrollDistance:l}){const r=m(o),c=m(n),d=m(l),a=!c&&!this.infiniteScrollDisabled||c&&!n.currentValue||d;(r||c||d)&&(this.destroyScroller(),a&&this.setup())}setup(){(function L(){return"undefined"!=typeof window})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=dt({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(o=>this.zone.run(()=>this.handleOnScroll(o)))})}handleOnScroll({type:o,payload:n}){switch(o){case"[NGX_ISE] DOWN":return this.scrolled.emit(n);case"[NGX_ISE] UP":return this.scrolledUp.emit(n);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(i.SBq),i.Y36(i.R0b))},t.\u0275dir=i.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[i.TTD]}),t})(),gt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[],imports:[[]]}),t})();var K=s(5899),St=s(3962);function mt(t,e){1&t&&i._UZ(0,"mat-progress-bar",3)}function vt(t,e){if(1&t&&(i.ynx(0),i._UZ(1,"app-card",4),i.BQk()),2&t){const o=e.$implicit;i.xp6(1),i.Q6J("product",o)}}let yt=(()=>{class t{constructor(o,n){this.service=o,this.cartService=n,this.config={page:0,totalCount:0,products:[]},this.loading=!1,this.subs=[],this.products=[],this.getProducts()}ngOnInit(){this.subs.push(this.cartService.cartItems.subscribe(o=>{o&&(this.products=this.service.formateProduct(this.config.products,o))}))}ngOnDestroy(){this.subs.forEach(o=>o.unsubscribe())}getProducts(){this.loading=!0,this.service.getProducts(this.config,this.filter||"").subscribe(o=>{this.loading=!1,this.config.totalCount=o.totalCount,this.config.products=[...this.config.products,...o.products],this.products=this.service.formateProduct(this.config.products,this.cartService.cartItmesValue)},o=>this.config.page-=1)}onScroll(){12*this.config.page<this.config.totalCount&&(this.config.page+=1,this.getProducts())}}return t.\u0275fac=function(o){return new(o||t)(i.Y36(C),i.Y36(N.N))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-dashboard"]],viewQuery:function(o,n){if(1&o&&i.Gf(M,5),2&o){let l;i.iGM(l=i.CRH())&&(n.infiniteScroll=l.first)}},decls:3,vars:4,consts:[["infiniteScroll","",1,"product-list",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["mode","indeterminate",4,"ngIf"],[4,"ngFor","ngForOf"],["mode","indeterminate"],[3,"product"]],template:function(o,n){1&o&&(i.TgZ(0,"div",0),i.NdJ("scrolled",function(){return n.onScroll()}),i.YNc(1,mt,1,0,"mat-progress-bar",1),i.YNc(2,vt,2,1,"ng-container",2),i.qZA()),2&o&&(i.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",100),i.xp6(1),i.Q6J("ngIf",n.loading),i.xp6(1),i.Q6J("ngForOf",n.products))},directives:[M,g.O5,K.pW,g.sg,St.A],styles:[".product-list[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-flow:wrap;padding:30px}"]}),t})();var Dt=s(1083),Tt=s(3196);const Ct=[{path:"",component:yt}];let wt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[C],imports:[[g.ez,K.Cv,Dt.Bz.forChild(Ct),Tt.d,gt]]}),t})()}}]);