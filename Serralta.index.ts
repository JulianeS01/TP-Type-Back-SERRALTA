type Rating = {
    count: number;
    rate: number;
};

type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
};

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products: Product[]) => {
        // Prepare table HTML
        let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
        // Loop through all products to generate rows of the table
        products.forEach((p: Product) => {
            tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
        });
        // Close table body
        tableHTML += '</tbody>';
        // Grab table element to set its inner HTML
        const tableElement: HTMLElement | null = document.querySelector('#tableElement');
        if (tableElement) {
            tableElement.innerHTML = tableHTML;
        }
        // Hide spinner
        const spinnerElement: HTMLElement | null = document.querySelector('#spinnerContainer');
        if (spinnerElement) {
            spinnerElement.style.display = 'none';
        }
    });
  