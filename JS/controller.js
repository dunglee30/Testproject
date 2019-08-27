const controller = {}

controller.initapp = function () {
   
    let currentPath = utils.getParamPath()
    if(utils.isValidPath(currentPath)) {
      view.showComponents(currentPath)
    } else {
    model.removeActiveItems();
      view.showComponents(paths.homepage)
    }
}

controller.syncUrl = function(name, additionParams) {
    if(utils.getParamPath() != name) {
        let url = window.location.origin + window.location.pathname + utils.genParamPath(name)
        if(additionParams instanceof Object && Object.keys(additionParams).length) {
            url += `&${Object.keys(additionParams).map(function(key) {
                return `${key}=${additionParams[key]}`
            }).join('&')}`
        }
        window.location.assign(url)
    }
}


controller.loadItems = async function (items, type) {
    let result = await firebase.firestore().collection(items)
        .where('type', 'array-contains', type).get()
        console.log(result)
    if (model.activeProducts.length == 0) {
        let products = result.docs.map(function(doc){
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        model.saveProducts(products)
    } else {
        model.activeProducts = [];
        controller.loadItems(items, type);
    }
    return model.activeProducts;
}

controller.addProduct = async function(item){
    model.updateActiveItems(item);
}
controller.updateCarts = async function(email, date){
    let items = model.activeItems;
    // console.log(model.activeItems)
    
    // for(item of items){
    //     await firebase.firestore.collection('carts').doc(products).arrayUnion(item)
    // }
    // for(item of items){
    //     model.Carts.items.push(item);
    // }
    model.updateCarts(items, email, date);
    let cart = model.cart;
    controller.addMany('Carts', cart)
}

// controller.updateEmail = function(email){
    
// }

controller.addMany = async function(collectionName, items) {
    return Promise.all(items.map(item => {
        return firebase.firestore().collection(collectionName)
            .add(item)
    })).then(results => {
        return Promise.all(results.map(result => result.get()))
            .then(docs => docs.map(doc => {
                let item = doc.data()
                item.id = doc.id
                return item
            }))
    })
}

controller.removeItemFromCart = function(div, index){
    model.removeActiveItemsAtCartPage(index);
    div.innerHTML = ""
    view.showCart();
}

// async function test() {
//     let items = [{ name: 1, class: 12, days: 2}, {name: 2}]
//     let results = await controller.addMany('Carts', items)
//     console.log(results)
// }

// setTimeout(test, 400)