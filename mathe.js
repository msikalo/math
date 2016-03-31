/*
var matheDiv = document.createElement('box');
matheDiv.style.width = '700px';
matheDiv.style.height = '700px';
matheDiv.className = 'jxgbox';
matheDiv.id = 'box';
*/

function neueTaffel() {
	
	Taffel = JXG.JSXGraph.initBoard('box', {boundingbox: [-5, 5, 5, -5], axis:true, showCopyright:false});	
	//Taffel.;
}

neueTaffel();

function leernTaffel() {

	JXG.JSXGraph.freeBoard(Taffel);
	neueTaffel();
}

function Punkte(name, x, y) {

	return Taffel.create('point', [x, y], {'name': name});
} 

function Kreis(center, radius) {

	return Taffel.create('circle', [center, radius]);
} 

function Gerade (p1, p2) {

	return Taffel.create('line', [p1, p2]);

}

function Strecke (p1, p2) {

	return Taffel.create('line', [p1, p2], {straightFirst:false, straightLast:false});

}

function Mittelsenkrechte (strecke) {

    var mp = Taffel.create('midpoint', [strecke]);
	return Taffel.create('perpendicular', [strecke, mp]);

}

function _intersection (o1, o2, name, index) {

    var p = Taffel.create('intersection', [o1, o2, index]);
	p.setName(name);
	
	return p;
}


function Querung1 (o1, o2, name) {

	return _intersection(o1, o2, name, 0);
}


function Querung2 (o1, o2, name) {

	return _intersection(o1, o2, name, 1);
}
