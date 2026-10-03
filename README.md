# 🎢 Painel de Gestão - Beto Carrero World

Sistema web interativo desenvolvido para a gestão administrativa, controle de estoque, fluxo de vendas e monitoramento de visitantes das atrações do Beto Carrero World, o maior parque temático da América Latina.

---

## 📁 Estrutura do Repositório

```text
.
├── css/                  # Arquivos de estilização CSS
├── src/                  # Código-fonte auxiliar e recursos
├── comida.html           # Página temática de alimentação/comida
├── familia.html          # Página temática de atrações em família
├── index.html            # Página inicial / Dashboard principal
├── java.js               # Arquivo principal de scripts e lógica interativa
├── Personagens.html      # Página temática de encontro com personagens
├── projeto.html          # Detalhes e documentação do projeto
├── radicais.html         # Página temática de atrações radicais
├── zoologico.html        # Página temática do zoológico / áreas de animais
└── README.md             # Documentação do projeto
🚀 Funcionalidades do Projeto
👥 Cadastro de Usuários: Interface dedicada ao registro de clientes e usuários do sistema com validação de dados (Nome, Senha, CPF e Data de Nascimento).

🎟️ Cadastro de Produtos e Passaportes: Gestão completa de ingressos e produtos com nome, descrição, código, preço unitário e quantidade em estoque.

🌐 Navegação Multipáginas: Acesso simplificado a abas e páginas temáticas exclusivas do parque:

Radicais (radicais.html)

Família (familia.html)

Alimentação / Comida (comida.html)

Personagens (Personagens.html)

Zoológico (zoologico.html)

🗑️ Gerenciamento Dinâmico: Botão de exclusão funcional na tabela, recalculando automaticamente o estoque, os valores e os gráficos em tempo real.

📊 Dashboard de Vendas em Tempo Real:

Cálculo automático do total de produtos cadastrados.

Atualização instantânea do total vendido (R$) com base nas entradas.

Valores de referência oficiais integrados (Passaportes de 1 e 2 dias, além de condições especiais para aniversariantes e moradores de Santa Catarina).

🎡 Dashboard de Atrações e Visitantes (Gráficos Dinâmicos):

Gráfico de Rosca (Donut): Categorização visual do fluxo nas principais áreas do parque (Radicais, Família, Comida, Personagens e Zoológico).

Gráfico de Barras: Visualização paralela do fluxo de visitantes por atração.

Legenda interativa que atualiza os números de visitantes conforme novos itens são adicionados ou removidos.

📋 Tabela de Registros: Listagem organizada em tempo real de todos os produtos e passaportes cadastrados no painel, com opção de remoção individual.

🛠️ Tecnologias Utilizadas
O projeto foi desenvolvido do zero utilizando tecnologias web essenciais:

HTML: Estruturação semântica dos painéis, formulários em formato de cartões (cards) e navegação entre múltiplas páginas temáticas.

CSS: Estilização moderna inspirada na identidade visual oficial do parque (cores temáticas, responsividade e layout em Dashboard Grid).

JavaScript: Lógica de navegação entre abas, manipulação de formulários, cálculo de totais, atualização dinâmica de tabelas e controle de remoção de itens (java.js / src/script.js).

Chart.js: Biblioteca JavaScript para renderização e atualização em tempo real dos gráficos interativos (Rosca e Barras).

🎨 Identidade Visual
O painel foi customizado para refletir a energia do Beto Carrero World, utilizando o clássico amarelo de fundo, detalhes em vermelho temático e azul vibrante nos botões e elementos de destaque, proporcionando uma experiência imersiva e administrativa de alto nível.
