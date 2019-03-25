// Задание 1. Добавить пустые классы и продумать какие методы понадобятся для работы с ними
/*
class TopCart{
    constructor () {
    }

// Инициализируем корзину
initTopCart {

}

// Добавляем в корзину заданное количество товара
addItems {
}

// Уменьшаем у товара количество в корзине
reduceItemsQty {

}
// Удаляем позиции из корзины
deleteItems  {

}

// Полностью очищаем корзину
clearTopCart {

}
// Сообщение о добавлении товара в корзину
showMessage {

}
// получаем разметку
render () {

*/



// задание 2, не стала создавать отдельный класс корзина, добавила метод как по заданию в GoodsList

class GoodsItem { 
    constructor(title, price) { 
        this.title = title; 
        this.price = price; 
    } 
    render(){ 
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`; 
    } 
}

class GoodsList { 
    constructor() { 
        this.goods = []; 
    } 
    fetchGoods() { 
        this.goods = [ 
            { title: 'Shirt', price: 150, qty: 2 }, 
            { title: 'Socks', price: 50, qty: 1 }, 
            { title: 'Jacket', price: 350, qty: 3 }, 
            { title: 'Shoes', price: 250, qty: 5 }, 
        ];
    } 
    getTotal() {
        this.sum = 0;
        for (this.i = 0; this.i < this.goods.length; this.i++) {
            this.sum = this.sum + this.goods[this.i].price * this.goods[this.i].qty;
        }
        return this.sum;
    }
    render() { 
        let listHtml = '';
        this.goods.forEach(good => { 
            const goodItem = new GoodsItem(good.title, good.price); 
            listHtml += goodItem.render(); 
        }); 

        document.querySelector('.goods-list').innerHTML = listHtml + 'Итого ' + this.getTotal() + ' руб'; 
    }

 }
const list = new GoodsList(); 
list.fetchGoods(); 
list.render();