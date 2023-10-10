const btn = document.querySelector("#btnSeach")
const rua = document.querySelector("#rua")
const estado = document.querySelector("#estado")
const cidade = document.querySelector("#cidade")
const inpCEP = document.querySelector("#cep")


const seachCep = async ()=>{
    try{

        const cep = inpCEP.value
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if(!response.ok){
            throw new Error("Não foi possivel acessar os dados da api")
        }
        const resultado = await response.json()
        estado.value =  resultado.uf;
        rua.value = resultado.logradouro;
        cidade.value = resultado.localidade;
        console.log(resultado)
    } catch (error) {
        console.log(error)
    } 
}

const cepAtt = ()=>{
    
        seachCep()
    

}

btn.addEventListener("click",cepAtt)


