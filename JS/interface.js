const interface = {};
interface.navBarHandler = function(){
    let men = document.getElementById('men');
        men.onclick = menClickHandler;
        

    let women = document.getElementById('women');
        women.onclick = womenClickHandler;

        
    
    let kids = document.getElementById('kids');
        kids.onclick = kidsClickHandler;

        

    let collection = document.getElementById('collections');
        collections.onclick = collectionsClickHandler;

        
    
    let logo = document.getElementById('logo')
        logo.onclick = logoHandler;
        shopName = document.getElementById('shopName')
        shopName.onclick = logoHandler;

        function logoHandler(){
            view.showComponents(paths.homepage);
        }
    let cartpage = document.getElementById('cartpage');
        cartpage.onclick = cartHandler;

        function cartHandler(){
            view.showComponents(paths.cartpage);
        }
}



interface.homepageHandler = function(){
    let men = document.getElementById('fieldMen');
        men1 = document.getElementById('imgMen')
        men.onclick = menClickHandler;
        men1.onclick = menClickHandler;

        

    let womenField = document.getElementById('fieldWomen');
        womenField.onclick = womenClickHandler;
        womenImg = document.getElementById('imgWomen');
        womenImg.onclick = womenClickHandler;

        
    
    let kidsField = document.getElementById('fieldKids');
        kidsField.onclick = kidsClickHandler;
        kidsImg = document.getElementById('imgKids');
        kidsImg.onclick = kidsClickHandler;

        

    let collectionsField = document.getElementById('fieldCollections');
        collectionsField.onclick = collectionsClickHandler;
        collectionsImg = document.getElementById('imgCollections');
        collectionsImg.onclick = collectionsClickHandler;

        
}

function menClickHandler(){
    view.showComponents(paths.menpage);
    // view.showfield('Men');
}
function womenClickHandler(){
    view.showComponents(paths.womenpage);
    // view.showfield('Women')
}
function kidsClickHandler(){
    view.showComponents(paths.kidspage);
    // view.showfield('Kids')
}
function collectionsClickHandler(){
    view.showComponents(paths.collectionspage);
    // view.showfield('Collections')
}

// function formSubmmitHandler(){
//     let urlSearch = new URLSearchParams(location.search)
//     let products = controller.loadItems(urlSearch.get('items'), urlSearch.get('type'));
//     for(let product of products){
//         if(product.name.indexOf(formSearch.value)!=null){
//             view.showItems
//         }
//     }
// }s