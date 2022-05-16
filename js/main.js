const gato = new Vue({
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


// Language: javascript


    