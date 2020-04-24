import React from 'react';

class Hero extends React.Component {


    constructor(props) {
      super(props)
    }


    render(){
        let top = this.props.heroPosition[0] * 20
        let left = this.props.heroPosition[1] * 20
        let heroOnWater = false
        let topPosition = ''
        let botPosition = ''
        if (this.props.activeBackground[this.props.heroPosition[0]][this.props.heroPosition[1]] === 3){
            heroOnWater = true
        }
        if (this.props.heroDirection === 'bottom'){
            topPosition = 20 * this.props.heroStep + 'px 0px'
            botPosition = 20 * this.props.heroStep + 'px -10px'
        } else if (this.props.heroDirection === 'left'){
            topPosition = 20 * this.props.heroStep + 'px 60px'
            botPosition = 20 * this.props.heroStep + 'px 50px'
        } else if (this.props.heroDirection === 'right'){
            topPosition = 20 * this.props.heroStep + 'px 40px'
            botPosition = 20 * this.props.heroStep + 'px 30px'
        } else if (this.props.heroDirection === 'top'){
            topPosition = 20 * this.props.heroStep + 'px 20px'
            botPosition = 20 * this.props.heroStep + 'px 10px'
        }
        let style = {
            'top': top + 'px',
            'left': left + 'px',
        }
        let topStyle = {
            'background-position': topPosition,
        }
        let bottomStyle = {
            'background-position': botPosition,
        }
        let hideBottomHero = false
        if (this.props.activeBackground[this.props.heroPosition[0]][this.props.heroPosition[1]] === 4
        && this.props.heroStep === 2){
            hideBottomHero = true
        }
        return(
            <div className={`hero ${heroOnWater? 'lokhlass' : ''}`} style={style}>
                <div className="topHero" style={topStyle}></div>
                <div className={`bottomHero ${hideBottomHero ? 'active' : ''}`} style={bottomStyle}></div>
            </div>
        )
    }

}

export default Hero;
