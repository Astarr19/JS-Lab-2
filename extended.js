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
createRange(6,12);
createRange(1,1);
createRange(5,0);

countElements = (array) => {
    
}

