---
title: "Discovery e delivery contínuos: o que é e o que não é"
description: "Define discovery e delivery contínuos, mostra o que o modelo é e o que não é, e quem participa de cada trilha numa equipe de produto."
slug: o-que-e-e-o-que-nao-e
capitulo: 3
parte: 2
status: rascunho
colaboradores: [marlonamancio]
sidebar:
  order: 3
---

*Cena inventada, apenas para ilustrar.* Em uma retrospectiva, a equipe de um aplicativo de pagamentos faz duas listas. Na primeira: tudo o que foi entregue no trimestre, no prazo. Na segunda: o que mudou para o cliente. A segunda lista está quase vazia. Ninguém errou o processo. Faltou um jeito de saber, durante o trabalho, se o que estava sendo construído valia a pena.

Este capítulo define, com o máximo de precisão que as fontes permitem, o que são discovery e delivery contínuos, quem faz o quê e quais leituras erradas são mais comuns.

## A ideia em uma frase

Discovery é o trabalho de decidir **o que** construir. Delivery é o trabalho de construir **bem** o que foi decidido. Em vez de fazer um antes do outro, a equipe faz os dois ao mesmo tempo e o tempo todo: toda semana há aprendizado sobre clientes e soluções, e toda semana há software sendo entregue.

Segundo Cagan (*Inspirado*), o objetivo do discovery é separar as boas ideias das ruins antes de gastar tempo de engenharia nelas. Seu produto concreto é um backlog validado: itens que a equipe tem evidências de que são valiosos, utilizáveis, viáveis e sustentáveis para o negócio.

## O que cada atividade faz

|  | Discovery | Delivery |
| --- | --- | --- |
| Pergunta | O que vale a pena construir? | Como construir isso com qualidade? |
| Foco | Aprender rápido, validar ideias | Previsibilidade e qualidade |
| Medida de ritmo | Velocidade de aprendizado | Velocidade de entrega |
| Produto | Ideias validadas, descartadas ou alteradas | Software pronto para ser lançado |
| Ferramentas típicas | Entrevistas, protótipos, testes, experimentos | Código, testes, revisão, lançamento |
| Ciclo | Horas ou dias, muda de direção com frequência | Mais deliberado, em sprints ou fluxo contínuo |

A distinção de ritmo vem de Patton: discovery se mede por velocidade de aprendizado e delivery por previsibilidade. Ele acrescenta que construir software de produção é a forma mais cara de testar uma ideia, então só se justifica quando não há jeito mais barato de aprender.

## Os quatro riscos

Cagan organiza o discovery em torno de quatro riscos que precisam ser tratados **antes** de construir:

- **Valor:** o cliente vai querer usar ou comprar?
- **Usabilidade:** o cliente vai conseguir usar?
- **Viabilidade:** a equipe consegue construir com o tempo, a tecnologia e as habilidades que tem?
- **Viabilidade para o negócio:** a solução funciona para o negócio, considerando finanças, jurídico, marketing, vendas e outras áreas?

O livro também trata a ética como uma dimensão a avaliar no discovery: algo pode ser desejável, utilizável e viável e ainda assim causar dano. Para quem desenha, vale notar que usabilidade é um dos quatro riscos, mas não os esgota: a pessoa de design costuma liderar o risco de usabilidade e ajuda a pensar o de valor.

## Quem participa

Para Cagan, a equipe de produto reúne pelo menos gestão de produto, design e engenharia, e os três participam do discovery. A razão é prática: engenheiros enxergam possibilidades técnicas que mudam a solução, e quem vai construir aprende o porquê com mais profundidade quando viu as evidências. O livro defende que a equipe seja de "missionários" que se importam com o problema, e não de "mercenários" que só executam especificações.

Patton chega à mesma conclusão pelo outro lado: gestores de produto, designers e engenheiros seniores costumam **liderar** o discovery, mas toda a equipe deve participar sempre que possível e manter o trabalho visível. Quem fica de fora tem pior entendimento do produto, e o produto sofre.

## Como a ideia circulou: do dual-track a "contínuo"

O termo *dual-track* tem origem rastreável. Segundo o próprio Patton, ele estava ensinando uma turma de três dias com Cagan, mostrou um modelo, e Cagan perguntou de onde vinha. Patton chegou a um artigo de 2007 de Desirée Sy, que trabalhava na Alias (hoje parte da Autodesk), no qual designers e desenvolvedores trabalham de perto e conversam todos os dias, em "trilhas duplas". Cagan passou a usar o termo com gestores de produto, Patton o adotou e a expressão se espalhou.

Depois disso, Cagan abandonou a expressão. Na segunda edição de *Inspirado*, a ideia aparece como **discovery e delivery contínuos**, e o livro descreve o trabalho de discovery como uma série de iterações rápidas, na ordem de dez a vinte por semana nas melhores equipes, em vez de uma fase com começo e fim. O nome mudou; o conteúdo central ficou: aprender e entregar em paralelo, com a mesma equipe.

