import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "이건희",
        comment: "제가 만든 첫번째 컴포넌트 입니다."
    },
    {
        name: "이미연",
        comment: "이건희 와이프 입니다."
    },
    {
        name: "이지아",
        comment: "딸래미 입니다."
    },
    {
        name: "이지우",
        comment: "아들래미 입니다."
    }
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;