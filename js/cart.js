//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let purchasedProduct = {}; //Creamos el objeto 

document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            purchasedProduct = resultObj.data; 
            showPurProd();
        }
        
    });

});

function showPurProd(){
    let purProd = ''; //Variable que se usa en el html
    let i = 0; 

    purchasedProduct.articles.forEach((i) => {
        purProd += `
        <tr>
            <th scope="row"> ${i + 1} </th>
            <td style="width:15%"><img src=" ${i.src} "alt="..." class=" img-thumbnail mx-auto d-block "></td>
            <td> ${i.name} </td>
            <td class="price"> ${i.unitCost} </td>
            <td class='currency'> ${i.currency} </td>
            <td><input type='number' value=${i.count} id='cant${i}' min=0 max=10 onchange="subTotal();"></td>
            <td id='res${i}' style="font-weight: bold;"> </td>

        </tr>
        `
        i++;
    })
    document.getElementById('purchasedProd').innerHTML = purProd; //Mostramos el carrito agregandolo al HTML
    subTotal(); 
}
//Funcion que nos calcula los totales
function subTotal(){
    let prices = document.getElementsByClassName('price'); 
    let count = document.getElementsByTagName('input'); 

    let total = 0; 

   
}
