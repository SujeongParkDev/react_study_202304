const fs = require('fs')

// ���������� ���� �б�
const data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)

// �񵿱������� ���� �б�
// �񵿱� ó�� �� ���� �бⰡ �Ϸ�� �� ȣ���� �Լ��� �����ؾ� �ϹǷ� ���� ó������ �ڵ尡 �� �� ����.
fs.readFile('test.txt', 'utf-8', readHandler)

// �о���̱� �Ϸ� ���� ���� ó��
function readHandler (err, data) {
    console.log(data)
}