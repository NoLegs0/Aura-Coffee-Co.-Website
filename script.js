// CONTATO
        
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector("#formulario");
        const nome = document.querySelector("input[name='nome']");
        const email = document.querySelector("input[name='email']");
        const mensagem = document.querySelector("textarea[name='mensagem']");
        const pedido = document.querySelector("select[name='tipo-pedido']");
        const aviso = document.querySelector("#alerta");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nomeDigitado = nome.value.trim();
            const emailDigitado = email.value.trim();
            const mensagemDigitado = mensagem.value.trim();
            
            aviso.textContent = "";
            
            if (nomeDigitado === "") {
                aviso.textContent = "Por favor, preencha o campo nome corretamente.";
                return;
            };
            
            if (!emailDigitado.includes('@') || !emailDigitado.includes('.com')) {
                aviso.textContent = "Por favor, preencha o campo E-Mail corretamente usando '@' e '.com'.";
                return;
            };
            
            if (pedido.value === "") {
                aviso.textContent = "Por favor, selecione uma opção nos tipos de pedido.";
                return;
            };
            
            if (mensagemDigitado === "") {
                aviso.textContent = "Por favor, preencha o campo com seu pedido ou uma dúvida.";
                return;
            };
            
            aviso.textContent = "Pedido feito com sucesso! Agradecemos por fazer o pedido.";
            form.reset();
        });
    });

    // MENU HAMBÚRGUER 
        
    const classeMenu = document.querySelector(".menu-hamburguer");
    const menuNav = document.querySelector("header nav");
    
    classeMenu.addEventListener('click', function(){
        menuNav.classList.toggle("ativo");
        classeMenu.classList.toggle("ativo");
    });
    
    // BOTÃO ENCOMENDAR
    
    const btnEncomenda = document.querySelectorAll(".btn-card");
    btnEncomenda.forEach(function(btn) {
    btn.addEventListener('click', function () {
      
        btn.classList.toggle("selecionado")
        
        const tipoCafe = btn.closest(".card"). querySelector(".card-titulo").textContent;
        const mensagemPedido = document.querySelector("textarea[name='mensagem']")
        mensagemPedido.value = `Olá, gostaria de encomendar o ${tipoCafe}` 
           
           const tipoPedido = document.querySelector("select[name='tipo-pedido']");
           tipoPedido.value = "graos"
           
        document.querySelector("#contato").scrollIntoView({ behavior: 'smooth' });
    })
    });