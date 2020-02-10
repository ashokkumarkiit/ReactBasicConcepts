import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Ashok Kumar"
            timestamp="Today at 6:30PM"
            message="Hello, How are you all?"  
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Shampa Paul"
            timestamp="Yesterday at 8:30PM"
            message="I am good What about you?"  
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Ashok Kumar"
            timestamp="Today at 9:30AM"
            message="All good on my side. Thanks for Asking."  
          />
        </ApprovalCard>
      </div>
    </div>
  );
}

export default App;
