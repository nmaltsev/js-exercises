// Sorting algorithm that use only original array
function splitSort(start, count, array){
	var 	value = array[start],
			valuePos = start, 
			buf, diff;
			
	for(var i = start + 1, j; i < count; i++){
		if(value > array[i]){
			diff = i - valuePos;
			buf = array[i];

			if(diff > 1){
				for(j = 0; j < diff; j++){ // move right
					array[i - j] = array[i - j - 1]
				}
				array[valuePos] = buf;
				valuePos++;
			}else{ // move left
				array[valuePos] = buf;
				valuePos = i;
				array[valuePos] = value;
			}
		}
	}

	if(valuePos > start){
		//console.log('L [%s,%s]', start, valuePos);
		splitSort(start, valuePos, array);
	}
	
	if(valuePos + 1 < count){
		//console.log('R [%s, %s]', valuePos + 1, count);
		splitSort(valuePos + 1, count, array);
	}
}
