const quotes = [
    {
        id:1,
        quote:'I have a dream',
        author:'Martin Luther King'
    },
    {
        id:2,
        quote:"To be or not to be, that is a question",
        author:'William Shakespeare'
    },
    {
        id:3,
        quote:"You don't understand it fully if you can't explain it simply",
        author:'Albert Einstein'
    }
]

let nextId = 4;

class QuotesService{
    list(){
        return quotes;
    }
    
    addNewQuote(newQuote){
        newQuote.id = nextId;   
        quotes.push(newQuote);
        nextId++;
    }
    deleteQuote(quote){
        let indexOfQuoteToDelete = quotes.indexOf(quote);
        quotes.splice(indexOfQuoteToDelete, 1);
    }
}

export const quotesService = new QuotesService;