let submissions = [{ name: 'Jane', score: 95, date: '2020-01-24', passed: true }, { name: 'Joe', score: 77, date: '2018-05-14', passed: true }, { name: 'Jack', score: 59, date: '2019-07-05', passed: false }, { name: 'Jill', score: 88, date: '2020-04-22', passed: true }];

passingGrade = (score) => {
    return score >= 60
}

addSubmission = (array, newName, newScore, newDate) => {
    let student = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: passingGrade(newScore)
    }
    array.push(student);
}

//addSubmission(submissions, 'Aidan', 94, '2020-06-10');
//console.log(submissions);

deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
}

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

deleteSubmissionsByName = (array, name) => {
    let selectedName = array.findIndex(array => array.name === name);
    if (selectedName !== -1) {
        array.splice(selectedName, 1);
    }
}

// deleteSubmissionsByName(submissions, 'Jill');
// console.log(submissions);

editSubmission = (array, index, score) => {
    array[index].score = score;
    // Nicely done - I like how you've called this function 
    // within your other function.
    array[index].passed = passingGrade(score);
}

//editSubmission(submissions, 0, 40);
//console.log(submissions);

findSubmissionByName = (array, name) => {
    // Nice use of the shorthand arrow function callback!
    // One possibility of simplifying: Skip the intermediary
    // variable declaration and go straight to the return:
    return array.find(array => array.name === name);
}

//console.log(findSubmissionByName(submissions, 'Joe'));

findLowestScore = (array) => {
    let lowestSub = { score: 100 };
    array.forEach(element => {
        if (element.score < lowestSub.score) {
            lowestSub = element;
        }
    });
    return lowestSub;
}
//console.log(findLowestScore(submissions));

findAverageScore = (array) => {
    let scoreSum = 0, element;
    for (element of array) {
        scoreSum += element.score;
    }
    let average = scoreSum / array.length;
    return average;
}

//console.log(findAverageScore(submissions));

filterPassing = (array) => {
    let passingSubs = array.filter(element => element.passed === true);
    return passingSubs;
}

//console.log(filterPassing(submissions));
//console.log(submissions);

filter90AndAbove = (array) => {
    let gradeASubs = array.filter(element => element.score >= 90)
    return gradeASubs;
}

//console.log(filter90AndAbove(submissions));