import { assert } from 'chai'
import {insertarCarrito, price, image, vaciarCarrito, eliminarElemento} from '../app.js'


describe('App', function(){
    it('deberia insertar al carrito', function(){
        assert.equal(insertarCarrito(), 'insertado al carrito')
    })

    it('insertando al carrito deberia retornar un type string', function(){
        assert.typeOf(insertarCarrito(), 'string')
    })

    it('deberia devolver el precio correcto', function(){
        const precio = 34500
        assert.equal(price(precio),precio)
    })

    it('price deberia retornar un type number', function(){
        const precio = 34500
        assert.typeOf(price(precio), 'number')
    })

    it('deberia mostrar la imagen', function(){
        assert.equal(image(), 'mostrando imagen')
    })

    it('image deberia retornar un type string', function(){
        assert.typeOf(image(), 'string')
    })

    it('vaciarCarrito deberia mostrar carrito vaciado', function(){
        assert.equal(vaciarCarrito(), 'carrito vaciado')
    })

    it('vaciarCarrito deberia retornar un type string', function(){
        assert.typeOf(vaciarCarrito(), 'string')
    })

    it('eliminarElemento deberia mostrar elemento eliminado', function(){
        assert.equal(eliminarElemento(), 'elemento eliminado')
    })

    it('eliminarElemento deberia retornar un type string', function(){
        assert.typeOf(eliminarElemento(), 'string')
    })


})








