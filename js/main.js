var numInterations = 100;

for (i = 1; i <= numInterations; i ++) {
    
    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log((i ) + " fizzbuzz"); 
    } else if (i % 5 == 0) {
        console.log((i) + " buzz"); 
    } else if (i % 3 == 0) {
        console.log((i) + " fizz"); 
    } else { 
        console.log(i + " Non divisbile");
    } 
}
 