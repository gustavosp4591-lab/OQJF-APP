fetch('assets/data/versiculos.json')
    .then(response => response.json())
    .then(versiculos => {
        console.log(versiculos);
        const hoje = new Date().getDate();
        const indice = [hoje % versiculos.length];
        console.log(indice);
        const versiculo = versiculos[indice];
        console.log(versiculo);
        split(' ').pop() // Remove a última palavra (referência)
    });