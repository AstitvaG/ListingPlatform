(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/challenge.a6f2cfe3.png"},101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(36),r=a.n(l),i=(a(71),a(5)),o=a(6),c=a(8),d=a(7),u=a(11),m=a(9),p=(a(72),a(21)),g=a.n(p),v=(a(92),a(44)),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeEmail=function(e){n.setState({email:e.target.value})},n.onChangePassword=function(e){n.setState({password:e.target.value})},n.onChangeName=function(e){n.setState({name:e.target.value})},n.onChangeAdmin=function(e){console.log(e.target.checked),n.setState({admin:e.target.checked})},n.pagetoast=function(e){v.b.dark(e,{position:"bottom-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1})},n.onSubmit=function(e){if(e.preventDefault(),n.state.logging){var t={email:n.state.email,password:n.state.password};g.a.get("/api/tt").then((function(e){return console.log(e.data)})),g.a.post("/api/login",t).then((function(e){var t;!0===(null===(t=e.data)||void 0===t?void 0:t.success)?(sessionStorage.setItem("userdata_listing",JSON.stringify(e.data.authInfo)),n.pagetoast("Logged in successfully \ud83c\udfc6"),n.setState({loading:!0}),setTimeout((function(){e.data.authInfo.admin?(window.history.pushState({},"","/admin-portal"),window.location.reload()):(window.history.pushState({},"","/listing"),window.location.reload())}),2e3)):(sessionStorage.removeItem("userdata_listing"),n.pagetoast("Check credentials again \u26a0\ufe0f"))})),n.setState({email:"",password:""})}else{var a={email:n.state.email,password:n.state.password,name:n.state.name,admin:n.state.admin};g.a.post("/api/register",a).then((function(e){var t,a;!0===(null===(t=e.data)||void 0===t?void 0:t.success)&&(!0===(null===(a=e.data)||void 0===a?void 0:a.success)?(sessionStorage.setItem("userdata_listing",JSON.stringify(e.data.authInfo)),n.pagetoast("Registeration successfull \ud83c\udfaf"),n.setState({loading:!0}),setTimeout((function(){e.data.authInfo.admin?(window.history.pushState({},"","/admin-portal"),window.location.reload()):(window.history.pushState({},"","/listing"),window.location.reload())}),2e3)):(sessionStorage.removeItem("userdata_listing"),n.pagetoast("Registeration failed \u26a0\ufe0f")))})),n.setState({email:"",password:""})}},n.componentDidMount=function(){var e=sessionStorage.getItem("userdata_listing");null!==e?(n.pagetoast("Already logged in \u2705"),setTimeout((function(){JSON.parse(e).admin?(window.history.pushState({},"","/admin-portal"),window.location.reload()):(window.history.pushState({},"","/listing"),window.location.reload())}),2e3)):(n.setState({loading:!1}),sessionStorage.removeItem("userdata_listing"))},n.state={email:"",password:"",name:"",logging:!0,admin:!1,loading:!0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.state.loading&&s.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",zIndex:100,alignItems:"center",justifyContent:"center",alignContent:"center",display:"flex",background:"rgba(0,0,0,0.1)"}},s.a.createElement("div",{class:"spinner-grow m-1 text-primary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-secondary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-success",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-danger",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-warning",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-info",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-light",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-dark",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading..."))),s.a.createElement("section",{class:"vh-100"},s.a.createElement("div",{class:"container-fluid h-custom"},s.a.createElement("div",{class:"row d-flex justify-content-center align-items-center h-100"},s.a.createElement("div",{class:"col-md-9 col-lg-6 col-xl-5"},s.a.createElement("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp",class:"img-fluid",alt:""})),s.a.createElement("div",{class:"col-md-8 col-lg-6 col-xl-4 offset-xl-1"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{class:"divider d-flex align-items-center my-4"},s.a.createElement("p",{class:"text-center fw-bold mx-3 mb-0"},this.state.logging?"Sign in":"Create your account")),s.a.createElement("div",{class:"form-outline mb-4"},s.a.createElement("label",{class:"form-label"},"Email address"),s.a.createElement("input",{type:"email",class:"form-control form-control-lg",placeholder:"Enter your email address",value:this.state.email,onChange:this.onChangeEmail})),!this.state.logging&&s.a.createElement("div",{class:"form-outline mb-4"},s.a.createElement("label",{class:"form-label"},"Full Name"),s.a.createElement("input",{type:"text",class:"form-control form-control-lg",placeholder:"Enter your name",value:this.state.name,onChange:this.onChangeName})),s.a.createElement("div",{class:"form-outline mb-3"},s.a.createElement("label",{class:"form-label"},"Password"),s.a.createElement("input",{type:"password",class:"form-control form-control-lg",placeholder:"Enter password",value:this.state.password,onChange:this.onChangePassword})),s.a.createElement("div",{class:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{class:"form-check mb-0"},!this.state.logging&&s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{class:"form-check-input me-2",type:"checkbox",checked:this.state.admin,onChange:this.onChangeAdmin}),s.a.createElement("label",{class:"form-check-label"},"Register as Admin"))),s.a.createElement("a",{href:"#!",class:"text-body"},"Forgot password?")),s.a.createElement("div",{class:"text-center text-lg-start mt-4 pt-2"},s.a.createElement("button",{type:"submit",class:"btn btn-primary btn-lg",style:{"padding-left":"2.5rem","padding-right":"2.5rem"}},this.state.logging?"Login":"Register"),s.a.createElement("p",{class:"small fw-bold mt-2 pt-1 mb-0"},this.state.logging?"Don't have an account?":"Do you have an account ?"," ",s.a.createElement("a",{onClick:function(){return e.setState({logging:!e.state.logging})},class:"link-danger"},this.state.logging?"Register":"Log In"))))))),s.a.createElement("div",{class:"d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"},s.a.createElement("div",{class:"text-white mb-3 mb-md-0"},"Copyright \xa9 2022. All rights reserved."),s.a.createElement("div",null,s.a.createElement("a",{href:"#!",class:"text-white me-4"},s.a.createElement("i",{class:"fab fa-facebook-f"})),s.a.createElement("a",{href:"#!",class:"text-white me-4"},s.a.createElement("i",{class:"fab fa-twitter"})),s.a.createElement("a",{href:"#!",class:"text-white me-4"},s.a.createElement("i",{class:"fab fa-google"})),s.a.createElement("a",{href:"#!",class:"text-white"},s.a.createElement("i",{class:"fab fa-linkedin-in"}))))))}}]),a}(n.Component),h=a(112),E=a(65),y=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loading:!0,datasets:Object.entries({id:{id:"",name:"",description:"",tags:[],versions:"",uploadBy:"",uploadDate:"",dataType:"",downloadSize:""}}),displayDataset:Object.entries({id:{id:"",name:"",description:"",tags:[],versions:"",uploadBy:"",uploadDate:"",dataType:"",downloadSize:""}})},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){null===sessionStorage.getItem("userdata_listing")?(window.history.pushState({},"","/auth"),window.location.reload()):this.setState({loading:!1});var e={1:{id:"1",name:"DATASET1",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Medical"],versions:"",uploadBy:"",uploadDate:"20191201",dataType:"csv",downloadSize:"1"},2:{id:"2",name:"DATASET2",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Non-Medical"],versions:"",uploadBy:"",uploadDate:"20031209",dataType:"json",downloadSize:"20"},3:{id:"3",name:"DATASET3",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Non-Medical"],versions:"",uploadBy:"",uploadDate:"20190122",dataType:"json",downloadSize:"55"},4:{id:"4",name:"DATASET4",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Medical"],versions:"",uploadBy:"",uploadDate:"20191112",dataType:"json",downloadSize:"0"},5:{id:"5",name:"DATASET5",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:[],versions:"",uploadBy:"",uploadDate:"20221112",dataType:"json",downloadSize:"10"}};this.setState({displayDataset:Object.entries(e),datasets:Object.entries(e)})}},{key:"onUpload",value:function(e){}},{key:"filterByTags",value:function(e){console.log(e);var t=this.state.datasets.filter((function(t){return t[1].tags.includes(e)}));this.setState({displayDataset:t})}},{key:"filterByDatatype",value:function(e){console.log(e);var t=this.state.datasets.filter((function(t){return t[1].dataType==e}));this.setState({displayDataset:t})}},{key:"sortUploadDate",value:function(e){var t=this.state.datasets;t.sort((function(t,a){return("Increasing"==e?1:-1)*(t[1].uploadDate-a[1].uploadDate)})),this.setState({displayDataset:t})}},{key:"sortDownloadSize",value:function(e){var t=this.state.datasets;t.sort((function(t,a){return("Increasing"==e?1:-1)*(t[1].downloadSize-a[1].downloadSize)})),this.setState({displayDataset:t})}},{key:"render",value:function(){var e=this;return this.state.loading?s.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",zIndex:100,alignItems:"center",justifyContent:"center",alignContent:"center",display:"flex",background:"rgba(0,0,0,0.1)"}},s.a.createElement("div",{class:"spinner-grow m-1 text-primary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-secondary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-success",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-danger",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-warning",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-info",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-light",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-dark",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading..."))):s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex justify-content-around row"},s.a.createElement("div",null,s.a.createElement("div",{className:"flex justify-content-around row",style:{backgroundColor:"#dddddd",borderRadius:"20px",width:"18rem",height:"10rem"}},s.a.createElement("div",{style:{fontSize:"30px",textAlign:"center",padding:"1rem"}},"Contribute"),s.a.createElement("div",{className:"side-props-dt"},s.a.createElement(u.b,{to:"/upload"},s.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return e.onUpload()}},"Upload new Dataset")))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"flex justify-content-around row",style:{backgroundColor:"#dddddd",borderRadius:"20px",width:"18rem",height:"20rem"}},s.a.createElement("div",{style:{fontSize:"30px",textAlign:"center",padding:"2rem"}},"Exlpore More"),s.a.createElement(h.a,{variant:"secondary",menuVariant:"dark",title:"Filter by Tags",style:{borderRadius:"20px"}},s.a.createElement(E.a.Item,{onClick:function(){return e.filterByTags("Medical")}},"Medical"),s.a.createElement(E.a.Item,{onClick:function(){return e.filterByTags("Non-Medical")}},"Non-Medical"),s.a.createElement(E.a.Item,{onClick:function(){return e.filterByTags("etc")}},"Something else")),s.a.createElement(h.a,{variant:"secondary",menuVariant:"dark",title:"Filter by DataType",style:{borderRadius:"20px"}},s.a.createElement(E.a.Item,{onClick:function(){return e.filterByDatatype("csv")}},"CSV"),s.a.createElement(E.a.Item,{onClick:function(){return e.filterByDatatype("json")}},"JSON")),s.a.createElement(h.a,{variant:"secondary",menuVariant:"dark",title:"Sort By Upload Date",style:{borderRadius:"20px"}},s.a.createElement(E.a.Item,{onClick:function(){return e.sortUploadDate("Increasing")}},"Newer To Older"),s.a.createElement(E.a.Item,{onClick:function(){return e.sortUploadDate("Decreasing")}},"Older To Newer")),s.a.createElement(h.a,{variant:"secondary",menuVariant:"dark",title:"Sort By Download Size",style:{borderRadius:"20px"}},s.a.createElement(E.a.Item,{onClick:function(){return e.sortDownloadSize("Increasing")}},"Increasing"),s.a.createElement(E.a.Item,{onClick:function(){return e.sortDownloadSize("Decreasing")}},"Decreasing")))),s.a.createElement("div",null,this.state.displayDataset.map((function(e,t){return s.a.createElement("div",{style:{padding:"1rem"}},s.a.createElement("div",{className:"card",style:{flex:1,width:"60rem",borderRadius:"20px"}},s.a.createElement("div",{className:"card-header",style:{flex:1,backgroundColor:"#dddddd",padding:"100x",borderRadius:"20px"}},s.a.createElement("div",{className:"d-flex row"},s.a.createElement("h5",{style:{flex:1,padding:"0.5rem"}},e[1].name),s.a.createElement("div",{className:"d-flex flex-row-reverse"},s.a.createElement(u.b,{to:"/details/".concat(e[1].id),className:"btn btn-secondary",style:{borderRadius:"20px",left:"10px",textAlign:"center"}},"View details")))),s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-text"},e[1].description))))})))))}}]),a}(n.Component),f=(a(98),function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a.state={subscriptions:{id:{id:"",startDate:"",endDate:"",approvalStatus:""}}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({subscriptions:{1:{id:"1",startDate:"2-10-22",endDate:"10-10-22",approvalStatus:"Approved"},2:{id:"2",startDate:"2-10-22",endDate:"20-10-22",approvalStatus:"Approved"},3:{id:"3",startDate:"2-10-22",endDate:"30-10-22",approvalStatus:"Approved"},4:{id:"4",startDate:"",endDate:"",approvalStatus:"Pending"}}},(function(){sessionStorage.setItem("subscriptionData",JSON.stringify(e.state.subscriptions))}))}},{key:"render",value:function(){return s.a.createElement("div",{align:"center"},s.a.createElement("div",{class:"card-group",style:{width:"60rem"}},s.a.createElement("div",{class:"card mr-3 p-5",style:{borderRadius:"20px",background:"#eeeeee"}},s.a.createElement("img",{class:"card-img-top",src:a(99),alt:"Card image cap"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h2",{class:"card-title"},s.a.createElement("b",null,"Datasets")),s.a.createElement("p",{class:"card-text"},"A curated list of some interesting datasets upladed by various people."),s.a.createElement(u.b,{to:"/auth",class:"btn btn-secondary",style:{"border-radius":"10px",fontSize:"20px"}},"Explore Datasets"))),s.a.createElement("div",{class:"card ml-3 p-5",style:{borderRadius:"20px",background:"#eeeeee"}},s.a.createElement("img",{class:"card-img-top",src:a(100),alt:"Card image cap"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h2",{class:"card-title"},s.a.createElement("b",null,"ML challenges")),s.a.createElement("p",{class:"card-text"},"A curated list of some interesting ML challenges. "),s.a.createElement("a",{href:"#",class:"btn btn-secondary",style:{"border-radius":"10px",fontSize:"20px"}},"Explore ML challenges")))))}}]),n}(n.Component)),w=(a(101),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:"descr-head"},"About"),e.description.split("\n").map((function(e,t){return s.a.createElement("p",{key:t,style:{textJustify:!0,fontSize:"18px",color:"#444444"}},e)}))),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("div",{className:"descr-head"},"Use Cases"),s.a.createElement("ol",null,e.use_cases.map((function(e,t){return s.a.createElement("li",{key:t,style:{fontSize:"18px",color:"#444444"}},e)})))),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("div",{className:"descr-head"},"Citations"),s.a.createElement("ol",null,e.citations.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("div",{style:{fontSize:"18px",color:"black"}},"Paper: ",e[0]),s.a.createElement("div",{style:{fontSize:"18px",color:"#444444"}},"Author(s): ",e[1]))})))),s.a.createElement("br",null),s.a.createElement("br",null))}}]),a}(n.Component)),x=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null," Metadata Component ")}}]),a}(n.Component),S=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null," Versions Component ")}}]),a}(n.Component),D=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null," Visualization Component ")}}]),a}(n.Component),N=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,n=this.props.data;return s.a.createElement("div",{style:{height:"100vh",width:"100%",top:0,bottom:0,position:"fixed",background:"rgba(0,0,0,0.2)",zIndex:100,display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}},s.a.createElement("div",{className:"p-5",style:{height:"40vh",width:"40vw",background:"white",borderRadius:"20px",left:"30vw",top:"20vh",position:"absolute"}},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null,"Subsciption"),s.a.createElement("h5",null,"Status: ",null!==(e=n.approvalStatus)&&void 0!==e?e:"Not subscribed"),s.a.createElement("h5",null,"Start Date: ",null!==(t=n.startDate)&&void 0!==t?t:"Not subscribed"),s.a.createElement("h5",null,"End Date: ",null!==(a=n.endDate)&&void 0!==a?a:"Not subscribed"),s.a.createElement("br",null),s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("button",{onClick:this.props.toggle,className:"details-tab active btnx"},"Close"))))}}]),a}(n.Component),k=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={dataset_slug:e.props.match.params.id,loading:!0,data:{name:"Temp Dataset",slug:"temp-dataset",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna erat, dictum et condimentum ac, pharetra ac justo. Nunc molestie non risus eu cursus. Praesent egestas eros id interdum faucibus. In ullamcorper, neque et ultrices semper, nisi metus laoreet orci, aliquet efficitur lacus orci quis purus. Proin vehicula lectus quis faucibus aliquam. Suspendisse potenti. Praesent condimentum odio et urna ornare, sed gravida lacus congue. Aliquam accumsan mattis sem nec malesuada. Curabitur blandit neque vel dapibus tempor. Vestibulum in fringilla elit, at pulvinar est. Morbi tempus rutrum tellus cursus rutrum. Maecenas et magna ut felis gravida tincidunt nec eu enim. Suspendisse ut dui tellus.\n\nIn lacinia eleifend ipsum non efficitur. Aliquam efficitur nulla in justo ultricies, vitae sagittis enim tristique. Donec ullamcorper mauris nec mauris pharetra, in tincidunt nunc aliquet. Duis laoreet dui in dolor pellentesque viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu iaculis odio. Suspendisse potenti. Nulla luctus tempor mi vehicula sagittis. Nulla nulla est, elementum ac convallis id, porttitor ut libero. Duis tincidunt lobortis arcu et dapibus. Curabitur auctor finibus est, sed facilisis nunc rhoncus quis. Cras pulvinar varius posuere. Maecenas porta tempus tristique.\n\nNulla vehicula erat eu quam tristique, eget aliquam diam auctor. Fusce eu pulvinar quam. Suspendisse ac lobortis nisi. Fusce sagittis orci libero, at mollis augue elementum quis. Nam vitae mauris id ante venenatis dictum vel et mauris. Curabitur sed nisl vitae sapien imperdiet pulvinar sed in turpis. Pellentesque eget interdum turpis. Nunc non rhoncus diam. Morbi consequat porta ante sit amet commodo. Pellentesque vel elit ultrices, consectetur nisi sed, molestie massa. Pellentesque efficitur egestas sollicitudin. Vivamus magna lacus, tempus in fringilla id, sollicitudin viverra sapien. Cras nec nibh magna.\n\nCurabitur in ligula condimentum lacus vestibulum eleifend non id nisi. Fusce blandit lectus id neque vulputate, ut viverra risus suscipit. Quisque pretium non sem et dignissim. Nullam vitae tincidunt metus. Integer euismod lobortis arcu. Vivamus iaculis est eget faucibus aliquam. Nunc convallis tellus nec felis porttitor, sit amet volutpat tellus tristique. Maecenas eros magna, mollis sit amet congue tempus, mollis in neque.",subscribed:!1,subscription_expiry:0,upload_date:"March 10th, 2022",uploaded_by:"Temp Person",download_size:"100MB",data_type:"JSON/CSV",use_cases:["Temp Usecase 1","Temp Usecase 2","Temp Usecase 3"],citations:[["Temp paper 1","Temp person 1"],["Temp paper 2","Temp person 2"],["Temp paper 3","Temp person 3"]]},activeTab:0,showSubscriptionModal:!1,subscriptionData:{id:{id:"",startDate:"",endDate:"",approvalStatus:""}}},e.changeTab=function(t){e.setState({activeTab:t})},e.toggleSubsciptionModal=function(){e.setState({showSubscriptionModal:!e.state.showSubscriptionModal})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){null===sessionStorage.getItem("userdata_listing")?(window.history.pushState({},"","/auth"),window.location.reload()):this.setState({loading:!1}),this.setState({subscriptionData:JSON.parse(sessionStorage.getItem("subscriptionData"))})}},{key:"onDownload",value:function(e,t,a,n,s){var l="dataversedownloadmanager://opendownloader?";null!==e&&void 0!==e&&(l+="datasetName="+e),l+="&",null!==t&&void 0!==t&&(l+="datasetVersion="+t),l+="&",null!==a&&void 0!==a&&(l+="datasetCreatorName="+a),l+="&",null!==n&&void 0!==n&&(l+="requestingUser="+n),l+="&",null!==s&&void 0!==s&&(l+="secretToken="+s);var r=document.createElement("a");r.href=l,r.click()}},{key:"render",value:function(){var e=this,t=this.state.data;return this.state.loading?s.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",zIndex:100,alignItems:"center",justifyContent:"center",alignContent:"center",display:"flex",background:"rgba(0,0,0,0.1)"}},s.a.createElement("div",{class:"spinner-grow m-1 text-primary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-secondary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-success",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-danger",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-warning",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-info",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-light",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-dark",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading..."))):s.a.createElement("div",null,this.state.showSubscriptionModal&&s.a.createElement(N,{data:this.state.subscriptionData[this.state.dataset_slug],toggle:this.toggleSubsciptionModal}),s.a.createElement("div",{className:"mx-5"},s.a.createElement("div",{id:"title-row",className:"d-flex justify-content-between row"},s.a.createElement("div",{id:"dataset-name"},s.a.createElement("h1",null,t.name)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{id:"subsciption-button",className:"mx-2"},void 0!=this.state.subscriptionData[this.state.dataset_slug]&&s.a.createElement("button",{type:"button",onClick:this.toggleSubsciptionModal,className:"details-tab active btnx"},"Subscription ",this.state.subscriptionData[this.state.dataset_slug].approvalStatus),void 0==this.state.subscriptionData[this.state.dataset_slug]&&s.a.createElement("button",{type:"button",onClick:this.toggleSubsciptionModal,className:"details-tab active btnx"},"Subscibe")),void 0!=this.state.subscriptionData[this.state.dataset_slug]&&"Approved"===this.state.subscriptionData[this.state.dataset_slug].approvalStatus&&s.a.createElement("div",{id:"download-button",className:"mx-2"},s.a.createElement("button",{type:"button",className:"details-tab active btnx download"},"Download Now")))),s.a.createElement("div",{className:"d-flex row"},s.a.createElement("div",{style:{flex:2}},s.a.createElement("div",{id:"details-tabs",className:"row"},s.a.createElement("button",{onClick:function(){return e.changeTab(0)},className:"details-tab ".concat(0===this.state.activeTab?"active":"")},"Desciption"),s.a.createElement("button",{onClick:function(){return e.changeTab(1)},className:"details-tab ".concat(1===this.state.activeTab?"active":"")},"Metadata"),void 0!=this.state.subscriptionData[this.state.dataset_slug]&&"Approved"===this.state.subscriptionData[this.state.dataset_slug].approvalStatus&&s.a.createElement("button",{onClick:function(){return e.changeTab(2)},className:"details-tab ".concat(2===this.state.activeTab?"active":"")},"Versions"),void 0!=this.state.subscriptionData[this.state.dataset_slug]&&"Approved"===this.state.subscriptionData[this.state.dataset_slug].approvalStatus&&s.a.createElement("button",{onClick:function(){return e.changeTab(3)},className:"details-tab ".concat(3===this.state.activeTab?"active":"")},"Visualizations")),{0:s.a.createElement(w,{data:t}),1:s.a.createElement(x,null),2:s.a.createElement(S,null),3:s.a.createElement(D,null)}[this.state.activeTab]),s.a.createElement("div",{style:{flex:1}},s.a.createElement("div",{className:"m-5 p-4",style:{backgroundColor:"#dddddd",borderRadius:"20px"}},s.a.createElement("div",{style:{fontSize:"30px"}},"Properties"),s.a.createElement("div",{className:"side-props-dt"},s.a.createElement("div",null,"Upload Date"),s.a.createElement("div",null,t.upload_date)),s.a.createElement("div",{className:"side-props-dt"},s.a.createElement("div",null,"Upload By"),s.a.createElement("div",null,t.uploaded_by)),s.a.createElement("div",{className:"side-props-dt"},s.a.createElement("div",null,"Download Size"),s.a.createElement("div",null,t.download_size)),s.a.createElement("div",{className:"side-props-dt"},s.a.createElement("div",null,"Data Type"),s.a.createElement("div",null,t.data_type)))))))}}]),a}(n.Component),C=(a(102),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){null===sessionStorage.getItem("userdata_listing")?(window.history.pushState({},"","/auth"),window.location.reload()):n.setState({loading:!1})},n.state={loading:!0,datasets:{1:{id:"1",name:"DATASET1",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Medical"],versions:"",uploadBy:"",uploadDate:"20191201",dataType:"csv",downloadSize:"1"},2:{id:"2",name:"DATASET2",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Non-Medical"],versions:"",uploadBy:"",uploadDate:"20031209",dataType:"json",downloadSize:"20"},3:{id:"3",name:"DATASET3",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Non-Medical"],versions:"",uploadBy:"",uploadDate:"20190122",dataType:"json",downloadSize:"55"},4:{id:"4",name:"DATASET4",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:["Medical"],versions:"",uploadBy:"",uploadDate:"20191112",dataType:"json",downloadSize:"0"},5:{id:"5",name:"DATASET5",description:'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',tags:[],versions:"",uploadBy:"",uploadDate:"20221112",dataType:"json",downloadSize:"10"}},uploads:["1","2"],subscriptions:{1:{id:"1",startDate:"2-10-22",endDate:"10-10-22",approvalStatus:"Approved"},2:{id:"2",startDate:"2-10-22",endDate:"20-10-22",approvalStatus:"Approved"},3:{id:"3",startDate:"2-10-22",endDate:"30-10-22",approvalStatus:"Approved"},4:{id:"4",startDate:"",endDate:"",approvalStatus:"Pending"}}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.loading?s.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",zIndex:100,alignItems:"center",justifyContent:"center",alignContent:"center",display:"flex",background:"rgba(0,0,0,0.1)"}},s.a.createElement("div",{class:"spinner-grow m-1 text-primary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-secondary",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-success",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-danger",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-warning",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-info",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-light",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading...")),s.a.createElement("div",{class:"spinner-grow m-1 text-dark",role:"status"},s.a.createElement("span",{class:"sr-only"},"Loading..."))):s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex justify-content-around row"},s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex justify-content-around h3 row"},"My Uploads"),this.state.uploads.map((function(t,a){return s.a.createElement("div",{style:{padding:"1rem"}},console.log("ghvfhd",t),s.a.createElement("div",{className:"card",style:{flex:1,width:"30rem",borderRadius:"20px"}},s.a.createElement("div",{className:"card-header",style:{flex:1,backgroundColor:"#dddddd",padding:"100x",borderRadius:"20px"}},s.a.createElement("div",{className:"d-flex row"},s.a.createElement("h5",{style:{flex:1,padding:"0.5rem"}},e.state.datasets[t].name),s.a.createElement("div",{className:"d-flex flex-row-reverse"},s.a.createElement(u.b,{to:"/details/".concat(e.state.datasets[t].id),className:"btn btn-secondary",style:{borderRadius:"20px",left:"10px",textAlign:"center"}},"View details")))),s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-text"},e.state.datasets[t].description),s.a.createElement("hr",null),s.a.createElement("p",null," Uploaded on:  ",e.state.datasets[t].uploadDate))))}))),s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex justify-content-around h3 row"},"My Subscriptions"),Object.entries(this.state.subscriptions).map((function(t,a){return s.a.createElement("div",{style:{padding:"1rem"}},s.a.createElement("div",{className:"card",style:{flex:1,width:"30rem",borderRadius:"20px"}},s.a.createElement("div",{className:"card-header",style:{flex:1,backgroundColor:"#dddddd",padding:"100x",borderRadius:"20px"}},s.a.createElement("div",{className:"d-flex row"},s.a.createElement("h5",{style:{flex:1,padding:"0.5rem"}},e.state.datasets[t[1].id].name),s.a.createElement("div",{className:"d-flex flex-row-reverse"},s.a.createElement(u.b,{to:"/details/".concat(e.state.datasets[t[1].id].id),className:"btn btn-secondary",style:{borderRadius:"20px",left:"10px",textAlign:"center"}},"View details")))),s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-text"},e.state.datasets[t[1].id].description),s.a.createElement("hr",null),void 0!=t[1].id&&""===t[1].startDate&&s.a.createElement("p",{className:"card-text"},"Subscription Pending!"),void 0!=t[1].id&&""!=t[1].startDate&&s.a.createElement("p",{className:"card-text"},"Subscription ends on: ",t[1].endDate))))})))))}}]),a}(n.Component)),j=(a(103),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={userdata:null},e.componentDidMount=function(){var t=sessionStorage.getItem("userdata_listing");e.setState({userdata:JSON.parse(t)})},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement(u.b,{to:"/",className:"navbar-brand"},"Home"),s.a.createElement("div",{className:"collapse navbar-collapse justify-content-between"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"navbar-item"},s.a.createElement(u.b,{to:"/listing",className:"nav-link"},"Dataset List")),null!==this.state.userdata&&!0===this.state.userdata.admin&&s.a.createElement("li",{className:"navbar-item"},s.a.createElement(u.b,{to:"/admin-portal",className:"nav-link"},"Admin Portal"))),s.a.createElement("ul",{className:"navbar-nav ml-auto"},null===this.state.userdata&&s.a.createElement("li",{className:"navbar-item"},s.a.createElement(u.b,{to:"/auth",className:"nav-link"},"Login/Signup")),null!==this.state.userdata&&s.a.createElement("li",{className:"navbar-item"},s.a.createElement(u.b,{to:"/auth",className:"nav-link"},"Hey, ",this.state.userdata.name,this.state.userdata.admin?" (Admin)":"","!")),null!==this.state.userdata&&s.a.createElement("li",{className:"navbar-item ml-3"},s.a.createElement(u.b,{to:"/dashboard",className:"nav-link"},"My Profile")),null!==this.state.userdata&&s.a.createElement("li",{className:"navbar-item ml-3"},s.a.createElement(u.b,{onClick:function(){sessionStorage.removeItem("userdata_listing"),window.location.reload()},className:"nav-link"},"Logout"))))),s.a.createElement("br",null),s.a.createElement(m.c,null,s.a.createElement(m.a,{path:"/",exact:!0,component:f}),s.a.createElement(m.a,{path:"/auth",exact:!0,component:b}),s.a.createElement(m.a,{path:"/listing",component:y}),s.a.createElement(m.a,{path:"/details/:id",component:k}),s.a.createElement(m.a,{path:"/admin-portal",render:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Admin Portal"),s.a.createElement("h3",null,"Managed by other team"))}}),s.a.createElement(m.a,{path:"/upload",render:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Upload Portal"),s.a.createElement("h3",null,"Managed by other team"))}}),s.a.createElement(m.a,{path:"/dashboard",component:C}))),s.a.createElement(v.a,{position:"bottom-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(104),a(105);r.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,a){e.exports=a(106)},71:function(e,t,a){},92:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/dataset.10e6e2b7.png"}},[[66,1,2]]]);
//# sourceMappingURL=main.51c06ec3.chunk.js.map