FROM mhart/alpine-node

# Create app directory
WORKDIR /usr/src/app

# Install yarn
RUN npm install -g yarn -y

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN yarn build

# Bundle app source

COPY . .


EXPOSE 5000
CMD [ "yarn", "start" ]
