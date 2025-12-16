# Dietitian Web

Aplicação web para gestão de atendimentos de Nutrição, focada em produtividade e experiência do profissional. Permite organizar pacientes, exames, prescrições, refeições e planos alimentares, além de funcionalidades de finanças e gestão de tarefas.

## 1. Visão Geral do Projeto

- Propósito: centralizar o fluxo de trabalho do nutricionista, desde cadastro de pacientes até geração de prescrições e planos, com interface moderna e responsiva.
- Público-alvo: profissionais de Nutrição, clínicas e consultórios.

## 2. Tecnologias Utilizadas

- Framework e linguagem
  - Next.js 15 (App Router) — `next@15.0.4`
  - React 18 — `react@18.3.1` / `react-dom@18.3.1`
  - TypeScript — `typescript@5.7.3`
- UI/UX
  - Tailwind CSS — `tailwindcss@3.4.17` + `tailwindcss-animate`
  - Shadcn UI — `shadcn@2.10.0`
  - Ícones: `lucide-react`
- Estado, dados e formulários
  - TanStack Query — `@tanstack/react-query@5.75.x`
  - Zustand — `zustand@5.0.3`
  - React Hook Form — `react-hook-form@7.56.3`
  - Zod — `zod@3.24.2`
  - Axios — `axios@1.7.9`
- Utilitários
  - Date-fns — `date-fns@4.1.0`
  - React PDF — `@react-pdf/renderer@4.3.0`
  - Recharts — `recharts@2.15.3`
  - Framer Motion — `framer-motion@12.23.12`
- Qualidade, build e testes
  - ESLint — `eslint@8.57.1` + `eslint-config-next`
  - Prettier — `prettier@3.5.1` + plugin Tailwind
  - PostCSS — `postcss@8.5.3`

## 3. Configuração do Ambiente

- Requisitos
  - Node.js 22+ (recomendado)
  - PNPM 10.4.1 (recomendado)
  - Docker (opcional) e Docker Compose (opcional)

- Variáveis de ambiente
  Copie o arquivo `.env.example` para `.env.local` e preencha os valores.

- Instalação

```bash
pnpm install
```

- Desenvolvimento

```bash
pnpm dev
# Acesse: http://localhost:10030
```

- Build e execução

```bash
pnpm build
pnpm start
# Acesse: http://localhost:10030
```

- Qualidade e verificação rápida

```bash
# Verificações agregadas
pnpm check   # ESLint + TypeScript + Prettier (check)

# Correções automáticas
pnpm fix     # ESLint --fix + Prettier --write

# Comandos granulares (opcional)
pnpm lint         # lint (src)
pnpm typecheck    # verificação de tipos TS
pnpm format       # checagem Prettier
pnpm format:write # formata o código
```

- Docker (opcional)

```bash
docker compose up --build
# Acesse: http://localhost:10030
```

## 4. Arquitetura do Projeto

Estrutura principal (resumo):

```
src/
  app/                     # App Router (Next.js 15)
    (auth)/               # Rotas e layouts de autenticação
    (authenticated)/      # Rotas protegidas
    layout.tsx            # Layout raiz
    globals.css           # Estilos globais
    middleware.ts         # Middleware (auth/guards)
  modules/                # Features por domínio de negócio
    auth/
    patients/
    meal-plans/
    meals/
    prescriptions/
    exams/
    finances/
    task-manager/
  shared/                 # Recursos compartilhados
    components/
    constants/
    dtos/
    enum/
    hooks/
    lib/
    mocks/
    services/
    types/
    utils/
    vendors/
```

Padrões de design e organização

- Módulos de domínio independentes, baixo acoplamento e alta coesão
- Camada de serviços (Axios) isolando acesso HTTP
- TanStack Query para cache de dados e sincronização com servidor
- Zustand para estados locais/globais não derivados de servidor
- Formulários com React Hook Form + validação com Zod
- UI componetizada com shadcn + Radix UI; estilização com Tailwind

Fluxo principal de dados

- Serviços HTTP (Axios) consomem as APIs externas definidas em variáveis de ambiente
- Hooks do React Query orquestram fetch/caching/invalidations
- Componentes consomem hooks e estados do Zustand quando necessário
- Formulários validam entrada com schemas Zod e integram com RHF

## 5. Guia de Desenvolvimento

Convenções de código

- Utilize Types ao invés de Interfaces
- Exporte sempre com `export const` (sem exports default)
- Nomenclatura
  - Pastas/arquivos: kebab-case
  - Types: PascalCase
  - Handlers de eventos: `handleX`
- Código limpo, funções pequenas e responsabilidades únicas
- Early return, sem números mágicos (use constantes)

Boas práticas adicionais

- Evite lógica de negócio complexa em componentes de página; extraia para hooks/serviços
- Prefira componentes puros e previsíveis; componha pequenos blocos
- Mantenha estados derivados do servidor no React Query; use Zustand para UI state

Testes e validações

- Rodar o seguinte comando no terminal para validar a formatação, linting e tipos do projeto: `pnpm check`
- Trate erros com mensagens claras e estados consistentes

## 6. Documentação de Componentes

O projeto possui documentação detalhada para componentes reutilizáveis:

### Componentes de Input

- **EditableTitle**: Título editável inline com múltiplos tamanhos e variantes
  - 📖 Documentação completa: `docs/components/editable-title.md`
  - ⚡ Referência rápida: `docs/components/editable-title-quick-reference.md`
  - 💡 Exemplos práticos: `src/shared/components/ui/inputs/editable-title.examples.tsx`
  - 📝 README: `src/shared/components/ui/inputs/README.md`

### Como usar

```tsx
import { EditableTitle } from "@/shared/components/ui/inputs";

function MyComponent() {
  const [title, setTitle] = useState("");

  return (
    <EditableTitle
      size="lg"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Digite o título..."
    />
  );
}
```

## 7. Commits e PRs

- Commits: Conventional Commits (commitlint). Exemplos: `feat(meals): adicionar diálogo de refeição`, `fix(meal-plans): corrigir cálculo de macros`.
- Husky: pre-commit roda `lint-staged`; pre-push roda `typecheck`.
- PRs: descreva claramente o escopo, vincule issues e inclua prints/GIFs para mudanças visuais. Documente variáveis de ambiente e passos manuais quando houver.

---

Para dúvidas ou melhorias, abra uma issue ou contribua diretamente seguindo as convenções acima.
