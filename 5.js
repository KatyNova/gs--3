let arr = [2, -5, 9, 15, -20, -4];
let result = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        result += arr[i];
    }
}
alert(result);