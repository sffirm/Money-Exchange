// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var h = 0;					//50
	var q = 0;					//25
	var d = 0;					//10
	var n = 0;					//5
	var p = 0;					//1
	var array = {};

	if(currency>10000){
		array['error'] = "You are rich, my friend! We don't have so much coins for exchange"
		return array;
	} else {

		if(currency>=50){
			h = Math.floor(currency/50)
		}
		if((currency - h*50)>=25){
			q = Math.floor((currency -h*50)/25)
		}
		if((currency - h*50 - q*25)>=10){
			d = Math.floor((currency - h*50 - q*25)/10)
		}
		if((currency - h*50 - q*25 - d*10)>=5){
			n = Math.floor((currency - h*50 - q*25 - d*10)/5)
		}
		if((currency - h*50 - q*25 - d*10 - n*5)>=1){
			p = Math.floor(currency - h*50 - q*25 - d*10 - n*5)
		}

		if(h > 0){
			array['H'] = h;
		}
		if(q > 0){
			array['Q'] = q;
		}
		if(d > 0){
			array['D'] = d;
		}
		if(n > 0){
			array['N'] = n;
		}
		if(p > 0){
			array['P'] = p;
		}
	}
	// console.log(array);
	return array;
}
