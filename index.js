var equacaoUm = [];
var equacaoDois = [];
var equacaoTres = [];

var variacao = 0.000001;
var iteracoes = 0;

function calcular() {
    equacaoUm[0] = document.querySelector(".eqUmX").value;
    equacaoUm[1] = document.querySelector(".eqUmY").value;
    equacaoUm[2] = document.querySelector(".eqUmZ").value;
    equacaoUm[3] = document.querySelector(".eqUmRes").value;

    equacaoDois[0] = document.querySelector(".eqDoisX").value;
    equacaoDois[1] = document.querySelector(".eqDoisY").value;
    equacaoDois[2] = document.querySelector(".eqDoisZ").value;
    equacaoDois[3] = document.querySelector(".eqDoisRes").value;
    
    equacaoTres[0] = document.querySelector(".eqTresX").value;
    equacaoTres[1] = document.querySelector(".eqTresY").value;
    equacaoTres[2] = document.querySelector(".eqTresZ").value;
    equacaoTres[3] = document.querySelector(".eqTresRes").value;

    if(equacaoUm[0] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoUm[1] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoUm[2] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoUm[3] == "") {
        alert("os campos não podem estar vazios")
        return;
    }

    if(equacaoTres[0] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoTres[1] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoTres[2] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoTres[3] == "") {
        alert("os campos não podem estar vazios")
        return;
    }

    if(equacaoDois[0] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoDois[1] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoDois[2] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    if(equacaoDois[3] == "") {
        alert("os campos não podem estar vazios")
        return;
    }
    
    equacaoUm[0] = parseInt(document.querySelector(".eqUmX").value);
    equacaoUm[1] = parseInt(document.querySelector(".eqUmY").value);
    equacaoUm[2] = parseInt(document.querySelector(".eqUmZ").value);
    equacaoUm[3] = parseInt(document.querySelector(".eqUmRes").value);

    equacaoDois[0] = parseInt(document.querySelector(".eqDoisX").value);
    equacaoDois[1] = parseInt(document.querySelector(".eqDoisY").value);
    equacaoDois[2] = parseInt(document.querySelector(".eqDoisZ").value);
    equacaoDois[3] = parseInt(document.querySelector(".eqDoisRes").value);
    
    equacaoTres[0] = parseInt(document.querySelector(".eqTresX").value);
    equacaoTres[1] = parseInt(document.querySelector(".eqTresY").value);
    equacaoTres[2] = parseInt(document.querySelector(".eqTresZ").value);
    equacaoTres[3] = parseInt(document.querySelector(".eqTresRes").value);

    var maioresNaDiagonal = verificaMarioresDiagonalPrincipal();

    if(!maioresNaDiagonal){
        alert('Troque as linhas para que os maiores números das equações fique na diagonal principal');
        return;
    }

    var converge = criterioDeLinha();

    if(!converge){
        alert('Não é possível resolver pelo modo iterativo de Gauss-Jacobi este sistema linear');
        return;
    }

    jacobi();


}

function jacobi() {
    equacaoUm[0] = parseInt(document.querySelector(".eqUmX").value);
    equacaoUm[1] = parseInt(document.querySelector(".eqUmY").value);
    equacaoUm[2] = parseInt(document.querySelector(".eqUmZ").value);
    equacaoUm[3] = parseInt(document.querySelector(".eqUmRes").value);

    equacaoDois[0] = parseInt(document.querySelector(".eqDoisX").value);
    equacaoDois[1] = parseInt(document.querySelector(".eqDoisY").value);
    equacaoDois[2] = parseInt(document.querySelector(".eqDoisZ").value);
    equacaoDois[3] = parseInt(document.querySelector(".eqDoisRes").value);
    
    equacaoTres[0] = parseInt(document.querySelector(".eqTresX").value);
    equacaoTres[1] = parseInt(document.querySelector(".eqTresY").value);
    equacaoTres[2] = parseInt(document.querySelector(".eqTresZ").value);
    equacaoTres[3] = parseInt(document.querySelector(".eqTresRes").value);

    recursive(0,0,0)
}

function recursive(x, y, z) {
    var x1,y1,z1, i;
    iteracoes++;
    x1 = ((equacaoUm[3]-(equacaoUm[1]*y)-(equacaoUm[2]*z))/equacaoUm[0]).toFixed(4)
    y1 = ((equacaoDois[3]-(equacaoDois[0]*x)-(equacaoDois[2]*z))/equacaoDois[1]).toFixed(4)
    z1 = ((equacaoTres[3]-(equacaoTres[0]*x)-(equacaoTres[1]*y))/equacaoTres[2]).toFixed(4)

    if(((x1 - x > variacao || x1 != x) || (y1 - y > variacao || y1 != y) || (z1 - z > variacao || z1 != z)) && iteracoes < 200){
        // if(i == 0) {    
            var divEl = document.createElement("div")
            var spanEl = document.createElement("span")
            var textEl = document.createTextNode(`x=: ${x1}`)
            spanEl.appendChild(textEl)
            divEl.appendChild(spanEl)

            document.getElementById("wrapper2").appendChild(divEl)
        // }

        // if(i == 1) {    
            var divEl = document.createElement("div")
            var spanEl = document.createElement("span")
            var textEl = document.createTextNode(`y=: ${y1}`)
            spanEl.appendChild(textEl)
            divEl.appendChild(spanEl)

            document.getElementById("wrapper2").appendChild(divEl)
        // }

        // if(i == 2) {    
            var divEl = document.createElement("div")
            var spanEl = document.createElement("span")
            var textEl = document.createTextNode(`z=: ${z1}`)
            spanEl.appendChild(textEl)
            divEl.appendChild(spanEl)

            var spanEl = document.createElement("span")
            var textEl = document.createTextNode(`--------------`)
            spanEl.appendChild(textEl)
            divEl.appendChild(spanEl)

            document.getElementById("wrapper2").appendChild(divEl)
        // }
        return recursive(x1, y1, z1)
    }

    document.querySelector(".xResp").value = x1
    document.querySelector(".yResp").value = y1
    document.querySelector(".zResp").value = z1
    document.querySelector(".iteracoes").value = iteracoes

    // for(var i = 0; i < 3; i++) {
        
    // }

    iteracoes = 0;
    return;
}

function criterioDeLinha() {
    if(((equacaoUm[1] + equacaoUm[2]) / equacaoUm[0]) >= 1) {
        return 0;
    }
    if(((equacaoDois[0] + equacaoDois[2]) / equacaoDois[1]) >= 1) {
        return 0;
    }
    if(((equacaoTres[0] + equacaoTres[1]) / equacaoTres[2]) >= 1 ) {
        return 0;
    }

    return 1;
}

function verificaMarioresDiagonalPrincipal() {
    if(equacaoUm[0] < 0) {
        equacaoUm[0] = -(equacaoUm[0]) 
    }
    if(equacaoUm[1] < 0) {
        equacaoUm[1] = -(equacaoUm[1]) 
    }
    if(equacaoUm[2] < 0) {
        equacaoUm[2] = -(equacaoUm[2]) 
    }
    if(equacaoUm[3] < 0) {
        equacaoUm[3] = -(equacaoUm[3]) 
    }
/*---------------------------------------------------------------------------*/
    if(equacaoDois[0] < 0) {
        equacaoDois[0] = -(equacaoDois[0]) 
    }
    if(equacaoDois[1] < 0) {
        equacaoDois[1] = -(equacaoDois[1]) 
    }
    if(equacaoDois[2] < 0) {
        equacaoDois[2] = -(equacaoDois[2]) 
    }
    if(equacaoDois[3] < 0) {
        equacaoDois[3] = -(equacaoDois[3]) 
    }
    /*---------------------------------------------------------------------------*/
    if(equacaoTres[0] < 0) {
        equacaoTres[0] = -(equacaoTres[0]) 
    }
    if(equacaoTres[1] < 0) {
        equacaoTres[1] = -(equacaoTres[1]) 
    }
    if(equacaoTres[2] < 0) {
        equacaoTres[2] = -(equacaoTres[2]) 
    }
    if(equacaoTres[3] < 0) {
        equacaoTres[3] = -(equacaoTres[3]) 
    }
    /*---------------------------------------------------------------------------*/

    if((equacaoUm[1] + equacaoUm[2]) > equacaoUm[0] && !(equacaoUm[1] == equacaoUm[2]) == equacaoUm[0]) {
        return 0;
    }

    if((equacaoDois[0] + equacaoDois[2]) > equacaoDois[1] && !(equacaoDois[0] == equacaoDois[2]) == equacaoDois[1]) {
        return 0;
    }

    if((equacaoTres[0] + equacaoTres[1]) > equacaoTres[2] && !((equacaoTres[0] == equacaoTres[1]) == equacaoTres[2])) {
        return 0;
    }

    return 1;
}