// We really need this thing to send GLOBAL ui event messages.
// It might not be nicely done but it does its job so far

KineticUI.Event = {
	_blur : null,
	blur : function(object){
		if (!this._blur) {
			KineticUI.trace('ui_blur event is not set up', true);
			return;
		} else
			if (object) {
				this._blur.object = object;
				window.dispatchEvent(this._blur);
			} else
				return this._blur.type;
	}
};

if (document.createEvent) {
	KineticUI.Event._blur = document.createEvent('Event'); KineticUI.Event._blur.initEvent('ui_blur', true, true);
} else {
	KineticUI.Event._blur = new CustomEvent('ui_blur',{bubbles:true,cancelable:true});
}

