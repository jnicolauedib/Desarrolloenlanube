class CarCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .car-card {
                    width: 100%;
                    border-radius: 10px;
                    overflow: hidden;
                }
                .car-image img {
                    width: 100%;
                    height: auto;
                }
                .car-info {
                    padding: 20px;
                }
                .car-name {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .car-price {
                    font-size: 18px;
                    color: var(--accent-color);
                }
            </style>
            <div class="car-card">
                <div class="car-image">
                    <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
                </div>
                <div class="car-info">
                    <div class="car-name">${this.getAttribute('name')}</div>
                    <div class="car-price">${this.getAttribute('price')}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('car-card', CarCard);

const featuredCars = [
    {
        name: 'Maserati GranTurismo',
        price: 'Starting at $150,000',
        image: 'https://images.unsplash.com/photo-1613565882622-915634693439?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Maserati MC20',
        price: 'Starting at $212,000',
        image: 'https://images.unsplash.com/photo-1629899380999-281098c2e98a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Maserati Levante',
        price: 'Starting at $84,700',
        image: 'https://images.unsplash.com/photo-1617013349265-f0934cc42d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const carList = document.getElementById('car-list');

featuredCars.forEach(car => {
    const carCard = document.createElement('car-card');
    carCard.setAttribute('name', car.name);
    carCard.setAttribute('price', car.price);
    carCard.setAttribute('image', car.image);
    carList.appendChild(carCard);
});
