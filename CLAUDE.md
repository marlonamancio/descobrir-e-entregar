# CLAUDE.md — Descoberta e Entrega Contínuas

Contexto do projeto para o Claude Code. Leia antes de qualquer tarefa neste repositório.

## O projeto

- **Livro:** *Descoberta e Entrega Contínuas: um guia para equipes de produtos*.
- **Natureza:** livro colaborativo e aberto, escrito em Markdown, publicado como site em domínio próprio (não no site pessoal do mantenedor).
- **Domínio:** `descobrir-e-entregar.com.br` (canônico, sem www). `descobrireentregar.com.br` e `descobrirentregar.com.br` redirecionam (301) para ele.
- **Repositório:** `github.com/marlonamancio/descobrir-e-entregar`.
- **Mantenedor:** Marlon Amâncio (github.com/marlonamancio). Revisa e aprova issues e pull requests. O repositório fica na conta pessoal dele, sem organização separada.
- **Foco:** como executar bem discovery e delivery contínuos em grandes empresas, com vários times e papéis, em ambiente ágil, regulado e de alta complexidade. Times pequenos e médios também são tratados.
- **Público:** design (UX e UI), gestão e dono de produto, lideranças de UX e de tecnologia, agilistas.
- **Origem:** projeto pessoal de estudo, com pesquisa bibliográfica e auxílio de IA (a introdução declara isso).
- **Estágio:** versão alpha publicada antes de o livro estar completo.

## Regras de conteúdo (valem para todo texto)

- Tudo em **português do Brasil**: texto, interface do site, nomes de arquivos de conteúdo e templates.
- **Voz (decidido em 22/11/2026): terceira pessoa impessoal** ("o livro", "as fontes", "na leitura deste livro"). O "você" fica só nos blocos de fala direta ("Na prática, para você" e "Para praticar"). **Sem primeira pessoa**, no singular ou no plural: nada de "eu", "nós", "nossa leitura", "vamos ver" ou "voltaremos". Sem experiência pessoal simulada: o livro é pesquisa bibliográfica e serve de estudo para o autor. Exceção: frases-modelo que o leitor vai completar em grupo (ex.: "Se adotarmos discovery e delivery contínuos, vamos herdar X…") podem ficar na voz de quem pratica.
- **Nunca citar o empregador** de nenhum autor ou contribuidor, nem usar informação interna ou casos identificáveis.
- **Termos:** "discovery" e "delivery" ficam em inglês, como par principal; "dual-track" é nome histórico, em itálico. Os verbos "descobrir" e "entregar" ficam em português. Também em inglês: backlog, sprint (feminino: "uma sprint"), squad, handoff. Usar "gestão de produto" e "dono de produto" (PO). *Inspirado* para a edição brasileira de Cagan; *Inspired* para a original.
- **Exemplos:** casos reais só com fonte aberta. Exemplos fictícios sempre avisados como fictícios.
- **Interpretação marcada:** tabelas e leituras próprias vêm assinaladas ("síntese do livro", "na leitura deste livro").
- Licença do texto: **CC BY-SA 4.0** (`LICENSE.txt`, texto completo). Código do site: **MIT** (`LICENSE-CODE.txt`). O README, o CONTRIBUTING e o rodapé do site devem citar as duas.
- **Nunca** subir PDF, EPUB ou cópia de obras de referência para o repositório.

## Estrutura do capítulo

1. Situação de abertura (sem título)
2. Desenvolvimento em seções
3. **Na prática, para você**, com cinco itens fixos, nesta ordem: UX designer; UI designer; gestão e dono de produto; liderança de UX ou de tecnologia; agilista ou scrum master
4. **Para praticar**
5. **Em resumo**
6. **Para ler mais**

Títulos:

- O título do capítulo vem do frontmatter (o Starlight gera o H1). Não repetir no corpo.
- Seções em `##`, subseções em `###`. Nada abaixo de `###`.
- Sem numeração nos títulos. Exceção: as cinco correntes do capítulo 2, cujo número faz parte do conteúdo.
- Não escrever "Leitura: cerca de N minutos" no corpo: o site calcula.
- Notas de pesquisa **nunca** no corpo do capítulo: vão para `pesquisa/`.

## Sumário

