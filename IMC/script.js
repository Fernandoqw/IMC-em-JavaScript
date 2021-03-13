function calcular(){
    let nom = document.getElementById('nome').value
    let alt = document.getElementById('altura').value
    let pes = document.getElementById('peso').value
    let res = document.getElementById('res')
    if (nom.length == 0 || alt.length == 0 || pes.length == 0){
        window.alert('ERRO - preencha todas informações !')     
    }   
        let valorImc = (pes / (alt * alt)).toFixed(1)
        let classificação = ''
        if (valorImc < 18.5){
            classificação = ' abaixo do peso '
        }else if (valorImc < 25){
            classificação = 'com peso ideal. Parabéns!'
        }else if(valorImc < 30){
            classificação = 'levemente acima do peso'
        }else if (valorImc < 35){
            classificação = 'com obesidade grau I'
        }else if (valorImc < 40){
            classificação = 'com obesidade grau II'
        }else {
            classificação = 'com obesidade grau III. Cuidado! '
        }
        res.innerHTML = `${nom} seu IMC é ${valorImc} e você está ${classificação} `
        }
    
