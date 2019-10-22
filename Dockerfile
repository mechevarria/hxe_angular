# build using nodejs
FROM node:10 as builder

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY src/ ./src/

RUN npm run build

# run using nginx
FROM nginx

ARG HXE_HOST
ARG HXE_PORT
ENV HXE_HOST=${HXE_HOST} \
  HXE_PORT=${HXE_PORT} \
  uri='$uri' \
  args='$args'

COPY ./nginx/host.* /etc/nginx/

CMD /bin/sh -c \ 
  "envsubst < /etc/nginx/host.tmpl > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html