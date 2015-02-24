var blueberries = {
	name: 'Blueberries',
	name: 'Vaccinium corymbosum',
	Grows on shrub: 'Yes',
	Energy: '240 kJ',
	Carbohydrates: '14.49 g',
	Protein: '0.74 g',
};
var grapes = {
	name: 'Grapes',
	name: 'Vitis vinifera',
	Grows on shrub: 'No',
	Energy: '288 kJ',
	Carbohydrates: '18.1 g',
	Protein: '0.72 g'
};

var redCurrant = {
	name: 'Red currant',
	name: 'ibes rubrum',
	Grows on shrub: 'Yes',
	Energy: '234 kJ',
	Carbohydrates: '13.8 g',
	Protein: '1.4 g',
};

var fruit = [blueberries, grapes, redCurrant];

fruit.forEach(function (item) {
	document.write('<h2>' + item.name + '</h2>');
	document.write('<dl>')
	document.write('<dt>Grows on Shrub:</dt><dd>' + item.Grows on Shrub + '</dd>');
	document.write('<dt>Energy:</dt><dd>' + item.energy + '</dd>');
	document.write('<dt>Height:</dt><dd>' + item.height + '</dd>');
	document.write('</dl>')
});
