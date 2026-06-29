# Mapa de Viagens — Rafael Hideki

Site de uma página com um mapa interativo dos lugares visitados + links das redes e contato para parcerias.

## Arquivos

- `index.html` — a página inteira (visual e mapa).
- `places.js` — a lista dos seus lugares. **É o único arquivo que você precisa editar no dia a dia.**
- `README.md` — este guia.

## Como adicionar um lugar novo

1. Abra `places.js`.
2. Copie um bloco `{ ... }` inteiro, cole no final da lista (antes do `]`).
3. Troque os dados: cidade, país, foto, texto.
4. Para pegar a latitude/longitude: pesquise o lugar no Google Maps, clique com o botão direito no ponto e copie os dois números (lat, lng).
5. Salve. Se o site já estiver na Vercel, é só dar commit que ele se atualiza sozinho.

## Como colocar suas fotos

As fotos de exemplo vêm de um serviço aleatório (`picsum.photos`). Para usar as suas:

- Opção simples: suba suas imagens em qualquer hospedagem de imagem e cole o link no campo `photo`.
- Ou crie uma pasta `fotos/` no repositório, suba as imagens lá e use `photo: "fotos/tokyo.jpg"`.

A foto de perfil está no `index.html` (procure por `seed/rafael`) — troque pelo link da sua foto.

## Publicar na Vercel

1. Suba estes arquivos num repositório do GitHub.
2. Em vercel.com, faça login com o GitHub.
3. **Add New → Project → Import** o repositório → **Deploy**.
4. Pronto: sai um link `seu-projeto.vercel.app`.

## Personalizar a cor

No `index.html`, no topo do `<style>`, troque o valor de `--accent` pela cor que quiser (ex.: `--accent: #2dd4bf;`).
