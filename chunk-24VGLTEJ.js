import{a as Ye,b as Je,c as en}from"./chunk-NFEOUGMW.js";import{b as nn}from"./chunk-CE6N5UC5.js";import{a as te}from"./chunk-FHXNAJJP.js";import{c as Ze}from"./chunk-YYVCP4TC.js";import"./chunk-RLWMUAA4.js";import{a as qe}from"./chunk-F7CYNLUK.js";import{t as Ve,v as Be,w as je}from"./chunk-MLAT6E7C.js";import{a as We,b as Ke}from"./chunk-GASRCR6K.js";import{b as Ge,c as Xe}from"./chunk-625YQAHS.js";import{c as $}from"./chunk-GMAHBG74.js";import{e as De,i as Ue}from"./chunk-6CNTAEQE.js";import{$a as P,$b as L,$c as Fe,Ab as Me,Bb as s,Bc as Oe,Ca as be,Cb as m,D as ce,Db as B,Dc as Se,Ga as w,Ha as H,Ia as C,Jb as Te,Kb as E,Kd as Le,L as Q,La as q,Lc as ke,Ld as $e,Ma as ve,Md as Qe,Nb as j,Nc as Re,Ob as we,Oc as O,Pb as ee,U as k,Ua as z,Ub as ne,Va as u,W as y,Wa as h,Wb as Pe,Y as l,Za as Z,_a as W,a as se,aa as R,ab as r,b as de,ba as F,bb as o,bc as v,bd as Ne,c as S,ca as me,cb as K,cc as Ae,db as V,eb as G,ed as He,f as M,fa as ge,fb as ye,fd as ze,ia as x,ja as ue,jb as X,k as le,lb as _,ma as f,nb as g,oa as N,ob as Y,pa as he,pb as b,qb as J,ra as U,rb as Ce,sa as xe,sb as A,tb as D,tc as Ie,va as d,x as pe,xa as fe,y as T,yb as Ee,za as _e,zb as I}from"./chunk-SKECVUBM.js";var ae=new y("CdkAccordion"),an=(()=>{class t{_stateChanges=new M;_openCloseAllActions=new M;id=l(O).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",v]},exportAs:["cdkAccordion"],features:[E([{provide:ae,useExisting:t}]),N]})}return t})(),on=(()=>{class t{accordion=l(ae,{optional:!0,skipSelf:!0});_changeDetectorRef=l(L);_expansionDispatcher=l($);_openCloseAllSubscription=S.EMPTY;closed=new x;opened=new x;destroyed=new x;expandedChange=new x;id=l(O).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=f(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",v],disabled:[2,"disabled","disabled",v]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[E([{provide:ae,useValue:void 0}])]})}return t})(),rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=k({})}return t})();var un=["body"],hn=["bodyWrapper"],xn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],fn=["mat-expansion-panel-header","*","mat-action-row"];function _n(t,a){}var bn=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],vn=["mat-panel-title","mat-panel-description","*"];function yn(t,a){t&1&&(V(0,"span",1),me(),V(1,"svg",2),ye(2,"path",3),G()())}var ie=new y("MAT_ACCORDION"),sn=new y("MAT_EXPANSION_PANEL"),Cn=(()=>{class t{_template=l(fe);_expansionPanel=l(sn,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),dn=new y("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),oe=(()=>{class t extends on{_viewContainerRef=l(be);_animationsDisabled=Ie();_document=l(ge);_ngZone=l(ue);_elementRef=l(U);_renderer=l(_e);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new x;afterCollapse=new x;_inputChanges=new M;accordion=l(ie,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=l(O).getId("mat-expansion-panel-header-");constructor(){super();let e=l(dn,{optional:!0});this._expansionDispatcher=l($),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Q(null),T(()=>this.expanded&&!this._portal),ce(1)).subscribe(()=>{this._portal=new Ve(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,p){if(n&1&&J(p,Cn,5),n&2){let c;A(c=D())&&(i._lazyContent=c.first)}},viewQuery:function(n,i){if(n&1&&Ce(un,5)(hn,5),n&2){let p;A(p=D())&&(i._body=p.first),A(p=D())&&(i._bodyWrapper=p.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,i){n&2&&I("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[E([{provide:ie,useValue:void 0},{provide:sn,useExisting:t}]),q,N],ngContentSelectors:fn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(Y(xn),b(0),r(1,"div",2,0)(3,"div",3,1)(5,"div",4),b(6,1),ve(7,_n,0,0,"ng-template",5),o(),b(8,2),o()()),n&2&&(d(),z("inert",i.expanded?null:""),d(2),P("id",i.id),z("aria-labelledby",i._headerId),d(4),P("cdkPortalOutlet",i._portal))},dependencies:[Be],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var re=(()=>{class t{panel=l(oe,{host:!0});_element=l(U);_focusMonitor=l(Oe);_changeDetectorRef=l(L);_parentChangeSubscription=S.EMPTY;constructor(){l(Se).load(Fe);let e=this.panel,n=l(dn,{optional:!0}),i=l(new Pe("tabindex"),{optional:!0}),p=e.accordion?e.accordion._stateChanges.pipe(T(c=>!!(c.hideToggle||c.togglePosition))):le;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=pe(e.opened,e.closed,p,e._inputChanges.pipe(T(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(T(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ke(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,i){n&1&&_("click",function(){return i._toggle()})("keydown",function(c){return i._keydown(c)}),n&2&&(z("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),Ee("height",i._getHeaderHeight()),I("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ae(e)]},ngContentSelectors:vn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){n&1&&(Y(bn),V(0,"span",0),b(1),b(2,1),b(3,2),G(),u(4,yn,3,0,"span",1)),n&2&&(I("mat-content-hide-toggle",!i._showToggle()),d(4),h(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var ln=(()=>{class t extends an{_keyManager;_ownHeaders=new xe;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Q(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Re(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=he(t)))(i||t)}})();static \u0275dir=C({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,i,p){if(n&1&&J(p,re,5),n&2){let c;A(c=D())&&(i._headers=c)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&I("mat-accordion-multi",i.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",v],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[E([{provide:ie,useExisting:t}]),q]})}return t})(),pn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=k({imports:[rn,je,Ne]})}return t})();var Mn=(t,a)=>a.ID_Transferencia,Tn=(t,a)=>a.ID_DetalleTransferencia;function wn(t,a){if(t&1&&(r(0,"span",6),s(1),o()),t&2){let e=g();d(),m(e.porRecibir())}}function Pn(t,a){t&1&&K(0,"mat-progress-bar",9)}function An(t,a){if(t&1&&(r(0,"p",19),s(1),o()),t&2){let e=g().$implicit;d(),m(e.Observaciones)}}function Dn(t,a){if(t&1&&(r(0,"p",20)(1,"mat-icon"),s(2,"report"),o(),s(3),o()),t&2){let e=g().$implicit;d(3),B(" ",e.MotivoRechazo)}}function In(t,a){if(t&1&&(r(0,"div",22)(1,"span")(2,"strong"),s(3),o(),r(4,"span",19),s(5),o()(),r(6,"strong"),s(7),j(8,"numero"),o()()),t&2){let e=a.$implicit;d(3),m(e.NombreProducto),d(2),B("\xB7 ",e.CodigoProducto),d(2),B("",we(8,3,e.Cantidad)," u.")}}function On(t,a){t&1&&Z(0,In,9,5,"div",22,Tn),t&2&&W(a.Detalles)}function Sn(t,a){t&1&&K(0,"mat-progress-bar",9)}function kn(t,a){if(t&1){let e=X();r(0,"div",21)(1,"button",23),_("click",function(){R(e);let i=g().$implicit,p=g();return F(p.rechazar(i))}),r(2,"mat-icon"),s(3,"close"),o(),s(4," Rechazar"),o(),r(5,"button",24),_("click",function(){R(e);let i=g().$implicit,p=g();return F(p.recibir(i))}),r(6,"mat-icon"),s(7,"move_to_inbox"),o(),s(8," Recibir"),o()()}}function Rn(t,a){if(t&1){let e=X();r(0,"mat-expansion-panel",12),_("opened",function(){let i=R(e).$implicit,p=g();return F(p.abrir(i))}),r(1,"mat-expansion-panel-header")(2,"div",13)(3,"span",14),s(4),o(),r(5,"span",15)(6,"span"),s(7),o(),r(8,"mat-icon"),s(9,"arrow_forward"),o(),r(10,"span"),s(11),o()(),r(12,"span",16),s(13),j(14,"fecha"),o(),r(15,"span"),s(16),o()()(),r(17,"div",17)(18,"div",18)(19,"div")(20,"small"),s(21,"Envi\xF3"),o(),r(22,"span"),s(23),o()(),r(24,"div")(25,"small"),s(26),o(),r(27,"span"),s(28),o()(),r(29,"div")(30,"small"),s(31,"Fecha de recepci\xF3n"),o(),r(32,"span"),s(33),j(34,"fecha"),o()()(),u(35,An,2,1,"p",19),u(36,Dn,4,1,"p",20),u(37,On,2,0)(38,Sn,1,0,"mat-progress-bar",9),u(39,kn,9,0,"div",21),o()()}if(t&2){let e,n=a.$implicit,i=g();d(4),m(n.NumeroTransferencia),d(3),m(n.AlmacenOrigen),d(4),m(n.AlmacenDestino),d(2),m(ee(14,16,n.FechaEnvio,!0)),d(2),Me(Te("chip ",i.estados[n.Estado])),d(),m(n.Estado),d(7),m(n.UsuarioEnvia),d(3),m(n.Estado==="RECHAZADA"?"Rechaz\xF3":"Recibi\xF3"),d(2),m(n.UsuarioRecibe??"\u2014"),d(5),m(ee(34,19,n.FechaRecepcion,!0)),d(2),h(n.Observaciones?35:-1),d(),h(n.MotivoRechazo?36:-1),d(),h((e=i.detalles()[n.ID_Transferencia])?37:38,e),d(2),h(i.puedeResolver(n)?39:-1)}}function Fn(t,a){if(t&1&&(r(0,"div",11)(1,"mat-icon"),s(2,"local_shipping"),o(),r(3,"p"),s(4),o()()),t&2){let e=g();d(4),m(e.vista()==="POR_RECIBIR"?"No hay transferencias pendientes de recibir en este almac\xE9n":"No hay transferencias")}}var cn=class t{api=l(Qe);auth=l(Ue);dialog=l(Ze);notificacion=l(qe);estados=nn;cargando=f(!1);vista=f("POR_RECIBIR");todas=f([]);detalles=f({});lista=ne(()=>{let a=this.auth.idAlmacen();switch(this.vista()){case"POR_RECIBIR":return this.todas().filter(e=>e.ID_AlmacenDestino===a&&e.Estado==="ENVIADA");case"ENVIADAS":return this.todas().filter(e=>e.ID_AlmacenOrigen===a);default:return this.todas()}});porRecibir=ne(()=>this.todas().filter(a=>a.ID_AlmacenDestino===this.auth.idAlmacen()&&a.Estado==="ENVIADA").length);ngOnInit(){this.cargar()}cargar(){this.cargando.set(!0),this.api.get("Transferencias",{idAlmacen:this.auth.idAlmacen()}).subscribe({next:a=>{this.todas.set(a),this.cargando.set(!1)},error:()=>this.cargando.set(!1)})}abrir(a){this.detalles()[a.ID_Transferencia]||this.api.get(`Transferencias/${a.ID_Transferencia}`).subscribe(e=>this.detalles.update(n=>de(se({},n),{[a.ID_Transferencia]:e})))}puedeResolver(a){return a.Estado==="ENVIADA"&&a.ID_AlmacenDestino===this.auth.idAlmacen()}recibir(a){te.abrir(this.dialog,{titulo:`Recibir ${a.NumeroTransferencia}`,mensaje:`La mercader\xEDa entrar\xE1 a ${a.AlmacenDestino}. Confirme que lleg\xF3 completa.`,textoAceptar:"Recibir"}).subscribe(e=>{e&&this.api.post(`Transferencias/${a.ID_Transferencia}/recibir`,{ID_Usuario:this.auth.idUsuario}).subscribe(()=>this.terminar(`Transferencia ${a.NumeroTransferencia} recibida`))})}rechazar(a){te.abrir(this.dialog,{titulo:`Rechazar ${a.NumeroTransferencia}`,mensaje:`La mercader\xEDa regresar\xE1 a ${a.AlmacenOrigen}.`,textoAceptar:"Rechazar",peligro:!0,pedirTexto:{etiqueta:"Motivo del rechazo",requerido:!0}}).subscribe(e=>{typeof e=="string"&&this.api.post(`Transferencias/${a.ID_Transferencia}/rechazar`,{ID_Usuario:this.auth.idUsuario,Motivo:e}).subscribe(()=>this.terminar(`Transferencia ${a.NumeroTransferencia} rechazada`))})}terminar(a){this.notificacion.exito(a),this.detalles.set({}),this.cargar()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-transferencias"]],decls:25,vars:4,consts:[[1,"pagina"],[1,"encabezado"],[1,"acciones"],["mat-flat-button","","routerLink","/movimientos/transferencias/nueva"],["hideSingleSelectionIndicator","",1,"vistas",3,"change","value"],["value","POR_RECIBIR"],[1,"contador"],["value","ENVIADAS"],["value","TODAS"],["mode","indeterminate"],["multi","",1,"lista"],[1,"tarjeta","sin-datos"],[3,"opened"],[1,"cabecera"],[1,"numero"],[1,"ruta"],[1,"texto-suave","fecha"],[1,"detalle"],[1,"datos"],[1,"texto-suave"],[1,"rechazo"],[1,"botones"],[1,"linea"],["mat-stroked-button","",1,"rechazar",3,"click"],["mat-flat-button","",3,"click"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div")(3,"h1"),s(4,"Transferencias"),o(),r(5,"p"),s(6,"Traslados entre almacenes. Al enviar sale del origen; al recibir entra al destino; si se rechaza regresa."),o()(),r(7,"div",2)(8,"a",3)(9,"mat-icon"),s(10,"add"),o(),s(11," Nueva transferencia"),o()()(),r(12,"mat-button-toggle-group",4),_("change",function(p){return n.vista.set(p.value)}),r(13,"mat-button-toggle",5),s(14," Por recibir "),u(15,wn,2,1,"span",6),o(),r(16,"mat-button-toggle",7),s(17,"Enviadas por mi almac\xE9n"),o(),r(18,"mat-button-toggle",8),s(19,"Todas"),o()(),u(20,Pn,1,0,"mat-progress-bar",9),r(21,"mat-accordion",10),Z(22,Rn,40,22,"mat-expansion-panel",null,Mn,!1,Fn,5,1,"div",11),o()()),e&2&&(d(12),P("value",n.vista()),d(3),h(n.porRecibir()>0?15:-1),d(5),h(n.cargando()?20:-1),d(2),W(n.lista()))},dependencies:[De,$e,Le,en,Ye,Je,ze,He,Ke,We,pn,ln,oe,re,Ge,Xe],styles:[".vistas[_ngcontent-%COMP%]{margin-bottom:16px;background:#fff}.vistas[_ngcontent-%COMP%]   .contador[_ngcontent-%COMP%]{display:inline-grid;place-items:center;min-width:20px;height:20px;padding:0 6px;margin-left:6px;border-radius:999px;background:var(--app-peligro);color:#fff;font-size:11px;font-weight:700}.lista[_ngcontent-%COMP%]{display:block}.lista[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{border-radius:12px!important;margin-bottom:10px;border:1px solid var(--app-borde);box-shadow:var(--app-sombra)!important}.cabecera[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;width:100%;padding-right:12px;flex-wrap:wrap}.cabecera[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%]{font-weight:700;min-width:110px}.cabecera[_ngcontent-%COMP%]   .ruta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;flex:1}.cabecera[_ngcontent-%COMP%]   .ruta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:var(--app-primario)}.cabecera[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]{font-size:13px}.detalle[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:12px}.detalle[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.detalle[_ngcontent-%COMP%]   .datos[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--app-texto-suave);font-size:12px}.detalle[_ngcontent-%COMP%]   .rechazo[_ngcontent-%COMP%]{display:flex;gap:6px;align-items:center;padding:10px;border-radius:8px;background:var(--app-peligro-suave);color:var(--app-peligro)}.detalle[_ngcontent-%COMP%]   .linea[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--app-borde);font-size:14px}.detalle[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;margin-top:16px}.detalle[_ngcontent-%COMP%]   .rechazar[_ngcontent-%COMP%]{color:var(--app-peligro)}"]})};export{cn as Transferencias};
