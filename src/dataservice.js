export default {
    getProducts: function() {
        return [
            {id: '1', title: 'Titolo 1', description: 'Descrizione semplice'},
            {id: '2', title: 'Titolo 2', description: 'Descrizione semplice 2'},
            {id: '3', title: 'Titolo 3', description: 'Descrizione semplice altro'},
            {id: '4', title: 'Titolo 4', description: 'Descrizione semplice ancora'}
        ];
    },
    getProduct: function(id) {
        return this.getProducts().filter(p => id === p.id)[0];
    }
};