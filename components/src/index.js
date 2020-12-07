import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:55PM" 
                content="nice"
                avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                author="alex" 
                timeAgo="Today at 2:00PM" 
                content="good"
                avatar={faker.image.image()}
                />
           </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail 
                author="zxzx" 
                timeAgo="Monday at 2:22PM" 
                content="zxcs"
                avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div> 
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));