FROM mhart/alpine-node:11

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

# TODO: uncomment and remove dev one
# RUN yarn install

# TODO: Create test.Dockerfile and install --dev and run tests there
# + run coverage and upload reports
RUN yarn install
RUN yarn add react-scripts

# FIXME: fix build!
# RUN yarn run build


# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "yarn", "run", "start" ]
