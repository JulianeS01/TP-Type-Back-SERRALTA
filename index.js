"use strict";
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products) => {
    // Prepare table HTML
    let tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
    // Loop through all products to generate rows of the table
    products.forEach((p) => {
        tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
    });
    // Close table body
    tableHTML += '</tbody>';
    // Grab table element to set its inner HTML
    const tableElement = document.querySelector('#tableElement');
    if (tableElement) {
        tableElement.innerHTML = tableHTML;
    }
    // Hide spinner
    const spinnerElement = document.querySelector('#spinnerContainer');
    if (spinnerElement) {
        spinnerElement.style.display = 'none';
    }
});
