#!/usr/bin/node
// prints two argumnets passed to it, in the following format: " is "

if (isNaN(process.argv[2])) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(process.argv[2]));
}
