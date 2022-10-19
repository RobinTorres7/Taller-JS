let cantidad = prompt("que cantidad de numeros necesitas calcular?")
let sectionForms = document.querySelector('#sectionFormJS')
for (let contador = 1; contador <= cantidad; contador++) {
    sectionForms.innerHTML += `
        
            <h1> NUMEROS PARES ${contador}</h1>
            <div class="mb-3">
                <label for="alturaTR${contador}" class="form-label">RESULTADO ${contador}</label>

                // <input type="number" class="form-control" id="alturaTR${contador}">

            </div>
             
        `
}


function calculate(formTriangle) {
    let altura = document.querySelector(`#alturaTR${formTriangle}`).value
    let base = document.querySelector(`#baseTR${formTriangle}`).value
        // let base = document.querySelector("#baseTR"+formTriangle)
        // -FORMULA: (base x altura / 2)
    let calculo = (base * altura) / 2
    alert(`El area del triangulo es: ${calculo}`)
}
