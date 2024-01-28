# Use a imagem base do Node.js versão 16
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos, incluindo src/, para o diretório de trabalho
COPY . .

# Exponha a porta definida no arquivo .env
EXPOSE 3001

# Comando para iniciar o aplicativo
CMD ["npm", "start"]