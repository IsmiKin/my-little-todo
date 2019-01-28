# NOTE: This image is identical to backend,
# splitted just in case later it's required different
# behaviour
ARG baseImage
FROM ${baseImage}

RUN yarn install --dev

ENTRYPOINT [ "yarn", "run", "coverage" ]
