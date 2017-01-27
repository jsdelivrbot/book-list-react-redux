export function selectBook(book){
    // selectBook is an ActionCreator that needs to return an ActionCreator
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}