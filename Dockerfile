FROM node:12

# Criar um diretório para o app ficar armazenado no espaço da nuvem
WORKDIR /app

# Copia arquivos que se iniciam com package com extesão .json 
COPY package*.json /mobile

# Instala as depedencias que copiaste do arquivo anterior
RUN npm install

# Copiar os arquivos da aplicação na imagem do Docker
COPY . /app

# Porta em que o APP será exposto
EXPOSE 3333

# Agora tem temos todos os arquivos na nossa imagem, vamos rodar
CMD ["node", "app/src/server.js"]

