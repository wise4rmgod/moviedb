# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]