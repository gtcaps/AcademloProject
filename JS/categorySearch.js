const urlApi = "http://fundamentos.academlo.com/api/v1";
const directory_id = "5c82982e-b63e-4280-8287-4eba0e99716a"; //Prueba Libros - Reemplazar por el de programming

async function getAllCategories(){
    let apiData = await fetch(`${urlApi}/directories/${directory_id}/categories`);
    let categoriesData = await apiData.json();

    let arrayCats = categoriesData.categories;
    let cardCat = '';

    for( let i = 0; i < arrayCats.length; i++ ){
        let apiDataProd = await fetch(`${urlApi}/categories/${arrayCats[i].uuid}/products`);
        let cantProdData = await apiDataProd.json();

        let cantProd = cantProdData.products.length;
        let cardContainer = document.getElementById('content-categories');
        cardCat += `<div class="card card-styles"><a href="../category-page/category-page.html?${arrayCats[i].uuid}">
            <div class="card-description d-flex justify-content-center align-items-center flex-wrap ">
            <i class="fab fa-js-square icon-style "></i>
            <p class="title-description d-block w-100 text-center">
                ${arrayCats[i].name}
            </p>
            <p class="sub-title-description">
                ${cantProd} Entradas
            </p>
            </div>
            <img src="https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Foto 1" />
        </div>`;

        cardContainer.innerHTML = cardCat;
    }
}

getAllCategories();