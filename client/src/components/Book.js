import React, {Component} from 'react';

function Book(props){
  
    return(
      <div>
        <h1>Title View Button Edit Button</h1>
        <h4>Title / Link</h4>
        <h4>Author</h4>
        <div className="row">
          <div>Image</div>
          <div>Description</div>
        </div>
      </div>
    )
  
}

export default Book;