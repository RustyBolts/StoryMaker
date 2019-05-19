require=function r(s,a,c){function u(e,t){if(!a[e]){if(!s[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(h)return h(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var n=a[e]={exports:{}};s[e][0].call(n.exports,function(t){return u(s[e][1][t]||t)},n,n.exports,r,s,a,c)}return a[e].exports}for(var h="function"==typeof require&&require,t=0;t<c.length;t++)u(c[t]);return u}({1:[function(t,e,i){"use strict";e.exports=function(t,e,i,o){e=e||"&",i=i||"=";var n={};if("string"!=typeof t||0===t.length)return n;var r=/\+/g;t=t.split(e);var s=1e3;o&&"number"==typeof o.maxKeys&&(s=o.maxKeys);var a,c,u=t.length;0<s&&s<u&&(u=s);for(var h=0;h<u;++h){var l,d,f,p,g=t[h].replace(r,"%20"),y=g.indexOf(i);0<=y?(l=g.substr(0,y),d=g.substr(y+1)):(l=g,d=""),f=decodeURIComponent(l),p=decodeURIComponent(d),a=n,c=f,Object.prototype.hasOwnProperty.call(a,c)?v(n[f])?n[f].push(p):n[f]=[n[f],p]:n[f]=p}return n};var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],2:[function(t,e,i){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(i,o,n,t){return o=o||"&",n=n||"=",null===i&&(i=void 0),"object"==typeof i?a(c(i),function(t){var e=encodeURIComponent(r(t))+n;return s(i[t])?a(i[t],function(t){return e+encodeURIComponent(r(t))}).join(o):e+encodeURIComponent(r(i[t]))}).join(o):t?encodeURIComponent(r(t))+n+encodeURIComponent(r(i)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var i=[],o=0;o<t.length;o++)i.push(e(t[o],o));return i}var c=Object.keys||function(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.push(i);return e}},{}],3:[function(t,e,i){"use strict";i.decode=i.parse=t("./decode"),i.encode=i.stringify=t("./encode")},{"./decode":1,"./encode":2}],CanvasResize:[function(t,e,i){"use strict";cc._RF.push(e,"f0150BCF7lLjqr/PB1lQcIS","CanvasResize"),cc.Class({extends:cc.Component,onLoad:function(){var t=this.node.getComponent(cc.Canvas);t.designResolution=cc.size(t.width,t.height)}}),cc._RF.pop()},{}],DiceDialog:[function(t,e,i){"use strict";cc._RF.push(e,"f1ddcq8/rJImqIP6EKsedrC","DiceDialog"),cc.Class({extends:cc.Component,properties:{ResultLabel:cc.Label},onLoad:function(){},show:function(t,e,i){this._isDicing=!1,this.node.active=!0,this._event=t,this._makerData=e,this._skill=i,cc.log(i,"data",e),this.ResultLabel.string=""},close:function(){this.unscheduleAllCallbacks(),this._event=null,this._makerData=null,this.ResultLabel.string="",this.node.active=!1},_roll:function(){this._isDicing=!0;for(var t=parseInt(this._makerData.skill[this._skill],10),e=this._makerData.ability[this._event.ability],i=[0,0,1,1,1,2],o=i.length,n=[],r=0;r<e;r++)n.push(i[Math.floor(1e3*Math.random())%o]);return n.push(t),n},clickOnRoll:function(e){var i=this;if(!this._isDicing){var o=this._roll(),n=o.length,r=0;EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:t("Notifier").type.DICE,targets:this._event.targets,describe:this._event.describe,ability:this._event.ability,testValue:o,who:this._makerData.nickname}),this.ResultLabel.string=o[r++],this.schedule(function(t){r<n?i.ResultLabel.string+="+"+o[r]:r==n?i.ResultLabel.string+="="+o.reduce(function(t,e){return t+e}):(i.close(),e&&e()),r++},.5,o.length)}},clickOnCancel:function(){this.node.emit("EmitDiceCancel"),this.close()}}),cc._RF.pop()},{Notifier:"Notifier"}],EditStoryDialog:[function(t,e,i){"use strict";cc._RF.push(e,"4349ehMoctAK4mJt/ytsBA4","EditStoryDialog"),cc.Class({extends:cc.Component,properties:{MainEditbox:cc.EditBox,ReplaceEditboxNode:cc.Node,ReplaceEditboxRoot:cc.Node},show:function(t){this.node.active=!0,this.ReplaceEditboxNode.active=!1,this.MainEditbox.string="",this.MainEditbox.placeholder=t||""},getParams:function(){return{input:this.MainEditbox.string}},onAddReplaceClicked:function(){var t=cc.instantiate(this.ReplaceEditboxNode);t.parent=this.ReplaceEditboxRoot,t.active=!0},onReplaceClicked:function(){var i=this;this.ReplaceEditboxRoot.children.forEach(function(t){var e=t.getComponent(cc.EditBox).string.split("=");i.MainEditbox.string=i.MainEditbox.string.replace(new RegExp(" "+e[0]+" ","gi"),e[1]),t.destroy()})},onClearInputClicked:function(){this.MainEditbox.string="",this.ReplaceEditboxRoot.children.forEach(function(t){return t.destroy})}}),cc._RF.pop()},{}],EventButton:[function(t,e,i){"use strict";cc._RF.push(e,"0f215BLlFZMCJcg8nLLA57i","EventButton"),cc.Class({extends:cc.Component,properties:{EventName:cc.Label},setParams:function(t,e){this.EventName.string=t,this._callback=e},onClicked:function(){this._callback&&this._callback()}}),cc._RF.pop()},{}],EventRemover:[function(t,e,i){"use strict";cc._RF.push(e,"effaeb+2phELoiQQT5+Y30F","EventRemover"),cc.Class({extends:cc.Component,addEventParam:function(t){this._registeredEventList=this._registeredEventList?this._registeredEventList.push(t):[t]},onDestroy:function(){this._registeredEventList&&this._registeredEventList.forEach(function(t){EVENT.removeListener(t.name,t.func,t.target)})}}),cc._RF.pop()},{}],Firelink:[function(t,e,i){"use strict";cc._RF.push(e,"921fbAR3AlH7ZGzCAcHjlfE","Firelink");var o={apiKey:"AIzaSyAc5PRwmE14gBH5az8TSoqs9aBrQ8YWa4o",authDomain:"fir-test-756e1.firebaseapp.com",databaseURL:"https://fir-test-756e1.firebaseio.com",projectId:"fir-test-756e1",storageBucket:"fir-test-756e1.appspot.com",messagingSenderId:"182531440628"};cc.Class({ctor:function(){this.db=Firebase.link.bind(this,"https://www.gstatic.com/firebasejs/4.2.0/firebase.js",o)},push:function(i,o){var n=this;return new Promise(function(e,t){i?n.db().then(function(t){return e(t.ref(i).push(o).getKey())}):t("none_ref")})},write:function(i,o){var n=this;return new Promise(function(e,t){i?n.db().then(function(t){return t.ref(i).set(o,function(t){return e({success:null==t})})}):t("none ref")})},remove:function(e){e?this.db().then(function(t){return t.ref(e).remove()}):cc.error("none ref")},read:function(e){var t=this;return new Promise(function(i){t.db().then(function(t){return t.ref(e).once("value",function(t){var e=t.val();i(null!=e?{success:!0,data:e,num:t.numChildren()}:{success:!1})})})})},notify:function(e,i){e?this.db().then(function(t){t.ref(e).set(i),t.ref(e).remove()}):cc.error("none ref")},addListener:function(e,i){this.db().then(function(t){return t.ref(e).on("value",function(t){var e=t.val();i(null!=e?{success:!0,data:e,num:t.numChildren()}:{success:!1})})})},removeListener:function(e){this.db().then(function(t){return t.ref(e).off()})}}),cc._RF.pop()},{}],InputDialog:[function(t,e,i){"use strict";cc._RF.push(e,"eb36a6F1q5HqqCjapDwQBM3","InputDialog"),cc.Class({extends:cc.Component,properties:{Editbox:cc.EditBox},onLoad:function(){this._oriEditboxHeight=this.Editbox.node.height},show:function(t,e){this.node.active=!0,this._addedTexts=[],this.Editbox.placeholder=t||"",this.Editbox.string=e||""},setInputMode:function(t,e){this.Editbox.inputMode=t,this.Editbox.node.height=e||this._oriEditboxHeight},addContent:function(t){this.Editbox.string+=" "+t,this._addedTexts.push(t)},delContent:function(t){var e=this.Editbox.string;this.Editbox.string=e.substring(0,e.lastIndexOf(t)-1),this._addedTexts.pop(t)},getParams:function(){return this.Editbox.node.height=this._oriEditboxHeight,{input:this.Editbox.string,added:this._addedTexts}},onClearInputClicked:function(){this.Editbox.string=""}}),cc._RF.pop()},{}],Notifier:[function(e,t,i){"use strict";cc._RF.push(t,"7285at4ESFACqLs3HQeDIqv","Notifier");var o=new(e("Firelink")),n="DeepPrisoner",r=cc.Enum({STORY:-1,JOIN:-1,QUIT:-1,UTTER:-1,BROADCAST:-1,TRADE:-1,CHANGE:-1,TEST:-1,DICE:-1,POLL:-1,VOTE:-1});cc.Class({extends:cc.Component,statics:{type:r,mode:!1,login:function(){return new Promise(function(t,e){var i=(new Date).getTime()+"_"+Math.floor(1e5*Math.random());t(i)})}},properties:{StoryTeller:e("StoryTeller"),StoryMakers:[e("StoryMaker")]},onLoad:function(){var t=e("querystring").parse(window.location.search.substring(1),"&","=");this._isHost=this.StoryTeller&&"1"==t.st,!this._isHost&&this.StoryTeller.node.removeComponent(e("StoryTeller")),EVENT.addListener("NotifyStoryTellerEvent",this._notifyStoryTellerEvent,this),EVENT.addListener("NotifyStoryMakerEvent",this._notifyStoryMakerEvent,this),this._isHost&&o.addListener(n+"/StoryTeller/",this._hostDo.bind(this)),o.addListener(n+"/StoryMaker/",this._userDo.bind(this))},start:function(){},onDestroy:function(){o.removeListener(n+"/StoryTeller/",this._hostDo.bind(this)),o.removeListener(n+"/StoryMaker/",this._userDo.bind(this))},_notifyStoryTellerEvent:function(t){t.detail&&o.notify(n+"/StoryTeller/Notify/",t.detail)},_notifyStoryMakerEvent:function(t){t.detail&&o.notify(n+"/StoryMaker/Notify/",t.detail)},_hostDo:function(t){var e=this,i=t.success,o=t.data;i&&Object.keys(o).forEach(function(t){"Notify"==t&&e._hostEventHandler(o[t])})},_userDo:function(t){var e=this,i=t.success,o=t.data;i&&Object.keys(o).forEach(function(t){"Notify"==t&&e._userEventHandler(o[t])})},_hostEventHandler:function(t){var e=this;switch(cc.log("==TELLER==\n",t),t.type){case r.STORY:t.data.reverse().forEach(function(t){return e.StoryTeller.story(t)});break;case r.JOIN:this.StoryTeller.makerJoining(t);break;case r.QUIT:this.StoryTeller.makerQuittfed(t);break;case r.UTTER:this.StoryTeller.utter(t);break;case r.TRADE:this.StoryTeller.trade(t);break;case r.CHANGE:this.StoryTeller.change(t);break;case r.TEST:this.StoryTeller.test(t);break;case r.DICE:this.StoryTeller.resultDice(t);break;case r.POLL:this.StoryTeller.pollVote(t);break;case r.VOTE:this.StoryTeller.resultVote(t)}},_userEventHandler:function(e){switch(cc.log("==MAKER==\n",e),e.type){case r.JOIN:this.StoryMakers.forEach(function(t){return t.makerJoining(e)});break;case r.QUIT:break;case r.BROADCAST:this.StoryMakers.forEach(function(t){return t.print(e)});break;case r.CHANGE:this.StoryMakers.forEach(function(t){return t.change(e)});break;case r.TEST:this.StoryMakers.forEach(function(t){return t.print(e)});break;case r.DICE:this.StoryMakers.forEach(function(t){return t.dice(e)});break;case r.POLL:break;case r.VOTE:this.StoryMakers.forEach(function(t){return t.vote(e)})}}}),cc._RF.pop()},{Firelink:"Firelink",StoryMaker:"StoryMaker",StoryTeller:"StoryTeller",querystring:3}],PickerDialog:[function(t,e,i){"use strict";cc._RF.push(e,"e2189efS7RGm6rJH7kBHkwF","PickerDialog"),cc.Class({extends:cc.Component,properties:{ButtonNode:cc.Node,ButtonRoot:cc.Node},onLoad:function(){},show:function(){this.node.active=!0,cc.log("picker dialog show")},target:function(){},_button:function(t,e){this.ButtonRoot.active=!0;var i=cc.instantiate(this.ButtonNode);i.parent=this.ButtonRoot,i.active=!0,i.y=0,i.getComponent("EventButton").setParams(t,e||this._close.bind(this))}}),cc._RF.pop()},{}],PushDialog:[function(t,e,i){"use strict";cc._RF.push(e,"f3178RVpLNLbr4YUxg7IHS+","PushDialog"),cc.Class({extends:cc.Component,properties:{ButtonNode:cc.Node,ButtonRoot:cc.Node,PushButtonNode:cc.Node,PushRoot:cc.Node},onLoad:function(){},onDisable:function(){this.ButtonRoot.children.forEach(function(t){return t.destroy()})},show:function(t){var o=this;this.node.active=!0,t.forEach(function(i){o._button(o.ButtonNode,o.ButtonRoot,i.name,function(t){var e=i.verb;e&&o.node.emit("EmitPickit",e),o._push(i.group)})})},hide:function(){this.PushRoot.setPosition(this.node.width,0),this.ButtonRoot.setPosition(0,0)},_button:function(t,e,i,o){var n=cc.instantiate(t);n.parent=e,n.active=!0,n.y=0,n.getComponent("EventButton").setParams(i,o)},_push:function(){var i=this,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.PushRoot.children.forEach(function(t){return t.destroy()}),cc.log(o),Object.keys(o).forEach(function(t){var e=t+"("+o[t]+")";i._button(i.PushButtonNode,i.PushRoot,e,i._action.bind(i,"EmitPickit",t))}),this.PushRoot.runAction(cc.moveTo(.1,0,0)),this.ButtonRoot.runAction(cc.moveTo(.1,-this.node.width,0))},pop:function(){this.PushRoot.runAction(cc.sequence(cc.moveTo(.1,this.node.width,0),cc.callFunc(function(t){return cc.log("hi")}))),this.ButtonRoot.runAction(cc.moveTo(.1,0,0))},_action:function(t,e){e&&this.node.emit(t,e),this.pop()}}),cc._RF.pop()},{}],StoryCard:[function(t,e,i){"use strict";cc._RF.push(e,"d87b5lrSXlBsp/Bz7VQZMpG","StoryCard");var o=cc.Enum({STORY:-1,RECORD:-1});cc.Class({extends:cc.Component,statics:{type:o},properties:{NameLabel:cc.Label,DescribeLabel:cc.Label},setParam:function(t){var e=t.targets,i=t.names,o=t.describe,n=t.mode;this.NameLabel.string=i?i.join(","):"",this.DescribeLabel.string=o?"　　"+o:"-----",this._eventData={targets:e,names:i,describe:o,mode:n}},onClick:function(){this._eventData.mode==o.STORY&&(EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:t("Notifier").type.UTTER,targets:[],describe:this._eventData.describe}),this.node.active=!1)}}),cc._RF.pop()},{Notifier:"Notifier"}],StoryDialog:[function(r,t,e){"use strict";cc._RF.push(t,"9a11c939aJMcKF5T8YVkCvv","StoryDialog"),cc.Class({extends:cc.Component,properties:{CloseButton:cc.Node,ContentRoot:cc.Node,MessageDialog:r("TextDialog"),DiceDialog:r("DiceDialog"),PushDialog:r("PushDialog"),ChangeDialog:r("InputDialog"),InputDialog:r("InputDialog"),EditStoryDialog:r("EditStoryDialog"),ButtonNode:cc.Node,ButtonRoot:cc.Node},onLoad:function(){this._targets=[],this._include=[],this.PushDialog.node.on("EmitPickit",this._actionButton,this)},start:function(){cc.log("別忘記做 buffer")},editStory:function(){var i=this;this.node.active=!0,this.CloseButton.active=!0,this.EditStoryDialog.show("加入故事"),this._button("生成故事卡",function(t){i._close();var e=i.EditStoryDialog.getParams();EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.STORY,targets:[],data:e.input.split("\n\n\n")})})},login:function(i){var o=this;this._makerid=i,this.node.active=!0,this.ButtonRoot.children.forEach(function(t){return t.destroy()}),this.ContentRoot.children.forEach(function(t){return t.active=!1}),this.MessageDialog.show("暱稱"),this.InputDialog.show("你的名字？"),this._button("登入",function(t){o._close();var e=o.InputDialog.getParams();EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.JOIN,targets:[],makerid:i,nickname:e.input})})},logout:function(){},show:function(t,e){if(this.node.active||(this.node.active=!0,this.ButtonRoot.children.forEach(function(t){return t.destroy()}),this.ContentRoot.children.forEach(function(t){return t.active=!1}),this.CloseButton.active=!0),-1==this._targets.indexOf(t)&&this._targets.push(t),this.PushDialog.node.active)this.InputDialog.addContent(e);else{var i=this.node.parent.getComponent("StoryMaker").makersData[t];this.PushDialog.show([{name:"行動",verb:"發動",group:i.skill},{name:"道具",verb:"使用",group:i.item}]),this.MessageDialog.show(Object.keys(i.ability).map(function(t){return t+":"+i.ability[t]}).join(" ")),this.InputDialog.show("寫點什麼",i.nickname)}},utter:function(t,e){this.node.active=!0,cc.log('被"行動"取代了，看這個還要不要留下'),this.InputDialog.node.active?(cc.log("??",t,e),this.InputDialog.addContent(e)):(this.MessageDialog.show("請發言"),this.InputDialog.show("寫點什麼",e))},broadcast:function(i){var o=this;this.node.active=!0,this.CloseButton.active=!0,this.InputDialog.setInputMode(0,210),this.InputDialog.show("廣播內容",i.describe),this._button("廣播",function(t){o._close();var e=o.InputDialog.getParams();EVENT.dispatchNotify("NotifyStoryMakerEvent",{type:r("Notifier").type.BROADCAST,targets:i.targets||[],describe:e.input}),o._targets=[],o._include=[]})},trade:function(){this.node.active=!0,cc.log("開啟trade dialog")},change:function(o){var n=this;this.node.active=!0,this.CloseButton.active=!0;var t=o.include[0];this.MessageDialog.show(o.describe),this.InputDialog.show("輸入名稱",t),this.ChangeDialog.show("修改數值"+o.num+"→",o.num),this._button("修改",function(t){n._close();var e=n.InputDialog.getParams(),i=n.ChangeDialog.getParams();EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.CHANGE,targets:o.targets,describe:o.describe,propty:o.propty,change:e.input+"="+i.input})})},test:function(o){var n=this;this.node.active=!0,this.CloseButton.active=!0,this.InputDialog.show("寫點什麼",o.describe);var t=function(i){n._button(i,function(t){n._close();var e=n.InputDialog.getParams();EVENT.dispatchNotify("NotifyStoryMakerEvent",{type:r("Notifier").type.DICE,targets:o.targets,describe:e.input,ability:i,include:o.include})})};t("力量"),t("敏捷"),t("智慧"),t("精神");var i=this.node.parent.getComponent("StoryMaker").makersData[this._makerid];this._button("調整",function(t){n._close();var e=o.include;EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.TRADE,targets:o.targets,describe:"調整"+e,propty:"skill",include:[e],num:i.skill[e]})})},dice:function(t,e){var i=this;this.node.active=!0,this.MessageDialog.show(t.describe+"\n您可以用("+t.ability+"屬性)"+e.ability[t.ability]+"粒骰子進行擲骰"),this.DiceDialog.show(t,e,t.include),this._button("擲骰",function(t){i.DiceDialog.clickOnRoll(i._close.bind(i))})},_actionButton:function(t){var i=this,e=t.detail;switch(this.InputDialog.addContent(e),e){case"表示":cc.log("目前沒有用到"),this._button("發言",function(t){i._close();var e=i.InputDialog.getParams();EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.UTTER,targets:[i._makerid],describe:e.input}),i._targets=[],i._include=[]});break;case"發動":this._button("檢定",function(t){i._close();var e=i.InputDialog.getParams();EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.TEST,targets:i._targets,describe:e.input,propty:"skill",include:[e.input.split("發動 ")[1]]}),i._targets=[],i._include=[]}),this._button("取消",this._backButton.bind(this,e));break;case"使用":this._button("使用",function(t){i._close();var e=i.InputDialog.getParams();EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.TRADE,targets:[i._targets[0]],describe:e.input,propty:"item",include:[e.input.split("使用 ")[1]||e.input.split("獲得 ")[1]]}),i._include=[]}),this._button("取消",this._backButton.bind(this,e));break;case"投票":this._button("投票",function(t){i._close();var e=i.InputDialog.getParams();EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:r("Notifier").type.POLL,targets:[i._makerid],describe:e.input}),i._targets=[]})}},_backButton:function(t){this.ButtonRoot.children.forEach(function(t){return t.destroy()}),this.InputDialog.delContent(t),this.PushDialog.pop()},_button:function(t,e){this.ButtonRoot.active=!0;var i=cc.instantiate(this.ButtonNode);i.parent=this.ButtonRoot,i.active=!0,i.y=0,i.getComponent("EventButton").setParams(t,e||this._close.bind(this))},_close:function(){this.PushDialog.node.active&&this.PushDialog.hide(),this.ButtonRoot.children.forEach(function(t){return t.destroy()}),this.ContentRoot.children.forEach(function(t){return t.active=!1}),this.node.active=!1},onCloseClicked:function(){this._targets=[],this._include=[],this._close()}}),cc._RF.pop()},{DiceDialog:"DiceDialog",EditStoryDialog:"EditStoryDialog",InputDialog:"InputDialog",Notifier:"Notifier",PushDialog:"PushDialog",TextDialog:"TextDialog"}],StoryMakerData:[function(t,e,i){"use strict";cc._RF.push(e,"d8c4fQYWfhHZ6AbvVzdhKnN","StoryMakerData"),cc.Class({ctor:function(){this.makerid=0,this.nickname="",this.hitpoint={"體魄":0,"意志":0},this.ability={"力量":0,"敏捷":0,"智慧":0,"精神":0},this.skill={"覺查":1,"妙手":1,"交涉":1,"蠻力":1,"忍耐":1,"避害":1,"運動":1,"操弄":1,"歌頌":1},this.item={"檜木硬幣":1}},randomAbility:function(){var t=[3,3,2,1].sort(function(t){return Math.random()-.5});this.ability={"力量":t[0],"敏捷":t[1],"智慧":t[2],"精神":t[3]},this.hitpoint={"體魄":this.ability["力量"]+this.ability["敏捷"],"意志":this.ability["智慧"]+this.ability["精神"]}}}),cc._RF.pop()},{}],StoryMakerInfo:[function(t,e,i){"use strict";cc._RF.push(e,"66983KhZvJNVYWRMZ/6n1Tb","StoryMakerInfo"),cc.Class({extends:cc.Component,properties:{NameLabel:cc.Label,Dialog:t("StoryDialog")},setParams:function(t){var e=t.makerid,i=t.nickname;this._makerid=e,this._nickname=i,this.NameLabel.string=i},onNotifyInfoClicked:function(){this.Dialog.show(this._makerid,this._nickname)}}),cc._RF.pop()},{StoryDialog:"StoryDialog"}],StoryMaker:[function(a,t,e){"use strict";cc._RF.push(t,"ae0483Dhx9KpoBV/vXJ0XDf","StoryMaker");a("Notifier"),a("StoryMakerData");cc.Class({extends:cc.Component,properties:{StoryCardItem:cc.Node,StoryCardRoot:cc.Node,InfoMakersItem:cc.Node,InfoMakersRoot:cc.Node,CardsScrollView:cc.ScrollView,MakerInfo:a("StoryMakerInfo"),Dialog:a("StoryDialog")},onLoad:function(){this._makerid="",this._makersData=void 0,this.makerData=void 0},start:function(){var e=this;a("Notifier").login().then(function(t){return e.Dialog.login(e._makerid=t)})},makerJoining:function(t){var n=this;this._makersData=t.data,this.makersData=t.data;var r=this.InfoMakersRoot.getChildren();r.forEach(function(t){return t.active=!1}),Object.keys(this._makersData).forEach(function(t,e){if(t!=n._makerid){var i=n._makersData[t],o=r[e]||cc.instantiate(n.InfoMakersItem);o.active=!0,o.parent=n.InfoMakersRoot,o.setPosition(0,-30),o.getComponent("StoryMakerInfo").setParams(i)}}),this._chekMe(t.targets)&&(this.makerData=this._makersData[this._makerid],this.MakerInfo.setParams(this.makerData)),this.print(t)},print:function(t){var e=this,i=(t.type,t.targets),o=t.describe,n=i?i.map(function(t){return e._makersData[t].nickname}):"",r=a("StoryCard").type,s=cc.instantiate(this.StoryCardItem);s.parent=this.StoryCardRoot,s.active=!0,s.getComponent("StoryCard").setParam({targets:i,names:n,describe:o,mode:r.RECORD}),this.scheduleOnce(function(t){return e.CardsScrollView.scrollToBottom()},0)},change:function(t){this.print(t);var e=t.propty,i=t.change,o=i.split("="),n=this._makersData[t.targets[0]],r=o[0],s=o[1],a=n[e];a[r]||(a[r]={}),a[r]=s},dice:function(t){if(this.print(t),this._chekMe(t.targets)){var e=this._makersData[this._makerid];this.Dialog.dice(t,e)}},vote:function(t){var e=t.type,i=t.targets,o=t.describe,n=t.votes;if(this._chekMe(i)){EVENT.dispatchNotify("NotifyStoryTellerEvent",{type:e,targets:i,describe:o,votes:n,choice:2})}},_chekMe:function(t){var e=this;return t.some(function(t){return t==e._makerid})},onFullScreenClicked:function(t){cc.screen.fullScreen()?cc.screen.exitFullScreen():cc.screen.requestFullScreen()},onReloadWebClicked:function(t){window.location.reload()}}),cc._RF.pop()},{Notifier:"Notifier",StoryCard:"StoryCard",StoryDialog:"StoryDialog",StoryMakerData:"StoryMakerData",StoryMakerInfo:"StoryMakerInfo"}],StoryTeller:[function(a,t,e){"use strict";cc._RF.push(t,"9d320weRBFFmZ4Da5SFzsYd","StoryTeller");var c=a("StoryMakerData");cc.Class({extends:cc.Component,properties:{StoryCardItem:cc.Node,StoryCardRoot:cc.Node,Dialog:a("StoryDialog")},onLoad:function(){this._makers={}},story:function(t){var e=a("StoryCard").type,i=cc.instantiate(this.StoryCardItem);i.parent=this.StoryCardRoot,i.active=!0,i.getComponent("StoryCard").setParam({targets:[],names:["Story teller"],describe:t,mode:e.STORY})},makerJoining:function(t){var i=this,e=t.type,o=t.makerid,n=t.nickname,r=new c;r.makerid=o,r.nickname=n,r.randomAbility(),this._makers[o]=r;var s={};Object.keys(this._makers).map(function(t){var e=i._makers[t];s[t]={makerid:t,nickname:e.nickname}}),EVENT.dispatchNotify("NotifyStoryMakerEvent",{type:e,targets:[o],data:this._makers,describe:"歡迎 "+n+" 加入"})},utter:function(t){this.Dialog.broadcast(t)},broadcast:function(t){EVENT.dispatchNotify("NotifyStoryMakerEvent",t)},trade:function(t){var e=this._makers[t.targets[0]];cc.log(t.include);var i=e[t.propty],o=t.include[0];t.num=i[o]||0,this.Dialog.change(t)},change:function(t){var e=t.targets,i=t.propty,o=t.change,n=o.split("=");this._makers[e[0]][i][n[0]]=n[1],this.broadcast(t)},test:function(t){this._testResultCount=0,this.Dialog.test(t)},resultDice:function(t){t.type;var e=t.targets,i=(t.describe,t.ability,t.testValue),o=t.who;this._testResultCount++;var n=e.length==this._testResultCount;this.broadcast({type:a("Notifier").type.BROADCAST,targets:[],describe:o+"檢定結果為 "+i.reduce(function(t,e){return t+e})}),n&&this.broadcast({type:a("Notifier").type.BROADCAST,targets:[],describe:"===擲骰結束==="})},pollVote:function(t){var e=t.type,i=t.targets,o=t.describe,n=t.votes;this._voteResultCount=0,this._voteBox=[],this._log(o,"\n請投票",n),EVENT.dispatchNotify("NotifyStoryMakerEvent",{type:e,targets:i,describe:o,votes:n})},resultVote:function(t){t.type;var e=t.targets,i=(t.describe,t.votes),o=t.choice;this._voteResultCount++,this._voteBox.push(o);var n=e.length==this._voteResultCount;this._log("開票：得一票",o);var r=this._voteBox.sort(function(t,e){return t-e}),s=r[0];n&&this.broadcast({type:a("Notifier").type.BROADCAST,targets:e,describe:"投票結果為 "+r+"，"+i[s]+"獲勝"})},_log:function(){cc.log("<============Teller:",this.node.name);for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];cc.log(JSON.stringify(e.join(" "))),cc.log("Teller============>")},onEditStoryClicked:function(){this.Dialog.editStory()}}),cc._RF.pop()},{Notifier:"Notifier",StoryCard:"StoryCard",StoryDialog:"StoryDialog",StoryMakerData:"StoryMakerData"}],TextDialog:[function(t,e,i){"use strict";cc._RF.push(e,"c064cq9DndOTZcztu1aBv5t","TextDialog"),cc.Class({extends:cc.Component,properties:{Label:cc.Label},onLoad:function(){},show:function(t){this.node.active=!0,this.Label.string=t},addContent:function(t){this.Label.string+=t},nextContent:function(t){this.Label.string+="\n"+t}}),cc._RF.pop()},{}],UtterDialog:[function(t,e,i){"use strict";cc._RF.push(e,"9118fOU+ONLuZ97y8QbCwti","UtterDialog"),cc.Class({extends:cc.Component,properties:{Input:cc.EditBox},onLoad:function(){},show:function(t){this.node.active=!0,this.Input.string=t},addContent:function(t){this.Input.string+=t},getParams:function(){return{message:this.Input.string}}}),cc._RF.pop()},{}]},{},["Firelink","Notifier","StoryMakerData","DiceDialog","EditStoryDialog","InputDialog","PickerDialog","PushDialog","StoryDialog","TextDialog","UtterDialog","CanvasResize","EventButton","EventRemover","StoryCard","StoryMaker","StoryMakerInfo","StoryTeller"]);