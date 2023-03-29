FROM node:16-alpine
ENV PORT=5020
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
CMD ["node", "server.js"]
EXPOSE 5020