import { useRef } from 'react';
import styled from 'styled-components';

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

const BucketList = (props) => {
  const my_lists = props.list;
  const my_wrap = useRef(null);

  console.log(my_wrap);
  return (
    <ListStyle>
      <div ref={my_wrap}>
        {my_lists.map((list, index) => {
          return <ItemStyle key={index}>{list}</ItemStyle>;
        })}
      </div>
    </ListStyle>
  );
};

export default BucketList;
