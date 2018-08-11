function trappingRainWater(array) {
	let left = [];
	let right = [];
	let max = 0;
	let result = 0;

	// Check left
	for(let i = 0; i < array.length; i++) {
		max = Math.max(max, array[i]);
		left[i] = max;
	}

	max = 0;
	//Check right
	for(let i = array.length - 1; i >= 0; i--) {
		max = Math.max(max, array[i]);
		right[i] = max;
	}

	//Get result
	for(let i = 0; i < array.length; i++) {
		result += Math.min(left[i], right[i]) - array[i];
	}

	return result;
}

array = [3, 0, 1, 3, 0, 5];
console.log(waterRain(array));
