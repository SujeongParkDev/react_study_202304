// ���� �Լ�
function add (a, b) {
    return a + b
}

// ���� �Լ�
function multifly (a, b) {
    return a * b
}

// �ܺ� ����
// ���̺귯���� ������ ��⿡�� moudle.exports ��� ���� ���ο� ������ ��ü ������.
// ���̺귯�� ����ϴ� ���� ���α׷������� require() ����Ͽ� ���� ������ ��ü �о����.
module.exports = {
    'add': add,
    'multifly': multifly
}