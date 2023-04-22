const fs = require('fs')

// �񵿱� ó�� �Ϸ� ��ٸ���, ���� �Լ��� �����ؼ� ȣ���ϴ� �Լ�
function read_gfn (g, fname) {
    fs.readFile(fname, 'utf-8', (err, data) => {
        g.next(data)
    })
}

// ���ʷ����� �Լ� ����
const g = (function * () {
    const a = yield read_gfn(g, 'a.txt')
    console.log(a)
    const b = yield read_gfn(g, 'b.txt')
    console.log(b)
    const c = yield read_gfn(g, 'c.txt')
    console.log(c)
})()
