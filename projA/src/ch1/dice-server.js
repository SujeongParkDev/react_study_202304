const http = require('http')
const ctype = {'Content-Type': 'text/html;charset=utf-8'}

// (1) 웹서버 실행
const svr = http.createServer(handler)
svr.listen(8081) 

// (2) 서버 접근 시 처리
function handler (req, res) {
    // URL 구분
    const url = req.url
    
    // 페이지 구분
    // 최상위 페이지일 때
    if (url === '/' || url === '/index.html') {
        showIndexPage(req, res)
        return
    }

    // 주사위 페이지일 때
    if (url.substr(0, 6) === '/dice/') {
        showDicePage(req, res)
        return
    }

    // 그 외 페이지일 때
    res.writeHead(404, ctype)
    res.end('404 not found')
}

// (3) 인덱스 페이지 접근 시 처리
function showIndexPage (req, res) {
    // HTTP 헤더 출력
    res.writeHead(200, ctype)

    // 응답 본문 출력
    const html = '<h1>주사위 페이지 안내</h1>\n' +
                 '<p><a href="/dice/6">6면체 주사위</a></p>' +
                 '<p><a href="/dice/12">12면체 주사위</a></p>'
    res.end(html)
}

// (4) 주사위 페이지 접근 시 처리
function showDicePage (req, res) {
    // HTTP 헤더 출력
    res.writeHead(200, ctype)

    // 몇 면체 주사위인지 확인
    const a = req.url.split('/')
    console.log(a)
    const num = parseInt(a[2]) // 6 또는 12

    // 임의 숫자 생성
    const rnd = Math.floor(Math.random() * num) + 1

    // 응답 본문 출력
    res.end('<p style="font-size:72px;">' + rnd + '</p>')

}