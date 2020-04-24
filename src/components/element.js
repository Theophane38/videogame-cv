import React from 'react';
import texture from '../images/texture.png'
import elements from '../elements/elements.json'




class Element extends React.Component {


    constructor(props) {
      super(props)
    }


    getPosition(){
        let nbLeftPreviousTypes = this.props.getNbLeftPreviousTypes(this.props.position, this.props.type)
        let nbTopPreviousTypes = this.props.getNbTopPreviousTypes(this.props.position, this.props.type)
        let elementInfos
        let type = Math.floor(this.props.type)
        if (Math.floor(this.props.type) !== 8){
          elementInfos = elements[type]
        } else {
          elementInfos = elements[this.props.type]
        }
        console.log(elementInfos)
        let leftPosition
        let topPosition
        if (this.props.type === 6){
          console.log('status:' + this.props.statusJourNuit)
          if (this.props.statusJourNuit % 2){
            leftPosition = -1440 - (nbLeftPreviousTypes % elementInfos.width) * 20
            topPosition = -340 - (nbTopPreviousTypes % elementInfos.height) * 20
          } else {
            leftPosition = -1420 - (nbLeftPreviousTypes % elementInfos.width) * 20
            topPosition = -340 - (nbTopPreviousTypes % elementInfos.height) * 20
          }
        } else {
          if (nbLeftPreviousTypes === 0 && nbTopPreviousTypes === 0){
              leftPosition = elementInfos.position.x
              topPosition = elementInfos.position.y
          } else {
              leftPosition = elementInfos.position.x - (nbLeftPreviousTypes % elementInfos.width) * 20
              topPosition = elementInfos.position.y - (nbTopPreviousTypes % elementInfos.height) * 20
          }
        }
        let position = leftPosition + 'px ' + topPosition + 'px'
        return position
    }


    render(){
        let top = this.props.position[0] * 20
        let left = this.props.position[1] * 20
        let direction = this.getPosition()
        let style = {
            'background-image': 'url(' + texture + ')',
            'background-position': direction,
            'top': top + 'px',
            'left': left + 'px',
        }
        if (this.props.type === 7){
          style['z-index'] = 0
        } else if (this.props.position[0] === 15 && this.props.position[1] === 25){
          style['z-index'] = 0
        }
      return(
        <div className="element" style={style}>

        </div>
      )
    }

}

export default Element;
