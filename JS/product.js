const urlApi = "http://fundamentos.academlo.com/api/v1";
const category_id = "5c82982e-b63e-4280-8287-4eba0e99716a"; //Prueba Libros - Reemplazar por el de programming


async function getSelectedProduct(subCatArrayIndex, productArrayIndex){
    /** API CALLS */
    //Obtengo categoria (En este caso Libros)
    let apiData = await fetch(`${urlApi}/directories/${category_id}/categories`);
    let categoriesData = await apiData.json();

    //Obtengo subcategoria (filosofia - historia ...) pasando su indice
    let products = await fetch(`${urlApi}/categories/${categoriesData.categories[subCatArrayIndex].uuid}/products`);
    let productsData = await products.json();

    //Obtengo la data del producto con su uuid
    let productSearch = await fetch(`${urlApi}/products/${productsData.products[productArrayIndex].uuid}`);
    let productSearcData = await productSearch.json();
    let rowContainer = document.getElementById('row-data');

    let htmlProductData = `<div class="col-md-6 d-flex flex-column justify-content-between">
    <div class="principal-text">
      <h1 id="product-title">${productSearcData.name}</h1>
      <p id="product-desc" class="text-secondary">
        ${productSearcData.description}
      </p>
    </div>

    <div class="row d-flex justify-content-between align-items-center">
      <div class="col-md-6">
        <a href="${productSearcData.url}" target=_blank class="btn btn-transparent btn-block">
          Visite site
        </a>
      </div>

      <div class="col-md-6">
        <div
          class="row s-media d-flex justify-content-end align-items-center"
        >
          <h4 class="mr-1">Share</h4>
          <i class="fab fa-facebook-square"></i>
          <i class="ml-2 fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card-img">
      <img src="${productSearcData.image}" alt="" />
    </div>
  </div>`;

  rowContainer.innerHTML = htmlProductData;

}

getSelectedProduct(1, 1);