(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"nivel 4 pereza_atlas_1", frames: [[0,0,2478,1077],[2480,0,675,666]]}
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



(lib.Desiertoai = function() {
	this.initialize(ss["nivel 4 pereza_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Perezaai = function() {
	this.initialize(ss["nivel 4 pereza_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhknA4QMAAAhwfMDJPAAAMAAABwfg");
	this.shape.setTransform(644,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,1288,720), null);


(lib.si = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("A07IIIAAwPMAp3AAAIAAQPg");
	this.shape.setTransform(133.95,51.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.9,104);


(lib.respuestac = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EAj7AJWMhH1AAAIAAyrMBH1AAAg");
	this.shape.setTransform(229.875,59.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F7F9").s().p("Egj6AJWIAAyrMBH1AAAIAASrg");
	this.shape_1.setTransform(229.875,59.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0066FF").p("EAj7AJWMhH1AAAIAAyrMBH1AAAg");
	this.shape_2.setTransform(229.875,59.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,461.8,121.6);


(lib.respuestaa = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EAj7AJWMhH1AAAIAAyrMBH1AAAg");
	this.shape.setTransform(229.875,59.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F7F9").s().p("Egj6AJWIAAyrMBH1AAAIAASrg");
	this.shape_1.setTransform(229.875,59.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0066FF").p("EAj7AJWMhH1AAAIAAyrMBH1AAAg");
	this.shape_2.setTransform(229.875,59.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,461.8,121.5);


(lib.no = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("A07IIIAAwPMAp3AAAIAAQPg");
	this.shape.setTransform(133.95,51.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.9,104);


(lib.botonb = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EAj7AJWMhH1AAAIAAyrMBH1AAAg");
	this.shape.setTransform(229.875,59.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F7F9").s().p("Egj6AJVIAAyqMBH1AAAIAASqg");
	this.shape_1.setTransform(229.875,59.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0066FF").p("EAj7AJWMhH1AAAIAAyrMBH1AAAg");
	this.shape_2.setTransform(229.875,59.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,461.8,121.5);


// stage content:
(lib.nivel4pereza = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,16,17];
	// timeline functions:
	this.frame_0 = function() {
		playSound("niveles");
		this.stop();
		
		window.erradas = 0;
		
		this.respuesta1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(1);
			
			window.erradas++;
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.respuesta2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(1);
			
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.respuesta3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(1);
			
			window.erradas++;
		}
	}
	this.frame_1 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.respuesta4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(2);
			
		}
		
		
		
		
		this.respuesta5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(2);
			
			window.erradas++;
		}
		
		
		
		
		this.respuesta6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(2);
			
			window.erradas++;
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		
		
		this.respuesta7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(3);
			
			window.erradas++;
		}
		
		
		
		this.respuesta8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop(3);
			
			window.erradas++;
		}
		
		
		
		this.respuesta9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		
		this.respuesta10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(4);
		}
		
		
		
		this.respuesta11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop(4);
			
			window.erradas++;
		}
		
		
		
		
		this.respuesta12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_18()
		{
			this.gotoAndStop(4);
			
			window.erradas++;
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		var mov = this;
		
		
		this.respuesta13.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop(5);
			
			window.erradas++;
			
			validar();
		}
		
		
		
		this.respuesta14.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(5);
			
			validar();
		}
		
		
		
		
		this.respuesta15.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_21()
		{
			this.gotoAndStop(5);
			
			window.erradas++;
			
			validar();
		}
		
		function validar(){
			if(window.erradas > 2){
				mov.gotoAndStop(17);
			}else{
				mov.gotoAndPlay(5);
			}
		}
	}
	this.frame_16 = function() {
		this.stop();
		
		window.open("dialogos 5.html", "_self");
	}
	this.frame_17 = function() {
		this.stop();
		
		
		
		this.sii.addEventListener("click", fl_ClickToGoToAndStopAtFrame_22.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_22()
		{
			this.gotoAndStop(0);
		}
		
		
		
		
		this.noo.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("inicio.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(12).call(this.frame_16).wait(1).call(this.frame_17).wait(1));

	// Capa_5
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(644,360,1,1,0,0,0,644,360);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhaBPQAfgSAZgUQAZgVAQgTQAQgTAFgSQAGgSgIgOQgIgHgLAAQgHAAgJACQgJADgHAEIgPAIIgKAFIgKgaIgKgbQAWgLATgHQATgFAYAAQAPAAAPAFQAPAFALAKQALAKAGAPQAGAPgDAVQgCAfgUAdQgUAegjAbIBAAAIgGAcIgGAgIhLABIhMABg");
	this.shape.setTransform(1028.6368,610.9);

	this.respuesta3 = new lib.respuestac();
	this.respuesta3.name = "respuesta3";
	this.respuesta3.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta3, 0, 1, 2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLCCQgVAAgQgIQgQgIgKgKQgLgKgFgIIgEgIIACACIApguQAMATAMAIQALAIAIAAIAEABQAIAAAJgHQAJgGAEgJQACgGAAgHQAAgGgCgGQgEgGgGgEQgGgEgKAAIgFAAIgEABIgHADIgIADIgTgLIgUgKIAYh8IBCABIBEACIgMA6IhNgCIgEAYIAFAAIAFAAIAHAAIAHABQAQACAMAGQAMAHAIAKQAIAKAFAMQAEANgBAOQgBAXgIASQgIASgNANQgOANgQAIQgRAHgQABIgEAAIgEAAg");
	this.shape_1.setTransform(1027.4,465.775);

	this.respuesta2 = new lib.botonb();
	this.respuesta2.name = "respuesta2";
	this.respuesta2.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta2, 0, 1, 2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5BzIgZgRQAagTARgQQASgQAHgJIAKgHQgGACgIAAQgNAAgMgEQgMgDgKgIQgJgIgFgMQgGgNABgTQACgVAIgRQAIgSAOgNQANgNASgHQASgIAUAAQAQAAANAGQAOAFAJAMQAJALAFASQAEARgDAZIgFAXQgEAPgMAWQgMAWgXAcQgXAbgmAgIgYgRgAgHhHQgEACgEADQgEAEgDAGQgDAHgBALQAAAFACAFQACAFAEADQAEADAFACQAFACAEAAQAFAAAGgCIAGgDIAFgDQAFgNAAgJQABgKgDgGQgDgHgFgDQgGgEgHAAIgDAAIgIACg");
	this.shape_2.setTransform(1034.6816,316.925);

	this.respuesta1 = new lib.respuestaa();
	this.respuesta1.name = "respuesta1";
	this.respuesta1.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta1, 0, 1, 2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ag/CGQAQgNAMgQQAMgRAIgSQAIgTAFgTQAEgUACgRQABgSgBgTQgBgSgDgRQgEgRgIgOQgHgPgKgKIAvgXQAMAKAIAOQAJANAGAQQAFAQADARQADARAAATQgBAbgGAaQgGAbgLAaQgMAZgQAWQgPAWgVAQg");
	this.shape_3.setTransform(470.825,628.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgnhfIAMAAIASAAIASgBIgTCSIBKgCIgDAXIgFAZIh4ABg");
	this.shape_4.setTransform(459.7,628.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg+ADIg+ADg");
	this.shape_5.setTransform(446.9,628.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgxBgIgPheIgPheIAXgDIAZgCIAUB3IALgeIALgdIALgcIAMgfIAXADIAXAFIhHC6g");
	this.shape_6.setTransform(434.125,628.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgQhfIAxAAIgSC+IgWABIgZAAg");
	this.shape_7.setTransform(421.2,628.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("Ag6hTIAwgSIAiBeIAHhWIAYAAIAZgBIgWC/IgrABIgkheIgEAvIgFAtIgxAGg");
	this.shape_8.setTransform(409.05,628.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg+ADIg+ADg");
	this.shape_9.setTransform(386.15,628.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgXBhQgNAAgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBIIgLBIIgWAAg");
	this.shape_10.setTransform(374.575,628.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_11.setTransform(359.375,628.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg9ADIg/ADg");
	this.shape_12.setTransform(345.55,628.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("Ag6hTIAxgSIAhBeIAIhWIAXAAIAZgBIgVDAIgsABIgjhfIgFAwIgEAtIgyAFg");
	this.shape_13.setTransform(716.55,587.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgCAYIg8ADIg/ADg");
	this.shape_14.setTransform(702.1,587.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_15.setTransform(679.075,587.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_16.setTransform(663.35,587.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgXBgQgNABgLgBIAViRIgtABIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_17.setTransform(651.425,587.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("Ag6hTIAwgSIAiBeIAIhWIAXAAIAZgBIgVDAIgsABIgjhfIgFAwIgFAtIgxAFg");
	this.shape_18.setTransform(636.65,587.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_19.setTransform(621.7469,587.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgXBjQgMgCgKgHQgLgGgHgLQgHgLgDgQQgEgQACgVQAEgcAKgVQAKgVANgNQAOgNAQgGQAPgGAQAAQAPAAANAEQAOAFAMAJIgcAqQgGgHgHgDQgHgDgIgBQgJAAgIAFQgHADgHAIQgHAIgGALQgFALgBAPQgCALACAKQACAIAEAHQAEAFAFAEQAGACAGAAIACAAIADAAIADgCIAEAAIAGgcIgagCIAKgpIBDACIgIArIgIAsQgMAOgRAIQgQAHgQAAIgNgBg");
	this.shape_20.setTransform(606.4386,587.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgEAcIA2gCIgBAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_21.setTransform(591.5,587.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAXAGALAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgVAQIgYgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCADgDQAEgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_22.setTransform(576.8,587.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_23.setTransform(562.0481,587.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_24.setTransform(538.125,587.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_25.setTransform(522.4,587.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgnhfIAMAAIASAAIASAAIgTCRIBLgCIgFAXIgEAYIh4ABg");
	this.shape_26.setTransform(508.4,587.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_27.setTransform(486.025,587.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_28.setTransform(470.3,587.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_29.setTransform(455.36,587.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASAAQAVAAAOAKQAOAJAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_30.setTransform(439.3082,587.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgXBgQgNABgLgBIAViRIgtABIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_31.setTransform(425.675,587.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_32.setTransform(403.15,587.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_33.setTransform(388.56,587.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_34.setTransform(364.525,587.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_35.setTransform(350.7,587.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_36.setTransform(336.125,587.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_37.setTransform(320.4,587.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgWAQIgXgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_38.setTransform(305.35,587.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgvBgQgMAAgMgBIAOhfIANhgIB0ADIgEAWIgEAWIhCgCIgGApIA0ACIgIAsIgzgCIgEAfIgFAgIgXgBg");
	this.shape_39.setTransform(292.2,587.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_40.setTransform(269.075,587.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_41.setTransform(253.35,587.475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgnhfIAMAAIATAAIARAAIgSCRIBJgCIgDAXIgFAYIh3ABg");
	this.shape_42.setTransform(239.35,587.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_43.setTransform(216.2,587.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgXBgQgNABgLgBIAViRIgtABIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_44.setTransform(204.275,587.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_45.setTransform(190.2,587.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgnhfIAMAAIASAAIASAAIgTCRIBKgCIgDAXIgFAYIh4ABg");
	this.shape_46.setTransform(176.55,587.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_47.setTransform(163.4481,587.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AhMBeIgYgBIANhcIAOhdIAcgBIAdgBIARBkIArhiIAcgBIAdgBIgJBbIgKBdIgLAAIgNABIgNABIgMABIAKhYIgJAVIgGAPIgGAQIgJAVIgUgBIgVgBIgMhJIgMBcIgYgBg");
	this.shape_48.setTransform(146.125,587.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASAAQAVAAAOAKQAOAJAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_49.setTransform(128.0582,587.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_50.setTransform(113.5019,587.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgmCFQgIgNgGgQQgFgQgEgRQgCgSAAgSQAAgbAHgaQAFgcAMgZQALgZARgWQAOgWAWgQIAnAXQgQANgMAQQgMAQgIATQgJASgFAUQgDATgCASQgCASABATQABASADARQAFARAIAOQAHAPAJAKIgvAXQgMgKgIgOg");
	this.shape_51.setTransform(100.5,587.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgrCEQgOgDgMgGQgMgFgJgKQgKgIgFgLIAUgXIAWgZQAIASAQAGQAQAGASAAQAQgCAKgGQAJgGgBgLQAAgGgGgEQgFgDgHgEIgRgGIgTgIQgKgEgKgGQgJgFgGgIQgHgJgCgLQgDgMADgPQADgVAJgOQAKgPAOgKQANgKAQgEQAQgFARAAIALAAIALABQARAFAOAIQAOAHAJANIgrA2QgFgLgHgFQgIgFgHgEQgJgCgIAAQgLAAgHAEQgGAFgCAIQgBAGAHAFQAIAEAMAEIAcAKQAPAGANAJQALAKAHANQAGAOgFAYQgCAVgLAQQgKAQgOALQgPALgSAFQgTAGgTAAQgOAAgOgDg");
	this.shape_52.setTransform(522.2,540.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAmBbIhIACIgSAoIg4gIIBwkBIAeACQARAAAPABIArD5IghAGIghAHgAgEAeIAQgBIARgCIgIg5g");
	this.shape_53.setTransform(501.225,540.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWiAIBCAAIgYD/IgeABIghABg");
	this.shape_54.setTransform(485.975,540.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AASBZIgfg1IgJAAIgHgBIgFAuIgFAtIggABIghACIAbj8QAbgIAYgEQAYgEAUAAQAPAAAMACQAeAHAQAVQAPAVgEAnQgDAagMARQgMAQgSAMIAwBMIgbAVIgcAVIgggzgAgFhOIgMABIgDAbIgDAbIALAAIAQAAQAJgBAHgDQAGgDAFgEQAFgFACgJQADgMgGgIQgGgHgMgDIgGgBIgFAAIgLABg");
	this.shape_55.setTransform(469.025,540.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAmBbIhIACIgSAoIg4gIIBwkBIAeACQARAAAPABIArD5IghAGIghAHgAgEAeIAQgBIARgCIgIg5g");
	this.shape_56.setTransform(447.225,540.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AASBZIgfg1IgJAAIgHgBIgFAuIgFAtIggABIghACIAbj8QAbgIAYgEQAYgEAUAAQAPAAAMACQAeAHAQAVQAPAVgEAnQgDAagMARQgMAQgSAMIAwBMIgbAVIgcAVIgggzgAgFhOIgMABIgDAbIgDAbIALAAIAQAAQAJgBAHgDQAGgDAFgEQAFgFACgJQADgMgGgIQgGgHgMgDIgGgBIgFAAIgLABg");
	this.shape_57.setTransform(427.125,540.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ag5iEICZAFIgEAbIgEAeIhbgDIgFAkIBIgCIgCAeIgCAdIgoADIgmACIgGArIBhgGIgCAgIgBAgIhSAEIhTADg");
	this.shape_58.setTransform(407.9,540.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfCBIgggBIAcjBIg8ACIAMhCIBZACIBaADIgMA+Ig5gBIgOBgIgOBhQgNgBgRAAg");
	this.shape_59.setTransform(392.475,540.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgWiAIBCAAIgYD/IgeABIghABg");
	this.shape_60.setTransform(376.875,540.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag0h/IAQAAIAYAAIAYgBIgZDDIBjgDIgGAfQgCASgDAPIigABg");
	this.shape_61.setTransform(361.35,540.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgrCEQgOgDgMgGQgMgFgJgKQgJgIgGgLIAUgXIAWgZQAIASARAGQAQAGARAAQARgCAJgGQAJgGgCgLQAAgGgEgEQgGgDgIgEIgQgGIgUgIQgKgEgJgGQgJgFgHgIQgFgJgEgLQgCgMACgPQAEgVAKgOQAJgPANgKQAOgKAQgEQARgFAQAAIALAAIAMABQAQAFAOAIQAOAHAKANIgsA2QgEgLgIgFQgIgFgHgEQgIgCgJAAQgLAAgHAEQgGAFgCAIQgCAGAJAFQAGAEANAEIAcAKQAPAGAMAJQANAKAFANQAHAOgFAYQgDAVgKAQQgJAQgQALQgOALgSAFQgTAGgTAAQgOAAgOgDg");
	this.shape_62.setTransform(331.6,540.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAmBbIhIACIgSAoIg4gIIBwkBIAeACQARAAAPABIArD5IghAGIghAHgAgEAeIAQgBIARgCIgIg5g");
	this.shape_63.setTransform(310.625,540.825);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AASBZIgfg1IgJAAIgHgBIgFAuIgFAtIggABIghACIAbj8QAbgIAYgEQAYgEAUAAQAPAAAMACQAeAHAQAVQAPAVgEAnQgDAagMARQgMAQgSAMIAwBMIgbAVIgcAVIgggzgAgFhOIgMABIgDAbIgDAbIALAAIAQAAQAJgBAHgDQAGgDAFgEQAFgFACgJQADgMgGgIQgGgHgMgDIgGgBIgFAAIgLABg");
	this.shape_64.setTransform(290.525,540.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhBB4QgRgJgKgPQgKgPgDgUQgCgWAEgYIAWiMIA/gCIgLBJIgKBHQgEAVAGALQAGAKAPACIACAAIACABQAMgBAIgKQAJgLACgWQAHgjAFglIAKhKIBCADIgMBJIgLBJQgGAzgcAcQgbAdgtAAQgagBgRgIg");
	this.shape_65.setTransform(270.6769,540.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgeCFQgQgDgOgJQgOgJgKgPQgKgPgEgVQgFgVAEgbQAEgnAOgcQANgbASgSQASgRAVgJQAVgIAVAAQAUAAASAGQASAGAPANIgkA3QgIgIgKgFQgKgEgKgBQgMAAgLAGQgKAFgJAKQgJALgHAOQgHAQgCATQgCARACALQACANAGAHQAFAIAIAEQAHAEAJgBIACAAIAEAAIAEgCIAFgBIAJglIgkgDIAOg3IBaAEIgLA5IgLA6QgQAUgWAKQgVAKgXAAIgQgBg");
	this.shape_66.setTransform(250.1984,540.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgWiAIBCAAIgYD/IgeABIghABg");
	this.shape_67.setTransform(233.475,540.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ag/CAIgggBIATh/IASiAICaADIgFAeIgFAeIhZgDIgIA3IBGADIgKA7IhFgEIgGAqIgGAqQgOgBgRAAg");
	this.shape_68.setTransform(219.95,540.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgYAyQgHgFgGgFQgGgHgDgIQgEgHgBgIQgBgMAEgKQAFgKAIgJQAJgIAKgGQAKgFAKgCIAEAAIADAAQASAAAMAMQALAMABATQAAALgFALQgFALgJAJQgIAIgLAGQgLAGgLAAQgKAAgHgDg");
	this.shape_69.setTransform(192.8409,548.55);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgYAyQgHgFgGgFQgGgHgDgIQgEgHgBgIQgBgMAEgKQAFgKAIgJQAJgIAKgGQAKgFAKgCIAEAAIADAAQASAAAMAMQALAMABATQAAALgFALQgFALgJAJQgIAIgLAGQgLAGgLAAQgKAAgHgDg");
	this.shape_70.setTransform(180.5409,548.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgYAyQgHgFgGgFQgGgHgDgIQgEgHgBgIQgBgMAEgKQAFgKAIgJQAJgIAKgGQAKgFAKgCIAEAAIADAAQASAAAMAMQALAMABATQAAALgFALQgFALgJAJQgIAIgLAGQgLAGgLAAQgKAAgHgDg");
	this.shape_71.setTransform(168.2409,548.55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgcCCIgfgBIAOhcIg7iGIA7ghIAmBmIAOgYIARgbIAQgaIAPgXIAyAgIgWAgIgWAiIgWAiQgLARgMAPIgOBfQgMgBgSAAg");
	this.shape_72.setTransform(143.775,540.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAmBbIhIACIgSAoIg4gIIBwkBIAeACQARAAAPABIArD5IghAGIghAHgAgEAeIAQgBIARgCIgIg5g");
	this.shape_73.setTransform(121.375,540.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhtADIAQihIBHgFIgNCGIBRgGIAKh/IBHAAIgeE/IhFACIAKh8IhRAEIgKB0IhJAJIARihg");
	this.shape_74.setTransform(99.925,537.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC00").s().p("ABACGQgJgGgFgLIgCgJIgCgNIgCgOIgCgJQgLADgMABIgYAAIgRAAIgSAAIgDAHIgDALIgCAJQgBAOgJAKQgKAJgOABQgLgBgJgGQgIgGgEgKIgCgKIAAgLQABgGAEgNIAJgbIALgbIAHgSQAMgdAPgcQAOgcAUgaQAJgNANgIQAMgJAQAAQANAAAKAGQAKAGAGAKQAHAJAEAMIAFAPIAGAZIAGAcIAFAZIADAPIAGAlIAFAmIACAJIACAKQAAAEgBAFIgEAIQgDAHgIAFQgIAFgJAAQgMAAgIgGgAABgXQgHAQgHAPIAIAAIALAAIAJAAIAIgBIAIgBIgFgdIgHgeIgSAeg");
	this.shape_75.setTransform(205.0063,484.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCC00").s().p("Ag+CEQgKgBgIgGQgHgGgEgJQgEgJACgKQACgJAFgHIAKgPIAvg8QAXgfAVggIgIABIgLABIgNABIgHABQgJABgJAAQgJgBgIgDQgMgFgFgJQgGgJAAgLQABgKAHgJQAEgFAFgDQAFgDAGgBQAGgBAFABIALABIAogFQAVgBAUACQAIACAIADQAHADAGAFIAIAJQAEAEACAGQACAHABAHQAAAHgBAHQgDALgFAKQgFAKgHAKIgeAqIggAqIATgCIAUgBQALAAAIAGQAJAGAEAKQADAJgBAJQgCAJgFAHQgGAGgJAEIgIACIgJAAQgVABgWAEIgqAGIgMABIgGAAIgFAAg");
	this.shape_76.setTransform(182.4358,483.9844);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC00").s().p("AgZCNIgRgEQgKgEgJgIQgJgJgDgKQgDgHAAgIIgBgPIACgcIACgcIACgxIABgyIAAgHIAAgHQAAgGACgGQACgGAEgEIAHgGIAIgFIAHgCIALgCIAHgCIAfgGQAQgCAQgBQAJABAHAEQAIAFAEAIQAFAHAAAKQAAAJgFAHQgEAHgIAGQgGAEgIAAIgPACIgPACIgPADIAAAVIgBAVIAJgEIAKgEQAOgCALAHQAKAHAEAMQADALgFANQgCAEgEAEQgDAEgFACQgLAGgMADQgMAEgLABIgBAPIAAAPIAGgBIAGgCIAMgGIALgHIAIgEIAIgBIAFABIAFAAQANAEAGALQAHAKgBAMQgCANgKAJQgJAIgNAGQgNAHgOAEQgOAEgLAAIgRgBg");
	this.shape_77.setTransform(163.7317,483.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFCC00").s().p("Ag9CBIgGgFIgFgHQgFgMgDgNQgCgNgBgNIgBgVIgCgiIgCgmIgBgiIgBgVIACgNQABgGAEgFIAAgCIABgCQADgJAIgHQAHgGAKgBQAOgBAOAAIAbABQAJABAJACIAQAGQAMAFAKAIQAKAHAHALQAGAKACALQADALAAAMIgBAHIgBAIQgDANgHALQgHALgJAKIAGABIAGABQAMAGAGALQAFALgCAMQgDAMgLAIQgEADgFACIgKABIglgCQgSgBgQgEIABAJIAEAJIABAEIAAAEQABAPgIAKQgIAKgNACIgFAAQgKAAgKgGgAgVgmIACAdIAQgNQAGgHAGgIIAFgGIADgHIAAgEIgBgDQgIgGgJgCIgUgBIAAAcg");
	this.shape_78.setTransform(144.4641,483.495);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC00").s().p("AgZCNIgRgEQgKgEgJgIQgJgJgDgKQgDgHAAgIIgBgPIACgcIACgcIACgxIABgyIAAgHIAAgHQAAgGACgGQACgGAEgEIAHgGIAIgFIAHgCIALgCIAHgCIAfgGQAQgCAQgBQAJABAHAEQAIAFAEAIQAFAHAAAKQAAAJgFAHQgEAHgIAGQgGAEgIAAIgPACIgPACIgPADIAAAVIgBAVIAJgEIAKgEQAOgCALAHQAKAHAEAMQADALgFANQgCAEgEAEQgDAEgFACQgLAGgMADQgMAEgLABIgBAPIAAAPIAGgBIAGgCIAMgGIALgHIAIgEIAIgBIAFABIAFAAQANAEAGALQAHAKgBAMQgCANgKAJQgJAIgNAGQgNAHgOAEQgOAEgLAAIgRgBg");
	this.shape_79.setTransform(125.3817,483.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCC00").s().p("AhHB9QgIgGgEgKQgEgJAAgMIAAgMIABgMQABgZgBgZIgBgxIAAgLIAAgPIgBgKIgBgHIgBgHIABgHIACgJIACgGQACgHAFgFQAFgFAHgDQAIgDAHgBIAEABIAEAAIAMAAIALgBQAUAAATAEQAUAEARAKQANAIAJANQAKANACAPIABATQgBAJgDAJQgGASgNAOQgMAOgQAMQgRALgQAIQgGADgGABQgGABgHgBIgBANIAAANIAAACIABABQAEAMgDALQgEALgJAHQgJAHgMABQgMgBgIgGgAgTg1IAAAPIABAQIAAAKIABAAIABgBQAKgFAHgGQAJgGAHgJIAEgHQACgEAAgDIgBgBIgCgBQgFgDgHgCIgOgCIgOgBIABAKg");
	this.shape_80.setTransform(106.375,484.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").p("ASfDkMgk9AAAIAAnHMAk9AAAg");
	this.shape_81.setTransform(167.025,482.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000A0F").s().p("AyeDkIAAnHMAk9AAAIAAHHg");
	this.shape_82.setTransform(167.025,482.775);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").p("EA4HANTMhwNAAAIAA6lMBwNAAAg");
	this.shape_83.setTransform(407.875,590.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F0F7F9").s().p("Eg4GANTIAA6lMBwNAAAIAAalg");
	this.shape_84.setTransform(407.875,590.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AhjB7IgCgYIgBgZIB3iKIhfAAIAHg8IClACIAKAsQgfAkgiAlIg/BHIBvAAIgHA8g");
	this.shape_85.setTransform(1118.6,456.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("Ag5iEICZAFIgEAbIgEAeIhbgDIgFAkIBIgCIgCAeIgCAdIgoADIgmACIgHArIBigGIgCAgIgBAgIhSAEIhTADg");
	this.shape_86.setTransform(1099.65,456.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhlCAIAZj6IALgCIAWgDIAagDIAXgBIAGAAIAGABQAUACAQAJQAQAIALAPQALAOAGAVQAFAVgBAbIgEAdIgGAdQgUApgkAXQgkAXgsAAgAgJhIIgLABIgNCMIADAAIADAAQAOAAAMgGQAKgFAIgKQAIgLAFgOQAFgPADgQQABgNgBgMQgBgMgEgJQgFgIgHgFQgIgGgMAAIgKABg");
	this.shape_87.setTransform(1080.1911,456.175);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ag0h/IAQAAIAZAAIAXgBIgZDDIBjgEIgGAgQgBASgFAOIifACg");
	this.shape_88.setTransform(1048.55,456.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhBCAIgUh+IgVh+IAggDQARAAAPgCIAbCfIAPgpIAPgmIAOgmIAQgqIAfAFIAfAGIheD4g");
	this.shape_89.setTransform(1011.425,455.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhlCAIAZj6IALgCIAWgDIAagDIAXgBIAGAAIAGABQAUACAQAJQAQAIALAPQALAOAGAVQAFAVgBAbIgEAdIgGAdQgUApgkAXQgkAXgsAAgAgJhIIgLABIgNCMIADAAIADAAQAOAAAMgGQAKgFAIgKQAIgLAFgOQAFgPADgQQABgNgBgMQgBgMgEgJQgFgIgHgFQgIgGgMAAIgKABg");
	this.shape_90.setTransform(936.3411,456.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_91.setTransform(1074.125,629.025);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_92.setTransform(1055.4288,628.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgbBxIgcgBIAYipIg0ACIAKg6IBOACIBPADIgLA2IgygBIgMBTIgMBWIgagBg");
	this.shape_93.setTransform(1039.575,628.825);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgrBvQgPgFgKgOQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgPQAOgRAQgIQARgIAQgCIAFgBIAEAAQASAAAQAGQAQAHANANIglAxQgGgJgJgFQgJgGgJABIgHABQgOAFgNAUQgMASgDAbQgDAZAHAMQAIAOAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAPgTALQgTAJgUAAQgQAAgPgHg");
	this.shape_94.setTransform(1024.2279,628.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Agyh0ICGAFIgDAYIgFAZIhPgCIgEAgIA+gCIgBAaIgBAaIgjACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJACg");
	this.shape_95.setTransform(1007.05,628.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgthvIANAAIAWAAIAVgBIgWCqIBWgCIgEAbIgGAdIiMABg");
	this.shape_96.setTransform(991.1,628.825);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AguhvIAPAAIAVAAIAUgBIgVCqIBXgCIgGAbIgEAdIiMABg");
	this.shape_97.setTransform(1186,581.225);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgygIIBijhQAMACAPAAIAcABIAlDaIgdAGIgcAGgAgEAaIAOgBIAQgBIgHgyg");
	this.shape_98.setTransform(1168.85,581.475);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_99.setTransform(1141.375,581.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgxgIIBhjhQAMACAPAAIAcABIAlDaIgcAGIgdAGgAgEAaIAOgBIAPgBIgGgyg");
	this.shape_100.setTransform(1122.3,581.475);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_101.setTransform(1105.325,581.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_102.setTransform(1086.6288,581.275);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgUhwIA7AAIgWDfIgaABIgdABg");
	this.shape_103.setTransform(1071.35,581.275);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAAApIg/BQIgogkIBMhcIgxhPIAygiIAjBDIA3hDIAoAgIhDBSIA2BbIgZARIgaATg");
	this.shape_104.setTransform(1057.075,581.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("Agyh0ICGAFIgDAYIgFAZIhPgCIgEAgIA+gBIgBAZIgBAaIgjACIgiACIgGAmIBWgGIgCAcIgBAcIhHADIhJADg");
	this.shape_105.setTransform(1040.6,581.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AguhvIAPAAIAVAAIAVgBIgWCqIBXgCIgGAbIgEAdIiNABg");
	this.shape_106.setTransform(1024.65,581.225);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ag2BwIgdAAIARhwIAPhwICHADIgEAZIgFAbIhNgCIgHAvIA9ACIgJA0Ig8gCIgFAkIgFAlIgbgBg");
	this.shape_107.setTransform(1011.2,581.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("Agyh0ICGAFIgEAYIgDAZIhQgCIgEAgIA+gBIgBAZIgBAaIgjACIgiACIgFAmIBUgGIgBAcIgBAcIhHADIhJADg");
	this.shape_108.setTransform(995.45,581.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_109.setTransform(978.225,581.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_110.setTransform(950.025,581.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Agxh0ICFAFIgEAYIgDAZIhQgCIgEAgIA+gBIgBAZIgCAaIgiACIgiACIgFAmIBUgGIgBAcIgBAcIhHADIhJADg");
	this.shape_111.setTransform(933.2,581.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgrBvQgPgFgKgOQgLgNgEgUQgFgUADgcQAEgeAKgYQAKgXANgPQAOgRAQgIQARgIAQgCIAFgBIAEAAQASAAAQAGQAQAHANANIglAxQgGgKgJgEQgJgFgJAAIgHAAQgOAGgNAUQgMASgDAbQgDAZAHAMQAIANAMACIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAPgTALQgTAJgUAAQgQAAgPgHg");
	this.shape_112.setTransform(918.5779,581.25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAhBPIg+ADIgQAjIgygIIBijhQANACAOAAIAcABIAmDaIgeAGIgdAGgAgEAaIAOgBIAQgBIgIgyg");
	this.shape_113.setTransform(899.15,581.475);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhChuIA4gEIgIBcIAtgGIAHhVIA4AAIgUDgIg2AAIAGhTIguACIgIBPIg5AGg");
	this.shape_114.setTransform(882.3,581.425);

	this.respuesta6 = new lib.respuestac();
	this.respuesta6.name = "respuesta6";
	this.respuesta6.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta6, 0, 1, 2);

	this.respuesta5 = new lib.botonb();
	this.respuesta5.name = "respuesta5";
	this.respuesta5.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta5, 0, 1, 2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAaA/IgxACIgNAcIgngGIBOizIAVABIAWABIAeCuIgXAEIgXAFgAgDAVIALgBIANgBIgGgog");
	this.shape_115.setTransform(1230.3,328.325);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhGBZIARiuIAIgCIAPgCIASgCIAQAAIAFAAIADAAQAOACAMAGQALAFAIALQAIAKAEAOQADAPgBATIgCAUIgEAUQgPAdgZAQQgZAQgeAAgAgGgzIgHACIgKBhIADAAIABAAQALAAAHgEQAHgEAGgHQAGgHADgKQAEgKABgMIABgRQgBgJgDgFQgDgGgFgEQgGgEgIAAIgHAAg");
	this.shape_116.setTransform(1216.3361,328.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_117.setTransform(1205.075,328.175);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgiBZQgMgFgIgKQgJgLgEgQQgEgQADgWQADgYAIgTQAIgSALgNQALgNANgHQANgHAMgBIAEgBIAEAAQAPAAAMAGQANAFALAKIgeAoQgFgIgHgEQgHgEgHAAIgGABQgMAEgJAPQgKAPgDAVQgCAVAGAKQAGALAKAAIABAAIACAAQAIAAAJgEQAIgFAIgJIARAjQgKANgQAHQgPAJgQgBQgNAAgLgFg");
	this.shape_118.setTransform(1195.2519,328.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgKBdQgUAAgNgJQgNgIgIgOQgHgOgCgRQgDgRADgRQADgRAHgPQAHgRALgMQALgNAOgHQAPgIARAAQAUABANAHQANAJAHAOQAHAOACAQQACASgCARQgDAQgHARQgGAPgLANQgKAMgOAIQgOAHgPABgAgMgmQgIAJgGAOQgDAJgBAKQAAAKACAJQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgEQAFgCAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_119.setTransform(1180.0126,328.15);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_120.setTransform(1164.875,327.975);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgKBdQgUAAgNgJQgNgIgIgOQgHgOgCgRQgDgRADgRQADgRAHgPQAHgRALgMQALgNAOgHQAPgIARAAQAUABANAHQANAJAHAOQAHAOACAQQACASgCARQgDAQgHARQgGAPgLANQgKAMgOAIQgOAHgPABgAgMgmQgIAJgGAOQgDAJgBAKQAAAKACAJQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgEQAFgCAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_121.setTransform(1149.9126,328.15);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgiBZQgMgFgIgKQgJgLgEgQQgEgQADgWQADgYAIgTQAIgSALgNQALgNANgHQANgHAMgBIAEgBIAEAAQAPAAAMAGQANAFALAKIgeAoQgFgIgHgEQgHgEgHAAIgGABQgMAEgJAPQgKAPgDAVQgCAVAGAKQAGALAKAAIABAAIACAAQAIAAAJgEQAIgFAIgJIARAjQgKANgQAHQgPAJgQgBQgNAAgLgFg");
	this.shape_122.setTransform(1136.3019,328.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgnhcIBqADIgDAUIgDAUIg/gCIgEAaIAygCIgBAVIgBAUIgcACIgbACIgEAeIBEgEIgCAWIAAAWIg5ADIg6ACg");
	this.shape_123.setTransform(1122.575,328.175);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AANA+IgWglIgGAAIgFAAIgEAgIgDAfIgWABIgXABIASiwIAkgIQARgDAOAAQAKAAAJABQAVAGALAOQAKAPgDAbQgCASgIAMQgIALgNAIIAhA2IgSAOIgUAPIgWgkgAgDg2IgJABIgBATIgCASIAHAAIALAAQAGgBAFgCQAFgBADgEQADgDACgGQACgJgEgFQgEgFgJgCIgEgBIgEAAIgHABg");
	this.shape_124.setTransform(1108.825,328.275);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_125.setTransform(1086.825,327.975);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgKCDQgTAAgOgIQgNgJgHgNQgIgOgCgRQgCgRACgSQADgRAHgQQAHgPALgMQALgNAPgHIADgCIgGgKIgKgSIBCg3IAdAnIgSANIgTANIgUAMIAHAAQATAAANAIQANAJAIAOQAHANACAQQACASgDARQgDARgHAQQgGAQgKANQgLAMgOAIQgNAHgQAAgAgLAAQgIAJgGANQgDAKgBALQgBAKACAJQACAJAFAGQAFAGAKABIABAAIACAAQAEAAAFgDQAFgCAEgFQAEgFADgGIAFgOQADgKAAgJQAAgKgCgIQgCgIgEgFQgFgGgHgBIgCAAIgCAAQgJAAgIAIgAgQgvIAEAHIASgMIAAgBQgLABgLAFIAAAAgAgQgvQALgFALgBIAAABIgSAMIgEgHg");
	this.shape_126.setTransform(1071.9456,324.275);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_127.setTransform(1059.625,328.175);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgiBZQgMgFgIgKQgJgLgEgQQgEgQADgWQADgYAIgTQAIgSALgNQALgNANgHQANgHAMgBIAEgBIAEAAQAPAAAMAGQANAFALAKIgeAoQgFgIgHgEQgHgEgHAAIgGABQgMAEgJAPQgKAPgDAVQgCAVAGAKQAGALAKAAIABAAIACAAQAIAAAJgEQAIgFAIgJIARAjQgKANgQAHQgPAJgQgBQgNAAgLgFg");
	this.shape_128.setTransform(1049.8019,328.15);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgPBaQgSAAgMgGQgMgGgHgLQgHgKgCgPQgCgOADgSIAQhiIArgBIgHAzIgHAyQgDAPAEAHQAEAHALABIABABIACAAQAIAAAGgIQAGgHACgPIAIgzIAHgzIAuACIgIAzIgIAyQgEAkgUAUQgSAUgfAAIgBAAg");
	this.shape_129.setTransform(1035.6306,328.4006);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgWBaIgWAAIATiHIgpABIAIguIA+ABIA/ADIgIArIgpgBIgJBDIgJBEQgKgBgMAAg");
	this.shape_130.setTransform(1023.25,328.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_131.setTransform(1012.325,328.175);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgWBaIgWAAIATiHIgpABIAIguIA+ABIA/ADIgIArIgpgBIgJBDIgJBEQgKgBgMAAg");
	this.shape_132.setTransform(1003.45,328.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgeBdQgKgCgIgFQgIgEgHgGQgGgGgEgHIAPgRIAOgRQAGAMALAFQAMADANAAQAKAAAHgFQAGgEgBgIQAAgEgEgCIgIgFIgMgFIgOgFIgNgHQgGgEgFgFQgEgHgCgIQgCgHACgMQACgNAHgLQAGgKAKgHQAJgHAMgDQALgDALgBIAIABIAIABQALACALAGQAJAGAHAIIgfAmQgCgHgGgEIgKgGQgHgCgFAAQgIAAgFADQgEADgCAGQAAAFAFACIAOAHIAUAHQAKAEAJAGQAIAHAEAJQAFAKgEAQQgCAPgHALQgHALgKAIQgKAHgNAFQgNADgNAAQgKAAgKgBg");
	this.shape_133.setTransform(989.25,328.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_134.setTransform(975.675,327.975);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_135.setTransform(964.425,328.175);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgKBdQgUAAgNgJQgNgIgIgOQgHgOgCgRQgDgRADgRQADgRAHgPQAHgRALgMQALgNAOgHQAPgIARAAQAUABANAHQANAJAHAOQAHAOACAQQACASgCARQgDAQgHARQgGAPgLANQgKAMgOAIQgOAHgPABgAgMgmQgIAJgGAOQgDAJgBAKQAAAKACAJQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgEQAFgCAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_136.setTransform(944.4126,328.15);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAbA/IgyACIgNAcIgogGIBPizIAVABIAWABIAeCuIgXAEIgXAFgAgDAVIALgBIANgBIgGgog");
	this.shape_137.setTransform(920.35,328.325);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_138.setTransform(906.775,327.975);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgKBdQgUAAgNgJQgNgIgIgOQgHgOgCgRQgDgRADgRQADgRAHgPQAHgRALgMQALgNAOgHQAPgIARAAQAUABANAHQANAJAHAOQAHAOACAQQACASgCARQgDAQgHARQgGAPgLANQgKAMgOAIQgOAHgPABgAgMgmQgIAJgGAOQgDAJgBAKQAAAKACAJQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgEQAFgCAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_139.setTransform(891.8126,328.15);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgeBdQgKgCgIgFQgIgEgHgGQgGgGgEgHIAPgRIAOgRQAGAMALAFQAMADANAAQAKAAAHgFQAGgEgBgIQAAgEgDgCIgKgFIgLgFIgOgFIgNgHQgGgEgFgFQgEgHgCgIQgCgHACgMQACgNAHgLQAGgKAKgHQAJgHAMgDQALgDALgBIAIABIAIABQAMACAKAGQAJAGAHAIIgfAmQgCgHgGgEIgKgGQgHgCgFAAQgIAAgFADQgEADgCAGQAAAFAFACIAOAHIAUAHQAKAEAJAGQAIAHAEAJQAFAKgEAQQgCAPgHALQgHALgKAIQgKAHgNAFQgNADgNAAQgKAAgKgBg");
	this.shape_140.setTransform(876.3,328.15);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AANA+IgWglIgGAAIgFAAIgEAgIgDAfIgWABIgXABIASiwIAkgIQARgDAOAAQAKAAAJABQAVAGALAOQAKAPgDAbQgCASgIAMQgIALgNAIIAhA2IgSAOIgUAPIgWgkgAgDg2IgJABIgBATIgCASIAHAAIALAAQAGgBAFgCQAFgBADgEQADgDACgGQACgJgEgFQgEgFgJgCIgEgBIgEAAIgHABg");
	this.shape_141.setTransform(862.225,328.275);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgnhcIBqADIgDAUIgDAUIg/gCIgEAaIAygCIgBAVIgBAUIgcACIgbACIgEAeIBEgEIgCAWIAAAWIg5ADIg6ACg");
	this.shape_142.setTransform(848.775,328.175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("Ag0hTQAQgFAPgCQAPgCAMAAQAQgBANAEQANAFAJAIQAJAHAEAMQAEAMgCARQgEAcgPAPQgQARgXAGQgMACgLAAIgGAAIgFgBIgGA1IgWABIgXABgAgLgyIgEAxIANgBQAGAAAGgDQAGgEAFgEQAEgGACgJQACgHgDgGQgDgGgHgDIgMgBIgHAAIgIABg");
	this.shape_143.setTransform(835.8833,327.95);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAaA/IgyACIgMAcIgngGIBNizIAWABIAWABIAfCuIgYAEIgXAFgAgDAVIALgBIAMgBIgFgog");
	this.shape_144.setTransform(1198.05,289.825);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_145.setTransform(1184.475,289.475);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgPBaQgSAAgMgGQgMgGgHgLQgHgKgCgPQgCgOADgSIAQhiIArgBIgHAzIgHAyQgDAPAEAHQAEAHALABIABABIACAAQAIAAAGgIQAGgHACgPIAIgzIAHgzIAuACIgIAzIgIAyQgEAkgUAUQgSAUgfAAIgBAAg");
	this.shape_146.setTransform(1170.5806,289.9006);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgnhcIBqADIgDAUIgDAUIg/gCIgEAaIAygCIgBAVIgBAUIgcACIgbACIgEAeIBEgEIgCAWIAAAWIg5ADIg6ACg");
	this.shape_147.setTransform(1148.575,289.675);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhGBZIARiuIAIgBIAPgDIASgCIAQgBIAFAAIADABQAOACAMAGQALAFAIALQAIAKAEAPQADAOgBATIgCAUIgEAUQgPAdgZAQQgZARgeAAgAgGgyIgHABIgKBhIADAAIABAAQALAAAHgEQAHgEAGgHQAGgHADgKQAEgKABgLIABgSQgBgIgDgHQgDgFgFgEQgGgEgIAAIgHABg");
	this.shape_148.setTransform(1134.9361,289.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_149.setTransform(1112.925,289.475);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgKCDQgTAAgOgIQgNgJgHgNQgIgOgCgRQgCgRACgSQADgRAHgQQAHgPALgMQALgNAPgHIADgCIgGgKIgKgSIBCg3IAdAnIgSANIgTANIgUAMIAAABIgSAMIgEgHQALgEALgCQgLACgLAEIAEAHIASgMIAAgBIAHAAQATAAANAIQANAJAIAOQAHANACAQQACASgDARQgDARgHAQQgGAQgKANQgLAMgOAIQgNAHgQAAgAgLAAQgIAJgGANQgDAKgBALQgBAKACAJQACAJAFAGQAFAGAKABIABAAIACAAQAEAAAFgDQAFgCAEgFQAEgFADgGIAFgOQADgKAAgJQAAgKgCgIQgCgIgEgFQgFgGgHgBIgCAAIgCAAQgJAAgIAIg");
	this.shape_150.setTransform(1098.0456,285.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_151.setTransform(1085.725,289.675);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_152.setTransform(1074.375,289.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_153.setTransform(1063.125,289.675);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("Ag0hTQAQgFAPgCQAPgCAMgBQAQAAANAFQANADAJAIQAJAIAEAMQAEAMgCARQgEAcgPAPQgQARgXAGQgMACgLgBIgGAAIgFAAIgGA1IgWABIgXAAgAgLgyIgEAxIANgBQAGAAAGgDQAGgEAFgFQAEgEACgKQACgHgDgGQgDgGgHgDIgMgBIgHAAIgIABg");
	this.shape_154.setTransform(1052.1333,289.45);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgKBcQgUAAgNgIQgNgJgIgNQgHgOgCgRQgDgRADgRQADgQAHgQQAHgQALgNQALgNAOgHQAPgIARABQAUAAANAHQANAJAHAOQAHANACARQACASgCAQQgDARgHARQgGAQgLAMQgKAMgOAIQgOAHgPAAgAgMgmQgIAJgGAOQgDAKgBAJQAAALACAIQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgDQAFgDAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_155.setTransform(1037.2626,289.65);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAaA/IgxACIgNAcIgngGIBOizIAVABIAWABIAfCuIgYAEIgXAFgAgDAVIALgBIANgBIgGgog");
	this.shape_156.setTransform(1013.2,289.825);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgkhZIALAAIARAAIAQAAIgRCHIBFgBIgDAWIgFAWIhvABg");
	this.shape_157.setTransform(1000.125,289.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AANA+IgWglIgGAAIgFAAIgEAgIgDAfIgWABIgXABIASiwIAkgIQARgDAOAAQAKAAAJABQAVAGALAOQAKAPgDAbQgCASgIAMQgIALgNAIIAhA2IgSAOIgUAPIgWgkgAgDg2IgJABIgBATIgCASIAHAAIALAAQAGgBAFgCQAFgBADgEQADgDACgGQACgJgEgFQgEgFgJgCIgEgBIgEAAIgHABg");
	this.shape_158.setTransform(979.175,289.775);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAaA/IgyACIgMAcIgngGIBNizIAWABIAWABIAfCuIgYAEIgXAFgAgDAVIALgBIAMgBIgFgog");
	this.shape_159.setTransform(963.95,289.825);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_160.setTransform(950.375,289.475);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgKBcQgUAAgNgIQgNgJgIgNQgHgOgCgRQgDgRADgRQADgQAHgQQAHgQALgNQALgNAOgHQAPgIARABQAUAAANAHQANAJAHAOQAHANACARQACASgCAQQgDARgHARQgGAQgLAMQgKAMgOAIQgOAHgPAAgAgMgmQgIAJgGAOQgDAKgBAJQAAALACAIQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgDQAFgDAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_161.setTransform(935.4126,289.65);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_162.setTransform(923.175,289.675);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgiBZQgMgFgIgKQgJgLgEgQQgEgQADgWQADgYAIgTQAIgSALgNQALgNANgHQANgHAMgBIAEgBIAEAAQAPABAMAFQANAFALAKIgeAnQgFgHgHgEQgHgEgHAAIgGABQgMAEgJAQQgKAPgDAVQgCATAGALQAGAKAKABIABAAIACAAQAIABAJgFQAIgFAIgJIARAjQgKANgQAHQgPAIgQAAQgNABgLgGg");
	this.shape_163.setTransform(913.3519,289.65);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_164.setTransform(898.925,289.475);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgnhcIBqADIgDAUIgDAUIg/gCIgEAaIAygCIgBAVIgBAUIgcACIgbACIgEAeIBEgEIgCAWIAAAWIg5ADIg6ACg");
	this.shape_165.setTransform(885.475,289.675);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AhGBYIgXgBIAMhWIANhWIAbgBQANgBAOgBIAOBeIAphbIAbgBIAbgCIgJBWIgJBWIgKAAIgNABIgMABIgLAAIAJhRIgIATIgGAPIgFAOIgIAUIgTgBIgVgBIgKhDIgLBVIgWgBg");
	this.shape_166.setTransform(870.1,289.8);

	this.respuesta4 = new lib.respuestaa();
	this.respuesta4.name = "respuesta4";
	this.respuesta4.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta4, 0, 1, 2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgSAlQgFgDgFgEQgEgFgCgFQgDgGgBgHQgBgIADgHQAEgIAGgHQAGgGAIgEQAIgEAHgCIADAAIACAAQAOAAAIAJQAJAJABAOQAAAIgEAJQgEAIgGAHQgHAGgIAFQgIAEgIAAQgHAAgGgDg");
	this.shape_167.setTransform(718.5464,621.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgLBkQgVgBgOgJQgOgJgJgPQgIgPgCgSQgCgSADgTQADgRAHgSQAIgRALgNQAMgNAQgIQAQgIASAAQAVAAAOAJQAOAIAIAPQAIAPACATQACASgDARQgDATgHARQgHARgLANQgMAOgOAIQgPAJgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAJQADAKAFAGQAGAHAKABIABAAIACAAQAFAAAFgCQAGgDAEgFIAHgMQAEgIACgHQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_168.setTransform(706.0582,615.35);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBIIgLBIIgWAAg");
	this.shape_169.setTransform(692.425,615.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAAAkIg2BEIgjgfIBChPIgqhDIArgeIAeA5IAug5IAjAbIg5BIIAtBNIgUAPIgXAQg");
	this.shape_170.setTransform(677.6,615.325);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIAAAYIg+ADIg+ADg");
	this.shape_171.setTransform(663.45,615.375);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBIIgLBIIgWAAg");
	this.shape_172.setTransform(651.875,615.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgSCSIBJgCIgDAXIgFAZIh3ABg");
	this.shape_173.setTransform(629.15,615.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIAAAXIgCAVIgdACIgeACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_174.setTransform(616.35,615.375);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_175.setTransform(601.76,615.375);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAkA5IgUAQIgWAQIgXgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_176.setTransform(577.6,615.475);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgLBkQgVgBgOgJQgOgJgJgPQgIgPgCgSQgCgSADgTQADgRAHgSQAIgRALgNQAMgNAQgIQAQgIASAAQAVAAAOAJQAOAIAIAPQAIAPACATQACASgDARQgDATgHARQgHARgLANQgMAOgOAIQgPAJgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAJQADAKAFAGQAGAHAKABIABAAIACAAQAFAAAFgCQAGgDAEgFIAHgMQAEgIACgHQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_177.setTransform(561.5582,615.35);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBIIgLBIIgWAAg");
	this.shape_178.setTransform(547.925,615.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_179.setTransform(533.3969,615.625);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_180.setTransform(516.3,615.525);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgSCSIBKgCIgFAXIgEAZIh3ABg");
	this.shape_181.setTransform(493.85,615.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBJgEIgCAXIgBAYIg9ADIg+ADg");
	this.shape_182.setTransform(481.05,615.375);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_183.setTransform(466.46,615.375);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAIhWIAXAAIAZAAIgVC+IgsABIgjheIgFAvIgEAtIgyAGg");
	this.shape_184.setTransform(442.85,615.15);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgKCNQgWgBgOgJQgOgJgJgPQgIgOgCgTQgCgSADgTQACgSAIgRQAIgQALgOQAMgNAQgIIADgCIAFAIIATgNIABgBIAGAAQAVAAAOAJQAOAJAIAPQAIAOACASQACASgDATQgDASgHARQgIASgLANQgKANgPAIQgPAJgRAAgAgNAAQgIAJgGAOQgEALgBALQAAAMABAJQADAJAFAHQAGAGAKACIABAAIACAAQAFAAAGgDQAFgDAEgFIAHgMIAGgPQADgKAAgLQAAgKgCgJQgCgJgFgFQgFgGgIgBIgBAAIgDAAQgKAAgJAJgAgSgzQAMgFANgBIgBABIgTANIgFgIgAgSgzIAAAAgAgYg9IgKgUIBGg7IAfAqIgTAOIgVAOIgUANQgNABgMAFIgGgKg");
	this.shape_185.setTransform(426.9,611.225);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgRhfIAyAAIgRC+IgYABIgYAAg");
	this.shape_186.setTransform(413.7,615.35);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhWIAXAAIAZAAIgVC+IgsABIgjheIgFAvIgEAtIgyAGg");
	this.shape_187.setTransform(401.55,615.15);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgRhfIAyAAIgSC+IgXABIgYAAg");
	this.shape_188.setTransform(389.5,615.35);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_189.setTransform(377.7481,615.125);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgLBkQgVgBgOgJQgOgJgJgPQgIgPgCgSQgCgSADgTQADgRAHgSQAIgRALgNQAMgNAQgIQAQgIASAAQAVAAAOAJQAOAIAIAPQAIAPACATQACASgDARQgDATgHARQgHARgLANQgMAOgOAIQgPAJgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAJQADAKAFAGQAGAHAKABIABAAIACAAQAFAAAFgCQAGgDAEgFIAHgMQAEgIACgHQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_190.setTransform(361.8082,615.35);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_191.setTransform(337.3969,615.625);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_192.setTransform(311.85,615.525);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_193.setTransform(298.05,615.375);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_194.setTransform(283.46,615.375);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgRhfIAyAAIgRC+IgYABIgYAAg");
	this.shape_195.setTransform(271.4,615.35);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAcBEIg0ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_196.setTransform(249.6,615.525);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASgBIgTCSIBKgCIgEAXIgEAZIh4ABg");
	this.shape_197.setTransform(235.6,615.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGATgDQARgDAQAAQALAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgWAQIgXgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_198.setTransform(213.1,615.475);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_199.setTransform(196.75,615.525);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_200.setTransform(181.81,615.375);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgSCSIBKgCIgFAXIgEAZIh3ABg");
	this.shape_201.setTransform(167.15,615.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAdBEIg1ACIgOAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_202.setTransform(152.45,615.525);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_203.setTransform(138.3481,615.125);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_204.setTransform(122.875,615.325);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_205.setTransform(109.05,615.375);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgDAjIgEAiIgYABIgZABIAUi9QAUgGATgDQARgDAPAAQALAAAKABQAXAGALAQQAMAQgEAcQgCAUgJANQgJAMgNAIIAkA5IgVAQIgVAQIgYgmgAgEg6IgJABIgCAUIgBAUIAHAAIAMAAQAHgBAFgCQAFgCADgDQAEgEABgHQADgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_206.setTransform(94.35,615.475);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAdBEIg2ACIgOAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_207.setTransform(609.6,574.425);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AANBDIgXgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgBAUIgCAUIAHAAIAMAAQAGgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_208.setTransform(594.55,574.375);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_209.setTransform(578.2,574.425);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_210.setTransform(564.0981,574.025);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASAAQAVAAAOAKQAOAJAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGQAEgFADgGQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_211.setTransform(539.7082,574.25);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgXBgQgNABgLgBIAViRIgtABIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_212.setTransform(526.075,574.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAHhWIAYAAIAZgBIgWDAIgrABIgkhfIgEAwIgFAtIgxAFg");
	this.shape_213.setTransform(511.3,574.05);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg+ADIg+ADg");
	this.shape_214.setTransform(496.85,574.275);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgRhgIAyAAIgRDAIgYAAIgYABg");
	this.shape_215.setTransform(485.8,574.25);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AhMBeIgYgBIANhcIAOhdIAcgBIAdgBIARBkIArhiIAcgBIAdgBIgJBbIgKBdIgLAAIgNABIgNABIgMAAIAKhXIgJAVIgGAPIgGAQIgJAVIgUgBIgVgBIgMhJIgMBcIgYgBg");
	this.shape_216.setTransform(471.375,574.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgQhgIAxAAIgSDAIgWAAIgZABg");
	this.shape_217.setTransform(457.3,574.25);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_218.setTransform(446.8019,574.225);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASAAQAVAAAOAKQAOAJAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_219.setTransform(430.4582,574.25);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhWIAXAAIAZgBIgVDAIgsABIgjhfIgFAwIgEAtIgyAFg");
	this.shape_220.setTransform(414.25,574.05);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASAAQAVAAAOAKQAOAJAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_221.setTransform(398.2082,574.25);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_222.setTransform(383.6519,574.225);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASAAIgTCRIBKgCIgEAXIgEAYIh4ABg");
	this.shape_223.setTransform(360.25,574.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIgBAXIAAAYIg9ADIg/ADg");
	this.shape_224.setTransform(347.45,574.275);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_225.setTransform(332.86,574.275);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_226.setTransform(308.05,574.425);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg9ADIg/ADg");
	this.shape_227.setTransform(294.25,574.275);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AANBDIgXgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQAMAQgEAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgBAUIgCAUIAHAAIAMAAQAGgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_228.setTransform(279.55,574.375);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAcBgIg1ABIgNAfIgrgHIBSi9IgFgMIA5gvIAaAiIgRALIgSANIACAAIAEAAIAgC6IgZAGIgYAFgAgDAzIAMgCIANgBIgGgrg");
	this.shape_229.setTransform(263.2,571.65);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_230.setTransform(239.05,574.425);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_231.setTransform(224.11,574.275);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAcBEIg1ACIgOAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_232.setTransform(207.75,574.425);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhWIAYAAIAZgBIgWDAIgrABIgkhfIgEAwIgFAtIgxAFg");
	this.shape_233.setTransform(193.25,574.05);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgQhgIAxAAIgRDAIgXAAIgZABg");
	this.shape_234.setTransform(181.2,574.25);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AhMBeIgYgBIANhcIAOhdIAcgBIAdgBIARBkIArhiIAcgBIAdgBIgJBbIgKBdIgLAAIgNABIgNABIgMAAIAKhXIgJAVIgGAPIgGAQIgJAVIgUgBIgVgBIgMhJIgMBcIgYgBg");
	this.shape_235.setTransform(166.775,574.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AANBDIgXgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQAMAQgEAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgBAUIgCAUIAHAAIAMAAQAGgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgJgCIgEgBIgFAAIgIABg");
	this.shape_236.setTransform(149.05,574.375);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIgBAXIAAAYIg+ADIg+ADg");
	this.shape_237.setTransform(134.6,574.275);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgXBgQgNABgLgBIAViRIgtABIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_238.setTransform(123.025,574.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIgBAXIAAAYIg+ADIg+ADg");
	this.shape_239.setTransform(108.95,574.275);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_240.setTransform(94.36,574.275);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAHhVIAYAAIAZgBIgWC/IgrAAIgkheIgEAwIgFAtIgxAFg");
	this.shape_241.setTransform(574.75,532.95);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIgBAXIAAAYIg+ADIg+ADg");
	this.shape_242.setTransform(560.3,533.175);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgSAlQgFgCgFgFQgEgFgCgFQgDgHgBgGQgBgIADgIQAEgHAGgGQAGgHAIgEQAIgEAHgCIADAAIACAAQAOAAAIAJQAJAJABAPQAAAHgEAJQgEAIgGAHQgHAGgIAEQgIAFgIAAQgHAAgGgDg");
	this.shape_243.setTransform(540.0464,539.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgSAlQgFgCgFgFQgEgFgCgFQgDgHgBgGQgBgIADgIQAEgHAGgGQAGgHAIgEQAIgEAHgCIADAAIACAAQAOAAAIAJQAJAJABAPQAAAHgEAJQgEAIgGAHQgHAGgIAEQgIAFgIAAQgHAAgGgDg");
	this.shape_244.setTransform(530.7964,539.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgSAlQgFgCgFgFQgEgFgCgFQgDgHgBgGQgBgIADgIQAEgHAGgGQAGgHAIgEQAIgEAHgCIADAAIACAAQAOAAAIAJQAJAJABAPQAAAHgEAJQgEAIgGAHQgHAGgIAEQgIAFgIAAQgHAAgGgDg");
	this.shape_245.setTransform(521.5464,539.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhVIAYAAIAZgBIgWC/IgrAAIgkheIgEAwIgFAtIgxAFg");
	this.shape_246.setTransform(501.5,532.95);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_247.setTransform(487.05,533.175);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_248.setTransform(465.15,533.175);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViRIgtABIAJgxIBDACIBDACIgJAvIgrgCIgKBJIgLBJIgWgBg");
	this.shape_249.setTransform(453.575,533.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_250.setTransform(438.375,533.125);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgRhfIAyAAIgSC/IgXAAIgYAAg");
	this.shape_251.setTransform(426.95,533.15);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_252.setTransform(414.375,533.125);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhVIAXAAIAZgBIgVC/IgsAAIgjheIgFAwIgEAtIgyAFg");
	this.shape_253.setTransform(399.85,532.95);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgRQAIgRALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAOQAIAPACATQACARgDATQgDASgHARQgHASgLAMQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_254.setTransform(383.8082,533.15);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_255.setTransform(369.2519,533.125);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_256.setTransform(344.91,533.175);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_257.setTransform(328.55,533.325);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_258.setTransform(313.61,533.175);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgRhfIAyAAIgRC/IgYAAIgYAAg");
	this.shape_259.setTransform(301.55,533.15);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgEAjIgDAiIgYABIgZABIAUi9QAUgGATgDQARgDAPAAQAMAAAJABQAXAGALAQQAMAQgEAcQgCAUgJANQgJAMgNAIIAkA5IgVAQIgVAQIgYgmgAgEg6IgJABIgCAUIgBAUIAHAAIAMAAQAHgBAFgCQAFgCAEgDQADgEABgHQADgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_260.setTransform(288.85,533.275);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgRQAIgRALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAOQAIAPACATQACARgDATQgDASgHARQgHASgLAMQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_261.setTransform(272.8082,533.15);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViRIgtABIAJgxIBDACIBDACIgJAvIgrgCIgKBJIgLBJIgWgBg");
	this.shape_262.setTransform(259.175,533.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_263.setTransform(244.6469,533.425);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAcBEIg1ACIgOAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_264.setTransform(227.55,533.325);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgCAYIg8ADIg/ADg");
	this.shape_265.setTransform(205.3,533.175);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_266.setTransform(190.71,533.175);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AAdBEIg2ACIgOAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_267.setTransform(165.9,533.325);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViRIgtABIAJgxIBDACIBDACIgJAvIgrgCIgKBJIgLBJIgWgBg");
	this.shape_268.setTransform(153.975,533.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgQhfIAxAAIgSC/IgWAAIgZAAg");
	this.shape_269.setTransform(142.3,533.15);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_270.setTransform(131.8019,533.125);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_271.setTransform(106.7,533.325);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASgBIgTCSIBLgCIgFAYIgEAXIh4ACg");
	this.shape_272.setTransform(92.7,533.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AhYBwIAVjbIAKgCIATgCIAXgDIAUgBIAFAAIAFABQASACAOAIQAOAHAJANQAKAMAFASQAFATgBAXIgDAZQgCANgEANQgSAkgfAUQgfAVgnAAgAgIg/IgKABIgLB6IADAAIACAAQANAAAKgFQAIgFAIgJQAHgJAEgMQAFgNACgOQABgMgBgKQgBgKgEgIQgDgIgHgEQgHgFgLAAIgIABg");
	this.shape_273.setTransform(1119.4591,616.275);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgygIIBijhQAMACAPAAIAcABIAlDaIgcAGIgdAGgAgEAaIAOgBIAPgBIgGgyg");
	this.shape_274.setTransform(1100.35,616.425);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AhYBwIAVjbIAKgCIATgCIAXgDIAUgBIAFAAIAFABQASACAOAIQAOAHAJANQAKAMAFASQAFATgBAXIgDAZQgCANgEANQgSAkgfAUQgfAVgnAAgAgIg/IgKABIgLB6IADAAIACAAQANAAAKgFQAIgFAIgJQAHgJAEgMQAFgNACgOQABgMgBgKQgBgKgEgIQgDgIgHgEQgHgFgLAAIgIABg");
	this.shape_275.setTransform(1082.9091,616.275);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgThwIA5AAIgUDfIgbABIgcABg");
	this.shape_276.setTransform(1043.15,616.225);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AhTByIAUjcIAPgCIAYgDIAYgCIASgBQAQAAANACQAMADAJAHQAJAHAEAKQAEAMgCAPQgCASgHALIgNATQAKAIAHANQAGAOgEAQQgCAOgIANQgJAOgOAKQgPAKgVAHQgTAGgbAAgAgGAUIgPADIgDAnIAFABIAHAAIADAAIACAAQAGgBAEgCIAIgFQAEgCADgEIAEgHQADgHgEgIQgDgHgMgEIgMAEgAABhBQgGABgHADIgDAgQAMgBAHgDQAIgDAFgDQAFgEADgEQADgFAAgEQACgKgRAAIgMABgAhAhqIABAAIAAAAg");
	this.shape_277.setTransform(1028.7333,616.15);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAhBPIg+ADIgQAjIgxgIIBhjhQANACAOAAIAcABIAmDaIgdAGIgeAGgAgEAaIAOgBIAPgBIgHgyg");
	this.shape_278.setTransform(1010.05,616.425);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AhTByIAUjcIAPgCIAYgDIAYgCIASgBQAQAAANACQAMADAJAHQAJAHAEAKQAEAMgCAPQgCASgHALIgNATQAKAIAHANQAGAOgEAQQgCAOgIANQgJAOgOAKQgPAKgVAHQgTAGgbAAgAgGAUIgPADIgDAnIAFABIAHAAIADAAIACAAQAGgBAEgCIAIgFQAEgCADgEIAEgHQADgHgEgIQgDgHgMgEIgMAEgAABhBQgGABgHADIgDAgQAMgBAHgDQAIgDAFgDQAFgEADgEQADgFAAgEQACgKgRAAIgMABgAhAhqIABAAIAAAAg");
	this.shape_279.setTransform(992.8833,616.15);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AhChoQAVgGATgDQASgDAPAAQAUABARAEQAQAFALAKQALAKAFAPQAFAPgDAVQgEAjgUAUQgTAUgdAHQgPACgOABIgHAAIgHgBIgHBCIgcAAIgdACgAgOg/IgGA9IARgBQAIgBAHgDQAIgEAGgGQAFgHADgLQADgJgFgHQgEgIgJgEIgOgBIgJAAIgKABg");
	this.shape_280.setTransform(937.7563,615.95);

	this.respuesta9 = new lib.respuestac();
	this.respuesta9.name = "respuesta9";
	this.respuesta9.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta9, 0, 1, 2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgNCkQgYgBgRgKQgQgLgKgRQgJgQgDgWQgDgVAEgXQADgVAJgUQAJgSANgQQAOgQASgJIAEgCIgGgNIgNgWIBShFIAlAxIgXAPIgYARIgYAQIAHAAQAZAAAQAKQAQAKAKASQAJAQACAVQADAVgEAXQgDAVgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPAAQgKALgHAQQgEANgBANQgBANACALQADALAHAIQAGAHALACIACAAIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgNQAAgMgCgJQgCgLgGgGQgGgHgJgBIgCgBIgDAAQgMAAgKALgAgVg7IAGAJIAWgPIABgBQgPABgOAGIAAAAgAgVg7QAOgGAPgBIgBABIgWAPIgGgJg");
	this.shape_281.setTransform(1118.8829,462.65);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgUhwIA7AAIgVDfIgbABIgdABg");
	this.shape_282.setTransform(1103.5,467.475);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgrBwQgPgHgKgNQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgQQAOgPAQgJQARgJAQgCIAFAAIAEAAQASAAAQAGQAQAHANANIglAxQgGgKgJgEQgJgGgJAAIgHACQgOAGgNASQgMATgDAaQgDAaAHANQAIANAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAQgTAJQgTAKgUAAQgQAAgPgGg");
	this.shape_283.setTransform(1091.2279,467.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AAhBPIg+ADIgQAjIgxgIIBhjhQAMACAPAAIAcABIAlDaIgcAGIgdAGgAgEAaIAOgBIAPgBIgHgyg");
	this.shape_284.setTransform(1071.8,467.675);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgrBwQgPgHgKgNQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgQQAOgPAQgJQARgJAQgCIAFAAIAEAAQASAAAQAGQAQAHANANIglAxQgGgKgJgEQgJgGgJAAIgHACQgOAGgNASQgMATgDAaQgDAaAHANQAIANAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAQgTAJQgTAKgUAAQgQAAgPgGg");
	this.shape_285.setTransform(1056.7779,467.45);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgUhwIA6AAIgUDfIgbABIgdABg");
	this.shape_286.setTransform(1042.4,467.475);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("Ag3BwIgcgBIAQhvIARhwICGADIgFAaIgEAaIhOgDIgGAwIA9ADIgJAzIg8gDIgFAkIgGAmIgbgBg");
	this.shape_287.setTransform(1030.5,467.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgUhwIA7AAIgVDfIgbABIgdABg");
	this.shape_288.setTransform(1017.55,467.475);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AguhvIAPAAIAVAAIAVgBIgWCqIBXgCIgGAbIgEAdIiNABg");
	this.shape_289.setTransform(1003.95,467.425);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AhChoQAVgFATgEQASgDAPAAQAUABARAEQAQAFALAKQALAKAFAPQAFAPgDAVQgEAjgUAUQgTAUgdAHQgPACgOAAIgHAAIgHAAIgHBCIgcAAIgdACgAgOg/IgGA9IARgBQAIgBAHgDQAIgDAGgHQAFgHADgKQADgKgFgHQgEgIgJgEIgOgBIgJAAIgKABg");
	this.shape_290.setTransform(988.6563,467.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AhYBuIgdAAIAQhtIAQhsIAhgCQARAAAQgBIAUB1IAyhyIAhgCIAigBIgKBrIgMBrIgNABIgPABIgPABIgOABIALhmIgKAYIgHATIgHASIgKAYIgYAAIgZgBIgOhWIgNBrIgcgBg");
	this.shape_291.setTransform(968.425,467.65);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgyhzICGAEIgDAYIgFAZIhPgCIgEAgIA+gCIgBAaIgBAaIgjACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJADg");
	this.shape_292.setTransform(949.25,467.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AghBwQgNgEgKgJQgKgHgHgLQgHgKgCgKIAVgSIAWgTQAEAOAIAJQAHAJAIACQAEACAEABQAEgBAEgCQAFgCAEgGQAFgHADgKQAEgLACgRQACgOAAgQQAAgQgCgTIhDAFIACgbIACgcIB0gGIACAZIABAdIAAAgQgBAQgCAPQgFArgQAdQgPAegfALQgFACgFAAIgKABQgNAAgNgFg");
	this.shape_293.setTransform(932.8625,467.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgxhzICFAEIgEAYIgDAZIhQgCIgEAgIA+gCIgBAaIgBAaIgjACIgiACIgFAmIBUgGIgBAcIgBAcIhHAEIhJADg");
	this.shape_294.setTransform(917.7,467.5);

	this.respuesta8 = new lib.botonb();
	this.respuesta8.name = "respuesta8";
	this.respuesta8.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta8, 0, 1, 2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_295.setTransform(1145.225,313.175);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgNCkQgYAAgRgLQgQgKgKgSQgJgRgDgVQgDgWAEgWQADgVAJgTQAJgUANgPQAOgPASgKIAEgCIAGAJIAWgQIABAAIAHAAQAZgBAQALQAQALAKAQQAJARACAVQADAVgEAWQgDAWgJAUQgIAUgNAQQgNAPgRAKQgRAJgUAAgAgPAAQgKAKgHARQgEANgBANQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgDQAHgEAFgGIAIgOQAEgIADgJQADgMAAgNQAAgLgCgLQgCgKgGgGQgGgIgJgBIgCAAIgDAAQgMAAgKALgAgPgyIgGgJQAOgGAPgBIgBAAIgWAQIAAAAgAgbhIIgNgWIBShFIAlAxIgXAPIgYARIgYAQQgPABgOAGIgGgNgAAIhCIAAAAg");
	this.shape_296.setTransform(1126.6329,308.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgUhwIA6AAIgUDfIgbABIgdABg");
	this.shape_297.setTransform(1111.25,313.425);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgrBvQgPgFgKgOQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgPQAOgRAQgIQARgIAQgCIAFgBIAEAAQASAAAQAGQAQAHANANIglAxQgGgJgJgFQgJgGgJABIgHABQgOAFgNAUQgMASgDAbQgDAZAHAMQAIAOAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAPgTALQgTAJgUAAQgQAAgPgHg");
	this.shape_298.setTransform(1064.5279,313.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgUhwIA6AAIgUDfIgbABIgcABg");
	this.shape_299.setTransform(1050.15,313.425);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("Ag3BwIgcAAIAQhwIARhwICGADIgFAaIgEAaIhOgCIgGAvIA9ACIgJA0Ig8gCIgFAkIgGAlIgbgBg");
	this.shape_300.setTransform(1038.25,313.45);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgUhwIA7AAIgVDfIgbABIgdABg");
	this.shape_301.setTransform(1025.3,313.425);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_302.setTransform(1011.075,313.175);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AglBzQgMgCgLgFQgKgFgJgIQgHgHgFgKIASgUIASgWQAHAQAOAFQAPAFAQAAQANgBAIgGQAJgGgCgJQAAgFgFgDIgLgGIgOgGIgRgHQgJgDgIgGQgIgEgGgHQgFgHgDgLQgCgKACgNQADgSAIgNQAJgNAMgIQAMgJAPgEQANgEAPAAIAJAAIAKABQAOAEAMAHQANAGAIALIgmAwQgDgJgHgFQgGgFgIgDQgHgCgHAAQgKAAgGAEQgGAEgBAHQgBAGAHADQAGAEALAEIAZAJQANAFAKAIQALAIAFAMQAGAMgEAVQgDASgIAOQgKAOgMAKQgNAJgQAFQgQAFgQAAQgNAAgMgDg");
	this.shape_303.setTransform(972.95,313.425);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("Agxh0ICFAFIgEAYIgDAZIhQgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgFAmIBUgGIgBAcIgBAcIhHAEIhJACg");
	this.shape_304.setTransform(938.5,313.45);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AhChoQAVgGATgDQASgDAPAAQAUAAARAGQAQAEALAKQALAKAFAPQAFAPgDAVQgEAjgUATQgTAVgdAHQgPACgOAAIgHAAIgHAAIgHBCIgcABIgdABgAgOg/IgGA+IARgBQAIgCAHgDQAIgEAGgGQAFgGADgLQADgKgFgIQgEgHgJgEIgOgBIgJAAIgKABg");
	this.shape_305.setTransform(922.4063,313.15);

	this.respuesta7 = new lib.respuestaa();
	this.respuesta7.name = "respuesta7";
	this.respuesta7.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta7, 0, 1, 2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_306.setTransform(552.975,615.525);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AhSCgIgZidIgaieQASgCAWgBIAogEIAiDHIATgzIASgwIASgvIAUg1IAmAHIAoAHIh2E3g");
	this.shape_307.setTransform(531.05,614.95);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgcigIBTAAIgeE/IgmABIgpABg");
	this.shape_308.setTransform(509.5,615.25);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgnChIgogBIAjjyIhLADIAPhTIBwAEIBwADIgPBOIhHgCIgSB4IgSB6QgQgCgVAAg");
	this.shape_309.setTransform(493.575,615.15);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_310.setTransform(466.925,615.525);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgnChIgogBIAjjyIhLADIAPhTIBwAEIBwADIgPBOIhHgCIgSB4IgSB6QgQgCgVAAg");
	this.shape_311.setTransform(447.075,615.15);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AhhiLIBQgeIA5CcIAMiOIAoAAIApgCIgjFAIhJABIg7idIgIBPIgIBLIhSAJg");
	this.shape_312.setTransform(422.425,614.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AhHilIC/AFIgFAjQgCATgEASIhxgEIgGAuIBZgCIgCAlIgCAkIgyADIgxAEIgHA2IB5gIIgBAnIgCAoIhmAFIhoAFg");
	this.shape_313.setTransform(398.4,615.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("Ah+CeIgqgCIAXibIAXiaIAvgCQAYAAAYgCIAcCoIBIikIAwgDIAwgBIgPCYIgRCaIgTABIgVABIgWACIgUACIARiSIgPAiIgKAaIgKAaIgPAjIgigBIgkgBIgTh6IgUCYIgnAAg");
	this.shape_314.setTransform(370.925,615.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgcChQgggBgVgLQgWgKgMgTQgNgTgDgaQgDgaAFgfIAcivIBOgCIgNBaIgNBaQgFAbAHANQAIAMATADIACAAIADAAQAPAAAKgNQALgNADgbQAIgsAHgvIANhcIBRADIgOBcIgNBbQgIBAgjAkQgiAjg3AAIgCAAg");
	this.shape_315.setTransform(342.7688,615.7003);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgmCmQgUgEgSgLQgRgLgNgTQgMgSgFgbQgGgaAEgjQAGgvARgjQAQgjAXgVQAWgXAbgKQAagLAaAAQAZABAXAHQAXAIATAPIguBFQgKgKgMgGQgMgFgOAAQgOgBgOAHQgMAGgMANQgMANgIATQgJATgDAZQgCAUADAPQADAPAHAKQAGAJAKAFQAJAFALAAIADAAIAEAAIAGgCIAGgCIALgvIgtgDIAShFIBwAFIgNBHIgOBJQgVAZgbAMQgbAMgcAAIgUgBg");
	this.shape_316.setTransform(317.2908,615.25);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAXBvIgohBIgLgBIgJgBIgGA5IgGA5IgoACIgpABIAhk7QAigKAdgFQAfgGAaAAQASAAAPAEQAmAJAUAaQASAbgFAvQgEAhgPAWQgPAUgWAPIA8BeIgiAaIgjAbIgnhAgAgHhiIgPACIgDAiIgDAiIAMAAIAWgCQAKAAAJgEQAIgDAGgGQAGgGACgMQAFgPgIgJQgIgJgQgDIgGgBIgHAAIgOAAg");
	this.shape_317.setTransform(290.3,615.45);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_318.setTransform(263.025,615.525);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_319.setTransform(690.125,548.325);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgcigIBTAAIgeE/IgmACIgpAAg");
	this.shape_320.setTransform(671.1,548.05);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgmCmQgUgEgSgLQgRgLgNgTQgMgTgFgaQgGgaAEgiQAGgxARgiQAQgjAXgWQAWgWAbgKQAagLAaAAQAZAAAXAIQAXAHATARIguBEQgKgKgMgFQgMgHgOAAQgOABgOAGQgMAHgMAMQgMANgIATQgJATgDAZQgCAUADAPQADAPAHAJQAGAKAKAGQAJAEALAAIADAAIAEgBIAGgBIAGgCIALgvIgtgEIAShEIBwAFIgNBHIgOBIQgVAagbAMQgbANgcAAIgUgCg");
	this.shape_321.setTransform(651.8408,548.05);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgEASIhxgEIgGAuIBZgDIgCAlIgCAlIgyAEIgxACIgHA2IB5gHIgCAnIgBAoIhmAFIhoAEg");
	this.shape_322.setTransform(627,548.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgnCiIgogBIAjjyIhLACIAPhSIBwACIBwAEIgPBNIhHgBIgSB4IgSB6QgQgCgVABg");
	this.shape_323.setTransform(607.725,547.95);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_324.setTransform(581.075,548.325);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAWBvIgnhCIgLAAIgJgBIgGA5IgGA5IgoACIgpABIAik7QAggKAfgFQAegGAZABQATAAAPACQAmAKATAaQAUAagGAwQgEAhgPAVQgOAVgXAOIA8BgIgiAaIgjAbIgohBgAgGhiIgQACIgDAiIgEAiIAOAAIAUgBQALgBAIgEQAJgDAGgGQAGgHADgLQAEgOgIgKQgHgJgRgEIgGgBIgHAAIgNABg");
	this.shape_325.setTransform(555.95,548.25);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgnCiIgogBIAjjyIhLACIAPhSIBwACIBwAEIgPBNIhHgBIgSB4IgSB6QgQgCgVABg");
	this.shape_326.setTransform(535.025,547.95);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("Ag2ClQgSgEgPgHQgOgHgMgLQgMgLgGgNIAZgeIAbgeQALAWATAHQAVAIAWAAQAVgCALgIQAMgIgCgNQAAgHgHgFQgGgFgKgEIgUgIQgNgEgMgGQgMgFgMgHQgLgHgJgKQgHgLgEgOQgEgPAEgTQAEgZAMgTQAMgSARgNQARgMAUgGQAVgGAVAAIAOABIANACQAVAFARAJQARAKANAPIg3BEQgFgMgJgHQgKgHgJgEQgLgEgLAAQgNAAgJAGQgIAFgCALQgCAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAIASgGAeQgEAagMAUQgNAUgSANQgTAOgXAHQgXAHgXAAQgSAAgSgEg");
	this.shape_327.setTransform(509.7,548.025);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgEASIhxgEIgHAuIBagDIgCAlIgCAlIgyAEIgwACIgIA2IB5gHIgCAnIgBAoIhmAFIhoAEg");
	this.shape_328.setTransform(486.7,548.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_329.setTransform(447.025,548.325);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AhhiLIBQgeIA5CdIAMiOIAogBIApgBIgjE/IhJABIg7idIgIBPIgIBLIhSAJg");
	this.shape_330.setTransform(422.825,547.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgcChQgggBgVgKQgWgLgMgTQgNgTgDgaQgDgaAFgfIAcivIBOgCIgNBaIgNBaQgFAbAHANQAIAMATADIACAAIADAAQAPAAAKgNQALgNADgbQAIgsAHgvIANhcIBRADIgOBcIgNBbQgIBAgjAkQgiAjg3AAIgCAAg");
	this.shape_331.setTransform(398.0188,548.5003);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("Ag2ClQgSgEgPgHQgOgHgMgLQgMgLgGgNIAZgeIAageQAMAWATAHQAVAIAWAAQAUgCAMgIQAMgIgCgNQAAgHgHgFQgGgFgKgEIgVgIQgMgEgMgGQgMgFgMgHQgMgHgIgKQgHgLgEgOQgEgPAEgTQAEgZAMgTQAMgSARgNQARgMAUgGQAVgGAVAAIAOABIANACQAVAFARAJQASAKAMAPIg2BEQgGgMgJgHQgJgHgKgEQgLgEgLAAQgNAAgJAGQgIAFgCALQgCAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAIASgGAeQgEAagNAUQgMAUgSANQgTAOgXAHQgXAHgXAAQgTAAgRgEg");
	this.shape_332.setTransform(356.8,548.025);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgDASIhygEIgHAuIBagDIgCAlIgCAlIgyAEIgwACIgIA2IB5gHIgCAnIgBAoIhmAFIhoAEg");
	this.shape_333.setTransform(333.8,548.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF0000").s().p("AgXDPQgrgBgegTQgdgSgRgeQgRgegFglQgFglAGgmQAFgnAQgkQAQglAYgcQAYgcAigRQAggSAoAAQAqAAAdATQAcASARAeQARAeAEAmQAFAmgGAmQgFAmgPAlQgPAkgXAcQgYAcgfARQgfASglAAgAgNhvQgNAIgLANQgLAOgJASQgIASgGATQgGAVgBAXQAAAXAGATQAGATANANQAOANAVADIAIAAQAOAAAOgIQANgIAKgOQALgOAIgSQAIgTAFgTQAEgVgBgWQAAgXgFgSQgGgTgMgMQgLgNgTgEIgEAAIgFAAQgOAAgNAIg");
	this.shape_334.setTransform(291.45,544.475);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FF0000").s().p("Ah2ixIBYghIBVDrIAVjbIArgCIAugBIgsGPIgoABIgoABIhbjdIgLBtIgLBtIhcAKg");
	this.shape_335.setTransform(257.775,544.225);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_336.setTransform(218.8173,557.975);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_337.setTransform(203.4173,557.975);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_338.setTransform(188.0173,557.975);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_339.setTransform(152.675,548.325);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AhOjHIAtAAIAsgBIgpE8IChgEIgHAsIgHArIj3ACg");
	this.shape_340.setTransform(126.875,544.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgKCNQgWgBgOgJQgOgJgJgPQgIgOgCgTQgCgSADgTQACgSAIgRQAIgQAMgOQALgNAQgIIADgCIAFAIIATgNIABgBIgBABIgTANIgFgIQAMgFANgBQgNABgMAFIgGgKIgLgUIBHg7IAgAqIgUAOIgVAOIgUANIAGAAQAVAAAOAJQAOAJAIAPQAIAOACASQACASgDATQgDASgHARQgIASgKANQgMANgOAIQgPAJgRAAgAgMAAQgJAJgGAOQgEALgBALQgBAMADAJQACAJAFAHQAGAGAKACIABAAIACAAQAFAAAGgDQAEgDAFgFIAIgMIAFgPQACgKABgLQAAgKgCgJQgCgJgFgFQgFgGgIgBIgCAAIgCAAQgKAAgIAJg");
	this.shape_341.setTransform(1033.25,652.875);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgRhfIAyAAIgSC+IgXABIgYAAg");
	this.shape_342.setTransform(1020.05,657);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgEAcIA1gCIAAAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_343.setTransform(992.9,657.025);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_344.setTransform(1157.95,616.075);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASAAIgSCRIBJgCIgDAXIgFAZIh3AAg");
	this.shape_345.setTransform(1143.95,615.85);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgVBhQgMABgLgBIALhFIgshlIAsgYIAcBMIAKgSIANgUIAMgUIALgRIAlAYIgQAYIgQAaIgQAZIgRAYIgLBHIgXgBg");
	this.shape_346.setTransform(1123.65,615.775);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAcBEIg1ACIgOAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_347.setTransform(1098.4,616.075);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgRhgIAyAAIgRC/IgYABIgYABg");
	this.shape_348.setTransform(1073.2,615.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("Agqg9IAdAAIgIgNIgIgPIA5gvIAaAiIgfAVIgfAVIBQACIgCAVIgEAWIhEgCIgEAaIA1gBIgBAWIgBAXIgdACIgeABIgEAhIBIgFIAAAYIgBAYIg9ADIg/ACg");
	this.shape_349.setTransform(1047.1,612.175);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("Agbg2IBDADIgbBpIg0ABg");
	this.shape_350.setTransform(1027.25,623.275);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgRhgIAyAAIgSC/IgXABIgYABg");
	this.shape_351.setTransform(990.25,615.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgvBgQgMAAgMgBIAOhfIAOhgIBzADIgEAWIgEAWIhCgCIgGApIA0ACIgHAsIg0gCIgEAfIgFAgIgXgBg");
	this.shape_352.setTransform(980.1,615.925);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgQhgIAxAAIgSC/IgWABIgZABg");
	this.shape_353.setTransform(968.95,615.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgXBgQgNABgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBHIgLBJIgWgBg");
	this.shape_354.setTransform(959.375,615.85);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAIhWIAXAAIAZgBIgVC/IgsACIgjhfIgFAvIgEAtIgyAGg");
	this.shape_355.setTransform(944.6,615.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgQhgIAxAAIgSC/IgWABIgZABg");
	this.shape_356.setTransform(919.1,615.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AAdBEIg2ACIgOAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_357.setTransform(1133.9,574.975);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARAAIgSCRIBJgCIgEAYIgEAXIh3ABg");
	this.shape_358.setTransform(1119.9,574.75);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("Agbg2IBDADIgbBpIg0ABg");
	this.shape_359.setTransform(1100.7,582.175);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AAdBEIg2ACIgOAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_360.setTransform(1088.9,574.975);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgxBgIgPheIgPheIAXgDIAZgCIAUB3IALgeIALgdIALgcIAMgfIAXADIAXAFIhHC6g");
	this.shape_361.setTransform(1075.775,574.625);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgRhgIAyAAIgRDAIgXAAIgZABg");
	this.shape_362.setTransform(1062.85,574.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgJgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgRALgOQAMgNAQgJQAQgIASAAQAVAAAOAJQAOAKAIAPQAIAOACASQACATgDASQgDASgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAKgHAOQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKACIABAAIACAAQAFgBAFgDQAGgCAEgGIAHgMQAEgHACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_363.setTransform(1013.6082,574.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AAAAkIg2BEIgjgfIBChPIgqhDIArgeIAeA5IAug5IAjAbIg5BIIAuBNIgVAPIgXAQg");
	this.shape_364.setTransform(982.7,574.775);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_365.setTransform(944.75,574.975);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASAAIgSCRIBJgCIgDAYIgFAXIh4ABg");
	this.shape_366.setTransform(930.75,574.75);

	this.respuesta12 = new lib.respuestac();
	this.respuesta12.name = "respuesta12";
	this.respuesta12.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta12, 0, 1, 2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgBIgHgrg");
	this.shape_367.setTransform(1134.975,505.15);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("Ag4BhIgShfIgRhfIAbgCIAcgDIAXB5IANggIANgcIAMgdIAOggIAaAFIAbADIhRC8g");
	this.shape_368.setTransform(1119.875,504.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgThgIA5AAIgUDAIgaABIgdAAg");
	this.shape_369.setTransform(1104.95,504.975);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgbBhIgbAAIAYiSIg0ABIAKgxIBNABIBOADIgKAuIgygBIgMBJIgMBJIgagBg");
	this.shape_370.setTransform(1093.925,504.925);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgBIgHgrg");
	this.shape_371.setTransform(1075.575,505.15);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AhXBfIgdgBIARhdIAPhdIAggCQARABARgCIATBlIAyhiIAggCIAhgBIgJBcIgMBeIgNAAIgPABIgOABIgPAAIAMhYIgLAWIgGAPIgHAQIgKAVIgYgBIgZgBIgNhJIgOBcIgbgBg");
	this.shape_372.setTransform(1056.2,505.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAPBDIgbgnIgHgBIgGAAIgEAjIgEAiIgcABIgdABIAYi/QAXgGAVgDQAUgDARAAQANAAALACQAaAGANAPQAOAQgEAdQgDAUgKANQgKAMgPAJIAoA5IgWAQIgZAQIgcgngAgEg7IgKABIgDAVIgCAUIAIAAIAPAAQAHgBAGgCQAGgCAEgEQAEgDACgHQADgJgFgGQgGgFgKgCIgFgBIgFAAIgJAAg");
	this.shape_373.setTransform(1035.8,505.075);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgMBkQgZAAgQgKQgQgJgKgOQgJgPgDgTQgCgSADgSQADgTAJgRQAJgRANgNQANgOATgIQASgIAVAAQAYAAAQAJQAQAJAKAPQAIAPADASQACATgDASQgEASgIARQgIASgNANQgMAOgRAIQgRAIgUAAgAgPgpQgKAJgHAPQgEALgBAKQgBALADAKQADAJAGAHQAGAGAMACIABAAIADAAQAFAAAGgDQAGgDAFgFQAFgFAEgHQAEgHACgIQADgLABgJQAAgLgCgIQgDgJgFgGQgGgHgJgBIgCAAIgDAAQgLAAgLAKg");
	this.shape_374.setTransform(1017.3203,504.975);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("Ag2BgIgcAAIAQhgIAQhgICFACIgEAWIgFAXIhMgCIgHAoIA9ADIgKAtIg7gDIgFAgIgGAfIgagBg");
	this.shape_375.setTransform(1000.95,505);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AhDhUIA4gSIAnBfIAIhWIAbgBIAdAAIgZDBIgyABIgphgIgFAwIgFAuIg5AFg");
	this.shape_376.setTransform(984.55,504.75);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgThgIA5AAIgUDAIgbABIgcAAg");
	this.shape_377.setTransform(970.7,504.975);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgBIgHgrg");
	this.shape_378.setTransform(945.575,505.15);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgthgIANAAIAWAAIAVAAIgWCSIBVgCQgCALgDANIgEAYIiLABg");
	this.shape_379.setTransform(929.45,504.925);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgYBiIgbAAIAMhGIgzhmIAzgYIAgBNIANgSIAOgUIAPgVIAMgRIArAYIgTAZIgTAaIgSAZIgUAYIgMBIIgagBg");
	this.shape_380.setTransform(1198.95,463.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AAhBEIg+ADIgQAeIgwgHIBgjCIAbACIAbABIAlC8IgcAEIgdAGgAgEAWIAOgBIAPgBIgHgrg");
	this.shape_381.setTransform(1169.875,463.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgqBgQgPgFgKgMQgKgKgFgSQgFgSADgXQAEgaAKgVQAKgTANgOQANgOARgIQAQgHAPgCIAGAAIAEAAQASAAAQAGQAQAFAMAMIgkAqQgGgIgJgFQgJgEgJAAIgHABQgOAFgMARQgMAPgDAXQgEAWAIALQAIALAMABIACAAIACABQAJAAALgFQALgGAJgJIAWAlQgNAOgTAJQgTAIgUAAQgQAAgOgGg");
	this.shape_382.setTransform(1155.0279,463.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgThgIA5AAIgVDAIgZABIgdAAg");
	this.shape_383.setTransform(1140.85,463.525);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AhXBhIAVi9IAKgBIATgDIAWgCIAUgBIAFAAIAFABQARACAOAGQAOAHAKALQAJALAFAPQAFAPgBAVIgDAWQgCALgEALQgRAfgfARQgfASgmAAgAgHg2IgKABIgLBpIACAAIADABQAMgBAKgEQAJgEAHgIQAHgIAEgLQAEgKACgNQABgKgBgJQAAgJgEgHQgEgGgGgEQgHgEgKAAIgIABg");
	this.shape_384.setTransform(1126.3173,463.55);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgMCOQgZgBgQgJQgQgJgKgPQgJgOgDgTQgCgSADgTQADgTAJgRQAJgQANgOQANgNATgIIAEgCIgHgLIgNgUIBRg7IAlAqIgXAOIgYAOIgWAOIgCABIgWANIgFgIQAOgFAPgBQgPABgOAFIAFAIIAWgNIACgBIAGAAQAYgBAQAKQAQAIAKAQQAJAOACASQACASgDATQgEATgIARQgIARgNAOQgMAOgRAHQgRAJgUAAgAgPAAQgKAJgHAPQgEAKgBAMQgBALADAKQADAJAGAHQAGAGAMABIACAAIACAAQAFAAAGgDQAGgCAFgGQAFgFAEgGQAEgIACgIQADgKABgKQAAgLgCgIQgDgJgFgGQgGgGgJgBIgCgBIgDAAQgLABgLAJg");
	this.shape_385.setTransform(1107.9703,459.35);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgThgIA5AAIgVDAIgaABIgcAAg");
	this.shape_386.setTransform(1092.75,463.525);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAQBDIgbgnIgHgBIgHAAIgFAjIgEAiIgbABIgcABIAWi/QAYgGAUgDQAVgDASAAQANAAAKACQAaAGAOAPQANAQgEAdQgDAUgKANQgKAMgQAJIApA5IgXAQIgYAQIgbgngAgEg7IgLABIgBAVIgDAUIAJAAIAOAAQAHgBAGgCQAGgCAEgEQAEgDACgHQADgJgGgGQgFgFgLgCIgEgBIgFAAIgJAAg");
	this.shape_387.setTransform(1078.15,463.625);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgxhkICEAEIgDAVIgEAWIhPgCIgEAcIA+gCIgCAXIgBAWIgiABIgiACIgFAhIBUgFIgCAYIgBAYIhGADIhIADg");
	this.shape_388.setTransform(1061.525,463.525);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AhBhaQAUgFATgCQATgDAOAAQAUAAAQAFQAQAEALAIQALAJAFANQAFANgDASQgEAegTARQgTASgdAGQgPACgNAAIgHAAIgHgBIgHA5IgcABIgcABgAgDg3IgKABIgGA1IAQgBQAIgBAHgDQAIgDAFgFQAGgGACgKQADgIgEgGQgEgHgJgDIgOgBIgIAAg");
	this.shape_389.setTransform(1045.6313,463.275);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("Agfg2IBNACIggBqIg7ABg");
	this.shape_390.setTransform(1021.775,470.975);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AAhBEIg+ADIgQAeIgwgHIBgjCIAbACIAbABIAlC8IgcAEIgdAGgAgEAWIAOgBIAPgBIgHgrg");
	this.shape_391.setTransform(1008.175,463.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("Ag4BhIgShgIgRhfIAbgCIAcgBIAXB3IANgeIANgdIAMgdIAOgfIAaADIAbAFIhRC8g");
	this.shape_392.setTransform(993.075,463.35);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgThgIA5AAIgUDAIgaABIgdAAg");
	this.shape_393.setTransform(978.15,463.525);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgbBhIgbAAIAYiSIg0ABIAKgxIBNABIBOADIgKAuIgygBIgMBJIgMBJIgagBg");
	this.shape_394.setTransform(967.125,463.475);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgThgIA5AAIgVDAIgaABIgcAAg");
	this.shape_395.setTransform(953.7,463.525);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AglBkQgMgDgKgEQgLgEgIgHQgIgGgEgJIARgRIATgTQAHAOAOAEQAOAFAQAAQANgBAIgFQAIgFgBgIQAAgFgFgCQgEgDgHgDIgOgFIgRgGQgIgDgIgEQgIgEgGgGQgFgGgDgJQgCgJACgMQADgPAIgLQAJgLALgIQAMgHAOgEQAOgDAPAAIAJAAIAKABQAOADAMAGQAMAGAIAJIglApQgEgHgGgFQgHgEgHgCQgHgCgIAAQgJAAgGADQgFADgCAHQgBAEAHAEQAGADAKADIAZAIQANAEALAHQAKAHAFAKQAGALgEASQgDAQgIAMQgJAMgNAIQgMAJgQAEQgQAEgQAAQgNAAgMgCg");
	this.shape_396.setTransform(939.225,463.525);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgMBkQgZAAgQgKQgQgJgKgOQgJgPgDgTQgCgSADgSQADgTAJgRQAJgRANgNQANgOATgIQASgIAVAAQAYAAAQAJQAQAJAKAPQAIAPADASQACATgDASQgEASgIARQgIASgNANQgMAOgRAIQgRAIgUAAgAgPgpQgKAJgHAPQgEALgBAKQgBALADAKQADAJAGAHQAGAGAMACIABAAIADAAQAFAAAGgDQAGgDAFgFQAFgFAEgHQAEgHACgIQADgLABgJQAAgLgCgIQgDgJgFgGQgGgHgJgBIgCAAIgDAAQgLAAgLAKg");
	this.shape_397.setTransform(921.4703,463.525);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AhBhaQAUgFATgCQATgDAOAAQAUAAAQAFQAQAEALAIQALAJAFANQAFANgDASQgEAegTARQgTASgdAGQgPACgNAAIgHAAIgHgBIgHA5IgcABIgcABgAgDg3IgKABIgGA1IAQgBQAIgBAHgDQAIgDAFgFQAGgGACgKQADgIgEgGQgEgHgJgDIgOgBIgIAAg");
	this.shape_398.setTransform(903.2313,463.275);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AAAAkIg+BEIgogeIBLhQIgwhEIAxgdIAjA4IA1g4IApAbIhCBIIA0BOIgXAPIgaAPg");
	this.shape_399.setTransform(885.85,463.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgxhkICEAEIgDAVIgEAWIhPgCIgEAcIA+gCIgCAXIgBAWIgiABIgiACIgFAhIBUgFIgCAYIgBAYIhGADIhIADg");
	this.shape_400.setTransform(869.575,463.525);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgCIgHgqg");
	this.shape_401.setTransform(1145.675,422.25);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgthgIANAAIAWAAIAUAAIgVCSIBVgCQgCALgCANIgGAYIiJABg");
	this.shape_402.setTransform(1129.55,422.025);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("Agfg2IBNACIggBqIg7ABg");
	this.shape_403.setTransform(1107.475,429.525);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgCIgHgqg");
	this.shape_404.setTransform(1093.875,422.25);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("Ag4BhIgShgIgRheIAbgCIAcgDIAXB5IANggIANgcIAMgcIAOghIAaAFIAbADIhRC8g");
	this.shape_405.setTransform(1078.725,421.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgThgIA5AAIgVDAIgZABIgdAAg");
	this.shape_406.setTransform(1063.85,422.075);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgbBhIgbAAIAYiSIg0ABIAKgxIBNABIBOADIgKAuIgygBIgMBJIgMBJIgagBg");
	this.shape_407.setTransform(1052.825,422.025);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgCIgHgqg");
	this.shape_408.setTransform(1034.425,422.25);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AAPBDIgbgnIgHgBIgGAAIgFAjIgDAiIgcABIgcABIAWi/QAXgGAVgDQAWgDAQAAQAOAAAKACQAaAGANAPQAOAQgEAdQgDAUgKANQgKAMgQAJIAqA5IgYAQIgYAQIgcgngAgEg7IgKABIgCAVIgDAUIAIAAIAPAAQAHgBAGgCQAGgCAEgEQAEgDACgHQADgJgFgGQgFgFgMgCIgEgBIgFAAIgJAAg");
	this.shape_409.setTransform(1017.1,422.175);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AAPBDIgbgnIgHgBIgGAAIgFAjIgDAiIgcABIgdABIAXi/QAXgGAWgDQAUgDARAAQAOAAAKACQAaAGANAPQAOAQgEAdQgDAUgKANQgKAMgPAJIApA5IgXAQIgZAQIgcgngAgEg7IgKABIgCAVIgDAUIAIAAIAPAAQAHgBAGgCQAGgCAEgEQAEgDACgHQADgJgFgGQgFgFgMgCIgEgBIgFAAIgJAAg");
	this.shape_410.setTransform(999,422.175);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgCIgHgqg");
	this.shape_411.setTransform(980.225,422.25);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AhDhUIA4gSIAnBfIAIhWIAbgBIAdAAIgYDBIgzABIgphgIgFAwIgFAuIg5AFg");
	this.shape_412.setTransform(963.5,421.85);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AAhBFIg+ABIgQAfIgwgHIBgjCIAbABIAbABIAlC8IgcAGIgdAFgAgEAXIAOgBIAPgCIgHgqg");
	this.shape_413.setTransform(934.925,422.25);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgthgIAOAAIAVAAIAVAAIgWCSIBWgCQgEALgCANIgEAYIiLABg");
	this.shape_414.setTransform(918.8,422.025);

	this.respuesta11 = new lib.botonb();
	this.respuesta11.name = "respuesta11";
	this.respuesta11.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta11, 0, 1, 2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_415.setTransform(1168.9019,338.725);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAcBfIg1ACIgNAfIgrgHIBSi9IgFgLIA5gwIAaAiIgRALIgTANIADAAIAEABIAgC6IgYAEIgZAGgAgDAyIAMgBIANgBIgGgrg");
	this.shape_416.setTransform(1131,336.15);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AhMBfIgYgCIANhdIAOhbIAcgBIAdgCIARBkIArhhIAcgCIAdgBIgJBcIgKBcIgLAAIgNABIgNABIgMAAIAKhWIgJAUIgGAQIgGAPIgJAVIgUAAIgVgBIgMhKIgMBcIgYAAg");
	this.shape_417.setTransform(1114.225,338.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_418.setTransform(1095.85,338.925);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAXAGALAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgVAQIgYgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_419.setTransform(1080.8,338.875);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgSCSIBJgCIgDAYIgFAXIh3ACg");
	this.shape_420.setTransform(1026.4,338.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgUBhQgNABgLgBIALhFIgshlIAsgYIAcBMIALgSIAMgUIAMgUIALgRIAlAYIgQAYIgQAaIgQAZIgRAYIgLBHIgWgBg");
	this.shape_421.setTransform(1006.1,338.625);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgSQAIgQALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAPQAIAOACATQACARgDATQgDASgHARQgHARgLANQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_422.setTransform(981.1582,338.75);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_423.setTransform(966.6019,338.725);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgRhfIAyAAIgSC+IgXABIgYAAg");
	this.shape_424.setTransform(954.25,338.75);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_425.setTransform(931.5519,338.725);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AAcBfIg1ACIgNAfIgrgHIBSi9IgFgLIA5gwIAaAiIgRALIgSANIACAAIAEABIAgC6IgZAEIgYAGgAgDAyIAMgBIANgBIgGgrg");
	this.shape_426.setTransform(914.9,336.15);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgdACIgEAgIBJgEIgCAXIgBAYIg8ADIg/ADg");
	this.shape_427.setTransform(1182.25,297.675);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("Agag2IBBADIgbBpIgyABg");
	this.shape_428.setTransform(1162.4,305.025);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_429.setTransform(1150.6,297.825);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_430.setTransform(1137.7519,297.625);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgQhfIAxAAIgRC+IgYABIgYAAg");
	this.shape_431.setTransform(1125.4,297.65);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("Agcg9IACAAIgGgLIgGgLIA4gvIAaAiIgZARIgZASIAcAAIgSC/IgXABIgZAAg");
	this.shape_432.setTransform(1103.2,294.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASgBIgTCSIBKgCIgDAXIgFAZIh4ABg");
	this.shape_433.setTransform(1091.4,297.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("Agbg2IBCADIgbBpIgyABg");
	this.shape_434.setTransform(1035.05,305.025);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgxBgIgPheIgPheIAXgDIAZgCIAUB3IALgeIALgdIALgcIAMgfIAXADIAXAFIhHC6g");
	this.shape_435.setTransform(1010.125,297.475);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgQhfIAxAAIgSC+IgWABIgZAAg");
	this.shape_436.setTransform(997.2,297.65);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBIIgLBJIgWgBg");
	this.shape_437.setTransform(987.625,297.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_438.setTransform(971.65,297.825);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAXAGALAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgVAQIgYgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_439.setTransform(956.6,297.775);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgDAjIgEAiIgYABIgZABIAUi9QAUgGATgDQARgDAPAAQAMAAAJABQAXAGALAQQAMAQgEAcQgCAUgJANQgJAMgNAIIAkA5IgVAQIgVAQIgYgmgAgEg6IgJABIgCAUIgCAUIAIAAIAMAAQAHgBAFgCQAFgCAEgDQADgEABgHQADgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_440.setTransform(940.9,297.775);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_441.setTransform(924.55,297.825);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASgBIgSCSIBJgCIgDAXIgFAZIh3ABg");
	this.shape_442.setTransform(871.25,297.6);

	this.respuesta10 = new lib.respuestaa();
	this.respuesta10.name = "respuesta10";
	this.respuesta10.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta10, 0, 1, 2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgjCjIgngBIARhzIhJipIBKgpIAvCAQAJgNAJgRIAUghIAVgiIATgdIA+ApIgcAoIgbArIgcAqQgNAVgPATIgRB3QgQgCgWABg");
	this.shape_443.setTransform(484.6,615.025);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_444.setTransform(448.4173,625.175);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_445.setTransform(433.0173,625.175);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_446.setTransform(417.6173,625.175);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgthaIBvAEIgtCwIhWABg");
	this.shape_447.setTransform(388.9,627.575);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_448.setTransform(375.1173,625.175);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_449.setTransform(359.7173,625.175);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_450.setTransform(344.3173,625.175);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgthaIBvAEIguCwIhVABg");
	this.shape_451.setTransform(315.6,627.575);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_452.setTransform(301.8173,625.175);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_453.setTransform(286.4173,625.175);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_454.setTransform(271.0173,625.175);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgqCeQgKgFgHgHQgHgIgEgKQgFgKgBgLQgBgOAFgOQAGgNALgKQAKgLANgGQANgIANgBIAFgBIADAAQAXAAAOAPQAOAPABAYQAAAPgGAOQgGANgLAMQgLALgOAHQgNAGgOAAQgLAAgKgDgAgSgfQgKgEgHgIQgIgIgEgJQgFgKgBgMQgBgOAGgOQAGgMAKgLQAKgLANgHQAMgHAOgCIAEgBIAEAAQAWAAAPAQQAOAQABAYQAAAOgGAOQgGAOgLAMQgLAKgNAHQgOAHgPAAQgKAAgJgEg");
	this.shape_455.setTransform(716.8673,548.45);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("Ag2ClQgSgEgPgHQgOgHgMgLQgMgLgGgNIAZgeIAageQALAWAVAHQAUAIAWAAQAVgCALgIQAMgIgDgNQABgHgHgFQgGgFgKgEIgVgIQgMgEgMgGQgNgFgLgHQgMgHgHgKQgJgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAUgGQAUgGAWAAIAOABIANACQAVAFARAJQASAKAMAPIg2BEQgGgMgJgHQgJgHgKgEQgLgEgLAAQgNAAgJAGQgJAFgBALQgCAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAIASgGAeQgEAagNAUQgMAUgSANQgTAOgXAHQgXAHgXAAQgSAAgSgEg");
	this.shape_456.setTransform(695.75,548.025);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AgTClQgjAAgXgPQgYgQgOgYQgNgYgEgfQgEgeAFgfQAFgeAMgcQANgdATgXQAUgWAagNQAbgNAfAAQAiAAAYAOQAXAPANAZQANAZAEAeQADAegFAfQgFAegMAdQgLAdgTAWQgSAWgZAOQgYANgdAAgAgWhFQgOAQgLAZQgFASgCARQgBATADAPQAEAQAKAKQAJALAQADIADAAIADAAQAJAAAIgFQAJgFAHgIQAHgJAGgLQAFgMAEgNQAEgRABgRQAAgRgDgOQgEgPgIgKQgIgKgNgDIgDAAIgEAAQgRAAgPAQg");
	this.shape_457.setTransform(670.0529,548.05);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgcigIBTAAIgdE/IgnACIgpAAg");
	this.shape_458.setTransform(648.2,548.05);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AAXBvIgohCIgLAAIgJgBIgGA5IgGA5IgoACIgpABIAhk7QAigKAdgFQAfgGAaABQASAAAPACQAmAKAUAaQASAagFAwQgEAhgPAVQgPAVgWAOIA8BgIgiAaIgjAbIgnhBgAgHhiIgPACIgDAiIgDAiIAMAAIAWgBQAKgBAJgEQAIgDAGgGQAGgHACgLQAFgOgIgKQgHgJgRgEIgGgBIgHAAIgOABg");
	this.shape_459.setTransform(627,548.25);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AAWBvIgnhCIgLAAIgJgBIgGA5IgGA5IgoACIgpABIAhk7QAigKAdgFQAfgGAZABQATAAAPACQAmAKAUAaQASAagFAwQgEAhgPAVQgPAVgWAOIA8BgIgiAaIgjAbIgohBgAgHhiIgPACIgDAiIgDAiIAMAAIAWgBQAKgBAJgEQAIgDAGgGQAGgHACgLQAEgOgHgKQgIgJgQgEIgGgBIgHAAIgOABg");
	this.shape_460.setTransform(574.6,548.25);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgDASIhzgEIgGAuIBagDIgCAlIgCAlIgxAEIgyACIgHA2IB6gHIgCAnIgCAoIhmAFIhoAEg");
	this.shape_461.setTransform(550.55,548.1);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_462.setTransform(492.375,547.975);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("Ag2ClQgRgEgQgHQgPgHgLgLQgMgLgGgNIAageIAageQALAWATAHQAVAIAXAAQAUgCALgIQAMgIgCgNQgBgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgMgFgMgHQgLgHgJgKQgHgLgEgOQgEgPAEgTQAEgZAMgTQAMgSARgNQARgMAUgGQAVgGAVAAIAOABIAOACQAUAFARAJQARAKANAPIg3BEQgFgMgJgHQgJgHgKgEQgLgEgLAAQgNAAgJAGQgIAFgDALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAIASgGAeQgEAagMAUQgNAUgTANQgRAOgXAHQgYAHgXAAQgTAAgRgEg");
	this.shape_463.setTransform(455.15,548.025);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgTClQgjAAgXgPQgYgQgOgYQgNgYgEgfQgEgeAFgfQAFgeAMgcQANgdATgXQAUgWAagNQAbgNAfAAQAiAAAYAOQAXAPANAZQANAZAEAeQADAegFAfQgFAegMAdQgLAdgTAWQgSAWgZAOQgYANgdAAgAgWhFQgOAQgLAZQgFASgCARQgBATADAPQAEAQAKAKQAJALAQADIADAAIADAAQAJAAAIgFQAJgFAHgIQAHgJAGgLQAFgMAEgNQAEgRABgRQAAgRgDgOQgEgPgIgKQgIgKgNgDIgDAAIgEAAQgRAAgPAQg");
	this.shape_464.setTransform(429.4529,548.05);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_465.setTransform(403.275,547.975);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgcigIBTAAIgdE/IgnACIgpAAg");
	this.shape_466.setTransform(385.95,548.05);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("Ag2ClQgRgEgPgHQgPgHgMgLQgMgLgGgNIAageIAageQAKAWAVAHQAUAIAXAAQATgCAMgIQAMgIgDgNQAAgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgMgFgMgHQgLgHgJgKQgIgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQAUgGAVAAIAOABIAOACQAUAFASAJQAQAKANAPIg3BEQgFgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAHASgFAeQgEAagMAUQgNAUgTANQgSAOgWAHQgYAHgYAAQgSAAgRgEg");
	this.shape_467.setTransform(344.7,548.025);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgEASIhygEIgFAuIBZgDIgCAlIgCAlIgxAEIgyACIgHA2IB6gHIgCAnIgCAoIhmAFIhoAEg");
	this.shape_468.setTransform(321.7,548.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgDBqIhqAHIgHgjIgIgjIChjgIArgDIAsgCIgcDIIAcgCIgBApIgCArIgmADIgMBWIgrABIgsABgAgXAWIAfgCIAHgqg");
	this.shape_469.setTransform(282.75,545.625);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgEASIhygEIgFAuIBZgDIgCAlIgCAlIgxAEIgyACIgHA2IB6gHIgCAnIgCAoIhmAFIhoAEg");
	this.shape_470.setTransform(218.55,548.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgnCiIgogBIAjjyIhLACIAPhSIBwACIBwAEIgPBNIhHgBIgSB4IgSB6QgQgCgVABg");
	this.shape_471.setTransform(199.275,547.95);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("Ag2ClQgSgEgOgHQgQgHgLgLQgLgLgHgNIAZgeIAageQALAWAVAHQAUAIAXAAQATgCAMgIQAMgIgDgNQAAgHgFgFQgHgFgKgEIgVgIQgMgEgMgGQgNgFgLgHQgLgHgIgKQgJgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQATgGAWAAIAOABIANACQAVAFASAJQARAKAMAPIg2BEQgGgMgJgHQgJgHgLgEQgKgEgLAAQgNAAgJAGQgJAFgBALQgCAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAHASgFAeQgEAagNAUQgMAUgTANQgRAOgYAHQgWAHgZAAQgRAAgSgEg");
	this.shape_472.setTransform(173.95,548.025);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgcigIBTAAIgeE/IgmACIgpAAg");
	this.shape_473.setTransform(154.9,548.05);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AAAA7IhaByIg6g0IBsiEIhFhwIBHgxIAzBfIBOhfIA6AtIhfB3IBLCBIgjAaIgkAag");
	this.shape_474.setTransform(134.5,548.025);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AhWjPIDpAHIgGAmIgFAnIiUgFIgOBPIB5gFIgDAnIgDApIg/AEIg/AFIgNBUICfgJIgCArIgCAsIh9AGIh+AFg");
	this.shape_475.setTransform(108.725,544.55);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgLBqQgXgBgPgJQgPgKgJgQQgIgPgDgUQgCgTADgTQADgUAIgSQAIgSANgOQAMgOARgKQARgIATAAQAWAAAPAJQAPAKAJAQQAIAPACAUQADAUgEATQgDATgHATQgIASgMAOQgLAPgQAIQgQAJgSAAgAgNgsQgJAKgHAQQgEALgBAMQgBAMADAJQACAKAGAHQAGAHALACIABAAIACAAQAGAAAFgDQAGgDAEgGQAFgGADgHIAGgQQADgKAAgKQABgMgDgJQgCgKgFgGQgFgGgJgCIgCAAIgCAAQgLAAgJAKg");
	this.shape_476.setTransform(1097.0953,637.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgnBmQgNgFgKgMQgKgNgEgSQgFgSAEgZQADgcAJgWQAJgUANgQQAMgOAPgIQAPgHAOgCIAFAAIAEgBQARAAAOAGQAPAGAMAMIgiAtQgGgIgIgFQgIgFgIAAIgHABQgNAFgLASQgLARgDAYQgDAXAHALQAHAMALACIACAAIACAAQAJAAAKgGQAKgFAIgKIAUAnQgMAPgRAKQgSAIgSAAQgPAAgNgGg");
	this.shape_477.setTransform(1081.5734,637.75);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgRhmIA0AAIgTDLIgYACIgaAAg");
	this.shape_478.setTransform(1068.425,637.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgyBmIgaAAIAPhmIAPhmIB7ACIgEAYIgFAYIhGgCIgGArIA4ACIgJAwIg2gDIgFAhIgFAiIgZgBg");
	this.shape_479.setTransform(1057.6,637.825);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgLCWQgXAAgPgKQgPgKgJgPQgIgQgDgTQgCgUADgUQADgUAIgSQAIgRANgOQAMgOARgJIADgCIgGgLIgLgVIBLg/IAiAtIgVAOIgXAPIgVAPIgBAAIgVAOIgFgIQANgGAOAAQgOAAgNAGIAFAIIAVgOIABAAIAGgBQAWAAAPAKQAPAJAJAQQAIAQACASQADAUgEAUQgDAUgHASQgIASgMAOQgLAPgQAIQgQAJgSAAgAgNAAQgJAKgHAPQgEAMgBAMQgBAMADAJQACAKAGAHQAGAHALACIABAAIACAAQAGAAAFgDQAGgDAEgGQAFgFADgIQAEgHACgIQADgLAAgLQABgMgDgJQgCgJgFgGQgFgGgJgCIgCAAIgCAAQgLAAgJAKg");
	this.shape_480.setTransform(1041.5453,633.375);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgiBqQgLgDgKgEQgKgFgHgHQgHgHgEgIIAQgTIAQgUQAIAOAMAFQANAFAPAAQANgBAHgFQAHgGgBgIQAAgFgEgDQgEgDgGgCIgOgGIgPgGIgPgIQgIgEgFgGQgFgHgCgJQgCgKACgMQADgQAHgMQAIgMALgIQALgHANgEQAMgEAOAAIAIAAIAKACQAMADALAGQAMAGAHAKIgjArQgCgIgHgEIgMgHQgGgCgIAAQgIAAgGADQgFAEgBAHQgBAEAGAEQAFAEAKADIAXAIQAMAFAKAHQAKAHAEALQAFAMgDASQgCARgJANQgHANgMAIQgMAJgPAFQgOAEgPAAQgMAAgLgCg");
	this.shape_481.setTransform(1023.7,637.775);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgLBqQgXgBgPgJQgPgKgJgQQgIgPgDgUQgCgTADgTQADgUAIgSQAIgSANgOQAMgOARgKQARgIATAAQAWAAAPAJQAPAKAJAQQAIAPACAUQADAUgEATQgDATgHATQgIASgMAOQgLAPgQAIQgQAJgSAAgAgNgsQgJAKgHAQQgEALgBAMQgBAMADAJQACAKAGAHQAGAHALACIABAAIACAAQAGAAAFgDQAGgDAEgGQAFgGADgHIAGgQQADgKAAgKQABgMgDgJQgCgKgFgGQgFgGgJgCIgCAAIgCAAQgLAAgJAKg");
	this.shape_482.setTransform(1007.2453,637.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgqhmIANAAIAUAAIASAAIgTCbIBPgCIgFAZIgEAaIiAABg");
	this.shape_483.setTransform(990.5,637.75);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgRhmIA0AAIgTDLIgYACIgaAAg");
	this.shape_484.setTransform(979.425,637.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgyBmIgaAAIAPhmIAPhmIB7ACIgEAYIgFAYIhGgCIgGArIA3ACIgIAwIg2gDIgFAhIgFAiIgZgBg");
	this.shape_485.setTransform(968.6,637.825);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgLBqQgXAAgPgLQgPgJgJgQQgIgPgDgTQgCgUADgUQADgTAIgSQAIgTANgOQAMgOARgIQARgJATAAQAWAAAPAKQAPAJAJAQQAIAQACATQADAUgEATQgDAUgHARQgIATgMAOQgLAOgQAJQgQAJgSAAgAgNgsQgJALgHAPQgEALgBALQgBAMADAKQACAKAGAHQAGAHALABIABAAIACAAQAGAAAFgCQAGgDAEgGQAFgFADgIIAGgPQADgMAAgKQABgLgDgJQgCgKgFgGQgFgHgJgBIgCAAIgCAAQgLAAgJAKg");
	this.shape_486.setTransform(1125.9953,594.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgZBnIgZgBIAWiaIgwABIAJg0IBIACIBIACIgKAxIgtgBIgMBNIgLBOIgYgBg");
	this.shape_487.setTransform(1111.5,594.05);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("Ag+hZIA0gTIAkBkIAHhbIAaAAIAagBIgXDMIguABIgmhlIgFAzIgFAwIg0AGg");
	this.shape_488.setTransform(1095.725,593.875);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgthpIB6ADIgDAXIgEAXIhIgDIgEAeIA5gCIgCAYIgBAXIggADIgfACIgEAiIBNgFIgBAZIgBAaIhBADIhDACg");
	this.shape_489.setTransform(1080.325,594.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgRhmIA0AAIgTDMIgYAAIgaABg");
	this.shape_490.setTransform(1068.525,594.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AhRBkIgaAAIAOhkIAPhiIAegBQAQAAAQgCIARBrIAuhoIAegBIAfgCIgKBjIgKBhIgMABIgOABIgOABIgMABIAKhdIgJAVIgGARIgHARIgKAWIgVgBIgXAAIgMhOIgNBiIgagCg");
	this.shape_491.setTransform(1053.1,594.25);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AAeBIIg5ADIgOAgIgtgHIBZjOQALACANAAIAaABIAiDHIgaAFIgbAGgAgDAYIAMgBIAPgBIgHgug");
	this.shape_492.setTransform(1033.55,594.275);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgthpIB6ADIgDAXIgEAXIhIgDIgEAeIA5gCIgCAYIgBAXIggADIgfACIgEAiIBNgFIgBAZIgBAaIhBADIhDACg");
	this.shape_493.setTransform(1018.825,594.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgZBnIgagBIAXiaIgwABIAJg0IBIACIBHACIgJAxIgugBIgLBNIgLBOIgYgBg");
	this.shape_494.setTransform(1006.5,594.05);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("Ag+hZIA0gTIAkBkIAHhbIAaAAIAagBIgXDMIguABIgmhlIgFAzIgFAwIg0AGg");
	this.shape_495.setTransform(990.725,593.875);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AAeBIIg4ADIgPAgIgugHIBajOQALACANAAIAaABIAjDHIgbAFIgaAGgAgEAYIAOgBIAOgBIgHgug");
	this.shape_496.setTransform(973.3,594.275);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgqhlIANAAIAUAAIATgBIgUCbIBPgCIgFAZIgEAaIiAABg");
	this.shape_497.setTransform(958.35,594.05);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AhKh4QAWgGAVgDQAUgDASAAQAXAAATAGQASAFANALQAMALAGARQAGARgDAYQgDAVgIAQQgIAQgMALQgMAMgRAHQgQAIgTADIgXABIgJAAIgKgBIgIBOIgdABIgcABgAgJhQIgMACIgJBRQANAAAMgBQALgBAKgEQALgFAHgIQAIgJADgPQACgIgBgGQgCgHgEgFQgEgFgGgDQgHgEgIgBIgNgBIgLAAg");
	this.shape_498.setTransform(942.8029,591.425);

	this.respuesta15 = new lib.respuestac();
	this.respuesta15.name = "respuesta15";
	this.respuesta15.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta15, 0, 1, 2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AglBzQgMgCgLgFQgLgFgIgIQgIgHgFgKIASgUIASgWQAJAQANAFQAPAFAQAAQANgBAIgGQAJgGgCgJQAAgFgEgDIgMgGIgOgGIgRgHQgJgDgIgGQgIgEgGgHQgFgHgDgLQgCgKACgNQAEgSAIgNQAIgNAMgIQAMgJAPgEQANgEAPAAIAJAAIAKABQAOAEAMAHQAMAGAKALIgnAwQgEgJgGgFQgHgFgGgDQgIgCgIAAQgJAAgGAEQgGAEgBAHQgBAGAHADQAGAEAKAEIAaAJQANAFAKAIQALAIAFAMQAGAMgEAVQgCASgKAOQgJAOgMAKQgNAJgQAFQgQAFgQAAQgNAAgMgDg");
	this.shape_499.setTransform(1051,467.475);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgxhzICFAEIgEAYIgEAZIhPgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJADg");
	this.shape_500.setTransform(1016.55,467.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AhQCJQgFgigEgjIgHhEIgHhDQgEgigFgiIAcgDIAdgDIAfDdIATg2IATg4IATg5IATg1QAOADAQACIAfAGIhdEPg");
	this.shape_501.setTransform(1000.275,464.675);

	this.respuesta14 = new lib.botonb();
	this.respuesta14.name = "respuesta14";
	this.respuesta14.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta14, 0, 1, 2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("Ag3BwIgcAAIARhwIAQhwICGADIgFAZIgEAbIhOgCIgGAvIA9ACIgJA0Ig8gDIgFAlIgGAlIgbgBg");
	this.shape_502.setTransform(1071.9,318.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AAhBwIg/ACIgPAjIgygHIBhjdIgHgOIBDg3IAeAnIgUAOIgWAPIAEAAIAEAAIAlDZIgdAGIgdAGgAgEA7IAOgBIAQgCIgHgyg");
	this.shape_503.setTransform(998.85,315.625);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AhRiDQAYgHAXgDQAWgEAUAAQAZABAUAGQAVAGANAMQAOAMAGASQAHATgDAZQgDAXgJATQgJARgNAMQgOANgSAIQgRAIgVAEIgZABIgKAAIgLgBIgJBVIgfACIggABgAgKhXIgNABIgKBZQAOAAANgBQANgCALgEQALgFAJgJQAIgJADgRQADgJgCgHQgBgHgFgFQgEgGgHgDQgHgEgKgCIgOgBIgMABg");
	this.shape_504.setTransform(980.6224,315.775);

	this.respuesta13 = new lib.respuestaa();
	this.respuesta13.name = "respuesta13";
	this.respuesta13.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta13, 0, 1, 2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgSQAIgQALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAOQAIAPACATQACARgDATQgDASgHARQgHARgLANQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_505.setTransform(534.3582,656.45);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgQhfIAxAAIgRC+IgXABIgZAAg");
	this.shape_506.setTransform(507.45,656.45);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("Agqg9IAdAAIgIgNIgIgPIA5gvIAZAiIgeAVIgfAVIBQACIgCAVIgEAWIhEgCIgEAaIA1gBIgBAWIgBAXIgdACIgeABIgEAhIBIgFIgBAYIAAAYIg9ADIg/ACg");
	this.shape_507.setTransform(483.8,652.725);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgSQAIgQALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAOQAIAPACATQACARgDATQgDASgHARQgHARgLANQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_508.setTransform(468.7582,656.45);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgSQAIgQALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAOQAIAPACATQACARgDATQgDASgHARQgHARgLANQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_509.setTransform(428.5582,656.45);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgSQAIgQALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAOQAIAPACATQACARgDATQgDASgHARQgHARgLANQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_510.setTransform(403.0082,656.45);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGATgDQARgDAQAAQALAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAkA5IgUAQIgWAQIgXgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_511.setTransform(363.4,656.575);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgKCNQgWgBgOgJQgOgJgJgPQgHgOgDgTQgCgSADgTQACgSAIgRQAIgQAMgOQALgNAQgIIADgCIgGgKIgLgUIBHg7IAgAqIgUAOIgVAOIgUANIAGAAQAVAAAOAJQAOAJAIAPQAIAOACASQACASgDATQgDASgHARQgIASgKANQgMANgOAIQgPAJgRAAgAgMAAQgJAJgGAOQgEALgBALQgBAMADAJQACAJAFAHQAGAGAKACIABAAIACAAQAFAAAGgDQAEgDAFgFIAIgMIAFgPQACgKABgLQAAgKgCgJQgCgJgFgFQgFgGgIgBIgCAAIgCAAQgKAAgIAJgAgSgzIAFAIIATgNIABgBQgNABgMAFIAAAAgAgSgzQAMgFANgBIgBABIgTANIgFgIg");
	this.shape_512.setTransform(347.45,652.325);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgvBgQgMAAgMgBIAOhfIANhgIB0ADIgEAWIgEAWIhCgCIgGApIA0ACIgIAsIgzgCIgEAfIgFAgIgXgBg");
	this.shape_513.setTransform(333.15,656.475);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_514.setTransform(317.7,656.625);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBJgEIgBAXIgCAYIg8ADIg/ADg");
	this.shape_515.setTransform(291.7,656.475);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AhMBfIgYgCIANhdIAOhbIAcgBIAdgCIARBkIArhhIAcgCIAdgBIgJBcIgKBbIgLABIgNABIgNABIgMAAIAKhWIgJAUIgGAQIgGAPIgJAVIgUAAIgVgBIgMhKIgMBcIgYAAg");
	this.shape_516.setTransform(275.275,656.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgcBgQgLgEgJgHQgJgGgGgJQgFgJgCgIIASgQIATgRQADANAHAHQAGAIAHACQADACAEAAQADAAAEgCQAEgCADgFQAEgGADgJQAEgJABgPQACgLAAgOIgCgeIg5ADIABgWIACgYIBkgFIABAVIABAZIAAAbIgCAbQgFAlgNAaQgOAYgaAKIgIACIgIAAQgMAAgLgEg");
	this.shape_517.setTransform(634.725,615.45);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgXBkQgMgDgKgGQgLgHgHgLQgHgMgDgPQgEgQACgUQAEgdAKgVQAKgVANgNQAOgNAQgGQAPgHAQABQAPgBANAFQAOAEAMAKIgcApQgGgGgHgDQgHgEgIABQgJAAgIADQgHAEgHAHQgHAIgGAMQgFAMgBAOQgCAMACAJQACAIAEAHQAEAFAFAEQAGACAGAAIACAAIADAAIADgBIAEgBIAGgdIgagCIAKgoIBDADIgIAqIgIAsQgMAOgRAIQgQAHgQABIgNgBg");
	this.shape_518.setTransform(590.2386,615.35);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhWIAYAAIAZAAIgWC+IgrABIgjheIgFAvIgEAtIgyAGg");
	this.shape_519.setTransform(574.6,615.15);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_520.setTransform(560.15,615.375);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhWIAYAAIAZAAIgWC+IgrABIgkheIgEAvIgFAtIgxAGg");
	this.shape_521.setTransform(524.55,615.15);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhWIAXAAIAZAAIgVC+IgsABIgkheIgEAvIgFAtIgxAGg");
	this.shape_522.setTransform(452.6,615.15);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AhKBdIgBgTIgCgTIBahmIhIAAIAGguIB7ABIAIAiQgYAbgZAbIgvA1IBTAAIgFAtg");
	this.shape_523.setTransform(422.05,615.525);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_524.setTransform(330.65,615.525);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AAOBDIgXgoIgHAAIgFgBIgFAjIgDAiIgYABIgZABIAVi9QATgGATgDQARgDAQAAQAKAAAKABQAWAGAMAQQAMAQgDAcQgDAUgJANQgJAMgNAIIAkA5IgUAQIgWAQIgXgmgAgDg6IgJABIgDAUIgCAUIAIAAIAMAAQAHgBAFgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgKgCIgEgBIgEAAIgHABg");
	this.shape_525.setTransform(283.55,615.475);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgSAlQgFgDgFgEQgEgFgCgFQgDgGgBgHQgBgIADgHQAEgIAGgHQAGgGAIgEQAIgEAHgCIADAAIACAAQAOAAAIAJQAJAJABAOQAAAIgEAJQgEAIgGAHQgHAGgIAFQgIAEgIAAQgHAAgGgDg");
	this.shape_526.setTransform(212.8464,621.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgSAlQgFgDgFgEQgEgFgCgFQgDgGgBgHQgBgIADgHQAEgIAGgHQAGgGAIgEQAIgEAHgCIADAAIACAAQAOAAAIAJQAJAJABAOQAAAIgEAJQgEAIgGAHQgHAGgIAFQgIAEgIAAQgHAAgGgDg");
	this.shape_527.setTransform(203.5964,621.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgEAcIA2gCIgBAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_528.setTransform(184.25,615.375);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgvBgQgNAAgLgBIAOhfIANhgIB0ADIgEAWIgEAWIhCgCIgGApIA0ACIgIAsIgzgCIgEAfIgFAgIgXgBg");
	this.shape_529.setTransform(646.9,574.275);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAIhWIAXAAIAZgBIgVDAIgsABIgjhfIgFAwIgEAtIgyAFg");
	this.shape_530.setTransform(624.2,574.05);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASAAQAVAAAOAKQAOAJAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_531.setTransform(502.7582,574.25);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgCAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_532.setTransform(467.8,574.275);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_533.setTransform(445.4469,574.525);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASAAQAVAAAOAKQAOAJAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_534.setTransform(405.2582,574.25);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhWIAYAAIAZgBIgWDAIgrABIgkhfIgEAwIgFAtIgxAFg");
	this.shape_535.setTransform(376.85,574.05);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgRhgIAyAAIgSDAIgXAAIgYABg");
	this.shape_536.setTransform(351.35,574.25);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AhMBeIgYgBIANhcIAOhdIAcgBIAdgBIARBkIArhiIAcgBIAdgBIgJBbIgKBdIgLAAIgNABIgNABIgMAAIAKhXIgJAVIgGAPIgGAQIgJAVIgUgBIgVgBIgMhJIgMBcIgYgBg");
	this.shape_537.setTransform(336.925,574.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBJgEIgBAXIgCAYIg8ADIg/ADg");
	this.shape_538.setTransform(284.05,574.275);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_539.setTransform(269.475,574.225);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_540.setTransform(246.075,574.225);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_541.setTransform(231.7969,574.525);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_542.setTransform(215.475,574.225);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_543.setTransform(176.375,574.225);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AAAAkIg1BEIgjgfIBBhPIgqhDIArgeIAeA5IAvg5IAjAbIg6BIIAtBNIgUAPIgXAQg");
	this.shape_544.setTransform(118,574.225);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_545.setTransform(103.85,574.275);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAUgGASgDQATgDAPAAQAKAAAKABQAWAGAMAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgTAQIgVAQIgYgmgAgEg6IgJABIgBAUIgCAUIAHAAIANAAQAFgBAGgCQAFgCADgDQAEgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgIABg");
	this.shape_546.setTransform(689.85,533.275);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_547.setTransform(645.6469,533.425);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_548.setTransform(628.55,533.325);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_549.setTransform(571.4,533.175);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_550.setTransform(557.4969,533.425);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AAABWIgEABIgHAAQgSABgNgHQgNgGgIgLQgIgKgFgOQgEgOgBgPQgBgVAHgVQAGgWAMgRQAMgSASgLQASgMAWAAQAQAAAMAGQANAGAIAKQAJAJAFANQAEANACAOQAAAOgCAOQgCANgFANQgFANgHAMQgHALgJAIIASASIgTARIgSASgAgNg1QgJAKgGAOQgEALAAALQgBAKACAJQACAKAGAHQAFAGAKACIACAAIABAAQAFAAAFgEQAFgDAFgEQAEgGAEgHQADgGACgHQADgKAAgLQABgKgDgJQgCgJgFgGQgEgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_551.setTransform(540.7524,534.35);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgSCSIBJgCIgDAYIgFAXIh3ACg");
	this.shape_552.setTransform(516.55,533.1);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_553.setTransform(503.75,533.175);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIgBAXIAAAYIg9ADIg/ADg");
	this.shape_554.setTransform(466.7,533.175);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgCAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_555.setTransform(431.8,533.175);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_556.setTransform(417.8969,533.425);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AAABWIgEABIgHAAQgSABgNgHQgNgGgIgLQgIgKgFgOQgEgOgBgPQgBgVAHgVQAGgWAMgRQAMgSASgLQASgMAWAAQAQAAAMAGQANAGAIAKQAJAJAFANQAEANACAOQAAAOgCAOQgCANgFANQgFANgHAMQgHALgJAIIASASIgTARIgSASgAgNg1QgJAKgGAOQgEALAAALQgBAKACAJQACAKAGAHQAFAGAKACIACAAIABAAQAFAAAFgEQAFgDAFgEQAEgGAEgHQADgGACgHQADgKAAgLQABgKgDgJQgCgJgFgGQgEgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_557.setTransform(401.1524,534.35);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_558.setTransform(360.325,533.125);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBJgEIgCAXIgBAYIg9ADIg+ADg");
	this.shape_559.setTransform(346.5,533.175);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("Agcg9IACAAIgGgKIgGgLIA5gwIAaAiIgZARIgaASIAbAAIgSC/IgVABIgZAAg");
	this.shape_560.setTransform(273.9,529.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgSCSIBKgCIgFAYIgEAXIh3ACg");
	this.shape_561.setTransform(262.1,533.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgPgCgSQgCgSADgSQADgSAHgRQAIgRALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAOQAIAPACATQACARgDATQgDASgHARQgHASgLAMQgMAOgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgDAEgEIAHgNQAEgGACgIQACgKABgKQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_562.setTransform(239.2582,533.15);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgDAjIgEAiIgYABIgZABIAUi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgCAUIgBAUIAHAAIAMAAQAGgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_563.setTransform(222.5,533.275);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhVIAYAAIAZgBIgWC/IgrAAIgjheIgFAwIgEAtIgyAFg");
	this.shape_564.setTransform(193.9,532.95);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("Agqg9IAdAAIgIgNIgIgPIA5gvIAZAiIgeAVIgfAVIBQACIgDAVIgDAWIhEgCIgDAaIA1gBIgBAWIgCAXIgeACIgcABIgFAhIBIgFIgBAYIgBAYIg9ADIg+ACg");
	this.shape_565.setTransform(179.45,529.425);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgXBjQgMgCgKgHQgLgGgHgLQgHgMgDgPQgEgQACgVQAEgcAKgVQAKgUANgOQAOgNAQgGQAPgGAQgBQAPAAANAFQAOAFAMAJIgcAqQgGgHgHgDQgHgEgIAAQgJABgIAEQgHADgHAHQgHAJgGALQgFAMgBAOQgCALACAKQACAJAEAFQAEAHAFACQAGADAGAAIACAAIADAAIADgCIAEAAIAGgdIgagBIAKgpIBDADIgIAqIgIArQgMAQgRAHQgQAIgQAAIgNgCg");
	this.shape_566.setTransform(165.8886,533.15);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgTCSIBLgCIgFAYIgEAXIh4ACg");
	this.shape_567.setTransform(142.3,533.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("Agzh8ICLAEIgDAXIgEAYIhYgEIgIAwIBIgDIgCAYIgCAXIgmADIglADIgIAzIBfgGIgBAaIgBAaIhKAEIhMADg");
	this.shape_568.setTransform(128.175,531.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:447.225,y:540.825}},{t:this.shape_55,p:{x:469.025,y:540.775}},{t:this.shape_54,p:{x:485.975,y:540.6}},{t:this.shape_53,p:{x:501.225,y:540.825}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.respuesta1},{t:this.shape_2},{t:this.respuesta2},{t:this.shape_1},{t:this.respuesta3},{t:this.shape}]}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_272,p:{x:92.7}},{t:this.shape_271,p:{x:106.7,y:533.325}},{t:this.shape_270,p:{x:131.8019,y:533.125}},{t:this.shape_269,p:{x:142.3}},{t:this.shape_268,p:{x:153.975}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:205.3,y:533.175}},{t:this.shape_264},{t:this.shape_263,p:{x:244.6469,y:533.425}},{t:this.shape_262,p:{x:259.175,y:533.1}},{t:this.shape_261,p:{x:272.8082}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257,p:{x:328.55,y:533.325}},{t:this.shape_256},{t:this.shape_255,p:{x:369.2519,y:533.125}},{t:this.shape_254,p:{x:383.8082}},{t:this.shape_253},{t:this.shape_252,p:{x:414.375,y:533.125}},{t:this.shape_251},{t:this.shape_250,p:{x:438.375,y:533.125}},{t:this.shape_249,p:{x:453.575,y:533.1}},{t:this.shape_248,p:{x:465.15,y:533.175}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243,p:{x:540.0464,y:539.1}},{t:this.shape_242},{t:this.shape_241,p:{x:574.75}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238,p:{x:123.025}},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235,p:{x:166.775}},{t:this.shape_234,p:{x:181.2,y:574.25}},{t:this.shape_233,p:{x:193.25}},{t:this.shape_232,p:{x:207.75,y:574.425}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{x:308.05,y:574.425}},{t:this.shape_225},{t:this.shape_224,p:{x:347.45}},{t:this.shape_223},{t:this.shape_222,p:{x:383.6519,y:574.225}},{t:this.shape_221,p:{x:398.2082}},{t:this.shape_220,p:{x:414.25}},{t:this.shape_219,p:{x:430.4582}},{t:this.shape_218,p:{x:446.8019,y:574.225}},{t:this.shape_217,p:{x:457.3}},{t:this.shape_216,p:{x:471.375}},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{x:526.075,y:574.2}},{t:this.shape_211},{t:this.shape_210,p:{x:564.0981,y:574.025}},{t:this.shape_209,p:{x:578.2,y:574.425}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206,p:{x:94.35,y:615.475}},{t:this.shape_205},{t:this.shape_204,p:{x:122.875,y:615.325}},{t:this.shape_203,p:{x:138.3481,y:615.125}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200,p:{x:181.81,y:615.375}},{t:this.shape_199,p:{x:196.75,y:615.525}},{t:this.shape_198,p:{x:213.1,y:615.475}},{t:this.shape_197,p:{x:235.6,y:615.3}},{t:this.shape_196},{t:this.shape_195,p:{x:271.4,y:615.35}},{t:this.shape_194,p:{x:283.46,y:615.375}},{t:this.shape_193,p:{x:298.05,y:615.375}},{t:this.shape_192,p:{x:311.85,y:615.525}},{t:this.shape_191,p:{x:337.3969}},{t:this.shape_190,p:{x:361.8082}},{t:this.shape_189,p:{x:377.7481,y:615.125}},{t:this.shape_188,p:{x:389.5,y:615.35}},{t:this.shape_187},{t:this.shape_186,p:{x:413.7,y:615.35}},{t:this.shape_185},{t:this.shape_184,p:{x:442.85,y:615.15}},{t:this.shape_183,p:{x:466.46,y:615.375}},{t:this.shape_182,p:{x:481.05,y:615.375}},{t:this.shape_181,p:{x:493.85,y:615.3}},{t:this.shape_180,p:{x:516.3,y:615.525}},{t:this.shape_179,p:{x:533.3969}},{t:this.shape_178},{t:this.shape_177,p:{x:561.5582}},{t:this.shape_176,p:{x:577.6,y:615.475}},{t:this.shape_175,p:{x:601.76,y:615.375}},{t:this.shape_174},{t:this.shape_173,p:{x:629.15}},{t:this.shape_172},{t:this.shape_171,p:{x:663.45,y:615.375}},{t:this.shape_170},{t:this.shape_169,p:{x:692.425}},{t:this.shape_168,p:{x:706.0582}},{t:this.shape_167,p:{x:718.5464}},{t:this.respuesta4},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.respuesta5},{t:this.respuesta6},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:978.225,y:581.425}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:1024.65,y:581.225}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:1071.35,y:581.275}},{t:this.shape_102,p:{x:1086.6288,y:581.275}},{t:this.shape_101,p:{x:1105.325,y:581.025}},{t:this.shape_100,p:{x:1122.3,y:581.475}},{t:this.shape_99,p:{x:1141.375,y:581.425}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{x:1024.2279,y:628.85}},{t:this.shape_93},{t:this.shape_92,p:{x:1055.4288,y:628.875}},{t:this.shape_91,p:{x:1074.125,y:629.025}},{t:this.shape_90},{t:this.shape_56,p:{x:956.275,y:456.375}},{t:this.shape_55,p:{x:978.075,y:456.325}},{t:this.shape_89},{t:this.shape_53,p:{x:1028.975,y:456.375}},{t:this.shape_88},{t:this.shape_54,p:{x:1064.075,y:456.15}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338,p:{x:188.0173,y:557.975}},{t:this.shape_337,p:{x:203.4173,y:557.975}},{t:this.shape_336,p:{x:218.8173,y:557.975}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330,p:{x:422.825}},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326,p:{x:535.025}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323,p:{x:607.725}},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320,p:{x:671.1}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306,p:{x:552.975,y:615.525}},{t:this.respuesta7},{t:this.shape_305},{t:this.shape_304},{t:this.shape_99,p:{x:955.325,y:313.575}},{t:this.shape_303},{t:this.shape_102,p:{x:992.3788,y:313.425}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_100,p:{x:1079.55,y:313.625}},{t:this.shape_94,p:{x:1098.9779,y:313.4}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.respuesta8},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_101,p:{x:1137.475,y:467.225}},{t:this.respuesta9},{t:this.shape_280},{t:this.shape_91,p:{x:954.975,y:616.375}},{t:this.shape_92,p:{x:974.5788,y:616.225}},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_106,p:{x:1055.25,y:616.175}},{t:this.shape_103,p:{x:1068.85,y:616.225}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_330,p:{x:242.575}},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_326,p:{x:370.025}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_320,p:{x:511.8}},{t:this.shape_323,p:{x:531.275}},{t:this.shape_461},{t:this.shape_460},{t:this.shape_306,p:{x:599.725,y:548.325}},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_338,p:{x:515.1673,y:625.175}},{t:this.shape_337,p:{x:530.5673,y:625.175}},{t:this.shape_336,p:{x:545.9673,y:625.175}},{t:this.respuesta10},{t:this.shape_442},{t:this.shape_199,p:{x:885.25,y:297.825}},{t:this.shape_184,p:{x:910.05,y:297.45}},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439,p:{x:956.6,y:297.775}},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_271,p:{x:1023.25,y:297.825}},{t:this.shape_434},{t:this.shape_197,p:{x:1054.25,y:297.6}},{t:this.shape_257,p:{x:1068.25,y:297.825}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_206,p:{x:1112.7,y:297.775}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_181,p:{x:1195.05,y:297.6}},{t:this.shape_200,p:{x:875.31,y:338.775}},{t:this.shape_195,p:{x:887.9,y:338.75}},{t:this.shape_194,p:{x:899.96,y:338.775}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_262,p:{x:944.675,y:338.7}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420,p:{x:1026.4,y:338.7}},{t:this.shape_192,p:{x:1040.4,y:338.925}},{t:this.shape_183,p:{x:1065.21,y:338.775}},{t:this.shape_419,p:{x:1080.8,y:338.875}},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_249,p:{x:1146.975,y:338.7}},{t:this.shape_186,p:{x:1156.55,y:338.75}},{t:this.shape_415},{t:this.shape_209,p:{x:1181.75,y:338.925}},{t:this.shape_243,p:{x:1194.5464,y:344.7}},{t:this.respuesta11},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.respuesta12},{t:this.shape_366},{t:this.shape_365,p:{x:944.75,y:574.975}},{t:this.shape_193,p:{x:968.55,y:574.825}},{t:this.shape_364},{t:this.shape_210,p:{x:997.7981,y:574.575}},{t:this.shape_363},{t:this.shape_204,p:{x:1029.025,y:574.775}},{t:this.shape_234,p:{x:1041.6,y:574.8}},{t:this.shape_212,p:{x:1053.275,y:574.75}},{t:this.shape_362,p:{x:1062.85,y:574.8}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_270,p:{x:908.6019,y:615.875}},{t:this.shape_356},{t:this.shape_182,p:{x:930.15,y:615.925}},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_255,p:{x:1002.6019,y:615.875}},{t:this.shape_226,p:{x:1015.45,y:616.075}},{t:this.shape_350,p:{x:1027.25,y:623.275}},{t:this.shape_349},{t:this.shape_203,p:{x:1061.4481,y:615.675}},{t:this.shape_348},{t:this.shape_222,p:{x:1085.5519,y:615.875}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344,p:{x:1157.95,y:616.075}},{t:this.shape_189,p:{x:979.1481,y:656.775}},{t:this.shape_343,p:{x:992.9,y:657.025}},{t:this.shape_176,p:{x:1007.35,y:657.125}},{t:this.shape_342,p:{x:1020.05,y:657}},{t:this.shape_341},{t:this.shape_175,p:{x:1049.21,y:657.025}},{t:this.shape_188,p:{x:1061.8,y:657}},{t:this.shape_218,p:{x:1074.1519,y:656.975}},{t:this.shape_180,p:{x:1087,y:657.175}}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_171,p:{x:208.05,y:533.175}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_439,p:{x:283.4,y:533.275}},{t:this.shape_269,p:{x:296.1}},{t:this.shape_270,p:{x:308.4519,y:533.125}},{t:this.shape_261,p:{x:323.0082}},{t:this.shape_559},{t:this.shape_558},{t:this.shape_232,p:{x:383.7,y:533.325}},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_272,p:{x:444.6}},{t:this.shape_554},{t:this.shape_241,p:{x:481.15}},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_343,p:{x:593.3,y:533.175}},{t:this.shape_420,p:{x:606.1,y:533.1}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_268,p:{x:660.175}},{t:this.shape_254,p:{x:673.8082}},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_210,p:{x:133.0981,y:574.025}},{t:this.shape_198,p:{x:147.85,y:574.375}},{t:this.shape_265,p:{x:162.55,y:574.275}},{t:this.shape_543},{t:this.shape_209,p:{x:191.3,y:574.425}},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_220,p:{x:298.5}},{t:this.shape_238,p:{x:313.275}},{t:this.shape_217,p:{x:322.85}},{t:this.shape_537},{t:this.shape_536},{t:this.shape_193,p:{x:362.4,y:574.275}},{t:this.shape_535},{t:this.shape_212,p:{x:391.625,y:574.2}},{t:this.shape_534},{t:this.shape_252,p:{x:420.675,y:574.225}},{t:this.shape_533},{t:this.shape_532},{t:this.shape_235,p:{x:484.275}},{t:this.shape_531},{t:this.shape_255,p:{x:519.1019,y:574.225}},{t:this.shape_362,p:{x:529.6,y:574.25}},{t:this.shape_221,p:{x:542.7082}},{t:this.shape_233,p:{x:558.75}},{t:this.shape_224,p:{x:572.9}},{t:this.shape_250,p:{x:586.725,y:574.225}},{t:this.shape_182,p:{x:609.75,y:574.275}},{t:this.shape_530},{t:this.shape_529},{t:this.shape_219,p:{x:661.1082}},{t:this.shape_419,p:{x:677.15,y:574.375}},{t:this.shape_216,p:{x:694.875}},{t:this.shape_365,p:{x:711.65,y:574.425}},{t:this.shape_183,p:{x:169.66,y:615.375}},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_167,p:{x:222.0964}},{t:this.shape_190,p:{x:244.4082}},{t:this.shape_203,p:{x:268.7981,y:615.125}},{t:this.shape_525},{t:this.shape_177,p:{x:300.3082}},{t:this.shape_204,p:{x:315.725,y:615.325}},{t:this.shape_524},{t:this.shape_350,p:{x:342.45,y:622.725}},{t:this.shape_263,p:{x:364.0469,y:615.625}},{t:this.shape_169,p:{x:378.575}},{t:this.shape_342,p:{x:388.15,y:615.35}},{t:this.shape_173,p:{x:398.55}},{t:this.shape_186,p:{x:410.2,y:615.35}},{t:this.shape_523},{t:this.shape_344,p:{x:436.25,y:615.525}},{t:this.shape_522},{t:this.shape_175,p:{x:467.76,y:615.375}},{t:this.shape_168,p:{x:484.4082}},{t:this.shape_191,p:{x:509.6469}},{t:this.shape_521},{t:this.shape_181,p:{x:546.5,y:615.3}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_179,p:{x:605.5469}},{t:this.shape_180,p:{x:619.8,y:615.525}},{t:this.shape_517},{t:this.shape_248,p:{x:648.75,y:615.375}},{t:this.shape_516},{t:this.shape_515},{t:this.shape_262,p:{x:305.775,y:656.4}},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_188,p:{x:376.1,y:656.45}},{t:this.shape_222,p:{x:388.4519,y:656.425}},{t:this.shape_510},{t:this.shape_509},{t:this.shape_189,p:{x:452.9481,y:656.225}},{t:this.shape_508},{t:this.shape_507},{t:this.shape_249,p:{x:497.875,y:656.4}},{t:this.shape_506},{t:this.shape_218,p:{x:519.8019,y:656.425}},{t:this.shape_505},{t:this.shape_243,p:{x:546.8464,y:662.4}},{t:this.respuesta13},{t:this.shape_504},{t:this.shape_503},{t:this.shape_109,p:{x:1017.925,y:318.825}},{t:this.shape_99,p:{x:1036.275,y:318.825}},{t:this.shape_100,p:{x:1053.9,y:318.875}},{t:this.shape_502},{t:this.shape_102,p:{x:1088.5288,y:318.675}},{t:this.respuesta14},{t:this.shape_501},{t:this.shape_500},{t:this.shape_91,p:{x:1033.375,y:467.625}},{t:this.shape_499},{t:this.shape_92,p:{x:1070.4288,y:467.475}},{t:this.respuesta15},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476}]},1).to({state:[]},13).wait(1));

	// Capa_3
	this.instance_1 = new lib.Perezaai();
	this.instance_1.setTransform(364,130,0.52,0.5646);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},17).wait(1));

	// Capa_4
	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgXDPQgrgBgdgTQgegSgQgeQgSgegFglQgFglAFgmQAHgnAPgkQAPglAZgcQAYgcAigRQAggSAoAAQAqAAAdATQAcASARAeQAQAeAFAmQAFAmgFAmQgGAmgPAlQgPAkgYAcQgWAcggARQgfASglAAgAgNhvQgNAIgLANQgLAOgJASQgIASgGATQgGAVAAAXQgBAXAGATQAGATANANQANANAWADIAIAAQAOAAAOgIQANgIAKgOQALgOAIgSQAIgTAFgTQAEgVgBgWQAAgXgGgSQgFgTgMgMQgLgNgTgEIgEAAIgFAAQgOAAgNAIg");
	this.shape_569.setTransform(813.7,425.075);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("Ah2ixIBYghIBVDrIAVjbIArgCIAugBIgsGPIgoABIgoABIhbjdIgLBtIgLBtIhcAKg");
	this.shape_570.setTransform(780.025,424.825);

	this.noo = new lib.no();
	this.noo.name = "noo";
	this.noo.setTransform(796.65,431.9,1,1,0,0,0,133.9,52);
	new cjs.ButtonHelper(this.noo, 0, 1, 1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgvhmIADAAIgKgSIgLgSIBghQIArA5IgqAdIgrAeIAvAAIgeE+IgmACIgpABg");
	this.shape_571.setTransform(426.225,422.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AhDDOQgVgFgRgIQgSgIgOgMQgOgMgIgQIAbggIAcghQAIANALAIQALAIAMAGQANAEAOACQAOACAOAAQAOgBAMgEQAMgEAIgGQAIgHAEgJQAEgIgBgKQAAgOgOgIQgOgJgTgIIgpgQQgWgKgSgMQgRgOgKgVQgKgVAGggQAEgeAPgWQAOgWAVgOQAUgPAZgHQAYgIAZABQAhgBAfALQAeAKAXAZIg6BLQgGgJgIgIQgJgGgKgFQgKgFgLgDQgLgCgKAAQgSAAgMAJQgOAIgDARQgDAOAPAJQAOAJAXAJIAAAAIAdALQAPAFAOAHQAOAIANAJQAMAKAJALQAIANADARQAEASgEAWQgGAggQAYQgPAXgVAQQgWAQgaAIQgaAIgaACIgHAAIgGAAQgVAAgVgDg");
	this.shape_572.setTransform(401.975,425.1);

	this.sii = new lib.si();
	this.sii.name = "sii";
	this.sii.setTransform(413.8,431.9,1,1,0,0,0,133.9,52);
	new cjs.ButtonHelper(this.sii, 0, 1, 1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AhSDNQgLgFgGgJQgGgIgCgLQgBgLACgLQACgLAFgKQAFgKAIgIQAIgIALgFQAKgFANAAQAYAAAPAPQAOAQABAYQgBAOgFALQgEAMgJAIQgIAIgMAFQgMAEgOAAQgQAAgLgFgAhQA+QAJgbAPgUQAQgUAPgQIAZgfQAMgOADgOQAEgRgJgNQgKgMgUAAQgSAAgTAIIgiARIgRhRQAcgQAegHQAdgIAZAAQAYAAAUAIQAVAHAOAPQAOAPAHAVQAHAVgDAcQgEAcgNAYQgOAXgRATQgQAUgRARQgQASgKARg");
	this.shape_573.setTransform(875.9833,244.225);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AAiCHQgagqgXgrIgTAAIgUgBIgIBLIgIBKIgsACIguABIArmLQAngLAjgGQAjgFAegBQARAAAPACQAaADAVAJQAVALAOAQQAOARAGAXQAGAYgEAgQgFAqgUAcQgUAbgfAPIBPB/IglAcIgoAfIgyhTgAgKiGIgYADIgGA0IgFAzIANAAIALAAQAmABAXgLQAYgLAHgcQAHgbgPgOQgOgPgcgCIgFgBIgFAAIgVACg");
	this.shape_574.setTransform(846.725,245.35);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("ABCCLIh/AGIgbA/IhPgLICwmUIAuACIAtADIBEGHIguAJIgvAKgAgXA+IBRgHIgNiTg");
	this.shape_575.setTransform(812.75,245.475);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgrDHQglgCgagMQgZgNgPgXQgPgWgDgfQgDgfAIglIANhLIALhFIAIg0IAEgZIAqgCIAsgCIgQByIgQBxQgHAoAJATQAJATAdACIAGAAQAYAAARgSQARgSAHgpIARhzIARh0IBaAFIgSB3IgRB5QgEAdgOAbQgPAcgWAVQgXAVgdANQgcANggAAg");
	this.shape_576.setTransform(782.9467,245.425);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("Ah2ixIBYghIBVDrIAVjbIArgCIAugBIgsGPIgoABIgoABIhbjdIgLBtIgLBtIhcAKg");
	this.shape_577.setTransform(750.025,244.875);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgdjIIBdAAIgnGQIgrAAIgtABg");
	this.shape_578.setTransform(725.1,245.15);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgzDJIgsgBIAtk7IhfADIAPhaICKAFICKAEIgQBUIhegDIgWCdIgWCeIgrgCg");
	this.shape_579.setTransform(705.825,245);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("Ah2ixIBYghIBVDrIAVjbIArgCIAugBIgsGPIgoABIgoABIhbjdIgLBtIgLBtIhcAKg");
	this.shape_580.setTransform(675.225,244.875);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgXDPQgrgBgegTQgdgSgRgeQgQgegGglQgFglAGgmQAGgnAPgkQAPglAZgcQAZgcAhgRQAggSAoAAQAqAAAdATQAcASARAeQARAeAEAmQAFAmgGAmQgFAmgPAlQgPAkgXAcQgXAcggARQgfASglAAgAgMhvQgOAIgLANQgLAOgIASQgKASgGATQgFAVgBAXQAAAXAGATQAGATANANQAOANAVADIAIAAQAOAAAOgIQANgIALgOQAKgOAIgSQAIgTAEgTQAFgVAAgWQgBgXgFgSQgGgTgMgMQgLgNgSgEIgFAAIgEAAQgPAAgMAIg");
	this.shape_581.setTransform(641.75,245.125);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AhNDHQgZgMgSgWQgSgYgJgjQgIglAGgwQAFgpAOgpQAOgpAYghQAZghAjgVQAigUAvAAQAdgBAbALQAaALAVAUIg6BNQgWgfgiAAQgaAAgSAOQgSAOgNAVQgNAWgHAYQgGAYgCAUQgCAaADAUQADATAHAOQAHANAKAGQALAIANAAQAYABAUgKQATgJARgSIAiBCQgYAbggAQQghAPgjAAQgcAAgagMg");
	this.shape_582.setTransform(611.4509,245.05);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AhDDNQgVgEgRgHQgSgJgOgMQgOgMgIgQIAbggIAcghQAIANALAJQALAHAMAFQANAFAOADQAOABAOAAQAOgBAMgEQAMgEAIgHQAIgGAEgIQAEgJgBgJQAAgOgOgKQgOgJgTgHIgpgRQgWgIgSgNQgRgOgKgVQgKgVAGggQAEgeAPgWQAOgWAVgPQAUgOAZgHQAYgHAZgBQAhAAAfALQAeALAXAYIg6BKQgGgIgIgHQgJgIgKgEQgKgFgLgCQgLgDgKAAQgSAAgMAIQgOAJgDARQgDAOAPAJQAOAKAXAJIAAAAIAdAKQAPAFAOAHQAOAHANAKQAMAJAJANQAIAMADASQAEAQgEAXQgGAggQAYQgPAYgVAQQgWAPgaAIQgaAJgaABIgHAAIgGABQgVAAgVgFg");
	this.shape_583.setTransform(564.375,245.15);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("ABCCLIh+AGIgcA/IhPgLICwmUIAuACIAtADIBEGHIguAJIgvAKgAgXA+IBRgHIgMiTg");
	this.shape_584.setTransform(530.3,245.475);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AhWjPIDpAHIgGAmIgFAnIiUgFIgOBPIB5gFIgDAnIgDApIg/AEIg/AFIgNBUICfgJIgCArIgCAsIh9AGIh+AFg");
	this.shape_585.setTransform(501.825,245.2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AhDDNQgVgEgRgHQgSgJgOgMQgOgMgIgQIAbggIAcghQAIANALAJQALAHAMAFQANAFAOADQAOABAOAAQAOgBAMgEQAMgEAIgHQAIgGAEgIQAEgJgBgJQAAgOgOgKQgOgJgTgHIgpgRQgWgIgSgNQgRgOgKgVQgKgVAGggQAEgeAPgWQAOgWAVgPQAUgOAZgHQAYgHAZgBQAhAAAfALQAeALAXAYIg6BKQgGgIgIgHQgJgIgKgEQgKgFgLgCQgLgDgKAAQgSAAgMAIQgOAJgDARQgDAOAPAJQAOAKAXAJIAAAAIAdAKQAPAFAOAHQAOAHANAKQAMAJAJANQAIAMADASQAEAQgEAXQgGAggQAYQgPAYgVAQQgWAPgaAIQgaAJgaABIgHAAIgGABQgVAAgVgFg");
	this.shape_586.setTransform(471.425,245.15);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AhWjPIDpAHIgGAmIgFAnIiUgFIgOBPIB5gFIgDAnIgDApIg/AEIg/AFIgNBUICfgJIgCArIgCAsIh9AGIh+AFg");
	this.shape_587.setTransform(441.575,245.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AicDJIAmmJIAQgDIAhgEIAmgFQAVgCAOAAIAHAAIAGABQAsAEAeATQAdATAQAdQAQAeAEAlQAEAmgGApQgGAugVAkQgUAkgfAZQgeAZgmANQglAOgoAAgAgTh9IgVADIgVDzIAEAAIAFAAQAbAAAVgKQATgJAPgSQAQgSAJgYQAKgZADgeQAFgngIgcQgJgcgYgMQgHgEgHgBQgIgBgJAAIgUABg");
	this.shape_588.setTransform(411.18,245.175);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgvDKQgVgHgOgPQgOgPgHgVQgHgVADgcQAEgcANgXQAOgYARgUIAhglQAQgRAKgRIBRAKQgJAbgPAUQgQAUgPAQIgaAfQgLAOgDAOQgEARAJANQAJAMAVAAQASAAATgIIAigRIARBRQgcAQgeAHQgdAIgZAAQgYAAgUgIgAAGhsQgOgPgBgYQABgOAFgLQAEgMAJgIQAJgIALgFQAMgEAOAAQAQAAALAFQALAFAGAIQAGAJACALQABALgCALQgCALgFAKQgFAKgIAIQgIAIgLAFQgKAFgNAAQgYAAgPgQg");
	this.shape_589.setTransform(385.1167,247.925);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FF0000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_590.setTransform(732.7173,176.125);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FF0000").s().p("AhHimIC/AHIgFAiQgCAUgEARIhygEIgFAuIBZgDIgCAlIgCAmIgxADIgyACIgHA2IB5gHIgBAnIgCAoIhmAFIhoAEg");
	this.shape_591.setTransform(714.65,166.25);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FF0000").s().p("AgnCiIgogBIAjjyIhLABIAPhSIBwADIBwAEIgPBNIhHgCIgSB5IgSB5QgQgBgVABg");
	this.shape_592.setTransform(695.375,166.1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FF0000").s().p("Ag2ClQgRgEgPgHQgPgHgMgLQgMgLgGgNIAageIAageQAKAWAUAHQAVAIAXAAQATgCAMgIQAMgIgDgNQAAgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgNgFgLgHQgLgHgJgKQgIgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQATgGAWAAIAOABIAOACQAUAFASAJQAQAKANAPIg3BEQgFgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAHASgFAeQgEAagMAUQgNAUgTANQgSAOgWAHQgYAHgYAAQgSAAgRgEg");
	this.shape_593.setTransform(670.05,166.175);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FF0000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_594.setTransform(643.825,166.475);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FF0000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_595.setTransform(620.475,166.125);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FF0000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_596.setTransform(598.825,166.125);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FF0000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_597.setTransform(574.325,166.475);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FF0000").s().p("AhmDIIgsgBIAdjHIAdjIIDrAGIgHAnIgIAoIiQgFIgQBnIB0AGIgOBRIhygFIgKBEIgKBEIgqgBg");
	this.shape_598.setTransform(551.825,162.675);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("EhkRA4OMAAAhwbMDIiAAAMAAABwbgADmTXMAp3AAAIAAwPMgp3AAAgEg4OATXMAp3AAAIAAwPMgp3AAAg");
	this.shape_599.setTransform(639.8,359.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.sii},{t:this.shape_572},{t:this.shape_571},{t:this.noo},{t:this.shape_570},{t:this.shape_569}]},17).wait(1));

	// Capa_1
	this.instance_2 = new lib.Desiertoai();
	this.instance_2.setTransform(-46,-41.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},17).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(594,318.5,1838,717);
// library properties:
lib.properties = {
	id: 'E193036E09420341B269BF49BAE65840',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/nivel 4 pereza_atlas_1.png?1698510833857", id:"nivel 4 pereza_atlas_1"},
		{src:"sounds/botones.mp3?1698510834618", id:"botones"},
		{src:"sounds/niveles.mp3?1698510834618", id:"niveles"}
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
an.compositions['E193036E09420341B269BF49BAE65840'] = {
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