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
    else if (tipo_de_cliente === "Antiguo recurrente")
    {
        return 1;
    }
    return 1.5;
}
export {obtener_beneficio_segun_tipo_de_cliente}