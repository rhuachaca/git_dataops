const number = document.getElementById('numero').innerHTML;
var numero = parseFloat(number)
var miles = 0
var centenas = 0
var decimal = 0
var mostrar = "SON: "

miles = calc_miles(numero);
centenas = numero - miles;
decimal = parseInt((numero - parseInt(miles + centenas))*100);

if(numero > 999){
    mostrar += milesimas(miles);
}
if(centenas>99){
    mostrar += cent(centenas);
}else if(centenas>9){
    mostrar += decenas(centenas);
}else{
    mostrar += unidades(centenas);
}
if(decimal>9){
    mostrar += " y "+decimal+"/100 soles"
}else{
    mostrar += " y 0"+decimal+"/100 soles"
}

function calc_miles(cant){
    var calcular = 0;
    calcular = parseInt(cant/1000);
    calcular = calcular * 1000;
    return calcular
}


function milesimas(cant){
    var calcular = 0;
    var letras = "";
    if(cant>999){
        calcular = parseInt(cant/1000);
        if(calcular < 10){
            letras = unidades(calcular);
        }else if(calcular < 100){
            letras = decenas(calcular);
        }else{
            var resta = calcular % 100;
            
            if(resta > 9){
                letras = letras + cent(calcular);
            }else if(resta > 1){
                letras = letras + cent(calcular);
                letras = letras + unidades(resta);
            }else{
                letras = "Ciento Un ";
            }               
        }
    }
    letras = letras + "Mil ";
    return letras;
}

function cent(cant){
    var calcular = 0;
    var letras = "";
    if(cant>99){
        calcular = parseInt(cant/100);
        var resta = parseInt(cant-(calcular*100));
        
        switch(calcular){
            case 1: 
                if(resta>0){
                    letras = "Ciento " + decenas(resta);
                }else{
                    letras = "Cien ";
                }
                break;
            case 2:
                letras = "Doscientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
            case 3:
                letras = "Trescientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
            case 4:
                letras = "Cuatrocientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
            case 5:
                letras = "Quinientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
            case 6:
                letras = "Seiscientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
            case 7:
                letras = "Setecientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
            case 8:
                letras = "Ochocientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
            case 9:
                letras = "Novecientos ";
                if(resta>0){
                    letras = letras + decenas(resta);
                }
                break;
        }
    }
    return letras;
}

function decenas(cant){
    var calcular = 0;
    var letras = "";
    if(cant>9){
        calcular = parseInt(cant/10);
        var resta = parseInt(cant-(calcular*10));
        switch(calcular){
            case 1: 
                if(resta>0){
                    letras = unidad1(resta);
                }else{
                    letras = "Diez "
                }
                break;
            case 2:
                if(resta>0){
                    letras = "Veinti"
                    letras = letras + unidades(resta).toLowerCase();
                }else{
                    letras = "Veinte "
                }
                break;
            case 3:
                letras = "Treinta "
                if(resta>0){
                    letras = letras + "y " + unidades(resta);
                }
                break;
            case 4:
                letras = "Cuarenta ";
                if(resta>0){
                    letras = letras + "y " + unidades(resta);
                }
                break;
            case 5:
                letras = "Cincuenta ";
                if(resta>0){
                    letras = letras + "y " + unidades(resta);
                }
                break;
            case 6:
                letras = "Sesenta ";
                if(resta>0){
                    letras = letras + "y " + unidades(resta);
                }
                break;
            case 7:
                letras = "Setenta ";
                if(resta>0){
                    letras = letras + "y " + unidades(resta);
                }
                break;
            case 8:
                letras = "Ochenta ";
                if(resta>0){
                    letras = letras + "y " + unidades(resta);
                }
                break;
            case 9:
                letras = "Noventa";
                if(resta>0){
                    letras = letras + "y " + unidades(resta);
                }
                break;
        }
    }
    return letras;
}

function unidad1(cant){
    var calcular = cant;
        switch(calcular){
            case 1: 
                letras = "Once ";
                break;
            case 2:
                letras = "Doce ";
                break;
            case 3:
                letras = "Trece ";
                break;
            case 4:
                letras = "Catorce ";
                break;
            case 5:
                letras = "Quince ";
                break;
            case 6:
                letras = "Dieciseis ";
                break;
            case 7:
                letras = "Diecisiete ";
                break;
            case 8:
                letras = "Dieciocho ";
                break;
            case 9:
                letras = "Diecinueve ";
                break;
        }
    return letras;
}

function unidades(cant){
    var calcular = parseInt(cant);
    var letras = "";
    switch(calcular){
            case 1: 
                letras = "Un ";
                break;
            case 2:
                letras = "Dos ";
                break;
            case 3:
                letras = "Tres ";
                break;
            case 4:
                letras = "Cuatro ";
                break;
            case 5:
                letras = "Cinco ";
                break;
            case 6:
                letras = "Seis ";
                break;
            case 7:
                letras = "Siete ";
                break;
            case 8:
                letras = "Ocho ";
                break;
            case 9:
                letras = "Nueve ";
                break;
        }
    return letras
}

//return
document.getElementById('Letra').innerHTML = mostrar.toUpperCase();