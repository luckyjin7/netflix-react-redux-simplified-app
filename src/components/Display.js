import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchMovies } from '../store/actions/index';
import { removeMovieAction } from '../store/actions/index';
import { addMovieAction } from '../store/actions/index';
import { withRouter } from 'react-router';

function Display({ data, fetchMovies, removeMovieAction, addMovieAction }){
    useEffect(()=>{
        fetchMovies();
    }, []);

    const Mylist = props => (
        <div className="movieDisplay__container__dropdown">
            <div className="movieDisplay__container__dropdown__img">
                    <img alt="movies" width="250" height="400" src={`${props.mylist.img}`}/>
            </div>
            <div className="movieDisplay__container__dropdown__img-imgoverlay" />
            <div className="movieDisplay__container__dropdown-content">
                <div className="movieDisplay__container__dropdown-content-a">
                    <button onClick={ () => {props.removeMovieAction(props.mylist)}} className="movieDisplay__container__dropdown-content__button">REMOVE</button>&nbsp;&nbsp;&nbsp;
                    {props.mylist.title}
                </div>                              
            </div>
        </div>
    )

    const Recommendation = props => (
        <div className="movieDisplay__container__dropdown">
            <div className="movieDisplay__container__dropdown__img">
                <img alt="movies" width="250" height="400" src={`${props.recommendations.img}`}/>
            </div>
            <div className="movieDisplay__container__dropdown__img-imgoverlay" />
            <div className="movieDisplay__container__dropdown-content">
                <div className="movieDisplay__container__dropdown-content-a">
                    <button onClick={ () => {props.addMovieAction(props.recommendations)}} className="movieDisplay__container__dropdown-content__button">ADD</button>&nbsp;&nbsp;&nbsp;
                    {props.recommendations.title}
                </div>                              
            </div>
        </div>
    ) 

    return data.loading ? (<h1>Loading</h1>) : (
        <div>
            <>
            <div className="movieDisplay__heading">My List</div>
                <div className="movieDisplay__container">
                    {data.mylist.payload || data.mylist.map(function(currentmylist){
                        return (
                            <Mylist mylist={currentmylist} removeMovieAction={removeMovieAction} key={Math.random()*10}/>
                        )
                    })}
                </div>
            </>

            <>       
            <div className="movieDisplay__heading">Recommendations</div>
            <div className="movieDisplay__container">
                {data.recommendations.payload || data.recommendations.map(function(currentRecommendations){
                    return (
                        <Recommendation recommendations={currentRecommendations} addMovieAction={addMovieAction} key={Math.random()*15}/>
                    )
                })}
            </div>
            </> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      data: state.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchMovies: () => dispatch(fetchMovies()),
      removeMovieAction: (movie) => {
          dispatch(removeMovieAction(movie))
      },
      addMovieAction: (movie) => {
          dispatch(addMovieAction(movie))
      }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Display));
