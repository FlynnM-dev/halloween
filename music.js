(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"music_atlas_1", frames: [[999,754,552,736],[0,0,997,964],[0,966,878,109],[999,0,752,752]]},
		{name:"music_atlas_2", frames: [[0,0,1200,1200]]},
		{name:"music_atlas_3", frames: [[0,0,2048,2048]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._20250809_074854837_iOS = function() {
	this.initialize(ss["music_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img_bandcamp = function() {
	this.initialize(ss["music_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img_disc = function() {
	this.initialize(ss["music_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img_frame01 = function() {
	this.initialize(img.img_frame01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,6000);


(lib.img_insta = function() {
	this.initialize(img.img_insta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5001,5001);


(lib.img_logo = function() {
	this.initialize(ss["music_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img_spotify = function() {
	this.initialize(ss["music_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img_title = function() {
	this.initialize(img.img_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6000,6000);


(lib.img_vinyl = function() {
	this.initialize(ss["music_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.g_title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_title();
	this.instance.setTransform(0,0,0.121,0.1049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,726.2,629.5);


(lib.g_textbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+sA5TMAAAhylMB9ZAAAMAAABylg");
	this.shape.setTransform(401.275,366.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,802.6,733.3);


(lib.g_cover = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_frame01();
	this.instance.setTransform(0,0,0.1131,0.1055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,678.8,632.7);


(lib.g_backing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EibOAPBIAA+BME2dAAAIAAeBg");
	this.shape.setTransform(993.45,96.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1986.9,192.2);


(lib.b_vinyl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_vinyl();
	this.instance.setTransform(0,0,0.7997,0.7856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601.4,590.8);


(lib.b_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_logo();
	this.instance.setTransform(0,0,0.6044,0.5505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,530.7,60);


(lib.b_insta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_insta();
	this.instance.setTransform(0,0,0.021,0.0209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.2,104.4);


(lib.b_cd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_disc();
	this.instance.setTransform(0,0,0.6467,0.6311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,644.8,608.4);


(lib.b_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_spotify();
	this.instance.setTransform(0,0,0.0543,0.0542);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.2,111);


(lib.b_bandcamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_bandcamp();
	this.instance.setTransform(0,0,0.0925,0.0913);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,109.6);


// stage content:
(lib.main_ep = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// --- Button Links ---
		this.button1.on("click", () => window.open("https://flynnmitchell.netlify.app/", "_blank"));
		this.button2.on("click", () => window.open("https://open.spotify.com/artist/7dkZMmZCSwkbpke5r6nXkB?si=fcSHtVGGRxal4n95UOqpXQ", "_blank"));
		this.button3.on("click", () => window.open("https://bandcamp.com/", "_blank"));
		this.button4.on("click", () => window.open("https://www.instagram.com/", "_blank"));
		
		function addHoverEffect(btn, hoverScale = 1.03) {
		  // Capture the starting scale from Animate stage
		  const baseScaleX = btn.scaleX;
		  const baseScaleY = btn.scaleY;
		
		  btn.on("mouseover", () => {
		    createjs.Tween.get(btn).to(
		      { scaleX: baseScaleX * hoverScale, scaleY: baseScaleY * hoverScale },
		      200,
		      createjs.Ease.quadOut
		    );
		  });
		
		  btn.on("mouseout", () => {
		    createjs.Tween.get(btn).to(
		      { scaleX: baseScaleX, scaleY: baseScaleY },
		      200,
		      createjs.Ease.quadIn
		    );
		  });
		}
		
		// Apply with different hover scales
		[ this.button1, this.button2, this.button3, this.button4 ].forEach(btn => addHoverEffect(btn, 1.05));
		[ this.disc, this.vinyl ].forEach(btn => addHoverEffect(btn, 1.05)); // bigger hover
		
		
		
		
		
		// --- Background Music ---
		const bgMusic = new Audio("assets/inwater.mp3");
		bgMusic.loop = true;
		bgMusic.volume = 0.5;
		stage.addEventListener("click", () => bgMusic.play());
		
		// --- Setup references ---
		const root = this; // timeline reference
		
		// Optional: start with CD visible, vinyl hidden (adjust if you want both shown)
		root.disc.visible = true;
		root.vinyl.visible = false;
		
		// Keep vinyl aligned to disc initially (if both exist)
		root.vinyl.x = root.disc.x;
		root.vinyl.y = root.disc.y;
		root.vinyl.scaleX = root.disc.scaleX;
		root.vinyl.scaleY = root.disc.scaleY;
		
		// --- Toggle behavior ---
		// Clicking the CD shows Vinyl; clicking Vinyl shows CD
		root.disc.on("click", () => {
		  // Preserve position/scale from the clicked item
		  root.vinyl.x = root.disc.x;
		  root.vinyl.y = root.disc.y;
		  root.vinyl.scaleX = root.disc.scaleX;
		  root.vinyl.scaleY = root.disc.scaleY;
		
		  root.disc.visible = false;
		  root.vinyl.visible = true;
		});
		
		root.vinyl.on("click", () => {
		  root.disc.x = root.vinyl.x;
		  root.disc.y = root.vinyl.y;
		  root.disc.scaleX = root.vinyl.scaleX;
		  root.disc.scaleY = root.vinyl.scaleY;
		
		  root.vinyl.visible = false;
		  root.disc.visible = true;
		});
		
		// --- Spin both (so whichever is visible is already spinning) ---
		createjs.Ticker.framerate = 60;
		createjs.Ticker.addEventListener("tick", () => {
		  if (root.disc) {
		    root.disc.rotation += 1; // speed of CD spin
		    if (root.disc.rotation >= 360) root.disc.rotation = 0;
		  }
		  if (root.vinyl) {
		    root.vinyl.rotation += 1; // speed of Vinyl spin (set different speed if you like)
		    if (root.vinyl.rotation >= 360) root.vinyl.rotation = 0;
		  }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// albumcover
	this.instance = new lib.g_cover("synched",0);
	this.instance.setTransform(1313.1,637.1,0.9126,0.9074,0,0,0,339.4,316.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgvLgrvMBeXAAAMAAABXfMheXAAAg");
	this.shape.setTransform(1305.375,630);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgvLArwMAAAhXfMBeXAAAMAAABXfg");
	this.shape_1.setTransform(1305.375,630);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// vinyl
	this.vinyl = new lib.b_vinyl();
	this.vinyl.name = "vinyl";
	this.vinyl.setTransform(1623.35,642.3,0.8097,0.8237,0,0,0,300.7,295.4);
	new cjs.ButtonHelper(this.vinyl, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.vinyl).wait(1));

	// disc
	this.disc = new lib.b_cd();
	this.disc.name = "disc";
	this.disc.setTransform(1628.9,642.8,0.8097,0.8237,0,0,0,322.5,304.3);
	new cjs.ButtonHelper(this.disc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.disc).wait(1));

	// portfolio
	this.button1 = new lib.b_logo();
	this.button1.name = "button1";
	this.button1.setTransform(869.8,61.8,1.0533,1.0336);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button1).wait(1));

	// link03
	this.button4 = new lib.b_insta();
	this.button4.name = "button4";
	this.button4.setTransform(1825.8,84.35,1,1,0,0,0,52.6,52.2);
	new cjs.ButtonHelper(this.button4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button4).wait(1));

	// link02
	this.button3 = new lib.b_bandcamp();
	this.button3.name = "button3";
	this.button3.setTransform(1663.95,81.8,1,1,0,0,0,55.5,54.8);
	new cjs.ButtonHelper(this.button3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button3).wait(1));

	// link01
	this.button2 = new lib.b_button();
	this.button2.name = "button2";
	this.button2.setTransform(1499.35,81.05,1,1,0,0,0,55.6,55.5);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button2).wait(1));

	// title
	this.instance_1 = new lib.g_title("synched",0);
	this.instance_1.setTransform(467.9,-47.2,1,1,0,0,0,363.1,314.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// text
	this.text = new cjs.Text(" ", "27px 'High Tower Text'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-421.35,544.25);

	this.text_1 = new cjs.Text("All Hallows' Eve: Chapter 1 is the beginning of an annual Halloween project that recontextualises some of my favourite horror video games in the format of music. Games for this edition include Silent Hill 2, Still Wakes the Deep as well as Under the Waves. \nEach of these games are some of my biggest inspirations for different reasons. In the case of Silent Hill 2, I love it's various interpretations and theory's. The story tells you everything you need to know, but much like an iceberg, the narrative goes much deeper than what is shown to the audience. To match the ambience of the videogame I experimented with more reverbed instrumentations accompanied with static towards the end of the song.\nStill Wakes the Deep is another favourite for it's ability to pack several phobias into a short story without it feeling forced. In creating a song for this track I tried to have some orchestral elements at the start of the song before it turns into quite a metal track, which I feel matched the aesthetics of the oil rig it's set on.\nFor the final track, I was inspired by Under the Waves. Although this isn't a horror game at it's core, it is so well written that I had to pay some homage . Sound wise I was leaning towards a bit more vulnerable and raw sound to reflect the main characters past.\nTracklist includes:\n1. In Water\n2. Still Watching the Deep\n3. Under the Waves\n\n", "27px 'High Tower Text'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 788;
	this.text_1.parent = this;
	this.text_1.setTransform(396.15,187.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_8
	this.instance_2 = new lib.g_textbox("synched",0);
	this.instance_2.setTransform(401.2,749.75,1,1.5269,0,0,0,401.2,366.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("EAAAA5TMAAAhyl");
	this.shape_2.setTransform(90.75,634.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_2}]}).wait(1));

	// MainBackHead
	this.instance_3 = new lib.g_backing("synched",0);
	this.instance_3.setTransform(953.95,93.55,1,1,0,0,0,993.5,96);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("EibOgPAME2dAAAIAAeBMk2dAAAg");
	this.shape_3.setTransform(953.9,93.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance_3}]}).wait(1));

	// photo
	this.instance_4 = new lib._20250809_074854837_iOS();
	this.instance_4.setTransform(720,-27,2.2021,1.7923);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(486.7,178.1,1461.7,1246.1000000000001);
// library properties:
lib.properties = {
	id: 'D2A8200A070B61469BFF4152198522BF',
	width: 1920,
	height: 1080,
	fps: 1,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/img_frame01.png", id:"img_frame01"},
		{src:"images/img_insta.png", id:"img_insta"},
		{src:"images/img_title.png", id:"img_title"},
		{src:"images/music_atlas_1.png", id:"music_atlas_1"},
		{src:"images/music_atlas_2.png", id:"music_atlas_2"},
		{src:"images/music_atlas_3.png", id:"music_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D2A8200A070B61469BFF4152198522BF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

console.log(img_frame01);
console.log(lib.img_frame01);
