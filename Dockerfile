FROM nginx

COPY package.json /usr/share/nginx/html/
COPY node_modules /usr/share/nginx/html/node_modules
COPY resources /usr/share/nginx/html/resources/
COPY index.html /usr/share/nginx/html/
COPY user.html /usr/share/nginx/html/

RUN npm install