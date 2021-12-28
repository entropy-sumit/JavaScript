let keystring='a string';
let keyObj={};
let keyFunc=function(){

}


let myMap=new Map()
myMap.set(keystring, "value associated with  'a string'");
myMap.set(keyObj, 'value assciated with keyObj');
myMap.set(keyFunc, ' value associated with Key func');


let size=myMap.size;
let valstr=myMap.get(keystring);
let iskeyExist=myMap.get('a string');
console.log(size);
console.log(valstr);
console.log(iskeyExist);

for(let [key,valstr] of myMap)
console.log("Loop :"+key+" = "+valstr);



