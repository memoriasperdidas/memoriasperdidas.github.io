(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dialogos 4_atlas_1", frames: [[677,722,411,800],[1376,1696,302,291],[0,0,1288,720],[1090,1299,284,736],[0,1390,539,575],[1090,722,539,575],[1290,0,539,575],[0,722,675,666],[541,1524,273,395],[1376,1299,273,395]]}
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
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.libro2ai = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.libroenojadoai = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.librosorprendidoai = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Perezaai = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tvenojadoai = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tvai = function() {
	this.initialize(ss["dialogos 4_atlas_1"]);
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
(lib.dialogos4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,18];
	// timeline functions:
	this.frame_0 = function() {
		playSound("dialogo");
		this.stop();
		
		var dialogo = 1;
		this.avanzar.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(dialogo);
			dialogo++;
		}
	}
	this.frame_18 = function() {
		this.avanzar.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("nivel 4 pereza.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(2));

	// Capa_1
	this.avanzar = new lib.avanzar();
	this.avanzar.name = "avanzar";
	this.avanzar.setTransform(624.1,619.5);
	new cjs.ButtonHelper(this.avanzar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.avanzar).to({_off:true},19).wait(1));

	// dialogo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgcCJQgKgEgGgFQgGgGgEgGQgFgGgDgIIgFgSIgHgcIgHgbIgFgSIgHglIgHgnIgDgUQgBgKACgKQADgOAKgKQAKgJAOgBQAKAAAIAGQAIAEAGAJIADAIIABAKIgBAHIgBAHIACAJIACAOIACAOIACAJQAEAVAFAWIAKArQAGgNAFgOQAFgOAEgNIADgOIAFgWIAEgXIADgOIAAgBIAAgBQgCgMAFgKQAEgKAJgGQAJgGALAAQAMABAJAGQAJAIAFAKQACAIAAAIIgBAOIgDAPIgFAVIgFAXIgDANIgIAfQgGASgIATQgJATgLARQgLARgOAKQgOAKgQAAQgIAAgKgCg");
	this.shape.setTransform(391.9333,412.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgGB9QgGgDgEgGQgEgFgCgGIgDgOIgCgNIAAgTIAAgeIABggIABgeIAAgTIgGABIgGACIgCABIgDACQgGAFgIAAQgIAAgIgCQgFgBgEgDIgHgHQgGgHgCgJQgCgJACgIQACgHAEgFQAEgFAFgEIAJgFIAKgEQAUgGAUgDIAogEIAcgBQAOAAAOAEQAGACAFAEIAIAKQADAEABAEIABAKQAAAEgBAFIgEAJQgDAFgEAEIgLAHIgGABIgHABIgIgBIgJgBIAAA0IgBAzIAAARIABARIABADIABADQACAFAAAHQAAAHgCAFQgEALgJAHQgJAGgLAAQgLAAgJgHg");
	this.shape_1.setTransform(370.4313,411.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABhAuQgIgFgGgGQgHgHgEgHQgEgJgBgHQgBgJADgKQAEgJAHgIQAHgHAKgEQAJgGAJAAQASgBANAMQANAMABATQABAJgDAKQgEAJgGAIQgGAHgIAFQgIAGgJABIgCAAIgDAAQgIAAgHgDgAgQAuQgIgFgGgGQgGgHgEgHQgEgIgBgIQgBgJADgKQAEgJAHgIQAHgHAJgEQAJgGAJAAQASgBANAMQAMAMABATQABAJgDAKQgEAJgGAIQgGAHgHAFQgIAGgJABIgCAAIgCAAQgIAAgIgDgAiCAuQgHgFgHgGQgGgHgEgHQgDgIgBgIQgCgJAEgKQAEgJAHgIQAHgHAJgEQAJgGAJAAQATgBAMAMQAMAMABATQABAJgDAKQgDAJgGAIQgGAHgIAFQgIAGgJABIgCAAIgDAAQgIAAgIgDg");
	this.shape_2.setTransform(920.44,565.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygFIgCBCIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_3.setTransform(892.475,555.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyCOQgVgJgOgSQgOgSgHgYQgGgYABgeIAGinIA9gDIgBBXIgCBVQgBAgAKAOQAKAPAXADIAEAAIACAAQATAAALgPQAMgPAAggIADhXIAChYIBBADIgCBYIgDBWQAAAdgIAXQgIAYgOARQgOARgUAJQgUAJgYAAQgdgBgVgKg");
	this.shape_4.setTransform(869.5933,555.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAXCJIgLABIgLABQgcgCgXgMQgWgLgQgTQgPgTgJgZQgJgYgCgaQgDgfAHgfQAHgfAQgaQAPgZAZgPQAZgQAggBQAdAAAVALQAWALAPASQAPASAJAXQAJAZACAZQACAVgCAUQgCATgGATQgGAUgJAPQgKARgNALIAjAfIgXAXIgWAXgAgWhpQgKAHgIALQgIALgEAPQgFAPgCAQQgCARACAQQACARAHAOQAHAPALAJQAMAKAQACIAFABQANAAALgHQAKgHAHgLQAHgMAEgPQAFgPABgPQABgRgDgRQgCgRgGgNQgHgPgKgKQgKgJgPgDIgHAAQgMAAgKAHg");
	this.shape_5.setTransform(843.6026,557.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhriHIA8gXIBeC0IgHiqIAgAAIAggBIAEEuIg4ACIhgixIACBXIACBXIhBAHg");
	this.shape_6.setTransform(818.025,555.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyCOQgVgJgOgSQgOgSgHgYQgGgYABgeIAGinIA9gDIgBBXIgCBVQgBAgAKAOQAKAPAXADIAEAAIACAAQATAAALgPQAMgPAAggIADhXIAChYIBBADIgCBYIgDBWQAAAdgIAXQgIAYgOARQgOARgUAJQgUAJgYAAQgdgBgVgKg");
	this.shape_7.setTransform(793.7433,555.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABECBIiNAIIgUA8Ig9gIIB6mBIAmACIAmADIBvF0IgkAIIgjAIgAg0BJIBogIIgsiwg");
	this.shape_8.setTransform(766.075,551.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUA0QgJgEgHgIQgHgHgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgJALgFQALgFAKgBQAVAAAOANQAPANACAWQABAKgDAMQgEAKgHAJQgHAIgKAGQgJAGgLABIgFABQgKAAgJgEg");
	this.shape_9.setTransform(729.2674,565.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag2COQgYgOgPgXQgQgWgHgcQgIgcABgcQAAgeAJgcQAIgbAPgWQAQgVAYgOQAXgNAeAAQAgAAAXANQAXAOAPAWQAQAXAHAdQAHAcgBAcQAAAcgIAcQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhXQgLAHgIALQgHALgFAPQgFAPgCAQQgBAQACARQACARAGAPQAHAOAMAJQALAKARADIAFABQANgBAKgHQAKgHAHgLQAIgMAEgPQAEgOABgQQABgQgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIgBQgLABgKAGg");
	this.shape_10.setTransform(708.7251,555.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcCdQgRgCgPgFQgPgGgOgJQgNgKgJgOIARgWIARgYQAPATAUAGQAUAHAWAAQAYgBANgMQANgMgEgQQgCgLgMgHQgLgHgQgGIghgNQgRgGgPgKQgOgKgJgPQgKgRABgYQABgXAJgQQAJgRAOgLQAPgLASgFQASgFATgBQAYAAAYAJQAYAIARASIgkA1QgKgMgMgGQgNgGgNgDIgGAAIgGgBQgOAAgKAHQgLAHgBAOQAAAHADAFQAEAEAGAEQAGAEAJADIARAHIAiAMQASAIAPAKQAOAKAKARQAJAQgBAaQgCAYgJASQgKASgPAMQgPAMgTAHQgTAFgVACQgOAAgQgDg");
	this.shape_11.setTransform(682.805,555.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAxBpIhlAFIgQAwIg5gJIBhkyIAhACIAhADIBXEoIgfAGIghAIgAgfAxIAfgEIAhgEIgchrg");
	this.shape_12.setTransform(659.4,555.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKCgQgVAAgUgJQgVgIgQgSQgQgRgKgcQgKgbAAglQAAgsAKgfQAKghARgWQAQgWAWgKQAWgMAWgBQAaAAAVAHQAWAHAVAQIgjA3QgKgLgLgGQgLgEgMAAQgTAAgNALQgOALgJARQgJAQgEATQgEAUAAAPQAAAUAFAQQAFAPAIALQAHAKAKAFQAKAFAKABQAjAAAWgcIAeAwQgPAUgVALQgUALgXABg");
	this.shape_13.setTransform(636.675,555.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygFIgCBCIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_14.setTransform(600.525,555.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhbiWIAggBIAgAAIgCDyIB7gDIgCAgIgCAfIi3ABg");
	this.shape_15.setTransform(580.2,555.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZBlIgtg/IgRgBIgRgBIABA5IABA6IggABIggACIgEkuQAbgHAZgFQAagEAWAAQAYAAAWAGQAVAGAQAMQAQANAJATQAJAUAAAbQAAAhgNAVQgOAUgWALIBJBiIgYAVIgaAWIguhAgAgihoIgWADIACBSIAMABIAMAAQAeAAAQgJQAQgKADgWQADgWgOgLQgOgLgXgCIgVABg");
	this.shape_16.setTransform(558.075,555.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygFIgCBCIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_17.setTransform(534.325,555.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAKCgQgVAAgUgJQgVgIgQgSQgQgRgKgcQgKgbAAglQAAgsAKgfQAKghARgWQAQgWAWgKQAWgMAWgBQAaAAAVAHQAWAHAVAQIgjA3QgKgLgLgGQgLgEgMAAQgTAAgNALQgOALgJARQgJAQgEATQgEAUAAAPQAAAUAFAQQAFAPAIALQAHAKAKAFQAKAFAKABQAjAAAWgcIAeAwQgPAUgVALQgUALgXABg");
	this.shape_18.setTransform(513.725,555.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAxBpIhlAFIgQAwIg5gJIBhkyIAhACIAhADIBXEoIgfAGIghAIgAgfAxIAfgEIAggEIgbhrg");
	this.shape_19.setTransform(489.95,555.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhriWIA/gEIADCDIBRgJIgEh5IBAAAIAIEvIg8ABIgGh3IhSAEIADBwIhAAHg");
	this.shape_20.setTransform(465.4,555.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglhkIAGAAIgNgRIgMgRIBKhFIAnAsIgqAdIgnAeIA2AAIAJEvIghAAIgeABg");
	this.shape_21.setTransform(434.6,550.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhiCaIgJkrIAPgBIAdgDIAigEIAcgCQAUAAASAEQASAEAMAIQANAJAHAOQAHANAAAVQAAAWgJARQgJARgQANQAYALAMATQANATgBAWQgBASgJARQgJASgSAOQgSAOgcAIQgaAJgkAAgAgpAbIACBFIAJABIAIAAQAJAAALgCQAKgCAJgEQAJgFAHgIQAGgHACgLQABgNgJgNQgJgMgTgGQgWAIgYAFgAgshfIACA+QAVgCAPgFQANgEAJgHQAJgGADgHQAEgIAAgIQAAgKgHgGQgHgGgRAAQgPAAgeAHg");
	this.shape_22.setTransform(417.7287,555.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygFIgCBCIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_23.setTransform(395.325,555.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhnCYIgIkrIALgBIAXgDIAdgEIAbgBIAHAAQAZACAXAJQAWAJARASQAQARALAZQAKAZACAjIAAAVIgCAVQgEAegNAYQgOAZgTARQgUAQgZAKQgZAJgdAAgAgihiIgQACIAHC/IAEAAIAEAAQAWAAAPgIQAQgIAKgNQALgOAFgUQAFgUAAgWQgBgpgRgYQgRgYgiAAIgOABg");
	this.shape_24.setTransform(372.475,555.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgqhQIBVADIgVCcIg+ACg");
	this.shape_25.setTransform(922.075,500.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag2DLQgYgPgPgWQgQgWgHgdQgIgcABgdQAAgdAJgcQAIgbAPgVQAQgWAYgNIANgGIgOgUIgRgXIBdhWIAvA2Ig1AoIgrAfQANgDAOAAQAgAAAXANQAXAPAPAVQAQAXAHAbQAHAdgBAdQAAAdgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVgZQgLAGgIALQgHALgFAOQgFAPgCAQQgBARACARQACARAGAOQAHAPAMAKQALAJARADIAFAAQANAAAKgHQAKgHAHgLQAIgLAEgQQAEgOABgRQABgQgCgRQgDgRgGgOQgGgNgLgKQgKgJgOgDIgIAAQgLgBgKAIgAgmhYIADADIAKgHIgNAEIAAAAgAgmhYIANgEIgKAHIgDgDg");
	this.shape_26.setTransform(902.7251,481.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgliYIBDAAIAIEvIggABIgeAAg");
	this.shape_27.setTransform(882,488.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFCZIgggBIAGjyIhKACIADhBIBpADIBnAEIgEA8IhIgCIgDB4IgDB6IgdgBg");
	this.shape_28.setTransform(866.15,487.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAZBlIgtg/IgRgBIgRgBIABA5IABA6IggABIggACIgEkuQAbgHAZgFQAagEAWAAQAYAAAWAGQAVAGAQAMQAQANAJATQAJAUAAAbQAAAhgNAVQgOAUgWALIBJBiIgYAVIgaAWIguhAgAgihoIgWADIACBSIAMABIAMAAQAeAAAQgJQAQgKADgWQADgWgOgLQgOgLgXgCIgVABg");
	this.shape_29.setTransform(844.775,488.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgliYIBDAAIAIEvIggABIgeAAg");
	this.shape_30.setTransform(824.4,488.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmCYIgqiWIgqiVIAegDIAfgDIBADeIAdhuIAchvIAgAGIAfAFIhMEng");
	this.shape_31.setTransform(806.025,487.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhnCZIgIksIALgBIAXgDIAdgDIAbgCIAHAAQAZACAXAKQAWAIARASQAQARALAZQAKAZACAjIAAAVIgCAVQgEAegNAYQgOAZgTAQQgUASgZAIQgZAKgdAAgAgihiIgQACIAHC+IAEAAIAEABQAWAAAPgIQAQgIAKgOQALgOAFgTQAFgUAAgWQgBgogRgZQgRgYgiAAIgOABg");
	this.shape_32.setTransform(782.275,488.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg4gJIBhkyIAgACIAhADIBYEoIghAGIgfAIgAggAxIAggEIAhgEIgchrg");
	this.shape_33.setTransform(757.75,488.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAcQAAAdgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAJARADIAFAAQANAAAKgHQAKgHAHgLQAIgLAEgQQAEgOABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_34.setTransform(717.4251,488.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhbiWIAggBIAgAAIgCDyIB7gDIgCAgIgCAfIi3ABg");
	this.shape_35.setTransform(694.05,487.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygEIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_36.setTransform(658.975,488.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhvCVIgggCIADiSIAEiRIAogDIAogCIA4C9IA5i4IAogDIApgCIADCSIADCRIggACIggACIgCizIgYBNIgZBOIgdgCIgdgBIgwiYIgCC3IgggBg");
	this.shape_37.setTransform(632.875,488.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygEIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_38.setTransform(592.775,488.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag8CYIgfgBIADiXIAEiYICwAEIgCAdIgCAdIhvgEIgCBUIBZAEIgEA6IhXgEIgBA0IgBA1IgfgBg");
	this.shape_39.setTransform(573.525,488.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygEIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_40.setTransform(552.675,488.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfCYQgRgFgOgKQgOgJgKgMQgLgMgEgOIAVgVIAVgVQAKAUAOAMQAOALAOABIADABIACAAQATAAANgVQAOgVAAgqQAAgngPhAIhdAHIgCgfIgBgfICWgIIAGAjIAHAoQADAVABAWQACAWAAAUQAAAZgDAcQgFAbgLAXQgLAWgUAPQgTAPggAAQgQAAgQgGg");
	this.shape_41.setTransform(530.775,488.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhbiWIAggBIAgAAIgCDyIB7gDIgBAgIgCAfIi4ABg");
	this.shape_42.setTransform(497,487.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAcIhygEIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_43.setTransform(475.975,488.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgqhQIBVADIgVCcIg+ACg");
	this.shape_44.setTransform(445.675,500.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhriWIA/gEIADCDIBRgJIgEh5IBAAAIAIEvIg8ABIgGh3IhSAEIADBwIhAAHg");
	this.shape_45.setTransform(428.05,488.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg4gJIBhkyIAgACIAhADIBYEoIghAGIgfAIgAggAxIAggEIAggEIgbhrg");
	this.shape_46.setTransform(403.95,488.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABECBIiNAIIgUA8Ig9gIIB6mBIAmACIAmADIBvF0IgkAIIgjAIgAg0BJIBogIIgsiwg");
	this.shape_47.setTransform(376.025,484.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").p("ASfDkMgk9AAAIAAnHMAk9AAAg");
	this.shape_48.setTransform(443.6399,414.5838,0.9006,0.9972);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000A0F").s().p("AyeDkIAAnHMAk9AAAIAAHHg");
	this.shape_49.setTransform(443.6399,414.5838,0.9006,0.9972);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").p("EA4HANTMhwNAAAIAA6lMBwNAAAg");
	this.shape_50.setTransform(660.5504,522.234,0.9006,0.9972);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F0F7F9").s().p("Eg4GANTIAA6lMBwNAAAIAAalg");
	this.shape_51.setTransform(660.5504,522.234,0.9006,0.9972);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgLDJQgOAAgJgFQgLgEgFgIQgHgHgDgJQgCgJAAgKQABgKADgKQADgJAGgIQAGgHAJgFQAHgEALAAQAWAAAPAPQANAPADAWQAAAKgDAJQgCAJgGAHQgFAIgJAFQgJAEgLABgAgsA2QAHgXANgSQAMgSAMgQIAWgfQAJgPAAgPQACgVgNgNQgOgOgVAAQgSAAgQAGQgRAGgPAIIgVg/QAYgOAZgGQAZgHAWAAQAWAAATAHQAVAHAOAOQAPANAJAUQAJAUAAAaQAAAZgJAWQgLAVgNATQgNASgOARQgOARgIAQg");
	this.shape_52.setTransform(810.9,550.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg5gJIBikyIAgACIAhADIBXEoIggAGIgfAIgAggAxIAggEIAhgEIgchrg");
	this.shape_53.setTransform(756.05,555.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgcCdQgRgCgPgFQgPgGgOgJQgNgKgJgOIARgWIARgYQAPATAUAGQAUAHAWAAQAYgBANgMQANgMgEgQQgCgLgMgHQgLgHgQgGIghgNQgRgGgPgKQgOgKgJgPQgKgRABgYQABgXAJgQQAJgRAOgLQAPgLASgFQASgFATgBQAYAAAYAJQAYAIARASIgkA1QgKgMgMgGQgNgGgNgDIgGAAIgGgBQgOAAgKAHQgLAHgBAOQAAAHADAFQAEAEAGAEQAGAEAJADIARAHIAiAMQASAIAPAKQAOAKAKARQAJAQgBAaQgCAYgJASQgKASgPAMQgPAMgTAHQgTAFgVACQgOAAgQgDg");
	this.shape_54.setTransform(717.005,555.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AiFisIBAgYICKEAIgJj2IAigBIAigCIAGF7IgfABIgdABIiMj1IADB3IAEB8IhHAHg");
	this.shape_55.setTransform(628.575,551.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgjDCQgUgHgPgOQgOgNgJgUQgJgUAAgaQAAgZAKgWQAJgVANgTQAOgSAOgRQAOgRAJgQIBAAIQgHAXgMASQgNASgMAQIgVAfQgKAPAAAPQgBAVANANQANAOAWAAQARAAARgGQAQgGAPgIIAVA/QgYAOgZAGQgYAHgXAAQgVAAgVgHgAgThuQgOgPgCgWQgBgKACgJQADgJAFgHQAGgIAJgEQAJgFALgBIADAAQAOAAAKAFQAJAEAHAIQAGAHADAJQACAJAAAKQgBAKgCAKQgEAJgGAIQgGAHgIAFQgJAEgKAAQgWAAgOgPg");
	this.shape_56.setTransform(607.9,554.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag2COQgYgOgPgXQgQgWgHgcQgIgcABgcQAAgeAJgcQAIgbAPgWQAQgVAYgOQAXgNAeAAQAgAAAXANQAXAOAPAWQAQAXAHAdQAHAcgBAcQAAAcgIAcQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhXQgLAHgIALQgHALgFAPQgFAPgCAQQgBAQACARQACARAGAPQAHAOAMAJQALAKARADIAFABQANgBAKgHQAKgHAHgLQAIgMAEgPQAEgOABgQQABgQgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIgBQgLABgKAGg");
	this.shape_57.setTransform(549.9751,555.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgliYIBCAAIAJEwIgfAAIggABg");
	this.shape_58.setTransform(504.6,555.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGCZIgfgBIAFjyIhKACIAFhBIBnADIBpADIgFA9IhIgCIgDB4IgDB6IgegBg");
	this.shape_59.setTransform(439.15,555.15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgcCdQgRgCgPgFQgPgGgOgJQgNgKgJgOIARgWIARgYQAPATAUAGQAUAHAWAAQAYgBANgMQANgMgEgQQgCgLgMgHQgLgHgQgGIghgNQgRgGgPgKQgOgKgJgPQgKgRABgYQABgXAJgQQAJgRAOgLQAPgLASgFQASgFATgBQAYAAAYAJQAYAIARASIgkA1QgKgMgMgGQgNgGgNgDIgGAAIgGgBQgOAAgKAHQgLAHgBAOQAAAHADAFQAEAEAGAEQAGAEAJADIARAHIAiAMQASAIAPAKQAOAKAKARQAJAQgBAaQgCAYgJASQgKASgPAMQgPAMgTAHQgTAFgVACQgOAAgQgDg");
	this.shape_60.setTransform(417.055,555.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhnCYIgIkrIALgBIAXgDIAdgEIAbgBIAHAAQAZACAXAJQAWAJARASQAQARALAZQAKAZACAjIAAAVIgCAVQgEAegNAYQgOAZgTARQgUAQgZAKQgZAJgdAAgAgihiIgQACIAHC/IAEAAIAEAAQAWAAAPgIQAQgIAKgNQALgOAFgUQAFgUAAgWQgBgpgRgYQgRgYgiAAIgOABg");
	this.shape_61.setTransform(372.475,555.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAXCIIgLACIgLAAQgcAAgXgMQgWgMgQgTQgPgTgJgYQgJgZgCgaQgDgeAHggQAHgfAQgaQAPgZAZgQQAZgQAgAAQAdAAAVALQAWALAPASQAPASAJAXQAJAYACAaQACAUgCAVQgCATgGAUQgGASgJARQgKAPgNAMIAjAfIgXAYIgWAWgAgWhpQgKAGgIALQgIAMgEAPQgFAOgCAQQgCASACAPQACARAHAPQAHAOALAKQAMAKAQADIAFAAQANAAALgHQAKgHAHgLQAHgMAEgPQAFgPABgPQABgQgDgRQgCgRgGgPQgHgOgKgJQgKgKgPgDIgHAAQgMAAgKAHg");
	this.shape_62.setTransform(618.4026,489.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhbiWIAggBIAgAAIgCDyIB7gDIgBAgIgDAfIi3ABg");
	this.shape_63.setTransform(553.75,487.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgyCOQgVgJgOgSQgOgSgHgYQgGgYABgeIAGinIA9gDIgBBXIgCBVQgBAgAKAOQAKAPAXADIAEAAIACAAQATAAALgPQAMgPAAggIADhXIAChYIBBADIgCBYIgDBWQAAAdgIAXQgIAYgOARQgOARgUAJQgUAJgYAAQgdgBgVgKg");
	this.shape_64.setTransform(510.5933,488.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgoCTQgWgMgPgUQgPgUgHgaQgHgaAAgbQAAguALgiQAMggASgWQATgVAYgJQAXgKAZAAQAtAAAlAZIgdA2QgLgJgMgEQgNgFgMAAQgPAAgPAHQgOAHgLAOQgMAOgGAVQgHAUAAAbQAAAQAEAQQADAQAJAMQAIAMANAIQAMAHATAAIAMgDQAGgBAGgDIAFg8IgugDIAIg0IBiAEIgFBDIgFBEQgQAVgXALQgXAKgYAAQgdAAgXgMg");
	this.shape_65.setTransform(486.3,488.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAcQAAAdgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAJARADIAFAAQANAAAKgHQAKgHAHgLQAIgLAEgQQAEgOABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_66.setTransform(435.9751,488.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgyCOQgVgJgOgSQgOgSgHgYQgGgYABgeIAGinIA9gDIgBBXIgCBVQgBAgAKAOQAKAPAXADIAEAAIACAAQATAAALgPQAMgPAAggIADhXIAChYIBBADIgCBYIgDBWQAAAdgIAXQgIAYgOARQgOARgUAJQgUAJgYAAQgdgBgVgKg");
	this.shape_67.setTransform(395.9933,488.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgIC/IghgBIAGk7IhfADIAEhGICBAEICAAFIgFBAIhegCIgECcIgDCeIghgCg");
	this.shape_68.setTransform(372.225,484.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAAAnQgHAAgGgDQgHgDgEgFQgFgFgDgGQgEgHgBgGQgBgHADgHQADgIAGgGQAGgGAHgEQAIgEAGAAQAQAAAJAJQALAKABAOQABAHgDAIQgCAIgFAGQgFAGgHAEQgGAEgIABIgDAAg");
	this.shape_69.setTransform(939.5917,581.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Ag8huIB6AEIAAATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBUgGIACAWIACAXIhCADIhBADg");
	this.shape_70.setTransform(927.35,574.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEBrIgWAAIAEiqIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_71.setTransform(913.575,574.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgVAiIAVgDIAXgDIgThKg");
	this.shape_72.setTransform(898.2,574.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AARBHIgfgsIgMgBIgLgBIABAoIAAApIgWABIgWABIgEjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEALAIQAMAJAGAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIghgsgAgYhJIgOACIABA6IAIABIAJAAQAUAAALgHQAMgHACgPQACgPgKgIQgJgIgQgBIgQAAg");
	this.shape_73.setTransform(881.15,574.475);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZhGIADAAIgJgMIgIgMIA0gwIAbAfIgdAUIgbAVIAlAAIAGDUIgWAAIgVABg");
	this.shape_74.setTransform(868.5,570.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhNBoIgXgBIADhmIAChmIAcgCIAcgBIAnCEIAoiBIAcgCIAcgBIADBmIACBlIgXABIgWACIgBh9IgRA2IgSA2IgUgBIgUgBIgihqIgBCAIgWgBg");
	this.shape_75.setTransform(854.225,574.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAABrIgVgBIAChSIhAhsIAmgXIAtBXIAYgrIAWgqIAmAWQgQAZgPAdQgPAcgPAYIgBBVIgWgBg");
	this.shape_76.setTransform(825.9,574.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_77.setTransform(799.6518,574.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgVAiIAVgDIAXgDIgThKg");
	this.shape_78.setTransform(783.25,574.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag/hpIAWAAIAXgBIgCCqIBWgCIgBAWIgBAWIiBABg");
	this.shape_79.setTransform(767.55,574.375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AASBHIgggsIgMgBIgLgBIABAoIAAApIgWABIgXABIgDjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEAMAIQALAJAGAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIgggsgAgYhJIgOACIABA6IAIABIAJAAQAVAAAKgHQAMgHACgPQABgPgJgIQgJgIgRgBIgPAAg");
	this.shape_80.setTransform(752,574.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgZhqIAtAAIAHDUIgXAAIgVABg");
	this.shape_81.setTransform(737.75,574.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_82.setTransform(724.4225,574.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AARBHIgegsIgNgBIgLgBIAAAoIABApIgWABIgXABIgDjTQATgFASgDQASgDAQAAQAQAAAPAEQAPAEALAIQALAJAHAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIghgsgAgYhJIgOACIABA6IAIABIAJAAQAUAAALgHQAMgHACgPQABgPgJgIQgKgIgQgBIgPAAg");
	this.shape_83.setTransform(707.55,574.475);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEBrIgWAAIAEiqIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_84.setTransform(691.875,574.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_85.setTransform(676.4018,574.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_86.setTransform(661.15,574.475);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhIBrIgFjRIAHgBIARgDIAUgCIATgBIAFAAQARABAQAHQAPAGAMAMQAMANAHARQAHASABAYIAAAOIgBAPQgDAVgJARQgJARgOAMQgOAMgSAGQgQAHgVAAgAgXhFIgLACIAECFIADAAIADAAQAPAAAKgFQAMgGAHgJQAHgKAEgOQADgOAAgPQAAgcgMgRQgMgRgXAAIgKAAg");
	this.shape_87.setTransform(645.1875,574.475);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgWAiIAWgDIAXgDIgUhKg");
	this.shape_88.setTransform(618.15,574.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AARBHIgegsIgNgBIgMgBIABAoIABApIgWABIgXABIgDjTQATgFASgDQASgDAQAAQAQAAAPAEQAPAEALAIQALAJAHAOQAGANAAAUQAAAWgJAPQgKAOgQAIIA0BFIgRAOIgSAPIghgsgAgXhJIgQACIABA6IAJABIAJAAQAVAAALgHQAKgHACgPQACgPgJgIQgJgIgRgBIgOAAg");
	this.shape_89.setTransform(601.1,574.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAWABIAYABIA9DPIgWAFIgXAFgAgWAiIAWgDIAXgDIgUhKg");
	this.shape_90.setTransform(583.3,574.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhMhjQASgFARgDQARgDAOAAQATAAAPAEQARAFALAJQALAKAHANQAGAOAAAUQABAVgIAOQgGAPgNAKQgMAJgQAEQgRAGgRAAIgRgBIABBCIgWABIgWABgAgThFIgLACIABBGIAEAAIAEABQAKAAAIgCQAJgBAHgDQAIgFAGgIQAFgHABgMQACgPgKgJQgKgJgPgCIgFAAIgEgBIgKABg");
	this.shape_91.setTransform(566.65,574.15);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQABgUAFgUQAGgTALgPQALgPARgKQAQgJAUAAQAWAAARAKQAQAJALAQQAKAPAFAUQAFAUAAAUQgBAUgFATQgFATgKAQQgLAQgQAJQgQAKgWAAQgVgBgSgKgAgPg8QgHAEgFAIQgGAIgDAKQgDALgCALQgBALABAMQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgEgKQgFgJgIgHQgGgHgLgCIgFAAQgIAAgHAFg");
	this.shape_92.setTransform(538.8502,574.425);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AhLheIAqgQIBBB+IgEh3IAWAAIAXgBIADDTIgoABIhDh7IACA8IACA+IguAEg");
	this.shape_93.setTransform(520.95,574.275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Agdg4IA7ACIgPBuIgrABg");
	this.shape_94.setTransform(498.725,583.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_95.setTransform(486.1018,574.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAiBJIhGADIgLAiIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgVAiIAVgDIAXgDIgThKg");
	this.shape_96.setTransform(469.7,574.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AhLheIAqgQIBBB+IgEh3IAWAAIAXgBIADDTIgoABIhDh7IACA8IACA+IguAEg");
	this.shape_97.setTransform(452.45,574.275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AglBjQgRgKgLgPQgLgQgFgUQgFgTAAgUQABgUAFgUQAGgTALgPQALgPARgKQAQgJAUAAQAXAAAQAKQAQAJALAQQALAPAEAUQAFAUAAAUQgBAUgFATQgFATgKAQQgLAQgQAJQgQAKgWAAQgVgBgRgKgAgPg8QgHAEgFAIQgGAIgDAKQgEALgBALQgBALABAMQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgEgKQgFgJgIgHQgHgHgKgCIgFAAQgHAAgIAFg");
	this.shape_98.setTransform(434.5502,574.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_99.setTransform(416.4018,574.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AASBHIgggsIgLgBIgMgBIABAoIAAApIgWABIgWABIgEjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEAMAIQALAJAGAOQAGANAAAUQAAAWgKAPQgJAOgPAIIAzBFIgRAOIgSAPIgggsgAgYhJIgPACIACA6IAIABIAIAAQAVAAALgHQALgHADgPQACgPgKgIQgKgIgPgBIgQAAg");
	this.shape_100.setTransform(400.35,574.475);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_101.setTransform(383.7,574.475);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhMhjQASgFARgDQARgDAOAAQATAAAPAEQAQAFAMAJQALAKAHANQAGAOAAAUQABAVgIAOQgGAPgNAKQgMAJgQAEQgRAGgRAAIgRgBIABBCIgVABIgXABgAgThFIgLACIABBGIAEAAIAEABQAJAAAJgCQAJgBAHgDQAJgFAEgIQAGgHABgMQABgPgJgJQgKgJgPgCIgEAAIgFgBIgKABg");
	this.shape_102.setTransform(368.55,574.15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_103.setTransform(817.0018,511.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgVAiIAVgDIAXgDIgUhKg");
	this.shape_104.setTransform(800.6,511.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhAhpIAXAAIAWgBIgBCqIBWgCIgBAWIgBAWIiBABg");
	this.shape_105.setTransform(784.9,511.025);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgWAiIAWgDIAXgDIgThKg");
	this.shape_106.setTransform(759.15,511.25);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AASBHIgggsIgLgBIgNgBIABAoIABApIgWABIgWABIgEjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEAMAIQAKAJAHAOQAGANAAAUQAAAWgKAPQgJAOgQAIIA0BFIgRAOIgSAPIgggsgAgXhJIgQACIABA6IAJABIAIAAQAWAAALgHQALgHABgPQACgPgJgIQgKgIgPgBIgPAAg");
	this.shape_107.setTransform(732.25,511.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgWAiIAWgDIAXgDIgUhKg");
	this.shape_108.setTransform(714.45,511.25);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AhIBrIgFjRIAHgBIARgDIAUgCIATgBIAFAAQARABAQAHQAPAGAMAMQAMANAHARQAHASABAYIAAAOIgBAPQgDAVgJARQgJARgOAMQgOAMgSAGQgQAHgVAAgAgXhFIgLACIAECFIADAAIADAAQAPAAAKgFQAMgGAHgJQAHgKAEgOQADgOAAgPQAAgcgMgRQgMgRgXAAIgKAAg");
	this.shape_109.setTransform(696.9875,511.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_110.setTransform(679.6725,511.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAABrIgVgBIABhSIg/hsIAmgXIAuBXIAWgrIAYgqIAlAWQgPAZgPAdQgQAcgPAYIgCBVIgVgBg");
	this.shape_111.setTransform(663.4,511.025);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgWAiIAWgDIAXgDIgThKg");
	this.shape_112.setTransform(647.1,511.25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgWAiIAWgDIAXgDIgUhKg");
	this.shape_113.setTransform(619.85,511.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AARBHIgegsIgNgBIgLgBIAAAoIABApIgWABIgXABIgDjTQATgFASgDQASgDAQAAQAQAAAPAEQAPAEALAIQALAJAHAOQAGANAAAUQAAAWgJAPQgKAOgQAIIA0BFIgRAOIgSAPIghgsgAgXhJIgPACIABA6IAIABIAJAAQAVAAALgHQAKgHADgPQABgPgJgIQgKgIgQgBIgOAAg");
	this.shape_114.setTransform(602.8,511.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgWAiIAWgDIAXgDIgThKg");
	this.shape_115.setTransform(585,511.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhLhjQARgGARgCQARgDAOAAQATAAAPAEQAQAFAMAJQALAJAHAOQAGAOAAAUQABAVgIAOQgGAPgNAKQgMAKgQADQgRAGgRAAIgRgBIABBCIgVABIgXABgAgThFIgLACIABBGIAEAAIAEABQAJAAAJgCQAJgBAIgDQAIgFAEgIQAGgHABgMQABgPgJgJQgKgJgPgCIgEAAIgFgBIgKABg");
	this.shape_116.setTransform(568.35,510.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPARgKQAQgJAUAAQAWAAARAKQAQAJALAQQAKAPAFAUQAFAUAAAUQgBAUgEATQgGATgKAQQgLAQgQAJQgPAKgXAAQgVgBgSgKgAgPg8QgHAEgGAIQgFAIgDAKQgDALgCALQgBALABAMQACAMAFAKQAEAKAIAHQAJAGALACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgFgKQgEgJgIgHQgGgHgLgCIgFAAQgIAAgHAFg");
	this.shape_117.setTransform(540.5502,511.075);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_118.setTransform(524.625,511);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AhLheIAqgQIBBB+IgEh3IAWAAIAXgBIADDTIgoABIhCh7IABA8IABA+IgtAEg");
	this.shape_119.setTransform(509.4,510.925);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("Ag8huIB6AEIAAATIgBAUIhQgDIgBAuIA/gEIACAVIABAUIhDAEIgBAxIBUgGIACAWIACAXIhCADIhBADg");
	this.shape_120.setTransform(493.65,511.125);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgahqIAvAAIAFDUIgVAAIgWABg");
	this.shape_121.setTransform(481.3,511.075);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AhNBoIgXAAIADhnIAChmIAcgBIAcgCIAnCEIAoiBIAcgBIAcgCIADBmIACBlIgXABIgWACIgBh9IgRA2IgSA2IgUgBIgUgBIgihqIgBCAIgWgBg");
	this.shape_122.setTransform(465.825,511.25);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgahqIAuAAIAHDUIgXAAIgVABg");
	this.shape_123.setTransform(449.95,511.075);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAHBwQgOAAgPgGQgOgGgLgMQgMgNgGgTQgIgTABgaQgBgeAIgXQAGgXANgOQALgPAPgJQAPgHAPgBQASAAAQAFQAPAFAOAMIgYAlQgHgIgHgDQgIgEgIAAQgOAAgJAIQgKAIgGALQgGAMgDANQgDAOAAALQAAAOAEALQADAKAGAIQAFAHAHAEQAHAEAHAAQAYAAAPgUIAVAiQgLANgOAIQgOAIgQABg");
	this.shape_124.setTransform(438.25,511.05);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AglBjQgRgKgLgPQgLgQgFgUQgFgTAAgUQABgUAFgUQAGgTALgPQALgPARgKQAQgJAUAAQAXAAAQAKQAQAJALAQQALAPAEAUQAFAUAAAUQgBAUgFATQgFATgKAQQgLAQgQAJQgQAKgWAAQgVgBgRgKgAgPg8QgHAEgFAIQgGAIgDAKQgEALgBALQgBALABAMQACAMAEAKQAFAKAIAHQAIAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgEgKQgFgJgIgHQgHgHgKgCIgFAAQgHAAgIAFg");
	this.shape_125.setTransform(420.6002,511.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AhLheIAqgQIBCB+IgFh3IAXAAIAWgBIADDTIgoABIhDh7IACA8IACA+IguAEg");
	this.shape_126.setTransform(402.7,510.925);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AglBjQgRgKgLgPQgLgQgFgUQgGgTABgUQAAgUAGgUQAGgTALgPQALgPAQgKQARgJAUAAQAWAAARAKQAQAJALAQQALAPAEAUQAFAUAAAUQgBAUgFATQgEATgLAQQgKAQgRAJQgQAKgWAAQgWgBgQgKgAgPg8QgHAEgGAIQgFAIgDAKQgEALgBALQgBALABAMQACAMAEAKQAFAKAJAHQAHAGAMACIADAAQAJAAAHgEQAIgFAFgIQAFgIADgLQADgKABgLQAAgLgBgMQgCgMgFgKQgEgJgHgHQgIgHgJgCIgGAAQgIAAgHAFg");
	this.shape_127.setTransform(384.8002,511.075);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAHBwQgOAAgOgGQgPgGgLgMQgMgNgGgTQgIgTAAgaQAAgeAIgXQAGgXANgOQALgPAPgJQAPgHAPgBQASAAAQAFQAPAFAOAMIgYAlQgHgIgIgDQgIgEgIAAQgNAAgJAIQgKAIgGALQgGAMgDANQgCAOAAALQAAAOADALQADAKAGAIQAFAHAHAEQAHAEAHAAQAYAAAPgUIAVAiQgLANgOAIQgOAIgQABg");
	this.shape_128.setTransform(368.25,511.05);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_129.setTransform(893.2225,463.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_130.setTransform(878.125,463.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AASBHIgggsIgMgBIgLgBIABAoIAAApIgWABIgXABIgDjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEAMAIQALAJAGAOQAGANAAAUQAAAWgJAPQgKAOgPAIIAzBFIgRAOIgSAPIgggsgAgYhJIgOACIABA6IAIABIAJAAQAVAAAKgHQAMgHACgPQABgPgJgIQgJgIgRgBIgPAAg");
	this.shape_131.setTransform(853.25,463.525);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgVAiIAVgDIAXgDIgThKg");
	this.shape_132.setTransform(835.45,463.65);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgUBuQgLgBgLgEQgKgFgKgGQgJgGgHgKIAMgQIANgQQAKANAOAEQAOAFAPAAQARgBAJgIQAJgIgDgMQgCgHgIgFQgIgFgLgEIgWgJQgMgFgLgGQgKgHgGgLQgHgMABgQQABgRAGgLQAGgMAKgIQAKgHANgEQANgEAMAAQASAAAQAGQARAGAMAMIgZAlQgHgIgJgEQgJgFgJgBIgEgBIgEAAQgKAAgHAFQgHAFgBAKQAAAEACAEIAHAGIAKAFIAMAEIAYAJQAMAFALAIQAKAHAGALQAHAMgBARQgBARgHANQgGAMgLAJQgKAIgOAFQgNAEgPABIgVgCg");
	this.shape_133.setTransform(817.9518,463.475);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_134.setTransform(801.4225,463.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAWABIA+DPIgWAFIgXAFgAgVAiIAVgDIAXgDIgThKg");
	this.shape_135.setTransform(774.35,463.65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AASBHIgggsIgMgBIgLgBIABAoIAAApIgWABIgWABIgEjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEAMAIQALAJAGAOQAGANAAAUQAAAWgKAPQgJAOgPAIIAzBFIgRAOIgSAPIgggsgAgYhJIgOACIABA6IAIABIAJAAQAUAAALgHQALgHADgPQACgPgKgIQgJgIgQgBIgQAAg");
	this.shape_136.setTransform(757.3,463.525);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhPgDIgBAuIA/gEIABAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_137.setTransform(740.65,463.525);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgWAiIAWgDIAXgDIgUhKg");
	this.shape_138.setTransform(714.9,463.65);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AhDBmIgFgSIgEgTIBfh+IhaAAIAAgqICGABIAMAhIgzBCIgyBDIBngBIAAApg");
	this.shape_139.setTransform(698.025,463.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAWABIAYABIA9DPIgXAFIgWAFgAgVAiIAVgDIAXgDIgUhKg");
	this.shape_140.setTransform(681.35,463.65);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AASBHIgggsIgLgBIgNgBIABAoIABApIgWABIgWABIgEjTQATgFASgDQASgDAPAAQARAAAPAEQAPAEAMAIQAKAJAHAOQAGANAAAUQAAAWgKAPQgJAOgQAIIA0BFIgRAOIgSAPIgggsgAgXhJIgQACIABA6IAJABIAIAAQAWAAALgHQALgHABgPQACgPgJgIQgKgIgPgBIgPAAg");
	this.shape_141.setTransform(664.3,463.525);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgjBkQgPgHgJgMQgKgNgFgRQgEgRAAgVIAFh1IArgBIgCA8IgBA8QAAAWAHAKQAHAKAQACIACAAIABAAQAOAAAIgKQAIgLAAgWIACg8IABg+IAuACIgCA+IgBA8QgBAUgFAQQgGARgJALQgKAMgOAHQgOAGgRAAQgUgBgPgGg");
	this.shape_142.setTransform(636.5225,463.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_143.setTransform(621.425,463.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("Ag8huIB7AEIgBATIgBAUIhPgDIgCAuIBAgEIABAVIABAUIhDAEIgBAxIBVgGIABAWIACAXIhCADIhBADg");
	this.shape_144.setTransform(597.35,463.525);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AhIBrIgFjRIAHgBIARgDIAUgCIATgBIAFAAQARABAQAHQAPAGAMAMQAMANAHARQAHASABAYIAAAOIgBAPQgDAVgJARQgJARgOAMQgOAMgSAGQgQAHgVAAgAgXhFIgLACIAECFIADAAIADAAQAPAAAKgFQAMgGAHgJQAHgKAEgOQADgOAAgPQAAgcgMgRQgMgRgXAAIgKAAg");
	this.shape_145.setTransform(581.3875,463.525);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AhLheIAqgQIBBB+IgEh3IAWAAIAXgBIADDTIgoABIhDh7IACA8IABA+IgtAEg");
	this.shape_146.setTransform(554.5,463.325);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgmCOQgQgKgLgPQgLgQgFgUQgGgUABgUQABgUAFgUQAGgSALgPQALgQARgJIAJgEIgKgPIgMgQIBBg7IAhAmIgmAbIgeAWIgIADIABACIAHgFIgHAFIgBgCIAIgDQAKgCAJAAQAWAAARAJQAQAKALAPQAKAQAFATQAFAUAAAVQgBATgFAUQgFATgKAQQgLAPgQAKQgQAKgWAAQgVgBgSgKgAgPgRQgHAEgFAIQgGAGgDALQgDALgCAKQgBAMABAMQACANAEAKQAFAJAIAHQAIAHAMACIADAAQAJAAAIgEQAHgGAFgIQAFgHADgLQADgKAAgMQABgMgCgMQgBgLgEgKQgFgIgIgIQgGgGgLgCIgFgBQgIAAgHAGg");
	this.shape_147.setTransform(536.6002,459.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgZhqIAuAAIAGDUIgXAAIgVABg");
	this.shape_148.setTransform(522.1,463.475);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAHBwQgOAAgPgGQgOgGgLgMQgLgNgIgTQgGgTgBgaQABgeAGgXQAIgXALgPQAMgOAPgJQAQgHAPgBQARAAAQAFQAPAEAPANIgZAlQgHgHgIgEQgIgEgHAAQgOAAgJAIQgKAIgGALQgGAMgDANQgCAOgBAKQABAPACALQAEALAFAHQAGAHAHAEQAHAEAGAAQAZAAAPgUIAVAiQgKANgPAIQgOAIgQABg");
	this.shape_149.setTransform(510.4,463.45);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAXABIA9DPIgWAFIgXAFgAgWAiIAWgDIAXgDIgThKg");
	this.shape_150.setTransform(493.75,463.65);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgaBqIgehoIgdhpIAVgCIAVgCIAtCbIAUhNIAUhNIAWAEIAXAEIg2DOg");
	this.shape_151.setTransform(476.7,463.275);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgZhqIAtAAIAHDUIgXAAIgVABg");
	this.shape_152.setTransform(463.7,463.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEBrIgWgBIAEipIg0ABIADgtIBJACIBJADIgEAqIgygBIgCBUIgCBVIgVgBg");
	this.shape_153.setTransform(452.625,463.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgmBjQgQgKgLgPQgLgQgFgUQgFgTAAgUQABgUAFgUQAGgTALgPQALgPARgKQAQgJAUAAQAWAAARAKQAQAJALAQQAKAPAFAUQAFAUAAAUQgBAUgEATQgGATgKAQQgLAQgQAJQgQAKgWAAQgVgBgSgKgAgPg8QgHAEgFAIQgGAIgDAKQgDALgCALQgBALABAMQACAMAFAKQAEAKAIAHQAIAGAMACIADAAQAJAAAIgEQAHgFAFgIQAFgIADgLQADgKAAgLQABgLgCgMQgBgMgEgKQgFgJgIgHQgGgHgLgCIgFAAQgIAAgHAFg");
	this.shape_154.setTransform(436.2502,463.475);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AhNBoIgXAAIADhnIAChmIAcgBIAcgCIAnCEIAoiBIAcgBIAcgCIADBmIACBlIgXABIgWADIgBh9IgRA1IgSA2IgUAAIgUgCIgihpIgBB/IgWgBg");
	this.shape_155.setTransform(415.925,463.65);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAiBJIhGAEIgLAhIgogGIBEjVIAXABIAXABIA9DPIgWAFIgXAFgAgWAiIAWgDIAXgDIgThKg");
	this.shape_156.setTransform(386.65,463.65);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AhOiEIAZAAIAXAAIgCDcIBxgDIgCAYIgBAXIidABg");
	this.shape_157.setTransform(369.3,460.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#993300").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_158.setTransform(520.8233,412.15);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#993300").s().p("AhLCEQgIgGgFgKQgEgLAAgMIAAgMIABgNQABgbgBgaIgBg0IAAgLIAAgRIgBgLIgBgHIgBgIIABgGIACgKIACgGQACgIAGgFQAFgGAIgDQAHgDAIAAIAEAAIAEAAIANAAIAMAAQAVgBAUAFQAVAEATAKQAOAJAJAOQAKAOADAQQABAJgBAKQgBAKgDAJQgGATgOAPQgNAPgRAMQgRANgRAIQgHADgGABQgHABgHgBIAAAOIgBAOIABABIABACQAEAMgEAMQgEAMgJAHQgKAIgNAAQgMAAgJgHgAgUg5IAAARIABARIAAAKIABAAIABgBQALgFAIgHQAJgGAHgJIAFgHQACgFAAgDIgCgBIgBgBQgGgEgIgCIgOgCIgPgBIABAKg");
	this.shape_159.setTransform(500.695,412.8625);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#993300").s().p("AAACXIgggBIgIgBIgIgBQgMgFgGgJQgGgJAAgLQAAgLAGgJQAGgJAMgFQACgBAEAAIAGgBIgBgPIAAgYIgBgZIAAgOIAAglIAAglQgHAAgHgDQgHgDgFgFQgIgJgCgKQgCgLAEgJQAEgKAJgGQAJgGAMAAIAagBIAZgBIAIgBIAMgBIAHgBQAMABAIAFQAJAGAEAJQAEAJgBALQgBAKgHAJIgHAGIgIAEIgKACIgKABIAAAgIAAAgIAAANIAAAWIABAZIAAAWIABAOQAKACAGAIQAHAHACALQABAHgCAIQgCAIgFAGQgEAFgGADQgFAEgHAAIgQABIgOgBg");
	this.shape_160.setTransform(481.3483,413.325);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#993300").s().p("AgWCGQgJgBgJgFQgJgEgHgGIgGgFIgHgIIgFgFQgMgPgGgTQgGgSgCgTIgBgYIAAgWIAAgUIAAgUIABgJIAAgPIABgOIABgJIABgGIADgGQACgEAEgDIAHgGIAJgEIAKgBIAGAAIAGABQAGACAFAFQAFAEADAFQAEAFAAAHIABAMIgBACIAAABIgCAkQgBASABASIAAAdQABAPAEAOIACAIIADAHIADADIADACIACACIACACIACAAIACAAIAGgFIAGgGQAGgJAFgKIAIgTQADgNABgNQABgOgCgOIgBgJIgBgOIgCgPIgCgJIgBgIIACgJQAEgNAJgGQAJgHALgBQALAAAKAGQAKAFAFANQACAIABAIIABAPIADAYIACAXQAAAOgBAOQgBAOgDAOQgFAQgHAQQgHAPgJAOQgJAOgNAMQgOALgPAGQgKADgJABIgEAAQgJAAgIgCg");
	this.shape_161.setTransform(461.6583,412.8925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#993300").s().p("AA5CfIgGgBQgRgIgOgNQgOgNgIgRQgPAAgPgDQgPgEgMgJIgFgDIgFgEQgPgOgIgTQgIgTgDgVQgCgQAAgSQAAgRACgSQABgMAEgNQADgOAGgMQAGgMAIgLIALgLQAHgFAIgEQAIgEAHAAIAKABIAIADIAJgEQAFgDAEAAQATABAQAHQAQAJAMANQARATALAVQALAWACAaQABALgBALIgDAUQgDAXgKATQgKAUgQAPIAEAFIAFAFIAEACIAFACQAKAGAEAKQAFALgCAKQgCAOgLAIQgKAJgNAAIgGgBgAgNhaIgBABIgEACIgDADQgEAHgCAIIgEARQgDARAAAQQABAPADAPQACALAGAHQAFAGAMAAQAHAAAGgFQAHgEAFgGQAEgGADgHQAEgJACgMIABgXIgBgFIgBgGIgCgFIgJgQIgMgOQgCgCgDgBIgFgBIgFgCIgGgCIgBABg");
	this.shape_162.setTransform(438.275,414.95);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#993300").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_163.setTransform(417.6733,412.15);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#993300").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBIAegBIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCIgVgBIAAAeg");
	this.shape_164.setTransform(397.2891,412.1941);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#993300").s().p("ABECOQgJgGgGgMIgCgJIgCgPIgCgOIgCgKQgMADgNABQgNABgMAAIgSAAQgKAAgJgBIgDAIIgEAMIgCAJQgBAPgKAKQgJAKgQABQgMgBgJgGQgJgGgEgLIgCgLIABgLQAAgHAEgNIAKgdIAMgdIAHgTQANgeAQgeQAPgeAVgbQAJgOAOgJQANgJARgBQANABALAGQALAGAGALQAIAKAEAMIAFARIAGAaIAGAdIAFAbIAEAQIAGAnIAGAoIACAKIACAKIgBAJIgDAJQgFAIgIAFQgJAGgJAAQgNAAgIgHgAACgYIgPAhIAIAAIAMAAIAJAAIAIgCIAJgBIgGgeIgGggIgTAgg");
	this.shape_165.setTransform(372.95,413.225);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgLAIgIQAIgJALgFQALgFAKgBQAVAAAOANQAPANACAWQABALgDALQgEAKgHAJQgHAIgKAGQgJAGgLABIgFABQgKAAgJgEg");
	this.shape_166.setTransform(872.8174,551.75);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgliYIBDAAIAIEwIggAAIgeAAg");
	this.shape_167.setTransform(793.9,541.85);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AhnCZIgIksIALgBIAXgDIAdgEIAbgBIAHAAQAZACAXAJQAWAKARARQAQARALAZQAKAZACAjIAAAVIgCAVQgEAegNAYQgOAZgTAQQgUARgZAJQgZAKgdAAgAgihiIgQACIAHC+IAEAAIAEABQAWAAAPgIQAQgIAKgNQALgPAFgTQAFgTAAgXQgBgpgRgYQgRgYgiAAIgOABg");
	this.shape_168.setTransform(774.925,541.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AhriHIA8gXIBeC0IgHiqIAgAAIAggCIAEEvIg4ABIhgiwIACBWIACBYIhBAHg");
	this.shape_169.setTransform(750.625,541.65);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AhriHIA8gXIBeC0IgHiqIAgAAIAggCIAEEvIg4ABIhgiwIACBWIACBYIhBAHg");
	this.shape_170.setTransform(682.925,541.65);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("Ag2COQgYgOgPgXQgQgWgHgdQgIgbABgcQAAgeAJgcQAIgbAPgWQAQgVAYgOQAXgNAeAAQAgAAAXANQAXAOAPAWQAQAXAHAdQAHAcgBAcQAAAcgIAcQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhXQgLAHgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAPQAHAOAMAKQALAJARADIAFAAQANAAAKgHQAKgHAHgLQAIgMAEgPQAEgOABgQQABgQgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLAAgKAGg");
	this.shape_171.setTransform(657.3751,541.85);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAKCgQgVAAgUgJQgVgIgQgSQgQgRgKgcQgKgbAAglQAAgsAKgfQAKghARgWQAQgVAWgMQAWgLAWgBQAaAAAVAHQAWAHAVAQIgjA3QgKgLgLgGQgLgEgMAAQgTgBgNAMQgOALgJAQQgJARgEATQgEAUAAAOQAAAWAFAPQAFAPAIALQAHAKAKAFQAKAFAKABQAjAAAWgcIAeAxQgPASgVAMQgUALgXABg");
	this.shape_172.setTransform(633.725,541.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AhnCZIgIksIALgBIAXgDIAdgEIAbgBIAHAAQAZACAXAJQAWAKARARQAQARALAZQAKAZACAjIAAAVIgCAVQgEAegNAYQgOAZgTAQQgUARgZAJQgZAKgdAAgAgihiIgQACIAHC+IAEAAIAEABQAWAAAPgIQAQgIAKgNQALgPAFgTQAFgTAAgXQgBgpgRgYQgRgYgiAAIgOABg");
	this.shape_173.setTransform(574.725,541.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("Ag2COQgYgOgPgXQgQgWgHgdQgIgbABgcQAAgeAJgcQAIgbAPgWQAQgVAYgOQAXgNAeAAQAgAAAXANQAXAOAPAWQAQAXAHAdQAHAcgBAcQAAAcgIAcQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhXQgLAHgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAPQAHAOAMAKQALAJARADIAFAAQANAAAKgHQAKgHAHgLQAIgMAEgPQAEgOABgQQABgQgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLAAgKAGg");
	this.shape_174.setTransform(534.7251,541.85);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AhnCZIgIksIALgBIAXgDIAdgEIAbgBIAHAAQAZACAXAJQAWAKARARQAQARALAZQAKAZACAjIAAAVIgCAVQgEAegNAYQgOAZgTAQQgUARgZAJQgZAKgdAAgAgihiIgQACIAHC+IAEAAIAEABQAWAAAPgIQAQgIAKgNQALgPAFgTQAFgTAAgXQgBgpgRgYQgRgYgiAAIgOABg");
	this.shape_175.setTransform(508.825,541.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AhriHIA8gXIBeC0IgHiqIAgAAIAggCIAEEvIg4ABIhgiwIACBWIACBYIhBAHg");
	this.shape_176.setTransform(484.525,541.65);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgFCZIgggBIAGjyIhLACIAFhBIBoADIBnAEIgEA8IhIgCIgDB4IgDB6IgdgBg");
	this.shape_177.setTransform(438.55,541.75);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgFCZIgggBIAGjyIhKACIADhBIBpADIBnAEIgEA8IhIgCIgDB4IgDB6IgdgBg");
	this.shape_178.setTransform(369.9,541.75);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAxCSIhlAEIgQAwIg5gJIBhkwIgJgOIBKhEIAnAsIgcAUIgcAUIASABIBXEoIgfAHIghAHgAgfBZIAfgEIAhgEIgchrg");
	this.shape_179.setTransform(775.6,470.825);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgFCZIgggBIAGjyIhKACIADhBIBpADIBnAEIgEA8IhIgCIgDB4IgDB6IgdgBg");
	this.shape_180.setTransform(753.75,474.55);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgcCeQgRgDgPgFQgPgGgOgKQgNgJgJgNIARgYIARgXQAPATAUAGQAUAHAWAAQAYgBANgMQANgMgEgQQgCgLgMgHQgLgHgQgGIghgMQgRgHgPgJQgOgLgJgPQgKgRABgXQABgYAJgQQAJgRAOgLQAPgLASgFQASgGATABQAYgBAYAJQAYAJARAQIgkA1QgKgLgMgGQgNgHgNgCIgGgBIgGAAQgOAAgKAHQgLAHgBAOQAAAHADAFQAEAFAGAEQAGADAJADIARAHIAiANQASAGAPAMQAOAJAKARQAJAQgBAZQgCAZgJASQgKASgPAMQgPAMgTAGQgTAHgVAAQgOAAgQgBg");
	this.shape_181.setTransform(731.655,474.65);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_182.setTransform(709.925,474.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgcCeQgRgDgPgFQgPgGgOgKQgNgJgJgNIARgYIARgXQAPATAUAGQAUAHAWAAQAYgBANgMQANgMgEgQQgCgLgMgHQgLgHgQgGIghgMQgRgHgPgJQgOgLgJgPQgKgRABgXQABgYAJgQQAJgRAOgLQAPgLASgFQASgGATABQAYgBAYAJQAYAJARAQIgkA1QgKgLgMgGQgNgHgNgCIgGgBIgGAAQgOAAgKAHQgLAHgBAOQAAAHADAFQAEAFAGAEQAGADAJADIARAHIAiANQASAGAPAMQAOAJAKARQAJAQgBAZQgCAZgJASQgKASgPAMQgPAMgTAGQgTAHgVAAQgOAAgQgBg");
	this.shape_183.setTransform(661.555,474.65);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_184.setTransform(639.825,474.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AhriWIA+gEIAECDIBRgJIgFh5IBBAAIAIEvIg8ABIgGh3IhSAEIADBwIhAAHg");
	this.shape_185.setTransform(617.4,474.825);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAKCgQgVAAgUgIQgVgJgQgRQgQgTgKgbQgKgbAAglQAAgsAKggQAKggARgWQAQgWAWgLQAWgKAWgCQAaAAAVAHQAWAHAVAQIgjA3QgKgMgLgEQgLgGgMAAQgTABgNAKQgOAMgJAQQgJARgEATQgEATAAAPQAAAWAFAOQAFAQAIAKQAHALAKAFQAKAGAKAAQAjAAAWgbIAeAwQgPASgVALQgUAMgXABg");
	this.shape_186.setTransform(595.425,474.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAKCgQgVAAgUgIQgVgJgQgRQgQgTgKgbQgKgbAAglQAAgsAKggQAKggARgWQAQgWAWgLQAWgKAWgCQAaAAAVAHQAWAHAVAQIgjA3QgKgMgLgEQgLgGgMAAQgTABgNAKQgOAMgJAQQgJARgEATQgEATAAAPQAAAWAFAOQAFAQAIAKQAHALAKAFQAKAGAKAAQAjAAAWgbIAeAwQgPASgVALQgUAMgXABg");
	this.shape_187.setTransform(549.025,474.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgcCeQgRgDgPgFQgPgGgOgKQgNgJgJgNIARgYIARgXQAPATAUAGQAUAHAWAAQAYgBANgMQANgMgEgQQgCgLgMgHQgLgHgQgGIghgMQgRgHgPgJQgOgLgJgPQgKgRABgXQABgYAJgQQAJgRAOgLQAPgLASgFQASgGATABQAYgBAYAJQAYAJARAQIgkA1QgKgLgMgGQgNgHgNgCIgGgBIgGAAQgOAAgKAHQgLAHgBAOQAAAHADAFQAEAFAGAEQAGADAJADIARAHIAiANQASAGAPAMQAOAJAKARQAJAQgBAZQgCAZgJASQgKASgPAMQgPAMgTAGQgTAHgVAAQgOAAgQgBg");
	this.shape_188.setTransform(525.105,474.65);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_189.setTransform(503.375,474.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAdQAAAcgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAKARACIAFAAQANABAKgIQAKgHAHgLQAIgLAEgPQAEgPABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_190.setTransform(465.1751,474.65);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAdQAAAcgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAKARACIAFAAQANABAKgIQAKgHAHgLQAIgLAEgPQAEgPABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_191.setTransform(403.6251,474.65);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_192.setTransform(673.1174,484.55);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AhriHIA8gXIBeC1IgHiqIAggBIAggCIAEEvIg4ABIhgivIACBVIACBYIhBAHg");
	this.shape_193.setTransform(627.025,474.45);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAXCIIgLACIgLAAQgcAAgXgMQgWgMgQgTQgPgTgJgYQgJgZgCgaQgDgfAHgfQAHggAQgZQAPgZAZgQQAZgQAgAAQAdAAAVALQAWALAPASQAPASAJAXQAJAZACAZQACAUgCAVQgCATgGAUQgGATgJAQQgKAPgNAMIAjAfIgXAYIgWAWgAgWhpQgKAGgIALQgIAMgEAOQgFAPgCAQQgCASACAPQACARAHAPQAHAOALAKQAMAKAQADIAFAAQANAAALgHQAKgHAHgMQAHgLAEgPQAFgPABgPQABgRgDgQQgCgSgGgOQgHgNgKgKQgKgKgPgDIgHAAQgMAAgKAHg");
	this.shape_194.setTransform(541.6526,476.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AhqiLIBKACIgGgIIgRgYIBdhVIAwA2Ig2AnIggAZIBtADIgBAdIgCAdIiUgGIgDBmIB3gIIACAfIACAeIg/AFIg+AEIgCBpICegKIADAiIADAhIhzAGIhyAEgAgVh6IAVgOIgggBIALAPgAggiJIAgABIgVAOIgLgPg");
	this.shape_195.setTransform(373.225,465.375);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#CC3300").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_196.setTransform(520.9733,412.15);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CC3300").s().p("AhLCEQgIgGgFgKQgEgLAAgMIAAgMIABgNQABgbgBgaIgBg0IAAgLIAAgRIgBgLIgBgHIgBgIIABgGIACgKIACgGQACgIAGgFQAFgGAIgDQAHgDAIAAIAEAAIAEAAIANAAIAMAAQAVgBAUAFQAVAEATAKQAOAJAJAOQAKAOADAQQABAJgBAKQgBAKgDAJQgGATgOAPQgNAPgRAMQgRANgRAIQgHADgGABQgHABgHgBIAAAOIgBAOIABABIABACQAEAMgEAMQgEAMgJAHQgKAIgNAAQgMAAgJgHgAgUg5IAAARIABARIAAAKIABAAIABgBQALgFAIgHQAJgGAHgJIAFgHQACgFAAgDIgCgBIgBgBQgGgEgIgCIgOgCIgPgBIABAKg");
	this.shape_197.setTransform(500.845,412.8625);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CC3300").s().p("AAACXIgggBIgIgBIgIgBQgMgFgGgJQgGgJAAgLQAAgLAGgJQAGgJAMgFQACgBAEAAIAGgBIgBgPIAAgYIgBgZIAAgOIAAglIAAglQgHAAgHgDQgHgDgFgFQgIgJgCgKQgCgLAEgJQAEgKAJgGQAJgGAMAAIAagBIAZgBIAIgBIAMgBIAHgBQAMABAIAFQAJAGAEAJQAEAJgBALQgBAKgHAJIgHAGIgIAEIgKACIgKABIAAAgIAAAgIAAANIAAAWIABAZIAAAWIABAOQAKACAGAIQAHAHACALQABAHgCAIQgCAIgFAGQgEAFgGADQgFAEgHAAIgQABIgOgBg");
	this.shape_198.setTransform(481.4983,413.325);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CC3300").s().p("AgWCGQgJgBgJgFQgJgEgHgGIgGgFIgHgIIgFgFQgMgPgGgTQgGgSgCgTIgBgYIAAgWIAAgUIAAgUIABgJIAAgPIABgOIABgJIABgGIADgGQACgEAEgDIAHgGIAJgEIAKgBIAGAAIAGABQAGACAFAFQAFAEADAFQAEAFAAAHIABAMIgBACIAAABIgCAkQgBASABASIAAAdQABAPAEAOIACAIIADAHIADADIADACIACACIACACIACAAIACAAIAGgFIAGgGQAGgJAFgKIAIgTQADgNABgNQABgOgCgOIgBgJIgBgOIgCgPIgCgJIgBgIIACgJQAEgNAJgGQAJgHALgBQALAAAKAGQAKAFAFANQACAIABAIIABAPIADAYQACALAAAMQAAAOgBAOQgBAOgDAOQgFAQgHAQQgHAPgJAOQgJAOgNAMQgOALgPAGQgKADgJABIgEAAQgJAAgIgCg");
	this.shape_199.setTransform(461.8083,412.8925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CC3300").s().p("AA5CfIgGgBQgRgIgOgNQgOgNgIgRQgPAAgPgDQgPgEgMgJIgFgDIgFgEQgPgOgIgTQgIgTgDgVQgCgQAAgSQAAgRACgSQABgMAEgNQADgOAGgMQAGgMAIgLIALgLQAHgFAIgEQAIgEAHAAIAKABIAIADIAJgEQAFgDAEAAQATABAQAHQAQAJAMANQARATALAVQALAWACAaQABALgBALIgDAUQgDAXgKATQgKAUgQAPIAEAFIAFAFIAEACIAFACQAKAGAEAKQAFALgCAKQgCAOgLAIQgKAJgNAAIgGgBgAgNhaIgBABIgEACIgDADQgEAHgCAIIgEARQgDARAAAQQABAPADAPQACALAGAHQAFAGAMAAQAHAAAGgFQAHgEAFgGQAEgGADgHQAEgJACgMIABgXIgBgFIgBgGIgCgFIgJgQIgMgOQgCgCgDgBIgFgBIgFgCIgGgCIgBABg");
	this.shape_200.setTransform(438.425,414.95);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CC3300").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_201.setTransform(417.8233,412.15);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CC3300").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCQgLgBgKAAIAAAeg");
	this.shape_202.setTransform(397.4391,412.1941);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CC3300").s().p("ABDCOQgIgGgFgMIgDgJIgDgPIgBgOIgCgKQgMADgNABQgNABgMAAIgTAAQgJAAgJgBIgDAIIgEAMIgCAJQAAAPgLAKQgKAKgPABQgLgBgJgGQgKgGgEgLQgCgFAAgGIAAgLQABgHAFgNIAKgdIALgdIAHgTQANgeAPgeQAQgeAUgbQAKgOAOgJQANgJARgBQAOABAKAGQAKAGAHALQAIAKAEAMIAFARIAGAaIAGAdIAGAbIADAQIAGAnIAGAoIACAKIACAKIgBAJIgEAJQgEAIgIAFQgJAGgJAAQgNAAgJgHgAACgYQgIARgHAQIAIAAIAMAAIAJAAIAJgCIAIgBIgGgeIgHggQgKAQgIAQg");
	this.shape_203.setTransform(373.1375,413.225);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgLDJQgOAAgJgFQgKgEgHgIQgGgHgDgJQgDgJABgKQAAgKADgKQAEgJAGgIQAGgHAJgFQAHgEALAAQAWAAAOAPQAPAPACAWQAAAKgCAJQgDAJgFAHQgHAIgIAFQgJAEgLABgAgsA2QAHgXAMgSQANgSAMgQIAVgfQAKgPAAgPQACgVgOgNQgMgOgXAAQgRAAgRAGQgQAGgPAIIgVg/QAYgOAZgGQAYgHAXAAQAVAAAVAHQAUAHAPAOQAPANAIAUQAJAUAAAaQAAAZgKAWQgKAVgMATQgOASgOARQgOARgJAQg");
	this.shape_204.setTransform(508.8,470.175);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgliYIBDAAIAIEvIggABIgfAAg");
	this.shape_205.setTransform(416.5,474.65);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("Ahvi8IAjgBIAiAAIgDE7ICggEIgCAiIgBAhIjiABg");
	this.shape_206.setTransform(397.7,471);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgjDCQgTgHgQgOQgOgNgJgUQgJgUAAgaQAAgZAKgWQAJgVANgTQAOgSAOgRQAOgRAJgQIBAAIQgHAXgMASQgNASgNAQIgUAfQgKAPAAAPQgBAVANANQAMAOAXAAQARAAARgGQAQgGAPgIIAVA/QgYAOgZAGQgYAHgXAAQgVAAgVgHgAgThuQgOgPgDgWQAAgKACgJQADgJAFgHQAHgIAIgEQAJgFALgBIADAAQAOAAAKAFQAJAEAHAIQAGAHADAJQADAJgBAKQAAAKgDAKQgEAJgGAIQgGAHgIAFQgJAEgKAAQgWAAgOgPg");
	this.shape_207.setTransform(378.95,473.875);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#CCCCCC").s().p("AgYCeQgGgDgEgEQgGgEgDgFQgDgGgBgGQgCgIACgHQACgIAEgHQAIgMALgDQALgEALADQAKADAIAJQAHAIABAOQAAAJgFAJQgEAIgGAHQgFAEgGACIgLADQgHAAgGgCgAgZBKQgNAAgLgKQgGgGgCgIQgDgIABgIIAAgIIADgIQAEgKAIgJQAIgJAJgIIANgKQAHgEAEgHIAEgKIAFgJIAFgNQACgFgBgGIgCgCIgCgCIgEgBIgDAAIgIACIgIADIgCACIgDADQgCAEgFACIgIAFQgFACgHAAIgMgBQgGgDgFgEIgIgJQgDgEgBgFIgBgJQgBgJAFgJQAGgKAIgHQAIgIAIgEQALgFAMgDQAMgDAMgBQAIgBAIABQAJABAJADQAJADAHAGIAPALIAHAIIAGAIIAFALIACALQADAPgDAPQgCAOgFAOQgFAMgGAKQgGALgHAKIgKAMIgNALIgJAHIgJAIIAAABIAAABQgDAOgKAJQgJAHgNAAIgBgBg");
	this.shape_208.setTransform(419.1852,414.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#CCCCCC").s().p("AgYCeQgGgDgEgEQgGgEgDgFQgDgGgBgGQgCgIACgHQACgIAEgHQAIgMALgDQALgEALADQAKADAIAJQAHAIABAOQAAAJgFAJQgEAIgGAHQgFAEgGACIgLADQgHAAgGgCgAgZBKQgNAAgLgKQgGgGgCgIQgDgIABgIIAAgIIADgIQAEgKAIgJQAIgJAJgIIANgKQAHgEAEgHIAEgKIAFgJIAFgNQACgFgBgGIgCgCIgCgCIgEgBIgDAAIgIACIgIADIgCACIgDADQgCAEgFACIgIAFQgFACgHAAIgMgBQgGgDgFgEIgIgJQgDgEgBgFIgBgJQgBgJAFgJQAGgKAIgHQAIgIAIgEQALgFAMgDQAMgDAMgBQAIgBAIABQAJABAJADQAJADAHAGIAPALIAHAIIAGAIIAFALIACALQADAPgDAPQgCAOgFAOQgFAMgGAKQgGALgHAKIgKAMIgNALIgJAHIgJAIIAAABIAAABQgDAOgKAJQgJAHgNAAIgBgBg");
	this.shape_209.setTransform(399.8852,414.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#CCCCCC").s().p("AgYCeQgGgDgEgEQgGgEgDgFQgDgGgBgGQgCgIACgHQACgIAEgHQAIgMALgDQALgEALADQAKADAIAJQAHAIABAOQAAAJgFAJQgEAIgGAHQgFAEgGACIgLADQgHAAgGgCgAgZBKQgNAAgLgKQgGgGgCgIQgDgIABgIIAAgIIADgIQAEgKAIgJQAIgJAJgIIANgKQAHgEAEgHIAEgKIAFgJIAFgNQACgFgBgGIgCgCIgCgCIgEgBIgDAAIgIACIgIADIgCACIgDADQgCAEgFACIgIAFQgFACgHAAIgMgBQgGgDgFgEIgIgJQgDgEgBgFIgBgJQgBgJAFgJQAGgKAIgHQAIgIAIgEQALgFAMgDQAMgDAMgBQAIgBAIABQAJABAJADQAJADAHAGIAPALIAHAIIAGAIIAFALIACALQADAPgDAPQgCAOgFAOQgFAMgGAKQgGALgHAKIgKAMIgNALIgJAHIgJAIIAAABIAAABQgDAOgKAJQgJAHgNAAIgBgBg");
	this.shape_210.setTransform(380.5852,414.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AhnCZIgIkrIALgCIAXgDIAdgDIAbgCIAHAAQAZACAXAKQAWAIARASQAQARALAZQAKAZACAiIAAAWIgCAVQgEAegNAYQgOAYgTARQgUASgZAIQgZAKgdAAgAgihiIgQABIAHC/IAEAAIAEABQAWAAAPgIQAQgHAKgPQALgOAFgTQAFgTAAgXQgBgogRgZQgRgYgiAAIgOABg");
	this.shape_211.setTransform(638.375,474.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AhqjFIDXAGIgBAeIgCAcIiUgGIgDBnIB3gIIACAgIACAdIg/AEIg+AFIgCBoICegJIADAiIADAhIhzAFIhyAFg");
	this.shape_212.setTransform(373.225,471.125);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("Ag2DLQgYgPgPgWQgQgWgHgdQgIgcABgdQAAgdAJgcQAIgbAPgVQAQgWAYgNIANgGIgOgUIgRgXIBdhWIAvA2Ig1AoIgrAfIgKAHIgDgDIANgEIgNAEIADADIAKgHQANgDAOAAQAgAAAXANQAXAPAPAVQAQAXAHAbQAHAdgBAeQAAAcgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVgZQgLAGgIALQgHALgFAOQgFAPgCAQQgBARACARQACARAGAOQAHAPAMAKQALAKARACIAFAAQANABAKgIQAKgHAHgLQAIgLAEgPQAEgPABgRQABgQgCgRQgDgRgGgOQgGgNgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_213.setTransform(717.9251,468.55);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgliYIBCAAIAJEvIgfABIggAAg");
	this.shape_214.setTransform(697.2,474.65);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AhsiPQAZgHAYgDQAYgFAVAAQAaAAAXAHQAXAGAQANQARANAJAVQAJATAAAcQAAAegKAVQgKAVgRAOQgSAOgXAGQgXAHgaAAQgMAAgLgBIABBeIggACIggACgAgchiIgQABIACBmIAGABIAFAAQAOgBANgCQAMgCALgFQALgGAHgKQAIgLACgSQACgVgNgNQgOgNgWgCIgHgBIgHAAIgOABg");
	this.shape_215.setTransform(657.825,474.25);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AhriHIA8gXIBeC1IgHiqIAggBIAggCIAEEvIg4ABIhgivIACBVIACBYIhBAHg");
	this.shape_216.setTransform(506.525,474.45);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgRDPQgJgEgHgHQgIgIgEgKQgEgKgBgLQAAgKACgJQACgJAGgIQAGgHAJgFQAJgFAMgBIADAAQANAAAKAFQALAEAGAIQAGAHADAKQADAJAAAKQgBALgDAKQgDAJgGAIQgGAIgJAFQgJAEgKAAQgLAAgKgEgAgpjNIBSgFIgKEIIg/AEg");
	this.shape_217.setTransform(486.6236,469.125);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgIDAIghgCIAGk7IhfADIAEhGICBAEICAAFIgFBAIhegCIgECcIgDCeIghgBg");
	this.shape_218.setTransform(442.525,470.95);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AhqjFIDXAGIgBAeIgCAcIiUgGIgDBnIB3gIIACAgIACAdIg/AEIg+AFIgCBoICegJIADAiIADAhIhzAFIhyAFg");
	this.shape_219.setTransform(417.325,471.125);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgtC+Ig1i8Ig1i6IAhgFIAggDIBaE1IAThKIAUhOIAVhPIAThMIAjAHIAiAGIhhFyg");
	this.shape_220.setTransform(389.625,470.675);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("Ageg1IA/gEIAJEHIhSAFgAAChmQgNAAgKgFQgLgEgGgIQgGgHgDgKQgDgJAAgKQABgLADgKQADgJAGgIQAGgIAJgFQAJgEAKAAQALAAAKAEQAJAEAHAIQAIAHAEAKQAEAKABALQAAAKgCAJQgCAJgGAIQgGAHgJAFQgJAFgMABg");
	this.shape_221.setTransform(367.2264,475.325);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#009900").s().p("Ag3B5QgUgMgMgWQgLgVgFgdQgCgRAAgRQAAgRACgSQABgMAEgNQADgOAGgMQAGgMAIgKIALgLIAPgKQAIgEAHAAIAKABIAIADIAJgEQAFgCAEAAQATAAAQAIQAQAIAMANQARATALAWQALAVACAaQABALgBAKIgDAVQgDAVgJATQgJATgPAPQgOAPgTAIQgSAJgVAAQgeAAgUgMgAgNhAIgBABIgEACIgDADQgEAHgCAJIgEARQgDAPAAAQQABAQADAPQACAMAGAGQAFAGAMAAQAHAAAGgEQAHgEAFgHIAHgNQAEgKACgMIABgWIgBgFIgBgHIgCgEIgJgQIgMgOQgCgCgDgBIgFgBIgFgBIgGgDIgBABg");
	this.shape_222.setTransform(453.175,412.325);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#009900").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCIgVgBIAAAeg");
	this.shape_223.setTransform(430.7891,412.1941);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#009900").s().p("AhRCQQgKgFgFgJQgDgGgCgGIgBgMIAAgQIAAgZIAAgeIAAgaIAAgOIABgmIAAglQgBgIACgIQADgJAFgFIAHgHIAHgEIACgBIACAAQALgIANgFQANgFANgDIAPgDIAOgCQAMAAAMACQANADALAGIAOAJQAGAGAFAGQAGAIADAIQAEAIACAJIABAMIgBALQgBAPgHAOQgGAPgKALIAKAGIAJAIQAJANAEAOQAEAOgDAPQgCAMgGALQgGALgJAJQgIAIgJAGQgJAGgKADIgTAGIgTAFIgIABIgKAAIgQABIgPgBIgIAEIgIACIgCAAQgLAAgIgFgAAEA1IgFAAIgJABIgFACIgIACIgHACIAAAMQAKAAAKgBIASgEIAEgBIAFgCIAEgBIAFgEIAEgEQgGgCgHAAIgGAAIgHAAgAAEhLIgRADIgOAFIgBACIgBABIAAAXIgBAXIARgLIAQgMIAKgKQAFgFADgHIABgEIAAgFIgCgBIgCgBQgEgCgFAAIgFABg");
	this.shape_224.setTransform(408.2731,411.9231);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#009900").s().p("AAACXIgggBIgIgBIgIgBQgMgFgGgJQgGgJAAgLQAAgLAGgJQAGgJAMgFQACgBAEAAIAGgBIgBgPIAAgYIgBgZIAAgOIAAglIAAglQgHAAgHgDQgHgDgFgFQgIgJgCgKQgCgLAEgJQAEgKAJgGQAJgGAMAAIAagBIAZgBIAIgBIAMgBIAHgBQAMABAIAFQAJAGAEAJQAEAJgBALQgBAKgHAJIgHAGIgIAEIgKACIgKABIAAAgIAAAgIAAANIAAAWIABAZIAAAWIABAOQAKACAGAIQAHAHACALQABAHgCAIQgCAIgFAGQgEAFgGADQgFAEgHAAIgQABIgOgBg");
	this.shape_225.setTransform(388.0483,413.325);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#009900").s().p("AgpCLQgIgCgGgEQgMgGgHgLQgIgMgDgNQgDgNAAgNQAAgfAEgfIAHg9IABgRIgBgSIABgLIABgLQAEgLAKgHQAKgHAMAAQAGAAAFACIALAGQAFAEADAGQADAFABAGIABAHIgBAHIABARIAAAQIgFAsIgFArQgCAWAAAWIAigFQARgDASgBIAGAAIAGABQAHACAGAGQAFAGADAIQADAHAAAIQgBAIgEAHQgEAHgGAFQgHAFgIABIgQACIgbAEIgZAEIgQACIgDAAQgHAAgGgCg");
	this.shape_226.setTransform(370.6286,413.03);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_227.setTransform(651.0674,484.55);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_228.setTransform(637.2674,484.55);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_229.setTransform(558.3174,484.55);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_230.setTransform(544.5174,484.55);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_231.setTransform(530.7174,484.55);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_232.setTransform(451.7674,484.55);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_233.setTransform(437.9674,484.55);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgUA0QgJgFgHgGQgHgIgEgJQgFgJgBgJQgCgLAFgLQAEgKAIgJQAIgIALgGQALgFAKgBQAVAAAOAOQAPAMACAWQABAKgDAMQgEALgHAIQgHAIgKAGQgJAGgLACIgFAAQgKAAgJgEg");
	this.shape_234.setTransform(424.1674,484.55);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("Ag2COQgYgPgPgWQgQgWgHgdQgIgcABgcQAAgdAJgcQAIgcAPgVQAQgWAYgNQAXgNAeAAQAgAAAXANQAXAPAPAVQAQAXAHAcQAHAdgBAdQAAAcgIAbQgHAcgPAWQgPAWgXAOQgXAOggAAQgfgBgYgOgAgVhWQgLAGgIALQgHAMgFAOQgFAPgCAQQgBAQACARQACARAGAOQAHAPAMAKQALAKARACIAFAAQANABAKgIQAKgHAHgLQAIgLAEgPQAEgPABgRQABgPgCgRQgDgRgGgOQgGgOgLgKQgKgJgOgDIgIAAQgLgBgKAIg");
	this.shape_235.setTransform(403.6251,474.65);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("ABhAuQgIgEgGgHQgHgGgEgJQgEgHgBgIQgBgKADgJQAEgJAHgIQAHgHAKgFQAJgFAJgBQASAAANANQANAMABARQABAKgDAJQgEAKgGAHQgGAIgIAGQgIAFgJABIgCAAIgDAAQgIAAgHgDgAgQAuQgIgEgGgHQgGgGgEgJQgEgHgBgIQgBgKADgJQAEgJAHgIQAHgHAJgFQAJgFAJgBQASAAANANQAMALABASQABAKgDAJQgEAKgGAHQgGAIgHAGQgIAFgJABIgCAAIgCAAQgIAAgIgDgAiCAuQgHgEgHgHQgGgGgEgJQgDgHgBgIQgCgKAEgJQAEgJAHgIQAHgHAJgFQAJgFAJgBQATAAAMANQAMALABASQABAKgDAJQgDAKgGAHQgGAIgIAGQgIAFgJABIgCAAIgDAAQgIAAgIgDg");
	this.shape_236.setTransform(651.89,485.05);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AhiCaIgJkrIAPgBIAdgDIAigEIAcgCQAUAAASAEQASAEAMAIQANAJAHAOQAHANAAAVQAAAWgJARQgJARgQANQAYALAMATQANATgBAWQgBASgJARQgJASgSAOQgSAOgcAIQgaAJgkAAgAgpAbIACBFIAJABIAIAAQAJAAALgCQAKgCAJgEQAJgFAHgIQAGgHACgLQABgNgJgNQgJgMgTgGQgWAIgYAFgAgshfIACA+QAVgCAPgFQANgEAJgHQAJgGADgHQAEgIAAgIQAAgKgHgGQgHgGgRAAQgPAAgeAHg");
	this.shape_237.setTransform(570.4787,474.525);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgliYIBCAAIAJEvIggABIgeAAg");
	this.shape_238.setTransform(551.45,474.65);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("ABhAuQgIgEgGgHQgHgGgEgJQgEgHgBgIQgBgKADgJQAEgJAHgIQAHgHAKgFQAJgFAJgBQASAAANANQANAMABARQABAKgDAJQgEAKgGAHQgGAIgIAGQgIAFgJABIgCAAIgDAAQgIAAgHgDgAgQAuQgIgEgGgHQgGgGgEgJQgEgHgBgIQgBgKADgJQAEgJAHgIQAHgHAJgFQAJgFAJgBQASAAANANQAMALABASQABAKgDAJQgEAKgGAHQgGAIgHAGQgIAFgJABIgCAAIgCAAQgIAAgIgDgAiCAuQgHgEgHgHQgGgGgEgJQgDgHgBgIQgCgKAEgJQAEgJAHgIQAHgHAJgFQAJgFAJgBQATAAAMANQAMALABASQABAKgDAJQgDAKgGAHQgGAIgIAGQgIAFgJABIgCAAIgDAAQgIAAgIgDg");
	this.shape_239.setTransform(492.44,485.05);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAZBlIgtg/IgRgBIgRgBIABA5IABA6IggABIggACIgEkuQAbgHAZgFQAagEAWAAQAYAAAWAGQAVAGAQAMQAQANAJATQAJAUAAAbQAAAhgNAVQgOAUgWALIBJBiIgYAVIgaAWIguhAgAgihoIgWADIACBSIAMABIAMAAQAeAAAQgJQAQgKADgWQADgWgOgLQgOgLgXgCIgVABg");
	this.shape_240.setTransform(436.175,474.725);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AhiCaIgJkrIAPgBIAdgDIAigEIAcgCQAUAAASAEQASAEAMAIQANAJAHAOQAHANAAAVQAAAWgJARQgJARgQANQAYALAMATQANATgBAWQgBASgJARQgJASgSAOQgSAOgcAIQgaAJgkAAgAgpAbIACBFIAJABIAIAAQAJAAALgCQAKgCAJgEQAJgFAHgIQAGgHACgLQABgNgJgNQgJgMgTgGQgWAIgYAFgAgshfIACA+QAVgCAPgFQANgEAJgHQAJgGADgHQAEgIAAgIQAAgKgHgGQgHgGgRAAQgPAAgeAHg");
	this.shape_241.setTransform(411.0287,474.525);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgliYIBCAAIAJEvIgfABIggAAg");
	this.shape_242.setTransform(392,474.65);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("Ahvi8IAjgBIAiAAIgDE7ICggEIgCAiIgBAhIjiABg");
	this.shape_243.setTransform(373.2,471);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#CC3300").s().p("AgbCUQgJgBgIgCQgLgFgJgIQgKgJgEgMQgCgHgBgIIAAgQIACgdIABgfIADgzIABg1IAAgHIAAgIQAAgGACgHQADgFAEgGIAHgFIAIgGIAIgBIALgDIAIgCIAhgGQAQgDARAAQAKAAAIAFQAIAFAFAIQAEAIABAKQgBALgEAGQgFAIgIAGQgHAEgIAAIgQACIgRADIgPADIAAAVIgBAXIAJgFIAMgDQAOgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgEACQgMAFgNAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIAMgIQADgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAHAMgCANQgBAMgLAKIAAAAQgKAIgOAIQgNAGgPAEQgPAEgLABIgTgCg");
	this.shape_244.setTransform(520.9882,412.15);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#CC3300").s().p("AgWCGQgJgBgJgFQgJgEgHgGIgGgFIgHgIIgFgFQgMgPgGgTQgGgSgCgTIgBgYIAAgWIAAgUIAAgUIABgJIAAgPIABgOIABgJIABgGIADgGQACgEAEgDIAHgGIAJgEIAKgBIAGAAIAGABQAGACAFAFQAFAEADAFQAEAFAAAHIABAMIgBACIAAABIgCAkQgBASABASIAAAdQABAPAEAOIACAIIADAHIADADIADACIACACIACACIACAAIACAAIAGgFIAGgGQAGgJAFgKIAIgTQADgNABgNQABgOgCgOIgBgJIgBgOIgCgPIgCgJIgBgIIACgJQAEgNAJgGQAJgHALgBQALAAAKAGQAKAFAFANQACAIABAIIABAPIADAYIACAXQAAAOgBAOQgBAOgDAOQgFAQgHAQQgHAPgJAOQgJAOgNAMQgOALgPAGQgKADgJABIgEAAQgJAAgIgCg");
	this.shape_245.setTransform(461.6583,412.8925);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#CC3300").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBIAegBIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCIgVgBIAAAeg");
	this.shape_246.setTransform(397.2891,412.1941);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#CC3300").s().p("ABECOQgJgGgGgMIgCgJIgCgPIgCgOIgCgKQgMADgNABQgNABgMAAIgSAAQgKAAgJgBIgDAIIgEAMIgCAJQgBAPgKAKQgJAKgQABQgMgBgJgGQgJgGgEgLIgCgLIABgLQAAgHAEgNIAKgdIAMgdIAHgTQANgeAQgeQAPgeAVgbQAJgOAOgJQANgJARgBQANABALAGQALAGAGALQAIAKAEAMIAFARIAGAaIAGAdIAFAbIAEAQIAGAnIAGAoIACAKIACAKIgBAJIgDAJQgFAIgIAFQgJAGgJAAQgNAAgIgHgAACgYIgPAhIAIAAIAMAAIAJAAIAIgCIAJgBIgGgeIgGggIgTAgg");
	this.shape_247.setTransform(372.95,413.225);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#009900").s().p("Ag3B5QgUgMgMgWQgMgVgEgdQgCgRAAgRQgBgRADgSQABgMAEgNQADgOAGgMQAGgMAIgKIALgLQAHgGAIgEQAIgEAHAAIAJABIAJADIAJgEQAFgCAEAAQASAAARAIQAQAIAMANQARATALAWQALAVACAaIAAAVIgDAVQgDAVgJATQgJATgPAPQgOAPgTAIQgSAJgVAAQgeAAgUgMgAgNhAIgBABIgEACIgDADQgEAHgDAJIgEARQgCAPAAAQQABAQADAPQACAMAGAGQAFAGAMAAQAHAAAGgEQAHgEAFgHIAHgNQAEgKACgMQABgLAAgLIgBgFIgBgHIgCgEIgKgQIgLgOQgCgCgDgBIgFgBIgFgBIgGgDIgBABg");
	this.shape_248.setTransform(453.9583,412.325);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#009900").s().p("AhACJIgHgGIgFgHQgGgNgCgOIgEgbIgCgXIgCgkIgBgoIgCgkIAAgWQAAgHACgGQABgHADgFIACgDIAAgCQAEgKAHgGQAJgHAJgBQAPgBAPAAIAeABIASADIARAHQANAFAKAIQALAIAHALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAGABIAHABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgGACgFAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgJAKgNADIgFAAQgLAAgKgGgAgWgoIACAeIAQgNQAHgHAHgJIAFgGIADgIIAAgEIgBgEQgJgGgJgCIgWgBIABAeg");
	this.shape_249.setTransform(431.3618,412.1941);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#009900").s().p("AhRCQQgKgFgFgJQgDgGgBgGIgCgMIAAgQIAAgZIAAgeIAAgaIAAgOIABgmIAAglQAAgIACgIQACgJAFgFIAHgHIAIgEIACgBIABAAQAMgIAMgFIAagIIAPgDIAOgCQAMAAANACQAMADALAGIAOAJQAHAGAFAGQAFAIAEAIQADAIACAJIABAMIgBALQgBAPgHAOQgGAPgKALIAKAGIAJAIQAJANAEAOQAEAOgCAPQgCAMgHALQgGALgJAJQgHAIgKAGQgJAGgKADIgSAGIgTAFIgJABIgKAAIgPABIgQgBIgIAEIgIACIgCAAQgKAAgJgFgAAFA1IgGAAIgIABIgGACIgIACIgHACIAAAMQAKAAAKgBQAKgBAIgDIAEgBIAFgCIAEgBIAFgEIAFgEQgHgCgGAAIgHAAIgGAAgAAEhLIgRADIgOAFIgBACIgBABIAAAXIgBAXIARgLIAQgMIAKgKQAFgFADgHIABgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgCgBIgCgBQgEgCgFAAIgFABg");
	this.shape_250.setTransform(408.5364,411.9231);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#009900").s().p("AASCYQgNAAgLgCIgaAAIgJgBQgEAAgDgBQgMgFgGgJQgGgJAAgLQAAgLAGgJQAGgJAMgFIAFgBIAHgBIgBgPIgBgYIAAgZIAAgOIgBglIABglQgIAAgGgDQgHgDgFgFQgJgJgBgKQgCgLAEgJQAEgKAJgGQAIgGANAAIAagBIAZgBIAIgBIALgBIAIgBQAMABAIAFQAIAGAFAJQAEAJgBALQgBAKgIAJIgHAGQgDADgFABIgJACIgKABIgBAgIAAAgIABANIAAAWIAAAZIABAWIABAOQAJACAHAIQAHAHACALQABAHgCAIQgCAIgFAGQgHAIgIADQgHACgIAAIgEAAg");
	this.shape_251.setTransform(388.1267,413.3292);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgkhkIAEAAIgMgSIgMgRIBKhEIAnAsIgpAeIgoAdIA2AAIAIEvIgfABIgfAAg");
	this.shape_252.setTransform(674.95,469.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAxBpIhlAFIgQAwIg5gJIBikyIAgACIAhADIBXEoIgfAGIggAIgAgfAxIAfgEIAhgEIgchrg");
	this.shape_253.setTransform(605.85,474.875);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AAACZIgfgBIADh2IhbiaIA2ghIBBB8QARgcAQghQARggARgdIA1AgQgWAkgWAoQgVApgWAjIgDB5IgegBg");
	this.shape_254.setTransform(568.275,474.55);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgGCZIgfgBIAGjyIhLACIAFhBIBnADIBpAEIgFA8IhIgCIgDB4IgDB6IgegBg");
	this.shape_255.setTransform(520.8,474.55);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgkhkIAEAAIgMgSIgMgRIBKhEIAnAsIgpAeIgoAdIA2AAIAIEvIgfABIgfAAg");
	this.shape_256.setTransform(436.1,469.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AhDADIgBghICJgGIgBAjIgBAjIhDACIhDABIAAgig");
	this.shape_257.setTransform(399.325,474.15);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgoDFQgTgDgSgHQgRgGgQgLQgPgKgMgQIATgYIASgYQAQASAYAKQAYAKAcAAIAEAAIAEgBQARgBAOgGQANgEAJgIQAIgJAEgLQAEgKgDgMQgEgQgPgKQgPgKgVgIIgqgRQgXgJgSgLQgTgNgMgUQgMgTABgdQABgcALgUQALgVASgNQARgOAWgGQAWgGAWAAQAegBAcAKQAcAIAYAUIgnA4QgPgPgUgHQgVgJgVABQgVgBgPALQgQALgBAWQgBAKAFAIQAFAHAKAGQAJAGANAFIAZAKQAUAGAVAJQAWAKARAOQASANAMATQALAUAAAdQgCAegNAXQgNAVgTAQQgUAPgZAGQgYAIgZAAQgSAAgTgCg");
	this.shape_258.setTransform(375.676,471.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AhvCVIgggBIADiTIAEiRIAogDIAogCIA4C9IA5i4IAogDIApgCIADCSIADCRIggACIggACIgCizIgYBNIgZBOIgdgBIgdgCIgwiYIgCC3IgggBg");
	this.shape_259.setTransform(776.575,474.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AhgCSIgGgaIgHgaICIi2IiAAAIAAg8IDAADIAQAuIhIBfIhIBfICTAAIAAA5g");
	this.shape_260.setTransform(722.325,474.95);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AiRC6IgjgCIAFi3IAEi2IBdgGIBOEIIBPkCIAvgCIAugDIAEC3IAFC0IgkADIgjADIgBkFIgSA2IgVA7IgUA9IgSA2IggAAIgigCIhJjgIgDEHIgjgBg");
	this.shape_261.setTransform(379.775,471.4);

	this.instance = new lib.Perezaai();
	this.instance.setTransform(926,181,0.5752,0.8087);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#009900").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCQgLgBgKAAIAAAeg");
	this.shape_262.setTransform(430.8391,412.1941);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#009900").s().p("AgpCLQgIgCgHgEQgHgDgFgGQgGgGgDgHQgGgKgDgMQgCgMAAgMQAAgfAEgfIAHg9IABgRIgBgSIAAgLIACgLQACgGAEgFQAFgFAFgEQAFgDAHgBIAMgBIAJADIAIAFQAFAEADAGQADAFACAGQABADgBAEIAAAHIAAARIAAAQIgEAsIgFArQgDAWABAWIAigFIAigFIAHABIAGABQAHACAGAGQAFAGADAIQADAHAAAIQgBAHgCAFQgDAGgFAFQgEAEgFACQgFADgFABIgRACIgaAEIgZAEIgQACIgDAAQgHAAgGgCg");
	this.shape_263.setTransform(370.4536,413.0217);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgLDJQgOAAgJgFQgLgEgGgIQgGgHgDgJQgDgJABgKQAAgKADgKQAEgJAGgIQAGgHAJgFQAIgEAKAAQAWAAAOAPQAPAPACAWQAAAKgCAJQgDAJgFAHQgHAIgIAFQgJAEgLABgAgsA2QAHgXANgSQAMgSAMgQIAVgfQAKgPAAgPQACgVgNgNQgNgOgWAAQgSAAgRAGQgQAGgPAIIgVg/QAYgOAZgGQAZgHAWAAQAVAAAVAHQATAHAQAOQAPANAIAUQAJAUAAAaQAAAZgKAWQgKAVgMATQgOASgOARQgOARgJAQg");
	this.shape_264.setTransform(703.55,470.175);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AglhkIAGAAIgNgSIgMgRIBLhEIAmAsIgqAeIgnAdIA2AAIAJEvIghABIgeAAg");
	this.shape_265.setTransform(689.4,469.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AhXhrIA1ABIgLgQIgMgPIBLhFIAmAsIgnAcIgmAcIBuADIgBAdIgBAbIhygEIgCBAIBbgEIACAdIACAdIhhAGIgBBHIB5gIIACAgIADAfIheAFIhdAEg");
	this.shape_266.setTransform(454.125,469.75);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AAiCrIgQACIgQABQgngCgegSQgfgTgUgeQgUgdgJgkQgJgkACgkQACgkALgiQALghAUgaQATgaAdgQQAcgQAkAAQAmAAAcAPQAcAQATAZQATAZAKAhQAKAgABAiQABAZgEAYQgEAYgIAWQgIAXgNASQgNATgRAMIAuApIgYAaIgYAZgAgjiMQgRAMgLAVQgLAUgGAaQgGAZABAbQABASAFAUQAGAUAKAQQALAQARAKQAQAKAWAAQAUAAAQgMQAQgMALgUQAKgTAGgZQAFgYgCgZQgBgVgFgTQgFgUgJgPQgJgQgOgLQgNgKgSgEIgFgBIgGAAQgTAAgQANg");
	this.shape_267.setTransform(401.6679,473.325);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFCC00").s().p("ABDCOQgIgGgFgMIgDgJIgDgPIgBgOIgCgKQgMADgNABQgNABgMAAIgTAAQgJAAgJgBIgDAIIgEAMIgCAJQAAAPgLAKQgKAKgPABQgLgBgJgGQgKgGgEgLQgCgFAAgGIAAgLQABgHAFgNIAKgdIALgdIAHgTQANgeAPgeQAQgeAUgbQAKgOAOgJQANgJARgBQAOABAKAGQAKAGAHALQAIAKAEAMIAFARIAGAaIAGAdIAGAbIADAQIAGAnIAGAoIACAKIACAKIgBAJIgEAJQgEAIgIAFQgJAGgJAAQgNAAgJgHgAACgYQgIARgHAQIAIAAIAMAAIAJAAIAJgCIAIgBIgGgeIgHggQgKAQgIAQg");
	this.shape_268.setTransform(475.8375,413.225);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFCC00").s().p("AhCCMQgLgBgHgHQgIgGgEgKQgEgJABgLQACgJAGgIIALgQIAxhAQAZggAWgiIgIABIgNABIgNACIgIAAIgTABQgKAAgIgEQgMgFgGgJQgGgKAAgLQABgMAIgKQAEgEAFgEQAGgDAGgBQAGgBAGABQAGABAGAAIAqgFQAWgBAVACQAJACAIADQAIADAGAGQAFAEADAFQAEAFACAGQADAHAAAIQABAIgCAHQgDAMgFAKIgMAVQgQAXgRAVIghAtIAUgCIAVgBQALAAAKAGQAJAHAEAKQADAKgBAJQgCAKgGAHQgGAHgJAEIgJACIgJAAQgXABgXAEIgsAHIgNABIgGAAIgGAAg");
	this.shape_269.setTransform(451.9358,412.7094);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFCC00").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQIAHgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_270.setTransform(432.1233,412.15);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFCC00").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCIgVgBIAAAeg");
	this.shape_271.setTransform(411.7391,412.1941);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFCC00").s().p("AgbCUQgJgBgIgCQgLgFgKgIQgJgJgEgMQgCgHgBgIQgBgIABgIIABgdIACgfIADgzIABg1IAAgHIAAgIQAAgGACgHQACgFAFgGIAHgFIAIgGIAHgBIAMgDIAIgCIAggGQARgDARAAQAKAAAHAFQAJAFAEAIQAFAIAAAKQAAALgFAGQgEAIgJAGQgGAEgIAAIgQACIgRADIgPADIgBAVIgBAXIAKgFIALgDQAPgCALAHQALAIAEAMQAEALgGAOQgCAFgEAFQgEAEgFACQgMAFgMAEQgMAEgMABIgBAQIgBAQQAEAAADgBIAGgDIANgFIALgIQAEgDAFgBIAJgBIAFAAIAFABQAOAEAHALQAGAMgBANQgCAMgKAKQgKAIgOAIQgOAGgOAEQgPAEgMABIgSgCg");
	this.shape_272.setTransform(391.5233,412.15);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFCC00").s().p("AhLCEQgIgGgFgKQgEgLAAgMIAAgMIABgNQABgbgBgaIgBg0IAAgLIAAgRIgBgLIgBgHIgBgIIABgGIACgKIACgGQACgIAGgFQAFgGAIgDQAHgDAIAAIAEAAIAEAAIANAAIAMAAQAVgBAUAFQAVAEATAKQAOAJAJAOQAKAOADAQQABAJgBAKQgBAKgDAJQgGATgOAPQgNAPgRAMQgRANgRAIQgHADgGABQgHABgHgBIAAAOIgBAOIABABIABACQAEAMgEAMQgEAMgJAHQgKAIgNAAQgMAAgJgHgAgUg5IAAARIABARIAAAKIABAAIABgBQALgFAIgHQAJgGAHgJIAFgHQACgFAAgDIgCgBIgBgBQgGgEgIgCIgOgCIgPgBIABAKg");
	this.shape_273.setTransform(371.395,412.8625);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAAAlQgHAAgGgCQgGgDgEgFQgFgFgDgGQgDgGgBgGQgBgHADgHQADgHAFgGQAGgFAHgEQAHgDAGgBQAOAAAKAJQAJAJACAOQAAAHgCAGQgDAIgEAGQgFAFgGAEQgGAEgHABIgDAAg");
	this.shape_274.setTransform(907.8175,558.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AAQBDIgdgqIgLAAIgLgBIABAmIAAAmIgVABIgWABIgCjHQARgFASgDQAQgDAPAAQAQAAAOAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgfgqgAgXhEQgFAAgJACIACA2IAHABIAIAAQAUAAALgHQAKgGABgOQACgPgJgHQgIgIgPgBIgPABg");
	this.shape_275.setTransform(895.6,552.025);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_276.setTransform(878.8,552.15);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgVBlQgKgEgKgHQgIgGgIgHQgGgJgEgIIAPgPIANgNQAHANAJAHQAKAIAIABIACAAIACAAQAMAAAJgNQAJgOAAgdQAAgYgKgrIg9AFIgBgUIgBgVIBjgFIAEAWIAEAbIADAcIABAcQAAAQgCASQgDATgHAOQgHAPgNALQgNAJgVAAQgKAAgMgDg");
	this.shape_277.setTransform(862.95,552.05);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgWAEIgVAFgAgVAgIAVgCIAWgEIgShFg");
	this.shape_278.setTransform(848.35,552.15);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AhBBmIgFjFIAJgBIAUgCIAWgDIASgBQANAAAMADQAMACAIAGQAIAFAFAJQAEAKAAANQAAAPgGALQgFALgLAJQAQAHAIAMQAIANAAAOQgBAMgGAMQgGALgMAKQgMAJgSAFQgRAGgXAAgAgbASIABAuIAGAAIAFAAIAOgBQAGgCAGgDQAGgCAEgGQAFgEAAgIQABgIgGgJQgFgIgNgDIgeAIgAgdg+IABApQAOgCAKgDQAIgDAGgEQAGgEACgFQADgGAAgEQAAgIgFgDQgFgEgLAAQgKAAgTAFg");
	this.shape_279.setTransform(832.2015,551.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgVAFgAgVAgIAVgCIAWgEIgShFg");
	this.shape_280.setTransform(816.3,552.15);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AARBDIgegqIgLAAIgLgBIABAmIAAAmIgVABIgWABIgCjHQARgFASgDQARgDAOAAQAPAAAPAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgegqgAgXhEQgFAAgIACIABA2IAIABIAHAAQAUAAALgHQAKgGABgOQACgPgJgHQgIgIgPgBIgPABg");
	this.shape_281.setTransform(800.3,552.025);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_282.setTransform(785.475,551.925);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_283.setTransform(760.8025,551.975);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgYhkIArAAIAGDIIgVAAIgUABg");
	this.shape_284.setTransform(747.15,551.975);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AhEBlIgFjFIAIgBIAPgCIATgDIARgBIAFAAQAQACAPAGQAPAGALALQALAMAHAQQAGARABAXIABANIgCAPQgCATgJAQQgJAQgMAMQgNAKgSAHQgPAFgUAAgAgWhAIgKABIAEB+IACAAIADAAQAOAAAKgGQALgFAGgIQAIgKADgNQADgMAAgPQgBgbgKgQQgLgQgXAAIgJABg");
	this.shape_285.setTransform(734.65,552);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_286.setTransform(717.5025,551.975);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_287.setTransform(690.3025,551.975);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAABlIgUgBIAChNIg8hmIAjgWIArBSIAWgoIAWgoIAjAVQgOAYgOAaIgeAyIgBBQIgUgBg");
	this.shape_288.setTransform(674.15,551.925);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAABlIgUgBIAChNIg8hmIAjgWIArBSIAWgoIAWgoIAjAVQgPAYgNAaIgdAyIgCBQIgUgBg");
	this.shape_289.setTransform(650.4,551.925);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgTBoQgKgBgKgEQgKgEgJgGQgJgGgGgJIALgQIAMgPQAJANAOAEQANAEAOAAQAQgBAJgIQAIgHgDgLQgBgHgIgFQgHgEgLgEIgVgJQgMgEgJgGQgKgHgGgKQgGgLABgPQAAgQAGgLQAGgLAKgHQAJgHAMgEQAMgDAMAAQAQAAAQAFQAPAGAMALIgYAjQgGgHgJgEQgIgFgIgBIgEgBIgEAAQgJAAgHAFQgHAEgBAKQAAAEACADIAHAGIAJAFIALAEIAXAIQAMAFAJAHQAKAGAGALQAGALAAARQgBAQgHAMQgGAMgKAIQgKAIgMAEQgNAEgOAAIgUgBg");
	this.shape_290.setTransform(625.7019,551.975);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAgBgIhCADIgKAgIgmgGIBAjJIgHgJIAygtIAZAdIgSANIgTANIAMABIA6DEIgVAEIgVAFgAgUA7IAUgDIAVgDIgShGg");
	this.shape_291.setTransform(610.25,549.475);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AhJBiIgVgBIAChgIAChgIAbgBIAagCIAlB8IAmh5IAbgBIAagCIADBgIABBgIgVABIgWABIgBh1IgQAyIgQAzIgTgBIgTAAIgfhkIgBB4IgWgBg");
	this.shape_292.setTransform(591.65,552.15);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_293.setTransform(564.1,552.15);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAGBpQgNAAgOgFQgNgGgKgLQgLgMgHgSQgGgSAAgZQAAgbAHgWQAGgVALgPQALgOAOgIQAPgGAOgBQARgBAOAFQAPAEANAMIgWAkQgIgIgHgDQgHgEgHAAQgOAAgIAHQgJAIgGALQgGALgDANQgCANAAAJQAAAOADAKQADAKAFAHQAGAHAGADQAHAEAGAAQAXAAAOgSIAUAgQgKAMgOAHQgNAIgOAAg");
	this.shape_294.setTransform(549.1,551.95);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_295.setTransform(533.575,551.85);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_296.setTransform(517.5225,552.275);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_297.setTransform(501.475,551.85);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AARBDIgegqIgMAAIgLgBIABAmIABAmIgVABIgVABIgDjHQASgFAQgDQARgDAPAAQAPAAAPAEQAOAEALAIQAKAIAGANQAGANAAASQAAAWgJAOQgJAMgOAIIAwBBIgRAOIgQAOIgegqgAgWhEQgGAAgJACIABA2IAJABIAHAAQAUAAAKgHQALgGACgOQACgPgJgHQgKgIgPgBIgNABg");
	this.shape_298.setTransform(476.7,552.025);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgVAFgAgVAgIAVgCIAWgEIgShFg");
	this.shape_299.setTransform(459.9,552.15);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgVBlQgLgEgIgHQgJgGgIgHQgHgJgCgIIANgPIAPgNQAGANAKAHQAIAIAKABIABAAIACAAQAMAAAJgNQAJgOAAgdQAAgYgJgrIg9AFIgCgUIgBgVIBigFIAFAWIAEAbIAEAcIABAcQgBAQgCASQgCATgIAOQgIAPgNALQgMAJgVAAQgKAAgMgDg");
	this.shape_300.setTransform(444.05,552.05);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgVAEIgVAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_301.setTransform(429.45,552.15);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AhBBmIgFjFIAJgBIAUgCIAWgDIASgBQANAAAMADQAMACAIAGQAIAFAFAJQAEAKAAANQAAAPgGALQgFALgLAJQAQAHAIAMQAIANAAAOQgBAMgGAMQgGALgMAKQgMAJgSAFQgRAGgXAAgAgbASIABAuIAGAAIAFAAIAOgBQAGgCAGgDQAGgCAEgGQAFgEAAgIQABgIgGgJQgFgIgNgDIgeAIgAgdg+IABApQAOgCAKgDQAIgDAGgEQAGgEACgFQADgGAAgEQAAgIgFgDQgFgEgLAAQgKAAgTAFg");
	this.shape_302.setTransform(413.3015,551.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgVAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_303.setTransform(397.4,552.15);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAQBDIgdgqIgMAAIgLgBIABAmIABAmIgVABIgVABIgDjHQARgFARgDQARgDAPAAQAPAAAPAEQAOAEALAIQAKAIAGANQAGANAAASQAAAWgJAOQgJAMgOAIIAwBBIgRAOIgQAOIgfgqgAgWhEQgGAAgJACIABA2IAIABIAIAAQAUAAAKgHQALgGACgOQACgPgKgHQgJgIgPgBIgNABg");
	this.shape_304.setTransform(381.4,552.025);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_305.setTransform(366.575,551.925);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgBArIA6gDIACAUIACASIhAAEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_306.setTransform(854.3,507.025);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_307.setTransform(839.1725,507.275);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAPBaIgHABIgHAAQgTAAgOgIQgPgIgKgNQgLgMgFgQQgGgQgCgSQgBgTAEgVQAEgUALgSQAKgQAQgLQARgKAVAAQATAAAOAHQAOAIAKALQAKAMAGAQQAGAQACARQABANgBAOQgCAMgEANQgEAMgGAKQgGALgJAHIAXAVIgPAPIgOAQgAgOhFQgHAEgFAIQgFAHgDAKQgDAKgCALQgBALACAKQABALAEAKQAFAJAIAGQAHAHALABIADABQAJAAAGgFQAHgEAFgIQAFgIACgJQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_308.setTransform(822.0296,508.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_309.setTransform(795.75,507.15);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgYhCIAEAAIgJgLIgIgLIAxguIAaAeIgcATIgaATIAkAAIAFDIIgVAAIgUABg");
	this.shape_310.setTransform(784.225,503.575);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AARBDIgegqIgLAAIgLgBIABAmIAAAmIgVABIgWABIgCjHQARgFASgDQARgDAOAAQAPAAAPAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgegqgAgXhEQgFAAgIACIABA2IAIABIAHAAQAUAAALgHQAKgGABgOQACgPgJgHQgIgIgPgBIgPABg");
	this.shape_311.setTransform(773.3,507.025);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AhEBlIgFjFIAHgBIAQgCIATgDIARgBIAFAAQAQACAPAGQAPAGALALQALAMAHAQQAGARACAXIAAANIgBAPQgDATgJAQQgJAQgMAMQgNAKgRAHQgQAFgTAAgAgWhAIgKABIADB+IAEAAIACAAQAOAAAKgGQAKgFAIgIQAGgKAEgNQADgMAAgPQAAgbgLgQQgMgQgWAAIgJABg");
	this.shape_312.setTransform(756.45,507);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_313.setTransform(740.425,506.85);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgBArIA6gDIACAUIACASIhAAEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_314.setTransform(725.6,507.025);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_315.setTransform(712.575,506.925);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_316.setTransform(687.9025,506.975);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_317.setTransform(671.075,506.85);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_318.setTransform(644.9525,506.975);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgaBhQgPgIgKgNQgJgOgFgQQgFgRAAgTQAAgdAIgXQAHgWANgOQAMgNAQgGQAPgHAQAAQAeAAAYAQIgTAkQgHgGgJgDQgIgDgHAAQgLAAgJAFQgJAEgIAKQgHAJgEANQgFAOAAASQAAALACAKQADAKAGAIQAFAIAJAFQAHAFANAAIAIgCQADgBAEgCIAEgnIgegCIAEgjIBBADIgDAsIgDAtQgLAOgPAHQgPAHgQAAQgTAAgPgIg");
	this.shape_319.setTransform(628.125,507);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgYhkIAsAAIAFDIIgVAAIgUABg");
	this.shape_320.setTransform(615.6,506.975);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_321.setTransform(605.125,506.925);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_322.setTransform(590.825,506.85);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_323.setTransform(573.9525,506.975);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAGBqQgNgBgNgFQgOgGgLgLQgLgMgGgSQgGgSAAgZQAAgbAGgWQAHgVALgPQALgOAOgIQAOgGAOgBQASgBAOAFQAPAEANAMIgWAkQgIgIgHgDQgHgEgIAAQgNAAgIAHQgJAIgGALQgGALgDANQgCANAAAJQAAAOADAKQAEAKAEAHQAFAHAHADQAGAEAHAAQAXAAAOgSIAUAgQgKAMgNAHQgOAIgOABg");
	this.shape_324.setTransform(558.35,506.95);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAQBDIgdgqIgLAAIgLgBIABAmIAAAmIgVABIgWABIgCjHQASgFARgDQAQgDAPAAQAQAAAOAEQAOAEAKAIQALAIAGANQAGANAAASQAAAWgJAOQgJAMgPAIIAxBBIgQAOIgRAOIgfgqgAgWhEQgGAAgJACIACA2IAHABIAIAAQAUAAALgHQAKgGABgOQACgPgJgHQgIgIgPgBIgOABg");
	this.shape_325.setTransform(533.8,507.025);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_326.setTransform(517,507.15);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgBArIA6gDIACAUIACASIhAAEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_327.setTransform(501.7,507.025);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("Ag8hjIAVgBIAVAAIgBCgIBRgCIgBAVIgBAUIh5ABg");
	this.shape_328.setTransform(488.3,506.95);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgCArIA7gDIACAUIABASIg/AEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_329.setTransform(474.4,507.025);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AhHheIAhgHQAPgDAOAAQAQAAAQAFQAPAEALAIQALAJAGANQAGAOAAASQAAAUgGANQgHAOgMAJQgMAJgPAFQgPAEgRAAIgPgBIABA/IgVABIgVABgAgShBIgLACIABBCIAFABIADAAQAJAAAJgCQAIgBAHgDQAHgEAFgHQAEgHACgMQACgOgJgJQgKgIgOgCIgEAAIgFAAIgJAAg");
	this.shape_330.setTransform(460.15,506.725);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgVAgIAVgCIAVgEIgShFg");
	this.shape_331.setTransform(434.9,507.15);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgYhCIAEAAIgJgLIgIgLIAxguIAaAeIgcATIgaATIAkAAIAFDIIgVAAIgUABg");
	this.shape_332.setTransform(414.125,503.575);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_333.setTransform(402.6725,507.275);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAPBaIgHABIgHAAQgTAAgOgIQgPgIgKgNQgLgMgFgQQgGgQgCgSQgBgTAEgVQAEgUALgSQAKgQAQgLQARgKAVAAQATAAAOAHQAOAIAKALQAKAMAGAQQAGAQACARQABANgBAOQgCAMgEANQgEAMgGAKQgGALgJAHIAXAVIgPAPIgOAQgAgOhFQgHAEgFAIQgFAHgDAKQgDAKgCALQgBALACAKQABALAEAKQAFAJAIAGQAHAHALABIADABQAJAAAGgFQAHgEAFgIQAFgIACgJQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_334.setTransform(385.5295,508.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgUAgIAUgCIAVgEIgShFg");
	this.shape_335.setTransform(368.5,507.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgWAEIgVAFgAgVAgIAVgCIAVgEIgShFg");
	this.shape_336.setTransform(928.45,462.15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgDBlIgVgBIAEifIgxABIADgrIBEACIBEADIgDAoIgvgCIgCBPIgCBRIgTgBg");
	this.shape_337.setTransform(914.025,461.925);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgTBoQgKgBgKgEQgKgEgJgGQgJgGgGgJIALgQIAMgPQAJANAOAEQANAEAOAAQAQgBAJgIQAIgHgDgLQgBgHgIgFQgHgEgLgEIgVgJQgMgEgJgGQgKgHgGgKQgGgLABgPQAAgQAGgLQAGgLAKgHQAJgHAMgEQAMgDAMAAQAQAAAQAFQAPAGAMALIgYAjQgGgHgJgEQgIgFgIgBIgEgBIgEAAQgJAAgHAFQgHAEgBAKQAAAEACADIAHAGIAJAFIALAEIAXAIQAMAFAJAHQAKAGAGALQAGALAAARQgBAQgHAMQgGAMgKAIQgKAIgMAEQgNAEgOAAIgUgBg");
	this.shape_338.setTransform(899.4519,461.975);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgVAgIAVgCIAVgEIgShFg");
	this.shape_339.setTransform(884,462.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AhGhiIApgDIACBWIA1gGIgDhQIAqAAIAGDIIgoAAIgDhOIg2ADIACBKIgqAEg");
	this.shape_340.setTransform(867.825,462.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAgBFIhCAEIgLAfIglgGIBAjJIAVABIAWABIA6DEIgWAEIgUAFgAgUAgIAUgCIAWgEIgShFg");
	this.shape_341.setTransform(842.65,462.15);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgYhCIAEAAIgJgLIgIgLIAxguIAaAeIgcATIgaATIAkAAIAFDIIgVAAIgUABg");
	this.shape_342.setTransform(831.125,458.575);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_343.setTransform(819.975,461.85);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgCArIA7gDIACAUIABASIg/AEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_344.setTransform(805.15,462.025);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgZBkIgchiIgchjIAUgCIAVgCIApCTIAUhJIAThJIAUAEIAVADIgyDDg");
	this.shape_345.setTransform(790.45,461.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgYhkIAsAAIAFDIIgVAAIgUABg");
	this.shape_346.setTransform(768.95,461.975);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgTBoQgKgBgKgEQgKgEgJgGQgJgGgGgJIALgQIAMgPQAJANAOAEQANAEAOAAQAQgBAJgIQAIgHgDgLQgBgHgIgFQgHgEgLgEIgVgJQgMgEgJgGQgKgHgGgKQgGgLABgPQAAgQAGgLQAGgLAKgHQAJgHAMgEQAMgDAMAAQAQAAAQAFQAPAGAMALIgYAjQgGgHgJgEQgIgFgIgBIgEgBIgEAAQgJAAgHAFQgHAEgBAKQAAAEACADIAHAGIAJAFIALAEIAXAIQAMAFAJAHQAKAGAGALQAGALAAARQgBAQgHAMQgGAMgKAIQgKAIgMAEQgNAEgOAAIgUgBg");
	this.shape_347.setTransform(756.4019,461.975);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("Ag5hnIBzADIAAASIgBATIhKgDIgBArIA6gDIACAUIACASIhAAEIgBAuIBPgFIACAVIACAVIg+ADIg9ACg");
	this.shape_348.setTransform(732.8,462.025);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_349.setTransform(717.6725,462.275);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAPBaIgHABIgHAAQgTAAgOgIQgPgIgKgNQgLgMgFgQQgGgQgCgSQgBgTAEgVQAEgUALgSQAKgQAQgLQARgKAVAAQATAAAOAHQAOAIAKALQAKAMAGAQQAGAQACARQABANgBAOQgCAMgEANQgEAMgGAKQgGALgJAHIAXAVIgPAPIgOAQgAgOhFQgHAEgFAIQgFAHgDAKQgDAKgCALQgBALACAKQABALAEAKQAFAJAIAGQAHAHALABIADABQAJAAAGgFQAHgEAFgIQAFgIACgJQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_350.setTransform(700.5296,463.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_351.setTransform(673.3025,461.975);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgVBlQgKgEgKgHQgIgGgIgHQgGgJgEgIIAPgPIANgNQAHANAJAHQAKAIAIABIACAAIACAAQAMAAAJgNQAJgOAAgcQAAgZgKgrIg9AFIgBgUIgBgVIBjgFIAEAWIAEAbIADAcIABAcQAAAQgCASQgDATgHAOQgHAPgNALQgNAJgVAAQgKAAgMgDg");
	this.shape_352.setTransform(656.85,462.05);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgYhkIArAAIAGDIIgVAAIgUABg");
	this.shape_353.setTransform(645.6,461.975);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AhEBlIgFjFIAIgBIAOgCIATgDIASgBIAFAAQARACAOAGQAPAGAKALQAMAMAGAQQAIARAAAXIABANIgCAPQgCATgJAQQgJAQgNAMQgNAKgRAHQgPAFgTAAgAgWhAIgLABIAFB+IADAAIACAAQAPAAAJgGQAKgFAIgIQAGgKAEgNQADgMAAgPQAAgbgMgQQgLgQgWAAIgJABg");
	this.shape_354.setTransform(633.1,462);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("Ag5hnIB0ADIgBASIgBATIhLgDIgBArIA8gDIABAUIABASIg/AEIgBAuIBQgFIABAVIACAVIg+ADIg9ACg");
	this.shape_355.setTransform(608.75,462.025);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AhJBiIgVgBIAChgIAChgIAbgBIAagCIAlB8IAmh5IAagBIAbgCIADBgIABBgIgVABIgWABIAAh1IgRAyIgQAzIgTgBIgTAAIgfhkIgCB4IgVgBg");
	this.shape_356.setTransform(591.55,462.15);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_357.setTransform(563.0525,461.975);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgZBkIgchiIgbhjIATgCIAVgCIApCTIAUhJIAShJIAWAEIAUADIgyDDg");
	this.shape_358.setTransform(546.35,461.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("Ag8hjIAVgBIAVAAIgBCgIBRgCIgCAVIgBAUIh4ABg");
	this.shape_359.setTransform(532.35,461.95);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AAgBFIhCAEIgKAfIgmgGIBAjJIAVABIAWABIA6DEIgVAEIgWAFgAgVAgIAVgCIAVgEIgShFg");
	this.shape_360.setTransform(517.35,462.15);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AAHBqQgOgBgNgFQgOgGgLgLQgLgMgGgSQgGgSAAgZQAAgbAGgWQAHgVALgPQAKgOAPgIQAPgGANgBQASgBAOAFQAOAEAOAMIgXAkQgHgIgGgDQgIgEgIAAQgMAAgJAHQgJAIgGALQgGALgDANQgCANAAAJQAAAOADAKQAEAKAEAHQAFAHAHADQAGAEAHAAQAXAAAPgSIATAgQgKAMgNAHQgOAIgPABg");
	this.shape_361.setTransform(502.35,461.95);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AhGhZIAngPIA+B3IgFhwIAVgBIAWgBIACDIIglABIg/h0IACA5IABA5IgrAFg");
	this.shape_362.setTransform(477.575,461.85);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AghBeQgOgHgJgLQgJgMgEgQQgFgQABgTIAEhvIAogBIgBA5IgBA4QAAAVAGAJQAHAKAPACIACAAIABAAQANAAAIgKQAHgKABgVIABg5IACg6IAqACIgBA6IgCA5QAAATgFAPQgFAQgJALQgKALgNAGQgNAGgQAAQgTgBgOgGg");
	this.shape_363.setTransform(461.5225,462.275);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("Agbg1IA4ADIgPBmIgoABg");
	this.shape_364.setTransform(440.3,470.15);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("Ag5hGIAiABIgHgLIgHgKIAwguIAaAdIgaATIgZATIBIABIAAATIgBASIhKgCIgBAqIA6gEIACAVIACATIhAADIgBAvIBPgFIACAUIACAVIg+AEIg9ACg");
	this.shape_365.setTransform(429.6,458.75);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgTBoQgKgBgKgEQgKgEgJgGQgJgGgGgJIALgQIAMgPQAJANAOAEQANAEAOAAQAQgBAJgIQAIgHgDgLQgBgHgIgFQgHgEgLgEIgVgJQgMgEgJgGQgKgHgGgKQgGgLABgPQAAgQAGgLQAGgLAKgHQAJgHAMgEQAMgDAMAAQAQAAAQAFQAPAGAMALIgYAjQgGgHgJgEQgIgFgIgBIgEgBIgEAAQgJAAgHAFQgHAEgBAKQAAAEACADIAHAGIAJAFIALAEIAXAIQAMAFAJAHQAKAGAGALQAGALAAARQgBAQgHAMQgGAMgKAIQgKAIgMAEQgNAEgOAAIgUgBg");
	this.shape_366.setTransform(414.5019,461.975);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgjBeQgQgKgKgPQgLgOgFgTQgEgSAAgTQAAgTAGgSQAFgTAKgOQALgOAPgJQAQgJATAAQAVAAAQAJQAPAKAKAOQAKAPAFATQAEATAAASQAAATgFASQgFASgKAPQgKAOgPAKQgPAJgVAAQgUgBgQgJgAgOg5QgHAFgFAHQgFAHgDAKQgDAKgCALQgBAKACALQABALAEAKQAFAJAIAHQAHAGALACIADAAQAJAAAGgFQAHgEAFgIQAFgHACgKQADgKABgKQABgLgCgLQgCgLgEgJQgEgJgHgHQgGgGgKgCIgFAAQgHAAgHAEg");
	this.shape_367.setTransform(388.8525,461.975);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AhXhxIAqgQIBaCpIgFiiIAWgBIAXgBIADD5IgUABIgTABIhciiIACBPIACBRIguAFg");
	this.shape_368.setTransform(370.025,459.575);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#993300").s().p("AgWCGQgJgBgJgFQgJgEgHgGIgGgFIgHgIIgFgFQgMgPgGgTQgGgSgCgTIgBgYIAAgWIAAgUIAAgUIABgJIAAgPIABgOIABgJIABgGIADgGQACgEAEgDIAHgGIAJgEIAKgBIAGAAIAGABQAGACAFAFQAFAEADAFQAEAFAAAHIABAMIgBACIAAABIgCAkQgBASABASIAAAdQABAPAEAOIACAIIADAHIADADIADACIACACIACACIACAAIACAAIAGgFIAGgGQAGgJAFgKIAIgTQADgNABgNQABgOgCgOIgBgJIgBgOIgCgPIgCgJIgBgIIACgJQAEgNAJgGQAJgHALgBQALAAAKAGQAKAFAFANQACAIABAIIABAPIADAYQACALAAAMQAAAOgBAOQgBAOgDAOQgFAQgHAQQgHAPgJAOQgJAOgNAMQgOALgPAGQgKADgJABIgEAAQgJAAgIgCg");
	this.shape_369.setTransform(461.8083,412.8925);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#993300").s().p("AhACJIgHgGIgFgHQgGgNgCgOQgDgNgBgOIgBgXIgCgkIgCgoIgBgkIgBgWQAAgHACgGQABgHAEgFIABgDIAAgCQAEgKAIgGQAIgHAKgBQAPgBAPAAIAdABIASADIARAHQANAFALAIQALAIAGALQAGALADAMQADAMAAAMIgBAIIgBAIQgEANgHANQgHALgKALIAHABIAGABQANAGAGALQAGAMgDANQgCANgMAIQgFAEgFABQgFACgGAAIgmgCQgTgCgSgDIACAJIADAJIABAEIABAFQABAPgJALQgIAKgOADIgFAAQgLAAgKgGgAgWgoIACAeQAJgGAHgHQAIgHAGgJIAFgGIADgIIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgIgGgKgCQgLgBgKAAIAAAeg");
	this.shape_370.setTransform(397.4391,412.1941);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#993300").s().p("ABDCOQgIgGgFgMIgDgJIgDgPIgBgOIgCgKQgMADgNABQgNABgMAAIgTAAQgJAAgJgBIgDAIIgEAMIgCAJQAAAPgLAKQgKAKgPABQgLgBgJgGQgKgGgEgLQgCgFAAgGIAAgLQABgHAFgNIAKgdIALgdIAHgTQANgeAPgeQAQgeAUgbQAKgOAOgJQANgJARgBQAOABAKAGQAKAGAHALQAIAKAEAMIAFARIAGAaIAGAdIAGAbIADAQIAGAnIAGAoIACAKIACAKIgBAJIgEAJQgEAIgIAFQgJAGgJAAQgNAAgJgHgAACgYQgIARgHAQIAIAAIAMAAIAJAAIAJgCIAIgBIgGgeIgHggQgKAQgIAQg");
	this.shape_371.setTransform(373.1375,413.225);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgJCtQgNgBgHgDQgJgFgGgGQgFgGgDgHQgCgJABgIQAAgJADgIQADgJAFgFQAFgHAIgEQAHgEAIAAQATAAANANQAMAOABATQABAIgCAIQgCAHgGAGQgEAHgIAEQgHAEgKABgAglAuQAFgTALgQIAVgdQAKgOAIgNQAIgNABgMQABgSgLgMQgMgMgTAAQgOAAgPAGQgOAFgNAGIgSg2QAVgMAWgFQAUgGAUABQASAAARAFQASAGANAMQANAMAHARQAIARAAAWQAAAWgJASQgIATgLAQQgMAPgMAPQgMAPgHAOg");
	this.shape_372.setTransform(443.2,581.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AguB6QgVgNgNgSQgNgUgHgYQgGgZAAgYQABgZAHgXQAHgZANgSQAOgTAUgLQAUgLAZAAQAcAAAUAMQAUAMANASQANAUAGAYQAGAYAAAZQgBAYgGAYQgGAYgNATQgNATgUAMQgTAMgcAAQgagBgVgMgAgShLQgJAGgHAKQgHAKgEAMQgEANgBANQgCAOACAPQACAOAGANQAFAMAKAJQAKAIAOACIAEAAQAMABAJgHQAIgFAHgKQAGgKADgNQAEgNABgOQABgNgCgOQgCgPgGgMQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAFg");
	this.shape_373.setTransform(423.4751,585.55);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AggCDIgliBIgkiAIAagDIAagDIA3C/IAZheIAZhgIAbAFIAbAFIhBD+g");
	this.shape_374.setTransform(401.725,585.275);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AggiCIA5AAIAIEEIgcAAIgaABg");
	this.shape_375.setTransform(385.775,585.55);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AggCDIgliBIgkiAIAagDIAagDIA3C/IAZheIAZhgIAbAFIAbAFIhBD+g");
	this.shape_376.setTransform(369.975,585.275);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgYCHQgOgBgNgFQgNgGgMgHQgLgIgIgMIAPgUIAPgUQAMAQARAGQASAGATAAQAUgCALgKQAMgKgEgOQgCgJgKgGQgKgGgNgFIgcgLQgPgGgNgIQgMgJgIgNQgIgOABgUQAAgUAIgPQAIgOAMgKQAMgJAQgEQAQgFAQAAQAVAAAUAHQAVAIAPAOIgfAuQgJgKgLgFQgLgGgLgCIgFgBIgFAAQgMAAgJAGQgJAGgBANQAAAFADAEQADAEAFAEIANAGIAOAFIAeALQAPAGANAKQAMAIAIAOQAIAPgBAVQgBAVgIAQQgIAPgNALQgNAKgRAFQgQAFgSABQgMAAgOgCg");
	this.shape_377.setTransform(835.8306,527.475);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AAqBbIhXADIgNAqIgxgIIBTkHIAcACIAdACIBLD/IgcAFIgbAHgAgbAqIAbgDIAcgEIgYhcg");
	this.shape_378.setTransform(815.725,527.675);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgiB/QgTgLgNgRQgNgRgGgXQgHgWAAgYQAAgnAKgcQAKgdAQgSQARgSAUgIQAUgJAWAAQAlAAAhAWIgZAuQgKgHgKgEQgLgEgLAAQgNAAgNAGQgLAGgKAMQgJAMgGASQgGASAAAWQAAAOADAOQAEAOAGAKQAIAKALAHQAKAGAQAAIAKgCIALgEIAEgzIgngDIAGgtIBVAEIgFA5IgEA7QgOASgTAJQgUAJgUAAQgaAAgTgKg");
	this.shape_379.setTransform(794.6,527.475);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AggiCIA5AAIAIEEIgcAAIgaABg");
	this.shape_380.setTransform(778.275,527.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgYCHQgOgBgNgFQgNgGgMgHQgLgIgIgMIAPgUIAPgUQAMAQARAGQASAGATAAQAUgCALgKQAMgKgEgOQgCgJgKgGQgKgGgNgFIgcgLQgPgGgNgIQgMgJgIgNQgIgOABgUQAAgUAIgPQAIgOAMgKQAMgJAQgEQAQgFAQAAQAVAAAUAHQAVAIAPAOIgfAuQgJgKgLgFQgLgGgLgCIgFgBIgFAAQgMAAgJAGQgJAGgBANQAAAFADAEQADAEAFAEIANAGIAOAFIAeALQAPAGANAKQAMAIAIAOQAIAPgBAVQgBAVgIAQQgIAPgNALQgNAKgRAFQgQAFgSABQgMAAgOgCg");
	this.shape_381.setTransform(761.9306,527.475);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAqBbIhXADIgNAqIgxgIIBTkHIAcACIAdACIBLD/IgcAFIgbAHgAgbAqIAbgDIAcgEIgYhcg");
	this.shape_382.setTransform(729.725,527.675);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AAVBXIgmg2IgPgBIgOgBIABAyIABAxIgcABIgcABIgDkDQAXgGAWgEQAWgEATAAQAVAAASAFQATAFANALQAOALAIARQAIAQAAAYQAAAcgMASQgMARgTAKIA/BUIgVATIgWASIgog3gAgdhZIgTACIABBHIALABIAKAAQAaAAAOgIQAOgJACgSQACgTgLgKQgMgJgUgCIgSABg");
	this.shape_383.setTransform(708.825,527.525);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AhLiHICYAFIgBAXIgBAYIhigDIgBA4IBNgEIACAZIACAZIhUAFIgBA8IBpgHIABAcIADAbIhRAEIhQADg");
	this.shape_384.setTransform(688.4,527.525);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AggiCIA5AAIAIEEIgcAAIgaABg");
	this.shape_385.setTransform(673.225,527.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgrB6QgSgIgMgPQgMgPgGgVQgGgVABgaIAGiQIA0gCIgBBLIgCBJQgBAbAJAMQAJANATACIAEABIABAAQARAAAKgNQAKgNAAgbIAChLIAChLIA4ACIgCBLIgCBLQAAAYgHAUQgHAVgMAOQgMAOgRAIQgRAIgVAAQgZAAgSgJg");
	this.shape_386.setTransform(656.8673,527.875);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAUB1IgJACIgKAAQgYgBgTgKQgUgKgNgQQgNgRgIgVQgHgVgCgWQgDgaAGgbQAGgbAOgWQANgWAVgNQAWgOAbAAQAZAAATAJQASAJANAQQANAQAIAUQAHAUACAWQACASgCARQgBARgFAQQgGARgIAOQgIANgMAKIAfAbIgUAUIgTAUgAgShaQgJAFgHAKQgHAKgEAMQgEANgBAOQgCAOACAOQACAPAGAMQAFANAKAIQAKAIAOACIAEABQAMAAAJgGQAIgGAHgKQAGgKADgNQAEgMABgNQABgPgCgOQgCgPgGgMQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAGg");
	this.shape_387.setTransform(634.4882,529.075);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AggiCIA5AAIAIEEIgcAAIgaABg");
	this.shape_388.setTransform(604.575,527.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgYCHQgOgBgNgFQgNgGgMgHQgLgIgIgMIAPgUIAPgUQAMAQARAGQASAGATAAQAUgCALgKQAMgKgEgOQgCgJgKgGQgKgGgNgFIgcgLQgPgGgNgIQgMgJgIgNQgIgOABgUQAAgUAIgPQAIgOAMgKQAMgJAQgEQAQgFAQAAQAVAAAUAHQAVAIAPAOIgfAuQgJgKgLgFQgLgGgLgCIgFgBIgFAAQgMAAgJAGQgJAGgBANQAAAFADAEQADAEAFAEIANAGIAOAFIAeALQAPAGANAKQAMAIAIAOQAIAPgBAVQgBAVgIAQQgIAPgNALQgNAKgRAFQgQAFgSABQgMAAgOgCg");
	this.shape_389.setTransform(588.2306,527.475);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AhLiHICYAFIgBAXIgBAYIhigDIgBA4IBNgEIACAZIACAZIhUAFIgBA8IBpgHIABAcIADAbIhRAEIhQADg");
	this.shape_390.setTransform(557.45,527.525);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgrB6QgSgIgMgPQgMgPgGgVQgGgVABgaIAGiQIA0gCIgBBLIgCBJQgBAbAJAMQAJANATACIAEABIABAAQARAAAKgNQAKgNAAgbIAChLIAChLIA4ACIgCBLIgCBLQAAAYgHAUQgHAVgMAOQgMAOgRAIQgRAIgVAAQgZAAgSgJg");
	this.shape_391.setTransform(537.7673,527.875);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AAUB1IgJACIgKAAQgYgBgTgKQgUgKgNgQQgNgRgIgVQgHgVgCgWQgDgaAGgbQAGgbAOgWQANgWAVgNQAWgOAbAAQAZAAATAJQASAJANAQQANAQAIAUQAHAUACAWQACASgCARQgBARgFAQQgGARgIAOQgIANgMAKIAfAbIgUAUIgTAUgAgShaQgJAFgHAKQgHAKgEAMQgEANgBAOQgCAOACAOQACAPAGAMQAFANAKAIQAKAIAOACIAEABQAMAAAJgGQAIgGAHgKQAGgKADgNQAEgMABgNQABgPgCgOQgCgPgGgMQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAGg");
	this.shape_392.setTransform(515.3882,529.075);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AhKiHICXAFIgBAXIgCAYIhigDIgBA4IBOgEIACAZIABAZIhTAFIgBA8IBpgHIACAcIACAbIhRAEIhQADg");
	this.shape_393.setTransform(482.55,527.525);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AhOiBIAbAAIAcgBIgCDQIBqgCIgCAbIgBAbIieABg");
	this.shape_394.setTransform(465.075,527.425);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AhUCFIgIkBIANgCIAZgCIAdgEIAYgBQARAAAQADQAPAEALAHQAKAHAGAMQAGAMAAARQAAAUgHAOQgIAOgOAMQAVAKALAPQAKARgBATQAAAPgIAPQgIAPgPAMQgQAMgXAIQgXAHgfAAgAgjAXIACA8IAHAAIAHABQAIAAAJgCQAJgCAHgEQAIgEAGgGQAGgHABgJQABgMgIgKQgHgLgRgFQgTAHgUAEgAgmhRIACA1QASgCAMgEQAMgEAHgFQAIgGADgGQAEgHAAgHQAAgJgHgFQgGgFgPAAQgMAAgaAHg");
	this.shape_395.setTransform(445.7544,527.375);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AggiCIA5AAIAIEEIgcAAIgaABg");
	this.shape_396.setTransform(429.425,527.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgYCHQgOgBgNgFQgNgGgMgHQgLgIgIgMIAPgUIAPgUQAMAQARAGQASAGATAAQAUgCALgKQAMgKgEgOQgCgJgKgGQgKgGgNgFIgcgLQgPgGgNgIQgMgJgIgNQgIgOABgUQAAgUAIgPQAIgOAMgKQAMgJAQgEQAQgFAQAAQAVAAAUAHQAVAIAPAOIgfAuQgJgKgLgFQgLgGgLgCIgFgBIgFAAQgMAAgJAGQgJAGgBANQAAAFADAEQADAEAFAEIANAGIAOAFIAeALQAPAGANAKQAMAIAIAOQAIAPgBAVQgBAVgIAQQgIAPgNALQgNAKgRAFQgQAFgSABQgMAAgOgCg");
	this.shape_397.setTransform(413.0806,527.475);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AguB6QgVgNgNgSQgNgUgHgYQgGgZAAgYQABgZAHgXQAHgZANgSQAOgTAUgLQAUgLAZAAQAcAAAUAMQAUAMANASQANAUAGAYQAGAYAAAZQgBAYgGAYQgGAYgNATQgNATgUAMQgTAMgcAAQgagBgVgMgAgShLQgJAGgHAKQgHAKgEAMQgEANgBANQgCAOACAPQACAOAGANQAFAMAKAJQAKAIAOACIAEAAQAMABAJgHQAIgFAHgKQAGgKADgNQAEgNABgOQABgNgCgPQgCgOgGgMQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAFg");
	this.shape_398.setTransform(391.7251,527.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("Ahdh6QAWgGAUgEQAVgDASAAQAWAAAUAGQATAFAPALQAOALAIASQAIARAAAYQAAAagIARQgKASgPAMQgOAMgVAGQgTAFgXAAIgUgBIACBSIgcABIgcABgAgYhUIgNABIABBYIAFAAIAEAAQANAAALgCQAKgCAJgEQAKgFAGgKQAHgJABgOQACgTgLgLQgMgLgTgCIgGgBIgGAAIgMABg");
	this.shape_399.setTransform(370.5,527.125);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgYCHQgOgBgNgFQgNgGgMgHQgLgIgIgMIAPgUIAPgUQAMAQARAGQASAGATAAQAUgCALgKQAMgKgEgOQgCgJgKgGQgKgGgNgFIgcgLQgPgGgNgIQgMgJgIgNQgIgOABgUQAAgUAIgPQAIgOAMgKQAMgJAQgEQAQgFAQAAQAVAAAUAHQAVAIAPAOIgfAuQgJgKgLgFQgLgGgLgCIgFgBIgFAAQgMAAgJAGQgJAGgBANQAAAFADAEQADAEAFAEIANAGIAOAFIAeALQAPAGANAKQAMAIAIAOQAIAPgBAVQgBAVgIAQQgIAPgNALQgNAKgRAFQgQAFgSABQgMAAgOgCg");
	this.shape_400.setTransform(885.8306,469.425);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AhLiHICXAFIAAAXIgBAYIhigDIgBA4IBNgEIACAZIACAZIhUAFIgBA8IBogHIACAcIADAbIhRAEIhQADg");
	this.shape_401.setTransform(867.15,469.475);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AguB6QgVgNgNgSQgNgUgHgYQgGgYAAgZQABgZAHgXQAHgZANgSQAOgTAUgLQAUgLAZAAQAcAAAUAMQAUAMANASQANAUAGAYQAGAYAAAZQgBAYgGAYQgGAYgNATQgNATgUAMQgTAMgcAAQgagBgVgMgAgShLQgJAGgHAKQgHAKgEAMQgEANgBANQgCAOACAPQACAOAGANQAFAMAKAJQAKAIAOACIAEAAQAMABAJgHQAIgFAHgKQAGgKADgNQAEgNABgOQABgNgCgOQgCgPgGgMQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAFg");
	this.shape_402.setTransform(834.2751,469.45);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AhfCAIgcgBIADh+IADh9IAigCIAjgCIAwCjIAxifIAjgCIAjgCIACB9IADB8IgcADIgcACIgBiZIgUBBIgWBCIgZgBIgZAAIgpiCIgCCcIgbgBg");
	this.shape_403.setTransform(809.2,469.65);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AguCvQgVgNgNgTQgNgUgHgYQgGgYAAgZQABgZAHgYQAHgXANgSQAOgTAUgMIAMgFIgNgRIgOgUIBPhKIApAvIguAhIgkAcIgJAGIgCgDIALgDIgLADIACADIAJgGQALgCALgBQAcAAAUAMQAUAMANATQANATAGAYQAGAYAAAZQgBAZgGAYQgGAXgNATQgNAUgUAMQgTAMgcgBQgaAAgVgMgAgSgWQgJAGgHAJQgHAJgEANQgEAMgBAOQgCAOACAPQACAPAGAMQAFANAKAIQAKAIAOADIAEAAQAMAAAJgGQAIgGAHgKQAGgKADgMQAEgNABgOQABgPgCgOQgCgPgGgLQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAGg");
	this.shape_404.setTransform(784.1251,464.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgpCfQgXgNgPgWQgPgWgIgbQgHgcAAgdQAAgwALgkQALgkASgXQATgYAYgLQAYgLAZgBQAxAAAmAeIggAxQgMgMgLgEQgMgEgQAAQgRAAgNAIQgPAJgMAQQgLARgHAXQgGAYABAdQAAAZAFATQAGATAJANQAKAMAMAHQALAGAOABQARAAAQgIQAOgHANgMIAbArQgSAUgVAKQgXALgZABQgfAAgYgOg");
	this.shape_405.setTransform(761.6,466.325);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgeCnQgRgHgNgLQgNgMgHgRQgIgRAAgWQAAgWAJgSQAIgTALgQQAMgQAMgOQAMgPAHgOIA4AHQgGAUgLAQQgLAPgLAOIgRAbQgIANgBAMQgBASALAMQALALATAAQAPAAAOgFQAOgFANgGIATA2QgVALgVAGQgWAGgTAAQgTAAgRgGgAgRhfQgMgNgCgSQAAgJACgIQACgIAFgGQAFgGAIgEQAHgEAKgBIACAAQAMAAAJAEQAIAEAFAGQAGAHACAIQADAIgBAIQAAAJgDAIQgDAIgFAGQgFAHgHAEQgIAEgJAAQgSAAgNgOg");
	this.shape_406.setTransform(744.375,468.775);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgkhEIBJACIgSCGIg2ABg");
	this.shape_407.setTransform(711.175,480.05);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AggiCIA5AAIAIEEIgcAAIgaABg");
	this.shape_408.setTransform(700.125,469.45);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AhUCFIgIkBIANgCIAZgCIAdgEIAYgBQARAAAQADQAPAEALAHQAKAHAGAMQAGAMAAARQAAAUgHAOQgIAOgOAMQAVAKALAPQAKARgBATQAAAPgIAPQgIAPgPAMQgQAMgXAIQgXAHgfAAgAgjAXIACA8IAHAAIAHABQAIAAAJgCQAJgCAHgEQAIgEAGgGQAGgHABgJQABgMgIgKQgHgLgRgFQgTAHgUAEgAgmhRIACA1QASgCAMgEQAMgEAHgFQAIgGADgGQAEgHAAgHQAAgJgHgFQgGgFgPAAQgMAAgaAHg");
	this.shape_409.setTransform(684.1044,469.325);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AhfCAIgcgBIADh+IADh9IAigCIAjgCIAwCjIAyifIAigCIAjgCIADB9IACB8IgcADIgcACIAAiZIgVBBIgWBCIgZgBIgZAAIgpiCIgBCcIgcgBg");
	this.shape_410.setTransform(660.5,469.65);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AguB6QgVgNgNgSQgNgUgHgYQgGgYAAgZQABgZAHgXQAHgZANgSQAOgTAUgLQAUgLAZAAQAcAAAUAMQAUAMANASQANAUAGAYQAGAYAAAZQgBAYgGAYQgGAYgNATQgNATgUAMQgTAMgcAAQgagBgVgMgAgShLQgJAGgHAKQgHAKgEAMQgEANgBANQgCAOACAPQACAOAGANQAFAMAKAJQAKAIAOACIAEAAQAMABAJgHQAIgFAHgKQAGgKADgNQAEgNABgOQABgNgCgOQgCgPgGgMQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAFg");
	this.shape_411.setTransform(635.4251,469.45);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AhSB+IgGgWIgGgXIB1icIhuAAIAAg0IClADIAOAnIg+BSIg+BRIB/AAIAAAyg");
	this.shape_412.setTransform(613.875,469.675);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("Ahch0IAzgUIBRCbIgGiSIAcAAIAcgBIADEDIgwACIhTiXIACBJIACBMIg4AGg");
	this.shape_413.setTransform(581.5,469.275);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgrB6QgSgIgMgPQgMgPgGgVQgGgVABgaIAGiQIA0gCIgBBLIgCBJQgBAbAJAMQAJANATACIAEABIABAAQARAAAKgNQAKgNAAgbIAChLIAChLIA4ACIgCBLIgCBLQAAAYgHAUQgHAVgMAOQgMAOgRAIQgRAIgVAAQgZAAgSgJg");
	this.shape_414.setTransform(560.6173,469.825);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgYCHQgOgBgNgFQgNgGgMgHQgLgIgIgMIAPgUIAPgUQAMAQARAGQASAGATAAQAUgCALgKQAMgKgEgOQgCgJgKgGQgKgGgNgFIgcgLQgPgGgNgIQgMgJgIgNQgIgOABgUQAAgUAIgPQAIgOAMgKQAMgJAQgEQAQgFAQAAQAVAAAUAHQAVAIAPAOIgfAuQgJgKgLgFQgLgGgLgCIgFgBIgFAAQgMAAgJAGQgJAGgBANQAAAFADAEQADAEAFAEIANAGIAOAFIAeALQAPAGANAKQAMAIAIAOQAIAPgBAVQgBAVgIAQQgIAPgNALQgNAKgRAFQgQAFgSABQgMAAgOgCg");
	this.shape_415.setTransform(527.2306,469.425);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AhKiHICXAFIgBAXIgCAYIhigDIgBA4IBOgEIACAZIABAZIhTAFIAAA8IBogHIACAcIACAbIhRAEIhQADg");
	this.shape_416.setTransform(508.55,469.475);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AAVBXIgmg2IgPgBIgOgBIABAyIABAxIgcABIgcABIgDkDQAXgGAWgEQAWgEATAAQAVAAASAFQATAFANALQAOALAIARQAIAQAAAYQAAAcgMASQgMARgTAKIA/BUIgVATIgWASIgog3gAgdhZIgTACIABBHIALABIAKAAQAaAAAOgIQAOgJACgSQACgTgLgKQgMgJgUgCIgSABg");
	this.shape_417.setTransform(489.475,469.475);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AhKiHICXAFIgBAXIgCAYIhigDIgBA4IBOgEIACAZIABAZIhTAFIgBA8IBpgHIACAcIACAbIhRAEIhQADg");
	this.shape_418.setTransform(469.05,469.475);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AguB6QgVgNgNgSQgNgUgHgYQgGgYAAgZQABgZAHgXQAHgZANgSQAOgTAUgLQAUgLAZAAQAcAAAUAMQAUAMANASQANAUAGAYQAGAYAAAZQgBAYgGAYQgGAYgNATQgNATgUAMQgTAMgcAAQgagBgVgMgAgShLQgJAGgHAKQgHAKgEAMQgEANgBANQgCAOACAPQACAOAGANQAFAMAKAJQAKAIAOACIAEAAQAMABAJgHQAIgFAHgKQAGgKADgNQAEgNABgOQABgNgCgOQgCgPgGgMQgFgMgJgIQgJgJgMgCIgHAAQgKAAgIAFg");
	this.shape_419.setTransform(436.1751,469.45);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AAVBXIgmg2IgPgBIgOgBIABAyIABAxIgcABIgcABIgDkDQAXgGAWgEQAWgEATAAQAVAAASAFQATAFANALQAOALAIARQAIAQAAAYQAAAcgMASQgMARgTAKIA/BUIgVATIgWASIgog3gAgdhZIgTACIABBHIALABIAKAAQAaAAAOgIQAOgJACgSQACgTgLgKQgMgJgUgCIgSABg");
	this.shape_420.setTransform(414.475,469.475);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AhLiHICXAFIAAAXIgCAYIhigDIAAA4IBNgEIACAZIABAZIhSAFIgBA8IBngHIADAcIACAbIhRAEIhQADg");
	this.shape_421.setTransform(394.05,469.475);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AhzibQA0gPAuAAQAdABAYAGQAZAHASANQARAOAKAVQAKAWAAAeQAAAdgKAWQgJAVgRAPQgRAPgYAIQgXAIgaABIgUAAIgWgCIABBrIgdABIgeABgAghh0IgWADIACB9IAIABIAJAAQAQAAAQgDQAQgDANgHQANgHAJgNQAJgNACgVQACgOgFgMQgEgLgKgIQgJgJgOgEQgNgEgQgBIgWABg");
	this.shape_422.setTransform(373.125,465.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg5gJIBikyIAgACIAhADIBYEoIghAGIgfAIgAggAxIAggEIAhgEIgchrg");
	this.shape_423.setTransform(652.45,542.075);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AhvCVIgggCIADiSIAEiRIAogDIAogCIA4C9IA5i4IAogDIApgCIADCRIADCSIggACIggACIgCizIgYBNIgZBNIgdgBIgdgBIgwiYIgCC3IgggBg");
	this.shape_424.setTransform(624.225,542.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AhvCVIgggCIADiSIAEiRIAogDIAogCIA4C9IA5i4IAogDIApgCIADCRIADCSIggACIggACIgCizIgYBNIgZBNIgdgBIgdgBIgwiYIgCC3IgggBg");
	this.shape_425.setTransform(462.725,542.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AAXCJIgLABIgLAAQgcgBgXgLQgWgMgQgTQgPgTgJgZQgJgYgCgaQgDgeAHggQAHgfAQgaQAPgZAZgPQAZgQAggBQAdAAAVALQAWALAPASQAPASAJAXQAJAYACAaQACAVgCAUQgCATgGAUQgGASgJAQQgKARgNALIAjAfIgXAYIgWAWgAgWhpQgKAHgIALQgIALgEAPQgFAPgCAPQgCARACARQACAQAHAPQAHAOALAKQAMAKAQACIAFABQANAAALgHQAKgHAHgLQAHgMAEgPQAFgPABgPQABgQgDgRQgCgSgGgOQgHgOgKgKQgKgJgPgDIgHAAQgMAAgKAHg");
	this.shape_426.setTransform(373.7526,543.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgGCZIgfgBIAFjyIhKACIAFhBIBnADIBpAEIgFA8IhIgCIgDB4IgDB6IgegBg");
	this.shape_427.setTransform(762.35,474.55);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AAwBpIhkAFIgQAwIg4gJIBgkyIAhACIAhADIBYEoIghAGIggAIgAggAxIAggEIAggEIgbhrg");
	this.shape_428.setTransform(716.5,474.875);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_429.setTransform(576.375,474.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AhbiWIAggBIAgAAIgCDyIB7gDIgCAgIgBAfIi4ABg");
	this.shape_430.setTransform(556.05,474.575);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AhXidICwAFIgBAcIgBAbIhygDIgCBBIBbgFIACAeIACAcIhhAGIgBBGIB5gHIACAfIADAgIheAEIhdAEg");
	this.shape_431.setTransform(535.025,474.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AhsiPQAZgHAYgDQAYgFAVAAQAaAAAXAHQAXAGAQANQARANAJAVQAJATAAAcQAAAegKAVQgKAVgRAOQgSAOgXAGQgXAHgaAAIgXgBIABBeIggACIggACgAgchiIgQABIACBmIAGABIAFAAQAOgBANgCQAMgCALgFQALgGAHgKQAIgLACgSQACgVgNgNQgOgNgWgCIgHgBIgHAAIgOABg");
	this.shape_432.setTransform(513.425,474.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:403.95,y:488.275}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:497,y:487.975}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:573.525,y:488.075}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:658.975}},{t:this.shape_35},{t:this.shape_34,p:{x:717.4251}},{t:this.shape_33},{t:this.shape_32,p:{x:782.275}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:844.775,y:488.125}},{t:this.shape_28,p:{x:866.15,y:487.95}},{t:this.shape_27,p:{x:882,y:488.05}},{t:this.shape_26,p:{x:902.7251}},{t:this.shape_25,p:{x:922.075,y:500.4}},{t:this.shape_24,p:{x:372.475}},{t:this.shape_23},{t:this.shape_22,p:{x:417.7287,y:555.125}},{t:this.shape_21,p:{x:434.6}},{t:this.shape_20,p:{x:465.4,y:555.425}},{t:this.shape_19,p:{x:489.95,y:555.475}},{t:this.shape_18},{t:this.shape_17,p:{x:534.325,y:555.3}},{t:this.shape_16,p:{x:558.075,y:555.325}},{t:this.shape_15,p:{x:580.2,y:555.175}},{t:this.shape_14,p:{x:600.525,y:555.3}},{t:this.shape_13},{t:this.shape_12,p:{x:659.4,y:555.475}},{t:this.shape_11,p:{x:682.805}},{t:this.shape_10,p:{x:708.7251}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:793.7433,y:555.675}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:869.5933,y:555.675}},{t:this.shape_3,p:{x:892.475,y:555.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_29,p:{x:462.825,y:488.125}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_42,p:{x:533.45,y:487.975}},{t:this.shape_63,p:{x:553.75,y:487.975}},{t:this.shape_34,p:{x:577.1251}},{t:this.shape_62},{t:this.shape_7,p:{x:644.3933,y:488.475}},{t:this.shape_36,p:{x:667.275}},{t:this.shape_32,p:{x:690.125}},{t:this.shape_26,p:{x:716.0251}},{t:this.shape_61},{t:this.shape_14,p:{x:395.325,y:555.3}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_16,p:{x:461.575,y:555.325}},{t:this.shape_4,p:{x:485.5933,y:555.675}},{t:this.shape_58},{t:this.shape_24,p:{x:524.075}},{t:this.shape_57},{t:this.shape_25,p:{x:569.325,y:567.6}},{t:this.shape_56},{t:this.shape_55,p:{x:628.575,y:551.575}},{t:this.shape_10,p:{x:657.0751}},{t:this.shape_3,p:{x:695.275,y:555.3}},{t:this.shape_54},{t:this.shape_53,p:{x:756.05,y:555.475}},{t:this.shape_11,p:{x:779.455}},{t:this.shape_21,p:{x:796.75}},{t:this.shape_52},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_55,p:{x:375.125,y:470.975}},{t:this.shape_191,p:{x:403.6251}},{t:this.shape_63,p:{x:441.8,y:474.575}},{t:this.shape_190,p:{x:465.1751}},{t:this.shape_189,p:{x:503.375}},{t:this.shape_188,p:{x:525.105}},{t:this.shape_187,p:{x:549.025}},{t:this.shape_7,p:{x:571.4933,y:475.075}},{t:this.shape_186,p:{x:595.425}},{t:this.shape_185},{t:this.shape_184,p:{x:639.825}},{t:this.shape_183,p:{x:661.555}},{t:this.shape_25,p:{x:679.625,y:487}},{t:this.shape_182,p:{x:709.925}},{t:this.shape_181,p:{x:731.655}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_29,p:{x:392.325,y:541.925}},{t:this.shape_12,p:{x:416.6,y:542.075}},{t:this.shape_177},{t:this.shape_53,p:{x:460.4,y:542.075}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_14,p:{x:597.575,y:541.9}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_39,p:{x:705.225,y:541.875}},{t:this.shape_4,p:{x:726.3433,y:542.275}},{t:this.shape_169},{t:this.shape_168,p:{x:774.925}},{t:this.shape_167},{t:this.shape_16,p:{x:814.275,y:541.925}},{t:this.shape_28,p:{x:835.65,y:541.75}},{t:this.shape_3,p:{x:855.375,y:541.9}},{t:this.shape_166,p:{x:872.8174}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163,p:{x:417.6733}},{t:this.shape_162,p:{x:438.275}},{t:this.shape_161},{t:this.shape_160,p:{x:481.3483}},{t:this.shape_159,p:{x:500.695}},{t:this.shape_158,p:{x:520.8233}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_195},{t:this.shape_42,p:{x:396.9,y:474.575}},{t:this.shape_181,p:{x:431.955}},{t:this.shape_46,p:{x:456.95,y:474.875}},{t:this.shape_22,p:{x:481.0287,y:474.525}},{t:this.shape_184,p:{x:503.475}},{t:this.shape_194,p:{x:541.6526}},{t:this.shape_4,p:{x:567.6433,y:475.075}},{t:this.shape_182,p:{x:590.525}},{t:this.shape_193,p:{x:627.025}},{t:this.shape_190,p:{x:652.5751}},{t:this.shape_192,p:{x:673.1174}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_195},{t:this.shape_42,p:{x:396.9,y:474.575}},{t:this.shape_181,p:{x:431.955}},{t:this.shape_46,p:{x:456.95,y:474.875}},{t:this.shape_22,p:{x:481.0287,y:474.525}},{t:this.shape_184,p:{x:503.475}},{t:this.shape_194,p:{x:541.6526}},{t:this.shape_4,p:{x:567.6433,y:475.075}},{t:this.shape_182,p:{x:590.525}},{t:this.shape_193,p:{x:627.025}},{t:this.shape_190,p:{x:652.5751}},{t:this.shape_192,p:{x:673.1174}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_207},{t:this.shape_206,p:{x:397.7}},{t:this.shape_205},{t:this.shape_22,p:{x:435.5287,y:474.525}},{t:this.shape_16,p:{x:460.675,y:474.725}},{t:this.shape_190,p:{x:485.8751}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200,p:{x:438.425}},{t:this.shape_199},{t:this.shape_198,p:{x:481.4983}},{t:this.shape_197,p:{x:500.845}},{t:this.shape_196,p:{x:520.9733}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_212,p:{x:373.225}},{t:this.shape_29,p:{x:399.575,y:474.725}},{t:this.shape_184,p:{x:421.725}},{t:this.shape_181,p:{x:443.455}},{t:this.shape_7,p:{x:482.2433,y:475.075}},{t:this.shape_193,p:{x:506.525}},{t:this.shape_39,p:{x:542.875,y:474.675}},{t:this.shape_16,p:{x:564.825,y:474.725}},{t:this.shape_53,p:{x:589.1,y:474.875}},{t:this.shape_4,p:{x:613.6933,y:475.075}},{t:this.shape_211,p:{x:638.375}},{t:this.shape_182,p:{x:661.225}},{t:this.shape_192,p:{x:678.6674}},{t:this.shape_210,p:{x:380.5852}},{t:this.shape_209,p:{x:399.8852}},{t:this.shape_208,p:{x:419.1852}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_212,p:{x:373.225}},{t:this.shape_16,p:{x:399.575,y:474.725}},{t:this.shape_189,p:{x:421.725}},{t:this.shape_181,p:{x:443.455}},{t:this.shape_4,p:{x:482.2433,y:475.075}},{t:this.shape_216,p:{x:506.525}},{t:this.shape_12,p:{x:531.15,y:474.875}},{t:this.shape_211,p:{x:569.725}},{t:this.shape_184,p:{x:592.575}},{t:this.shape_187,p:{x:614.675}},{t:this.shape_182,p:{x:635.275}},{t:this.shape_215},{t:this.shape_186,p:{x:680.475}},{t:this.shape_214,p:{x:697.2}},{t:this.shape_213},{t:this.shape_193,p:{x:743.475}},{t:this.shape_192,p:{x:762.3674}},{t:this.shape_210,p:{x:380.5852}},{t:this.shape_209,p:{x:399.8852}},{t:this.shape_208,p:{x:419.1852}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_221,p:{x:367.2264}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_212,p:{x:466.975}},{t:this.shape_217,p:{x:486.6236}},{t:this.shape_210,p:{x:380.5852}},{t:this.shape_209,p:{x:399.8852}},{t:this.shape_208,p:{x:419.1852}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_55,p:{x:375.125,y:470.975}},{t:this.shape_235,p:{x:403.6251}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_216,p:{x:484.625}},{t:this.shape_191,p:{x:510.1751}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_193,p:{x:591.175}},{t:this.shape_190,p:{x:616.7251}},{t:this.shape_228,p:{x:637.2674}},{t:this.shape_227,p:{x:651.0674}},{t:this.shape_192,p:{x:664.8674}},{t:this.shape_226},{t:this.shape_225,p:{x:388.0483}},{t:this.shape_224,p:{x:408.2731}},{t:this.shape_223},{t:this.shape_222,p:{x:453.175}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_235,p:{x:461.3751}},{t:this.shape_239},{t:this.shape_15,p:{x:535,y:474.575}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_29,p:{x:595.625,y:474.725}},{t:this.shape_191,p:{x:620.8251}},{t:this.shape_236},{t:this.shape_221,p:{x:691.0264}},{t:this.shape_206,p:{x:712.15}},{t:this.shape_214,p:{x:730.95}},{t:this.shape_22,p:{x:749.9787,y:474.525}},{t:this.shape_16,p:{x:775.125,y:474.725}},{t:this.shape_190,p:{x:800.3251}},{t:this.shape_217,p:{x:820.4736}},{t:this.shape_228,p:{x:834.4174}},{t:this.shape_227,p:{x:848.2174}},{t:this.shape_192,p:{x:862.0174}},{t:this.shape_210,p:{x:369.7852}},{t:this.shape_209,p:{x:389.0852}},{t:this.shape_208,p:{x:408.3852}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_221,p:{x:367.2264}},{t:this.shape_206,p:{x:388.35}},{t:this.shape_27,p:{x:407.15,y:474.65}},{t:this.shape_22,p:{x:426.1787,y:474.525}},{t:this.shape_16,p:{x:451.325,y:474.725}},{t:this.shape_190,p:{x:476.5251}},{t:this.shape_217,p:{x:496.6736}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_196,p:{x:417.6733}},{t:this.shape_200,p:{x:438.275}},{t:this.shape_245},{t:this.shape_198,p:{x:481.3483}},{t:this.shape_197,p:{x:500.695}},{t:this.shape_244}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_258},{t:this.shape_257},{t:this.shape_183,p:{x:418.805}},{t:this.shape_256},{t:this.shape_25,p:{x:446.675,y:487}},{t:this.shape_182,p:{x:476.975}},{t:this.shape_181,p:{x:498.705}},{t:this.shape_255},{t:this.shape_190,p:{x:543.5751}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_194,p:{x:631.6526}},{t:this.shape_4,p:{x:657.6433,y:475.075}},{t:this.shape_252},{t:this.shape_192,p:{x:686.7174}},{t:this.shape_226},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.instance},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_261},{t:this.shape_214,p:{x:406.05}},{t:this.shape_16,p:{x:426.425,y:474.725}},{t:this.shape_12,p:{x:450.7,y:474.875}},{t:this.shape_184,p:{x:487.475}},{t:this.shape_183,p:{x:509.205}},{t:this.shape_191,p:{x:535.1251}},{t:this.shape_25,p:{x:554.475,y:487}},{t:this.shape_221,p:{x:581.3264}},{t:this.shape_182,p:{x:599.925}},{t:this.shape_181,p:{x:621.655}},{t:this.shape_4,p:{x:660.4433,y:475.075}},{t:this.shape_193,p:{x:684.725}},{t:this.shape_260},{t:this.shape_190,p:{x:747.4251}},{t:this.shape_259,p:{x:776.575}},{t:this.shape_22,p:{x:804.0287,y:474.525}},{t:this.shape_27,p:{x:822.6,y:474.65}},{t:this.shape_217,p:{x:836.2736}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163,p:{x:417.6733}},{t:this.shape_162,p:{x:438.275}},{t:this.shape_161},{t:this.shape_160,p:{x:481.3483}},{t:this.shape_159,p:{x:500.695}},{t:this.shape_158,p:{x:520.8233}}]},1).to({state:[{t:this.instance},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_207},{t:this.shape_267},{t:this.shape_7,p:{x:431.2433,y:475.075}},{t:this.shape_266,p:{x:454.125}},{t:this.shape_20,p:{x:490.6,y:474.825}},{t:this.shape_19,p:{x:515.15,y:474.875}},{t:this.shape_186,p:{x:538.925}},{t:this.shape_182,p:{x:559.525}},{t:this.shape_181,p:{x:581.255}},{t:this.shape_46,p:{x:620.3,y:474.875}},{t:this.shape_194,p:{x:646.1026}},{t:this.shape_4,p:{x:672.0933,y:475.075}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_225,p:{x:388.0983}},{t:this.shape_224,p:{x:408.3231}},{t:this.shape_262},{t:this.shape_222,p:{x:453.225}}]},1).to({state:[{t:this.instance},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.instance},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_163,p:{x:417.8233}},{t:this.shape_162,p:{x:438.425}},{t:this.shape_369},{t:this.shape_160,p:{x:481.4983}},{t:this.shape_159,p:{x:500.845}},{t:this.shape_158,p:{x:520.9733}}]},1).to({state:[{t:this.instance},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_55,p:{x:375.125,y:470.975}},{t:this.shape_191,p:{x:403.6251}},{t:this.shape_188,p:{x:442.505}},{t:this.shape_266,p:{x:465.375}},{t:this.shape_25,p:{x:481.625,y:487}},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_189,p:{x:597.425}},{t:this.shape_259,p:{x:623.475}},{t:this.shape_190,p:{x:652.6251}},{t:this.shape_183,p:{x:677.455}},{t:this.shape_428},{t:this.shape_193,p:{x:740.625}},{t:this.shape_427},{t:this.shape_184,p:{x:782.075}},{t:this.shape_181,p:{x:803.805}},{t:this.shape_211,p:{x:842.525}},{t:this.shape_182,p:{x:865.375}},{t:this.shape_426},{t:this.shape_7,p:{x:399.7433,y:542.275}},{t:this.shape_17,p:{x:422.625,y:541.9}},{t:this.shape_425},{t:this.shape_14,p:{x:488.825,y:541.9}},{t:this.shape_168,p:{x:525.725}},{t:this.shape_4,p:{x:550.4433,y:542.275}},{t:this.shape_3,p:{x:573.325,y:541.9}},{t:this.shape_16,p:{x:597.075,y:541.925}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_166,p:{x:671.5674}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268}]},1).to({state:[]},1).wait(1));

	// personajes
	this.instance_1 = new lib.tvenojadoai();
	this.instance_1.setTransform(928,198,1.4525,1.3881);

	this.instance_2 = new lib.libroenojadoai();
	this.instance_2.setTransform(-11,392,0.5282,0.6422);

	this.instance_3 = new lib.flash0ai_2();
	this.instance_3.setTransform(138,234,1.1694,1.2705);

	this.instance_4 = new lib.tvai();
	this.instance_4.setTransform(928,198,1.4505,1.3873);

	this.instance_5 = new lib.libro2ai();
	this.instance_5.setTransform(-11,392,0.5269,0.6417);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgXGRQgbAAgVgJQgTgIgMgPQgMgPgHgSQgFgTABgTQABgVAHgSQAGgUAMgOQAMgQAQgJQASgJAUAAQAtAAAdAeQAdAgADAsQABASgEATQgGATgLAOQgMAOgRAKQgSAJgXABgAhZBtQAOguAZglQAZglAZghQAYggATgeQASgeABgdQADgqgagbQgagbgtABQgjAAghAMQghALgeAQIgqh+QAwgbAygNQAxgOAtAAQAsAAAoAPQAoANAeAcQAeAbARAoQASAoAAAzQAAAzgTAqQgUAsgaAmQgbAlgcAhQgcAjgRAgg");
	this.shape_433.setTransform(1174.1,493.95);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AhGGDQgogOgegbQgegbgRgoQgSgoAAgzQAAgzAUgrQATgrAbgmQAZglAdgiQAcgiARggICCAQQgOAugZAmQgZAkgZAgQgYAhgSAdQgTAegBAeQgDAqAaAaQAaAbAtAAQAjAAAhgMQAhgMAegPIAqB+QgwAbgyANQgxANgtAAQgtAAgngOgAgojdQgcgfgFgrQAAgTAFgTQAEgTAMgOQAMgOARgKQASgJAXgBIAGAAQAcAAATAIQAUAKAMAOQANAOAGATQAFATgBAUQgBAUgGASQgHATgMAPQgMAPgRAJQgQAKgWAAQgsAAgdgfg");
	this.shape_434.setTransform(1116,501.375);

	this.instance_6 = new lib.librosorprendidoai();
	this.instance_6.setTransform(-11,392,0.5269,0.6417);

	this.instance_7 = new lib.arequipeasustadaai();
	this.instance_7.setTransform(95,226,0.927,1.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:138,y:234}},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3,p:{x:138,y:234}},{t:this.instance_2},{t:this.instance_4}]},1).to({state:[{t:this.instance_3,p:{x:138,y:234}},{t:this.instance_4},{t:this.instance_5}]},4).to({state:[{t:this.instance_5},{t:this.shape_434},{t:this.shape_433}]},2).to({state:[{t:this.instance_5},{t:this.shape_434},{t:this.shape_433}]},1).to({state:[{t:this.instance_5},{t:this.shape_434},{t:this.shape_433}]},1).to({state:[{t:this.instance_5},{t:this.shape_434},{t:this.shape_433}]},2).to({state:[{t:this.instance_5},{t:this.instance_3,p:{x:984,y:229}}]},1).to({state:[{t:this.instance_3,p:{x:984,y:229}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[]},5).wait(1));

	// fondo
	this.instance_8 = new lib.flash0ai_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},7).wait(5).to({_off:false},0).to({_off:true},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1324.5,1176);
// library properties:
lib.properties = {
	id: 'FCB71772D71C40459A97D2CDF2772891',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dialogos 4_atlas_1.png?1698427060081", id:"dialogos 4_atlas_1"},
		{src:"sounds/botones.mp3?1698427060522", id:"botones"},
		{src:"sounds/dialogo.mp3?1698427060522", id:"dialogo"}
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