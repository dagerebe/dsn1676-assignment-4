var blueberries = {
	name: 'Vaccinium corymbosum',
	grows_on_shrub: 'Yes',
	energy: '240 kJ',
	carbohydrates: '14.49 g',
	protein: '0.74 g',
};
var grapes = {
	name: 'Vitis vinifera',
	grows_on_shrub: 'No',
	energy: '288 kJ',
	carbohydrates: '18.1 g',
	protein: '0.72 g'
};

var redcurrant = {
	name: 'ribes rubrum',
	grows_on_shrub: 'Yes',
	energy: '234 kJ',
	carbohydrates: '13.8 g',
	protein: '1.4 g',
};

var fruit = [blueberries, grapes, redcurrant];

fruit.forEach(function (item) {
	document.write('<h2>' + item.name + '</h2>');
	document.write('<dl>')
	document.write('<dt>grows_on_hhrub:</dt><dd>' + item.grows_on_shrub + '</dd>');
	document.write('<dt>energy:</dt><dd>' + item.energy + '</dd>');
	document.write('<dt>carbohydrates:</dt><dd>' + item.carbohydrates + '</dd>');
	document.write('<dt>protein:</dt><dd>' + item.protein + '</dd>');
});
