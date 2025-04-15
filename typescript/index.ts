//annotations

let myname: string = "some string";
let favNumber: number = 6;

//type inference
//compiler automatically infers the type of the variable

let tech = "typescript";
//let tech =12 would throw an error

//any type
let color: any = "blue";
color = 20;
//this will lead to untypes code

//function parameters annotations
function addOne(num: number) {
  return num + 1;
}

//function return value annotations
function addTwo(num: number): number {
  return num + 2;
}

const addThree = (num: number): number => {
  return num + 3;
};

//void in typescript

function print(message: string): void {
  console.log(`${message}`);
}

//this function does not have any return

//never type
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}

//array annotations

const nums: number[] = [1, 3, 54, 0, 34];

//multidimensional array
const nums2D: number[][] = [
  [1, 2, 3],
  [6, 7, 8],
];

//Objects
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

function printUser :{ firstName: string; lastName: string; age: number } {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 25, 
    }
}

//type Aliases

type Person = {
    readonly name:string;
    age:number;
}

function printPerson (person:Person){
    console.log(person)
}

//Intersection Types
type People = {
  name:string;
  age:number;
}

type Employee = {
  id:number;
  title:String;
}

type User = People & Employee

//Unions

let password : string | number 

//Literal Types
let colorLiteral : 'red'|'green'|'aqua'

//Tuples
let myTuple : [number,string]
myTuple = [10,"string"]

//Enums
enum WeatherConditions {
  Sunny = 'sunny',Cloudy ='cloudy',Rainy ='rainy',snowy='snowy'
}

//Class Properties Annotations
class PersonObj{
  readonly name:string;
  age:number;

  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }

}

//access Modifiers
//public private and protected

class Student {
  public name:string
  public age:number

  constructor(name:string,age:number){
    this.name=name;
    this.age=age
  }
}

//for private the fields are only accessable in the class 

//for protected the fields are accessable in the class and the classes which extendes the parent class

//getters and setters
 class MyClass {
  private _myProperty : number=0;
  get myProperty():number{
    return this._myProperty
  }
  set myProperty(value:number){
    this._myProperty= value
  }
 }

 //Interface

 /*Interface is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code*/

 interface Computer {
  name:string;
  ram:number;
  hdd:number;
 }

 const computerExample : Computer ={
  name:'i7',
  ram:8,
  hdd:1000,
 }

 //interface for functions

 interface MathOperation {
  (x:number,y:number):number;
 }

//interfaces can be extended

interface laptop extends Computer{
  screen:number,
  batteryLife:number,
}

//Declaration merging 
/*Once an interface is declared it cannot be directly modified, but typescrpt allows what is informally knows as declaration mergin or interface extension , it refers to the ability to extend or augment an existing declaration including interfaces or methods to an existing interface without modifying the original declaration*/

//original interface
interface Car {
  brand:string;
  start():void;
}

//Declaration merging (interface extension)
interface Car {
  brand:string;
  stop():void;
}

const myCar : Car={
  brand:"BMW",
  start(){
    console.log('start')
  },
  stop(){
    console.log('stop')
  }
}

//Generics

/*In typescript generics allow you to create reusable components that can work with a variety of types. Genrics make it possible for you to define functions classes and intefaces that can work with different data types without having to duplicate code*/ 

function uniqueDataTypes<Type> (item:Type,defaultValue:Type):[Type,Type]{
  return [item,defaultValue]
}

//Type Narrowing

/*Type Narrowing is the process of refining a variables's type within a conditional block on code . this allows you to write a more precise and typesafe code */

//Type guards

//typeof operator
type Mytype = string|number

function exampleFunction (value:Mytype):void{
  if(typeof value === 'string'){
    console.log(value.toLowerCase());
    
  }
  else{
    console.log(value.toFixed(2));
    
  }
}

// instanceof operator

class Dog{
  bark():void{
    console.log("woof")
  }
}

class Cat{
  meow():void{
    console.log('meow');
    
  }
}

function animalSound(animal:Dog|Cat):void{
  if(animal instanceof Dog){
    animal.bark()
  }else{
    animal.meow()
  }
}

