console.log('outside the object', this);
const frankie = {
    name: 'Frankie',
    age: 0,
    likes: ['cuddling', 'chasing string', 'napping'],
    goodWithOtherCats: true,
    goodWithKids: false,
    goodWithDogs: false,
    breed: 'British Short hair',
    imagePath: './images/frankie.jpeg',
    getAge: function(min, max) {
        console.table(this);
        this.age = getRandomNumber(min, max);
    },
    render: function() {
        const container = document.getElementById('kitten-profiles');
        console.log(container);
        /*
           <!-- <article>
              <h2>frankie</h2>
              <p>Frankie is adorable, and is 4 months old.</p>
              <ul>
                <li>cuddling</li>
                <li>chasing string</li>
              </ul>
              <img src="images/frankie.jpeg" />
            </article> -->
        */
        //1 create element
        //2 append the element to its parent
        //3 add text content to the element || attributes
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        const pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `${this.name} is adorable and is ${this.age} months old.`;
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.likes.length; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = this.likes[i];
        }
        const imgEl = document.createElement('img');
        articleEl.appendChild(imgEl);
        imgEl.setAttribute('src', this.imagePath);
    },
};
// helper functions

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(frankie.getAge(3, 10));
frankie.render();