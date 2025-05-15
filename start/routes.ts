import "./routes/routesLibros.js"
import "./routes/routesEditoriales.js"
import router from '@adonisjs/core/services/router'
router.get('/', async () => {
  return { mensaje: 'Bienvenido a la API de Evaluación 📚' }
})