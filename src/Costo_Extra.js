function obtener_costo_envio_por_peso_volumetrico(peso_volumetrico)
{
    let costo_envio=0;
    if (peso_volumetrico > 10 && peso_volumetrico <=20)
        costo_envio=3.5;
    else if( peso_volumetrico > 20 && peso_volumetrico <=40)
        costo_envio=5;
    else if( peso_volumetrico > 40 && peso_volumetrico <=80)
        costo_envio=6;
    else if( peso_volumetrico > 80 && peso_volumetrico <=100)
        costo_envio=6.5;
    return costo_envio;

}

export {obtener_costo_envio_por_peso_volumetrico}