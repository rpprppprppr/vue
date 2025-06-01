FROM node:22.16-alpine AS vue
ARG BASE_API_URL

ENV BASE_API_URL=$BASE_API_URL

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:stable
WORKDIR /app
COPY ./deploy/nginx/conf.d /etc/nginx/templates
COPY ./deploy/nginx/includes /etc/nginx/includes
COPY ./deploy/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=vue /app/dist /app