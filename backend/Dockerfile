FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para dentro do container
COPY . .

# Expõe a porta da aplicação
EXPOSE 3001

# Comando padrão (será sobrescrito pelo docker-compose)
CMD ["npm", "start"]