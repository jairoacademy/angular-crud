# Work (Node v14.21.3) - install: choro
cd C:\Users\jairo.soares\developer\others\angular\angular-crud
    _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
- Angular CLI: 12.2.18
- Node: 14.21.3
- Package Manager: npm 6.14.18

# Home
cd /home/jairo/MEGA/jairo.soares/workspace/stack/front/angular/experiments/angular-crud
- Não está segurando a versão do node



# Links
https://v14.angular.io/guide/lazy-loading-ngmodules
https://m3.material.io/styles/color/system/overview
https://v12.material.angular.io/

# Windows installer
- GitHub CLI
- Choco
- Node (and nvm or fnm)

# Install GitHub CLI on Linux to connect my GitHub Account
- sudo apt install gh
- gh auth login
- > When on WSL, open the browser manually and digit the code
https://github.com/login/device

# Angular SpringBoot Course with Loiane Groner (Angular CLI: 12.2.2)
https://www.youtube.com/watch?v=qJnjz8FIs6Q&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY
- A new version every 6 months!
- From 6.0.8 to 12.2.2
- Angular  7 (Out 2018)
- Angular  8 (Mai 2019)
- Angular  9 (Fev 2020)
- Angular 10 (Jun 2020)
- Angular 11 (Nov 2020)
- Angular 12 (Mai 2021)
- Angular 17 (Modern Angular!)
- Angular 18 (The last)

# 14/11/2024 (64)
- Class  4 (creating module)
- Class  5 (creating Material Table)
- Class  6 (creating Material Table to list courses)
- Class  7 (css Material Table and shared model)
- Class  8 (creating service)

# 15/11/2024 (64)
- Class  9 (Http call and rxjs)
- Class 10 (Spinner)
- Class 11 (Error handling)
- Class 12 (Pipe to show icon)
- Class 13 (environment java and maven to spring) - nothing implemented

# 16/11/2024 (64)
- Class 14 (hello world with spring) - creating project with Cursor AI
- Class 15 (spring list courses)
- Class 16 (connecting Angular API and Thunder Client use)


# Angular Docs (Documentation)
https://v14.angular.io/docs
- CLI Command Reference:
  \Reference\CLI Command Reference


# VSCode extensions
- Angular Extension Pack (Loiane Groner)
  - TS Hero > Organize imports
- Extension Pack for Java + Spring (not work for Cursor IDE)
https://marketplace.visualstudio.com/items?itemName=loiane.java-spring-extension-pack
- Spring Boot Extension Pack
- Lombok Annotation
- Thunder Client (alternative Postman)
- Peacock (when multi VSCode opened)

Extension Pack for Java + Spring

ext install loiane.java-spring-extension-pack

# Using a specific node version
nvm install 14.21.3
nvm use 14.21.3
nvm alias default 14.21.3


# Install
- nodejs
  - node -v
  - Install Angular CLI:
    - npm install -g @angular/cli@12.2.18
    - ng --version
  - Creating projeto:
    - ng new angular-crud
     - y, SCSS

# Angular Material
https://v12.material.angular.io/
ng add @angular/material

# rxjs
- Observable and http

# Executing the projeto
ng serve

# Creating module
- cria modulo e roteamento e o importa o roteamento no modulo
ng g m courses --routing

# Creating component
ng g c courses/courses

# Lazy loading basic (explanatioin)
https://v14.angular.io/guide/lazy-loading-ngmodules

# Material Components
- Table
https://v12.material.angular.io/components/table/overview

# Creating interface to models
ng g interface courses/model/course

# Styling
Card >> container

# Modulos separadas para agrupar imports
ng g m shared/app-material

# Creating service
ng g s courses/services/courses

# Spinner
https://v12.material.angular.io/components/progress-spinner/overview


# Creatubg Dialog
ng g m shared
ng g c shared/components/error-dialog

# Icons
https://v12.material.angular.io/components/icon/overview
https://fonts.google.com/icons

# Creating Pipe  sharred
ng g pipe shared/pipes/category

## Know the environment dev to AI (!?)
# tO Maven project
mvn dependency:tree

# to view\now the directoryies
tree src/main/java/academy/jairo/springboot/springcrud

# H2 Console
http://localhost:8080/h2-console


# Proxy to access back-end (1 or 2)
1) Through angular.json
"serve": {
   "options": {
      "proxyConfig": "proxy.conf.js"
  }
}
> ng serve


2) Through package.json at "script": "start"
- "ng serve --proxy-confg proxy.conf.js"
> npm run start
