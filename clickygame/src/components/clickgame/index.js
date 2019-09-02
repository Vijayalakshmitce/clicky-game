import React, { Component } from "react";
import Header from "../Header/index";
import "../clickgame/style.css";

import friends from "../clickgame/friends.json"


class clickgame extends Component {
    state = {
        friends,
        score: 0,
        topScore: 0,
        clickedArr: [],
        clickId: 0
    }
    handleScoreClick = event => {

        const shuffledArray = this.shuffleArray(friends)
        const clickedId = event.target.getAttribute('id')
        let { score, topScore } = this.state;

        if (this.state.clickedArr.includes(clickedId)) {
            this.setState({
                score: 0,

                clickedArr: [],
                clickId: 0
            })
            alert("Sorry click image to start game")
        }
        else {

            this.setState(prevState => ({
                clickedArr: [...prevState.clickedArr, clickedId]
            }));
            this.setState({
                friends: shuffledArray,
                score: this.state.score + 1,
            })

            if (score > topScore) {
                this.setState({
                    topScore: score

                })
            }

        }
    }
    ///shuffleArray

    shuffleArray = (picturesArray) => {
        for (let i = picturesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
        }
        return picturesArray;
    }


    render() {
        return (
            <div className="container-fluid">
                <div>
                    <Header score={this.state.score} topScore={this.state.topScore} />
                </div>

                <div className="jumbotron">

                </div>
                {this.state.friends.map(friend =>
                    <img className="click-item" src={friend.image} id={friend.id} alt={friend.name} key={friend.id} onClick={this.handleScoreClick} />
                )


                }

            </div>
        )
    }

}

export default clickgame;