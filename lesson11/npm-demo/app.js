const _ = require('lodash');
const axios = require('axios').default;

const newArr = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(newArr);

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        console.log(result.data);
    })
