const http = require('http')

const svr = http.createServer(handler) // ���� ����
svr.listen(8081) // 8081 ��Ʈ ���

// ������ ���� ���� �� ó��
function handler (req, res) {
    console.log('url:', req_url)
    console.log('method:', req.method)

    // HTTP ��� ���
    res.writeHead(200, {'Content-Type': 'text/html'})
    // ���� ���� ���
    res.end('{<h1>Hello, World!</h1>\n}')
}