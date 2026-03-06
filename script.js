const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum = 0;
	let idx = 0;
	let ans = new Array();
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
		if(sum <= n){
			ans[idx].push(arr[i]);
		}else{
			sum = 0;
			idx++;
		}
	}
	return ans;
};

const n = Number(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
