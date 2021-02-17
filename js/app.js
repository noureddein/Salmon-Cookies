'use strict';

// let seattle = {
//     name: 'Seattle',
//     minCustomers_h: 23, //Minimum Customers Per Hour
//     maxCustomers_h: 65, //Maximum Customers Per Hour
//     avgCookies_Customers: 6.3, //Average Cookies Per Hour
//     customers_h: [], //Customers Per Hour
//     cookiesPurchased_h: [],
//     get_Customers_h: function(max, min) {
//         this.customers_h = generate_Customers_h(max, min);
//         return this.customers_h;

//     },
//     get_CookiesPurchased_h: function() {
//         for (let j = 0; j < 14; j++) {
//             Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

//         }
//         return this.cookiesPurchased_h;
//     },
//     totalOfCookies: function() {
//         let total = 0;
//         for (let x = 0; x < 14; x++)
//             total = total + this.get_CookiesPurchased_h()[x];
//         return total;
//     },
//     render: function() {
//         const container = document.getElementById('seattle');
//         console.log(container);
//         const h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let x = 0; x < 14; x++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`;
//     }
// };


// let tokyo = {
//     name: 'Tokyo',
//     minCustomers_h: 3, //Minimum Customers Per Hour
//     maxCustomers_h: 24, //Maximum Customers Per Hour
//     avgCookies_Customers: 1.2, //Average Cookies Per Hour
//     customers_h: [], //Customers Per Hour
//     cookiesPurchased_h: [],
//     get_Customers_h: function(max, min) {
//         this.customers_h = generate_Customers_h(max, min);
//         return this.customers_h;

//     },
//     get_CookiesPurchased_h: function() {
//         for (let j = 0; j < 14; j++) {
//             Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

//         }
//         return this.cookiesPurchased_h;
//     },
//     totalOfCookies: function() {
//         let total = 0;
//         for (let x = 0; x < 14; x++)
//             total = total + this.get_CookiesPurchased_h()[x];
//         return total;
//     },
//     render: function() {
//         const container = document.getElementById('tokyo');
//         console.log(container);
//         const h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let x = 0; x < 14; x++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`;
//     }
// };

// let dubai = {
//     name: 'Dubai',
//     minCustomers_h: 11, //Minimum Customers Per Hour
//     maxCustomers_h: 38, //Maximum Customers Per Hour
//     avgCookies_Customers: 3.7, //Average Cookies Per Hour
//     customers_h: [], //Customers Per Hour
//     cookiesPurchased_h: [],
//     get_Customers_h: function(max, min) {
//         this.customers_h = generate_Customers_h(max, min);
//         return this.customers_h;

//     },
//     get_CookiesPurchased_h: function() {
//         for (let j = 0; j < 14; j++) {
//             Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

//         }
//         return this.cookiesPurchased_h;
//     },
//     totalOfCookies: function() {
//         let total = 0;
//         for (let x = 0; x < 14; x++)
//             total = total + this.get_CookiesPurchased_h()[x];
//         return total;
//     },
//     render: function() {
//         const container = document.getElementById('dubai');
//         console.log(container);
//         const h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let x = 0; x < 14; x++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`;
//     }
// };

// let paris = {
//     name: 'Paris',
//     minCustomers_h: 20, //Minimum Customers Per Hour
//     maxCustomers_h: 38, //Maximum Customers Per Hour
//     avgCookies_Customers: 2.3, //Average Cookies Per Hour
//     customers_h: [], //Customers Per Hour
//     cookiesPurchased_h: [],
//     get_Customers_h: function(max, min) {
//         this.customers_h = generate_Customers_h(max, min);
//         return this.customers_h;

//     },
//     get_CookiesPurchased_h: function() {
//         for (let j = 0; j < 14; j++) {
//             Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

//         }
//         return this.cookiesPurchased_h;
//     },
//     totalOfCookies: function() {
//         let total = 0;
//         for (let x = 0; x < 14; x++)
//             total = total + this.get_CookiesPurchased_h()[x];
//         return total;
//     },
//     render: function() {
//         const container = document.getElementById('paris');
//         console.log(container);
//         const h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let x = 0; x < 14; x++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`;
//     }
// };

