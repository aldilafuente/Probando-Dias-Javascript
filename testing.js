var dia;

dia = prompt ('¿Qué día es hoy?');

switch(dia) {
    case 'Lunes':
    case 'lunes':
    case 'LUNES':
    document.write ('Mañana es martes');
    break;

    case 'Martes':
    case 'martes':
    case 'MARTES':
    document.write ('Mañana es miércoles');
    break;

    case 'Miércoles':
    case 'miércoles':
    case 'Miercoles':
    case 'miercoles':
    case 'MIÉRCOLES':
    case 'MIERCOLES':
    document.write ('Mañana es jueves');
    break;

    case 'Jueves':
    case 'jueves':
    case 'JUEVES':
    document.write ('Mañana es viernes');
    break;

    case 'Viernes':
    case 'viernes':
    case 'VIERNES':
    document.write ('Mañana es sábado');
    break;

    case 'Sábado':
    case 'Sabado':
    case 'sábado':
    case 'sabado':
    case 'SÁBADO':
    case 'SABADO':
    document.write ('Mañana es domingo');
    break;

    case 'Domingo':
    case 'domingo':
    case 'DOMINGO':
    document.write ('Mañana es lunes');
    break;

    default: document.write ('Vuelva a intentar');
}