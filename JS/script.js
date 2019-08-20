const urlApi = "http://fundamentos.academlo.com/api/v1";

async function getDirectories(){
    let apiData = await fetch(`${urlApi}/directories`);
    let directories = await apiData.json();

    console.log(directories);
}

getDirectories();