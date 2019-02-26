var counter = function(arr){
return 'there are ' + arr.length + ' elemets in a array';
};
var subber = function(a,b){
    return `the difference between the  number are ${a-b}`;
}

module.exports = {
    counter : counter,
    subber : subber
};