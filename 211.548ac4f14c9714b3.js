"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[211],{9944:(E,T,g)=>{g.r(T),g.d(T,{ProductSubCategoryModule:()=>j});var n=g(6895),b=g(8616),x=g(5226),A=g.n(x),t=g(4650),k=g(7241),M=g(5830),_=g(4006),C=g(8423),v=g(4333),Z=g(502);function w(c,m){if(1&c&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&c){const i=m.$implicit;t.Q6J("value",i.id),t.xp6(1),t.hij(" ",i.name," ")}}function o(c,m){if(1&c){const i=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.createCategory())}),t._uU(1),t.qZA()}if(2&c){const i=t.oxw();t.xp6(1),t.hij(" ",i.util.translate("Save"),"")}}function p(c,m){if(1&c){const i=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.updateCategory())}),t._uU(1),t.qZA()}if(2&c){const i=t.oxw();t.xp6(1),t.hij(" ",i.util.translate("Update"),"")}}function e(c,m){if(1&c&&(t.TgZ(0,"div",32)(1,"label"),t._uU(2),t.qZA()()),2&c){const i=t.oxw();t.xp6(2),t.Oqu(i.util.translate("No Data Found.."))}}function a(c,m){1&c&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",33),t.qZA())}const r=function(){return[1,2,3,4,5]};function u(c,m){1&c&&(t.TgZ(0,"tr"),t.YNc(1,a,2,0,"td",27),t.qZA()),2&c&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,r)))}function h(c,m){if(1&c){const i=t.EpF();t.TgZ(0,"tr")(1,"th",34),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",35),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",36)(11,"c-badge",37),t.NdJ("click",function(){const d=t.CHM(i).$implicit,y=t.oxw();return t.KtG(y.statusUpdate(d))}),t._uU(12),t.qZA(),t.TgZ(13,"c-badge",38),t.NdJ("click",function(){const d=t.CHM(i).$implicit,y=t.oxw();return t.KtG(y.updateInfo(d.id))}),t._uU(14),t.qZA(),t.TgZ(15,"c-badge",39),t.NdJ("click",function(){const d=t.CHM(i).$implicit,y=t.oxw();return t.KtG(y.deleteItem(d))}),t._uU(16),t.qZA()()()()}if(2&c){const i=m.$implicit,s=t.oxw();t.xp6(2),t.hij(" ",i.id," "),t.xp6(2),t.Q6J("src",s.api.imageUrl+i.cover,t.LSH),t.xp6(2),t.hij(" ",i.name," "),t.xp6(2),t.hij(" ",i.cate_name," "),t.xp6(3),t.Tol(1==i.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==i.status?"success":"dark"),t.xp6(1),t.hij(" ",s.util.translate(1==i.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",s.util.translate("View")," "),t.xp6(2),t.hij(" ",s.util.translate("Delete")," ")}}function f(c,m){if(1&c){const i=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",40),t.NdJ("pageChange",function(l){t.CHM(i);const d=t.oxw();return t.KtG(d.page=l)}),t.qZA()()}}const I=function(){return{standalone:!0}},D=function(c){return{id:"pagin1",itemsPerPage:5,currentPage:c}},S=[{path:"",component:(()=>{class c{constructor(i,s){this.util=i,this.api=s,this.action="create",this.dummy=Array(10),this.list=[],this.dummyList=[],this.name="",this.cover="",this.page=1,this.mainCateId="",this.subCateId="",this.category=[],this.resetChanges=()=>{this.list=this.dummyList},this.getCategories(),this.getAll()}ngOnInit(){}getCategories(){this.api.get_private("v1/product_categories/getAll").then(i=>{i&&i.status&&200==i.status&&i.success&&(console.log(">>>>>",i),i.data.length>0&&(this.category=i.data))},i=>{console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{console.log("Err",i),this.util.apiErrorHandler(i)})}getAll(){this.list=[],this.dummy=Array(10),this.api.get_private("v1/product_sub_categories/getAll").then(i=>{this.dummy=[],i&&i.status&&200==i.status&&i.success&&(console.log(">>>>>",i),i.data.length>0&&(this.list=i.data,this.dummyList=i.data,console.log("====",this.list)))},i=>{this.dummy=[],console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.dummy=[],console.log("Err",i),this.util.apiErrorHandler(i)})}search(i){this.resetChanges(),console.log("string",i),this.list=this.filterItems(i)}filterItems(i){return this.list.filter(s=>s.name.toLowerCase().indexOf(i.toLowerCase())>-1)}setFilteredItems(){console.log("clear"),this.list=[],this.list=this.dummyList}deleteItem(i){A().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To delete this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(s=>{s&&s.value&&(console.log("update it"),console.log(i),console.log(i),this.util.show(),this.api.post_private("v1/product_sub_categories/destroy",{id:i.id}).then(l=>{console.log(l),this.util.hide(),l&&l.status&&200==l.status&&this.getAll()}).catch(l=>{console.log(l),this.util.hide(),this.util.apiErrorHandler(l)}))})}preview_banner(i){console.log("fle",i),0!=i.length&&null!=i[0].type.match(/image\/*/)&&(i?(console.log("ok"),this.util.show(),this.api.uploadFile(i).subscribe(l=>{console.log("==>>>>>>",l.data),this.util.hide(),l&&l.data.image_name&&(this.cover=l.data.image_name)},l=>{console.log(l),this.util.hide()})):console.log("no"))}statusUpdate(i){A().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To update this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(s=>{if(s&&s.value){console.log("update it"),this.subCateId=i.id;const l={id:this.subCateId,status:0==i.status?1:0};console.log("======",l),this.util.show(),this.api.post_private("v1/product_sub_categories/update",l).then(d=>{this.util.hide(),console.log("+++++++++++++++",d),d&&d.status&&200==d.status&&d.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAll())},d=>{this.util.hide(),console.log("Error",d),this.util.apiErrorHandler(d)}).catch(d=>{this.util.hide(),console.log("Err",d),this.util.apiErrorHandler(d)})}})}updateInfo(i){this.action="update",this.subCateId=i;const s={id:this.subCateId};console.log("CAT BY ID => ",s),this.util.show(),this.api.post_private("v1/product_sub_categories/getById",s).then(l=>{console.log(l),this.util.hide(),l&&l.status&&200==l.status&&l.success&&(this.name=l.data.name,this.cover=l.data.cover,this.mainCateId=l.data.cate_id)},l=>{this.util.hide(),console.log("Error",l),this.util.apiErrorHandler(l)}).catch(l=>{this.util.hide(),console.log("Err",l),this.util.apiErrorHandler(l)})}clearData(){console.log("CLEAR DATA"),this.cover="",this.name="",this.mainCateId=""}createCategory(){if(""==this.name||null==this.name||""==this.cover||""==this.mainCateId)this.util.error(this.util.translate("All Fields are required"));else{const i={name:this.name,cate_id:this.mainCateId,cover:this.cover};this.util.show(),this.api.post_private("v1/product_sub_categories/create",i).then(s=>{console.log("+++++++++++++++",s),this.util.hide(),s&&s.status&&200==s.status&&s.success&&(this.clearData(),this.util.success(this.util.translate("Added !")),this.getAll())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}}updateCategory(){if(""==this.name||null==this.name||""==this.cover||""==this.mainCateId)this.util.error(this.util.translate("All fields are required"));else{const i={id:this.subCateId,name:this.name,cate_id:this.mainCateId,cover:this.cover};console.log("======",i),this.util.show(),this.api.post_private("v1/product_sub_categories/update",i).then(s=>{console.log("+++++++++++++++",s),this.util.hide(),s&&s.status&&200==s.status&&s.success&&(this.clearData(),this.util.success(this.util.translate("Updated !")),this.action="create",this.getAll())},s=>{this.util.hide(),console.log("Error",s),this.util.apiErrorHandler(s)}).catch(s=>{this.util.hide(),console.log("Err",s),this.util.apiErrorHandler(s)})}}}return c.\u0275fac=function(i){return new(i||c)(t.Y36(k.f),t.Y36(M.s))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-product-sub-category"]],decls:55,vars:29,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-4"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"logoContainer"],["onError","this.src='assets/img/dummy.jpeg'",3,"src"],[1,"fileContainer","sprite"],["type","file","value","Choose File",3,"change"],[1,"form-group"],[1,"modal_lbl"],[1,"form-control",3,"ngModel","ngModelOptions","placeholder","ngModelChange"],[1,"col-lg-12"],["for","input-username",1,"form-control-label"],["id","select2","name","select2",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","button","class","btn btn-success",3,"click",4,"ngIf"],["type","button","class","btn btn btn-primary",3,"click",4,"ngIf"],[1,"col-lg-8"],[1,"row","flex_row"],["type","text","id","name",1,"form-control",3,"placeholder","input"],["class","error_div",4,"ngIf"],[1,"table","table-responsive-sm","table-hover","mb-0"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn","btn-primary",3,"click"],[1,"error_div"],["count","1","appearance","line"],["scope","row"],["onError","this.src='assets/img/dummy.jpeg'",1,"img-responsive",2,"height","40px","width","40px","object-fit","cover",3,"src"],[1,"d-flex","align-items-center"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],["id","pagin1",3,"pageChange"]],template:function(i,s){1&i&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6)(8,"div",7),t._UZ(9,"img",8),t.qZA(),t.TgZ(10,"div",9)(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"input",10),t.NdJ("change",function(d){return s.preview_banner(d.target.files)}),t.qZA()(),t.TgZ(14,"form")(15,"div",11)(16,"label",12),t._uU(17),t.qZA(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(d){return s.name=d}),t.qZA()()(),t.TgZ(19,"div",14)(20,"div",11)(21,"label",15),t._uU(22),t.qZA(),t.TgZ(23,"select",16),t.NdJ("ngModelChange",function(d){return s.mainCateId=d}),t.YNc(24,w,2,2,"option",17),t.qZA()()(),t._UZ(25,"br"),t.YNc(26,o,2,1,"button",18),t.YNc(27,p,2,1,"button",19),t.qZA()()(),t.TgZ(28,"div",20)(29,"div",4)(30,"div",5),t._uU(31),t.qZA(),t.TgZ(32,"div",6)(33,"div",21)(34,"div",14)(35,"input",22),t.NdJ("input",function(d){return s.search(d.target.value)}),t.qZA()()(),t.YNc(36,e,3,1,"div",23),t.TgZ(37,"table",24)(38,"thead",25)(39,"tr")(40,"th",26),t._uU(41),t.qZA(),t.TgZ(42,"th",26),t._uU(43),t.qZA(),t.TgZ(44,"th",26),t._uU(45),t.qZA(),t.TgZ(46,"th",26),t._uU(47),t.qZA(),t.TgZ(48,"th",26),t._uU(49),t.qZA()()(),t.TgZ(50,"tbody"),t.YNc(51,u,2,2,"tr",27),t.YNc(52,h,17,10,"tr",27),t.ALo(53,"paginate"),t.qZA()(),t.YNc(54,f,2,0,"div",28),t.qZA()()()()()),2&i&&(t.xp6(6),t.hij(" ",s.util.translate("Category Information")," "),t.xp6(3),t.Q6J("src",s.api.imageUrl+s.cover,t.LSH),t.xp6(3),t.hij(" ",s.util.translate("Add Cover")," "),t.xp6(5),t.Oqu(s.util.translate("Category Name")),t.xp6(1),t.Q6J("ngModel",s.name)("ngModelOptions",t.DdM(26,I))("placeholder",s.util.translate("Category Name")),t.xp6(4),t.hij(" ",s.util.translate("Main Category")," "),t.xp6(1),t.Q6J("ngModel",s.mainCateId),t.xp6(1),t.Q6J("ngForOf",s.category),t.xp6(2),t.Q6J("ngIf","create"==s.action),t.xp6(1),t.Q6J("ngIf","update"==s.action),t.xp6(4),t.hij(" ",s.util.translate("All Categories")," "),t.xp6(4),t.Q6J("placeholder",s.util.translate("Search Category")),t.xp6(1),t.Q6J("ngIf",(null==s.list?null:s.list.length)<=0&&(null==s.dummy?null:s.dummy.length)<=0),t.xp6(5),t.Oqu(s.util.translate("Id")),t.xp6(2),t.Oqu(s.util.translate("Cover")),t.xp6(2),t.Oqu(s.util.translate("Name")),t.xp6(2),t.Oqu(s.util.translate("Category")),t.xp6(2),t.Oqu(s.util.translate("Action")),t.xp6(2),t.Q6J("ngForOf",s.dummy),t.xp6(1),t.Q6J("ngForOf",t.xi3(53,23,s.list,t.VKq(27,D,s.page))),t.xp6(2),t.Q6J("ngIf",(null==s.list?null:s.list.length)>0))},dependencies:[n.sg,n.O5,_._Y,_.YN,_.Kr,_.Fj,_.EJ,_.JJ,_.JL,_.On,_.F,C.Ro,v.LS,Z.xr,v._s],styles:['@charset "UTF-8";']}),c})()}];let P=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[b.Bz.forChild(S),b.Bz]}),c})();var J=g(388),q=g(9241);let j=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[n.ez,P,_.u5,C.ef,v.JX,Z.hx.forRoot({animation:"progress-dark"}),q.P4,J.zk]}),c})()},9241:(E,T,g)=>{g.d(T,{AH:()=>C,P4:()=>w,wW:()=>v,y3:()=>Z});var n=g(4650),b=g(6895);function x(o,p){if(1&o){const e=n.EpF();n.TgZ(0,"span",7),n.NdJ("click",function(r){n.CHM(e);const u=n.oxw().$implicit,h=n.oxw();return r.preventDefault(),n.KtG(h.removeTab(u))}),n._uU(1," \u274c"),n.qZA()}}const A=function(o){return["nav-item",o]};function t(o,p){if(1&o){const e=n.EpF();n.TgZ(0,"li",3),n.NdJ("keydown",function(r){const h=n.CHM(e).index,f=n.oxw();return n.KtG(f.keyNavActions(r,h))}),n.TgZ(1,"a",4),n.NdJ("click",function(){const u=n.CHM(e).$implicit;return n.KtG(u.active=!0)}),n.TgZ(2,"span",5),n._uU(3),n.qZA(),n.YNc(4,x,2,0,"span",6),n.qZA()()}if(2&o){const e=p.$implicit;n.ekj("active",e.active)("disabled",e.disabled),n.Q6J("ngClass",n.VKq(15,A,e.customClass||"")),n.xp6(1),n.ekj("active",e.active)("disabled",e.disabled),n.uIk("aria-controls",e.id?e.id:"")("aria-selected",!!e.active)("id",e.id?e.id+"-link":""),n.xp6(1),n.Q6J("ngTransclude",e.headingRef),n.xp6(1),n.Oqu(e.heading),n.xp6(1),n.Q6J("ngIf",e.removable)}}const k=["*"];let M=(()=>{class o{constructor(e){this.viewRef=e}set ngTransclude(e){this._ngTransclude=e,e&&this.viewRef.createEmbeddedView(e)}get ngTransclude(){return this._ngTransclude}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.s_b))},o.\u0275dir=n.lG2({type:o,selectors:[["","ngTransclude",""]],inputs:{ngTransclude:"ngTransclude"}}),o})(),_=(()=>{class o{constructor(){this.type="tabs",this.isKeysAllowed=!0,this.ariaLabel="Tabs"}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),C=(()=>{class o{constructor(e,a,r){this.renderer=a,this.elementRef=r,this.clazz=!0,this.tabs=[],this.classMap={},this.ariaLabel="Tabs",this.isDestroyed=!1,this._vertical=!1,this._justified=!1,this._type="tabs",this._isKeysAllowed=!0,Object.assign(this,e)}get vertical(){return this._vertical}set vertical(e){this._vertical=e,this.setClassMap()}get justified(){return this._justified}set justified(e){this._justified=e,this.setClassMap()}get type(){return this._type}set type(e){this._type=e,this.setClassMap()}get isKeysAllowed(){return this._isKeysAllowed}set isKeysAllowed(e){this._isKeysAllowed=e}ngOnDestroy(){this.isDestroyed=!0}addTab(e){this.tabs.push(e),e.active=1===this.tabs.length&&!e.active}removeTab(e,a={reselect:!0,emit:!0}){const r=this.tabs.indexOf(e);if(-1!==r&&!this.isDestroyed){if(a.reselect&&e.active&&this.hasAvailableTabs(r)){const u=this.getClosestTabIndex(r);this.tabs[u].active=!0}a.emit&&e.removed.emit(e),this.tabs.splice(r,1),e.elementRef.nativeElement.parentNode&&this.renderer.removeChild(e.elementRef.nativeElement.parentNode,e.elementRef.nativeElement)}}keyNavActions(e,a){if(!this.isKeysAllowed)return;const r=Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));if(13===e.keyCode||"Enter"===e.key||32===e.keyCode||"Space"===e.key)return e.preventDefault(),void r[a%r.length].click();if(39!==e.keyCode&&"RightArrow"!==e.key)if(37!==e.keyCode&&"LeftArrow"!==e.key)if(36!==e.keyCode&&"Home"!==e.key)if(35!==e.keyCode&&"End"!==e.key){if((46===e.keyCode||"Delete"===e.key)&&this.tabs[a].removable){if(this.removeTab(this.tabs[a]),r[a+1])return void r[(a+1)%r.length].focus();r[r.length-1]&&r[0].focus()}}else{e.preventDefault();let u,h=1,f=a;do{f-h<0?(f=r.length-1,u=r[f],h=0):u=r[f-h],h++}while(u.classList.contains("disabled"));u.focus()}else{e.preventDefault();let u,h=0;do{u=r[h%r.length],h++}while(u.classList.contains("disabled"));u.focus()}else{let u,h=1,f=a;do{f-h<0?(f=r.length-1,u=r[f],h=0):u=r[f-h],h++}while(u.classList.contains("disabled"));u.focus()}else{let u,h=1;do{u=r[(a+h)%r.length],h++}while(u.classList.contains("disabled"));u.focus()}}getClosestTabIndex(e){const a=this.tabs.length;if(!a)return-1;for(let r=1;r<=a;r+=1){const u=e-r,h=e+r;if(this.tabs[u]&&!this.tabs[u].disabled)return u;if(this.tabs[h]&&!this.tabs[h].disabled)return h}return-1}hasAvailableTabs(e){const a=this.tabs.length;if(!a)return!1;for(let r=0;r<a;r+=1)if(!this.tabs[r].disabled&&r!==e)return!0;return!1}setClassMap(){this.classMap={"nav-stacked":this.vertical,"flex-column":this.vertical,"nav-justified":this.justified,[`nav-${this.type}`]:!0}}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(_),n.Y36(n.Qsj),n.Y36(n.SBq))},o.\u0275cmp=n.Xpm({type:o,selectors:[["tabset"]],hostVars:2,hostBindings:function(e,a){2&e&&n.ekj("tab-container",a.clazz)},inputs:{vertical:"vertical",justified:"justified",type:"type"},ngContentSelectors:k,decls:4,vars:3,consts:[["role","tablist",1,"nav",3,"ngClass","click"],[3,"ngClass","active","disabled","keydown",4,"ngFor","ngForOf"],[1,"tab-content"],[3,"ngClass","keydown"],["href","javascript:void(0);","role","tab",1,"nav-link",3,"click"],[3,"ngTransclude"],["class","bs-remove-tab",3,"click",4,"ngIf"],[1,"bs-remove-tab",3,"click"]],template:function(e,a){1&e&&(n.F$t(),n.TgZ(0,"ul",0),n.NdJ("click",function(u){return u.preventDefault()}),n.YNc(1,t,5,17,"li",1),n.qZA(),n.TgZ(2,"div",2),n.Hsn(3),n.qZA()),2&e&&(n.Q6J("ngClass",a.classMap),n.uIk("aria-label",a.ariaLabel),n.xp6(1),n.Q6J("ngForOf",a.tabs))},dependencies:[b.mk,b.sg,b.O5,M],styles:["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]}),o})(),v=(()=>{class o{constructor(e,a,r){this.elementRef=a,this.renderer=r,this.disabled=!1,this.removable=!1,this.selectTab=new n.vpe,this.deselect=new n.vpe,this.removed=new n.vpe,this.addClass=!0,this.role="tabpanel",this._active=!1,this._customClass="",this.tabset=e,this.tabset.addTab(this)}get customClass(){return this._customClass}set customClass(e){this.customClass&&this.customClass.split(" ").forEach(a=>{this.renderer.removeClass(this.elementRef.nativeElement,a)}),this._customClass=e?e.trim():"",this.customClass&&this.customClass.split(" ").forEach(a=>{this.renderer.addClass(this.elementRef.nativeElement,a)})}get active(){return this._active}set active(e){if(this._active!==e){if(this.disabled&&e||!e)return void(this._active&&!e&&(this.deselect.emit(this),this._active=e));this._active=e,this.selectTab.emit(this),this.tabset.tabs.forEach(a=>{a!==this&&(a.active=!1)})}}get ariaLabelledby(){return this.id?`${this.id}-link`:""}ngOnInit(){this.removable=!!this.removable}ngOnDestroy(){this.tabset.removeTab(this,{reselect:!1,emit:!1})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(C),n.Y36(n.SBq),n.Y36(n.Qsj))},o.\u0275dir=n.lG2({type:o,selectors:[["tab"],["","tab",""]],hostVars:7,hostBindings:function(e,a){2&e&&(n.uIk("id",a.id)("role",a.role)("aria-labelledby",a.ariaLabelledby),n.ekj("active",a.active)("tab-pane",a.addClass))},inputs:{heading:"heading",id:"id",disabled:"disabled",removable:"removable",customClass:"customClass",active:"active"},outputs:{selectTab:"selectTab",deselect:"deselect",removed:"removed"},exportAs:["tab"]}),o})(),Z=(()=>{class o{constructor(e,a){a.headingRef=e}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.Rgc),n.Y36(v))},o.\u0275dir=n.lG2({type:o,selectors:[["","tabHeading",""]]}),o})(),w=(()=>{class o{static forRoot(){return{ngModule:o,providers:[]}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[b.ez]}),o})()}}]);