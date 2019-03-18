FROM node:6-alpine

# Create a server directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install server dependencies
COPY /express-image/package.json /home/node/app
RUN npm install

# Copy node Application
COPY App.js /home/node/app

# Open port
EXPOSE 9000

CMD ["npm", "start"]