var blueberries = {
	name: 'Blueberries',
	name2: 'Vaccinium Corymbosum',
	grows_on_shrub: 'Yes',
	energy: '240 kJ',
	carbohydrates: '14.49 g',
	protein: '0.74 g',
};
var grapes = {
	name: 'Grapes',
	name2: 'Vitis Vinifera',
	grows_on_shrub: 'No',
	energy: '288 kJ',
	carbohydrates: '18.1 g',
	protein: '0.72 g'
};

var redcurrant = {
	name: 'Red Currant',
	name2: 'Ribes Rubrum',
	grows_on_shrub: 'Yes',
	energy: '234 kJ',
	carbohydrates: '13.8 g',
	protein: '1.4 g',
};

var writeFruit = function (fruit) {
	fruit.forEach(function (item) {
		document.write('<h2>' + item.name + '</h2>');
		document.write('<h3>' + item.name2 + '</h3>');
		document.write('<dl>');
		document.write('<dt>Grows On Shrub:</dt><dd>' + item.grows_on_shrub + '</dd>');
		document.write('<dt>Energy:</dt><dd>' + item.energy + '</dd>');
		document.write('<dt>Carbohydrates:</dt><dd>' + item.carbohydrates + '</dd>');
		document.write('<dt>Protein:</dt><dd>' + item.protein + '</dd>');
	});
};

writeFruit([blueberries, grapes, redcurrant]);
















