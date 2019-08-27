const maincomponents = {}
maincomponents.header = `
    <div class="head-container">
        <div id = "shopName" class = "name-of-store">
            <span>HLDShops</span>
        </div>
        <div class = "add-to-cart" id = "cartpage">
            <span>cart</span>
        </div>
    </div>
`

maincomponents.navBar = `
    <div class = "navBar-container">
        <div class = "nav-bar">
            <div class = "logo" id = "logo">
                <span>Star</span>
            </div>
            <div class = "categories">
                <span class = "category" id = "men">MEN</span>
                <span class = "category" id = "women">WOMEN</span>
                <span class = "category" id = "kids">KIDS</span>
                <span class = "category" id = "collections">COLLECTIONS</span>
            </div>
            <div class = "search">
                <form id = "form-search">
                    <input type = "text" placeholder = "Search" name = "item">
                </form>
            </div>
        </div>
    </div>
`
maincomponents.field = `
    <div class = "category-field" id = "field">
    </div>
`
maincomponents.footer = `
    <div class = "footer-container">
        <div>Contact us</div>
        <div>About us</div>
        <div>Get help</div>
    </div>
`

maincomponents.homepage = `
    <div class="homepage-container" id ="homepage">
        <div class="category">
            <div class="field">
                <button  id="fieldCollections">COLLECTIONS</button>
            </div>
            <div class="cover-image">
                <figure>
                    <div class="image">
                        <img src="../docs/imgs/collections.jpg" id="imgCollections">
                    </div>
                    
                </figure>
            </div>
        </div>
        <div class="category">
            <div class="field">
                <button id="fieldMen">MEN'S</button>
            </div>
            <div class="cover-image">
                <figure>
                    <div class="image">
                        <img src="../docs/imgs/men.png" class="cover-image" id="imgMen">
                    </div>
                </figure>
            </div>
        </div>
        <div class="category">
            <div class="field">
                <button id="fieldWomen">WOMEN'S</button>
            </div>
            <div class="cover-image">
                <figure>
                    <div class="image">
                        <img src="../docs/imgs/men.png" class="cover-image" id="imgWomen">
                    </div>
                </figure>
            </div>
        </div>
        <div class="category">
            <div class="field">
                <button id="fieldKids">KIDS'S</button>
            </div>
            <div class="cover-image">
                <figure>
                    <div class="image">
                        <img src="../docs/imgs/men.png" class="cover-image" id="imgKids">
                    </div>
                </figure>
            </div>
        </div>
    </div>
`
maincomponents.topspage = `
<div class = "item-field">
        <span style = "
        height: 6vh;
        width: 100%;
        margin-left: 3vh;
        display: flex;
        align-items: center;
        justify-contents: flex-start;
        Font-size: 16px;">TOPS</span> 
    </div>
    <div class = "items-container" id="container">  
    </div>
`
maincomponents.jeanspage = `
<div class = "item-field">
        <span style = "
        height: 6vh;
        width: 100%;
        margin-left: 3vh;
        display: flex;
        align-items: center;
        justify-contents: flex-start;
        Font-size: 16px;">JEANS</span> 
    </div>
    <div class = "items-container" id="container">  
    </div>
`
maincomponents.jacketpage=`
<div class = "item-field">
        <span style = "
        height: 6vh;
        width: 100%;
        margin-left: 3vh;
        display: flex;
        align-items: center;
        justify-contents: flex-start;
        Font-size: 16px;">JACKET</span> 
    </div>
    <div class = "items-container" id="container">  
    </div>
`
maincomponents.shoespage = `
<div class = "item-field">
        <span style = "
        height: 6vh;
        width: 100%;
        margin-left: 3vh;
        display: flex;
        align-items: center;
        justify-contents: flex-start;
        Font-size: 16px;">SHOES</span> 
    </div>
    <div class = "items-container" id="container">  
    </div>
`
maincomponents.productpage = `
<div class ="product-container" id = "product-container">
</div>
`
maincomponents.cartpage = `
<div class = "cart-container">
    <div class = "form-container">
        <div class="form-header">
            <p> Cart Information </p>
        </div>
        <div class = "form-area">
            <form id="form-buy">
                <div class = "form">
                    <div class = "info-container" id = "cart-info">
                    </div>
                    <div class = "user-container">
                        <div class="input-wrapper">
                            <h3> Email </h3>
                            <input type="text" name="email" placeholder="Email">
                            <div id = "email-error" class = "message-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <h3> 
                                Mobile 
                            </h3>
                            <input type="text" name="mobile" placeholder="Mobile">
                        </div>
                        <div class="input-wrapper">
                            <h3> 
                                Address 
                            </h3>
                            <input type="text" name="address" placeholder="Address">
                        </div>
                        <button id = "buy-btn"> Buy </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
`