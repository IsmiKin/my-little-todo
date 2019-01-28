FROM mhart/alpine-node:11

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

# TODO: uncomment and remove dev one
# RUN yarn install
RUN yarn install --dev
RUN yarn add react-scripts
# RUN yarn run build


# Bundle app source
COPY . .

# Run tests
RUN yarn run ci-test

EXPOSE 3000
CMD [ "yarn", "run", "start" ]
