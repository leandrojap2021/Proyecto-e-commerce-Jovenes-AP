
let categoriesArray = []; //Aqui creamos un arreglo

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            
            showCategoriesList(categoriesArray);
        }//se ven aca las categorias 
    });
    
});   



function showCategoriesList(array){
 
    if(array == undefined){                       //En esta funcion se ve el arreglo ademas de hacerse el filtrado de precio
        array = categoriesArray;
    }



    maximo = parseInt(document.getElementById('cantidadMax').value);
    minimo = parseInt(document.getElementById('cantidadMin').value);

    let categorias = document.getElementById('cat-list-container');
    let htmlContentToAppend = " ";
    for(let category of array){
        if(category.cost >= minimo && category.cost <= maximo){
            htmlContentToAppend += `
           
            <div class="col-md-6">
                <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top" src="${category.imgSrc}">
                <h3 class="m-4"> ${category.name} </h3>
                <div class="card-body">
                    <p class="card-text"> Precio: ${category.cost} U$D <small class="text-muted float-right"> ${category.soldCount} artículos</small></p>
                    <p class="card-text"> ${category.description} </p>
                </div>
                </a>
            </div>
            `
       }
       categorias.innerHTML = htmlContentToAppend;
    }
    
}

//funciones de orden


document.getElementById('Asc').addEventListener('click', ()=>{
    ordenarAsc();
});

document.getElementById('Desc').addEventListener('click', ()=>{
    ordenarDesc();
});

document.getElementById('relevancia').addEventListener('click', ()=>{
    ordenarRel();
});

document.getElementById('buscador').addEventListener('keyup', ()=> {
    buscar();
})

document.getElementById("limpiarfiltro").addEventListener("click", () => {
    document.getElementById("cantidadMin").value = "0";
    document.getElementById("cantidadMax").value = "99999";
    document.getElementById("buscador").value = "";
    
    minimo = 0;
    maximo = 99999;

    showCategoriesList(categoriesArray);
});

//Funciones declaradas para ordenar y filtrar


function ordenarAsc(){
    ordenarPrecios(categoriesArray);
    showCategoriesList(categoriesArray);
}

function ordenarDesc(){
    ordenarPrecios(categoriesArray);
    categoriesArray.reverse();
    showCategoriesList(categoriesArray);
}

function ordenarRel(){
    ordenarRelevancia(categoriesArray);
    showCategoriesList(categoriesArray);
}

function ordenarPrecios(){
    categoriesArray.sort((a,b)=>{
        if (a.cost > b.cost){
            return -1;
        }
        if (a.cost < b.cost){
            return 1;
        }else{
            return 0;
        }
    });
}

function ordenarRelevancia(){
    categoriesArray.sort((a,b)=>{
        if (a.soldCount > b.soldCount){
            return -1;
        }
        if (a.soldCount < b.soldCount){
            return 1;
        }else{
            return 0;
        }
    });
}

function buscar(){
    let producto = document.getElementById('buscador').value;

    let filtrarLista = categoriesArray.filter(products => {
        return products.name.toLowerCase().indexOf(producto.toLowerCase()) > -1;
    })
    showCategoriesList(filtrarLista);
}