PROYECTO BASE DE DATOS

Proyecto realizado en el BootCamp FullStack Developer , en la que realizamos una base de datos para un videoclub a distancia. En el que incluimos varias tablas como (Usuarios,pedidos,peliculas)

Usaremos el modelo vista-controlador para estructurar el proyecto. En la que incluiremos un crud.

REQUISITOS DEL TRABAJO
● Tecnologias :

ES6
NodeJs
Express
API
Git
Postman
EMPOINTS REQUERIDOS
#USUARIOS

● Endpoint de Alta de usuario

● Endpoint de Perfil

● Endpoint de Baja de usuario

● Endpoint de Login de usuario

#PELICULAS

● Endpoint busqueda nombre

● Endpoint busqueda por id

● Endpoint busqueda todas las pelicuals

● Endpoint filtrar por género

● Endpoint filtrar por actores

#PEDIDOS

● Endpoint crear un pedido

##GESTION DE DATOS

● SEQUELIZE

#TECNOLOGIAS UTILIZADAS.

● EXPRESS

● NODEMON : Nos ayudara a que el servidor este levantado a cada cambio que hagamos.

● COLORS : Dara formato a nuestro proyecto

● MORGAN : para que nos muestre los mensajes por terminal al realizar peticiones al servidor

● WINSTON : creara la posibilidad de generar logs y guardarlos en el archivo logs

● CORS : nos ayudara con el control de acceso a nuestra API

● JSONWEBTOKEN : para el uso de gestion de tokens

● BCRYPT : nos ayudara a encriptar las contraseñas

COMANDOS BÁSICOS UTILIZADOS
npm init

npm install

npm update

npm run dev

npm run start

npm install cors jsonwebtoken bcrypt

sequelize model:generate --name user --attributes name:string, password:string, email:string

sequelize db:create (creacion de base de datos)

sequelize db:migrate (creacion de tablas)

sequelize db:migrate:undo

sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user

sequelize db:seed:all ( creación de los registros)

sequelize db:seed:undo

sequelize db:seed:undo:all

#USO DE LA API

POSTMAN

![image](https://user-images.githubusercontent.com/86298325/140483043-21949e86-7a0d-4d10-a6ca-b0cb53278ddd.png)

