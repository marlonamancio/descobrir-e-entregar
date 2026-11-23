---
title: Por que descobrir e entregar ao mesmo tempo
description: "Do jogo de rúgbi de Takeuchi e Nonaka ao ágil, por que construir bem não basta e o que levou a descobrir e entregar ao mesmo tempo."
slug: por-que-descobrir-e-entregar
capitulo: 1
parte: 1
status: rascunho
colaboradores: [marlonamancio]
sidebar:
  order: 1
---

## Uma cena familiar

A cena a seguir é inventada, mas muita gente de produto vai reconhecê-la.

Segunda-feira, planejamento da terceira sprint. O backlog tem quarenta itens, todos com protótipo aprovado no mês passado. Na quarta-feira, a pessoa de design conversa com uma usuária e percebe que a tela principal resolve um problema que ninguém tem. Duas sprints de código já estão em produção, e a pergunta na reunião seguinte é a mais desconfortável do projeto: "Mudamos agora ou entregamos como está?"

Ninguém ali trabalhou mal. O design pesquisou, a gestão priorizou, a engenharia entregou no prazo. O problema está no desenho do processo, que colocou o aprendizado no fim, quando mudar de ideia custa mais caro.

Este livro trata de como equipes de produto evitam essa cena. A resposta curta é trabalhar em duas frentes ao mesmo tempo: **descobrir** o que vale a pena construir e **entregar** o que já foi validado. Este capítulo mostra de onde vem essa ideia e por que ela faz sentido.

## O problema: trabalho em revezamento

