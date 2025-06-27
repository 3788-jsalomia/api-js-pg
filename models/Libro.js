const pool = require('../config/db')

class Libro{
    constructor({id_libro,titulo,id_autor,descripcion,genero,anio,editorial}){
        this.id_libro=id_libro;
        this.titulo=titulo;
        this.id_autor=id_autor;
        this.descripcion=descripcion;
        this.genero=genero;
        this.anio=anio;
        this.editorial=editorial;
    }
}