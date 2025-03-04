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

export {impuesto_correspondiente_al_estado, aplicar_impuesto};