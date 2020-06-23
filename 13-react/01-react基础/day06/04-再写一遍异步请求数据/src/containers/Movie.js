import React, { Component } from 'react';
import { connect } from "react-redux"
import { toggleLoading } from "../actions/loading"
import { getFilms,setFilms } from "../actions/films"
class Movie extends Component {
    componentDidMount(){
        this.props.getFilms();
    }
    render() {
        return (
            <div>
                <h3>电影列表</h3>
                <p>{this.props.loading ? "正在加载中..." : null}</p>
                <ul>
                    {this.props.films && this.props.films.map((film,index)=>
                        <li key={index}>
                            <h3>{film.name}</h3>
                            <img width='150' src={film.img} alt=""/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
export default connect(state=>({loading:state.loading,films:state.films}),{toggleLoading,getFilms,setFilms})(Movie)