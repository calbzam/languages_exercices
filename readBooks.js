//4 Read books.

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];
    
    function isBookRead(books, titleToSearch) {
        let filtered = books.filter(book => book.title === titleToSearch);
        if (typeof filtered[0] === "undefined")
            return false  
        else
            return filtered[0].isRead == true;
    }
    
    console.log(isBookRead(books, "Devastación")); // true
    console.log(isBookRead(books, "Canción de hielo y fuego")); // false
    console.log(isBookRead(books, "Los Pilares de la Tierra")); // false