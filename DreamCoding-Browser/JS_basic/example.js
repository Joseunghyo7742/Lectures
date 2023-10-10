//Immutable data types: premitive types, frozen objects
//Mutable data types: all objects by default

//[Local scoe]
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  console.log(childMessage) //error
}

//Class vs Object
//object-oriented programing

class Person{
  constructor(name,age){
    this.name=name;
    this.age= age;
  }
  get age(){
    return this._age;
  }
  set age(value){
    this._age= value;
  }
}
speak(){
  console.log('hello')
}

const ellie= new Person('ellie',20)


//Object
const obj1={} 
const obj2= new Object()
const sh= {age:20, job: "coder"}
sh.hasJob= false //뒤늦게 attribute 추가제거 가능 

//for..in vs for..of

//for (key in obj)
for (key in sh){
  console.log(key)
}

//for (value of iterable- 배열, 리스트)
const array=[1,2,4,5]
for(value of array){
  console.log(value)
}

//cloning
const user= {name: 'ellie', age:'20'}
user2.name= 'coder';
console.log(user) //coder 

//아예 복사하려면?
//old way
const user3={}
for(key in user){
  user3[key] = user[key]
}
console.clear()
console.log(user3)

//이런 방식
const user4= {}
Object.assign(user4,user)

const fruit1= {color:'red'}
const fruit2= {color:'blue', size:'big'}
const mixed= Object.assign({}, fruit1, fruit2)
console.log(mixed.color); //blue
console.log(mixed.size) //big