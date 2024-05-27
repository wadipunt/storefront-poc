FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

# Install curl and other prerequisites
RUN apt-get update && apt-get install -y \
    curl \
    build-essential

# Install just command runner
RUN curl -fsSL https://just.systems/install.sh | bash -s -- --to /usr/local/bin/

# Install Starship prompt
RUN curl -fsSL https://starship.rs/install.sh | sh -s -- --yes

# Switch to node user to configure their environment
USER node

# Set up the Starship prompt in Zsh
RUN echo 'eval "$(starship init zsh)"' >> ~/.zshrc