// if(1 === 0){
//     throw new Error('no puede dividir entre 0')
// }

describe('Pruemas en DemoComponent', () => {
    test('Esta prueba no debe de fallar', () => {
        
        // 1. Inicialización
        const message1 = 'Hola mundo'// Correcto
        // const message1 = 'Hola mundo    '// Error
    
        // 2. Estíomulo
        const message2 = message1.trim()
    
        //3. Observar el comportamiento esperado...
        expect( message1 ).toBe( message2 )
    })
 })

