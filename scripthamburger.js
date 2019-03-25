class Hamburger {
    constructor(size, filling, flavoring, mayo) {
        this.size = size;
        this.filling = filling;
        this.flavoring = flavoring;
        this.mayo = mayo;
    }

    calculatePrice() {
        var result = 0;

        if (this.size === 'small') {
            result += 50;
        } else {
            result += 100;
        }
        switch(this.filling) {
            case 'cheese':
                result += 10;
                break;
            case 'salad':
                result += 20;
                break;
            case 'potatoes':
                result += 15;
                break;
        }

        if (this.flavoring === 'flavoring') {
            result += 15;
        }

        if (this.mayo === 'mayo') {
            result += 20;
        }

        return result;
    }

    calculateCalories() {
        var result = 0;

        if (this.size === 'small') {
            result += 20;
        } else {
            result += 40;
        }
        switch(this.filling) {
            case 'cheese':
                result += 20;
                break;
            case 'salad':
                result += 5;
                break;
            case 'potatoes':
                result += 10;
                break;
        }

        if (this.mayo === 'mayo') {
            result += 5;
        }

        return result;
    }
}

document.getElementById('submit').onclick = function() {
    var size = document.getElementById('size').value;
    var sauce = document.getElementById('filling').value;
    var flavoring = document.getElementById('flavoring').value; // если checkbox, то .checked
    var mayo = document.getElementById('mayo').value;

    var hamburger = new Hamburger(size, sauce, flavoring, mayo);
    document.getElementById('price').innerHTML = 'Итого: ' + String(hamburger.calculatePrice() + ' рублей');
    document.getElementById('calories').innerHTML = 'Всего калорий: ' + String(hamburger.calculateCalories() + ' калорий');
};


