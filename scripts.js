const button = document.getElementById('button')


const validaInput = () => {
        email.classList.remove("error")
        email.nextElementSibling.classList.add("hidden");

        Fullname.classList.remove("error")
        Fullname.nextElementSibling.classList.add("hidden");

        dddT.classList.remove("error")
        dddT.nextElementSibling.classList.add("hidden");

        dddC.classList.remove("error")
        dddC.nextElementSibling.classList.add("hidden");

        cell.classList.remove("error")
        cell.nextElementSibling.classList.add("hidden");

        cpf.classList.remove("error")
        cpf.nextElementSibling.classList.add("hidden");

        dtNasc.classList.remove("error")
        dtNasc.nextElementSibling.classList.add("hidden");

        end.classList.remove("error")
        end.nextElementSibling.classList.add("hidden");

        num.classList.remove("error")
        num.nextElementSibling.classList.add("hidden");

        comple.classList.remove("error")
        comple.nextElementSibling.classList.add("hidden");
        
        cep.classList.remove("error")
        cep.nextElementSibling.classList.add("hidden");

        bairro.classList.remove("error")
        bairro.nextElementSibling.classList.add("hidden");

        cid.classList.remove("error")
        cid.nextElementSibling.classList.add("hidden");

        senha.classList.remove("error")
        senha.nextElementSibling.classList.add("hidden");

        confsenha.classList.remove("error")
        confsenha.nextElementSibling.classList.add("hidden");

        categ.classList.remove("error")
        categ.nextElementSibling.classList.add("hidden");

        categ1.classList.remove("error")
        categ1.nextElementSibling.classList.add("hidden");

        est.classList.remove("error")
        est.nextElementSibling.classList.add("hidden");

    if(!email.value) {
        email.classList.add("error")
        email.nextElementSibling.classList.remove("hidden");
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("error")
        email.nextElementSibling.classList.remove("hidden");
    }

    if(!Fullname.value) {
        Fullname.classList.add("error")
        Fullname.nextElementSibling.classList.remove("hidden");
    }

    if(!dddT.value) {
        dddT.classList.add("error")
        dddT.nextElementSibling.classList.remove("hidden");
    }

    if(!dddC.value) {
        dddC.classList.add("error")
        dddC.nextElementSibling.classList.remove("hidden");
    }

    if(!cell.value) {
        cell.classList.add("error")
        cell.nextElementSibling.classList.remove("hidden");
    }

    if(!cpf.value) {
        cpf.classList.add("error")
        cpf.nextElementSibling.classList.remove("hidden");
    }

    if(!dtNasc.value) {
        dtNasc.classList.add("error")
        dtNasc.nextElementSibling.classList.remove("hidden");
    }

    if(!end.value) {
        end.classList.add("error")
        end.nextElementSibling.classList.remove("hidden");
    }

    if(!num.value) {
        num.classList.add("error")
        num.nextElementSibling.classList.remove("hidden");
    }

    if(!comple.value) {
        comple.classList.add("error")
        comple.nextElementSibling.classList.remove("hidden");
    }

    if(!cep.value) {
        cep.classList.add("error")
        cep.nextElementSibling.classList.remove("hidden");
    }

    if(!bairro.value) {
        bairro.classList.add("error")
        bairro.nextElementSibling.classList.remove("hidden");
    }

    if(!cid.value) {
        cid.classList.add("error")
        cid.nextElementSibling.classList.remove("hidden");
    }

    if(!senha.value || senha.value.length > 10) {
        senha.classList.add("error")
        senha.nextElementSibling.classList.remove("hidden");
    }

    if(!confsenha.value || (senha.value) != (confsenha.value) ) {
        confsenha.classList.add("error")
        confsenha.nextElementSibling.classList.remove("hidden");
    }else{
        confsenha.classList.remove("error")
        confsenha.nextElementSibling.classList.add("hidden");
    }

    if (!web.checked && !mb.checked && !sys.checked) {
        categ.classList.add("error")
        categ.nextElementSibling.classList.remove("hidden");
    }

    if (!male.checked && !female.checked && !outro.checked) {
        categ1.classList.add("error")
        categ1.nextElementSibling.classList.remove("hidden");
    }

    if (!est.value) {
        est.classList.add("error")
        est.nextElementSibling.classList.remove("hidden");
    }
    
}

button.addEventListener('click', (event) =>{
    event.preventDefault()

    const email = document.getElementById('email')
    const Fullname = document.getElementById('Fullname')
    const dddT = document.getElementById('dddT')
    const dddC = document.getElementById('dddC')
    const cell = document.getElementById('cell')
    const cpf = document.getElementById('cpf')
    const dtNasc = document.getElementById('dtNasc')
    const end = document.getElementById('end')
    const num = document.getElementById('num')
    const comple = document.getElementById('comple')
    const cep = document.getElementById('cep')
    const bairro = document.getElementById('bairro')
    const cid = document.getElementById('cid')
    const senha = document.getElementById('senha')
    const confsenha = document.getElementById('confsenha')


    const categ1 = document.getElementById('categ1')
    const male = document.getElementById('male')
    const female = document.getElementById('female')
    const outro = document.getElementById('outro')


    const web = document.getElementById('web').checked
    const mb = document.getElementById('mb').checked
    const sys = document.getElementById('sys').checked
    const categ = document.getElementById('categ')

    const est = document.getElementById('est')


    validaInput();

    email.addEventListener("input", () => {
        validaInput();
    })
    
    Fullname.addEventListener("input", () => {
        validaInput();
    })
    
    dddT.addEventListener("input", () => {
        validaInput();
    })
    
    dddC.addEventListener("input", () => {
        validaInput();
    })
    
    cell.addEventListener("input", () => {
        validaInput();
    })
    
    cpf.addEventListener("input", () => {
        validaInput();
    })
    
    dtNasc.addEventListener("input", () => {
        validaInput();
    })
    
    end.addEventListener("input", () => {
        validaInput();
    })
    
    num.addEventListener("input", () => {
        validaInput();
    })
    
    comple.addEventListener("input", () => {
        validaInput();
    })
    
    cep.addEventListener("input", () => {
        validaInput();
    })
    
    bairro.addEventListener("input", () => {
        validaInput();
    })
    
    cid.addEventListener("input", () => {
        validaInput();
    })
    
    senha.addEventListener("input", () => {
        validaInput();
    })
    
    confsenha.addEventListener("input", () => {
        validaInput();
    })

    categ.addEventListener("input", () => {
        validaInput();
    })

    categ1.addEventListener("input", () => {
        validaInput();
    })

    est.addEventListener("input", () => {
        validaInput();
    })

})

