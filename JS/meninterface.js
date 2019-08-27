const meninterface = {}
meninterface.menpageHandler = function(){
    let tops = document.getElementById('tops')
    tops.onclick = topsHandler;
    let tops1 = document.getElementById('topsField')
    tops1.onclick = topsHandler;
    function topsHandler(){
         view.showComponents(paths.mentopspage);
        // view.showfield('Men');
        // view.showComponents('topspage')
    }
    let jeans = document.getElementById('jeans')
    jeans.onclick = jeansHandler;
    let jeans1 = document.getElementById('jeansField')
    jeans1.onclick = jeansHandler;
    function jeansHandler(){
         view.showComponents(paths.menjeanspage);
        // view.showfield('Men');
        // view.showComponents('topspage')
    }
    let jacket = document.getElementById('jacket')
    jacket.onclick = jacketHandler;
    let jacket1 = document.getElementById('jacketField')
    jacket1.onclick = jacketHandler;
    function jacketHandler(){
         view.showComponents(paths.menjacketpage);
        // view.showfield('Men');
        // view.showComponents('topspage')
    }
    let shoes = document.getElementById('shoes')
    shoes.onclick = shoesHandler;
    let shoes1 = document.getElementById('shoesField')
    shoes1.onclick = shoesHandler;
    function shoesHandler(){
         view.showComponents(paths.menshoespage);
        // view.showfield('Men');
        // view.showComponents('topspage')
    }
}