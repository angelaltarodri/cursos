const _ = require('lodash');

const formatter = (o) => {
    const newO = _.groupBy(o, "question_name")
    const finalO = {}
    for (let i = 0; i < Object.keys(newO).length; i++) {
        let elements = newO[Object.keys(newO)[i]];
        for (let j = 0; j < elements.length; j++) {
            delete elements[j]["question_name"];
            elements[j]["value"] = elements[j]["question_value"]
            delete elements[j]["question_value"];
        }
        finalO[Object.keys(newO)[i]] = elements
    }
    console.log(finalO)
}

const exampleJSON = [
    { 'id': 1, 'question_name': "What is your name?", 'question_value': "Jack"},
    { 'id': 2, 'question_name': "What is your hobby?", 'question_value': "Rugby"},
    { 'id': 3, 'question_name': "What is your name?", 'question_value': "Peter"},
    { 'id': 4, 'question_name': "What is your hobby?", 'question_value': "Tennis"},
    { 'id': 5, 'question_name': "What is your hobby?", 'question_value': "Basquetball"},
    { 'id': 6, 'question_name': "What is your hobby?", 'question_value': "Tennis"},
    { 'id': 7, 'question_name': "What is your hobby?", 'question_value': "Ping Pong"},
    { 'id': 8, 'question_name': "What is your hobby?", 'question_value': "Football"}
  ];
  
  formatter(exampleJSON)