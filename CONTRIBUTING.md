# Como contribuir

Obrigado pelo interesse. O livro é um projeto pessoal de estudo, aberto a colaboração. Este guia diz o que ajuda, o que não entra e como propor uma mudança.

## O que ajuda

- **Apontar erro factual:** data, autoria, citação ou atribuição que as fontes não sustentam.
- **Sugerir fonte:** artigo, estudo ou livro que confirma, corrige ou complementa o texto, principalmente para os capítulos marcados como "planejado".
- **Mostrar o que falta:** trecho confuso, lacuna ou ponto sem fonte.
- **Corrigir texto:** erros de português, de formatação ou de links quebrados.

## Regras

1. **Toda afirmação precisa de fonte.** Indique a fonte e o que ela diz. Prefira a fonte original (artigo, livro, documentação oficial) a resumos e a material de fornecedor. Se a fonte for secundária ou de fornecedor, diga isso.
2. **Cite só o que foi lido.** Não vale citar uma obra que se conhece apenas por resumo ou por menção em outra.
3. **Nada de informação interna.** Não entram dados, documentos, processos, nomes de projetos ou exemplos que venham de um empregador ou de um cliente, e o livro não nomeia a organização de quem escreve. Casos precisam ter fonte pública.
4. **Tom neutro e voz impessoal.** O texto fala em terceira pessoa ("o livro", "as fontes"), sem primeira pessoa e sem experiência pessoal simulada. O "você" fica só nos blocos de fala direta ("Na prática, para você" e "Para praticar"). Temas contestados, como os frameworks de escala, apresentam defensores e críticos com fontes, sem tomar partido.
5. **Interpretação aparece como interpretação.** Quando uma tabela ou uma leitura é síntese do livro, e não das fontes, o texto avisa.
6. **Exemplos fictícios avisam que são fictícios.**
7. **Direitos autorais.** Citações curtas, sempre com autoria e link. Nada de trechos longos copiados, e nunca PDFs, epubs ou capturas de obras protegidas no repositório.
8. **Termos.** "discovery" e "delivery" ficam em inglês no texto. "Dual-track" é tratado como nome histórico.

## Como propor uma mudança

0. **Propostas grandes** (um capítulo novo, uma mudança de estrutura) começam em Discussions, para o debate acontecer antes do trabalho.
1. **Abra uma issue antes.** Use o modelo de erro factual ou de sugestão de fonte. Issues antes de pull requests evitam trabalho perdido: o autor pode dizer se a mudança cabe no livro e como.
2. **Espere a resposta.** Se a mudança for aceita, a issue diz como fazê-la.
3. **Envie o pull request**, ligado à issue, mudando apenas o necessário. Um assunto por pull request.
4. **Revisão.** O autor revisa e aprova tudo o que entra e pode pedir mudanças ou recusar uma contribuição. Recusar não é juízo sobre a pessoa: o livro tem escopo e voz próprios.

Cada pull request ganha uma prévia automática do site para revisão, e nada vai direto para a branch principal, nem do mantenedor. Pull requests sem issue prévia podem ser fechados com um pedido para abrir a issue, exceto correções de digitação.

## Passo a passo

É preciso uma conta gratuita no GitHub. Quem nunca usou Git pode fazer tudo pelo navegador (caminho A). Quem prefere trabalhar no computador segue o caminho B.

### 1. Abrir uma issue

1. Abra a aba **Issues** do repositório e clique em **New issue**.
2. Escolha o modelo: **Erro factual** (algo que as fontes não sustentam) ou **Sugestão de fonte** (um texto que confirma, corrige ou complementa).
3. Preencha todos os campos: em que página está o trecho, o que há de errado ou de novo, e a fonte com link e o que ela diz.
4. Marque as caixas de conferência (fonte aberta e lida; fonte pública; sem informação interna) e clique em **Submit new issue**.
5. Aguarde a resposta do autor. Se a mudança for aceita, a issue diz como fazê-la, e a mesma pessoa pode propor o pull request.

Para perguntas, ideias ou propostas grandes, use a aba **Discussions**, não uma issue.

### 2A. Caminho A: pelo navegador (sem instalar nada)

1. Na página do livro, clique em **Editar página** (no fim do texto). O GitHub abre o arquivo e, se for a primeira vez, cria uma cópia (fork) do repositório na conta da pessoa.
2. Altere o texto. Só o necessário para a issue.
3. Role até o fim, descreva a mudança em uma frase em **Commit message** e escolha **Create a new branch for this commit and start a pull request**.
4. Na tela seguinte, preencha o modelo do pull request (inclua `Fecha #número-da-issue`) e clique em **Create pull request**.

### 2B. Caminho B: no computador

Requisitos: Git e a versão do Node indicada no arquivo `.nvmrc`. No Windows, o WSL funciona bem.