| Parte | Cap. | Título | Slug | Status |
|---|---|---|---|---|
| 1. O ponto de partida | 1 | Por que descobrir e entregar ao mesmo tempo | `por-que-descobrir-e-entregar` | rascunho |
| | 2 | Uma história de ideias | `uma-historia-de-ideias` | rascunho |
| 2. O modelo | 3 | Discovery e delivery contínuos: o que é e o que não é | `o-que-e-e-o-que-nao-e` | rascunho |
| | 4 | Uma equipe, duas trilhas | `uma-equipe-duas-trilhas` | planejado |
| | 5 | Como as trilhas se conversam | `como-as-trilhas-se-conversam` | planejado |
| 3. Discovery na prática | 6 | Resultados antes de entregas | `resultados-antes-de-entregas` | planejado |
| | 7 | Conversar com pessoas toda semana | `conversar-com-pessoas` | planejado |
| | 8 | Mapear oportunidades | `mapear-oportunidades` | planejado |
| | 9 | Testar antes de construir | `testar-antes-de-construir` | planejado |
| 4. Delivery contínuo com design embarcado | 10 | Do validado ao entregável | `do-validado-ao-entregavel` | planejado |
| | 11 | Design dentro da entrega | `design-dentro-da-entrega` | planejado |
| | 12 | Medir e fechar o ciclo | `medir-e-fechar-o-ciclo` | planejado |
| 5. Em grandes organizações | 13 | Muitos times, muitos papéis | `muitos-times-muitos-papeis` | planejado |
| | 14 | Frameworks de escala | `frameworks-de-escala` | planejado |
| | 15 | Ambientes regulados e de alta complexidade | `ambientes-regulados` | planejado |
| | 16 | UX em escala | `ux-em-escala` | planejado |
| 6. Pondo em prática | 17 | Começando aos poucos | `comecando-aos-poucos` | planejado |

Apêndices: A `glossario`, B `guia-por-papel`, C `exercicios-e-modelos`, D `referencias` (bibliografia completa).

Status (mesmo vocabulário da Introdução e do README): **planejado** = sem texto; **rascunho** = há texto, mas as fontes ainda precisam ser conferidas; **pesquisado** = fontes abertas e conferidas; **revisado** = texto e fontes revisados.

Outras páginas: `/` (capa curta, com link para a Introdução), `introducao` (já escrita, em rascunho; fica como porta de entrada do livro), `como-contribuir` (página curta: resumo das regras em poucas linhas e link para o `CONTRIBUTING.md` no GitHub, que é a única fonte do passo a passo e do prompt para IA; não duplicar o texto), `roteiro` (sumário completo com status), `pesquisa/<slug-do-capitulo>` (notas de pesquisa).

Não criar, renomear nem renumerar capítulos sem pedido explícito. **URLs não mudam** quando um capítulo é renumerado: o slug é fixo.

## Estrutura de pastas

```
/
├── src/content/docs/
│   ├── index.mdx                       # capa
│   ├── introducao.md
│   ├── como-contribuir.md
│   ├── roteiro.md
│   ├── parte-1/
│   │   ├── 01-por-que-descobrir-e-entregar.md
│   │   └── 02-uma-historia-de-ideias.md
│   ├── parte-2/
│   │   └── 03-o-que-e-e-o-que-nao-e.md
│   ├── parte-3/ … parte-6/
│   ├── apendices/
│   │   ├── a-glossario.md
│   │   ├── b-guia-por-papel.md
│   │   ├── c-exercicios-e-modelos.md
│   │   └── d-referencias.md
│   └── pesquisa/
│       └── por-que-descobrir-e-entregar.md   # uma por capítulo
├── src/content.config.ts               # schema estendido do frontmatter
├── public/                             # imagens e estáticos
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE.txt                         # CC BY-SA 4.0 (texto)
├── LICENSE-CODE.txt                    # MIT (código do site)
├── .all-contributorsrc
├── .markdownlint.jsonc
└── .github/
    ├── ISSUE_TEMPLATE/
    ├── pull_request_template.md       # inclui declaração de uso de IA (caixas: usou IA? para quê?) e `Fecha #issue`
    └── workflows/                      # lint e, no futuro, PDF/EPUB
```

Nomes: minúsculas, sem acento, hífen entre palavras. Arquivos de capítulo com prefixo de dois dígitos (`01-`). O prefixo ordena o repositório; a URL vem do `slug`.

## Frontmatter do capítulo

```yaml
---
title: Por que descobrir e entregar ao mesmo tempo
description: Uma frase sobre o capítulo.
slug: por-que-descobrir-e-entregar
capitulo: 1
parte: 1
status: rascunho       # planejado | rascunho | pesquisado | revisado
colaboradores: [marlonamancio]
sidebar:
  order: 1
