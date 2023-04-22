const fs = require('fs')

// (1) ���ι̽��� �񵿱������� ���� �д� �Լ� ����
function readFileEx (fname) {
    return new Promise((resolve, reject) => {
        fs.readFile(fname, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

// (2) ��� ���� �о���̴� async �Լ� ����
async function readAll () {
    const a = await readFileEx('a.txt')
    console.log(a)
    const b = await readFileEx('b.txt')
    console.log(b)
    const c = await readFileEx('c.txt')
    console.log(c)
}

readAll()

// async, await �� Node v7 ���ĺ��� ����
// �񵿱� ó�� ������ ����ϰ� ���� �Լ� ȣ�� �� awaut "�Լ� �̸�" (�Ű�����) �� ���� �ۼ��ؾ� ��.
// await ����Ϸ��� �Լ��� async function �̶�� �������� �����ؾ� ��.