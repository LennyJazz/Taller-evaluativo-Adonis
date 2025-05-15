import pgdbLibros from '../database/pgdbLibros.js';

 class EditorialesController {
  async obtenerEditoriales({ response }) {
    const result = await pgdbLibros.query('SELECT * FROM editoriales');
    return response.json(result.rows);
  }

  async obtenerEditorialPorId({ params, response }) {
    const result = await pgdbLibros.query('SELECT * FROM editoriales WHERE id = $1', [params.id]);
    return response.json(result.rows[0]);
  }

  async crearEditorial({ request, response }) {
    const { nombre } = request.body();
    await pgdbLibros.query('INSERT INTO editoriales (nombre) VALUES ($1)', [nombre]);
    return response.status(201).json({ mensaje: 'Editorial creada' });
  }

  async actualizarEditorial({ params, request, response }) {
    const { nombre } = request.body();
    await pgdbLibros.query('UPDATE editoriales SET nombre = $1 WHERE id = $2', [nombre, params.id]);
    return response.json({ mensaje: 'Editorial actualizada' });
  }

  async eliminarEditorial({ params, response }) {
    await pgdbLibros.query('DELETE FROM editoriales WHERE id = $1', [params.id]);
    return response.json({ mensaje: 'Editorial eliminada' });
  }
}

export default EditorialesController;
