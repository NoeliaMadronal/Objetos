let nombre = prompt("Ingrese su nombre")

while (nombre == "") {
    nombre = prompt("Por favor, ingrese su nombre correctamente")
}


let saludo = "Hola" + " " + nombre;

alert(saludo);

let entrada = prompt("¿Desea realizar un pedido?");

while (entrada == "si" || "SI" || "Si") {

    class Productos {
        constructor(nombre, precio, cuotas, info) {
            this.nombre = nombre;
            this.precio = precio;
            this.cuotas = cuotas;
            this.info = info;
            this.ver = `
        Nombre: ${this.nombre}<br>
        Precio: $${this.precio}<br>
        Cuotas: ${this.cuotas}<br>
        Características: ${this.info}<br>
        `
        }

        sumaIva() {
           return this.precio * 0.21;
        }

        verInfo() {
            document.write(this.ver + "<br>")
        }

    }


    const producto1 = new Productos("Aire Acondicionado Hyundai", 31933, "18 cuotas sin interés", "Aire Frío calor, 3200w, Display LCB");
    const producto2 = new Productos("Impresora Láser Xerox", 12688, "12 coutas sin interés", "Impresora Wi-Fi Láser, Mod 3020, 600 MHZ");
    const producto3 = new Productos("Celular Samsung Galaxy A31", 24380, "6 cuotas sin interés", "Celular libre, Tamaño de pantalla 6.4, Memoria Ram 4gb, Memoria interna 128gb");
    const producto4 = new Productos("Notebook Acer", 78999, "12 coutas sin interés", "Notebook Acer 15.6', Negro 8gb, 1tb, Core 15");
    const producto5 = new Productos("Smart Tv Samsung", 56792, "18 coutas sin interés", "Samsung, Qled Ultra Hd, 55', Smart TV, no curvado");


    producto1.verInfo();
    producto2.verInfo();
    producto3.verInfo();
    producto4.verInfo();
    producto5.verInfo();


    producto1.sumaIva();
    producto2.sumaIva();
    producto3.sumaIva();
    producto4.sumaIva();
    producto5.sumaIva();


    break;

}