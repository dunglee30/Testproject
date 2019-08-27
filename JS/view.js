const view = {}
view.showComponents = function (name) {
    let app = document.getElementById('app')
    app.innerHTML = maincomponents.header
    app.innerHTML += maincomponents.navBar
    app.innerHTML += maincomponents.field
    switch (name) {
    // main Components
        case paths.homepage: {
            controller.syncUrl(paths.homepage)

            app.innerHTML += maincomponents.homepage
            app.innerHTML += maincomponents.footer

            // let men = new Array();
            // let i=0;
            // while(app.innerHTML){
            //     men[i] = document.getElementsByName('men');
            //     i++;
            // }
            interface.navBarHandler();
            interface.homepageHandler();
            break
        }

    // Men components
        case paths.menpage: {
            controller.syncUrl(paths.menpage)

            app.innerHTML += mencomponents.menpage
            app.innerHTML += maincomponents.footer

            interface.navBarHandler();
            meninterface.menpageHandler();
            view.showfield('Men')
            break;
        }

        case paths.mentopspage: {
            controller.syncUrl(paths.mentopspage)

            app.innerHTML += maincomponents.topspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Men')
            view.showItems('shirts', 'men')
            interface.navBarHandler();

            break;
        }
        case paths.menjeanspage: {
            controller.syncUrl(paths.menjeanspage)

            app.innerHTML += maincomponents.jeanspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Men')
            view.showItems('jeans', 'men')
            interface.navBarHandler();

            break;
        }
        case paths.menshoespage: {
            controller.syncUrl(paths.menshoespage)

            app.innerHTML += maincomponents.shoespage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Men')
            view.showItems('shoes', 'men')
            interface.navBarHandler();

            break;
        }
        case paths.menjacketpage: {
            controller.syncUrl(paths.menjacketpage)

            app.innerHTML += maincomponents.jacketpage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Men')
            view.showItems('jacket', 'men')
            interface.navBarHandler();
            break;
        }

    // women components
        case paths.womenpage: {
            controller.syncUrl(paths.womenpage)

            app.innerHTML += womencomponents.womenpage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Women')
            interface.navBarHandler();
            womeninterface.womenpageHandler();

            break;
        }
        case paths.womentopspage: {
            controller.syncUrl(paths.womentopspage)

            app.innerHTML += maincomponents.topspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Women')
            view.showItems('shirts', 'women')
            interface.navBarHandler();

            break;
        }
        case paths.womenjeanspage: {
            controller.syncUrl(paths.womenjeanspage)

            app.innerHTML += maincomponents.jeanspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Women');
            view.showItems('jeans', 'women')
            interface.navBarHandler();

            break;
        }
        case paths.womenjacketpage: {
            controller.syncUrl(paths.womenjacketpage)

            app.innerHTML += maincomponents.jacketpage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Women');
            view.showItems('jacket', 'women')
            interface.navBarHandler();
            break;
        }
        case paths.womenshoespage: {
            controller.syncUrl(paths.womenshoespage)

            app.innerHTML += maincomponents.shoespage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Women');
            view.showItems('shoes', 'women')
            interface.navBarHandler();
            break;
        }

        //


    //kids components
        case paths.kidspage: {
            controller.syncUrl(paths.kidspage)

            app.innerHTML += kidscomponents.kidspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Kids')
            interface.navBarHandler();
            kidsinterface.kidspageHandler();

            break;
        }
        case paths.kidstopspage: {
            controller.syncUrl(paths.kidstopspage)

            app.innerHTML += maincomponents.topspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Kids')
            view.showItems('shirts', 'kids')
            interface.navBarHandler();

            break;
        }
        case paths.kidsjeanspage: {
            controller.syncUrl(paths.kidsjeanspage)

            app.innerHTML += maincomponents.jeanspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Kids');
            view.showItems('jeans', 'kids')
            interface.navBarHandler();

            break;
        }
        case paths.kidsjacketpage: {
            controller.syncUrl(paths.kidsjacketpage)

            app.innerHTML += maincomponents.jacketpage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Kids');
            view.showItems('jacket', 'kids')
            interface.navBarHandler();
            break;
        }
        case paths.kidsshoespage: {
            controller.syncUrl(paths.kidsshoespage)

            app.innerHTML += maincomponents.shoespage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Kids');
            view.showItems('shoes', 'kids')
            interface.navBarHandler();
            break;
        }
        //

    //collection components
        case paths.collectionspage: {
            controller.syncUrl(paths.collectionspage)

            app.innerHTML += collectionscomponents.collectionspage;
            app.innerHTML += maincomponents.footer;


            interface.navBarHandler();
            collectionsinterface.collectionpageHandler()
            view.showfield('Collections')
            break;
        }
        case paths.collectionstopspage: {
            controller.syncUrl(paths.collectionstopspage)

            app.innerHTML += maincomponents.topspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Collections')
            view.showItems('shirts', 'collections')
            interface.navBarHandler();

            break;
        }
        case paths.collectionsjeanspage: {
            controller.syncUrl(paths.collectionsjeanspage)

            app.innerHTML += maincomponents.jeanspage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Collections');
            view.showItems('jeans', 'collections')
            interface.navBarHandler();

            break;
        }
        case paths.collectionsjacketpage: {
            controller.syncUrl(paths.collectionsjacketpage)

            app.innerHTML += maincomponents.jacketpage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Collections');
            view.showItems('jacket', 'collections')
            interface.navBarHandler();
            break;
        }
        case paths.collectionsshoespage: {
            controller.syncUrl(paths.collectionsshoespage)

            app.innerHTML += maincomponents.shoespage;
            app.innerHTML += maincomponents.footer;
            view.showfield('Collections');
            view.showItems('shoes', 'collections')
            interface.navBarHandler();
            break;
        }
        //

    //Cart page
        case paths.cartpage: {
            controller.syncUrl(paths.cartpage, {
                id: model.currentItem ? model.currentItem.id : '',
                items: model.currentItems,
                type: model.currentType
            })
            console.log(model.activeItems)

            app.innerHTML += maincomponents.cartpage;
            app.innerHTML += maincomponents.footer;
            view.showCart();

            let formbuy = document.getElementById('form-buy')
            formbuy.onsubmit = formSubmitHandler;

            async function formSubmitHandler(e) {
                e.preventDefault();
                let email = formbuy.email.value
                let date = new Date().toISOString()
                // for(let item of model.activeItems){
                //     let index = model.activeItems.indexOf(item)
                //     let quantity = document.getElementById('item+${}')
                //     item.quantity = formbuy.${index}+quantity.value
                //     console.log(item.quantity)
                // }
                // let i = 0;
                // let quantity = document.getElementsByName('quantity')
                // console.log(quantity[0].innerHTML)
                // for(let item of model.activeItems){
                //     // let i = 0;
                //     item.quantity = quantity[i].innerHTML;
                //     i++;
                // }
                try {
                    if (model.cart.items == [] || !validateEmail(email)) {
                        throw new Error(`Please fill the all the information including email or produts`)
                    } await controller.updateCarts(email, date);
                    window.alert('Your purchase is succeed');
                } catch (error) {
                    window.alert(error.message);
                }
                // await controller.updateCarts(email, date);
                model.removeActiveItems();
            }
            interface.navBarHandler();

            break;
        }

    // product page
        case paths.productpage: {
            controller.syncUrl(paths.productpage, {
                id: model.currentItem ? model.currentItem.id : '',
                items: model.currentItems,
                type: model.currentType
            })

            app.innerHTML += maincomponents.productpage;
            app.innerHTML += maincomponents.footer;

            interface.navBarHandler();
            let urlSearch = new URLSearchParams(location.search)
            view.showCurrentProduct(urlSearch.get('items'), urlSearch.get('type'))

            break;
        }
    }
}
view.showfield = function (field) {
    console.log('category' + field)
    let html = `
                <span style = "
                display: flex;
                align-items: center;">${field}</span> 
            `
    let fields = document.getElementById('field');
    fields.innerHTML += html;
}

