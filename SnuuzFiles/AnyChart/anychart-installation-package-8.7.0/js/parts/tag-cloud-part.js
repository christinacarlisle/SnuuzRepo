if(!_.tag_cloud_part){_.tag_cloud_part=1;(function($){var zma=function(a){var b=new $.Ug;b.parent(a);return b},Ama=function(a,b){a.Gn=b;a.Gn.push("#000");a.NT=!!b;a.reset()},a8=function(a,b){$.Kw.call(this);this.Fa("tagCloud");this.fr=["x","value"];this.ga="category";this.Ja=this.O=window.NaN;var c=[$.Z.i5],d={};$.S(d,[["fill",16,1],["fontFamily",16388,1],["fontStyle",16388,1],["fontVariant",16388,1],["fontWeight",16388,1],["fontSize",16388,1]]);var e={};$.S(e,[["fill",0,0],["fontFamily",0,0],["fontStyle",0,0],["fontVariant",0,0],["fontWeight",0,0],
["fontSize",0,0]]);this.ba=new $.sx(this,d,$.Kl,c);this.wa=new $.sx(this,e,$.$n,c);this.Ca=new $.sx(this,e,$.ao,c);this.ba.Fa(this.ma);$.W(this,"normal",this.ba);$.W(this,"hovered",this.wa);$.W(this,"selected",this.Ca);this.state=new $.pw(this);this.data(a||null,b);$.S(this.va,[["mode",4,1],["fromAngle",8192,1],["toAngle",8192,1],["anglesCount",8192,1],["textSpacing",4,1]]);this.Wa()},b8=function(a,b){$.z(b)?(a.ae("fill",b),a.ae("fill-opacity",1)):(a.ae("fill",b.color),a.ae("fill-opacity",b.opacity))},
c8=function(a,b,c){if(c!=$.Kl){var d=c==$.$n?a.wa:a.Ca;d=d.i(b);var e=$.Zn(d);if(null!=d&&!$.E(d)&&!e)return d}var f=a.aa().o("item");c=a.ba.i(b);var h=$.Zn(c);if(null==c||h){switch(b){case "fontFamily":var k=f.font;break;case "fill":k=f.fill;break;case "fontStyle":k=f.style;break;case "fontVariant":k=f.variant;break;case "fontWeight":k=f.weight;break;case "fontSize":k=f.size}c=k}else $.E(c)&&("fill"==b?k=a.we():(k=a.Ec(),k.sourceValue=c),c=c.call(k,k));if(d){if(e)return c*(0,window.parseFloat)(d)/
100;"fill"==b?k=a.we(c):(k=a.Ec(),k.sourceValue=c);return d.call(k,k)}return c},Bma=function(a,b){if(b){var c=a.f/3,d=a.g/3,e=a.g/50,f=$.Va(e,~~d+1),h=$.Oa(f,function(a){a=$.Uf().measure(b.text,{fontStyle:b.style,fontFamily:b.font,fontSize:a,fontWeight:b.weight,fontVariant:b.variant});var e=$.io(a,"center");e=$.Jb($.bb(b.rotate),e.x,e.y);a=$.Rm(a)||[];e.transform(a,0,a,0,4);a=$.Sm(a);e=a.width;a=a.height;return e>c||a>d?-1:e==c||a==d?0:1});0>h&&(h=~h-1);a.O=e;a.Ja=f[$.Za(h,0,f.length)]}},Cma=function(a,
b,c,d,e){if(!c.RD){var f=b.context,h=b.ratio;f.clearRect(0,0,2048/h,2048/h);var k=b=0,l=0,m=d.length;--e;for(var n=a.i("textSpacing");++e<m;){c=d[e];f.save();a="";"normal"!=c.style&&(a+=c.style+" ");"normal"!=c.weight&&(a+=c.weight+" ");"normal"!=c.variant&&(a+=c.variant+" ");f.font=a+~~((c.size+1)/h)+"px "+c.font;a=f.measureText(c.text).width*h;var q=c.size<<1;if(c.rotate){var r=Math.sin($.bb(c.rotate)),t=Math.cos($.bb(c.rotate)),u=a*t,v=a*r;t*=q;a=q*r;a=Math.max(Math.abs(u+a),Math.abs(u-a))+31>>
5<<5;q=~~Math.max(Math.abs(v+t),Math.abs(v-t))}else a=a+31>>5<<5;q>l&&(l=q);2048<=b+a&&(b=0,k+=l,l=0);if(2048<=k+q)break;f.translate((b+(a>>1))/h,(k+(q>>1))/h);c.rotate&&f.rotate($.bb(c.rotate));f.fillText(c.text,0,0);n&&(f.lineWidth=2*n,f.strokeText(c.text,0,0));f.restore();c.width=a;c.height=q;c.Xia=b;c.$ia=k;c.fj=a>>1;c.Xe=q>>1;c.ej=-c.fj;c.pe=-c.Xe;c.Y_=!0;b+=a}f=f.getImageData(0,0,2048/h,2048/h).data;for(h=[];0<=--e;)if(c=d[e],c.Y_){a=c.width;l=a>>5;q=c.Xe-c.pe;for(m=0;m<q*l;m++)h[m]=0;b=c.Xia;
if(null==b)break;k=c.$ia;n=0;u=-1;for(v=0;v<q;v++){for(m=0;m<a;m++)r=f[2048*(k+v)+(b+m)<<2]?1<<31-m%32:0,h[l*v+(m>>5)]|=r,n|=r;n?u=v:(c.pe++,q--,v--,k++)}c.Xe=c.pe+u;c.RD=h.slice(0,(c.Xe-c.pe)*l)}}},Dma=function(a,b){var c=a[0],d=a[1];b.x+b.ej<c.x&&(c.x=b.x+b.ej);b.y+b.pe<c.y&&(c.y=b.y+b.pe);b.x+b.fj>d.x&&(d.x=b.x+b.fj);b.y+b.Xe>d.y&&(d.y=b.y+b.Xe)},Ema=function(a){var b=4*a.f/a.g,c=0,d=0;return function(a){var e=0>a?-1:1;switch(Math.sqrt(1+4*e*a)-e&3){case 0:c+=b;break;case 1:d+=4;break;case 2:c-=
b;break;default:d-=4}return[c,d]}},Fma=function(a){for(var b=[],c=-1;++c<a;)b[c]=0;return b},Gma=function(a,b,c,d,e){for(var f=c.x,h=c.y,k=0,l,m;l=a.$a(k);){k+=1;m=~~l[0];l=~~l[1];if(Math.min(Math.abs(m),Math.abs(l))>=e)break;c.x=f+m;c.y=h+l;if(!(m=0>c.x+c.ej||0>c.y+c.pe||c.x+c.fj>a.f||c.y+c.Xe>a.g)&&(m=d))a:{m=a.f;m>>=5;l=c.RD;var n=c.width>>5;var q=c.x-(n<<4);for(var r=q&127,t=32-r,u=c.Xe-c.pe,v=(c.y+c.pe)*m+(q>>5),w=0;w<u;w++){for(var x=q=0;x<=n;x++)if((q<<t|(x<n?(q=l[w*n+x])>>>r:0))&b[v+x]){m=
!0;break a}v+=m}m=!1}if(!m&&(!d||c.x+c.fj>d[0].x&&c.x+c.ej<d[1].x&&c.y+c.Xe>d[0].y&&c.y+c.pe<d[1].y)){d=c.RD;e=c.width>>5;a=a.f>>5;m=c.x-(e<<4);f=m&127;h=32-f;k=c.Xe-c.pe;m=(c.y+c.pe)*a+(m>>5);for(n=0;n<k;n++){for(r=l=0;r<=e;r++)b[m+r]=b[m+r]|l<<h|(r<e?(l=d[n*e+r])>>>f:0);m+=a}delete c.RD;return!0}}return!1},Hma=function(a){var b=a.aa(),c=a.fn(),d=a.oa,e=a.Gn,f=(0,window.parseFloat)(b.get("value")),h=b.get("category"),k=b.la();if($.K(c,$.ny)&&$.p(h)){var l=h;b.o("category",h);b=a.ba.i("fill");$.E(b)&&
(a={sourceColor:a.bc().mc(k),category:h},b=b.call(a,a));e.push($.Sb(b))}else a.Kb?l=f:(b.o("category",void 0),l=$.Sb(c8(a,"fill",0)),e.push(l),l=$.D(l)?l.color:l,b.o("category",l));c.Sc(l);d.Sc(f)},Ima=function(a,b){var c=new a8(a,b);c.JD(c.ma);return c},Jma={Rma:"spiral",c6:"rect"};$.H(a8,$.Kw);$.iq(a8,"fill fontFamily fontStyle fontVariant fontWeight fontSize".split(" "),"normal");a8.prototype.ra=$.Kw.prototype.ra|258064;var d8={};
$.Wp(d8,[[0,"mode",function(a,b){return $.bk(Jma,a,b||"spiral")}],[0,"fromAngle",$.dq],[0,"toAngle",$.dq],[0,"anglesCount",$.dq],[0,"textSpacing",$.dq]]);$.U(a8,d8);$.g=a8.prototype;$.g.Pa=function(){return"tag-cloud"};$.g.lc=function(){return this};$.g.Lg=function(){return!0};$.g.Uj=function(){return!1};$.g.Ai=function(){return!0};$.g.Se=function(){return[this]};
$.g.Id=function(a){var b=new $.Mz(this,a);this.aa().select(a)&&b.ux()&&(a=b.get("value")/this.Ag("sum"),b.Ia("yPercentOfTotal",$.zm(100*a,2)),b.Ia("percentValue",a));return b};$.g.Sr=function(){return null};$.g.aa=function(){return this.Ud||(this.Ud=this.na.aa())};$.g.vc=function(){return this.Ud=this.na.aa()};
$.g.bc=function(a){if($.K(a,$.ls))return this.Hc($.ls,a),this;if($.K(a,$.is))return this.Hc($.is,a),this;$.D(a)&&"range"==a.type?this.Hc($.ls):($.D(a)||null==this.Da)&&this.Hc($.is);return $.p(a)?(this.Da.K(a),this):this.Da};$.g.Hc=function(a,b){if($.K(this.Da,a))b&&this.Da.K(b);else{var c=!!this.Da;$.hd(this.Da);this.Da=new a;$.W(this,"palette",this.Da);this.Da.gq();b&&this.Da.K(b);$.L(this.Da,this.Ff,this);c&&this.u(512,1)}};$.g.Ff=function(a){$.X(a,2)&&this.u(65536,129)};
$.g.we=function(a){var b=this.aa(),c=b.la();a=a||this.bc().mc(c)||"blue";c={};var d=this.fn(),e=b.get("value");b=b.o("category");c.value=e;c.category=b;if(d){e=$.K(d,$.ny)&&$.p(b)?b:e;if(this.Kb||$.p(b))var f=d.rq(e);$.Mc(c,{scaledColor:f,colorScale:this.Kb})}c.sourceColor=a;return c};$.g.fn=function(){return this.Kb||this.Ma||(this.Ma=$.oy())};
$.g.Ec=function(){var a=this.aa();this.$d||(this.$d=new $.Nv);this.$d.xg(a).cj([this.Id(a.la()),this]);a={x:{value:a.get("x"),type:"string"},value:{value:a.get("value"),type:"number"},name:{value:a.get("name"),type:"string"},index:{value:a.la(),type:"number"},chart:{value:this,type:""}};$.yu(this.$d,a);return this.$d};$.g.jk=function(){return this.Ec()};$.g.Ni=function(){var a=this.aa().o("item");return{value:{x:this.ka+a.x*this.Ga,y:this.ta+a.y*this.Ga}}};$.g.Jk=function(){};
$.g.Kj=function(a,b){var c=this.aa().o("item");if(c&&c.dC){var d=$.Il(a),e=$.Sb(c8(this,"fill",d)),f=c8(this,"fontFamily",d),h=c8(this,"fontStyle",d),k=c8(this,"fontVariant",d),l=c8(this,"fontWeight",d),m=c8(this,"fontSize",d),n=this.P()?this.P().Ha():null,q=n&&!n.df();q&&n.suspend();b8(c.Ji,e);c.Ji.ae("font-family",f);c.Ji.ae("font-style",h);c.Ji.ae("font-variant",k);c.Ji.ae("font-weight",l);c.Ji.ae("font-size",m);c.Ji.zIndex(d==$.Kl?0:1E-6);q&&n.resume();return b}};$.g.Np=$.ia;
$.g.fK=function(a){var b=this.Lj();a=$.A(a)?a.length?a[0]:window.NaN:a;if(b&&b.target()&&!(0,window.isNaN)(a)){var c=b.target().aa();c.select(a);a=this.fn();c=$.K(a,$.ny)?c.o("category"):c.get(this.fr[1]);$.iM(b,c)}};$.g.zz=function(){var a=this.Lj();a&&a.enabled()&&$.jM(a)};
$.g.Eg=function(a){var b=a.type;switch(b){case "mouseout":b="pointmouseout";break;case "mouseover":b="pointmouseover";break;case "mousemove":b="pointmousemove";break;case "mousedown":b="pointmousedown";break;case "mouseup":b="pointmouseup";break;case "click":b="pointclick";break;case "dblclick":b="pointdblclick";break;default:return null}var c;"pointIndex"in a?c=a.pointIndex:"labelIndex"in a?c=a.labelIndex:"markerIndex"in a&&(c=a.markerIndex);c=$.N(c);a.pointIndex=c;return{type:b,actualTarget:a.target,
series:this,pointIndex:c,target:this,originalEvent:a,point:this.Id(c)}};$.g.ag=function(a){a=$.Y.prototype.ag.call(this,a);var b=$.Xn(a.domTarget).index;if(!$.p(b)&&$.tw(this.state,$.$n)){var c=$.zw(this.state,$.$n);c.length&&(b=c[0])}b=$.N(b);(0,window.isNaN)(b)||(a.pointIndex=b);return a};$.g.Xl=function(){};$.g.Al=function(a){return $.p(a)?(a=$.ck(a),a!=this.N&&(this.N=a),this):this.N};$.g.Gi=function(a){return $.p(a)?(this.Vc().selectionMode(a),this):this.Vc().i("selectionMode")};
$.g.Fi=function(a,b){if(!this.enabled())return this;var c=this.P()?this.P().Ha():null,d=c&&!c.df();d&&c.suspend();var e=!(b&&b.shiftKey);$.A(a)?(b||this.Xd(),this.state.vh($.ao,a,e?$.$n:void 0)):$.ea(a)&&this.state.vh($.ao,a,e?$.$n:void 0);d&&c.resume();return this};$.g.Xd=function(a){if(this.enabled()){var b=this.P()?this.P().Ha():null,c=b&&!b.df();c&&b.suspend();var d;$.p(a)?d=a:d=this.state.xc==$.Kl?window.NaN:void 0;this.state.Eh($.ao,d);c&&b.resume()}};
$.g.zi=function(a){if(!this.enabled())return this;var b=this.P()?this.P().Ha():null,c=b&&!b.df();c&&b.suspend();if($.A(a)){for(var d=$.zw(this.state,$.$n),e=0;e<d.length;e++)$.Aa(a,d[e])||this.state.Eh($.$n,d[e]);$.xw(this.state,a)}else $.ea(a)&&(this.Jd(),$.xw(this.state,a));c&&b.resume();return this};
$.g.Jd=function(a){var b;(b=$.tw(this.state,$.$n))||(b=!!(this.state.zj()&$.$n));if(b&&this.enabled()){var c=(b=this.P()?this.P().Ha():null)&&!b.df();c&&b.suspend();var d;$.p(a)?d=a:d=this.state.xc==$.Kl?window.NaN:void 0;this.state.Eh($.$n,d);c&&b.resume()}};
$.g.data=function(a,b){if($.p(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}this.cg!==a&&(this.cg=a,$.hd(this.jd),$.K(a,$.cr)?this.na=this.jd=a.hj():$.K(a,$.mr)?this.na=this.jd=a.ee():this.na=(this.jd=new $.mr($.A(a)||$.z(a)?a:null,b)).ee(),$.L(this.na,this.Fd,this),this.u(4352,1));return this}return this.na};$.g.Fd=function(){this.u(4352,1)};$.g.sX=function(a){return $.p(a)?(a=$.A(a)?$.Ha(a):null,this.D!=a&&(this.D=a,this.u(16388,1)),this):this.D};
$.g.scale=function(a){if($.p(a)){if(a=$.Js(this.oa,a,null,3,null,this.dg,this)){var b=this.oa==a;this.oa=a;this.oa.da(b);b||this.u(131072,1)}return this}return this.oa};$.g.dg=function(){this.u(131072,1)};$.g.rd=function(a){if($.p(a)){if(null===a&&this.Kb)this.Kb=null,this.u(65536,129);else if(a=$.Js(this.Kb,a,null,48,null,this.rp,this)){var b=this.Kb==a;this.Kb=a;this.Kb.da(b);b||($.eM(this.Lj()),this.u(65536,129))}return this}return this.Kb};$.g.rp=function(a){$.X(a,6)&&this.u(65536,129)};
$.g.Ra=function(a){return $.p(a)?(this.ba.K(a),this):this.ba};$.g.kb=function(a){return $.p(a)?(this.wa.K(a),this):this.wa};$.g.selected=function(a){return $.p(a)?(this.Ca.K(a),this):this.Ca};$.g.Lj=function(a){this.Zb||(this.Zb=new $.dM,$.W(this,"colorRange",this.Zb),$.L(this.Zb,this.jz,this),this.u(32772,1));return $.p(a)?(this.Zb.K(a),this):this.Zb};$.g.jz=function(a){var b=0,c=0;$.X(a,1)&&(b|=32772,c|=1);$.X(a,8)&&(b|=4,c|=8);$.X(a,2)&&(b|=32768,c|=8);this.u(b,c)};
$.g.Lu=function(a){return $.Yn(this.Lj(),a)};$.g.Ul=function(a){var b,c=[],d;if("categories"==a&&(d=$.K(this.fn(),$.ny)?this.fn():void 0)){var e=d.Pq();a=0;for(b=e.length;a<b;a++){var f=e[a];"default"!==f.name&&c.push({text:f.name,iconEnabled:!0,iconType:"square",iconFill:f.color,disabled:!this.enabled(),sourceUid:$.oa(this),sourceKey:a,meta:{W:this,scale:d,De:f}})}}return c};$.g.gs=function(a){return"categories"==a};
$.g.Yq=function(a,b){var c=a.o();if("categories"==this.Df().i("itemsSourceMode")){var d=c.W;var e=c.scale;if(e&&d){var f=[];c=c.De;for(var h=d.vc();h.advance();){var k=h.get("value"),l=h.o("category");c==e.hn($.p(l)?l:k)&&f.push(h.la())}"single"==this.Vc().i("hoverMode")?b.Gf={W:d,md:f}:b.Gf=[{W:d,md:f,rn:f[f.length-1],te:{index:f[f.length-1],Yf:0}}]}}};
$.g.Sp=function(a,b){var c=a.o();if("categories"==this.Df().i("itemsSourceMode")){var d=c.W;var e=c.scale;if(e&&d){c=c.De;for(var f=d.vc(),h=[];f.advance();){var k=f.get("value"),l=f.o("category");c==e.hn($.p(l)?l:k)&&h.push(f.la())}if(e=$.Xn(b.domTarget))"single"==this.Vc().i("hoverMode")?e.Gf={W:d,md:h}:e.Gf=[{W:d,md:h,rn:h[h.length-1],te:{index:h[h.length-1],Yf:0}}];(d=$.Wq(this,"colorRange"))&&d.enabled()&&d.target()&&$.iM(d,$.p(c.Fo)?c.Fo:(c.start+c.end)/2)}}};
$.g.Rp=function(a,b){var c=a.o();if("categories"==this.Df().i("itemsSourceMode")){if("single"==this.Vc().i("hoverMode")){var d=$.Xn(b.domTarget);d&&(d.W=c.W)}(c=$.Wq(this,"colorRange"))&&c.enabled()&&c.target()&&$.jM(c)}};$.g.jaa=function(a){return[this.f/this.g*(a*=.1)*Math.cos(a),a*Math.sin(a)]};
$.g.getContext=function(a){a.width=a.height=1;var b=Math.sqrt(a.getContext("2d").getImageData(0,0,1,1).data.length>>2);a.width=2048/b;a.height=2048/b;a=a.getContext("2d");a.fillStyle=a.strokeStyle="red";a.textAlign="center";return{context:a,ratio:b}};
$.g.mb=function(){var a=this.oa;if(a){var b,c=this.fn();if(this.J(8192)){var d=this.i("anglesCount");var e=this.i("fromAngle");var f=this.i("toAngle");f-=e;this.ca=[];for(b=0;b<d;b++)this.ca.push(e+f/(1==d?d:d-1)*b);this.D||this.u(16388);this.I(8192)}if(this.J(4096)){var h=this.vc();this.U=[];this.b&&this.b.forEach(function(a,b){a.Ji.parent(null);a.Qk.parent(null);a.Qk.dl();this.U[b]=a},this);this.b=[];this.Gn=[];a.qg();for(c.qg();h.advance();){b=String(h.get("x")).toLowerCase();e=(0,window.parseFloat)(h.get("value"));
f=h.get("category");var k=h.la();var l=this.U[k]?this.U[k]:{};l.rowIndex=k;l.text=b;l.value=e;l.dC=!1;l.zna=f;this.b.push(l);h.o("item",l);Hma(this)}a.zg();c.zg();this.Kb||($.Ka(this.Gn,void 0,function(a){return $.D(a)?a.color+" "+a.opacity:a}),Ama(c,this.Gn));$.Qa(this.b,function(a,b){return b.value-a.value});this.u(16388);this.I(200704)}if(this.J(196608)){this.Gn=[];h=this.vc();a.qg();for(c.qg();h.advance();)Hma(this);c.zg();this.Kb||($.Ka(this.Gn,void 0,function(a){return $.D(a)?a.color+" "+a.opacity:
a}),Ama(c,this.Gn));this.J(65536)&&this.u(49680);this.J(131072)&&this.u(49156);this.I(196608)}if(this.J(16384)){var m=this.D?this.D:this.ca;var n=Math.max((0,$.za)(m,0),0);d=m.length;a=this.b.length?this.b[0].value:window.NaN;h=this.aa();c=this.b.length;var q=0;this.b.forEach(function(a,b){var c=$.Il($.uw(this.state,a.rowIndex));h.select(a.rowIndex);var e=c8(this,"fontFamily",c),f=c8(this,"fontStyle",c),k=c8(this,"fontVariant",c),l=c8(this,"fontWeight",c);c=$.Sb(c8(this,"fill",c));a.font=e;a.style=
f;a.variant=k;a.weight=l;a.fill=c;a.rotate=m[(b+n+d)%d];q+=a.value},this);this.Ia("sum",q);this.Ia("max",a);this.Ia("min",this.b.length?this.b[c-1].value:window.NaN);this.Ia("average",q/c);this.Ia("pointsCount",c);this.I(16384)}}};$.g.Hu=function(){this.mb()};
$.g.Ri=function(a){var b=this.scale(),c=$.Wq(this,"colorRange");this.J(32768)&&c&&($.V(c),c.scale(this.fn()),c.target(this),c.nb(this),c.da(!1),c.enabled()&&this.u(4));if(this.J(4)){c&&c.enabled()?(c.ia(a.clone().round()),this.j=c.pd()):this.j=a.clone();this.f=this.j.width;this.g=this.j.height;this.$a="spiral"==this.i("mode")?this.jaa:Ema(this);a=this.b.length;var d=this.b[0],e=-1,f=null,h=this.getContext(this.canvas?this.canvas:this.canvas=window.document.createElement("canvas")),k=Fma((this.f>>
5)*this.g),l=Math.sqrt(this.f*this.f+this.g*this.g);Bma(this,d);for(this.b.forEach(function(a){this.aa().select(a.rowIndex);delete a.size;delete a.RD;var c=$.Il($.uw(this.state,a.rowIndex));c=c8(this,"fontSize",c);var d=$.Za(b.transform(a.value),0,1);d=~~(this.O+d*(this.Ja-this.O));a.size=null!=c?$.Zn(c)?d*(0,window.parseFloat)(c)/100:c:d},this);++e<a;)d=this.b[e],d.x=this.f>>1,d.y=this.g>>1,Cma(this,h,d,this.b,e),d.Y_&&Gma(this,k,d,f,l)&&(f?Dma(f,d):f=[{x:d.x+d.ej,y:d.y+d.pe},{x:d.x+d.fj,y:d.y+d.Xe}],
d.x-=this.f>>1,d.y-=this.g>>1);a=f?Math.min(this.f/Math.abs(f[1].x-this.f/2),this.f/Math.abs(f[0].x-this.f/2),this.g/Math.abs(f[1].y-this.g/2),this.g/Math.abs(f[0].y-this.g/2))/2:1;this.ub||(this.ub=this.Na.Md());(e=$.Wq(this,"background"))&&this.ub.zIndex((e.zIndex()||0)+1);this.G||(this.G=this.ub.Md(),$.Dt(this,this.G));this.oe||(this.oe=this.ub.Md());this.ka=this.j.left+(this.f>>1);this.ta=this.j.top+(this.g>>1);this.Ga=a;this.ub.ic(a,0,0,a,this.ka,this.ta);var m=this.ub.Dd;this.b.forEach(function(a){var b=
[a.x,a.y];m.transform(b,0,b,0,1);if(b[0]+a.ej<this.j.left||b[0]+a.fj>this.j.Za()||b[1]+a.pe<this.j.top||b[1]+a.Xe>this.j.Ta())a.dC&&(a.Ji.parent(null),a.Qk.parent(null)),a.dC=!1;else{a.dC||(a.Ji=a.Ji?a.Ji.parent(this.oe):zma(this.oe),a.Ji.ae("text-anchor","middle"),a.Ji.zd(!0),a.Ji.text(a.text.toLowerCase()),a.Ji.cursor("default"),a.Qk=a.Qk?a.Qk.parent(this.G):zma(this.G),a.Qk&&(a.Qk.tag={W:this,index:a.rowIndex}),a.Qk.ae("fill","#fff"),a.Qk.ae("opacity",1E-6),a.Qk.ae("text-anchor","middle"),a.Qk.text(a.text.toLowerCase()),
a.Qk.cursor("default"),a.dC=!0);var c=$.Il($.uw(this.state,a.rowIndex));this.aa().select(a.rowIndex);b=$.Sb(c8(this,"fill",c));var d=c8(this,"fontFamily",c),e=c8(this,"fontStyle",c),f=c8(this,"fontVariant",c),h=c8(this,"fontWeight",c);c=c8(this,"fontSize",c);b8(a.Ji,b);a.Ji.ae("font-family",d);a.Ji.ae("font-style",e);a.Ji.ae("font-variant",f);a.Ji.ae("font-weight",h);a.Ji.ae("font-size",c);a.Ji.ae("transform","translate("+[a.x,a.y]+")rotate("+a.rotate+")");a.Ji.zIndex(0);a.Qk.ae("font-family",d);
a.Qk.ae("font-style",e);a.Qk.ae("font-variant",f);a.Qk.ae("font-weight",h);a.Qk.ae("font-size",c);a.Qk.ae("transform","translate("+[a.x,a.y]+")rotate("+a.rotate+")");a.Qk.zIndex(0)}},this);this.I(16);this.I(4)}this.J(32768)&&(c&&($.V(c),c.P(this.Na),c.Y(),c.da(!1)),this.I(32768));if(this.J(16)){var n=this.vc();this.b.forEach(function(a){var b=$.Il($.uw(this.state,a.rowIndex));n.select(a.rowIndex);a.dC&&a.Ji&&b8(a.Ji,$.Sb(c8(this,"fill",b)))},this);this.I(16)}};$.g.pC=function(){return["x"]};
$.g.qC=function(a){return a.get("x")};$.g.oC=function(a){a=a.get("name");return $.z(a)?a:null};$.g.NF=function(){return this.data().$c("category")?["value","category"]:["value"]};$.g.oj=function(){return!this.aa().Fb()};$.g.tv=function(a){var b;$.z(a)?(b=$.Ds(a,null))||(b=null):$.D(a)?(b=$.Ds(a.type,!0),b.K(a)):b=null;return b};$.g.JD=function(a){var b=a.scale;(b=this.tv(b))&&this.scale(b);b=a.colorScale;(b=this.tv(b))&&this.rd(b)};
$.g.X=function(a,b){a8.B.X.call(this,a,b);$.kq(this,d8,a,b);this.JD(a);this.data(a.data);this.sX(a.angles);this.bc(a.palette);this.Lj().ja(!!b,a.colorRange);this.ba.ja(!!b,a);this.ba.ja(!!b,a.normal);this.wa.ja(!!b,a.hovered);this.Ca.ja(!!b,a.selected)};
$.g.F=function(){var a=a8.B.F.call(this);$.sq(this,d8,a);a.data=this.data().F();$.p(this.D)&&(a.angles=this.D);a.scale=this.scale().F();this.rd()&&(a.colorScale=this.rd().F());a.colorRange=this.Lj().F();a.palette=this.bc().F();a.normal=this.ba.F();a.hovered=this.wa.F();a.selected=this.Ca.F();return{chart:a}};
$.g.R=function(){for(var a=0;a<this.b.length;a++){var b=this.b[a];$.hd(b.Ji);$.hd(b.Qk);$.hd(b.RD)}$.kd(this.oe,this.G,this.ub,this.ba,this.wa,this.Ca,this.Zb,this.state,this.Da,this.na,this.jd);this.Da=this.state=this.oa=this.Kb=this.Zb=this.Ca=this.wa=this.ba=this.ub=this.G=this.oe=null;delete this.na;this.jd=null;a8.B.R.call(this)};var e8=a8.prototype;e8.getType=e8.Pa;e8.data=e8.data;e8.angles=e8.sX;e8.scale=e8.scale;e8.colorScale=e8.rd;e8.colorRange=e8.Lj;e8.palette=e8.bc;e8.normal=e8.Ra;
e8.hovered=e8.kb;e8.selected=e8.selected;e8.hover=e8.zi;e8.unhover=e8.Jd;e8.select=e8.Fi;e8.unselect=e8.Xd;e8.getPoint=e8.Id;$.xp["tag-cloud"]=Ima;$.G("anychart.tagCloud",Ima);}).call(this,$)}
