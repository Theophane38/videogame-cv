import React from 'react';
import texture from '../images/texture.png'
import field from '../elements/field.json'



class SquareField extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
        position: this.getGroundPosition()
      }
    }

    checkTopPositionSame(){
      console.log(this.props)
      let {array, position, squareType} = this.props
      if (array[position[0] - 1][position[1]] === squareType){
        return true
      } else {
        return false
      }
    }

    checkTopRightPositionSame(){
      let {array, position, squareType} = this.props
      if (array[position[0] - 1][position[1] + 1] === squareType){
        return true
      } else {
        return false
      }
    }

    checkRightPositionSame(){
      let {array, position, squareType} = this.props
      if (array[position[0]][position[1] + 1] === squareType){
        return true
      } else {
        return false
      }
    }

    checkRightBottomPositionSame(){
      let {array, position, squareType} = this.props
      if (array[position[0] + 1][position[1] + 1] === squareType){
        return true
      } else {
        return false
      }
    }

    checkBottomPositionSame(){
      let {array, position, squareType} = this.props
      if (array[position[0] + 1][position[1]] === squareType){
        return true
      } else {
        return false
      }
    }

    checkBottomLeftPositionSame(){
      let {array, position, squareType} = this.props
      if (array[position[0] + 1][position[1] - 1] === squareType){
        return true
      } else {
        return false
      }
    }

    checkLeftPositionSame(){
      let {array, position, squareType} = this.props
      if (array[position[0]][position[1] - 1] === squareType){
        return true
      } else {
        return false
      }
    }

    checkLeftTopPositionSame(){
      let {array, position, squareType} = this.props
      if (array[position[0] - 1][position[1] - 1] === squareType){
        return true
      } else {
        return false
      }
    }

    getGroundPosition(){
      let position
      if (this.props.squareType !== 2){
        if (!this.checkTopPositionSame()){
          position = 'middleTop'
        }
        if (!this.checkBottomPositionSame()){
          position = 'middleBottom'
        }
        if (!this.checkLeftPositionSame()){
          position = 'middleLeft'
        }
        if (!this.checkRightPositionSame()){
          position = 'middleRight'
        }
        if (!this.checkTopPositionSame() && !this.checkRightPositionSame()){
          position = 'topRight'
        }
        if (!this.checkRightPositionSame() && !this.checkBottomPositionSame()){
          position = 'rightBottom'
        }
        if (!this.checkBottomPositionSame() && !this.checkLeftPositionSame()){
          position = 'bottomLeft'
        }
        if (!this.checkLeftPositionSame() && !this.checkTopPositionSame()){
          position = 'leftTop'
        }
        if (this.checkTopPositionSame() && this.checkRightPositionSame() && this.checkBottomPositionSame() && this.checkLeftPositionSame()){
          if (!this.checkTopRightPositionSame()){
            position = 'invTopRight'
          } else if (!this.checkRightBottomPositionSame()){
            position = 'invRightBottom'
          } else if (!this.checkBottomLeftPositionSame()){
            position = 'invBottomLeft'
          } else if (!this.checkLeftTopPositionSame()){
            position = 'invLeftTop'
          } else {
            position = 'normal'
          }
        }
      }
      return position
    }


    render(){
      let {squareType} = this.props
      let direction = field[squareType][this.state.position]
      let fieldType
      switch (squareType) {
        case 1:
          fieldType = 'path'
          break;
        case 2:
          fieldType = 'grass'
          direction = '-20 -0'
          break;
        case 3: 
          fieldType = 'water'
          break;
        case 4:
          fieldType = 'tall-grass'
          direction = '-120px -0px'
          break;
      }
      let style = {
        'background-image': 'url(' + texture + ')',
        'background-position': direction,
      }
      return(
        <div style={style} className={`case ${fieldType}`}>
        </div>
      )
    }

}

export default SquareField;
