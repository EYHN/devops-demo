FROM node:13.2.0-alpine

# 安装依赖
# 这里仅拷贝 package.json 和 yarn.lock 文件，可以利用 docker 缓存。
COPY package.json yarn.lock ./
RUN npm install

# 拷贝整个应用文件夹，在 .dockerignore 中指定的忽略 node_modules
COPY . .

# 运行应用
EXPOSE 3000
CMD [ "npm", "start" ]