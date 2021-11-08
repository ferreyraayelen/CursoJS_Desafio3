/* Desafío 3 */

/* Ciclo while */
let nombre = prompt("Por favor ingresa tu nombre");
alert("Hola, " + nombre + " ¿cómo estás?. Me gustaría conocer tu emprendimiento")

let caracteristica = prompt("Por favor podrías ingresar una palabra que identifiquen a  tu emprendimiento. Cuando hayas agregado todas por favor escribir ESC");

while (caracteristica.toUpperCase() != "ESC") {
    alert("La característica que ingresaste fue " + caracteristica);
    caracteristica = prompt(nombre + "Ingresá otra palabra que identifiquen a  tu emprendimiento. Con ESC podés salir");
}
alert(nombre + " muchas gracias por toda la información que me diste sobre tu emprendimiento");

/* ciclo for 5 turnos disponible para sacar turno */

/* alert("Hola, te cuento que tengo disponibles cinco turnos para que coordinemos una reunión");

for (let i = 1; i <= 5; i++) {
    let nombre = prompt("Ingresá tu nombre");
    alert("Hola " + nombre + ", tu turno es el Nº: " + i);
    console.log("El turno nº: " + i + " es para:" + nombre);
} */

/* Ciclo while con swhitch */

/* /* alert("Hola, te cuento que tengo disponibles los siguientes horarios para que coordinemos una reunión:\nOpción 1: 15 a 16 \nOpción 2: 16 a 17 \nOpción 3: 17 a 18 \nOpción 4: 18 a 19 \nOpción 5: 19 a 20"); */

/* let nombreCompleto = prompt("Hola, ingresa tu nombre completo");
let cita = prompt("Ingresa la opción que mejor te quede para que nos juntenemos. Si no podés en ningún horario ingresá ESC"); */

/* while (cita != "ESC") {
    switch (cita.toLowerCase()) {
        case "opcion 1":
            alert("Hola " + nombreCompleto + " nos vemos de 15 a 16 , ya que legiste la: " + cita);
            break;
        case "opcion 2":
            alert("Hola " + nombreCompleto + " nos vemos de 16 a 17 , ya que legiste la: " + cita);
            break;
        case "opcion 3":
            alert("Hola " + nombreCompleto + " nos vemos de 17 a 18 , ya que legiste la: " + cita);
            break;
        case "opcion 4":
            alert("Hola " + nombreCompleto + " nos vemos de 18 a 19 , ya que legiste la: " + cita);
            break;
        case "opcion 5":
            alert("Hola " + nombreCompleto + " nos vemos de 19 a 20 , ya que legiste la: " + cita);
            break;
        default:
            alert("No hay problema, coordinamos para otro día")
            break;
    }

    nombreCompleto = prompt("Hola, ingresa tu nombre completo");
    cita = prompt("Ingresa la opción que mejor te quede para que nos juntenemos. Si no podés en ningún horario ingresá ESC");
} * / */



