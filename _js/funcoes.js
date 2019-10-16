function receberValores(receberKill,receberDeaths,receberAssists){
	var kill = parseFloat(receberKill);
	var assists = parseFloat(receberAssists);
	var deaths = parseFloat(receberDeaths);

	var resultado = (kill + assists)/deaths

	txtResultado.value = parseFloat(resultado);
	//((kill + assists)/deaths);
}