---
```

- `capitulo`, `parte`, `status` e `colaboradores` são campos próprios: estender o schema com `docsSchema({ extend: ... })` em `src/content.config.ts`.
- O `status` aparece como selo na página e no Roteiro.
- O tempo de leitura é calculado no componente PageTitle, contando as palavras do texto-fonte (sem código nem HTML), a cerca de 200 palavras por minuto, arredondado para cima. Não usa plugin remark. Data de atualização: `lastUpdated` do Git.

## Stack

| Camada | Escolha |
|---|---|
| Gerador do site | Astro + **Starlight** |
| Conteúdo | Markdown/MDX em `src/content/docs/` |
| Idioma da interface | pt-BR como locale raiz |
| Busca | Pagefind (embutido no Starlight) |
| Hospedagem | Cloudflare **Workers com assets estáticos**, deploy pela integração Git, prévia por pull request |
| Analytics | Cloudflare Web Analytics (sem cookies, sem aviso de consentimento) |
| Pacotes e Node | npm; Node LTS fixado em `.nvmrc` |
| Créditos | All Contributors |
| Lint | markdownlint no CI (GitHub Actions) |
| Conversa | Discussions para propostas e debate; Issues para trabalho concreto |
| PDF/EPUB | **Depois do lançamento**: Pandoc, via GitHub Action |

`astro.config.mjs`:

- `site`: `https://descobrir-e-entregar.com.br` (habilita sitemap e URL canônica). O `www` redireciona para o domínio sem `www` por regra na Cloudflare.
- `title`: "Descoberta e Entrega Contínuas"
- `locales`: raiz em `pt-BR`
- `editLink.baseUrl`: `https://github.com/marlonamancio/descobrir-e-entregar/edit/main/`
- `lastUpdated: true`
- `sidebar`: gerada a partir de `src/data/sumario.ts` (ver abaixo), em grupos por parte, **só com capítulos de status diferente de `planejado`**; apêndices e páginas de apoio em grupos próprios
- `customCss`: `./src/styles/tema.css` (cores de destaque)
- `components`: substituir `PageTitle` (selo de status e tempo de leitura) e `Footer` (licenças e aviso)
- Plugin `starlight-links-validator`: link interno quebrado faz o build falhar

## Decisões técnicas (22/11/2026)

**Sumário como fonte única.** `src/data/sumario.ts` lista partes e os 17 capítulos (número, título, slug, parte, status). Dele saem o menu lateral e a página Roteiro. Capítulo `planejado` não tem arquivo em `src/content/docs/`, só a linha no sumário. Ao mudar o status de um capítulo, atualizar o frontmatter **e** o sumário (o build deve acusar divergência).

**Título da página.** Override de `PageTitle`: título, selo de status (planejado, rascunho, pesquisado, revisado) e tempo de leitura. O tempo de leitura é calculado no componente PageTitle, contando as palavras do texto-fonte (sem código nem HTML), a cerca de 200 palavras por minuto, arredondado para cima. Não usa plugin remark.

**Faixa de alpha.** Faixa em todas as páginas: "Versão alpha: o livro está em construção e aceita contribuições." com link para `/como-contribuir/`. No Starlight, `banner` é campo de frontmatter por página: para valer em todas as páginas, é preciso sobrescrever o componente `Banner` (ou usar um plugin). Verificar no build antes de fechar.

**Rodapé.** Override de `Footer`, mantendo o padrão do Starlight e acrescentando: texto sob CC BY-SA 4.0; código sob MIT; link para o repositório; "Este livro é um projeto independente e não representa a posição de nenhuma instituição."

**Identidade visual.** Tema padrão do Starlight, título como logotipo em texto, favicon simples, claro/escuro seguindo o sistema. Cor de destaque: azul-petróleo (provisória, pode mudar). O favicon atual (SVG com duas barras) e o ícone do GitHub no cabeçalho são provisórios: a identidade visual (favicon e imagem Open Graph) será definida pelo autor.

```css
/* src/styles/tema.css */
:root {
  --sl-color-accent-low: #0b2e33;
  --sl-color-accent: #1f8a8f;
  --sl-color-accent-high: #a6e1e0;
}
:root[data-theme='light'] {
  --sl-color-accent-low: #c4ecea;
  --sl-color-accent: #0e6b70;
  --sl-color-accent-high: #083b3f;
}
```

**Legibilidade do texto (decidido em 22/11/2026).** Sem controle de tamanho de fonte na página: quem precisar usa o zoom e as configurações do navegador (o Starlight usa `rem`, então tudo acompanha). O padrão já vem confortável para leitura longa, só no corpo do capítulo, sem mexer no tamanho da interface:

```css
/* também em src/styles/tema.css */
:root {
  --sl-content-width: 40rem;          /* ~70 caracteres por linha com o corpo em 18px */
}
.sl-markdown-content {
  font-size: 1.125rem;                /* 18px, contra 16px do padrão */
  line-height: 1.7;
}
```

Validar no navegador antes de fechar: medir caracteres por linha (alvo 60 a 75) e conferir a página no celular. Não usar `px` em tamanhos de texto.

Contraste: link no claro 6,3:1 sobre branco; link no escuro 12,2:1; texto `accent-high` sobre `accent-low` acima de 9,6:1 nos dois temas. O `--sl-color-accent` do escuro (4,3:1) só em bordas e fundos, nunca em texto.

