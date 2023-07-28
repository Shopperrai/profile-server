
FROM gitpod/workspace-full

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Expose the default port used by your backend server (replace 3000 with your actual port if different)
EXPOSE 3000
