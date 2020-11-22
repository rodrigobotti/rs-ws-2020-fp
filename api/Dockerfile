FROM node:fermium-alpine
WORKDIR /app
COPY . /app/
ENV NODE_ENV=production
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]
