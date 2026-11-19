const dadosParque = {
    P: {
        nome: "Ilha dos Piratas",
        codigo: "P",
        cor: "Roxo / Lilás",
        descricao: "Uma área temática de aventura e exploração, com atrações inspiradas no universo dos piratas.",
        foto: "../img/ilha-dos-piratas.jpg",
        atracoes: [
            "Ponto Naval",
            "Barco Pirata",
            "Casa do Projeto Tamar",
            "Experiência: Passeio de Helicóptero"
        ]
    },

    T: {
        nome: "Triplikland",
        codigo: "T",
        cor: "Rosa",
        descricao: "Uma área divertida com atrações para toda a família e especialmente para os pequenos.",
        foto: "../img/triplikland.jpg",
        atracoes: [
            "Rede-gigante",
            "Xícaras Malucas",
            "Loja da Turma da Luluzinha",
            "Baby Elefante"
        ]
    },

    G: {
        nome: "Vila Germânica",
        codigo: "G",
        cor: "Amarelo",
        descricao: "Uma área temática com atrações, encontros com personagens, lojas e experiências para os visitantes.",
        foto: "../img/vila-germanica.jpg",
        atracoes: [
            "Tigor Mountain",
            "Leander's Süß & Fritas",
            "Carrossel Veneziano",
            "Autopista",
            "Encontre e Direte",
            "Encontre o Trolls",
            "Encontre o Bob Esponja",
            "Mundo dos Cavalos"
        ]
    },

    A: {
        nome: "Avenida das Nações",
        codigo: "A",
        cor: "Azul",
        descricao: "Uma área de entrada e convivência, com atrações, eventos, esculturas e pontos de encontro.",
        foto: "../img/avenida-das-nacoes.jpg",
        atracoes: [
            "Castelo das Nações",
            "Carrossel",
            "Esculturas Roberto Burton",
            "Ponto de Encontro",
            "Praça de Eventos",
            "Encontre o Megamente"
        ]
    },

    C: {
        nome: "Cowboyland",
        codigo: "C",
        cor: "Laranja",
        descricao: "Uma área inspirada no Velho Oeste, com atrações, shows, restaurantes e experiências temáticas.",
        foto: "../img/cowboyland.jpg",
        atracoes: [
            "Teatro Acqua",
            "Encontro e Tomo do Betinho",
            "Betinho Carrero",
            "Montanha-russa Dum-Dum",
            "Shooting Gallery (Tiro ao Alvo)",
            "Lanchonete The Central Burger",
            "Lanchonete Billy the Best",
            "Lanchonete Hungry Dogs",
            "Lanchonete Pastel de Feira",
            "Restaurante Casa do Monstro",
            "Lanchonete Pizza Hut",
            "Chapéu o Beto Carrero",
            "Sobremesas",
            "Lanchonete X-A",
            "Memorial Beto Carrero",
            "Show O Sonho do Cowboy",
            "Aldeia Indígena",
            "Fort Alamo",
            "Cemitério"
        ]
    },

    N: {
        nome: "Nerd Planet",
        codigo: "N",
        cor: "Azul Escuro",
        descricao: "Uma área temática dedicada ao universo da diversão e da cultura nerd.",
        foto: "../img/nerd-planet.jpg",
        atracoes: [
            "Spin Blast",
            "Nerd Shop",
            "Nerd Lanches",
            "Super Soaker Splash",
            "Sobremesas",
            "Lanchonete Burger Mania"
        ]
    },

    M: {
        nome: "Madagascar",
        codigo: "M",
        cor: "Laranja Escuro",
        descricao: "Uma área temática inspirada no mundo de Madagascar, com atrações e encontros com personagens.",
        foto: "../img/madagascar.jpg",
        atracoes: [
            "Madagascar Circus Show",
            "Zaragosa's Hungry Wagon",
            "Cirrus Plaza",
            "Encontro com Personagens",
            "Madagascar Crazy River Adventure",
            "Chimp's Bazar Sorvetes",
            "Sobremesas"
        ]
    },

    R: {
        nome: "Aventura Radical",
        codigo: "R",
        cor: "Vermelho",
        descricao: "Uma área para quem gosta de emoção, aventura e atrações radicais.",
        foto: "../img/aventura-radical.jpg",
        atracoes: [
            "Target Games",
            "Portal da Escuridão",
            "Lanchonete Natural Hits",
            "Star Mountain",
            "Lanchonete Vira México",
            "Loja Fei Fei",
            "FireWhip",
            "Lanchonete Trolls",
            "Tchibum"
        ]
    },

    H: {
        nome: "Hot Wheels",
        codigo: "H",
        cor: "Vermelho Claro / Vinho",
        descricao: "Uma área inspirada no universo Hot Wheels, com atrações e espetáculos cheios de velocidade.",
        foto: "../img/hot-wheels.jpg",
        atracoes: [
            "Sobremesas",
            "Produtos Beto Carrero",
            "Hot Wheels Big Drop",
            "Hot Wheels Extreme Kids",
            "Hot Wheels Turbo Drive",
            "Loja Hot Wheels",
            "Lanchonete Hot Wheels",
            "Hot Wheels Epic Show"
        ]
    },

    F: {
        nome: "Terra da Fantasia",
        codigo: "F",
        cor: "Azul Claro",
        descricao: "Uma área temática de fantasia, passeios e aventuras para toda a família.",
        foto: "../img/terra-da-fantasia.jpg",
        atracoes: [
            "Loja Bibi",
            "Estação João A. de Queiroz",
            "Casa de Beto Carrero",
            "Assalto ao Trem",
            "Caverna dos Dinossauros"
        ]
    }
};




