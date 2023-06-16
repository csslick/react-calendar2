import React from 'react'

function Calendar(props) {
  // props에서 년-월-일 가져오기
  let { year, month, date } = props;
  // 날짜 조회하기
  let d = new Date();

  // 말일 구하기(다음 달 기준으로 조회해서 일값=0 하면 이번달 말일)
  let lastDate = new Date(year, month + 1, 0).getDate();
  // 시작일: 달력에서 1일이 시작할 위치(요일값 = 0...6)
  let start_date = new Date(year, month, 1).getDay();
  console.log(lastDate, start_date);

  return (
    <div className='calendar'>
      <header>
        <h2>{year}</h2>
        <span>{month + 1}월</span>
      </header>
      <main>
        <ul className='date'>
          {
            Array(start_date).fill().map((_, i) => {
              return (
                <li key={i}></li>
              )
            }) 
          }
          {
            Array(lastDate).fill().map((_, i) => {
              return (
                <li 
                  key={i}
                  style={{
                    backgroundColor: date === i + 1 ? 'red' : '',
                    borderRadius: date === i + 1 ? '10px' : '0'
                  }}
                >{i + 1}</li>
              )  
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Calendar