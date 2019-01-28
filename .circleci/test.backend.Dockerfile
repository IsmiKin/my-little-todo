ARG baseImage
FROM ${baseImage}

RUN yarn install --dev

ENTRYPOINT [ "yarn", "run", "coverage" ]
