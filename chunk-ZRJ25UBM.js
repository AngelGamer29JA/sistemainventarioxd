import{a as Bt,b as Gt}from"./chunk-JK7B3XEM.js";import{a as Lt}from"./chunk-FHXNAJJP.js";import{a as zt,b as Rt}from"./chunk-NOFTHDP4.js";import{a as Dt,b as Ft,c as wt,d as Pt,e as Ot,f as Nt,g as At,h as $t}from"./chunk-YYVCP4TC.js";import{a as bt,b as ut,c as _t,d as kt,e as xt,f as ft,g as vt,h as gt,i as yt,j as Ct,k as Mt,l as Et,m as It,n as N,o as Tt,p as St}from"./chunk-THETDMFI.js";import{a as Ue}from"./chunk-XLVHSA2P.js";import{b as O,c as pt}from"./chunk-A7XOPG6G.js";import{b as Q,c as X}from"./chunk-RLWMUAA4.js";import{a as U}from"./chunk-F7CYNLUK.js";import{a as ht}from"./chunk-OZENPH7M.js";import{d as je,h as mt,i as dt,j as st}from"./chunk-HS2YWVSG.js";import{c as Qe,d as Xe,e as Ze,f as q,g as Je,k as L,l as B}from"./chunk-MLAT6E7C.js";import{a as Vt,b as qt}from"./chunk-GASRCR6K.js";import{a as jt,b as Ht,c as Ut}from"./chunk-625YQAHS.js";import"./chunk-GMAHBG74.js";import{$a as s,$b as ze,$c as Ge,Ab as $,Bb as m,Cb as h,Db as f,Dc as qe,Eb as we,Ga as w,Ha as ge,Id as rt,Jd as lt,Kb as Pe,Kd as G,Lb as Oe,Ld as j,Ma as A,Md as H,Nb as z,Ob as ne,Oc as Le,Pb as Ne,S as he,U as pe,Ua as C,Ub as ie,Va as p,W as be,Wa as b,Wb as Ae,Xa as ye,Y as u,Yb as $e,Za as T,Zb as ae,_a as S,_c as Be,a as F,aa as E,ab as r,b as de,ba as I,bb as o,bc as M,bd as He,ca as ue,cb as x,cc as Re,da as _e,ed as R,fd as V,gb as W,hb as Y,ia as K,ja as ke,jb as D,kb as Ce,kd as Ke,lb as k,ld as We,m as le,ma as v,md as Ye,na as xe,nb as d,nd as P,oa as fe,ob as Me,pb as Ee,qd as et,ra as ve,rb as Ie,rd as tt,sb as ee,sd as nt,tb as te,tc as Ve,ud as it,va as c,vb as Te,w as se,wb as Se,wd as at,xb as De,yb as Fe,yd as ot,zb as y,zd as ct}from"./chunk-SKECVUBM.js";var Kt=["input"],Wt=["label"],Yt=["*"],oe={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},en=new be("mat-checkbox-default-options",{providedIn:"root",factory:()=>oe}),_=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(_||{}),ce=class{source;checked},re=(()=>{class t{_elementRef=u(ve);_changeDetectorRef=u(ze);_ngZone=u(ke);_animationsDisabled=Ve();_options=u(en,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new ce;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new K;indeterminateChange=new K;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=_.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(qe).load(Ge);let e=u(new Ae("tabindex"),{optional:!0});this._options=this._options||oe,this.color=this._options.color||oe.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(Le).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(_.Indeterminate):this._transitionCheckState(this.checked?_.Checked:_.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=v(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,a=this._getAnimationTargetElement();if(!(n===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let l=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(l)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?_.Checked:_.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case _.Init:if(n===_.Checked)return this._animationClasses.uncheckedToChecked;if(n==_.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case _.Unchecked:return n===_.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case _.Checked:return n===_.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case _.Indeterminate:return n===_.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-checkbox"]],viewQuery:function(n,a){if(n&1&&Ie(Kt,5)(Wt,5),n&2){let l;ee(l=te())&&(a._inputElement=l.first),ee(l=te())&&(a._labelElement=l.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,a){n&2&&(Ce("id",a.id),C("tabindex",null)("aria-label",null)("aria-labelledby",null),$(a.color?"mat-"+a.color:"mat-accent"),y("_mat-animation-noopable",a._animationsDisabled)("mdc-checkbox--disabled",a.disabled)("mat-mdc-checkbox-disabled",a.disabled)("mat-mdc-checkbox-checked",a.checked)("mat-mdc-checkbox-disabled-interactive",a.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",M],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",M],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",M],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Re(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",M],checked:[2,"checked","checked",M],disabled:[2,"disabled","disabled",M],indeterminate:[2,"indeterminate","indeterminate",M]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Pe([{provide:Ke,useExisting:he(()=>t),multi:!0},{provide:Ye,useExisting:t,multi:!0}]),fe],ngContentSelectors:Yt,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,a){if(n&1&&(Me(),r(0,"div",3),k("click",function(g){return a._preventBubblingFromLabel(g)}),r(1,"div",4,0)(3,"div",5),k("click",function(){return a._onTouchTargetClick()}),o(),r(4,"input",6,1),k("blur",function(){return a._onBlur()})("click",function(){return a._onInputClick()})("change",function(g){return a._onInteractionEvent(g)}),o(),x(6,"div",7),r(7,"div",8),ue(),r(8,"svg",9),x(9,"path",10),o(),_e(),x(10,"div",11),o(),x(11,"div",12),o(),r(12,"label",13,2),Ee(14),o()()),n&2){let l=De(2);s("labelPosition",a.labelPosition),c(4),y("mdc-checkbox--selected",a.checked),s("checked",a.checked)("indeterminate",a.indeterminate)("disabled",a.disabled&&!a.disabledInteractive)("id",a.inputId)("required",a.required)("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex),C("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-checked",a.indeterminate?"mixed":null)("aria-controls",a.ariaControls)("aria-disabled",a.disabled&&a.disabledInteractive?!0:null)("aria-expanded",a.ariaExpanded)("aria-owns",a.ariaOwns)("name",a.name)("value",a.value),c(7),s("matRippleTrigger",l)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),c(),s("for",a.inputId)}},dependencies:[Be,Ue],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})(),Xt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ge({type:t});static \u0275inj=pe({imports:[re,He]})}return t})();var mn=(t,i)=>i.nombre,Zt=(t,i)=>i.valor;function dn(t,i){if(t&1&&(r(0,"div",8)(1,"mat-checkbox",10),m(2),o()()),t&2){let e=d().$implicit;c(),s("formControlName",e.nombre),c(),h(e.etiqueta)}}function ln(t,i){if(t&1&&(r(0,"mat-hint"),m(1),o()),t&2){let e=d(2).$implicit;c(),h(e.ayuda)}}function sn(t,i){if(t&1&&(r(0,"mat-form-field",9)(1,"mat-label"),m(2),o(),x(3,"textarea",11),p(4,ln,2,1,"mat-hint"),o()),t&2){let e=d().$implicit;c(2),h(e.etiqueta),c(),s("formControlName",e.nombre),C("maxlength",e.maxLength),c(),b(e.ayuda?4:-1)}}function hn(t,i){if(t&1&&(r(0,"mat-option",12),m(1),o()),t&2){let e=i.$implicit;s("value",e.valor),c(),h(e.texto)}}function pn(t,i){if(t&1&&(r(0,"mat-hint"),m(1),o()),t&2){let e=d(2).$implicit;c(),h(e.ayuda)}}function bn(t,i){if(t&1&&(r(0,"mat-form-field",9)(1,"mat-label"),m(2),o(),r(3,"mat-select",10),T(4,hn,2,2,"mat-option",12,Zt),o(),p(6,pn,2,1,"mat-hint"),r(7,"mat-error"),m(8,"Seleccione una opci\xF3n"),o()()),t&2){let e=d().$implicit,n=d();c(2),h(e.etiqueta),c(),s("formControlName",e.nombre),c(),S(n.opcionesDe(e)),c(2),b(e.ayuda?6:-1)}}function un(t,i){if(t&1&&(r(0,"mat-option",12),m(1),o()),t&2){let e=i.$implicit;s("value",e.valor),c(),h(e.texto)}}function _n(t,i){if(t&1&&(r(0,"mat-hint"),m(1),o()),t&2){let e=d(2).$implicit;c(),h(e.ayuda)}}function kn(t,i){if(t&1&&(r(0,"mat-form-field",9)(1,"mat-label"),m(2),o(),r(3,"mat-select",13),T(4,un,2,2,"mat-option",12,Zt),o(),p(6,_n,2,1,"mat-hint"),r(7,"mat-error"),m(8,"Seleccione al menos una opci\xF3n"),o()()),t&2){let e=d().$implicit,n=d();c(2),h(e.etiqueta),c(),s("formControlName",e.nombre),c(),S(n.opcionesDe(e)),c(2),b(e.ayuda?6:-1)}}function xn(t,i){t&1&&(r(0,"span",14),m(1,"Q\xA0"),o())}function fn(t,i){if(t&1&&(r(0,"mat-hint"),m(1),o()),t&2){let e=d(2).$implicit;c(),h(e.ayuda)}}function vn(t,i){t&1&&(r(0,"mat-error"),m(1,"El correo no es v\xE1lido"),o())}function gn(t,i){if(t&1&&(r(0,"mat-error"),m(1),o()),t&2){let e=d(2).$implicit;c(),f("M\xEDnimo ",e.minLength," caracteres")}}function yn(t,i){t&1&&(r(0,"mat-error"),m(1,"No puede ser negativo"),o())}function Cn(t,i){t&1&&(r(0,"mat-error"),m(1,"Este campo es requerido"),o())}function Mn(t,i){if(t&1&&(r(0,"mat-form-field",9)(1,"mat-label"),m(2),o(),p(3,xn,2,0,"span",14),x(4,"input",15),p(5,fn,2,1,"mat-hint"),p(6,vn,2,0,"mat-error")(7,gn,2,1,"mat-error")(8,yn,2,0,"mat-error")(9,Cn,2,0,"mat-error"),o()),t&2){let e,n=d().$implicit,a=d();c(2),h(n.etiqueta),c(),b(n.tipo==="decimal"?3:-1),c(),Fe("text-transform",n.mayusculas?"uppercase":null),s("formControlName",n.nombre)("type",n.tipo==="numero"||n.tipo==="decimal"?"number":n.tipo==="texto"?"text":n.tipo),C("step",n.tipo==="decimal"?"0.01":n.tipo==="numero"?"1":null)("maxlength",n.maxLength)("autocomplete",n.tipo==="password"?"new-password":"off"),c(),b(n.ayuda?5:-1),c(),b((e=a.form.get(n.nombre))!=null&&e.hasError("email")?6:(e=a.form.get(n.nombre))!=null&&e.hasError("minlength")?7:(e=a.form.get(n.nombre))!=null&&e.hasError("min")?8:9)}}function En(t,i){if(t&1&&(r(0,"div"),p(1,dn,3,2,"div",8)(2,sn,5,4,"mat-form-field",9)(3,bn,9,3,"mat-form-field",9)(4,kn,9,3,"mat-form-field",9)(5,Mn,10,11,"mat-form-field",9),o()),t&2){let e,n=i.$implicit;y("completo",n.ancho==="completo"||n.tipo==="textarea"||n.tipo==="multiselect"),c(),b((e=n.tipo)==="checkbox"?1:e==="textarea"?2:e==="select"?3:e==="multiselect"?4:5)}}function In(t,i){t&1&&x(0,"mat-spinner",7)}function Tn(t,i){t&1&&(r(0,"mat-icon"),m(1,"save"),o())}var Z=class t{datos=u(Ft);ref=u(Dt);api=u(H);notificacion=u(U);esNuevo=this.datos.fila===null;guardando=v(!1);campos=this.datos.config.campos.filter(i=>this.esNuevo?!i.soloEditar:!i.soloCrear);form=new nt(Object.fromEntries(this.campos.map(i=>[i.nombre,this.crearControl(i)])));crearControl(i){let e=this.datos.fila,n;e?n=i.valorInicial?i.valorInicial(e):e[i.nombre]:n=i.valorDefecto??(i.tipo==="checkbox"?!0:i.tipo==="multiselect"?[]:null);let a=[];return(i.requerido||i.requeridoAlCrear&&this.esNuevo)&&a.push(P.required),i.maxLength&&a.push(P.maxLength(i.maxLength)),i.minLength&&a.push(P.minLength(i.minLength)),i.tipo==="email"&&a.push(P.email),(i.tipo==="numero"||i.tipo==="decimal")&&a.push(P.min(0)),new it({value:n,disabled:!!(i.deshabilitadoAlEditar&&e)},a)}opcionesDe(i){return this.datos.opciones[i.nombre]??[]}guardar(){if(this.form.invalid){this.form.markAllAsTouched();return}let i=this.datos.config,e=F({},this.form.value);for(let a of this.campos){let l=e[a.nombre];a.mayusculas&&typeof l=="string"&&(e[a.nombre]=l.toUpperCase()),typeof l=="string"&&l.trim()===""&&(e[a.nombre]=null),(a.tipo==="numero"||a.tipo==="decimal")&&l!==null&&l!==""&&(e[a.nombre]=Number(l))}this.guardando.set(!0),(this.esNuevo?this.api.post(i.url,e):this.api.put(`${i.url}/${this.datos.fila[i.id]}`,F(F({},this.datos.fila),e))).subscribe({next:()=>{this.notificacion.exito(this.esNuevo?`Se cre\xF3 el ${i.nombreSingular}`:"Cambios guardados"),this.ref.close(!0)},error:()=>this.guardando.set(!1)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-formulario-dialog"]],decls:16,vars:7,consts:[["mat-dialog-title","",1,"titulo"],[3,"ngSubmit","formGroup"],[1,"rejilla"],[3,"completo"],["align","end"],["mat-button","","type","button","mat-dialog-close","",3,"disabled"],["mat-flat-button","","type","submit",3,"disabled"],["diameter","18"],[1,"checkbox"],[1,"ancho-completo"],[3,"formControlName"],["matInput","","rows","2",3,"formControlName"],[3,"value"],["multiple","",3,"formControlName"],["matTextPrefix",""],["matInput","",3,"formControlName","type"]],template:function(e,n){e&1&&(r(0,"h2",0)(1,"mat-icon"),m(2),o(),m(3),o(),r(4,"form",1),k("ngSubmit",function(){return n.guardar()}),r(5,"mat-dialog-content")(6,"div",2),T(7,En,6,3,"div",3,mn),o()(),r(9,"mat-dialog-actions",4)(10,"button",5),m(11,"Cancelar"),o(),r(12,"button",6),p(13,In,1,0,"mat-spinner",7)(14,Tn,2,0,"mat-icon"),m(15," Guardar "),o()()()),e&2&&(c(2),h(n.esNuevo?"add_circle":"edit"),c(),we(" ",n.esNuevo?"Nuevo":"Editar"," ",n.datos.config.nombreSingular,`
`),c(),s("formGroup",n.form),c(3),S(n.campos),c(3),s("disabled",n.guardando()),c(2),s("disabled",n.guardando()),c(),b(n.guardando()?13:14))},dependencies:[rt,at,We,et,tt,ct,ot,$t,Pt,Ot,At,Nt,B,L,Qe,Ze,Xe,q,X,Q,dt,mt,je,Xt,re,j,G,V,R,Gt,Bt],styles:[".titulo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--app-primario)}.checkbox[_ngcontent-%COMP%]{padding:4px 0 12px}mat-form-field[_ngcontent-%COMP%]{margin-bottom:4px}"]})};var Sn=()=>[10,25,50],Dn=(t,i)=>i.campo;function Fn(t,i){if(t&1){let e=D();r(0,"div",4)(1,"button",25),k("click",function(){E(e);let a=d();return I(a.nuevo())}),r(2,"mat-icon"),m(3,"add"),o(),m(4),o()()}if(t&2){let e=d();c(4),f(" Nuevo ",e.config().nombreSingular," ")}}function wn(t,i){if(t&1){let e=D();r(0,"button",26),k("click",function(){E(e);let a=d();return I(a.busqueda.set(""))}),r(1,"mat-icon"),m(2,"close"),o()()}}function Pn(t,i){if(t&1){let e=D();r(0,"mat-slide-toggle",27),k("change",function(a){E(e);let l=d();return I(l.mostrarInactivos.set(a.checked))}),m(1," Mostrar inactivos "),o()}if(t&2){let e=d();s("checked",e.mostrarInactivos())}}function On(t,i){if(t&1&&m(0),t&2){let e=d();f(" \xB7 ",e.total()-e.activos()," inactivos ")}}function Nn(t,i){t&1&&x(0,"mat-progress-bar",14)}function An(t,i){if(t&1&&(r(0,"th",30),m(1),o()),t&2){let e=d().$implicit;y("derecha",e.tipo==="moneda"||e.tipo==="numero"),c(),f(" ",e.titulo," ")}}function $n(t,i){if(t&1&&(r(0,"span",32),m(1),z(2,"moneda"),o()),t&2){let e=d().$implicit,n=d().$implicit;c(),h(ne(2,1,e[n.campo]))}}function zn(t,i){if(t&1&&(r(0,"span",32),m(1),z(2,"numero"),o()),t&2){let e=d().$implicit,n=d().$implicit;c(),h(ne(2,1,e[n.campo]))}}function Rn(t,i){if(t&1&&(m(0),z(1,"fecha")),t&2){let e=d().$implicit,n=d().$implicit;f(" ",Ne(1,1,e[n.campo],!0)," ")}}function Vn(t,i){if(t&1&&(r(0,"span",37),m(1),o()),t&2){let e=d().$implicit;y("exito",e.Estado)("peligro",!e.Estado),c(),f(" ",e.Estado?"Activo":"Inactivo"," ")}}function qn(t,i){if(t&1&&(r(0,"span",38),m(1),o()),t&2){let e=i.$implicit;c(),h(e)}}function Ln(t,i){if(t&1&&(r(0,"span",37),m(1),o()),t&2){let e=d(2).$implicit,n=d().$implicit,a=d();c(),f("+",a.lista(e,n).length-3)}}function Bn(t,i){t&1&&(r(0,"span",39),m(1,"\u2014"),o())}function Gn(t,i){if(t&1&&(r(0,"div",34),T(1,qn,2,1,"span",38,ye),p(3,Ln,2,1,"span",37),p(4,Bn,2,0,"span",39),o()),t&2){let e=d().$implicit,n=d().$implicit,a=d();c(),S(a.lista(e,n).slice(0,3)),c(2),b(a.lista(e,n).length>3?3:-1),c(),b(a.lista(e,n).length===0?4:-1)}}function jn(t,i){if(t&1&&m(0),t&2){let e=d().$implicit,n=d().$implicit,a=d();f(" ",a.textoOpcion(e,n)," ")}}function Hn(t,i){if(t&1&&(r(0,"span",37),m(1),o()),t&2){let e=d().$implicit,n=d().$implicit;$("chip "+(n.clase?n.clase(e):"")),c(),f(" ",n.formato?n.formato(e):e[n.campo]," ")}}function Un(t,i){if(t&1&&(r(0,"span"),m(1),o()),t&2){let e=d().$implicit,n=d().$implicit;y("destacado",n.destacado),c(),f(" ",n.formato?n.formato(e):e[n.campo]??"\u2014"," ")}}function Qn(t,i){if(t&1&&(r(0,"td",31),p(1,$n,3,3,"span",32)(2,zn,3,3,"span",32)(3,Rn,2,4)(4,Vn,2,5,"span",33)(5,Gn,5,2,"div",34)(6,jn,1,1)(7,Hn,2,3,"span",35)(8,Un,2,3,"span",36),o()),t&2){let e,n=i.$implicit,a=d().$implicit;y("derecha",a.tipo==="moneda"||a.tipo==="numero")("inactivo",n.Estado===!1),c(),b((e=a.tipo)==="moneda"?1:e==="numero"?2:e==="fecha"?3:e==="estado"?4:e==="lista"?5:e==="opcion"?6:e==="chip"?7:8)}}function Xn(t,i){if(t&1&&(W(0,17),A(1,An,2,3,"th",28)(2,Qn,9,5,"td",29),Y()),t&2){let e=i.$implicit;s("matColumnDef",e.campo)}}function Zn(t,i){t&1&&(r(0,"th",40),m(1,"Acciones"),o())}function Jn(t,i){if(t&1){let e=D();r(0,"button",45),k("click",function(){E(e);let a=d(2).$implicit,l=d();return I(l.cambiarEstado(a))}),r(1,"mat-icon"),m(2,"block"),o()()}}function Kn(t,i){if(t&1){let e=D();r(0,"button",46),k("click",function(){E(e);let a=d(2).$implicit,l=d();return I(l.cambiarEstado(a))}),r(1,"mat-icon"),m(2,"check_circle"),o()()}}function Wn(t,i){if(t&1&&p(0,Jn,3,0,"button",43)(1,Kn,3,0,"button",44),t&2){let e=d().$implicit;b(e.Estado!==!1?0:1)}}function Yn(t,i){if(t&1){let e=D();r(0,"td",41)(1,"button",42),k("click",function(){let a=E(e).$implicit,l=d();return I(l.editar(a))}),r(2,"mat-icon"),m(3,"edit"),o()(),p(4,Wn,2,1),o()}if(t&2){let e=d();c(4),b(e.config().estado!=="ninguno"?4:-1)}}function ei(t,i){t&1&&x(0,"tr",47)}function ti(t,i){t&1&&x(0,"tr",48)}function ni(t,i){if(t&1&&(r(0,"tr",49)(1,"td")(2,"div",50)(3,"mat-icon"),m(4,"inbox"),o(),r(5,"p"),m(6),o()()()()),t&2){let e=d();c(),C("colspan",e.columnas().length),c(5),h(e.cargando()?"Cargando...":e.busqueda()?'No hay resultados para "'+e.busqueda()+'"':"Todav\xEDa no hay registros")}}var Jt=class t{config=$e.required();api=u(H);dialog=u(wt);notificacion=u(U);sort=ae(N);paginator=ae(O);datos=new It([]);cargando=v(!0);busqueda=v("");mostrarInactivos=v(!1);total=v(0);activos=v(0);opciones=v({});columnas=ie(()=>[...this.config().columnas.map(i=>i.campo),"acciones"]);tieneEstado=ie(()=>this.config().columnas.some(i=>i.tipo==="estado"));constructor(){xe(()=>{this.datos.filter=JSON.stringify({texto:this.busqueda().trim().toLowerCase(),inactivos:this.mostrarInactivos()}),this.paginator()?.firstPage()})}ngOnInit(){this.datos.filterPredicate=(i,e)=>{let n=JSON.parse(e);return!n.inactivos&&i.Estado===!1?!1:this.config().busqueda.map(l=>String(i[l]??"")).join(" ").toLowerCase().includes(n.texto)},this.cargarOpciones(),this.cargar()}ngAfterViewInit(){this.datos.sort=this.sort()??null,this.datos.paginator=this.paginator()??null}cargar(){this.cargando.set(!0),this.api.get(this.config().url).subscribe({next:i=>{this.datos.data=i,this.total.set(i.length),this.activos.set(i.filter(e=>e.Estado!==!1).length),this.cargando.set(!1)},error:()=>this.cargando.set(!1)})}cargarOpciones(){let i=this.config().campos.filter(e=>e.opciones);i.length!==0&&se(i.map(e=>this.api.get(e.opciones.url))).subscribe(e=>{let n={};i.forEach((a,l)=>{let g=a.opciones,J=e[l].map(me=>({valor:me[g.valor],texto:me[g.texto]}));n[a.nombre]=g.vacio?[{valor:null,texto:g.vacio},...J]:J}),this.opciones.set(n)})}nuevo(){this.abrirFormulario(null)}editar(i){this.abrirFormulario(i)}abrirFormulario(i){this.dialog.open(Z,{data:{config:this.config(),fila:i,opciones:this.opciones()},width:this.config().anchoDialogo??"640px",maxWidth:"95vw",autoFocus:"first-tabbable"}).afterClosed().subscribe(e=>{e&&this.cargar()})}cambiarEstado(i){let e=this.config(),n=i[e.id],a=i.Estado!==!1;(a?Lt.abrir(this.dialog,{titulo:`Desactivar ${e.nombreSingular}`,mensaje:"El registro no se borra: queda inactivo y ya no aparecer\xE1 en las listas. Puede reactivarlo cuando quiera.",textoAceptar:"Desactivar",peligro:!0}):le(!0)).subscribe(g=>{if(!g)return;(a?this.api.delete(`${e.url}/${n}`):e.estado==="patch"?this.api.patch(`${e.url}/${n}/activar`):this.api.put(`${e.url}/${n}`,de(F({},i),{Estado:!0}))).subscribe(()=>{this.notificacion.exito(a?"Registro desactivado":"Registro activado"),this.cargar()})})}lista(i,e){return(i[e.campo]??[]).map(a=>e.listaCampo?a[e.listaCampo]:a)}textoOpcion(i,e){return(this.opciones()[e.opcionDe??e.campo]??[]).find(a=>a.valor===i[e.campo])?.texto??"\u2014"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-mantenimiento"]],viewQuery:function(e,n){e&1&&Te(n.sort,N,5)(n.paginator,O,5),e&2&&Se(2)},inputs:{config:[1,"config"]},decls:38,vars:16,consts:[[1,"pagina"],[1,"encabezado"],[1,"titulo"],[1,"icono"],[1,"acciones"],[1,"tarjeta"],[1,"filtros"],[1,"buscar"],["matPrefix",""],["matInput","","placeholder","Buscar...",3,"input","value"],["mat-icon-button","","matSuffix",""],[3,"checked"],[1,"contador","texto-suave"],["mat-icon-button","","matTooltip","Actualizar",3,"click"],["mode","indeterminate"],[1,"tabla-contenedor"],["mat-table","","matSort","",3,"dataSource"],[3,"matColumnDef"],["matColumnDef","acciones"],["mat-header-cell","","class","derecha",4,"matHeaderCellDef"],["mat-cell","","class","derecha acciones-fila",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["mat-flat-button","",3,"click"],["mat-icon-button","","matSuffix","",3,"click"],[3,"change","checked"],["mat-header-cell","","mat-sort-header","",3,"derecha",4,"matHeaderCellDef"],["mat-cell","",3,"derecha","inactivo",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"monto"],[1,"chip",3,"exito","peligro"],[1,"lista"],[1,"chip",3,"class"],[3,"destacado"],[1,"chip"],[1,"chip","primario"],[1,"texto-suave"],["mat-header-cell","",1,"derecha"],["mat-cell","",1,"derecha","acciones-fila"],["mat-icon-button","","matTooltip","Editar",3,"click"],["mat-icon-button","","matTooltip","Desactivar",1,"desactivar"],["mat-icon-button","","matTooltip","Activar",1,"activar"],["mat-icon-button","","matTooltip","Desactivar",1,"desactivar",3,"click"],["mat-icon-button","","matTooltip","Activar",1,"activar",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],[1,"sin-datos"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3)(4,"mat-icon"),m(5),o()(),r(6,"div")(7,"h1"),m(8),o(),r(9,"p"),m(10),o()()(),p(11,Fn,5,1,"div",4),o(),r(12,"div",5)(13,"div",6)(14,"mat-form-field",7)(15,"mat-icon",8),m(16,"search"),o(),r(17,"input",9),k("input",function(l){return n.busqueda.set(l.target.value)}),o(),p(18,wn,3,0,"button",10),o(),p(19,Pn,2,1,"mat-slide-toggle",11),r(20,"span",12),m(21),p(22,On,1,1),o(),r(23,"button",13),k("click",function(){return n.cargar()}),r(24,"mat-icon"),m(25,"refresh"),o()()(),p(26,Nn,1,0,"mat-progress-bar",14),r(27,"div",15)(28,"table",16),T(29,Xn,3,1,"ng-container",17,Dn),W(31,18),A(32,Zn,2,0,"th",19)(33,Yn,5,1,"td",20),Y(),A(34,ei,1,0,"tr",21)(35,ti,1,0,"tr",22)(36,ni,7,2,"tr",23),o()(),x(37,"mat-paginator",24),o()()),e&2&&(c(5),h(n.config().icono),c(3),h(n.config().titulo),c(2),h(n.config().subtitulo),c(),b(n.config().permiteCrear!==!1?11:-1),c(6),s("value",n.busqueda()),c(),b(n.busqueda()?18:-1),c(),b(n.tieneEstado()?19:-1),c(2),f(" ",n.activos()," activos "),c(),b(n.total()!==n.activos()?22:-1),c(4),b(n.cargando()?26:-1),c(2),s("dataSource",n.datos),c(),S(n.config().columnas),c(5),s("matHeaderRowDef",n.columnas()),c(),s("matRowDefColumns",n.columnas()),c(2),s("pageSizeOptions",Oe(15,Sn))("pageSize",10))},dependencies:[Et,bt,_t,vt,kt,ut,gt,xt,ft,yt,Ct,Mt,St,N,Tt,pt,O,j,G,lt,V,R,B,L,q,Je,X,Q,Rt,zt,ht,st,qt,Vt,jt,Ht,Ut],styles:[".titulo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.titulo[_ngcontent-%COMP%]   .icono[_ngcontent-%COMP%]{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:var(--app-primario-suave);color:var(--app-primario)}.contador[_ngcontent-%COMP%]{margin-left:auto;font-size:13px}.lista[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px}.destacado[_ngcontent-%COMP%]{font-weight:600}td.inactivo[_ngcontent-%COMP%]{opacity:.55}.acciones-fila[_ngcontent-%COMP%]{white-space:nowrap}.acciones-fila[_ngcontent-%COMP%]   .desactivar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--app-peligro)}.acciones-fila[_ngcontent-%COMP%]   .activar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--app-exito)}mat-progress-bar[_ngcontent-%COMP%]{margin-bottom:8px;border-radius:4px}"]})};export{Jt as Mantenimiento};
