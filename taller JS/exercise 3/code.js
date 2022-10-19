let cantidad_formularios = prompt("que cantidad de triangulos necesita?")
let sectionForms = document.querySelector('#sectionFormJS')
for (let contador = 1; contador <= cantidad_formularios; contador++) {
    sectionForms.innerHTML += `
        <form class="my-5">
            <h1>TRIANGULO ${contador}</h1>
            <div class="mb-3">
                <label for="alturaTR${contador}" class="form-label">Altura del triangulo ${contador}</label>
                <input type="number" class="form-control" id="alturaTR${contador}">
            </div>
            <div class="mb-3">
                <label for="baseTR${contador}" class="form-label">Base del triangulo ${contador}</label>
                <input type="number" class="form-control" id="baseTR${contador}">
            </div>
            <button type="button" onclick="calculate(${contador})" class="btn btn-primary">Calcular</button>
        </form>
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