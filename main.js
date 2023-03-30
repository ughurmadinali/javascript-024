1
//н'апишите в () консоли скрипта  код чтобы при ниже нужныйзапуске скрипта мы получили Alex' в консоли
let user1 = {
    name: 'Alex',
    age: 23,
    call: function() {
        console.log(this.name);
    }
}

user1.call(this.name);

2
//что выведет скрипт ниже в консоли?
let user2 = {
    name: 'Alex',
    age: 23,
    bag: {
        name: 'Marry',
        call: function() {
            console.log(this.name);
        }
    }
}

user2.call(console.log(this.name))

3
//можно ли использовать this в строгом режиме?

//нет покажет undefined


