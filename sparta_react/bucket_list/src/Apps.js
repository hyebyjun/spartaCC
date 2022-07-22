import React from 'react';
import BucketList from './BucketList';
import './style.css';

// .container {
//   background-color: #fff;
//   width: 50vw;
//   max-width: 350px;
//   margin: auto;
//   height: 80vh;
//   padding: 16px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// }

// .container > h1 {
//   color: slateblue;
//   text-align: center;
// }

// .container > .line {
//   margin: 16px 0px;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <h1>내 버킷리스트</h1>
          <hr className='line' />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
