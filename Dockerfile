FROM node:20-alpine

# Workdir for node package
WORKDIR /data/app

COPY . /data/app

# Install Tini
RUN \
  apk --no-cache --no-progress add tini && \
  yarn global add pnpm

# Create custom entrypoint supports environment variables
RUN printf "#!/bin/ash\npnpm run start" > /entrypoint.sh && \
  chmod +x /entrypoint.sh

# RUN pnpm install --fix-lockfile --frozen-lockfile && \
#   pnpm store prune

ENTRYPOINT ["/sbin/tini",  "--", "/entrypoint.sh"]
