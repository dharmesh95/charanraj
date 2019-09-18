(window["webpackJsonpcharanraj-app"]=window["webpackJsonpcharanraj-app"]||[]).push([[0],{107:function(e,t,a){e.exports=a(140)},133:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=a(27),l=a(55),s=a(40),u=a(92),m=a(37),p=a(7),d=a(8),f=a(12),h=a(13),b=a(15),g=a(14),E=a(70),O=a.n(E),v="FETCH_USER",j="FETCH_ALL_RECOS",y="FETCH_ALL_VOTES",k="FETCH_VOTES_BY_EMAIL",w="FETCH_ALL_REQUESTS",D="FETCH_APPROVED_USERS",S="LOGOUT",R=function(e){return e},N=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R;return function(n){O.a.get(e).then(function(e){n({type:t,data:a(e.data)})}).catch(function(a){console.log(t,e,a),n({type:t,data:{}})})}},U=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"DEFAULT",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R;return function(r){O.a.post(e,t).then(function(e){r({type:a,data:n(e.data)})}).catch(function(t){console.log(a,e,t),r({type:a,data:{}})})}},C=function(e){return function(t){t({type:e,data:{}})}},x=a(186),P=a(93),A=Object(P.a)(function(e){return{progress:{margin:e.spacing(2)},alignment:{textAlign:"center"}}});function I(){var e=A();return r.a.createElement("div",{className:e.alignment},r.a.createElement(x.a,{className:e.progress}))}var L=function(e){var t=window.location.origin;return t.includes("localhost")&&(t="http://localhost:8080"),t+"/"+e},F="recommendation/addRecommendation",G="recommendation/getAllRecommendations",q="vote/getAllVotes",B="vote/getAllVotesByEmail",T="vote/addVote",_="user/getUser",W="feedback/addFeedback",z="admin/getRequests",V="admin/updateUserRole",M="admin/updateUser",H="admin/getApprovedUsers",J="admin/deleteUser",X=function(e){return!e||!Object.keys(e).length};var Y="GOOGLE_USER_PROFILE_OBJ";function Q(){var e=sessionStorage.getItem(Y);return e?JSON.parse(e):null}var $,K=a(73),Z=a(10),ee=a(202),te=a(201),ae=a(190),ne=a(208),re=a(142),oe=a(189),ce=a(143),ie=a(205),le=a(192),se=a(98),ue=a(204),me=a(21),pe=a(203),de=a(64),fe=a(96),he=a.n(fe),be=a(95),ge=a.n(be),Ee=a(94),Oe=a.n(Ee),ve=a(3),je=a(60),ye=a(141),ke=a(187),we=(a(88),a(133),function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(de.a,{paragraph:!0},"About Us"),r.a.createElement(ye.a,{style:{padding:"15px"}},r.a.createElement(ke.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:3},r.a.createElement(ke.a,{item:!0},r.a.createElement("img",{style:{borderRadius:"50%"},src:"https://lh3.googleusercontent.com/a-/AAuE7mBI4JEaaw4_y19Hz5mbJhDOnn4wmVLknGEsRXM3=s96-c",alt:"IMG"})),r.a.createElement(ke.a,{item:!0},r.a.createElement(ke.a,{container:!0,direction:"column",justify:"center",alignItems:"flex-start"},r.a.createElement(ke.a,{item:!0},r.a.createElement(de.a,{variant:"h6"},"Dharmesh Patel")),r.a.createElement(ke.a,{item:!0},r.a.createElement(de.a,{variant:"subtitle1",className:"details"},"The Creator",r.a.createElement("br",null),"Toronto, CA",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:95dharmesh@gmail.com",style:{textDecoration:"inherit",color:"inherit"}},"95dharmesh@gmail.com")),r.a.createElement(re.a,{target:"_blank",href:"https://www.linkedin.com/in/95dharmesh/"},r.a.createElement("i",{className:"fab fa-linkedin-in details"})),r.a.createElement(re.a,{target:"_blank",href:"https://github.com/dharmesh95"},r.a.createElement("i",{className:"fab fa-github icons details"})),r.a.createElement(re.a,{target:"_blank",href:"https://www.facebook.com/ddp95"},r.a.createElement("i",{className:"fab fa-facebook details"}))))))))}}]),t}(n.Component)),De=($={},Object(Z.a)($,"S","Super Admin"),Object(Z.a)($,"A","Admin"),Object(Z.a)($,"N","Normal"),Object(Z.a)($,"R","Rejected"),Object(Z.a)($,"U","Unknown"),$),Se=function(e){var t=["S"];return!X(e)&&t.includes(e.role)},Re=function(e){var t=["S","A"];return!X(e)&&t.includes(e.role)},Ne=function(e,t){return!X(e)&&!X(e.access)&&e.access[t]};a(68);function Ue(){return r.a.createElement(de.a,{variant:"caption",className:"details-header",style:{paddingLeft:"24px"}},"You don't have enough permissions!")}var Ce=a(191),xe=a(209),Pe=a(188),Ae=a(30),Ie=a.n(Ae),Le=(a(134),function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.requests,n=e.updateUserRole;return r.a.createElement(xe.a,null,r.a.createElement(Pe.a,{expandIcon:r.a.createElement(Ie.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(de.a,{className:t.heading},"Requests")),X(a)?r.a.createElement(I,null):r.a.createElement("div",{className:t.demo},r.a.createElement(oe.a,{dense:!0},a.map(function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement(ae.a,{variant:"fullWidth",component:"li"}),r.a.createElement(ce.a,{alignItems:"flex-start"},r.a.createElement(Ce.a,{style:{minWidth:"44px"}},r.a.createElement("img",{style:{borderRadius:"50%",height:"30px"},src:e.imageUrl,alt:"IMG"})),r.a.createElement(le.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,null,e.name),r.a.createElement(re.a,{className:"request-icons",onClick:function(){return n(e,"N",t)}},r.a.createElement("i",{className:"fas fa-check"})),r.a.createElement(re.a,{className:"request-icons",onClick:function(){return n(e,"R",t)}},r.a.createElement("i",{className:"fas fa-times"})))})))}))))}}]),t}(n.Component)),Fe=a(193);function Ge(e){return r.a.createElement("i",{style:{color:e.color},className:"fas fa-utensils icons"})}function qe(e){return r.a.createElement("i",{style:{color:e.color},className:"fas fa-shopping-basket icons"})}function Be(e){return r.a.createElement("i",{style:{color:e.color},className:"fas fa-broom icons"})}function Te(e){return r.a.createElement("i",{style:{color:e.color},className:"fas fa-calendar-alt icons"})}function _e(e){return r.a.createElement("i",{style:{color:e.color},className:"fas fa-user-cog icons"})}function We(e){return r.a.createElement("i",{style:{color:e.color},className:"fas fa-comments icons"})}function ze(e){return r.a.createElement("i",{style:{color:e.color},className:"fas fa-address-card icons"})}a(136);var Ve=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.approvedUsers,n=e.deleteUser,o=e.updateAccess,c=e.updateAdmin,i=e.profileObj;return r.a.createElement(xe.a,null,r.a.createElement(Pe.a,{expandIcon:r.a.createElement(Ie.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(de.a,{className:t.heading},"Users")),X(a)?r.a.createElement(I,null):r.a.createElement("div",{className:t.demo},r.a.createElement(oe.a,{dense:!0},a.map(function(e,a){return r.a.createElement("div",{key:e.id},r.a.createElement(ae.a,{variant:"fullWidth",component:"li"}),r.a.createElement(ce.a,{alignItems:"flex-start"},r.a.createElement(Ce.a,{style:{minWidth:"44px"}},r.a.createElement("img",{style:{borderRadius:"50%",height:"30px"},src:e.imageUrl,alt:"IMG"})),r.a.createElement(le.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,null,e.name),r.a.createElement(de.a,{className:"role"},De[e.role]),r.a.createElement(ke.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},r.a.createElement(ke.a,{item:!0},r.a.createElement(re.a,{className:"user-icons",onClick:function(){return o(e,"food",a)}},r.a.createElement(Ge,{color:e.access.food?"green":"grey"})),r.a.createElement(re.a,{className:"user-icons",onClick:function(){return o(e,"grocery",a)}},r.a.createElement(qe,{color:e.access.grocery?"green":"grey"})),r.a.createElement(re.a,{className:"user-icons",onClick:function(){return o(e,"cleaning",a)}},r.a.createElement(Be,{color:e.access.cleaning?"green":"grey"})),r.a.createElement(re.a,{className:"user-icons",onClick:function(){return o(e,"schedule",a)}},r.a.createElement(Te,{color:e.access.schedule?"green":"grey"})),r.a.createElement("br",null),Re(i)?r.a.createElement("div",null,r.a.createElement(Fe.a,{size:"small",variant:"contained",disabled:Se(e),className:t.button,onClick:function(){return c(e,"A",a)}},r.a.createElement("span",{style:{fontSize:"11px"}},"Make Admin")),r.a.createElement(Fe.a,{size:"small",variant:"contained",disabled:Se(e),className:t.button,onClick:function(){return c(e,"N",a)}},r.a.createElement("span",{style:{fontSize:"11px"}},"Remove Admin"))):r.a.createElement("br",null),r.a.createElement(Fe.a,{size:"small",variant:"contained",disabled:Re(e),className:t.button,onClick:function(){return n(e,a)}},r.a.createElement("span",{style:{fontSize:"11px"}},"Delete User")))))})))}))))}}]),t}(n.Component),Me=Object(P.a)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",marginTop:"5px"},dense:{marginTop:19},menu:{width:200},rightIcon:{marginLeft:e.spacing(1)},button:{marginBottom:"10px",marginRight:"10px"}}});function He(e){var t=Me();return r.a.createElement("div",{className:t.root},r.a.createElement(Le,Object.assign({classes:t},e)),r.a.createElement(Ve,Object.assign({classes:t},e)))}var Je=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).updateUserRole=a.updateUserRole.bind(Object(b.a)(a)),a.updateAdmin=a.updateAdmin.bind(Object(b.a)(a)),a.updateAccess=a.updateAccess.bind(Object(b.a)(a)),a.deleteUser=a.deleteUser.bind(Object(b.a)(a)),a.state={requests:[],approvedUsers:[]},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"updateUserRole",value:function(e,t,a){var n=this.state.requests,r=this.props.updateUserRole;e.role=t,r(e),delete n[a],this.setState({requests:n})}},{key:"updateAdmin",value:function(e,t,a){var n=this.state.approvedUsers,r=this.props.updateUserRole;e.role=t,r(e),n[a]=e,this.setState({approvedUsers:n})}},{key:"updateAccess",value:function(e,t,a){var n=this.state.approvedUsers,r=this.props.updateUser;e.access[t]=!e.access[t],r(e),n[a]=e,this.setState({approvedUsers:n})}},{key:"deleteUser",value:function(e,t){var a=this.state.approvedUsers,n=this.props.deleteUser;n(e),delete a[t],this.setState({approvedUsers:a})}},{key:"componentDidMount",value:function(){this.props.fetchRequests(),this.props.fetchApprovedUsers()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.requests,n=t.approvedUsers;a!==e.requests&&this.setState({requests:a}),n!==e.approvedUsers&&this.setState({approvedUsers:n})}},{key:"render",value:function(){var e=this.props.profileObj,t=this.state,a=t.requests,n=t.approvedUsers;return function(e){return Re(e)}(e)?r.a.createElement("div",null,r.a.createElement(de.a,{paragraph:!0},"Admin"),r.a.createElement(He,Object.assign({},this.props,{requests:a,approvedUsers:n,updateUserRole:this.updateUserRole,updateAdmin:this.updateAdmin,updateAccess:this.updateAccess,deleteUser:this.deleteUser}))):r.a.createElement(Ue,null)}}]),t}(n.Component);var Xe=Object(i.b)(function(e,t){return{requests:e.adminReducer.requests,approvedUsers:e.adminReducer.approvedUsers}},function(e){return{fetchRequests:function(){return e(N(L(z),w))},updateUserRole:function(t){return e(U(L(V),t))},updateUser:function(t){return e(U(L(M),t))},fetchApprovedUsers:function(){return e(N(L(H),D))},deleteUser:function(t){return e(U(L(J),t))}}})(Je),Ye=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.profileObj;return Ne(e,"cleaning")?r.a.createElement("div",null,"Coming Soon"):r.a.createElement(Ue,null)}}]),t}(n.Component),Qe=a(206),$e=function e(t,a,n){Object(p.a)(this,e),this.email=t,this.feedback=a,this.date=n},Ke=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).sendFeedback=function(){var e=a.state.feedback,t=a.props,n=t.profileObj,r=t.sendFeedback;e&&e.length>3&&(r(new $e(n.email,e,new Date)),a.setState({feedback:""}))},a.state={feedback:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({feedback:e.target.value})}},{key:"render",value:function(){var e=this.state.feedback;return r.a.createElement("div",null,r.a.createElement(de.a,{paragraph:!0},"Feedback"),r.a.createElement(Qe.a,{id:"standard-multiline-static",label:"Give Us Feedback",multiline:!0,rows:"6",placeholder:"Let's make it better together!",style:{width:"100%"},margin:"normal",onChange:this.handleChange,value:e}),r.a.createElement(Fe.a,{variant:"contained",color:"primary",onClick:this.sendFeedback},"Send",r.a.createElement("i",{style:{marginLeft:"10px"},className:"fa fa-paper-plane","aria-hidden":"true"})))}}]),t}(n.Component);var Ze=Object(i.b)(function(e,t){return{}},function(e){return{sendFeedback:function(t){return e(U(L(W),t))}}})(Ke),et=1,tt=-.5,at="vote",nt=function(e,t){var a=[],n=X(t);return X(e)||Object.keys(e).forEach(function(r){var o=e[r];!n&&t[r]&&(o[at]=t[r].points),a.push(o)}),a},rt=function(e,t,a){var n=[];return t.forEach(function(t){t.id===e&&(t[at]=a),n.push(t)}),n},ot=function(e,t){var a=[],n=X(t);return X(e)||Object.keys(e).forEach(function(r){var o=e[r];o.points=0,!n&&t[r]&&(o.points=t[r]),a.push(o)}),a.sort(ct)};function ct(e,t){var a=0;return e.points>t.points&&(a=1),t.points>e.points&&(a=-1),-1*a}var it=function e(t,a,n,r){Object(p.a)(this,e),this.recommendationId=t,this.email=a,this.points=n,this.date=r},lt=a(194),st=a(198),ut=a(197),mt=a(195),pt=a(196),dt=Object(P.a)(function(e){return{root:{width:"100%"},paper:{width:"100%",overflowX:"auto"}}});function ft(e){var t=dt(),a=e.rows;return r.a.createElement("div",{className:t.root},r.a.createElement(ye.a,{className:t.paper},a&&a.length?r.a.createElement(lt.a,{className:t.table,size:"small"},r.a.createElement(mt.a,null,r.a.createElement(pt.a,null,r.a.createElement(ut.a,null,"Recommendations"),r.a.createElement(ut.a,null,"Points"))),r.a.createElement(st.a,null,a.map(function(e){return r.a.createElement(pt.a,{key:e.id},r.a.createElement(ut.a,{component:"th",scope:"row"},e.foodName),r.a.createElement(ut.a,{align:"right"},e.points))}))):r.a.createElement(I,null)))}var ht=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.popularFoodData,n=e.profileObj;return r.a.createElement(xe.a,null,r.a.createElement(Pe.a,{expandIcon:r.a.createElement(Ie.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},r.a.createElement(de.a,{className:t.heading},"Popular")),function(e){return["S","A"].includes(e.role)}(n)?r.a.createElement(ft,Object.assign({style:{paddingLeft:"5px"},rows:a},this.props)):r.a.createElement(Ue,null))}}]),t}(n.Component),bt=a(199),gt=function e(t,a,n){Object(p.a)(this,e),this.email=t,this.foodName=a,this.date=n},Et=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(b.a)(a)),a.state={name:""},a.addRecommendation=a.addRecommendation.bind(Object(b.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"addRecommendation",value:function(){var e=this.state.name,t=this.props,a=t.profileObj,n=t.addRecommendation;e&&e.length>3&&(n(new gt(a.email,e,new Date)),this.setState({name:""}))}},{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){var e=this.state.name,t=this.props.classes;return r.a.createElement(xe.a,null,r.a.createElement(Pe.a,{expandIcon:r.a.createElement(Ie.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(de.a,{className:t.heading},"Recommendation")),r.a.createElement(bt.a,{style:{display:"block"}},r.a.createElement(de.a,{variant:"caption",className:"details-header"},"Please check if already present!"),r.a.createElement(Qe.a,{id:"standard-name",label:"Food Name",placeholder:"Min. 3 characters",className:t.textField,value:e,onChange:this.handleChange,margin:"normal"}),r.a.createElement(Fe.a,{variant:"contained",color:"primary",onClick:this.addRecommendation},"Send",r.a.createElement("i",{style:{marginLeft:"10px"},className:"fa fa-paper-plane","aria-hidden":"true"}))))}}]),t}(n.Component);var Ot=Object(i.b)(function(e,t){return{}},function(e){return{addRecommendation:function(t){return e(U(L(F),t))}}})(Et),vt=a(200),jt=Object(P.a)(function(e){return{root:{width:"100%"},paper:{width:"100%",overflowX:"auto"}}});function yt(e){var t=jt(),a=e.rows,n=e.vote;return r.a.createElement("div",{className:t.root},r.a.createElement(ye.a,{className:t.paper},a&&a.length?r.a.createElement(lt.a,{className:t.table,size:"small"},r.a.createElement(mt.a,null,r.a.createElement(pt.a,null,r.a.createElement(ut.a,null,"Recommendations"),r.a.createElement(ut.a,null,"Vote"))),r.a.createElement(st.a,null,a.map(function(e){return r.a.createElement(pt.a,{key:e.id},r.a.createElement(ut.a,{component:"th",scope:"row"},e.foodName),r.a.createElement(ut.a,{align:"right"},r.a.createElement(vt.a,{onClick:function(){return n(e.id,et)}},r.a.createElement("i",{style:{color:1===e[at]?"green":"grey"},className:"fas fa-thumbs-up"}))," ",r.a.createElement(vt.a,{onClick:function(){return n(e.id,tt)}},r.a.createElement("i",{style:{color:-.5===e[at]?"red":"grey"},className:"fas fa-thumbs-down"}))))}))):r.a.createElement(I,null)))}var kt=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.foodData;return r.a.createElement(xe.a,null,r.a.createElement(Pe.a,{expandIcon:r.a.createElement(Ie.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(de.a,{className:t.heading},"Vote")),r.a.createElement(yt,Object.assign({style:{paddingLeft:"5px"},rows:a},this.props)))}}]),t}(n.Component),wt=Object(P.a)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%",marginTop:"5px"},dense:{marginTop:19},menu:{width:200},rightIcon:{marginLeft:e.spacing(1)}}});function Dt(e){var t=wt();return r.a.createElement("div",{className:t.root},r.a.createElement(Ot,Object.assign({classes:t},e)),r.a.createElement(kt,Object.assign({classes:t},e)),r.a.createElement(ht,Object.assign({classes:t},e)))}var St=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={foodData:{},popularFoodData:{}},a.vote=a.vote.bind(Object(b.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"vote",value:function(e,t){var a=this.state.foodData,n=this.props,r=n.profileObj,o=n.addVote;this.setState({foodData:rt(e,a,t)});var c=new it(e,r.email,t,new Date);o(c)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchRecommendations,a=e.fetchVotes,n=e.fetchVotesByEmail,r=e.profileObj,o=e.week;t(o[0]),a(o[0]),n(r.email,o[0])}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.recommendationData,n=t.voteDataByEmail,r=t.voteData;a===e.recommendationData&&n===e.voteDataByEmail&&r===e.voteData||this.setState({foodData:nt(a,n),popularFoodData:ot(a,r)})}},{key:"render",value:function(){var e=this.state,t=e.foodData,a=e.popularFoodData,n=this.props,o=n.nextWeek,c=n.profileObj;return Ne(c,"food")?r.a.createElement("div",null,r.a.createElement(de.a,{paragraph:!0},"Food"),r.a.createElement(de.a,{style:{fontSize:"14px"},paragraph:!0},"For week ",o.fromDate," - ",o.lastDate),r.a.createElement(Dt,Object.assign({foodData:t,popularFoodData:a,vote:this.vote},this.props))):r.a.createElement(Ue,null)}}]),t}(n.Component);var Rt=Object(i.b)(function(e,t){return{recommendationData:e.recommendationReducer.recommendationData,voteData:e.voteReducer.voteData,voteDataByEmail:e.voteReducer.voteDataByEmail}},function(e){return{fetchRecommendations:function(t){return e(U(L(G),t,j))},fetchVotes:function(t){return e(U(L(q),t,y))},fetchVotesByEmail:function(t,a){return e(U(L(B),{email:t,date:a},k))},addVote:function(t){return e(U(L(T),t))}}})(St),Nt=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Coming Soon")}}]),t}(n.Component),Ut=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.profileObj;return Ne(e,"grocery")?r.a.createElement(Nt,null):r.a.createElement(Ue,null)}}]),t}(n.Component),Ct=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.profileObj;return Ne(e,"schedule")?r.a.createElement(Nt,null):r.a.createElement(Ue,null)}}]),t}(n.Component),xt={Food:"/home/food",Grocery:"/home/grocery",Cleaning:"/home/cleaning",Schedule:"/home/schedule",Admin:"/home/admin",Feedback:"/home/feedback","About Us":"/home/about-us"};function Pt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function At(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pt(a,!0).forEach(function(t){Object(Z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pt(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var It=Object(P.a)(function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(Z.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:At({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:"3%"},title:{flexGrow:1}}});function Lt(e,t){e.history.push(t)}function Ft(e){var t,a,n=It(),o=Object(me.a)(),c=r.a.useState(!1),i=Object(K.a)(c,2),l=i[0],s=i[1],u=r.a.useState(null),p=Object(K.a)(u,2),d=p[0],f=p[1],h=Boolean(d),b=e.profileObj,g=e.logoutSuccess;return r.a.createElement("div",{className:n.root},r.a.createElement(te.a,null),r.a.createElement(ee.a,{position:"fixed",className:Object(ve.a)(n.appBar,Object(Z.a)({},n.appBarShift,l))},r.a.createElement(pe.a,null,r.a.createElement(re.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(ve.a)(n.menuButton,Object(Z.a)({},n.hide,l))},r.a.createElement(Oe.a,null)),r.a.createElement(de.a,{variant:"h6",noWrap:!0,className:n.title},"Charanraj"),r.a.createElement("div",null,r.a.createElement(re.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},color:"inherit"},r.a.createElement("img",{src:b.imageUrl,alt:"IMG",className:"profile-img"})),r.a.createElement(se.a,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:function(){f(null)}},r.a.createElement(je.GoogleLogout,{clientId:"307183319961-39gbt32pgbtveh1vbqfbc7ihjsbhp8oq.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:g,render:function(e){return r.a.createElement(ue.a,{onClick:e.onClick},"Sign Out")}}))))),r.a.createElement(ne.a,{variant:"permanent",className:Object(ve.a)(n.drawer,(t={},Object(Z.a)(t,n.drawerOpen,l),Object(Z.a)(t,n.drawerClose,!l),t)),classes:{paper:Object(ve.a)((a={},Object(Z.a)(a,n.drawerOpen,l),Object(Z.a)(a,n.drawerClose,!l),a))},open:l},r.a.createElement("div",{className:n.toolbar,onClick:function(){s(!1)}},r.a.createElement(re.a,null,"rtl"===o.direction?r.a.createElement(ge.a,null):r.a.createElement(he.a,null))),r.a.createElement(ae.a,null),r.a.createElement(oe.a,null,["Food","Grocery","Cleaning","Schedule"].map(function(t,a){return r.a.createElement(ce.a,{button:!0,key:t,onClick:function(){return Lt(e,xt[t])}},r.a.createElement(ie.a,null,r.a.createElement("div",null,0===a&&r.a.createElement(Ge,null),1===a&&r.a.createElement(qe,null),2===a&&r.a.createElement(Be,null),3===a&&r.a.createElement(Te,null))),r.a.createElement(le.a,{primary:t}))})),r.a.createElement(ae.a,null),r.a.createElement(oe.a,null,["Admin","Feedback","About Us"].map(function(t,a){return r.a.createElement(ce.a,{button:!0,key:t,onClick:function(){return Lt(e,xt[t])}},r.a.createElement(ie.a,null,r.a.createElement("div",null,0===a&&r.a.createElement(_e,null),1===a&&r.a.createElement(We,null),2===a&&r.a.createElement(ze,null))),r.a.createElement(le.a,{primary:t}))}))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(m.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(m.a,{to:"/home/food"})}}),r.a.createElement(m.b,{exact:!0,path:"/home/food",render:function(){return r.a.createElement(Rt,e)}}),r.a.createElement(m.b,{exact:!0,path:"/home/grocery",render:function(){return r.a.createElement(Ut,e)}}),r.a.createElement(m.b,{exact:!0,path:"/home/cleaning",render:function(){return r.a.createElement(Ye,e)}}),r.a.createElement(m.b,{exact:!0,path:"/home/schedule",render:function(){return r.a.createElement(Ct,e)}}),r.a.createElement(m.b,{exact:!0,path:"/home/admin",render:function(){return r.a.createElement(Xe,e)}}),r.a.createElement(m.b,{exact:!0,path:"/home/feedback",render:function(){return r.a.createElement(Ze,e)}}),r.a.createElement(m.b,{exact:!0,path:"/home/about-us",render:function(){return r.a.createElement(we,e)}})))}var Gt=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).logoutSuccess=a.logoutSuccess.bind(Object(b.a)(a)),a.state={profileObj:null},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"logoutSuccess",value:function(){sessionStorage.removeItem(Y),this.props.history.push("/login")}},{key:"checkIfUserIsLoggedIn",value:function(){var e=Q();e?this.props.getUser(e):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.checkIfUserIsLoggedIn()}},{key:"componentDidUpdate",value:function(e){var t=this.props.profileObjWithRole;t!==e.profileObjWithRole&&this.setState({profileObj:t})}},{key:"render",value:function(){var e=this.state.profileObj,t=function(){var e=new Date;e.setHours(0,0,0,0);for(var t=[],a=1;a<=7;a++){var n=e.getDate()-e.getDay()+a,r=new Date(e.setDate(n));t.push(r)}return t}(),a=function(){var e={},t=new Date;t.setHours(0,0,0,0);var a=t.getDate()-t.getDay()+8,n=new Date(t.setDate(a));return e.fromDate=n.toLocaleDateString(),a=t.getDate()-t.getDay()+7,n=new Date(t.setDate(a)),e.lastDate=n.toLocaleDateString(),e}();return r.a.createElement("div",null,e?r.a.createElement(Ft,Object.assign({logoutSuccess:this.logoutSuccess,profileObj:e,week:t,nextWeek:a},this.props)):r.a.createElement(I,null))}}]),t}(n.Component);var qt=Object(i.b)(function(e,t){return{profileObjWithRole:e.userReducer.profileObj}},function(e){return{getUser:function(t){return e(U(L(_),t,v))},resetState:function(){return e(C(S))}}})(Gt),Bt=(a(138),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).successResponseGoogle=a.successResponseGoogle.bind(Object(b.a)(a)),a.failureResponseGoogle=a.failureResponseGoogle.bind(Object(b.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"successResponseGoogle",value:function(e){var t;e&&(t=e.profileObj,sessionStorage.setItem(Y,JSON.stringify(t)),this.props.history.push("/home"))}},{key:"failureResponseGoogle",value:function(e){console.log(e)}},{key:"checkIfUserIsLoggedIn",value:function(){Q()&&this.props.history.push("/home")}},{key:"componentDidMount",value:function(){this.checkIfUserIsLoggedIn()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(je.GoogleLogin,{clientId:"307183319961-39gbt32pgbtveh1vbqfbc7ihjsbhp8oq.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.successResponseGoogle,onFailure:this.failureResponseGoogle,cookiePolicy:"single_host_origin",render:function(e){return r.a.createElement("div",{className:"col",onClick:e.onClick},r.a.createElement("div",{className:"google btn"},r.a.createElement("i",{className:"fab fa-google"})," \xa0 Login with Google"))}}))}}]),t}(n.Component));var Tt=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(m.b,{path:"/login",component:Bt}),r.a.createElement(m.b,{path:"/home",component:qt})))};a(139);function _t(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Wt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_t(a,!0).forEach(function(t){Object(Z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_t(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Wt({},e,{requests:t.data});case D:return Wt({},e,{approvedUsers:t.data});default:return e}};function Vt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Mt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Vt(a,!0).forEach(function(t){Object(Z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Vt(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Mt({},e,{recommendationData:t.data});default:return e}};function Jt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Xt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Jt(a,!0).forEach(function(t){Object(Z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Jt(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Xt({},e,{profileObj:t.data});default:return e}};function Qt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function $t(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Qt(a,!0).forEach(function(t){Object(Z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Qt(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return $t({},e,{voteDataByEmail:t.data});case y:return $t({},e,{voteData:t.data});default:return e}},Zt={recommendationData:{},voteDataByEmail:{}},ea=Object(s.c)({voteReducer:Kt,recommendationReducer:Ht,userReducer:Yt,adminReducer:zt});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ta=Object(s.d)(function(e,t){return t.type===S&&(e=Zt),ea(e,t)},Object(s.a)(u.a));c.a.render(r.a.createElement(i.a,{store:ta},r.a.createElement(l.a,null,r.a.createElement(Tt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){},88:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.6856391b.chunk.js.map