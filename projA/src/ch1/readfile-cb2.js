const fs = require('fs')

// ���� �б�
// ECMAScript 2015 : ȭ��ǥ �Լ� ���
// ȭ��ǥ �Լ��� function() {...} �� ����� �͸� �Լ� ��� ��밡����.
// ����! function �Լ��� this�� �Լ� �ڽ� <=> ȭ��ǥ �Լ��� this�� ������ this�� �״�� ��Ÿ��.
fs.readFile('test.txt', 'utf-8', (err, data) => {
    // �о� ���̱� �Ϸ� �� ó��
    console.log(data)
})