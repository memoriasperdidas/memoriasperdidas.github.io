(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Nivel 5 calvo_atlas_1", frames: [[1893,1110,237,241],[0,0,1891,1415],[1893,0,268,241],[1893,243,211,287],[1893,532,211,287],[0,1417,2478,1077],[1893,821,211,287]]}
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



(lib.copiaflash0ai5 = function() {
	this.initialize(ss["Nivel 5 calvo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copiaflash0ai6 = function() {
	this.initialize(ss["Nivel 5 calvo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copiaflash0ai7 = function() {
	this.initialize(ss["Nivel 5 calvo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copiaflash0ai8 = function() {
	this.initialize(ss["Nivel 5 calvo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copiaflash0ai9 = function() {
	this.initialize(ss["Nivel 5 calvo_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.DesiertoaiActivos = function() {
	this.initialize(ss["Nivel 5 calvo_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.initialize(ss["Nivel 5 calvo_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.calvo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E120D").p("AiZk1IAUBlQAeBmA1AKIBbBKQBgBZARBOIBVglQBbgqAagcIAEA7QgGBBgtAXQgnAhhAAgQiAA+h7gHQhRgphPgyQifhkAGgsQgDgeAIglQARhKA9gmQAZgRAcgiQA3hDAOhSg");
	this.shape.setTransform(884.5224,522.4876);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A6BC").s().p("AgtEzQhRgphPgyQifhkAGgsQgDgeAIglQARhKA9gmQAZgRAcgiQA3hDAOhSIAUBlQAeBmA1AKIBbBKQBgBZARBOIBVglQBbgqAagcIAEA7QgGBBgtAXQgnAhhAAgQhzA4hvAAIgZgBg");
	this.shape_1.setTransform(884.5217,522.2853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1E120D").p("AAEiBIAQAPQASATALAWQAiBHg5BKIhCA6QgEgLgEgVQgJgsgDg2g");
	this.shape_2.setTransform(934.5354,478.5189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008EB4").s().p("AgwBiQgJgrgDg3IBAiBIAQAPQASATALAWQAiBIg5BKIhCA5QgEgLgEgVg");
	this.shape_3.setTransform(934.5387,478.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1E120D").p("AlmqpIACAeQABAkAKAmQAeB3BkBTIArAfQA7AnBLAqIA9AaQBKAlA9A2QDDCsgMEWQBmgwBYhkQCwjHhFkEIAMAHQAPAMAQAXQA2BIA1CcIAEAcQAEAigCAmQgJB5hDBnQgkArg1AyQhqBkhVAlQhNAmhhAoQjCBRhgAOQh7g4iThOQklichyhxQg3g0gYhcQgwi3CajFQAlgzAngxQBNhjAKAJQAjgiAmgzQBFheANhPQACgGAAgG");
	this.shape_4.setTransform(881.8292,487.3828);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#59BEE7").s().p("AkoIwQklichyhxQg3g0gYhcQgwi3CajFQAlgzAngxQBNhjAKAJQAjgiAmgzQBLhmAJhTIAAAqQABAkAKAmQAeB3BkBTIArAfQA7AnBLAqIA9AaQBKAlA9A2QDDCsgMEWQBmgwBYhkQCwjHhFkEIAMAHQAPAMAQAXQA2BIA1CcIAEAcQAEAigCAmQgJB5hDBnQgkArg1AyQhqBkhVAlQhNAmhhAoQjCBRhgAOQh7g4iThOg");
	this.shape_5.setTransform(881.8292,487.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1E120D").p("AAiiuIAJANQAJAPAFARQAPA2gmAsIgXBGQgQBPAbAlQgYgSgXgbQgtg2ANgpQAAgHADgIQAHgUARgOQASgSAQgaQAhg2gDgqg");
	this.shape_6.setTransform(860.2284,412.711);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008EB4").s().p("AgZB3Qgtg2ANgoQAAgHADgJQAHgTARgOQASgSAQgbQAhg1gDgqIAJANQAJAPAFARQAPA2gmArIgXBHQgQBPAbAlQgYgTgXgbg");
	this.shape_7.setTransform(860.2284,411.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1E120D").p("Aj2wfIAYAQQAcAYAXAqQBJCEgDEAIAFDZQAPDWAygQIASAmQAZArAiAfQBwBiClhBQBLgKBAgqQCAhTg5igIA2AvQBBA8A9BCQDDDVBLDLIAJAfQAJAnAAArQgCCJhgB4Qh6BSivBcQleC5kGA4IkLhcQiPhIiYhbQkui3gphhQgngvgahMQg1iYBCiTQgCgPApg9QBTh6DXjsQA5hAA+hKQB9iVAag1QAKgPASg3QAlhtAtjHg");
	this.shape_8.setTransform(882.0834,453.8024);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#467286").s().p("AkRPCQiPhHiYhcQkui2gphhQgngvgahMQg1iYBCiUQgCgOApg9QBTh7DXjsQA5g/A+hKQB9iVAag2QAKgPASg2QAlhuAtjGIAYAQQAcAYAXApQBJCFgDEAIAFDZQAPDVAygPIASAmQAZArAiAfQBwBhClhAQBLgKBAgqQCAhUg5ifIA2AuQBBA9A9BCQDDDVBLDLIAJAfQAJAnAAArQgCCJhgB4Qh6BSivBcQleC5kGA4g");
	this.shape_9.setTransform(882.0834,453.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1E120D").p("Akq0BIAdAlQAiAwAdA2QBbCuAACvIAABRQABBiAFBVQATEPA9AmIAqBOQA1BVA3AgQCtBnBznIIBYBjQBoBkBMAIIBVBCQBmBTBTBPQEJEAgXCJIABAoQgBAzgMAzQglChh6BjQitBZjXBhQmuDEjNAtQiVgti6hQQl0iei3ioQgggRgrgjQhWhGg2hXQiukVDOlWII9qfQBDhxA8iEQB2kKgmhjg");
	this.shape_10.setTransform(886.6454,436.8557);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#224B99").s().p("AlUSDQl0iei3inQgggSgrgjQhWhGg2hWQiukWDOlXII9qeQBDhwA8iFQB2kJgmhkIAdAlQAiAwAdA3QBbCtAACwIAABRQABBhAFBVQATEPA9AmIAqBPQA1BUA3AhQCtBmBznIIBYBjQBoBlBMAIIBVBCQBmBSBTBPQEJEAgXCJIABAoQgBAzgMAzQglCih6BiQitBZjXBhQmuDEjNAuQiVgui6hQg");
	this.shape_11.setTransform(886.6454,436.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1E120D").p("AiZk1IAUBlQAeBmA1AKIBbBKQBgBZARBOIBVglQBbgqAagcIAEA7QgGBBgtAXQgnAhhAAgQiAA+h7gHQhRgphPgyQifhkAGgsQgDgeAIglQARhKA9gmQAZgRAcgiQA3hDAOhSg");
	this.shape_12.setTransform(305.5724,548.7376);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A6BC").s().p("AgtEzQhRgphPgyQifhkAGgsQgDgeAIglQARhKA9gmQAZgRAcgiQA3hDAOhSIAUBlQAeBmA1AKIBbBKQBgBZARBOIBVglQBbgqAagcIAEA7QgGBBgtAXQgnAhhAAgQhzA4hvAAIgZgBg");
	this.shape_13.setTransform(305.5717,548.5353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1E120D").p("AAEiBIAQAPQASATALAWQAiBHg5BKIhCA6QgEgLgEgVQgJgsgDg2g");
	this.shape_14.setTransform(355.5854,504.7689);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008EB4").s().p("AgwBiQgJgrgDg3IBAiBIAQAPQASATALAWQAiBIg5BKIhCA5QgEgLgEgVg");
	this.shape_15.setTransform(355.5887,504.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1E120D").p("AlmqpQACgGAAgGAlmqpIACAeQABAkAKAmQAeB3BkBTIArAfQA7AnBLAqIA9AaQBKAlA9A2QDDCsgMEWQBmgwBYhkQCwjHhFkEIAMAHQAPAMAQAXQA2BIA1CcIAEAcQAEAigCAmQgJB5hDBnQgkArg1AyQhqBkhVAlQhNAmhhAoQjCBRhgAOQh7g4iThOQklichyhxQg3g0gYhcQgwi3CajFQAlgzAngxQBNhjAKAJQAjgiAmgzQBFheANhPg");
	this.shape_16.setTransform(302.8792,513.6328);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#59BEE7").s().p("AkoIwQklichyhxQg3g0gYhcQgwi3CajFQAlgzAngxQBNhjAKAJQAjgiAmgzQBLhmAJhTIAAAqQABAkAKAmQAeB3BkBTIArAfQA7AnBLAqIA9AaQBKAlA9A2QDDCsgMEWQBmgwBYhkQCwjHhFkEIAMAHQAPAMAQAXQA2BIA1CcIAEAcQAEAigCAmQgJB5hDBnQgkArg1AyQhqBkhVAlQhNAmhhAoQjCBRhgAOQh7g4iThOg");
	this.shape_17.setTransform(302.8792,513.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1E120D").p("AAiiuIAJANQAJAPAFARQAPA2gmAsIgXBGQgQBPAbAlQgYgSgXgbQgtg2ANgpQAAgHADgIQAHgUARgOQASgSAQgaQAhg2gDgqg");
	this.shape_18.setTransform(281.2784,438.961);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008EB4").s().p("AgZB3Qgtg2ANgoQAAgHADgJQAHgTARgOQASgSAQgbQAhg1gDgqIAJANQAJAPAFARQAPA2gmArIgXBHQgQBPAbAlQgYgTgXgbg");
	this.shape_19.setTransform(281.2784,438);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1E120D").p("Aj2wfIAYAQQAcAYAXAqQBJCEgDEAIAFDZQAPDWAygQIASAmQAZArAiAfQBwBiClhBQBLgKBAgqQCAhTg5igIA2AvQBBA8A9BCQDDDVBLDLIAJAfQAJAnAAArQgCCJhgB4Qh6BSivBcQleC5kGA4IkLhcQiPhIiYhbQkui3gphhQgngvgahMQg1iYBCiTQgCgPApg9QBTh6DXjsQA5hAA+hKQB9iVAag1QAKgPASg3QAlhtAtjHg");
	this.shape_20.setTransform(303.1334,480.0524);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#467286").s().p("AkRPCQiPhHiYhcQkui2gphhQgngvgahMQg1iYBCiUQgCgOApg9QBTh7DXjsQA5g/A+hKQB9iVAag2QAKgPASg2QAlhuAtjGIAYAQQAcAYAXApQBJCFgDEAIAFDZQAPDVAygPIASAmQAZArAiAfQBwBhClhAQBLgKBAgqQCAhUg5ifIA2AuQBBA9A9BCQDDDVBLDLIAJAfQAJAnAAArQgCCJhgB4Qh6BSivBcQleC5kGA4g");
	this.shape_21.setTransform(303.1334,480);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1E120D").p("Akq0BIAdAlQAiAwAdA2QBbCuAACvIAABRQABBiAFBVQATEPA9AmIAqBOQA1BVA3AgQCtBnBznIIBYBjQBoBkBMAIIBVBCQBmBTBTBPQEJEAgXCJIABAoQgBAzgMAzQglChh6BjQitBZjXBhQmuDEjNAtQiVgti6hQQl0iei3ioQgggRgrgjQhWhGg2hXQiukVDOlWII9qfQBDhxA8iEQB2kKgmhjg");
	this.shape_22.setTransform(307.6954,463.1057);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#224B99").s().p("AlUSDQl0iei3inQgggSgrgjQhWhGg2hWQiukWDOlXII9qeQBDhwA8iFQB2kJgmhkIAdAlQAiAwAdA3QBbCtAACwIAABRQABBhAFBVQATEPA9AmIAqBPQA1BUA3AhQCtBmBznIIBYBjQBoBlBMAIIBVBCQBmBSBTBPQEJEAgXCJIABAoQgBAzgMAzQglCih6BiQitBZjXBhQmuDEjNAuQiVgui6hQg");
	this.shape_23.setTransform(307.6954,463);

	this.instance = new lib.copiaflash0ai6();
	this.instance.setTransform(169,81,0.4425,0.3984);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1E120D").p("AphA3IgEApQAAAyARAwQA3CaDUBIQDFBNANAPIEHhRQENhXAbggIAkgSQArgZAfgiQBjhqg2iSQgyAPg2gNQhtgYgZiFQACg2ADg3QAGhvAJgFQgVAHgdAVQg5AqgmBGQgPgNgMgUQgXgoAUggIgZgMQgIgKAEgWQAIgsA9g7QgzAIg5AaQhwA2gWBcIAXCbQgNAYgaATQg2AlhDgcQgOgJgNgeQgag8AIhnQgXAlgXAqQgsBWAIAeIAABQQAIBbAnA/IAWAmQASAtgWAiQhEAHhVgSQiqgkhXh4g");
	this.shape_24.setTransform(879.9175,511.6457);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A6C8").s().p("AlJGjQjUhIg3iaQgRgwAAgyIAEgpQBXB4CqAkQBVASBEgHQAWgigSgtIgWgmQgng/gIhbIAAhQQgIgeAshWQAXgqAXglQgIBnAaA8QANAeAOAJQBDAcA2glQAagTANgYIgXibQAWhcBwg2QA5gaAzgIQg9A7gIAsQgEAWAIAKIAZAMQgUAgAXAoQAMAUAPANQAmhGA5gqQAdgVAVgHQgJAFgGBvIgFBtQAZCFBtAYQA2ANAygPQA2CShjBqQgfAigrAZIgkASQgbAgkNBXIkHBRQgNgPjFhNg");
	this.shape_25.setTransform(879.9175,511.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1E120D").p("ABYsUQhJAegyA/QhlB9B0CiIAKAMQAKAQABASQAEA4hWA6QgwAPg6ABQh0ABg1hIQgeAtgeAvQg8BfAAAQIgNA+QgJBCAWAXQBJB9AAAPQg5AAhOgQQibghhnhTIgSAmQgUAxgIA1QgbCsBnCbIAJAJQASAOAtAXQCSBLF0COQHBhnAogCIBCgPQBQgUBHgdQDmhbA9iKIAbi2QhagFg3g4QhshvC1kBIhfAAQgUgHgagZQg0gygehaQgRAUgkAMQhIAYhcgsQgdgRgZgYQgzguARghIAcgjIiKgKQglgHgZgiQgyhDA+iHg");
	this.shape_26.setTransform(884.3422,489.4856);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0063A2").s().p("Aq2I8QgtgXgSgOIgJgJQhnibAbisQAIg1AUgxIASgmQBnBTCbAhQBOAQA5AAQAAgPhJh9QgWgXAJhCIANg+QAAgQA8hfQAegvAegtQA1BIB0gBQA6gBAwgPQBWg6gEg4QgBgSgKgQIgKgMQh0iiBlh9QAyg/BJgeQg+CHAyBDQAZAiAlAHICKAKIgcAjQgRAhAzAuQAZAYAdARQBcAsBIgYQAkgMARgUQAeBaA0AyQAaAZAUAHIBfAAQi1EBBsBvQA3A4BaAFIgbC2Qg9CKjmBbQhHAdhQAUIhCAPQgoACnBBnQl0iOiShLg");
	this.shape_27.setTransform(884.3039,489.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1E120D").p("AC1wJIAUANQAXASARAYQA2BNggBxIg1BcQgyBjAVAkIAXAOQAcAPAbADQBXALAqhsIANAyQAJA2gWATIgEAUQgEAZAEAWQAMBIBQASIA9AEQBDgFAdgsIAUA3QAfBBA7A1IAgAHQAnAGAjgFQBwgPAeh5IAXAqQAUAzgQAtIgWBPQgkBhhFBdIgNAdQgNAoADA1IAFANQAHAQALALQAiAjA6gWIAwgZQAxgfADggIgUEvIgMA7QgVBGgtAzIgEAFQgxA1hWA4Qg2Aig7AdQg3AWhDAYQiGAvg4AKQiAAXiFAbQkIA2gWASQiEgiiSgqQkkhThDgkQhwgnhchiQi4jEBkkmQAGgPALgYQAXgwAbgtQBViOBgg1IgdBHQgXBSAbA9IBDA0QBLAvAmgTQgcgbgHg2QgNhqBsiBQB6i5ANgZQAKghAGgnQAKhQgagkIAKADQANAFANAOQArAvAhB8IAGAWQAIAaANAWQAoBFBHgHIAQgCQASgDAOgIQAtgYgVg1QgbgXgXgsQgvhYARhkQAAgGACgKQAEgUAMgXQAnhIBqhAIBKgtQBQgyAWgWQAPgNAOgbQAcg1gEhIg");
	this.shape_28.setTransform(882.3036,468.5399);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#49768A").s().p("AmSO+QkkhThDgkQhwgohchiQi4jEBkkmIARgnQAXgwAbgtQBViNBgg1IgdBHQgXBSAbA9IBDAzQBLAwAmgTQgcgcgHg1QgNhqBsiCQB6i5ANgZQAKggAGgoQAKhPgagkIAKACQANAFANAPQArAvAhB7IAGAWQAIAbANAVQAoBFBHgGIAQgCQASgEAOgHQAtgYgVg1QgbgYgXgsQgvhXARhkQAAgGACgKQAEgVAMgWQAnhIBqhAIBKguQBQgyAWgWQAPgMAOgbQAcg2gEhIIAUANQAXASARAYQA2BOggBwIg1BcQgyBkAVAkIAXAOQAcAPAbADQBXALAqhsIANAyQAJA2gWASIgEAVQgEAYAEAXQAMBHBQATIA9AEQBDgFAdgsIAUA2QAfBBA7A1IAgAHQAnAHAjgFQBwgQAeh4IAXAqQAUAzgQAtIgWBOQgkBihFBcIgNAeQgNAoADA1IAFANQAHAPALALQAiAjA6gWIAwgZQAxgfADgfIgUEuIgMA8QgVBFgtAzIgEAFQgxA2hWA3Qg2Aig7AeQg3AWhDAXQiGAwg4AJQiAAXiFAbQkIA2gWATQiEgjiSgpg");
	this.shape_29.setTransform(882.1394,468.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1E120D").p("AhZ0AIBYBMQBpBeBbBfQEjExAiDHIA8huIAqApQAzAzAqA1QCGCnAABzIBVjoIEADoIAIAeQAIAogFAuQgPCRiCCYIgMBiIB9iUIAxDYQArDgggAoQgOAogYAwQgvBggyApQgZAthuA8QjaB4mmBLInQBzQi4gui8g2Ql4hsgWglQhAgXhIg+QiQh9gojIQgOg6AThhQAljDCjjIIBRg+QBhhOBOhSQD3kJgrjPIDcClIAshPQA6hVBEgfQBngvAyg2QAZgbADgRg");
	this.shape_30.setTransform(881.5479,449.7325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#364293").s().p("AoFShQl4hsgWglQhAgXhIg+QiQh9gojIQgOg6AThhQAljDCjjIIBRg+QBhhOBOhSQD3kJgrjPIDcClIAshPQA6hVBEgfQBngvAyg2QAZgbADgRIhanvIBYBMQBpBeBbBfQEjExAiDHIA8huIAqApQAzAzAqA1QCGCnAABzIBVjoIEADoIAIAeQAIAogFAuQgPCRiCCYIgMBiIB9iUIAxDYQArDgggAoQgOAogYAwQgvBggyApQgZAthuA8QjaB4mmBLInQBzQi4gui8g2g");
	this.shape_31.setTransform(881.5479,450.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1E120D").p("AphA3IgEApQAAAyARAwQA3CaDUBIQDFBNANAPIEHhRQENhXAbggIAkgSQArgZAfgiQBjhqg2iSQgyAPg2gNQhtgYgZiFQACg2ADg3QAGhvAJgFQgVAHgdAVQg5AqgmBGQgPgNgMgUQgXgoAUggIgZgMQgIgKAEgWQAIgsA9g7QgzAIg5AaQhwA2gWBcIAXCbQgNAYgaATQg2AlhDgcQgOgJgNgeQgag8AIhnQgXAlgXAqQgsBWAIAeIAABQQAIBbAnA/IAWAmQASAtgWAiQhEAHhVgSQiqgkhXh4g");
	this.shape_32.setTransform(338.2675,511.6457);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A6C8").s().p("AlJGjQjUhIg3iaQgRgwAAgyIAEgpQBXB4CqAkQBVASBEgHQAWgigSgtIgWgmQgng/gIhbIAAhQQgIgeAshWQAXgqAXglQgIBnAaA8QANAeAOAJQBDAcA2glQAagTANgYIgXibQAWhcBwg2QA5gaAzgIQg9A7gIAsQgEAWAIAKIAZAMQgUAgAXAoQAMAUAPANQAmhGA5gqQAdgVAVgHQgJAFgGBvIgFBtQAZCFBtAYQA2ANAygPQA2CShjBqQgfAigrAZIgkASQgbAgkNBXIkHBRQgNgPjFhNg");
	this.shape_33.setTransform(338.2675,511.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1E120D").p("ABYsUQhJAegyA/QhlB9B0CiIAKAMQAKAQABASQAEA4hWA6QgwAPg6ABQh0ABg1hIQgeAtgeAvQg8BfAAAQIgNA+QgJBCAWAXQBJB9AAAPQg5AAhOgQQibghhnhTIgSAmQgUAxgIA1QgbCsBnCbIAJAJQASAOAtAXQCSBLF0COQHBhnAogCIBCgPQBQgUBHgdQDmhbA9iKIAbi2QhagFg3g4QhshvC1kBIhfAAQgUgHgagZQg0gygehaQgRAUgkAMQhIAYhcgsQgdgRgZgYQgzguARghIAcgjIiKgKQglgHgZgiQgyhDA+iHg");
	this.shape_34.setTransform(342.6922,489.4856);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0063A2").s().p("Aq2I8QgtgXgSgOIgJgJQhnibAbisQAIg1AUgxIASgmQBnBTCbAhQBOAQA5AAQAAgPhJh9QgWgXAJhCIANg+QAAgQA8hfQAegvAegtQA1BIB0gBQA6gBAwgPQBWg6gEg4QgBgSgKgQIgKgMQh0iiBlh9QAyg/BJgeQg+CHAyBDQAZAiAlAHICKAKIgcAjQgRAhAzAuQAZAYAdARQBcAsBIgYQAkgMARgUQAeBaA0AyQAaAZAUAHIBfAAQi1EBBsBvQA3A4BaAFIgbC2Qg9CKjmBbQhHAdhQAUIhCAPQgoACnBBnQl0iOiShLg");
	this.shape_35.setTransform(342.6539,489.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1E120D").p("AC1wJIAUANQAXASARAYQA2BNggBxIg1BcQgyBjAVAkIAXAOQAcAPAbADQBXALAqhsIANAyQAJA2gWATIgEAUQgEAZAEAWQAMBIBQASIA9AEQBDgFAdgsIAUA3QAfBBA7A1IAgAHQAnAGAjgFQBwgPAeh5IAXAqQAUAzgQAtIgWBPQgkBhhFBdIgNAdQgNAoADA1IAFANQAHAQALALQAiAjA6gWIAwgZQAxgfADggIgUEvIgMA7QgVBGgtAzIgEAFQgxA1hWA4Qg2Aig7AdQg3AWhDAYQiGAvg4AKQiAAXiFAbQkIA2gWASQiEgiiSgqQkkhThDgkQhwgnhchiQi4jEBkkmQAGgPALgYQAXgwAbgtQBViOBgg1IgdBHQgXBSAbA9IBDA0QBLAvAmgTQgcgbgHg2QgNhqBsiBQB6i5ANgZQAKghAGgnQAKhQgagkIAKADQANAFANAOQArAvAhB8IAGAWQAIAaANAWQAoBFBHgHIAQgCQASgDAOgIQAtgYgVg1QgbgXgXgsQgvhYARhkQAAgGACgKQAEgUAMgXQAnhIBqhAIBKgtQBQgyAWgWQAPgNAOgbQAcg1gEhIg");
	this.shape_36.setTransform(340.6536,468.5399);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#49768A").s().p("AmSO+QkkhThDgkQhwgohchiQi4jEBkkmIARgnQAXgwAbgtQBViNBgg1IgdBHQgXBSAbA9IBDAzQBLAwAmgTQgcgcgHg1QgNhqBsiCQB6i5ANgZQAKggAGgoQAKhPgagkIAKACQANAFANAPQArAvAhB7IAGAWQAIAbANAVQAoBFBHgGIAQgCQASgEAOgHQAtgYgVg1QgbgYgXgsQgvhXARhkQAAgGACgKQAEgVAMgWQAnhIBqhAIBKguQBQgyAWgWQAPgMAOgbQAcg2gEhIIAUANQAXASARAYQA2BOggBwIg1BcQgyBkAVAkIAXAOQAcAPAbADQBXALAqhsIANAyQAJA2gWASIgEAVQgEAYAEAXQAMBHBQATIA9AEQBDgFAdgsIAUA2QAfBBA7A1IAgAHQAnAHAjgFQBwgQAeh4IAXAqQAUAzgQAtIgWBOQgkBihFBcIgNAeQgNAoADA1IAFANQAHAPALALQAiAjA6gWIAwgZQAxgfADgfIgUEuIgMA8QgVBFgtAzIgEAFQgxA2hWA3Qg2Aig7AeQg3AWhDAXQiGAwg4AJQiAAXiFAbQkIA2gWATQiEgjiSgpg");
	this.shape_37.setTransform(340.4894,468.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1E120D").p("AhZ0AIBYBMQBpBeBbBfQEjExAiDHIA8huIAqApQAzAzAqA1QCGCnAABzIBVjoIEADoIAIAeQAIAogFAuQgPCRiCCYIgMBiIB9iUIAxDYQArDgggAoQgOAogYAwQgvBggyApQgZAthuA8QjaB4mmBLInQBzQi4gui8g2Ql4hsgWglQhAgXhIg+QiQh9gojIQgOg6AThhQAljDCjjIIBRg+QBhhOBOhSQD3kJgrjPIDcClIAshPQA6hVBEgfQBngvAyg2QAZgbADgRg");
	this.shape_38.setTransform(339.8979,449.7325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#364293").s().p("AoFShQl4hsgWglQhAgXhIg+QiQh9gojIQgOg6AThhQAljDCjjIIBRg+QBhhOBOhSQD3kJgrjPIDcClIAshPQA6hVBEgfQBngvAyg2QAZgbADgRIhanvIBYBMQBpBeBbBfQEjExAiDHIA8huIAqApQAzAzAqA1QCGCnAABzIBVjoIEADoIAIAeQAIAogFAuQgPCRiCCYIgMBiIB9iUIAxDYQArDgggAoQgOAogYAwQgvBggyApQgZAthuA8QjaB4mmBLInQBzQi4gui8g2g");
	this.shape_39.setTransform(339.8979,450.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1E120D").p("AgDl7IAuAjQA2AuAmA0QB5CohbCtIC0iGIgEArQgGA1gLAwQgiCZhDAnQhEAyg0AUQg/APhJgDQiVgGg7hWQgMgIgTgXQgkgughhLIAgAMQAoAOAmAIQB5AaAzgoQAxggAehTQA/ilhWj+g");
	this.shape_40.setTransform(890.5543,519.5252);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A6C8").s().p("AgjF7QiUgFg8hWQgMgIgSgXQglgvghhLIAhANQAoANAmAJQB4AaA0gpQAxggAehSQA/ilhWj/IAuAjQA2AuAmA1QB4CohaCsIC0iGIgEArQgGA2gLAwQgjCZhDAnQhDAyg1AUQg0AMg7AAIgZgBg");
	this.shape_41.setTransform(890.725,519.4757);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1E120D").p("ACzrkIgXAvQgbBAgJBEQgeDaChCtIATAMQAYANAdADQBaALBdhWQgqC+gUAtIgKAaQgKAggBAbQgEBZBXAQIA+AIQBCABAZgjIAFAqQAFA0gEA0QgPCmhlBnQgpAig+AiQh8BDhnADQiLAbiygrQllhYjGljIAYAUQAgAYAsAWQCLBDDHAJIAnABQAvgBAqgKQCHgiAkhxQAEgfgDgkQgGhIgmgcQhPh2gjgyQgWglgRg0QgihnAXhJQAFgUALggQAXg/Afg5QBdivCLg2QAGgCAGgCAC1roIgCAE");
	this.shape_42.setTransform(876.1295,486.142);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#005E97").s().p("AhoLPQllhYjHljIAYAUQAhAYArAWQCMBDDGAJIAnABQAvgBArgKQCGgiAkhxQAFgfgDgkQgHhIglgcQhPh2gjgyQgWglgRg0QgjhnAYhJQAFgUALggQAWg/Afg5QBeivCLg2IACgEIAKAAIgMAEIgYAvQgbBAgJBEQgdDaChCtIATAMQAYANAcADQBaALBehWQgrC+gUAtIgKAaQgKAggBAbQgEBZBYAQIA9AIQBCABAZgjIAGAqQAFA0gFA0QgOCmhmBnQgpAig+AiQh8BDhnADQg1AKg7AAQhfAAhtgag");
	this.shape_43.setTransform(876.7566,486.142);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#1E120D").p("AAPukIgmBvQg1CBhKBbQjtEilgjGIgDAaQgCAhAIApQAaCBByCPIBKBIQBMBNAMAhIAJAMQAKASAGAYQATBOgaBzQguBFhfAoQi8BPjviRIgKAmQgFAxAWA4QBECzE5CyIAlATQAxAWA5ARQC2A1DAgYIBpgHQCAgKBwgPQFogvBDhOIAwgkQA6gsAwgtQCZiSgFhmQhIAMhVgEQiogIg8hQQgUgOgPggQgchBAfhZQAdg/AZhOQA0idgOhJQgZARghARQhDAjgqgCQgwAGg8gMQh4gYg8hZQgRgRgSgZQgkg0gBgvQgGhhgThtQgljZhCg5g");
	this.shape_44.setTransform(890.8093,471.2777);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#467286").s().p("AnFN+Qg5gQgxgXIglgTQk5iyhEizQgWg3AFgyIAKgmQDvCSC8hQQBfgnAuhFQAah0gThNQgGgZgKgRIgJgNQgMghhMhNIhKhHQhyiQgaiBQgIgoACgiIADgaQFgDHDtkjQBKhbA1iBIAmhuQBCA4AlDaQATBsAGBiQABAvAkAzQASAaARAQQA8BaB4AYQA8AMAwgGQAqABBDgiQAhgRAZgSQAOBKg0CdQgZBNgdBAQgfBZAcBAQAPAgAUAPQA8BPCoAJQBVAEBIgMQAFBmiZCRQgwAug6AsIgwAjQhDBOloAwQhwAPiAAKIhpAHQg7AHg6AAQiCAAh/glg");
	this.shape_45.setTransform(890.8093,471.111);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1E120D").p("AoS0KICWBFQC1BdCTBzQHWFvgiHIIAkArQAtAuAsAVQCOBCBOjYIAhBEQAmBVAYBTQBNELhXCcIAEAoQALAmAegDIASAPQAXARAYAHQBNAXA/hSIAdAjQAgAsAQAzQAzChiACfIjcCWIkdBpIi0AyQhZAUhvAPQjeAehwgZIkigtQgxgIhKgUQiVgoiAg5QhHglhKg8QiUh4gMhxQgPiDAoi3QAmiyAvgrIgHAjQgGApgBAiQgCBuA4AAIAcAWQAlAXAnALQB+AiBuhuQAMgSgCggQgFg+hLg/QhCgfg8hRQh3igAjj3QgBgKAFgVQAKgrAfg6QBmi3EWkEIhsDqQhkDmAmgTIABAgQAKAjAsASIAkAGQAtAEAtgKQCPgiBRimQAkgzAQhaQAhi0hkjCQgVgogog3QhQhthehMg");
	this.shape_46.setTransform(890.2319,440.0909);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#274294").s().p("AibT/IkigtQgxgIhKgUQiVgoiAg5QhHglhKg8QiUh4gMhxQgPiDAoi3QAmiyAvgrIgHAjQgGApgBAiQgCBuA4AAIAcAWQAlAXAnALQB+AiBuhuQAMgSgCggQgFg+hLg/QhCgfg8hRQh3igAjj3QgBgKAFgVQAKgrAfg6QBmi3EWkEIhsDqQhkDmAmgTIABAgQAKAjAsASIAkAGQAtAEAtgKQCPgiBRimQAkgzAQhaQAhi0hkjCQgVgogog3QhQhthehMICWBFQC1BdCTBzQHWFvgiHIIAkArQAtAuAsAVQCOBCBOjYIAhBEQAmBVAYBTQBNELhXCcIAEAoQALAmAegDIASAPQAXARAYAHQBNAXA/hSIAdAjQAgAsAQAzQAzChiACfIjcCWIkdBpIi0AyQhZAUhvAPQh6ARhXAAQhKAAgzgMg");
	this.shape_47.setTransform(890.2319,440.0682);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1E120D").p("AgDl7IAuAjQA2AuAmA0QB5CohbCtIC0iGIgEArQgGA1gLAwQgiCZhDAnQhEAyg0AUQg/APhJgDQiVgGg7hWQgMgIgTgXQgkgughhLIAgAMQAoAOAmAIQB5AaAzgoQAxggAehTQA/ilhWj+g");
	this.shape_48.setTransform(339.6543,500.8252);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A6C8").s().p("AgjF7QiUgFg8hWQgMgIgSgXQglgvghhLIAhANQAoANAmAJQB4AaA0gpQAxggAehSQA/ilhWj/IAuAjQA2AuAmA1QB4CohaCsIC0iGIgEArQgGA2gLAwQgjCZhDAnQhDAyg1AUQg0AMg7AAIgZgBg");
	this.shape_49.setTransform(339.825,500.7757);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1E120D").p("ACzrkIgXAvQgbBAgJBEQgeDaChCtIATAMQAYANAdADQBaALBdhWQgqC+gUAtIgKAaQgKAggBAbQgEBZBXAQIA+AIQBCABAZgjIAFAqQAFA0gEA0QgPCmhlBnQgpAig+AiQh8BDhnADQiLAbiygrQllhYjGljIAYAUQAgAYAsAWQCLBDDHAJIAnABQAvgBAqgKQCHgiAkhxQAEgfgDgkQgGhIgmgcQhPh2gjgyQgWglgRg0QgihnAXhJQAFgUALggQAXg/Afg5QBdivCLg2gAC1roIgCAEQAGgCAGgC");
	this.shape_50.setTransform(325.2295,467.442);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#005E97").s().p("AhoLPQllhYjHljIAYAUQAhAYArAWQCMBDDGAJIAnABQAvgBArgKQCGgiAkhxQAFgfgDgkQgHhIglgcQhPh2gjgyQgWglgRg0QgjhnAYhJQAFgUALggQAWg/Afg5QBeivCLg2IACgEIAKAAIgMAEIgYAvQgbBAgJBEQgdDaChCtIATAMQAYANAcADQBaALBehWQgrC+gUAtIgKAaQgKAggBAbQgEBZBYAQIA9AIQBCABAZgjIAGAqQAFA0gFA0QgOCmhmBnQgpAig+AiQh8BDhnADQg1AKg7AAQhfAAhtgag");
	this.shape_51.setTransform(325.8566,467.442);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#1E120D").p("AAPukIgmBvQg1CBhKBbQjtEilgjGIgDAaQgCAhAIApQAaCBByCPIBKBIQBMBNAMAhIAJAMQAKASAGAYQATBOgaBzQguBFhfAoQi8BPjviRIgKAmQgFAxAWA4QBECzE5CyIAlATQAxAWA5ARQC2A1DAgYIBpgHQCAgKBwgPQFogvBDhOIAwgkQA6gsAwgtQCZiSgFhmQhIAMhVgEQiogIg8hQQgUgOgPggQgchBAfhZQAdg/AZhOQA0idgOhJQgZARghARQhDAjgqgCQgwAGg8gMQh4gYg8hZQgRgRgSgZQgkg0gBgvQgGhhgThtQgljZhCg5g");
	this.shape_52.setTransform(339.9093,452.5777);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#467286").s().p("AnFN+Qg5gQgxgXIglgTQk5iyhEizQgWg3AFgyIAKgmQDvCSC8hQQBfgnAuhFQAah0gThNQgGgZgKgRIgJgNQgMghhMhNIhKhHQhyiQgaiBQgIgoACgiIADgaQFgDHDtkjQBKhbA1iBIAmhuQBCA4AlDaQATBsAGBiQABAvAkAzQASAaARAQQA8BaB4AYQA8AMAwgGQAqABBDgiQAhgRAZgSQAOBKg0CdQgZBNgdBAQgfBZAcBAQAPAgAUAPQA8BPCoAJQBVAEBIgMQAFBmiZCRQgwAug6AsIgwAjQhDBOloAwQhwAPiAAKIhpAHQg7AHg6AAQiCAAh/glg");
	this.shape_53.setTransform(339.9093,452.411);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1E120D").p("AoS0KICWBFQC1BdCTBzQHWFvgiHIIAkArQAtAuAsAVQCOBCBOjYIAhBEQAmBVAYBTQBNELhXCcIAEAoQALAmAegDIASAPQAXARAYAHQBNAXA/hSIAdAjQAgAsAQAzQAzChiACfIjcCWIkdBpIi0AyQhZAUhvAPQjeAehwgZIkigtQgxgIhKgUQiVgoiAg5QhHglhKg8QiUh4gMhxQgPiDAoi3QAmiyAvgrIgHAjQgGApgBAiQgCBuA4AAIAcAWQAlAXAnALQB+AiBuhuQAMgSgCggQgFg+hLg/QhCgfg8hRQh3igAjj3QgBgKAFgVQAKgrAfg6QBmi3EWkEIhsDqQhkDmAmgTIABAgQAKAjAsASIAkAGQAtAEAtgKQCPgiBRimQAkgzAQhaQAhi0hkjCQgVgogog3QhQhthehMg");
	this.shape_54.setTransform(339.3319,421.3909);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#274294").s().p("AibT/IkigtQgxgIhKgUQiVgoiAg5QhHglhKg8QiUh4gMhxQgPiDAoi3QAmiyAvgrIgHAjQgGApgBAiQgCBuA4AAIAcAWQAlAXAnALQB+AiBuhuQAMgSgCggQgFg+hLg/QhCgfg8hRQh3igAjj3QgBgKAFgVQAKgrAfg6QBmi3EWkEIhsDqQhkDmAmgTIABAgQAKAjAsASIAkAGQAtAEAtgKQCPgiBRimQAkgzAQhaQAhi0hkjCQgVgogog3QhQhthehMICWBFQC1BdCTBzQHWFvgiHIIAkArQAtAuAsAVQCOBCBOjYIAhBEQAmBVAYBTQBNELhXCcIAEAoQALAmAegDIASAPQAXARAYAHQBNAXA/hSIAdAjQAgAsAQAzQAzChiACfIjcCWIkdBpIi0AyQhZAUhvAPQh6ARhXAAQhKAAgzgMg");
	this.shape_55.setTransform(339.3319,421.3682);

	this.instance_1 = new lib.copiaflash0ai9();
	this.instance_1.setTransform(242,274);

	this.instance_2 = new lib.flash0ai();
	this.instance_2.setTransform(774,274);

	this.instance_3 = new lib.copiaflash0ai8();
	this.instance_3.setTransform(237,298);

	this.instance_4 = new lib.copiaflash0ai8();
	this.instance_4.setTransform(795,279);

	this.instance_5 = new lib.copiaflash0ai7();
	this.instance_5.setTransform(214,344);

	this.instance_6 = new lib.copiaflash0ai7();
	this.instance_6.setTransform(779,344);

	this.instance_7 = new lib.copiaflash0ai5();
	this.instance_7.setTransform(769,335);

	this.instance_8 = new lib.copiaflash0ai5();
	this.instance_8.setTransform(169,335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},5).to({state:[{t:this.instance},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},5).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},4).to({state:[{t:this.instance},{t:this.instance_4},{t:this.instance_3}]},4).to({state:[{t:this.instance},{t:this.instance_6},{t:this.instance_5}]},4).to({state:[{t:this.instance},{t:this.instance_8},{t:this.instance_7}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(169,81,878,563.7);


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
(lib.Nivel5calvo = function(mode,startPosition,loop,reversed) {
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
		}
		
		
		
		
		
		this.respuesta2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(1);
			
			window.erradas++;
		}
		
		
		
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
			
			window.erradas++;
		}
		
		
		
		
		this.respuesta5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(2);
			
			
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
			
			window.erradas++;
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		
		this.respuesta10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(4);
			
			window.erradas++;
		}
		
		
		
		this.respuesta11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop(4);
			
			
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
		
		window.open("dialogos 6.html", "_self");
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
	this.shape.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg+ADIg+ADg");
	this.shape.setTransform(1066.55,659.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_1.setTransform(1051.975,659.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdBEIg2ACIgOAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_2.setTransform(1036.25,659.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOBDIgXgoIgHAAIgFgBIgFAjIgDAiIgYABIgZABIAVi9QAUgGASgDQARgDAQAAQAKAAAKABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAkA5IgUAQIgWAQIgXgmgAgDg6IgJABIgDAUIgCAUIAIAAIANAAQAGgBAFgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_3.setTransform(1021.2,659.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBgQgNAAgLgBIAOhfIANhgIB0ADIgEAWIgEAWIhCgCIgGApIA1ACIgJAsIgzgCIgEAfIgFAgIgXgBg");
	this.shape_4.setTransform(1008.05,659.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_5.setTransform(1147.95,618.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhVIAXAAIAZgBIgVC/IgsAAIgkheIgEAwIgEAtIgyAFg");
	this.shape_6.setTransform(1133.45,618.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_7.setTransform(1118.5469,618.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIgBAXIAAAYIg+ADIg+ADg");
	this.shape_8.setTransform(1094.9,618.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViRIgtABIAJgxIBDACIBDACIgJAvIgrgCIgKBJIgLBJIgWgBg");
	this.shape_9.setTransform(1083.325,618.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhVIAXAAIAZgBIgVC/IgsAAIgjheIgFAwIgEAtIgyAFg");
	this.shape_10.setTransform(1068.55,618.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgEAcIA1gCIAAAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgCAYIg8ADIg/ADg");
	this.shape_11.setTransform(1054.1,618.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhMBfIgYgCIANhdIAOhbIAcgBIAdgCIARBkIArhhIAcgCIAdgBIgJBcIgKBcIgLAAIgNABIgNABIgMAAIAKhWIgJAUIgGAQIgGAPIgJAVIgUAAIgVgBIgMhKIgMBcIgYAAg");
	this.shape_12.setTransform(1037.675,618.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_13.setTransform(1019.3,618.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgxBgIgPheIgPheIAXgDIAZgCIAUB3IALgeIALgdIALgcIAMgfIAXADIAXAFIhHC6g");
	this.shape_14.setTransform(1006.175,618.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQhfIAxAAIgSC/IgWAAIgZAAg");
	this.shape_15.setTransform(993.25,618.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_16.setTransform(980.675,618.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgCAXIgBAVIgeACIgcACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_17.setTransform(966.85,618.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_18.setTransform(954.3519,618.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAkIg2BEIgjgfIBBhPIgphDIArgeIAeA5IAug5IAjAbIg5BIIAuBNIgWAPIgWAQg");
	this.shape_19.setTransform(938.85,618.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg9ADIg/ADg");
	this.shape_20.setTransform(924.7,618.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgEAjIgDAiIgYABIgZABIAVi9QATgGATgDQARgDAPAAQAMAAAJABQAWAGAMAQQAMAQgDAcQgDAUgJANQgJAMgNAIIAkA5IgVAQIgVAQIgYgmgAgDg6IgJABIgDAUIgCAUIAIAAIAMAAQAHgBAFgCQAFgCAEgDQADgEABgHQADgJgEgGQgFgFgKgCIgEgBIgEAAIgHABg");
	this.shape_21.setTransform(1169.6,577.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRhgIAyAAIgRC/IgYABIgYAAg");
	this.shape_22.setTransform(1157.55,577.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_23.setTransform(1145.6469,577.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhWIAXAAIAZgBIgVC/IgsABIgjheIgFAvIgEAtIgyAGg");
	this.shape_24.setTransform(1129.75,577.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRhgIAyAAIgSC/IgXABIgYAAg");
	this.shape_25.setTransform(1117.7,577.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhMBfIgYgBIANheIAOhcIAcgBIAdgBIARBkIArhiIAcgBIAdgBIgJBbIgKBcIgLABIgNABIgNABIgMABIAKhYIgJAVIgGAPIgGARIgJAUIgUAAIgVgBIgMhJIgMBbIgYAAg");
	this.shape_26.setTransform(1103.275,577.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_27.setTransform(1085.675,577.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQhgIAxAAIgSC/IgWABIgZAAg");
	this.shape_28.setTransform(1074.25,577.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_29.setTransform(1061.66,577.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLBkQgVgBgOgJQgOgJgJgPQgIgPgCgSQgCgSADgTQADgRAHgSQAIgRALgNQAMgNAQgIQAQgIASAAQAVAAAOAJQAOAIAIAPQAIAPACATQACARgDASQgDATgHARQgHARgLANQgMAOgOAIQgPAJgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBAMACAIQADAKAFAGQAGAHAKABIABAAIACAAQAFAAAFgCQAGgEAEgEIAHgMQAEgIACgHQACgKABgKQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_30.setTransform(1037.1582,577.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAXAGALAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgVAQIgYgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCADgDQAEgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_31.setTransform(1011.95,577.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_32.setTransform(995.6,577.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBIIgLBJIgWgBg");
	this.shape_33.setTransform(983.675,577.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAIhWIAXAAIAZgBIgVC/IgsABIgjheIgFAvIgEAtIgyAGg");
	this.shape_34.setTransform(968.9,577.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgBAXIgCAVIgeACIgcACIgFAgIBJgEIgCAXIgBAYIg9ADIg+ADg");
	this.shape_35.setTransform(954.45,577.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhMBfIgYgBIANheIAOhcIAcgBIAdgBIARBkIArhiIAcgBIAdgBIgJBbIgKBcIgLABIgNABIgNABIgMABIAKhYIgJAVIgGAPIgGARIgJAUIgUAAIgVgBIgMhJIgMBbIgYAAg");
	this.shape_36.setTransform(938.025,577.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_37.setTransform(921.0969,577.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_38.setTransform(904,577.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAlQgFgCgFgFQgEgEgCgGQgDgHgBgGQgBgIADgIQAEgHAGgGQAGgHAIgEQAIgEAHgCIADAAIACAAQAOAAAIAJQAJAJABAPQAAAHgEAIQgEAJgGAHQgHAGgIAEQgIAFgIAAQgHAAgGgDg");
	this.shape_39.setTransform(1084.6964,516.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_40.setTransform(1072.675,510.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_41.setTransform(1056.95,511.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgZABIAVi9QAUgGASgDQARgDAQAAQAKAAAKABQAWAGAMAQQAMAQgDAcQgDAUgJANQgJAMgNAIIAkA5IgUAQIgWAQIgXgmgAgDg6IgJABIgDAUIgCAUIAIAAIANAAQAGgBAFgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_42.setTransform(1041.9,511.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXBgQgNABgLgBIAViRIgtABIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBKIgWgCg");
	this.shape_43.setTransform(1029.325,510.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgOgCgTQgCgSADgSQADgTAHgQQAIgRALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAPQAIAOACATQACARgDATQgDASgHARQgHARgLAOQgMANgOAIQgPAJgRgBgAgNgpQgIAKgHAOQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgCAEgGIAHgMQAEgGACgIQACgLABgJQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_44.setTransform(1013.6582,511);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_45.setTransform(987.8,511.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhVIAXAAIAZgBIgVC+IgsABIgjheIgFAvIgEAtIgyAGg");
	this.shape_46.setTransform(1200.05,469.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIAAAXIgCAVIgdACIgeACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_47.setTransform(1185.6,469.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AANBDIgXgoIgGAAIgFgBIgEAjIgEAiIgYABIgYABIATi9QAUgGASgDQATgDAOAAQAMAAAJABQAWAGAMAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgBAUIgCAUIAHAAIANAAQAFgBAGgCQAFgCADgDQAEgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgIABg");
	this.shape_48.setTransform(1170.9,470.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_49.setTransform(1156.45,469.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgRhfIAyAAIgRC+IgYABIgYAAg");
	this.shape_50.setTransform(1145.4,469.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgvBgQgMAAgMgBIAOhfIANhgIB0ADIgEAWIgEAWIhCgCIgGApIA0ACIgIAsIgzgCIgEAfIgFAgIgXgBg");
	this.shape_51.setTransform(1135.25,469.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_52.setTransform(1120.575,469.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhVIAYAAIAZgBIgWC+IgrABIgjheIgFAvIgEAtIgyAGg");
	this.shape_53.setTransform(1106.05,469.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_54.setTransform(1089.7,470.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAOBDIgXgoIgHAAIgFgBIgFAjIgDAiIgYABIgZABIAVi9QATgGATgDQARgDAQAAQAKAAAKABQAWAGAMAQQAMAQgDAcQgDAUgJANQgJAMgNAIIAkA5IgUAQIgWAQIgXgmgAgEg6IgIABIgDAUIgCAUIAIAAIAMAAQAHgBAFgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgKgCIgEgBIgEAAIgIABg");
	this.shape_55.setTransform(1074.65,470.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXBhQgNAAgLgBIAViQIgtABIAJgyIBDACIBDADIgJAuIgrgBIgKBIIgLBJIgWgBg");
	this.shape_56.setTransform(1062.075,469.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg+ADIg+ADg");
	this.shape_57.setTransform(1039.55,469.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_58.setTransform(1024.975,469.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_59.setTransform(1001.575,469.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_60.setTransform(985.85,470.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_61.setTransform(970.925,469.875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgLBkQgVgBgOgJQgOgJgJgPQgIgPgCgSQgCgSADgTQADgSAHgRQAIgRALgNQAMgNAQgJQAQgHASAAQAVAAAOAJQAOAIAIAPQAIAPACATQACASgDASQgDASgHARQgHASgLAMQgMAOgOAIQgPAJgRAAgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAGQAGAHAKACIABAAIACAAQAFgBAFgCQAGgEAEgEIAHgNQAEgGACgIQACgKABgKQAAgKgCgJQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKAAgJAJg");
	this.shape_62.setTransform(955.5082,469.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_63.setTransform(940.9519,469.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_64.setTransform(916.625,469.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_65.setTransform(900.9,470.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAIhVIAXAAIAZgBIgVC+IgsABIgjheIgFAvIgFAtIgxAGg");
	this.shape_66.setTransform(886.4,469.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgwBaQgNgHgIgLQgHgLgCgQQgCgPADgTIARhpIAvgBIgIA2IgIA2QgDAQAFAHQAEAIALACIACAAIABAAQAJAAAGgIQAHgIACgQQAFgaADgcIAIg4IAxACIgIA3IgIA3QgFAmgVAVQgVAWghAAQgTgBgNgGg");
	this.shape_67.setTransform(871.4969,470.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgDAcIA1gCIgCAXIgBAVIgeACIgcACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_68.setTransform(1176.55,428.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_69.setTransform(1161.96,428.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_70.setTransform(1137.925,428.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_71.setTransform(1122.2,428.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_72.setTransform(1109.3519,428.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgRhgIAyAAIgSDAIgXAAIgYABg");
	this.shape_73.setTransform(1097,428.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXBgQgNABgLgBIAViQIgtAAIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_74.setTransform(1087.425,428.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_75.setTransform(1072.225,428.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Agcg9IACAAIgGgKIgGgMIA4gvIAaAiIgYARIgaASIAcAAIgSC/IgXAAIgYABg");
	this.shape_76.setTransform(1063.35,425.35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AANBDIgXgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgCAUIgBAUIAHAAIAMAAQAGgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_77.setTransform(1050.5,428.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgdACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_78.setTransform(1036.05,428.825);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgXBgQgNABgLgBIAViQIgtAAIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_79.setTransform(1024.475,428.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_80.setTransform(1011.3519,428.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_81.setTransform(994.7,428.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAUgGASgDQATgDAPAAQALAAAJABQAWAGAMAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgTAQIgVAQIgYgmgAgDg6IgKABIgBAUIgCAUIAHAAIANAAQAFgBAGgCQAFgCADgDQAEgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_82.setTransform(979.65,428.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAcBEIg0ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgZAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_83.setTransform(963.3,428.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_84.setTransform(950.4519,428.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_85.setTransform(926.125,428.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_86.setTransform(910.4,428.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Agvh3IAbAAIAaAAIgYC9IBggDIgEAaIgEAaIiTABg");
	this.shape_87.setTransform(894.95,426.625);

	this.respuesta3 = new lib.respuestac();
	this.respuesta3.name = "respuesta3";
	this.respuesta3.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta3, 0, 1, 2);

	this.respuesta2 = new lib.botonb();
	this.respuesta2.name = "respuesta2";
	this.respuesta2.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta2, 0, 1, 2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_88.setTransform(1090.975,348.025);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgEAcIA1gCIgBAXIgBAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_89.setTransform(1077.15,348.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("Ag6hTIAwgSIAiBeIAHhWIAYAAIAZgBIgWC/IgrABIgkheIgEAvIgFAtIgxAGg");
	this.shape_90.setTransform(1063,347.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgLBkQgVgBgOgJQgOgJgJgPQgIgPgCgSQgCgSADgTQADgRAHgSQAIgRALgNQAMgNAQgIQAQgIASAAQAVAAAOAJQAOAIAIAPQAIAPACASQACASgDASQgDATgHARQgHARgLANQgMAOgOAIQgPAJgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBAMACAIQADAKAFAGQAGAHAKABIABAAIACAAQAFAAAFgCQAGgDAEgFIAHgMQAEgIACgHQACgKABgKQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_91.setTransform(1046.9582,348.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgQhgIAxAAIgSC/IgWABIgZAAg");
	this.shape_92.setTransform(1033.85,348.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_93.setTransform(1023.3519,348.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_94.setTransform(1006.7,348.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgDAjIgEAiIgYABIgZABIAUi9QAUgGATgDQARgDAPAAQALAAAKABQAXAGALAQQAMAQgEAcQgCAUgJANQgJAMgNAIIAkA5IgVAQIgVAQIgYgmgAgEg6IgJABIgCAUIgBAUIAHAAIAMAAQAHgBAFgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_95.setTransform(991.65,348.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgLBkQgVgBgOgJQgOgJgJgPQgIgPgCgSQgCgSADgTQADgRAHgSQAIgRALgNQAMgNAQgIQAQgIASAAQAVAAAOAJQAOAIAIAPQAIAPACASQACASgDASQgDATgHARQgHARgLANQgMAOgOAIQgPAJgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBAMACAIQADAKAFAGQAGAHAKABIABAAIACAAQAFAAAFgCQAGgDAEgFIAHgMQAEgIACgHQACgKABgKQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_96.setTransform(975.6082,348.05);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA1gCIgCAXIgBAVIgeACIgcACIgFAgIBIgEIgBAXIgBAYIg9ADIg+ADg");
	this.shape_97.setTransform(1238.3,306.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AhMBgIATi7IAJgCIAQgCIATgCIARgBIAFAAIAEAAQAPACAMAHQAMAGAJALQAIALAEAPQAEAQgBAUIgDAWQgBALgDAKQgQAfgaASQgbARghAAgAgGg2IgJABIgJBpIACAAIACAAQALAAAIgFQAHgEAHgHQAGgIADgLQAEgLACgMIAAgTQgBgIgDgHQgDgHgGgDQgFgEgKAAIgGAAg");
	this.shape_98.setTransform(1223.71,306.975);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgJgJgOQgIgOgCgTQgCgSADgSQADgTAHgQQAIgSALgNQAMgNAQgIQAQgJASABQAVgBAOAJQAOAKAIAPQAIAOACASQACATgDARQgDATgHARQgHARgLAOQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBALACAKQADAJAFAHQAGAGAKABIABAAIACAAQAFAAAFgDQAGgCAEgGIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_99.setTransform(1199.2082,306.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgRhgIAyAAIgSDAIgXAAIgYABg");
	this.shape_100.setTransform(1186.1,306.95);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_101.setTransform(1174.3481,306.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgRhgIAyAAIgRDAIgYAAIgYABg");
	this.shape_102.setTransform(1162.4,306.95);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AglBgQgNgGgJgLQgJgLgEgRQgEgSADgXQADgaAJgUQAIgUAMgOQALgNAPgIQAOgHANgCIAFAAIAEAAQAPAAAOAFQANAGAMALIggAqQgGgIgHgEQgIgEgHAAIgHAAQgMAGgKAQQgLAQgDAWQgCAWAGALQAHALAKABIACAAIACAAQAIAAAJgFQAKgFAIgJIASAlQgLAOgQAIQgRAIgRAAQgNAAgNgFg");
	this.shape_103.setTransform(1151.9019,306.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhWIAYAAIAZgBIgWDAIgrABIgkhfIgEAwIgFAtIgxAFg");
	this.shape_104.setTransform(1136.45,306.75);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgQhgIAxAAIgSDAIgWAAIgZABg");
	this.shape_105.setTransform(1124.4,306.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgDAjIgEAiIgYABIgZABIAUi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgBAUIgCAUIAHAAIAMAAQAGgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_106.setTransform(1111.7,307.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_107.setTransform(1096.9481,306.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASAAIgTCRIBKgCIgEAXIgEAYIh4ABg");
	this.shape_108.setTransform(1073.95,306.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAcBEIg1ACIgNAeIgrgHIBUjAQALABAMAAIAYACIAgC6IgZAFIgYAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_109.setTransform(1059.25,307.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AggBjQgKgCgKgEQgIgFgHgGQgHgHgEgIIAPgRIAQgTQAGANAMAFQANAEANAAQAMgBAHgEQAHgFgCgIQAAgEgDgDIgKgGIgMgFIgPgFIgOgIQgHgEgFgGQgFgGgCgJQgCgIACgMQADgPAHgLQAHgLAKgIQAKgHANgEQALgDANAAIAJAAIAIABQAMADAKAGQALAGAHAJIggApQgEgIgFgEIgMgHQgGgCgHAAQgHAAgGAEQgFADgBAHQgBAEAGADQAFAEAJADIAWAIQALAEAJAHQAJAHAFAKQAFAKgEASQgCAQgIAMQgHAMgLAIQgLAIgOAEQgOAEgOAAQgKAAgLgCg");
	this.shape_110.setTransform(1035.875,306.925);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_111.setTransform(1020.15,307.125);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAkA5IgUAQIgWAQIgXgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_112.setTransform(1005.1,307.075);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AhHBiIASi9IANgBIAUgDIAUgCIAPgBQAOAAALADQALACAIAGQAIAGADAJQADAJgBAOQgCAPgHAJIgLARQAJAGAGALQAFAMgDAPQgCAMgHALQgHALgNAJQgMAJgSAFQgRAGgXAAgAgEARIgNADIgDAhIAEABIAGAAIACAAIACAAIAJgCIAHgFIAFgFIAEgFQADgHgDgHQgEgGgJgDIgKADgAABg3IgLACIgDAdQAKgCAGgCQAHgCAFgDQAEgDADgEIADgIQABgIgPAAIgKABgAg3hbIACAAIAAAAg");
	this.shape_113.setTransform(989.6975,306.875);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQALABAMAAIAYACIAgC6IgYAFIgZAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_114.setTransform(973.7,307.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARAAIgSCRIBJgCIgDAXIgFAYIh3ABg");
	this.shape_115.setTransform(959.7,306.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAdBEIg1ACIgPAeIgqgHIBUjAQAKABANAAIAYACIAgC6IgYAFIgaAFgAgDAXIAMgCIANgBIgGgqg");
	this.shape_116.setTransform(945,307.125);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_117.setTransform(930.8981,306.725);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AANBDIgXgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQAMAQgEAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgBAUIgCAUIAHAAIANAAQAFgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_118.setTransform(906.85,307.075);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgQhgIAxAAIgSDAIgWAAIgZABg");
	this.shape_119.setTransform(894.8,306.95);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXBgQgNABgLgBIAViRIgtABIAJgwIBDABIBDACIgJAvIgrgCIgKBIIgLBJIgWgBg");
	this.shape_120.setTransform(885.225,306.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgqhjIByAEIgCAVIgEAWIhEgDIgEAcIA1gCIgBAXIgBAVIgdACIgeACIgEAgIBIgEIAAAXIgBAYIg9ADIg/ADg");
	this.shape_121.setTransform(871.15,306.975);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("Ag4hZIAigIQAQgCANAAQARAAAOAEQAOAEAJAJQAKAIAEANQAEANgCASQgEAegRARQgQARgZAGQgNACgMAAIgGAAIgGAAIgGA4IgYABIgYABgAgLg2IgGA1IAPgBQAGgBAHgDQAGgDAFgGQAFgFACgJQADgJgEgGQgEgGgHgEIgNgBIgHAAIgIABg");
	this.shape_122.setTransform(857.3981,306.725);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgEAcIA1gCIAAAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_123.setTransform(843.05,306.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAXAGALAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgVAQIgYgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_124.setTransform(828.35,307.075);

	this.respuesta1 = new lib.respuestaa();
	this.respuesta1.name = "respuesta1";
	this.respuesta1.setTransform(1032.65,320.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta1, 0, 1, 2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AhjD2QgNgGgIgKQgHgKgCgNQgCgOADgNQACgNAGgMQAHgNAJgJQAKgKANgGQAMgGAPAAQAeAAASATQARATAAAdQAAARgHANQgEAOgLAJQgLAKgOAGQgOAFgQAAQgUAAgNgGgAhhBLQAMghASgYQASgYASgUIAfgkQAOgRADgRQAGgVgMgPQgLgOgYAAQgWAAgXAKIgpAUIgUhiQAigTAjgJQAjgJAeAAQAdAAAYAJQAZAJARASQARASAJAZQAIAagEAhQgEAigRAcQgQAcgUAXQgUAYgUAVQgUAVgLAVg");
	this.shape_125.setTransform(538.4529,630.375);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AA4CIIhrAEIgbA8IhVgNICpmCQAUACAaAAIAvADIBBF1IgyAKIgyALgAgIAtIAagCIAagCIgMhWg");
	this.shape_126.setTransform(505.75,636.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAbCFIgwhPIgNAAIgLgBIgHBFIgHBDIgwACIgxACIAol7QAogLAkgGQAkgGAfAAQAWgBATAEQAtALAXAgQAXAggHA5QgEAngSAaQgSAZgbARIBIByIgoAfIgrAhIgvhOgAgIh2IgTACIgDApIgEAoIAPAAIAZgBQANgBAKgEQALgEAHgHQAHgIADgNQAFgSgJgLQgJgLgTgFIgIAAIgJAAIgQAAg");
	this.shape_127.setTransform(475.575,636);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgWDGQgrAAgcgTQgcgSgRgdQgQgdgEgkQgFglAGgmQAFgjAPgiQAQgjAXgaQAXgbAggRQAggQAlAAQAqAAAcASQAcASAQAeQAPAdAEAlQAFAlgGAkQgGAlgOAiQgPAigWAcQgWAagdARQgeAPgjAAgAgahTQgRATgNAdQgHAWgCAVQgBAXAEASQAFATALANQALANAUACIADABIADAAQALAAALgFQAKgHAJgKQAIgLAHgNQAGgOAFgPQAFgVABgUQAAgVgEgRQgEgSgKgMQgKgNgQgCIgDAAIgFAAQgVAAgRATg");
	this.shape_128.setTransform(443.4702,635.75);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhfDAIgwgBIAci/IAcjBIDnAGIgHAsIgIAtIiGgFIgLBRIBqAFIgQBZIhogEIgJA9IgJBAQgVgCgaABg");
	this.shape_129.setTransform(415,635.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AA4DAIhrAEIgbA8IhVgNICll7IgLgYIByhfIAzBEIgiAYIgkAZIAGAAIAHAAIBBF1IgyAKIgxALgAgHBlIAZgCIAagCIgMhXg");
	this.shape_130.setTransform(384.15,630.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("Ah1inIBhgkIBEC8IAPirIAvAAIAygCIgrGAIhYACIhHi+IgJBfIgJBaIhjALg");
	this.shape_131.setTransform(355.1,635.325);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AA4CIIhrAEIgbA8IhVgNIComCQAWACAYAAIAwADIBBF1IgyAKIgxALgAgHAtIAZgCIAagCIgMhWg");
	this.shape_132.setTransform(322.4,636.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AA5CIIhsAEIgbA8IhVgNIComCQAWACAYABIAwACIBBF2IgyAKIgxAKgAgHAtIAYgCIAbgDIgMhVg");
	this.shape_133.setTransform(675.45,555.85);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AhPi/IAYAAIAlAAIAkgBIgmEkICVgEQgEAVgEAaQgDAagGAXIjwABg");
	this.shape_134.setTransform(647.375,555.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AhVjHIDlAIIgGApQgDAXgEAVIiIgEIgIA2IBsgCIgCAsIgDAtIg7ADIg8AEIgJBBICTgJIgDAvIgCAvIh6AGIh9AGg");
	this.shape_135.setTransform(588.15,555.55);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgvDBIgwgBIAqkiIhaADIAShjICGADQBFACBCADIgSBcIhWgBIgVCQIgVCSQgUgCgZAAg");
	this.shape_136.setTransform(565.025,555.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AhBDGQgVgEgSgJQgSgJgOgNQgOgNgHgQIAegjIAgglQANAbAYAIQAZAJAbAAQAXgBAOgKQAOgKgDgQQABgIgIgGQgHgGgMgFIgagKQgOgEgPgHQgOgGgOgJQgOgIgKgNQgJgMgEgSQgFgRAFgXQAEgeAPgXQAOgWAVgPQAUgOAZgHQAXgIAaAAIARABIAQACQAZAGAVAMQAUAMAPASIhBBRQgGgPgLgIQgMgIgMgFQgNgEgNAAQgPAAgLAGQgLAHgCANQgCAJAMAGQAMAHARAGIArAQQAXAIATAOQASAOAJAVQAJAWgHAjQgEAfgPAYQgQAYgVAQQgWARgcAIQgcAJgcAAQgWAAgVgFg");
	this.shape_137.setTransform(534.6,555.475);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AghjAIBjAAIgkF/IguABIgxABg");
	this.shape_138.setTransform(511.75,555.525);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AhBDGQgVgEgSgJQgSgJgOgNQgOgNgHgQIAegjIAfglQANAbAZAIQAYAJAbAAQAZgBAOgKQAOgKgDgQQAAgIgIgGQgHgGgMgFIgagKQgOgEgOgHQgPgGgOgJQgOgIgKgNQgJgMgFgSQgDgRADgXQAGgeAOgXQAOgWAUgPQAVgOAYgHQAYgIAaAAIARABIARACQAYAGAVAMQAVAMAPASIhCBRQgHgPgKgIQgLgIgMgFQgOgEgNAAQgPAAgLAGQgKAHgCANQgCAJAMAGQALAHARAGIAsAQQAXAIARAOQATAOAJAVQAJAWgGAjQgFAfgPAYQgQAYgWAQQgVARgcAIQgbAJgdAAQgWAAgVgFg");
	this.shape_139.setTransform(486.6,555.475);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("Ah1inIBggkIBGC8IANirIAwAAIAygCIgrGAIhXACIhHi+IgKBfIgJBaIhjALg");
	this.shape_140.setTransform(457.55,555.075);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgWDHQgrgBgcgSQgcgSgRgeQgQgdgEglQgFgkAGglQAFgkAPgjQAQgiAXgbQAXgaAggRQAggPAlAAQAqAAAcARQAcASAQAeQAPAdAEAlQAFAkgGAlQgGAlgOAiQgPAigWAbQgWAbgdARQgeAPgjABgAgahTQgRATgNAeQgHAVgCAWQgBAVAEATQAFATALANQALAMAUADIADABIADAAQALAAALgFQAKgHAJgKQAIgKAHgOQAGgOAFgQQAFgUABgTQAAgWgEgRQgEgSgKgMQgKgMgQgDIgDAAIgFAAQgVAAgRATg");
	this.shape_141.setTransform(425.4702,555.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AhKC/QgZgKgSgXQgSgWgJgjQgIgjAGgvQAGg0ARgoQARgoAYgcQAXgbAcgOQAcgPAcgDIAJgBIAIAAQAeAAAcALQAcALAWAWIhABUQgLgQgPgIQgPgJgPAAQgHAAgGACQgZAKgVAgQgVAhgFAtQgGAsANAVQANAXAVACIAEAAIADAAQASAAATgKQASgKAQgTIAmBLQgXAbghARQggARgjAAQgcAAgZgMg");
	this.shape_142.setTransform(396.3259,555.45);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhWh8IA7ACIgQgcIgRgdIBzhfIAzBEIg8ArIg/ApIChAGIgGApQgCAXgEAVIiKgEIgHA1IBsgCIgDAsIgCAuIg8ADIg6AEIgJBBICRgJIgCAvIgBAvIh7AGIh9AGg");
	this.shape_143.setTransform(350.05,548.05);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AghDBQgnAAgagNQgZgNgPgXQgPgWgEgfQgEggAGglIAhjSIBegDIgQBtQgHA3gIA0QgFAhAIAPQAJAPAXADIADABIADAAQASAAAMgQQAOgQADggQAKg1AHg4IAQhvIBiAEIgRBuIgQBtQgKBNgpArQgpAqhDAAIgBAAg");
	this.shape_144.setTransform(322.245,556.0253);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AABCtIgKABIgOAAQgjAAgagMQgagNgRgVQgQgVgJgcQgJgbgCgfQgBgpANgrQAMgsAZgjQAYgjAkgXQAjgWAsAAQAhAAAZALQAZALARAUQARATAJAaQAKAaACAdQACAbgFAcQgEAbgKAaQgJAagPAWQgOAXgSARIAkAlIglAiIgmAkgAgbhrQgRATgNAdQgHAWgCAWQgBAVAEATQAFATALANQALAMAUADIADABIADAAQALAAAKgGQAKgGAJgKQAJgLAGgNQAHgOAFgOQAFgVABgUQAAgVgEgSQgEgSgKgMQgKgNgQgCIgDAAIgFAAQgVAAgRATg");
	this.shape_145.setTransform(288.7636,557.925);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("Ah1inIBggkIBGC8IANirIAwAAIAygCIgrGAIhXACIhHi+IgKBfIgJBaIhjALg");
	this.shape_146.setTransform(239.4,555.075);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AhWjHIDmAIIgGApQgCAXgEAVIiKgEIgHA2IBsgCIgDAsIgCAtIg8ADIg6AEIgJBBICRgJIgCAvIgBAvIh7AGIh9AGg");
	this.shape_147.setTransform(210.55,555.55);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("Ag4DzQgZgJgRgSQgRgSgJgZQgIgaAEghQAEgiARgcQAQgcAUgYQAUgXAUgVQAUgVALgVIBiAMQgMAhgSAYQgSAYgSAUIggAkQgNARgDARQgGAVAMAPQAKAOAZAAQAWAAAXgKQAWgJATgLIAUBiQgiATgjAJQgjAJgeAAQgdAAgYgJgAAHiBQgRgTAAgdQAAgRAGgNQAFgOALgKQALgJAOgGQAOgFAQAAQAUAAANAGQANAGAHAKQAIAKACANQACANgDAOQgCANgHAMQgGAMgJAKQgKAKgNAGQgMAGgPAAQgeAAgSgTg");
	this.shape_148.setTransform(185.4971,554.575);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#990099").s().p("Ag0ByQgTgLgLgVQgLgUgEgbQgCgQAAgRQgBgPADgRQABgLADgNQAEgNAFgLQAGgMAHgJQAEgFAHgGIAOgJQAHgEAHAAIAJABIAIADIAJgEQAEgCAEAAQARAAAQAIQAPAHALANQARASAKAUQAKAUACAZQABAKgBAKIgCAUQgEATgIASQgJASgNAOQgOAOgRAIQgSAJgTAAQgdAAgTgMgAgMg9IgBACIgEABIgCADQgFAHgCAIIgEAQQgCAPAAAOQABAPADAPQACALAFAGQAFAGAMAAQAGAAAGgEQAGgEAFgGQAEgGADgHQAEgKABgKQACgLgBgKIgBgFIgBgGIgBgFIgKgOIgKgOIgFgDIgFgBIgFgBIgFgCIgBAAg");
	this.shape_149.setTransform(191.3708,483.625);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#990099").s().p("AgaCBQgJgDgGgGIgKgLQgEgGgDgHIgFgRIgHgaIgGgaIgFgRIgHgjIgGgkIgDgTQgBgKACgKQADgNAJgJQAJgJAOAAQAJAAAIAFQAIAEAFAIIADAIIABAJIgBAHIgBAHIACAIIACANIACANIACAJIAIAoIAKApIAKgZQAFgNADgNIADgNIAEgVIAFgVIADgNIAAgCIgBgBQgCgLAFgKQAFgJAIgFQAIgGALAAQALAAAJAHQAIAHAEAKQACAHAAAHQABAHgCAHIgCANIgFAVIgFAVIgCANIgIAdQgGARgIASQgIASgKAQQgLAQgNAJQgNAKgPABQgIAAgJgDg");
	this.shape_150.setTransform(169.6396,483.725);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#990099").s().p("AgnCDQgHgBgHgEQgGgEgGgFQgFgGgDgGQgGgKgCgLQgCgLAAgLQAAgeADgdIAHg6IABgQIgBgRIAAgKIACgKQACgGAEgFIAJgIQAFgEAGAAQAGgBAGAAIAIADIAIAFQAFADADAGQADAFABAFIAAAHIAAAGIABAQIgBAQQgBAVgDAUIgFApQgCAVABAUIAfgFIAhgEIAGABIAGABQAHACAFAFQAFAGADAHQADAIAAAHQgBAGgCAFQgDAGgEAEQgEAEgFACIgKAEIgPACIgZADIgYAEIgPACIgDAAQgGAAgGgCg");
	this.shape_151.setTransform(150.1536,484.2717);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#990099").s().p("ABACGQgJgGgFgLIgCgJIgCgNIgCgOIgCgJQgLADgMABIgYAAIgRAAIgSAAIgDAHIgDALIgCAJQgBAOgJAKQgKAJgOABQgLgBgJgGQgIgGgEgKIgCgKIAAgLQABgGAEgNIAJgbIALgbIAHgSQAMgdAPgcQAOgcAUgaQAJgNANgIQAMgJAQAAQANAAAKAGQAKAGAGAKQAHAJAEAMIAFAPIAGAZIAGAcIAFAZIADAPIAGAlIAFAmIACAJIACAKQAAAEgBAFIgEAIQgDAHgIAFQgIAFgJAAQgMAAgIgGgAABgXQgHAQgHAPIAIAAIALAAIAJAAIAIgBIAIgBIgFgdIgHgeIgSAeg");
	this.shape_152.setTransform(127.9563,484.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#990099").s().p("Ag4B+QgUgPgIgYQgGgQgBgSQABgRABgRQACgTAFgUIALgnQAFgNAIgOQAIgOAKgMQAKgMANgHQANgIAOAAQARAAAOAJQANAIAIAOQAJANABAQQABAGgCAGIgBAMQgCAHgEAHQgFAGgGAEQgEACgEABIgJACIgJgCIgIgDQgHgEgEgGQgEgHgCgIQgHAOgGASQgFASgDASQgDATAAAQIABAMQAAAGAEAFIACACIAEAAIAIgDQAEgCADgDIAPgNIANgQQADgFAIgEQAGgDAHAAQAMAAAJAFQAHAGAFALIACAIIAAAJQgBAHgFAIQgFAIgIAIIgPAPIgNALQgHAFgJAFQgKAFgKADQgKADgJAAQgaAAgTgOg");
	this.shape_153.setTransform(105.9,484.725);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").p("ASfDkMgk9AAAIAAnHMAk9AAAg");
	this.shape_154.setTransform(167.025,482.775);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000A0F").s().p("AyeDkIAAnHMAk9AAAIAAHHg");
	this.shape_155.setTransform(167.025,482.775);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").p("EA4HANTMhwNAAAIAA6lMBwNAAAg");
	this.shape_156.setTransform(407.875,590.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F0F7F9").s().p("Eg4GANTIAA6lMBwNAAAIAAalg");
	this.shape_157.setTransform(407.875,590.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAfBLIg7ACIgPAhIgugHIBcjUIAZACIAbABIAjDNIgbAFIgcAGgAgEAZIAOgBIAOgCIgHgug");
	this.shape_158.setTransform(1103.375,483.375);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAPBJIgagrIgHAAIgGgBIgEAmIgEAlIgaABIgbABIAWjQQAVgGAUgDQAUgEARAAQANAAAKACQAYAGANASQANARgEAfQgDAWgKAOQgJAOgPAJIAnA/IgVARIgYASIgagrgAgEhAIgKABIgCAWIgDAWIAJAAIAOAAQAHgBAFgCQAGgCAEgEQAEgEACgIQACgKgEgGQgGgGgKgCIgFgBIgEAAIgJABg");
	this.shape_159.setTransform(1086.75,483.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgMBtQgXAAgQgKQgPgKgJgQQgJgQgDgUQgCgVADgUQADgTAIgTQAJgTANgPQAMgOASgJQARgJAVAAQAWAAAQAKQAPAKAJAQQAIAQADAUQACAUgDAUQgDAUgIATQgIATgMAPQgMAOgRAJQgQAJgTAAgAgOgtQgJAKgHARQgEALgBAMQgBAMACAKQADAKAGAIQAGAHALABIACAAIACABQAFAAAGgEQAGgDAFgGQAEgFAEgIIAGgQQADgLAAgLQAAgLgCgKQgCgKgGgGQgFgHgJgBIgCgBIgCAAQgLAAgKALg");
	this.shape_160.setTransform(1069.1203,483.175);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("Ag0BpQgNABgNgBIAPhpIAQhpIB+ADIgEAYIgEAYIhJgCIgHAsIA6ADIgJAxIg4gCIgFAhIgFAjIgagBg");
	this.shape_161.setTransform(1053.5,483.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAfBpIg7ACIgPAiIgugIIBajQIgGgNIA/g0IAcAmIgTAMIgUAOIAEAAIAEAAIAjDNIgbAGIgcAGgAgEA3IAOgBIAOgBIgHgwg");
	this.shape_162.setTransform(1036.525,480.325);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgZBqQgOABgNgBIAXifIgxABIAKg2IBJACIBKACIgKAzIgvgBIgLBPIgMBQIgYgBg");
	this.shape_163.setTransform(1023.4,483.125);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AguhtIB9AFIgDAWIgEAZIhLgDIgEAeIA7gBIgBAYIgBAYIghACIggACIgFAkIBQgGIgBAaIgBAbIhDADIhFADg");
	this.shape_164.setTransform(1007.925,483.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AhTBoIgbgBIAPhnIAPhlIAfgBIAggCIASBvIAvhsIAggBIAfgCIgKBlIgLBlIgMABIgOABIgOABIgOABIALhgIgJAWIgHASIgGARIgKAXIgWgBIgYgBIgNhQIgNBlIgagBg");
	this.shape_165.setTransform(989.825,483.35);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgXBrQgOABgLgBIALhMIgxhvIAxgbIAfBUIAMgTIANgXIAOgWIAMgTIAqAbIgSAaIgSAdIgSAbQgKAOgJAMIgMBPIgZgBg");
	this.shape_166.setTransform(963.5,483.05);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AhAhcIA2gTIAkBnIAJheIAaAAIAbgBIgYDTIgvABIgohpIgEA1IgGAxIg2AGg");
	this.shape_167.setTransform(1184.9,437.95);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgMCbQgXgBgQgKQgPgKgJgQQgJgQgDgUQgCgUADgVQADgUAIgTQAJgRANgPQAMgPASgJIAEgCIgHgLIgMgWIBOhBIAjAvIgWAOIgXAQIgWAOIgBABIgVAPIgFgJQANgFAOgCQgOACgNAFIAFAJIAVgPIABgBIAHAAQAWAAAQAKQAPAKAJAQQAIARADATQACAUgDAVQgDAUgIATQgIATgMAOQgMAPgRAJQgQAJgTAAgAgOAAQgJAKgHAQQgEAMgBAMQgBAMACALQADAKAGAHQAGAHALACIACAAIACAAQAFAAAGgDQAGgEAEgFQAFgGAEgHIAGgRQADgLAAgLQAAgMgCgJQgCgKgGgGQgFgHgJgBIgCAAIgCAAQgLAAgKAKg");
	this.shape_168.setTransform(1167.3703,433.625);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgShpIA2AAIgTDSIgZABIgbAAg");
	this.shape_169.setTransform(1152.875,438.175);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgoBpQgOgGgKgMQgKgNgFgTQgEgTADgaQAEgcAJgWQAJgWANgPQANgPAPgIQAQgIAPgCIAFAAIAEAAQARAAAPAGQAPAGAMAMIgjAuQgGgIgIgFQgIgFgJAAIgHABQgNAGgMARQgLASgDAZQgDAXAHANQAHAMAMABIACAAIACABQAJAAAKgGQALgGAIgKIAVApQgMAPgSAJQgTAJgSAAQgPAAgOgGg");
	this.shape_170.setTransform(1141.2734,438.175);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAfBLIg7ACIgPAhIgugHIBcjUIAZACIAbABIAjDNIgbAFIgcAGgAgEAZIAOgBIAOgCIgHgug");
	this.shape_171.setTransform(1122.975,438.375);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgoBpQgOgGgKgMQgKgNgFgTQgEgTADgaQAEgcAJgWQAJgWANgPQANgPAPgIQAQgIAPgCIAFAAIAEAAQARAAAPAGQAPAGAMAMIgjAuQgGgIgIgFQgIgFgJAAIgHABQgNAGgMARQgLASgDAZQgDAXAHANQAHAMAMABIACAAIACABQAJAAAKgGQALgGAIgKIAVApQgMAPgSAJQgTAJgSAAQgPAAgOgGg");
	this.shape_172.setTransform(1108.7734,438.175);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgShpIA2AAIgTDSIgZABIgbAAg");
	this.shape_173.setTransform(1095.225,438.175);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgzBpQgOABgNgBIAPhpIAPhpIB/ADIgEAYIgFAYIhJgCIgGAsIA6ADIgJAxIg4gCIgFAhIgFAjIgZgBg");
	this.shape_174.setTransform(1084.05,438.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgShpIA2AAIgTDSIgZABIgbAAg");
	this.shape_175.setTransform(1071.825,438.175);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AhAhcIA2gTIAkBnIAJheIAaAAIAbgBIgYDTIgvABIgohpIgEA1IgGAxIg2AGg");
	this.shape_176.setTransform(1058.45,437.95);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgMBtQgXAAgQgKQgPgKgJgQQgJgQgDgUQgCgVADgUQADgTAIgTQAJgTANgPQAMgOASgJQARgJAVAAQAWAAAQAKQAPAKAJAQQAIAQADAUQACAUgDAUQgDAUgIATQgIATgMAPQgMAOgRAJQgQAJgTAAgAgOgtQgJAKgHARQgEALgBAMQgBAMACAKQADAKAGAIQAGAHALABIACAAIACABQAFAAAGgEQAGgDAFgGQAEgFAEgIIAGgQQADgLAAgLQAAgLgCgKQgCgKgGgGQgFgHgJgBIgCgBIgCAAQgLAAgKALg");
	this.shape_177.setTransform(1040.8203,438.175);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgjBtQgMgDgKgEQgKgFgHgHQgIgHgEgJIARgUIARgUQAHAPAOAFQANAFAPAAQANgBAHgGQAIgFgCgJQAAgFgEgDIgKgGIgOgFIgQgGQgIgEgIgFQgHgEgGgHQgFgGgCgKQgCgKACgMQADgRAIgMQAHgMAMgJQALgIAOgDQAMgEAOAAIAKAAIAJABQANADAMAHQALAGAIAKIgkAtQgDgIgHgFQgGgEgGgDQgHgCgHAAQgJAAgGADQgFAEgCAHQAAAFAGAEIAQAHIAXAIQANAFAKAIQAKAHAFALQAFAMgEAUQgCARgJANQgIANgMAJQgMAJgPAFQgPAEgQAAQgMAAgLgCg");
	this.shape_178.setTransform(1022.525,438.175);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAPBJIgZgrIgIAAIgGgBIgEAmIgEAlIgaABIgbABIAWjQQAVgGAVgDQATgEARAAQANAAAJACQAZAGANASQAMARgDAfQgCAWgLAOQgJAOgPAJIAoA/IgXARIgXASIgagrgAgDhAIgLABIgCAWIgCAWIAIAAIAOAAQAHgBAFgCQAGgCAEgEQAEgEACgIQACgKgFgGQgEgGgLgCIgFgBIgEAAIgIABg");
	this.shape_179.setTransform(1005.9,438.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AguhtIB9AFIgDAWIgEAZIhLgDIgEAeIA7gBIgBAYIgBAYIghACIggACIgFAkIBQgGIgBAaIgBAbIhDADIhFADg");
	this.shape_180.setTransform(990.025,438.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("Ag+hiQAUgFARgDQASgDAOAAQATAAAQAFQAPAEAKAKQALAJAFAOQAEAOgCAUQgFAhgSASQgSAUgbAGQgPADgNAAIgGAAIgHgBIgHA+IgaABIgbABgAgNg7IgFA6IAQgBQAHgBAHgEQAHgDAFgGQAGgGACgKQADgKgEgHQgEgGgIgEIgOgBIgIAAIgKABg");
	this.shape_181.setTransform(974.8446,437.925);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("Ageg7IBJACIgdB0Ig4ABg");
	this.shape_182.setTransform(952.1,446.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgrhpIANAAIAVAAIASAAIgTCgIBRgCIgFAaIgEAaIiEABg");
	this.shape_183.setTransform(941,438.15);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgShpIA2AAIgTDSIgZABIgbAAg");
	this.shape_184.setTransform(929.575,438.175);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AhTBoIgbgBIAPhnIAPhlIAfgBIAggCIASBvIAvhsIAggBIAfgCIgKBlIgLBlIgMABIgOABIgOABIgOABIALhgIgJAWIgHASIgGARIgKAXIgWgBIgYgBIgNhQIgNBlIgagBg");
	this.shape_185.setTransform(913.675,438.35);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgfhDIACAAIgHgMIgHgMIA/g0IAdAmIgbASIgdAUIAfAAIgUDSIgZABIgbAAg");
	this.shape_186.setTransform(901.05,434.375);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgMCKIgEAAQgOAAgOgCQgOgDgMgFQgLgGgJgIQgKgHgFgLIASgVIATgWQAFAJAHAFQAIAGAHADQAJADAJABIASABQAKAAAHgDQAIgDAGgEQAFgEADgGQACgFAAgHQAAgJgJgGQgKgGgNgFIgbgLQgOgGgMgIQgLgJgHgOQgGgNAEgWQADgTAKgPQAJgOANgKQAOgKAQgEQAQgFAQAAQAWAAAVAHQATAHAQAQIgnAxQgDgGgGgEQgGgFgHgDQgGgDgHgCQgIgCgGAAQgMAAgIAGQgJAGgCALQgBAJAJAGQAJAGAPAGIAAAAIATAHQAKADAJAFQAKAFAIAGQAIAHAGAHQAFAIADAMQACALgDAPQgEAVgKAQQgKAPgOALQgOAKgSAGQgRAFgRABIgEAAg");
	this.shape_187.setTransform(885.1,435.825);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgKBcQgUAAgNgIQgNgJgIgNQgHgOgCgRQgDgRADgRQADgQAHgQQAHgQALgNQALgNAOgHQAPgIARABQAUAAANAHQANAJAHAOQAHANACARQACASgCAQQgDARgHARQgGAQgLAMQgKAMgOAIQgOAHgPAAgAgMgmQgIAJgGANQgDALgBAJQAAALACAIQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgDQAFgDAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_188.setTransform(1179.8126,634.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgiBZQgMgFgIgLQgJgKgEgQQgEgQADgWQADgYAIgTQAIgSALgNQALgNANgHQANgHAMgBIAEgBIAEAAQAPAAAMAGQANAFALAKIgeAnQgFgHgHgEQgHgEgHAAIgGABQgMAEgJAQQgKAPgDAVQgCATAGALQAGAKAKABIABAAIACAAQAIABAJgFQAIgFAIgJIARAjQgKANgQAHQgPAIgQAAQgNABgLgGg");
	this.shape_189.setTransform(1166.2019,634.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_190.setTransform(1154.675,634.825);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgsBaIgWgBIANhZIANhZIBrACIgDAVIgEAVIg+gCIgFAmIAxACIgIApIgwgCIgEAdIgEAdQgKgBgMABg");
	this.shape_191.setTransform(1145.225,634.825);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgKBcQgUAAgNgIQgNgJgIgNQgHgOgCgRQgDgRADgRQADgQAHgQQAHgQALgNQALgNAOgHQAPgIARABQAUAAANAHQANAJAHAOQAHANACARQACASgCAQQgDARgHARQgGAQgLAMQgKAMgOAIQgOAHgPAAgAgMgmQgIAJgGANQgDALgBAJQAAALACAIQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgDQAFgDAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_192.setTransform(1131.1126,634.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgeBcQgKgBgIgFQgJgEgGgGQgGgGgEgHIAOgRIAPgRQAGAMALAFQAMADANAAQAKAAAHgFQAGgEgBgIQAAgEgDgCIgJgGIgMgEIgNgGIgOgHQgHgDgEgGQgFgFgBgIQgDgJADgLQACgOAHgKQAGgKAKgHQAJgHAMgDQAKgEAMAAIAIABIAIABQAMACAJAGQAKAFAHAJIgeAmQgDgHgGgEIgKgGQgHgCgGAAQgHAAgFADQgFADgBAGQAAAFAFACIANAHIAVAHQAKADAJAHQAIAGAEAKQAEAKgDARQgCAOgHAMQgHAKgKAIQgKAIgNAEQgNADgNAAQgKAAgKgCg");
	this.shape_193.setTransform(1115.6,634.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgKBcQgUAAgNgIQgNgJgIgNQgHgOgCgRQgDgRADgRQADgQAHgQQAHgQALgNQALgNAOgHQAPgIARABQAUAAANAHQANAJAHAOQAHANACARQACASgCAQQgDARgHARQgGAQgLAMQgKAMgOAIQgOAHgPAAgAgMgmQgIAJgGANQgDALgBAJQAAALACAIQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgDQAFgDAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_194.setTransform(1101.2126,634.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgkhZIALAAIARAAIAQAAIgRCHIBFgBIgDAWIgFAWIhvABg");
	this.shape_195.setTransform(1086.575,634.75);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_196.setTransform(1076.875,634.825);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgsBaIgWgBIANhZIANhZIBrACIgDAVIgEAVIg+gCIgFAmIAxACIgIApIgwgCIgEAdIgEAdQgKgBgMABg");
	this.shape_197.setTransform(1067.425,634.825);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgKBcQgUAAgNgIQgNgJgIgNQgHgOgCgRQgDgRADgRQADgQAHgQQAHgQALgNQALgNAOgHQAPgIARABQAUAAANAHQANAJAHAOQAHANACARQACASgCAQQgDARgHARQgGAQgLAMQgKAMgOAIQgOAHgPAAgAgMgmQgIAJgGANQgDALgBAJQAAALACAIQACAJAFAGQAFAGAJABIACABIABAAQAFAAAFgDQAFgDAEgFQAEgFADgGIAFgOQACgJABgJQAAgKgCgIQgCgIgFgGQgEgGgIgBIgBAAIgCAAQgKAAgIAJg");
	this.shape_198.setTransform(1045.4626,634.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgVBaIgXAAIATiHIgpABIAIguIA+ABIA/ADIgIArIgpgBIgJBDIgJBEQgKgBgLAAg");
	this.shape_199.setTransform(1032.8,634.75);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_200.setTransform(1018.975,634.625);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgnhcIBqADIgDAUIgDAUIg/gCIgEAaIAygCIgBAVIgBAUIgcACIgbACIgEAeIBEgEIgCAWIAAAWIg5ADIg6ACg");
	this.shape_201.setTransform(1005.525,634.825);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_202.setTransform(995.175,634.825);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AhGBYIgXgBIAMhWIANhWIAbgBQANgBAOgBIAOBeIAphbIAbgBIAbgCIgJBWIgJBWIgKAAIgNABIgMABIgLAAIAJhRIgIATIgGAPIgFAOIgIAUIgTgBIgVgBIgLhDIgKBVIgWgBg");
	this.shape_203.setTransform(981.7,634.95);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAaA/IgxACIgNAcIgngGIBOizIAVABIAWABIAfCuIgYAEIgXAFgAgDAVIALgBIANgBIgGgog");
	this.shape_204.setTransform(964.6,634.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgnhcIBqADIgDAUIgDAUIg/gCIgEAaIAygCIgBAVIgBAUIgcACIgbACIgEAeIBEgEIgCAWIAAAWIg5ADIg6ACg");
	this.shape_205.setTransform(951.725,634.825);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgVBaIgXAAIAUiHIgqABIAIguIA+ABIA/ADIgIArIgogBIgLBDIgJBEQgIgBgMAAg");
	this.shape_206.setTransform(940.95,634.75);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_207.setTransform(927.125,634.625);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAbA/IgyACIgNAcIgogGIBOizIAWABIAWABIAeCuIgXAEIgXAFgAgDAVIALgBIANgBIgGgog");
	this.shape_208.setTransform(911.9,634.975);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgkhZIALAAIARAAIAQAAIgRCHIBFgBIgDAWIgFAWIhvABg");
	this.shape_209.setTransform(898.825,634.75);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("Ag0hTQAQgFAPgCQAPgDAMAAQAQAAANAFQANADAJAIQAJAIAEAMQAEAMgCARQgEAcgPAPQgQARgXAGQgMACgLgBIgGAAIgFAAIgGA1IgWABIgXABgAgLgyIgEAxIANgBQAGAAAGgDQAGgEAFgFQAEgEACgKQACgHgDgGQgDgGgHgDIgMgBIgHAAIgIABg");
	this.shape_210.setTransform(886.5833,634.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgTBbIgWAAIAJhBIgpheIAqgXIAaBIIAKgRIALgTIAMgSIALgQIAjAWIgQAXIgPAYIgPAXIgQAWIgKBDQgJgBgMAAg");
	this.shape_211.setTransform(1116.1,596.175);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("Ag2hNIAtgRIAgBXIAGhPIAWAAIAYgBIgUCyIgpABIghhYIgEAsIgEAqIgvAFg");
	this.shape_212.setTransform(1093.675,596.125);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgKCDQgTAAgOgIQgNgJgHgNQgIgOgCgRQgCgRACgSQADgRAHgQQAHgPALgMQALgNAPgHIADgCIAEAHIASgMIAAAAQgLABgLAEIgGgKIgKgSIBCg3IAdAnIgSANIgTANIgUANIAHgBQATAAANAIQANAJAIAOQAHANACAQQACASgDARQgDARgHAQQgGAQgKANQgLAMgOAIQgNAHgQAAgAgLAAQgIAJgGANQgDAKgBALQgBAKACAJQACAJAFAGQAFAGAKABIABAAIACAAQAEAAAFgDQAFgCAEgFQAEgFADgGIAFgOQADgKAAgJQAAgKgCgIQgCgIgEgFQgFgGgHgBIgCAAIgCAAQgJAAgIAIgAgQgvQALgEALgBIAAAAIgSAMIgEgHgAgQgvIAAAAg");
	this.shape_213.setTransform(1078.7956,592.425);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgPhZIAuAAIgRCyIgVABIgXAAg");
	this.shape_214.setTransform(1066.475,596.325);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgiBZQgMgFgIgLQgJgKgEgQQgEgQADgWQADgYAIgTQAIgTALgMQALgNANgHQANgHAMgBIAEAAIAEAAQAPAAAMAEQANAGALAKIgeAnQgFgHgHgEQgHgEgHAAIgGABQgMAEgJAQQgKAOgDAWQgCATAGALQAGAKAKACIABAAIACAAQAIAAAJgFQAIgFAIgJIARAjQgKANgQAIQgPAHgQABQgNAAgLgGg");
	this.shape_215.setTransform(1056.6519,596.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAbA/IgzACIgMAcIgogGIBOizIAWABIAWABIAeCuIgXAEIgXAFgAgDAVIALgBIAMgBIgFgog");
	this.shape_216.setTransform(1041.15,596.475);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgtBaIgOhYIgPhYIAWgCIAXgCIATBvIAKgcIAKgbIAKgaIAMgeIAVAEIAWAEIhCCtg");
	this.shape_217.setTransform(1028.825,596.125);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AANA+IgWglIgGAAIgFAAIgEAgIgDAfIgWABIgXABIASiwIAkgIQARgDAOAAQAKAAAJABQAVAGALAOQAKAPgDAbQgCASgIAMQgIALgNAIIAhA2IgSAOIgUAPIgWgkgAgDg2IgJABIgBATIgCASIAHAAIALAAQAGgBAFgCQAFgBADgEQADgDACgGQACgJgEgFQgEgFgJgCIgEgBIgEAAIgHABg");
	this.shape_218.setTransform(1013.375,596.425);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgnhcIBqADIgDAUIgDAUIg/gCIgEAaIAygCIgBAVIgBAUIgcACIgbACIgEAeIBEgEIgCAWIAAAWIg5ADIg6ACg");
	this.shape_219.setTransform(999.925,596.325);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgeBcQgJgCgJgDQgJgFgGgGQgHgGgDgIIAPgQIAOgRQAGANALADQALAEAOABQAKgBAHgFQAGgFgBgGQAAgFgEgCIgJgGIgLgEIgOgGIgNgHQgHgDgEgGQgEgGgCgHQgCgJACgKQACgOAHgLQAGgKAKgHQAKgHALgDQAKgDANAAIAIAAIAHABQAMACAKAGQAJAGAHAIIgfAmQgDgHgFgEIgLgGQgFgCgGAAQgIAAgFADQgFADAAAHQgBADAFADIAOAGIATAIQALAEAIAGQAJAHAFAJQAEAKgDARQgCAOgIAMQgHALgKAHQgKAIgNADQgNAEgNABQgKgBgKgCg");
	this.shape_220.setTransform(986.3,596.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AhCBbIAQivIgCAAIACgBIAAABIAMgCIATgCIATgDIAOAAQANAAAKACQAKACAIAFQAHAGADAJQADAJgCAMQgCAOgFAJIgLAPQAJAGAFALQAFALgDANQgCALgGALQgHAKgMAJQgMAIgQAFQgQAFgVAAgAgFAPIgMAEIgCAfIAEAAIAFAAIACAAIACAAIAIgCIAHgEIAFgFIADgFQADgGgDgGQgDgHgJgCIgKACgAAAgzIgKACIgCAaQAJgBAGgCIALgFQAEgDACgEIACgHQACgHgOAAIgKABg");
	this.shape_221.setTransform(972.5114,596.25);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgNB0QgYgBgQgKQgRgLgJgQQgKgRgDgVQgCgVADgUQADgWAJgVQAIgUAOgQQAOgQASgJQATgKAVAAQAYAAAQAKQAQALAJAQQAKARACAVQADAWgDAVQgDAVgJAUQgIAVgNAQQgNAPgSAKQgRAKgUAAgAgHg+QgHAEgGAIQgHAIgEAKQgFAKgEALQgDALAAANQAAAMADALQADALAIAHQAHAHAMACIAFAAQAHAAAIgEQAHgFAGgIQAGgIAFgKQAEgKACgLQADgLAAgNQgBgMgDgLQgDgKgGgHQgHgHgKgCIgDgBIgCAAQgIAAgHAFg");
	this.shape_222.setTransform(956.0624,594.325);

	this.respuesta6 = new lib.respuestac();
	this.respuesta6.name = "respuesta6";
	this.respuesta6.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta6, 0, 1, 2);

	this.respuesta5 = new lib.botonb();
	this.respuesta5.name = "respuesta5";
	this.respuesta5.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta5, 0, 1, 2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhWIAYAAIAZgBIgWDAIgrABIgkhfIgEAvIgFAtIgxAGg");
	this.shape_223.setTransform(1218,335.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgLCNQgVgBgOgJQgOgJgIgPQgJgOgBgTQgDgSADgTQACgSAIgRQAIgQALgOQAMgNAQgIIADgCIgFgKIgLgUIBGg7IAfAqIgTAOIgVAOIgUANIgBABIgTANIgFgIQAMgFANgBQgNABgMAFIAFAIIATgNIABgBIAGAAQAVAAAOAJQAOAJAIAPQAHAOACASQADASgDATQgDASgHARQgIASgLANQgLANgOAIQgPAJgRAAgAgNAAQgIAJgHAOQgDALgBALQgBAMACAJQADAJAFAHQAGAGAKACIACAAIABAAQAFAAAFgDQAFgDAFgFIAHgMIAGgPQADgKAAgLQAAgKgCgJQgCgJgFgFQgFgGgIgBIgBAAIgDAAQgKAAgJAJg");
	this.shape_224.setTransform(1202.05,331.975);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgRhgIAyAAIgRDAIgXAAIgZABg");
	this.shape_225.setTransform(1188.85,336.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGASgDQASgDAQAAQALAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgWAQIgXgmgAgDg6IgJABIgDAUIgCAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_226.setTransform(1132,336.225);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA0gCIAAAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_227.setTransform(1117.55,336.125);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgPgCgSQgCgSADgTQADgRAHgRQAIgSALgNQAMgNAQgIQAQgJASABQAVgBAOAKQAOAIAIAQQAIAOACASQACATgDARQgDATgHARQgHASgLANQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBAMACAJQADAJAFAGQAGAHAKABIABAAIACAAQAFAAAFgDQAGgDAEgFIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_228.setTransform(1072.5082,336.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("Agag2IBBADIgbBpIgzABg");
	this.shape_229.setTransform(1050.6,343.475);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAIhWIAXAAIAZgBIgVDAIgsABIgjhfIgFAvIgEAtIgyAGg");
	this.shape_230.setTransform(1040,335.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgKCNQgWgBgOgJQgOgJgJgPQgIgOgCgTQgCgSADgTQACgSAIgRQAIgQALgOQAMgNAQgIIADgCIAFAIIATgNIABgBIgBABIgTANIgFgIQAMgFANgBQgNABgMAFIgGgKIgKgUIBGg7IAfAqIgTAOIgVAOIgUANIAGAAQAVAAAOAJQAOAJAIAPQAIAOACASQACASgDATQgDASgHARQgIASgLANQgKANgPAIQgPAJgRAAgAgNAAQgIAJgGAOQgEALgBALQAAAMABAJQADAJAFAHQAGAGAKACIABAAIACAAQAFAAAFgDQAGgDAEgFIAHgMIAGgPQADgKAAgLQAAgKgCgJQgCgJgFgFQgFgGgIgBIgBAAIgDAAQgKAAgJAJg");
	this.shape_231.setTransform(1024.05,331.975);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgvBgQgNAAgLgBIAOhfIAOhgIBzADIgEAWIgEAWIhCgCIgGApIA1ACIgIAsIg0gCIgEAfIgFAgIgXgBg");
	this.shape_232.setTransform(948.35,336.125);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgQhgIAxAAIgRDAIgXAAIgZABg");
	this.shape_233.setTransform(937.2,336.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("Ag6hTIAxgSIAhBeIAHhWIAYAAIAZgBIgWDAIgrABIgkhfIgEAvIgFAtIgxAGg");
	this.shape_234.setTransform(925.05,335.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgLBjQgVAAgOgJQgOgKgJgOQgIgPgCgSQgCgSADgTQADgRAHgRQAIgSALgNQAMgNAQgIQAQgJASABQAVgBAOAKQAOAIAIAQQAIAOACASQACATgDARQgDATgHARQgHASgLANQgMANgOAIQgPAIgRAAgAgNgpQgIAJgHAPQgDALgBAKQgBAMACAJQADAJAFAGQAGAHAKABIABAAIACAAQAFAAAFgDQAGgDAEgFIAHgLQAEgIACgHQACgLABgJQAAgKgCgJQgCgJgFgGQgFgGgIgCIgCAAIgCAAQgKAAgJAKg");
	this.shape_235.setTransform(909.0082,336.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAOBDIgYgoIgGAAIgFgBIgFAjIgDAiIgYABIgYABIAUi9QATgGATgDQARgDAQAAQALAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgTAQIgWAQIgXgmgAgDg6IgJABIgCAUIgDAUIAIAAIANAAQAFgBAGgCQAFgCAEgDQADgEABgHQADgJgFgGQgEgFgJgCIgFgBIgEAAIgHABg");
	this.shape_236.setTransform(877.3,336.225);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgqhjIByAEIgDAVIgDAWIhEgDIgDAcIA0gCIAAAXIgCAVIgeACIgdACIgEAgIBJgEIgBAXIgBAYIg9ADIg/ADg");
	this.shape_237.setTransform(862.85,336.125);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("Agag2IBBADIgbBpIgzABg");
	this.shape_238.setTransform(1207.1,302.375);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgnhfIAMAAIASAAIASgBIgSCSIBJgCIgDAYIgFAXIh3ABg");
	this.shape_239.setTransform(1183.55,294.95);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgOgCgTQgCgSADgSQADgTAHgQQAIgRALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAPQAIAOACATQACARgDATQgDASgHARQgHARgLANQgMAOgOAIQgPAIgRAAgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgCAEgGQAEgEADgIQAEgGACgIQACgLABgJQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_240.setTransform(1169.1582,295);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AhHBiIASi9IANgBIAUgDIAUgCIAPgBQAOAAALADQALACAIAGQAIAGADAJQADAJgBAOQgCAPgHAJIgLARQAJAGAGALQAFAMgDAPQgCAMgHALQgHALgNAJQgMAJgSAFQgRAGgXAAgAgEARIgNADIgDAhIAEABIAGAAIACAAIACAAIAJgCIAHgFIAFgFIAEgFQADgHgDgHQgEgGgJgDIgKADgAABg3IgLACIgDAdQAKgCAGgCQAHgCAFgDQAEgDADgEIADgIQABgIgPAAIgKABgAg3hbIACAAIAAAAg");
	this.shape_241.setTransform(1152.6975,294.925);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AANBDIgWgoIgHAAIgGgBIgDAjIgEAiIgYABIgYABIATi9QAVgGARgDQATgDAOAAQALAAAKABQAXAGALAQQALAQgDAcQgCAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgJABIgCAUIgBAUIAHAAIAMAAQAGgBAGgCQAFgCADgDQAEgEACgHQACgJgEgGQgFgFgKgCIgDgBIgFAAIgIABg");
	this.shape_242.setTransform(1137.35,295.125);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("Agqg9IAdAAIgIgNIgIgPIA5gvIAZAiIgeAVIgfAVIBQACIgCAVIgEAWIhEgCIgEAaIA1gBIgBAWIgBAXIgdACIgeABIgEAhIBIgFIgBAYIAAAYIg+ADIg+ACg");
	this.shape_243.setTransform(1122.9,291.275);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("Ag4hfIAvgDIgHBPIAngFIAGhJIAwAAIgRC/IgvABIAFhHIgmACIgHBDIgxAGg");
	this.shape_244.setTransform(1085.1,295.15);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("Agbg2IBCADIgbBpIgyABg");
	this.shape_245.setTransform(1064.3,302.375);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgnhfIAMAAIATAAIARgBIgSCSIBKgCIgEAYIgFAXIh3ABg");
	this.shape_246.setTransform(1054.2,294.95);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgRhfIAyAAIgSC/IgXAAIgYAAg");
	this.shape_247.setTransform(1043.8,295);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AhMBeIgYgBIANhdIAOhbIAcgBIAdgCIARBkIArhhIAcgCIAdgBIgJBcIgKBcIgLAAIgNABIgNABIgMAAIAKhWIgJAUIgGAQIgGAPIgJAVIgUAAIgVgCIgMhJIgMBcIgYgBg");
	this.shape_248.setTransform(1029.375,295.15);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("Agcg9IACAAIgGgKIgGgLIA5gwIAaAiIgaARIgZASIAbAAIgSC/IgVAAIgZABg");
	this.shape_249.setTransform(1017.85,291.55);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("Agag2IBBADIgbBpIgzABg");
	this.shape_250.setTransform(984.9,302.375);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AANBDIgXgoIgGAAIgGgBIgDAjIgEAiIgYABIgYABIAUi9QATgGASgDQATgDAOAAQAMAAAJABQAWAGAMAQQALAQgCAcQgDAUgJANQgJAMgNAIIAjA5IgUAQIgUAQIgZgmgAgEg6IgIABIgCAUIgCAUIAHAAIANAAQAFgBAGgCQAFgCADgDQAEgEACgHQACgJgFgGQgEgFgJgCIgFgBIgEAAIgIABg");
	this.shape_251.setTransform(958.05,295.125);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgLBjQgVAAgOgKQgOgIgJgPQgIgOgCgTQgCgSADgSQADgTAHgQQAIgRALgOQAMgNAQgJQAQgHASgBQAVABAOAIQAOAKAIAPQAIAOACATQACARgDATQgDASgHARQgHARgLANQgMAOgOAIQgPAIgRAAgAgNgpQgIAKgHAOQgDALgBAKQgBALACAJQADAKAFAHQAGAGAKACIABAAIACAAQAFAAAFgEQAGgCAEgGIAHgMQAEgGACgIQACgLABgJQAAgLgCgIQgCgJgFgGQgFgGgIgBIgCAAIgCAAQgKgBgJAKg");
	this.shape_252.setTransform(942.0082,295);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAdBfIg1ACIgPAfIgqgHIBTi9IgGgMIA5gvIAZAiIgQALIgSANIADAAIADABIAgC5IgZAFIgZAGgAgDAyIAMgBIANgBIgGgrg");
	this.shape_253.setTransform(912.35,292.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AhiB2IgcgBIARh0IARhzIBGgDIAWCOIA5iLIAjgBIAjgCIgMByIgLBzIgcACIgbADIAQiLIgOAcIgLAbIgMAcIgNAeIgXgBIgZgCIgUhvIgTCNIgaAAg");
	this.shape_254.setTransform(867.6,293.05);

	this.respuesta4 = new lib.respuestaa();
	this.respuesta4.name = "respuesta4";
	this.respuesta4.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta4, 0, 1, 2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AhSDNQgLgFgGgJQgGgIgCgLQgBgLACgLQACgLAFgKQAFgKAIgIQAIgIALgFQAKgFANAAQAYAAAPAPQAOAQABAYQgBAOgFALQgEAMgJAIQgIAIgMAFQgMAEgOAAQgQAAgLgFgAhQA+QAJgbAPgUQAQgUAPgQIAZgfQAMgOADgOQAEgRgJgNQgKgMgUAAQgSAAgTAIIgiARIgRhRQAcgQAegHQAdgIAZAAQAYAAAUAIQAVAHAOAPQAOAPAHAVQAHAVgDAcQgEAcgNAYQgOAXgRATQgQAUgRARQgQASgKARg");
	this.shape_255.setTransform(710.0333,610.775);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("Ag2ClQgRgEgPgHQgQgHgLgLQgLgLgHgNIAageIAageQAKAWAUAHQAVAIAXAAQATgCAMgIQAMgIgCgNQgBgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgMgFgMgHQgLgHgJgKQgHgLgEgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAUgGQAVgGAVAAIAOABIAOACQAUAFARAJQARAKANAPIg3BEQgFgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAIASgGAeQgEAagMAUQgNAUgTANQgSAOgWAHQgYAHgYAAQgSAAgRgEg");
	this.shape_256.setTransform(684.1,615.225);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_257.setTransform(657.875,615.525);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgcigIBTAAIgdE/IgnABIgpABg");
	this.shape_258.setTransform(638.85,615.25);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAXBvIgohBIgLgBIgJgBIgGA5IgGA5IgoACIgpABIAhk7QAigKAdgFQAfgGAaAAQASAAAQAEQAlAJAUAaQASAbgFAvQgEAhgPAWQgPAUgWAPIA8BeIgiAaIgjAbIgnhAgAgHhiIgPACIgDAiIgDAiIAMAAIAWgCQAKAAAIgEQAJgDAGgGQAGgGADgMQADgPgHgJQgIgJgPgDIgHgBIgHAAIgOAAg");
	this.shape_259.setTransform(617.65,615.45);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_260.setTransform(590.375,615.525);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAXBvIgohBIgLgBIgJgBIgGA5IgGA5IgoACIgpABIAhk7QAigKAdgFQAfgGAaAAQASAAAPAEQAmAJAUAaQASAbgFAvQgEAhgPAWQgPAUgWAPIA8BeIgiAaIgjAbIgnhAgAgHhiIgPACIgDAiIgDAiIAMAAIAWgCQAKAAAJgEQAIgDAGgGQAGgGACgMQAFgPgIgJQgIgJgQgDIgGgBIgHAAIgOAAg");
	this.shape_261.setTransform(565.25,615.45);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AhHilIC/AFIgFAjQgCATgEASIhygEIgFAuIBZgCIgCAlIgCAkIgxADIgyAEIgHA2IB6gIIgCAnIgCAoIhmAFIhoAFg");
	this.shape_262.setTransform(541.2,615.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgnChIgogBIAjjyIhLADIAPhTIBwAEIBwADIgPBOIhHgCIgSB4IgSB6QgQgCgVAAg");
	this.shape_263.setTransform(521.925,615.15);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgcigIBTAAIgeE/IgmABIgpABg");
	this.shape_264.setTransform(502.45,615.25);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_265.setTransform(483.025,615.175);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("Ag2ClQgSgEgPgHQgPgHgLgLQgMgLgGgNIAZgeIAbgeQALAWATAHQAVAIAWAAQAVgCALgIQAMgIgCgNQAAgHgHgFQgGgFgKgEIgUgIQgNgEgMgGQgMgFgMgHQgLgHgJgKQgHgLgEgOQgEgPAEgTQAEgZAMgTQAMgSARgNQARgMAUgGQAVgGAVAAIAOABIANACQAVAFARAJQARAKANAPIg3BEQgFgMgJgHQgKgHgJgEQgLgEgLAAQgNAAgJAGQgIAFgCALQgCAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAIASgGAeQgEAagMAUQgNAUgSANQgTAOgXAHQgWAHgYAAQgSAAgSgEg");
	this.shape_266.setTransform(445.8,615.225);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_267.setTransform(419.575,615.525);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AAXBvIgohBIgLgBIgJgBIgGA5IgGA5IgoACIgpABIAhk7QAigKAdgFQAfgGAaAAQASAAAQAEQAlAJAUAaQASAbgFAvQgEAhgPAWQgPAUgWAPIA8BeIgiAaIgjAbIgnhAgAgHhiIgPACIgDAiIgEAiIANAAIAWgCQAKAAAIgEQAJgDAGgGQAGgGADgMQADgPgHgJQgIgJgPgDIgHgBIgHAAIgOAAg");
	this.shape_268.setTransform(394.45,615.45);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgcChQgggBgVgLQgWgKgMgTQgNgTgDgaQgDgaAFgfIAcivIBOgCIgNBaIgNBaQgFAbAHANQAIAMATADIACAAIADAAQAPAAAKgNQALgNADgbQAIgsAHgvIANhcIBRADIgOBcIgNBbQgIBAgjAkQgiAjg3AAIgCAAg");
	this.shape_269.setTransform(369.6188,615.7003);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgmCmQgUgEgSgLQgRgLgNgTQgMgSgFgbQgGgaAEgjQAGgvARgjQAQgjAXgVQAWgXAbgKQAagLAaAAQAZABAXAHQAXAIATAPIguBFQgKgKgMgGQgMgFgOAAQgOgBgOAHQgMAGgMANQgMANgIATQgJATgDAZQgCAUADAPQADAPAHAKQAGAJAKAFQAJAFALAAIADAAIAEAAIAGgCIAGgCIALgvIgtgDIAShFIBwAFIgNBHIgOBJQgVAZgbAMQgbAMgcAAIgUgBg");
	this.shape_270.setTransform(344.1408,615.25);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgcigIBTAAIgeE/IgmABIgpABg");
	this.shape_271.setTransform(323.25,615.25);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AhOCgIgpgBIAXifIAYigIDAAEIgHAlIgGAlIhvgDIgKBDIBYAEIgNBKIhWgDIgHAzIgIA1QgSgBgUAAg");
	this.shape_272.setTransform(306.3,615.275);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AhHilIC/AFIgFAjQgCATgDASIhzgEIgGAuIBagCIgCAlIgCAkIgxADIgyAEIgHA2IB6gIIgCAnIgCAoIhmAFIhoAFg");
	this.shape_273.setTransform(269.75,615.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AhhiLIBQgeIA5CcIAMiOIAoAAIApgCIgjFAIhJABIg7idIgIBPIgIBLIhSAJg");
	this.shape_274.setTransform(246.125,614.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AhHilIC/AFIgFAjQgCATgEASIhxgEIgHAuIBagCIgCAlIgCAkIgyADIgwAEIgIA2IB5gIIgCAnIgBAoIhmAFIhoAFg");
	this.shape_275.setTransform(222.1,615.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgcigIBTAAIgeE/IgmABIgpABg");
	this.shape_276.setTransform(203.65,615.25);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgnChIgogBIAjjyIhLADIAPhTIBwAEIBwADIgPBOIhHgCIgSB4IgSB6QgQgCgVAAg");
	this.shape_277.setTransform(187.725,615.15);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AhhiLIBQgeIA5CcIAMiOIAoAAIApgCIgjFAIhJABIg7idIgIBPIgIBLIhSAJg");
	this.shape_278.setTransform(163.075,614.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgTClQgjAAgXgQQgYgOgOgYQgNgZgEgeQgEgfAFgfQAFgeAMgdQANgcATgWQAUgXAagNQAbgOAfAAQAiABAYAPQAXAOANAZQANAZAEAeQADAegFAfQgFAegMAdQgLAdgTAWQgSAXgZANQgYANgdAAgAgWhFQgOAQgLAYQgFATgCARQgBASADAQQAEAPAKALQAJALAQADIADAAIADAAQAJAAAIgFQAJgFAHgIQAHgJAGgMQAFgLAEgNQAEgRABgQQAAgSgDgPQgEgOgIgLQgIgJgNgDIgDAAIgEAAQgRAAgPAQg");
	this.shape_279.setTransform(136.3529,615.25);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("Ag+CgQgVgJgPgTQgPgTgHgdQgHgdAFgnQAGgsAOghQAOghATgXQAUgXAXgMQAYgMAXgDIAHgBIAHAAQAZABAXAIQAXAKATASIg1BGQgJgNgNgHQgNgHgMAAIgLABQgVAJgRAbQgSAbgEAmQgFAjALATQALASASADIACAAIADAAQAPAAAQgJQAPgIANgQIAgA+QgTAXgbAOQgcAOgdAAQgXgBgVgIg");
	this.shape_280.setTransform(112.0708,615.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgTClQgjAAgXgPQgYgQgOgYQgNgYgEgfQgEgeAFgfQAFgeAMgcQANgdATgXQAUgWAagNQAbgNAfAAQAiAAAYAOQAXAPANAZQANAZAEAeQADAegFAfQgFAegMAdQgLAdgTAWQgSAWgZAOQgYANgdAAgAgWhFQgOAQgLAZQgFASgCARQgBATADAPQAEAQAKAKQAJALAQADIADAAIADAAQAJAAAIgFQAJgFAHgIQAHgJAGgLQAFgMAEgNQAEgRABgRQAAgRgDgOQgEgPgIgKQgIgKgNgDIgDAAIgEAAQgRAAgPAQg");
	this.shape_281.setTransform(699.1029,548.05);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_282.setTransform(672.925,547.975);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgTClQgjAAgXgPQgYgQgOgYQgNgYgEgfQgEgeAFgfQAFgeAMgcQANgdATgXQAUgWAagNQAbgNAfAAQAiAAAYAOQAXAPANAZQANAZAEAeQADAegFAfQgFAegMAdQgLAdgTAWQgSAWgZAOQgYANgdAAgAgWhFQgOAQgLAZQgFASgCARQgBATADAPQAEAQAKAKQAJALAQADIADAAIADAAQAJAAAIgFQAJgFAHgIQAHgJAGgLQAFgMAEgNQAEgRABgRQAAgRgDgOQgEgPgIgKQgIgKgNgDIgDAAIgEAAQgRAAgPAQg");
	this.shape_283.setTransform(648.9529,548.05);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("Ag2ClQgSgEgOgHQgQgHgLgLQgLgLgHgNIAZgeIAageQALAWAVAHQAUAIAXAAQATgCAMgIQAMgIgDgNQAAgHgFgFQgHgFgKgEIgVgIQgMgEgMgGQgNgFgLgHQgLgHgIgKQgJgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQATgGAWAAIAOABIANACQAVAFASAJQAQAKANAPIg2BEQgGgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAHASgFAeQgEAagNAUQgMAUgSANQgSAOgYAHQgWAHgZAAQgRAAgSgEg");
	this.shape_284.setTransform(621.25,548.025);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("Ag2ClQgRgEgPgHQgPgHgMgLQgMgLgGgNIAageIAageQAKAWAUAHQAVAIAXAAQATgCAMgIQAMgIgDgNQAAgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgNgFgLgHQgLgHgJgKQgIgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQATgGAWAAIAOABIAOACQAUAFASAJQAQAKANAPIg3BEQgFgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAHASgFAeQgEAagMAUQgNAUgTANQgSAOgWAHQgYAHgYAAQgSAAgRgEg");
	this.shape_285.setTransform(582.3,548.025);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgTClQgjAAgXgPQgYgQgOgYQgNgYgEgfQgEgeAFgfQAFgeAMgcQANgdATgXQAUgWAagNQAbgNAfAAQAiAAAYAOQAXAPANAZQANAZAEAeQADAegFAfQgFAegMAdQgLAdgTAWQgSAWgZAOQgYANgdAAgAgWhFQgOAQgLAZQgFASgCARQgBATADAPQAEAQAKAKQAJALAQADIADAAIADAAQAJAAAIgFQAJgFAHgIQAHgJAGgLQAFgMAEgNQAEgRABgRQAAgRgDgOQgEgPgIgKQgIgKgNgDIgDAAIgEAAQgRAAgPAQg");
	this.shape_286.setTransform(556.6029,548.05);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AheiVQAdgIAbgFQAbgEAVAAQAdAAAYAIQAXAGAPAOQAQAOAIAWQAHAWgEAeQgHAygbAcQgcAdgpAKQgWAEgUAAIgKAAIgKgBIgLBeIgnACQgWgBgTACgAgFhcIgPACIgJBXQAMABAMgCQAMgBAKgGQALgFAIgIQAJgKADgPQAEgPgGgKQgGgLgMgFQgJgCgMAAIgMAAg");
	this.shape_287.setTransform(530.2227,547.65);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgcChQgggBgVgKQgWgLgMgTQgNgTgDgaQgDgaAFgfIAcivIBOgCIgNBaIgNBaQgFAbAHANQAIAMATADIACAAIADAAQAPAAAKgNQALgNADgbQAIgsAHgvIANhcIBRADIgOBcIgNBbQgIBAgjAkQgiAjg3AAIgCAAg");
	this.shape_288.setTransform(505.5688,548.5003);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAXBvIgohCIgLAAIgJgBIgGA5IgGA5IgoACIgpABIAhk7QAigKAdgFQAfgGAaABQASAAAQACQAlAKAUAaQASAagFAwQgEAhgPAVQgPAVgWAOIA8BgIgiAaIgjAbIgnhBgAgHhiIgPACIgDAiIgEAiIANAAIAWgBQAKgBAJgEQAIgDAGgGQAGgHADgLQADgOgHgKQgIgJgPgEIgHgBIgHAAIgOABg");
	this.shape_289.setTransform(478.15,548.25);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgmCmQgUgEgSgLQgRgLgNgTQgMgTgFgaQgGgaAEgiQAGgxARgiQAQgjAXgWQAWgWAbgKQAagLAaAAQAZAAAXAIQAXAHATARIguBEQgKgKgMgFQgMgHgOAAQgOABgOAGQgMAHgMAMQgMANgIATQgJATgDAZQgCAUADAPQADAPAHAJQAGAKAKAGQAJAEALAAIADAAIAEgBIAGgBIAGgCIALgvIgtgEIAShEIBwAFIgNBHIgOBIQgVAagbAMQgbANgcAAIgUgCg");
	this.shape_290.setTransform(453.8908,548.05);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("Ag2ClQgRgEgPgHQgPgHgMgLQgMgLgGgNIAageIAageQAKAWAUAHQAVAIAXAAQATgCAMgIQAMgIgDgNQAAgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgNgFgLgHQgLgHgJgKQgIgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQAUgGAVAAIAOABIAOACQAUAFASAJQAQAKANAPIg3BEQgFgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAHASgFAeQgEAagMAUQgNAUgTANQgSAOgWAHQgYAHgYAAQgSAAgRgEg");
	this.shape_291.setTransform(413.1,548.025);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgTClQgjAAgXgPQgYgQgOgYQgNgYgEgfQgEgeAFgfQAFgeAMgcQANgdATgXQAUgWAagNQAbgNAfAAQAiAAAYAOQAXAPANAZQANAZAEAeQADAegFAfQgFAegMAdQgLAdgTAWQgSAWgZAOQgYANgdAAgAgWhFQgOAQgLAZQgFASgCARQgBATADAPQAEAQAKAKQAJALAQADIADAAIADAAQAJAAAIgFQAJgFAHgIQAHgJAGgLQAFgMAEgNQAEgRABgRQAAgRgDgOQgEgPgIgKQgIgKgNgDIgDAAIgEAAQgRAAgPAQg");
	this.shape_292.setTransform(387.4029,548.05);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgnCiIgogBIAjjyIhLACIAPhSIBwACIBwAEIgPBNIhHgBIgSB4IgSB6QgQgCgVABg");
	this.shape_293.setTransform(364.725,547.95);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("Ag2ClQgRgEgPgHQgPgHgMgLQgLgLgHgNIAageIAageQAKAWAUAHQAVAIAXAAQATgCAMgIQAMgIgCgNQgBgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgMgFgMgHQgLgHgJgKQgHgLgEgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQAUgGAVAAIAOABIAOACQAUAFARAJQARAKANAPIg3BEQgFgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAIASgGAeQgEAagMAUQgNAUgTANQgSAOgWAHQgYAHgYAAQgSAAgRgEg");
	this.shape_294.setTransform(339.4,548.025);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgEASIhygEIgFAuIBZgDIgCAlIgCAlIgxAEIgyACIgHA2IB5gHIgBAnIgCAoIhmAFIhoAEg");
	this.shape_295.setTransform(316.4,548.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AhHilIC/AGIgFAiQgCATgEASIhygEIgFAuIBZgDIgCAlIgCAlIgxAEIgyACIgHA2IB5gHIgBAnIgCAoIhmAFIhoAEg");
	this.shape_296.setTransform(279.95,548.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("Ah+CgIAek5IAPgDIAbgDIAhgEIAdgCIAHABIAHAAQAZAEAUALQAUAKAOATQAOARAHAbQAHAZgCAiIgEAlQgDASgFASQgZAzgtAdQgtAdg3ABgAgLhbIgOACIgQCvIAEAAIADAAQASAAAOgHQANgHALgNQAKgMAGgSQAGgTADgUQACgRgCgPQgBgOgFgLQgFgLgKgHQgJgGgQgBIgMABg");
	this.shape_297.setTransform(255.5972,548.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_298.setTransform(217.125,547.975);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAvCgIhZADIgXAyIhHgLICKk8IgKgTIBghPIArA5IgdATIgeAVIAFAAIAGAAIA2E3IgqAJIgpAIgAgGBUIAVgCIAWgCIgKhIg");
	this.shape_299.setTransform(192.625,543.675);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgcChQgggBgVgKQgWgLgMgTQgNgTgDgaQgDgaAFgfIAcivIBOgCIgNBaIgNBaQgFAbAHANQAIAMATADIACAAIADAAQAPAAAKgNQALgNADgbQAIgsAHgvIANhcIBRADIgOBcIgNBbQgIBAgjAkQgiAjg3AAIgCAAg");
	this.shape_300.setTransform(168.8688,548.5003);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("Ag+CfQgVgJgPgSQgPgTgHgcQgHgdAFgoQAGgsAOghQAOghATgXQAUgXAXgMQAYgMAXgCIAHgBIAHAAQAZAAAXAJQAXAJATATIg1BGQgJgNgNgIQgNgHgMAAIgLACQgVAIgRAbQgSAagEAnQgFAkALASQALATASABIACABIADAAQAPAAAQgJQAPgJANgPIAgA+QgTAXgbAOQgcANgdAAQgXABgVgKg");
	this.shape_301.setTransform(145.1208,548);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgvDKQgVgHgOgPQgOgPgHgVQgHgVADgcQAEgcANgXQAOgYARgUIAhglQAQgRAKgRIBRAKQgJAbgPAUQgQAUgPAQIgaAfQgLAOgDAOQgEARAJANQAJAMAVAAQASAAATgIIAigRIARBRQgcAQgeAHQgdAIgZAAQgYAAgUgIgAAGhsQgOgPgBgYQABgOAFgLQAEgMAJgIQAJgIALgFQAMgEAOAAQAQAAALAFQALAFAGAIQAGAJACALQABALgCALQgCALgFAKQgFAKgIAIQgIAIgLAFQgKAFgNAAQgYAAgPgQg");
	this.shape_302.setTransform(122.1167,547.275);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgmBzQgLgCgLgFQgLgFgHgIQgJgHgFgKIASgUIASgWQAJAQAOAFQAOAFAPAAQAOgBAJgGQAHgGgBgJQAAgFgFgDIgKgGIgPgGIgRgHQgJgDgIgGQgIgEgFgHQgGgHgCgLQgDgKADgNQACgSAIgNQAJgNAMgIQAMgJAOgEQAOgEAPAAIAKAAIAKABQAOAEAMAHQALAGAJALIglAwQgFgJgGgFQgGgFgIgDQgHgCgIAAQgIAAgHAEQgGAEgBAHQgBAGAHADQAGAEAKAEIAZAJQAOAFALAIQAKAIAGAMQAFAMgEAVQgDASgJAOQgIAOgNAKQgNAJgQAFQgQAFgRAAQgMAAgNgDg");
	this.shape_303.setTransform(1070.3,616.225);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgyhzICGAEIgDAYIgFAaIhPgDIgEAgIA+gBIgBAaIgBAZIgjACIgiACIgGAmIBWgFIgCAbIgBAcIhHADIhJAEg");
	this.shape_304.setTransform(1054.2,616.25);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_305.setTransform(1037.625,615.975);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgygIIBijhQAMACAPAAIAcABIAlDaIgdAGIgcAGgAgEAaIAOgBIAQgBIgHgyg");
	this.shape_306.setTransform(1018.55,616.425);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgthvIANAAIAWAAIAUgBIgVCqIBWgCIgEAbIgGAdIiLABg");
	this.shape_307.setTransform(1002.2,616.175);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AhChoQAVgGATgDQASgDAPAAQAUABARAEQAQAFALAKQALAKAFAPQAFAPgDAVQgEAjgUAUQgTAUgdAHQgPACgOABIgHAAIgHgBIgHBCIgcAAIgdACgAgOg/IgGA9IARgBQAIgBAHgDQAIgEAGgGQAFgHADgLQADgJgFgHQgEgIgJgEIgOgBIgJAAIgKABg");
	this.shape_308.setTransform(986.9063,615.95);

	this.respuesta9 = new lib.respuestac();
	this.respuesta9.name = "respuesta9";
	this.respuesta9.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta9, 0, 1, 2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AglBzQgMgCgLgFQgLgFgIgIQgIgHgFgKIASgUIASgWQAJAQANAFQAPAFAQAAQANgBAIgGQAJgGgCgJQAAgFgEgDIgMgGIgOgGIgRgHQgJgDgIgGQgIgEgGgHQgFgHgDgLQgCgKACgNQAEgSAIgNQAIgNAMgIQAMgJAPgEQANgEAPAAIAJAAIAKABQAOAEAMAHQAMAGAKALIgnAwQgEgJgGgFQgHgFgGgDQgIgCgIAAQgJAAgGAEQgGAEgBAHQgBAGAHADQAGAEAKAEIAaAJQANAFAKAIQALAIAFAMQAGAMgEAVQgCASgKAOQgJAOgMAKQgNAJgQAFQgQAFgQAAQgNAAgMgDg");
	this.shape_309.setTransform(1100.5,467.475);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgxhzICFAEIgEAYIgDAZIhQgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgFAmIBUgGIgBAcIgBAcIhHAEIhJADg");
	this.shape_310.setTransform(1084.4,467.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_311.setTransform(1067.825,467.225);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_312.setTransform(1049.1288,467.475);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgUhwIA6AAIgUDfIgbABIgdABg");
	this.shape_313.setTransform(1033.85,467.475);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgrBwQgPgHgKgNQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgQQAOgPAQgJQARgJAQgCIAFAAIAEAAQASAAAQAGQAQAHANANIglAxQgGgKgJgEQgJgGgJAAIgHACQgOAGgNASQgMATgDAaQgDAaAHANQAIANAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAQgTAJQgTAKgUAAQgQAAgPgGg");
	this.shape_314.setTransform(1021.5779,467.45);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AhChoQAVgFATgEQASgDAPAAQAUABARAEQAQAFALAKQALAKAFAPQAFAPgDAVQgEAjgUAUQgTAUgdAHQgPACgOAAIgHAAIgHAAIgHBCIgcAAIgdACgAgOg/IgGA9IARgBQAIgBAHgDQAIgDAGgHQAFgHADgKQADgKgFgHQgEgIgJgEIgOgBIgJAAIgKABg");
	this.shape_315.setTransform(1004.0063,467.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgxhzICFAEIgEAYIgDAZIhQgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJADg");
	this.shape_316.setTransform(987.3,467.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAAAqIg/BPIgogkIBMhdIgxhNIAygjIAjBCIA3hCIAoAfIhDBUIA2BaIgZASIgaASg");
	this.shape_317.setTransform(970.675,467.45);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgyhzICGAEIgDAYIgFAZIhPgCIgEAgIA+gCIgBAaIgBAaIgjACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJADg");
	this.shape_318.setTransform(954.2,467.5);

	this.respuesta8 = new lib.botonb();
	this.respuesta8.name = "respuesta8";
	this.respuesta8.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta8, 0, 1, 2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgmBzQgMgCgKgFQgLgFgIgIQgIgHgFgKIASgUIASgWQAJAQANAFQAPAFAQAAQANgBAIgGQAJgGgCgJQAAgFgEgDIgMgGIgOgGIgRgHQgJgDgIgGQgIgEgGgHQgFgHgCgLQgDgKADgNQACgSAJgNQAIgNAMgIQAMgJAOgEQAOgEAPAAIAJAAIAKABQAOAEAMAHQAMAGAKALIgnAwQgEgJgGgFQgHgFgGgDQgIgCgIAAQgJAAgGAEQgGAEgBAHQgBAGAHADQAGAEAKAEIAaAJQANAFAKAIQALAIAFAMQAGAMgEAVQgCASgKAOQgJAOgMAKQgNAJgQAFQgQAFgQAAQgNAAgNgDg");
	this.shape_319.setTransform(1151.9,313.425);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_320.setTransform(1133.9288,313.425);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgbBxIgcgBIAYipIg0ACIAKg6IBOACIBPADIgLA2IgygBIgMBTIgMBWIgagBg");
	this.shape_321.setTransform(1118.075,313.375);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("Agyh0ICGAFIgEAYIgDAZIhQgCIgEAgIA+gCIgBAaIgBAaIgjACIgiACIgFAmIBUgGIgBAcIgBAcIhHAEIhJACg");
	this.shape_322.setTransform(1101.65,313.45);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_323.setTransform(1084.425,313.575);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgrBvQgPgFgKgOQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgPQAOgRAQgIQARgIAQgCIAFgBIAEAAQASAAAQAGQAQAHANANIglAxQgGgJgJgFQgJgGgJABIgHABQgOAFgNAUQgMASgDAbQgDAZAHAMQAIAOAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAPgTALQgTAJgUAAQgQAAgPgHg");
	this.shape_324.setTransform(1068.6779,313.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_325.setTransform(1050.625,313.175);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_326.setTransform(1031.9288,313.425);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgrBvQgPgFgKgOQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgPQAOgRAQgIQARgIAQgCIAFgBIAEAAQASAAAQAGQAQAHANANIglAxQgGgJgJgFQgJgGgJABIgHABQgOAFgNAUQgMASgDAbQgDAZAHAMQAIAOAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAPgTALQgTAJgUAAQgQAAgPgHg");
	this.shape_327.setTransform(1014.9279,313.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AglBzQgMgCgLgFQgKgFgJgIQgHgHgFgKIASgUIASgWQAHAQAOAFQAPAFAQAAQANgBAIgGQAJgGgCgJQAAgFgFgDIgLgGIgOgGIgRgHQgJgDgIgGQgIgEgGgHQgFgHgDgLQgCgKACgNQAEgSAIgNQAIgNAMgIQAMgJAPgEQANgEAPAAIAJAAIAKABQAOAEAMAHQANAGAIALIgmAwQgEgJgGgFQgHgFgGgDQgIgCgHAAQgKAAgGAEQgGAEgBAHQgBAGAHADQAGAEALAEIAZAJQANAFAKAIQALAIAFAMQAGAMgEAVQgCASgKAOQgJAOgMAKQgNAJgQAFQgQAFgQAAQgNAAgMgDg");
	this.shape_328.setTransform(986.55,313.425);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_329.setTransform(968.5788,313.425);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgmBzQgMgCgKgFQgKgFgIgIQgIgHgGgKIASgUIASgWQAJAQAOAFQAOAFAPAAQAOgBAJgGQAHgGgBgJQAAgFgEgDIgLgGIgPgGIgRgHQgJgDgIgGQgIgEgFgHQgGgHgCgLQgDgKADgNQACgSAIgNQAJgNAMgIQAMgJAOgEQAOgEAPAAIAKAAIAKABQAOAEAMAHQALAGAKALIgmAwQgFgJgGgFQgHgFgGgDQgIgCgIAAQgIAAgHAEQgFAEgCAHQgBAGAHADQAGAEAKAEIAZAJQAOAFALAIQAKAIAGAMQAFAMgEAVQgCASgKAOQgJAOgMAKQgNAJgQAFQgQAFgRAAQgMAAgNgDg");
	this.shape_330.setTransform(949.15,313.425);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgygIIBijhQAMACAPAAIAcABIAlDaIgdAGIgcAGgAgEAaIAOgBIAQgBIgHgyg");
	this.shape_331.setTransform(930.8,313.625);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgrBvQgPgFgKgOQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgPQAOgRAQgIQARgIAQgCIAFgBIAEAAQASAAAQAGQAQAHANANIglAxQgGgJgJgFQgJgGgJABIgHABQgOAFgNAUQgMASgDAbQgDAZAHAMQAIAOAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAPgTALQgTAJgUAAQgQAAgPgHg");
	this.shape_332.setTransform(915.7779,313.4);

	this.respuesta7 = new lib.respuestaa();
	this.respuesta7.name = "respuesta7";
	this.respuesta7.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta7, 0, 1, 2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("Ag4B4QAOgLALgPQAKgPAIgQQAHgRAFgRQACgSADgQQABgQgBgRQgBgQgDgPQgEgPgGgOQgHgNgJgJIAqgUQALAJAIAMQAHAMAFAOQAGAOACAQQADAQAAAQQgBAYgFAYQgGAZgKAWQgKAXgPAUQgOAUgSAOg");
	this.shape_333.setTransform(519,642.725);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgmhZIBnADIgDATIgDAUIg9gDIgDAZIAwgBIgCAUIgBATIgaADIgaABIgEAdIBBgEIgBAVIgBAVIg3AEIg4ACg");
	this.shape_334.setTransform(509.225,642.55);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgdBZQgJgCgIgDQgIgFgGgFQgHgGgDgIIANgQIAPgQQAGAMAKAEQALAEANAAQAKgBAGgFQAHgEgCgHQAAgDgDgDIgJgFIgLgFIgNgEIgNgHQgGgEgEgFQgFgGgBgIQgCgIACgKQACgOAGgJQAHgKAJgHQAJgGALgEQAKgDAMAAIAIAAIAHABQALADAJAFQAKAFAGAJIgdAkQgDgHgFgDIgKgHIgMgBQgHAAgFADQgEADgBAFQgBAFAFADQAFADAIADIATAGQALAFAIAFQAIAGAEAJQAEALgDAPQgCAPgHAKQgGALgKAIQgKAGgMAEQgNAEgMAAQgKAAgKgCg");
	this.shape_335.setTransform(496.075,642.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_336.setTransform(481.925,642.65);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_337.setTransform(468.325,642.625);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgqBWIgWAAIANhWIAMhWIBoACIgEAUIgDAUIg8gCIgFAlIAvACIgHAoIgugCIgEAbIgEAdIgVgBg");
	this.shape_338.setTransform(456.525,642.525);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_339.setTransform(435.025,642.65);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgjhVIALAAIARAAIAPgBIgQCDIBCgCIgDAVIgFAWIhrABg");
	this.shape_340.setTransform(422.4,642.475);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_341.setTransform(401.575,642.65);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgVBXIgWAAIATiDIgoABIAIgsIA8ACIA9ACIgIAqIgngCIgKBBIgJBCIgUgBg");
	this.shape_342.setTransform(390.875,642.475);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgmhZIBnADIgDATIgDAUIg9gDIgDAZIAwgBIgCAUIgBATIgaADIgaABIgEAdIBBgEIgBAVIgBAVIg3AEIg4ACg");
	this.shape_343.setTransform(378.225,642.55);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgjhVIALAAIAQAAIAQgBIgRCDIBDgCIgEAVIgDAWIhsABg");
	this.shape_344.setTransform(365.9,642.475);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgyhQQAPgFAPgCQAPgCALAAQAPAAANAEQANADAIAIQAJAIAEAMQADALgCAQQgDAbgPAPQgPAQgWAFQgMACgLAAIgFAAIgFAAIgGAyIgVABIgXABgAgKgwIgFAvIANAAQAGgCAGgCQAGgDAEgFQAEgFACgJQADgHgEgFQgDgGgHgDIgLgBIgGAAIgIABg");
	this.shape_345.setTransform(354.0864,642.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AhDBVIgXgBIAMhUIANhSIAZgBIAagBIAOBaIAohYIAZgBIAagBIgIBSIgJBTIgKAAIgMABIgLAAIgMABIAJhOIgHATIgFANIgGAPIgIASIgSAAIgUgBIgKhCIgKBTIgVgBg");
	this.shape_346.setTransform(338.55,642.65);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgJBZQgTAAgNgIQgNgJgHgMQgHgOgCgQQgDgRADgQQADgQAGgPQAHgQALgMQAKgLAOgIQAPgIAQAAQATAAAMAJQANAIAHANQAHANACARQACARgDAQQgCAQgHAPQgGAQgKAMQgKAMgNAHQgOAIgPgBgAgLglQgIAJgFANQgDAKgBAJQgBAKACAJQACAHAFAGQAFAHAJAAIABAAIACABQAEAAAFgDQAFgDAEgEIAGgLIAFgNQADgKAAgIQAAgJgCgIQgCgIgEgGQgEgFgIgBIgBgBIgCAAQgJABgIAIg");
	this.shape_347.setTransform(322.2819,642.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AghBWQgLgFgIgKQgJgKgDgQQgEgPACgWQADgWAIgSQAIgTAKgMQALgMAMgHQANgGAMgCIAEAAIAEAAQANAAANAFQAMAFAKAKIgcAmQgFgIgHgDQgHgEgHAAIgGAAQgKAFgKAPQgJAOgDAUQgCAUAGAJQAGALAJABIACAAIABAAQAIAAAIgFQAJgFAHgIIARAhQgLANgOAIQgPAHgPAAQgNAAgLgFg");
	this.shape_348.setTransform(309.2019,642.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgiB4QgIgMgEgPQgFgOgDgPQgCgQAAgRQAAgYAFgXQAGgZAKgXQAKgXAPgTQANgUATgOIAjAUQgOAMgKAOQgLAPgIARQgHAQgFASQgDARgCAQQgCARACAQQABARACAPQAEAPAHANQAGANAJAJIgqAVQgKgJgIgMg");
	this.shape_349.setTransform(297.5,642.725);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgQAhQgFgCgEgEQgEgEgCgGQgCgFgBgGQgBgHADgHQADgHAGgFQAFgGAHgEQAHgDAHgCIACAAIACAAQANAAAHAIQAIAIABANQAAAHgEAIQgDAHgGAGQgGAGgHAEQgIAEgHAAQgGAAgFgDg");
	this.shape_350.setTransform(564.3889,610.675);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgJBaQgTgBgNgIQgNgIgHgNQgHgNgCgRQgDgQADgQQADgRAGgPQAHgQALgMQAKgMAOgHQAPgHAQgBQATAAAMAJQANAIAHANQAHAOACAQQACAQgDAQQgCARgHAPQgGAQgKAMQgKAMgNAHQgOAHgPABgAgLgkQgIAIgFANQgDAKgBAJQgBAKACAJQACAIAFAFQAFAHAJABIABAAIACAAQAEAAAFgDQAFgCAEgFIAGgLIAFgNQADgJAAgJQAAgJgCgIQgCgIgEgFQgEgGgIgBIgBAAIgCAAQgJgBgIAKg");
	this.shape_351.setTransform(553.1319,605.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUABIgXAAg");
	this.shape_352.setTransform(541.325,605.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgyhQQAPgEAPgDQAPgCALAAQAPAAANAEQANADAIAIQAJAIAEAMQADALgCAQQgDAbgPAPQgPAQgWAFQgMADgLgBIgFAAIgFAAIgGAzIgVAAIgXABgAgKgwIgFAvIANAAQAGgCAGgCQAGgDAEgFQAEgFACgIQADgIgEgGQgDgFgHgDIgLgBIgGAAIgIABg");
	this.shape_353.setTransform(530.7364,605.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUABIgXAAg");
	this.shape_354.setTransform(519.975,605.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AghBWQgLgFgIgKQgJgKgDgQQgEgPACgWQADgWAIgTQAIgRAKgMQALgNAMgGQANgIAMAAIAEgBIAEAAQANAAANAFQAMAFAKAKIgcAlQgFgGgHgEQgHgEgHAAIgGABQgKAEgKAPQgJAOgDAUQgCATAGAKQAGAKAJABIACABIABAAQAIAAAIgFQAJgFAHgIIARAhQgLANgOAHQgPAIgPAAQgNAAgLgFg");
	this.shape_355.setTransform(510.5519,605.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("Ag0hLIAsgQIAdBVIAHhNIAVAAIAXgBIgTCsIgoABIgfhVIgFAqIgDApIgtAFg");
	this.shape_356.setTransform(496.65,605.125);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUABIgXAAg");
	this.shape_357.setTransform(485.775,605.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_358.setTransform(474.325,605.425);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgyhQQAPgEAPgDQAPgCALAAQAPAAANAEQANADAIAIQAJAIAEAMQADALgCAQQgDAbgPAPQgPAQgWAFQgMADgLgBIgFAAIgFAAIgGAzIgVAAIgXABgAgKgwIgFAvIANAAQAGgCAGgCQAGgDAEgFQAEgFACgIQADgIgEgGQgDgFgHgDIgLgBIgGAAIgIABg");
	this.shape_359.setTransform(461.0364,605.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgJBaQgTgBgNgIQgNgIgHgNQgHgNgCgRQgDgQADgQQADgRAGgPQAHgQALgMQAKgMAOgHQAPgHAQgBQATAAAMAJQANAIAHANQAHAOACAQQACAQgDAQQgCARgHAPQgGAQgKAMQgKAMgNAHQgOAHgPABgAgLgkQgIAIgFANQgDAKgBAJQgBAKACAJQACAIAFAFQAFAHAJABIABAAIACAAQAEAAAFgDQAFgCAEgFIAGgLIAFgNQADgJAAgJQAAgJgCgIQgCgIgEgFQgEgGgIgBIgBAAIgCAAQgJgBgIAKg");
	this.shape_360.setTransform(439.0819,605.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgTBYIgVAAIAJg/IgnhaIAogXIAZBGIAKgRIALgSIALgSIAKgQIAiAXIgPAVIgPAXIgPAWIgPAWIgKBBIgUgBg");
	this.shape_361.setTransform(418.425,605.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgmhZIBnAEIgDASIgDATIg9gCIgDAaIAwgCIgCAUIgBATIgaACIgaACIgEAdIBBgEIgBAVIgBAVIg3ADIg4ADg");
	this.shape_362.setTransform(405.025,605.35);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgjhVIALAAIARAAIAPgBIgQCDIBCgCIgDAVIgFAWIhrABg");
	this.shape_363.setTransform(392.7,605.275);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgYgwIA7ACIgYBeIguABg");
	this.shape_364.setTransform(375.45,611.975);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVACIAWABIAdCnIgXAEIgWAFgAgDAUIALAAIAMgBIgGgng");
	this.shape_365.setTransform(364.825,605.45);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AhEBVIgWgBIAMhTIAMhUIAagBIAagBIAPBaIAmhYIAagBIAagBIgIBTIgJBTIgKAAIgMABIgMABIgKAAIAJhOIgIASIgGAPIgFANIgIATIgSgBIgTAAIgLhCIgLBSIgVAAg");
	this.shape_366.setTransform(349.75,605.45);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_367.setTransform(333.775,605.425);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgJBaQgTgBgNgIQgNgIgHgNQgHgNgCgRQgDgQADgQQADgRAGgPQAHgQALgMQAKgMAOgHQAPgHAQgBQATAAAMAJQANAIAHANQAHAOACAQQACAQgDAQQgCARgHAPQgGAQgKAMQgKAMgNAHQgOAHgPABgAgLgkQgIAIgFANQgDAKgBAJQgBAKACAJQACAIAFAFQAFAHAJABIABAAIACAAQAEAAAFgDQAFgCAEgFIAGgLIAFgNQADgJAAgJQAAgJgCgIQgCgIgEgFQgEgGgIgBIgBAAIgCAAQgJgBgIAKg");
	this.shape_368.setTransform(319.3319,605.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("Ag0hLIAsgQIAdBVIAHhNIAVAAIAXgBIgUCsIgnABIgfhVIgFAqIgDApIgtAFg");
	this.shape_369.setTransform(304.75,605.125);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVACIAWABIAdCnIgXAEIgWAFgAgDAUIALAAIAMgBIgGgng");
	this.shape_370.setTransform(282.425,605.45);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("Ag0hLIArgQIAfBVIAGhNIAWAAIAWgBIgUCsIgnABIgfhVIgEAqIgFApIgsAFg");
	this.shape_371.setTransform(269.35,605.125);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgPBXQgRgBgMgFQgLgGgHgKQgHgKgBgOQgCgPACgQIAQheIAqgCIgHAxIgHAwQgDAPAEAHQAEAHAKABIACAAIABAAQAIAAAFgHQAGgHACgPIAIgwIAHgyIAsACIgIAxIgHAxQgEAigTAUQgSATgdAAIgCAAg");
	this.shape_372.setTransform(255.9556,605.5506);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAZA9IgvACIgNAbIgmgFIBLiuIAVACIAWABIAdCnIgXAFIgWAEgAgDAVIALgBIAMgCIgGgmg");
	this.shape_373.setTransform(702.725,568.25);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("Ag0hLIAsgQIAdBVIAHhNIAVAAIAXgBIgTCsIgoABIgfhVIgFAqIgDApIgtAFg");
	this.shape_374.setTransform(682.05,567.925);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAZA9IgvACIgNAbIgmgFIBLiuIAVACIAWABIAdCnIgXAFIgWAEgAgDAVIALgBIAMgCIgGgmg");
	this.shape_375.setTransform(667.325,568.25);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgVBXIgWAAIATiDIgoABIAIgsIA8ACIA9ACIgIAqIgngCIgKBBIgJBCIgUgBg");
	this.shape_376.setTransform(656.625,568.075);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgdBZQgJgCgIgDQgIgFgGgFQgHgHgDgHIANgPIAPgRQAGAMAKAEQALAEANAAQAKgBAGgFQAHgEgCgHQAAgEgDgCIgJgFIgLgFIgNgEIgNgIQgGgDgEgFQgFgGgBgHQgCgIACgLQACgNAGgKQAHgLAJgGQAJgGALgEQAKgDAMAAIAIABIAHAAQALADAJAFQAKAGAGAHIgdAlQgDgHgFgDIgKgHIgMgBQgHAAgFADQgEADgBAFQgBAFAFACQAFAEAIADIATAHQALADAIAHQAIAFAEAKQAEAJgDAQQgCAOgHALQgGALgKAHQgKAIgMADQgNAEgMAAQgKAAgKgCg");
	this.shape_377.setTransform(642.925,568.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgPBXQgRgBgMgFQgLgGgHgKQgHgKgBgOQgCgPACgQIAQheIAqgCIgHAxIgHAwQgDAPAEAHQAEAHAKABIACAAIABAAQAIAAAFgHQAGgHACgPIAIgwIAHgyIAsACIgIAxIgHAxQgEAigTAUQgSATgdAAIgCAAg");
	this.shape_378.setTransform(630.1056,568.3506);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgFBaQgLAAgKgEQgJgDgIgGQgIgGgFgIQgGgIgBgIIAQgOIARgOQADALAGAHQAGAGAGACQADABADAAIAGgBQAEgCADgFQAEgEACgJQADgIACgNQABgKAAgMIgBgcIg0ADIACgUIABgWIBagEIABATIABAWIAAAZIgCAYQgEAigMAWQgNAWgXAJIgIACIgHAAg");
	this.shape_379.setTransform(615.9125,568.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AAZA9IgvACIgNAbIgmgFIBLiuIAVACIAWABIAdCnIgXAFIgWAEgAgDAVIALgBIAMgCIgGgmg");
	this.shape_380.setTransform(602.475,568.25);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgmhZIBnAEIgDASIgDAUIg9gCIgDAYIAwgBIgCAUIgBAUIgaACIgaABIgEAdIBBgEIgBAVIgBAWIg3ACIg4ADg");
	this.shape_381.setTransform(582.475,568.15);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgdBZQgJgCgIgDQgIgFgGgFQgHgHgDgHIANgPIAPgRQAGAMAKAEQALAEANAAQAKgBAGgFQAHgEgCgHQAAgEgDgCIgJgFIgLgFIgNgEIgNgIQgGgDgEgFQgFgGgBgHQgCgIACgLQACgNAGgKQAHgLAJgGQAJgGALgEQAKgDAMAAIAIABIAHAAQALADAJAFQAKAGAGAHIgdAlQgDgHgFgDIgKgHIgMgBQgHAAgFADQgEADgBAFQgBAFAFACQAFAEAIADIATAHQALADAIAHQAIAFAEAKQAEAJgDAQQgCAOgHALQgGALgKAHQgKAIgMADQgNAEgMAAQgKAAgKgCg");
	this.shape_382.setTransform(569.325,568.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgmhZIBnAEIgDASIgDAUIg9gCIgDAYIAwgBIgCAUIgBAUIgaACIgaABIgEAdIBBgEIgBAVIgBAWIg3ACIg4ADg");
	this.shape_383.setTransform(549.325,568.15);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgPBXQgRgBgMgFQgLgGgHgKQgHgKgBgOQgCgPACgQIAQheIAqgCIgHAxIgHAwQgDAPAEAHQAEAHAKABIACAAIABAAQAIAAAFgHQAGgHACgPIAIgwIAHgyIAsACIgIAxIgHAxQgEAigTAUQgSATgdAAIgCAAg");
	this.shape_384.setTransform(536.8056,568.3506);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AABBOIgEABIgHAAQgPAAgMgGQgMgGgHgKQgIgIgEgNQgEgMgBgPQAAgRAGgUQAFgTALgQQALgQAQgKQAQgLAUABQAOAAAMAEQALAGAHAJQAIAJAEALQAFALABAOQAAAMgCANQgCALgEALQgEAMgHALQgGAJgJAJIARAQIgRAPIgRAQgAgLgvQgIAIgGANQgDAKgBAKQgBAJACAIQADAIAFAHQAFAFAIACIACAAIABAAQAFAAAEgDQAFgDAEgEIAHgLIAFgMQACgJAAgJQABgKgCgIQgCgIgFgGQgEgFgHgBIgCAAIgCAAQgJAAgHAJg");
	this.shape_385.setTransform(521.7281,569.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#CC0000").s().p("AgQAhQgFgCgEgEQgEgEgCgGQgCgFgBgGQgBgHADgHQADgHAGgFQAFgGAHgEQAHgDAHgCIACAAIACAAQANAAAHAIQAIAIABANQAAAHgEAIQgDAHgGAGQgGAGgHAEQgIAEgHAAQgGAAgFgDg");
	this.shape_386.setTransform(501.6389,573.475);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#CC0000").s().p("AgQAhQgFgCgEgEQgEgEgCgGQgCgFgBgGQgBgHADgHQADgHAGgFQAFgGAHgEQAHgDAHgCIACAAIACAAQANAAAHAIQAIAIABANQAAAHgEAIQgDAHgGAGQgGAGgHAEQgIAEgHAAQgGAAgFgDg");
	this.shape_387.setTransform(493.3389,573.475);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#CC0000").s().p("AgQAhQgFgCgEgEQgEgEgCgGQgCgFgBgGQgBgHADgHQADgHAGgFQAFgGAHgEQAHgDAHgCIACAAIACAAQANAAAHAIQAIAIABANQAAAHgEAIQgDAHgGAGQgGAGgHAEQgIAEgHAAQgGAAgFgDg");
	this.shape_388.setTransform(485.0389,573.475);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgmhZIBnAEIgDASIgDAUIg9gCIgDAYIAwgBIgCAUIgBAUIgaACIgaABIgEAdIBBgEIgBAVIgBAWIg3ACIg4ADg");
	this.shape_389.setTransform(467.675,568.15);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgVBXIgWAAIATiDIgoABIAIgsIA8ACIA9ACIgIAqIgngCIgKBBIgJBCIgUgBg");
	this.shape_390.setTransform(457.275,568.075);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("Ag0hLIArgQIAfBVIAGhNIAWAAIAWgBIgUCsIgnABIgfhVIgEAqIgFApIgsAFg");
	this.shape_391.setTransform(443.95,567.925);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AAZA9IgvACIgNAbIgmgFIBLiuIAVACIAWABIAdCnIgXAFIgWAEgAgDAVIALgBIAMgCIgGgmg");
	this.shape_392.setTransform(429.225,568.25);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUAAIgXABg");
	this.shape_393.setTransform(418.925,568.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AhEBXIARipIAIgBIAPgCIARgDIAPgBIAEAAIAEABQAOACAKAFQALAHAIAJQAHAKAEAOQAEAOgBASIgDATQgBAKgDAKQgNAbgZAQQgYARgdgBgAgFgwIgIABIgJBdIACAAIACAAQAKAAAIgEQAGgDAGgHQAFgHAEgJQADgLACgKIAAgRQgBgIgDgGQgDgGgFgEQgFgDgIAAIgGABg");
	this.shape_394.setTransform(407.5861,568.15);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgmhZIBnAEIgDASIgDAUIg9gCIgDAYIAwgBIgCAUIgBAUIgaACIgaABIgEAdIBBgEIgBAVIgBAWIg3ACIg4ADg");
	this.shape_395.setTransform(394.625,568.15);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AhEBVIgWAAIAMhVIANhTIAZgBIAaAAIAOBZIAnhYIAagBIAaAAIgIBSIgJBSIgKABIgLABIgMABIgMABIAJhPIgHASIgFAPIgGANIgIATIgSgBIgUAAIgKhCIgKBTIgWgBg");
	this.shape_396.setTransform(379.85,568.25);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgJBaQgTgBgNgIQgNgIgHgOQgHgNgCgQQgDgRADgQQADgQAGgPQAHgPALgMQAKgMAOgIQAPgHAQAAQATAAAMAIQANAIAHANQAHAOACAQQACARgDAPQgCARgHAQQgGAPgKAMQgKAMgNAHQgOAIgPAAgAgLgkQgIAIgFANQgDAKgBAJQgBAKACAIQACAIAFAHQAFAFAJACIABAAIACAAQAEAAAFgDQAFgDAEgEIAGgLIAFgNQADgKAAgHQAAgKgCgIQgCgIgEgGQgEgFgIgBIgBAAIgCAAQgJAAgIAJg");
	this.shape_397.setTransform(355.9819,568.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgVBXIgWAAIATiDIgoABIAIgsIA8ACIA9ACIgIAqIgngCIgKBBIgJBCIgUgBg");
	this.shape_398.setTransform(343.775,568.075);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgyhQQAPgEAPgDQAPgCALAAQAPAAANAEQANAEAIAHQAJAIAEALQADAMgCAQQgDAbgPAPQgPAQgWAFQgMACgLABIgFgBIgFAAIgGAyIgVABIgXABgAgKgwIgFAvIANgBQAGAAAGgDQAGgDAEgFQAEgFACgJQADgHgEgGQgDgFgHgDIgLgBIgGAAIgIABg");
	this.shape_399.setTransform(330.7864,567.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgmhZIBnAEIgDASIgDAUIg9gCIgDAYIAwgBIgCAUIgBAUIgaACIgaABIgEAdIBBgEIgBAVIgBAWIg3ACIg4ADg");
	this.shape_400.setTransform(317.925,568.15);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AghBWQgLgFgIgKQgJgKgDgPQgEgQACgVQADgYAIgSQAIgRAKgMQALgNAMgGQANgIAMAAIAEgBIAEAAQANAAANAFQAMAFAKAKIgcAlQgFgHgHgDQgHgEgHAAIgGAAQgKAGgKAOQgJAOgDAUQgCATAGALQAGAKAJAAIACABIABAAQAIAAAIgFQAJgFAHgIIARAiQgLAMgOAIQgPAHgPAAQgNAAgLgFg");
	this.shape_401.setTransform(306.6519,568.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("Ag0hLIArgQIAfBVIAGhNIAWAAIAWgBIgUCsIgnABIgfhVIgEAqIgFApIgsAFg");
	this.shape_402.setTransform(292.75,567.925);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgJBaQgTgBgNgIQgNgIgHgOQgHgNgCgQQgDgRADgQQADgQAGgPQAHgPALgMQAKgMAOgIQAPgHAQAAQATAAAMAIQANAIAHANQAHAOACAQQACARgDAPQgCARgHAQQgGAPgKAMQgKAMgNAHQgOAIgPAAgAgLgkQgIAIgFANQgDAKgBAJQgBAKACAIQACAIAFAHQAFAFAJACIABAAIACAAQAEAAAFgDQAFgDAEgEIAGgLIAFgNQADgKAAgHQAAgKgCgIQgCgIgEgGQgEgFgIgBIgBAAIgCAAQgJAAgIAJg");
	this.shape_403.setTransform(278.2819,568.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AghBWQgLgFgIgKQgJgKgDgPQgEgQACgVQADgYAIgSQAIgRAKgMQALgNAMgGQANgIAMAAIAEgBIAEAAQANAAANAFQAMAFAKAKIgcAlQgFgHgHgDQgHgEgHAAIgGAAQgKAGgKAOQgJAOgDAUQgCATAGALQAGAKAJAAIACABIABAAQAIAAAIgFQAJgFAHgIIARAiQgLAMgOAIQgPAHgPAAQgNAAgLgFg");
	this.shape_404.setTransform(265.2019,568.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("Ag0hLIArgQIAfBVIAGhNIAWAAIAWgBIgUCsIgnABIgfhVIgEAqIgFApIgsAFg");
	this.shape_405.setTransform(243.7,567.925);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgPBXQgRgBgMgFQgLgGgHgKQgHgKgBgOQgCgPACgQIAQheIAqgCIgHAxIgHAwQgDAPAEAHQAEAHAKABIACAAIABAAQAIAAAFgHQAGgHACgPIAIgwIAHgyIAsACIgIAxIgHAxQgEAigTAUQgSATgdAAIgCAAg");
	this.shape_406.setTransform(230.3056,568.3506);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_407.setTransform(207.875,568.225);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AAZA9IgvACIgNAbIgmgFIBLiuIAVACIAWABIAdCnIgXAFIgWAEgAgDAVIALgBIAMgCIgGgmg");
	this.shape_408.setTransform(193.175,568.25);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AhCBTIgBgQIgCgRIBRhcIhBAAIAGgqIBuACIAHAeIgsAxIgqAvIBLAAIgFApg");
	this.shape_409.setTransform(180.35,568.275);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_410.setTransform(166.375,568.225);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgJBaQgTgBgNgIQgNgIgHgOQgHgNgCgQQgDgRADgQQADgQAGgPQAHgPALgMQAKgMAOgIQAPgHAQAAQATAAAMAIQANAIAHANQAHAOACAQQACARgDAPQgCARgHAQQgGAPgKAMQgKAMgNAHQgOAIgPAAgAgLgkQgIAIgFANQgDAKgBAJQgBAKACAIQACAIAFAHQAFAFAJACIABAAIACAAQAEAAAFgDQAFgDAEgEIAGgLIAFgNQADgKAAgHQAAgKgCgIQgCgIgEgGQgEgFgIgBIgBAAIgCAAQgJAAgIAJg");
	this.shape_411.setTransform(151.9319,568.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgqBWIgWAAIANhWIAMhWIBoACIgEAUIgDAUIg8gCIgFAlIAvACIgHAoIgugCIgEAbIgEAdIgVgBg");
	this.shape_412.setTransform(139.175,568.125);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgmhZIBnAEIgDASIgDAUIg9gCIgDAYIAwgBIgCAUIgBAUIgaACIgaABIgEAdIBBgEIgBAVIgBAWIg3ACIg4ADg");
	this.shape_413.setTransform(127.025,568.15);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_414.setTransform(113.725,568.225);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgJBZQgTAAgNgIQgNgJgHgNQgHgNgCgQQgDgRADgQQADgQAGgPQAHgQALgMQAKgLAOgIQAPgIAQAAQATAAAMAJQANAIAHANQAHANACARQACAQgDARQgCAQgHAPQgGAQgKAMQgKAMgNAHQgOAIgPgBgAgLglQgIAJgFANQgDAKgBAJQgBAKACAJQACAHAFAGQAFAHAJAAIABAAIACABQAEAAAFgDQAFgDAEgEIAGgLIAFgNQADgKAAgIQAAgJgCgIQgCgIgEgFQgEgGgIgBIgBgBIgCAAQgJABgIAIg");
	this.shape_415.setTransform(689.5819,530.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_416.setTransform(666.325,531.05);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgmhZIBnADIgDATIgDAUIg9gDIgDAZIAwgBIgCAUIgBATIgaADIgaABIgEAdIBBgEIgBAVIgBAVIg3AEIg4ACg");
	this.shape_417.setTransform(653.925,530.95);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AhEBXIARipIAIgBIAPgDIARgCIAPgBIAEAAIAEABQAOACAKAGQALAFAIAKQAHAKAEAOQAEAOgBASIgDATQgBALgDAJQgNAcgZAPQgYAQgdABgAgFgxIgIACIgJBdIACAAIACAAQAKAAAIgDQAGgEAGgHQAFgHAEgJQADgKACgLIAAgRQgBgIgDgGQgDgGgFgDQgFgEgIAAIgGAAg");
	this.shape_418.setTransform(640.7361,530.95);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUAAIgXABg");
	this.shape_419.setTransform(629.875,530.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_420.setTransform(610.275,531.05);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("Ag0hLIArgQIAeBVIAHhNIAWAAIAWgBIgTCsIgoABIgfhVIgFAqIgDApIgtAFg");
	this.shape_421.setTransform(597.2,530.725);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgPBXQgRgBgMgFQgLgGgHgKQgHgKgBgOQgCgPACgQIAQheIAqgCIgHAxIgHAwQgDAPAEAHQAEAHAKABIACAAIABAAQAIAAAFgHQAGgHACgPIAIgwIAHgyIAsACIgIAxIgHAxQgEAigTAUQgSATgdAAIgCAAg");
	this.shape_422.setTransform(583.8056,531.1506);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_423.setTransform(561.375,531.025);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_424.setTransform(546.675,531.05);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AhABYIAQipIAMgCIASgCIASgCIAOgBQAMAAAKADQAKACAHAFQAHAFADAIQADAJgCAMQgCAOgFAIIgKAPQAIAGAFAKQAFALgDAMQgCALgGAKQgHAKgLAIQgLAIgQAFQgPAFgVAAgAgEAPIgMAEIgCAdIAEAAIAFABIACAAIACgBQAEAAADgBIAHgEIAFgFIADgFQACgGgDgGQgCgGgJgCIgJACgAABgxIgKACIgDAZQAKgBAFgCIAKgFQAEgCACgEIADgHQABgHgNAAIgJABgAgyhRIACgBIAAABg");
	this.shape_425.setTransform(533.375,530.825);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgJBZQgTAAgNgIQgNgJgHgNQgHgNgCgQQgDgRADgQQADgQAGgPQAHgQALgMQAKgLAOgIQAPgIAQAAQATAAAMAJQANAIAHANQAHANACARQACAQgDARQgCAQgHAPQgGAQgKAMQgKAMgNAHQgOAIgPgBgAgLglQgIAJgFANQgDAKgBAJQgBAKACAJQACAHAFAGQAFAHAJAAIABAAIACABQAEAAAFgDQAFgDAEgEIAGgLIAFgNQADgKAAgIQAAgJgCgIQgCgIgEgFQgEgGgIgBIgBgBIgCAAQgJABgIAIg");
	this.shape_426.setTransform(519.2319,530.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAMA8IgUgjIgGgBIgFAAIgEAfIgDAeIgVABIgXABIATiqQARgFARgDQAQgDANAAQAKAAAJACQAUAFAKAOQALAOgDAaQgCASgIALQgIALgMAIIAgAzIgSAOIgTAPIgWgjgAgDg0IgIABIgCASIgCASIAHAAIALAAQAGgBAEgCQAFgCADgDQAEgDABgGQACgIgEgFQgEgFgJgCIgDgBIgEAAIgHABg");
	this.shape_427.setTransform(504.125,531.025);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgyhQQAPgFAPgCQAPgCALAAQAPAAANAEQANAEAIAHQAJAIAEALQADAMgCAQQgDAbgPAPQgPAQgWAFQgMACgLAAIgFAAIgFAAIgGAyIgVABIgXABgAgKgwIgFAvIANAAQAGgCAGgCQAGgDAEgFQAEgFACgJQADgHgEgFQgDgGgHgDIgLgBIgGAAIgIABg");
	this.shape_428.setTransform(490.8364,530.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("Ag0hLIArgQIAfBVIAGhNIAWAAIAWgBIgUCsIgnABIgfhVIgEAqIgFApIgsAFg");
	this.shape_429.setTransform(469.7,530.725);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgmhZIBnADIgDATIgDAUIg9gDIgDAZIAwgBIgCAUIgBATIgaADIgaABIgEAdIBBgEIgBAVIgBAVIg3AEIg4ACg");
	this.shape_430.setTransform(456.725,530.95);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgmhZIBnADIgDATIgDAUIg9gDIgDAZIAwgBIgCAUIgBATIgaADIgaABIgEAdIBBgEIgBAVIgBAVIg3AEIg4ACg");
	this.shape_431.setTransform(437.025,530.95);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgVBXIgWAAIATiDIgoABIAIgsIA8ACIA9ACIgIAqIgngCIgKBBIgJBCIgUgBg");
	this.shape_432.setTransform(426.625,530.875);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgdBZQgJgCgIgDQgIgFgGgFQgHgGgDgIIANgQIAPgQQAGAMAKAEQALAEANAAQAKgBAGgFQAHgEgCgHQAAgDgDgDIgJgFIgLgFIgNgEIgNgHQgGgEgEgFQgFgGgBgIQgCgIACgKQACgOAGgJQAHgKAJgHQAJgHALgDQAKgDAMAAIAIAAIAHABQALADAJAFQAKAFAGAJIgdAkQgDgHgFgDIgKgHIgMgBQgHAAgFADQgEADgBAFQgBAFAFADQAFADAIADIATAGQALAFAIAFQAIAGAEAJQAEALgDAPQgCAPgHAKQgGALgKAIQgKAGgMAEQgNAEgMAAQgKAAgKgCg");
	this.shape_433.setTransform(412.925,530.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUAAIgXABg");
	this.shape_434.setTransform(402.625,530.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgdBZQgJgCgIgDQgIgFgGgFQgHgGgDgIIANgQIAPgQQAGAMAKAEQALAEANAAQAKgBAGgFQAHgEgCgHQAAgDgDgDIgJgFIgLgFIgNgEIgNgHQgGgEgEgFQgFgGgBgIQgCgIACgKQACgOAGgJQAHgKAJgHQAJgHALgDQAKgDAMAAIAIAAIAHABQALADAJAFQAKAFAGAJIgdAkQgDgHgFgDIgKgHIgMgBQgHAAgFADQgEADgBAFQgBAFAFADQAFADAIADIATAGQALAFAIAFQAIAGAEAJQAEALgDAPQgCAPgHAKQgGALgKAIQgKAGgMAEQgNAEgMAAQgKAAgKgCg");
	this.shape_435.setTransform(391.325,530.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("Ag0hLIArgQIAfBVIAGhNIAWAAIAWgBIgUCsIgnABIgfhVIgEAqIgFApIgsAFg");
	this.shape_436.setTransform(378.25,530.725);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgJBZQgTAAgNgIQgNgJgHgNQgHgNgCgQQgDgRADgQQADgQAGgPQAHgQALgMQAKgLAOgIQAPgIAQAAQATAAAMAJQANAIAHANQAHANACARQACAQgDARQgCAQgHAPQgGAQgKAMQgKAMgNAHQgOAIgPgBgAgLglQgIAJgFANQgDAKgBAJQgBAKACAJQACAHAFAGQAFAHAJAAIABAAIACABQAEAAAFgDQAFgDAEgEIAGgLIAFgNQADgKAAgIQAAgJgCgIQgCgIgEgFQgEgGgIgBIgBgBIgCAAQgJABgIAIg");
	this.shape_437.setTransform(363.7819,530.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AghBWQgLgFgIgKQgJgKgDgQQgEgPACgWQADgWAIgSQAIgTAKgMQALgMAMgHQANgGAMgCIAEAAIAEAAQANAAANAFQAMAFAKAKIgcAmQgFgIgHgDQgHgEgHAAIgGAAQgKAFgKAPQgJAOgDAUQgCAUAGAJQAGALAJABIACAAIABAAQAIAAAIgFQAJgFAHgIIARAhQgLANgOAIQgPAHgPAAQgNAAgLgFg");
	this.shape_438.setTransform(350.7019,530.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("Ag0hLIArgQIAfBVIAGhNIAWAAIAWgBIgUCsIgnABIgfhVIgEAqIgFApIgsAFg");
	this.shape_439.setTransform(329.2,530.725);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgJB/QgTgBgNgIQgNgIgHgNQgIgNgCgRQgCgQADgRQACgRAHgPQAHgOAKgMQALgMAOgIIAEgBIAEAHIAQgMIACgBQgMABgKAFIgGgKIgKgRIA/g2IAdAnIgSALIgTANIgRAMIAFAAQATAAAMAIQANAIAHANQAHAOACAPQACARgDARQgDAQgGAQQgGAPgKAMQgKAMgOAHQgNAIgPAAgAgLAAQgIAIgGANQgDAKAAAKQgBAKACAJQACAIAFAGQAFAGAJABIABAAIACAAQAEAAAFgDQAEgCAEgFIAHgLQADgGACgHQACgJABgJQAAgKgCgIQgCgIgEgEQgFgGgHgBIgCAAIgBAAQgJAAgIAIgAgPgtQAKgFAMgBIgCABIgQAMIgEgHgAgPgtIAAAAg");
	this.shape_440.setTransform(314.8206,527.175);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUAAIgXABg");
	this.shape_441.setTransform(302.925,530.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AghBWQgLgFgIgKQgJgKgDgQQgEgPACgWQADgWAIgSQAIgTAKgMQALgMAMgHQANgGAMgCIAEAAIAEAAQANAAANAFQAMAFAKAKIgcAmQgFgIgHgDQgHgEgHAAIgGAAQgKAFgKAPQgJAOgDAUQgCAUAGAJQAGALAJABIACAAIABAAQAIAAAIgFQAJgFAHgIIARAhQgLANgOAIQgPAHgPAAQgNAAgLgFg");
	this.shape_442.setTransform(293.5019,530.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_443.setTransform(278.525,531.05);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AghBWQgLgFgIgKQgJgKgDgQQgEgPACgWQADgWAIgSQAIgTAKgMQALgMAMgHQANgGAMgCIAEAAIAEAAQANAAANAFQAMAFAKAKIgcAmQgFgIgHgDQgHgEgHAAIgGAAQgKAFgKAPQgJAOgDAUQgCAUAGAJQAGALAJABIACAAIABAAQAIAAAIgFQAJgFAHgIIARAhQgLANgOAIQgPAHgPAAQgNAAgLgFg");
	this.shape_444.setTransform(266.9519,530.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUAAIgXABg");
	this.shape_445.setTransform(255.825,530.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgqBWIgWAAIANhWIAMhWIBoACIgEAUIgDAUIg8gCIgFAlIAvACIgHAoIgugCIgEAbIgEAdIgVgBg");
	this.shape_446.setTransform(246.725,530.925);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgOhWIAsAAIgQCsIgUAAIgXABg");
	this.shape_447.setTransform(236.675,530.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgjhVIALAAIARAAIAPgBIgQCDIBCgCIgDAVIgFAWIhrABg");
	this.shape_448.setTransform(226.2,530.875);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgyhQQAPgFAPgCQAPgCALAAQAPAAANAEQANAEAIAHQAJAIAEALQADAMgCAQQgDAbgPAPQgPAQgWAFQgMACgLAAIgFAAIgFAAIgGAyIgVABIgXABgAgKgwIgFAvIANAAQAGgCAGgCQAGgDAEgFQAEgFACgJQADgHgEgFQgDgGgHgDIgLgBIgGAAIgIABg");
	this.shape_449.setTransform(214.3864,530.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AhEBVIgWgBIAMhUIANhSIAZgBIAagBIAOBaIAnhYIAagBIAagBIgIBSIgJBSIgKABIgLABIgNAAIgLABIAJhOIgHATIgFANIgGAPIgIASIgSAAIgUgBIgKhCIgKBTIgWgBg");
	this.shape_450.setTransform(198.85,531.05);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgmhZIBnADIgDATIgDAUIg9gDIgDAZIAwgBIgCAUIgBATIgaADIgaABIgEAdIBBgEIgBAVIgBAVIg3AEIg4ACg");
	this.shape_451.setTransform(184.075,530.95);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgFBaQgLAAgKgEQgJgDgIgGQgIgGgFgIQgGgIgBgIIAQgOIARgOQADALAGAHQAGAGAGACQADACADAAIAGgCQAEgCADgEQAEgGACgIQADgIACgNQABgKAAgNIgBgbIg0AEIACgVIABgVIBagFIABATIABAWIAAAZIgCAYQgEAigMAWQgNAWgXAJIgIACIgHAAg");
	this.shape_452.setTransform(171.4125,531);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgmhZIBnADIgDATIgDAUIg9gDIgDAZIAwgBIgCAUIgBATIgaADIgaABIgEAdIBBgEIgBAVIgBAVIg3AEIg4ACg");
	this.shape_453.setTransform(159.725,530.95);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAFIgWAEgAgDAUIALgBIAMgBIgGglg");
	this.shape_454.setTransform(138.275,531.05);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgjhVIALAAIARAAIAPgBIgQCDIBCgCIgDAVIgFAWIhrABg");
	this.shape_455.setTransform(125.65,530.875);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#993399").s().p("Ag0ByQgTgLgLgVQgLgUgEgbQgCgQAAgRQgBgPADgRQABgLADgNQAEgNAFgLQAGgMAHgJQAEgFAHgGIAOgJQAHgEAHAAIAJABIAIADIAJgEQAEgCAEAAQARAAAQAIQAPAHALANQARASAKAUQAKAUACAZQABAKgBAKIgCAUQgEATgIASQgJASgNAOQgOAOgRAIQgSAJgTAAQgdAAgTgMgAgMg9IgBACIgEABIgCADQgFAHgCAIIgEAQQgCAPAAAOQABAPADAPQACALAFAGQAFAGAMAAQAGAAAGgEQAGgEAFgGQAEgGADgHQAEgKABgKQACgLgBgKIgBgFIgBgGIgBgFIgKgOIgKgOIgFgDIgFgBIgFgBIgFgCIgBAAg");
	this.shape_456.setTransform(191.3708,483.625);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#993399").s().p("AgaCBQgJgDgGgGIgKgLQgEgGgDgHIgFgRIgHgaIgGgaIgFgRIgHgjIgGgkIgDgTQgBgKACgKQADgNAJgJQAJgJAOAAQAJAAAIAFQAIAEAFAIIADAIIABAJIgBAHIgBAHIACAIIACANIACANIACAJIAIAoIAKApIAKgZQAFgNADgNIADgNIAEgVIAFgVIADgNIAAgCIgBgBQgCgLAFgKQAFgJAIgFQAIgGALAAQALAAAJAHQAIAHAEAKQACAHAAAHQABAHgCAHIgCANIgFAVIgFAVIgCANIgIAdQgGARgIASQgIASgKAQQgLAQgNAJQgNAKgPABQgIAAgJgDg");
	this.shape_457.setTransform(169.6396,483.725);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#993399").s().p("AgnCDQgHgBgHgEQgGgEgGgFQgFgGgDgGQgGgKgCgLQgCgLAAgLQAAgeADgdIAHg6IABgQIgBgRIAAgKIACgKQACgGAEgFIAJgIQAFgEAGAAQAGgBAGAAIAIADIAIAFQAFADADAGQADAFABAFIAAAHIAAAGIABAQIgBAQQgBAVgDAUIgFApQgCAVABAUIAfgFIAhgEIAGABIAGABQAHACAFAFQAFAGADAHQADAIAAAHQgBAGgCAFQgDAGgEAEQgEAEgFACIgKAEIgPACIgZADIgYAEIgPACIgDAAQgGAAgGgCg");
	this.shape_458.setTransform(150.1536,484.2717);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#993399").s().p("ABACGQgJgGgFgLIgCgJIgCgNIgCgOIgCgJQgLADgMABIgYAAIgRAAIgSAAIgDAHIgDALIgCAJQgBAOgJAKQgKAJgOABQgLgBgJgGQgIgGgEgKIgCgKIAAgLQABgGAEgNIAJgbIALgbIAHgSQAMgdAPgcQAOgcAUgaQAJgNANgIQAMgJAQAAQANAAAKAGQAKAGAGAKQAHAJAEAMIAFAPIAGAZIAGAcIAFAZIADAPIAGAlIAFAmIACAJIACAKQAAAEgBAFIgEAIQgDAHgIAFQgIAFgJAAQgMAAgIgGgAABgXQgHAQgHAPIAIAAIALAAIAJAAIAIgBIAIgBIgFgdIgHgeIgSAeg");
	this.shape_459.setTransform(127.9563,484.475);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#993399").s().p("Ag4B+QgUgPgIgYQgGgQgBgSQABgRABgRQACgTAFgUIALgnQAFgNAIgOQAIgOAKgMQAKgMANgHQANgIAOAAQARAAAOAJQANAIAIAOQAJANABAQQABAGgCAGIgBAMQgCAHgEAHQgFAGgGAEQgEACgEABIgJACIgJgCIgIgDQgHgEgEgGQgEgHgCgIQgHAOgGASQgFASgDASQgDATAAAQIABAMQAAAGAEAFIACACIAEAAIAIgDQAEgCADgDIAPgNIANgQQADgFAIgEQAGgDAHAAQAMAAAJAFQAHAGAFALIACAIIAAAJQgBAHgFAIQgFAIgIAIIgPAPIgNALQgHAFgJAFQgKAFgKADQgKADgJAAQgaAAgTgOg");
	this.shape_460.setTransform(105.9,484.725);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AAmBbIhIACIgSAoIg4gIIBwkBIAeACQARAAAPABIArD5IghAGIghAHgAgEAeIAQgBIARgCIgIg5g");
	this.shape_461.setTransform(1099.925,616.925);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgmhSIADAAIgIgOIgIgOIBLhAIAjAuIgiAXIgiAXIAmAAIgZEAIgeAAIggABg");
	this.shape_462.setTransform(1088.1,612.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AASBZIgfg1IgJAAIgHgBIgFAuIgFAtIggABIghACIAbj8QAbgIAYgEQAYgEAUAAQAPAAAMACQAeAHAQAVQAPAVgEAnQgDAagMARQgMAQgSAMIAwBMIgbAVIgcAVIgggzgAgFhOIgMABIgDAbIgDAbIALAAIAQAAQAJgBAHgDQAGgDAFgEQAFgFACgJQADgMgGgIQgGgHgMgDIgGgBIgFAAIgLABg");
	this.shape_463.setTransform(1070.925,616.875);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgOCEQgdAAgTgNQgSgMgLgTQgLgUgDgXQgDgZADgZQAEgYAKgWQALgYAPgRQAQgSAVgLQAVgLAZABQAbgBATAMQATANAKATQALAUACAYQADAZgEAYQgEAYgJAXQgKAXgOASQgPARgUALQgTALgXAAgAgRg3QgMANgIATQgEAPgCANQgBAPADAMQADANAIAJQAHAJANACIACAAIADAAQAHAAAHgEQAHgEAFgHQAGgHAEgJQAFgKACgKQAEgOABgMQAAgOgDgMQgDgLgGgJQgHgIgKgCIgDAAIgDAAQgNAAgMANg");
	this.shape_464.setTransform(1049.5201,616.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgeCEQgQgDgOgIQgOgJgKgPQgKgPgEgVQgFgVAEgcQAEgmAOgbQANgcASgRQASgTAVgHQAVgJAVAAQAUAAASAGQASAGAPANIgkA3QgIgIgKgFQgKgFgKABQgMAAgLAEQgKAGgJAKQgJAKgHAQQgHAPgCAUQgCAPACAMQACAMAGAIQAFAIAIAEQAHADAJABIACAAIAEgBIAEgBIAFgBIAJgnIgkgCIAOg2IBaADIgLA5IgLA6QgQAUgWAKQgVAKgXAAIgQgCg");
	this.shape_465.setTransform(1028.6484,616.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("Ag5iEICZAFIgDAbIgFAeIhbgDIgFAkIBHgCIgBAeIgCAdIgnADIgoACIgFArIBggGIgBAgIgBAgIhSAEIhTADg");
	this.shape_466.setTransform(1008.8,616.725);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("Ag0h/IAQAAIAZAAIAXAAIgZDCIBjgEIgGAgQgBARgFAPIifABg");
	this.shape_467.setTransform(990.6,616.65);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AA1BvIhlAFIgWAzIg/gKICMlDIAlACIAkADIA2E4IglAHIglAJgAgSAxIBBgFIgKh1g");
	this.shape_468.setTransform(968.4,614.125);

	this.respuesta12 = new lib.respuestac();
	this.respuesta12.name = "respuesta12";
	this.respuesta12.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta12, 0, 1, 2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("Ag4iEICYAFIgEAbIgEAeIhbgDIgFAkIBIgCIgCAeIgCAdIgoADIgmACIgHArIBhgGIgBAgIgBAgIhRAEIhUADg");
	this.shape_469.setTransform(1106.05,456.425);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("Ag0h/IAQAAIAYAAIAYAAIgZDBIBjgDIgFAgQgCARgFAPIifABg");
	this.shape_470.setTransform(1087.85,456.35);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgOCEQgdAAgTgMQgSgNgLgTQgLgUgDgXQgDgZADgYQAEgZAKgWQALgYAPgRQAQgSAVgLQAVgLAZABQAbgBATAMQATANAKATQALAUACAYQADAZgEAYQgEAYgJAXQgKAXgOASQgPASgUAKQgTALgXAAgAgRg3QgMANgIATQgEAPgCANQgBAPADAMQADANAIAJQAHAJANACIACAAIADAAQAHAAAHgEQAHgEAFgHQAGgHAEgJQAFgKACgKQAEgNABgNQAAgOgDgMQgDgMgGgIQgHgIgKgCIgDAAIgDAAQgNAAgMANg");
	this.shape_471.setTransform(1068.6701,456.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AhfCCIAXj7IARgCIAbgEIAcgCIAUgBQASAAAPACQAPAEAKAHQAKAIAFANQAEAMgCASQgDAVgIAMIgPAVQAMAKAHAPQAHAQgDATQgDAPgJAPQgKAPgRAMQgRAMgXAHQgXAHgeAAgAgHAWIgRAFIgEAsIAGAAIAIABIADgBIADAAQAGAAAFgDIAKgFIAHgHIAFgHQAEgJgFgJQgEgIgNgEIgOADgAAAhKIgPAEIgDAlQAOgCAIgDIAPgHQAGgEADgFQADgFABgFQACgLgUAAIgOABg");
	this.shape_472.setTransform(1046.7058,456.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AASBZIgfg1IgJAAIgHgBIgFAuIgFAtIggABIghACIAbj8QAbgIAYgEQAYgEAUAAQAPAAAMACQAeAHAQAVQAPAVgEAnQgDAagMARQgMAQgSAMIAwBMIgbAVIgcAVIgggzgAgFhOIgMABIgDAbIgDAbIALAAIAQAAQAJgBAHgDQAGgDAFgEQAFgFACgJQADgMgGgIQgGgHgMgDIgGgBIgFAAIgLABg");
	this.shape_473.setTransform(1026.225,456.575);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("Ag5hSIAnABIgKgTIgLgSIBMhAIAiAtIgoAcIgqAcIBrAEIgDAbIgFAeIhbgDIgFAjIBHgCIgBAeIgCAeIgnADIgoACIgFArIBggGIgBAgIgBAgIhSAEIhTADg");
	this.shape_474.setTransform(1007,451.425);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AhLh3QAXgGAWgEQAVgEARAAQAXABATAGQATAFAMALQANALAGASQAGARgEAYQgFAogWAXQgWAXghAIQgRADgQAAIgJAAIgHgBIgJBLIgfABQgSAAgPACgAgEhJIgMABIgHBGIAUgBQAJgBAIgEQAJgEAGgHQAHgIADgMQADgMgFgIQgFgIgKgFQgHgBgJAAIgKAAg");
	this.shape_475.setTransform(988.6395,456.075);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgWiAIBCAAIgYEAIgeABIghAAg");
	this.shape_476.setTransform(972.675,456.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AhtADIAQihIBHgFIgNCGIBRgGIAKh/IBHAAIgeE/IhFACIAKh8IhRAEIgKB0IhJAJIARihg");
	this.shape_477.setTransform(954.375,453.775);

	this.respuesta11 = new lib.botonb();
	this.respuesta11.name = "respuesta11";
	this.respuesta11.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta11, 0, 1, 2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AhOhvIBBgYIAtB9IAKhxIAfgBIAigBIgdD/Ig6ACIgvh/IgHBAIgGA8IhCAHg");
	this.shape_478.setTransform(1121.875,314.875);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgOCFQgdgBgTgNQgSgLgLgUQgLgTgDgZQgDgYADgYQAEgZAKgXQALgWAPgSQAQgSAVgKQAVgMAZAAQAbAAATANQATALAKAUQALAUACAYQADAYgEAZQgEAYgJAXQgKAXgOASQgPARgUAMQgTAKgXABgAgRg3QgMANgIAUQgEAOgCAOQgBAPADAMQADAMAIAJQAHAIANACIACAAIADABQAHAAAHgEQAHgEAFgHQAGgHAEgJQAFgJACgKQAEgOABgNQAAgOgDgLQgDgNgGgHQgHgJgKgBIgDgBIgDAAQgNAAgMANg");
	this.shape_479.setTransform(1100.4701,315.15);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgfCBIgggBIAcjBIg8ACIAMhCIBZACIBaADIgMA+Ig5gBIgOBgIgOBhQgNgBgRAAg");
	this.shape_480.setTransform(1082.325,315.075);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AAmBbIhIACIgSAoIg4gIIBwkBIAeACQARAAAPABIArD5IghAGIghAHgAgEAeIAQgBIARgCIgIg5g");
	this.shape_481.setTransform(1061.025,315.375);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AhfCCIAXj8IARgCIAbgCIAcgDIAUgCQASABAPADQAPADAKAHQAKAIAFAMQAEANgCATQgDATgIAMIgPAXQAMAIAHAPQAHARgDATQgDAQgJAPQgKAOgRAMQgRAMgXAHQgXAIgeAAgAgHAXIgRAEIgEAsIAGAAIAIABIADgBIADAAQAGAAAFgCIAKgGIAHgHIAFgHQAEgJgFgJQgEgJgNgEIgOAFgAAAhKIgPADIgDAmQAOgBAIgDIAPgHQAGgFADgEQADgGABgFQACgLgUAAIgOABg");
	this.shape_482.setTransform(1041.3058,315.05);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AASBZIgfg1IgJAAIgHgBIgFAuIgFAtIggABIghACIAbj8QAbgIAYgEQAYgEAUAAQAPAAAMACQAeAHAQAVQAPAVgEAnQgDAagMARQgMAQgSAMIAwBMIgbAVIgcAVIgggzgAgFhOIgMABIgDAbIgDAbIALAAIAQAAQAJgBAHgDQAGgDAFgEQAFgFACgJQADgMgGgIQgGgHgMgDIgGgBIgFAAIgLABg");
	this.shape_483.setTransform(1020.825,315.325);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("Ag5hSIAnABIgKgTIgLgSIBMhAIAiAtIgoAcIgqAcIBrAEIgDAbIgFAeIhbgDIgFAjIBHgCIgBAeIgCAeIgnADIgoACIgFArIBggGIgBAgIgBAgIhSAEIhTADg");
	this.shape_484.setTransform(1001.6,310.175);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AhLh3QAXgGAWgEQAVgEARAAQAXABATAGQATAFAMALQANALAGASQAGARgEAYQgFAogWAXQgWAXghAIQgRADgQAAIgJAAIgHgBIgJBLIgfABQgSAAgPACgAgEhJIgMABIgHBGIAUgBQAJgBAIgEQAJgEAGgHQAHgIADgMQADgMgFgIQgFgIgKgFQgHgBgJAAIgKAAg");
	this.shape_485.setTransform(983.2395,314.825);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgWiAIBCAAIgYD/IgeABIghABg");
	this.shape_486.setTransform(967.275,315.15);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AhtADIAQihIBHgFIgNCGIBRgGIAKh/IBHAAIgeE/IhFACIAKh8IhRAEIgKB0IhJAJIARihg");
	this.shape_487.setTransform(948.975,312.525);

	this.respuesta10 = new lib.respuestaa();
	this.respuesta10.name = "respuesta10";
	this.respuesta10.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta10, 0, 1, 2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AAMhCIBMAJIghB7IgdABIgcABgAhSg9IBNgDIgMBAIgMBCIgcABIgeABg");
	this.shape_488.setTransform(633.85,629.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AAjBWIhDADIgRAmIg2gJIBrj0IAdACIAeACIApDsIggAGIgfAHgAgEAdIAPgCIARgBIgIg2g");
	this.shape_489.setTransform(611.25,642.425);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgkB6QgOgFgLgJQgLgIgHgLQgIgLgCgLIAXgVIAYgUQAEAQAIAJQAIAKAJACQAEADAFAAQAEAAAFgDQAFgCAFgHQAEgHAEgLQAEgMADgSQACgPgBgSQAAgSgCgUIhIAFIACgdIACgfIB+gGIACAbIABAgIAAAiIgDAjQgGAvgQAfQgSAgghAMIgLACIgKABQgPAAgOgFg");
	this.shape_490.setTransform(593.0333,642.325);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("Ag2h9ICRAEQgCALgCAQIgEAbIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_491.setTransform(576.625,642.25);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AARBUIgegyIgIAAIgHgBIgFAsIgEArIgeABIgfABIAZjvQAZgHAXgEQAXgEATAAQAOAAAMACQAcAHAPAUQAPAUgEAkQgEAZgLAQQgLAQgRALIAtBIIgZAUIgbAUIgegxgAgFhKIgLABIgCAaIgEAaIALAAIAPgBQAIgBAGgDQAHgCAFgFQAEgEACgJQAEgLgGgHQgHgHgLgDIgGgBIgEAAIgLABg");
	this.shape_492.setTransform(557.95,642.375);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgOB+QgagBgSgLQgSgMgLgSQgKgTgDgXQgDgXAEgYQAEgWAJgVQAKgXAOgRQAPgQAUgLQAVgKAXAAQAaAAASALQASAMAKATQAKATACAWQADAYgEAXQgEAXgJAWQgJAVgOASQgOAQgSALQgTAKgWAAgAgQg0QgLAMgIATQgEAOgBANQgBAOACALQADAMAHAIQAHAJANACIACAAIACAAQAHgBAGgDQAHgEAFgHQAGgGAEgIIAHgTQADgNAAgMQABgOgDgLQgDgLgGgHQgGgJgKgBIgCAAIgDAAQgNAAgLAMg");
	this.shape_493.setTransform(537.6329,642.2);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AAjBWIhDADIgRAmIg2gJIBrj0IAcACIAfACIApDsIgfAGIggAHgAgEAdIAPgCIARgBIgIg2g");
	this.shape_494.setTransform(504.9,642.425);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AAjBWIhDADIgRAmIg2gJIBrj0IAcACIAfACIApDsIgfAGIggAHgAgEAdIAPgCIARgBIgIg2g");
	this.shape_495.setTransform(474.3,642.425);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgkB6QgOgFgLgJQgLgIgHgLQgIgLgCgLIAXgVIAYgUQAEAQAIAJQAIAKAJACQAEADAFAAQAEAAAFgDQAFgCAFgHQAEgHAEgLQAEgMADgSQACgPgBgSQAAgSgCgUIhIAFIACgdIACgfIB+gGIACAbIABAgIAAAiQgBASgCARQgGAvgQAfQgSAgghAMIgLACIgKABQgPAAgOgFg");
	this.shape_496.setTransform(456.0833,642.325);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("Ag2h9ICRAEQgCALgCAQIgEAbIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_497.setTransform(439.675,642.25);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AARBUIgdgyIgJAAIgHgBIgEAsIgFArIgeABIggABIAajvQAZgHAXgEQAXgEATAAQAPAAALACQAdAHAOAUQAPAUgFAkQgCAZgMAQQgLAQgRALIAtBIIgZAUIgbAUIgegxgAgEhKIgNABIgCAaIgCAaIAKAAIAPgBQAIgBAGgDQAHgCAFgFQAEgEACgJQADgLgFgHQgGgHgNgDIgFgBIgEAAIgKABg");
	this.shape_498.setTransform(421,642.375);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgOB+QgagBgSgLQgSgMgLgSQgKgTgDgXQgDgXAEgYQAEgWAJgVQAKgXAOgRQAPgQAUgLQAVgKAXAAQAaAAASALQASAMAKATQAKATACAWQADAYgEAXQgEAXgJAWQgJAVgOASQgOAQgSALQgTAKgWAAgAgQg0QgLAMgIATQgEAOgBANQgBAOACALQADAMAHAIQAHAJANACIACAAIACAAQAHgBAGgDQAHgEAFgHQAGgGAEgIIAHgTQADgNAAgMQABgOgDgLQgDgLgGgHQgGgJgKgBIgCAAIgDAAQgNAAgLAMg");
	this.shape_499.setTransform(400.6829,642.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("Ag2h9ICRAEQgCALgCAQIgEAbIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_500.setTransform(370.425,642.25);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AhgB5IAYjtIALgCIAVgDIAYgCIAWgBIAGAAIAFAAQATACAPAJQAPAHALAOQALAOAFAUQAFATgBAaIgEAbQgCAPgDANQgUAngiAWQgiAXgpAAgAgIhEIgLAAIgMCFIADABIADAAQANgBALgFQAKgGAHgJQAIgKAFgOQAFgNACgPQABgNgBgMQgBgLgEgIQgEgIgHgFQgHgFgMAAIgJABg");
	this.shape_501.setTransform(351.8923,642.25);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AAkBWIhEADIgRAmIg2gJIBrj0IAcACIAfACIApDsIgfAGIggAHgAgFAdIAQgCIARgBIgIg2g");
	this.shape_502.setTransform(320.5,642.425);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgpB+QgNgDgMgGQgLgFgJgIQgIgJgGgKIAUgWIAUgYQAIARAPAGQAQAGARAAQAPgBAJgHQAJgGgCgKQAAgFgFgEQgEgEgIgDIgPgGQgKgDgJgEQgKgEgIgGQgJgFgGgHQgGgIgDgLQgDgLADgPQADgTAKgOQAIgOAOgKQAMgJAQgEQAPgFAQAAIALAAIAKACQAQADANAIQANAHAKAMIgqAzQgEgJgHgFQgHgFgIgEQgIgCgIAAQgKAAgHAEQgGAEgBAIQgBAGAGAEIATAIIAbAKQAOAGAMAIQAMAJAFANQAGAOgEAWQgDAUgKAPQgJAPgOALQgNAKgSAFQgSAFgSAAQgOAAgNgCg");
	this.shape_503.setTransform(301.6,642.175);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgVh5IA/AAIgWDyIgeABIgfAAg");
	this.shape_504.setTransform(287.1,642.225);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AARBUIgegyIgIAAIgHgBIgEAsIgFArIgeABIgfABIAZjvQAZgHAXgEQAXgEATAAQAOAAAMACQAdAHAOAUQAPAUgFAkQgCAZgLAQQgMAQgRALIAuBIIgaAUIgbAUIgegxgAgFhKIgLABIgDAaIgDAaIAKAAIAQgBQAIgBAHgDQAGgCAFgFQAEgEACgJQADgLgGgHQgFgHgNgDIgEgBIgGAAIgKABg");
	this.shape_505.setTransform(271,642.375);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AhKhqIA+gWIArB2IAJhsIAeAAIAfgBIgbDzIg3ABIgth4IgGA8IgFA5Ig/AHg");
	this.shape_506.setTransform(251.775,641.95);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgOB+QgagBgSgLQgSgMgLgSQgKgTgDgXQgDgXAEgYQAEgWAJgVQAKgXAOgRQAPgQAUgLQAVgKAXAAQAaAAASALQASAMAKATQAKATACAWQADAYgEAXQgEAXgJAWQgJAVgOASQgOAQgSALQgTAKgWAAgAgQg0QgLAMgIATQgEAOgBANQgBAOACALQADAMAHAIQAHAJANACIACAAIACAAQAHgBAGgDQAHgEAFgHQAGgGAEgIIAHgTQADgNAAgMQABgOgDgLQgDgLgGgHQgGgJgKgBIgCAAIgDAAQgNAAgLAMg");
	this.shape_507.setTransform(231.4829,642.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgzCcQgPgDgOgGQgNgGgLgKQgLgJgGgMIAVgYIAVgZQAHAKAIAGQAIAGAJAEQAKAEALABIAVABQAKAAAJgDQAJgDAHgFQAGgFADgHQADgGgBgIQAAgKgKgHQgLgHgPgGIgfgMQgQgHgOgJQgNgLgHgQQgIgQAEgYQAEgXALgRQALgQAPgLQAQgLATgGQASgFATAAQAZAAAXAIQAXAIASASIgtA5QgEgHgGgFQgHgGgHgDQgIgEgIgCQgJgCgIAAQgNAAgJAHQgLAGgCANQgCALALAHQALAHARAHIAAAAIAWAIIAWAJQALAGAKAHQAJAHAGAJQAHAJACANQADAOgDARQgFAYgLASQgMASgQAMQgRAMgUAGQgUAHgTABIgFAAIgEAAQgRAAgQgDg");
	this.shape_508.setTransform(208.175,639.525);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AALhCIBNAJIghB7IgdABIgcABgAhSg9IBMgDIgLBAIgLBCIgeABIgdABg");
	this.shape_509.setTransform(188.95,629.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AggB3QgHgDgFgGQgGgFgDgIQgDgHgCgJQAAgLAEgKQAEgKAIgIQAIgIAKgFQAKgFAKgCIADAAIADAAQARAAALALQALAMAAASQAAALgEALQgFAKgIAJQgIAIgLAFQgKAGgLAAQgIAAgIgEgAgOgYQgHgDgGgFQgFgGgDgIQgEgHgBgJQgBgLAFgKQAEgKAIgIQAHgIALgGQAJgFAKgCIADAAIADAAQARAAALAMQALAMABASQAAALgFALQgFAKgIAJQgIAIgKAFQgLAGgLAAQgHAAgIgEg");
	this.shape_510.setTransform(643.0725,590.975);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("Ag2h9ICRAEQgCAMgCAOIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_511.setTransform(628.525,590.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgpB+QgNgDgMgGQgLgFgJgIQgIgJgFgKIATgWIAUgYQAIARAQAGQAPAGARAAQAPgBAJgHQAJgGgCgKQAAgFgFgEQgEgEgIgDIgQgGQgJgDgJgEQgJgEgJgGQgJgFgGgHQgGgIgDgLQgCgLACgPQADgTAKgOQAIgOANgKQAOgJAPgEQAPgFAQAAIAKAAIALACQAQADANAIQANAHAJAMIgpAzQgEgJgHgFQgHgFgIgEQgIgCgIAAQgKAAgHAEQgGAEgBAIQgCAGAIAEIASAIIAbAKQAOAGAMAIQALAJAHANQAGAOgFAWQgDAUgKAPQgJAPgOALQgOAKgRAFQgSAFgSAAQgNAAgOgCg");
	this.shape_512.setTransform(610.05,590.625);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AAkBWIhEADIgRAmIg2gJIBqj0IAdACIAfACIApDsIgfAGIggAHgAgFAdIAQgCIARgBIgIg2g");
	this.shape_513.setTransform(590.15,590.875);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AARBUIgdgyIgJAAIgHgBIgEAsIgFArIgeABIggABIAajvQAZgHAXgEQAXgEATAAQAOAAAMACQAcAHAPAUQAPAUgFAkQgDAZgKAQQgMAQgRALIAuBIIgaAUIgbAUIgegxgAgEhKIgMABIgDAaIgDAaIAKAAIAQgBQAIgBAHgDQAGgCAFgFQAEgEACgJQAEgLgHgHQgFgHgNgDIgEgBIgGAAIgJABg");
	this.shape_514.setTransform(571.05,590.825);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("Ag8B5IgeAAIASh5IARh6ICSAEIgFAbIgFAdIhUgDIgHAzIBDAEIgLA4IhBgDIgFAnIgGAoIgegBg");
	this.shape_515.setTransform(554.375,590.7);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("Ag2h9ICRAEQgCAMgCAOIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_516.setTransform(526.625,590.7);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgeB6IgfAAIAci3Ig5ABIALg/IBUACIBWAEIgLA6Ig2gBIgOBbIgNBcIgdgBg");
	this.shape_517.setTransform(511.95,590.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AhKhpIA+gXIArB2IAJhsIAeAAIAfgBIgbDzIg3ABIgth4IgGA8IgFA5Ig/AHg");
	this.shape_518.setTransform(493.175,590.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("Ag2h9ICRAEQgCAMgCAOIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_519.setTransform(474.975,590.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgVh5IA/AAIgWDyIgeABIgfAAg");
	this.shape_520.setTransform(460.9,590.675);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("Ag9ByQgRgIgJgPQgKgOgCgTQgDgVAEgXIAViFIA8gBIgKBEIgKBEQgDAVAFAJQAGAKAOACIACAAIACAAQALAAAIgKQAIgKACgVQAHggAEglIAKhFIA+ADIgKBFIgLBEQgGAygaAbQgaAbgrAAQgYgBgQgIg");
	this.shape_521.setTransform(445.8269,591);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgdB+QgPgDgOgIQgNgJgJgOQgKgOgEgUQgEgUADgaQAFglAMgaQANgaARgRQARgRAUgIQAUgHAUAAQASAAASAFQARAGAPAMIgjA1QgHgIgKgFQgJgEgKAAQgLAAgKAFQgKAFgJAJQgJAKgGAPQgHAOgCATQgCAPADALQACAMAFAHQAFAHAHAEQAHAEAIAAIADAAIADgBIAEgBIAFgBIAIgkIghgDIANg0IBVAEIgKA2IgLA3QgPATgVAKQgUAJgVAAIgQgBg");
	this.shape_522.setTransform(426.4107,590.675);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgVh5IA/AAIgWDyIgeABIgfAAg");
	this.shape_523.setTransform(410.5,590.675);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgpB+QgNgDgLgGQgMgFgJgIQgIgJgFgKIATgWIAUgYQAIARAQAGQAPAGARAAQAPgBAJgHQAJgGgCgKQAAgFgFgEQgFgEgHgDIgQgGQgJgDgJgEQgJgEgKgGQgIgFgGgHQgGgIgDgLQgCgLACgPQADgTAKgOQAJgOAMgKQANgJAQgEQAPgFAQAAIAKAAIALACQAPADAOAIQANAHAJAMIgpAzQgEgJgHgFQgHgFgIgEQgIgCgIAAQgKAAgHAEQgGAEgCAIQgBAGAIAEIASAIIAbAKQAOAGAMAIQALAJAHANQAGAOgFAWQgDAUgKAPQgJAPgOALQgOAKgRAFQgSAFgSAAQgOAAgNgCg");
	this.shape_524.setTransform(394.6,590.625);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AAkBWIhEADIgRAmIg2gJIBqj0IAeACIAeACIApDsIgfAGIggAHgAgFAdIAQgCIARgBIgIg2g");
	this.shape_525.setTransform(364,590.875);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("Agyh5IAQAAIAXAAIAWAAIgXC4IBegDIgGAeQgCARgDAOIiYABg");
	this.shape_526.setTransform(346.25,590.625);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("Ag2h9ICRAEQgCAMgCAOIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_527.setTransform(319.425,590.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgvB5QgQgHgLgOQgMgOgFgWQgFgWAEgeQAEghAKgZQALgZAPgSQAPgRASgJQARgKASgBIAFgBIAFAAQAUAAARAHQASAHAOAOIgpA1QgGgKgKgFQgKgGgJAAIgJABQgPAHgNAUQgOAVgDAcQgDAcAIAOQAIAOAOABIACAAIACABQALAAAMgHQALgHAKgLIAYAvQgOARgVALQgVAKgVAAQgSAAgQgHg");
	this.shape_528.setTransform(303.5158,590.625);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("Ag2h9ICRAEQgCAMgCAOIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_529.setTransform(284.925,590.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AhKhpIA+gXIArB2IAJhsIAeAAIAfgBIgbDzIg3ABIgth4IgGA8IgFA5Ig/AHg");
	this.shape_530.setTransform(266.925,590.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("Ag2h9ICRAEQgCAMgCAOIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_531.setTransform(248.725,590.7);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgeB6IgfAAIAbi3Ig4ABIALg/IBVACIBVAEIgLA6Ig2gBIgOBbIgNBcIgdgBg");
	this.shape_532.setTransform(234.05,590.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AARBUIgegyIgIAAIgHgBIgFAsIgEArIgeABIgfABIAZjvQAZgHAXgEQAXgEATAAQAOAAAMACQAcAHAPAUQAPAUgEAkQgEAZgLAQQgLAQgRALIAuBIIgaAUIgbAUIgegxgAgFhKIgMABIgBAaIgEAaIALAAIAPgBQAIgBAGgDQAHgCAFgFQAEgEACgJQAEgLgGgHQgHgHgLgDIgGgBIgEAAIgLABg");
	this.shape_533.setTransform(214.6,590.825);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("Ag2h9ICRAEQgCAMgCAOIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPAEg");
	this.shape_534.setTransform(196.375,590.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AhHhxQAWgGAUgEQAVgDAQAAQAWABASAFQARAFAMALQAMALAGAQQAFAQgDAXQgFAmgVAVQgVAXgfAHQgRADgPAAIgIAAIgHAAIgIBHIgeABIgfABgAgPhEIgHBDIATgBQAIgCAIgDQAIgFAHgGQAGgIADgLQADgLgFgIQgFgIgJgEQgGgBgKgBIgJAAIgLACg");
	this.shape_535.setTransform(178.8779,590.35);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AAjBWIhDADIgRAmIg2gJIBqj0IAeACIAeACIApDsIggAGIgfAHgAgFAdIAQgCIARgBIgIg2g");
	this.shape_536.setTransform(675.5,539.325);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgVh5IA/AAIgXDyIgcABIggAAg");
	this.shape_537.setTransform(661,539.125);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AARBUIgdgyIgJAAIgHgBIgFAsIgEArIgeABIgfABIAZjvQAZgHAXgEQAXgEATAAQAOAAAMACQAcAHAPAUQAPAUgEAkQgDAZgMAQQgLAQgRALIAtBIIgZAUIgbAUIgegxgAgFhKIgMABIgBAaIgDAaIAKAAIAPgBQAIgBAGgDQAHgCAFgFQAEgEACgJQADgLgFgHQgHgHgLgDIgGgBIgEAAIgLABg");
	this.shape_538.setTransform(644.9,539.275);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AAjBWIhDADIgRAmIg2gJIBqj0IAeACIAeACIApDsIggAGIgfAHgAgFAdIAQgCIARgBIgIg2g");
	this.shape_539.setTransform(624.2,539.325);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AARBUIgegyIgIAAIgHgBIgFAsIgEArIgeABIgfABIAZjvQAZgHAXgEQAXgEATAAQAOAAAMACQAcAHAPAUQAPAUgEAkQgEAZgLAQQgLAQgRALIAuBIIgaAUIgbAUIgegxgAgFhKIgLABIgCAaIgEAaIAKAAIAQgBQAIgBAHgDQAGgCAFgFQAEgEACgJQAEgLgGgHQgHgHgLgDIgGgBIgFAAIgKABg");
	this.shape_540.setTransform(605.1,539.275);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("Ag2h9ICRAEQgCALgCAPIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPADg");
	this.shape_541.setTransform(586.875,539.15);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgeB7IgfgBIAbi4Ig4ABIALg+IBVACIBVAEIgMA6Ig2gCIgNBcIgNBdIgdgBg");
	this.shape_542.setTransform(572.2,539.05);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgVh5IA/AAIgXDyIgdABIgfAAg");
	this.shape_543.setTransform(557.35,539.125);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("Agxh5IAOAAIAYAAIAXAAIgYC4IBegDIgFAeQgCARgEAOIiYABg");
	this.shape_544.setTransform(542.6,539.075);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AAkBWIhEADIgRAmIg2gJIBqj0IAdACIAfACIApDsIgfAGIggAHgAgFAdIAQgCIARgBIgIg2g");
	this.shape_545.setTransform(513.3,539.325);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AARBUIgegyIgIAAIgHgBIgEAsIgFArIgeABIgfABIAZjvQAZgHAXgEQAXgEATAAQAOAAAMACQAdAHAOAUQAPAUgFAkQgCAZgLAQQgMAQgRALIAuBIIgaAUIgbAUIgegxgAgFhKIgLABIgDAaIgDAaIAKAAIAQgBQAIgBAHgDQAGgCAFgFQAEgEACgJQADgLgGgHQgFgHgNgDIgEgBIgGAAIgKABg");
	this.shape_546.setTransform(494.2,539.275);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("Ag9ByQgRgIgJgOQgKgPgCgTQgDgVAEgXIAViFIA8gBIgKBEIgKBEQgDAUAFALQAGAJAOACIACAAIACAAQALAAAIgKQAIgKACgVQAHghAEgjIAKhGIA+ACIgKBGIgLBFQgGAwgaAbQgaAbgrABQgYgBgQgIg");
	this.shape_547.setTransform(475.3269,539.45);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgdB+QgPgDgOgIQgNgJgJgOQgKgOgEgUQgEgUADgaQAFglAMgaQANgaARgRQARgRAUgIQAUgHAUAAQASAAASAFQARAGAPAMIgjA1QgHgIgKgFQgJgEgKAAQgLAAgKAFQgKAFgJAJQgJAKgGAPQgHAOgCATQgCAPADALQACAMAFAHQAFAHAHAEQAHAEAIAAIADAAIADgBIAEgBIAFgBIAIgkIghgDIANg0IBVAEIgKA2IgLA3QgPATgVAKQgUAJgVAAIgQgBg");
	this.shape_548.setTransform(455.9107,539.125);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgVh5IA/AAIgWDyIgeABIgfAAg");
	this.shape_549.setTransform(440,539.125);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("Ag8B6IgegBIASh5IARh6ICSAEIgFAbQgCAQgDANIhUgDIgHAzIBDAEIgLA3IhBgCIgFAnIgGApIgegBg");
	this.shape_550.setTransform(427.125,539.15);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("Ag2hOIAlABIgKgRIgLgSIBJg9IAgArIgnAbIgnAbIBmADQgCALgCAPIgEAbIhWgCIgFAiIBEgDIgCAdIgBAdIgmACIglACIgGAqIBdgHIgCAeIgBAfIhNADIhPAEg");
	this.shape_551.setTransform(399.375,534.4);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("Ag9ByQgRgIgJgOQgKgPgCgTQgDgVAEgXIAViFIA8gBIgKBEIgKBEQgDAUAFALQAGAJAOACIACAAIACAAQALAAAIgKQAIgKACgVQAHghAEgjIAKhGIA+ACIgKBGIgLBFQgGAwgaAbQgaAbgrABQgYgBgQgIg");
	this.shape_552.setTransform(381.7269,539.45);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AAABuIgGAAIgJABQgWAAgQgIQgQgIgLgOQgLgNgFgSQgGgRgBgTQgBgaAIgcQAIgbAQgXQAPgWAXgOQAWgOAcAAQAVAAAPAHQAQAHALAMQALANAGAQQAGAQABATQABARgDASQgDAQgGARQgFAQgKAPQgJAOgLALIAXAXIgYAWIgYAWgAgRhDQgLAMgIASQgEAOgBAOQgBANACAMQADAMAHAIQAHAIANACIACAAIACAAQAGAAAHgDQAGgEAGgHQAFgGAFgJIAHgRQADgNAAgNQABgOgDgLQgDgLgGgIQgGgIgKgBIgCgBIgDAAQgNAAgLANg");
	this.shape_553.setTransform(360.5569,540.625);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AAjBWIhDADIgRAmIg2gJIBrj0IAdACIAeACIApDsIggAGIgfAHgAgEAdIAPgCIARgBIgIg2g");
	this.shape_554.setTransform(327.75,539.325);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AAjBWIhDADIgRAmIg2gJIBrj0IAdACIAeACIApDsIggAGIgfAHgAgEAdIAPgCIARgBIgIg2g");
	this.shape_555.setTransform(297.15,539.325);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AhKhpIA+gXIArB3IAJhsIAeAAIAfgCIgbDzIg3ABIgth4IgGA8IgFA5Ig/AHg");
	this.shape_556.setTransform(278.725,538.85);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AgOB+QgagBgSgLQgSgLgLgTQgKgTgDgXQgDgXAEgXQAEgXAJgWQAKgWAOgQQAPgRAUgKQAVgLAXAAQAaAAASAMQASALAKASQAKAUACAXQADAWgEAXQgEAYgJAVQgJAXgOAQQgOARgSAKQgTALgWAAgAgQg0QgLAMgIASQgEAOgBANQgBAPACALQADAMAHAIQAHAIANACIACAAIACAAQAHABAGgEQAHgEAFgGQAGgHAEgJIAHgSQADgNAAgNQABgNgDgLQgDgLgGgIQgGgHgKgCIgCgBIgDAAQgNAAgLANg");
	this.shape_557.setTransform(258.4329,539.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgVh5IA/AAIgXDyIgdABIgfAAg");
	this.shape_558.setTransform(241.8,539.125);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgvB5QgQgHgLgOQgMgOgFgWQgFgWAEgeQAEghAKgZQALgZAPgSQAPgRASgJQARgKASgBIAFgBIAFAAQAUAAARAHQASAHAOAOIgpA1QgGgKgKgFQgKgGgJAAIgJABQgPAHgNAUQgOAVgDAcQgDAcAIAOQAIAOAOABIACAAIACABQALAAAMgHQALgHAKgLIAYAvQgOARgVALQgVAKgVAAQgSAAgQgHg");
	this.shape_559.setTransform(228.4658,539.075);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgvB5QgQgHgLgOQgMgOgFgWQgFgWAEgeQAEghAKgZQALgZAPgSQAPgRASgJQARgKASgBIAFgBIAFAAQAUAAARAHQASAHAOAOIgpA1QgGgKgKgFQgKgGgJAAIgJABQgPAHgNAUQgOAVgDAcQgDAcAIAOQAIAOAOABIACAAIACABQALAAAMgHQALgHAKgLIAYAvQgOARgVALQgVAKgVAAQgSAAgQgHg");
	this.shape_560.setTransform(210.9658,539.075);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("Ag2h9ICRAEQgCALgCAPIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPADg");
	this.shape_561.setTransform(192.375,539.15);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("Agxh5IAPAAIAXAAIAXAAIgYC4IBegDIgGAeQgCARgDAOIiYABg");
	this.shape_562.setTransform(175.05,539.075);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("Ag2h9ICRAEQgCALgCAPIgEAcIhWgDIgFAjIBEgCIgCAdIgBAbIgmACIglADIgGApIBdgGIgCAeIgBAeIhNAEIhPADg");
	this.shape_563.setTransform(158.925,539.15);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgpB+QgNgDgLgGQgMgFgJgIQgIgJgFgKIATgWIAUgYQAIARAQAGQAPAGARAAQAPgBAJgHQAJgGgCgKQAAgFgEgEQgGgEgHgDIgQgGQgJgDgJgEQgJgEgKgGQgIgFgGgHQgGgIgDgLQgCgLACgPQADgTAKgOQAIgOANgKQANgJAQgEQAPgFAQAAIAKAAIALACQAPADAOAIQANAHAJAMIgpAzQgEgJgHgFQgHgFgIgEQgIgCgIAAQgKAAgHAEQgGAEgCAIQgBAGAIAEIASAIIAbAKQAPAGALAIQALAJAHANQAGAOgFAWQgDAUgJAPQgKAPgOALQgOAKgRAFQgSAFgSAAQgOAAgNgCg");
	this.shape_564.setTransform(140.45,539.075);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgLBqQgXgBgPgJQgPgKgJgQQgIgPgDgUQgCgTADgTQADgUAIgSQAIgSANgOQAMgOARgKQARgIATAAQAWAAAPAJQAPAKAJAQQAIAPACAUQADAUgEATQgDATgHATQgIASgMAOQgLAPgQAIQgQAJgSAAgAgNgsQgJAKgHAQQgEALgBAMQgBAMADAJQACAKAGAHQAGAHALACIABAAIACAAQAGAAAFgDQAGgDAEgGQAFgGADgHIAGgQQADgKAAgKQABgMgDgJQgCgKgFgGQgFgGgJgCIgCAAIgCAAQgLAAgJAKg");
	this.shape_565.setTransform(1129.5953,637.8);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgZBnIgZAAIAWibIgwACIAJg1IBIABIBIADIgKAyIgtgBIgMBMIgLBOIgYgBg");
	this.shape_566.setTransform(1115.1,637.75);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("Ag+hZIA0gTIAkBkIAHhbIAaAAIAagBIgXDMIguABIgmhlIgFAzIgFAwIg0AGg");
	this.shape_567.setTransform(1099.325,637.575);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgthqIB6AFIgDAVIgEAYIhIgCIgEAdIA5gBIgCAXIgBAYIggABIgfACIgEAjIBNgFIgBAZIgBAZIhBAEIhDADg");
	this.shape_568.setTransform(1083.925,637.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgRhmIA0AAIgTDLIgYACIgaAAg");
	this.shape_569.setTransform(1072.125,637.8);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AhQBkIgbAAIAOhjIAPhiIAegCIAggBIARBrIAuhoIAegCIAfgBIgJBhIgLBiIgMABIgOABIgOABIgMABIAKheIgJAXIgHARIgGAQIgKAWIgVAAIgXgBIgMhOIgNBhIgZgBg");
	this.shape_570.setTransform(1056.7,637.95);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgRhmIA0AAIgTDLIgYACIgaAAg");
	this.shape_571.setTransform(1041.725,637.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgnBmQgNgFgKgMQgKgNgEgSQgFgSAEgZQADgcAJgWQAJgUANgQQAMgOAPgIQAPgHAOgCIAFAAIAEgBQARAAAOAGQAPAGAMAMIgiAtQgGgIgIgFQgIgFgIAAIgHABQgNAFgLASQgLARgDAYQgDAXAHALQAHAMALACIACAAIACAAQAJAAAKgGQAKgFAIgKIAUAnQgMAPgRAKQgSAIgSAAQgPAAgNgGg");
	this.shape_572.setTransform(1030.5234,637.75);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgthqIB6AFIgDAVIgEAYIhIgCIgEAdIA5gBIgCAXIgBAYIggABIgfACIgEAjIBNgFIgBAZIgBAZIhBAEIhDADg");
	this.shape_573.setTransform(1014.825,637.8);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgZBnIgZAAIAWibIgvACIAJg1IBHABIBIADIgKAyIgtgBIgMBMIgLBOIgYgBg");
	this.shape_574.setTransform(1002.5,637.75);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("Ag+hZIA0gTIAkBkIAHhbIAaAAIAagBIgXDMIguABIgmhlIgFAzIgFAwIg0AGg");
	this.shape_575.setTransform(986.725,637.575);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgLBqQgXgBgPgJQgPgKgJgQQgIgPgDgUQgCgTADgTQADgUAIgSQAIgSANgOQAMgOARgKQARgIATAAQAWAAAPAJQAPAKAJAQQAIAPACAUQADAUgEATQgDATgHATQgIASgMAOQgLAPgQAIQgQAJgSAAgAgNgsQgJAKgHAQQgEALgBAMQgBAMADAJQACAKAGAHQAGAHALACIABAAIACAAQAGAAAFgDQAGgDAEgGQAFgGADgHIAGgQQADgKAAgKQABgMgDgJQgCgKgFgGQgFgGgJgCIgCAAIgCAAQgLAAgJAKg");
	this.shape_576.setTransform(969.5953,637.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgnBmQgNgFgKgMQgKgNgEgSQgFgSAEgZQADgcAJgWQAJgUANgQQAMgOAPgIQAPgHAOgCIAFAAIAEgBQARAAAOAGQAPAGAMAMIgiAtQgGgIgIgFQgIgFgIAAIgHABQgNAFgLASQgLARgDAYQgDAXAHALQAHAMALACIACAAIACAAQAJAAAKgGQAKgFAIgKIAUAnQgMAPgRAKQgSAIgSAAQgPAAgNgGg");
	this.shape_577.setTransform(954.0734,637.75);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AAeBIIg5ADIgOAgIgtgHIBZjOQALACANAAIAaABIAiDHIgaAFIgbAGgAgDAYIAMgBIAPgBIgHgug");
	this.shape_578.setTransform(936.35,637.975);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgLBqQgXAAgPgLQgPgJgJgQQgIgPgDgTQgCgUADgUQADgTAIgSQAIgTANgOQAMgOARgIQARgJATAAQAWAAAPAKQAPAJAJAQQAIAQACATQADAUgEATQgDAUgHARQgIATgMAOQgLAOgQAJQgQAJgSAAgAgNgsQgJALgHAPQgEALgBALQgBAMADAKQACAKAGAHQAGAHALABIABAAIACAAQAGAAAFgCQAGgDAEgGQAFgFADgIIAGgPQADgMAAgKQABgLgDgJQgCgKgFgGQgFgHgJgBIgCAAIgCAAQgLAAgJAKg");
	this.shape_579.setTransform(1078.0953,594.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgLBqQgXAAgPgLQgPgJgJgQQgIgPgDgTQgCgUADgUQADgTAIgSQAIgTANgOQAMgOARgIQARgJATAAQAWAAAPAKQAPAJAJAQQAIAQACATQADAUgEATQgDAUgHARQgIATgMAOQgLAOgQAJQgQAJgSAAgAgNgsQgJALgHAPQgEALgBALQgBAMADAKQACAKAGAHQAGAHALABIABAAIACAAQAGAAAFgCQAGgDAEgGQAFgFADgIIAGgPQADgMAAgKQABgLgDgJQgCgKgFgGQgFgHgJgBIgCAAIgCAAQgLAAgJAKg");
	this.shape_580.setTransform(1050.8453,594.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("Ag9hlIA0gDIgIBUIApgGIAHhNIAzAAIgTDMIgxABIAGhNIgqACIgHBIIg0AGg");
	this.shape_581.setTransform(1033.625,594.25);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgnBmQgNgGgKgMQgKgLgEgTQgFgTAEgZQADgbAJgVQAJgWANgOQAMgPAPgIQAPgIAOgBIAFgBIAEAAQARAAAOAGQAPAGAMAMIgiAtQgGgIgIgFQgIgFgIAAIgHABQgNAGgLARQgLARgDAYQgDAXAHAMQAHAMALABIACAAIACAAQAJAAAKgFQAKgGAIgKIAUAnQgMAQgRAIQgSAJgSAAQgPAAgNgGg");
	this.shape_582.setTransform(1019.2734,594.05);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgthpIB6ADIgDAXIgEAXIhIgDIgEAeIA5gCIgCAYIgBAXIggADIgfACIgEAiIBNgFIgBAZIgBAaIhBADIhDACg");
	this.shape_583.setTransform(1003.575,594.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("Ag9hlIA0gDIgIBUIApgGIAHhNIAzAAIgTDMIgxABIAGhNIgqACIgHBIIg0AGg");
	this.shape_584.setTransform(988.525,594.25);

	this.respuesta15 = new lib.respuestac();
	this.respuesta15.name = "respuesta15";
	this.respuesta15.setTransform(1032.65,613.05,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta15, 0, 1, 2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AhYBwIAVjbIAKgCIATgCIAXgDIAUgBIAFAAIAFABQASACAOAIQAOAHAJANQAKAMAFASQAFATgBAXIgDAZQgCANgEANQgSAkgfAUQgfAVgnAAgAgIg/IgKABIgLB6IADAAIACAAQANAAAKgFQAIgFAIgJQAHgJAEgMQAFgNACgOQABgMgBgKQgBgKgEgIQgDgIgHgEQgHgFgLAAIgIABg");
	this.shape_585.setTransform(1074.9091,467.525);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgyhzICGAEIgDAYIgFAZIhPgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJADg");
	this.shape_586.setTransform(1039.7,467.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgTBxQgXgBgPgHQgPgIgJgNQgIgNgDgSQgCgSAEgWIATh6IA3gCIgJA/IgJA/QgDATAEAJQAGAJANABIACABIABAAQALAAAHgKQAIgJACgTIAKg/IAJhBIA5ADIgKBAIgJA/QgGAtgYAZQgYAZgmAAIgBAAg");
	this.shape_587.setTransform(1023.4636,467.7755);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgyhzICGAEIgDAYIgFAZIhPgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJADg");
	this.shape_588.setTransform(989.65,467.5);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_589.setTransform(972.425,467.625);

	this.respuesta14 = new lib.botonb();
	this.respuesta14.name = "respuesta14";
	this.respuesta14.setTransform(1032.65,464.3,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta14, 0, 1, 2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgrBwQgPgHgKgNQgLgNgEgUQgFgUADgcQAEgeAKgYQAKgWANgRQAOgQAQgIQARgJAQgCIAFAAIAEAAQASAAAQAHQAQAGANANIglAxQgGgJgJgFQgJgFgJgBIgHABQgOAHgNASQgMATgDAaQgDAZAHANQAIANAMACIACAAIACAAQAKAAALgGQALgGAJgLIAWArQgNARgTAJQgTAKgUAAQgQAAgPgGg");
	this.shape_590.setTransform(1199.7779,321.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgUhwIA7AAIgVDfIgbABIgdABg");
	this.shape_591.setTransform(1185.4,321.925);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("Ag3BwIgcgBIARhvIAQhwICGADIgFAZIgEAbIhNgDIgHAwIA9ADIgJAzIg8gDIgFAkIgGAmIgbgBg");
	this.shape_592.setTransform(1173.5,321.95);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgNCkQgYAAgRgLQgQgKgKgRQgJgRgDgWQgDgWAEgWQADgVAJgUQAJgSANgQQAOgPASgLIAEgBIAGAJIAWgQIABAAQgPABgOAGIgGgMIgNgXIBShFIAlAxIgXAQIgYAQIgYAQIAHgBQAZABAQAJQAQALAKASQAJARACAUQADAWgEAWQgDAVgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPAAQgKALgHARQgEAMgBANQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgNgCgKQgCgKgGgGQgGgIgJAAIgCgBIgDAAQgMAAgKALgAgVg7QAOgGAPgBIgBAAIgWAQIgGgJgAgVg7IAAAAg");
	this.shape_593.setTransform(1155.9829,317.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgmBzQgLgCgLgFQgLgFgHgIQgJgHgFgKIASgUIASgWQAJAQAOAFQAOAFAPAAQAOgBAJgGQAHgGgBgJQAAgFgFgDIgKgGIgPgGIgRgHQgJgDgIgGQgIgEgFgHQgGgHgCgLQgDgKADgNQADgSAHgNQAJgNAMgIQAMgJAOgEQAOgEAPAAIAKAAIAKABQAOAEAMAHQALAGAJALIglAwQgFgJgGgFQgGgFgIgDQgHgCgIAAQgIAAgHAEQgGAEgBAHQgBAGAHADQAGAEAKAEIAZAJQAOAFALAIQAKAIAGAMQAFAMgEAVQgDASgIAOQgJAOgNAKQgNAJgQAFQgQAFgRAAQgMAAgNgDg");
	this.shape_594.setTransform(1136.45,321.925);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AguhvIAPAAIAVAAIAUgBIgVCqIBXgCIgGAbIgEAdIiNABg");
	this.shape_595.setTransform(1100.15,321.875);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgThwIA5AAIgUDfIgbABIgcABg");
	this.shape_596.setTransform(1088.05,321.925);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("Ag3BwIgcgBIAQhvIAQhwICHADIgFAZIgEAbIhOgDIgGAwIA9ADIgJAzIg8gDIgFAkIgFAmIgcgBg");
	this.shape_597.setTransform(1076.15,321.95);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgxhzICFAEIgEAYIgDAaIhQgDIgEAgIA+gBIgBAaIgBAZIgjACIgiACIgFAmIBUgFIgBAbIgBAcIhHADIhJAEg");
	this.shape_598.setTransform(998.7,321.95);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgThwIA5AAIgUDfIgbABIgcABg");
	this.shape_599.setTransform(985.8,321.925);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AhYBuIgdAAIAQhuIAQhrIAhgCQARABAQgCIAUB1IAyhyIAhgCIAigBIgKBrIgMBrIgNABIgPABIgPABIgOABIALhmIgKAYIgHATIgHASIgKAYIgYgBIgZgBIgOhVIgNBrIgcgBg");
	this.shape_600.setTransform(968.925,322.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AAhBPIg+ADIgQAjIgxgIIBhjhQAMACAPAAIAcABIAmDaIgdAGIgeAGgAgEAaIAOgBIAPgBIgHgyg");
	this.shape_601.setTransform(947.5,322.125);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgxhzICFAEIgEAYIgDAaIhQgDIgEAgIA+gBIgBAaIgCAZIgiACIgiACIgFAmIBUgFIgBAbIgBAcIhHADIhJAEg");
	this.shape_602.setTransform(931.4,321.95);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgbBxIgcgBIAYipIg0ACIAKg6IBOACIBPADIgLA2IgygBIgMBTIgMBWIgagBg");
	this.shape_603.setTransform(917.925,321.875);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgxgIIBhjhQAMACAPAAIAcABIAlDaIgcAGIgdAGgAgEAaIAOgBIAPgBIgGgyg");
	this.shape_604.setTransform(881.55,322.125);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgthvIANAAIAWAAIAUgBIgVCqIBWgCIgEAbIgGAdIiMABg");
	this.shape_605.setTransform(865.2,321.875);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AhChoQAVgGATgDQASgDAPAAQAUABARAFQAQAEALAKQALAKAFAPQAFAPgDAVQgEAjgUAUQgTAUgdAHQgPACgOABIgHAAIgHgBIgHBCIgcAAIgdACgAgOg/IgGA9IARgBQAIgBAHgDQAIgEAGgGQAFgHADgLQADgJgFgHQgEgIgJgEIgOgBIgJAAIgKABg");
	this.shape_606.setTransform(849.9063,321.65);

	this.respuesta13 = new lib.respuestaa();
	this.respuesta13.name = "respuesta13";
	this.respuesta13.setTransform(1032.65,315.5,1,1,0,0,0,229.8,59.8);
	new cjs.ButtonHelper(this.respuesta13, 0, 1, 2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#333333").s().p("AgmhZIBnADIgDATIgDATIg9gCIgDAaIAwgCIgCAUIgBATIgaACIgaACIgEAdIBBgEIgBAVIgBAVIg3ADIg4ADg");
	this.shape_607.setTransform(509.225,626.15);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#333333").s().p("AgdBZQgJgCgIgEQgIgDgGgHQgHgGgDgGIANgRIAPgQQAGAMAKAEQALAEANAAQAKgBAGgEQAHgFgCgHQAAgDgDgDIgJgFIgLgEIgNgGIgNgGQgGgEgEgFQgFgGgBgIQgCgIACgKQACgOAGgKQAHgJAJgHQAJgHALgDQAKgDAMAAIAIAAIAHABQALADAJAFQAKAFAGAJIgdAkQgDgGgFgEIgKgGIgMgCQgHAAgFADQgEADgBAGQgBAEAFADQAFADAIACIATAHQALAEAIAGQAIAHAEAIQAEALgDAQQgCANgHALQgGALgKAIQgKAHgMAEQgNADgMAAQgKAAgKgCg");
	this.shape_608.setTransform(496.075,626.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#333333").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAEIgWAFgAgDAUIALAAIAMgBIgGgmg");
	this.shape_609.setTransform(481.925,626.25);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#333333").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAEIgWAFgAgDAUIALAAIAMgBIgGgmg");
	this.shape_610.setTransform(435.025,626.25);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#333333").s().p("AAZA+IgvABIgNAbIgmgGIBLitIAVABIAWABIAdCoIgXAEIgWAFgAgDAUIALAAIAMgBIgGgmg");
	this.shape_611.setTransform(401.575,626.25);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#333333").s().p("AgmhZIBnADIgDATIgDATIg9gCIgDAaIAwgCIgCAUIgBATIgaACIgaACIgEAdIBBgEIgBAVIgBAVIg3ADIg4ADg");
	this.shape_612.setTransform(378.225,626.15);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#333333").s().p("AgyhQQAPgEAPgDQAPgCALAAQAPAAANAEQANAEAIAHQAJAIAEAMQADALgCAQQgDAbgPAPQgPAQgWAFQgMADgLgBIgFAAIgFAAIgGAzIgVAAIgXABgAgKgwIgFAvIANAAQAGgBAGgDQAGgDAEgFQAEgFACgIQADgIgEgGQgDgFgHgDIgLgBIgGAAIgIABg");
	this.shape_613.setTransform(354.0864,625.9);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#333333").s().p("AhDBVIgXgBIAMhTIANhTIAZgCIAagBIAOBaIAohXIAZgCIAagBIgIBTIgJBTIgKAAIgMABIgLABIgMAAIAJhOIgHASIgFAPIgGAOIgIASIgSAAIgUgBIgKhCIgKBSIgVAAg");
	this.shape_614.setTransform(338.55,626.25);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#333333").s().p("AgJBZQgTAAgNgIQgNgIgHgNQgHgOgCgQQgDgQADgQQADgRAGgPQAHgPALgNQAKgMAOgHQAPgIAQAAQATAAAMAJQANAIAHANQAHANACARQACARgDAQQgCAQgHAPQgGAQgKAMQgKAMgNAHQgOAHgPAAgAgLglQgIAJgFANQgDAKgBAJQgBAKACAJQACAHAFAGQAFAHAJABIABAAIACAAQAEAAAFgDQAFgCAEgFIAGgLIAFgNQADgJAAgJQAAgJgCgIQgCgIgEgFQgEgGgIgBIgBAAIgCAAQgJgBgIAJg");
	this.shape_615.setTransform(322.2819,626.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#333333").s().p("AghBWQgLgFgIgKQgJgKgDgQQgEgPACgWQADgWAIgTQAIgRAKgNQALgMAMgHQANgHAMgBIAEAAIAEAAQANAAANAFQAMAFAKAKIgcAlQgFgGgHgEQgHgEgHAAIgGABQgKAEgKAPQgJAOgDAUQgCATAGAKQAGAKAJABIACABIABAAQAIAAAIgFQAJgEAHgJIARAhQgLANgOAHQgPAIgPAAQgNAAgLgFg");
	this.shape_616.setTransform(309.2019,626.1);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AgVArQgHgDgEgFQgFgFgDgHQgEgHgBgIQgBgJAEgJQAEgJAHgIQAIgHAJgFQAJgFAIgBIADAAIAEAAQAPAAAKAKQAKALABAQQAAAJgEAKQgFAKgHAIQgIAIgJAEQgKAFgJAAQgJAAgGgDg");
	this.shape_617.setTransform(518.0722,591.425);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AguhvIAPAAIAVAAIAUgBIgVCqIBXgCIgGAbIgEAdIiMABg");
	this.shape_618.setTransform(505.15,584.425);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("Agyh0ICGAFIgDAYIgFAZIhPgCIgEAgIA+gCIgBAaIgBAaIgjACIgiACIgGAmIBWgFIgCAbIgBAcIhHAEIhJADg");
	this.shape_619.setTransform(471.9,584.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_620.setTransform(454.675,584.625);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_621.setTransform(426.1288,584.475);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_622.setTransform(396.3288,584.475);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AgUhwIA7AAIgWDfIgaABIgdABg");
	this.shape_623.setTransform(381.05,584.475);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgrBwQgPgHgKgNQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgQQAOgPAQgJQARgJAQgCIAFAAIAEAAQASAAAQAGQAQAHANANIglAxQgGgKgJgEQgJgGgJAAIgHACQgOAGgNASQgMATgDAaQgDAaAHANQAIANAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAQgTAJQgTAKgUAAQgQAAgPgGg");
	this.shape_624.setTransform(368.7779,584.45);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgThwIA6AAIgWDfIgaABIgdABg");
	this.shape_625.setTransform(354.4,584.475);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgbBxIgcgBIAYipIg0ACIAKg6IBOACIBPADIgLA2IgygBIgMBTIgMBWIgagBg");
	this.shape_626.setTransform(343.275,584.425);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgrBwQgPgHgKgNQgLgNgEgUQgFgUADgcQAEgeAKgXQAKgYANgQQAOgPAQgJQARgJAQgCIAFAAIAEAAQASAAAQAGQAQAHANANIglAxQgGgKgJgEQgJgGgJAAIgHACQgOAGgNASQgMATgDAaQgDAaAHANQAIANAMABIACAAIACAAQAKAAALgGQALgGAJgLIAWAsQgNAQgTAJQgTAKgUAAQgQAAgPgGg");
	this.shape_627.setTransform(327.9279,584.45);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgUhwIA7AAIgWDfIgaABIgdABg");
	this.shape_628.setTransform(313.55,584.475);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("Ag2BwIgdgBIARhvIAPhwICHADIgEAaIgFAaIhNgDIgHAwIA9ADIgJAzIg8gDIgFAkIgGAmIgagBg");
	this.shape_629.setTransform(301.65,584.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#CC0000").s().p("AgVArQgHgDgEgFQgFgFgDgHQgEgHgBgIQgBgJAEgJQAEgJAHgIQAIgHAJgFQAJgFAIgBIADAAIAEAAQAPAAAKAKQAKALABAQQAAAJgEAKQgFAKgHAIQgIAIgJAEQgKAFgJAAQgJAAgGgDg");
	this.shape_630.setTransform(701.0722,543.825);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#CC0000").s().p("AgVArQgHgDgEgFQgFgFgDgHQgEgHgBgIQgBgJAEgJQAEgJAHgIQAIgHAJgFQAJgFAIgBIADAAIAEAAQAPAAAKAKQAKALABAQQAAAJgEAKQgFAKgHAIQgIAIgJAEQgKAFgJAAQgJAAgGgDg");
	this.shape_631.setTransform(690.3222,543.825);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#CC0000").s().p("AgVArQgHgDgEgFQgFgFgDgHQgEgHgBgIQgBgJAEgJQAEgJAHgIQAIgHAJgFQAJgFAIgBIADAAIAEAAQAPAAAKAKQAKALABAQQAAAJgEAKQgFAKgHAIQgIAIgJAEQgKAFgJAAQgJAAgGgDg");
	this.shape_632.setTransform(679.5722,543.825);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgTBxQgXgBgPgHQgPgIgJgNQgIgNgDgSQgCgSAEgWIATh6IA3gCIgJA/IgJA/QgDATAEAJQAGAJANABIACABIABAAQALAAAHgKQAIgJACgTIAKg/IAJhBIA5ADIgKBAIgJA/QgGAtgYAZQgYAZgmAAIgBAAg");
	this.shape_633.setTransform(638.8136,537.1755);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AAhBPIg+ADIgQAjIgxgIIBhjhQANACAOAAIAcABIAmDaIgdAGIgeAGgAgEAaIAOgBIAPgBIgHgyg");
	this.shape_634.setTransform(609,537.075);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgbBxIgcgBIAYipIg0ACIAKg6IBOACIBPADIgLA2IgygBIgMBTIgMBWIgagBg");
	this.shape_635.setTransform(595.125,536.825);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgxgIIBhjhQAMACAPAAIAcABIAlDaIgcAGIgdAGgAgEAaIAOgBIAPgBIgGgyg");
	this.shape_636.setTransform(576.45,537.075);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AgthvIANAAIAWAAIAUgBIgVCqIBWgCIgEAbIgGAdIiMABg");
	this.shape_637.setTransform(560.1,536.825);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("Agxh0ICFAFIgEAYIgDAZIhQgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgFAmIBUgGIgBAcIgBAcIhHAEIhJACg");
	this.shape_638.setTransform(545.2,536.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_639.setTransform(527.975,537.025);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("Agxh0ICFAFIgEAYIgDAZIhQgCIgEAgIA+gCIgBAaIgCAaIgiACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJACg");
	this.shape_640.setTransform(501.3,536.9);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AglBzQgMgCgLgFQgKgFgJgIQgHgHgFgKIASgUIASgWQAHAQAOAFQAPAFAQAAQANgBAIgGQAJgGgCgJQAAgFgFgDIgLgGIgOgGIgRgHQgJgDgIgGQgIgEgGgHQgFgHgDgLQgCgKACgNQADgSAIgNQAJgNAMgIQAMgJAPgEQANgEAPAAIAJAAIAKABQAOAEAMAHQANAGAIALIgmAwQgDgJgHgFQgGgFgIgDQgHgCgHAAQgKAAgGAEQgGAEgBAHQgBAGAHADQAGAEALAEIAZAJQANAFAKAIQALAIAFAMQAGAMgEAVQgDASgIAOQgKAOgMAKQgNAJgQAFQgQAFgQAAQgNAAgMgDg");
	this.shape_641.setTransform(484.25,536.875);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_642.setTransform(456.4288,536.875);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("Ag5BwIgShuIgShuIAcgDQAPAAANgCIAYCLIANgkIANghIAMghIAPglIAaAFIAcAFIhTDZg");
	this.shape_643.setTransform(439.1,536.675);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AgThwIA5AAIgVDfIgaABIgcABg");
	this.shape_644.setTransform(424.05,536.875);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AgbBxIgcgBIAYipIg0ACIAKg6IBOACIBPADIgLA2IgygBIgMBTIgMBWIgagBg");
	this.shape_645.setTransform(412.925,536.825);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AAhBPIg+ADIgQAjIgygIIBijhQANACAOAAIAcABIAmDaIgeAGIgdAGgAgEAaIAOgBIAQgBIgIgyg");
	this.shape_646.setTransform(394.25,537.075);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_647.setTransform(376.625,537.025);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_648.setTransform(358.275,537.025);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AAhBPIg/ADIgPAjIgxgIIBhjhQAMACAPAAIAcABIAmDaIgdAGIgdAGgAgEAaIAOgBIAPgBIgHgyg");
	this.shape_649.setTransform(339.2,537.075);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_650.setTransform(322.225,536.625);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AgNB0QgYgBgRgKQgQgLgKgRQgJgRgDgVQgDgWAEgVQADgVAJgUQAJgUANgPQAOgQASgKQATgJAVAAQAZAAAQAKQAQALAKARQAJARACAWQADAVgEAVQgDAWgJAUQgIAUgNAPQgNAQgRAJQgRAKgUAAgAgPgwQgKALgHARQgEANgBAMQgBANACALQADALAHAHQAGAIALABIACABIACAAQAGAAAGgEQAHgDAFgGIAIgOQAEgIADgJQADgMAAgMQAAgMgCgKQgCgKgGgHQgGgIgJgBIgCAAIgDAAQgMAAgKALg");
	this.shape_651.setTransform(293.6788,536.875);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AAQBOIgbguIgIgBIgGAAIgFAoIgEAoIgcABIgdABIAYjdQAXgHAVgDQAVgEASAAQANAAALACQAaAHAOASQANATgEAhQgDAXgKAPQgKAOgQAKIAqBDIgYASIgYATIgcgtgAgEhEIgLABIgCAYIgCAXIAJAAIAOAAIANgDQAGgDAFgEQAEgEABgIQADgLgFgGQgFgHgLgCIgFgBIgFAAIgJABg");
	this.shape_652.setTransform(274.075,537.025);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("Agyh0ICGAFIgDAYIgFAZIhPgCIgEAgIA+gCIgBAaIgBAaIgjACIgiACIgGAmIBWgGIgCAcIgBAcIhHAEIhJACg");
	this.shape_653.setTransform(257.25,536.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_654.setTransform(240.675,536.625);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AgyhIIAjABIgKgQIgJgRIBCg3IAeAoIgjAYIglAZIBeADIgDAYIgFAZIhPgCIgEAfIA+gCIgBAaIgBAbIgjACIgiACIgGAmIBWgGIgCAcIgBAcIhHADIhJADg");
	this.shape_655.setTransform(223.85,532.525);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AgbB0QgOgDgMgHQgMgIgJgNQgJgNgDgTQgEgSADgYQAEghALgZQAMgYAQgPQAPgQATgHQASgHASAAQASAAAQAFQAQAFANAMIggAwQgHgIgIgEQgJgEgJAAQgKAAgKAFQgIAEgJAJQgIAJgGAOQgGANgCARQgCAOADALQACAKAEAHQAFAHAHADQAGADAIAAIACAAIADAAIAEgBIAEgBIAHghIgegDIAMgvIBOADIgJAyIgKAyQgOASgTAIQgTAJgTAAIgPgBg");
	this.shape_656.setTransform(208.0607,536.875);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AguhvIAPAAIAVAAIAVgBIgWCqIBWgCIgFAbIgEAdIiNABg");
	this.shape_657.setTransform(180.55,536.825);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AhEhhIA5gVIAnBuIAJhkIAbAAIAdgBIgZDfIgzABIgphuIgFA3IgFA1Ig6AGg");
	this.shape_658.setTransform(139.225,536.625);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("Ag8iRICjAFIgEAbIgEAbIhngEIgJA4IBTgEIgBAcIgCAcIgtADIgsADIgJA8IBvgHIgBAeIgBAfIhYAEIhYAEg");
	this.shape_659.setTransform(120.8,534.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.respuesta1},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113,p:{x:989.6975,y:306.875}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:1096.9481,y:306.725}},{t:this.shape_106},{t:this.shape_105,p:{x:1124.4,y:306.95}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:1162.4,y:306.95}},{t:this.shape_101,p:{x:1174.3481,y:306.725}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.respuesta2},{t:this.respuesta3},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:1109.3519,y:428.775}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:940.9519,y:469.875}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:1089.7,y:470.075}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:1135.25,y:469.925}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:1185.6,y:469.925}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:1029.325,y:510.95}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:995.6,y:577.725}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:1085.675,y:577.525}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:954.3519,y:618.625}},{t:this.shape_17},{t:this.shape_16,p:{x:980.675,y:618.625}},{t:this.shape_15,p:{x:993.25,y:618.65}},{t:this.shape_14,p:{x:1006.175,y:618.475}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:1054.1,y:618.675}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:1147.95,y:618.825}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:1051.975,y:659.725}},{t:this.shape}]}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.respuesta4},{t:this.shape_254},{t:this.shape_47,p:{x:886.35,y:295.025}},{t:this.shape_43,p:{x:900.425,y:294.95}},{t:this.shape_253},{t:this.shape_51,p:{x:927.8,y:295.025}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_32,p:{x:973.1,y:295.175}},{t:this.shape_250},{t:this.shape_27,p:{x:1005.125,y:294.975}},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_15,p:{x:1097.2,y:295}},{t:this.shape_107,p:{x:1109.1481,y:294.775}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_11,p:{x:1197.2,y:295.025}},{t:this.shape_238},{t:this.shape_101,p:{x:849.0981,y:335.875}},{t:this.shape_237},{t:this.shape_236},{t:this.shape_16,p:{x:892.375,y:336.075}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_105,p:{x:958.5,y:336.1}},{t:this.shape_72,p:{x:970.8519,y:336.075}},{t:this.shape_5,p:{x:983.7,y:336.275}},{t:this.shape_63,p:{x:1000.3519,y:336.075}},{t:this.shape_102,p:{x:1010.85,y:336.1}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_113,p:{x:1088.1975,y:336.025}},{t:this.shape_1,p:{x:1102.975,y:336.075}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_14,p:{x:1148.575,y:335.925}},{t:this.shape_54,p:{x:1161.7,y:336.275}},{t:this.shape_18,p:{x:1178.3519,y:336.075}},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.respuesta5},{t:this.respuesta6},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349,p:{y:642.725}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344,p:{y:642.475}},{t:this.shape_343},{t:this.shape_342,p:{y:642.475}},{t:this.shape_341},{t:this.shape_340,p:{y:642.475}},{t:this.shape_339},{t:this.shape_338,p:{y:642.525}},{t:this.shape_337,p:{y:642.625}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333,p:{y:642.725}},{t:this.respuesta7},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329,p:{x:968.5788,y:313.425}},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326,p:{x:1031.9288,y:313.425}},{t:this.shape_325,p:{x:1050.625,y:313.175}},{t:this.shape_324},{t:this.shape_323,p:{x:1084.425,y:313.575}},{t:this.shape_322,p:{x:1101.65,y:313.45}},{t:this.shape_321,p:{x:1118.075,y:313.375}},{t:this.shape_320,p:{x:1133.9288,y:313.425}},{t:this.shape_319},{t:this.respuesta8},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314,p:{x:1021.5779}},{t:this.shape_313},{t:this.shape_312,p:{x:1049.1288}},{t:this.shape_311,p:{x:1067.825,y:467.225}},{t:this.shape_310},{t:this.shape_309},{t:this.respuesta9},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306,p:{x:1018.55,y:616.425}},{t:this.shape_305,p:{x:1037.625,y:615.975}},{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.respuesta10},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.respuesta11},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.respuesta12},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461}]},1).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_659},{t:this.shape_658},{t:this.shape_322,p:{x:165.65,y:536.9}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_325,p:{x:656.175,y:536.625}},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_306,p:{x:488,y:584.675}},{t:this.shape_618},{t:this.shape_617},{t:this.shape_349,p:{y:626.325}},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_344,p:{y:626.075}},{t:this.shape_612},{t:this.shape_342,p:{y:626.075}},{t:this.shape_611},{t:this.shape_340,p:{y:626.075}},{t:this.shape_610},{t:this.shape_338,p:{y:626.125}},{t:this.shape_337,p:{y:626.225}},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_333,p:{y:626.325}},{t:this.respuesta13},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_311,p:{x:900.625,y:321.675}},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_305,p:{x:1015.525,y:321.675}},{t:this.shape_321,p:{x:1032.825,y:321.875}},{t:this.shape_329,p:{x:1048.6788,y:321.925}},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_326,p:{x:1118.4788,y:321.925}},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_320,p:{x:1216.7788,y:321.925}},{t:this.respuesta14},{t:this.shape_589},{t:this.shape_588},{t:this.shape_314,p:{x:1006.8279}},{t:this.shape_587},{t:this.shape_586},{t:this.shape_323,p:{x:1056.525,y:467.625}},{t:this.shape_585},{t:this.shape_312,p:{x:1094.3288}},{t:this.respuesta15},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565}]},1).to({state:[]},13).wait(1));

	// Capa_1
	this.instance_1 = new lib.calvo();
	this.instance_1.setTransform(497.05,347.4,0.5056,0.5614,0,0,0,587.8,362.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},17).wait(1));

	// Capa_4
	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AgXDPQgrgBgdgTQgegSgQgeQgSgegFglQgFglAFgmQAHgnAPgkQAPglAZgcQAYgcAigRQAggSAoAAQAqAAAdATQAcASARAeQAQAeAFAmQAFAmgFAmQgGAmgPAlQgPAkgYAcQgWAcggARQgfASglAAgAgNhvQgNAIgLANQgLAOgJASQgIASgGATQgGAVAAAXQgBAXAGATQAGATANANQANANAWADIAIAAQAOAAAOgIQANgIAKgOQALgOAIgSQAIgTAFgTQAEgVgBgWQAAgXgGgSQgFgTgMgMQgLgNgTgEIgEAAIgFAAQgOAAgNAIg");
	this.shape_660.setTransform(813.7,425.075);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("Ah2ixIBYghIBVDrIAVjbIArgCIAugBIgsGPIgoABIgoABIhbjdIgLBtIgLBtIhcAKg");
	this.shape_661.setTransform(780.025,424.825);

	this.noo = new lib.no();
	this.noo.name = "noo";
	this.noo.setTransform(796.65,431.9,1,1,0,0,0,133.9,52);
	new cjs.ButtonHelper(this.noo, 0, 1, 1);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AgvhmIADAAIgKgSIgLgSIBghQIArA5IgqAdIgrAeIAvAAIgeE+IgmACIgpABg");
	this.shape_662.setTransform(426.225,422.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AhDDOQgVgFgRgIQgSgIgOgMQgOgMgIgQIAbggIAcghQAIANALAIQALAIAMAGQANAEAOACQAOACAOAAQAOgBAMgEQAMgEAIgGQAIgHAEgJQAEgIgBgKQAAgOgOgIQgOgJgTgIIgpgQQgWgKgSgMQgRgOgKgVQgKgVAGggQAEgeAPgWQAOgWAVgOQAUgPAZgHQAYgIAZABQAhgBAfALQAeAKAXAZIg6BLQgGgJgIgIQgJgGgKgFQgKgFgLgDQgLgCgKAAQgSAAgMAJQgOAIgDARQgDAOAPAJQAOAJAXAJIAAAAIAdALQAPAFAOAHQAOAIANAJQAMAKAJALQAIANADARQAEASgEAWQgGAggQAYQgPAXgVAQQgWAQgaAIQgaAIgaACIgHAAIgGAAQgVAAgVgDg");
	this.shape_663.setTransform(401.975,425.1);

	this.sii = new lib.si();
	this.sii.name = "sii";
	this.sii.setTransform(413.8,431.9,1,1,0,0,0,133.9,52);
	new cjs.ButtonHelper(this.sii, 0, 1, 1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AhSDNQgLgFgGgJQgGgIgCgLQgBgLACgLQACgLAFgKQAFgKAIgIQAIgIALgFQAKgFANAAQAYAAAPAPQAOAQABAYQgBAOgFALQgEAMgJAIQgIAIgMAFQgMAEgOAAQgQAAgLgFgAhQA+QAJgbAPgUQAQgUAPgQIAZgfQAMgOADgOQAEgRgJgNQgKgMgUAAQgSAAgTAIIgiARIgRhRQAcgQAegHQAdgIAZAAQAYAAAUAIQAVAHAOAPQAOAPAHAVQAHAVgDAcQgEAcgNAYQgOAXgRATQgQAUgRARQgQASgKARg");
	this.shape_664.setTransform(875.9833,244.225);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AAiCHQgagqgXgrIgTAAIgUgBIgIBLIgIBKIgsACIguABIArmLQAngLAjgGQAjgFAegBQARAAAPACQAaADAVAJQAVALAOAQQAOARAGAXQAGAYgEAgQgFAqgUAcQgUAbgfAPIBPB/IglAcIgoAfIgyhTgAgKiGIgYADIgGA0IgFAzIANAAIALAAQAmABAXgLQAYgLAHgcQAHgbgPgOQgOgPgcgCIgFgBIgFAAIgVACg");
	this.shape_665.setTransform(846.725,245.35);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("ABCCLIh/AGIgbA/IhPgLICwmUIAuACIAtADIBEGHIguAJIgvAKgAgXA+IBRgHIgNiTg");
	this.shape_666.setTransform(812.75,245.475);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AgrDHQglgCgagMQgZgNgPgXQgPgWgDgfQgDgfAIglIANhLIALhFIAIg0IAEgZIAqgCIAsgCIgQByIgQBxQgHAoAJATQAJATAdACIAGAAQAYAAARgSQARgSAHgpIARhzIARh0IBaAFIgSB3IgRB5QgEAdgOAbQgPAcgWAVQgXAVgdANQgcANggAAg");
	this.shape_667.setTransform(782.9467,245.425);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("Ah2ixIBYghIBVDrIAVjbIArgCIAugBIgsGPIgoABIgoABIhbjdIgLBtIgLBtIhcAKg");
	this.shape_668.setTransform(750.025,244.875);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AgdjIIBdAAIgnGQIgrAAIgtABg");
	this.shape_669.setTransform(725.1,245.15);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AgzDJIgsgBIAtk7IhfADIAPhaICKAFICKAEIgQBUIhegDIgWCdIgWCeIgrgCg");
	this.shape_670.setTransform(705.825,245);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("Ah2ixIBYghIBVDrIAVjbIArgCIAugBIgsGPIgoABIgoABIhbjdIgLBtIgLBtIhcAKg");
	this.shape_671.setTransform(675.225,244.875);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgXDPQgrgBgegTQgdgSgRgeQgQgegGglQgFglAGgmQAGgnAPgkQAPglAZgcQAZgcAhgRQAggSAoAAQAqAAAdATQAcASARAeQARAeAEAmQAFAmgGAmQgFAmgPAlQgPAkgXAcQgXAcggARQgfASglAAgAgMhvQgOAIgLANQgLAOgIASQgKASgGATQgFAVgBAXQAAAXAGATQAGATANANQAOANAVADIAIAAQAOAAAOgIQANgIALgOQAKgOAIgSQAIgTAEgTQAFgVAAgWQgBgXgFgSQgGgTgMgMQgLgNgSgEIgFAAIgEAAQgPAAgMAIg");
	this.shape_672.setTransform(641.75,245.125);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AhNDHQgZgMgSgWQgSgYgJgjQgIglAGgwQAFgpAOgpQAOgpAYghQAZghAjgVQAigUAvAAQAdgBAbALQAaALAVAUIg6BNQgWgfgiAAQgaAAgSAOQgSAOgNAVQgNAWgHAYQgGAYgCAUQgCAaADAUQADATAHAOQAHANAKAGQALAIANAAQAYABAUgKQATgJARgSIAiBCQgYAbggAQQghAPgjAAQgcAAgagMg");
	this.shape_673.setTransform(611.4509,245.05);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AhDDNQgVgEgRgHQgSgJgOgMQgOgMgIgQIAbggIAcghQAIANALAJQALAHAMAFQANAFAOADQAOABAOAAQAOgBAMgEQAMgEAIgHQAIgGAEgIQAEgJgBgJQAAgOgOgKQgOgJgTgHIgpgRQgWgIgSgNQgRgOgKgVQgKgVAGggQAEgeAPgWQAOgWAVgPQAUgOAZgHQAYgHAZgBQAhAAAfALQAeALAXAYIg6BKQgGgIgIgHQgJgIgKgEQgKgFgLgCQgLgDgKAAQgSAAgMAIQgOAJgDARQgDAOAPAJQAOAKAXAJIAAAAIAdAKQAPAFAOAHQAOAHANAKQAMAJAJANQAIAMADASQAEAQgEAXQgGAggQAYQgPAYgVAQQgWAPgaAIQgaAJgaABIgHAAIgGABQgVAAgVgFg");
	this.shape_674.setTransform(564.375,245.15);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("ABCCLIh+AGIgcA/IhPgLICwmUIAuACIAtADIBEGHIguAJIgvAKgAgXA+IBRgHIgMiTg");
	this.shape_675.setTransform(530.3,245.475);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AhWjPIDpAHIgGAmIgFAnIiUgFIgOBPIB5gFIgDAnIgDApIg/AEIg/AFIgNBUICfgJIgCArIgCAsIh9AGIh+AFg");
	this.shape_676.setTransform(501.825,245.2);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AhDDNQgVgEgRgHQgSgJgOgMQgOgMgIgQIAbggIAcghQAIANALAJQALAHAMAFQANAFAOADQAOABAOAAQAOgBAMgEQAMgEAIgHQAIgGAEgIQAEgJgBgJQAAgOgOgKQgOgJgTgHIgpgRQgWgIgSgNQgRgOgKgVQgKgVAGggQAEgeAPgWQAOgWAVgPQAUgOAZgHQAYgHAZgBQAhAAAfALQAeALAXAYIg6BKQgGgIgIgHQgJgIgKgEQgKgFgLgCQgLgDgKAAQgSAAgMAIQgOAJgDARQgDAOAPAJQAOAKAXAJIAAAAIAdAKQAPAFAOAHQAOAHANAKQAMAJAJANQAIAMADASQAEAQgEAXQgGAggQAYQgPAYgVAQQgWAPgaAIQgaAJgaABIgHAAIgGABQgVAAgVgFg");
	this.shape_677.setTransform(471.425,245.15);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AhWjPIDpAHIgGAmIgFAnIiUgFIgOBPIB5gFIgDAnIgDApIg/AEIg/AFIgNBUICfgJIgCArIgCAsIh9AGIh+AFg");
	this.shape_678.setTransform(441.575,245.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AicDJIAmmJIAQgDIAhgEIAmgFQAVgCAOAAIAHAAIAGABQAsAEAeATQAdATAQAdQAQAeAEAlQAEAmgGApQgGAugVAkQgUAkgfAZQgeAZgmANQglAOgoAAgAgTh9IgVADIgVDzIAEAAIAFAAQAbAAAVgKQATgJAPgSQAQgSAJgYQAKgZADgeQAFgngIgcQgJgcgYgMQgHgEgHgBQgIgBgJAAIgUABg");
	this.shape_679.setTransform(411.18,245.175);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgvDKQgVgHgOgPQgOgPgHgVQgHgVADgcQAEgcANgXQAOgYARgUIAhglQAQgRAKgRIBRAKQgJAbgPAUQgQAUgPAQIgaAfQgLAOgDAOQgEARAJANQAJAMAVAAQASAAATgIIAigRIARBRQgcAQgeAHQgdAIgZAAQgYAAgUgIgAAGhsQgOgPgBgYQABgOAFgLQAEgMAJgIQAJgIALgFQAMgEAOAAQAQAAALAFQALAFAGAIQAGAJACALQABALgCALQgCALgFAKQgFAKgIAIQgIAIgLAFQgKAFgNAAQgYAAgPgQg");
	this.shape_680.setTransform(385.1167,247.925);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FF0000").s().p("AgfA+QgJgFgHgHQgHgIgEgKQgFgKgCgKQgBgOAGgNQAGgNAKgKQAKgLANgHQANgHANgCIAEAAIAFAAQAWAAAPAPQAOAPABAYQAAANgGAOQgHAOgKALQgLALgOAHQgOAHgNAAQgMAAgKgEg");
	this.shape_681.setTransform(732.7173,176.125);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FF0000").s().p("AhHimIC/AHIgFAiQgCAUgEARIhygEIgFAuIBZgDIgCAlIgCAmIgxADIgyACIgHA2IB5gHIgBAnIgCAoIhmAFIhoAEg");
	this.shape_682.setTransform(714.65,166.25);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FF0000").s().p("AgnCiIgogBIAjjyIhLABIAPhSIBwADIBwAEIgPBNIhHgCIgSB5IgSB5QgQgBgVABg");
	this.shape_683.setTransform(695.375,166.1);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FF0000").s().p("Ag2ClQgRgEgPgHQgPgHgMgLQgMgLgGgNIAageIAageQAKAWAUAHQAVAIAXAAQATgCAMgIQAMgIgDgNQAAgHgFgFQgHgFgKgEIgUgIQgNgEgMgGQgNgFgLgHQgLgHgJgKQgIgLgDgOQgDgPADgTQAEgZAMgTQAMgSARgNQARgMAVgGQATgGAWAAIAOABIAOACQAUAFASAJQAQAKANAPIg3BEQgFgMgJgHQgKgHgKgEQgKgEgLAAQgNAAgJAGQgJAFgCALQgBAIAKAFQAJAGAPAFIAkANQATAHAPALQAPAMAIARQAHASgFAeQgEAagMAUQgNAUgTANQgSAOgWAHQgYAHgYAAQgSAAgRgEg");
	this.shape_684.setTransform(670.05,166.175);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FF0000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_685.setTransform(643.825,166.475);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FF0000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_686.setTransform(620.475,166.125);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FF0000").s().p("AhCifIAUAAIAfAAIAegBIgfDzIB8gDQgEARgDAWQgDAWgFASIjIACg");
	this.shape_687.setTransform(598.825,166.125);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FF0000").s().p("AAvBxIhZAEIgXAyIhHgLICNlCQARACAVABIAoACIA2E3IgqAIIgpAJgAgGAmIAVgCIAWgCIgKhHg");
	this.shape_688.setTransform(574.325,166.475);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FF0000").s().p("AhmDIIgsgBIAdjHIAdjIIDrAGIgHAnIgIAoIiQgFIgQBnIB0AGIgOBRIhygFIgKBEIgKBEIgqgBg");
	this.shape_689.setTransform(551.825,162.675);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("EhkRA4OMAAAhwbMDIiAAAMAAABwbgADmTXMAp3AAAIAAwPMgp3AAAgEg4OATXMAp3AAAIAAwPMgp3AAAg");
	this.shape_690.setTransform(639.8,359.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.sii},{t:this.shape_663},{t:this.shape_662},{t:this.noo},{t:this.shape_661},{t:this.shape_660}]},17).wait(1));

	// Capa_3
	this.instance_2 = new lib.DesiertoaiActivos();
	this.instance_2.setTransform(-49,-39,1.0054,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},17).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(591,321,1851.4,717);
// library properties:
lib.properties = {
	id: 'E193036E09420341B269BF49BAE65840',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Nivel 5 calvo_atlas_1.png?1698510938848", id:"Nivel 5 calvo_atlas_1"},
		{src:"sounds/botones.mp3?1698510939763", id:"botones"},
		{src:"sounds/niveles.mp3?1698510939763", id:"niveles"}
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