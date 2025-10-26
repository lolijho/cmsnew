# Use Node 18 LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
