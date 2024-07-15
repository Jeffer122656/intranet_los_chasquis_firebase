// Declaración global de tipo_usuario
var tipo_usuario;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Usuario autenticado
        // Obtener el uid del usuario autenticado
        var uid = user.uid;

        // Obtener datos del usuario logueado 
        usersRef.child(user.uid).once('value').then(function (snapshot) {
            var tipo = snapshot.val().tipo;
            var displayName = snapshot.val().displayName;
            // Obtener las dos primeras letras del nombre y apellido
            var nombre = displayName.split(' ')[0]; // Obtener el primer nombre
            var apellido = displayName.split(' ')[1]; // Obtener el primer apellido
            var inicialNombre = nombre.substring(0, 1); // Obtener las dos primeras letras del nombre
            var inicialApellido = apellido.substring(0, 1); // Obtener las dos primeras letras del apellido
            var alias = inicialNombre + inicialApellido; // Concatenar las dos iniciales

            document.getElementById('username').innerText = displayName;
            document.getElementById('user_alias').innerText = alias;
            
            switch (true) {
                case (tipo === '1'):
                    var menuContainer = document.getElementById('menu');
                    menuContainer.innerHTML = menuAdmin;
                    break;
                case (tipo === '0'):
                    var menuContainer = document.getElementById('menu');
                    menuContainer.innerHTML = menuUsuario;
                     // Aquí estoy suponiendo que 'documento' es el nombre de la columna por la que quieres buscar
                    var columnaABuscar = 'id_user';
                    // Haces la consulta para obtener el estado que cumple con la condición
                    estadoRef.orderByChild(columnaABuscar).equalTo(uid).once('value').then(function (estadoSnapshot) {
                        // Iteras sobre los resultados (en caso de esperar múltiples resultados)
                        estadoSnapshot.forEach(function(childSnapshot) {
                            var estado = childSnapshot.val();
                            // Aquí realizas las acciones que necesites con el estado encontrado
                            document.getElementById('documentoUsuario').innerText = estado.documento || 'No disponible';
                            document.getElementById('puestoUsuario').innerText = estado.puesto || 'No disponible';
                            document.getElementById('nombresCompletos').innerText = estado.nombres_completo || 'No disponible';
                            document.getElementById('fechaInicio').innerText = estado.fecha_inicio || 'No disponible';
                            document.getElementById('fechaFin').innerText = estado.fecha_fin || 'No disponible';
                        });
                    }).catch(function (error) {
                        console.error('Error al obtener estadoCuenta:', error);
                    });
                    break;
                default:
                    console.error('Tipo de usuario no reconocido');
                    break;
            }
        }).catch(function (error) {
            console.error('Error al obtener el tipo de usuario:', error);
        });
    } else {
        console.log('Usuario no autenticado');
        window.location.href = 'index.html';
    }
});

// Función para cerrar sesión
function signOut() {
    // Mostrar SweetAlert2 de confirmación
    Swal.fire({
        title: '¿Está seguro?',
        text: "¿Realmente desea cerrar la sesión?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // El usuario confirmó cerrar sesión, proceder con firebase.auth().signOut()
            firebase.auth().signOut().then(() => {
                // Mostrar SweetAlert2 de carga
                Swal.fire({
                    title: 'Cerrando sesión...',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                // Después de cerrar la sesión, redirigir al usuario
                setTimeout(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sesión cerrada correctamente',
                        text: 'Redirigiendo...',
                        timer: 2000, // Tiempo en ms antes de redirigir
                        timerProgressBar: true,
                        didClose: () => {
                            window.location.href = 'index.html'; // Redirigir al inicio de sesión u otra página
                        }
                    });
                }, 3000);
            }).catch((error) => {
                // Error al cerrar sesión
                console.error('Error al cerrar sesión:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo cerrar la sesión. Inténtalo de nuevo.',
                });
            });
        }
    });
}
