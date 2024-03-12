//* dia de la semana (switch)
let diaSemana = 1; 
switch (diaSemana) {
    case 1: // diaSemana == 1
        console.log("lunes");
        break;
    case 2: // diaSemana == 2
        console.log("martes");
        break;
    case 3: // diaSemana == 3
        console.log("miércoles");   
        break;
    case 4: // diaSemana == 4
        console.log("jueves");
        break;
    case 5: // diaSemana == 5
        console.log("viernes");
        break;
    case 6: // diaSemana == 6 
        console.log("sábado");
        break;
    case  7: // diaSemana == 7
        console.log("domingo");
        break;

    default:
        console.log(`dia de la semana erroneo ${diaSemana}`);
        break;
}