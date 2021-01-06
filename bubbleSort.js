function bubbleSort(array) {
 for ( let n = array.length; n>1; n-- ) {
  for ( let i = 0; i < n-1; i++ ) {
   if ( array[i] > array[i+1] ) { 
    [array[i], array[i+1]] = [array[i+1], array[i]]; 
   }
  }
 }
}
