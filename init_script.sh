#!/bin/bash
echo "npm init -y" && \
npm init -y && \
echo "npm i express" && \
npm i express && \
echo "npm i mongodb" && \
npm i mongodb && \
echo "npm i -D nodemon" && \
npm i -D nodemon && \
echo "npm i dotenv" && \
npm i -D morgan && \
npm i dotenv && \
echo "npm install -D @babel/core @babel/preset-env @babel/node" && \
npm install -D @babel/cli @babel/core @babel/preset-env && \
echo "create babel.config.json" && \
touch babel.config.json && \
echo "{\"presets\": [\"@babel/preset-env\"] }" >> babel.config.json && \
npm i -D @babel/node && \
npm install @babel/runtime && \
npm install -D @babel/plugin-transform-runtime && \

echo "Crear estructura de proyecto" && \
mkdir src && cd src && \
mkdir api && mkdir config && mkdir services && mkdir models && mkdir scripts && mkdir suscribers && mkdir routes && mkdir controllers && mkdir utils && mkdir middlewares && mkdir test && \
touch app.js && \
cd ../ && \

echo "Git init" && \
git init . && \
touch .gitignore && \
echo "node_modules/" >> .gitignore && \
echo "disti/" >> .gitignore && \
echo "package-lock.json" >> .gitignore 


