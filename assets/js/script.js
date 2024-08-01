var opcion = parseInt(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"));

//FUNCIONES

function uno() {
    let pri = parseInt(prompt("Seleccione una opción:\n1.- Ver Boleta\n2.- Pagar cuenta"));
      if (pri == 1) {
        alert("Haga click aquí para descargar su boleta.")
      }else if (pri == 2) {
        alert("Usted está siendo transferido. Espere por favor...")
      }
}

function dos() {
    let sec = parseInt(prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.- Problemas con las llamadas"));
      if (sec == 1) {
        let mensj1 = prompt("A continuación, escriba su solicitud:");
        if (confirm(mensj1) == true) {
            alert("Estimado usuario, su solicitud: 'Tengo problemas con la señal en avenida siempre viva' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
        }
      }else if (sec == 2) {
        let mensj2 = prompt("A continuación, escriba su solicitud:");
        if (confirm(mensj2) == true) {
        alert("Estimado usuario, su solicitud: 'Tengo problemas con las llamadas en avenida siempre viva' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
        }
      }
}

function tres() {
    let ter = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejectutivo, escribe 'SI' y un ejectutivo te llamará. De lo contrario, ingrese 'NO'.");
        if (ter === "SI") {
            alert("Un ejecutivo contactará con usted.")
        }else if (ter === "NO") {
            alert("Gracias por preferir nuestros servicios.")
        }
}

function cuatro() {
    let cua = prompt("A continuación, escriba su consulta:");
    if (confirm(cua) == true) {
        alert("Estimado usuario, su consulta: 'Quisiera saber por qué no ha llegado mi producto código 1234' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
    }
}

function cinco() {
    alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.");
}

switch (opcion) {
    case 1:
        uno();
        break;
    case 2:
        dos();
        break;
    case 3:
        tres();
        break;
    case 4:
        cuatro();
        break;
    default:
        cinco();
    break;
}