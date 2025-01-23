# Use a Node.js base image for building
FROM node:18-alpine AS builder

# Set working directory for the build stage
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Use a minimal base image for the final stage
FROM nginx:alpine

# Set working directory in the final image
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the port React app will run on
EXPOSE 80

# Start the app
CMD ["nginx", "-g", "daemon off;"]
