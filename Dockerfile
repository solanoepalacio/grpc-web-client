FROM grpc-common

WORKDIR /code

COPY web-app/package.json /code/package.json

RUN npm install

COPY web-app/ /code/
COPY messages /messages

RUN protoc -I=../ messages/webapp.proto \
    --js_out=import_style=commonjs:src \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src

RUN chmod u+x ./disable-proto-lint.sh
RUN ./disable-proto-lint.sh

CMD ["npm", "start"]
