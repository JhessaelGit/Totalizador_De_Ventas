function descuento_correspondiente(cantidad)
{
    let descuento_porcentaje=0
    
    if (cantidad >= 1000 && cantidad < 3000){
        descuento_porcentaje = 3
    }
    else if( cantidad >= 3000 && cantidad < 7000)
    {
        descuento_porcentaje = 5
    }
    else if (cantidad >= 7000 && cantidad < 10000)
    {
        descuento_porcentaje = 7
    }
    else if (cantidad >= 10000 && cantidad < 30000)
    {
        descuento_porcentaje = 10
    }
    return descuento_porcentaje;
}
export {descuento_correspondiente}