function impuesto_correspondiente_al_estado(codigo_estado){
    let impuesto=0;
    if(codigo_estado === "CA"){
        impuesto = 8.25
    }
    else if (codigo_estado=== "AL"){
        return impuesto = 4.00
    }
    else if(codigo_estado === "UT"){
        impuesto = 6.65
    }
    return impuesto;
}

function aplicar_impuesto(precio, impuesto){
    return precio * (1 + impuesto/100);
}

export {impuesto_correspondiente_al_estado, aplicar_impuesto};