const urlApi = "http://fundamentos.academlo.com/api/v1";
const category_id = "5c82982e-b63e-4280-8287-4eba0e99716a"; //Prueba Libros - Reemplazar por el de programming

async function getCategories(){
    let apiData = await fetch(`${urlApi}/directories/${category_id}/categories`);
    let categoriesData = await apiData.json();

    let arrayCat = categoriesData.categories;
    let cardCat = '';

    console.log(arrayCat);

    for( let i = 0; i < arrayCat.length; i++ ){
        let cardContainer = document.getElementById('content-categories');
        cardCat +=`<div class="card card-styles">
            <div class="card-description d-flex justify-content-center align-items-center flex-wrap ">
                <i class="fab fa-js-square icon-style "></i>
                <p class="title-description d-block w-100 text-center">
                    ${arrayCat[i].name}
                </p>
                <p class="sub-title-description">
                    12 Entradas
                </p>
            </div>
            <img src="https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Foto 1">
        </div>`;

        cardContainer.innerHTML = cardCat;
    }
}

getCategories();