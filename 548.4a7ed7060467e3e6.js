"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[548],{7548:(L,u,i)=>{i.r(u),i.d(u,{AddressModule:()=>F});var r=i(6895),c=i(8616),p=i(5226),m=i.n(p),t=i(4650),A=i(7241),f=i(5830),g=i(8423),d=i(4333),h=i(502);const Z=["myModal3"];function T(s,l){1&s&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",10),t.qZA())}const v=function(){return[1,2,3,4,5,6,7,8,9,10]};function x(s,l){1&s&&(t.TgZ(0,"tr"),t.YNc(1,T,2,0,"td",8),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,v)))}function y(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"c-badge",11),t.NdJ("click",function(){const a=t.CHM(e).$implicit,J=t.oxw();return t.KtG(J.deleteAddress(a))}),t._uU(17),t.qZA()()()}if(2&s){const e=l.$implicit,n=t.oxw();t.xp6(2),t.hij(" ",e.id," "),t.xp6(2),t.AsE(" ",e.first_name," ",e.last_name," "),t.xp6(2),t.hij(" ",n.getTitle(e.title)," "),t.xp6(2),t.hij(" ",e.address," "),t.xp6(2),t.hij(" ",e.house," "),t.xp6(2),t.hij(" ",e.landmark," "),t.xp6(2),t.hij(" ",e.pincode," "),t.xp6(3),t.hij(" ",n.util.translate("Delete")," ")}}function C(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",12),t.NdJ("pageChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.page=o)}),t.qZA()()}}const _=function(s){return{id:"pagin1",itemsPerPage:10,currentPage:s}},U=[{path:"",component:(()=>{class s{constructor(e,n){this.util=e,this.api=n,this.dummy=[],this.list=[],this.dummyList=[],this.page=1,this.getList()}getList(){this.dummy=Array(5),this.list=[],this.dummyList=[],this.api.get_private("v1/address/getAll").then(e=>{console.log(e),this.dummy=[],e&&e.status&&200==e.status&&e.data&&e.data.length&&(this.list=e.data,this.dummyList=e.data,console.log(Object.keys(this.list[0])))},e=>{console.log(e),this.dummy=[],this.util.apiErrorHandler(e)}).catch(e=>{console.log(e),this.dummy=[],this.util.apiErrorHandler(e)})}ngOnInit(){}deleteAddress(e){console.log(e),m().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To delete this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(n=>{n&&n.value&&(console.log("update it"),this.util.show(),this.api.post_private("v1/address/delete",{id:e.id}).then(o=>{console.log(o),this.util.hide(),o&&o.status&&200==o.status&&this.getList()}).catch(o=>{console.log(o),this.util.hide(),this.util.apiErrorHandler(o)}))})}getTitle(e){return[this.util.translate("Home"),this.util.translate("Work"),this.util.translate("Others")][e]}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(A.f),t.Y36(f.s))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-address"]],viewQuery:function(e,n){if(1&e&&t.Gf(Z,5),2&e){let o;t.iGM(o=t.CRH())&&(n.myModal3=o.first)}},decls:32,vars:17,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[4,"ngIf"],["animation","progress"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],["id","pagin1",3,"pageChange"]],template:function(e,n){1&e&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6)(8,"table",7)(9,"thead")(10,"tr")(11,"th"),t._uU(12),t.qZA(),t.TgZ(13,"th"),t._uU(14),t.qZA(),t.TgZ(15,"th"),t._uU(16),t.qZA(),t.TgZ(17,"th"),t._uU(18),t.qZA(),t.TgZ(19,"th"),t._uU(20),t.qZA(),t.TgZ(21,"th"),t._uU(22),t.qZA(),t.TgZ(23,"th"),t._uU(24),t.qZA(),t.TgZ(25,"th"),t._uU(26),t.qZA()()(),t.TgZ(27,"tbody"),t.YNc(28,x,2,2,"tr",8),t.YNc(29,y,18,9,"tr",8),t.ALo(30,"paginate"),t.qZA()(),t.YNc(31,C,2,0,"div",9),t.qZA()()()()()),2&e&&(t.xp6(6),t.hij(" ",n.util.translate("Address")," "),t.xp6(6),t.hij(" ",n.util.translate("Id"),""),t.xp6(2),t.hij(" ",n.util.translate("User"),""),t.xp6(2),t.hij(" ",n.util.translate("Title"),""),t.xp6(2),t.hij(" ",n.util.translate("Address")," "),t.xp6(2),t.hij(" ",n.util.translate("House")," "),t.xp6(2),t.hij(" ",n.util.translate("Landmark")," "),t.xp6(2),t.hij(" ",n.util.translate("Pincode")," "),t.xp6(2),t.hij(" ",n.util.translate("Actions")," "),t.xp6(2),t.Q6J("ngForOf",n.dummy),t.xp6(1),t.Q6J("ngForOf",t.xi3(30,12,n.list,t.VKq(15,_,n.page))),t.xp6(2),t.Q6J("ngIf",(null==n.list?null:n.list.length)>0))},dependencies:[r.sg,r.O5,g.Ro,d.LS,h.xr,d._s],styles:['@charset "UTF-8";']}),s})()}];let j=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(U),c.Bz]}),s})();var M=i(4006),q=i(388);let F=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[r.ez,j,M.u5,g.ef,q.zk.forRoot(),d.JX,h.hx.forRoot({animation:"progress-dark"})]}),s})()}}]);