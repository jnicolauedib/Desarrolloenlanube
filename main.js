class CarCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .card {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.1);
          font-family: sans-serif;
        }
        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 0 1rem 0;
        }
        .card-description {
          font-size: 1rem;
          color: #666;
        }
         button {
            background-color: var(--primary-color, #8400ff);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            margin-top: 1rem;
        }
        button:hover {
            background-color: var(--primary-color-dark, #6a00cc);
        }
      </style>
      <div class="card">
        <img class="card-image" src="" alt="Car Image">
        <div class="card-content">
          <h3 class="card-title"></h3>
          <p class="card-description"></p>
          <button>View Details</button>
        </div>
      </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['img', 'title', 'description'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'img') {
      this.shadowRoot.querySelector('.card-image').src = newValue;
      this.shadowRoot.querySelector('.card-image').alt = this.getAttribute('title') || 'Car Image';
    } else if (name === 'title') {
      this.shadowRoot.querySelector('.card-title').textContent = newValue;
    } else if (name === 'description') {
      this.shadowRoot.querySelector('.card-description').textContent = newValue;
    }
  }
}

customElements.define('car-card', CarCard);

const featuredCars = [
  {
    img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Luxury Sports Car',
    description: 'Experience the thrill of driving a high-performance luxury sports car. Power, beauty, and precision.'
  },
  {
    img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Modern Electric SUV',
    description: 'Go electric without compromising on space or style. Perfect for the family and the environment.'
  },
  {
    img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Classic Muscle Car',
    description: 'A timeless American classic. Feel the raw power and hear the iconic engine roar.'
  }
];

const container = document.querySelector('.car-card-container');

featuredCars.forEach(car => {
  const carCard = document.createElement('car-card');
  carCard.setAttribute('img', car.img);
  carCard.setAttribute('title', car.title);
  carCard.setAttribute('description', car.description);
  container.appendChild(carCard);
});
