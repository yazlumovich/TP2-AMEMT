let calendario = [
{
    hora: "08:00 hs",
    lunes: "Desayunar",
    martes: "Desayunar",
    miercoles:"Desayunar",
    jueves:"Desayunar",
    viernes:"Desayunar",
    sabado:"Desayunar",
},
{
    hora: "9:00 hs",
    lunes: "Rutina de gimnasia",
    martes: "meditar",
    miercoles: "Rutina de gimnasia",
    jueves: "meditar",
    viernes: "Rutina de gimnasia",
    sabado: "Salir a correr",
},
{
    hora: "12:00",
    lunes: "Almorzar",
    martes: "Almorzar",
    miercoles: "Almorzar",
    jueves: "Almorzar",
    viernes: "Almorzar",
    sabado: "Almorzar",
},
{
    hora: "14:00",
    lunes: "Estudiar",
    martes: "Leer libro",
    miercoles: "Hacer jardineria",
    jueves: "Estudiar",
    viernes: "Leer libro",
    sabado: "Pasear perro",
},
{
    hora: "17:00",
    lunes: "Pintar un cuadro",
    martes: "Salir a correr",
    miercoles: "Estudiar",
    jueves: "Ir al gimnsasio",
    viernes: "Mirar serie",
    sabado: "Visitar a la abuela",
},
{
    hora: "20:00",
    lunes: "Mirar peli",
    martes: "Cena con familia",
    miercoles: "Cocinar",
    jueves: "Leer novela",
    viernes: "Spa",
    sabado: "Cena afuera",
},
];


// cargar tabla
const cuerpo = document.querySelector("#cuerpo");
let actualizar = () => {
    cuerpo.innerHTML = "";
    calendario.forEach((dia, index) => {

    const tr = document.createElement("tr");
    tr.classList.add("estilo");

    let tdHora = document.createElement("td");
    tdHora.textContent = dia.hora;
    tr.appendChild(tdHora);

    let tdLunes = document.createElement("td");
    tdLunes.textContent = dia.lunes;
    tr.appendChild(tdLunes);

    let tdMartes = document.createElement("td");
    tdMartes.textContent = dia.martes;
    tr.appendChild(tdMartes);

    let tdMiercoles = document.createElement("td");
    tdMiercoles.textContent = dia.miercoles;
    tr.appendChild(tdMiercoles);

    let tdJueves = document.createElement("td");
    tdJueves.textContent = dia.jueves;
    tr.appendChild(tdJueves);

    let tdViernes = document.createElement("td");
    tdViernes.textContent = dia.viernes;
    tr.appendChild(tdViernes);

    let tdSabado = document.createElement("td");
    tdSabado.textContent = dia.sabado;
    tr.appendChild(tdSabado);
    
    let tdEditar = document.createElement ("td");
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "Editar";
    botonEditar.classList.add("btn-editar");
    botonEditar.addEventListener("click", () => editarTarea (index));
    tdEditar.appendChild (botonEditar);
    tr.appendChild (tdEditar);

    let tdEliminar = document.createElement ("td");
    let botonEliminar = document.createElement ("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.classList.add ("btn-eliminar");
    botonEliminar.addEventListener ("click", () => eliminarTarea (index));
    tdEliminar.appendChild (botonEliminar);
    tr.appendChild (tdEliminar);
 

    cuerpo.appendChild(tr);

    })
}

window.addEventListener("load", () => {
    actualizar();
});