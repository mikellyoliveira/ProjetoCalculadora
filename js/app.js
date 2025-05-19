document.addEventListener('DOMContentLoaded', () => {
   
    const calculator = new Calculator();
    
    
    const form = document.getElementById('formNotas');
    const nomeInput = document.getElementById('nome');
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const resultadoDiv = document.getElementById('resultado');
    const listaAlunosDiv = document.getElementById('lista-alunos');
    
    
    let alunos = [];
    
    
    if (localStorage.getItem('alunos')) {
        alunos = JSON.parse(localStorage.getItem('alunos'));
        atualizarListaAlunos();
    }
    
    
    [nota1Input, nota2Input].forEach(input => {
        input.addEventListener('input', (e) => {
            const valor = parseFloat(e.target.value);
            if (!calculator.validarNota(valor)) {
                e.target.classList.add('input-invalido');
                
                
                let mensagemErro = e.target.nextElementSibling;
                if (!mensagemErro || !mensagemErro.classList.contains('mensagem-erro')) {
                    mensagemErro = document.createElement('div');
                    mensagemErro.classList.add('mensagem-erro');
                    mensagemErro.textContent = 'Nota deve estar entre 0 e 10';
                    e.target.parentNode.insertBefore(mensagemErro, e.target.nextSibling);
                }
            } else {
                e.target.classList.remove('input-invalido');
                
                
                const mensagemErro = e.target.nextElementSibling;
                if (mensagemErro && mensagemErro.classList.contains('mensagem-erro')) {
                    mensagemErro.remove();
                }
            }
        });
    });
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
       
        resultadoDiv.classList.remove('aprovado', 'recuperacao', 'reprovado');
        
        const nome = nomeInput.value.trim();
        const nota1 = nota1Input.value;
        const nota2 = nota2Input.value;
        
        
        if (!nome) {
            alert('Por favor, informe o nome do aluno');
            return;
        }
        
        try {
            
            const resultado = calculator.processarNotas(nota1, nota2);
            
            
            resultadoDiv.innerHTML = `
                <h3>Resultado de ${nome}</h3>
                <p>Média: ${resultado.media}</p>
                <p>Situação: ${resultado.situacao}</p>
            `;
            
           
            resultadoDiv.classList.add(resultado.situacao.toLowerCase());
            resultadoDiv.style.display = 'block';
            
           
            const aluno = {
                nome,
                nota1,
                nota2,
                media: resultado.media,
                situacao: resultado.situacao
            };
            
            alunos.push(aluno);
            
       
            localStorage.setItem('alunos', JSON.stringify(alunos));
            
            
            atualizarListaAlunos();
            
            
            form.reset();
            
        } catch (error) {
            alert(error.message);
        }
    });
    
    
    function atualizarListaAlunos() {
        if (alunos.length === 0) {
            listaAlunosDiv.innerHTML = '';
            return;
        }
        
        let html = '<h2>Alunos Registrados</h2>';
        
        alunos.forEach((aluno, index) => {
            html += `
                <div class="aluno-item ${aluno.situacao.toLowerCase()}">
                    <p><strong>Nome:</strong> ${aluno.nome}</p>
                    <p><strong>Notas:</strong> ${aluno.nota1} e ${aluno.nota2}</p>
                    <p><strong>Média:</strong> ${aluno.media}</p>
                    <p><strong>Situação:</strong> ${aluno.situacao}</p>
                    <button class="remover-aluno" data-index="${index}">Remover</button>
                </div>
            `;
        });
        
        listaAlunosDiv.innerHTML = html;
        
        document.querySelectorAll('.remover-aluno').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                alunos.splice(index, 1);
                localStorage.setItem('alunos', JSON.stringify(alunos));
                atualizarListaAlunos();
            });
        });
    }
}); 