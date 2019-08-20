const urlApi = "http://fundamentos.academlo.com/api/v1";
const category_id = "5c82982e-b63e-4280-8287-4eba0e99716a"; //Prueba Libros - Reemplazar por el de programming


/**
 El valor n que recibe la funcion, corresponde a la posicion en el arreglo de categorias. Como se esta probando con libros, al momento de la prueba se selecciona la posicion 1, que corresponde a filosofia y por ende cargara todos los libros que correspondan a ello.
 */
async function getCategorieProducts(n){
    /** API CALLS */
    let apiData = await fetch(`${urlApi}/directories/${category_id}/categories`);
    let categoriesData = await apiData.json();
    
    let products = await fetch(`${urlApi}/categories/${categoriesData.categories[n].uuid}/products`);
    let productsData = await products.json();

    /** CATEGORY TITLE DRAW */
    document.getElementById('title-category').textContent = productsData.name;
    
    let arrayP = productsData.products;
    let colData = '';

    for( let i = 0; i < arrayP.length; i++ ) {
        let rowData = document.getElementById('row-data');
        colData += `<div class="col-md-4 col-card">
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
                <div class="align-items-center">
                  <a href="${arrayP[i].url}" target=_blank class="btn btn-transparent btn-block"
                    >Visite site</a
                  >
                </div>
              </div>
            </div>
          </div>`

          rowData.innerHTML = colData;
    }
}

getCategorieProducts(5);