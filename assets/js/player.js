function meta(httpEquiv, content) {
	var meta = document.createElement('meta');
	meta.httpEquiv = httpEquiv;
	meta.content = content;
	document.getElementsByTagName('head')[0].appendChild(meta);
}
meta("Content-Security-Policy", "upgrade-insecure-requests")
meta("Cache-Control", "no-cache");
meta("Pragma", "no-cache");
meta("Expires", "0");

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
$("head").append(s);


window.addEventListener("message", function (e) {
	console.log('setting test new player')
	var video = document.createElement("video");
	$("body").html('');
	$("body").append(video);
	console.log('a')
	if(Hls.isSupported()) {
		console.log('b')
		var hls = new Hls();
		hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED,function() {
		  video.play();
	  });
	 }
	 else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		console.log('c')
		video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
		video.addEventListener('loadedmetadata',function() {
		  video.play();
		});
	  }
	console.log('d')
	return;
});
