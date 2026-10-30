import{a as et,b as tt,c as nt,d as rt}from"./chunk-NML4SLDX.js";import{a as Ke}from"./chunk-OZENPH7M.js";import{d as ze,h as He,i as Ze,j as Je}from"./chunk-HS2YWVSG.js";import{f as Ge,k as qe,m as Qe,n as P,o as We,q as pe}from"./chunk-MLAT6E7C.js";import"./chunk-GMAHBG74.js";import{a as Se,b as Ee,c as Oe,d as Te,e as Ae,f as Pe,i as Ye}from"./chunk-6CNTAEQE.js";import{$a as T,$b as J,Bb as l,Bc as Ie,C as we,Cb as p,D as xe,E as oe,Ga as f,Gc as Be,Ha as Q,Hc as je,Jd as $e,Kb as A,L as ie,La as B,Lc as Ne,Ld as Xe,N as h,Q as ae,U as z,Ua as le,Ub as N,Va as k,W as se,Wa as D,Y as a,Yc as E,Za as W,_a as H,a as ne,aa as F,ab as i,ad as Ve,b as re,ba as I,bb as s,bd as X,cb as ke,ea as V,ed as Le,f as v,fa as ye,fd as Ue,ga as de,ia as L,ja as U,jb as j,lb as g,ma as M,nb as S,nc as K,ob as w,pa as G,pb as u,q as O,qb as Z,qc as Re,ra as q,rb as me,sa as Ce,sb as x,tb as y,tc as Fe,va as c,wa as ce,x as ve,xb as De,y as C,yb as $,yc as ue,za as Me,zb as b}from"./chunk-SKECVUBM.js";function he(r,o){let t=!o?.manualCleanup?o?.injector?.get(de)??a(de):null,n=lt(o?.equal),d;o?.requireSync?d=M({kind:0},{equal:n}):d=M({kind:1,value:o?.initialValue},{equal:n});let m,R=r.subscribe({next:_=>d.set({kind:1,value:_}),error:_=>{d.set({kind:2,error:_}),m?.()},complete:()=>{m?.()}});if(o?.requireSync&&d().kind===0)throw new ae(601,!1);return m=t?.onDestroy(R.unsubscribe.bind(R)),N(()=>{let _=d();switch(_.kind){case 1:return _.value;case 2:throw _.error;case 0:throw new ae(601,!1)}},{equal:o?.equal})}function lt(r=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&r(o.value,e.value)}var te=["*"],ut=["content"],pt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ht=["mat-drawer","mat-drawer-content","*"];function ft(r,o){if(r&1){let e=j();i(0,"div",1),g("click",function(){F(e);let n=S();return I(n._onBackdropClicked())}),s()}if(r&2){let e=S();b("mat-drawer-shown",e._isShowingBackdrop())}}function gt(r,o){r&1&&(i(0,"mat-drawer-content"),u(1,2),s())}var _t=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],bt=["mat-sidenav","mat-sidenav-content","*"];function vt(r,o){if(r&1){let e=j();i(0,"div",1),g("click",function(){F(e);let n=S();return I(n._onBackdropClicked())}),s()}if(r&2){let e=S();b("mat-drawer-shown",e._isShowingBackdrop())}}function wt(r,o){r&1&&(i(0,"mat-sidenav-content"),u(1,2),s())}var xt=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var yt=new se("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),_e=new se("MAT_DRAWER_CONTAINER"),Y=(()=>{class r extends P{_platform=a(K);_changeDetectorRef=a(J);_container=a(ge);constructor(){let e=a(q),t=a(Qe),n=a(U);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=f({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&($("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),b("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[A([{provide:P,useExisting:r}]),B],ngContentSelectors:te,decls:1,vars:0,template:function(t,n){t&1&&(w(),u(0))},encapsulation:2,changeDetection:0})}return r})(),fe=(()=>{class r{_elementRef=a(q);_focusTrapFactory=a(je);_focusMonitor=a(Ie);_platform=a(K);_ngZone=a(U);_renderer=a(Me);_interactivityChecker=a(Be);_doc=a(ye);_container=a(_e,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=E(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=E(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(E(e))}_opened=M(!1);_openedVia=null;_animationStarted=new v;_animationEnd=new v;openedChange=new L(!0);_openedStream=this.openedChange.pipe(C(e=>e),O(()=>{}));openedStart=this._animationStarted.pipe(C(()=>this.opened),oe(void 0));_closedStream=this.openedChange.pipe(C(e=>!e),O(()=>{}));closedStart=this._animationStarted.pipe(C(()=>!this.opened),oe(void 0));_destroyed=new v;onPositionChanged=new L;_content;_modeChanged=new v;_injector=a(V);_changeDetectorRef=a(J);constructor(){this.openedChange.pipe(h(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Ne(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{d(),m(),e.removeAttribute("tabindex")},d=this._renderer.listen(e,"blur",n),m=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ce(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(xe(1)).subscribe(m=>d(m?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=f({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&me(ut,5),t&2){let d;x(d=y())&&(n._content=d.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(le("align",null)("tabIndex",n.mode!=="side"?"-1":null),$("visibility",!n._container&&!n.opened?"hidden":null),b("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:te,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(w(),i(0,"div",1,0),u(2),s())},dependencies:[P],encapsulation:2,changeDetection:0})}return r})(),ge=(()=>{class r{_dir=a(Ve,{optional:!0});_element=a(q);_ngZone=a(U);_changeDetectorRef=a(J);_animationDisabled=Fe();_transitionsEnabled=!1;_allDrawers;_drawers=new Ce;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=E(e)}_autosize=a(yt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:E(e)}_backdropOverride=null;backdropClick=new L;_start=null;_end=null;_left=null;_right=null;_destroyed=new v;_doCheckSubject=new v;_contentMargins={left:null,right:null};_contentMarginChanges=new v;get scrollable(){return this._userContent||this._content}_injector=a(V);constructor(){let e=a(K),t=a(We);this._dir?.change.pipe(h(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(h(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ie(this._allDrawers),h(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ie(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(we(10),h(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(h(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(h(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(h(this._drawers.changes)).subscribe(()=>{ce({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(h(ve(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=f({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,d){if(t&1&&Z(d,Y,5)(d,fe,5),t&2){let m;x(m=y())&&(n._content=m.first),x(m=y())&&(n._allDrawers=m)}},viewQuery:function(t,n){if(t&1&&me(Y,5),t&2){let d;x(d=y())&&(n._userContent=d.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&b("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[A([{provide:_e,useExisting:r}])],ngContentSelectors:ht,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(w(pt),k(0,ft,1,2,"div",0),u(1),u(2,1),k(3,gt,2,0,"mat-drawer-content")),t&2&&(D(n.hasBackdrop?0:-1),c(3),D(n._content?-1:3))},dependencies:[Y],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return r})(),ee=(()=>{class r extends Y{static \u0275fac=(()=>{let e;return function(n){return(e||(e=G(r)))(n||r)}})();static \u0275cmp=f({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[A([{provide:P,useExisting:r}]),B],ngContentSelectors:te,decls:1,vars:0,template:function(t,n){t&1&&(w(),u(0))},encapsulation:2,changeDetection:0})}return r})(),be=(()=>{class r extends fe{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=E(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ue(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ue(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=G(r)))(n||r)}})();static \u0275cmp=f({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(le("tabIndex",n.mode!=="side"?"-1":null)("align",null),$("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),b("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[A([{provide:fe,useExisting:r}]),B],ngContentSelectors:te,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(w(),i(0,"div",1,0),u(2),s())},dependencies:[P],encapsulation:2,changeDetection:0})}return r})(),it=(()=>{class r extends ge{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=G(r)))(n||r)}})();static \u0275cmp=f({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,d){if(t&1&&Z(d,ee,5)(d,be,5),t&2){let m;x(m=y())&&(n._content=m.first),x(m=y())&&(n._allDrawers=m)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&b("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[A([{provide:_e,useExisting:r},{provide:ge,useExisting:r}]),B],ngContentSelectors:bt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(w(_t),k(0,vt,1,2,"div",0),u(1),u(2,1),k(3,wt,2,0,"mat-sidenav-content")),t&2&&(D(n.hasBackdrop?0:-1),c(3),D(n._content?-1:3))},dependencies:[ee],styles:[xt],encapsulation:2,changeDetection:0})}return r})(),at=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=Q({type:r});static \u0275inj=z({imports:[pe,X,pe]})}return r})();var st=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=Q({type:r});static \u0275inj=z({imports:[X]})}return r})();var dt=[{titulo:"Principal",opciones:[{texto:"Inicio",icono:"space_dashboard",ruta:"/inicio",permisos:[]}]},{titulo:"Movimientos",opciones:[{texto:"Nueva venta",icono:"point_of_sale",ruta:"/movimientos/venta",permisos:["VENTAS"]},{texto:"Nueva compra",icono:"shopping_cart",ruta:"/movimientos/compra",permisos:["COMPRAS"]},{texto:"\xD3rdenes de compra",icono:"assignment",ruta:"/movimientos/ordenes-compra",permisos:["COMPRAS"]},{texto:"Notas a clientes",icono:"receipt_long",ruta:"/movimientos/notas-clientes",permisos:["VENTAS"]},{texto:"Notas de proveedores",icono:"request_quote",ruta:"/movimientos/notas-proveedores",permisos:["COMPRAS"]},{texto:"Ajustes de inventario",icono:"tune",ruta:"/movimientos/ajuste",permisos:["AJUSTES"]},{texto:"Transferencias",icono:"local_shipping",ruta:"/movimientos/transferencias",permisos:["TRANSFERENCIAS"]},{texto:"Documentos",icono:"folder_open",ruta:"/movimientos/documentos",permisos:["VENTAS","COMPRAS","AJUSTES","REPORTES"]}]},{titulo:"Consultas y reportes",opciones:[{texto:"Existencias",icono:"inventory",ruta:"/reportes/existencias",permisos:["REPORTES"]},{texto:"Kardex",icono:"timeline",ruta:"/reportes/kardex",permisos:["REPORTES"]},{texto:"Entradas y salidas",icono:"swap_vert",ruta:"/reportes/movimientos",permisos:["REPORTES"]}]},{titulo:"Cat\xE1logos",opciones:[{texto:"Productos",icono:"inventory_2",ruta:"/catalogos/productos",permisos:["CATALOGOS"]},{texto:"Categor\xEDas",icono:"category",ruta:"/catalogos/categorias",permisos:["CATALOGOS"]},{texto:"Unidades de medida",icono:"straighten",ruta:"/catalogos/unidades",permisos:["CATALOGOS"]},{texto:"Clientes",icono:"groups",ruta:"/catalogos/clientes",permisos:["CATALOGOS"]},{texto:"Proveedores",icono:"storefront",ruta:"/catalogos/proveedores",permisos:["CATALOGOS"]},{texto:"Almacenes",icono:"warehouse",ruta:"/catalogos/almacenes",permisos:["CATALOGOS"]},{texto:"Motivos de ajuste",icono:"label",ruta:"/catalogos/motivos",permisos:["CATALOGOS"]}]},{titulo:"Seguridad",opciones:[{texto:"Usuarios",icono:"manage_accounts",ruta:"/seguridad/usuarios",permisos:["SEGURIDAD"]},{texto:"Roles",icono:"admin_panel_settings",ruta:"/seguridad/roles",permisos:["SEGURIDAD"]},{texto:"Permisos",icono:"key",ruta:"/seguridad/permisos",permisos:["SEGURIDAD"]}]},{titulo:"Configuraci\xF3n",opciones:[{texto:"Par\xE1metros del sistema",icono:"settings",ruta:"/configuracion/parametros",permisos:["CONFIGURACION"]},{texto:"Correlativos",icono:"pin",ruta:"/configuracion/correlativos",permisos:["CONFIGURACION"]},{texto:"Tipos de transacci\xF3n",icono:"rule",ruta:"/configuracion/tipos-transaccion",permisos:["CONFIGURACION"]}]}];var Mt=(r,o)=>o.titulo,kt=(r,o)=>o.ID_Almacen,Dt=(r,o)=>o.ruta;function St(r,o){if(r&1){let e=j();i(0,"a",23),g("click",function(){F(e);let n=S(2);return I(n.alNavegar())}),i(1,"mat-icon"),l(2),s(),i(3,"span"),l(4),s()()}if(r&2){let e=o.$implicit;T("routerLink",e.ruta),c(2),p(e.icono),c(2),p(e.texto)}}function Et(r,o){if(r&1&&(i(0,"p",21),l(1),s(),W(2,St,5,3,"a",22,Dt)),r&2){let e=o.$implicit;c(),p(e.titulo),c(),H(e.opciones)}}function Ot(r,o){if(r&1&&(i(0,"mat-option",13),l(1),s()),r&2){let e=o.$implicit;T("value",e.ID_Almacen),c(),p(e.Nombre)}}function Tt(r,o){r&1&&(i(0,"div",20)(1,"mat-icon"),l(2,"info"),s(),l(3," Su usuario no tiene almacenes asignados. Pida a un administrador que le asigne uno para registrar movimientos. "),s())}var ct=class r{auth=a(Ye);router=a(Te);route=a(Ee);esMovil=he(a(Re).observe("(max-width: 960px)").pipe(O(o=>o.matches)),{initialValue:!1});menuAbierto=M(!window.matchMedia("(max-width: 960px)").matches);menu=N(()=>dt.map(o=>re(ne({},o),{opciones:o.opciones.filter(e=>this.auth.tienePermiso(...e.permisos))})).filter(o=>o.opciones.length>0));titulo=he(this.router.events.pipe(C(o=>o instanceof Se),O(()=>this.tituloActual())),{initialValue:this.tituloActual()});iniciales=N(()=>(this.auth.sesion()?.NombreCompleto??"").split(" ").filter(Boolean).slice(0,2).map(o=>o[0].toUpperCase()).join(""));alNavegar(){this.esMovil()&&this.menuAbierto.set(!1)}cambiarAlmacen(o){this.auth.cambiarAlmacen(o);let e=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigateByUrl(e))}tituloActual(){let o=this.route.snapshot;for(;o.firstChild;)o=o.firstChild;return o.title??""}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=f({type:r,selectors:[["app-layout"]],decls:53,vars:11,consts:[["menuUsuario","matMenu"],[1,"contenedor"],[1,"sidebar",3,"closedStart","mode","opened"],["routerLink","/inicio",1,"marca",3,"click"],[1,"logo"],[1,"contenido"],[1,"barra"],["mat-icon-button","","matTooltip","Mostrar u ocultar men\xFA",3,"click"],[1,"titulo"],[1,"derecha"],["subscriptSizing","dynamic",1,"selector-almacen"],["matPrefix",""],["placeholder","Almac\xE9n",3,"selectionChange","value"],[3,"value"],[1,"usuario",3,"matMenuTriggerFor"],[1,"avatar"],[1,"datos"],["xPosition","before"],[1,"menu-encabezado"],["mat-menu-item","",3,"click"],[1,"aviso"],[1,"seccion"],["routerLinkActive","activa",1,"opcion",3,"routerLink"],["routerLinkActive","activa",1,"opcion",3,"click","routerLink"]],template:function(e,t){if(e&1&&(i(0,"mat-sidenav-container",1)(1,"mat-sidenav",2),g("closedStart",function(){return t.menuAbierto.set(!1)}),i(2,"a",3),g("click",function(){return t.alNavegar()}),i(3,"span",4)(4,"mat-icon"),l(5,"inventory_2"),s()(),i(6,"span")(7,"strong"),l(8,"Inventario"),s(),i(9,"small"),l(10,"Sistema de gesti\xF3n"),s()()(),i(11,"nav"),W(12,Et,4,1,null,null,Mt),s()(),i(14,"mat-sidenav-content",5)(15,"header",6)(16,"button",7),g("click",function(){return t.menuAbierto.set(!t.menuAbierto())}),i(17,"mat-icon"),l(18,"menu"),s()(),i(19,"h2",8),l(20),s(),i(21,"div",9)(22,"mat-form-field",10)(23,"mat-icon",11),l(24,"warehouse"),s(),i(25,"mat-select",12),g("selectionChange",function(d){return t.cambiarAlmacen(d.value)}),W(26,Ot,2,2,"mat-option",13,kt),s()(),i(28,"button",14)(29,"span",15),l(30),s(),i(31,"span",16)(32,"strong"),l(33),s(),i(34,"small"),l(35),s()(),i(36,"mat-icon"),l(37,"expand_more"),s()(),i(38,"mat-menu",17,0)(40,"div",18)(41,"strong"),l(42),s(),i(43,"small"),l(44),s()(),i(45,"button",19),g("click",function(){return t.auth.logout()}),i(46,"mat-icon"),l(47,"logout"),s(),i(48,"span"),l(49,"Cerrar sesi\xF3n"),s()()()()(),k(50,Tt,4,0,"div",20),i(51,"main"),ke(52,"router-outlet"),s()()()),e&2){let n,d,m,R,_=De(39);c(),T("mode",t.esMovil()?"over":"side")("opened",t.menuAbierto()),c(11),H(t.menu()),c(8),p(t.titulo()),c(5),T("value",t.auth.idAlmacen()),c(),H(t.auth.almacenes()),c(2),T("matMenuTriggerFor",_),c(2),p(t.iniciales()),c(3),p((n=t.auth.sesion())==null?null:n.NombreCompleto),c(2),p((d=t.auth.sesion())==null?null:d.NombreRol),c(7),p((m=t.auth.sesion())==null?null:m.NombreCompleto),c(2),p((R=t.auth.sesion())==null?null:R.CorreoElectronico),c(6),D(t.auth.almacenActual()?-1:50)}},dependencies:[Oe,Ae,Pe,at,be,it,ee,st,Ue,Le,Xe,$e,rt,tt,et,nt,Ze,qe,Ge,He,ze,Ke,Je],styles:[".contenedor[_ngcontent-%COMP%]{height:100vh;background:var(--app-fondo)}.sidebar[_ngcontent-%COMP%]{width:264px;background:var(--app-sidebar);color:var(--app-sidebar-texto);border-right:none;--mat-sidenav-container-shape: 0}.marca[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:20px 20px 16px;color:#fff;text-decoration:none}.marca[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#3b82f6,#8b5cf6)}.marca[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:17px}.marca[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#8b95a7;font-size:12px}nav[_ngcontent-%COMP%]{padding:0 12px 24px}.seccion[_ngcontent-%COMP%]{margin:18px 12px 6px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#6b7486}.opcion[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:9px 12px;border-radius:10px;color:var(--app-sidebar-texto);text-decoration:none;font-size:14px;font-weight:500;transition:background .15s,color .15s}.opcion[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.opcion[_ngcontent-%COMP%]:hover{background:#ffffff0f;color:#fff}.opcion.activa[_ngcontent-%COMP%]{background:#3b82f62e;color:#fff}.opcion.activa[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#60a5fa}.contenido[_ngcontent-%COMP%]{display:flex;flex-direction:column}.barra[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:8px;padding:8px 20px 8px 12px;background:#ffffffeb;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-bottom:1px solid var(--app-borde);min-height:64px;box-sizing:border-box}.titulo[_ngcontent-%COMP%]{margin:0;font-size:18px;font-weight:600;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.derecha[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.selector-almacen[_ngcontent-%COMP%]{width:220px}@media(max-width:600px){.selector-almacen[_ngcontent-%COMP%]{width:150px}}.usuario[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:4px 8px 4px 4px;border:1px solid var(--app-borde);border-radius:999px;background:#fff;cursor:pointer;font:inherit;color:inherit}.usuario[_ngcontent-%COMP%]:hover{background:#f8f9fc}.usuario[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;font-weight:600;font-size:13px}.usuario[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;line-height:1.2}.usuario[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px}.usuario[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;color:var(--app-texto-suave)}@media(max-width:760px){.usuario[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]{display:none}}.menu-encabezado[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:12px 16px;border-bottom:1px solid var(--app-borde)}.menu-encabezado[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--app-texto-suave)}.aviso[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin:16px 24px 0;padding:12px 16px;border-radius:12px;background:var(--app-alerta-suave);color:var(--app-alerta);font-size:14px}"]})};export{ct as Layout};
