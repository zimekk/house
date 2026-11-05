FROM node:26-alpine

ENV WORKDIR=/app

WORKDIR $WORKDIR

COPY . ./

RUN yarn --frozen-lockfile
RUN yarn build

CMD ["yarn", "serve"]
