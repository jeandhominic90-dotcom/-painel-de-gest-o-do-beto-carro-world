produtos = JSON.parse(localStorage.getItem('produtos')) || [];

//  produtos = [
//     { codigo: 0, nome: "museu" },
//     { codigo: 1, nome: "big tower" },
//     { codigo: 2, nome: "roda gigante" },
//     { codigo: 3, nome: "Headset" }
//   ];

  const visitas_por_produto = JSON.parse(localStorage.getItem('visitas_por_produto')) || [];
  
  // [
  //   { produto: '7891591191818', qtd: 90 },
  //   { produto: "7897957135908", qtd: 120 },
  //   { produto: "7896609150580", qtd: 35 },
  // ];

  const nomes = new Map(
    produtos.map(p => [p.codigo, p.nome])
  );

  console.log(nomes);
  

  const dados = visitas_por_produto.map(v => ({
    produto: v.produto,
    qtd: v.qtd,
    nome: nomes.get(v.produto) ?? `Produto ${v.produto}`
  }));

  const width = 800;
  const margem = {
    top: 20,
    right: 70,
    bottom: 20,
    left: 140
  };

  const height = Math.max(200, dados.length * 55 + 40);

  const svg = d3.select("#grafico")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%");

  const x = d3.scaleLinear()
    .domain([0, d3.max(dados, d => d.qtd) || 1])
    .nice()
    .range([margem.left, width - margem.right]);

  const y = d3.scaleBand()
    .range([margem.top, height - margem.bottom])
    .padding(0.2);

  function atualizarGrafico() {
    const criterio = document.querySelector("#ordenacao").value;

    const ordenados = [...dados];

    switch (criterio) {
      case "maior":
        ordenados.sort((a, b) => b.qtd - a.qtd);
        break;

      case "menor":
        ordenados.sort((a, b) => a.qtd - b.qtd);
        break;

      case "az":
        ordenados.sort((a, b) =>
          a.nome.localeCompare(b.nome, "pt-BR")
        );
        break;

      case "za":
        ordenados.sort((a, b) =>
          b.nome.localeCompare(a.nome, "pt-BR")
        );
        break;
    }

    y.domain(ordenados.map(d => d.produto));

    const t = svg.transition()
      .duration(850)
      .ease(d3.easeCubicInOut);

    // Barras
    svg.selectAll(".barra")
      .data(ordenados, d => d.produto)
      .join(
        enter => enter.append("rect")
          .attr("class", "barra")
          .attr("fill", "#2980b9")
          .attr("rx", 5)
          .attr("x", x(0))
          .attr("y", d => y(d.produto))
          .attr("width", 0)
          .attr("height", y.bandwidth())
      )
      .transition(t)
      .attr("y", d => y(d.produto))
      .attr("width", d => x(d.qtd) - x(0))
      .attr("height", y.bandwidth());

    // Nomes
    svg.selectAll(".nome")
      .data(ordenados, d => d.produto)
      .join(
        enter => enter.append("text")
          .attr("class", "nome")
          .attr("fill", "#222")
          .attr("font-size", 14)
          .attr("text-anchor", "end")
          .attr("x", margem.left - 12)
          .text(d => d.nome)
      )
      .transition(t)
      .attr("y", d =>
        y(d.produto) + y.bandwidth() / 2 + 5
      );

    // Valores
    svg.selectAll(".valor")
      .data(ordenados, d => d.produto)
      .join(
        enter => enter.append("text")
          .attr("class", "valor")
          .attr("fill", "#222")
          .attr("font-size", 14)
          .attr("x", d => x(d.qtd) + 8)
          .attr("y", d =>
            y(d.produto) + y.bandwidth() / 2 + 5
          )
          .text(d => d.qtd)
      )
      .transition(t)
      .attr("x", d => x(d.qtd) + 8)
      .attr("y", d =>
        y(d.produto) + y.bandwidth() / 2 + 5
      );
  }

  document.querySelector("#ordenacao")
    .addEventListener("change", atualizarGrafico);

  atualizarGrafico();