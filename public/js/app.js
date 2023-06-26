        // Se obtiene el formulario
        const formNuevaReserva = document.getElementById('formNuevaReserva');

        // Se agrega un evento al formulario
        formNuevaReserva.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Se obtienen los valores de cada input
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const codigo = document.getElementById('codigo').value;
            // const nuevaReserva = {
            //     nombre,
            //     apellido,
            //     codigo
            // }
            console.log(nombre,apellido,codigo)
            // console.log(nombre,apellido,codigo)
            // Se crea un objeto con los valores de los inputs

           
            // Se envia la peticion POST
            try {
                console.log(nombre,apellido,codigo)
                const res = await fetch('http://localhost:3000/api/reservas/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({nombre,apellido,codigo})
                });

                const data = await res.json();
                console.log({ data });
                // formNuevaReserva.reset();
                
                Swal.fire({
                    icon: 'success',
                    title: 'Reserva creada',
                    text: 'La Reserva se ha creado correctamente'
                })

              setTimeout(() => {
                window.location.href = '/reservas';
              }, 2000);
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                })
            }
        })