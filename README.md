# Mapa de Lugares — Rafael Hideki

Site de uma página com: bio + redes sociais + contato de parceria, um **mapa interativo** dos lugares que você já foi (puxados dos seus reels), reels embedados nos pins, e um **botão de indicação** onde seguidores mandam lugares (endereço + @) que entram no mapa após sua aprovação.

## Arquivos

- `index.html` — o site inteiro (visual, mapa, modal do reel e formulário).
- `places.js` — seus lugares (extraídos dos reels). **É o arquivo que você edita pra adicionar lugares seus.**
- `config.js` — onde você cola as 2 chaves do Supabase.
- `supabase-setup.md` — passo a passo pra criar o banco das indicações (~10 min).
- `lugares-extraidos.md` — a lista de referência dos lugares achados nos seus reels.

## Como funciona

- **Seus lugares** aparecem em pins na cor coral. Clicar mostra nome, endereço e um botão **▶ Ver reel** que abre o reel embedado.
- **Indicações de seguidores** aparecem em pins na cor turquesa, com o @ de quem indicou.
- O mapa usa o endereço pra achar o ponto automaticamente (geocodificação) e guarda em cache no navegador — o primeiro carregamento leva alguns segundos pra posicionar todos; depois fica instantâneo.

## Para publicar (resumo)

1. Suba os 4 arquivos (`index.html`, `places.js`, `config.js` + suas chaves) num repositório do GitHub. O `index.html` na **raiz**.
2. vercel.com → login GitHub → **Add New → Project** → Import o repo → **Deploy**.
3. Configure o Supabase seguindo o `supabase-setup.md` e cole as chaves no `config.js`.

> O site funciona sem o Supabase (mostra seu mapa normalmente). Sem ele, só o botão de indicação fica desativado com um aviso.

## Adicionar um lugar seu

Abra `places.js`, copie um bloco `{ ... }`, cole no final e troque os dados (nome, endereço, cidade, código do reel, nota). Salve e dê commit — a Vercel republica sozinha.

## Trocar fotos e cores

- Foto de perfil: no `index.html`, procure por `seed/rafael` e troque pelo link da sua foto.
- Cores dos pins: no topo do `<style>`, `--accent` (seus lugares) e `--tip` (indicações).

## Observação sobre as coordenadas

Hoje o site descobre as coordenadas sozinho a partir do endereço. Se quiser deixar o primeiro carregamento instantâneo, dá pra "gravar" as coordenadas fixas no `places.js` (campos `lat` e `lng`). O site já imprime essas coordenadas no console do navegador (procure por `COORDS_BAKE`) — é só me mandar que eu deixo gravado.
