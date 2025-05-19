Vinicius Santos Tiberio
Lidiane Marques da Silva

# Sistema de Lançamento de Notas
Um sistema para lançamento de notas de alunos com validações, cálculos de média e exibição de resultados, integrado com CI (GitHub Actions) e análise de código (SonarCloud).

## Funcionalidades

- Lançamento de notas de alunos
- Validação de notas (entre 0 e 10)
- Cálculo automático da média
- Determinação da situação do aluno com base na média:
  - Média menor que 5: Reprovado
  - Média entre 5 e menor que 7: Recuperação
  - Média 7 ou superior: Aprovado
- Armazenamento local dos dados (localStorage)
- Listagem de todos os alunos cadastrados

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Jest (Testes Automatizados)
- GitHub Actions (CI)
- SonarCloud (Análise de Código)

## Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn

## Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sistema-notas.git
cd sistema-notas
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto localmente:

```bash
npm start
```

O sistema estará disponível em `http://localhost:3000`.

## Testes

Para executar os testes automatizados:

```bash
npm test
```

Isso irá executar todos os testes e gerar relatórios de cobertura.


## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request
