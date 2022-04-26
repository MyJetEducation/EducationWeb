FROM nginx:latest
COPY wwwroot /app/wwwroot
COPY default /etc/nginx/sites-enabled/default
WORKDIR /app
CMD ["nginx", "-g", "daemon off;"]
