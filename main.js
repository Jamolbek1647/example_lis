console.log('JS')

// obyektlar
const person1=Object.create({}, {
    first_name:{
        value: 'Kamolbek',
        writable: true, //yozish yozishmasligi
        configurable: true,
        enumerable: true //ko'rsatish ko'rsatishmasligi
    },
    lastName:{
        value:'Ikromov'
    },
    age:{
        value: 25
    },
    birthYear:{
        get(){
            return new Date().getFullYear() - this.age;
        }
    }
}
);
console.log(person1)

//

const person2={
    first_name:'Jamolbek',
    age: 27,
    lastname:'Ikromov'
}

console.log(person2)

function Person(first_name, last_name, age){
    this.first_name=first_name;
    this.last_name=last_name;
    this.age=age;
};
const p1 = new Person('Axmad', 'Tolipoc', 25);
console.log(p1);

for (const key in person1){
    console.log(key)
    if (Object.hasOwnProperty.call(person1, key))
}