const goods = [
    { image: 'img/image21.jpg', url:'item.html', name: 'Mango People T-shirt 1', price: 51 },
    { image: 'img/image22.jpg', url:'item.html', name: 'Mango People T-shirt 2', price: 52 },
    { image: 'img/image23.jpg', url:'item.html', name: 'Mango People T-shirt 3', price: 53 },
    { image: 'img/layer24.png', url:'item.html', name: 'Mango People T-shirt 4', price: 54 },
    { image: 'img/image25.jpg', url:'item.html', name: 'Mango People T-shirt 5', price: 55 },
    { image: 'img/layer26.png', url:'item.html', name: 'Mango People T-shirt 6', price: 56 },
    { image: 'img/image27.jpg', url:'item.html', name: 'Mango People T-shirt 7', price: 57 },
    { image: 'img/image28.jpg', url:'item.html', name: 'Mango People T-shirt 8', price: 58 },
    { image: 'img/layer29.png', url:'item.html', name: 'Mango People T-shirt 9', price: 59 },
];
const renderItem = ({image, url, name, price}) => `<li class="catalog_li"><a class="a_item" href="${url}"><div class="product-img" style="background-image:url(${image})"></div><h4 class="item">${name}</h4><h4 class="price">$ ${price.toFixed(2)}</h4></a><a href="#" class="add">Add to cart</a><a href="#" class="re"></a><a href="#" class="like"></a></li>`;

    const renderList = items => {
    const itemsHtmls = items.map(renderItem).join("");
    document.querySelector('.catalog').innerHTML = itemsHtmls;
    };

    renderList(goods);

