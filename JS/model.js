const model = {
    currentItem:JSON.parse(localStorage.getItem('currentItem')) ||
    {
        name: null,
        size: null,
        color: null,
        quantity: null
    },
    currentItems: null,
    currentType: null,
    activeProducts: [],
    // activeItems: [{
    //     name: null,
    //     size: null,
    //     color: null,
    //     quantity: null
    // }],
    activeItems: JSON.parse(localStorage.getItem('activeItems'))
        || [{
            name: null,
            size: null,
            color: null,
            quantity: null
        }],
    cart: JSON.parse(localStorage.getItem('cart')) || {
        items: [{
            name: null,
            size: null,
            color: null,
            quantity: null
        }],
        email: null,
        date: null
    }
}
console.log(">>", model.activeItems)
model.saveProducts = function (products) {
    model.activeProducts = products;
    console.log(model.activeProducts);
}

model.updateActiveItems = function (item) {
    if (model.activeItems == []) {
        item.quantity = 1;
        model.activeItems[0] = item;
        localStorage.setItem('activeItems', JSON.stringify(model.activeItems))
    } else {
        item.quantity = 1;
        model.activeItems.push(item);
        localStorage.setItem('activeItems', JSON.stringify(model.activeItems))
    }
}
model.removeActiveItems = function(){
    model.activeItems = [];
    localStorage.setItem('activeItems', JSON.stringify(model.activeItems))
}
model.removeActiveItemsAtCartPage = function(index){
    let items = model.activeItems;
    // let index = items.findIndex(function(element){return element.id==item.id})
    items.splice(index, 1)
    localStorage.setItem('activeItems', JSON.stringify(model.activeItems))
}
model.updateCarts = function (items, email, date) {
    model.cart[0].items = items;
    model.cart[0].email = email;
    model.cart[0].date = date;
    localStorage.setItem('cart', JSON.stringify(model.cart))
}
model.updateQuantity = function(product, quantity) {
    for(let item of model.activeItems){
        if(product == item){
            item.quantity = quantity
            localStorage.setItem('activeItems', JSON.stringify(model.activeItems))
        }
    }
    // model.cart[0].quantity = quantity
    // localStorage.setItem('cart', JSON.stringify(model.cart))
}

// model.removeOneActiveIt

model.updateCurrentItem = function (item, items, type) {
    if (model.currentItem == null) {
        model.currentItem = item;
        model.currentItems = items;
        model.currentType = type;
        localStorage.setItem('currentItem', JSON.stringify(model.currentItem))
    } else {
        model.currentItem = null;
        model.currentItems = null;
        model.currentType = null;
        model.updateCurrentItem(item, items, type);
    }
    view.showComponents(paths.productpage)
    // view.showProduct(item)
}
