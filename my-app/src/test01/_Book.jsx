import React from "react";

function Book(props){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 책의 이름은 ${props.name}입니다.`
            ),

            React.createElement(
                'h2',
                null,
                `이 책의 총 ${props.numOfPage}페이지로 되어 있음.`
            )
        ]
    )
}

export default Book;