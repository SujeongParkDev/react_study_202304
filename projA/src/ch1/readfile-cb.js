const fs = require('fs')

// ���� �б�
fs.readFile('test.txt', 'utf-8', function (err, data) {
    // �о� ���̱� �Ϸ� �� ó��
    console.log(data)
})