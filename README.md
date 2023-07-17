<h1 align="center"><strong> Perú Dota 2 Store: E-Comerce con Next.js </strong></h1>

<img src = "https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white"> <img src = "https://img.shields.io/badge/React.js-1c2c4c?style=flat&logo=react&logoColor=%2361DAFB"> <img src = "https://img.shields.io/badge/Typescript-3179C6?style=flat&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=flat&logo=SemanticUIReact&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white"> 

Este repositorio alberga una plataforma de comercio electrónico dedicada a la venta de productos coleccionables inspirados en el videojuego Dota 2. Este proyecto se ha desarrollado utilizando Next.js, React.js y Semantic UI React, y ha sido implementado con TypeScript para una mayor robustez y escalabilidad. El proyecto ofrece un backend (API) y frontend responsivos que se adaptan a distintos tamaños de pantalla. Gracias a Next.js, se ha utilizado su capacidad de pre-renderizado y enrutamiento optimizado para garantizar un rendimiento óptimo y una navegación suave en todo momento, ya que implementa SSG (Static Side Generation). El frontend ha sido construido utilizando React.js y Semantic UI React, por lo que se cuenta con una interfaz de usuario intuitiva.

- **Desktop** **View**

![desktop-preview](https://github.com/chriscodex/nextjs-introduction/assets/106860308/59ed59d5-5ac8-429c-a4b0-2f29b696f6b6)

- **Mobile** **View**

![dt-mobile](https://github.com/chriscodex/nextjs-introduction/assets/106860308/5cca3880-5f47-4bf2-810c-b371592c6201)

---

## **Tabla de Contenidos** 📖  
1. [Implementación](#implementación-)
2. [Instalación](#instalación-)
3. [Ejecutando la aplicación](#ejecutando-la-aplicación-)
4. [HTTP Endpoints](#http-endpoints-desktop_computer)

---

## Implementación 📦
El proyecto fue desplegado usando la plataforma de Vercel y se encuentra en este [link](https://nextjs-introduction.vercel.app/).

---

## **Instalación** 🔧

- Instalar las dependencias necesarias para este proyecto
```bash
$ npm install
```

---

## **Ejecutando la aplicación** 🚀

```bash
# build
$ npm run build

# start
$ npm run start
```

---

## **HTTP Endpoints** :desktop_computer: 
Por defecto la aplicación se ejecuta en el puerto `:3000`

Los endpoints se encuentran incluidos en el path parameter `/api`

1. [Products](#products) 
2. [Single Product](#single-product)

- ### **Products**
Se muestra un listado de todos los productos en un formato JSON.


  `GET` `/api/products`  

  Server Response:  

  ```
  { 
    "length": 9,
    [
      {
        "name": "Faceless Void",
        "id": "2zd33b8c",
        "sku": "NUR72KCM",
        "price": 89.9,
        "image": "/images/void.webp",
        "attributes": {
          "description": "Description example",
          "marca": "Valve Official",
          "altura": "16 cm",
          "ancho": "10 cm"
        },
      },
      {...}
    ]
  }
  ```  

- ### **Single Product**
Se obtiene la información de un product a través del id del producto como un parametro path


  `GET` `/api/products/{product_id}`  

  Server Response:  

  ```
  {
    "name": "Faceless Void",
    "id": "2zd33b8c",
    "sku": "NUR72KCM",
    "price": 89.9,
    "image": "/images/void.webp",
    "attributes": {
      "description": "Description example",
      "marca": "Valve Official",
      "altura": "16 cm",
      "ancho": "10 cm"
    }
  }
  ```  

---

## Construido con 🛠️

* [Next.js](https://nextjs.org/) - Framework web
* [React.js](https://react.dev/) - Biblioteca para la construcción de interfaces de usuario reactivas
* [Typescript](https://www.typescriptlang.org/) - Tipado para JavaScript
* [Semantic UI React](https://tailwindcss.com/) - Biblioteca de componentes para React.js
