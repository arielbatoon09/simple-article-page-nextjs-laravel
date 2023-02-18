# NextJS-and-Laravel-REST-API
Ready made development environment for NextJS with Laravel Breeze API

# REMEMBER TO RUN THIS COMMAND BEFORE USING THE ENVIRONMENT
1. Run this command in backend folder terminal. Command: composer update
1. Run this 2 commands in frontend folder terminal. Command: npm install & npm run build

# Followed Tutorial
1. https://www.youtube.com/watch?v=NfgWgoo4tj8&list=PL1JpS8jP1wgA9EpT9UO0UuPrFcJxGUcxH&index=2
2. https://www.youtube.com/watch?v=Y1i1YkTAAmk&list=PL1JpS8jP1wgBgHJBMg9EZ6sR45LaF9cvE&index=2

# Environment Technology Stacks Installed
1. NextJS with ESLint
2. TailwindCSS
3. Axios & SWR
4. Laravel & Laravel Breeze

# Creating Project From The Scratch Installation Guide
Part 1 - Front-end:
1. Setup Front-end by installing NextJS dependencies. Command: npx create-next-app appname
2. Create .env.local in Front-end main directory
3. Install Axios. Command: npm install axios
4. Install SWR. Command: npm install swr
5. Install Style Tech Stacks. (Eg. SASS, TailwindCSS, MaterialUI, or ChakraUI). In this project I will use TailwindCSS.
6. Install Prettier. Command: npm install --save-dev --save-exact prettier
7. Setup .prettierrc.json and add it on package.json in scripts category. Command to execute changes: npm run format & npm run format:fix
8. Import the Axios in lib folder and setup the .env
9. Install NextAuth & Setup. Command: npm install next-auth

Part 2 - Backend:
1. Install Laravel Environment
2. Install Laravel Breeze. Command: composer require laravel/breeze --dev
3. Install Laravel Breeze API. Command: php artisan breeze:install api
