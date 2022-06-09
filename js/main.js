/*const gato = new Vue({
    el: '#gatos',
    data: {
        gatos: [],
    },
    created() {
        this.fetchData('https://raw.githubusercontent.com/juan-pinzon/gatosJSON/master/cats.json');
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.gatos = data.Cats;
                });
        }
    }

});


// Language: javascript*/
const API_URL = 'https://raw.githubusercontent.com/juan-pinzon/gatosJSON/master/cats.json';

const HTMLResponse = document.querySelector('#cats');
const tpl = document.createElement('template');

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        tpl.innerHTML = `
            <ul>
                ${data.Cats.map(cat => `
                    <li>
                        <img src="${cat.Image}">
                        <h3>${cat.Name}</h3>
                        <p>${cat.Description}</p>
                        <p>${cat.WebSite}</p>
                    </li>
                `).join('')}
            </ul>
        `;
        HTMLResponse.appendChild(tpl.content);
    });

const buscar = document.querySelector('#buscar');
const boton = document.querySelector('#boton');

const filtrar = () => {
       // console.log(buscar.value);
       const texto = buscar.value.toLowerCase();
         const lista = document.querySelectorAll('li');
            lista.forEach(element => {
                const textoLi = element.textContent.toLowerCase();
                if(textoLi.includes(texto)){
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
}

boton.addEventListener('click', filtrar);
