function calcola () {
    let tipologia = document.querySelector("input[name='Tipologia']:checked").value;
    let tempo = document.querySelector("#Tempo").value;
    if (parseInt(tempo)>0 && tempo){
        let output;
        switch(tipologia){
            case "C":
                if (tempo<=45) {
                    output = "Gratis";
                } else if (tempo<=240) {
                    output = (Math.floor(Math.max(60, tempo)/60)*3) + Math.floor(Math.max(60, tempo)/15)%4*3/4;
                } else {
                    output = (Math.floor(tempo/60)*2) + Math.floor(tempo/15)%4*2/4;
                }
                break;
            case "A":
                if (tempo<=45) {
                    output = "Gratis";
                } else if (tempo<=240) {
                    output = (Math.floor(Math.max(60, tempo)/60)*2) + Math.floor(Math.max(60, tempo)/15)%4*2/4;
                } else {
                    output = (Math.floor(tempo/60)*1) + Math.floor(tempo/15)*4*1/4;
                }
                break;
            default:
                document.getElementById("output").innerText = "Input earrati";
                return;
                break;
        }
        document.getElementById("output").innerText = `Il prezzo è ${output}`;
    } else {
        document.getElementById("output").innerText = "Input errati";
        return;
    }
}