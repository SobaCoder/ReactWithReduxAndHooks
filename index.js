import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container elements">
    <ApprovalCard>
      <CommentDetail author="Sam" timeAgo="Today at 4PM" commentText="Bravo"/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Joe" timeAgo="Today at 6PM" commentText="Ewwww"/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Axl" timeAgo="Today at 9PM" commentText="Hmmmm"/>
      </ApprovalCard>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