// let lima = {
//     name: 'Lima',
//     minCustomers_h: 2, //Minimum Customers Per Hour
//     maxCustomers_h: 16, //Maximum Customers Per Hour
//     avgCookies_Customers: 4.6, //Average Cookies Per Hour
//     customers_h: [], //Customers Per Hour
//     cookiesPurchased_h: [],
//     get_Customers_h: function(max, min) {
//         this.customers_h = generate_Customers_h(max, min);
//         return this.customers_h;

//     },
//     get_CookiesPurchased_h: function() {
//         for (let j = 0; j < 14; j++) {
//             Math.round(this.cookiesPurchased_h.push(this.customers_h[j] * this.avgCookies_Customers));

//         }
//         return this.cookiesPurchased_h;
//     },
//     totalOfCookies: function() {
//         let total = 0;
//         for (let x = 0; x < 14; x++)
//             total = total + this.get_CookiesPurchased_h()[x];
//         return total;
//     },
//     render: function() {
//         const container = document.getElementById('lima');
//         console.log(container);
//         const h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.name;
//         const ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let x = 0; x < 14; x++) {
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
//         }
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`;
//     }
// };

// seattle.get_Customers_h(seattle.maxCustomers_h, seattle.minCustomers_h);
// tokyo.get_Customers_h(tokyo.maxCustomers_h, tokyo.minCustomers_h);
// dubai.get_Customers_h(dubai.maxCustomers_h, dubai.minCustomers_h);
// paris.get_Customers_h(paris.maxCustomers_h, paris.minCustomers_h);
// lima.get_Customers_h(lima.maxCustomers_h, lima.minCustomers_h);


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

// function generate_Customers_h(max, min) {
//     //generating a random number of customers per hour
//     let customers_h = [];
//     for (let i = 0; i < 14; i++) {
//         customers_h.push(Math.floor(Math.random() * (max - min + 1) + min));
//     }

//     return customers_h;
// }

// function time(index) {
//     let times = [];
//     let i = 6;
//     for (i = 6; i < 12; i++) {
//         if (i < 12) {
//             let eachTime = (i + ' am: ');
//             times.push(eachTime);

//         }
//     }
//     times.push(i + ' pm: ');
//     i = 1;
//     for (i = 1; i < 8; i++) {
//         {
//             let eachTime = (i + ' pm: ');
//             times.push(eachTime);
//         }
//     }

//     return times[index];
// }

// Lab 07
const container = document.getElementById('seattle');
const tableEl = document.createElement('table');
container.appendChild(tableEl);

function Cookies(
    name,
    minCustomers_h,
    maxCustomers_h,
    avgCookies_Customers
) {
    this.name = name;
    this.minCustomers_h = minCustomers_h;
    this.maxCustomers_h = maxCustomers_h;
    this.avgCookies_Customers = avgCookies_Customers;
    this.customers_h = this.get_Customers_h(this.maxCustomers_h, this.minCustomers_h);
    this.cookiesPurchased_h = this.get_CookiesPurchased_h(this.customers_h, this.avgCookies_Customers);
    this.totalCookiesSold = this.totalOfCookies();
    // this.totalCookiesEach_h = this.get_TotalCookiesEach_h;
}

Cookies.prototype.get_Customers_h = function () {
    let customers_h = [];
    for (let i = 0; i < 14; i++) {
        customers_h.push(Math.floor(Math.random() * (this.maxCustomers_h - this.minCustomers_h + 1)
            + this.minCustomers_h));
    }

    return customers_h;
};
Cookies.prototype.get_CookiesPurchased_h = function () {
    let cookiesQuantity = [];
    for (let j = 0; j < 14; j++) {
        cookiesQuantity.push(Math.round(this.customers_h[j] * this.avgCookies_Customers));

    }
    return cookiesQuantity;
};
Cookies.prototype.totalOfCookies = function () {
    let total = 0;
    for (let x = 0; x < 14; x++)
        total = total + this.cookiesPurchased_h[x];
    return total;
};
Cookies.prototype.render = function () {
    // const container = document.getElementById('seattle');
    // const h2El = document.createElement('h2');
    // container.appendChild(h2El);
    // h2El.textContent = this.name;
    // const ulEl = document.createElement('ul');
    // container.appendChild(ulEl);
    // for (let x = 0; x < 14; x++) {
    //     liEl.textContent = `${time(x)} ${Math.round(this.get_CookiesPurchased_h()[x])} `;
    // }
    // const liEl = document.createElement('li');
    // ulEl.appendChild(liEl);
    // liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`;
};
function time() {
    let times = [];
    let i = 6;
    for (i = 6; i < 12; i++) {
        if (i < 12) {
            let eachTime = (i + ' AM');
            times.push(eachTime);

        }
    }
    times.push(i + ' PM');
    i = 1;
    for (i = 1; i < 8; i++) {
        {
            let eachTime = (i + ' PM');
            times.push(eachTime);
        }
    }

    return times;
}
/* <table id="tableEl">
        <tr id="tableRow">
            <th>

            </th>
        </tr>
        <tr>
            <td>
            </td>
        </tr>
    </table> */
