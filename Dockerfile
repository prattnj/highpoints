# Stage 1: build the client
FROM node:22-alpine AS client-build
WORKDIR /build
COPY client/package.json client/package-lock.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# Stage 2: production image
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev
COPY server/ ./server/
COPY --from=client-build /build/dist ./client/dist
RUN mkdir -p /app/server/data && chown -R node:node /app/server/data
USER node
EXPOSE 3000
CMD ["node", "server/index.js"]
