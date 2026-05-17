# Stage 1: Builder
FROM node:25.9-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package management files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Increase memory limit for the build process to prevent OOM errors
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build the application
RUN npm run build

# Stage 2: Runner
FROM node:25.9-alpine AS runner

# Harden the image: set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Create a non-root user and group
RUN addgroup -g 1001 -S nodejs && \
    adduser -S tanstack -u 1001

# Copy only the built output and necessary files from the builder stage
# TanStack Start with Nitro builds to .output by default
COPY --from=builder --chown=tanstack:nodejs /app/.output ./.output
COPY --from=builder --chown=tanstack:nodejs /app/package.json ./package.json

# Switch to the non-root user
USER tanstack

# Expose the application port
EXPOSE 3000

# Set the port environment variable for Nitro
ENV PORT=3000

# Start the application using Nitro's entrypoint
CMD ["node", ".output/server/index.mjs"]
