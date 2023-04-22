// �͸��Լ��� �Լ� ����
const f1 = function (s) { console.log(s) }
const f2 = (s) => { console.log(s) }

// �͸��Լ��� �Ϲ����� �Լ�ó�� �����.
f1('foo')
f2('bar')

// �͸��Լ��� �̸� ���� �Լ��� �����ϰ�, ������ ����� �Լ� ��ü�� ������ �� ����.

// �ҹ��ڸ� �빮�ڷ� ��ȯ�ϴ� ��
const sentence = 'Keep On Asking, and It Will Be Given You.'
const replaceSentence = sentence.replace(/[a-z]+/g, function (m) {
    return m.toUpperCase()
})

console.log(replaceSentence)

// �迭�� ���ڸ� �����ϴ� ��
const arr = [100, 1, 20, 43, 30, 11, 4]
arr.sort((a, b) => { return b - a} )
console.log(arr)

