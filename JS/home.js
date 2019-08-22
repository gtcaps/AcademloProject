const urlApi = "http://fundamentos.academlo.com/api/v1";
const directory_id = "5c82982e-b63e-4280-8287-4eba0e99716a"; //Prueba Libros - Reemplazar por el de programming


async function getCategoriesProducts(){
    let productsData = { };
    /** API CALLS */
    let apiData = await fetch(`${urlApi}/directories/${directory_id}/categories`);
    let categoriesData = await apiData.json();

    let randomCatProducts = (Math.floor(Math.random() * categoriesData.categories.length));

    if(randomCatProducts == 0){
        randomCatProducts = 1;
    } else {
        let products = await fetch(`${urlApi}/categories/${categoriesData.categories[randomCatProducts].uuid}/products`);
        productsData = await products.json();
    }

    let arrayP = productsData.products;
    let colData = '';

    for( let i = 0; i < 3; i++ ) {
        let rowData = document.getElementById('row-data');
        colData += `<div class="col-md-4 col-card card-style col-12">
            <div class="card">
                <div class="card-img">
                    <img src="${arrayP[i].image}" alt="..." />
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <div class="p-3">
                        <h2 class="card-title">${arrayP[i].name}</h2>
                        <p class="card-text">
                            ${arrayP[i].description}
                        </p>
                    </div>
                    <div>
                        <a href="../product-page/product-page.html?${arrayP[i].uuid}" class="btn btn-transparent btn-block">Visite site</a>
                    </div>
                </div>
            </div>
        </div>`;

        rowData.innerHTML = colData;
    }
}

async function getCategories(){
    let apiData = await fetch(`${urlApi}/directories/${directory_id}/categories`);
    let categoriesData = await apiData.json();

    let arrayCat = categoriesData.categories;
    let cardCat = '';

    //console.log(arrayCat);

    for( let i = 0; i < 8; i++ ){

        let apiDataProd = await fetch(`${urlApi}/categories/${arrayCat[i].uuid}/products`);
        let cantProdData = await apiDataProd.json();

        let cantProd = cantProdData.products.length;

        let cardContainer = document.getElementById('content-categories');
        cardCat +=`<div class="card card-styles"><a href="../category-page/category-page.html?${arrayCat[i].uuid}">
            <div class="card-description d-flex justify-content-center align-items-center flex-wrap ">
                <i class="fab fa-js-square icon-style "></i>
                <p class="title-description d-block w-100 text-center">
                    ${arrayCat[i].name}
                </p>
                <p class="sub-title-description">
                    ${cantProd} Entradas
                </p>
            </div>
            <img src="https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Foto 1"></a>
        </div>`;

        cardContainer.innerHTML = cardCat;
    }
}

/***************************
 *  JQUERY - LOADER SCRIPT *
 ***************************/
$(window).on("load", function() {
    jQuery(".loader-wrapper")
      .delay(1000)
      .fadeOut("slow");
});

getCategories();
getCategoriesProducts();