let str: string = "abc";

class Cat{
    name: string;
    age: number;

    constructor(name1: string, age1: number) {
        this.name = name1;
        this.age = age1;
    } 

}

let myCat: Cat = new Cat("Fluffy", 2);

function getAge(kitten: Cat):number {
    return kitten.age
}

getAge({ a: "dsfsdfdg"});

// 1. make a class dog
// 2. make a function which says how long a cat should live, cats are living 10 years: homManyYearsLeft
// the same for dog, lives 15 years
// make a function which accepts those functions