view.showItems = async function (items, type) {
    let products = await controller.loadItems(items, type);
    let container = document.getElementById('container')
    if (container) {
        container.innerHTML = ""
        for (let product of products) {
            let html = `
                <div class = "area">
                    <div class = "area-container" id = "${product.id}">
                        <div class = "item-area">
                            <img src = "" class = "item-image">
                            <div class = "item-info">
                                <span class = "item-name">${product.name}</span>
                                <span class = "item-price">${product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
            container.innerHTML += html;
        }
    }
    for (let product of products) {
        let div = document.getElementById(product.id)
        div.onclick = function () {
            model.updateCurrentItem(product, items, type);
        };

    }
}

view.showCurrentProduct = async function (items, type) {
    let products = await controller.loadItems(items, type);
    console.log(products);
    let productcontainer = document.getElementById('product-container')
    productcontainer.innerHTML = "";
    let id = new URLSearchParams(location.search).get('id')
    let product = products.find(p => p.id == id);
    let html = `
        <form class = "form-add-to-cart" id = "add-to-cart">
            <div class = "product-image">
                <img src ="">
            </div>
            <div class = "product-info">
                <span class = "product-name">${product.name}</span>
                <select class = "product-size" id = "size-container" name = "size">Size</select>
                <select class = "product-color" id = "product-color" name = "color">Color</select>
                <span class = "product-price">${product.price}</span>
                <button class = "add-to-cart" id = "add"> Add to Cart</button>
            </div>
        </form>
    `
    productcontainer.innerHTML += html;
    let sizeContainer = document.getElementById('size-container')
    sizeContainer.innerHTML = ""
    for (let size of product.size) {
        let html = `
            <option class = "size" id = "${size.id}"> ${size}</option>
        `
        sizeContainer.innerHTML += html;
    }

    let colorContainer = document.getElementById('product-color')
    colorContainer.innerHTML = "";
    for (let color of product.color) {
        let html = `
            <option class = "color" id = "${color.id}"> ${color}</option>
        `
        colorContainer.innerHTML += html;
    }

    let formAddToCart = document.getElementById('add-to-cart');
    formAddToCart.onsubmit = function (e) {
        e.preventDefault()
        let count = 0;
        product.color = [];
        product.size = [];
        product.color[0] = formAddToCart.color.value
        product.size[0] = formAddToCart.size.value
        model.updateCurrentItem(product, items, type)
        let product1 = model.currentItem;
        // for (let item of model.activeItems) {
        //     if ((product1.id == item.id) && (product1.size[0] == item.size[0])) {
        //         if ((product1.color[0] == item.color[0])) {
        //             console.log(product);
        //             count++;
        //         }
        //     }
        // }
        // if (count > 0) { window.alert('Your item is currently in cart. please move to cart to change the quantity') }
        // else 
        controller.addProduct(product1);
    }
}
function validateEmail(email) {
    let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && regEmail.test(email);
}

view.showCart = function () {
    let cartinfo = document.getElementById('cart-info')
    for (let item of model.activeItems) {
        let index = model.activeItems.indexOf(item)
        let html = `
            <div class = "items-container">
                <div class = "item-area">
                    <div class = "item-image">
                        <img class = "img" src ="">
                        <div class = "item-info"">
                            <div class = "item-name"> ${item.name}</div>
                            <div class = "item-price"> ${item.price}</div>
                            <div class = "item-color"> ${item.color}</div>
                            <div class = "item-size"> ${item.size}</div>
                            <input type = "number" class = "quantity-container id = "${item.id}" name = "quantity" placeholder = "Select quantity of the item">
                            <button class = "remove-btn" id = "${index}"> Remove </button>                        
                        </div>
                    </div>
                </div>
            </div>
        `
        cartinfo.innerHTML += html;
    }
    for (let item of model.activeItems) {
        let index = model.activeItems.indexOf(item)
        let div1 = document.getElementById(index);
        // let index = model.activeItems.findIndex(function(element){return element.id==item.id})
        div1.onclick = div1ClickHandler
        function div1ClickHandler() {
            controller.removeItemFromCart(cartinfo, index);
            // div1.onclick = null;
            // view.showCart()  
        }
    }
    // for (let item of model.activeItems) {
    //     let div = document.getElementById('number')
    //     div.onsubmit = function (e) {
    //         e.preventDefault()
    //         let quantity = document.getElementById(item.quantity)
    //         model.updateQuantity(item, quantity.innerHTML);
    //         console.log(quantity.innerHTML)
    //     }
    // }
}