// Função para validar formulário de cadastro
function validarFormularioCadastro(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const deficiencia = document.getElementById('deficiencia').value;
    
    if (!nome || !email || !telefone || !deficiencia) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    alert('Cadastro realizado com sucesso!');
    event.target.reset();
}

// Função para formatar número de telefone
function formatarTelefone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    input.value = value;
}

// Função para carregar mais vagas
function carregarMaisVagas() {
    // Aqui você pode adicionar a lógica para carregar mais vagas do servidor
    alert('Carregando mais vagas...');
}

// Função para candidatar-se a uma vaga
function candidatarVaga(vagaId) {
    // Aqui você pode adicionar a lógica para processar a candidatura
    alert('Candidatura enviada com sucesso!');
}

// Adicionar event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de cadastro
    const formCadastro = document.querySelector('form');
    if (formCadastro) {
        formCadastro.addEventListener('submit', validarFormularioCadastro);
    }
    
    // Campo de telefone
    const inputTelefone = document.getElementById('telefone');
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function() {
            formatarTelefone(this);
        });
    }
    
    // Botão de carregar mais vagas
    const btnCarregarVagas = document.querySelector('button:contains("Carregar Mais Vagas")');
    if (btnCarregarVagas) {
        btnCarregarVagas.addEventListener('click', carregarMaisVagas);
    }
    
    // Botões de candidatura
    const botoesCandidatura = document.querySelectorAll('button:contains("Candidatar-se")');
    botoesCandidatura.forEach(button => {
        button.addEventListener('click', function() {
            const vagaId = this.closest('.card').dataset.vagaId;
            candidatarVaga(vagaId);
        });
    });
}); 