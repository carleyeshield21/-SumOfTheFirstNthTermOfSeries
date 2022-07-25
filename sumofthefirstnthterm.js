// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n){
    let arr = []
    let num = 1
    while(arr.length <= n-1){
        arr.push(num)
        num += 3
    }
    console.log(arr)
    let sum = 0
    for(i=0; i<=arr.length-1; i++){
        // console.log(1/arr[i])
        sum += 1/arr[i]
    }
    console.log(sum.toFixed(2))
}
SeriesSum(1)
console.log('========')
SeriesSum(2)
console.log('========')
SeriesSum(3)
console.log('========')
SeriesSum(4)
console.log('========')