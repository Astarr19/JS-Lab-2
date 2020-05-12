let submissions = [{name: 'Jane', score: 95, date: '2020-01-24', passed: true}, {name: 'Joe', score: 77, date: '2018-05-14', passed: true}, {name: 'Jack', score: 59, date: '2019-07-05', passed: false}, {name: 'Jill', score: 88, date: '2020-04-22', passed: true}];

passingGrade = (score) => {
    return score >= 60 
}

addSubmission = (array, newName, newScore, newDate) => {
    class Student {
        constructor(newName, newScore, newDate) {
            this.name = newName;
            this.score = newScore;
            this.date = newDate;
            this.passed = passingGrade(this.score);
        }
    }
    array.push(new Student(newName, newScore, newDate));
}

//addSubmission(submissions, 'Aidan', 94, '2020-06-10');
//console.log(submissions);

deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
}

//deleteSubmissionByIndex(submissions, 4);
//console.log(submissions);

deleteSubmissionsByName = (array, name) => {
    let selectedName = array.findIndex(array => array.name === name);
    if (selectedName !== -1) {
    array.splice(selectedName, 1);
    } 
}

//deleteSubmissionsByName(submissions, 'Jill');
//console.log(submissions);

editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = passingGrade(score);
}

//editSubmission(submissions, 0, 40);
//console.log(submissions);

findSubmissionByName = (array, name) => {
    let selectedName = array.find(array => array.name === name);
    return selectedName;
}

//console.log(findSubmissionByName(submissions, 'Joe'));

findLowestScore = (array) => {
    
}