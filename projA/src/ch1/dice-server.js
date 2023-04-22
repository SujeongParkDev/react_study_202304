const http = require('http')
const ctype = {'Content-Type': 'text/html;charset=utf-8'}

// (1) ������ ����
const svr = http.createServer(handler)
svr.listen(8081) 

// (2) ���� ���� �� ó��
function handler (req, res) {
    // URL ����
    const url = req.url
    
    // ������ ����
    // �ֻ��� �������� ��
    if (url === '/' || url === '/index.html') {
        showIndexPage(req, res)
        return
    }

    // �ֻ��� �������� ��
    if (url.substr(0, 6) === '/dice/') {
        showDicePage(req, res)
        return
    }

    // �� �� �������� ��
    res.writeHead(404, ctype)
    res.end('404 not found')
}

// (3) �ε��� ������ ���� �� ó��
function showIndexPage (req, res) {
    // HTTP ��� ���
    res.writeHead(200, ctype)

    // ���� ���� ���
    const html = '<h1>�ֻ��� ������ �ȳ�</h1>\n' +
                 '<p><a href="/dice/6">6��ü �ֻ���</a></p>' +
                 '<p><a href="/dice/12">12��ü �ֻ���</a></p>'
    res.end(html)
}

// (4) �ֻ��� ������ ���� �� ó��
function showDicePage (req, res) {
    // HTTP ��� ���
    res.writeHead(200, ctype)

    // �� ��ü �ֻ������� Ȯ��
    const a = req.url.split('/')
    console.log(a)
    const num = parseInt(a[2]) // 6 �Ǵ� 12

    // ���� ���� ����
    const rnd = Math.floor(Math.random() * num) + 1

    // ���� ���� ���
    res.end('<p style="font-size:72px;">' + rnd + '</p>')

}