## O que não é: as correções de Patton

Patton escreveu seu artigo (publicado em 2017 e atualizado em 2023) justamente porque o desenho de duas trilhas era lido errado. As correções, uma a uma:

1. **Não são dois times.** A equipe inteira divide a responsabilidade pelo sucesso do produto. Quem não participa do discovery perde contexto.
2. **Não são dois processos.** São duas partes de um mesmo processo, com tipos de trabalho e de raciocínio diferentes.
3. **Não é uma fase antes do ágil.** Discovery é parte contínua do desenvolvimento de produto e segue os mesmos princípios ágeis e lean.
4. **Não é um fluxo de mão única.** Bom discovery descarta ou muda muitas ideias; nem tudo que é explorado vira desenvolvimento.
5. **Não termina no lançamento.** Medir e aprender continuam depois que o software vai ao ar. Patton cita Jeff Gothelf: o software em produção é o experimento final, e o de maior risco.

Patton também descreve um terceiro tipo de trabalho entre os dois: transformar uma ideia validada em algo construível exige decisões táticas de design, que costumam ser feitas pouco antes do desenvolvimento.

## Os riscos de errar na prática

- **Mini-cascata.** Se o discovery vira a etapa que "entrega" requisitos prontos e a engenharia só executa, o fluxo volta a ser linear dentro do ágil, só que em ciclos menores. Patton alerta para o caso em que a equipe apressa o discovery só para manter os desenvolvedores ocupados, o que leva a construir antes de ter evidências suficientes.
- **Um ciclo à frente vs. a equipe toda.** Muitos materiais descrevem o discovery como "uma ou duas sprints à frente" do delivery. Como regra didática ajuda, mas não deve virar divisão de pessoas: é o tempo do trabalho que se adianta, não o time que se divide. <!-- TODO: revisão — regra sem fonte indicada -->
- **Discovery como rótulo.** Fazer algumas entrevistas por trimestre não é discovery contínuo. A marca do contínuo é o ritmo regular de aprendizado em paralelo à entrega. <!-- TODO: revisão — risco sem fonte indicada -->
- **Delivery esquecido.** Discovery sem entrega frequente atrasa o aprendizado que só o produto em uso traz. <!-- TODO: revisão — risco sem fonte indicada -->

## Na prática, para você

<!-- TODO: revisão — recomendações sem fonte; papéis padronizados em quatro: UX Designer, Gestor e dono do produto, Líder de UX ou TI, Agilista ou Scrum Master -->

- **UX Designer:** seu papel inclui liderar o risco de usabilidade, mas as hipóteses de valor também passam por você. Convide engenharia para as sessões de teste.
- **Gestor e dono do produto:** você costuma liderar valor e viabilidade de negócio; compartilhe as evidências, não só as conclusões.
- **Líder de UX ou TI:** participar do discovery é parte do trabalho da equipe, não um favor, e as restrições técnicas precisam chegar cedo. Cabe à liderança garantir esse espaço.
- **Agilista ou Scrum Master:** observe se a medida de sucesso é saída ou resultado. Se só a velocidade de entrega é acompanhada, o discovery tende a ser cortado.

## Para praticar

1. Liste os últimos cinco itens que sua equipe entregou. Para cada um, qual evidência existia de valor, usabilidade, viabilidade e viabilidade para o negócio?
2. Desenhe como o tempo da sua equipe é dividido hoje. Quem participa de aprendizado sobre clientes toda semana?
3. Das cinco correções de Patton, qual descreve melhor um erro que sua equipe já cometeu?

## Em resumo

- Discovery decide o que construir; delivery constrói bem. Os dois acontecem juntos e sempre.
- Cagan organiza o discovery em quatro riscos: valor, usabilidade, viabilidade e viabilidade para o negócio.
- Patton corrige cinco leituras erradas: não são dois times, não são dois processos, não é uma fase anterior, não é fluxo de mão única e não termina no lançamento.
- O nome *dual-track* tem origem em Desirée Sy (2007) e foi popularizado por Cagan e Patton; em *Inspirado* (2ª ed.), Cagan fala em discovery e delivery contínuos.

## Para ler mais

- Cagan, M. *Inspirado* (2ª ed., edição em português): capítulos sobre princípios de produto, a equipe e as técnicas de discovery.
- Patton, J. *Dual Track Development is not Duel Track*. jpattonassociates.com (2017; atualizado em 2023).
- Sy, D. *Adapting Usability Investigations for Agile User-centered Design* (2007).

## Notas de pesquisa

O registro das fontes lidas, consultadas e pendentes deste capítulo está nas [notas de pesquisa do capítulo 3](/pesquisa/o-que-e-e-o-que-nao-e/).
