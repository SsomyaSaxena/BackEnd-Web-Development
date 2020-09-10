function arrayAverage(arr){
  //Find the sum
  var sum = 0;
  for(var i=0; i<arr.length; i++) 
  {
      sum += arr[i];
  }
  //Get the length of the array
  var numbersCnt = arr.length;
  //Return the average / mean.
  return (Math.round(sum / numbersCnt));
}
var arr = new Array(1, 2, 5, 20, 25);
var avg = arrayAverage(arr);
console.log(avg);