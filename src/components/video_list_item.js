import React ,{Component} from 'react';
const VideoListItem =(props) => {
        return (
            <div className={'card'} style={{width:'60%'}}>
           <li onClick={() => {props.onVideoSelect(props.video)}} >
               <div>
               <img src={props.video.snippet.thumbnails.default.url} style={{width:"100%"}} align="centre"/>
               </div>
               <div style={{fontWeight: 'bold'}}>
                   {props.video.snippet.title}</div>
           </li>
            </div>
        );
}
export default VideoListItem;