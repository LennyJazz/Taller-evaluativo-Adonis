import router from '@adonisjs/core/services/router'
import LibrosController from '../../app/controller/librosController.js'

const Libros = new LibrosController ();

router.get('/Libros', Libros.obtenerTLibros)
router.get('/Libros/:id', Libros.obtenerLibros)
router.post('/Libros', Libros.crearLibros)
router.put('/Libros/:id', Libros.actualizarLibros)
router.delete('/Libros/:id', Libros.eliminarLibros)