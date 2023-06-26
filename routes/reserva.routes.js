// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const { obtenerReservas, crearReservas, actualizarReserva,eliminarReservas } = require('../controllers/reserva.controllers');

const express = require('express');
const router = express.Router()
 

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

router.get('/reservas', (req, res) => {
    res.render('index');
});

router.get('/reserva/editar/:id', (req, res) => {
    const id = req.params.id;
    res.render('editar', { id: id });
});

router.get('/reservas/crear', (req, res) => {
    res.render('crear');
});


// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
 

router.get('/api/reservas/', obtenerReservas);


router.post('/api/reservas/create',  crearReservas);

router.put('/api/reservas/:id', actualizarReserva);

router.delete('/api/reserva/:id', eliminarReservas);

 
 module.exports = router;