createRange =(start, end) => {
    let range = [];
    let i;
    if (start < end) {
        i = start;
        while (i <= end) {
            range.push(i);
            i++;
        }
    } else {
        i = start;
        while (i >= end) {
            range.unshift(i);
            i--;
        }
    }
    console.log(range);
}
//createRange(6,12);
//createRange(1,1);
//createRange(5,0);

let test = ['a','b','a','c', 'b'];

countElements = (array) => {
    let obj = {};
    for (element of array) {
        let arrString = [];
        arrString = array.filter((value => element === value));
        let objLength = arrString.length;
        obj[element] = objLength;
        
    }
    console.log(obj);
}
countElements(test);