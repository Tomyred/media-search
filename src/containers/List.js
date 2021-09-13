import React, { Component, Fragment } from 'react'
import Card from './../components/Card/Card'

const movieApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=a86f58b5';

export default class List extends Component {
    
    
    constructor(){
        super();
        this.state = {
            data: [],
            searchTerm:'',
            error:''
        }
    }

    async componentDidMount(){
      const res = await fetch(`${movieApi}&s=alien`);
      const jsonRes = await res.json();
      this.setState({data: jsonRes.Search})
    }

    async handleSubmit (e){
        e.preventDefault();
        if(!this.state.searchTerm) {
            return this.setState({error: 'No, don´t do this to me. Please enter a valid text :('})
        }
        const res = await fetch(`${movieApi}&s=${this.state.searchTerm}`);
        const resjson = await res.json();
        if(!resjson.Search){
            return this.setState({error: 'There are no results, i´m such an useless app, sorry'})
        }

        this.setState({data: resjson.Search, error: '', searchTerm:''})
    }

    render(){
       return <Fragment>
           <div className="row">
               <div className="col-md-4 offset-md-4 p-4">
                   <form onSubmit={e =>this.handleSubmit(e)}>
                        <input 
                            className="form-control" 
                            placeholder="Search"
                            onChange={e => this.setState({searchTerm: e.target.value})}
                            value={this.state.searchTerm}
                            autoFocus>
                        </input>
                   </form>
                   <p className="text-white">{this.state.error ? this.state.error : ''}</p>
               </div>
           </div>
        <div className="row">
            { this.state.data.map((movie, i) =>
            <Card movie={movie} key={i} />)}
           
        </div>
        </Fragment>
    }

    
}
