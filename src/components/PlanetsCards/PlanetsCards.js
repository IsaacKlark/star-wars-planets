import './PlanetsCards.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from '../Popup/Popup';
import arrowRight from '../../images/arrow-right.png';
import arrowLeft from '../../images/arrow-left.png';
import { Link } from 'react-router-dom';

const PlanetsCards = () => {
    const [planets, setPlanets] = useState([]);
    const [planetsImages, setPlanetsImages] = useState([]);
    const [popup, setPopup] = useState('');
    const [displayLoader, setDisplayLoader] = useState(true);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);

    const loadDataFromServer = page => {
        axios.get(`https://swapi.dev/api/planets/?page=${page}`)
            .then(res => {
                setPlanets(res?.data?.results);
                setCount(res?.data?.count);

                if (!res || !res.data || !res.data.results) {
                    setPopup('Error. Something was wrong :(')
                }
                setDisplayLoader(false);
            })
            .catch(err => {
                setDisplayLoader(false);
                setPopup('Error. Something was wrong :(')
            })
    }

    const firstLoading = () => {
        loadDataFromServer(1);

        const importAll = r => r.keys().map(r);
        setPlanetsImages(importAll(require.context('../../images/planets', false, /\.(png|jpe?g|svg)$/)));
    }

    useEffect(firstLoading, []);

    const prevPage = () => {
        if (page > 1) {
            setDisplayLoader(true);
            setPage(page - 1);
            loadDataFromServer(page - 1)
        };
    }

    const nextPage = () => {
        if (page * 10 < count) {
            setDisplayLoader(true);
            setPage(page + 1);
            loadDataFromServer(page + 1);
        }
    }

    return (
        <article className="planets">
            <div className="planets__cardsWrapper">
                {planets.map((planetInfo, index) => (
                    <Link 
                        to={`/planet/${page === 1 ? index + 1 : (page - 1) * planets.length + (index + 1)}`} 
                        className="planets__card" 
                        key={planetInfo.name}
                    >
                        <img
                            src={page % 2 === 0 ? planetsImages[index].default : planetsImages[ 9 - index].default}
                            alt={planetInfo.name}
                            className="planets__img"
                        />
                        <div className="planets__infoWrapper">
                            <p className="planets__infoName">Name: </p>
                            <p className="planets__info">{planetInfo.name} </p>
                        </div>
                        <div className="planets__infoWrapper">
                            <p className="planets__infoName">Climate: </p>
                            <p className="planets__info">{planetInfo.climate} </p>
                        </div>
                        <div className="planets__infoWrapper">
                            <p className="planets__infoName">Population: </p>
                            <p className="planets__info">{planetInfo.population} </p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="planets__nextPrevButtonsWrapper">
                {
                    page > 1
                        ? <button className="planets__nextPrevButton" onClick={prevPage}>
                            <img src={arrowLeft} alt="previous" />
                        </button>
                        : null
                }
                <p>
                    {
                        page === 1 ? 1 : page - 1 + "1"
                    } ... {page * planets.length}
                </p>
                {
                    page * 10 < count
                        ? <button className="planets__nextPrevButton" onClick={nextPage}>
                            <img src={arrowRight} alt="next" />
                        </button>
                        : null
                }
            </div>

            {
                popup ? <Popup message={popup} cancel={() => setPopup("")} /> : null
            }

            { displayLoader
                ? <div className="planets__preLoader">
                    <div className="loader"></div>
                </div>
                : null
            }
        </article>
    )
}

export default PlanetsCards;