function obtener_beneficio_segun_tipo_de_cliente (tipo_de_cliente)
{
    if (tipo_de_cliente === "Normal")
    {
        return 0;
    }
    else if (tipo_de_cliente === "Recurrente")
    {
        return 0.5;
    }
    return 1;
}
export {obtener_beneficio_segun_tipo_de_cliente}