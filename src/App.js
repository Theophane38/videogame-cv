import React from 'react';
import './App.css';
import map1 from "./maps/map1.json"
import SquareField from './components/squareField.js'
import Hero from './components/hero'
import Element from './components/element'
import Fight from './components/fight'
import Texture from './components/texture'
import Cv from './components/cv'
import Contact from './components/contact'
import soundfile from './songs/banc.mp3'
import sertARien from './songs/sertARien.mp3'
import Sound from 'react-sound'
import jour1 from './songs/jour1.mp3'
import jour2 from './songs/jour2.mp3'
import jour3 from './songs/jour3.mp3'
import jour4 from './songs/jour4.mp3'
import nuit1 from './songs/nuit1.mp3'
import nuit2 from './songs/nuit2.mp3'
import nuit3 from './songs/nuit3.mp3'
import boat from './songs/boat.mp3'
import treasure from './songs/treasure.mp3'
import chainsaw from './songs/chainsaw.mp3'
import miracle from './songs/miracle.mp3'
import fight from './songs/fight.mp3'
import mario from './songs/mario.mp3'
import cow from './songs/cow.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import { faDesktop} from '@fortawesome/free-solid-svg-icons'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import cv from './download/cv_theophane_duval.pdf'

const jourNuit = [
  jour1, nuit1, jour2, nuit2, jour3, nuit3, jour4
]


const building = [
  [3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3],
  [3,3,3,3,3,3,3,3,3,3],
]


