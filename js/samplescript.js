function addNum(a, b) {
	
	if(typeof a === 'number' && typeof b === 'number'){
		return a+b;
	}
	else if(typeof a ==='string' && typeof b === 'string') {
		return a+b;
	}else {
		return null;
	}
}