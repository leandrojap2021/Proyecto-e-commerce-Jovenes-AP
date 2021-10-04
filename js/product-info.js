var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL ).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let categoryHTML = document.getElementById("category");
            let soldCountHTML = document.getElementById("soldCount");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost + ' US';
            categoryHTML.innerHTML = product.category;
            soldCountHTML.innerHTML = product.soldCount;

            //Muestro las imagenes del auto
            showImagesGallery(product.images);
        }
    });
});

var product = {};

//mostrar imagenes relacionadas
function showRelatedProducts(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < related.lenght; i++){
        let relProducts = products [array[i]];

        htmlContentToAppend += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + relProducts.imgSrc + `" alt="` +relProducts.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ relProducts.name +`</h4>
                            <small class="text-muted">` + relProducts.productCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + relProducts.description + `</p>
                        <p class="text-muted">` + relProducts.currency + relProducts.cost `</p>
                    </div>
                </div>
            </a>
            `

            document.getElementById("relatedProductsImg").innerHTML = htmlContentToAppend;
    }
   
}


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL)
    .then(function (resultObj) {
        if (resultObj.status === "ok") {
            products = resultObj.data;                  //se llama a la funcion getJSONData y se ejecuta el eventto luego de tener el html 
            related = info.relatedProducts;
            showRelatedProducts(products, related);
        }
    });

});

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

let comments = [];

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comments = resultObj.data;
            //Muestro las categorías ordenadas
            showComments(comments);
        }
    });

});

//Funcion que arma el html de los comentarios una vez tenemos los datos
function showComments(array) {

    if (array == undefined) {
        array = comments;
    }

    let comments = document.getElementById('com-list-container');
    let htmlContentToAppend = " ";

    for (let comment of array) {
        htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ comment.user + `</h4>
                            <small class="text-muted">` + comment.dateTime + ` </small>
                        </div> 
                            <p class="mb-1">` + comment.description + `</p>
                            <p class="float-right"> `+ califico(comment.score) + `</p>
                    </div>
                </div>
            </div>    
            `
        comments.innerHTML = htmlContentToAppend;
    }

}

//Funcion que recopila los datos del comentario y del usuario para agregarlo a la lista de comentarios
function showUserComment(){
    let starChecked = document.getElementsByName('estrellas');
    let starNumber = undefined;

   

    let comment = {};
    comment.user = usuario.nombre;
    comment.description = document.getElementById("commentText").value;
    comment.dateTime = dateFilter();
    comment.score = starNumber;

    
         
    }


//Funcion que muestra la lista y setea los valores de los campos
document.getElementById("addCom").addEventListener("click", () => {
    showComments(comments); //Mostramos la lista.
    document.getElementById("commentText").value = '';
    unselect();
});






//Funcion la cual me escribe las estrellas dentro del html
function califico(scoreNum){//
  
    let stars = "";

    for (let i=1; i<=5; i++){

        if (i <= scoreNum){ 

            stars += '<i style= "color: #ff8000" class="fas fa-star "></i>';
            
        }else {
            stars +='<i style= "color: #ff8000" class="far fa-star "></i>';
        }
    }
    
return stars;
}

//Borra las estrellas seleccionadas
function unselect(){
    document.querySelectorAll('[Type=radio]').forEach((x) => x.checked=false);
  }