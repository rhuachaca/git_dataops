function anadir(){
    var tab = document.getElementById("tabla");
    var prod = document.getElementById("productos");
    
    var p = prod.cloneNode(true)
    console.log("añadido")
    tab.append(p);

    var txt1 = document.getElementById("Cantidade")//precio y total
    var txt2 = document.getElementById("Producto")
    var txt3 = document.getElementById("Ventas")
    var txt4 = document.getElementById("Total")
    txt1.value = "";
    txt2.value = "";
    txt3.value = "";
    txt4.value = "";
}

/*function anadir(){
    var tab = document.getElementById("tabla");
    var prod = document.createElement("div");
    var nodo = document.createn
    //p.clone().appendTo(tab)
    tab.append(prod);
}*/

document.getElementById('Ventas').addEventListener("keyup", () => {
    total();
})

function total(){
    var total=0;
    document.getElementById('Total').innerHTML = "";
    const num1 = document.getElementById('Cantidade').value;
    const num2 = document.getElementById('Ventas').value;

    total = parseInt(num1) * parseFloat(num2) ;
    //añade el impuesto
    if(num1 != 0 && num2 != 0){
        total += total * (18/100);
        total = total.toFixed(2);
        document.getElementById('Total').value = total;
    }
}
