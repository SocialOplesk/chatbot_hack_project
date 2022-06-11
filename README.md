# SOCIAL OPLESK
### 🏴‍☠️ HACK-GROUP
<br/>
<br/>

📚 docs [TELEGRAM_API](https://core.telegram.org/bots/samples) | [TELEGRAM BLOG_1](https://codingwithmanny.medium.com/building-a-telegram-bot-with-nodejs-46660f05b42f) | [TELEGRAM_BLOG_2](https://tecnonucleous.com/creacion-de-bots-de-telegram-en-nodejs/) | 
<br/>
<br/>
🔗 links [fakeStoreAPI](https://fakestoreapi.com/) | [emailjs](https://www.emailjs.com/) | [TELEGRAM_LIB_TELEBOT](https://github.com/mullwar/telebot)

```diff
- NOTA HACER LAS PRÁCTICAS MEDIANTE LA CONSOLA DE VSCODE, GITHUB y la libreria TELEBOT(para conectar con TELEGRAM)
```
<br/>


<br/>

## 🏆 SuperMarket - Telegram Chatbot Ecommerce

#### ⚡️(BOT APP)
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

### OPCIÓN 1) Mostrar un mensaje de bienvenida y el menú de opciones
```sh
  *) listar solo 20 productos de la plataforma con su (ID, Titulo, Precio);
  *) al final de la lista mostrar un menú de opciones
     1) buscar producto
        | permita buscar un producto por ID
     2) agregar al carrito
        | en esta opción el usuario pueda agregar de 1 a 20 productos ejemplo
        | agregar 1 producto: ID_FOO
        | agregar varios productos: ID_FOO, ID_BAR, ID_QUX, ...
        | más una opción que diga ir al carrito y otra regresar a la lista de productos
          -> la opción carrito debe solicitar los siquientes datos: 
             |el correo el usuario
             | nombre y ubicación
             | método de pago
             | enviar un email del recibo de la compra
             | al final regresa al menú principal
     3) regresar al menú
        | retorna al menú principal
```


### OPCIÓN 2) Ver métodos de pagos, son tres (efectivo,transferencia,cryptos(BTC,ETH,USDT))
```sh
  *) listar los diferentes métodos de pagos (efectivo,transferencia,cryptos(BTC,ETH,USDT))
  
```

### OPCIÓN 3) Zonas de entrega para delivery y horario de trabajo
```sh
  *) listar las zonas de servicios más el horario de disponibilidad,
  
```

