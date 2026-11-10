# Impacto Verde — Energia Limpa e Sustentabilidade

Projeto de site da disciplina Desenvolvimento Front-End (UNICID, 2026.2). Portal sobre energia limpa e preservação ambiental, com foco em impacto social e acessibilidade para pessoas com deficiência (PcD).

| Item | Informação |
|---|---|
| **Site publicado (HTTPS)** | https://atividade-01-av-a2-projeto-de-site-2-2026-production.up.railway.app/ |
| **Repositório no GitHub** | (https://github.com/Joao-Vitor2187/Atividade_01_Projeto_de_Site_2026) |
| **Disciplina / Professor** | Desenvolvimento Front-End — Prof. Paulo Fratta |

## Equipe e divisão de funções

| Integrante | RA | Função |
|---|---|---|
| Vitor Bezerra Marques | 47538775 | JavaScript e formulário |
| Kaique Vieira Santos | 47022493 | Acessibilidade, responsividade e identidade visual |
| Raimundo Walter | 46852042 | Conteúdo das páginas, ODS e dados com fonte |
| João Vitor Silva Alves Araujo | 46905570 |  Documentação, deploy e GitHub |

## Tema e objetivos
Energia limpa (eólica e solar), reciclagem e inclusão. O escopo completo está em [`escopo-do-projeto.md`](escopo-do-projeto.md).

## Tecnologias
HTML5, CSS3 (Flexbox e Grid, variáveis CSS), JavaScript puro (sem bibliotecas), Git/GitHub e GitHub Pages.

## O que o site tem
- 10 páginas interligadas pelo menu: `index`, `sobre`, `projetos`, `impacto`, `acessibilidade`, `galeria`, `midia`, `noticias`, `contato`, `orcamento_hospedagem`.
- **JavaScript:** validação do formulário (mensagens de erro e borda em destaque), rascunho do formulário e preferências no `localStorage`, filtro de notícias, menu no celular, alto contraste e tamanho da fonte, botão de copiar chave Pix.
- **ONG:** formulário de contato/voluntariado, área de apoio (voluntariado e Pix fictício), notícias e multimídia (`video`, `audio`, `iframe`).
- **ODS:** relação explícita com os ODS 7, 10, 11 e 13 (página `sobre.html` e rodapé de todas as páginas).
- **Acessibilidade:** `lang="pt-BR"`, `alt`, contraste AA, navegação por teclado, foco visível, ARIA e legendas no vídeo.

## Como rodar
1. Baixe ou clone o repositório.
2. Abra `index.html` no navegador, ou use a extensão **Live Server** do VS Code.
3. Alternativa pelo terminal: `python -m http.server 8000` e acesse `http://localhost:8000`.

## Estrutura de pastas
```
impacto_verde/
├── index.html · sobre.html · projetos.html · impacto.html
├── acessibilidade.html · galeria.html · midia.html · noticias.html
├── contato.html · orcamento_hospedagem.html
├── css/style.css
├── js/main.js
├── img/        (ilustrações autorais e poster do vídeo)
├── assets/     (vídeo, legendas e áudio)
└── docs/
```

## Documentação (`/docs`)
[Escopo](escopo-do-projeto.md) · [Diário de bordo](diario-de-bordo.md) · [Orçamento de hospedagem](orcamento-hospedagem.md) · [Evidências de testes](evidencias-de-testes.md) · [Melhorias do MVP](melhorias-do-mvp.md) · [Uso de IA](uso-de-ia.md) · [Guia de Git e deploy](guia-git-e-deploy.md)

## Créditos
Textos, ilustrações, vídeo e áudio criados pela equipe para este trabalho. Dados oficiais com fonte indicada em `impacto.html` (EPE e IBGE). Os demais números do site são ilustrativos e estão sinalizados.
