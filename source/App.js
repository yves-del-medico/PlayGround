enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Hello World"},
		{classes: "nice-size nice-color", content: "The text will be in pink on Chrome, in green on ie, in blue on safari, in black on the other browsers"},
		{kind: "enyo.Scroller", fit: true, components: [
				{name: "main", classes: "nice-padding nice-color", allowHtml: true}
			]},
		{kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"},
				{kind: "onyx.Button", content: "Reset", name: "reset", ontap: "resetMain"}
			]}
	],
	create: function() {
		this.inherited(arguments);
	},
	helloWorldTap: function(inSender, inEvent) {
		this.$.main.addContent("The button was tapped.<br/>");
	},
	resetMain: function(inSender, inEvent) {
		this.$.main.setContent("");
	}
});
