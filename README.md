# SOCIAL OPLESK
### 🏴‍☠️ PROJECT P-1
<br/>
<br/>

📚 docs [TELEGRAM_API](https://core.telegram.org/bots/samples) | [TELEGRAM BLOG_1](https://codingwithmanny.medium.com/building-a-telegram-bot-with-nodejs-46660f05b42f) | [TELEGRAM_BLOG_2](https://tecnonucleous.com/creacion-de-bots-de-telegram-en-nodejs/) | 
<br/>
<br/>
🔗 links [fakeStoreAPI](https://fakestoreapi.com/) | [emailjs](https://www.emailjs.com/) | [TELEGRAM_LIB_TELEBOT](https://github.com/mullwar/telebot)
<br/>
<br/>

---

```diff
- NOTAS:  
- HACER LAS PRÁCTICAS MEDIANTE LA CONSOLA DE VSCODE y GITHUB
- Implementar la libreria TELEBOT(para conectar con TELEGRAM)
- Aplicar la estrategia de ramas feature -> develop -> main
- Anexar el uso de GitHub Pull Request con PULL_REQUEST_TEMPLATE.md
- Crear un Archivo README.md del proyecto
```
#### 👇 CÓDIGO DE EJEMPLO
#### [CHAT_BOT_DEMO](./bot.js)
---
<br/>

![telegram](./telegram_bot_1.png)

<br/>

<br/>

## 🏆 SuperMarket - Telegram Chatbot Ecommerce

#### ⚡️(BOT APP)
La idea principal del proyecto, es la exploración al uso de diferentes tecnologías.

Aprender a conectar diferentes tecnologías y conocer el funcionamiento creativo, detrás de un chatbot.

La regla principal, es crear las exigencias requeridas y luego aplicar la creatividad innovadora de equipo al proyecto.

<br/>

```sh
 Se debe crear una app, dentro de la plataforma de comunicaciones de Telegram, 
 que permita mostrar los productos de la plataforma FakeStoreAPi.
 La App debe hacer las siguientes acciones
 
 1) Mostrar un mensaje de bienvenida y el menú de opciones
 2) Las opciones iniciales dentro del menú principal son:
    1) mostrar productos
    2) ver métodos de pagos, son tres (efectivo,transferencia,cryptos(BTC,ETH,USDT))
    3) zonas de entrega para delivery y horario de trabajo
``` 

### 🔹 OPCIÓN 1) Mostrar mensaje de bienvenida y el menú de opciones
```sh
  *) Listar solo 20 productos de la plataforma con su (ID, Titulo, Precio);
  *) Al final de la lista mostrar un menú de opciones:
  
     1) BUSCAR PRODUCTO 🔍 
        | permita buscar un producto por ID
        
     2) AGREGAR AL CARRITO 🛒
        | en esta opción el usuario pueda agregar de 1 a 20 productos ejemplo
        | agregar 1 producto: ID_FOO
        | agregar varios productos: ID_FOO, ID_BAR, ID_QUX, ...
        | más una opción que diga ir al carrito y otra regresar a la lista de productos
          -> la opción carrito debe solicitar los siquientes datos: 
             | el correo del usuario
             | nombre y ubicación
             | método de pago
             | enviar un email del recibo de la compra
             | al finalizar la compra, regresar al menú principal
             
     3) REGRESAR AL MENÚ 📋
        | retorna al menú principal
```


### 🔹 OPCIÓN 2) Ver métodos de pagos (efectivo,transferencia,cryptos(BTC,ETH,USDT))
```sh
  *) Listar los diferentes métodos de pagos (efectivo,transferencia,cryptos(BTC,ETH,USDT))
  
```

### 🔹 OPCIÓN 3) Zonas de entrega para delivery y horario de trabajo
```sh
  *) Listar las zonas de servicios más el horario de disponibilidad.
  
```

