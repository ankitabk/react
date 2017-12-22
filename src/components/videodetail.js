import React ,{Component} from 'react';
const VideoDetails =(props) => {
    if(!props.video){
        return <p>
            loading...
        </p>
    }
    const url=`http://youtube.com/embed/${props.video.id.videoId}`;
    return (

           <div>
               <div>
                <iframe src={url} style={{width:"80%",height:"400"}}allowFullScreen="allowFullScreen" className="embed-responsive-item">
                </iframe>
               </div>
               <div>
                   <h3 style={{color:'white'}}>
                       { props.video.snippet.title}
                   </h3>
                   <p style={{color:'white'}}>
                       {props.video.snippet.description}
                   </p>

               </div>
           </div>
    );
}
export default VideoDetails;