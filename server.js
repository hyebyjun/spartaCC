// 서버를 띄우기 위한 기본 셋팅
const express = require('express');
const app = express();
// 요거 두개는 아까 설치한 모듈 라이브러리 첨부해주세요 객체 만들어주세요 뭐 그런 뜻..

// listen(서버 띄울 포트번호, 띄운 후 실행할 코드)
app.listen(8080, function () {
  console.log('이거 잘 나오냐?');
}); // 이후 node server.js 명령어 실행

app.get('/hello', function (req, res) {
  res.send('반갑습니다');
  console.log('되니?'); // 왜 이건 아래 터미널엔 나오고 웹 콘솔엔 안나오지
});

app.get('/notice', function (req, res) {
  res.send('안내문을 줄줄이 적습니다.');
});