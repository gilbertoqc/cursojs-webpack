import '../css/componentes.css';

export const saludar = (nombre) => {
    let h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} bienvenido`;

    document.body.append(h1);
}