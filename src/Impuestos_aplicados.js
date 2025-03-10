function impuesto_correspondiente_al_estado(codigo_estado){
    let impuesto=0;
    switch(codigo_estado){
        case "CA":{
            impuesto = 8.25;
            break;
        }
        case "AL":
                {
            impuesto = 4.00;
            break;
        }
        case "TX":
            {
            impuesto = 6.25;
            break;
        }
        case "NV":
        {
            impuesto = 8.00;
            break;
        }
        case "UT":
            {
            impuesto = 6.65;
            break;
        }
    }
    return impuesto;
}

function aplicar_impuesto(precio, impuesto){
    return precio * (1 + impuesto/100);
}

function impuesto_correspondiente_a_la_categoria(categoria)
{
    let impuesto=0
    if (categoria === "Alimentos" && categoria === "Material escritorio" && categoria === "Varios")
        impuesto= 0;
    else if (categoria=== "Bebidas alcoholicas"){
        
        impuesto = 7;
    }
    else if (categoria === "Muebles")
    {
        impuesto=3;
    }
    else if (categoria === "Vestimenta")
    {
        impuesto=2;
    }
    else if (categoria === "Electronicos")
    {
        impuesto=4;
    }
    return impuesto
}
export {impuesto_correspondiente_al_estado, aplicar_impuesto, impuesto_correspondiente_a_la_categoria};