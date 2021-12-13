import './styles.css'

document.getElementById('elegir').addEventListener('click', () => {
    const textarea = document.getElementById('civil-introducidas').value
    const arrayCivil = textarea.split(',')
    const civilValidas = []
    const civilInvalidas = []

    arrayCivil.map(e => fetch('https://examen-abel-garcia.herokuapp.com/existe/' + e)
        .then(data => data.json()).then(data => {
            if (data.existe === true) {
                civilValidas.push(e)
            } else {
                civilInvalidas.push(e)
            }
        })
    )
    /*Este metodo no funciona */
    function elegirAzar() {
        const num = parseInt(document.getElementById('num').value)
        const azar = []
        for (let i = 0; i < num; i++) {
            azar.push(civilValidas[Math.round(Math.random() * ((civilValidas.size - 1) - 0) + 0)])
            console.log(civilValidas[Math.round(Math.random() * ((civilValidas.size - 1) - 0) + 0)])
        }
        console.log(azar)
        document.getElementById('validas').innerHTML = azar.toString()
    }
    elegirAzar()
    document.getElementById('invalidas').innerHTML = civilInvalidas.toString()
})
