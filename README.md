# SmartStore

![SmartStore Banner](/public/project-image.png) <!-- Adicione uma imagem relevante -->

SmartStore é uma plataforma moderna de e-commerce construída com tecnologias de ponta para oferecer desempenho, escalabilidade e uma experiência de usuário excepcional.

## ✨ Funcionalidades

- **Gestão de Produtos**  
  (AINDA NÃO IMPLEMENTADO).
- **Atualizações em Tempo Real**  
  Dados sincronizados via Supabase Realtime.
- **Autenticação Segura**  
  Autenticação segura realizada com Clerk.
- **UI Responsiva & Moderna**  
  Componentes acessíveis e customizáveis do shadcn/ui.
- **Dashboard Administrativo**  
  (AINDA NÃO IMPLEMENTADO).

## 🛠️ Tecnologias

- **Next.js 14** (App Router, Server Actions, RSC)
- **Prisma ORM** + PostgreSQL (Supabase)
- **Supabase** (Banco de dados, Auth, Storage)
- **shadcn/ui** (Componentes UI com Radix + Tailwind CSS)
- **React Hook Form** + **Zod** (Validação de formulários)
- **TypeScript** (Tipagem estática)

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- [pnpm](https://pnpm.io/installation) (opcional, mas recomendado)
- Conta no [Supabase](https://supabase.com)
- PostgreSQL

### 📦 Instalação de Dependências
<details> <summary><b>Com pnpm (recomendado)
</b>
</summary>

```bash
pnpm install
```
</details>

<details> <summary><b>Com npm
</b>
</summary>

```bash
npm install
```
</details>

<details> <summary><b>Com yarn
</b>
</summary>

```bash
yarn install
```
</details>

### Clonando Repositório

1. Clone o repositório:
```bash
git clone https://github.com/gumeeee/smart-store.git
cd smart-store
code .
```

### 🔐 Configuração do Banco de Dados

<details> <summary><b>Preencha o .env.local com suas credenciais do Supabase:
</b>
</summary>

```bash
NEXT_PUBLIC_SUPABASE_URL=seu-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
SUPABASE_SERVICE_ROLE_KEY=sua-chave-de-servico
```
</details>

<br>

2. Clone o repositório:

<details> <summary><b>Usando pnpm
</b>
</summary>

```bash
pnpm exec prisma generate  # Gera o cliente do Prisma
pnpm exec prisma migrate dev  # Executa as migrações
```
</details>

<details> <summary><b>Usando npm/Yarn
</b>
</summary>

```bash
npx prisma generate
npx prisma migrate dev
# ou
yarn prisma generate
yarn prisma migrate dev
```
</details>

<details> <summary><b>3. Verifique a conexão
</b>
</summary>

```bash
npx prisma studio  # Abre interface visual do banco
pnpm dlx prisma studio 
```
</details>

### 🖥️ Iniciando o Servidor

<details> <summary><b>
</b>
</summary>

```bash
# Com pnpm
pnpm dev

# Com npm
npm run dev

# Com Yarn
yarn dev
```
</details>
