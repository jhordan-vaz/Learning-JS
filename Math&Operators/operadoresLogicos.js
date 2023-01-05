// v && v -> v
// v && f -> f
// f && ? -> f

// v || ? -> v
// f || v -> v
// f || ? -> f

// v xor v -> f
// f xor v -> v
// v xor f -> v
// f xor f -> f

function compras(trabalho1, trabalho2) {
    const tomarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv42 = trabalho1 != trabalho2;
    const saudavel = !tomarSorvete

    return { tomarSorvete, comprarTv50, comprarTv42, saudavel }
}

console.log(compras(true, false));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));