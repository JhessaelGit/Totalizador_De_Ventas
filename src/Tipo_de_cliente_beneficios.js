function obtener_beneficio_segun_tipo_de_cliente (tipo_de_cliente)
{
    if (tipo_de_cliente === "Normal")
    {
        return 0;
    }
    return 0.5;
}
export {obtener_beneficio_segun_tipo_de_cliente}