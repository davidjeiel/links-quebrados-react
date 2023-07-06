# Links Quebrados React

Este é um projeto React que verifica os links quebrados de um site fornecido e exibe informações sobre cada link.

## Funcionalidades

- Verificação de links quebrados em um site.
- Exibição dos endereços das páginas onde os links estão alocados.
- Exibição do link com problema.
- Exibição do status da requisição do link.
- Identificação do tipo de link (tel:, src, href, etc.).
- Suporte a links com caracteres especiais, como '#'.
- Suporte a links iniciados em '/' como subdiretórios da URL raiz do site.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:

- Node.js (versão 12 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/davidjeiel/links-quebrados-react.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd links-quebrados-react
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Uso

1. Abra o arquivo `src/App.js` no seu editor de código.

2. Na linha 15, substitua `'https://www.example.com'` pela URL do site que deseja verificar os links:

   ```jsx
   <LinkChecker url="https://www.example.com" />
   ```

3. Salve o arquivo após fazer as alterações.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra seu navegador e acesse `http://localhost:3000` para ver os resultados da verificação de links.

## Contribuição

Contribuições são bem-vindas! Se você encontrar um bug ou tiver alguma melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Certifique-se de seguir as diretrizes de contribuição do projeto.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Recursos Adicionais

- [Documentação do React](https://reactjs.org/docs)
- [Tutorial de Hooks do React](https://reactjs.org/docs/hooks-intro)
- [Tutorial de Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---
