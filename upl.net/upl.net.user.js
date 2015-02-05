// ==UserScript==
// @name        upl.net
// @namespace   qeole
// @description Removing countdown and redirect on error
// @include     http://uploaded.net/file/*
// @version     1.0.0
// @grant       none
// ==/UserScript==

cDownload.prototype.free = function ()	{
		var b = this.c().down('button.free');
		
		b.stopObserving();
		b.down('h1').update('Traitement&hellip;');
		b.up().select('button, h1').invoke('setStyle', {cursor:'default',color:'#fff',textShadow:'#555 0 0 3px,#fff 0 0 7px'}).invoke('morph', 'color:#ffffaa', {duration:.5});

		new Ajax.Request('io/ticket/slot/'+this._auth, {onComplete:function(t){
				t = t.responseText;
				if(t.indexOf("err")>=0)
					this.freeslot = false;
				else
					this.freeslot = true;
			
			if(this.freeslot) {
				this.captcha();
	   	} else {
		  	this.limit("slot");
		  }
			
		}.bind(this)});
	};

cDownload.prototype.redirect = function()
	{
	};


Download._blink = false;
$('content').down('button.free').stopObserving();
$('content').down('button.free').observe('click', Download.free.bind(Download));