1. Clique em **Fork**, no topo do repositório, para criar uma cópia na conta da pessoa.
2. Clone o fork e entre na pasta:

   ```bash
   git clone https://github.com/SEU-USUARIO/descobrir-e-entregar.git
   cd descobrir-e-entregar
   ```

3. Crie uma branch com nome curto, ligado à issue:

   ```bash
   git switch -c fix-12-data-do-manifesto
   ```

4. Instale as dependências e abra o site local:

   ```bash
   npm ci
   npm run dev
   ```

   O site abre em `http://localhost:4321`. Os textos ficam em `src/content/docs/`.
5. Edite os arquivos. Para conferir o resultado antes de enviar, rode `npm run build`, que também valida os links, e `npx markdownlint-cli2 "src/**/*.md"`.
6. Registre a mudança e envie:

   ```bash
   git add .
   git commit -m "Corrige data do Manifesto Ágil (fecha #12)"
   git push -u origin fix-12-data-do-manifesto
   ```

7. No GitHub, aparece o botão **Compare & pull request**. Clique, preencha o modelo e envie.

(Os comandos acima valem para o projeto montado conforme o `package.json`. Se algum não existir, o `package.json` é a referência.)

### 3. O pull request

- **Título:** uma frase que diz o que muda, em português.
- **Descrição:** `Fecha #número` da issue, a fonte usada e, se houve ajuda de IA, uma linha dizendo isso (ver a seção abaixo).
- **Um assunto por pull request.** Mudanças em capítulos diferentes vão em pull requests separados.
- Cada pull request ganha uma **prévia** do site. Confira se o trecho aparece como esperado, no computador e no celular.
- O autor pode pedir ajustes na própria conversa do pull request. Responda lá e envie novos commits na mesma branch: o pull request se atualiza sozinho.
- Quando o autor aprova, ele faz a fusão (merge). Depois disso, o nome da pessoa pode entrar na lista de colaboradores do projeto.

## Preparar uma IA para ajudar

Quem usa um assistente de IA para pesquisar, redigir ou revisar pode começar a conversa com o prompt abaixo. Ele resume as regras do livro (voz, fontes, termos, estrutura), para a IA já trabalhar no padrão do projeto. Cole o prompt no início da conversa e, em seguida, diga o que quer fazer (por exemplo: "revise este parágrafo" ou "procure fontes para esta afirmação").

```text
Você vai me ajudar a contribuir com um livro aberto, em português do Brasil, chamado "Descoberta e Entrega Contínuas: um guia para equipes de produtos". O livro é um estudo bibliográfico sobre como equipes de produto descobrem e entregam ao mesmo tempo (discovery e delivery contínuos, incluindo o dual-track agile), com foco em grandes organizações: vários times e papéis, ambiente ágil, regulado e de alta complexidade. Times pequenos e médios também são tratados. O público é formado por design (UX e UI), gestão e dono de produto, lideranças de UX e de tecnologia e agilistas.

REGRA 1: FONTES. Toda afirmação factual precisa de fonte. Prefira a fonte original (artigo, livro, documentação oficial) a resumos e a material de fornecedor. Se a fonte for secundária ou de fornecedor, diga isso. NUNCA invente referência, autoria, data, citação ou link. Se não tiver certeza de que uma fonte existe e diz o que você afirma, escreva "não confirmado" e me peça para abrir a fonte. Eu vou abrir e ler cada fonte antes de enviar a contribuição, e só se cita o que foi lido. Ao propor uma fonte, informe: autoria, título, ano, link e, em uma ou duas frases, o que ela diz sobre o ponto em questão.

REGRA 2: VOZ. Terceira pessoa impessoal: "o livro", "as fontes", "na leitura deste livro". Sem primeira pessoa, no singular ou no plural (nada de "eu", "nós", "vamos ver", "voltaremos"). Sem experiência pessoal simulada: o livro é pesquisa bibliográfica. O "você" só aparece nos blocos "Na prática, para você" e "Para praticar". Tom neutro, claro e direto, sem marketing, sem frases de efeito e sem entusiasmo exagerado. Frases curtas, parágrafos curtos, vocabulário simples.

REGRA 3: TEMAS CONTESTADOS. Quando houver divergência (por exemplo, frameworks de escala, ou o próprio sentido de "dual-track"), apresente defensores e críticos, cada um com fonte, sem tomar partido. Quando uma tabela ou leitura for síntese do livro, e não das fontes, avise ("síntese do livro", "na leitura deste livro"). Quando as evidências forem relatos de profissionais e não estudos comparativos, diga isso.

REGRA 4: NADA DE INFORMAÇÃO INTERNA. Não use dados, documentos, processos, nomes de projetos ou exemplos de um empregador ou cliente, meus ou de qualquer pessoa, nem cite a organização de quem escreve. Casos reais só com fonte pública. Exemplos fictícios devem avisar que são fictícios.

REGRA 5: DIREITOS AUTORAIS. Citações curtas, sempre com autoria e link. Nada de trechos longos copiados. Nunca inclua PDFs, EPUBs ou capturas de obras protegidas.

REGRA 6: TERMOS. "Discovery" e "delivery" ficam em inglês, como par principal. "Dual-track" é nome histórico, em itálico. Os verbos "descobrir" e "entregar" ficam em português. Também em inglês: backlog, sprint (no feminino: "uma sprint"), squad e handoff. Use "gestão de produto" e "dono de produto" (PO). Cite "Inspirado" para a edição brasileira de Marty Cagan e "Inspired" para a original.

REGRA 7: ESTRUTURA. Capítulos têm: situação de abertura (sem título); seções em "##" e subseções em "###" (nada abaixo disso, sem numerar títulos); "Na prática, para você", com cinco itens nesta ordem (UX designer; UI designer; gestão e dono de produto; liderança de UX ou de tecnologia; agilista ou scrum master); "Para praticar"; "Em resumo"; "Para ler mais". Notas de pesquisa ficam fora do corpo do capítulo. Cada capítulo tem um status: planejado (sem texto), rascunho (há texto, fontes a conferir), pesquisado (fontes abertas e conferidas) ou revisado.

COMO TRABALHAR COMIGO:
- Mude só o necessário. Um assunto por contribuição.
- Quando eu pedir revisão, mostre o que mudou e por quê, e não reescreva o trecho inteiro sem necessidade.
- Aponte o que você não consegue verificar. Prefira "não sei" a uma resposta inventada.
- Se eu pedir algo que quebre estas regras, avise e explique antes de fazer.
- Responda em português do Brasil.
- Ao final, liste as fontes usadas, com link e com o que cada uma diz.

Antes de começar, confirme em uma frase que entendeu as regras e pergunte o que eu quero fazer.
```

