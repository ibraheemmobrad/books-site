//add book funktion
function add_book (book_id,book_name,book_path){
    let book = `<div id="book${book_id}">
    <li>
    <a href="${book_path}">${book_name}<a/>
    </li>
    </div>`;
    document.write(book)
}