var seattle = new Cookies('Seattle', 23, 65, 6.3);
var tokyo = new Cookies('Tokyo', 3, 24, 1.2);
var dubi = new Cookies('Dubi', 11, 38, 3.7);
var paris = new Cookies('Paris', 20, 38, 2.3);
var lima = new Cookies('Lima', 3, 24, 1.2);

let locations = [seattle, tokyo, dubi, paris, lima];
Cookies.prototype.renderHeader = function () {
    // First Header : Row 1
    const tableRow1 = document.createElement('tr');
    tableEl.appendChild(tableRow1);
    const tableHeader1 = document.createElement('th');
    tableRow1.appendChild(tableHeader1);
    tableHeader1.textContent = 'Locations';
    for (let i = 0; i < 14; i++) {
        const tableHeader2 = document.createElement('th');
        tableRow1.appendChild(tableHeader2);
        tableHeader2.textContent = `${time()[i]}`;
    }
    const tableHeader3 = document.createElement('th');
    tableRow1.appendChild(tableHeader3);
    tableHeader3.textContent = 'Location Total';
    //End Of Header 1
};
// Row 2

Cookies.prototype.renderBody = function () {
    this.get_Customers_h();
    this.get_CookiesPurchased_h();
    this.totalOfCookies();
    const tableRow2 = document.createElement('tr');
    tableEl.appendChild(tableRow2);
    for (let j = 0; j < 5; j++) {
        const tableRow2 = document.createElement('tr');
        tableEl.appendChild(tableRow2);
        const tableData = document.createElement('td');
        tableRow2.appendChild(tableData);
        tableData.textContent = locations[j].name;
        let sum = 0;
        for (let i = 0; i < 14; i++) {
            const tableData = document.createElement('td');
            tableRow2.appendChild(tableData);
            tableData.textContent = `${Math.round(locations[j].cookiesPurchased_h[i])}`;
            sum = sum + Math.round(locations[j].cookiesPurchased_h[i]);
        }
        const totalLocation = document.createElement('td');
        tableRow2.appendChild(totalLocation);
        totalLocation.textContent = sum;
    }

    const footerRow = document.createElement('tr');
    tableEl.appendChild(footerRow);
    const footerTableData = document.createElement('td');
    footerRow.appendChild(footerTableData);
    footerTableData.textContent = 'Hourly Total';
    for (let i = 0; i < 14; i++) {
        const tableData = document.createElement('td');
        footerRow.appendChild(tableData);
        tableData.textContent = `${totalEach_h(i)}`;
    }
    const totalOfLocationsTotals = document.createElement('td');
    footerRow.appendChild(totalOfLocationsTotals);
    totalOfLocationsTotals.textContent = `${locationTotal()}`;
};


seattle.renderHeader();
seattle.renderBody();


function totalEach_h(index) {
    let totalSum = [];
    for (let i = 0; i < 14; i++) {
        let sum = 0;
        sum = sum + seattle.cookiesPurchased_h[i] +
            tokyo.cookiesPurchased_h[i] +
            dubi.cookiesPurchased_h[i] +
            paris.cookiesPurchased_h[i] +
            lima.cookiesPurchased_h[i];
        totalSum.push(sum);
    }
    return totalSum[index];
}

function locationTotal() {
    let totalOfAllLocations = [];
    let sum = 0;
    totalOfAllLocations.push(seattle.totalCookiesSold);
    totalOfAllLocations.push(tokyo.totalCookiesSold);
    totalOfAllLocations.push(dubi.totalCookiesSold);
    totalOfAllLocations.push(paris.totalCookiesSold);
    totalOfAllLocations.push(lima.totalCookiesSold);
    for (let j = 0; j < 5; j++) {
        sum = sum + totalOfAllLocations[j];
    }
    return sum;
}
console.log(totalEach_h(13));
console.log(locationTotal());
