const readlineSync = require('readline-sync');

(() => {
    console.clear()

    while (true) {
        const menu = readlineSync.question(`Selecione uma das alternativas abaixo:\n\n[1] Listar proriedades por ordem ascendente\n\n[2] Listar proriedades por ordem decrescente\n\n[3] Encerrar programa\n\n`)
    
        if (menu !== 1 & 2 & 3) {
            console.clear()
            console.log(`Opção incorreta!\nPor favor, digite um dos números listados\n`);
        } else

        if (menu == 3) {
            console.clear()
            console.log(`Escolhido: Encerrar programa\n`);
            break
        } else

        if (menu == 1) {
            console.clear()
            console.log(`Escolhido: Listar proriedades por ordem ascendente\n`);
            opcao1 ()
            break
        } else

        if (menu == 2) {
            console.clear()
            console.log(`Escolhido: Listar proriedades por ordem decrescente\n`);
            opcao2 ()
            break
        }
    }

    function opcao1 () {

        const propriedades = []

        while (true) {

            const inserindo = readlineSync.question(`[0] Encerrar programa\n\n[1] Ver propriedades\n\nDigite a propriedades CSS:\n`)

            if (inserindo == 0) {
                console.clear()
                console.log(`Escolhido: Encerrar programa\n`);
                break
            } else

            if (inserindo == 1) {
                console.clear()
                console.log(propriedades.map((i) => i.toLocaleLowerCase()).join(`\n\n`));
            } else

            if (propriedades.includes(inserindo)) {
                console.log(`Você já inseriu a propriedade: ${inserindo}`);
            } else {
                propriedades.push(inserindo)
                propriedades.sort()
            }

        }
    }

    function opcao2 () {

        const propriedades = []

        while (true) {

            const inserindo = readlineSync.question(`[0] Encerrar programa\n\n[1] Ver propriedades\n\nDigite a propriedades CSS:\n`)

            if (inserindo == 0) {
                console.clear()
                console.log(`Escolhido: Encerrar programa\n`);
                break
            } else

            if (inserindo == 1) {
                console.clear()
                console.log(propriedades.map((i) => i.toLocaleLowerCase()).join(`\n\n`));
            } else

            if (propriedades.includes(inserindo)) {
                console.log(`Você já inseriu a propriedade: ${inserindo}`);
            } else {
                propriedades.push(inserindo)
                propriedades.sort().reverse()
            }

        }
    }

})()