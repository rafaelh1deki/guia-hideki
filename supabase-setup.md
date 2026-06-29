# Configurar o Supabase (banco das indicações) — passo a passo

O Supabase é o "backzinho" gratuito que guarda as indicações dos seguidores. Leva ~10 minutos e não precisa de cartão.

## 1. Criar o projeto

1. Acesse **supabase.com** e clique em **Start your project** (login com GitHub é o mais rápido).
2. **New project** → dê um nome (ex.: `mapa-hideki`), crie uma senha de banco (guarde) e escolha a região **South America (São Paulo)**.
3. Aguarde ~2 min enquanto o projeto é criado.

## 2. Criar a tabela das indicações

1. No menu lateral, abra **SQL Editor** → **New query**.
2. Cole o bloco abaixo inteiro e clique **Run**:

```sql
create table public.suggestions (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  place_name text not null,
  address text not null,
  instagram text,
  note text,
  lat double precision,
  lng double precision,
  status text not null default 'pending'
);

alter table public.suggestions enable row level security;

-- qualquer visitante pode ENVIAR, mas só como "pendente"
create policy "publico pode enviar pendente"
  on public.suggestions for insert
  to anon
  with check (status = 'pending');

-- o público só CONSEGUE VER as indicações que você aprovou
create policy "publico ve so aprovadas"
  on public.suggestions for select
  to anon
  using (status = 'approved');
```

Isso já cria a tabela e a segurança: ninguém consegue publicar direto nem ver o que não foi aprovado.

## 3. Pegar as 2 chaves

1. Menu lateral → **Project Settings** (engrenagem) → **Data API** (em algumas versões aparece como **API**).
2. Copie **Project URL** (algo como `https://abcdefgh.supabase.co`).
3. Copie a chave **anon public** (uma chave longa).
4. Abra o arquivo **`config.js`** do site e cole as duas no lugar dos placeholders:

```js
const SUPABASE_URL = "https://abcdefgh.supabase.co";
const SUPABASE_ANON_KEY = "cole-a-chave-anon-aqui";
```

> A chave **anon** é pública de propósito — pode ficar no site sem problema. Quem protege os dados é a regra de segurança (RLS) que você criou no passo 2.

## 4. Como aprovar uma indicação

Quando um seguidor envia, ela entra como **pending** (não aparece no mapa). Para publicar:

1. Supabase → **Table Editor** → tabela **suggestions**.
2. Ache a linha nova, clique no campo **status** e troque `pending` por `approved`.
3. Pronto — o pin (na cor das indicações) aparece no mapa no próximo carregamento.

Para recusar, é só apagar a linha (ou deixar como `pending`).

## 5. Dica de moderação

Confira o endereço e o @ antes de aprovar. Como o público nunca enxerga indicações pendentes, você fica 100% no controle do que vai pro mapa.
