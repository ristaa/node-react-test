import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
ReactDOM.render(
  <CommentBox
 url='https://immense-sierra-55238.herokuapp.com/api/comments'
 pollInterval={2000} />,
 document.getElementById('root')
);
