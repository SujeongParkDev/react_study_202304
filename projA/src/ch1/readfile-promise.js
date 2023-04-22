const fs = require('fs')

// (1) Promise ��ȯ�ϴ� �Լ� ����
// Promise ����ϴ� ���, Promise ��ü ��ȯ�ϴ� �Լ� �����ؾ� ��.
function readFile_pr (fname) {
    return new Promise((resolve) => {
        fs.readFile(fname, 'utf-8', (err, s) => {
            resolve(s)
        })
    })
}

// (2) ���ʴ�� �ؽ�Ʈ ���� �б�
// �񵿱� ó�� �Ϸ� �� .then() �޼��� ������ �Լ��� �����.
readFile_pr('a.txt')
.then((text) => {
    console.log('a.txt�� �о�鿴���ϴ�.', text)
    return readFile_pr('b.txt')
})
.then((text) => {
    console.log('b.txt�� �о�鿴���ϴ�.', text)
    return readFile_pr('c.txt')
})
.then ((text) => {
    console.log('c.txt�� �о�鿴���ϴ�.', text)
})