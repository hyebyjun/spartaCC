import React from 'react';
import './App.css';
import BucketList from './BucketList';
// import { BucketList } from './BucketList';

// function App() {
//   return (
//     <div className='App'>
//       <BucketList />
//     </div>
//   );
// }

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    console.log(this.state.list);
    return (
      <div className='App'>
        <h1>내 버킷리스트</h1>
        {/* 컴포넌트를 넣어줍니다. */}
        <BucketList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
