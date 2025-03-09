function obtener_costo_envio_por_peso_volumetrico(peso_volumetrico)
{
    if (peso_volumetrico > 10)
        return 3.5
    return 0
}

export {obtener_costo_envio_por_peso_volumetrico}