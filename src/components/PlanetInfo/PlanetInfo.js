import './PlanetInfo.scss';
import React, { useState, useEffect } from 'react';
import Popup from '../Popup/Popup';
import axios from 'axios';

const PlanetInfo = () => {
    const [popup, setPopup] = useState('');
    const [displayLoader, setDisplayLoader] = useState(true);
    const [planetInfo, setPlanetInfo] = useState([]);
    const [planetsImages, setPlanetsImages] = useState([]);
    const [residents, setResidents] = useState([]);

    let planetNumber = window.location.href.match(/(\/\d+)/g)
        ? window.location.href.match(/(\/\d+)/g)[0].match(/(\d+)/g)[0]
        : 0;

    const loadDataFromServer = planetNumber => {
        axios.get(`https://swapi.dev/api/planets/${planetNumber}/`)
            .then(res => {
                setPlanetInfo(res?.data);

                if (!res || !res.data) {
                    setPopup('Error. Something was wrong :(')
                }

                setDisplayLoader(false);

                if (res.data.residents.length > 0) {
                    setDisplayLoader(true);
                    const people = [];

                    for (let i = 0; i < res.data.residents.length; i++) {
                        axios.get(res.data.residents[i].replace(/(http)/g, 'https'))
                            .then(res2 => {
                                people.push(res2.data.name);
                                if (people.length === res.data.residents.length) {
                                    setResidents(people);
                                    setDisplayLoader(false);
                                }

                                if (!res2 || !res2.data) {
                                    setPopup('Error. Something was wrong :(')
                                }
                            })
                            .catch(err => {
                                setDisplayLoader(false);
                                setPopup('Error. Something was wrong :(')
                            })

                    }
                }
            })
            .catch(err => {
                setDisplayLoader(false);
                setPopup('Error. Something was wrong :(')
            })
    }

    window.addEventListener('hashchange', () => { window.location.reload() });

    useEffect(() => {
        loadDataFromServer(planetNumber);
        const importAll = r => r.keys().map(r);
        setPlanetsImages(importAll(require.context('../../images/planets', false, /\.(png|jpe?g|svg)$/)));
    }, [planetNumber]);

    const oddPlanet = planetNumber.toString().length > 1 && (+(planetNumber.toString()[0]) + 1) % 2 === 0
        ? true : false
    let planetPhotoArrayIndex = planetNumber.toString()[planetNumber.toString().length - 1] - 1;

    if (planetPhotoArrayIndex < 0) planetPhotoArrayIndex = 0;
    return (
        <article className="planetInfo">
            <div className="planetInfo__infoWrapper">
                <img
                    src={planetsImages[oddPlanet ? planetPhotoArrayIndex : 9 - planetPhotoArrayIndex]?.default}
                    alt={planetInfo.name}
                    className="planetInfo__image"
                />
                <div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Name: </p>
                        <p className="planets__info">{planetInfo.name} </p>
                    </div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Rotation period: </p>
                        <p className="planets__info">{planetInfo.rotation_period} </p>
                    </div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Diameter: </p>
                        <p className="planets__info">{planetInfo.diameter} </p>
                    </div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Climate: </p>
                        <p className="planets__info">{planetInfo.climate} </p>
                    </div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Gravity: </p>
                        <p className="planets__info">{planetInfo.gravity} </p>
                    </div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Terrain: </p>
                        <p className="planets__info">{planetInfo.terrain} </p>
                    </div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Population: </p>
                        <p className="planets__info">{planetInfo.population} </p>
                    </div>
                    <div className="planets__infoWrapper">
                        <p className="planets__infoName">Residents: </p>
                        <p className="planets__info">
                            {residents.length > 0 
                                ? residents.join(", ") 
                                : planetInfo.name
                                 ? 'unknown'
                                 : ""
                            }
                        </p>
                    </div>
                </div>
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

export default PlanetInfo;