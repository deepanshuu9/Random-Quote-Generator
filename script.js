const btnE1 = document.getElementById('btn')
const apiURL = "https://api.quotable.io/random";
const quoteE1 = document.getElementById('quote');
const authorE1 = document.getElementById('author');

async function getQuote() {
    try {
        btnE1.innerHTML = 'Loading...';
        btnE1.disabled = true;
        quoteE1.innerText = 'Updaing...';
        authorE1.innerText = 'Updating...'
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteE1.innerText = quoteContent;
        authorE1.innerText = '~ ' + quoteAuthor;
        btnE1.innerHTML = 'Get a Quote';
        btnE1.disabled = false;
    } catch (error) {
        console.log(error);
        quoteE1.innerText = 'Error, Try again';
        authorE1.innerText = 'N/A';
        btnE1.disabled = false;
    }
}
getQuote();
btnE1.addEventListener('click', getQuote);
