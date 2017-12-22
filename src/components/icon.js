import React,{Component} from 'react';
import FaCaretSquareORight from 'react-icons/lib/fa/caret-square-o-right';
class Question extends React.Component {
    render() {
        return <span>
            <h style={{fontWeight: 'bold',color:'white'}}>PLAY HERE  </h>
             <FaCaretSquareORight size={40}/>
        </span>
    }
}
export  default Question;