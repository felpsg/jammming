# Jammming

Jammming é um aplicativo de criação de playlists do Spotify. Os usuários podem pesquisar a biblioteca de músicas do Spotify, criar uma lista personalizada e então salvá-la na sua conta do Spotify.

## Recursos

- Pesquise por músicas e veja os resultados em tempo real.
- Adicione músicas a uma lista personalizada.
- Remova músicas da lista personalizada.
- Altere a ordem das músicas na lista personalizada.
- Salve a lista personalizada na sua conta do Spotify.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Conta no Spotify](https://www.spotify.com/)

## Instalação e Uso

1. Clone o repositório na sua máquina:

    ```bash
    git clone https://github.com/seu_usuario/jammming.git
    ```

2. Navegue até a pasta do projeto e instale as dependências:

    ```bash
    cd jammming
    npm install
    ```

3. Renomeie o arquivo `.env.local.example` para `.env.local` e preencha os valores:

    ```bash
    REACT_APP_SPOTIFY_CLIENT_ID=seu_client_id
    REACT_APP_REDIRECT_URI=http://localhost:3000
    ```

4. Execute o aplicativo:

    ```bash
    npm start
    ```

5. Acesse o aplicativo em seu navegador:

    ```text
    http://localhost:3000
    ```

## Tecnologias usadas

- React
- React Router
- Redux
- Axios
- Spotify Web API

Por favor, note que você precisará substituir "seu_usuario" com seu nome de usuário do GitHub e "seu_client_id" com o ID do cliente que você recebeu do Spotify.