Em 1986, Hirotaka Takeuchi e Ikujiro Nonaka publicaram na *Harvard Business Review* o artigo "The New New Product Development Game". Eles estudaram empresas como Fuji-Xerox, Canon, Honda, NEC, Epson, Brother, 3M, Xerox e Hewlett-Packard, e analisaram o desenvolvimento de seis produtos. O que encontraram foram [equipes multifuncionais e autoorganizadas](https://agile-academy.com/en/foundations/the-origins-of-scrum).

A comparação que ficou famosa é esta: desenvolver um produto em etapas sequenciais é como uma corrida de revezamento, em que cada corredor passa o bastão ao próximo e só então o seguinte começa a correr. As empresas que eles admiravam funcionavam mais como um time de rúgbi, que avança junto, passando a bola de mão em mão. Nelas, as fases se sobrepunham, em graus diferentes. O exemplo de revezamento do artigo é o planejamento em fases da NASA, que vai do conceito à produção em etapas encadeadas.

O diagnóstico por trás da metáfora é simples. Quando cada especialidade só começa depois que a anterior termina, o aprendizado chega tarde, e o custo de corrigir sobe a cada etapa.

## O que o ágil resolveu e o que deixou de fora

Nos anos seguintes, o desenvolvimento de software foi buscando sair do revezamento. O Scrum levou a imagem do rúgbi para o dia a dia das equipes. Em fevereiro de 2001, [dezessete pessoas se reuniram em Snowbird, Utah](https://agilemanifesto.org/history.html), e escreveram o Manifesto para o Desenvolvimento Ágil de Software. O que o ágil trouxe foi a entrega em ciclos curtos, a colaboração frequente com o cliente e a capacidade de mudar de direção.

Isso resolveu boa parte do problema de **construir** com menos desperdício. Mas o manifesto fala de desenvolver software. Na leitura deste livro, ele diz pouco sobre quem decide *o que* construir e sobre quando entram o design e a pesquisa com usuários. Marty Cagan, em *Inspirado*, observa que quase todo mundo hoje se diz ágil, mas que o fluxo típico (gestão escreve requisitos, design desenha, engenharia constrói em sprints) continua sendo, em sua essência, uma cascata. A diferença é que agora ela é feita em sprints.

## Uma equipe que tentou resolver na prática

O relato mais antigo e mais citado de uma saída para isso vem da Alias, uma empresa de software de desenho 3D e 2D de Toronto, hoje parte da Autodesk.

Lynn Miller, que liderava o design de interação, apresentou em 2005, no congresso Agile 2005, o [estudo de caso do SketchBook Pro](https://jpattonassociates.com/wp-content/uploads/2015/01/Lynn-Miller-Custmer-Input-in-Agile-Projects.pdf), um aplicativo de desenho. A versão 2.0 levou cerca de um ano, com uma equipe pequena. Os ciclos duravam em torno de duas semanas. Enquanto os desenvolvedores construíam as funcionalidades do ciclo atual, os designers pesquisavam, desenhavam e testavam as dos ciclos seguintes, em geral um ciclo à frente. Antes de tudo havia um "ciclo 0" de pesquisa. Dados de usabilidade, fóruns, entrevistas e visitas a usuários apontaram cerca de 20 possíveis obstáculos à compra do produto, e uma pesquisa com quem baixou o aplicativo e não comprou reduziu a lista a cinco itens essenciais.

O motivo da mudança era concreto. No processo anterior, que era majoritariamente em cascata, os desenvolvedores muitas vezes começavam a programar sem esperar o desenho. Quando a equipe de UX tentava se antecipar, escrevia especificações que ficavam desatualizadas antes de serem usadas.

Desirée Sy, da mesma equipe, descreveu o arranjo em 2007 no *Journal of Usability Studies*. Ela o chamou de duas trilhas paralelas: uma para iterar o desenho, outra para iterar a implementação, ao mesmo tempo, com conversa diária entre quem desenha e quem programa. É desse artigo que vem a expressão *dual tracks*.

Uma ressalva honesta: os dois textos são relatos da própria equipe, e os resultados são qualitativos (menos desenhos descartados, menos surpresas de cronograma). Não há comparação medida com outro jeito de trabalhar. Eles mostram um problema real e uma solução plausível, e não uma prova de que ela funciona em qualquer lugar.

## A ideia em uma frase

Cagan resume o modelo assim em *Inspirado*: toda equipe de produto tem duas atividades essenciais, descobrir o produto a ser desenvolvido e entregá-lo ao mercado, e as duas acontecem em paralelo.

- **Descobrir** serve para separar rápido as boas ideias das ruins e chegar a um backlog validado. Isso responde a quatro perguntas: a pessoa vai querer usar isso? Ela consegue entender como se usa? A engenharia consegue construir? As partes interessadas dão apoio?
- **Entregar** serve para construir e lançar, com qualidade de produção, o que a descoberta indicou que vale a pena.

Na descoberta, a equipe faz experimentos rápidos com protótipos em vez de produtos. Segundo Cagan, equipes fortes testam várias ideias por semana. Um protótipo não está pronto para ser lançado, e esse é o ponto: ele custa uma fração do tempo de um produto e ensina quase a mesma coisa.

Hoje o nome mais usado para o conjunto é *discovery e delivery contínuos*. O nome antigo, *dual-track*, vem justamente do artigo de Sy e foi difundido por Jeff Patton e pelo próprio Cagan. Cagan [deixou de usá-lo](https://www.svpg.com/dual-track-agile/) para não dar a impressão de que o ponto é o processo. A história completa fica para o capítulo 2.

Vale notar que a divisão não separa pessoas em dois times. Cagan diz que engenheiros ajudam na descoberta todos os dias, e que gestão de produto e design ajudam na entrega, principalmente para esclarecer o comportamento esperado. Um dos pontos mais fortes do modelo é justamente esse vai e vem.

## O que muda no dia a dia

Na leitura deste livro, o contraste entre os dois jeitos de trabalhar pode ser resumido assim:

| Pergunta | Em revezamento | Em paralelo |
| --- | --- | --- |
| Quando a equipe aprende com usuários? | Antes do projeto, ou depois do lançamento | Toda semana |
| Quando o risco aparece? | No fim, quando o produto já está pronto | Cedo, antes de escrever código de produção |
| Quem participa das decisões sobre o que construir? | Quem escreve os requisitos | Gestão, design e engenharia, juntas |
| O que é "pronto" para entrar no desenvolvimento? | Um documento ou um desenho aprovado | Uma ideia com evidência de que vale a pena |

Cagan aponta como a maior falha da cascata o fato de que todo o risco fica no fim, e a validação com o cliente acontece tarde demais. Descobrir e entregar em paralelo é uma forma de trazer esse risco para o começo.

## Cuidado com o atalho

Havia, e há, um jeito fácil de ler tudo isso errado: "então design trabalha uma sprint à frente e a engenharia segue atrás". Esse arranjo existe e funciona em muitas equipes, mas tem um risco conhecido, o de virar uma mini-cascata dentro de cada sprint. O capítulo 3 mostra o que o modelo não é, segundo quem o difundiu.

## Na prática, para você

- **UX designer:** a pergunta deixa de ser "o desenho está pronto?" e passa a ser "já temos evidência de que isso resolve o problema?". Seu trabalho continua durante a entrega, porque o código ainda traz dúvidas de comportamento.
- **Gestor e dono do produto:** o backlog passa a ser, em boa parte, o resultado da descoberta, e não uma lista de pedidos. Seu papel é ajudar a equipe a escolher o que merece ser testado.
- **Líder de UX ou TI:** seu desafio é abrir espaço na agenda e na cultura para que a descoberta aconteça toda semana, e não só no início do projeto.
- **Agilista ou Scrum Master:** os eventos do Scrum cuidam bem da entrega. A pergunta é onde, no ritmo da equipe, a descoberta tem lugar.

## Para praticar

Escolha um projeto recente em que você trabalhou e responda, de preferência com mais uma pessoa da equipe:

1. Quando foi a primeira conversa com um usuário real? E a última?
2. Quando foi escrita a primeira linha de código de produção?
3. Depois dessa primeira linha, houve alguma mudança importante de direção causada por algo que se aprendeu com usuários? Quanto isso custou?
4. Se você pudesse antecipar uma única descoberta para o início do projeto, qual seria?

Não há resposta certa. A ideia é perceber, no seu próprio trabalho, onde o aprendizado está chegando.

## Em resumo

- Processos em etapas deixam o aprendizado para o fim, quando mudar é mais caro.
- O ágil melhorou a forma de construir, mas deixou aberta a pergunta de *o que* construir.
- Descobrir e entregar em paralelo traz o risco para o início e mantém a equipe toda envolvida nas duas atividades.
- Os relatos que sustentam a ideia são experiência de profissionais, e não estudos comparativos.

## Para ler mais

- Takeuchi, H. e Nonaka, I. (1986). *The New New Product Development Game*. Harvard Business Review, janeiro de 1986.
- Miller, L. (2005). [*Case Study of Customer Input For a Successful Product*](https://jpattonassociates.com/wp-content/uploads/2015/01/Lynn-Miller-Custmer-Input-in-Agile-Projects.pdf). Agile 2005.
- Sy, D. (2007). *Adapting Usability Investigations for Agile User-Centered Design*. Journal of Usability Studies, 2(3), 112-132.
- Cagan, M. *Inspirado*. Edição brasileira, Alta Books. Capítulo sobre descoberta e entrega contínuas.
- Cagan, M. (2012). [*Dual-Track Agile*](https://www.svpg.com/dual-track-agile/). SVPG.
- Agile Manifesto. [*History: The Agile Manifesto*](https://agilemanifesto.org/history.html).

## Notas de pesquisa

O registro das fontes lidas, consultadas e pendentes deste capítulo está nas [notas de pesquisa do capítulo 1](/pesquisa/por-que-descobrir-e-entregar/).