const botoesAreas = {
    1: "G",
    2: "G",
    3: "G",
    4: "C",
    5: "C",
    6: "M",
    7: "M",
    8: "M",
    9: "H",
    10: "P",
    11: "G",
    12: "R",
    13: "A",
    14: "C",
    15: "M",
    16: "M",
    17: "H",
    18: "H",
    19: "H",
    20: "R",
    21: "G",
    22: "N"
};




const nomesBotoes = {
    1: "Shrek",
    2: "Bob Esponja",
    3: "Ponto do mapa 3",
    4: "Betinho",
    5: "Reboliço",
    6: "Madagascar Circus Show",
    7: "Madagascar",
    8: "Madagascar Crazy River Adventure",
    9: "Hot Wheels Big Drop",
    10: "Casa do Projeto Tamar",
    11: "Trolls",
    12: "Área Trolls",
    13: "Megamente",
    14: "Cowboyland",
    15: "Madagascar",
    16: "Área Madagascar",
    17: "Área Hot Wheels",
    18: "Hot Wheels Epic Show",
    19: "Hot Wheels Turbo Drive",
    20: "FireWhip",
    21: "Kung Fu Panda",
    22: "Nerf Mania"
};



function buscarAtracaoOuArea(valor) {
    if (valor === undefined || valor === null) {
        return null;
    }

    const pesquisa = String(valor).trim();

    if (dadosParque[pesquisa]) {
        return dadosParque[pesquisa];
    }

    for (const codigo in dadosParque) {
        const area = dadosParque[codigo];

        if (area.nome.toLowerCase() === pesquisa.toLowerCase()) {
            return area;
        }

        const encontrouAtracao = area.atracoes.some(
            atracao => atracao.toLowerCase() === pesquisa.toLowerCase()
        );

        if (encontrouAtracao) {
            return area;
        }
    }

    return null;
}



function prepararModal() {
    const janela = document.getElementById("janela-atracao");

    if (!janela) {
        console.error("Não foi encontrado o elemento #janela-atracao no HTML.");
        return false;
    }

    const conteudo = janela.querySelector(".modal-conteudo");

    if (!conteudo) {
        console.error("Não foi encontrado .modal-conteudo.");
        return false;
    }

    if (!document.getElementById("codigo-atracao")) {
        const codigo = document.createElement("p");
        codigo.id = "codigo-atracao";
        conteudo.appendChild(codigo);
    }

    if (!document.getElementById("cor-atracao")) {
        const cor = document.createElement("p");
        cor.id = "cor-atracao";
        conteudo.appendChild(cor);
    }

    if (!document.getElementById("lista-atracoes")) {
        const lista = document.createElement("ul");
        lista.id = "lista-atracoes";
        conteudo.appendChild(lista);
    }

    return true;
}




