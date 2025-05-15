import Router from "@adonisjs/core/services/router" ;
import editorialesController from "../../app/controller/editorialesController.js";

const editoriales = new editorialesController; 
 
Router.get('/editoriales', editoriales.obtenerEditoriales)
Router.get('/editoriales/:id', editoriales.obtenerEditorialPorId)
Router.post('/editoriales', editoriales.crearEditorial)
Router.put('/editoriales/:id', editoriales.actualizarEditorial)
Router.delete('/editoriales/:id', editoriales.eliminarEditorial)
