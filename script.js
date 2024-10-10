document.getElementById('beauty-survey').addEventListener('submit', function(event) {
    event.preventDefault();

    const insecurity = document.getElementById('insecurity').value;
    const aspiration = document.getElementById('aspiration').value;

    // Muestra la sección de recomendaciones
    document.getElementById('recommendation-section').style.display = 'block';

    // Genera recomendaciones basadas en las respuestas (esto es un ejemplo básico)
    const products = [
        {
            name: 'L’Oréal Paris Revitalift',
            description: 'Crema anti-arrugas para una piel más firme y tonificada.',
            rating: 4.8,
            link: 'https://mercadolibre.com/revitalift'
        },
        {
            name: 'Maybelline New York Fit Me',
            description: 'Base líquida para una cobertura natural y sin brillo.',
            rating: 4.5,
            link: 'https://mercadolibre.com/fitme'
        }
    ];

    // Borrar recomendaciones anteriores
    document.getElementById('product-list').innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Calificación: </strong>${product.rating}</p>
            <a href="${product.link}" target="_blank">Comprar en Mercado Libre</a>
            <hr>
        `;
        document.getElementById('product-list').appendChild(productDiv);
    });
});
