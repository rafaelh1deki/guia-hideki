# Plano do Site — Mapa de Viagens + Bio Link

**Objetivo:** transformar o link da bio em uma experiência que as pessoas querem explorar, salvar e compartilhar — aumentando os cliques e abrindo portas para parcerias.

**Estilo definido:** limpo e minimalista (mapa claro, pins discretos, foco nas fotos).

---

## 1. O conceito

Em vez de um Linktree comum (que ninguém salva), o site é construído **em volta de um mapa interativo** da sua jornada. O mapa é a isca: a pessoa entra pela curiosidade, explora os lugares, e de quebra encontra suas redes e o contato de parceria.

A lógica de retenção:

- **Entrar** → o mapa chama atenção logo de cara.
- **Explorar** → clicar nos pins, ver fotos e histórias de cada lugar.
- **Salvar** → adicionar à tela inicial (PWA) ou favoritar para voltar.
- **Compartilhar** → mandar pros amigos ("olha o mapa de viagem desse cara").
- **Converter** → seguir nas redes / chamar pra parceria.

---

## 2. Estrutura do site (one-page)

Uma página única com rolagem, dividida em blocos:

**Bloco 1 — Header / Bio**
Foto, nome, uma frase de posicionamento curta, e os botões das redes sociais. Logo abaixo, um botão de destaque: **"Quer fazer parceria?"** (abre e-mail ou WhatsApp).

**Bloco 2 — O Mapa (o coração)**
Mapa interativo ocupando boa parte da tela, com pins de cada lugar visitado. Ao clicar em um pin, abre um cartão com: foto do lugar, cidade/país, um textinho seu, e um link opcional para o post/reel daquele destino.

Complementos opcionais do mapa:
- Contador no topo: "X cidades · Y países · Z continentes".
- Filtro simples (ex.: por país ou por tipo: praia, cidade, trilha).

**Bloco 3 — Galeria / Destaques** (opcional)
Uma faixa com suas melhores fotos ou os destinos favoritos, para quem prefere rolar a olhar o mapa.

**Bloco 4 — Rodapé / CTA**
Reforço do "me segue" + contato de parceria + (opcional) campo de e-mail para newsletter no futuro.

---

## 3. Stack técnica recomendada

Para ter controle total do mapa mantendo tudo gratuito:

| Camada | Escolha | Por quê |
|---|---|---|
| Site | **HTML/CSS/JS** ou **Next.js** | Leve, rápido, fácil de hospedar |
| Mapa | **Leaflet + OpenStreetMap** | 100% grátis, sem cadastro, ótimo controle de pins |
| Alternativa de mapa | **Mapbox** (free até ~50k carregamentos/mês) | Visual mais sofisticado, se quiser estilos premium |
| Dados dos lugares | Um arquivo **`places.json`** | Você adiciona novos destinos editando uma lista simples |
| Hospedagem | **Vercel (plano Hobby, grátis)** | Perfeito para esse tipo de site, deploy em segundos |
| Domínio | Opcional (`seunome.com`) | Pluga direto na Vercel; ~R$40/ano |
| "App" | **PWA** | Deixa o site instalável na tela inicial, sem loja de apps |

Para o estilo minimalista, sugiro o mapa claro do OpenStreetMap (ou um estilo "light" do Mapbox), pins simples de uma cor só, e tipografia limpa.

---

## 4. Site vs. App — decisão

**Site, com camada de PWA.** Motivos:

- Zero barreira: abre no clique do link da bio, sem instalar nada.
- PWA dá o melhor dos dois mundos — quem quiser "salva" o site na tela inicial e ele abre como um app.
- App nativo (loja) seria caro, lento de aprovar e cria atrito que mata o clique.

---

## 5. Vercel grátis — sim, dá certo

O plano **Hobby da Vercel é gratuito** e cobre tranquilamente um site assim, com tráfego saudável. Você consegue:

- Subir o site a partir de um repositório no GitHub (deploy automático a cada alteração).
- Conectar um domínio próprio gratuitamente (você só paga o registro do domínio em si, se quiser um).
- HTTPS e CDN global inclusos.

Fluxo de publicação: código no GitHub → conecta na Vercel → site no ar. Para atualizar (novo destino), você edita o `places.json` e o site se republica sozinho.

> Observação: dados de planos podem mudar. Vale confirmar os limites atuais do plano Hobby em vercel.com antes de fechar.

---

## 6. Lovable / No-code — vale a pena?

Dá para montar a parte de bio e galeria no **Lovable, Framer ou Webflow** sem código. O ponto fraco é justamente o **mapa interativo com pins customizados**, que costuma ficar limitado nessas ferramentas.

Recomendação: como o mapa é o diferencial do projeto, **código simples + Vercel** entrega mais e continua de graça. Se a prioridade fosse só agilidade visual sem mapa rico, o no-code seria suficiente.

---

## 7. Estratégia para aumentar os cliques

- **Gancho na bio:** em vez de "meus links", use algo como "🗺️ Mapa das minhas viagens" — desperta curiosidade.
- **Mapa como conteúdo:** poste prints/vídeos do mapa nas redes chamando pra explorar a versão interativa.
- **Atualização constante:** cada viagem nova vira motivo pra avisar "atualizei o mapa", trazendo gente de volta.
- **Compartilhável:** botão de compartilhar e preview bonito quando o link é colado (Open Graph com imagem do mapa).
- **CTA de parceria visível:** quem te procura pra parceria precisa achar o contato em 2 segundos.

---

## 8. Roadmap sugerido

**Fase 1 — MVP (1 página)**
Header com bio + redes + contato, e o mapa com seus primeiros destinos. Deploy na Vercel.

**Fase 2 — Riqueza no mapa**
Fotos nos pins, contador de países, filtros, e a galeria de destaques.

**Fase 3 — Polimento e crescimento**
PWA (instalável), domínio próprio, Open Graph para compartilhamento bonito, e analytics para medir cliques.

**Fase 4 — Evolução (opcional)**
Newsletter, blog de viagens, ou uma área "indicações" (hotéis, restaurantes) que pode virar fonte de parceria/afiliados.

---

## 9. O que eu preciso de você para construir o MVP

- Lista inicial de lugares (cidade/país) que você já visitou.
- 1 foto por lugar (ou as principais).
- Seus @ das redes sociais e o contato de parceria (e-mail ou WhatsApp).
- Sua frase de bio / posicionamento.

Com isso eu já consigo montar o protótipo funcional do site pronto pra subir na Vercel.
