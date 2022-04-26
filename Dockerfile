FROM nginx:latest
COPY wwwroot /app/wwwroot
COPY default /etc/nginx/conf.d/default.conf
WORKDIR /app
CMD ["nginx", "-g", "daemon off;"]