Depois de usar uma IA, **a responsabilidade pelo conteúdo é de quem contribui**: abra cada fonte e confira se ela diz o que o texto afirma antes de enviar.

## Uso de IA nas contribuições

O livro declara que foi escrito com auxílio de IA, e a mesma transparência vale para quem contribui. Contribuições feitas com ajuda de IA são aceitas, com estas regras:

1. **Declaração obrigatória.** O pull request diz se houve uso de IA e para quê (pesquisa, redação, revisão). O modelo de pull request traz essa pergunta.
2. **A responsabilidade é de quem envia.** A pessoa abriu e leu cada fonte e conferiu que ela diz o que o texto afirma. Modelos de IA podem inventar referências, autorias, datas e citações.
3. **Fonte inexistente ou que não sustenta o texto.** Na primeira vez, o autor pede a correção. Se se repetir, o pull request é fechado.
4. **Sem alterações em massa.** Reescritas amplas ou mudanças em muitos arquivos, geradas por IA ou não, sem issue aprovada antes, são fechadas. Vale a regra de um assunto por pull request.

Não se usam detectores de texto de IA: o que importa é a qualidade da fonte, não quem digitou.

## Autoria dos capítulos

O autor é o responsável pelo texto dos capítulos, o que preserva a voz única do livro e deixa claro quem responde pelo conteúdo. Quem contribui com fontes, revisão, correções ou texto aprovado entra na lista de colaboradores do projeto (All Contributors), na categoria correspondente. Coautoria nominal de capítulos inteiros não está prevista por ora e seria decidida em Discussions.

## Reconhecimento

Quem tem uma contribuição aprovada pode aparecer na página de colaboradores do livro, com o nome de usuário e a foto públicos do GitHub, na categoria correspondente (fontes, revisão, correção, texto). Páginas alteradas por pull requests aprovados também podem listar quem contribuiu com elas. Quem preferir não aparecer pode pedir, em um comentário no pull request ou em uma issue, e o pedido é atendido.

## Estado dos capítulos

Cada capítulo tem um selo de status (planejado, rascunho, pesquisado ou revisado). Mudanças em capítulos em rascunho ou planejados são bem-vindas, principalmente fontes. Capítulos revisados mudam com mais cuidado.

## Licença das contribuições

O texto do livro é distribuído sob a licença [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br), e o código do site, sob a licença MIT. Ao contribuir, a pessoa concorda que sua contribuição entra sob a licença do que ela mudou (texto em CC BY-SA, código em MIT), e declara que tem o direito de oferecê-la.

## Conduta

Seja respeitosa e objetiva. Discordâncias se resolvem com fontes. Comentários ofensivos ou de assédio são removidos, e quem os faz pode ser bloqueado.
