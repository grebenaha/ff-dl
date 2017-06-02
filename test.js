/**
 * Created by neiro on 27/05/2017.
 */
const parse = require('bash-parser');
const ast = parse('echo ciao');
console.log(ast)