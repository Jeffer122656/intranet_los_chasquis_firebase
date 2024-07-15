var menuAdmin = `<a href="vista.html" class="list-group-item list-group-item-action bg-dark text-white">Inicio</a>
                <a href="list_user.html" class="list-group-item list-group-item-action bg-dark text-white">Usuarios</a>
                <a href="registrar_estado.html" class="list-group-item list-group-item-action bg-dark text-white">Estado Cuenta</a>
                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">Configuración</a>
                <a href="#" onclick="signOut()" class="list-group-item list-group-item-action bg-dark text-white">Cerrar Sesión</a>
        `;

var menuUsuario = `<a href="vista.html" class="list-group-item list-group-item-action bg-dark text-white">Inicio</a>
<a href="estado_cuenta.html" class="list-group-item list-group-item-action bg-dark text-white">Mi Estado de Cuenta</a>
<a href="#" class="list-group-item list-group-item-action bg-dark text-white">Configuración</a>
<a href="#" onclick="signOut()" class="list-group-item list-group-item-action bg-dark text-white">Cerrar Sesión</a>
`;

const iconoEditar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: #ffffff;">
                    <path d="M18.707 4.293a1 1 0 0 0-1.414 0l-12 12a1 1 0 0 0-.212.322l-1.586 4.755a1 1 0 0 0 .263 1.002 1 1 0 0 0 .664.243l4.755-1.586a1 1 0 0 0 .322-.212l12-12a1 1 0 0 0 0-1.414zM6.414 19H5v-1.414l9.586-9.586 1.414 1.414L6.414 19zm10.486-10.5-1.414-1.414 1.293-1.293a.998.998 0 0 1 1.414 0l.707.707a.998.998 0 0 1 0 1.414l-1.293 1.293z"/>
                </svg>`;

const iconoEliminar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: #ffffff;">
        <path d="M10 3h4a1 1 0 0 1 1 1v1h4v2h-1.586l-1.708 14.749a1 1 0 0 1-.998.907h-8.004a1 1 0 0 1-.998-.907L5.586 7H4V5h4V4a1 1 0 0 1 1-1zm3 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>`;

const iconoImprimir = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style="fill: #ffffff;">
    <path d="M19 8h-1V3H6v5H5a2 2 0 0 0-2 2v6h4v5h10v-5h4v-6a2 2 0 0 0-2-2zM8 4h8v4H8V4zm8 14H8v-3h8v3zm3-5H5v-4h14v4zM10 13h4v2h-4v-2z"/>
</svg>`;
