(this.webpackJsonptooltip=this.webpackJsonptooltip||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(2),a=n.n(r),c=(n(12),n(3)),l=n(4),s=n(6),u=n(5),d=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).handleMouseIn=function(){o.setState({hover:!0})},o.handleMouseOut=function(){o.setState({hover:!1})},o.handletopDirection=function(){o.setState({topDirection:!0,bottomDirection:!1})},o.handlebottomDirection=function(){o.setState({topDirection:!1,bottomDirection:!0})},o.state={hover:!1,topDirection:!0,bottomDirection:!1},o}return Object(l.a)(n,[{key:"render",value:function(){var t={height:40,width:80,borderRadius:4,alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"gray",color:"white",position:"absolute",top:203,display:this.state.hover&&this.state.topDirection?"flex":"none"},e={height:40,width:80,borderRadius:4,marginTop:5,backgroundColor:"gray",color:"white",alignItems:"center",justifyContent:"center",flexDirection:"column",display:this.state.hover&&this.state.bottomDirection?"flex":"none"};return i.a.createElement("div",{style:h.maindiv},i.a.createElement("div",{style:h.upperdiv},i.a.createElement("div",{style:h.direction,onClick:this.handletopDirection},"Top"),i.a.createElement("div",{style:h.direction,onClick:this.handlebottomDirection},"Bottom")),i.a.createElement("div",{style:t},"Top"),i.a.createElement("div",{style:h.button,onMouseOver:this.handleMouseIn,onMouseOut:this.handleMouseOut},"Press"),i.a.createElement("div",{style:e},"Bottom"))}}]),n}(i.a.Component),h={button:{height:60,width:100,borderRadius:4,backgroundColor:"rgb(247, 179, 54)",display:"flex",alignItems:"center",justifyContent:"center"},maindiv:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},upperdiv:{marginBottom:100},direction:{height:27,width:65,fontSize:12,borderRadius:17,backgroundColor:"black",margin:3,color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},m=d;n(13);var p=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Tooltip"),i.a.createElement(m,null))};a.a.render(i.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f395218a.chunk.js.map