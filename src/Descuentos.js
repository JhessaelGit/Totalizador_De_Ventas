function descuento_correspondiente_cantidad(cantidad)
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
    else if (cantidad >= 30000)
    {
        descuento_porcentaje = 15
    }
    return descuento_porcentaje;
}

function aplicar_descuento(precio_total, descuento_porcentaje)
{
    let porcentaje_en_decimales = 1 - (descuento_porcentaje / 100)
    let precio_con_descuento=precio_total*porcentaje_en_decimales

    return Math.round(precio_con_descuento)
}
function descuento_correspondiente_categoria(categoria)
{
    let impuesto_porcentaje_categotia=0
    const tiene_descuento_de_0=categoria === "Bebidas alcoholicas" || categoria === "Muebles" || categoria === "Vestimenta" || categoria === "Varios"
    const tiene_descuento_de_2 = categoria === "Alimentos"
    const tiene_descuento_de_1_punto_5 =categoria === "Material escritorio"
    const tiene_descuento_de_1 = categoria === "Electronicos"
    
    if (tiene_descuento_de_0)
        impuesto_porcentaje_categotia = 0
    else if (tiene_descuento_de_2)
        impuesto_porcentaje_categotia = 2
    else if (tiene_descuento_de_1_punto_5)
        impuesto_porcentaje_categotia = 1.5
    else if (tiene_descuento_de_1)
        impuesto_porcentaje_categotia = 1
    
    return impuesto_porcentaje_categotia
}

export {descuento_correspondiente_cantidad, aplicar_descuento, descuento_correspondiente_categoria}