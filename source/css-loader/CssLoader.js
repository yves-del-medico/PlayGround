enyo.requiresWindow(function(){

	var platform;
	if (enyo.platform.safari) {
		platform = 'safari';
	} else if (enyo.platform.chrome) {
		platform = 'chrome';
	} else if (enyo.platform.ie) {
		platform = 'ie';
	} else {
		return;
	}

	enyo.log("Loading CSS for " + platform);
	enyo.loader.machine.sheet("assets/resources/css/" + platform + ".css");
});