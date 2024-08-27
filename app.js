const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');
const img = document.querySelector('.imagem');
const h2 = document.querySelector('.h2');
const paragrafo = document.querySelector('.paragrafo');
const  containerOutputImagem = document.querySelector('.container__output__imagem');
const containerOutputMensagem = document.querySelector('.container__output__mensagem');
const observavao__paragrafo = document.querySelector('.observavao__paragrafo');
const vazio = document.querySelector('.vazio');
const isVisible = false;


function btnEncriptar(){     
    if(String(textArea.value) != ''){
        if (!validarMensagem(textArea.value)){    
            mensagem.value = criptografar(textArea);
            textArea.value='';
            visibilidade(true);
        }else{
            alert("O texto deve conter apenas letras minúsculas sem acentos e sem caracteres especiais.");        
            return '';
        }
    }else{
        areaTextoVazia();
    }
    
}

function btnDescriptografar(){
    if(String(textArea.value) != ''){
        if (!validarMensagem(textArea.value)){    
            mensagem.value = descriptografar(textArea);
            textArea.value='';
            visibilidade(true);
        }else{
            alert("O texto deve conter apenas letras minúsculas sem acentos e sem caracteres especiais.");        
            return '';
        }
    }else{
        areaTextoVazia();
    }
}

function validarMensagem(mensagemInformada){
     return (/[^a-z\s]/.test(mensagemInformada)); 
}

function visibilidade(isVisivel){
    if(isVisivel){
        containerOutputMensagem.style.display = 'flex';
        img.style.display = 'none';
        h2.style.display = 'none';
        paragrafo.style.display = 'none';
        observavao__paragrafo.innerHTML = 'Apenas letras minúsculas e sem acento'; 
        observavao__paragrafo.style.color = 'gray';      
    }else{
        containerOutputMensagem.style.display = 'none';
        img.style.display = 'block';
        h2.style.display = 'block';
        paragrafo.style.display = 'block';        
    }

}

function areaTextoVazia(){
    observavao__paragrafo.style.color = 'red';
    observavao__paragrafo.style.fontWeight = '400';
    observavao__paragrafo.innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar!';
    //vazio.style.border = "4px solid red";
    //vazio.style.borderRadius = "24px";
}

function criptografar(textArea){
    let textoCriptografado = '';
    mensagemInformada = textArea.value;
    for(i=0; i< mensagemInformada.length; i++){
        if(mensagemInformada[i] === 'a'){
            textoCriptografado = textoCriptografado.concat('ai');             
        }else if(mensagemInformada[i] === 'e'){
            textoCriptografado = textoCriptografado.concat('enter');
        }else if(mensagemInformada[i] === 'i'){
            textoCriptografado = textoCriptografado.concat('imes');
        }else if(mensagemInformada[i] === 'o'){
            textoCriptografado = textoCriptografado.concat('ober');          
        }else if(mensagemInformada[i] === 'u'){
            textoCriptografado = textoCriptografado.concat('ufat');
        }else if(mensagemInformada[i] === ' '){
            textoCriptografado = textoCriptografado.concat(' ');
        }else{
            textoCriptografado = textoCriptografado.concat(mensagemInformada[i]);                    
        }            
    }
    return textoCriptografado;  
}

function descriptografar(textArea){    
    let final = [];
    mensagemCriptografa = textArea.value;
    const arrayString = mensagemCriptografa.split(' ');
    for(i=0; i< arrayString.length; i++){       
        final[i] = arrayString[i];       
        if(final[i].includes('ai')){            
            final[i] = final[i].replaceAll('ai','a'); 
        }if(final[i].includes('enter')){
            final[i] = final[i].replaceAll('enter', 'e');
        }if(final[i].includes('imes')){
            final[i] = final[i].replaceAll('imes', 'i');
        }if(final[i].includes('ober')){
            final[i] = final[i].replaceAll('ober', 'o');
        }if(final[i].includes('ufat')){           
            final[i] = final[i].replaceAll('ufat', 'u');
        }        
    }
    return final.join(' ');  
}

function copiar() {
    let copyText = document.querySelector('.mensagem');
    copyText.select();
    document.execCommand('copy');
    visibilidade(false);   
    //alert('Texto copiado com sucesso!'); 
    
}

//document.querySelector('.btn-copiar').addEventListener('click', copy);