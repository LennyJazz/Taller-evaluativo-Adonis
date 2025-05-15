import pglibros from "../database/pgdbLibros.js";

class librosController {
  
  async obtenerTLibros({ request, response }) {
    const resultado = await pglibros.query('SELECT * FROM "libros"');
    console.log(resultado.rows);
    return response.json({ mensaje: resultado.rows });
  }

  async obtenerLibros({ params, response }) {
    const id = params.id;
    const resultado = await pglibros.query(
      'SELECT * FROM "libros" WHERE id = $1',
      [id]
    );
    console.log(resultado);
    return response.json({ mensaje: `libros ${id}`, datos: resultado.rows });
  }

  // Crear un libro
  async crearLibros({ request, response }) {
    const { id, titulo, autor, editorial_id, anio_publicacion } = request.body();
    const resultado = await pglibros.query(
      'INSERT INTO "libros" (id, titulo, autor, editorial_id, anio_publicacion) VALUES ($1, $2, $3, $4, $5)',
      [id, titulo, autor, editorial_id, anio_publicacion]
    );
    return response.json({ mensaje: "Libro creado", datos: resultado.rows });
  }

  // Actualizar un libro
  async actualizarLibros({ request, response, params }) {
    const id = params.id;
    const { titulo, autor, anio_publicacion, editorial_id } = request.body();

    if (typeof anio_publicacion !== "number" || anio_publicacion.toString().length !== 4) {
      return response.json({ mensaje: "El año de publicación debe ser un número de 4 dígitos." });
    }

    const result = await pglibros.query(
      'UPDATE "libros" SET titulo = $1, autor = $2, anio_publicacion = $3, editorial_id = $4 WHERE id = $5',
      [titulo, autor, anio_publicacion, editorial_id, id]
    );

    if (result.rowCount > 0) {
      return response.json({
        mensaje: "Libro actualizado exitosamente",
        data: { id, titulo, autor, anio_publicacion, editorial_id },
      });
    } else {
      return response.json({ mensaje: "Libro no encontrado o no se actualizó" });
    }
  }


  async eliminarLibros({ params, response }) {
    const id = params.id;
    const result = await pglibros.query('DELETE FROM "libros" WHERE id = $1', [id]);

    if (result.rowCount > 0) {
      return response.json({ mensaje: `Libro ${id} eliminado`, datos: result.rows });
    } else {
      return response.json({ mensaje: "Libro no eliminado" });
    }
  }
}

export default librosController;