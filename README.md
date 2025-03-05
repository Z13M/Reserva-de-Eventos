# Projeto: Sistema de Eventos de Carros

Integrantes: João Vitor Ziem, Caue Fernandes

## Visão Geral
O sistema será baseado em uma arquitetura cliente-servidor, onde o front-end em Next.js consumirá uma API REST desenvolvida em Node.js com Express. O PostgreSQL será o banco de dados principal, garantindo persistência dos eventos, participantes e inscrições. A autenticação será baseada em JWT, oferecendo segurança para as operações de login e controle de acesso.

## Escopo

Desenvolver uma aplicação web para gerenciamento de eventos automotivos, permitindo:

- Cadastro, edição e exclusão de eventos
- Cadastro de participantes
- Inscrição e confirmação de participação em eventos
- Autenticação de usuários

## Visão Tecnológica
### Estilo de Arquitetura
- **API RESTful** para comunicação entre o front-end e back-end.
- **Arquitetura em Camadas**, com separação clara entre:
  - **Front-end (Next.js):** Interface para usuários interagirem com o sistema.
  - **Back-end (Express.js):** Processamento da lógica de negócios e integração com o banco de dados.
  - **Banco de Dados (PostgreSQL):** Armazenamento persistente de dados.

### Tecnologias
#### Front-end:
- Next.js 14 com App Router
- React Query / SWR para gerenciamento de dados
- Tailwind CSS para estilização
- Axios para chamadas à API
- NextAuth.js (caso optem por autenticação integrada com Next.js)

#### Back-end:
- Node.js com Express
- TypeScript
- JWT para autenticação
- Zod para validação de dados
- Bcrypt para hash de senhas
- Prisma ORM ou TypeORM para comunicação com PostgreSQL

#### Banco de Dados:
- PostgreSQL (hospedado no Railway, Supabase ou Render)

#### Infraestrutura:
- **Front-end:** Vercel (melhor para Next.js)
- **Back-end:** Railway/Render
- **Banco de Dados:** Supabase/Railway

## Módulos/Componentes
### Autenticação
- Registro e login com JWT (ou NextAuth se for mais prático)
- Middleware de proteção de rotas

### Gestão de Eventos
- CRUD de eventos (criação, edição, listagem, exclusão)
- Upload de imagens para eventos (via Cloudinary ou S3)

### Gestão de Participantes
- Cadastro e gerenciamento de usuários

### Inscrição e Confirmação de Presença
- Inscrição de usuários em eventos
- Confirmação via e-mail (se necessário)

### Painel Administrativo
- Gestão de eventos e participantes

## SEO e Performance
- Utilização de **Server-side Rendering (SSR)** para páginas dinâmicas
- **Incremental Static Regeneration (ISR)** para otimizar páginas estáticas

## Como Rodar o Projeto
### Requisitos
- Node.js instalado
- PostgreSQL configurado

### Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/sistema-eventos.git
   ```
2. Instale as dependências do front-end e do back-end:
   ```sh
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Configure as variáveis de ambiente:
   - **Front-end** (`.env.local`)
   ```sh
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
   - **Back-end** (`.env`)
   ```sh
   DATABASE_URL=postgresql://user:password@localhost:5432/sistema_eventos
   JWT_SECRET=seu-segredo
   ```
4. Execute o back-end:
   ```sh
   cd backend && npm run dev
   ```
5. Execute o front-end:
   ```sh
   cd frontend && npm run dev
   ```
6. Acesse o sistema em `http://localhost:3000`

## Contribuição
1. Fork este repositório
2. Crie um branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Adicionando minha feature'`)
4. Envie para o branch principal (`git push origin minha-feature`)
5. Abra um Pull Request