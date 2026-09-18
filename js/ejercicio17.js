
const gestorDeTareas = (() => {

    const CLAVE_STORAGE = "lista_tareas_js";

    const obtenerTareas = () => {
        const tareasJSON = localStorage.getItem(CLAVE_STORAGE);
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };

    return {
        agregarTarea: (textoTarea) => {
            const tareas = obtenerTareas();
            const nuevaTarea = {
                id: Date.now(),
                texto: textoTarea
            };
            tareas.push(nuevaTarea);
            guardarTareas(tareas);
        },

        obtenerLista: () => obtenerTareas(),

        eliminarTarea: (id) => {
            const tareas = obtenerTareas();
            const tareasFiltradas = tareas.filter(t => t.id !== id);
            guardarTareas(tareasFiltradas);
        }
    };
})();

const renderizarTareas = () => {
    const listaUI = document.getElementById("listaTareas");
    listaUI.innerHTML = "";

    const tareas = gestorDeTareas.obtenerLista();

    tareas.forEach((tarea) => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn-eliminar";
        
        btnEliminar.onclick = () => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: `Vas a eliminar "${tarea.texto}"`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    gestorDeTareas.eliminarTarea(tarea.id);
                    renderizarTareas();
                    Swal.fire('¡Eliminada!', 'La tarea ha sido borrada.', 'success');
                }
            });
        };

        li.appendChild(btnEliminar);
        listaUI.appendChild(li);
    });
};

document.getElementById("btnAgregar").addEventListener("click", () => {
    const input = document.getElementById("nuevaTarea");
    const texto = input.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Por favor ingresa una descripción para la tarea.'
        });
        return;
    }

    gestorDeTareas.agregarTarea(texto);
    input.value = "";
    renderizarTareas();
});

document.addEventListener("DOMContentLoaded", renderizarTareas);