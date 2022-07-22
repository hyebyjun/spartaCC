import React from 'react';
import BucketList from './BucketList';
import './App.css';
import './style.css';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };
  }

  render() {
    console.log(this.state.list);
    return (
      <div className='App'>
        <MyStyled bg_color={'red'} />
        <MyStyled>
          <p>im here!</p>
        </MyStyled>
        <div className='container'>
          <h1>내 버킷리스트</h1>
          <div className='line'>
            <BucketList list={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

const MyStyled = styled.div`
  width: 50vw;
  height: 150px;
  /* background: purple; */
  background-color: ${(props) => (props.bg_color ? 'red' : 'purple')};
  p {
    color: white;
  }
  &:hover {
    // MyStyled 나 자신 == & 로 표기 가능
    background-color: gray;
  }
`;

export default App;
