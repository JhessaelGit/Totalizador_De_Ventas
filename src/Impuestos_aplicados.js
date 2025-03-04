function impuesto_correspondiente_al_estado(codigo_estado){
    let impuesto=0;
    if(codigo_estado === "CA"){
        impuesto = 8.25
    }
    else{
        impuesto = 6.65
    }
    return impuesto;
}

export default impuesto_correspondiente_al_estado;