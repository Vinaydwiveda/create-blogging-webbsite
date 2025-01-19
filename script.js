const postg = document.querySelector('.postg');
const hamburgerMenu = document.getElementById('hamburger-menu');
const profileMenu = document.getElementById('profile-menu');
const settingsOption = document.getElementById('settings-option');
const logoutoption = document.getElementById('logout-option');
const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');
const authorInput = document.getElementById('author');
const contextInput = document.getElementById('context');

// Blog Post Data
const blogPost = [
    {
        id: 1,
        quote: "The Health Benefits of Apples are often called nature’s perfect snack...",
        author: "Steve Jobs",
        context: "A reminder of the importance of health and wellness..."
    },
    {
        id: 2,
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        context: "A motivational push to believe in yourself..."
    },
    {
        id: 3,
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        context: "This quote teaches us resilience. It's not about never failing, but about continuing even when we do."
    },
    {
        id: 4,
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        context: "Your dreams are valid. They shape your future, so never stop believing in them."
    },
    
    
];

// Render Quotes
function renderQuotes() {
    postg.innerHTML = ""; // Clear previous quotes
    blogPost.forEach((post) => {
        const postElement = document.createElement('div');

        const quoteText = document.createElement('p');
        quoteText.textContent = `"${post.quote}"`;
        quoteText.style.fontStyle = 'italic';

        const quoteAuthor = document.createElement('p');
        quoteAuthor.textContent = `- ${post.author}`;
        quoteAuthor.style.textAlign = 'right';
        quoteAuthor.style.fontWeight = 'bold';

        const quoteContext = document.createElement('p');
        quoteContext.textContent = post.context;
        quoteContext.style.color = '#555';

        postElement.appendChild(quoteText);
        postElement.appendChild(quoteAuthor);
        postElement.appendChild(quoteContext);

        postg.appendChild(postElement);
    });
}

// Toggle Profile Menu
hamburgerMenu.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden');
});

// Settings Option
settingsOption.addEventListener('click', () => {
    const newColor = prompt("Enter a background color (e.g., #f0f0f0 or red):");
    if (newColor) {
        document.body.style.backgroundColor = newColor;
    }
});


logoutoption.addEventListener('click', () => {
    window.location.href = 'index.html';
});


// Add Quote from Editor
quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newQuote = {
        id: blogPost.length + 1,
        quote: quoteInput.value,
        author: authorInput.value,
        context: contextInput.value
    };
    blogPost.push(newQuote);
    renderQuotes();
    quoteForm.reset(); // Clear the form inputs
});

// Render quotes on page load
renderQuotes();
