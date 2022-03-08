
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','_imagens/mulherbebe.png')
            }else if (idade < 25) {
                img.setAttribute('src', '_imagens/mulherjovem.png')
            } else if (idade < 50){
                img.setAttribute('src', '_imagens/mulheradulta.png')
            } else {
                img.setAttribute('src', '_imagens/mulheridosa.png')
            }
        }else if (fsex[1].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', '_imagens/homembebe.png')
            }else if (idade < 25) {
                img.setAttribute('src', '_imagens/homemjovem.png')
            } else if (idade < 50){
                img.setAttribute('src', '_imagens/homemadulto.png')
            } else {
                img.setAttribute('src', '_imagens/homemidoso.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}