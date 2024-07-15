// Declaración global de tipo_usuario
var tipo_usuario;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Usuario autenticado
        //document.getElementById('username').innerText = user.displayName || user.email;
        //document.getElementById('userPhoto').src = user.photoURL || 'img/admin.png'; // Cambio a admin.png

        // Obtener datos del usuario logueado 
        usersRef.child(user.uid).once('value').then(function (snapshot) {
            var tipo = snapshot.val().tipo;
            var displayName = snapshot.val().displayName;
            document.getElementById('username').innerText = displayName;
            switch (true) {
                case (tipo === '1'):
                    var menuContainer = document.getElementById('menu');
                    menuContainer.innerHTML = menuAdmin;
                    document.getElementById('user_alias').innerText = 'ADM';
                    break;
                case (tipo === '0'):
                    var menuContainer = document.getElementById('menu');
                    menuContainer.innerHTML = menuUsuario;
                    window.location.href = 'vista.html';
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
                        timer: 4000, // Tiempo en ms antes de redirigir
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
