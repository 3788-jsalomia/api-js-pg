

const pool = require('../config/db')

class Autor {
    constructor({ id_autor, nombre, apellido, genero, fecha_nacimiento, nacionalidad, biografia }) {
        this.id_autor = id_autor;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.nacionalidad = nacionalidad;
        this.biografia = biografia;
        this.genero = genero;
    }

    static async getAll() {
        const result = await pool.query('SELECT * FROM autor ORDER BY apellido');
        return result.rows.map(row => new Autor(row));
    }

    static async getById(id) {
        const result = await pool.query('SELECT * FROM autor WHERE id_autor=$1', [id]);
        if (result.rowCount === 0) return null;
        return new Autor(result.rows[0]);
    }

    static async create(autorData) {
        const { nombre, apellido, genero, fecha_nacimiento, nacionalidad, biografia } = autorData;
        const query = 'INSERT INTO autor(nombre,apellido,genero,fecha_nacimiento,nacionalidad,biografia) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ';

        const values = [nombre, apellido, genero, fecha_nacimiento, nacionalidad, biografia];
        const result = await pool.query(query, values);
        return new Autor(result.rows[0]);
    }

    static async delete(id) {
        const result = await pool.query("DELETE FROM autor WHERE id_autor=$1 RETURNING *", [id]);
        return result.rowCount > 0;
    }

    static async update(id_autor, autor) {
        const result = await pool.query(
            'UPDATE autor SET nombre = $1, apellido = $2, genero = $3, fecha_nacimiento = $4, nacionalidad = $5, biografia = $6 WHERE id_autor = $7 RETURNING *',
            [autor.nombre, autor.apellido, autor.genero, autor.fechaNacimiento, autor.nacionalidad, autor.biografia, id_autor]
        );
        if (result.rows.length > 0) {
            return new Autor(result.rows[0]);
        } else {
            throw new Error('Autor not found');
        }
    }
}


module.exports = Autor;
