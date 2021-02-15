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
}

Cookies.prototype.get_Customers_h = function () {
    let customers_h = [];
    for (let i = 0; i < 14; i++) {
        customers_h.push(Math.floor(Math.random() * (this.maxCustomers_h - this.minCustomers_h + 1)
            + this.minCustomers_h));
    }

    return customers_h;
},
Cookies.prototype.get_CookiesPurchased_h = function () {
    let cookiesQuantity = [];
    for (let j = 0; j < 14; j++) {
        Math.round(cookiesQuantity.push(this.customers_h[j] * this.avgCookies_Customers));

    }
    return cookiesQuantity;
},
Cookies.prototype.totalOfCookies = function () {
    let total = 0;
    for (let x = 0; x < 14; x++)
        total = total + this.get_CookiesPurchased_h()[x];
    return total;
},
Cookies.prototype.render = function () {
    const container = document.getElementById('seattle');
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
    liEl.textContent = `Total: ${Math.round(this.totalOfCookies())}`;
};


function time(index) {
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

    return times[index];
}
var seattle = new Cookies('Seattle', 23, 65, 6.3);
var tokyo = new Cookies('Tokyo', 3, 24, 1.2);
var dubi = new Cookies('Dubi', 11, 38, 3.7);
var paris = new Cookies('Paris', 20, 38, 2.3);
var lima = new Cookies('Lima', 3, 24, 1.2);


seattle.render();
tokyo.render();
dubi.render();
paris.render();
lima.render();


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
let locations = [seattle, tokyo, dubi, paris, lima];
Cookies.prototype.render = function () {
    const container = document.getElementById('seattle');
    const tableEl = document.createElement('table');
    container.appendChild(tableEl);
    const tableRow1 = document.createElement('tr');
    tableEl.appendChild(tableRow1);
    const tableHeader1 = document.createElement('th');
    tableRow1.appendChild(tableHeader1);
    tableHeader1.textContent = 'Locations';
    for (let i = 0; i<14;i++){
        const tableHeader2 = document.createElement('th');
        tableRow1.appendChild(tableHeader2);
        tableHeader2.textContent = `${time(i)}`;
    }
    const tableHeader3 = document.createElement('th');
    tableRow1.appendChild(tableHeader3);
    tableHeader3.textContent = 'Location Total';
    const tableRow2 = document.createElement('tr');
    tableEl.appendChild(tableRow2);
    const tableData = document.createElement('td');
    tableRow2.appendChild(tableData);
    tableData.textContent = 'Seattle';
    // for (let j = 0 ; j < 5 ;j++){
    // const tableRow2 = document.createElement('tr');
    // tableEl.appendChild(tableRow2);
    // const tableData = document.createElement('td');
    // tableRow2.appendChild(tableData);
    // tableData.textContent = 'Seattle';
    for (let i = 0 ; i < 14 ; i++){
        const tableData = document.createElement('td');
        tableRow2.appendChild(tableData);
        tableData.textContent = `${Math.round(seattle.cookiesPurchased_h[i])}`;
    }
    // }

};



