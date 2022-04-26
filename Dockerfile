FROM monfex/web-app-hosting:1
COPY wwwroot /app/wwwroot
WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . .
# EXPOSE 3000
