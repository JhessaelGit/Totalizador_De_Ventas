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
export {obtener_beneficio_segun_tipo_de_cliente}