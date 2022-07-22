import React from 'react';
import BucketList from './BucketList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
  }

  render() {
    return (
      <div className='App'>
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList list={this.state.list} />
        </Container>
        <div>
          <input
            type='text'
            ref={this.text}
            onChange={() => console.log(this.text.current.value)}
            // 변화가 있을때 감지하는 센서처럼 활용
          />
        </div>
      </div>
    );
  }
}

export default App;
