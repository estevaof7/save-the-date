FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat

RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

COPY package.json ./

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --no-frozen-lockfile

FROM base AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desativar telemetria no build
ENV NEXT_TELEMETRY_DISABLED=1

RUN --mount=type=cache,id=next-cache,target=/app/.next/cache \
    pnpm run build

FROM base AS runner
WORKDIR /app
ENV APP_ENV=production

RUN addgroup --system --gid 1001 nodejs \
    && adduser  --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

USER nextjs

EXPOSE ${PORT}
ENV PORT=${PORT}
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