function clik_atracao(elementoOuValor) {
    let numero = elementoOuValor;

    if (elementoOuValor && typeof elementoOuValor === "object") {
        numero =
            elementoOuValor.value ||
            elementoOuValor.dataset.codigo ||
            elementoOuValor.dataset.item ||
            elementoOuValor.textContent.trim();
    }

    numero = String(numero ?? "").trim();

    const codigoArea = botoesAreas[numero];

    const area = codigoArea
        ? dadosParque[codigoArea]
        : buscarAtracaoOuArea(numero);

    if (!area) {
        console.error("Não foi encontrada uma área para o botão:", numero);
        return;
    }

    if (!prepararModal()) {
        return;
    }

    const janela = document.getElementById("janela-atracao");
    const titulo = document.getElementById("titulo-atracao");
    const codigo = document.getElementById("codigo-atracao");
    const cor = document.getElementById("cor-atracao");
    const descricao = document.getElementById("descricao-atracao");
    const lista = document.getElementById("lista-atracoes");
    const foto = document.getElementById("foto-atracao");

    const nomeBotao = nomesBotoes[numero];

    if (titulo) {
        titulo.textContent = nomeBotao || area.nome;
    }

    if (codigo) {
        codigo.textContent = "Código da área: " + area.codigo;
    }

    if (cor) {
        cor.textContent = "Cor da área: " + area.cor;
    }

    if (descricao) {
        descricao.textContent = area.descricao;
    }

    if (lista) {
        lista.replaceChildren();

        area.atracoes.forEach(function(atracao) {
            const item = document.createElement("li");
            item.textContent = atracao;
            lista.appendChild(item);
        });
    }

    if (foto) {
        foto.style.display = "none";
        foto.removeAttribute("src");

        if (area.foto) {
            foto.onload = function() {
                foto.style.display = "block";
            };

            foto.onerror = function() {
                foto.style.display = "none";
            };

            foto.src = area.foto;
            foto.alt = area.nome;
        }
    }

    janela.style.display = "flex";
    janela.setAttribute("aria-hidden", "false");

    try {
        localStorage.setItem(
            "ultimaAreaSelecionada",
            JSON.stringify({
                numeroBotao: numero,
                codigo: area.codigo,
                nome: area.nome
            })
        );
    } catch (erro) {
        console.warn("Não foi possível salvar a área no navegador:", erro);
    }

    console.log("Área selecionada:", area.nome);
}




function fecharJanela() {
    const janela = document.getElementById("janela-atracao");

    if (janela) {
        janela.style.display = "none";
        janela.setAttribute("aria-hidden", "true");
    }
}




document.addEventListener("click", function(evento) {
    const janela = document.getElementById("janela-atracao");

    if (!janela) {
        return;
    }

    if (evento.target === janela) {
        fecharJanela();
    }
});




document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape") {
        fecharJanela();
    }
});




function abrir_mapa() {
    window.open(
        "../img/mapa-beto-carrero.jpg",
        "_blank"
    );
}




document.addEventListener("DOMContentLoaded", function() {
    const mapa = document.getElementById("div-mapa");

    if (mapa) {
        mapa.addEventListener("click", function(evento) {

            // Não registra coordenadas quando clicar em um botão
            if (
                evento.target instanceof Element &&
                evento.target.closest(".btn-atracoes")
            ) {
                return;
            }

            const retangulo = mapa.getBoundingClientRect();

            const x = evento.clientX - retangulo.left;
            const y = evento.clientY - retangulo.top;

            const porcentagemX = (x / retangulo.width) * 100;
            const porcentagemY = (y / retangulo.height) * 100;

            console.log(
                "Posição no mapa:",
                "top:",
                porcentagemY.toFixed(2) + "%",
                "left:",
                porcentagemX.toFixed(2) + "%"
            );
        });
    }
});