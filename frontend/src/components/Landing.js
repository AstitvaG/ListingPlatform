import React, {Component} from 'react';
import axios from 'axios';
import './css/Landing.css'
export default class LandingPage extends Component {
    
    constructor(props) {
        super(props);

    }
    
    state = {

    }

    render() {
        return (

        <div align = 'center'>
        <div class="card-group" style={{'width': '30rem'}}>
  <div class="card mr-5">
    <img class="card-img-top" src={require('./img/dataset.png')} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Datasets</h5>
      <p class="card-text">A curated list of some interesting datasets.
  </p>
    <a href="#" class="btn btn-secondary" style={{'border-radius':'20px'}}>Explore datasets</a>
    </div>
  </div>
  <div class="card ml-5">
    <img class="card-img-top" src={require('./img/dataset.png')} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">ML challenges</h5>
      <p class="card-text">A curated list of some interesting ML challenges. </p>
    <a href="#" class="btn btn-secondary" style={{'border-radius':'20px'}}>Explore ML challenges</a>
    </div>
  </div>
</div>
</div>

      )
    }
}