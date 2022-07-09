const prompt = require("prompt-sync")()

class harry_pottar{
    constructor(data, libName){
        console.log(libName);
        this.books = data  
        this.users = {}  
    }

    showBooks(){
        let data1 = this.books
        for(let item of data1){
            console.log('\t',item)
        }
    }
    data_store(name, book,mobaile){
        const u = {
            Name : name,
            bookName:book
        }
        this.users[mobaile] = u
        console.log((this.users));
    }
}
let harry = new harry_pottar(["Harry Potter","The Love","The Mummy","Lokhnath","Lord of the files"],"WELCOME TO LIBRARY OF CONGRESS")

while (true) {
    console.log(`
        1 for borrow book 
        2 for exit
    `);
    harry.showBooks()
    const res = parseInt(prompt('enter your choice : '))
    if (res == 1) {
        const mobaile = prompt('Enter your mo number: ')
        const name = prompt('Enter your name : ')
        const book = prompt('Enter book name : ')
        harry.data_store(name, book, mobaile); 
    }else if (res == 2){
        break
    }
}

