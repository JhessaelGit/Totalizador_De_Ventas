function obtener_beneficio_segun_tipo_de_cliente (tipo_de_cliente)
{
    let beneficio_descuento=0
    if (tipo_de_cliente === "Normal")
    {
        beneficio_descuento = 0;
    }
    else if (tipo_de_cliente === "Recurrente")
    {
        beneficio_descuento = 0.5;
    }
    else if (tipo_de_cliente === "Antiguo recurrente")
    {
        beneficio_descuento = 1;
    }
    else if (tipo_de_cliente === "Especial")
    {    
        beneficio_descuento = 1.5;
    }
    return beneficio_descuento
}


function obtener_bneficio_con_condiciones_especiales(tipo_de_cliente, precio_neto, categoria_producto)
{
    let merese_descuento_de_100 = tipo_de_cliente === "Recurrente" && precio_neto > 3000 && categoria_producto === "Alimentos"
    let merese_descuento_de_200 = tipo_de_cliente === "Especial" && precio_neto > 7000 && categoria_producto === "Electronicos"
    if(merese_descuento_de_100)
        return 100
    else if (merese_descuento_de_200)
        return 200
    return 0
}
export {obtener_beneficio_segun_tipo_de_cliente, obtener_bneficio_con_condiciones_especiales}