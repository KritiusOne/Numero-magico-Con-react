# Adivina el Número con React :dragon_face:

>  El objetivo del juego es adivinar un número aleatorio entre 1 y 100.
Este es un juego simple creado con React. El objetivo del juego es adivinar un número aleatorio entre 1 y 100. El jugador tiene 10 oportunidades para adivinar el número correcto. Después de cada intento, se le dará una pista si su respuesta es demasiado alta o demasiado baja. Si el jugador no puede adivinar el número correcto en 10 intentos, pierde. Si el jugador adivina correctamente, gana.

## Cómo jugar 🎮

Ingrese un número entre 1 y 100 en el cuadro de texto y haga clic en "ENVIAR INTENTO".
Si el número ingresado es incorrecto, se mostrará una pista indicando si el número es demasiado alto o demasiado bajo.
Continúe ingresando números hasta que adivine correctamente o se le acaben los 10 intentos.
Si pierde, se mostrará un mensaje de "HAZ PERDIDO". Si gana, se mostrará un mensaje de "HAZ GANADO".

## Cómo iniciar el juego 🚀

1. Clona este repositorio.
2. Instale las dependencias con npm install.
`npm i`
3. Ejecute el comando npm run dev.
`npm run dev`
4. Abra el puerto señalado en su terminal para ver la aplicación en su navegador.

## Cómo se creó este proyecto 💻

Este proyecto fue creado con React, utilizando el hook useState. El número aleatorio se genera al inicio del juego y se almacena en una constante. Después de cada intento, se actualiza el estado para llevar un registro de los intentos anteriores, el número de vidas restantes y si el jugador ha ganado o perdido. Además, se utiliza localStorage para almacenar y mostrar el récord actual.
