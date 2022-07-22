const BucketList = ({ list }) => {
  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
  return (
    <div>
      {list.map((list, idx) => (
        <div key={idx}>{list}</div>
      ))}
    </div>
  );
};

export default BucketList;