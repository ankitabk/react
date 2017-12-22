import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './components/icon';
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyDTaQA4fQa2lhSn_LzCHyR0SzX_ccXhjD4';
import Search_bar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/videodetail';
import MyNavbar from './components/navbar';
import { Grid, Row, Col } from 'react-bootstrap';
class App extends Component{
   constructor(props){
       super(props);
       this.state={
           videos:[],
           selectedVideo:null
       }

  }
  videoSearch(term){
      YTSearch({key: API_KEY,term:term},(videos)=>{
          console.log(videos);
          this.setState({videos:videos,selectedVideo:videos[0]});
      });
  }
  VideoSelect(term){

  }

    render(){
        return(
        <div>
                <Grid>
                    <Row style={{marginTop:20}}>
                        <Col xs={6} md={4} lg={4}>
                           <Question/>
                        </Col>
                        <Col xs={6} md={8} lg={8}>
                            <Search_bar onSearchTermChange={this.videoSearch.bind(this)}/>
                        </Col>
                    </Row>
                    <Row style={{marginTop:30}}>
                        <Col xs={12} md={12} lg={8} style={{backgroundColor:'000000'}}>
                            <VideoDetails video={this.state.selectedVideo}/>
                        </Col>
                        <Col xs={12} md={12} lg={4} >
                            <VideoList videos={this.state.videos}
                                       onVideoSelect={(video)=>{
                                           this.setState({selectedVideo:video})
                                       }}/>
                        </Col>

                    </Row>
                </Grid>
        </div>

        );
    }

}
ReactDOM.render(<App/>,document.querySelector('.container'));