class App extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
        activeBackground: map1['backGround'],
        activeFront: map1['front'],
        heroPosition: [9,17],
        heroDirection: 'bottom',
        isHeroActive: false,
        currentJourNuit: 0,
        heroStep: 2,
        activeSound: false,
        activeSoundFile: jourNuit[0],
        screen: 'home',
        isModalActive: false,
        messageModal: [<p>En travaux</p>],
        isHeroOccupied: false
      }
      this.escFunction = this.escFunction.bind(this)
      this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this)
    }

    escFunction(event){
      if (!this.state.isHeroActive && this.state.screen === 'game'){
        this.setState({isHeroActive: true})
        setTimeout(() => {
          this.setState({isHeroActive: false});
        }, 100)
        switch (event.keyCode){
          case 37:
            this.move('left')
            break
          case 38:
            this.move('top')
            break
          case 39:
            this.move('right')
            break
          case 40:
            this.move('bottom')
            break
          case 69:
            this.activeJourNuit()
            break
          case 27:
            console.log('a')
            this.setState({
              isModalActive: false
            })
            break
        }
      }
    }

    componentDidMount() {
      document.addEventListener("keydown", this.escFunction, false);
      this.setState({
        buildedFront: this.buildFront(map1['front']),
      })
    }
  
    componentWillUnmount() {
      // Make sure to remove the DOM listener when the component is unmounted.
      document.removeEventListener("keydown", this.escFunction)
    }

    handleSongFinishedPlaying(){
      this.setState({
        activeSound: false,
      })
    }

    activeJourNuit(){
      console.log(this.getNextBlockPosition(this.state.heroDirection))
      if (this.getNextBlockValue(this.state.heroDirection) === 6){
        this.setState({
          buildedFront: this.buildFront(map1['front']),
        })
        if (this.state.currentJourNuit < 6){
          this.setState({
            activeSound: true,
            activeSoundFile: jourNuit[this.state.currentJourNuit],
            currentJourNuit: this.state.currentJourNuit + 1
          })
        } else {
          this.setState({
            activeSound: true,
            currentJourNuit: 1,
            activeSoundFile: jourNuit[0]
          })
        }
      } else if (this.getNextBlockValue(this.state.heroDirection) === 10){
        this.setState({
          screen: 'contact'
        })
      } else if (this.getNextBlockValue(this.state.heroDirection) === 11){
        this.setState({
          activeSoundFile: treasure,
          activeSound: true,
          isModalActive: true,
          messageModal: [<p>Vous trouvez un trésor incroyable ! <a href={cv} download>Téléchargez le</a> !</p>]
        })
      } else if (Math.floor(this.getNextBlockValue(this.state.heroDirection)) === 9){
        let activeFront = this.state.activeFront
        let nextBlockValue = this.getNextBlockValue(this.state.heroDirection)
        let n = 0
        for (let i = 0; i < activeFront.length; i++){
          for (let j = 0; j < activeFront[i].length; j++){
            if (activeFront[i][j] === nextBlockValue){
              if (n < 3){
                activeFront[i][j] = 0
              } else {
                activeFront[i][j] = 5 + (nextBlockValue - 9)
                console.log(activeFront[i][j])
              }
              n++
            }
          }
        }
        this.setState({
          activeSoundFile: chainsaw,
          activeSound: true,
        })
        setTimeout(() => {
          this.setState({
            buildedFront: this.buildFront(activeFront),
            activeFront: activeFront,
          })
        }, 300)
      } else if (Math.floor(this.getNextBlockValue(this.state.heroDirection)) === 5){
        let activeFront = this.state.activeFront
        let nextBlockValue = this.getNextBlockValue(this.state.heroDirection)
        let n = 0
        for (let i = 0; i < activeFront.length - 1; i++){
          for (let j = 0; j < activeFront[i].length; j++){
            console.log(activeFront[i + 1])
            if (activeFront[i][j] === nextBlockValue){
              activeFront[i][j] = 9 + (nextBlockValue - 5)
              n++
            } else if (activeFront[i + 1][j] === nextBlockValue && n < 3){
              activeFront[i][j] = 9 + (nextBlockValue - 5)
              n++
            }
          }
        }
        this.setState({
          activeSoundFile: miracle,
          activeSound: true,
        })
        setTimeout(() => {
          this.setState({
            buildedFront: this.buildFront(activeFront),
            activeFront: activeFront,
          })
        }, 300)
      }
    }

    buildField(){
      let activeBackground = this.state.activeBackground
      let field = []
      for (let i = 0; i < activeBackground.length; i++ ){
        let row = []
        for (let j = 0; j < activeBackground[i].length; j++ ){
          row.push(
            <div className="case">
              <SquareField 
                squareType={activeBackground[i][j]} 
                position={[i,j]} 
                array={activeBackground}
              />
            </div>
          )
        }
        field.push(
          <div className="row">
            {row}
          </div>
        )
      }
      return field
    }

    getNbLeftPreviousTypes(position, type){
      let count = -1
      let i  = position[1]
      while (this.state.activeFront[position[0]][i] === type ){
        i = i - 1
        count++
        if (count > 100){
          break;
        }
      }
      return count
    }

    getNbTopPreviousTypes(position, type){
      let count = -1
      let i  = position[0]
      while (this.state.activeFront[i][position[1]] === type ){
        i = i - 1
        count++
        if (count > 100){
          break;
        }
      }
      return count
    }

    buildFront(arrayFront){
      let element = []
      for (let i = 0; i < arrayFront.length; i++ ){
        let row = []
        for (let j = 0; j < arrayFront[i].length; j++ ){
          if (arrayFront[i][j] !== 0){
            console.log(this.state.currentJourNuit)
            element.push(
              <Element 
                position={[i,j]}
                statusJourNuit={this.state.currentJourNuit}
                type={arrayFront[i][j]} 
                getNbLeftPreviousTypes={this.getNbLeftPreviousTypes.bind(this)}
                getNbTopPreviousTypes={this.getNbTopPreviousTypes.bind(this)}

              />
            )
          }
        }
      }
      return element
    }

    getNextBlockPosition(direction){
      let {heroPosition} = this.state
      let nextBlockPosition
      switch(direction){
        case 'left':
          nextBlockPosition = [heroPosition[0], heroPosition[1] - 1]
          break
        case 'top':
          nextBlockPosition = [heroPosition[0] - 1, heroPosition[1]]
          break
        case 'right':
          nextBlockPosition = [heroPosition[0], heroPosition[1] + 1]
          break
        case 'bottom':
          nextBlockPosition = [heroPosition[0] + 1, heroPosition[1]]
          break
      }
      return nextBlockPosition
    }

    getNextBlockValue(direction){
      let {heroPosition, activeFront} = this.state
      let nextBlockValue
      switch(direction){
        case 'left':
          nextBlockValue = activeFront[heroPosition[0]][heroPosition[1] - 1]
          break
        case 'top':
          console.log(0, heroPosition[0])
          if (heroPosition[0] !== 0){
            nextBlockValue = activeFront[heroPosition[0] - 1][heroPosition[1]]
          }
          break
        case 'right':
          nextBlockValue = activeFront[heroPosition[0]][heroPosition[1] + 1]
          break
        case 'bottom':
          console.log(activeFront.length - 1, heroPosition[0])
          if (heroPosition[0] !== activeFront.length - 1){
            nextBlockValue = activeFront[heroPosition[0] + 1][heroPosition[1]]
          }
          break
      }
      return nextBlockValue
    }

    backToMap(from){
      console.log(from)
      if (from === 'cv'){
        setTimeout(() => {
          this.move('bottom')
        }, 100)
      } else if (from === 'contact') {
        this.setState({
          isModalActive: true,
          messageModal: [<p>Message envoyé !</p>]
        })
      } else if (from === 'fight'){
        this.setState({
          activeSound: false,
          isHeroOccupied: false
        })
      }
      this.setState({
        screen: 'game',
      })
    }

    startSound(sound){
      if (sound === 'mario'){
        this.setState({
          activeSoundFile: mario,
          activeSound: true
        })
      }
    }

    move(direction){
      if (!this.state.isModalActive && !this.state.isHeroOccupied){
        let {heroPosition, activeFront, activeBackground} = this.state
        let nextBlockValue = this.getNextBlockValue(direction)
        let nextBlockPosition = this.getNextBlockPosition(direction)
        if (typeof nextBlockValue !== 'undefined'){
          if ((nextBlockValue === 0
            || (activeFront[nextBlockPosition[0] - 1][nextBlockPosition[1]] === 0 && (nextBlockValue === 3 || Math.floor(nextBlockValue) === 9 ||nextBlockValue === 4))
            || nextBlockValue === 7)
          ){
            if (nextBlockValue === 7){
              this.setState({
                activeSoundFile: soundfile,
                activeSound: true
              })
              direction = 'bottom'
            } else if (nextBlockPosition[0] === 7 && nextBlockPosition[1] === 38){
              this.setState({
                activeSoundFile: sertARien,
                activeSound: true
              })
            } else {

            }
            if (activeBackground[nextBlockPosition[0]][nextBlockPosition[1]] === 3 && activeBackground[heroPosition[0]][heroPosition[1]] !== 3){
              this.setState({
                activeSoundFile: boat,
                activeSound: true
              })
            }
            if (activeBackground[nextBlockPosition[0]][nextBlockPosition[1]] === 4){
              if (Math.random() > 0.7){
                this.setState({
                  activeSoundFile: fight,
                  activeSound: true,
                  isHeroOccupied: true
                })
                setTimeout(() => {
                  this.setState({
                    screen: 'fight'
                  })
                }, 500)
              }
            }
            heroPosition = nextBlockPosition
          } else if (this.getNextBlockPosition(direction)[0] === 15 && this.getNextBlockPosition(direction)[1] === 25){
            heroPosition = [15,25]
            setTimeout(() => {
              this.setState({
                screen: 'cv'
              })
            }, 100)
          } else if (nextBlockPosition[0] === 8 && nextBlockPosition[1] === 24){
            console.log('oui')
            this.setState({
              isModalActive: true,
              messageModal: [<p>Je voulais mettre un portfolio, mais ce site est un portfolio en lui-même.</p>]
            })
          }
        }
        this.setState({
          heroPosition,
          heroDirection: direction,
          heroStep: 3
        })
        setTimeout(() => {
          this.setState({heroStep: 2});
        }, 50)
      }
    }

    soundTest(){
      this.setState({
        activeSoundFile: cow,
        activeSound: true,
        isTestSoundActive: true
      })
      setTimeout(() => {
        this.setState({
          isTestSoundActive: false
        })
      }, 4000)
    }

    start(){
      this.setState({
        activeSoundFile: miracle,
        activeSound: true,
        screen: 'game'
      })
    }

    render(){
      let statusMusic
      if (this.state.activeSound){
        statusMusic = Sound.status.PLAYING
      } else {
        statusMusic = Sound.status.STOPPED
      }
      let contentScreen = []
      if (this.state.screen === 'game'){
        let transform
        if (this.state.heroPosition[1] < 16){
          transform = 0
        } else if (this.state.heroPosition[1] > 31){
          transform = -300
        } else {
          transform = (-(this.state.heroPosition[1] - 16))*20
        }
        contentScreen.push(
          <div>
            {/* <button className="buttonTop" onClick={() => this.move('top')}><FontAwesomeIcon icon={faArrowUp}/></button>
            <button className="buttonLeft" onClick={() => this.move('left')}><FontAwesomeIcon icon={faArrowLeft}/></button>
            <button className="buttonBottom" onClick={() => this.move('bottom')}><FontAwesomeIcon icon={faArrowDown}/></button>
            <button className="buttonRight" onClick={() => this.move('right')}><FontAwesomeIcon icon={faArrowRight}/></button>
            <button className="buttonA" onClick={() => this.activeJourNuit()}>A</button>
            <button className="buttonB" onClick={() => this.setState({isModalActive: false})}>B</button> */}
            <div className={`modal ${this.state.isModalActive? 'active':''}`}>
              {this.state.messageModal}
            </div>
            <div className="field">
              {this.buildField()}
            </div>
            <div className="elements">
            <ul>Commandes:
              <li>
                <span><FontAwesomeIcon icon={faArrowUp}/></span>
                <span><FontAwesomeIcon icon={faArrowDown}/></span>
                <span><FontAwesomeIcon icon={faArrowLeft}/></span>
                <span><FontAwesomeIcon icon={faArrowRight}/></span><span> Déplacements</span></li>
              <li><span className="key">E</span> Intéragir avec un objet</li>
            </ul>
              {this.state.buildedFront}
            </div>
            <Hero 
              heroPosition={this.state.heroPosition}
              heroDirection={this.state.heroDirection} 
              heroStep={this.state.heroStep}
              activeBackground={this.state.activeBackground}
            />
          </div> 
        )
      } else if (this.state.screen === 'fight'){
        contentScreen.push(
          <Fight startSound={this.startSound.bind(this)} backToMap={this.backToMap.bind(this)}/>
        )
      } else if (this.state.screen === 'cv') {
        contentScreen.push(
          <Cv backToMap={this.backToMap.bind(this)} />
        )
      } else if (this.state.screen === 'contact') {
        contentScreen.push(
          <Contact backToMap={this.backToMap.bind(this)} />
        )
      } else {
        contentScreen.push(
          <div className="start">
            <h3>Bienvenue sur mon CV intéractif !!</h3>
            <p>Je me permets de vous inviter à <b><u>activer votre son</u></b>, sinon cette experience sera bien moins intéressante :(.</p>
            <p>Tester si votre son est activé en appuyant sur ce bouton :</p>
            <button className="buttonTest" onClick={() => this.soundTest()}><FontAwesomeIcon icon={this.state.isTestSoundActive? faVolumeUp : faPlay}/> BOUTON DE TEST</button>
            <p><FontAwesomeIcon icon={faDesktop}/> L'expérience sera plus agréable sur un ordinateur, car le développeur de ce site n'a pas encore trouvé le temps de le rendre responsive. (Oui vous pouvez le huer!)</p>
            <ul>Commandes:
              <li>
                <span className="key"><FontAwesomeIcon icon={faArrowUp}/></span>
                <span className="key"><FontAwesomeIcon icon={faArrowDown}/></span>
                <span className="key"><FontAwesomeIcon icon={faArrowLeft}/></span>
                <span className="key"><FontAwesomeIcon icon={faArrowRight}/></span><span> Déplacements</span></li>
              <li><span className="key">E</span> Intéragir avec un objet</li>
            </ul>
            <p>Bonne visite !</p>
            <button className="startButton" onClick={() => this.start()}>C'EST PARTI !</button>
          </div>
        )
      }

    return (
      <div onClick={() => this.setState({isModalActive:false})}>
        <div className="nothing"></div>
        <div className="header">
          <h1>Théophane DUVAL</h1>
        </div>
        <div className="screen">
          {contentScreen}
        </div>
        <Sound
          url={this.state.activeSoundFile}
          playStatus={statusMusic}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </div>
      // <Texture/>
    )
  }

}

export default App;
