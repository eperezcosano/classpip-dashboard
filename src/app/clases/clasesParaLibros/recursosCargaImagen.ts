export class Imagen {
    
    file: any
    nombre: any;
    posicionLista: any;
    especial: any;
    tipo;
    constructor(file?: any, nombre?: any, posicionLista?: any, especial?:any, tipo?:any) {
  
      this.file = file;
      this.nombre = nombre;
      this.posicionLista = posicionLista;
      this.especial= especial;
      this.tipo = tipo;
    }
  }
  