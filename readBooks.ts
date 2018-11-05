//Opcional
//Uliza Typescript para a�adir los pos adecuados.
//4 Read books.

interface Book{
    title: string;
    isRead: boolean;
}

const booksTS: Book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canci�n de hielo y fuego", isRead: false},
    {title: "Devastaci�n", isRead: true},
    ];
    
    function isBookReadTS(books: Book[], titleToSearch: string) {
        let filtered: Book[] = books.filter(book => book.title === titleToSearch);
        if (typeof filtered[0] === "undefined")
            return false  
        else
            return filtered[0].isRead == true;
    }
    
    console.log(isBookReadTS(booksTS, "Devastaci�n")); // true
    console.log(isBookReadTS(booksTS, "Canci�n de hielo y fuego")); // false
    console.log(isBookReadTS(booksTS, "Los Pilares de la Tierra")); // false