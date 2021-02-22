FROM node

WORKDIR /src
ADD . /src

RUN cd /src && npm install

EXPOSE 3000

# CMD ["node", "/src/app.js"]

RUN apt-get update && apt-get install -y netcat

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh


# CMD와 entrypoint의 차이점.
# 엔트리 포인트는 인자를 받을 수 있으나 
# CMD는 인자를 받지 못한다.