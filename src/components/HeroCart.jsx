import React from "react";

class Herocard extends React.Component {
    render() {
        const { name, universe, alterego, occupation, friends, superpowers, url, info } = this.props;

        return (
                <div className="superhero__box">
                <img className='superhero__img' src={url} alt={name} />
                    <h3 className="superhero__name">{name}</h3>
                    <h4 className="superhero__universe"><strong>Вселенная:</strong> {universe}</h4>
                    <h4 className="superhero__alterego"><strong>Альтер эго:</strong> {alterego}</h4>
                    <h4 className="superhero__friends"><strong>Друзья:</strong> {friends}</h4>
                    <h4 className="superhero__occupation"><strong>Род деятельности:</strong> {occupation}</h4>
                    
                    <h4 className="superhero__superpowers"><strong>Суперсилы:</strong> {superpowers}</h4>
                    <p className="superhero__info">{info}</p>
                </div>
        );
    } 
}

export default Herocard;