window.onload=function(){

    const btn = document.querySelector("#calc");
    let imc;

    btn.addEventListener("click", function(e) {

        //impede o envio do form
        e.preventDefault();

        var altura = document.querySelector("#alt").value;
        const peso = document.querySelector("#peso").value;
        
        altura = (altura*0.01);

        imcA = (peso/(Math.pow(altura, 2)));

        imc = imcA.toFixed(1);

        if(altura === '' || peso === '')
        {
            //alerta
            alert('Um dos campos não foi preenchido');
        }
        else
        {
            if(imc <= 18.5)
            {
                document.getElementById('rlt').innerHTML = "Seu IMC é " + imc + " - Abaixo do peso";
            }
            else if(imc > 18.5 && imc <= 24.9)
            {
                document.getElementById('rlt').innerHTML = "Seu IMC é " + imc + " - Peso normal";
            }
            else if(imc >= 25.0 && imc <= 29.9)
            {
                document.getElementById('rlt').innerHTML = "Seu IMC é " + imc + " - Pré-obesidade";
            }
            else if(imc >= 30.0 && imc <= 34.9)
            {
                document.getElementById('rlt').innerHTML = "Seu IMC é " + imc + " - Obesidade Grau 1";
            }
            else if(imc >= 35.0 && imc <= 39.9)
            {
                document.getElementById('rlt').innerHTML = "Seu IMC é " + imc + " - Obesidade Grau 2";
            }
            else if(imc >= 40.0)
            {
                document.getElementById('rlt').innerHTML = "Seu IMC é " + imc + " - Obesidade Grau 3";
            }
        }
    });
}

