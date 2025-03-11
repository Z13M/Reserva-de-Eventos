# Sistema de Eventos de Carros

## Integrantes
- **João Vitor Ziem**
- **Caue Fernandes**

## Ajustes da Primeira Interação
Foram realizados ajustes na definição dos requisitos funcionais e não funcionais. Refinamos a seleção das tecnologias para garantir maior escalabilidade e segurança.

## Requisitos
### Funcionais
- Cadastro, edição e exclusão de eventos.
- Cadastro de participantes.
- Inscrição e confirmação de presença.
- Autenticação de usuários via JWT.

### Não Funcionais
- Segurança no acesso 
- Performance otimizada com SSR e ISR para carregamento eficiente.
- Infraestrutura escalável utilizando Vercel, Railway e Supabase.

## Estratégias de Desenvolvimento
O sistema será desenvolvido com uma arquitetura **Cliente-Servidor**, utilizando **API RESTful** para comunicação entre front-end e back-end.

### Arquitetura
- **Monolítica**, facilitando a gestão do projeto.
- Divisão em camadas:
  - **Front-end:** Interface interativa.
  - **Back-end:** Processamento de lógica de negócios.
  - **Banco de Dados:** Persistência das informações.

### Tecnologias
#### Front-end
- Next.js 14 (App Router)
- React Hook Form
- Tailwind CSS

#### Back-end
- Node.js com Express
- Javascript para tipagem
- JWT para autenticação

#### Banco de Dados
- PostgreSQL 

## Plano de Trabalho
| Atividade | Responsável |
|-----------|------------|
| Configurar repositório e estrutura do projeto | João e Caue |
| Desenvolver autenticação e proteção de rotas | João |
| Criar CRUD de eventos | João |
| Implementar sistema de inscrições | João |
| Desenvolver painel administrativo | Caue |
| Revisão e testes finais | João e Caue |

## Repositório
O projeto será versionado no GitHub e atualizado conforme o progresso da equipe. Todas as contribuições devem seguir o fluxo de desenvolvimento com branches e pull requests.
