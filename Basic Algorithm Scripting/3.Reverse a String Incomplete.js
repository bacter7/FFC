function reverseString(str) {
  // �����Ĵ���д������
  var array = [];
  var newArray = [];
  var newCh ;
  var newWord;
  //�п�����
  array = str.split(" ");
  
  //�������з�ת
  array = array.reverse();
  var i = 0;
  //���ʷ�ת
  while(i < array.length){
      //�ָ��
      newCh =array[i].split("");
      //��ת����
      newCh = newCh.reverse();
      //ƴ�ӵ���
      newWord =newCh.join("");
      newArray.push(newWord);

    i++;
  }

  str = newArray.join(" ");


  
  return str;
}

reverseString("hello");



