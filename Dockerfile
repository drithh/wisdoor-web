# Step 1: Use an official Node.js runtime as a parent image
FROM node:22-alpine AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a new image to serve the app
FROM node:22-alpine

# Step 8: Set the working directory
WORKDIR /app

# Step 9: Copy only the built application and production dependencies from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package*.json ./

# Step 10: Install only production dependencies
RUN npm install --only=production

# Step 11: Expose the port the app runs on
EXPOSE 3000

# Step 12: Start the Next.js app
CMD ["npm", "start"]