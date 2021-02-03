const valor =
[
    {
        Dato:
        {
            Nombre:"Diossmer",
            Apellido:"Villamizar",
            Edad:27
        },
        Direccion:"Vereda de coche",
        Dia:[$dias => "1",$semana => "Martes"]
    }
];

export function Header(){
return (
    <nav>
        <a href="/">
            {valor.map(({Dato})=><p key={Dato.Edad}>{Dato.Nombre+' '+Dato.Apellido}</p>)}
        </a>
    </nav>
);
}