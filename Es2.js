function calcola () {
    let veicolo = document.querySelector("input[name='Mezzo']:checked").value;
    let tempo = (document.querySelector("#Tempo").value);
    let tipologia = document.querySelector("select[name='Tipologie']").value;
    if (tempo>0 && tipologia && veicolo){
        let prezzo = 0;
        if (tipologia=="Coperto"){
            prezzo += Math.min(60, tempo)*(veicolo=="A" ? 0.025 : 0.013);
            let tempof = Math.max(0, Math.min(tempo-60, 60));
            prezzo += tempof*(veicolo=="A" ? 0.025 : 0.013)*0.7;
            tempof = Math.max(tempo-120, 0);
            prezzo += tempof*(veicolo=="A" ? 0.025 : 0.013)*0.5;
        } else {
            prezzo += Math.min(60, tempo)*(veicolo=="A" ? 0.015 : 0.01);
            let tempof = Math.max(0, Math.min(tempo-60, 60));
            prezzo += tempof*(veicolo=="A" ? 0.015 : 0.01)*0.7;
            tempof = Math.max(tempo-120, 0);
            prezzo += tempof*(veicolo=="A" ? 0.015 : 0.01)*0.5;
        }
        document.getElementById("output").innerText = `Prezzo: ${prezzo}`;
    } else {
        document.getElementById("output").innerText = "Errore input";
    }
}