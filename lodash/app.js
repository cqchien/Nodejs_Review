const _ = require("lodash")

let arr_1 = [1];
//! 
let arr_2 = _.concat(arr_1, 2, [3], [[4, [5]]]);

console.log(arr_2)
