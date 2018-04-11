function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var Modal=function(t){var e="modal",i="bs.modal",n="."+i,s=t.fn[e],o={backdrop:!0,keyboard:!0,focus:!0,show:!0},a={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,FOCUSIN:"focusin"+n,RESIZE:"resize"+n,CLICK_DISMISS:"click.dismiss"+n,KEYDOWN_DISMISS:"keydown.dismiss"+n,MOUSEUP_DISMISS:"mouseup.dismiss"+n,MOUSEDOWN_DISMISS:"mousedown.dismiss"+n,CLICK_DATA_API:"click"+n+".data-api"},d="modal-scrollbar-measure",l="modal-backdrop",h="modal-open",c="fade",_="show",u={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},g=function(){function s(e,i){this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(u.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var g=s.prototype;return g.toggle=function(t){return this._isShown?this.hide():this.show(t)},g.show=function(e){var i=this;if(!this._isTransitioning&&!this._isShown){Util.supportsTransitionEnd()&&t(this._element).hasClass(c)&&(this._isTransitioning=!0);var n=t.Event(r.SHOW,{relatedTarget:e});t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(h),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(r.CLICK_DISMISS,u.DATA_DISMISS,function(t){return i.hide(t)}),t(this._dialog).on(r.MOUSEDOWN_DISMISS,function(){t(i._element).one(r.MOUSEUP_DISMISS,function(e){t(e.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(e)}))}},g.hide=function(e){var i=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var n=t.Event(r.HIDE);if(t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var s=Util.supportsTransitionEnd()&&t(this._element).hasClass(c);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(r.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(r.CLICK_DISMISS),t(this._dialog).off(r.MOUSEDOWN_DISMISS),s?t(this._element).one(Util.TRANSITION_END,function(t){return i._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},g.dispose=function(){t.removeData(this._element,i),t(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},g.handleUpdate=function(){this._adjustDialog()},g._getConfig=function(t){return t=_extends({},o,t),Util.typeCheckConfig(e,t,a),t},g._showElement=function(e){var i=this,n=Util.supportsTransitionEnd()&&t(this._element).hasClass(c);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Util.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(r.SHOWN,{relatedTarget:e}),o=function(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,t(i._element).trigger(s)};n?t(this._dialog).one(Util.TRANSITION_END,o).emulateTransitionEnd(300):o()},g._enforceFocus=function(){var e=this;t(document).off(r.FOCUSIN).on(r.FOCUSIN,function(i){document!==i.target&&e._element!==i.target&&0===t(e._element).has(i.target).length&&e._element.focus()})},g._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(r.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(r.KEYDOWN_DISMISS)},g._setResizeEvent=function(){var e=this;this._isShown?t(window).on(r.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(r.RESIZE)},g._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(h),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(r.HIDDEN)})},g._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},g._showBackdrop=function(e){var i=this,n=t(this._element).hasClass(c)?c:"";if(this._isShown&&this._config.backdrop){var s=Util.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=l,n&&t(this._backdrop).addClass(n),t(this._backdrop).appendTo(document.body),t(this._element).on(r.CLICK_DISMISS,function(t){i._ignoreBackdropClick?i._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide())}),s&&Util.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(Util.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var o=function(){i._removeBackdrop(),e&&e()};Util.supportsTransitionEnd()&&t(this._element).hasClass(c)?t(this._backdrop).one(Util.TRANSITION_END,o).emulateTransitionEnd(150):o()}else e&&e()},g._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},g._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},g._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},g._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(u.FIXED_CONTENT).each(function(i,n){var s=t(n)[0].style.paddingRight,o=t(n).css("padding-right");t(n).data("padding-right",s).css("padding-right",parseFloat(o)+e._scrollbarWidth+"px")}),t(u.STICKY_CONTENT).each(function(i,n){var s=t(n)[0].style.marginRight,o=t(n).css("margin-right");t(n).data("margin-right",s).css("margin-right",parseFloat(o)-e._scrollbarWidth+"px")}),t(u.NAVBAR_TOGGLER).each(function(i,n){var s=t(n)[0].style.marginRight,o=t(n).css("margin-right");t(n).data("margin-right",s).css("margin-right",parseFloat(o)+e._scrollbarWidth+"px")});var i=document.body.style.paddingRight,n=t("body").css("padding-right");t("body").data("padding-right",i).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},g._resetScrollbar=function(){t(u.FIXED_CONTENT).each(function(e,i){var n=t(i).data("padding-right");void 0!==n&&t(i).css("padding-right",n).removeData("padding-right")}),t(u.STICKY_CONTENT+", "+u.NAVBAR_TOGGLER).each(function(e,i){var n=t(i).data("margin-right");void 0!==n&&t(i).css("margin-right",n).removeData("margin-right")});var e=t("body").data("padding-right");void 0!==e&&t("body").css("padding-right",e).removeData("padding-right")},g._getScrollbarWidth=function(){var t=document.createElement("div");t.className=d,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},s._jQueryInterface=function(e,n){return this.each(function(){var o=t(this).data(i),a=_extends({},s.Default,t(this).data(),"object"==typeof e&&e);if(o||(o=new s(this,a),t(this).data(i,o)),"string"==typeof e){if(void 0===o[e])throw new TypeError('No method named "'+e+'"');o[e](n)}else a.show&&o.show(n)})},_createClass(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return o}}]),s}();return t(document).on(r.CLICK_DATA_API,u.DATA_TOGGLE,function(e){var n,s=this,o=Util.getSelectorFromElement(this);o&&(n=t(o)[0]);var a=t(n).data(i)?"toggle":_extends({},t(n).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var d=t(n).one(r.SHOW,function(e){e.isDefaultPrevented()||d.one(r.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});g._jQueryInterface.call(t(n),a,this)}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=s,g._jQueryInterface},g}($);