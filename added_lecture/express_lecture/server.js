"use strict";

const express = require("express");
const cookirParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const static = require("serve-static");
const http = require("http");

// 데이터의 무결성
// 단 한번의 생성을 위해 생성자에서 express()를 선언한다.
// 유일성 보장
class ApiServer extends http.Server {
    // 외부의 환경설정을 생성자에 넣는다.
    constructor(config) {
        // 유일성 보장
        const app = express();
        super(app);
        this.app.static = static;
        this.config = config;
        this.app = app;
        this.currentConns = new Set();
        // 무중단 배포환경일 때 사용중인 연결을 컨트롤하기 위해 선언
        this.busy = new WeakSet();
        this.stopping = false;
    }

    async start() {
        this.app.use(helmet());
        this.app.use(cookirParser());
        this.app.use(bodyParser());

        // 커스텀 미들웨어 기본적 구성
        // this.app.use((err, req, res, next) => {
        //     console.error(`internal error ${err}`);
        //     if (req) {
        //         console.log(req);
        //     }
        //     if (res) {
        //         console.log(res);
        //     }
        //     next();
        // });

        this.app.use(
            this.app.static(path.join(__dirname, "dist"), {
                // 서빙코드
                // 헤더 정의
                setHeader: (res, path) => {
                    // 1. 요청하는 곳이 근원지
                    // 어떠한 곳에서 요청을 하던 간에 접근을 허용해달라 => '*'
                    // 어떠한 서버가 스코프
                    res.setHeader("Access-Control-Allow-Origin", "*");

                    // 2. 헤더에 대한 조건없이 헤더를 허용해달라
                    res.setHeader("Access-Control-Allow-Headers", "*");

                    // 3. 메소드 지정
                    // 정적파일이기 때문에 GET으로 설정을 해준다.
                    res.setHeader("Access-Control-Allow-Methods", "GET");
                },
            })
        );
    }
}

// 초기화
const init = async (config = {}) => {
    const server = new ApiServer(config);
    return server.start();
};

// static파일에 대한 처리는 express에서 사용하지 않는다.
// 리버스 프록시로 사용한다.
