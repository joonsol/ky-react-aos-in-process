import React from 'react'
import './style/Board.css'
const Board = () => {
    const boardData = [
        {
            id: 1,
            title: "첫 번째 게시글입니다.",
            content: "React 게시판 연습을 위한 더미 데이터입니다.",
            author: "관리자",
            date: "2025-08-07",
            views: 123
        },
        {
            id: 2,
            title: "오늘의 공지사항",
            content: "내일 수업은 오전 10시부터 시작합니다.",
            author: "교무팀",
            date: "2025-08-06",
            views: 98
        },
        {
            id: 3,
            title: "질문 있습니다!",
            content: "useEffect를 언제 써야 하는지 잘 모르겠습니다.",
            author: "학생A",
            date: "2025-08-05",
            views: 45
        },
        {
            id: 4,
            title: "프로젝트 주제 제안",
            content: "게시판 만들기 외에 투표 시스템은 어떨까요?",
            author: "학생B",
            date: "2025-08-05",
            views: 32
        },
        {
            id: 5,
            title: "오타 제보",
            content: "3번 게시글 내용 중 오타가 있습니다.",
            author: "학생C",
            date: "2025-08-04",
            views: 21
        }
    ];
    return (
        <section className='Board'>
            <div className="t-wrap">
                <h2>Board title</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas!
                </p>
            </div>
            <ul className="board-list">
                <li>
                    <span className="title"></span>       
                    <span className="content"></span>       
                    <span className="auther"></span>       
                    <span className="date"></span>       
                </li>
            </ul>
        </section>
    )
}

export default Board