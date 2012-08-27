(function() {
	Reveal.initialize({
			controls: true,
			progress: true,
			history: false,
			keyboard: true,
			loop: false,
			autoSlide: 0,
			mouseWheel: false,
			rollingLinks: false,
			transition: 'default', // default/cube/page/concave/linear(2d)
			dependencies: [
				// Syntax highlighting for <code> elements
				{ src: 'js/libs/highlight.js', async: true, callback: function() { window.hljs.initHighlightingOnLoad(); } }
			]
		});

	Reveal.addEventListener('showboxbox', function() {
		console.log("begin boxbox");
		// document.getElementById('frame-boxbox').contentWindow.begin();
	});
})();