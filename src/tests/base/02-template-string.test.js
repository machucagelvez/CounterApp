import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar Hola Fernando', () => {
    const nombre = 'Fernando'

    const saludo = getSaludo(nombre)

    expect(saludo).toBe('Hola ' + nombre)
  })

  test('getSaludo debe retornar Hola Ozzy si no hay argumento', () => {
    const saludo = getSaludo()

    expect(saludo).toBe('Hola Ozzy')
  })
})
