function descuento_correspondiente(cantidad)
{
    let descuento_porcentaje=0
    
    if (cantidad >= 1000 && cantidad < 3000){
        descuento_porcentaje = 3
    }
    else if( cantidad === 3000)
    {
        descuento_porcentaje = 5
    }
    return descuento_porcentaje;
}
export {descuento_correspondiente}