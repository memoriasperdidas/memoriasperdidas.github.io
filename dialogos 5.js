(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dialogos 5_atlas_1", frames: [[0,2139,411,800],[1290,2085,412,800],[1893,0,531,767],[0,2941,302,291],[0,1417,1288,720],[0,0,1891,1415],[413,2139,539,575],[413,2716,539,575],[1893,769,539,575],[1290,1417,675,666]]}
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



(lib.arequipeasustadaai = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arequipecongeladaaiActivos = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arequipeseriaai = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jesuscalvodemonioaiActivos = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.libroconfundidoai = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.libroenojadoai = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.librosorprendidoai = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Perezaai = function() {
	this.initialize(ss["dialogos 5_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.avanzar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("botones");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.flash0ai();
	this.instance.setTransform(0,0,0.3158,0.301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.4,87.6);


// stage content:
(lib.dialogos5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,5,13];
	// timeline functions:
	this.frame_0 = function() {
		playSound("cinematicdramatic11120");
		this.stop();
		
		var dialogo = 1;
		this.avanzar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(dialogo);
			dialogo++;
		}
	}
	this.frame_5 = function() {
		playSound("braamclassicsatellitegcinematictrailersoundeffects123877wav");
	}
	this.frame_13 = function() {
		this.avanzar.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("Nivel 5 calvo.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(8).call(this.frame_13).wait(1));

	// Capa_1
	this.avanzar = new lib.avanzar();
	this.avanzar.name = "avanzar";
	this.avanzar.setTransform(624.1,619.5);
	new cjs.ButtonHelper(this.avanzar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.avanzar).wait(14));

	// dialogo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABDCOQgIgGgFgMIgDgJIgDgPIgBgOIgCgKQgMADgNABQgNABgMAAIgTAAQgJAAgJgBIgDAIIgEAMIgCAJQAAAPgLAKQgKAKgPABQgLgBgJgGQgKgGgEgLQgCgFAAgGIAAgLQABgHAFgNIAKgdIALgdIAHgTQANgeAPgeQAQgeAUgbQAKgOAOgJQANgJARgBQAOABAKAGQAKAGAHALQAIAKAEAMIAFARIAGAaIAGAdIAGAbIADAQIAGAnIAGAoIACAKIACAKIgBAJIgEAJQgEAIgIAFQgJAGgJAAQgNAAgJgHgAACgYQgIARgHAQIAIAAIAMAAIAJAAIAJgCIAIgBIgGgeIgHggQgKAQgIAQg");
	this.shape.setTransform(475.8375,413.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhCCMQgLgBgHgHQgIgGgEgKQgEgJABgLQACgJAGgIIALgQIAxhAQAZggAWgiIgIABIgNABIgNACIgIAAIgTABQgKAAgIgEQgMgFgGgJQgGgKAAgLQABgMAIgKQAEgEAFgEQAGgDAGgBQAGgBAGABQAGABAGAAIAqgFQAWgBAVACQAJACAIADQAIADAGAGQAFAEADAFQAEAFACAGQADAHAAAIQABAIgCAHQgDAMgFAKIgMAVQgQAXgRAVIghAtIAUgCIAVgBQALAAAKAGQAJAHAEAKQADAKgBAJQgCAKgGAHQgGAHgJAEIgJACIgJAAQgXABgXAEIgsAHIgNABIgGAAIgGAAg");
	this.shape_1.setTransform(451.9358,412.7094);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_2.setTransform(432.1233,412.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCIgVgBIAAAeg");
	this.shape_3.setTransform(411.7391,412.1941);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQQAEAAADgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_4.setTransform(391.5233,412.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AhLCEQgIgGgFgKQgEgLAAgMIAAgMIABgNQABgbgBgaIgBg0IAAgLIAAgRIgBgLIgBgHIgBgIIABgGIACgKIACgGQACgIAGgFQAFgGAIgDQAHgDAIAAIAEAAIAEAAIANAAIAMAAQAVgBAUAFQAVAEATAKQAOAJAJAOQAKAOADAQQABAJgBAKQgBAKgDAJQgGATgOAPQgNAPgRAMQgRANgRAIQgHADgGABQgHABgHgBIAAAOIgBAOIABABIABACQAEAMgEAMQgEAMgJAHQgKAIgNAAQgMAAgJgHgAgUg5IAAARIABARIAAAKIABAAIABgBQALgFAIgHQAJgGAHgJIAFgHQACgFAAgDIgCgBIgBgBQgGgEgIgCIgOgCIgPgBIABAKg");
	this.shape_5.setTransform(371.395,412.8625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgLAIgIQAIgJALgFQALgFAKgBQAVAAAOANQAPANACAWQABALgDALQgEAKgHAJQgHAIgKAGQgJAGgLABIgFABQgKAAgJgEg");
	this.shape_6.setTransform(513.5174,551.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZBlIgtg/IgRgBIgRgBIABA5IABA6IggABIggACIgEkuQAbgHAZgFQAagEAWAAQAYAAAWAGQAVAGAQAMQAQANAJATQAJAUAAAbQAAAhgNAVQgOAUgWALIBJBiIgYAVIgaAWIguhAgAgihoIgWADIACBSIAMABIAMAAQAeAAAQgJQAQgKADgWQADgWgOgLQgOgLgXgCIgVABg");
	this.shape_7.setTransform(494.975,541.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgliYIBCAAIAJEwIgfAAIggAAg");
	this.shape_8.setTransform(474.6,541.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhvCVIgggCIADiSIAEiRIAogDIAogCIA4C9IA5i4IAogDIApgCIADCRIADCSIggACIggACIgCizIgYBNIgZBNIgdgBIgdgBIgwiYIgCC3IgggBg");
	this.shape_9.setTransform(452.375,542.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZBlIgtg/IgRgBIgRgBIABA5IABA6IggABIggACIgEkuQAbgHAZgFQAagEAWAAQAYAAAWAGQAVAGAQAMQAQANAJATQAJAUAAAbQAAAhgNAVQgOAUgWALIBJBiIgYAVIgaAWIguhAgAgihoIgWADIACBSIAMABIAMAAQAeAAAQgJQAQgKADgWQADgWgOgLQgOgLgXgCIgVABg");
	this.shape_10.setTransform(425.225,541.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag2COQgYgOgPgXQgQgWgHgdQgIgbABgcQAAgeAJgcQAIgbAPgWQAQgVAYgOQAXgNAeAAQAgAAAXANQAXAOAPAWQAQAXAHAdQAHAcgBAcQAAAcgIAcQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhXQgLAHgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAPQAHAOAMAKQALAJARADIAFAAQANAAAKgHQAKgHAHgLQAIgMAEgPQAEgOABgQQABgQgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLAAgKAGg");
	this.shape_11.setTransform(398.3751,541.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhnCZIgIksIALgBIAXgDIAdgEIAbgBIAHAAQAZACAXAJQAWAKARARQAQARALAZQAKAZACAjIAAAVIgCAVQgEAegNAYQgOAZgTAQQgUARgZAJQgZAKgdAAgAgihiIgQACIAHC+IAEAAIAEABQAWAAAPgIQAQgIAKgNQALgPAFgTQAFgTAAgXQgBgpgRgYQgRgYgiAAIgOABg");
	this.shape_12.setTransform(372.475,541.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAdQAAAcgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAKARACIAFAAQANABAKgIQAKgHAHgLQAIgLAEgPQAEgPABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_13.setTransform(904.3251,474.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhnCZIgIkrIALgCIAXgDIAdgDIAbgCIAHAAQAZACAXAKQAWAIARASQAQARALAZQAKAZACAiIAAAWIgCAVQgEAegNAYQgOAYgTARQgUASgZAIQgZAKgdAAgAgihiIgQABIAHC/IAEAAIAEABQAWAAAPgIQAQgHAKgPQALgOAFgTQAFgTAAgXQgBgogRgZQgRgYgiAAIgOABg");
	this.shape_14.setTransform(878.425,474.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_15.setTransform(855.575,474.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgyCOQgVgJgOgSQgOgSgHgYQgGgYABgeIAGinIA9gDIgBBXIgCBVQgBAgAKAOQAKAPAXADIAEAAIACAAQATAAALgPQAMgPAAggIADhXIAChYIBBADIgCBYIgDBWQAAAdgIAXQgIAYgOARQgOARgUAJQgUAJgYAAQgdgBgVgKg");
	this.shape_16.setTransform(832.6933,475.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhsiPQAZgHAYgDQAYgFAVAAQAaAAAXAHQAXAGAQANQARANAJAVQAJATAAAcQAAAegKAVQgKAVgRAOQgSAOgXAGQgXAHgaAAQgMAAgLgBIABBeIggACIggACgAgchiIgQABIACBmIAGABIAFAAQAOgBANgCQAMgCALgFQALgGAHgKQAIgLACgSQACgVgNgNQgOgNgWgCIgHgBIgHAAIgOABg");
	this.shape_17.setTransform(809.225,474.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg4gJIBgkyIAhACIAhADIBYEoIghAGIggAIgAgfAxIAfgEIAggEIgbhrg");
	this.shape_18.setTransform(770.95,474.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAACZIgfgBIADh2IhbiaIA2ghIBBB8QARgcAQghQARggARgdIA1AgQgWAkgWAoQgVApgWAjIgDB5IgegBg");
	this.shape_19.setTransform(747.425,474.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcCeQgRgDgPgFQgPgGgOgKQgNgJgJgNIARgYIARgXQAPATAUAGQAUAHAWAAQAYgBANgMQANgMgEgQQgCgLgMgHQgLgHgQgGIghgMQgRgHgPgJQgOgLgJgPQgKgRABgXQABgYAJgQQAJgRAOgLQAPgLASgFQASgGATABQAYgBAYAJQAYAJARAQIgkA1QgKgLgMgGQgNgHgNgCIgGgBIgGAAQgOAAgKAHQgLAHgBAOQAAAHADAFQAEAFAGAEQAGADAJADIARAHIAiANQASAGAPAMQAOAJAKARQAJAQgBAZQgCAZgJASQgKASgPAMQgPAMgTAGQgTAHgVAAQgOAAgQgBg");
	this.shape_20.setTransform(709.955,474.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAdQAAAcgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAKARACIAFAAQANABAKgIQAKgHAHgLQAIgLAEgPQAEgPABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_21.setTransform(685.1251,474.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhriHIA8gXIBeC1IgHiqIAggBIAggCIAEEvIg4ABIhgivIACBVIACBYIhBAHg");
	this.shape_22.setTransform(659.575,474.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_23.setTransform(637.125,474.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhvCVIgggBIADiTIAEiRIAogDIAogCIA4C9IA5i4IAogDIApgCIADCSIADCRIggACIggACIgCizIgYBNIgZBOIgdgBIgdgCIgwiYIgCC3IgggBg");
	this.shape_24.setTransform(611.025,474.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhbiWIAggBIAgAAIgCDyIB7gDIgCAgIgCAfIi3ABg");
	this.shape_25.setTransform(571.65,474.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg5gJIBikyIAgACIAhADIBYEoIghAGIgfAIgAggAxIAggEIAhgEIgchrg");
	this.shape_26.setTransform(548.95,474.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABhAuQgIgEgGgHQgHgGgEgJQgEgHgBgIQgBgKADgJQAEgJAHgIQAHgHAKgFQAJgFAJgBQASAAANANQANAMABARQABAKgDAJQgEAKgGAHQgGAIgIAGQgIAFgJABIgCAAIgDAAQgIAAgHgDgAgQAuQgIgEgGgHQgGgGgEgJQgEgHgBgIQgBgKADgJQAEgJAHgIQAHgHAJgFQAJgFAJgBQASAAANANQAMALABASQABAKgDAJQgEAKgGAHQgGAIgHAGQgIAFgJABIgCAAIgCAAQgIAAgIgDgAiCAuQgHgEgHgHQgGgGgEgJQgDgHgBgIQgCgKAEgJQAEgJAHgIQAHgHAJgFQAJgFAJgBQATAAAMANQAMALABASQABAKgDAJQgDAKgGAHQgGAIgIAGQgIAFgJABIgCAAIgDAAQgIAAgIgDg");
	this.shape_27.setTransform(504.24,485.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAdQAAAcgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAKARACIAFAAQANABAKgIQAKgHAHgLQAIgLAEgPQAEgPABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_28.setTransform(473.1751,474.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhriHIA8gXIBeC1IgHiqIAggBIAggCIAEEvIg4ABIhgivIACBVIACBYIhBAHg");
	this.shape_29.setTransform(447.625,474.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_30.setTransform(425.175,474.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgyCOQgVgJgOgSQgOgSgHgYQgGgYABgeIAGinIA9gDIgBBXIgCBVQgBAgAKAOQAKAPAXADIAEAAIACAAQATAAALgPQAMgPAAggIADhXIAChYIBBADIgCBYIgDBWQAAAdgIAXQgIAYgOARQgOARgUAJQgUAJgYAAQgdgBgVgKg");
	this.shape_31.setTransform(402.2933,475.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ah5DBIgLl3IAcgCIAhgFIAlgDIAhgCQAZAAAVAEQAWAFAPAKQAQAKAIARQAJAQAAAYQAAAcgNAXQgMAYgcAQQATAIAOAJQANALAJAMQAIAMAEANQAEANAAAMQgBAWgLAWQgLAWgXARQgXARgiALQggALguAAgAg9AaIADBqIAOABIAJAAIAEAAQAXAAAQgFQARgFAMgJQALgJAGgLQAGgLAAgLQABgTgOgRQgOgRgbgJgAgaiJQgQACgWAGIACBeQAggEAVgHQAVgGANgJQANgIAFgMQAFgKAAgMQAAgQgKgKQgKgKgbAAQgKAAgRACg");
	this.shape_32.setTransform(375.025,470.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").p("ASfDkMgk9AAAIAAnHMAk9AAAg");
	this.shape_33.setTransform(443.6399,414.5838,0.9006,0.9972);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000A0F").s().p("AyeDkIAAnHMAk9AAAIAAHHg");
	this.shape_34.setTransform(443.6399,414.5838,0.9006,0.9972);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").p("EA4HANTMhwNAAAIAA6lMBwNAAAg");
	this.shape_35.setTransform(660.5504,522.234,0.9006,0.9972);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0F7F9").s().p("Eg4GANTIAA6lMBwNAAAIAAalg");
	this.shape_36.setTransform(660.5504,522.234,0.9006,0.9972);

	this.instance = new lib.Perezaai();
	this.instance.setTransform(926,181,0.5752,0.8087);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009900").s().p("Ag3B5QgUgMgMgWQgLgVgFgdQgCgRAAgRQAAgRACgSQABgMAEgNQADgOAGgMQAGgMAIgKIALgLIAPgKQAIgEAHAAIAKABIAIADIAJgEQAFgCAEAAQATAAAQAIQAQAIAMANQARATALAWQALAVACAaQABALgBAKIgDAVQgDAVgJATQgJATgPAPQgOAPgTAIQgSAJgVAAQgeAAgUgMgAgNhAIgBABIgEACIgDADQgEAHgCAJIgEARQgDAPAAAQQABAQADAPQACAMAGAGQAFAGAMAAQAHAAAGgEQAHgEAFgHIAHgNQAEgKACgMIABgWIgBgFIgBgHIgCgEIgJgQIgMgOQgCgCgDgBIgFgBIgFgBIgGgDIgBABg");
	this.shape_37.setTransform(453.225,412.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009900").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCQgLgBgKAAIAAAeg");
	this.shape_38.setTransform(430.8391,412.1941);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AhRCQQgKgFgFgJQgDgGgCgGIgBgMIAAgQIAAgZIAAgeIAAgaIAAgOIABgmIAAglQgBgIACgIQADgJAFgFIAHgHIAHgEIACgBIACAAQALgIANgFQANgFANgDIAPgDIAOgCQAMAAAMACQANADALAGIAOAJQAGAGAFAGQAGAIADAIQAEAIACAJIABAMIgBALQgBAPgHAOQgGAPgKALIAKAGIAJAIQAJANAEAOQAEAOgDAPQgCAMgGALQgGALgJAJQgIAIgJAGQgJAGgKADIgTAGIgTAFIgIABIgKAAIgQABIgPgBIgIAEIgIACIgCAAQgLAAgIgFgAAEA1IgFAAIgJABIgFACIgIACIgHACIAAAMQAKAAAKgBIASgEIAEgBIAFgCIAEgBIAFgEIAEgEQgGgCgHAAIgGAAIgHAAgAAEhLIgRADIgOAFIgBACIgBABIAAAXIgBAXIARgLIAQgMIAKgKQAFgFADgHIABgEIAAgFIgCgBIgCgBQgEgCgFAAIgFABg");
	this.shape_39.setTransform(408.3231,411.9231);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009900").s().p("AAACXIgggBIgIgBIgIgBQgMgFgGgJQgGgJAAgLQAAgLAGgJQAGgJAMgFQACgBAEAAIAGgBIgBgPIAAgYIgBgZIAAgOIAAglIAAglQgHAAgHgDQgHgDgFgFQgIgJgCgKQgCgLAEgJQAEgKAJgGQAJgGAMAAIAagBIAZgBIAIgBIAMgBIAHgBQAMABAIAFQAJAGAEAJQAEAJgBALQgBAKgHAJIgHAGIgIAEIgKACIgKABIAAAgIAAAgIAAANIAAAWIABAZIAAAWIABAOQAKACAGAIQAHAHACALQABAHgCAIQgCAIgFAGQgEAFgGADQgFAEgHAAIgQABIgOgBg");
	this.shape_40.setTransform(388.0983,413.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AgpCLQgIgCgHgEQgHgDgFgGQgGgGgDgHQgGgKgDgMQgCgMAAgMQAAgfAEgfIAHg9IABgRIgBgSIAAgLIACgLQACgGAEgFQAFgFAFgEQAFgDAHgBIAMgBIAJADIAIAFQAFAEADAGQADAFACAGQABADgBAEIAAAHIAAARIAAAQIgEAsIgFArQgDAWABAWIAigFIAigFIAHABIAGABQAHACAGAGQAFAGADAIQADAHAAAIQgBAHgCAFQgDAGgFAFQgEAEgFACQgFADgFABIgRACIgaAEIgZAEIgQACIgDAAQgHAAgGgCg");
	this.shape_41.setTransform(370.4536,413.0217);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag2DLQgYgOgPgXQgQgWgHgdQgIgbABgdQAAgeAJgcQAIgaAPgWQAQgVAYgOIANgGIADAEIAKgIIgKAIIgDgEIANgEIgNAEIgOgUIgRgXIBdhWIAvA2Ig1AnIgrAgQANgDAOAAQAgAAAXANQAXAOAPAWQAQAXAHAcQAHAcgBAdQAAAcgIAcQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVgaQgLAHgIALQgHALgFAOQgFAPgCAQQgBARACARQACARAGAPQAHAOAMAKQALAJARADIAFAAQANAAAKgHQAKgHAHgLQAIgMAEgPQAEgOABgQQABgRgCgRQgDgRgGgOQgGgNgLgKQgKgJgOgDIgIAAQgLAAgKAGg");
	this.shape_42.setTransform(468.8751,535.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhiCaIgJkrIAPgBIAdgDIAigEIAcgCQAUAAASAEQASAEAMAIQANAJAHAOQAHANAAAVQAAAWgJARQgJARgQANQAYALAMATQANATgBAWQgBASgJARQgJASgSAOQgSAOgcAIQgaAJgkAAgAgpAbIACBFIAJABIAIAAQAJAAALgCQAKgCAJgEQAJgFAHgIQAGgHACgLQABgNgJgNQgJgMgTgGQgWAIgYAFgAgshfIACA+QAVgCAPgFQANgEAJgHQAJgGADgHQAEgIAAgIQAAgKgHgGQgHgGgRAAQgPAAgeAHg");
	this.shape_43.setTransform(443.3787,541.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAxBpIhlAFIgQAwIg5gJIBhkyIAhACIAhADIBXEoIgfAGIghAIgAgfAxIAfgEIAggEIgbhrg");
	this.shape_44.setTransform(419.3,542.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAKCgQgVAAgUgJQgVgIgQgSQgQgRgKgcQgKgbAAglQAAgsAKgfQAKghARgWQAQgVAWgMQAWgLAWgBQAaAAAVAHQAWAHAVAQIgjA3QgKgLgLgGQgLgEgMAAQgTgBgNAMQgOALgJAQQgJARgEATQgEAUAAAOQAAAWAFAPQAFAPAIALQAHAKAKAFQAKAFAKABQAjAAAWgcIAeAxQgPASgVAMQgUALgXABg");
	this.shape_45.setTransform(396.575,541.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg4gJIBhkyIAgACIAhADIBYEoIghAGIgfAIgAggAxIAggEIAggEIgbhrg");
	this.shape_46.setTransform(372.8,542.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgliYIBCAAIAJEvIgfABIgfAAg");
	this.shape_47.setTransform(718.5,474.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag8CYIgfgBIADiXIAEiYICwAEIgCAdIgCAdIhvgEIgCBUIBZAEIgEA6IhXgEIgBA0IgBA1IgfgBg");
	this.shape_48.setTransform(703.125,474.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAXCIIgLACIgLAAQgcAAgXgMQgWgMgQgTQgPgTgJgYQgJgZgCgaQgDgfAHgfQAHggAQgZQAPgZAZgQQAZgQAgAAQAdAAAVALQAWALAPASQAPASAJAXQAJAZACAZQACAUgCAVQgCATgGAUQgGATgJAQQgKAPgNAMIAjAfIgXAYIgWAWgAgWhpQgKAGgIALQgIAMgEAOQgFAPgCAQQgCASACAPQACARAHAPQAHAOALAKQAMAKAQADIAFAAQANAAALgHQAKgHAHgMQAHgLAEgPQAFgPABgPQABgRgDgQQgCgSgGgOQgHgNgKgKQgKgKgPgDIgHAAQgMAAgKAHg");
	this.shape_49.setTransform(530.1526,476.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAKCgQgVAAgUgIQgVgJgQgRQgQgTgKgbQgKgbAAglQAAgsAKggQAKggARgWQAQgWAWgLQAWgKAWgCQAaAAAVAHQAWAHAVAQIgjA3QgKgMgLgEQgLgGgMAAQgTABgNAKQgOAMgJAQQgJARgEATQgEATAAAPQAAAWAFAOQAFAQAIAKQAHALAKAFQAKAGAKAAQAjAAAWgbIAeAwQgPASgVALQgUAMgXABg");
	this.shape_50.setTransform(471.375,474.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_51.setTransform(449.275,474.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg4gJIBhkyIAgACIAhADIBYEoIghAGIgfAIgAggAxIAggEIAggEIgbhrg");
	this.shape_52.setTransform(401.7,474.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AiGi0QA8gSA3ABQAgAAAdAHQAcAIAVAQQAVAQAMAZQALAYAAAjQAAAigLAaQgLAYgVASQgTARgbAKQgbAIgeACIgYAAIgagCIACB7IgjADIgiACgAgmiHIgaADIACCSIAJAAIAKAAQATAAATgDQATgDAOgIQAQgIAKgQQALgOACgYQADgSgGgOQgFgNgLgJQgLgJgQgGQgQgEgSgBIgZABg");
	this.shape_53.setTransform(375.25,470.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#993300").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_54.setTransform(520.9733,412.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#993300").s().p("AhLCEQgIgGgFgKQgEgLAAgMIAAgMIABgNQABgbgBgaIgBg0IAAgLIAAgRIgBgLIgBgHIgBgIIABgGIACgKIACgGQACgIAGgFQAFgGAIgDQAHgDAIAAIAEAAIAEAAIANAAIAMAAQAVgBAUAFQAVAEATAKQAOAJAJAOQAKAOADAQQABAJgBAKQgBAKgDAJQgGATgOAPQgNAPgRAMQgRANgRAIQgHADgGABQgHABgHgBIAAAOIgBAOIABABIABACQAEAMgEAMQgEAMgJAHQgKAIgNAAQgMAAgJgHgAgUg5IAAARIABARIAAAKIABAAIABgBQALgFAIgHQAJgGAHgJIAFgHQACgFAAgDIgCgBIgBgBQgGgEgIgCIgOgCIgPgBIABAKg");
	this.shape_55.setTransform(500.845,412.8625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#993300").s().p("AAACXIgggBIgIgBIgIgBQgMgFgGgJQgGgJAAgLQAAgLAGgJQAGgJAMgFQACgBAEAAIAGgBIgBgPIAAgYIgBgZIAAgOIAAglIAAglQgHAAgHgDQgHgDgFgFQgIgJgCgKQgCgLAEgJQAEgKAJgGQAJgGAMAAIAagBIAZgBIAIgBIAMgBIAHgBQAMABAIAFQAJAGAEAJQAEAJgBALQgBAKgHAJIgHAGIgIAEIgKACIgKABIAAAgIAAAgIAAANIAAAWIABAZIAAAWIABAOQAKACAGAIQAHAHACALQABAHgCAIQgCAIgFAGQgEAFgGADQgFAEgHAAIgQABIgOgBg");
	this.shape_56.setTransform(481.4983,413.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#993300").s().p("AgWCGQgJgBgJgFQgJgEgHgGIgGgFIgHgIIgFgFQgMgPgGgTQgGgSgCgTIgBgYIAAgWIAAgUIAAgUIABgJIAAgPIABgOIABgJIABgGIADgGQACgEAEgDIAHgGIAJgEIAKgBIAGAAIAGABQAGACAFAFQAFAEADAFQAEAFAAAHIABAMIgBACIAAABIgCAkQgBASABASIAAAdQABAPAEAOIACAIIADAHIADADIADACIACACIACACIACAAIACAAIAGgFIAGgGQAGgJAFgKIAIgTQADgNABgNQABgOgCgOIgBgJIgBgOIgCgPIgCgJIgBgIIACgJQAEgNAJgGQAJgHALgBQALAAAKAGQAKAFAFANQACAIABAIIABAPIADAYQACALAAAMQAAAOgBAOQgBAOgDAOQgFAQgHAQQgHAPgJAOQgJAOgNAMQgOALgPAGQgKADgJABIgEAAQgJAAgIgCg");
	this.shape_57.setTransform(461.8083,412.8925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#993300").s().p("AA5CfIgGgBQgRgIgOgNQgOgNgIgRQgPAAgPgDQgPgEgMgJIgFgDIgFgEQgPgOgIgTQgIgTgDgVQgCgQAAgSQAAgRACgSQABgMAEgNQADgOAGgMQAGgMAIgLIALgLQAHgFAIgEQAIgEAHAAIAKABIAIADIAJgEQAFgDAEAAQATABAQAHQAQAJAMANQARATALAVQALAWACAaQABALgBALIgDAUQgDAXgKATQgKAUgQAPIAEAFIAFAFIAEACIAFACQAKAGAEAKQAFALgCAKQgCAOgLAIQgKAJgNAAIgGgBgAgNhaIgBABIgEACIgDADQgEAHgCAIIgEARQgDARAAAQQABAPADAPQACALAGAHQAFAGAMAAQAHAAAGgFQAHgEAFgGQAEgGADgHQAEgJACgMIABgXIgBgFIgBgGIgCgFIgJgQIgMgOQgCgCgDgBIgFgBIgFgCIgGgCIgBABg");
	this.shape_58.setTransform(438.425,414.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#993300").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_59.setTransform(417.8233,412.15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#993300").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCQgLgBgKAAIAAAeg");
	this.shape_60.setTransform(397.4391,412.1941);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#993300").s().p("ABDCOQgIgGgFgMIgDgJIgDgPIgBgOIgCgKQgMADgNABQgNABgMAAIgTAAQgJAAgJgBIgDAIIgEAMIgCAJQAAAPgLAKQgKAKgPABQgLgBgJgGQgKgGgEgLQgCgFAAgGIAAgLQABgHAFgNIAKgdIALgdIAHgTQANgeAPgeQAQgeAUgbQAKgOAOgJQANgJARgBQAOABAKAGQAKAGAHALQAIAKAEAMIAFARIAGAaIAGAdIAGAbIADAQIAGAnIAGAoIACAKIACAKIgBAJIgEAJQgEAIgIAFQgJAGgJAAQgNAAgJgHgAACgYQgIARgHAQIAIAAIAMAAIAJAAIAJgCIAIgBIgGgeIgHggQgKAQgIAQg");
	this.shape_61.setTransform(373.1375,413.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgliYIBCAAIAJEvIgfABIggAAg");
	this.shape_62.setTransform(456.7,474.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhDADIgBghICJgGIgBAjIgBAjIhDACIhDABIAAgig");
	this.shape_63.setTransform(407.425,474.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgliYIBCAAIAJEvIgfABIggAAg");
	this.shape_64.setTransform(392,474.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ahvi8IAjgBIAiAAIgDE7ICggEIgCAiIgBAhIjiABg");
	this.shape_65.setTransform(373.2,471);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6600CC").s().p("Ag3B5QgUgMgMgWQgMgVgEgdQgCgRAAgRQgBgRADgSQABgMAEgNQADgOAGgMQAGgMAIgKIALgLQAHgGAIgEQAIgEAHAAIAJABIAJADIAJgEQAFgCAEAAQASAAARAIQAQAIAMANQARATALAWQALAVACAaIAAAVIgDAVQgDAVgJATQgJATgPAPQgOAPgTAIQgSAJgVAAQgeAAgUgMgAgNhAIgBABIgEACIgDADQgEAHgDAJIgEARQgCAPAAAQQABAQADAPQACAMAGAGQAFAGAMAAQAHAAAGgEQAHgEAFgHIAHgNQAEgKACgMQABgLAAgLIgBgFIgBgHIgCgEIgKgQIgLgOQgCgCgDgBIgFgBIgFgBIgGgDIgBABg");
	this.shape_66.setTransform(459.5083,412.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6600CC").s().p("AgcCJQgJgEgHgFIgKgMIgIgOIgFgSIgHgcIgHgbIgFgSIgHglIgHgnIgDgUQAAgKABgKQADgOAKgKQAKgJAOgBQAKAAAIAGQAIAEAGAJIADAIIABAKIAAAHIgBAHIABAJIACAOIADAOIABAJIAJArIALArQAFgNAFgOQAFgOAEgNIADgOIAFgWIAFgXIADgOIgBgBIAAgBQgCgMAFgKQAFgKAJgGQAJgGAKAAQANABAIAGQAJAIAFAKQACAIAAAIIgBAOIgDAPIgFAVIgEAXIgDANIgJAfQgGASgIATQgJATgLARQgLARgOAKQgOAKgPAAQgJAAgKgCg");
	this.shape_67.setTransform(436.4438,412.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6600CC").s().p("AgpCLQgIgCgGgEQgMgGgHgLQgIgMgDgNQgDgNAAgNQAAgfAEgfIAHg9IABgRIgBgSIABgLIABgLQAEgLAKgHQAKgHAMAAQAGAAAFACIALAGQAFAEADAGQADAFABAGIABAHIgBAHIABARIAAAQIgFAsIgFArQgCAWAAAWIAigFQARgDASgBIAGAAIAGABQAHACAGAGQAFAGADAIQADAHAAAIQgBAIgEAHQgEAHgGAFQgHAFgIABIgQACIgbAEIgZAEIgQACIgDAAQgHAAgGgCg");
	this.shape_68.setTransform(417.8786,413.03);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6600CC").s().p("ABDCOQgIgGgGgMIgCgJIgCgPIgCgOIgCgKQgMADgNABQgNABgMAAIgSAAQgKAAgJgBIgDAIIgEAMIgCAJQgBAPgJAKQgLAKgPABQgMgBgJgGQgJgGgEgLIgCgLIABgLQAAgHAEgNIAKgdIAMgdIAIgTQAMgeAQgeQAPgeAVgbQAJgOAOgJQANgJARgBQANABALAGQALAGAGALQAIAKAEAMIAFARIAGAaIAHAdIAEAbIAEAQIAGAnIAGAoIACAKIACAKIgBAJIgDAJQgFAIgIAFQgJAGgJAAQgNAAgJgHgAACgYIgPAhIAIAAIAMAAIAJAAIAIgCIAJgBIgGgeIgGggIgTAgg");
	this.shape_69.setTransform(394.2,413.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6600CC").s().p("Ag8CFQgUgPgJgbQgGgQgBgTQAAgRABgTQADgUAFgWQAFgUAHgVQAFgOAIgOQAIgPALgMQALgOAOgHQAOgIAPgBQARABAPAJQAOAJAJAOQAJAOABASQABAGgCAGIgCANQgBAHgFAHQgFAGgGAFQgEACgEACIgKABIgJgBIgJgEQgHgEgFgHQgEgHgCgJQgIAPgGAUQgGATgDATQgDAUAAAQQAAAHABAGQABAHAEAEIACADIAEAAIAJgDIAHgFQAIgHAIgHQAHgIAGgJQAEgFAIgEQAHgEAHABQANgBAJAGQAIAGAGALIACAJIgBAKQgBAHgFAJQgGAJgIAIIgQAQIgNALQgHAFgLAFQgKAGgLADQgKADgKAAQgcAAgUgPg");
	this.shape_70.setTransform(371.0188,413.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJCwQgNAAgIgDQgJgFgFgGQgGgGgCgIQgDgIABgKQAAgIADgJQADgIAFgHQAFgGAIgEQAHgEAJAAQATAAANANQANAOABATQABAJgCAIQgDAIgFAGQgFAHgHAEQgIAEgKAAgAgmAwQAGgVALgQIAVgeQALgOAIgNQAIgNAAgNQACgTgMgMQgLgLgUAAQgPAAgOAFQgPAGgNAGIgTg4QAVgLAWgGQAWgFAUAAQATgBARAHQASAGANAMQANALAIASQAIASAAAWQAAAWgJAUQgIASgMARQgMAQgMAOQgMAPgIAPg");
	this.shape_71.setTransform(893.025,525.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgtAQIACBzIgcACIgcABIgCiFIgCiEIA4gEIABBzIBch7IAuAfIhTBpIBfBxIgrAmg");
	this.shape_72.setTransform(874.775,529.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgvB9QgVgNgOgTQgNgUgHgZQgHgZABgYQAAgaAIgZQAHgYAOgTQAOgTAUgMQAVgLAaAAQAcAAAUAMQAVAMANAUQAOATAGAZQAGAZAAAZQgBAZgGAYQgHAZgNATQgNAUgUAMQgVAMgcAAQgbgBgVgMgAgThMQgJAGgGAKQgHAJgEAOQgFAMgBAPQgCANACAQQACAPAGAMQAGANAKAIQAKAJAPACIAEABQALAAAJgHQAJgGAHgKQAGgKAEgNQAEgNAAgOQABgOgCgPQgCgPgGgMQgFgMgJgJQgJgJgNgCIgHAAQgKAAgJAGg");
	this.shape_73.setTransform(851.4483,529.525);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgvB9QgVgNgOgTQgNgUgHgZQgHgZABgYQAAgaAIgZQAHgYAOgTQAOgTAUgMQAVgLAaAAQAcAAAUAMQAVAMANAUQAOATAGAZQAGAZAAAZQgBAZgGAYQgHAZgNATQgNAUgUAMQgVAMgcAAQgbgBgVgMgAgThMQgJAGgGAKQgHAJgEAOQgFAMgBAPQgCANACAQQACAPAGAMQAGANAKAIQAKAJAPACIAEABQALAAAJgHQAJgGAHgKQAGgKAEgNQAEgNAAgOQABgOgCgPQgCgPgGgMQgFgMgJgJQgJgJgNgCIgHAAQgKAAgJAGg");
	this.shape_74.setTransform(827.5483,529.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhQiEIAcgBIAcAAIgBDVIBsgCIgCAbIgBAcIiiABg");
	this.shape_75.setTransform(806.975,529.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgvB9QgVgNgOgTQgNgUgHgZQgHgZABgYQAAgaAIgZQAHgYAOgTQAOgTAUgMQAVgLAaAAQAcAAAUAMQAVAMANAUQAOATAGAZQAGAZAAAZQgBAZgGAYQgHAZgNATQgNAUgUAMQgVAMgcAAQgbgBgVgMgAgThMQgJAGgGAKQgHAJgEAOQgFAMgBAPQgCANACAQQACAPAGAMQAGANAKAIQAKAJAPACIAEABQALAAAJgHQAJgGAHgKQAGgKAEgNQAEgNAAgOQABgOgCgPQgCgPgGgMQgFgMgJgJQgJgJgNgCIgHAAQgKAAgJAGg");
	this.shape_76.setTransform(773.4483,529.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AghCGIgmiEIgliDIAbgDIAbgDIA4DEIAahhIAZhiIAcAGIAbAEIhCEEg");
	this.shape_77.setTransform(751.2,529.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhMiKICaAEIgBAZIgBAYIhkgEIgBA6IBQgEIABAaIACAZIhVAFIgBA9IBqgGIADAbIACAdIhTADIhSAEg");
	this.shape_78.setTransform(731.9,529.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgsB9QgTgIgMgQQgMgPgGgWQgGgVABgaIAGiUIA1gCIgBBMIgCBLQgBAcAJANQAJANAUACIAEABIABAAQARAAAKgOQAKgNABgcIAChMIAChNIA5ACIgCBNIgCBMQAAAZgHAVQgHAVgMAOQgNAPgRAIQgSAIgVAAQgZAAgTgJg");
	this.shape_79.setTransform(711.7673,529.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("Aheh2IA1gVIBSCfIgFiVIAbgBIAdgCIADEKIgxACIhVibIACBMIACBNIg5AGg");
	this.shape_80.setTransform(690.275,529.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggiFIA6AAIAHEKIgcABIgbAAg");
	this.shape_81.setTransform(661.15,529.525);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhiCDIgcgBIADiBIADiAIAkgCIAjgCIAxCnIAyijIAkgCIAjgCIADCAIADB/IgcADIgdACIgBieIgWBEIgWBEIgZgBIgagBIgqiGIgBChIgdgBg");
	this.shape_82.setTransform(641.625,529.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_83.setTransform(604.875,529.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFCGIgbgBIAEjVIhBADIAEg6IBbADIBcADIgEA2IhAgCIgCBpIgDBrIgagBg");
	this.shape_84.setTransform(585.625,529.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAIgbgBg");
	this.shape_85.setTransform(566.2056,529.525);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgsB9QgTgIgMgQQgMgPgGgWQgGgVABgaIAGiUIA1gCIgBBMIgCBLQgBAcAJANQAJANAUACIAEABIABAAQARAAAKgOQAKgNABgcIAChMIAChNIA5ACIgCBNIgCBMQAAAZgHAVQgHAVgMAOQgNAPgRAIQgSAIgVAAQgZAAgTgJg");
	this.shape_86.setTransform(545.4673,529.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgiCCQgUgMgOgRQgNgRgGgYQgHgWAAgYQAAgoALgeQAKgdAQgSQARgTAVgIQAUgJAWAAQAnAAAhAWIgaAwQgKgJgKgEQgLgDgLAAQgNgBgNAHQgMAGgKANQgKALgGATQgGASAAAYQAAAOADAOQAEANAHALQAHAKAMAHQALAHAQAAIAKgCQAGgCAFgDIAFgzIgpgEIAHguIBWAEIgEA7IgFA8QgOATgUAJQgUAJgVAAQgaAAgTgKg");
	this.shape_87.setTransform(524.075,529.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAIgbgBg");
	this.shape_88.setTransform(490.4556,529.525);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhMiKICaAEIgBAZIgBAYIhkgEIgBA6IBQgEIABAaIACAZIhVAFIgBA9IBqgGIADAbIACAdIhTADIhSAEg");
	this.shape_89.setTransform(471.35,529.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhQiEIAcgBIAcAAIgBDVIBsgCIgCAbIgBAcIiiABg");
	this.shape_90.setTransform(453.475,529.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgvB9QgVgNgOgTQgNgUgHgZQgHgZABgYQAAgaAIgZQAHgYAOgTQAOgTAUgMQAVgLAaAAQAcAAAUAMQAVAMANAUQAOATAGAZQAGAZAAAZQgBAZgGAYQgHAZgNATQgNAUgUAMQgVAMgcAAQgbgBgVgMgAgThMQgJAGgGAKQgHAJgEAOQgFAMgBAPQgCANACAQQACAPAGAMQAGANAKAIQAKAJAPACIAEABQALAAAJgHQAJgGAHgKQAGgKAEgNQAEgNAAgOQABgOgCgPQgCgPgGgMQgFgMgJgJQgJgJgNgCIgHAAQgKAAgJAGg");
	this.shape_91.setTransform(419.9483,529.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ah1iXIA5gVIB5DhIgIjYIAegBIAegCIAFFOIgbAAIgaABIh7jYIADBpIADBtIg+AHg");
	this.shape_92.setTransform(394.875,526.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgeCrQgSgHgNgLQgNgMgIgSQgHgSgBgWQABgWAIgUQAJgSALgRQAMgQAMgPQAMgPAIgOIA4AHQgGAUgKARIgXAeIgSAbQgIANgBANQgBATALALQAMAMAUAAQAPAAAOgFQAPgGANgGIASA3QgUAMgXAGQgVAFgUAAQgTAAgRgFgAgRhgQgMgOgDgUQABgHACgJQACgIAEgGQAGgHAIgEQAHgEAKAAIACAAQAMgBAKAEQAIAFAFAGQAGAGACAIQADAJgBAIQAAAJgDAIQgDAJgFAGQgGAHgGAEQgIAEgJAAQgUAAgMgNg");
	this.shape_93.setTransform(376.7,528.85);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AglhGIBLACIgTCKIg2ABg");
	this.shape_94.setTransform(933.375,481.05);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgJCxQgNAAgIgFQgJgEgFgGQgGgGgCgJQgDgIABgIQAAgJADgIQADgJAFgGQAFgHAIgEQAHgEAJAAQATAAANAOQANANABAUQABAHgCAJQgDAIgFAGQgFAGgHAFQgIAEgKABgAgmAwQAGgVALgQIAVgeQALgOAIgNQAIgNAAgNQACgTgMgLQgLgMgUAAQgPAAgOAGQgPAEgNAHIgTg4QAVgMAWgFQAWgGAUAAQATABARAFQASAHANALQANANAIARQAIASAAAWQAAAXgJASQgIAUgMAQQgMAQgMAPQgMAPgIAOg");
	this.shape_95.setTransform(918.075,466.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgvB9QgVgNgOgTQgNgUgHgZQgHgZABgYQAAgaAIgZQAHgYAOgTQAOgTAUgMQAVgLAaAAQAcAAAUAMQAVAMANAUQAOATAGAZQAGAZAAAZQgBAZgGAYQgHAZgNATQgNAUgUAMQgVAMgcAAQgbgBgVgMgAgThMQgJAGgGAKQgHAJgEAOQgFAMgBAPQgCANACAQQACAPAGAMQAGANAKAIQAKAJAPACIAEABQALAAAJgHQAJgGAHgKQAGgKAEgNQAEgNAAgOQABgOgCgPQgCgPgGgMQgFgMgJgJQgJgJgNgCIgHAAQgKAAgJAGg");
	this.shape_96.setTransform(897.9483,470.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgFCHIgbgBIAEjVIhBABIAEg4IBbACIBcADIgEA1IhAgCIgCBqIgDBsIgagBg");
	this.shape_97.setTransform(877.875,470.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAQgNAAgOgBg");
	this.shape_98.setTransform(858.4556,470.175);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgsB9QgTgIgMgQQgMgPgGgWQgGgVABgaIAGiUIA1gCIgBBMIgCBLQgBAcAJANQAJANAUACIAEABIABAAQARAAAKgOQAKgNABgcIAChMIAChNIA5ACIgCBNIgCBMQAAAZgHAVQgHAVgMAOQgNAPgRAIQgSAIgVAAQgZAAgTgJg");
	this.shape_99.setTransform(837.7173,470.575);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAQgNAAgOgBg");
	this.shape_100.setTransform(815.9556,470.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhMiKICbAEIgBAYIgBAZIhlgDIgBA5IBPgEIACAaIACAZIhVAFIgBA+IBrgHIABAcIADAbIhTAFIhSADg");
	this.shape_101.setTransform(784.5,470.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhbCGIgHkHIAKgBIAUgDIAagDIAXgBIAHAAQAWACATAIQAUAIAPAPQAOAPAJAWQAJAXACAeIAAASQAAAKgBAJQgEAagMAWQgLAVgSAPQgRAPgWAIQgWAIgZAAgAgehWIgOABIAGCoIADAAIAEAAQATAAANgGQAOgHAKgNQAJgMAEgRQAFgRAAgUQgBgjgPgWQgPgVgeAAIgMABg");
	this.shape_102.setTransform(764.4125,470.225);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAQgNAAgOgBg");
	this.shape_103.setTransform(730.3556,470.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_104.setTransform(709.775,470.375);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAWBZIgng4IgPAAIgPgCIABAzIABAyIgcACIgdABIgEkJQAYgGAXgEQAWgEAUAAQAVAAATAFQATAFAOALQAOALAIASQAIAQAAAYQAAAdgMATQgMARgUALIBBBVIgWATIgWATIgpg4gAgehcQgHABgMACIABBJIAMABIAKAAQAaAAAOgJQAPgIACgTQACgUgMgKQgMgKgUgBIgTAAg");
	this.shape_105.setTransform(688.425,470.25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_106.setTransform(666.075,470.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAJCNQgSAAgSgIQgSgHgOgQQgPgPgIgYQgJgYAAghQAAgmAJgcQAJgdAOgTQAPgTATgKQATgJATgCQAXAAATAHQATAGASAOIgeAwQgJgKgKgEQgKgFgKAAQgRAAgLAKQgNAKgHAPQgIAOgEARQgDARAAANQAAATAEANQAEANAHAKQAHAJAJAEQAJAFAIABQAfAAATgZIAbArQgOAQgSAKQgSAKgUABg");
	this.shape_107.setTransform(646.075,470.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAQgNAAgOgBg");
	this.shape_108.setTransform(612.7056,470.175);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_109.setTransform(592.125,470.375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAQgNAAgOgBg");
	this.shape_110.setTransform(570.1556,470.175);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhMiKICaAEIAAAYIgBAZIhlgDIgBA5IBPgEIACAaIACAZIhVAFIgBA+IBqgHIACAcIADAbIhTAFIhSADg");
	this.shape_111.setTransform(551.05,470.25);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AhMheIAuABIgKgOIgJgOIBBg9IAhAnIgiAZIgiAZIBhADIgBAYIgBAZIhkgEIgBA5IBQgEIABAaIACAaIhVAFIgBA9IBqgGIACAbIADAcIhTAEIhSAEg");
	this.shape_112.setTransform(520.2,465.875);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgsB9QgTgIgMgQQgMgPgGgWQgGgVABgaIAGiUIA1gCIgBBMIgCBLQgBAcAJANQAJANAUACIAEABIABAAQARAAAKgOQAKgNABgcIAChMIAChNIA5ACIgCBNIgCBMQAAAZgHAVQgHAVgMAOQgNAPgRAIQgSAIgVAAQgZAAgTgJg");
	this.shape_113.setTransform(500.0673,470.575);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAVB4IgKABIgKABQgZgBgUgKQgTgLgOgRQgOgQgHgVQgIgXgCgWQgCgbAFgbQAGgcAOgXQAOgWAWgOQAWgNAcAAQAZgBATAKQATAKAOAPQANARAIAUQAHAVADAWQABATgBARQgCARgFARQgGARgIAOQgIAOgMAKIAfAbIgUAVIgUAVgAgThdQgJAGgHAKQgHAKgEAOQgEAMgCAPQgBAOABAOQACAQAGAMQAGAMAKAJQAKAJAPACIAEABQAMAAAJgHQAJgGAGgKQAHgKADgNQAEgNABgNQABgPgCgPQgDgPgFgNQgGgMgJgIQgJgJgMgCIgHAAQgKAAgJAFg");
	this.shape_114.setTransform(477.1734,471.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAWBZIgng4IgPAAIgPgCIABAzIABAyIgcACIgdABIgEkJQAYgGAXgEQAWgEAUAAQAVAAATAFQATAFAOALQAOALAIASQAIAQAAAYQAAAdgMATQgMARgUALIBBBVIgWATIgWATIgpg4gAgehcQgHABgMACIABBJIAMABIAKAAQAaAAAOgJQAPgIACgTQACgUgMgKQgMgKgUgBIgTAAg");
	this.shape_115.setTransform(442.625,470.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgvB9QgVgNgOgTQgNgUgHgZQgHgZABgYQAAgaAIgZQAHgYAOgTQAOgTAUgMQAVgLAaAAQAcAAAUAMQAVAMANAUQAOATAGAZQAGAZAAAZQgBAZgGAYQgHAZgNATQgNAUgUAMQgVAMgcAAQgbgBgVgMgAgThMQgJAGgGAKQgHAJgEAOQgFAMgBAPQgCANACAQQACAPAGAMQAGANAKAIQAKAJAPACIAEABQALAAAJgHQAJgGAHgKQAGgKAEgNQAEgNAAgOQABgOgCgPQgCgPgGgMQgFgMgJgJQgJgJgNgCIgHAAQgKAAgJAGg");
	this.shape_116.setTransform(419.0483,470.175);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("Ah2ifQA1gPAwAAQAdAAAZAHQAZAHASAOQATAOAKAWQAKAWAAAeQAAAfgKAWQgKAVgRAPQgSAQgYAIQgXAIgbABIgVAAIgXgCIACBtIgeACIgfACgAgih3IgXADIADCAIAIABIAJAAQARAAAQgDQAQgDANgHQAOgHAJgNQAJgOADgVQABgPgEgMQgFgMgKgIQgJgIgOgFQgOgEgQgBIgXABg");
	this.shape_117.setTransform(394.975,466.575);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgeCqQgSgGgNgMQgNgLgIgSQgHgRgBgXQABgXAIgSQAJgTALgRQAMgQAMgPQAMgPAIgOIA4AHQgGAVgKAQIgXAdIgSAcQgIANgBANQgBASALAMQAMAMAUAAQAPAAAOgGQAPgFANgGIASA3QgUAMgXAGQgVAFgUABQgTAAgRgHgAgRhhQgMgNgDgTQABgJACgIQACgIAEgHQAGgFAIgFQAHgEAKAAIACAAQAMAAAKADQAIAFAFAFQAGAHACAJQADAHgBAJQAAAJgDAIQgDAJgFAGQgGAHgGAEQgIAEgJAAQgUAAgMgOg");
	this.shape_118.setTransform(376.7,469.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgRAuQgIgEgGgGQgGgHgEgIQgEgIgBgIQgCgJAEgKQAEgJAHgIQAHgHAKgFQAJgEAJgBQATAAAMAMQANALACATQABAJgDAKQgEAKgGAHQgGAIgIAFQgJAFgJABIgFAAQgIAAgIgDg");
	this.shape_119.setTransform(570.24,597.575);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgRAuQgIgEgGgGQgGgHgEgIQgEgIgBgIQgCgJAEgKQAEgJAHgIQAHgHAKgFQAJgEAJgBQATAAAMAMQANALACATQABAJgDAKQgEAKgGAHQgGAIgIAFQgJAFgJABIgFAAQgIAAgIgDg");
	this.shape_120.setTransform(558.09,597.575);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgRAuQgIgEgGgGQgGgHgEgIQgEgIgBgIQgCgJAEgKQAEgJAHgIQAHgHAKgFQAJgEAJgBQATAAAMAMQANALACATQABAJgDAKQgEAKgGAHQgGAIgIAFQgJAFgJABIgFAAQgIAAgIgDg");
	this.shape_121.setTransform(545.94,597.575);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAWBZIgng4IgPAAIgPgBIABAyIABAyIgcACIgdABIgEkJQAYgGAXgEQAWgEAUAAQAVAAATAFQATAFAOALQAOALAIASQAIAQAAAYQAAAdgMATQgMARgUALIBBBVIgWATIgWATIgpg4gAgehcQgHABgMACIABBIIAMACIAKAAQAaAAAOgJQAPgJACgSQACgUgMgKQgMgKgUgBIgTAAg");
	this.shape_122.setTransform(505.725,588.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AhMiKICaAEIgBAYIgBAZIhkgEIgBA6IBQgEIABAaIACAZIhVAFIgBA+IBqgHIADAcIACAbIhTAEIhSAEg");
	this.shape_123.setTransform(484.85,588.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("Ahfh9QAWgGAVgEQAVgDATAAQAWAAAVAFQAUAGAOALQAPAMAIASQAIARAAAZQAAAagJASQgIATgQAMQgPAMgVAGQgUAGgXAAIgUgCIABBUIgcABIgcABgAgYhWIgOABIABBaIAFAAIAFAAQAMAAAMgCQAKgCAKgEQAKgGAGgJQAGgKACgOQACgUgMgLQgMgLgTgCIgGgBIgGAAIgMABg");
	this.shape_124.setTransform(465.825,588.525);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AglhHIBLADIgTCKIg2ABg");
	this.shape_125.setTransform(437.825,599.75);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("Aheh3IA1gUIBSCfIgFiWIAbgBIAdAAIADEKIgxABIhVibIACBMIACBNIg5AGg");
	this.shape_126.setTransform(422.225,588.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AhMiKICaAEIgBAYIgBAZIhkgEIgBA6IBQgEIABAaIACAZIhVAFIgBA+IBqgHIADAcIACAbIhTAEIhSAEg");
	this.shape_127.setTransform(402.5,588.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AghiFIA7AAIAIEKIgcABIgcAAg");
	this.shape_128.setTransform(386.95,588.875);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhWCIIgIkHIAOgBIAZgDIAegEIAZgBQARAAAQADQAPAEALAIQALAGAGANQAHAMAAASQAAAUgIAPQgIAOgOAMQAVAKALAQQALARgBATQgBAQgIAPQgIAQgQAMQgPAMgYAIQgXAHggAAgAgkAYIACA9IAIABIAHAAIASgCQAIgCAIgEQAIgEAGgGQAGgIABgJQABgMgIgLQgIgKgQgFQgUAGgVAFgAgmhTIABA3QATgDANgEQAMgEAHgFQAIgGADgGQAEgIAAgHQAAgIgHgFQgGgGgPAAQgNABgaAGg");
	this.shape_129.setTransform(370.5794,588.75);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAACGIgbgBIADhmIhQiJIAvgdIA6BtIAdg1QAOgcAOgaIAvAdQgTAfgTAkQgTAjgTAfIgCBqIgbgBg");
	this.shape_130.setTransform(863.2,529.45);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AhiCDIgcgBIADiBIADiAIAkgCIAjgCIAxCnIAyijIAkgCIAjgCIADCAIADB/IgcADIgdACIgBieIgWBEIgWBEIgZgBIgagBIgqiGIgBChIgdgBg");
	this.shape_131.setTransform(733.675,529.75);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AghCGIgmiEIgliDIAbgDIAbgDIA5DEIAZhhIAZhiIAcAGIAbAEIhCEEg");
	this.shape_132.setTransform(687.85,529.25);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AhMiKICbAEIgCAZIgBAYIhkgEIgBA6IBQgEIABAaIACAZIhVAFIgBA9IBrgGIACAbIACAdIhTADIhSAEg");
	this.shape_133.setTransform(668.55,529.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("Aheh2IA1gVIBSCfIgFiVIAbgBIAdgCIADEKIgxACIhVibIACBMIACBNIg5AGg");
	this.shape_134.setTransform(498.775,529.35);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AhMiKICbAEIgBAZIgBAYIhlgEIgBA6IBPgEIACAaIACAZIhVAFIgBA9IBrgGIACAbIACAdIhTADIhSAEg");
	this.shape_135.setTransform(466.7,529.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAVB4IgKACIgKAAQgZgBgUgLQgTgJgOgSQgOgQgHgWQgIgWgCgWQgCgbAFgcQAGgbAOgWQAOgWAWgOQAWgOAcAAQAZgBATAKQATAJAOARQANAQAIAUQAHAVADAXQABARgBATQgCAQgFARQgGARgIAOQgIAOgMAKIAfAcIgUAUIgUAUgAgThcQgJAFgHALQgHAJgEANQgEANgCAOQgBAPABAOQACAQAGAMQAGANAKAIQAKAJAPACIAEAAQAMAAAJgGQAJgGAGgKQAHgKADgNQAEgNABgOQABgOgCgPQgDgPgFgMQgGgMgJgJQgJgJgMgCIgHgBQgKAAgJAHg");
	this.shape_136.setTransform(423.6734,531.15);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AhMheIAuABIgKgOIgKgOIBCg9IAhAnIghAZIgiAZIBhADIgBAYIgCAZIhkgEIgBA5IBPgEIACAaIACAaIhVAFIgBA9IBrgGIACAbIACAcIhTAEIhSAEg");
	this.shape_137.setTransform(390.1,525.225);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZCLQgOgCgOgGQgNgFgMgIQgLgIgJgMIAQgUIAPgVQAMARASAGQASAFATAAQAVgBAMgKQALgKgDgPQgCgJgLgHQgKgGgOgFIgcgLQgQgGgMgIQgNgJgIgOQgIgOAAgVQABgUAIgPQAIgPANgJQAMgKAQgFQAQgEARAAQAVAAAVAHQAVAIAPAPIgfAuQgJgKgLgFQgMgGgLgCIgFgBIgFAAQgMAAgKAGQgJAGgBANQAAAGADAEIAIAIIAOAGIAOAGIAfALQAPAGANAKQANAIAIAPQAIAOgBAWQgBAWgIAQQgJAPgNALQgNALgRAFQgRAGgSAAIgbgBg");
	this.shape_138.setTransform(370.0056,529.525);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgghYIAEAAIgKgPIgLgPIBBg9IAiAnIgkAaIgjAaIAvAAIAIEKIgcABIgbAAg");
	this.shape_139.setTransform(896.1,465.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AhMiKICaAEIgBAYIgBAZIhkgDIgBA5IBQgEIABAaIACAZIhVAFIgBA+IBqgHIACAcIADAbIhTAFIhSADg");
	this.shape_140.setTransform(754.2,470.25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhMiKICaAEIgBAYIAAAZIhlgDIgBA5IBPgEIACAaIACAZIhVAFIgBA+IBqgHIACAcIADAbIhTAFIhSADg");
	this.shape_141.setTransform(677.6,470.25);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("Aheh3IA1gUIBSCfIgFiWIAbgBIAdgBIADELIgxABIhVibIACBMIACBNIg5AGg");
	this.shape_142.setTransform(657.775,470);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhMiKICbAEIgBAYIgCAZIhkgDIgBA5IBQgEIABAaIACAZIhVAFIgBA+IBrgHIACAcIACAbIhTAFIhSADg");
	this.shape_143.setTransform(638.05,470.25);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AghiFIA7AAIAIEKIgcABIgbAAg");
	this.shape_144.setTransform(622.5,470.175);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("Aheh3IA1gUIBSCfIgFiWIAbgBIAdgBIADELIgxABIhVibIACBMIACBNIg5AGg");
	this.shape_145.setTransform(553.125,470);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgFCHIgbgBIAEjVIhBABIAEg4IBbACIBcADIgEA1IhAgCIgCBqIgDBsIgagBg");
	this.shape_146.setTransform(498.275,470.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AhMiKICbAEIgCAYIgBAZIhkgDIgBA5IBQgEIABAaIACAZIhVAFIgBA+IBrgHIACAcIACAbIhTAFIhSADg");
	this.shape_147.setTransform(459.75,470.25);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AglhGIBLACIgTCKIg2ABg");
	this.shape_148.setTransform(433.075,481.05);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AhMiKICbAEIgCAYIgBAZIhkgDIgBA5IBQgEIABAaIACAZIhVAFIgBA+IBrgHIACAcIACAbIhTAFIhSADg");
	this.shape_149.setTransform(418.8,470.25);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAACHIgbgBIAChoIhQiIIAwgcIA5BtIAdg2QAOgcAPgaIAwAcQgUAggTAkQgTAjgTAfIgCBrIgbgBg");
	this.shape_150.setTransform(400,470.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AACCtQgigBgagPQgagQgRgYQgRgYgJgfQgIgegBggQABgfAJgfQAIggASgYQASgZAZgOQAZgPAiAAQAhAAAaAPQAaAOAQAYQARAZAIAeQAJAfAAAhQgBAggJAfQgJAggRAZQgRAYgZAPQgYAOgfAAIgCAAgAgehoQgNAKgKAQQgJAQgGAUQgFAUgCAVQAAASADATQAEASAJAQQAHAPAOAKQAOALATACIAEABIAEAAQAQAAANgKQANgJAJgPQAKgPAEgUQAFgTABgVQAAgTgEgTQgDgTgIgQQgIgPgMgLQgNgLgSgDIgEgBIgEAAQgQAAgOAKg");
	this.shape_151.setTransform(375.2,467.0258);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#993300").s().p("AgbCUQgJgBgIgCQgLgFgJgIQgKgJgEgMQgCgHgBgIIAAgQIACgdIABgfIADgzIABg1IAAgHIAAgIQAAgGACgHQADgFAEgGIAHgFIAIgGIAIgBIALgDIAIgCIAhgGQAQgDARAAQAKAAAIAFQAIAFAFAIQAEAIABAKQgBALgEAGQgFAIgIAGQgHAEgIAAIgQACIgRADIgPADIAAAVIgBAXIAJgFIAMgDQAOgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgEACQgMAFgNAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIAMgIQADgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAHAMgCANQgBAMgLAKIAAAAQgKAIgOAIQgNAGgPAEQgPAEgLABIgTgCg");
	this.shape_152.setTransform(522.1382,412.15);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#993300").s().p("AhACKQgEgBgEgDIgHgFIgFgGQgFgHgCgHQgBgIAAgIIAAgMIABgNQABgbgBgaIgBg0IAAgLIgBgQIAAgLIgBgIIgBgHIABgHIACgJIACgHIAEgJIAHgHQAFgEAGgCQAHgDAHAAIAEAAIAEAAIAbAAQANAAAMABQAOACAOAEQANAEANAHQANAJAKAOQAKAOADAQQABAJgBAKQgBAKgDAJQgDALgGAJQgFAJgIAIQgNAOgQALQgQALgRAJQgHADgGABQgHABgHgBIgBAOIAAAOIAAABIABACQAFAMgEAMQgEAMgKAHQgJAIgNAAIgKgBgAgUg5IAAARIABARIAAAKIABAAIABgBQAKgFAJgHQAJgGAHgJIAFgHIACgIIgCgBIgCgBIgFgDIgGgCIgPgDIgQgBIABAKg");
	this.shape_153.setTransform(501.945,412.875);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#993300").s().p("AASCYQgNAAgLgCIgaAAIgJgBQgEAAgDgBQgMgFgGgJQgGgJAAgLQAAgLAGgJQAGgJAMgFIAFgBIAHgBIgBgPIgBgYIAAgZIAAgOIgBglIABglQgIAAgGgDQgHgDgFgFQgJgJgBgKQgCgLAEgJQAEgKAJgGQAIgGANAAIAagBIAZgBIAIgBIALgBIAIgBQAMABAIAFQAIAGAFAJQAEAJgBALQgBAKgIAJIgHAGQgDADgFABIgJACIgKABIgBAgIAAAgIABANIAAAWIAAAZIABAWIABAOQAJACAHAIQAHAHACALQABAHgCAIQgCAIgFAGQgHAIgIADQgHACgIAAIgEAAg");
	this.shape_154.setTransform(482.4267,413.3292);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#993300").s().p("AggCDQgOgEgKgJIgGgGIgHgHIgFgGQgMgPgGgSQgGgTgCgTIgBgXIgBgXIABgrIADgrIABgGIADgGQAEgJAKgFQAJgFALAAQAJAAAHAFQAIAFAFAIQADAFABAGIABANIgBABIAAABIgCAkIgBAlIABAcQABAPAEAPIACAHIADAHIADADIADADIACACIACABIACAAIACAAIAGgEIAGgHQAGgJAFgJQAFgJADgKQADgOABgNQABgOgCgNIgBgKIgBgOIgCgOIgCgKQgBgEABgEIABgIQAEgOAKgGQAJgHAMAAQALAAAJAGQAJAFAFANQACAHABAIIABAQIADAXIACAXQABAPgCAOQgBANgDAOQgFASgJATQgJATgNAQQgMAQgRAKQgRAKgUABQgOAAgNgFg");
	this.shape_155.setTransform(462.5563,412.925);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#993300").s().p("AAzCeIgIgEIgIgFQgJgGgIgIQgIgHgGgJIgGgMQgPABgPgEQgPgEgMgIIgFgEIgFgDIgKgLIgIgNQgHgLgDgNQgEgMgCgNQgCgRAAgRQAAgSACgSIADgQIAEgQQADgLAFgKQAFgLAIgJQAGgHAIgGQAHgFAJgEQAHgEAIABQAIABAGADIAKgFQAGgCAFABIANACIANADQAKAEAIAGQAJAGAHAIIAPATIANAVQAGALADANQADAMABAMIAAAWIgDAVQgCALgEAMQgEALgFALQgFAJgGAIQgGAIgHAGIAEAGIAFAEIAEADIAFABQAKAGAEALQAFAKgCALIgDAJIgFAHQgEAGgHAEQgHADgIABIgCAAQgGAAgGgCgAgNhaIgBABIgEACIgDADQgEAHgCAJIgEARQgDAQAAAQQABAQADAPIACAGIADAHIADAFQAGAEAHABQAIABAFgCQAIgEAGgHQAGgHADgJQAEgJACgLQABgMAAgMIgBgFIgBgGIgCgFIgKgQIgLgOQgCgCgDgBIgFgBIgFgBIgGgDIgBABg");
	this.shape_156.setTransform(438.9125,414.9492);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#993300").s().p("AgbCUQgJgBgIgCQgLgFgJgIQgKgJgEgMQgCgHgBgIIAAgQIACgdIABgfIADgzIABg1IAAgHIAAgIQAAgGACgHQADgFAEgGIAHgFIAIgGIAIgBIALgDIAIgCIAhgGQAQgDARAAQAKAAAIAFQAIAFAFAIQAEAIABAKQgBALgEAGQgFAIgIAGQgHAEgIAAIgQACIgRADIgPADIAAAVIgBAXIAJgFIAMgDQAOgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgEACQgMAFgNAEQgMAEgMABIgBAQIgBAQQAEAAADgBIAGgDIANgFIAMgIQADgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAHAMgCANQgBAMgLAKIAAAAQgKAIgOAIQgNAGgPAEQgPAEgLABIgTgCg");
	this.shape_157.setTransform(418.0882,412.15);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#993300").s().p("AhACJIgHgGIgFgHQgGgNgCgOIgEgbIgCgXIgCgkIgBgoIgCgkIAAgWQAAgHACgGQABgHADgFIACgDIAAgCQAEgKAHgGQAJgHAJgBQAPgBAPAAIAeABIASADIARAHQANAFAKAIQALAIAHALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAGABIAHABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgGACgFAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgJAKgNADIgFAAQgLAAgKgGgAgWgoIACAeIAQgNQAHgHAHgJIAFgGIADgIIAAgEIgBgEQgJgGgJgCIgWgBIABAeg");
	this.shape_158.setTransform(397.4618,412.1941);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#993300").s().p("ABECOQgJgGgGgMIgCgJIgCgPIgCgOIgCgKQgMADgNABQgNABgMAAIgSAAQgKAAgJgBIgDAIIgEAMIgCAJQgBAPgKAKQgJAKgQABQgMgBgJgGQgJgGgEgLIgCgLIABgLQAAgHAEgNIAKgdIAMgdIAHgTQANgeAQgeQAPgeAVgbQAJgOAOgJQANgJARgBQANABALAGQALAGAGALQAIAKAEAMIAFARIAGAaIAGAdIAFAbIAEAQIAGAnIAGAoIACAKIACAKIgBAJIgDAJQgFAIgIAFQgJAGgJAAQgNAAgIgHgAACgYIgPAhIAIAAIAMAAIAJAAIAIgCIAJgBIgGgeIgGggIgTAgg");
	this.shape_159.setTransform(372.95,413.225);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AhwACIgEinIA8gFIADCUIBqgHIgGiMIA9AAIAJFOIg5ABIgGiJIhqAGIAFCBIg+AHIgDipg");
	this.shape_160.setTransform(535.2,467.225);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AhxACIgDinIA8gFIADCUIBqgHIgGiMIA9AAIAJFOIg5ABIgGiJIhqAGIAFCBIg+AHIgEipg");
	this.shape_161.setTransform(509,467.225);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AhxACIgDinIA8gFIADCUIBqgHIgGiMIA9AAIAJFOIg5ABIgGiJIhqAGIAFCBIg+AHIgEipg");
	this.shape_162.setTransform(482.8,467.225);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AA8ByIh8AHIgSA0Ig1gHIBrlSIAhACIAhACIBiFIIgfAHIgfAGgAguBAIBcgHIgnibg");
	this.shape_163.setTransform(456.325,467.25);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AA8ByIh8AHIgSA0Ig1gHIBrlSIAhACIAhACIBiFIIgfAHIgfAGgAguBAIBcgHIgnibg");
	this.shape_164.setTransform(428.925,467.25);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AA8ByIh8AHIgSA0Ig1gHIBrlSIAhACIAhACIBiFIIgfAHIgfAGgAguBAIBcgHIgnibg");
	this.shape_165.setTransform(401.525,467.25);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AA8ByIh8AHIgSA0Ig1gHIBrlSIAhACIAhACIBiFIIgfAHIgfAGgAguBAIBcgHIgnibg");
	this.shape_166.setTransform(374.125,467.25);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AggiFIA6AAIAHEKIgbABIgbAAg");
	this.shape_167.setTransform(637.45,529.525);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgFCGIgbgBIAEjVIhBADIAEg6IBbADIBcADIgEA2IhAgCIgCBpIgDBrIgagBg");
	this.shape_168.setTransform(540.125,529.45);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AhbCGIgHkHIAKgBIAUgDIAagDIAXgBIAHAAQAWACATAIQAUAIAPAPQAOAPAJAWQAJAXACAeIAAASQAAAKgBAJQgEAagMAWQgLAVgSAPQgRAPgWAIQgWAIgZAAgAgehWIgOABIAGCoIADAAIAEAAQATAAANgGQAOgHAKgNQAJgMAEgRQAFgRAAgUQgBgjgPgWQgPgVgeAAIgMABg");
	this.shape_169.setTransform(433.9625,529.575);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAACGIgbgBIAChmIhPiJIAvgdIA5BtIAeg1QAOgcAPgaIAuAdQgTAfgTAkQgTAjgTAfIgDBqIgagBg");
	this.shape_170.setTransform(391.75,529.45);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_171.setTransform(852.975,470.375);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AhQiEIAcgBIAcAAIgBDWIBsgDIgCAcIgBAbIiiABg");
	this.shape_172.setTransform(833.225,470.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_173.setTransform(734.675,470.375);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AghCGIgliDIgmiEIAbgDIAbgDIA5DDIAZhgIAZhhIAcAEIAcAGIhEEDg");
	this.shape_174.setTransform(713.25,469.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AhQiEIAcgBIAcAAIgBDWIBsgDIgCAcIgBAbIiiABg");
	this.shape_175.setTransform(634.675,470.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_176.setTransform(614.725,470.375);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AhMiKICaAEIgBAYIgBAZIhkgDIgBA5IBQgEIABAaIACAZIhVAFIgBA+IBqgHIADAcIACAbIhTAFIhSADg");
	this.shape_177.setTransform(565.3,470.25);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AhiCDIgcgBIADiBIADiAIAkgCIAjgCIAxCmIAyiiIAkgCIAjgCIADCAIADCAIgcABIgdACIgBicIgWBDIgWBEIgZgBIgagBIgqiFIgBCgIgdgBg");
	this.shape_178.setTransform(439.675,470.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AArBdIhZAEIgOAqIgxgIIBVkNIAcACIAeACIBMEFIgcAFIgcAHgAgcArIAcgEIAdgDIgYheg");
	this.shape_179.setTransform(415.275,470.375);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgnCoIguinIgwijIAegEIAcgDIBPEQIAQhCIAShEIAShFIARhDIAfAGIAeAFIhVFGg");
	this.shape_180.setTransform(372.75,466.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("ABVAoQgHgEgFgGQgGgFgEgHQgDgHgBgHQgBgIADgJQADgHAHgHQAFgGAJgFQAIgEAIAAQAQAAALAKQALALACAQQABAIgEAIQgCAJgGAGQgFAHgHAFQgHAEgIABIgCAAIgCAAQgIAAgGgDgAgOAoQgHgEgFgGQgGgFgDgHQgDgGgCgIQgBgIAEgJQADgHAGgHQAGgGAIgFQAIgEAHAAQAQgBALALQALAKABARQABAIgDAIQgDAJgFAGQgGAHgGAFQgHAEgIABIgCAAIgBAAQgIAAgGgDgAhyAoQgHgEgFgGQgGgFgDgHQgDgGgCgIQgBgIAEgJQADgHAGgHQAGgGAIgFQAIgEAIAAQAQgBAMALQALAKAAARQABAIgDAIQgDAJgFAGQgGAHgGAFQgHAEgIABIgCAAIgCAAQgHAAgHgDg");
	this.shape_181.setTransform(514.75,479.35);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AhditIC9AFIgCAaIgBAZIiBgFIgEBbIBpgIIACAcIACAZIg4AFIg2AEIgCBbICLgIIADAeIACAdIhlAEIhkAFg");
	this.shape_182.setTransform(371.65,467.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#6600CC").s().p("Ag3B5QgUgMgMgWQgLgVgFgdQgCgRAAgRQAAgRACgSQABgMAEgNQADgOAGgMQAGgMAIgKIALgLIAPgKQAIgEAHAAIAKABIAIADIAJgEQAFgCAEAAQATAAAQAIQAQAIAMANQARATALAWQALAVACAaQABALgBAKIgDAVQgDAVgJATQgJATgPAPQgOAPgTAIQgSAJgVAAQgeAAgUgMgAgNhAIgBABIgEACIgDADQgEAHgCAJIgEARQgDAPAAAQQABAQADAPQACAMAGAGQAFAGAMAAQAHAAAGgEQAHgEAFgHIAHgNQAEgKACgMIABgWIgBgFIgBgHIgCgEIgJgQIgMgOQgCgCgDgBIgFgBIgFgBIgGgDIgBABg");
	this.shape_183.setTransform(461.375,412.325);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6600CC").s().p("AgcCJQgKgEgGgFQgGgGgEgGQgFgGgDgIIgFgSIgHgcIgHgbIgFgSIgHglIgHgnIgDgUQgBgKACgKQADgOAKgKQAKgJAOgBQAKAAAIAGQAIAEAGAJIADAIIABAKIgBAHIgBAHIACAJIACAOIACAOIACAJQAEAVAFAWIAKArQAGgNAFgOQAFgOAEgNIADgOIAFgWIAEgXIADgOIAAgBIAAgBQgCgMAFgKQAEgKAJgGQAJgGALAAQAMABAJAGQAJAIAFAKQACAIAAAIIgBAOIgDAPIgFAVIgFAXIgDANIgIAfQgGASgIATQgJATgLARQgLARgOAKQgOAKgQAAQgIAAgKgCg");
	this.shape_184.setTransform(438.3833,412.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6600CC").s().p("AgpCLQgIgCgHgEQgHgDgFgGQgGgGgDgHQgGgKgDgMQgCgMAAgMQAAgfAEgfIAHg9IABgRIgBgSIAAgLIACgLQACgGAEgFQAFgFAFgEQAFgDAHgBIAMgBIAJADIAIAFQAFAEADAGQADAFACAGQABADgBAEIAAAHIAAARIAAAQIgEAsIgFArQgDAWABAWIAigFIAigFIAHABIAGABQAHACAGAGQAFAGADAIQADAHAAAIQgBAHgCAFQgDAGgFAFQgEAEgFACQgFADgFABIgRACIgaAEIgZAEIgQACIgDAAQgHAAgGgCg");
	this.shape_185.setTransform(417.7036,413.0217);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6600CC").s().p("ABDCOQgIgGgFgMIgDgJIgDgPIgBgOIgCgKQgMADgNABQgNABgMAAIgTAAQgJAAgJgBIgDAIIgEAMIgCAJQAAAPgLAKQgKAKgPABQgLgBgJgGQgKgGgEgLQgCgFAAgGIAAgLQABgHAFgNIAKgdIALgdIAHgTQANgeAPgeQAQgeAUgbQAKgOAOgJQANgJARgBQAOABAKAGQAKAGAHALQAIAKAEAMIAFARIAGAaIAGAdIAGAbIADAQIAGAnIAGAoIACAKIACAKIgBAJIgEAJQgEAIgIAFQgJAGgJAAQgNAAgJgHgAACgYQgIARgHAQIAIAAIAMAAIAJAAIAJgCIAIgBIgGgeIgHggQgKAQgIAQg");
	this.shape_186.setTransform(394.2375,413.225);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6600CC").s().p("Ag7CFQgVgPgJgbQgGgQgBgTQAAgRACgTQACgUAFgWQAGgUAGgVQAFgOAJgOQAHgPAMgMQALgOAOgHQANgIAQgBQAQABAPAJQAOAJAJAOQAKAOAAASIgBAMIgBANQgCAHgFAHQgFAGgFAFQgEACgFACIgKABIgJgBIgIgEQgJgEgEgHQgEgHgCgJQgHAPgHAUQgGATgDATQgCAUAAAQIAAANQABAHAEAEIADADIACAAIAKgDIAHgFQAJgHAHgHQAIgIAFgJQAFgFAHgEQAIgEAGABQANgBAJAGQAIAGAGALIACAJIgBAKQgBAHgFAJQgGAJgIAIIgQAQIgNALQgHAFgKAFQgLAGgLADQgKADgKAAQgcAAgTgPg");
	this.shape_187.setTransform(370.9,413.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AggiFIA6AAIAHEKIgcABIgaAAg");
	this.shape_188.setTransform(649.25,588.875);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AhMiKICbAEIgBAYIgBAZIhlgEIgBA6IBPgEIACAaIACAZIhVAFIgBA+IBrgHIABAcIADAbIhTAEIhSAEg");
	this.shape_189.setTransform(572.55,588.95);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AhMiKICaAEIAAAYIgBAZIhlgEIgBA6IBPgEIACAaIACAZIhVAFIgBA+IBqgHIACAcIADAbIhTAEIhSAEg");
	this.shape_190.setTransform(520,588.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgFCHIgbgBIAEjVIhBACIAEg5IBbACIBcADIgEA1IhAgBIgCBpIgDBsIgagBg");
	this.shape_191.setTransform(502.625,588.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AhMiKICbAEIgBAYIgBAZIhlgEIgBA6IBPgEIACAaIACAZIhVAFIgBA+IBrgHIABAcIADAbIhTAEIhSAEg");
	this.shape_192.setTransform(415.15,588.95);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAVB4IgKABIgKABQgZgBgUgKQgTgLgOgQQgOgRgHgVQgIgWgCgXQgCgbAFgbQAGgcAOgXQAOgWAWgNQAWgPAcAAQAZAAATAKQATAKAOAPQANAQAIAVQAHAVADAWQABATgBARQgCASgFAQQgGARgIAOQgIAOgMAKIAfAbIgUAVIgUAVgAgThdQgJAHgHAJQgHAKgEAOQgEAMgCAPQgBAOABAPQACAPAGAMQAGAMAKAJQAKAJAPACIAEABQAMAAAJgHQAJgGAGgKQAHgKADgNQAEgNABgOQABgOgCgPQgDgPgFgNQgGgMgJgIQgJgJgMgCIgHAAQgKAAgJAFg");
	this.shape_193.setTransform(372.1234,590.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("Aheh2IA1gVIBSCfIgFiVIAbgBIAdgCIADEKIgxACIhVibIACBMIACBNIg5AGg");
	this.shape_194.setTransform(702.675,529.35);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAWBZIgng3IgPgBIgPgCIABAzIABAzIgcABIgdABIgEkJQAYgGAXgFQAWgDAUAAQAVAAATAFQATAFAOALQAOALAIARQAIARAAAZQAAAcgMASQgMASgUAKIBBBXIgWASIgWATIgpg4gAgehbQgHAAgMACIABBIIAMABIAKAAQAaAAAOgIQAPgJACgTQACgTgMgKQgMgKgUgBIgTABg");
	this.shape_195.setTransform(669.625,529.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAWBZIgng3IgPgBIgPgCIABAzIABAzIgcABIgdABIgEkJQAYgGAXgFQAWgDAUAAQAVAAATAFQATAFAOALQAOALAIARQAIARAAAZQAAAcgMASQgMASgUAKIBBBXIgWASIgWATIgpg4gAgehbQgHAAgMACIABBIIAMABIAKAAQAaAAAOgIQAPgJACgTQACgTgMgKQgMgKgUgBIgTABg");
	this.shape_196.setTransform(625.925,529.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("Aheh2IA1gVIBSCfIgFiVIAbgBIAdgCIADEKIgxACIhVibIACBMIACBNIg5AGg");
	this.shape_197.setTransform(587.025,529.35);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAJCNQgSAAgSgIQgSgHgOgQQgPgPgIgYQgJgYAAghQAAgmAJgcQAJgdAOgTQAPgTATgKQATgJATgCQAXAAATAHQATAGASAOIgeAwQgJgKgKgEQgKgFgKAAQgRAAgLAKQgNAKgHAPQgIAOgEARQgDARAAANQAAATAEANQAEANAHAKQAHAJAJAEQAJAFAIABQAfAAATgZIAbArQgOAQgSAKQgSAKgUABg");
	this.shape_198.setTransform(543.775,529.475);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("Aheh2IA1gVIBSCfIgFiVIAbgBIAdgCIADEKIgxACIhVibIACBMIACBNIg5AGg");
	this.shape_199.setTransform(523.025,529.35);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AhMiKICbAEIgBAZIgCAYIhkgEIgBA6IBPgEIACAaIACAZIhVAFIgBA9IBrgGIACAbIACAdIhTADIhSAEg");
	this.shape_200.setTransform(451.75,529.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AhMiKICaAEIAAAZIgBAYIhlgEIgBA6IBPgEIACAaIACAZIhVAFIgBA9IBqgGIACAbIADAdIhTADIhSAEg");
	this.shape_201.setTransform(411.55,529.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AhMiKICbAEIgBAYIgBAZIhlgDIgBA5IBPgEIACAaIACAZIhVAFIgBA+IBrgHIACAcIACAbIhTAFIhSADg");
	this.shape_202.setTransform(847.4,470.25);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgsB9QgTgIgMgQQgMgPgGgWQgGgVABgaIAGiUIA1gCIgBBMIgCBLQgBAcAJANQAJANAUACIAEABIABAAQARAAAKgOQAKgNABgcIAChMIAChNIA5ACIgCBNIgCBMQAAAZgHAVQgHAVgMAOQgNAPgRAIQgSAIgVAAQgZAAgTgJg");
	this.shape_203.setTransform(827.2673,470.575);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgsB9QgTgIgMgQQgMgPgGgWQgGgVABgaIAGiUIA1gCIgBBMIgCBLQgBAcAJANQAJANAUACIAEABIABAAQARAAAKgOQAKgNABgcIAChMIAChNIA5ACIgCBNIgCBMQAAAZgHAVQgHAVgMAOQgNAPgRAIQgSAIgVAAQgZAAgTgJg");
	this.shape_204.setTransform(655.1673,470.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("Ahfh9QAWgGAVgEQAVgDATAAQAWAAAVAFQAUAGAOALQAPAMAIASQAIARAAAZQAAAagJASQgIATgQAMQgPAMgVAGQgUAGgXAAIgUgCIABBUIgcABIgcABgAgYhWIgOABIABBaIAFAAIAFAAQAMAAAMgCQAKgCAKgEQAKgGAGgJQAGgKACgOQACgUgMgLQgMgLgTgCIgGgBIgGAAIgMABg");
	this.shape_205.setTransform(634.475,469.825);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgOC2QgJgEgGgGQgHgGgDgJQgEgJgBgKQAAgJACgIQACgIAFgGQAFgHAIgEQAIgFALAAIADAAQALAAAJAEQAJAEAFAGQAGAHADAIQACAJAAAIQgBAKgCAIQgDAJgGAHQgFAGgIAFQgHAEgKAAQgJAAgIgEgAgki0IBIgFIgJDoIg3AEg");
	this.shape_206.setTransform(577.9742,465.325);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("Ahdh6IBBABIgFgHIgPgUIBRhMIArAwIgvAjIgeAVIBhADIgBAaIgBAZIiDgFIgCBZIBpgHIABAcIACAaIg4AEIg2AEIgCBcICLgIIADAeIADAdIhmAEIhlAFgAgShrIARgNIgbgBIAKAOgAgch5IAbABIgRANIgKgOg");
	this.shape_207.setTransform(542.25,462.025);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("Ag8CcQgXgLgOgUQgOgTgGgaQgGgbABgeIADg7IADg4IABgtIABgaIAdgBIAdgBIgCBgIgCBdQgBAoALAUQAMAVAeABIAFAAQAbAAAPgTQAQgSABgqQAAgwACgvIAChiIA/ACQgBAygCAyIgCBiQgCAegJAYQgKAZgQASQgQARgWAKQgWAJgZAAQghAAgXgLg");
	this.shape_208.setTransform(517.1173,467.45);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAeCXIgOABIgOABQgjgBgagRQgbgRgRgZQgSgagIggQgIggACgfQACggAJgeQAKgdARgXQARgXAZgOQAZgNAgAAQAhAAAZANQAZANARAWQAQAXAJAcQAJAdAAAdQABAWgDAVQgDAWgIAUQgHATgLAQQgLARgPALIAoAkIgVAWIgVAWgAgfh8QgOALgKASQgKATgFAWQgGAXABAXQABAQAFASQAFARAJAOQAKAOAOAJQAPAJATAAQASAAAOgLQAOgKAJgSQAJgRAFgWQAEgUgBgXQgBgSgEgRQgEgRgJgOQgIgOgMgJQgMgKgPgDIgFAAIgFAAQgQAAgPAKg");
	this.shape_209.setTransform(488.3257,469.025);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("Ah1iXIA5gVIB5DhIgIjYIAegCIAegBIAFFNIgbABIgaABIh7jXIADBoIADBtIg+AGg");
	this.shape_210.setTransform(447.875,466.95);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("Ag8CcQgXgLgOgUQgOgTgGgaQgGgbABgeIADg7IADg4IABgtIABgaIAdgBIAdgBIgCBgIgCBdQgBAoALAUQAMAVAeABIAFAAQAbAAAPgTQAQgSABgqQAAgwACgvIAChiIA/ACIgDBkIgCBiQgCAegJAYQgKAZgQASQgQARgWAKQgWAJgZAAQghAAgXgLg");
	this.shape_211.setTransform(421.0673,467.45);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgeCqQgSgGgNgMQgOgLgHgSQgIgRABgXQgBgXAJgSQAJgTALgRQALgQANgPQANgPAHgOIA5AHQgGAVgMAQIgVAdIgTAcQgIANAAANQgCASAMAMQALAMATAAQAQAAAPgGQAOgFANgGIATA3QgVAMgWAGQgWAFgUABQgTAAgRgHgAgRhhQgNgNgCgTQAAgJACgIQADgIAEgHQAGgFAHgFQAIgEAKAAIADAAQALAAAJADQAJAFAGAFQAFAHADAJQACAHAAAJQgBAJgDAIQgDAJgFAGQgFAHgIAEQgHAEgJAAQgUAAgMgOg");
	this.shape_212.setTransform(402.4,469.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgaguIA3gEIAIDnIhIAFgAAChaQgMAAgJgEQgJgEgFgGQgGgHgCgIQgDgJAAgJQABgJADgIQADgJAFgHQAFgGAIgFQAIgEAJAAQAJAAAJAEQAIAEAGAGQAHAGAEAJQADAJABAKQAAAIgCAJQgCAIgFAGQgFAHgIAEQgIAFgLAAg");
	this.shape_213.setTransform(378.7264,470.775);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAAAkQgGAAgGgDQgGgDgEgEQgFgFgDgGQgDgFgBgGQAAgHACgHQADgHAFgFQAFgGAHgDQAHgDAGgBQAOAAAJAJQAJAIACAOQAAAGgCAHQgCAHgFAGQgEAFgGAEQgGAEgHABIgDAAg");
	this.shape_214.setTransform(628.7758,598.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAVAxIgSgBIADgvIADgwIAzACIgUBfIgTgBgAgnAxIgSgBIgBguIgBgtIA0gGIgNBjIgTgBg");
	this.shape_215.setTransform(617.7,581.95);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgiBaQgPgIgKgPQgKgOgFgSQgFgSABgRQAAgTAFgSQAGgSAKgOQAKgNAPgJQAPgIASgBQAVABAPAIQAPAJAJAPQAKANAEATQAFASAAASQgBASgEARQgFASgKAPQgJAOgPAIQgPAJgUAAQgUgBgPgJgAgNg3QgHAEgFAHQgFAHgDAKQgDAJgBAKQgBALABALQABAKAFAKQAEAJAIAGQAHAGAKABIADABQAJAAAGgFQAHgEAEgHQAFgHADgKQACgJABgLQABgKgCgLQgBgLgEgJQgFgIgGgHQgHgFgJgDIgFAAQgHAAgGAFg");
	this.shape_216.setTransform(601.7977,592.35);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgYBiIgbhhIgbhfIAUgCIAUgCIAoCOIAShGIAShHIAVADIAUAFIgwC8g");
	this.shape_217.setTransform(585.6,592.15);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("Ag6hgIAVAAIAUAAIgBCaIBOgBIgBATIgBAUIh1ABg");
	this.shape_218.setTransform(572.025,592.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAfBDIhAADIgKAfIgkgGIA+jDIAUABIAWACIA4C9IgVAEIgVAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_219.setTransform(557.5,592.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AAGBmQgNAAgNgFQgNgGgKgKQgLgMgGgSQgGgRAAgXQAAgcAGgVQAHgVAKgOQALgNAOgIQAOgGANgCQARABAOAEQAOAFANAKIgWAjQgHgIgHgDQgHgCgHAAQgNgBgIAIQgJAGgFAMQgGAKgDAMQgCAMAAAKQAAANADAKQADAKAFAGQAFAHAGADQAHAEAGAAQAWAAAOgRIATAeQgJANgOAGQgNAIgOAAg");
	this.shape_220.setTransform(542.975,592.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("Ag6hgIAVAAIAUAAIgBCaIBOgBIgBATIgBAUIh1ABg");
	this.shape_221.setTransform(520.275,592.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_222.setTransform(506.825,592.375);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("Ag7AsIALguIAKguIASgBIATAAIgHBjgAAWgwIATgBIASAAIABBfIg0ACg");
	this.shape_223.setTransform(493.1,581.95);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAfBDIhAADIgKAfIgkgGIA+jDIAUABIAVACIA5C9IgVAEIgVAFgAgUAfIAUgDIAVgCIgShEg");
	this.shape_224.setTransform(469.45,592.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAQBBIgdgpIgKAAIgLgBIABAkIAAAlIgUACIgUABIgEjCIAigHQARgCAOgBQAPABAOADQAOADAJAJQALAIAFANQAHAMAAARQAAAVgJANQgJANgPAHIAvA/IgPAOIgQANIgegogAgWhDIgNACIABA1IAIABIAHAAQAUAAAJgGQALgHABgOQACgNgIgIQgJgHgOgBIgPAAg");
	this.shape_225.setTransform(453.9,592.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_226.setTransform(438.725,592.375);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgiBaQgPgIgKgPQgKgOgFgSQgFgSABgRQAAgTAFgSQAGgSAKgOQAKgNAPgJQAPgIASgBQAVABAPAIQAPAJAJAPQAKANAEATQAFASAAASQgBASgEARQgFASgKAPQgJAOgPAIQgPAJgUAAQgUgBgPgJgAgNg3QgHAEgFAHQgFAHgDAKQgDAJgBAKQgBALABALQABAKAFAKQAEAJAIAGQAHAGAKABIADABQAJAAAGgFQAHgEAEgHQAFgHADgKQACgJABgLQABgKgCgLQgBgLgEgJQgFgIgGgHQgHgFgJgDIgFAAQgHAAgGAFg");
	this.shape_227.setTransform(414.2977,592.35);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("Ag6hgIAVAAIAUAAIgBCaIBOgBIgBATIgBAUIh1ABg");
	this.shape_228.setTransform(399.325,592.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgiBaQgPgIgKgPQgKgOgFgSQgFgSABgRQAAgTAFgSQAGgSAKgOQAKgNAPgJQAPgIASgBQAVABAPAIQAPAJAJAPQAKANAEATQAFASAAASQgBASgEARQgFASgKAPQgJAOgPAIQgPAJgUAAQgUgBgPgJgAgNg3QgHAEgFAHQgFAHgDAKQgDAJgBAKQgBALABALQABAKAFAKQAEAJAIAGQAHAGAKABIADABQAJAAAGgFQAHgEAEgHQAFgHADgKQACgJABgLQABgKgCgLQgBgLgEgJQgFgIgGgHQgHgFgJgDIgFAAQgHAAgGAFg");
	this.shape_229.setTransform(383.8977,592.35);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgSBkQgKgBgKgDQgKgFgIgFQgJgGgGgJIALgPIALgOQAKAMANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgGgGgLQgGgKABgPQAAgPAGgLQAGgLAJgHQAJgHAMgDQAMgDALAAQAQAAAPAFQAPAGALAKIgXAjQgGgHgIgFQgIgEgIgCIgEAAIgEAAQgJAAgGAFQgHAEgBAJQAAAFACADQACADAEACIAKAFIAKADIAWAIQAMAFAJAHQAJAGAGALQAGAKAAARQgBAPgGAMQgGALgKAIQgKAIgMADQgMAEgNABIgUgCg");
	this.shape_230.setTransform(367.3269,592.35);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgXhgIAqAAIAFDBIgUAAIgTAAg");
	this.shape_231.setTransform(927.525,548.65);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgDBiIgUgBIADiaIgvABIADgqIBCACIBCADIgDAmIgugBIgCBNIgBBOIgTgBg");
	this.shape_232.setTransform(917.325,548.575);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIglgGIA+jDIAVABIAWACIA3C9IgUAEIgUAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_233.setTransform(894.3,548.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAQBBIgcgoIgLgBIgLgBIABAlIABAlIgVABIgVAAIgCjAIAhgIQAQgDAPAAQAPAAANAEQAOAEALAHQAKAJAGAMQAFAMAAATQABAUgJAOQgJAMgOAIIAvA+IgQANIgQAPIgegpgAgVhCIgOACIAAA1IAJAAIAHAAQATAAALgHQAKgFACgOQACgPgKgGQgIgIgPgBIgNABg");
	this.shape_234.setTransform(878.75,548.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIgkgGIA+jDIAUABIAWACIA4C9IgVAEIgVAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_235.setTransform(862.5,548.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AhFhbQARgEAPgDQAPgCANAAQARAAAOADQAPAEAKAJQALAJAGANQAGAMAAASQAAATgHANQgGANgLAJQgLAJgQAFQgOADgQAAIgPgBIABA+IgUABIgVAAgAgRg+IgKABIABBAIADAAIAEAAQAIAAAJgBQAHgCAHgDQAHgDAFgHQAEgHACgLQACgOgKgIQgIgIgOgBIgEgBIgEAAIgJABg");
	this.shape_236.setTransform(847.3,548.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_237.setTransform(823.875,548.675);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AggBbQgNgGgJgLQgJgMgEgPQgEgQAAgTIAEhrIAngBIgBA3IgBA2QAAAVAGAJQAGAJAPACIACAAIABAAQANAAAHgJQAHgKABgUIABg3IACg5IApACIgBA4IgCA3QAAASgFAPQgFAQgJAKQgJALgNAGQgMAGgQAAQgSgBgOgGg");
	this.shape_238.setTransform(809.2472,548.925);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAPBXIgHABIgIABQgRgBgPgIQgOgHgKgMQgKgMgFgQQgGgQgBgQQgCgUAEgUQAEgUALgQQAKgQAPgKQAQgKAVAAQASAAAOAHQAOAGAJAMQAKAMAGAPQAFAPACAQQABANgBANQgBAMgEANQgEAMgGAKQgGAKgJAIIAXATIgPAPIgOAPgAgOhDQgGAEgFAHQgFAIgDAJQgDAKgCAKQgBALACAKQABALAEAJQAFAJAHAGQAHAGALACIADAAQAIAAAHgEQAGgFAFgHQAFgHACgKQADgJABgKQAAgKgBgLQgCgLgEgJQgEgJgHgGQgGgGgJgCIgFAAQgHAAgHAEg");
	this.shape_239.setTransform(792.5567,549.825);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAQBBIgcgoIgLgBIgLgBIABAlIAAAlIgUABIgUAAIgDjAIAhgIQAQgDAPAAQAPAAANAEQAOAEALAHQAKAJAFAMQAHAMgBATQAAAUgIAOQgJAMgOAIIAvA+IgQANIgQAPIgegpgAgVhCIgOACIAAA1IAJAAIAHAAQAUAAAJgHQALgFACgOQACgPgJgGQgJgIgPgBIgNABg");
	this.shape_240.setTransform(776.4,548.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgiBbQgPgJgKgPQgKgOgFgSQgFgSABgSQAAgSAFgTQAGgRAKgOQAKgOAPgIQAPgJASAAQAVAAAPAJQAPAJAJAOQAKAPAEASQAFASAAASQgBASgEASQgFARgKAOQgJAOgPAKQgPAIgUABQgUgCgPgIgAgNg3QgHAEgFAHQgFAIgDAJQgDAKgBAKQgBAJABALQABAMAFAIQAEAJAIAHQAHAGAKACIADAAQAJAAAGgFQAHgEAEgHQAFgIADgJQACgKABgKQABgKgCgKQgBgLgEgKQgFgIgGgGQgHgHgJgBIgFAAQgHAAgGAEg");
	this.shape_241.setTransform(759.2477,548.65);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AhFhbQARgEAPgDQAPgCANAAQARAAAOADQAPAEAKAJQALAJAGANQAGAMAAASQAAATgHANQgGANgLAJQgMAJgPAFQgOADgQAAIgPgBIABA+IgUABIgVAAgAgSg+IgJABIABBAIADAAIAEAAQAIAAAJgBQAHgCAHgDQAHgDAFgHQAEgHACgLQABgOgIgIQgJgIgOgBIgEgBIgFAAIgJABg");
	this.shape_242.setTransform(743.45,548.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIgkgGIA+jDIAUABIAWACIA4C9IgVAEIgVAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_243.setTransform(718.95,548.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgXhgIAqAAIAFDBIgUAAIgTAAg");
	this.shape_244.setTransform(706.275,548.65);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIABAlIgVABIgVAAIgDjAIAigIQARgDAOAAQAPAAAOAEQANAEAKAHQALAJAGAMQAFAMABATQAAAUgJAOQgJAMgPAIIAvA+IgPANIgQAPIgegpgAgWhCIgNACIABA1IAIAAIAHAAQAUAAAKgHQAKgFABgOQACgPgJgGQgIgIgOgBIgPABg");
	this.shape_245.setTransform(694.55,548.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgiBbQgPgJgKgPQgKgOgFgSQgFgSABgSQAAgSAFgTQAGgRAKgOQAKgOAPgIQAPgJASAAQAVAAAPAJQAPAJAJAOQAKAPAEASQAFASAAASQgBASgEASQgFARgKAOQgJAOgPAKQgPAIgUABQgUgCgPgIgAgNg3QgHAEgFAHQgFAIgDAJQgDAKgBAKQgBAJABALQABAMAFAIQAEAJAIAHQAHAGAKACIADAAQAJAAAGgFQAHgEAEgHQAFgIADgJQACgKABgKQABgKgCgKQgBgLgEgKQgFgIgGgGQgHgHgJgBIgFAAQgHAAgGAEg");
	this.shape_246.setTransform(677.3977,548.65);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AhGBfIgVAAIAChfIAChcIAagBIAagCIAjB4IAlh1IAZgBIAagCIADBdIABBcIgUACIgVACIgBhyIgPAwIgQAyIgTgBIgSAAIgfhhIgBB0IgUgBg");
	this.shape_247.setTransform(658.725,548.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_248.setTransform(642.075,548.675);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AhGBfIgVAAIAChfIAChcIAagBIAagCIAjB4IAlh1IAZgBIAagCIADBdIABBcIgUACIgVACIgBhyIgPAwIgQAyIgTgBIgSAAIgfhhIgBB0IgUgBg");
	this.shape_249.setTransform(625.375,548.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIglgGIA+jDIAVABIAWACIA3C9IgUAEIgUAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_250.setTransform(598.65,548.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("Ag6hgIAVAAIAUgBIgBCcIBOgDIgBAVIgBAUIh1ABg");
	this.shape_251.setTransform(584.275,548.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIAAAlIgUABIgUAAIgEjAIAigIQARgDAOAAQAPAAAOAEQAOAEAJAHQALAJAFAMQAHAMAAATQAAAUgJAOQgJAMgPAIIAwA+IgQANIgQAPIgegpgAgWhCIgNACIAAA1IAJAAIAHAAQATAAAKgHQALgFABgOQADgPgJgGQgJgIgPgBIgOABg");
	this.shape_252.setTransform(561.1,548.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_253.setTransform(545.925,548.675);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AhCBiIgFi/IAIgBIAOgCIATgCIARgBIAFAAQAPABAPAGQAOAGALALQAKALAHAQQAGAQACAWIAAANIgBAOQgDATgJAPQgIAQgNALQgMALgQAFQgQAGgSAAgAgfg9IAEB5IACABIADAAQAOAAAJgFQALgFAGgJQAHgJADgNQADgMAAgOQAAgagLgQQgLgPgVAAIgJAAIgKACg");
	this.shape_254.setTransform(531.2875,548.675);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAQBBIgcgoIgLgBIgLgBIABAlIABAlIgVABIgVAAIgCjAIAhgIQAQgDAPAAQAPAAANAEQAOAEALAHQAKAJAGAMQAFAMAAATQAAAUgIAOQgJAMgOAIIAvA+IgQANIgQAPIgegpgAgVhCIgOACIAAA1IAJAAIAHAAQAUAAAJgHQALgFACgOQACgPgKgGQgIgIgPgBIgNABg");
	this.shape_255.setTransform(515.95,548.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_256.setTransform(500.775,548.675);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AhFhbQARgEAPgDQAPgCANAAQARAAAOADQAPAEAKAJQALAJAGANQAGAMAAASQAAATgHANQgGANgLAJQgMAJgPAFQgOADgQAAIgPgBIABA+IgUABIgVAAgAgRg+IgKABIAABAIAEAAIAEAAQAIAAAJgBQAHgCAHgDQAHgDAFgHQAFgHABgLQABgOgIgIQgJgIgOgBIgEgBIgEAAIgJABg");
	this.shape_257.setTransform(486.95,548.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_258.setTransform(463.525,548.675);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AhCBiIgFi/IAIgBIAOgCIATgCIARgBIAFAAQAPABAPAGQAOAGALALQAKALAHAQQAGAQACAWIAAANIgBAOQgDATgJAPQgIAQgNALQgMALgQAFQgQAGgSAAgAgfg9IAEB5IACABIADAAQAOAAAJgFQALgFAGgJQAHgJADgNQADgMAAgOQAAgagLgQQgLgPgVAAIgJAAIgKACg");
	this.shape_259.setTransform(448.8875,548.675);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgSBlQgKgCgKgEQgKgEgIgFQgJgGgGgIIALgPIALgQQAKANANAEQANAEANAAQAQgBAIgHQAIgIgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgHgGgKQgGgKABgPQAAgPAGgKQAGgMAJgGQAJgIAMgCQAMgEALAAQAQAAAPAGQAPAFALALIgXAhQgGgGgIgFQgIgEgIgBIgEgBIgEAAQgJAAgGAFQgHAEgBAJQAAAEACADQACAEAEACIAKAEIAKAFIAWAIQAMAEAJAHQAJAGAGALQAGAKAAAQQgBAQgGALQgGAMgKAIQgKAHgMAEQgMAFgNAAIgUgBg");
	this.shape_260.setTransform(424.1269,548.65);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_261.setTransform(410.225,548.675);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgDBiIgUgBIADiaIgvABIADgqIBCACIBCADIgDAmIgugBIgCBNIgBBOIgTgBg");
	this.shape_262.setTransform(397.575,548.575);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AhEhWIAmgPIA8BzIgEhsIAUgBIAVAAIACDBIgkABIg9hxIACA3IABA4IgqAFg");
	this.shape_263.setTransform(383.675,548.525);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIglgGIA+jDIAVABIAWACIA3C9IgUAEIgUAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_264.setTransform(368.25,548.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgSBkQgKgBgKgDQgKgFgIgFQgJgGgGgJIALgPIALgOQAKAMANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgGgGgKQgGgLABgPQAAgPAGgLQAGgLAJgHQAJgGAMgEQAMgDALAAQAQAAAPAFQAPAGALAKIgXAjQgGgIgIgEQgIgEgIgBIgEgBIgEAAQgJAAgGAEQgHAFgBAJQAAAFACADQACADAEACIAKAFIAKADIAWAIQAMAFAJAHQAJAGAGALQAGALAAAPQgBAQgGALQgGAMgKAIQgKAIgMAEQgMADgNABIgUgCg");
	this.shape_265.setTransform(885.6269,504.95);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AAfBDIhAADIgKAfIglgGIA+jDIAVABIAVACIA4C9IgUAEIgUAFgAgUAfIAUgCIAVgDIgShEg");
	this.shape_266.setTransform(870.65,505.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgXhAIAEAAIgIgKIgIgLIAvgsIAYAbIgaATIgZATIAiAAIAGDCIgVAAIgTABg");
	this.shape_267.setTransform(859.45,501.65);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("Ag+BjIgGi/IAJgBIATgCIAVgDIATgBQAMAAALACQAMADAIAFQAIAGAEAJQAFAIAAAOQAAAOgGALQgGAKgKAJQAQAHAHAMQAIAMAAAOQgBALgGAMQgFALgMAJQgMAJgRAFQgQAGgYAAgAgaARIABAsIAGABIAFAAIANgBQAGgBAGgDQAGgDAEgFQAEgFABgHQABgJgGgHQgGgIgMgEQgOAFgPADgAgcg8IABAnQAOgBAJgDQAIgDAGgEQAFgEADgFQACgFAAgFQAAgHgEgDQgFgEgLAAQgJAAgTAFg");
	this.shape_268.setTransform(848.6515,504.875);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAfBDIhAADIgKAfIgkgGIA+jDIAUABIAWACIA4C9IgVAEIgVAFgAgUAfIAUgCIAUgDIgRhEg");
	this.shape_269.setTransform(833.25,505.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgSBkQgKgBgKgDQgKgFgIgFQgJgGgGgJIALgPIALgOQAKAMANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgGgGgKQgGgLABgPQAAgPAGgLQAGgLAJgHQAJgGAMgEQAMgDALAAQAQAAAPAFQAPAGALAKIgXAjQgGgIgIgEQgIgEgIgBIgEgBIgEAAQgJAAgGAEQgHAFgBAJQAAAFACADQACADAEACIAKAFIAKADIAWAIQAMAFAJAHQAJAGAGALQAGALAAAPQgBAQgGALQgGAMgKAIQgKAIgMAEQgMADgNABIgUgCg");
	this.shape_270.setTransform(817.2769,504.95);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgiBaQgPgJgKgOQgKgOgFgSQgFgSABgRQAAgUAFgRQAGgSAKgOQAKgNAPgJQAPgIASAAQAVAAAPAIQAPAJAJAOQAKAOAEATQAFASAAASQgBASgEARQgFASgKAPQgJAOgPAIQgPAJgUAAQgUAAgPgKgAgNg3QgHAEgFAHQgFAIgDAJQgDAJgBAKQgBALABALQABAKAFAKQAEAIAIAHQAHAGAKABIADABQAJAAAGgEQAHgFAEgHQAFgHADgKQACgJABgLQABgKgCgLQgBgKgEgJQgFgJgGgHQgHgGgJgCIgFAAQgHAAgGAFg");
	this.shape_271.setTransform(792.3977,504.95);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("Ag6hgIAVAAIAUAAIgBCbIBOgCIgBATIgBAUIh1ABg");
	this.shape_272.setTransform(777.425,504.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_273.setTransform(754.975,504.975);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AggBbQgNgGgJgLQgJgMgEgPQgEgQAAgTIAEhrIAngBIgBA3IgBA2QAAAVAGAJQAGAJAPACIACAAIABAAQANAAAHgJQAHgKABgUIABg3IACg5IApACIgBA4IgCA3QAAASgFAPQgFAQgJAKQgJALgNAGQgMAGgQAAQgSgBgOgGg");
	this.shape_274.setTransform(740.3472,505.225);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AAPBXIgHABIgIABQgRgBgPgIQgOgHgKgMQgKgMgFgQQgGgQgBgQQgCgUAEgUQAEgUALgQQAKgQAPgKQAQgKAVAAQASAAAOAHQAOAGAJAMQAKAMAGAPQAFAPACAQQABANgBANQgBAMgEANQgEAMgGAKQgGAKgJAIIAXATIgPAPIgOAPgAgOhDQgGAEgFAHQgFAIgDAJQgDAKgCAKQgBALACAKQABALAEAJQAFAJAHAGQAHAGALACIADAAQAIAAAHgEQAGgFAFgHQAFgHACgKQADgJABgKQAAgKgBgLQgCgLgEgJQgEgJgHgGQgGgGgJgCIgFAAQgHAAgHAEg");
	this.shape_275.setTransform(723.6567,506.125);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgSBkQgKgBgKgDQgKgFgIgFQgJgGgGgJIALgPIALgOQAKAMANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgGgGgKQgGgLABgPQAAgPAGgLQAGgLAJgHQAJgGAMgEQAMgDALAAQAQAAAPAFQAPAGALAKIgXAjQgGgIgIgEQgIgEgIgBIgEgBIgEAAQgJAAgGAEQgHAFgBAJQAAAFACADQACADAEACIAKAFIAKADIAWAIQAMAFAJAHQAJAGAGALQAGALAAAPQgBAQgGALQgGAMgKAIQgKAIgMAEQgMADgNABIgUgCg");
	this.shape_276.setTransform(698.0769,504.95);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_277.setTransform(684.175,504.975);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgXhhIAqAAIAFDCIgUAAIgTABg");
	this.shape_278.setTransform(663.875,504.95);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgSBkQgKgBgKgDQgKgFgIgFQgJgGgGgJIALgPIALgOQAKAMANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgGgGgKQgGgLABgPQAAgPAGgLQAGgLAJgHQAJgGAMgEQAMgDALAAQAQAAAPAFQAPAGALAKIgXAjQgGgIgIgEQgIgEgIgBIgEgBIgEAAQgJAAgGAEQgHAFgBAJQAAAFACADQACADAEACIAKAFIAKADIAWAIQAMAFAJAHQAJAGAGALQAGALAAAPQgBAQgGALQgGAMgKAIQgKAIgMAEQgMADgNABIgUgCg");
	this.shape_279.setTransform(651.7269,504.95);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgbgzIA2ACIgNBkIgoABg");
	this.shape_280.setTransform(631.85,512.85);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_281.setTransform(621.475,504.975);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAQBBIgcgpIgLAAIgLgBIABAkIABAlIgVABIgVACIgCjCIAhgHQAQgDAPABQAPAAANADQAOADALAJQAKAIAGANQAFAMAAARQAAAVgIAOQgJAMgOAHIAvA/IgQAOIgQANIgegogAgVhDIgOACIAAA1IAJABIAHAAQAUAAAJgGQALgHACgOQACgNgKgIQgIgHgPgBIgNAAg");
	this.shape_282.setTransform(607.3,505);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("Ag+BjIgGi/IAJgBIATgCIAVgDIATgBQAMAAALACQAMADAIAFQAIAGAEAJQAFAIAAAOQAAAOgGALQgGAKgKAJQAQAHAHAMQAIAMAAAOQgBALgGAMQgFALgMAJQgMAJgRAFQgQAGgYAAgAgaARIABAsIAGABIAFAAIANgBQAGgBAGgDQAGgDAEgFQAEgFABgHQABgJgGgHQgGgIgMgEQgOAFgPADgAgcg8IABAnQAOgBAJgDQAIgDAGgEQAFgEADgFQACgFAAgFQAAgHgEgDQgFgEgLAAQgJAAgTAFg");
	this.shape_283.setTransform(591.2015,504.875);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AhGBfIgVgBIAChdIAChdIAagCIAagBIAjB5IAlh2IAZgCIAagBIADBdIABBdIgUABIgVABIgBhyIgPAxIgQAyIgTgBIgSgBIgfhhIgBB1IgUgBg");
	this.shape_284.setTransform(573.625,505.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgiBaQgPgJgKgOQgKgOgFgSQgFgSABgRQAAgUAFgRQAGgSAKgOQAKgNAPgJQAPgIASAAQAVAAAPAIQAPAJAJAOQAKAOAEATQAFASAAASQgBASgEARQgFASgKAPQgJAOgPAIQgPAJgUAAQgUAAgPgKgAgNg3QgHAEgFAHQgFAIgDAJQgDAJgBAKQgBALABALQABAKAFAKQAEAIAIAHQAHAGAKABIADABQAJAAAGgEQAHgFAEgHQAFgHADgKQACgJABgLQABgKgCgLQgBgKgEgJQgFgJgGgHQgHgGgJgCIgFAAQgHAAgGAFg");
	this.shape_285.setTransform(554.9977,504.95);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AhEhWIAmgPIA8BzIgEhsIAUgBIAVAAIACDBIgkABIg9hxIACA3IABA4IgqAFg");
	this.shape_286.setTransform(538.625,504.825);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgXhhIAqAAIAFDCIgUAAIgTABg");
	this.shape_287.setTransform(517.425,504.95);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AhGBfIgVgBIAChdIAChdIAagCIAagBIAjB5IAlh2IAZgCIAagBIADBdIABBdIgUABIgVABIgBhyIgPAxIgQAyIgTgBIgSgBIgfhhIgBB1IgUgBg");
	this.shape_288.setTransform(503.175,505.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAQBBIgcgpIgLAAIgLgBIABAkIABAlIgVABIgUACIgDjCIAhgHQAQgDAPABQAPAAANADQAOADALAJQAKAIAGANQAFAMAAARQAAAVgIAOQgJAMgOAHIAvA/IgQAOIgQANIgegogAgVhDIgOACIAAA1IAJABIAHAAQAUAAAJgGQALgHACgOQACgNgJgIQgJgHgPgBIgNAAg");
	this.shape_289.setTransform(476.8,505);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AAfBDIhAADIgKAfIgkgGIA+jDIAUABIAVACIA5C9IgVAEIgVAFgAgUAfIAUgCIAVgDIgShEg");
	this.shape_290.setTransform(460.55,505.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AhCBiIgFi/IAIgBIAOgCIATgCIARgBIAFAAQAPABAPAGQAOAGALALQAKALAHAQQAGAQACAWIAAANIgBAOQgDATgJAPQgIAQgNALQgMALgQAFQgQAGgSAAgAgfg9IAEB5IACABIADAAQAOAAAJgFQALgFAGgJQAHgJADgNQADgMAAgOQAAgagLgQQgLgPgVAAIgJAAIgKACg");
	this.shape_291.setTransform(444.5375,504.975);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAQBBIgcgpIgLAAIgLgBIABAkIABAlIgVABIgVACIgCjCIAhgHQAQgDAPABQAPAAANADQAOADALAJQAKAIAGANQAFAMAAARQAAAVgIAOQgJAMgOAHIAuA/IgPAOIgQANIgegogAgVhDIgOACIAAA1IAJABIAHAAQATAAALgGQAKgHACgOQACgNgKgIQgIgHgPgBIgNAAg");
	this.shape_292.setTransform(429.2,505);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgiBaQgPgJgKgOQgKgOgFgSQgFgSABgRQAAgUAFgRQAGgSAKgOQAKgNAPgJQAPgIASAAQAVAAAPAIQAPAJAJAOQAKAOAEATQAFASAAASQgBASgEARQgFASgKAPQgJAOgPAIQgPAJgUAAQgUAAgPgKgAgNg3QgHAEgFAHQgFAIgDAJQgDAJgBAKQgBALABALQABAKAFAKQAEAIAIAHQAHAGAKABIADABQAJAAAGgEQAHgFAEgHQAFgHADgKQACgJABgLQABgKgCgLQgBgKgEgJQgFgJgGgHQgHgGgJgCIgFAAQgHAAgGAFg");
	this.shape_293.setTransform(412.0477,504.95);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAGBnQgNgBgNgFQgNgGgKgLQgLgLgGgSQgGgRAAgXQAAgcAGgVQAHgUAKgPQALgOAOgHQAOgHANgBQARABAOAEQAOAEANALIgWAjQgHgIgHgDQgHgCgHAAQgNAAgIAGQgJAIgFAKQgGALgDAMQgCAMAAAKQAAANADAKQADAKAFAHQAFAGAGAEQAHADAGAAQAWAAAOgSIATAgQgJALgOAHQgNAHgOACg");
	this.shape_294.setTransform(396.925,504.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_295.setTransform(382.775,504.975);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AAQBBIgcgpIgLAAIgLgBIABAkIAAAlIgUABIgUACIgEjCIAigHQAQgDAPABQAPAAAOADQAOADAKAJQAKAIAFANQAHAMAAARQgBAVgIAOQgJAMgPAHIAwA/IgQAOIgQANIgegogAgVhDIgOACIAAA1IAJABIAHAAQATAAAKgGQALgHACgOQABgNgIgIQgJgHgPgBIgNAAg");
	this.shape_296.setTransform(368.6,505);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIAAAlIgUABIgVAAIgDjBIAigHQARgDAOAAQAPAAAOAEQANADAKAIQALAJAFAMQAGAMABATQAAAUgJANQgJANgPAIIAvA+IgPANIgQAPIgegpgAgWhCIgNACIABA1IAIAAIAHAAQATAAALgHQAKgFABgOQACgOgJgIQgIgHgOgBIgPABg");
	this.shape_297.setTransform(888.95,461.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgiBbQgPgKgKgOQgKgOgFgSQgFgSABgSQAAgSAFgTQAGgRAKgOQAKgOAPgIQAPgJASAAQAVAAAPAJQAPAJAJAPQAKAOAEASQAFASAAASQgBASgEASQgFARgKAOQgJAOgPAKQgPAIgUABQgUgCgPgIgAgNg3QgHAEgFAHQgFAIgDAJQgDAKgBAKQgBAJABAMQABALAFAIQAEAKAIAGQAHAGAKACIADAAQAJAAAGgFQAHgEAEgHQAFgIADgJQACgKABgKQABgKgCgKQgBgLgEgKQgFgIgGgGQgHgHgJgBIgFAAQgHgBgGAFg");
	this.shape_298.setTransform(871.7977,461.25);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AhFhbQARgEAOgDQAQgDANAAQAQABAPAEQAPADALAJQAKAIAGAOQAGAMAAASQAAATgGANQgHAOgLAIQgMAJgOAFQgPADgRAAIgOAAIABA9IgVABIgUAAgAgRg+IgLABIACBAIADAAIADAAQAJABAJgCQAHgBAHgEQAHgDAFgHQAEgHACgLQACgOgKgIQgIgIgOgBIgEgBIgEAAIgJABg");
	this.shape_299.setTransform(856,461);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgiBbQgPgKgKgOQgKgOgFgSQgFgSABgSQAAgSAFgTQAGgRAKgOQAKgOAPgIQAPgJASAAQAVAAAPAJQAPAJAJAPQAKAOAEASQAFASAAASQgBASgEASQgFARgKAOQgJAOgPAKQgPAIgUABQgUgCgPgIgAgNg3QgHAEgFAHQgFAIgDAJQgDAKgBAKQgBAJABAMQABALAFAIQAEAKAIAGQAHAGAKACIADAAQAJAAAGgFQAHgEAEgHQAFgIADgJQACgKABgKQABgKgCgKQgBgLgEgKQgFgIgGgGQgHgHgJgBIgFAAQgHgBgGAFg");
	this.shape_300.setTransform(830.5977,461.25);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AhCBiIgFi/IAIgBIAOgCIATgCIARgBIAFAAQAPABAPAGQAOAGALALQAKALAHAQQAGAQACAWIAAANIgBAOQgDATgJAPQgIAQgNALQgMALgQAFQgQAGgSAAgAgfg9IAEB5IACABIADAAQAOAAAJgFQALgFAGgJQAHgJADgNQADgMAAgOQAAgagLgQQgLgPgVAAIgJAAIgKACg");
	this.shape_301.setTransform(813.9875,461.275);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIgkgGIA9jDIAVABIAVACIA4C9IgUAEIgUAFgAgUAfIAUgDIAVgCIgShEg");
	this.shape_302.setTransform(798.3,461.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("Ag9BeIgEgRIgFgRIBXh0IhRAAIAAgmIB6ACIALAdIguA9IguA8IBdAAIAAAlg");
	this.shape_303.setTransform(782.8,461.425);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAQBBIgcgoIgLgBIgLgBIABAlIABAlIgVABIgVAAIgCjBIAhgHQAQgDAPAAQAPAAANAEQAOADALAIQAKAJAGAMQAFAMAAATQAAAUgIANQgJANgOAIIAvA+IgQANIgQAPIgegpgAgVhCIgOACIAAA1IAJAAIAHAAQAUAAAJgHQALgFACgOQACgOgKgIQgIgHgPgBIgNABg");
	this.shape_304.setTransform(767.95,461.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgiBbQgPgKgKgOQgKgOgFgSQgFgSABgSQAAgSAFgTQAGgRAKgOQAKgOAPgIQAPgJASAAQAVAAAPAJQAPAJAJAPQAKAOAEASQAFASAAASQgBASgEASQgFARgKAOQgJAOgPAKQgPAIgUABQgUgCgPgIgAgNg3QgHAEgFAHQgFAIgDAJQgDAKgBAKQgBAJABAMQABALAFAIQAEAKAIAGQAHAGAKACIADAAQAJAAAGgFQAHgEAEgHQAFgIADgJQACgKABgKQABgKgCgKQgBgLgEgKQgFgIgGgGQgHgHgJgBIgFAAQgHgBgGAFg");
	this.shape_305.setTransform(750.7977,461.25);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgmBhIgUgBIAChgIADhhIBwADIgBASIgCASIhHgCIgBA2IA5ACIgDAlIg2gCIgBAhIgBAiIgUgBg");
	this.shape_306.setTransform(736.5,461.275);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgSBlQgKgCgKgEQgKgDgIgGQgJgGgGgJIALgOIALgQQAKANANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgHgGgKQgGgKABgPQAAgPAGgKQAGgMAJgGQAJgIAMgCQAMgEALAAQAQAAAPAGQAPAFALALIgXAhQgGgGgIgFQgIgEgIgCIgEAAIgEAAQgJAAgGAFQgHAEgBAJQAAAEACADQACADAEADIAKAEIAKAFIAWAIQAMAEAJAHQAJAGAGALQAGALAAAQQgBAPgGAMQgGALgKAIQgKAHgMAEQgMAFgNAAIgUgBg");
	this.shape_307.setTransform(722.0269,461.25);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_308.setTransform(708.125,461.275);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgSBlQgKgCgKgEQgKgDgIgGQgJgGgGgJIALgOIALgQQAKANANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgHgGgKQgGgKABgPQAAgPAGgKQAGgMAJgGQAJgIAMgCQAMgEALAAQAQAAAPAGQAPAFALALIgXAhQgGgGgIgFQgIgEgIgCIgEAAIgEAAQgJAAgGAFQgHAEgBAJQAAAEACADQACADAEADIAKAEIAKAFIAWAIQAMAEAJAHQAJAGAGALQAGALAAAQQgBAPgGAMQgGALgKAIQgKAHgMAEQgMAFgNAAIgUgBg");
	this.shape_309.setTransform(684.5269,461.25);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIgkgGIA+jDIAUABIAWACIA4C9IgVAEIgVAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_310.setTransform(669.55,461.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AhEhfIAogDIACBUIAzgHIgChMIApAAIAFDBIgnAAIgDhLIg0ACIACBIIgpAFg");
	this.shape_311.setTransform(653.825,461.35);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_312.setTransform(630.475,461.275);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgDBiIgUgBIADiaIgvABIADgqIBCACIBCADIgDAmIgugBIgCBNIgBBOIgTgBg");
	this.shape_313.setTransform(617.825,461.175);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIglgGIA+jDIAVABIAVACIA4C9IgUAEIgUAFgAgUAfIAUgDIAVgCIgShEg");
	this.shape_314.setTransform(594.8,461.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIABAlIgVABIgVAAIgDjBIAigHQAQgDAPAAQAPAAANAEQAOADAKAIQALAJAGAMQAFAMABATQAAAUgJANQgJANgPAIIAvA+IgPANIgQAPIgegpgAgWhCIgNACIABA1IAIAAIAHAAQATAAALgHQAKgFABgOQACgOgJgIQgIgHgOgBIgPABg");
	this.shape_315.setTransform(579.25,461.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_316.setTransform(564.075,461.275);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgXhgIAqAAIAFDBIgUAAIgTAAg");
	this.shape_317.setTransform(552.775,461.25);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AggBbQgNgGgJgLQgJgMgEgPQgEgQAAgTIAEhrIAngBIgBA3IgBA2QAAAVAGAJQAGAJAPACIACAAIABAAQANAAAHgJQAHgKABgUIABg3IACg5IApACIgBA4IgCA3QAAASgFAPQgFAQgJAKQgJALgNAGQgMAGgQAAQgSgBgOgGg");
	this.shape_318.setTransform(540.5972,461.525);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAPBXIgHABIgIABQgRgBgPgIQgOgHgKgMQgKgMgFgQQgGgQgBgQQgCgUAEgUQAEgUALgQQAKgQAPgKQAQgKAVAAQASAAAOAHQAOAGAJAMQAKAMAGAPQAFAPACAQQABANgBANQgBAMgEANQgEAMgGAKQgGAKgJAIIAXATIgPAPIgOAPgAgOhDQgGAEgFAHQgFAIgDAJQgDAKgCAKQgBALACAKQABALAEAJQAFAJAHAGQAHAGALACIADAAQAIAAAHgEQAGgFAFgHQAFgHACgKQADgJABgKQAAgKgBgLQgCgLgEgJQgEgJgHgGQgGgGgJgCIgFAAQgHAAgHAEg");
	this.shape_319.setTransform(523.9067,462.425);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgXhgIAqAAIAFDBIgUAAIgTAAg");
	this.shape_320.setTransform(510.625,461.25);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgSBlQgKgCgKgEQgKgDgIgGQgJgGgGgJIALgOIALgQQAKANANAEQANAEANAAQAQgBAIgIQAIgHgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgHgGgKQgGgKABgPQAAgPAGgKQAGgMAJgGQAJgIAMgCQAMgEALAAQAQAAAPAGQAPAFALALIgXAhQgGgGgIgFQgIgEgIgCIgEAAIgEAAQgJAAgGAFQgHAEgBAJQAAAEACADQACADAEADIAKAEIAKAFIAWAIQAMAEAJAHQAJAGAGALQAGALAAAQQgBAPgGAMQgGALgKAIQgKAHgMAEQgMAFgNAAIgUgBg");
	this.shape_321.setTransform(498.4769,461.25);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgXhgIAqAAIAFDBIgUAAIgTAAg");
	this.shape_322.setTransform(477.725,461.25);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AhEhWIAmgPIA8BzIgEhsIAUgBIAVAAIACDBIgkABIg9hxIACA3IABA4IgqAFg");
	this.shape_323.setTransform(465.775,461.125);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("Ag3hkIBwADIAAASIgBASIhJgDIgBAqIA6gDIABATIABASIg9ADIgBAtIBNgFIACAVIABAUIg8ADIg7ACg");
	this.shape_324.setTransform(442.425,461.275);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AggBbQgNgGgJgLQgJgMgEgPQgEgQAAgTIAEhrIAngBIgBA3IgBA2QAAAVAGAJQAGAJAPACIACAAIABAAQANAAAHgJQAHgKABgUIABg3IACg5IApACIgBA4IgCA3QAAASgFAPQgFAQgJAKQgJALgNAGQgMAGgQAAQgSgBgOgGg");
	this.shape_325.setTransform(427.7972,461.525);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAPBXIgHABIgIABQgRgBgPgIQgOgHgKgMQgKgMgFgQQgGgQgBgQQgCgUAEgUQAEgUALgQQAKgQAPgKQAQgKAVAAQASAAAOAHQAOAGAJAMQAKAMAGAPQAFAPACAQQABANgBANQgBAMgEANQgEAMgGAKQgGAKgJAIIAXATIgPAPIgOAPgAgOhDQgGAEgFAHQgFAIgDAJQgDAKgCAKQgBALACAKQABALAEAJQAFAJAHAGQAHAGALACIADAAQAIAAAHgEQAGgFAFgHQAFgHACgKQADgJABgKQAAgKgBgLQgCgLgEgJQgEgJgHgGQgGgGgJgCIgFAAQgHAAgHAEg");
	this.shape_326.setTransform(411.1067,462.425);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("Ag3hFIAiABIgIgKIgHgKIAwgsIAYAcIgZASIgYATIBGACIAAARIgBASIhJgCIgBAoIA6gDIABATIABATIg9AEIgBAtIBNgFIACAUIABAUIg8ADIg7ADg");
	this.shape_327.setTransform(386.675,458.125);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgZB+QgNgCgLgEQgLgFgKgGQgKgHgHgKIALgPIAMgQQAKAMAPAGQAQAGASAAIADAAIACAAQALgBAIgDQAJgDAFgGQAGgFACgHQADgHgCgHQgDgKgJgHQgKgGgNgFIgbgLQgOgGgMgHQgMgIgIgMQgHgNAAgTQABgRAHgNQAHgNALgJQALgIAOgEQAOgFAOAAQATAAASAGQASAGAPAMIgYAkQgKgJgNgFQgNgFgOAAQgNAAgKAGQgKAHgBAOQAAAHADAFQAEAFAFADQAGAEAJADIAQAHQAMAEAOAGQAOAFALAJQALAIAIANQAHANAAASQgBATgJAPQgIAOgMAJQgNAKgQAFQgPAEgQABQgLAAgMgCg");
	this.shape_328.setTransform(370.1016,458.975);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAAAnQgHAAgGgDQgHgDgEgFQgFgFgDgGQgEgHgBgGQgBgHADgHQADgIAGgGQAGgGAHgEQAIgEAGAAQAQAAAJAJQALAKABAOQABAHgDAIQgCAIgFAGQgFAGgHAEQgGAEgIABIgDAAg");
	this.shape_329.setTransform(918.0917,565.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPARgKQAQgJAUAAQAWAAARAKQAQAJALAQQAKAPAGAUQAEAUAAAUQgBAUgEATQgGATgKAQQgLAQgQAJQgPAKgXAAQgVgBgSgKgAgPg8QgHAEgGAIQgFAIgDAKQgDALgCALQgBALABAMQACAMAFAKQAFAKAHAHQAIAGAMACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgGgHgLgCIgFAAQgIAAgHAFg");
	this.shape_330.setTransform(903.7002,558.675);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("Ag/hpIAWAAIAXgBIgCCqIBWgCIgCAWIAAAWIiBABg");
	this.shape_331.setTransform(887.35,558.625);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AARBHIgegsIgNgBIgLgBIAAAoIABApIgWABIgXABIgDjTQATgFASgDQASgDAQAAQAQAAAPAEQAPAEALAIQALAJAHAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIghgsgAgYhJIgOACIABA6IAIABIAJAAQAUAAALgHQAMgHACgPQABgPgJgIQgKgIgQgBIgPAAg");
	this.shape_332.setTransform(871.8,558.725);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgVAiIAVgDIAXgDIgThKg");
	this.shape_333.setTransform(854,558.85);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("Ag/hpIAWAAIAXgBIgCCqIBWgCIgCAWIgBAWIiAABg");
	this.shape_334.setTransform(838.3,558.625);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgcBnQgPgIgLgOQgKgOgFgTQgFgSgBgTQAAggAIgXQAJgXANgPQANgPARgGQAPgHASAAQAfAAAbARIgVAmQgIgGgIgEQgJgDgIAAQgLAAgKAFQgKAFgHAKQgJAKgEAOQgFAPAAASQAAAMADALQACALAGAIQAGAJAJAFQAJAFANAAIAIgCIAIgDIAEgpIgggDIAEgkIBGADIgEAuIgEAwQgLAPgQAHQgPAHgSAAQgUAAgQgIg");
	this.shape_335.setTransform(822.6,558.675);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("Ag8huIB6AEIAAATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBUgGIACAWIACAXIhCADIhBADg");
	this.shape_336.setTransform(806.9,558.725);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AARBHIgegsIgNgBIgMgBIABAoIABApIgWABIgXABIgDjTQATgFASgDQASgDAQAAQAQAAAPAEQAPAEALAIQALAJAHAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIghgsgAgXhJIgPACIAAA6IAJABIAJAAQAVAAALgHQAKgHACgPQACgPgJgIQgKgIgQgBIgOAAg");
	this.shape_337.setTransform(791.35,558.725);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AARBHIgegsIgNgBIgMgBIABAoIABApIgWABIgXABIgDjTQATgFASgDQASgDAQAAQAQAAAPAEQAPAEALAIQALAJAHAOQAGANAAAUQAAAWgJAPQgKAOgQAIIA0BFIgRAOIgSAPIghgsgAgXhJIgPACIAAA6IAJABIAJAAQAVAAALgHQAKgHACgPQACgPgJgIQgJgIgRgBIgOAAg");
	this.shape_338.setTransform(773.9,558.725);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAXABIAXABIA9DPIgWAFIgXAFgAgWAiIAWgDIAXgDIgThKg");
	this.shape_339.setTransform(756.1,558.85);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_340.setTransform(728.7518,558.675);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAXAAAQAKQAQAJALAQQAKAPAGAUQAEAUAAAUQgBAUgFATQgFATgKAQQgLAQgQAJQgPAKgXAAQgWgBgRgKgAgOg8QgIAEgGAIQgFAIgDAKQgEALgBALQgBALACAMQABAMAEAKQAFAKAIAHQAIAGAMACIADAAQAKAAAGgEQAIgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgHgHgKgCIgFAAQgIAAgGAFg");
	this.shape_341.setTransform(711.3502,558.675);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AhNBoIgXgBIADhmIAChmIAcgCIAcgBIAnCEIAoiBIAcgCIAcgBIADBmIACBlIgXABIgWACIgBh9IgRA2IgSA2IgUgBIgUgBIgihqIgBCAIgWgBg");
	this.shape_342.setTransform(691.025,558.85);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("Ag8huIB6AEIAAATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBUgGIACAWIACAXIhCADIhBADg");
	this.shape_343.setTransform(672.75,558.725);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AhIBrIgFjRIAHgBIARgDIAUgCIATgBIAFAAQARABAQAHQAPAGAMAMQAMANAHARQAHASABAYIAAAOIgBAPQgDAVgJARQgJARgOAMQgOAMgSAGQgQAHgVAAgAgXhFIgLACIAECFIADAAIADAAQAPAAAKgFQAMgGAHgJQAHgKAEgOQADgOAAgPQAAgcgMgRQgMgRgXAAIgKAAg");
	this.shape_344.setTransform(656.7875,558.725);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQALAPAEAUQAFAUAAAUQgBAUgFATQgEATgLAQQgKAQgRAJQgQAKgWAAQgWgBgRgKgAgPg8QgHAEgGAIQgFAIgDAKQgEALgBALQgBALABAMQACAMAEAKQAFAKAJAHQAHAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKABgLQAAgLgBgMQgCgMgFgKQgEgJgHgHQgIgHgJgCIgGAAQgIAAgHAFg");
	this.shape_345.setTransform(638.6002,558.675);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AhMhjQASgFARgDQARgDAPAAQARAAARAEQAPAFAMAJQAMAKAGANQAHAOgBAUQAAAVgGAOQgIAPgMAKQgMAJgQAEQgQAGgSAAIgQgBIABBCIgXABIgWABgAgThFIgLACIABBGIAEAAIAEABQAKAAAIgCQAJgBAHgDQAIgFAGgIQAEgHACgMQACgPgKgJQgKgJgPgCIgFAAIgEgBIgKABg");
	this.shape_346.setTransform(621.3,558.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("Agdg4IA7ACIgPBuIgrABg");
	this.shape_347.setTransform(599.025,567.325);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("Ag8hLIAkABIgIgLIgHgLIAzgwIAbAeIgbAUIgbAVIBOACIgBATIgBATIhPgCIgBAtIA/gEIABAVIABAUIhDAFIgBAwIBVgFIABAWIACAWIhCAEIhBACg");
	this.shape_348.setTransform(587.65,555.25);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgZhqIAtAAIAHDUIgXAAIgVABg");
	this.shape_349.setTransform(575.3,558.675);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AhEBsIgHjRIALgBIAUgDIAYgCIAUgBQANAAANACQAMADAJAGQAJAGAEAJQAFAKAAAPQAAAPgGAMQgGAMgLAJQARAIAIAMQAJAOgBAQQAAAMgHAMQgGANgNAJQgMAKgTAGQgSAGgaAAgAgcATIABAwIAGABIAGAAIAOgBQAGgCAHgDQAGgDAFgGQAEgFABgIQABgJgGgIQgGgJgNgFQgQAGgQAEgAgehCIABAsQAPgDAKgDQAJgDAGgEQAGgFADgFQACgFAAgGQAAgHgFgEQgFgEgMgBQgKABgUAFg");
	this.shape_350.setTransform(562.3014,558.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AhNBoIgXgBIADhmIAChmIAcgCIAcgBIAnCEIAoiBIAcgCIAcgBIADBmIACBlIgXABIgWACIgBh9IgRA2IgSA2IgUgBIgUgBIgihqIgBCAIgWgBg");
	this.shape_351.setTransform(543.175,558.85);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgWAiIAWgDIAXgDIgUhKg");
	this.shape_352.setTransform(523.75,558.85);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AAHBwQgOAAgOgGQgPgGgLgNQgLgMgHgTQgIgTAAgaQAAgeAIgXQAGgXANgOQALgPAPgJQAQgHAOgBQATAAAPAFQAPAFAOAMIgYAmQgHgJgIgDQgHgDgJgBQgNAAgJAIQgKAIgGALQgGAMgDANQgCAOAAALQAAAOACALQAEAKAFAIQAGAHAHAEQAHAEAGAAQAZAAAPgUIAVAiQgKANgPAIQgOAIgQABg");
	this.shape_353.setTransform(507.85,558.65);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_354.setTransform(482.5,558.725);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_355.setTransform(466.4725,558.975);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAQBfIgHABIgIABQgUgBgPgIQgQgIgLgOQgLgNgGgRQgGgRgCgSQgCgVAFgWQAFgXALgRQALgSARgLQASgLAWAAQAUAAAPAIQAPAHALANQAKAMAHARQAGARABARQACAPgCAOQgBANgEAOQgEANgHALQgHALgJAIIAYAWIgPARIgQAQgAgPhJQgHAEgGAIQgFAIgDAKQgEALgBALQgBAMABALQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKAAgKQABgMgCgMQgBgMgFgKQgEgJgIgHQgHgHgKgCIgFAAQgIAAgHAFg");
	this.shape_356.setTransform(448.2589,559.975);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AglBjQgRgKgLgPQgLgQgFgUQgFgTAAgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQALAPAEAUQAFAUAAAUQgBAUgFATQgEATgLAQQgKAQgRAJQgQAKgWAAQgWgBgQgKgAgPg8QgHAEgGAIQgFAIgDAKQgEALgBALQgBALABAMQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKABgLQAAgLgCgMQgBgMgEgKQgFgJgIgHQgHgHgJgCIgGAAQgHAAgIAFg");
	this.shape_357.setTransform(419.3502,558.675);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AARBHIgegsIgNgBIgMgBIABAoIABApIgWABIgXABIgDjTQATgFASgDQASgDAQAAQAQAAAPAEQAPAEALAIQALAJAHAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIghgsgAgXhJIgPACIAAA6IAJABIAJAAQAVAAALgHQAKgHADgPQABgPgJgIQgKgIgQgBIgOAAg");
	this.shape_358.setTransform(401.65,558.725);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_359.setTransform(383.7225,558.975);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgVBrQgMgFgKgGQgKgGgHgJQgHgIgEgKIAPgPIAPgOQAHANAKAIQAKAJAJABIACAAIABAAQAOAAAJgPQAKgPAAgdQgBgagJguIhBAFIgCgVIgBgWIBpgFIAEAXIAFAdIADAeIABAdQAAASgCASQgDAUgIAPQgHARgPAKQgNAKgWAAQgLAAgLgDg");
	this.shape_360.setTransform(367.1,558.75);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_361.setTransform(924.25,511.125);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_362.setTransform(910.475,511);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("Agdg4IA7ACIgPBuIgrABg");
	this.shape_363.setTransform(889.775,519.725);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPARgKQAQgJAUAAQAWAAARAKQAQAJALAQQAKAPAFAUQAFAUAAAUQgBAUgEATQgGATgKAQQgLAQgQAJQgPAKgXAAQgVgBgSgKgAgPg8QgHAEgGAIQgFAIgDAKQgDALgCALQgBALABAMQACAMAFAKQAFAKAHAHQAJAGALACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgGgHgLgCIgFAAQgIAAgHAFg");
	this.shape_364.setTransform(876.2502,511.075);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AhNBoIgXAAIADhnIAChmIAcgBIAcgCIAnCEIAoiBIAcgBIAcgCIADBmIACBlIgXABIgWACIgBh9IgRA2IgSA2IgUgBIgUgBIgihqIgBCAIgWgBg");
	this.shape_365.setTransform(855.925,511.25);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_366.setTransform(836.4018,511.075);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgahqIAuAAIAHDUIgWAAIgWABg");
	this.shape_367.setTransform(823.55,511.075);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AhNBoIgXAAIADhnIAChmIAcgBIAcgCIAnCEIAoiBIAcgBIAcgCIADBmIACBlIgXABIgWACIgBh9IgRA2IgSA2IgUgBIgUgBIgihqIgBCAIgWgBg");
	this.shape_368.setTransform(808.075,511.25);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("Ag/hpIAWAAIAXgBIgCCqIBWgCIgBAWIgBAWIiBABg");
	this.shape_369.setTransform(780.5,511.025);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_370.setTransform(765.75,511.125);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AAABrIgVgBIABhSIg/hsIAmgXIAtBXIAYgrIAWgqIAmAWQgQAZgPAdQgPAcgPAYIgBBVIgWgBg");
	this.shape_371.setTransform(740.95,511.025);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQALAPAEAUQAGAUgBAUQgBAUgFATQgEATgLAQQgKAQgRAJQgQAKgWAAQgWgBgRgKgAgPg8QgHAEgGAIQgFAIgDAKQgEALgBALQgBALABAMQACAMAEAKQAFAKAJAHQAHAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKABgLQAAgLgBgMQgCgMgFgKQgEgJgHgHQgIgHgJgCIgGAAQgIAAgHAFg");
	this.shape_372.setTransform(723.6502,511.075);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_373.setTransform(705.5018,511.075);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPARgKQAQgJAUAAQAWAAARAKQAQAJALAQQAKAPAFAUQAFAUAAAUQgBAUgEATQgGATgKAQQgLAQgQAJQgPAKgXAAQgVgBgSgKgAgPg8QgHAEgGAIQgFAIgDAKQgDALgCALQgBALABAMQACAMAFAKQAFAKAHAHQAJAGALACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgGgHgLgCIgFAAQgIAAgHAFg");
	this.shape_374.setTransform(678.2502,511.075);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AhLheIAqgQIBBB+IgEh3IAWAAIAXgBIADDTIgoABIhDh7IACA8IACA+IguAEg");
	this.shape_375.setTransform(660.35,510.925);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQAKAPAGAUQAEAUAAAUQgBAUgFATQgFATgKAQQgLAQgQAJQgPAKgXAAQgWgBgRgKgAgOg8QgIAEgGAIQgFAIgDAKQgEALgBALQgBALACAMQABAMAEAKQAFAKAIAHQAIAGAMACIADAAQAKAAAGgEQAIgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgHgHgKgCIgFAAQgIAAgGAFg");
	this.shape_376.setTransform(632.6002,511.075);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_377.setTransform(616.675,511);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_378.setTransform(601.2018,511.075);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_379.setTransform(585.95,511.125);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AglBjQgRgKgLgPQgLgQgFgUQgFgTAAgUQABgUAFgUQAGgTALgPQALgPAQgKQARgJAUAAQAXAAAQAKQAQAJALAQQALAPAEAUQAFAUAAAUQgBAUgFATQgFATgKAQQgLAQgQAJQgQAKgWAAQgVgBgRgKgAgPg8QgHAEgFAIQgGAIgDAKQgEALgBALQgBALABAMQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgEgKQgFgJgIgHQgHgHgKgCIgFAAQgHAAgIAFg");
	this.shape_380.setTransform(559.2002,511.075);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AhIBrIgFjRIAHgBIARgDIAUgCIATgBIAFAAQARABAQAHQAPAGAMAMQAMANAHARQAHASABAYIAAAOIgBAPQgDAVgJARQgJARgOAMQgOAMgSAGQgQAHgVAAgAgXhFIgLACIAECFIADAAIADAAQAPAAAKgFQAMgGAHgJQAHgKAEgOQADgOAAgPQAAgcgMgRQgMgRgXAAIgKAAg");
	this.shape_381.setTransform(541.0875,511.125);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQAKAPAGAUQAEAUAAAUQgBAUgEATQgGATgKAQQgKAQgRAJQgPAKgXAAQgWgBgRgKgAgPg8QgHAEgGAIQgFAIgDAKQgEALgBALQgBALABAMQACAMAFAKQAEAKAIAHQAJAGALACIADAAQAKAAAGgEQAIgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgHgHgKgCIgFAAQgIAAgHAFg");
	this.shape_382.setTransform(522.9002,511.075);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_383.setTransform(506.975,511);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgmCOQgQgKgLgPQgLgQgFgUQgGgTABgVQAAgUAGgUQAGgSALgPQALgQAQgJIAKgEIgKgPIgMgQIBAg7IAiAmIglAbIgfAWIgHAFIgBgCIAIgDIgIADIABACIAHgFQAKgCAJAAQAWAAARAJQAQAKALAPQAKAQAFATQAFAUAAAUQgBAUgFAUQgEATgLAQQgLAPgPAKQgRAKgWAAQgWgBgRgKgAgPgRQgHAEgGAIQgFAHgDAKQgEAKgBALQgBAMACAMQABANAEAJQAFALAJAGQAHAHAMACIADAAQAJAAAHgEQAIgGAFgIQAFgHADgLQADgKABgLQAAgNgBgMQgCgLgFgKQgEgIgHgHQgIgIgJgBIgGAAQgIgBgHAGg");
	this.shape_384.setTransform(480.7502,506.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_385.setTransform(462.6018,511.075);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgVAiIAVgDIAXgDIgThKg");
	this.shape_386.setTransform(446.2,511.25);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AhLhjQARgGARgCQARgDAOAAQATAAAQAEQAPAFAMAJQALAJAHAOQAGAOABAUQAAAVgHAOQgIAPgLAKQgNAKgQADQgQAGgSAAIgQgBIAABCIgVABIgXABgAgThFIgLACIABBGIAEAAIAEABQAJAAAKgCQAIgBAIgDQAHgFAFgIQAGgHABgMQACgPgKgJQgJgJgQgCIgEAAIgFgBIgKABg");
	this.shape_387.setTransform(429.55,510.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("Ag8huIB6AEIAAATIgBAUIhQgDIAAAuIA+gEIACAVIABAUIhDAEIgBAxIBUgGIACAWIACAXIhCADIhBADg");
	this.shape_388.setTransform(403.9,511.125);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_389.setTransform(387.8725,511.375);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAQBfIgHABIgIABQgUgBgPgIQgQgIgLgOQgLgNgGgRQgGgRgCgSQgCgVAFgWQAFgXALgRQALgSARgLQASgLAWAAQAUAAAPAIQAPAHALANQAKAMAHARQAGARABARQACAPgCAOQgBANgEAOQgEANgHALQgHALgJAIIAYAWIgPARIgQAQgAgPhJQgHAEgGAIQgFAIgDAKQgEALgBALQgBAMABALQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKAAgKQABgMgCgMQgBgMgFgKQgEgJgIgHQgHgHgKgCIgFAAQgIAAgHAFg");
	this.shape_390.setTransform(369.6589,512.375);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("Ag8huIB6AEIAAATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBUgGIACAWIACAXIhCADIhBADg");
	this.shape_391.setTransform(913.05,463.525);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AhIBrIgFjRIAHgBIARgDIAUgCIATgBIAFAAQARABAQAHQAPAGAMAMQAMANAHARQAHASABAYIAAAOIgBAPQgDAVgJARQgJARgOAMQgOAMgSAGQgQAHgVAAgAgXhFIgLACIAECFIADAAIADAAQAPAAAKgFQAMgGAHgJQAHgKAEgOQADgOAAgPQAAgcgMgRQgMgRgXAAIgKAAg");
	this.shape_392.setTransform(897.0875,463.525);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_393.setTransform(879.8018,463.475);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_394.setTransform(864.55,463.525);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AhIBrIgFjRIAHgBIARgDIAUgCIATgBIAFAAQARABAQAHQAPAGAMAMQAMANAHARQAHASABAYIAAAOIgBAPQgDAVgJARQgJARgOAMQgOAMgSAGQgQAHgVAAgAgXhFIgLACIAECFIADAAIADAAQAPAAAKgFQAMgGAHgJQAHgKAEgOQADgOAAgPQAAgcgMgRQgMgRgXAAIgKAAg");
	this.shape_395.setTransform(848.5875,463.525);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQABgUAFgUQAGgTALgPQALgPARgKQAQgJAUAAQAWAAARAKQAQAJALAQQAKAPAFAUQAFAUAAAUQgBAUgEATQgGATgKAQQgLAQgQAJQgQAKgWAAQgVgBgSgKgAgPg8QgHAEgFAIQgGAIgDAKQgDALgCALQgBALABAMQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgEgKQgFgJgIgHQgGgHgLgCIgFAAQgHAAgIAFg");
	this.shape_396.setTransform(820.5502,463.475);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AARBHIgfgsIgMgBIgLgBIABAoIAAApIgWABIgWABIgEjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEALAIQAMAJAGAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIghgsgAgYhJIgOACIABA6IAIABIAJAAQAUAAALgHQAMgHACgPQABgPgJgIQgJgIgRgBIgPAAg");
	this.shape_397.setTransform(802.85,463.525);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_398.setTransform(786.2,463.525);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AhMhkQATgEAQgDQARgDAPAAQARAAAQAEQARAFALAJQALAJAHAOQAGAOAAAUQAAAVgHAOQgGAOgNALQgMAKgQADQgRAGgRgBIgRAAIACBCIgXABIgWABgAgThFIgLACIABBHIAEAAIAEAAQAJAAAJgCQAJgBAHgDQAIgFAGgIQAEgHACgMQACgPgKgJQgKgJgPgCIgFAAIgEgBIgKABg");
	this.shape_399.setTransform(771.05,463.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("Agdg4IA7ACIgPBuIgrABg");
	this.shape_400.setTransform(748.775,472.125);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_401.setTransform(736.1518,463.475);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgWAiIAWgDIAXgDIgUhKg");
	this.shape_402.setTransform(719.75,463.65);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AhNBoIgXAAIADhnIAChmIAcgBIAcgCIAnCEIAoiBIAcgBIAcgCIADBmIACBlIgXABIgWADIgBh9IgRA1IgSA2IgUAAIgUgCIgihpIgBB/IgWgBg");
	this.shape_403.setTransform(700.075,463.65);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("Ag8huIB6AEIAAATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBUgGIACAWIACAXIhCADIhBADg");
	this.shape_404.setTransform(681.8,463.525);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AhAhpIAXAAIAWgBIgBCqIBWgCIgCAWIgBAWIiAABg");
	this.shape_405.setTransform(667.6,463.425);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AhEBsIgHjRIALgBIAUgCIAYgDIAUgBQANAAANADQAMACAJAGQAJAGAEAJQAFAKAAAPQAAAQgGALQgGALgLAKQARAIAIANQAJAOgBAPQAAAMgHAMQgGANgNAJQgMAKgTAGQgSAGgaAAgAgcATIABAwIAGABIAGAAIAOgBQAGgCAHgDQAGgDAFgGQAEgFABgIQABgJgGgIQgGgJgNgFQgQAHgQADgAgehCIABAsQAPgDAKgDQAJgDAGgEQAGgEADgGQACgGAAgFQAAgHgFgEQgFgFgMAAQgKAAgUAGg");
	this.shape_406.setTransform(651.9014,463.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQAKAPAGAUQAEAUAAAUQgBAUgEATQgGATgKAQQgKAQgRAJQgPAKgXAAQgWgBgRgKgAgPg8QgHAEgGAIQgFAIgDAKQgEALgBALQgBALABAMQACAMAFAKQAEAKAIAHQAJAGALACIADAAQAKAAAGgEQAIgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgHgHgKgCIgFAAQgIAAgHAFg");
	this.shape_407.setTransform(634.0502,463.475);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AASBHIgggsIgLgBIgMgBIABAoIAAApIgWABIgWABIgEjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEAMAIQALAJAGAOQAGANAAAUQAAAWgKAPQgJAOgPAIIAzBFIgRAOIgSAPIgggsgAgYhJIgPACIACA6IAIABIAIAAQAVAAALgHQALgHADgPQACgPgKgIQgJgIgQgBIgQAAg");
	this.shape_408.setTransform(616.35,463.525);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AhLhkQARgEARgDQARgDAOAAQATAAAPAEQAQAFAMAJQALAJAHAOQAGAOABAUQAAAVgIAOQgGAOgNALQgMAKgQADQgQAGgSgBIgRAAIABBCIgVABIgXABgAgThFIgLACIABBHIAEAAIAEAAQAJAAAKgCQAIgBAIgDQAHgFAFgIQAFgHACgMQABgPgJgJQgKgJgPgCIgEAAIgFgBIgKABg");
	this.shape_409.setTransform(599.3,463.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_410.setTransform(572.4018,463.475);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQAKAPAFAUQAFAUAAAUQAAAUgGATQgEATgLAQQgLAQgPAJQgRAKgWAAQgWgBgRgKgAgPg8QgHAEgGAIQgFAIgDAKQgEALgBALQgBALACAMQABAMAEAKQAFAKAJAHQAHAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKABgLQAAgLgBgMQgCgMgFgKQgEgJgHgHQgIgHgKgCIgFAAQgIAAgHAFg");
	this.shape_411.setTransform(555.0002,463.475);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AhNBoIgXAAIADhnIAChmIAcgBIAcgCIAnCEIAoiBIAcgBIAcgCIADBmIACBlIgXABIgWADIgBh9IgRA1IgSA2IgUAAIgUgCIgihpIgBB/IgWgBg");
	this.shape_412.setTransform(534.675,463.65);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgahqIAuAAIAHDUIgXAAIgVABg");
	this.shape_413.setTransform(518.8,463.475);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgaBqIgehoIgdhpIAVgCIAVgCIAtCbIAUhNIAUhNIAWAEIAXAEIg2DOg");
	this.shape_414.setTransform(505.95,463.275);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_415.setTransform(489.2725,463.775);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_416.setTransform(474.175,463.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_417.setTransform(450.1,463.525);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_418.setTransform(434.0725,463.775);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AAQBfIgHABIgIABQgUgBgPgIQgQgIgLgOQgLgNgGgRQgGgRgCgSQgCgVAFgWQAFgXALgRQALgSARgLQASgLAWAAQAUAAAPAIQAPAHALANQAKAMAHARQAGARABARQACAPgCAOQgBANgEAOQgEANgHALQgHALgJAIIAYAWIgPARIgQAQgAgPhJQgHAEgGAIQgFAIgDAKQgEALgBALQgBAMABALQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKAAgKQABgMgCgMQgBgMgFgKQgEgJgIgHQgHgHgKgCIgFAAQgIAAgHAFg");
	this.shape_419.setTransform(415.8589,464.775);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("Ag8hLIAkABIgIgLIgHgLIAzgxIAbAfIgbAVIgbAUIBOABIgBAUIgBATIhPgDIgBAtIA/gDIABAVIABAUIhDAFIgBAwIBVgFIABAWIACAXIhCACIhBADg");
	this.shape_420.setTransform(389.1,460.05);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgcCKQgNgDgMgEQgNgFgLgHQgKgHgIgLIANgRIAMgRQALANARAGQARAIATgBIAEAAIACAAQAMAAAJgEQAKgEAGgGQAGgFACgIQADgHgCgJQgCgLgLgHQgLgHgOgFIgdgMQgQgGgNgIQgOgKgIgNQgIgNABgVQAAgTAIgOQAIgPAMgJQAMgJAPgFQAQgEAPgBQAVAAATAHQAUAGARANIgbAoQgLgKgOgGQgOgFgPgBQgPABgKAHQgLAHgBAPQgBAIAEAFQADAGAHAEQAGAEAJADIASAHIAdALQAPAHAMAJQANAJAIAOQAIANgBAVQgBAVgJAQQgJAPgNALQgOAKgSAFQgRAFgRAAQgMAAgOgBg");
	this.shape_421.setTransform(371.0265,461);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AAAAkQgGAAgGgDQgGgDgEgEQgFgFgDgGQgDgFgBgGQAAgHACgHQADgHAFgFQAFgGAHgDQAHgDAGgBQAOAAAJAJQAJAIACAOQAAAGgCAHQgCAHgFAGQgEAFgGAEQgGAEgHABIgDAAg");
	this.shape_422.setTransform(914.2258,554.975);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AAAAkQgGAAgGgDQgGgDgEgEQgFgFgDgGQgDgFgBgGQAAgHACgHQADgHAFgFQAFgGAHgDQAHgDAGgBQAOAAAJAJQAJAIACAOQAAAGgCAHQgCAHgFAGQgEAFgGAEQgGAEgHABIgDAAg");
	this.shape_423.setTransform(905.3758,554.975);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AAGBmQgNABgNgGQgNgFgKgMQgLgLgGgRQgGgSAAgYQAAgbAGgUQAHgWAKgNQALgPAOgGQAOgIANAAQARgBAOAFQAOAFANAKIgWAjQgHgHgHgDQgHgEgHAAQgNAAgIAHQgJAIgFALQgGAKgDAMQgCANAAAJQAAANADAKQADAKAFAGQAFAHAGAEQAHADAGAAQAWAAAOgSIATAfQgJAMgOAIQgNAGgOABg");
	this.shape_424.setTransform(845.025,548.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AhEhgIAogCIACBUIAzgHIgChMIApAAIAFDBIgnAAIgDhMIg0ADIACBIIgpAFg");
	this.shape_425.setTransform(821.125,548.75);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AAGBmQgNABgNgGQgNgFgKgMQgLgLgGgRQgGgSAAgYQAAgbAGgUQAHgWAKgNQALgPAOgGQAOgIANAAQARgBAOAFQAOAFANAKIgWAjQgHgHgHgDQgHgEgHAAQgNAAgIAHQgJAIgFALQgGAKgDAMQgCANAAAJQAAANADAKQADAKAFAGQAFAHAGAEQAHADAGAAQAWAAAOgSIATAfQgJAMgOAIQgNAGgOABg");
	this.shape_426.setTransform(601.475,548.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgSBlQgKgCgKgEQgKgEgIgFQgJgGgGgIIALgPIALgQQAKANANAEQANAEANAAQAQgBAIgHQAIgIgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgHgGgKQgGgKABgPQAAgPAGgKQAGgMAJgGQAJgIAMgCQAMgEALAAQAQAAAPAGQAPAFALALIgXAhQgGgGgIgFQgIgEgIgBIgEgBIgEAAQgJAAgGAFQgHAEgBAJQAAAEACADQACAEAEACIAKAEIAKAFIAWAIQAMAEAJAHQAJAGAGALQAGAKAAAQQgBAQgGALQgGAMgKAIQgKAHgMAEQgMAFgNAAIgUgBg");
	this.shape_427.setTransform(586.1769,548.65);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AAGBmQgNABgNgGQgNgFgKgMQgLgLgGgRQgGgSAAgYQAAgbAGgUQAHgWAKgNQALgPAOgGQAOgIANAAQARgBAOAFQAOAFANAKIgWAjQgHgHgHgDQgHgEgHAAQgNAAgIAHQgJAIgFALQgGAKgDAMQgCANAAAJQAAANADAKQADAKAFAGQAFAHAGAEQAHADAGAAQAWAAAOgSIATAfQgJAMgOAIQgNAGgOABg");
	this.shape_428.setTransform(539.875,548.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgSBlQgKgCgKgEQgKgEgIgFQgJgGgGgIIALgPIALgQQAKANANAEQANAEANAAQAQgBAIgHQAIgIgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgHgGgKQgGgKABgPQAAgPAGgKQAGgMAJgGQAJgIAMgCQAMgEALAAQAQAAAPAGQAPAFALALIgXAhQgGgGgIgFQgIgEgIgBIgEgBIgEAAQgJAAgGAFQgHAEgBAJQAAAEACADQACAEAEACIAKAEIAKAFIAWAIQAMAEAJAHQAJAGAGALQAGAKAAAQQgBAQgGALQgGAMgKAIQgKAHgMAEQgMAFgNAAIgUgBg");
	this.shape_429.setTransform(515.5769,548.65);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIgkgGIA+jDIAUABIAVACIA5C9IgVAEIgVAFgAgUAfIAUgDIAUgCIgRhEg");
	this.shape_430.setTransform(500.6,548.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgSBlQgKgCgKgEQgKgEgIgFQgJgGgGgIIALgPIALgQQAKANANAEQANAEANAAQAQgBAIgHQAIgIgCgKQgCgHgHgFIgSgIIgUgIQgLgEgKgGQgJgHgGgKQgGgKABgPQAAgPAGgKQAGgMAJgGQAJgIAMgCQAMgEALAAQAQAAAPAGQAPAFALALIgXAhQgGgGgIgFQgIgEgIgBIgEgBIgEAAQgJAAgGAFQgHAEgBAJQAAAEACADQACAEAEACIAKAEIAKAFIAWAIQAMAEAJAHQAJAGAGALQAGAKAAAQQgBAQgGALQgGAMgKAIQgKAHgMAEQgMAFgNAAIgUgBg");
	this.shape_431.setTransform(471.1769,548.65);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIAAAlIgUABIgUAAIgEjAIAigIQARgDAOAAQAPAAAOAEQAOAEAJAHQALAJAFAMQAHAMAAATQAAAUgJAOQgJAMgPAIIAvA+IgPANIgQAPIgegpgAgWhCIgNACIABA1IAIAAIAHAAQAUAAAKgHQAKgFABgOQACgPgIgGQgJgIgOgBIgPABg");
	this.shape_432.setTransform(400.8,548.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgiBbQgPgJgKgPQgKgOgFgSQgFgSABgSQAAgSAFgTQAGgRAKgOQAKgOAPgIQAPgJASAAQAVAAAPAJQAPAJAJAOQAKAPAEASQAFASAAASQgBASgEASQgFARgKAOQgJAOgPAKQgPAIgUABQgUgCgPgIgAgNg3QgHAEgFAHQgFAIgDAJQgDAKgBAKQgBAJABALQABAMAFAIQAEAJAIAHQAHAGAKACIADAAQAJAAAGgFQAHgEAEgHQAFgIADgJQACgKABgKQABgKgCgKQgBgLgEgKQgFgIgGgGQgHgHgJgBIgFAAQgHAAgGAEg");
	this.shape_433.setTransform(383.6477,548.65);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AhFhbQARgEAOgDQAQgCANAAQAQAAAPADQAPAEALAJQAKAJAGANQAGAMAAASQAAATgGANQgHANgLAJQgMAJgOAFQgPADgRAAIgOgBIABA+IgUABIgVAAgAgRg+IgKABIABBAIADAAIADAAQAJAAAJgBQAHgCAHgDQAIgDAEgHQAEgHACgLQACgOgKgIQgIgIgOgBIgEgBIgEAAIgJABg");
	this.shape_434.setTransform(367.85,548.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AAWAxIgTAAIADgwIACgwIA0ACIgUBfIgSgBgAgmAxIgTAAIgBgvIgBgtIAzgGIgMBjIgSgBg");
	this.shape_435.setTransform(940.3,494.55);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AAQBBIgdgpIgKAAIgLgBIABAkIAAAlIgUABIgVACIgDjCIAigHQARgDAOABQAPAAAOADQANADAKAJQALAIAFANQAGAMABARQAAAVgJAOQgJAMgPAHIAvA/IgPAOIgQANIgegogAgWhDIgNACIABA1IAIABIAHAAQATAAALgGQAKgHABgOQACgNgJgIQgIgHgOgBIgPAAg");
	this.shape_436.setTransform(895.25,505);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AAfBDIhAADIgKAfIglgGIA+jDIAVABIAWACIA3C9IgUAEIgUAFgAgUAfIAUgCIAUgDIgRhEg");
	this.shape_437.setTransform(879,505.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("Ag6hgIAVAAIAUAAIgBCbIBOgCIgBATIgBAUIh1ABg");
	this.shape_438.setTransform(864.625,504.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgZBeQgOgHgKgNQgJgNgFgRQgFgQAAgSQAAgdAIgVQAHgVAMgOQAMgNAQgGQAOgHAQAAQAcAAAYAQIgTAjQgHgGgHgDQgIgDgIAAQgKAAgJAFQgJAEgHAJQgHAJgEAOQgFANAAARQAAAKADAKQACAKAFAIQAFAIAJAEQAIAFALAAIAIgBIAIgEIADglIgdgDIAEghIA/ADIgDArIgDArQgKAOgPAGQgPAHgPAAQgSAAgPgIg");
	this.shape_439.setTransform(850.275,504.925);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AAQBBIgdgpIgKAAIgLgBIABAkIABAlIgVABIgVACIgDjCIAigHQAQgDAPABQAPAAANADQAOADAKAJQALAIAGANQAFAMABARQAAAVgJAOQgJAMgPAHIAvA/IgPAOIgQANIgegogAgWhDIgNACIABA1IAIABIAHAAQATAAALgGQAKgHABgOQACgNgJgIQgIgHgOgBIgPAAg");
	this.shape_440.setTransform(821.8,505);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AAQBBIgdgpIgKAAIgLgBIABAkIAAAlIgUABIgUACIgEjCIAigHQARgDAOABQAPAAAOADQAOADAJAJQALAIAFANQAHAMAAARQAAAVgJAOQgJAMgPAHIAwA/IgQAOIgQANIgegogAgWhDIgNACIAAA1IAJABIAHAAQATAAAKgGQALgHABgOQADgNgJgIQgJgHgPgBIgOAAg");
	this.shape_441.setTransform(805.9,505);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("Ag7AsIAKguIALguIASAAIATgBIgHBjgAAWgwIASAAIATgBIABBfIgzACg");
	this.shape_442.setTransform(774.55,494.55);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("Ag6hgIAVAAIAUAAIgBCbIBOgCIgBATIgBAUIh1ABg");
	this.shape_443.setTransform(735.025,504.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AAQBBIgdgpIgKAAIgLgBIABAkIAAAlIgUABIgVACIgDjCIAigHQARgDAOABQAPAAAOADQANADAKAJQALAIAFANQAGAMABARQAAAVgJAOQgJAMgPAHIAvA/IgPAOIgQANIgegogAgWhDIgNACIABA1IAIABIAHAAQATAAALgGQAKgHABgOQACgNgJgIQgIgHgOgBIgPAAg");
	this.shape_444.setTransform(650.9,505);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgiBaQgPgJgKgOQgKgOgFgSQgFgSABgRQAAgUAFgRQAGgSAKgOQAKgNAPgJQAPgIASAAQAVAAAPAIQAPAJAJAOQAKAOAEATQAFASAAASQgBASgEARQgFASgKAPQgJAOgPAIQgPAJgUAAQgUAAgPgKgAgNg3QgHAEgFAHQgFAIgDAJQgDAJgBAKQgBALABALQABAKAFAKQAEAIAIAHQAHAGAKABIADABQAJAAAGgEQAHgFAEgHQAFgHADgKQACgJABgLQABgKgCgLQgBgKgEgJQgFgJgGgHQgHgGgJgCIgFAAQgHAAgGAFg");
	this.shape_445.setTransform(569.1477,504.95);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AhVhtIAqgQIBXCkIgGidIAWgBIAWgBIADDyIgTABIgTAAIhZidIACBNIACBPIgtAEg");
	this.shape_446.setTransform(550.9,502.575);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgHCAQgIAAgHgCQgGgDgEgFQgEgFgCgFQgBgGAAgHQAAgGACgGIAGgLQAEgFAFgDQAFgDAHAAQAOAAAJAKQAJAKACAOQAAAGgCAGQgBAGgEAEQgEAFgGADQgFADgGAAgAgcAjQAEgPAJgMIAPgVIAOgUQAFgKABgJQABgOgIgIQgJgJgOAAQgLAAgKAEIgVAJIgNgoQAPgJAQgEQAQgEAPAAQANAAANAEQANAEAJAJQAJAJAHANQAFAMAAARQAAAQgGAOQgHAOgIAMIgSAWQgJALgFAKg");
	this.shape_447.setTransform(524.85,502.075);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AAfBDIhAADIgKAfIglgGIA+jDIAVABIAWACIA3C9IgUAEIgUAFgAgUAfIAUgCIAUgDIgRhEg");
	this.shape_448.setTransform(496.05,505.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AAQBBIgdgpIgKAAIgLgBIABAkIAAAlIgUABIgUACIgEjCIAigHQARgDAOABQAPAAAOADQAOADAJAJQALAIAFANQAHAMAAARQAAAVgJAOQgJAMgPAHIAvA/IgPAOIgQANIgegogAgWhDIgNACIABA1IAIABIAHAAQAUAAAKgGQAKgHABgOQACgNgIgIQgJgHgOgBIgPAAg");
	this.shape_449.setTransform(464.7,505);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("Ag6hgIAVAAIAUAAIgBCbIBOgCIgBATIgBAUIh1ABg");
	this.shape_450.setTransform(366.875,504.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIABAlIgVABIgVAAIgCjBIAhgHQAQgDAPAAQAPAAANAEQAOADALAIQAKAJAGAMQAFAMAAATQABAUgJANQgJANgOAIIAuA+IgPANIgQAPIgegpgAgWhCIgNACIABA1IAIAAIAHAAQATAAALgHQAKgFABgOQADgOgKgIQgIgHgOgBIgPABg");
	this.shape_451.setTransform(880.65,461.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AAGBmQgNABgNgGQgNgFgKgLQgLgMgGgRQgGgSAAgYQAAgbAGgUQAHgWAKgNQALgOAOgIQAOgGANgBQARgBAOAFQAOAEANALIgWAjQgHgHgHgEQgHgDgHAAQgNAAgIAIQgJAGgFAMQgGAKgDAMQgCANAAAJQAAANADAKQADAKAFAGQAFAHAGADQAHAEAGAAQAWAAAOgRIATAeQgJANgOAGQgNAIgOAAg");
	this.shape_452.setTransform(820.925,461.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AAfBeIhAACIgKAfIgkgGIA9jCIgFgJIAugsIAZAcIgRANIgSANIALABIA4C9IgUAEIgUAFgAgUA5IAUgDIAVgCIgShEg");
	this.shape_453.setTransform(781.65,458.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgDBiIgUgBIADiaIgvABIADgqIBCACIBCADIgDAmIgugBIgCBNIgBBOIgTgBg");
	this.shape_454.setTransform(767.625,461.175);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AhEhWIAmgPIA8BzIgEhsIAUgBIAVAAIACDBIgkABIg9hxIACA3IABA4IgqAFg");
	this.shape_455.setTransform(683.025,461.125);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIglgGIA+jDIAVABIAVACIA4C9IgUAEIgUAFgAgUAfIAUgDIAVgCIgShEg");
	this.shape_456.setTransform(667.6,461.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AggBbQgNgGgJgLQgJgMgEgPQgEgQAAgTIAEhrIAngBIgBA3IgBA2QAAAVAGAJQAGAJAPACIACAAIABAAQANAAAHgJQAHgKABgUIABg3IACg5IApACIgBA4IgCA3QAAASgFAPQgFAQgJAKQgJALgNAGQgMAGgQAAQgSgBgOgGg");
	this.shape_457.setTransform(651.5972,461.525);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AAGBmQgNABgNgGQgNgFgKgLQgLgMgGgRQgGgSAAgYQAAgbAGgUQAHgWAKgNQALgOAOgIQAOgGANgBQARgBAOAFQAOAEANALIgWAjQgHgHgHgEQgHgDgHAAQgNAAgIAIQgJAGgFAMQgGAKgDAMQgCANAAAJQAAANADAKQADAKAFAGQAFAHAGADQAHAEAGAAQAWAAAOgRIATAeQgJANgOAGQgNAIgOAAg");
	this.shape_458.setTransform(637.225,461.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIgkgGIA+jDIAUABIAVACIA5C9IgVAEIgUAFgAgUAfIAUgDIAVgCIgShEg");
	this.shape_459.setTransform(613,461.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIAAAlIgUABIgUAAIgEjBIAigHQARgDAOAAQAPAAAOAEQAOADAJAIQALAJAFAMQAHAMAAATQAAAUgJANQgJANgPAIIAvA+IgPANIgQAPIgegpgAgWhCIgNACIABA1IAIAAIAHAAQAUAAAJgHQALgFABgOQACgOgIgIQgJgHgOgBIgPABg");
	this.shape_460.setTransform(597.45,461.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgiBbQgPgKgKgOQgKgOgFgSQgFgSABgSQAAgSAFgTQAGgRAKgOQAKgOAPgIQAPgJASAAQAVAAAPAJQAPAJAJAPQAKAOAEASQAFASAAASQgBASgEASQgFARgKAOQgJAOgPAKQgPAIgUABQgUgCgPgIgAgNg3QgHAEgFAHQgFAIgDAJQgDAKgBAKQgBAJABAMQABALAFAIQAEAKAIAGQAHAGAKACIADAAQAJAAAGgFQAHgEAEgHQAFgIADgJQACgKABgKQABgKgCgKQgBgLgEgKQgFgIgGgGQgHgHgJgBIgFAAQgHgBgGAFg");
	this.shape_461.setTransform(522.7477,461.25);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("Ag6hgIAVAAIAUgBIgBCbIBOgCIgBAUIgBAVIh1ABg");
	this.shape_462.setTransform(507.775,461.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIAAAlIgUABIgUAAIgEjBIAigHQARgDAOAAQAPAAAOAEQAOADAJAIQALAJAFAMQAHAMAAATQAAAUgJANQgJANgPAIIAwA+IgQANIgQAPIgegpgAgWhCIgNACIAAA1IAJAAIAHAAQATAAAKgHQALgFABgOQADgOgJgIQgJgHgPgBIgOABg");
	this.shape_463.setTransform(493.6,461.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AAfBEIhAACIgKAfIglgGIA+jDIAVABIAVACIA4C9IgUAEIgUAFgAgUAfIAUgDIAVgCIgShEg");
	this.shape_464.setTransform(477.35,461.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("Ag6hgIAVAAIAUgBIgBCbIBOgCIgBAUIgBAVIh1ABg");
	this.shape_465.setTransform(462.975,461.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgZBeQgOgHgKgNQgJgNgFgRQgFgQAAgSQAAgdAIgVQAHgVAMgOQAMgNAQgGQAOgHAQAAQAcAAAYAQIgTAjQgHgGgHgDQgIgDgIAAQgKAAgJAFQgJAEgHAJQgHAJgEAOQgFANAAARQAAAKADAKQACAKAFAIQAFAIAJAEQAIAFALAAIAIgBIAIgEIADglIgdgDIAEghIA/ADIgDArIgDArQgKAOgPAGQgPAHgPAAQgSAAgPgIg");
	this.shape_466.setTransform(448.625,461.225);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AAQBBIgdgoIgKgBIgLgBIABAlIAAAlIgUABIgUAAIgEjBIAigHQARgDAOAAQAPAAAOAEQAOADAJAIQALAJAFAMQAHAMAAATQAAAUgJANQgJANgPAIIAvA+IgPANIgQAPIgegpgAgWhCIgNACIABA1IAIAAIAHAAQAUAAAJgHQALgFABgOQACgOgIgIQgJgHgOgBIgPABg");
	this.shape_467.setTransform(420.15,461.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AAQBBIgcgoIgLgBIgLgBIABAlIAAAlIgUABIgUAAIgDjBIAhgHQAQgDAPAAQAPAAANAEQAOADALAIQAKAJAFAMQAHAMgBATQAAAUgIANQgJANgOAIIAvA+IgQANIgQAPIgegpgAgVhCIgOACIAAA1IAJAAIAHAAQAUAAAJgHQALgFACgOQACgOgJgIQgJgHgPgBIgNABg");
	this.shape_468.setTransform(404.25,461.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AArBTIhaAEIgMAnIgngFIBOj2IAYABIAYACIBHDuIgWAFIgXAFgAghAuIBCgFIgchwg");
	this.shape_469.setTransform(386,459.125);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgWB8QgMgFgLgIQgJgJgGgMQgFgOAAgQQAAgQAGgOQAGgNAJgNIARgWQAJgKAGgLIAoAFQgEAPgIAMIgQAVIgNAUQgFAKgBAJQgBANAJAJQAHAIAOAAQALAAALgDQAKgEALgFIANAoQgPAJgQAEQgQAFgOgBQgOABgNgFgAgMhGQgKgKgBgOQAAgGACgGQABgGAEgEQADgFAGgDQAGgDAHAAIACAAQAJAAAGACQAGADAEAFQAEAFABAFQACAGAAAHQAAAGgCAGQgDAHgDAEQgEAFgFADQgGADgHAAQgNAAgJgKg");
	this.shape_470.setTransform(372.2,460.75);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AAAAlQgHAAgGgCQgGgDgEgFQgFgFgDgGQgDgGgBgGQgBgHADgHQADgHAFgGQAGgFAHgEQAHgDAGgBQAOAAAKAJQAJAJACAOQAAAHgCAGQgDAIgEAGQgFAFgGAEQgGAEgHABIgDAAg");
	this.shape_471.setTransform(833.3175,558.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_472.setTransform(819.7525,551.975);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_473.setTransform(802.925,551.85);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_474.setTransform(777.75,552.15);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AAAB+IgWgBIAChmIhLh9IAmgYIA5BpIAdgzIAegzIAlAWIgkA+IgkA9IgCBpIgWgBg");
	this.shape_475.setTransform(760.425,549.625);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AAAAlQgHAAgGgCQgGgDgEgFQgFgFgDgGQgDgGgBgGQgBgHADgHQADgHAFgGQAGgFAHgEQAHgDAGgBQAOAAAKAJQAJAJACAOQAAAHgCAGQgDAIgEAGQgFAFgGAEQgGAEgHABIgDAAg");
	this.shape_476.setTransform(737.5175,558.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AAQBDIgdgqIgLAAIgMgBIABAmIABAmIgVABIgVABIgDjHQARgFARgDQASgDAOAAQAQAAAOAEQAOAEALAIQAKAIAGANQAGANAAASQAAAWgJAOQgJAMgOAIIAwBBIgRAOIgQAOIgfgqgAgWhEQgGAAgJACIABA2IAIABIAIAAQAUAAALgHQAKgGACgOQACgPgKgHQgIgIgQgBIgNABg");
	this.shape_477.setTransform(725.3,552.025);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgVAgIAVgCIAVgEIgShFg");
	this.shape_478.setTransform(708.5,552.15);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_479.setTransform(692.275,551.85);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_480.setTransform(675.4025,551.975);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgYhkIArAAIAGDIIgVAAIgUABg");
	this.shape_481.setTransform(661.75,551.975);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AAGBpQgNAAgOgFQgNgGgLgLQgKgMgHgSQgGgSAAgZQAAgbAHgWQAGgVALgPQALgOAOgIQAOgGAPgBQARgBAOAFQAPAEANAMIgWAkQgHgIgIgDQgHgEgIAAQgNAAgIAHQgJAIgGALQgFALgEANQgCANAAAJQAAAOADAKQADAKAFAHQAGAHAGADQAHAEAGAAQAXAAAOgSIAUAgQgKAMgNAHQgOAIgOAAg");
	this.shape_482.setTransform(650.7,551.95);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_483.setTransform(635.175,551.85);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_484.setTransform(619.1225,552.275);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgnBkIgVAAIAChkIADhkIB0ADIgBATIgCATIhJgCIgBA2IA6ADIgCAnIg5gDIgBAiIgBAjIgUgBg");
	this.shape_485.setTransform(605.225,552);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgVAEIgVAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_486.setTransform(581.1,552.15);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_487.setTransform(555.45,552.15);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgZBkIgchiIgchjIAUgCIAVgCIApCTIAUhJIAThJIAUAEIAVADIgyDDg");
	this.shape_488.setTransform(539.35,551.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("Ag5hnIB0ADIgBASIgBATIhLgDIgBArIA8gDIABAUIABASIg/AEIgBAuIBQgFIABAVIACAVIg+ADIg9ACg");
	this.shape_489.setTransform(515.6,552.025);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_490.setTransform(502.575,551.925);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_491.setTransform(477.9025,551.975);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_492.setTransform(461.075,551.85);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgVAgIAVgCIAVgEIgShFg");
	this.shape_493.setTransform(435.9,552.15);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AhJBiIgVgBIAChgIAChgIAbgBIAagCIAlB8IAmh5IAagBIAbgCIADBgIABBgIgVABIgWABIAAh1IgRAyIgQAzIgTgBIgTAAIgghkIgBB4IgVgBg");
	this.shape_494.setTransform(417.3,552.15);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AAQBDIgdgqIgMAAIgLgBIABAmIABAmIgVABIgVABIgDjHQARgFARgDQARgDAPAAQAPAAAPAEQAOAEALAIQAKAIAGANQAGANAAASQAAAWgJAOQgJAMgOAIIAwBBIgRAOIgQAOIgfgqgAgWhEQgGAAgJACIABA2IAIABIAIAAQAUAAAKgHQALgGACgOQACgPgKgHQgJgIgPgBIgNABg");
	this.shape_495.setTransform(399.4,552.025);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_496.setTransform(381.6525,551.975);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgnBkIgVAAIAChkIADhkIB0ADIgBATIgCATIhJgCIgBA2IA6ADIgCAnIg5gDIgBAiIgBAjIgUgBg");
	this.shape_497.setTransform(366.975,552);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("Ag8hjIAVgBIAWAAIgCCgIBRgCIgCAVIgBAUIh4ABg");
	this.shape_498.setTransform(925.75,506.95);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_499.setTransform(910.75,507.15);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_500.setTransform(894.2225,507.275);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgaBhQgPgIgKgNQgJgOgFgQQgFgRAAgTQAAgdAIgXQAHgWANgOQAMgNAQgGQAPgHAQAAQAeAAAYAQIgTAkQgHgGgJgDQgIgDgHAAQgLAAgJAFQgJAEgIAKQgHAJgEANQgFAOAAASQAAALACAKQADAKAGAIQAFAIAJAFQAHAFANAAIAIgCQADgBAEgCIAEgnIgegCIAEgjIBBADIgDAsIgDAtQgLAOgPAHQgPAHgQAAQgTAAgPgIg");
	this.shape_501.setTransform(878.175,507);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgYhkIArAAIAGDIIgVAAIgUABg");
	this.shape_502.setTransform(865.65,506.975);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgBArIA6gDIACAUIACASIhAAEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_503.setTransform(845.05,507.025);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AhEBlIgFjFIAHgBIAPgCIATgDIASgBIAFAAQAQACAPAGQAPAGALALQALAMAGAQQAHARACAXIAAANIgBAPQgDATgJAQQgJAQgNAMQgNAKgQAHQgQAFgTAAgAgWhAIgLABIAEB+IAEAAIACAAQAPAAAJgGQAKgFAIgIQAGgKAEgNQADgMAAgPQAAgbgMgQQgLgQgWAAIgJABg");
	this.shape_504.setTransform(830,507);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("Agbg1IA3ADIgNBmIgpABg");
	this.shape_505.setTransform(808.8,515.15);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgVAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_506.setTransform(797,507.15);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("Ag5hnIB0ADIgBASIgBATIhLgDIAAArIA7gDIABAUIACASIhAAEIgBAuIBQgFIABAVIACAVIg+ADIg9ACg");
	this.shape_507.setTransform(781.7,507.025);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgTBoQgKgBgKgEQgKgEgJgGQgJgGgGgJIALgQIAMgPQAJANAOAEQANAEAOAAQAQgBAJgIQAIgHgDgLQgBgHgIgFQgHgEgLgEIgVgJQgMgEgJgGQgKgHgGgKQgGgLABgPQAAgQAGgLQAGgLAKgHQAJgHAMgEQAMgDAMAAQAQAAAQAFQAPAGAMALIgYAjQgGgHgJgEQgIgFgIgBIgEgBIgEAAQgJAAgHAFQgHAEgBAKQAAAEACADIAHAGIAJAFIALAEIAXAIQAMAFAJAHQAKAGAGALQAGALAAARQgBAQgHAMQgGAMgKAIQgKAIgMAEQgNAEgOAAIgUgBg");
	this.shape_508.setTransform(766.6019,506.975);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("Ag5hnIB0ADIgBASIgBATIhLgDIAAArIA7gDIABAUIACASIhAAEIgBAuIBQgFIABAVIACAVIg+ADIg9ACg");
	this.shape_509.setTransform(743,507.025);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_510.setTransform(727.8725,507.275);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AAPBaIgHABIgHAAQgTAAgOgIQgPgIgKgNQgLgMgFgQQgGgQgCgSQgBgTAEgVQAEgUALgSQAKgQAQgLQARgKAVAAQATAAAOAHQAOAIAKALQAKAMAGAQQAGAQACARQABANgBAOQgCAMgEANQgEAMgGAKQgGALgJAHIAXAVIgPAPIgOAQgAgOhFQgHAEgFAIQgFAHgDAKQgDAKgCALQgBALACAKQABALAEAKQAFAJAIAGQAHAHALABIADABQAJAAAGgFQAHgEAFgIQAFgIACgJQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_511.setTransform(710.7296,508.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_512.setTransform(683.5025,506.975);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("Ag8hjIAVgBIAWAAIgCCgIBRgCIgBAVIgCAUIh4ABg");
	this.shape_513.setTransform(668.1,506.95);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_514.setTransform(642.9025,506.975);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("Agcg1IA5ADIgPBmIgoABg");
	this.shape_515.setTransform(620.9,515.15);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_516.setTransform(609.1,507.15);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AhEBlIgFjFIAHgBIAQgCIATgDIARgBIAFAAQAQACAPAGQAPAGALALQALAMAHAQQAGARACAXIAAANIgBAPQgDATgJAQQgJAQgMAMQgNAKgRAHQgQAFgTAAgAgWhAIgKABIADB+IAEAAIACAAQAOAAAKgGQAKgFAIgIQAGgKAEgNQADgMAAgPQgBgbgKgQQgMgQgWAAIgJABg");
	this.shape_517.setTransform(592.65,507);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgVAFgAgVAgIAVgCIAWgEIgShFg");
	this.shape_518.setTransform(576.45,507.15);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_519.setTransform(562.025,506.925);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AARBDIgegqIgMAAIgKgBIABAmIAAAmIgVABIgWABIgCjHQARgFASgDQARgDAOAAQAPAAAPAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgegqgAgXhEQgFAAgIACIABA2IAIABIAHAAQAUAAAKgHQALgGABgOQACgPgIgHQgKgIgOgBIgPABg");
	this.shape_520.setTransform(547.95,507.025);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_521.setTransform(530.2025,506.975);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AhHheIAhgHQAPgDAOAAQARAAAPAFQAPAEALAIQAKAJAHANQAGAOAAASQAAAUgHANQgGAOgMAJQgMAJgPAFQgPAEgRAAIgPgBIABA/IgVABIgWABgAgShBIgKACIABBCIADABIAEAAQAJAAAJgCQAHgBAHgDQAIgEAFgHQAEgHABgMQADgOgJgJQgJgIgPgCIgFAAIgEAAIgJAAg");
	this.shape_522.setTransform(513.95,506.725);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_523.setTransform(487.7525,506.975);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("Agcg1IA5ADIgPBmIgoABg");
	this.shape_524.setTransform(465.75,515.15);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_525.setTransform(453.0025,506.975);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgUBlQgLgEgKgHQgIgGgHgHQgIgJgCgJIANgOIAPgNQAGANAJAHQAKAIAIABIADAAIABAAQAMAAAJgNQAJgOAAgcQAAgZgKgrIg9AFIgBgUIgBgVIBigFIAFAWIAEAbIADAcIACAcQAAAQgDASQgCATgIAOQgIAPgMALQgOAJgUAAQgLAAgKgDg");
	this.shape_526.setTransform(436.55,507.05);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("Ag5hnIB0ADIgBASIgBATIhLgDIAAArIA7gDIABAUIACASIhAAEIgBAuIBQgFIABAVIACAVIg+ADIg9ACg");
	this.shape_527.setTransform(423.05,507.025);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("Ag8hjIAVgBIAVAAIgBCgIBRgCIgBAVIgBAUIh5ABg");
	this.shape_528.setTransform(409.65,506.95);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("Ag8hjIAVgBIAVAAIgBCgIBRgCIgCAVIAAAUIh5ABg");
	this.shape_529.setTransform(396.25,506.95);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgBArIA6gDIACAUIACASIhAAEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_530.setTransform(382.35,507.025);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AhHheIAggHQAQgDAOAAQAQAAAQAFQAPAEALAIQALAJAGANQAGAOAAASQAAAUgGANQgHAOgMAJQgMAJgPAFQgPAEgRAAIgPgBIABA/IgVABIgVABgAgShBIgLACIABBCIAFABIADAAQAJAAAIgCQAIgBAIgDQAHgEAEgHQAGgHABgMQACgOgKgJQgJgIgOgCIgEAAIgFAAIgJAAg");
	this.shape_531.setTransform(368.1,506.725);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_532.setTransform(844.4725,462.275);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_533.setTransform(830.225,461.925);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AARBDIgegqIgMAAIgKgBIAAAmIABAmIgVABIgWABIgCjHQASgFAQgDQARgDAPAAQAPAAAPAEQAOAEALAIQAKAIAGANQAGANAAASQAAAWgJAOQgJAMgOAIIAwBBIgRAOIgQAOIgegqgAgXhEQgFAAgIACIABA2IAIABIAHAAQAUAAAKgHQALgGACgOQABgPgIgHQgKgIgOgBIgPABg");
	this.shape_534.setTransform(806.9,462.025);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_535.setTransform(790.1,462.15);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgYBkIgchiIgdhjIAVgCIAUgCIAqCTIAThJIAThJIAUAEIAWADIgzDDg");
	this.shape_536.setTransform(774,461.8);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("Ag8hjIAVgBIAWAAIgCCgIBRgCIgBAVIgBAUIh5ABg");
	this.shape_537.setTransform(760,461.95);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_538.setTransform(745,462.15);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AgTBoQgKgBgKgEQgKgEgJgGQgJgGgGgJIALgQIAMgPQAJANAOAEQANAEAOAAQAQgBAJgIQAIgHgDgLQgBgHgIgFQgHgEgLgEIgVgJQgMgEgJgGQgKgHgGgKQgGgLABgPQAAgQAGgLQAGgLAKgHQAJgHAMgEQAMgDAMAAQAQAAAQAFQAPAGAMALIgYAjQgGgHgJgEQgIgFgIgBIgEgBIgEAAQgJAAgHAFQgHAEgBAKQAAAEACADIAHAGIAJAFIALAEIAXAIQAMAFAJAHQAKAGAGALQAGALAAARQgBAQgHAMQgGAMgKAIQgKAIgMAEQgNAEgOAAIgUgBg");
	this.shape_539.setTransform(728.5019,461.975);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgVAFgAgVAgIAVgCIAWgEIgShFg");
	this.shape_540.setTransform(703.8,462.15);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AARBDIgegqIgLAAIgLgBIABAmIAAAmIgVABIgWABIgCjHQARgFASgDQARgDAOAAQAPAAAPAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgegqgAgXhEQgFAAgIACIABA2IAIABIAHAAQAUAAALgHQAKgGABgOQACgPgJgHQgIgIgPgBIgPABg");
	this.shape_541.setTransform(687.8,462.025);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgVAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_542.setTransform(671,462.15);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AhHheIAhgHQAPgDAOAAQAQAAAQAFQAPAEALAIQAKAJAHANQAGAOAAASQAAAUgHANQgGAOgMAJQgMAJgPAFQgPAEgRAAIgPgBIABA/IgVABIgWABgAgShBIgKACIABBCIADABIAEAAQAJAAAJgCQAHgBAIgDQAHgEAFgHQAEgHACgMQABgOgIgJQgKgIgOgCIgEAAIgFAAIgJAAg");
	this.shape_543.setTransform(655.35,461.725);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_544.setTransform(629.1525,461.975);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("Ag8hjIAVgBIAWAAIgCCgIBRgCIgBAVIgBAUIh5ABg");
	this.shape_545.setTransform(613.75,461.95);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AARBDIgegqIgLAAIgLgBIABAmIAAAmIgVABIgWABIgCjHQARgFASgDQARgDAOAAQAPAAAPAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgegqgAgXhEQgFAAgIACIABA2IAIABIAHAAQAUAAALgHQAKgGABgOQACgPgJgHQgIgIgPgBIgPABg");
	this.shape_546.setTransform(599.15,462.025);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgVAEIgVAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_547.setTransform(582.35,462.15);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("Ag8hjIAVgBIAWAAIgCCgIBRgCIgCAVIgBAUIh4ABg");
	this.shape_548.setTransform(567.55,461.95);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgaBhQgPgIgKgNQgJgOgFgQQgFgRAAgTQAAgdAIgXQAHgWANgOQAMgNAQgGQAPgHAQAAQAeAAAYAQIgTAkQgHgGgJgDQgIgDgHAAQgLAAgJAFQgJAEgIAKQgHAJgEANQgFAOAAASQAAALACAKQADAKAGAIQAFAIAJAFQAHAFANAAIAIgCQADgBAEgCIAEgnIgegDIAEgiIBBADIgDAsIgDAtQgLAOgPAHQgPAHgQAAQgTAAgPgIg");
	this.shape_549.setTransform(552.725,462);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgBArIA6gDIACAUIACASIhAAEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_550.setTransform(537.95,462.025);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AAQBDIgdgqIgLAAIgMgBIACAmIAAAmIgVABIgVABIgDjHQARgFARgDQASgDAOAAQAQAAAOAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgfgqgAgWhEQgGAAgJACIABA2IAIABIAIAAQAUAAALgHQAKgGABgOQACgPgJgHQgIgIgQgBIgNABg");
	this.shape_551.setTransform(523.35,462.025);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AAQBDIgdgqIgMAAIgLgBIABAmIABAmIgVABIgVABIgDjHQARgFARgDQARgDAPAAQAPAAAPAEQAOAEALAIQAKAIAGANQAGANAAASQAAAWgJAOQgJAMgOAIIAwBBIgRAOIgQAOIgfgqgAgWhEQgGAAgJACIABA2IAIABIAIAAQAUAAAKgHQALgGACgOQACgPgKgHQgJgIgPgBIgNABg");
	this.shape_552.setTransform(506.95,462.025);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgWAEIgVAFgAgVAgIAVgCIAVgEIgRhFg");
	this.shape_553.setTransform(490.15,462.15);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgTBoQgKgBgKgEQgKgEgJgGQgJgGgGgJIALgQIAMgPQAJANAOAEQANAEAOAAQAQgBAJgIQAIgHgDgLQgBgHgIgFQgHgEgLgEIgVgJQgMgEgJgGQgKgHgGgKQgGgLABgPQAAgQAGgLQAGgLAKgHQAJgHAMgEQAMgDAMAAQAQAAAQAFQAPAGAMALIgYAjQgGgHgJgEQgIgFgIgBIgEgBIgEAAQgJAAgHAFQgHAEgBAKQAAAEACADIAHAGIAJAFIALAEIAXAIQAMAFAJAHQAKAGAGALQAGALAAARQgBAQgHAMQgGAMgKAIQgKAIgMAEQgNAEgOAAIgUgBg");
	this.shape_554.setTransform(464.4019,461.975);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("Ag5hnIB0ADIgBASIgBATIhLgDIAAArIA7gDIABAUIACASIhAAEIgBAuIBQgFIABAVIACAVIg+ADIg9ACg");
	this.shape_555.setTransform(450.05,462.025);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AARBDIgegqIgMAAIgKgBIABAmIAAAmIgVABIgWABIgCjHQASgFARgDQARgDAOAAQAPAAAPAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgegqgAgXhEQgFAAgIACIABA2IAIABIAHAAQAUAAALgHQAKgGABgOQACgPgIgHQgKgIgOgBIgPABg");
	this.shape_556.setTransform(435.45,462.025);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("Ag5hnIB0ADIgBASIgBATIhLgDIgBArIA8gDIABAUIABASIg/AEIgBAuIBQgFIABAVIACAVIg+ADIg9ACg");
	this.shape_557.setTransform(419.75,462.025);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgYhkIArAAIAGDIIgVAAIgUABg");
	this.shape_558.setTransform(408.1,461.975);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_559.setTransform(395.5225,462.275);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AAPBaIgHABIgHAAQgTAAgOgIQgPgIgKgNQgLgMgFgQQgGgQgCgSQgBgTAEgVQAEgUALgSQAKgQAQgLQARgKAVAAQATAAAOAHQAOAIAKALQAKAMAGAQQAGAQACARQABANgBAOQgCAMgEANQgEAMgGAKQgGALgJAHIAXAVIgPAPIgOAQgAgOhFQgHAEgFAIQgFAHgDAKQgDAKgCALQgBALACAKQABALAEAKQAFAJAIAGQAHAHALABIADABQAJAAAGgFQAHgEAFgIQAFgIACgJQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_560.setTransform(378.3796,463.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:425.175}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:504.24}},{t:this.shape_26},{t:this.shape_25,p:{x:571.65}},{t:this.shape_24},{t:this.shape_23,p:{x:637.125}},{t:this.shape_22,p:{x:659.575}},{t:this.shape_21},{t:this.shape_20,p:{x:709.955}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:809.225}},{t:this.shape_16,p:{x:832.6933}},{t:this.shape_15,p:{x:855.575}},{t:this.shape_14},{t:this.shape_13,p:{x:904.3251}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:425.225,y:541.925}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:494.975,y:541.925}},{t:this.shape_6,p:{x:513.5174}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_53},{t:this.shape_52},{t:this.shape_10,p:{x:427.125,y:474.725}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_30,p:{x:491.975}},{t:this.shape_49},{t:this.shape_16,p:{x:556.1433}},{t:this.shape_23,p:{x:579.025}},{t:this.shape_17,p:{x:615.625}},{t:this.shape_13,p:{x:640.2751}},{t:this.shape_7,p:{x:667.125,y:474.725}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_22,p:{x:737.575}},{t:this.shape_20,p:{x:774.805}},{t:this.shape_15,p:{x:797.675}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:443.3787,y:541.725}},{t:this.shape_42},{t:this.shape_6,p:{x:489.4174}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_25,p:{x:440.25}},{t:this.shape_62},{t:this.shape_43,p:{x:475.7287,y:474.525}},{t:this.shape_7,p:{x:500.875,y:474.725}},{t:this.shape_13,p:{x:526.0751}},{t:this.shape_27,p:{x:557.14}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:419.0483}},{t:this.shape_115},{t:this.shape_114,p:{x:477.1734}},{t:this.shape_113,p:{x:500.0673,y:470.575}},{t:this.shape_112},{t:this.shape_111,p:{x:551.05}},{t:this.shape_110},{t:this.shape_109,p:{x:592.125,y:470.375}},{t:this.shape_108},{t:this.shape_107,p:{x:646.075,y:470.125}},{t:this.shape_106,p:{x:666.075,y:470.375}},{t:this.shape_105,p:{x:688.425}},{t:this.shape_104,p:{x:709.775,y:470.375}},{t:this.shape_103,p:{x:730.3556}},{t:this.shape_102,p:{x:764.4125,y:470.225}},{t:this.shape_101,p:{x:784.5}},{t:this.shape_100,p:{x:815.9556}},{t:this.shape_99,p:{x:837.7173,y:470.575}},{t:this.shape_98,p:{x:858.4556,y:470.175}},{t:this.shape_97,p:{x:877.875}},{t:this.shape_96,p:{x:897.9483}},{t:this.shape_95,p:{x:918.075}},{t:this.shape_94,p:{x:933.375}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:419.9483,y:529.525}},{t:this.shape_90,p:{x:453.475}},{t:this.shape_89},{t:this.shape_88,p:{x:490.4556}},{t:this.shape_87,p:{x:524.075}},{t:this.shape_86,p:{x:545.4673}},{t:this.shape_85,p:{x:566.2056}},{t:this.shape_84,p:{x:585.625}},{t:this.shape_83,p:{x:604.875,y:529.725}},{t:this.shape_82,p:{x:641.625}},{t:this.shape_81,p:{x:661.15}},{t:this.shape_80,p:{x:690.275}},{t:this.shape_79,p:{x:711.7673,y:529.925}},{t:this.shape_78,p:{x:731.9}},{t:this.shape_77},{t:this.shape_76,p:{x:773.4483}},{t:this.shape_75,p:{x:806.975}},{t:this.shape_74,p:{x:827.5483}},{t:this.shape_73,p:{x:851.4483,y:529.525}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147,p:{x:459.75}},{t:this.shape_103,p:{x:478.8556}},{t:this.shape_146,p:{x:498.275}},{t:this.shape_116,p:{x:518.3483}},{t:this.shape_145},{t:this.shape_96,p:{x:575.6483}},{t:this.shape_97,p:{x:608.525}},{t:this.shape_144,p:{x:622.5,y:470.175}},{t:this.shape_143},{t:this.shape_142,p:{x:657.775}},{t:this.shape_141},{t:this.shape_114,p:{x:711.1734}},{t:this.shape_99,p:{x:734.0673,y:470.575}},{t:this.shape_140},{t:this.shape_100,p:{x:785.6556}},{t:this.shape_111,p:{x:805.75}},{t:this.shape_105,p:{x:826.625}},{t:this.shape_104,p:{x:860.325,y:470.375}},{t:this.shape_98,p:{x:880.9056,y:470.175}},{t:this.shape_139},{t:this.shape_94,p:{x:905.375}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_86,p:{x:446.5673}},{t:this.shape_135},{t:this.shape_134,p:{x:498.775}},{t:this.shape_91,p:{x:521.2983,y:529.525}},{t:this.shape_80,p:{x:556.075}},{t:this.shape_76,p:{x:578.5983}},{t:this.shape_88,p:{x:600.4056}},{t:this.shape_90,p:{x:632.825}},{t:this.shape_75,p:{x:650.675}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_83,p:{x:709.275,y:529.725}},{t:this.shape_131},{t:this.shape_74,p:{x:759.2983}},{t:this.shape_85,p:{x:781.1056}},{t:this.shape_82,p:{x:817.975}},{t:this.shape_79,p:{x:842.5673,y:529.925}},{t:this.shape_130},{t:this.shape_129,p:{x:370.5794}},{t:this.shape_128,p:{x:386.95,y:588.875}},{t:this.shape_127},{t:this.shape_126,p:{x:422.225}},{t:this.shape_125},{t:this.shape_124,p:{x:465.825,y:588.525}},{t:this.shape_123},{t:this.shape_122,p:{x:505.725}},{t:this.shape_73,p:{x:527.8983,y:588.875}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119,p:{x:570.24,y:597.575}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163,p:{x:456.325}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_180},{t:this.shape_101,p:{x:394.9}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_73,p:{x:465.2983,y:470.175}},{t:this.shape_100,p:{x:487.1056}},{t:this.shape_114,p:{x:522.2734}},{t:this.shape_113,p:{x:545.1673,y:470.575}},{t:this.shape_177},{t:this.shape_146,p:{x:595.475}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_97,p:{x:664.225}},{t:this.shape_147,p:{x:681.6}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_98,p:{x:767.6056,y:470.175}},{t:this.shape_128,p:{x:784.3,y:470.175}},{t:this.shape_142,p:{x:801.075}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_109,p:{x:371.275,y:529.725}},{t:this.shape_170},{t:this.shape_99,p:{x:412.2173,y:529.925}},{t:this.shape_169,p:{x:433.9625}},{t:this.shape_106,p:{x:455.925,y:529.725}},{t:this.shape_102,p:{x:489.8625,y:529.575}},{t:this.shape_78,p:{x:509.95}},{t:this.shape_168,p:{x:540.125}},{t:this.shape_86,p:{x:559.1673}},{t:this.shape_104,p:{x:593.525,y:529.725}},{t:this.shape_82,p:{x:617.925}},{t:this.shape_167},{t:this.shape_87,p:{x:654.175}},{t:this.shape_79,p:{x:675.5673,y:529.925}},{t:this.shape_81,p:{x:692.3}},{t:this.shape_84,p:{x:707.175}},{t:this.shape_83,p:{x:726.425,y:529.725}},{t:this.shape_119,p:{x:743.24,y:538.225}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_180},{t:this.shape_101,p:{x:394.9}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_73,p:{x:465.2983,y:470.175}},{t:this.shape_100,p:{x:487.1056}},{t:this.shape_114,p:{x:522.2734}},{t:this.shape_113,p:{x:545.1673,y:470.575}},{t:this.shape_177},{t:this.shape_146,p:{x:595.475}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_97,p:{x:664.225}},{t:this.shape_147,p:{x:681.6}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_98,p:{x:767.6056,y:470.175}},{t:this.shape_128,p:{x:784.3,y:470.175}},{t:this.shape_142,p:{x:801.075}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_109,p:{x:371.275,y:529.725}},{t:this.shape_170},{t:this.shape_99,p:{x:412.2173,y:529.925}},{t:this.shape_169,p:{x:433.9625}},{t:this.shape_106,p:{x:455.925,y:529.725}},{t:this.shape_102,p:{x:489.8625,y:529.575}},{t:this.shape_78,p:{x:509.95}},{t:this.shape_168,p:{x:540.125}},{t:this.shape_86,p:{x:559.1673}},{t:this.shape_104,p:{x:593.525,y:529.725}},{t:this.shape_82,p:{x:617.925}},{t:this.shape_167},{t:this.shape_87,p:{x:654.175}},{t:this.shape_79,p:{x:675.5673,y:529.925}},{t:this.shape_81,p:{x:692.3}},{t:this.shape_84,p:{x:707.175}},{t:this.shape_83,p:{x:726.425,y:529.725}},{t:this.shape_119,p:{x:743.24,y:538.225}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_182},{t:this.shape_105,p:{x:394.775}},{t:this.shape_101,p:{x:414.25}},{t:this.shape_98,p:{x:433.3556,y:470.175}},{t:this.shape_79,p:{x:467.4673,y:470.575}},{t:this.shape_142,p:{x:488.825}},{t:this.shape_181},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_95,p:{x:561.975}},{t:this.shape_206},{t:this.shape_163,p:{x:610.475}},{t:this.shape_205},{t:this.shape_204},{t:this.shape_147,p:{x:675.3}},{t:this.shape_100,p:{x:694.4056}},{t:this.shape_97,p:{x:713.825}},{t:this.shape_96,p:{x:733.8983}},{t:this.shape_106,p:{x:769.325,y:470.375}},{t:this.shape_114,p:{x:804.3734}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_142,p:{x:879.475}},{t:this.shape_91,p:{x:901.9983,y:470.175}},{t:this.shape_124,p:{x:370.725,y:529.175}},{t:this.shape_113,p:{x:391.4173,y:529.925}},{t:this.shape_201},{t:this.shape_169,p:{x:431.6625}},{t:this.shape_200},{t:this.shape_88,p:{x:470.8556}},{t:this.shape_78,p:{x:503.3}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_76,p:{x:564.5983}},{t:this.shape_197},{t:this.shape_168,p:{x:606.175}},{t:this.shape_196},{t:this.shape_104,p:{x:647.275,y:529.725}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_81,p:{x:719.1}},{t:this.shape_99,p:{x:748.6673,y:529.925}},{t:this.shape_134,p:{x:770.025}},{t:this.shape_144,p:{x:798.8,y:529.525}},{t:this.shape_80,p:{x:815.575}},{t:this.shape_85,p:{x:836.0056}},{t:this.shape_86,p:{x:857.7673}},{t:this.shape_75,p:{x:877.875}},{t:this.shape_84,p:{x:895.075}},{t:this.shape_74,p:{x:915.1483}},{t:this.shape_193},{t:this.shape_79,p:{x:395.0173,y:589.275}},{t:this.shape_192},{t:this.shape_126,p:{x:447.225}},{t:this.shape_73,p:{x:469.7483,y:588.875}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_102,p:{x:552.4625,y:588.925}},{t:this.shape_189},{t:this.shape_98,p:{x:591.6556,y:588.875}},{t:this.shape_107,p:{x:612.675,y:588.825}},{t:this.shape_122,p:{x:633.175}},{t:this.shape_188},{t:this.shape_129,p:{x:665.9794}},{t:this.shape_83,p:{x:687.625,y:589.075}},{t:this.shape_119,p:{x:704.44,y:597.575}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325,p:{x:427.7972,y:461.525}},{t:this.shape_324},{t:this.shape_323,p:{x:465.775}},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319,p:{x:523.9067,y:462.425}},{t:this.shape_318,p:{x:540.5972,y:461.525}},{t:this.shape_317,p:{x:552.775,y:461.25}},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314,p:{x:594.8}},{t:this.shape_313,p:{x:617.825}},{t:this.shape_312},{t:this.shape_311,p:{x:653.825}},{t:this.shape_310},{t:this.shape_309,p:{x:684.5269}},{t:this.shape_308,p:{x:708.125}},{t:this.shape_307,p:{x:722.0269}},{t:this.shape_306},{t:this.shape_305,p:{x:750.7977}},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302,p:{x:798.3}},{t:this.shape_301},{t:this.shape_300,p:{x:830.5977}},{t:this.shape_299},{t:this.shape_298,p:{x:871.7977}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295,p:{x:382.775,y:504.975}},{t:this.shape_294,p:{x:396.925}},{t:this.shape_293,p:{x:412.0477}},{t:this.shape_292},{t:this.shape_291,p:{x:444.5375,y:504.975}},{t:this.shape_290,p:{x:460.55}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286,p:{x:538.625,y:504.825}},{t:this.shape_285,p:{x:554.9977}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281,p:{x:621.475}},{t:this.shape_280},{t:this.shape_279,p:{x:651.7269}},{t:this.shape_278,p:{x:663.875}},{t:this.shape_277,p:{x:684.175}},{t:this.shape_276,p:{x:698.0769}},{t:this.shape_275,p:{x:723.6567,y:506.125}},{t:this.shape_274,p:{x:740.3472,y:505.225}},{t:this.shape_273,p:{x:754.975}},{t:this.shape_272,p:{x:777.425}},{t:this.shape_271,p:{x:792.3977}},{t:this.shape_270,p:{x:817.2769}},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266,p:{x:870.65}},{t:this.shape_265,p:{x:885.6269}},{t:this.shape_264},{t:this.shape_263,p:{x:383.675}},{t:this.shape_262,p:{x:397.575}},{t:this.shape_261,p:{x:410.225,y:548.675}},{t:this.shape_260,p:{x:424.1269}},{t:this.shape_259,p:{x:448.8875,y:548.675}},{t:this.shape_258,p:{x:463.525}},{t:this.shape_257},{t:this.shape_256,p:{x:500.775}},{t:this.shape_255},{t:this.shape_254,p:{x:531.2875}},{t:this.shape_253,p:{x:545.925}},{t:this.shape_252},{t:this.shape_251,p:{x:584.275}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248,p:{x:642.075}},{t:this.shape_247},{t:this.shape_246,p:{x:677.3977}},{t:this.shape_245},{t:this.shape_244,p:{x:706.275}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241,p:{x:759.2477}},{t:this.shape_240},{t:this.shape_239,p:{x:792.5567}},{t:this.shape_238,p:{x:809.2472}},{t:this.shape_237,p:{x:823.875}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232,p:{x:917.325}},{t:this.shape_231,p:{x:927.525}},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:438.725,y:592.375}},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:506.825,y:592.375}},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214,p:{x:628.7758,y:598.675}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_308,p:{x:434.325}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_302,p:{x:548.55}},{t:this.shape_311,p:{x:563.975}},{t:this.shape_305,p:{x:580.2977}},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_291,p:{x:698.5875,y:461.275}},{t:this.shape_300,p:{x:715.1977}},{t:this.shape_295,p:{x:739.625,y:461.275}},{t:this.shape_309,p:{x:753.5269}},{t:this.shape_454},{t:this.shape_453},{t:this.shape_307,p:{x:796.6269}},{t:this.shape_452},{t:this.shape_298,p:{x:836.0477}},{t:this.shape_323,p:{x:852.375}},{t:this.shape_313,p:{x:866.275}},{t:this.shape_451},{t:this.shape_314,p:{x:896.2}},{t:this.shape_450},{t:this.shape_290,p:{x:381.25}},{t:this.shape_279,p:{x:396.2269}},{t:this.shape_294,p:{x:420.525}},{t:this.shape_325,p:{x:434.8972,y:505.225}},{t:this.shape_281,p:{x:449.525}},{t:this.shape_449},{t:this.shape_259,p:{x:480.0375,y:504.975}},{t:this.shape_448},{t:this.shape_276,p:{x:511.0269}},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_319,p:{x:595.5567,y:506.125}},{t:this.shape_318,p:{x:612.2472,y:505.225}},{t:this.shape_278,p:{x:624.425}},{t:this.shape_277,p:{x:635.725}},{t:this.shape_444},{t:this.shape_273,p:{x:665.075}},{t:this.shape_270,p:{x:678.9769}},{t:this.shape_265,p:{x:703.0269}},{t:this.shape_293,p:{x:719.5977}},{t:this.shape_443},{t:this.shape_285,p:{x:749.9977}},{t:this.shape_442},{t:this.shape_266,p:{x:789.65}},{t:this.shape_441},{t:this.shape_440},{t:this.shape_261,p:{x:835.975,y:504.975}},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_272,p:{x:909.425}},{t:this.shape_271,p:{x:924.3977}},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_275,p:{x:416.9567,y:549.825}},{t:this.shape_274,p:{x:433.6472,y:548.925}},{t:this.shape_258,p:{x:448.275}},{t:this.shape_431},{t:this.shape_256,p:{x:485.775}},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_246,p:{x:554.9977}},{t:this.shape_286,p:{x:571.325,y:548.525}},{t:this.shape_427},{t:this.shape_426},{t:this.shape_317,p:{x:612.175,y:548.65}},{t:this.shape_253,p:{x:623.475}},{t:this.shape_263,p:{x:637.825}},{t:this.shape_262,p:{x:651.725}},{t:this.shape_248,p:{x:664.375}},{t:this.shape_254,p:{x:687.9875}},{t:this.shape_237,p:{x:702.625}},{t:this.shape_251,p:{x:725.075}},{t:this.shape_241,p:{x:740.0477}},{t:this.shape_239,p:{x:766.4567}},{t:this.shape_238,p:{x:783.1472}},{t:this.shape_226,p:{x:797.775,y:548.675}},{t:this.shape_425},{t:this.shape_244,p:{x:833.025}},{t:this.shape_424},{t:this.shape_231,p:{x:855.725}},{t:this.shape_260,p:{x:867.4769}},{t:this.shape_232,p:{x:881.575}},{t:this.shape_222,p:{x:894.225,y:548.675}},{t:this.shape_423},{t:this.shape_422},{t:this.shape_214,p:{x:923.0758,y:554.975}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183}]},1).wait(1));

	// personajes
	this.instance_1 = new lib.libroconfundidoai();
	this.instance_1.setTransform(-11,392,0.5269,0.6417);

	this.instance_2 = new lib.arequipeseriaai();
	this.instance_2.setTransform(-192,151,1.2574,1.3827);

	this.instance_3 = new lib.arequipeasustadaai();
	this.instance_3.setTransform(908,195,0.9759,1.2625);

	this.instance_4 = new lib.jesuscalvodemonioaiActivos();
	this.instance_4.setTransform(812,164,0.3231,0.371);

	this.instance_5 = new lib.librosorprendidoai();
	this.instance_5.setTransform(-11,392,0.5269,0.6417);

	this.instance_6 = new lib.arequipecongeladaaiActivos();
	this.instance_6.setTransform(62,207,0.9733,1.2625);

	this.instance_7 = new lib.libroenojadoai();
	this.instance_7.setTransform(-11,392,0.5269,0.6417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:-192,y:151}},{t:this.instance_1}]}).to({state:[{t:this.instance_2,p:{x:651,y:153}},{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_3,p:{x:908,y:195}}]},1).to({state:[{t:this.instance_3,p:{x:62,y:207}},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[]},2).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_4},{t:this.instance_7}]},1).wait(7));

	// fondo
	this.instance_8 = new lib.flash0ai_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},5).wait(1).to({_off:false},0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(448,360,974.9000000000001,857);
// library properties:
lib.properties = {
	id: 'FCB71772D71C40459A97D2CDF2772891',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dialogos 5_atlas_1.png?1698427961612", id:"dialogos 5_atlas_1"},
		{src:"sounds/botones.mp3?1698427962336", id:"botones"},
		{src:"sounds/braamclassicsatellitegcinematictrailersoundeffects123877wav.mp3?1698427962336", id:"braamclassicsatellitegcinematictrailersoundeffects123877wav"},
		{src:"sounds/cinematicdramatic11120.mp3?1698427962336", id:"cinematicdramatic11120"}
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
an.compositions['FCB71772D71C40459A97D2CDF2772891'] = {
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