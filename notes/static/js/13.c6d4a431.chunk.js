(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[13],{347:function(e,a,t){"use strict";t.r(a);var l=t(15),n=t(17),i=t(26),s=t(22),c=t(0),r=t.n(c),o=t(451),m=t(83),d=t(275),h=t(449),E=t(283),p=t(453),u=t(443),v=t(94),N=t(348),b=t.n(N),f=(t(292),[{title:"\u59d3\u540d",dataIndex:"name",render:function(e){return r.a.createElement("span",null,e)}},{width:120,title:"\u8fdb\u5ea6",dataIndex:"progress",render:function(e){return r.a.createElement(o.a,{percent:e,size:"small",status:100===~~e?"success":"active",showInfo:!1})}},{title:"\u65f6\u95f4",dataIndex:"time",render:function(e){return r.a.createElement("span",null,b()(e).format("MM-DD HH:mm"))}}]),C=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).state={modalVisible:!1,shareModalVisible:!1},e.handleToggle=function(){var a=e.state.modalVisible;e.setState({modalVisible:!a})},e.handleShowUserList=function(a){a.stopPropagation(),e.handleToggle()},e.handleCancelShare=function(){e.setState({shareModalVisible:!1})},e.handleShowShare=function(a){a.stopPropagation(),e.setState({shareModalVisible:!0})},e.handleDetail=function(a){e.props.history.push("/notes/1")},e.handleEdit=function(a){a.stopPropagation(),e.props.history.push("/notes/1/edit")},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,a=e.modalVisible,t=e.shareModalVisible,l=[{id:"1",name:"\u80e1\u5f66\u658c",progress:32,time:Date.now()},{id:"2",name:"\u80e1\u5f66\u658c",progress:32,time:Date.now()}];return r.a.createElement("div",{className:"mine-notes"},r.a.createElement("div",{className:"item",onClick:this.handleDetail},r.a.createElement("div",{className:"title"},"\u4eba\u5de5\u667a\u80fd\uff1a\u6a21\u578b\u4e0e\u7b97\u6cd5"),r.a.createElement("div",{className:"desc"},"\u4ece\u903b\u8f91\u63a8\u7406\u3001\u641c\u7d22\u6c42\u89e3\u3001\u76d1\u7763\u5b66\u4e60\u3001\u65e0\u76d1\u7763\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u3001\u5f3a\u5316\u5b66\u4e60\u548c\u535a\u5f08\u5bf9\u6297\u4ecb\u7ecd\u4eba\u5de5\u667a\u80fd\u57fa\u672c\u6982\u5ff5\u548c\u6a21\u578b\u7b97\u6cd5\uff0c\u5e2e\u52a9\u5b66\u4e60\u8005\u4e86\u89e3\u4eba\u5de5\u667a\u80fd\u5386\u53f2 "),r.a.createElement("div",{className:"other"},r.a.createElement(m.a,{placement:"top",title:"\u8c01\u5728\u5b66\uff1f"},r.a.createElement("div",{className:"user",onClick:this.handleShowUserList},r.a.createElement(E.a,null)," 30/90")),r.a.createElement("div",{className:"operate"},r.a.createElement(m.a,{placement:"bottom",title:"\u7f16\u8f91",onClick:this.handleEdit},r.a.createElement("div",{className:"operate-item"},r.a.createElement(p.a,null))),r.a.createElement(m.a,{placement:"bottom",title:"\u5206\u4eab"},r.a.createElement("div",{className:"operate-item",onClick:this.handleShowShare},r.a.createElement(u.a,null)))))),r.a.createElement("div",{className:"item",onClick:this.handleDetail},r.a.createElement("div",{className:"title"},"\u4eba\u5de5\u667a\u80fd\uff1a\u6a21\u578b\u4e0e\u7b97\u6cd5"),r.a.createElement("div",{className:"desc"},"\u4ece\u903b\u8f91\u63a8\u7406\u3001\u641c\u7d22\u6c42\u89e3\u3001\u76d1\u7763\u5b66\u4e60\u3001\u65e0\u76d1\u7763\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u3001\u5f3a\u5316\u5b66\u4e60\u548c\u535a\u5f08\u5bf9\u6297\u4ecb\u7ecd\u4eba\u5de5\u667a\u80fd\u57fa\u672c\u6982\u5ff5\u548c\u6a21\u578b\u7b97\u6cd5\uff0c\u5e2e\u52a9\u5b66\u4e60\u8005\u4e86\u89e3\u4eba\u5de5\u667a\u80fd\u5386\u53f2 "),r.a.createElement("div",{className:"other"},r.a.createElement(m.a,{placement:"top",title:"\u8c01\u5728\u5b66\uff1f"},r.a.createElement("div",{className:"user",onClick:this.handleShowUserList},r.a.createElement(E.a,null)," 30/90")),r.a.createElement("div",{className:"operate"},r.a.createElement(m.a,{placement:"bottom",title:"\u7f16\u8f91",onClick:this.handleEdit},r.a.createElement("div",{className:"operate-item"},r.a.createElement(p.a,null))),r.a.createElement(m.a,{placement:"bottom",title:"\u5206\u4eab"},r.a.createElement("div",{className:"operate-item",onClick:this.handleShowShare},r.a.createElement(u.a,null)))))),r.a.createElement("div",{className:"item",onClick:this.handleDetail},r.a.createElement("div",{className:"title"},"\u4eba\u5de5\u667a\u80fd\uff1a\u6a21\u578b\u4e0e\u7b97\u6cd5"),r.a.createElement("div",{className:"desc"},"\u4ece\u903b\u8f91\u63a8\u7406\u3001\u641c\u7d22\u6c42\u89e3\u3001\u76d1\u7763\u5b66\u4e60\u3001\u65e0\u76d1\u7763\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u3001\u5f3a\u5316\u5b66\u4e60\u548c\u535a\u5f08\u5bf9\u6297\u4ecb\u7ecd\u4eba\u5de5\u667a\u80fd\u57fa\u672c\u6982\u5ff5\u548c\u6a21\u578b\u7b97\u6cd5\uff0c\u5e2e\u52a9\u5b66\u4e60\u8005\u4e86\u89e3\u4eba\u5de5\u667a\u80fd\u5386\u53f2 "),r.a.createElement("div",{className:"other"},r.a.createElement(m.a,{placement:"top",title:"\u8c01\u5728\u5b66\uff1f"},r.a.createElement("div",{className:"user",onClick:this.handleShowUserList},r.a.createElement(E.a,null)," 30/90")),r.a.createElement("div",{className:"operate"},r.a.createElement(m.a,{placement:"bottom",title:"\u7f16\u8f91",onClick:this.handleEdit},r.a.createElement("div",{className:"operate-item"},r.a.createElement(p.a,null))),r.a.createElement(m.a,{placement:"bottom",title:"\u5206\u4eab"},r.a.createElement("div",{className:"operate-item",onClick:this.handleShowShare},r.a.createElement(u.a,null)))))),r.a.createElement(d.a,{title:"\u5b66\u4e60\u6210\u5458",footer:null,maskClosable:!1,visible:a,onCancel:this.handleToggle},r.a.createElement(h.a,{showHeader:!1,rowKey:"id",columns:f,dataSource:l})),r.a.createElement(v.d,{url:"https://you.xi/doc/363t28sd",visible:t,onCancel:this.handleCancelShare}))}}]),t}(c.Component);a.default=C}}]);
//# sourceMappingURL=13.c6d4a431.chunk.js.map