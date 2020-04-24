import React from 'react';
import texture from '../images/texture.png'


class Texture extends React.Component {


    constructor(props) {
      super(props)
    }


    render(){
        let row = []
        for (let i = 0; i < 158; i++){
            let line = []
            for (let j = 0; j < 94; j++){
                line.push(
                    <div className="testCase" x={j * 20} y={i * 20}>

                    </div>
                )
            }
            row.push(
                <div className="testHover">
                    {line}
                </div>
            )
        }
      return(
          <div className="test">
              <img className='testImage' src={texture}/>
              <div className="testContainer">
              {row}
              </div>
          </div>
      )
    }

}

export default Texture;
