const http = require('http')

const svr = http.createServer(handler) // (1) 서버 생성
svr.listen(8081) // 8081 포트 사용
// (2) listen() : 클라이언트(웹브라우저)에서 접속 받을 수 있도록 서버 공개.

// 서버에 접근 있을 때 처리
// (3) 서버에 접근하면 handler() 함수 실행. 
function handler (req, res) {
    console.log('url:', req.url)
    console.log('method:', req.method)

    // HTTP 헤더 출력
    res.writeHead(200, {'Content-Type': 'text/html'})
    // 응답 본문 출력
    res.end('<h1>Hello, World!</h1>\n')
}

/**
 * HTTP : 웹 브라우저가 웹 서버에 요청하면, 웹 서버가 웹 브라우저에 응답해주는 통신.
 * 웹 브라우저는 요청을 보낼 때, 어떤 것을 원하는 지(=경로), 어떤 것을 할 것인지(=메서드) 같이 보냄.
 * 웹 서버는 경로와 메서드 기반으로 속성 정보(헤더)와 실질적인 데이터를 응답함. 속성 정보에는 응답코드, 데이터 종류 (Content-Type) 등이 포함됨.
 * 응답코드 예제: 404(경로 존재 X), 403(접근권한 X), 500(서버내부 문제)
 * 
 * HTTP통신은 기본적으로 stateless 통신이므로, 요청에 응답하는 순간 접속 종료 => 누가 접속하고, 이전에 어떤 페이지 봤는지 식별 불가능.
 * 쿠키(Cookie) : 쿠키 사용 시 웹 서버는 웹 브라우저 내부에 쿠키 저장 가능함. 이를 사용해 로그인 기능 구현하기도 함.
 */