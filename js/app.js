'use strict';

let seattle = {
    name: 'Seattle',
    minCustomers_h: 23, //Minimum Customers Per Hour
    maxCustomers_h: 65, //Maximum Customers Per Hour
    avgCookies_Customers: 6.3, //Average Cookies Per Hour
    customers_h: [], //Customers Per Hour
    cookiesPurchased_h: [],
    get_Customers_h: function(max, min) {
        this.customers_h = generate_Customers_h(max, min);
        return this.customers_h;

    },
    get_CookiesPurchased_h: function() {
        for (let j = 0; j < 14; j++) {
            Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

        }
        return this.cookiesPurchased_h;
    },
    totalOfCookies: function() {
        let total = 0;
        for (let x = 0; x < 14; x++)
            total = total + this.get_CookiesPurchased_h()[x];
        return total;
    },
    render: function() {
        const container = document.getElementById('seattle');
        console.log(container);
        const h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;
        const ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let x = 0; x < 14; x++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
        }
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`
    }
};


let tokyo = {
    name: 'Tokyo',
    minCustomers_h: 3, //Minimum Customers Per Hour
    maxCustomers_h: 24, //Maximum Customers Per Hour
    avgCookies_Customers: 1.2, //Average Cookies Per Hour
    customers_h: [], //Customers Per Hour
    cookiesPurchased_h: [],
    get_Customers_h: function(max, min) {
        this.customers_h = generate_Customers_h(max, min);
        return this.customers_h;

    },
    get_CookiesPurchased_h: function() {
        for (let j = 0; j < 14; j++) {
            Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

        }
        return this.cookiesPurchased_h;
    },
    totalOfCookies: function() {
        let total = 0;
        for (let x = 0; x < 14; x++)
            total = total + this.get_CookiesPurchased_h()[x];
        return total;
    },
    render: function() {
        const container = document.getElementById('tokyo');
        console.log(container);
        const h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;
        const ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let x = 0; x < 14; x++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
        }
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`
    }
};

let dubai = {
    name: 'Dubai',
    minCustomers_h: 11, //Minimum Customers Per Hour
    maxCustomers_h: 38, //Maximum Customers Per Hour
    avgCookies_Customers: 3.7, //Average Cookies Per Hour
    customers_h: [], //Customers Per Hour
    cookiesPurchased_h: [],
    get_Customers_h: function(max, min) {
        this.customers_h = generate_Customers_h(max, min);
        return this.customers_h;

    },
    get_CookiesPurchased_h: function() {
        for (let j = 0; j < 14; j++) {
            Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

        }
        return this.cookiesPurchased_h;
    },
    totalOfCookies: function() {
        let total = 0;
        for (let x = 0; x < 14; x++)
            total = total + this.get_CookiesPurchased_h()[x];
        return total;
    },
    render: function() {
        const container = document.getElementById('dubai');
        console.log(container);
        const h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;
        const ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let x = 0; x < 14; x++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
        }
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`
    }
};

let paris = {
    name: 'Paris',
    minCustomers_h: 20, //Minimum Customers Per Hour
    maxCustomers_h: 38, //Maximum Customers Per Hour
    avgCookies_Customers: 2.3, //Average Cookies Per Hour
    customers_h: [], //Customers Per Hour
    cookiesPurchased_h: [],
    get_Customers_h: function(max, min) {
        this.customers_h = generate_Customers_h(max, min);
        return this.customers_h;

    },
    get_CookiesPurchased_h: function() {
        for (let j = 0; j < 14; j++) {
            Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

        }
        return this.cookiesPurchased_h;
    },
    totalOfCookies: function() {
        let total = 0;
        for (let x = 0; x < 14; x++)
            total = total + this.get_CookiesPurchased_h()[x];
        return total;
    },
    render: function() {
        const container = document.getElementById('paris');
        console.log(container);
        const h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;
        const ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let x = 0; x < 14; x++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
        }
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`
    }
};

let lima = {
    name: 'Lima',
    minCustomers_h: 2, //Minimum Customers Per Hour
    maxCustomers_h: 16, //Maximum Customers Per Hour
    avgCookies_Customers: 4.6, //Average Cookies Per Hour
    customers_h: [], //Customers Per Hour
    cookiesPurchased_h: [],
    get_Customers_h: function(max, min) {
        this.customers_h = generate_Customers_h(max, min);
        return this.customers_h;

    },
    get_CookiesPurchased_h: function() {
        for (let j = 0; j < 14; j++) {
            Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

        }
        return this.cookiesPurchased_h;
    },
    totalOfCookies: function() {
        let total = 0;
        for (let x = 0; x < 14; x++)
            total = total + this.get_CookiesPurchased_h()[x];
        return total;
    },
    render: function() {
        const container = document.getElementById('lima');
        console.log(container);
        const h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;
        const ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let x = 0; x < 14; x++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
        }
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`
    }
};

seattle.get_Customers_h(seattle.maxCustomers_h, seattle.minCustomers_h);
tokyo.get_Customers_h(tokyo.maxCustomers_h, tokyo.minCustomers_h);
dubai.get_Customers_h(dubai.maxCustomers_h, dubai.minCustomers_h);
paris.get_Customers_h(paris.maxCustomers_h, paris.minCustomers_h);
lima.get_Customers_h(lima.maxCustomers_h, lima.minCustomers_h);


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function generate_Customers_h(max, min) {
    //generating a random number of customers per hour
    let customers_h = [];
    for (let i = 0; i < 14; i++) {
        customers_h.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return customers_h;
}

function time(index) {
    let times = [];
    let i = 6;
    for (i = 6; i < 12; i++) {
        if (i < 12) {
            let eachTime = (i + ' am: ');
            times.push(eachTime);

        }
    }
    times.push(i + ' pm: ');
    i = 1;
    for (i = 1; i < 8; i++) {
        {
            let eachTime = (i + ' pm: ');
            times.push(eachTime);
        }
    }

    return times[index];
};