**CI.** GitHub Action em todo pull request: markdownlint, `npm run build` (inclui a validação de links). A branch `main` exige pull request e verificações aprovadas, inclusive para o mantenedor.

**Versões.** Releases no GitHub marcam marcos; o lançamento é `v0.1.0-alpha`. Sem CHANGELOG manual.

**Compartilhamento.** Uma imagem Open Graph única para o livro todo no lançamento.

**Depois do lançamento:** comentários (Giscus, sobre Discussions), PDF/EPUB, newsletter, imagem OG por capítulo.

## Citações

- **No texto:** citação leve, com link na expressão-chave e data por extenso ("17 de setembro de 2012").
- **Para ler mais** (fim do capítulo), em APA: `Autor, I. (ano). *Título*. Veículo.`
- **Apêndice D:** bibliografia completa, mesmo formato.
- Sem `rehype-citation` no lançamento.
- Não inventar referências, páginas, anos, edições ou citações diretas. Fonte não verificada: marcar `<!-- TODO: verificar fonte -->` e avisar o mantenedor.

## Notas de pesquisa

Uma página por capítulo em `pesquisa/`, pública, registrando o que foi lido na íntegra, em parte, só por resumo e o que está pendente. O capítulo traz um link para a sua página de pesquisa.

## Migração (do Claude Docs)

Documento de origem: "Livro — Descoberta e Entrega Contínuas" (abas Introdução, Capítulo 1, Capítulo 2, Capítulo 3 e Notas de pesquisa).

- Copiar o texto **sem reescrever**.
- Ajustes mecânicos permitidos:
  - níveis de título (nos capítulos 1 e 2 o título do capítulo é H2 e as seções são H3: o H1 sai e as seções sobem para `##`; no capítulo 3 tudo já é H2);
  - retirar a numeração das seções do capítulo 3 (3.1 a 3.8), mantendo a numeração das cinco correntes do capítulo 2;
  - retirar a linha "Leitura: cerca de N minutos" dos capítulos 1 e 2 (o site calcula);
  - trocar o bloco "Metadados do capítulo" e o título/subtítulo do livro (no topo do capítulo 1) pelo frontmatter e pela configuração do site;
  - separar as notas de pesquisa em **três páginas** (`pesquisa/`, uma por capítulo); a aba "Notas de pesquisa" tem três blocos, um para cada capítulo;
  - frontmatter (o `description` de cada capítulo é uma frase nova: o mantenedor aprova antes de publicar).
- A remissão do capítulo 2 ao capítulo 15 já foi corrigida no Claude Docs. Conferir no Markdown.
- A voz impessoal já foi aplicada à Introdução e aos capítulos 1 a 3. Se aparecer "nossa leitura", "vamos ver" ou "voltaremos", é resto a corrigir, e não regra.
- **Não** corrigir conteúdo. Trechos sem fonte do cap. 3 (a regra de "uma ou duas sprints à frente", os riscos "Discovery como rótulo" e "Delivery esquecido", recomendações da seção "Na prática") ficam marcados com `<!-- TODO: revisão -->`.
- O cap. 3 usa quatro papéis em "Na prática, para você": manter como está e registrar em issue para a revisão.
- Nas notas de pesquisa, "síntese nossa" vira "síntese do **livro**". Já feito no Claude Docs; conferir após a migração.
- Na Introdução, preencher "Como citar" com o endereço do site e deixar a data de acesso como campo para quem cita; incluir a licença MIT do código na seção "Licença".

## Fluxo de colaboração

1. Proposta de capítulo ou mudança grande: começa em Discussions.
2. Trabalho combinado vira Issue. **Issue antes de pull request.**
3. Contribuição chega por pull request, com prévia automática da Cloudflare.
4. O mantenedor revisa e faz o merge. Nada vai direto para `main`.
5. Quem contribui licencia o texto em CC BY-SA 4.0 (declarado no CONTRIBUTING).

## Como trabalhar com o Claude Code aqui

- Registrar decisões antes de implementar; em dúvida sobre escopo, perguntar.
- Texto do livro só muda quando pedido; não reescrever capítulos por iniciativa própria.
- Rodar `npm run build` antes de dar uma tarefa por concluída.
- Comandos: `npm run dev`, `npm run build`, `npm run preview`.

## Colaboradores (depois do alpha)

- Página "Colaboradores" com All Contributors (`.all-contributorsrc`), e componente "Colaboraram nesta página" no rodapé dos capítulos, gerado no build a partir do histórico do Git do arquivo. Rótulo: "contribuições", nunca "autoria".
- Exige squash merge, histórico completo no build (`fetch-depth: 0`) ou token da API do GitHub, filtro de bots e do mantenedor, e só nome de usuário e foto públicos. Quem pedir para não aparecer é removido.
- Não implementar antes do lançamento do alpha, salvo pedido.
