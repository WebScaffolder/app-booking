"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[793],{5793:(O,d,a)=>{a.r(d),a.d(d,{FreelancerRequestModule:()=>j});var u=a(6895),g=a(8616),v=a(5226),p=a.n(v),e=a(4650),q=a(7241),Z=a(5830),c=a(4006),m=a(8423),h=a(4333),f=a(502),_=a(388);const y=["largeModal"];function F(r,o){1&r&&(e.TgZ(0,"td"),e._UZ(1,"ngx-skeleton-loader",28),e.qZA())}const C=function(){return[1,2,3,4,1,2,3,4,5,5,6]};function x(r,o){1&r&&(e.TgZ(0,"tr"),e.YNc(1,F,2,0,"td",10),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngForOf",e.DdM(1,C)))}function T(r,o){1&r&&(e.TgZ(0,"span"),e._uU(1,","),e.qZA())}function b(r,o){if(1&r&&(e.TgZ(0,"span")(1,"p",35),e._uU(2),e.YNc(3,T,2,0,"span",12),e.qZA()()),2&r){const t=o.$implicit,i=o.index,s=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",i!=s.web_cates_data.length-1)}}function A(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"th",29),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",30),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"div",31),e.YNc(11,b,4,2,"span",10),e.qZA()(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td")(15,"div",32)(16,"c-badge",33),e.NdJ("click",function(){const n=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.accept(n))}),e._uU(17),e.qZA(),e.TgZ(18,"c-badge",34),e.NdJ("click",function(){const n=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.reject(n))}),e._uU(19),e.qZA()()()()}if(2&r){const t=o.$implicit,i=e.oxw();e.xp6(2),e.hij(" ",t.id," "),e.xp6(2),e.Q6J("src",i.api.imageUrl+t.cover,e.LSH),e.xp6(2),e.hij(" ",t.first_name+" "+t.last_name," "),e.xp6(2),e.hij(" ",t&&t.city_data&&t.city_data.name&&null!=t.city_data.name?t.city_data.name:""," "),e.xp6(3),e.Q6J("ngForOf",t.web_cates_data),e.xp6(2),e.hij("$ ",t.fee_start,""),e.xp6(4),e.hij(" ",i.util.translate("Accept")," "),e.xp6(2),e.hij(" ",i.util.translate("Reject")," ")}}function R(r,o){if(1&r&&(e.TgZ(0,"div",36)(1,"label"),e._uU(2),e.qZA()()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.util.translate("No Data Found.."))}}function w(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div")(1,"pagination-controls",37),e.NdJ("pageChange",function(s){e.CHM(t);const n=e.oxw();return e.KtG(n.page=s)}),e.qZA()()}}const M=function(r){return{id:"pagin1",itemsPerPage:10,currentPage:r}},N=[{path:"",component:(()=>{class r{constructor(t,i){this.util=t,this.api=i,this.freelancers=[],this.dummyFreelacer=[],this.page=1,this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.gender="1",this.cover="",this.categories=[],this.selectedItems=[],this.cities=[],this.hourly="",this.lat="",this.lng="",this.descriptions="",this.cityID="",this.zipcode="",this.experience="",this.freelancerId="",this.rate="",this.address="",this.fee_start="",this.getFreelancer()}ngOnInit(){}getFreelancer(){this.dummyFreelacer=Array(5),this.freelancers=[],this.api.get_private("v1/request/getIndividualRequest").then(t=>{this.dummyFreelacer=[],console.log(t),t&&t.status&&200==t.status&&t.success&&(console.log(">>>>>",t),t.data.length>0&&(this.freelancers=t.data))},t=>{this.dummyFreelacer=[],console.log("Error",t),this.util.apiErrorHandler(t)}).catch(t=>{this.dummyFreelacer=[],console.log("Err",t),this.util.apiErrorHandler(t)})}reject(t){p().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To delete this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(i=>{i&&i.value&&(console.log("update it"),console.log(t),console.log(t),this.util.show(),this.api.post_private("v1/request/delete",{id:t.id,uid:t.uid}).then(s=>{console.log(s),this.util.hide(),s&&s.status&&200==s.status&&this.getFreelancer()}).catch(s=>{console.log(s),this.util.hide(),this.util.apiErrorHandler(s)}))})}accept(t){p().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To accept this request?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(i=>{i&&i.value&&(console.log("update it"),console.log(t),console.log(t),this.freelancerId=t.id,this.firstName=t.first_name,this.lastName=t.last_name,this.email=t.email,this.password=t.password,this.country_code=t.country_code,this.mobile=t.mobile,this.cityID=t.cid,this.cover=t.cover,this.descriptions=t.descriptions,this.gender=t.gender,this.selectedItems=t.web_cates_data,this.hourly=t.hourly_price,this.lat=t.lat,this.lng=t.lng,this.experience=t.total_experience,this.zipcode=t.zipcode,this.fee_start=t.fee_start,this.address=t.address,this.largeModal.show())})}acceptRequest(){if(""==this.rate||null==this.rate)return this.util.error(this.util.translate("Please add commission rate")),!1;this.country_code.toString().includes("+")||(this.country_code="+"+this.country_code);const i={first_name:this.firstName,last_name:this.lastName,gender:this.gender,cover:this.cover,mobile:this.mobile,email:this.email,country_code:this.country_code,password:this.password};this.util.show(),this.api.post_private("v1/auth/createIndividualAccount",i).then(s=>{if(this.util.hide(),console.log(s),500==s.status&&this.util.error(s.message),s&&s.status&&200==s.status&&s.user&&s.user.id)console.log(s),this.saveSalonProfile(s.user.id);else if(s&&s.error&&s.error.msg)this.util.error(s.error.msg);else if(s&&s.error&&"Validation Error."==s.error.message)for(let n in s.error[0])console.log(s.error[0][n][0]),this.util.error(s.error[0][n][0]);else this.util.error(this.util.translate("Something went wrong"))},s=>{if(console.log(s),this.util.hide(),s&&s.error&&500==s.error.status&&s.error.message)this.util.error(s.error.message);else if(s&&s.error&&s.error.error&&422==s.error.status)for(let n in s.error.error)console.log(s.error.error[n][0]),this.util.error(s.error.error[n][0]);else this.util.error(this.util.translate("Something went wrong"))}).catch(s=>{if(console.log(s),this.util.hide(),s&&s.error&&500==s.error.status&&s.error.message)this.util.error(s.error.message);else if(s&&s.error&&s.error.error&&422==s.error.status)for(let n in s.error.error)console.log(s.error.error[n][0]),this.util.error(s.error.error[n][0]);else this.util.error(this.util.translate("Something went wrong"))})}saveSalonProfile(t){console.log("uid",t);const i=this.selectedItems.map(n=>n.id);console.log(i);const s={uid:t,status:1,lat:this.lat,lng:this.lng,cover:this.cover,categories:i.join(),address:this.address,about:this.descriptions,images:"NA",cid:this.cityID,zipcode:this.zipcode,rating:0,total_rating:0,website:"NA",timing:"NA",verified:1,available:1,have_shop:0,fee_start:this.fee_start,popular:0,in_home:1,extra_field:"NA",background:"NA",rate:this.rate};this.util.show(),this.api.post_private("v1/individual/create",s).then(n=>{console.log("+++++++++++++++",n),this.util.hide(),n&&n.status&&200==n.status&&n.success&&(this.largeModal.hide(),this.util.success(this.util.translate("Individual added !")),this.util.show(),this.api.post_private("v1/request/delete",{id:this.freelancerId}).then(l=>{console.log(l),this.util.hide(),l&&l.status&&200==l.status&&this.getFreelancer()}).catch(l=>{console.log(l),this.util.hide(),this.util.apiErrorHandler(l)}))},n=>{this.util.hide(),console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{this.util.hide(),console.log("Err",n),this.util.apiErrorHandler(n)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(q.f),e.Y36(Z.s))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-freelancer-request"]],viewQuery:function(t,i){if(1&t&&e.Gf(y,5),2&t){let s;e.iGM(s=e.CRH())&&(i.largeModal=s.first)}},decls:52,vars:23,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table","table-responsive-sm","table-hover","mb-0"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],["class","error_div",4,"ngIf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["largeModal","bs-modal"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",2,"overflow","scroll","height","150px"],[1,"form-group"],["for","input-email",1,"form-control-label"],["type","number","id","input-email",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["count","1","appearance","line"],["scope","row"],["onError","this.src='assets/img/dummy.jpeg'",1,"img-responsive",2,"height","40px","width","40px","object-fit","cover",3,"src"],[1,"cate_info"],[1,"d-flex","align-items-center"],["color","success",1,"me-1","badge","bg-success",3,"click"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],[2,"font-size","10px","margin","0px"],[1,"error_div"],["id","pagin1",3,"pageChange"]],template:function(t,i){if(1&t){const s=e.EpF();e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._uU(6),e.qZA(),e.TgZ(7,"div",6)(8,"table",7)(9,"thead",8)(10,"tr")(11,"th",9),e._uU(12),e.qZA(),e.TgZ(13,"th",9),e._uU(14),e.qZA(),e.TgZ(15,"th",9),e._uU(16),e.qZA(),e.TgZ(17,"th",9),e._uU(18),e.qZA(),e.TgZ(19,"th",9),e._uU(20),e.qZA(),e.TgZ(21,"th",9),e._uU(22),e.qZA(),e.TgZ(23,"th",9),e._uU(24),e.qZA()()(),e.TgZ(25,"tbody"),e.YNc(26,x,2,2,"tr",10),e.YNc(27,A,20,8,"tr",10),e.ALo(28,"paginate"),e.qZA()(),e.YNc(29,R,3,1,"div",11),e.YNc(30,w,2,0,"div",12),e.qZA()()()()(),e.TgZ(31,"div",13,14)(33,"div",15)(34,"div",16)(35,"div",17)(36,"h4",18),e._uU(37),e.qZA(),e.TgZ(38,"button",19),e.NdJ("click",function(){e.CHM(s);const l=e.MAs(32);return e.KtG(l.hide())}),e.TgZ(39,"span",20),e._uU(40,"\xd7"),e.qZA()()(),e.TgZ(41,"div",21)(42,"div",3)(43,"div",22)(44,"label",23),e._uU(45),e.qZA(),e.TgZ(46,"input",24),e.NdJ("ngModelChange",function(l){return i.rate=l}),e.qZA()()()(),e.TgZ(47,"div",25)(48,"button",26),e.NdJ("click",function(){e.CHM(s);const l=e.MAs(32);return e.KtG(l.hide())}),e._uU(49),e.qZA(),e.TgZ(50,"button",27),e.NdJ("click",function(){return i.acceptRequest()}),e._uU(51),e.qZA()()()()()}2&t&&(e.xp6(6),e.hij(" ",i.util.translate("All Request")," "),e.xp6(6),e.Oqu(i.util.translate("Id")),e.xp6(2),e.Oqu(i.util.translate("Cover")),e.xp6(2),e.Oqu(i.util.translate("Name")),e.xp6(2),e.Oqu(i.util.translate("City")),e.xp6(2),e.Oqu(i.util.translate("Categories")),e.xp6(2),e.Oqu(i.util.translate("Fee Start")),e.xp6(2),e.Oqu(i.util.translate("Action")),e.xp6(2),e.Q6J("ngForOf",i.dummyFreelacer),e.xp6(1),e.Q6J("ngForOf",e.xi3(28,18,i.freelancers,e.VKq(21,M,i.page))),e.xp6(2),e.Q6J("ngIf",(null==i.freelancers?null:i.freelancers.length)<=0&&(null==i.dummyFreelacer?null:i.dummyFreelacer.length)<=0),e.xp6(1),e.Q6J("ngIf",(null==i.freelancers?null:i.freelancers.length)>0),e.xp6(7),e.Oqu(i.util.translate("Add Commission")),e.xp6(8),e.hij(" ",i.util.translate("Commission Rate"),""),e.xp6(1),e.Q6J("placeholder",i.util.translate("Commission Rate"))("ngModel",i.rate),e.xp6(3),e.Oqu(i.util.translate("Close")),e.xp6(2),e.hij(" ",i.util.translate("Save Changes"),""))},dependencies:[u.sg,u.O5,c.Fj,c.wV,c.JJ,c.On,m.Ro,h.LS,f.xr,_.oB,h._s],styles:['@charset "UTF-8";']}),r})()}];let U=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[g.Bz.forChild(N),g.Bz]}),r})();var I=a(9241),J=a(324);let j=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.ez,U,c.u5,m.ef,h.JX,f.hx.forRoot({animation:"progress-dark"}),I.P4,_.zk,J.Z.forRoot()]}),r})()}}]);