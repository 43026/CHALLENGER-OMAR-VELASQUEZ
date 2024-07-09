const cifrar = {
    a: 'cm',
    b: 'qb',
    c: 'br',
    d: 'jf',
    e: 'rl',
    f: 'ay',
    g: 'fn',
    h: 'iu',
    i: 'zj',
    j: 'my',
    k: 'at',
    l: 'ps',
    m: 'kg',
    n: 'oh',
    o: 'bu',
    p: 'hk',
    q: 'tp',
    r: 'ak',
    s: 'le',
    t: 'fu',
    u: 'yk',
    v: 'ew',
    w: 'vl',
    x: 'yq',
    y: 'mf',
    z: 'hw'
};
const descifrar = {
    cm: 'a',
    qb: 'b',
    br: 'c',
    jf: 'd',
    rl: 'e',
    ay: 'f',
    fn: 'g',
    iu: 'h',
    zj: 'i',
    my: 'j',
    at: 'k',
    ps: 'l',
    kg: 'm',
    oh: 'n',
    bu: 'o',
    hk: 'p',
    tp: 'q',
    ak: 'r',
    le: 's',
    fu: 't',
    yk: 'u',
    ew: 'v',
    vl: 'w',
    yq: 'x',
    mf: 'y',
    hw: 'z'
}
let inputElement = document.getElementById('texto_entrada');
let mensaje = document.getElementById("mensaje");
let solicitud = document.getElementById("solicitud");
let informacion = document.getElementById("informacion");
let respuesta = document.getElementById("respuesta");
let copia = document.getElementById('copia');


function encriptar() {
    let texto = document.getElementById('texto_entrada').value;
    let nuevotexto = "";
    texto = texto.trim();
    if (texto == ""){
        alert("Por favor digite un texto valido");
        return;
    }
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (cifrar.hasOwnProperty(letra)) {
            nuevotexto += cifrar[letra];

        } else {
            nuevotexto += letra;
            }
    }
    mensaje.textContent = "Texto encriptado con exito";
    solicitud.textContent = "";
    informacion.src = "./assets/imagen3.png";
    respuesta.value = nuevotexto;

    console.log("encriptacion: " + nuevotexto)
}
function desencriptar() {
    let texto = document.getElementById('texto_entrada').value;
    let nuevotexto = "";
    texto = texto.trim();
    if (texto == ""){
        alert("Por favor digite un texto valido");
        return;
    }
    for (let i = 0; i < texto.length; i = i + 2) {
        let letra = texto[i] + texto[i + 1];
        if (descifrar.hasOwnProperty(letra)) {

            nuevotexto += descifrar[letra];
        
        } else {
            nuevotexto += letra;
        }
    }
    mensaje.textContent = "Texto desencriptado con exito";
    solicitud.textContent = "";
    informacion.src = "./assets/imagen4.png";
    respuesta.value = nuevotexto;
    console.log("encriptacion: " + nuevotexto)
}
    
      function copiar(){ 
        
        respuesta.select(); 
        document.execCommand('copy'); 

      }
