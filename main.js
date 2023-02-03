console.log('JS')

// obyektlar
const person1=Object.create({}, {
    first_name:{
        value: 'Kamolbek',
        writable: true
    },
    lastname:{
        value:'Ikromov'
    },
    age:{
        value: 24
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