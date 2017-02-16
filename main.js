var pricesPerTB = {
	'sia': 2,
	'amazon': 23,
	'google': 20,
	'microsoft': 24,
}

var downloadCostsPerTB = {
	'sia': 5,
	'amazon': 92,
	'google': 110,
	'microsoft': 87,
}

function updatePriceEstimates(ntb) {
	for (provider in pricesPerTB) {
		document.getElementById(provider + '-monthlystoragecost').innerHTML = '$' + pricesPerTB[provider] * ntb
		document.getElementById(provider + '-downloadbandwidthcost').innerHTML = '$' + downloadCostsPerTB[provider] * ntb
	}
}


var input = document.getElementById('price')

input.onchange = function(e) {
	updatePriceEstimates(e.target.value)
}
