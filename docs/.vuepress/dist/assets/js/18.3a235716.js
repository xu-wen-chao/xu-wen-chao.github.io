(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{228:function(e,n){var t=new(function(){function e(){this.members=new Set}return e.prototype.add=function(e){return this.members.add(e),this},e.prototype.receive=function(e){this.members.forEach((function(n){return e!==n&&n.receive()}))},e}()),o=function(){function e(e){this.name=e}return e.prototype.receive=function(){console.log(this.name+"收到了消息")},e.prototype.send=function(){console.log("---"+this.name+"发送了消息---"),t.receive(this)},e}(),i=new o("m1"),r=new o("m2"),s=new o("m3");t.add(i).add(r).add(s),i.send(),r.send()},258:function(e,n,t){"use strict";t.r(n);t(228);var o={name:"design-patterns-ediator"},i=t(0),r=Object(i.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);n.default=r.exports}}]);