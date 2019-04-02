(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/genericLogo.94f9a559.png"},33:function(e,t,a){e.exports=a(77)},39:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),c=a.n(s),o=a(79),l=(a(39),a(2)),i=a.n(l),u=a(4),p=a(5),m=a(6),h=a(9),d=a(7),b=a(8),f=a(3),v=a(80),g=a(68),y=a(82),E=a(14),j=a(28),O=a.n(j),k=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE_URL||"http://localhost:3001",x=function(){function e(){Object(p.a)(this,e)}return Object(m.a)(e,null,[{key:"request",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n,r,s,c=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:"get",r=localStorage.getItem("token"),a._token=r,console.debug("API Call:",t,a,n),e.prev=5,e.next=8,O()(Object(E.a)({method:n,url:"".concat(k,"/").concat(t)},"get"===n?"params":"data",a));case 8:return e.abrupt("return",e.sent.data);case 11:throw e.prev=11,e.t0=e.catch(5),console.error("API Error:",e.t0.response),s=e.t0.response.data.message,Array.isArray(s)?s:[s];case 16:case"end":return e.stop()}},e,this,[[5,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(u.a)(i.a.mark(function e(t,a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("login",{username:t,password:a},"post");case 2:n=e.sent,localStorage.setItem("token",n.token);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"signUp",value:function(){var e=Object(u.a)(i.a.mark(function e(t,a,n,r,s){var c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({username:t,password:a,first_name:n,last_name:r,email:s}),e.next=3,this.request("users",{username:t,password:a,first_name:n,last_name:r,email:s},"post");case 3:c=e.sent,localStorage.setItem("token",c.token);case 5:case"end":return e.stop()}},e,this)}));return function(t,a,n,r,s){return e.apply(this,arguments)}}()},{key:"getCompany",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.company);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllCompanies",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,this.request("companies",t);case 3:return a=e.sent,e.abrupt("return",a.companies);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAllJobs",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,this.request("jobs",t);case 3:return a=e.sent,e.abrupt("return",a.jobs);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getJobsForCompany",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.company.jobs);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.user);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(u.a)(i.a.mark(function e(t,a,n,r,s,c){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t),{password:a,first_name:n,last_name:r,email:s,photo_url:c},"patch");case 2:return o=e.sent,e.abrupt("return",o.user);case 4:case"end":return e.stop()}},e,this)}));return function(t,a,n,r,s,c){return e.apply(this,arguments)}}()},{key:"applyToJob",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("jobs/".concat(t,"/apply"),{state:"applied"},"post");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={applied:a.props.applied},a.handleClick=a.handleClick.bind(Object(f.a)(Object(f.a)(a))),a.handleApply=a.handleApply.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(){console.log(this.props.currentUser),this.handleApply(this.props.id),this.setState({applied:!0})}},{key:"handleApply",value:function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.applyToJob(t);case 3:this.setState({isApplied:!0}),this.props.handleUpdate(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:!0}),console.log("error msg",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"JobCard card my-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title d-flex justify-content-between"},r.a.createElement("div",null,this.props.title),r.a.createElement("p",null,"Salary: ",this.props.salary.toLocaleString()),r.a.createElement("p",null,"Equity: ",this.props.equity))),r.a.createElement("button",{onClick:this.handleClick,type:"button",className:"btn btn-danger",disabled:this.state.applied},this.state.applied?"Applied":"Apply"))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={companies:[],search:"",jobs:[]},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("this is the SEARCH TERM",this.state.search),this.props.handleSearch({search:this.state.search}),this.setState({companies:[],search:"",jobs:[]})}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchForm mt-5"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("label",{htmlFor:"searchForm"}),r.a.createElement("input",{onChange:this.handleChange,name:"search",value:this.state.search,type:"text",className:"form-control",id:"searchForm","aria-describedby":"search",placeholder:"Search ".concat(this.props.currentPage,"...")}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={jobs:[]},a.searchJobs=a.searchJobs.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,x.getAllJobs();case 4:e.t1=e.sent,e.t2={jobs:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=12;break;case 9:e.prev=9,e.t3=e.catch(0),this.setState({error:!0});case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"searchJobs",value:function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("QUERY inside jobs component",t),e.t0=this,e.next=5,x.getAllJobs(t);case 5:e.t1=e.sent,e.t2={jobs:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=14;break;case 10:e.prev=10,e.t3=e.catch(0),this.setState({error:!0}),console.log("error msg",e.t3);case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Jobs"},r.a.createElement(N,{currentPage:"jobs",handleSearch:this.searchJobs}),this.state.jobs.length>0?this.state.jobs.map(function(t){return r.a.createElement(w,{handleApply:e.props.handleApply,handleUpdate:e.props.handleUpdate,key:t.id,title:t.title,salary:t.salary,equity:t.equity,id:t.id,currentUser:e.props.currentUser,applied:e.props.currentUser.jobs.find(function(e){return e.id===t.id})})}):r.a.createElement("h3",null,"Loading jobs..."))}}]),t}(n.Component);S.defaultProps={};var U=S,C=a(64),_=a(29),L=a.n(_),I=(a(62),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{to:"/companies/".concat(this.props.handle)},r.a.createElement("div",{className:"CompanyCard card "},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title d-flex justify-content-between"},r.a.createElement("span",null,this.props.name),r.a.createElement("img",{className:"company-logo",src:this.props.logo,alt:"company logo"})),r.a.createElement("p",null,this.props.desc))))}}]),t}(n.Component));I.defaultProps={logo:L.a};var A=I,P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={companies:[]},a.searchCompanies=a.searchCompanies.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,x.getAllCompanies();case 4:e.t1=e.sent,e.t2={companies:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=13;break;case 9:e.prev=9,e.t3=e.catch(0),this.setState({error:!0}),console.log("error msg",e.t3);case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"searchCompanies",value:function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("QUERY inside companies component",t),e.t0=this,e.next=5,x.getAllCompanies(t);case 5:e.t1=e.sent,e.t2={companies:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=14;break;case 10:e.prev=10,e.t3=e.catch(0),this.setState({error:!0}),console.log("error msg",e.t3);case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"Companies"},r.a.createElement(N,{currentPage:"companies",handleSearch:this.searchCompanies}),this.state.companies.length>0?this.state.companies.map(function(e){return r.a.createElement(A,{key:e.handle,handle:e.handle,name:e.name,desc:e.description,logo:e.logo_url})}):r.a.createElement("h3",null,"Loading companies..."))}}]),t}(n.Component),F=a(30),J=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={handle:"",name:"",num_employees:null,description:"",logo_url:null,jobs:[]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("company handle:",this.props.match.params.name),e.prev=1,t=this.props.match.params.name,e.next=5,x.getCompany(t);case 5:a=e.sent,this.setState(Object(F.a)({},a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),this.setState({error:!0});case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Company"},r.a.createElement("h3",null,this.state.name),r.a.createElement("p",null,this.state.description),this.state.jobs.length>0?this.state.jobs.map(function(t){return r.a.createElement(w,{handleApply:e.props.handleApply,handleUpdate:e.props.handleUpdate,key:t.id,title:t.title,salary:t.salary,equity:t.equity,id:t.id,currentUser:e.props.currentUser,applied:e.props.currentUser.jobs.find(function(e){return e.id===t.id})})}):r.a.createElement("h3",null,"Loading jobs..."))}}]),t}(n.Component),q=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement("h3",null,"Welcome Back"),t=r.a.createElement(C.a,{to:"/login"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},"Login"));return r.a.createElement("div",{className:"HomePage mt-4"},r.a.createElement("h1",{className:"pt-3"},"Jobly"),r.a.createElement("p",null,"All the jobs in one, convenient place. "),this.props.isLoggedIn?e:t)}}]),t}(n.Component);q.defaultProps={};var R=q,D=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={username:"",password:"",first_name:"",last_name:"",email:"",loginActive:!0,signUpActive:!1},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmitLogin=a.handleSubmitLogin.bind(Object(f.a)(Object(f.a)(a))),a.handleSubmitSignUp=a.handleSubmitSignUp.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleSubmitLogin",value:function(e){e.preventDefault();var t=this.state,a=t.username,n=t.password;this.props.handleLogin(a,n),this.setState({username:"",password:""})}},{key:"handleSubmitSignUp",value:function(e){e.preventDefault();var t=this.state,a=t.username,n=t.password,r=t.first_name,s=t.last_name,c=t.email;this.props.handleSignUp(a,n,r,s,c),this.setState({username:"",password:"",first_name:"",last_name:"",email:""}),this.props.history.replace("/jobs")}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-body p-1.25"},r.a.createElement("form",{onSubmit:this.handleSubmitLogin},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Username"),r.a.createElement("input",{onChange:this.handleChange,name:"username",value:this.state.username,type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{onChange:this.handleChange,name:"password",value:this.state.password,type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))),a=r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-body p-1.25"},r.a.createElement("form",{onSubmit:this.handleSubmitSignUp},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Username"),r.a.createElement("input",{onChange:this.handleChange,name:"username",value:this.state.username,type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{onChange:this.handleChange,name:"password",value:this.state.password,type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"examplefirst_name"},"First name"),r.a.createElement("input",{onChange:this.handleChange,name:"first_name",value:this.state.first_name,type:"first_name",className:"form-control",id:"exampleInputfirst_name1",placeholder:"First Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"examplelast_name"},"Last Name"),r.a.createElement("input",{onChange:this.handleChange,name:"last_name",value:this.state.last_name,type:"last_name",className:"form-control",id:"exampleInputlast_name1",placeholder:"Last Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleemail"},"Email"),r.a.createElement("input",{onChange:this.handleChange,name:"email",value:this.state.email,type:"email",className:"form-control",id:"exampleInputemail1",placeholder:"Email"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))));return r.a.createElement("div",null,r.a.createElement("div",{className:"btn-group mr-auto mt-3",role:"group","aria-label":"Basic example"},r.a.createElement("button",{onClick:function(){return e.setState({loginActive:!0,signUpActive:!1})},type:"button",className:"btn btn-secondary"},"Login"),r.a.createElement("button",{onClick:function(){return e.setState({loginActive:!1,signUpActive:!0})},type:"button",className:"btn btn-secondary"},"Sign up")),this.state.loginActive?t:a)}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={password:"",first_name:a.props.first_name,last_name:a.props.last_name,email:a.props.email,photo_url:"https://www.image.com",hasUpdated:!1},a.handleProfileUpdate=a.handleProfileUpdate.bind(Object(f.a)(Object(f.a)(a))),a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleProfileUpdate",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n,r,s,c,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state,n=a.password,r=a.first_name,s=a.last_name,c=a.email,o=a.photo_url,e.prev=2,e.next=5,x.updateUser(this.props.currentUser.username,n,r,s,c,o);case 5:l=e.sent,console.log(l),this.setState({hasUpdated:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),this.setState({error:!0});case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body p-1.25"},r.a.createElement("form",{onSubmit:this.handleProfileUpdate},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Username"),r.a.createElement("p",{className:"form-control-plaintext"},this.props.currentUser.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"examplefirst_name"},"First name"),r.a.createElement("input",{onChange:this.handleChange,name:"first_name",value:this.state.first_name,type:"first_name",className:"form-control",id:"exampleInputfirst_name1",placeholder:this.props.currentUser.first_name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"examplelast_name"},"Last Name"),r.a.createElement("input",{onChange:this.handleChange,name:"last_name",value:this.state.last_name,type:"last_name",className:"form-control",id:"exampleInputlast_name1",placeholder:this.props.currentUser.last_name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleemail"},"Email"),r.a.createElement("input",{onChange:this.handleChange,name:"email",value:this.state.email,type:"email",className:"form-control",id:"exampleInputemail1",placeholder:this.props.currentUser.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleemail"},"Photo URL"),r.a.createElement("input",{onChange:this.handleChange,name:"photo_url",value:this.state.photo_url,type:"uri",className:"form-control",id:"photo_url",placeholder:this.props.currentUser.photo_url})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Re-enter Password"),r.a.createElement("input",{onChange:this.handleChange,name:"password",value:this.state.password,type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save Changes"),this.state.hasUpdated?r.a.createElement("div",{className:"alert alert-success fade show mt-3",role:"alert"},this.props.currentUser.username," has successfully updated!"):"")))}}]),t}(n.Component),B=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return!1===this.props.isLoggedIn?r.a.createElement(v.a,{to:"/login"}):r.a.createElement(g.a,this.props)}}]),t}(n.Component),M=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Routes"},r.a.createElement(y.a,null,r.a.createElement(g.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(D,Object.assign({},t,{handleLogin:e.props.handleLogin,handleSignUp:e.props.handleSignUp}))}}),r.a.createElement(B,{exact:!0,path:"/companies",render:function(){return r.a.createElement(P,null)},isLoggedIn:this.props.isLoggedIn}),r.a.createElement(B,{exact:!0,path:"/companies/:name",render:function(t){return r.a.createElement(J,Object.assign({},t,{currentUser:e.props.currentUser,handleUpdate:e.props.handleUpdate}))},isLoggedIn:this.props.isLoggedIn}),r.a.createElement(B,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(T,Object.assign({},t,{currentUser:e.props.currentUser}))},isLoggedIn:this.props.isLoggedIn}),r.a.createElement(B,{exact:!0,path:"/jobs",render:function(){return r.a.createElement(U,{currentUser:e.props.currentUser,handleUpdate:e.props.handleUpdate})},isLoggedIn:this.props.isLoggedIn}),r.a.createElement(B,{exact:!0,path:"/profile",render:function(){return r.a.createElement("h1",null,"This will render the Profile Component")},isLoggedIn:this.props.isLoggedIn}),r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(R,{isLoggedIn:e.props.isLoggedIn})}}),r.a.createElement(v.a,{to:"/"})))}}]),t}(n.Component);M.defaultProps={};var H=M,W=a(78),Q=(a(69),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={fontWeight:"bold"};return this.props.isLoggedIn?r.a.createElement("nav",{className:"NavBar navbar navbar-expand-lg navbar-primary border-bottom"},r.a.createElement(W.a,{activeStyle:e,className:"navbar-brand navbar-nav mr-auto",exact:!0,to:"/"},"Jobly"),r.a.createElement("div",{className:"navbar",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(W.a,{activeStyle:e,className:"nav-link",to:"/companies"},"Companies ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(W.a,{activeStyle:e,className:"nav-link",to:"/jobs"},"Jobs")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(W.a,{activeStyle:e,className:"nav-link",to:"/profile"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(W.a,{activeStyle:e,className:"nav-link",to:"/logout",onClick:this.props.handleLogout},"Log out"))))):r.a.createElement("nav",{className:"NavBar navbar navbar-expand-lg navbar-primary border-bottom"},r.a.createElement(W.a,{activeStyle:e,className:"navbar-brand navbar-nav mr-auto",exact:!0,to:"/"},"Jobly"),r.a.createElement("div",{className:"navbar",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(W.a,{activeStyle:e,className:"nav-link",to:"/login"},"Log In ",r.a.createElement("span",{className:"sr-only"}))))))}}]),t}(n.Component));Q.defaultProps={};var Y=Q,V=a(81),$=a(31),z=a.n($),G=(a(73),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={isLoggedIn:!!localStorage.getItem("token"),error:!1,currentUser:{username:"",first_name:"",last_name:"",photo_url:"",email:"",jobs:[]}},a.handleLogin=a.handleLogin.bind(Object(f.a)(Object(f.a)(a))),a.handleSignUp=a.handleSignUp.bind(Object(f.a)(Object(f.a)(a))),a.handleLogout=a.handleLogout.bind(Object(f.a)(Object(f.a)(a))),a.updateCurrentUser=a.updateCurrentUser.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isLoggedIn){e.next=9;break}return t=localStorage.getItem("token"),a=z()(t).username,e.t0=this,e.next=6,x.getUser(a);case 6:e.t1=e.sent,e.t2={currentUser:e.t1},e.t0.setState.call(e.t0,e.t2);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSignUp",value:function(){var e=Object(u.a)(i.a.mark(function e(t,a,n,r,s){var c=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.signUp(t,a,n,r,s);case 3:this.setState({isLoggedIn:!0,currentUser:{username:t,first_name:n,last_name:r,email:s,photo_url:""}},function(){return c.props.history.replace("/jobs")}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.setState({error:!0});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a,n,r,s){return e.apply(this,arguments)}}()},{key:"updateCurrentUser",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.currentUser.username,e.t0=this,e.next=4,x.getUser(t);case 4:e.t1=e.sent,e.t2={currentUser:e.t1},e.t0.setState.call(e.t0,e.t2);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(u.a)(i.a.mark(function e(t,a){var n,r=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.login(t,a);case 3:return e.next=5,x.getUser(t);case 5:n=e.sent,this.setState({isLoggedIn:!0,currentUser:n},function(){return r.props.history.replace("/jobs")}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({error:!0});case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=this;try{localStorage.clear(),this.setState({isLoggedIn:!1,currentUser:{username:"",first_name:"",last_name:"",photo_url:"",email:""}},function(){return e.props.history.replace("/")})}catch(t){this.setState({error:!0})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,{isLoggedIn:this.state.isLoggedIn,handleLogout:this.handleLogout}),r.a.createElement("div",{className:"body container col-6"},r.a.createElement(H,{isLoggedIn:this.state.isLoggedIn,handleLogin:this.handleLogin,handleSignUp:this.handleSignUp,currentUser:this.state.currentUser,addJobToUser:this.addJobToUser,handleUpdate:this.updateCurrentUser})))}}]),t}(n.Component)),K=Object(V.a)(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);c.a.render(r.a.createElement(o.a,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.b0a00e91.chunk.js.map