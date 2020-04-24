import React from 'react';
import pokeball from '../images/pokeball.png';
import platform from '../images/platform.png'
import theophane from '../images/theophane.png'
import employeur from '../images/employeur.png'




class Fight extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
        dialogBox: '',
        bottomScreen: ''
      }
    }

    displayText(text){
      let n = 0
      let interval = setInterval(() => {
        n++
        if (n > text.length){
          clearInterval(interval)
        }
        this.setState({
          dialogBox: text.substring(0,n)
        })
      }, 10)
    }

    componentDidMount(){
      let text = 'Un Théophane sauvage apparaît!'
      setTimeout(() => {
        this.displayText('Un Théophane sauvage apparaît!')
      }, 3000)
      setTimeout(() => {
        this.displayText('Que voulez-vous faire?')
        this.setState({
          bottomScreen: 'menu'
        })
      }, 4000)
    }

    run(){
      this.displayText('Vous prenez la fuite devant tant de compétences.')
      setTimeout(() => {
        this.props.backToMap('fight')
      }, 500)
    }

    move(){
      this.setState({
        bottomScreen: 'move'
      })
    }

    attack(type){
      this.setState({
        bottomScreen: ''
      })
      if (type === 'amadouer'){
        let random = Math.random()
        if (random > 0.8){
          this.displayText('Vous promettez un salaire élevé!')
        } else if (random > 0.6){
          this.displayText('Vous promettez des pojets intéressants!')
        } else if (random > 0.4){
          this.displayText('Vous promettez une bonne ambiance de travail!')
        } else if (random > 0.2){
          this.displayText('Vous promettez des leaders à l\'écoute!')
        } else {
          this.displayText('Vous promettez que l\'humain passe avant!')
        }
        setTimeout(() => {
          this.displayText('Théophane sauvage semble interessé!')
        }, 1500)
        setTimeout(() => {
          this.setState({
            bottomScreen: 'menu'
          })
          this.displayText('Que voulez-vous faire?')
        }, 3000)
      } else if (type === 'trempette'){
        this.displayText('Vous utilisez trempette!')
        setTimeout(() => {
          this.displayText('Mais rien ne se passe.')
        }, 1500)
        setTimeout(() => {
          this.setState({
            bottomScreen: 'menu'
          })
          this.displayText('Que voulez-vous faire?')
        }, 3000)
      } else if (type === 'lettre'){
        this.displayText('Vous exigez une lettre de motivation.')
        setTimeout(() => {
          this.displayText('Théophane sauvage prend la fuite.')
        }, 1500)
        setTimeout(() => {
          this.props.backToMap('fight')
        }, 3000)
      } else if (type === 'mario'){
        this.displayText('Vous défiez Théophane sauvage à Mario Kart!')
        this.props.startSound('mario')
        setTimeout(() => {
          this.displayText('Vous perdez, evidemment!')
        }, 1500)
        setTimeout(() => {
          this.setState({
            bottomScreen: 'menu'
          })
          this.displayText('Que voulez-vous faire?')
        }, 3000)
      }
    }

    bag(){
      this.setState({
        bottomScreen: 'bag'
      })
    }

    cancel(){
      this.setState({
        bottomScreen: 'menu'
      })
      this.displayText('Que voulez-vous faire?')
    }

    catch(){
      this.setState({
        throwingPokeball: true,
        animationActive: true,
        bottomScreen: ''
      })
      setTimeout(() => {
        this.setState({
          bottomScreen: ''
        })
        this.displayText('Vous ne pouvez pas attraper un humain... Envoyez lui plutôt un message!')
      }, 1500)
      setTimeout(() => {
        this.setState({
          bottomScreen: 'menu',
          animationActive: false,
        })
        this.displayText('Que voulez-vous faire?')
      }, 3000)
    }

    contact(){
      this.setState({
        bottomScreen: 'contact'
      })
      this.displayText('Contactez le tous!')
    }



    render(){
      let bottomScreen = []
      if (this.state.bottomScreen === 'menu'){
        bottomScreen.push(
          <div className="bottomScreen">
            <div className="action moves" onClick={() => this.move()}>
              ATTAQUER
            </div>
            <div className="action pack" onClick={() => this.bag()}>
              SAC
            </div>
            <div className="action run" onClick={() => this.run()}>
              FUITE
            </div>
            <div className="action pokemons" onClick={() => this.contact()}>
              CONTACT
            </div>
          </div>
        )
      } else if (this.state.bottomScreen === 'move') {
        bottomScreen.push(
          <div className="bottomScreen">
            <div className="move" onClick={() => this.attack('amadouer')}>
              Amadouer
            </div>
            <div className="move" onClick={() => this.attack('trempette')}>
              Trempette
            </div>
            <div className="move" onClick={() => this.attack('lettre')}>
              Lettre de motivation
            </div>
            <div className="move" onClick={() => this.attack('mario')}>
              Mario Kart
            </div>
            <div className="cancel" onClick={() => this.cancel()}>
              ANNULER
            </div>
          </div>
        )
      } else if (this.state.bottomScreen === 'bag') {
        bottomScreen.push(
          <div className="bottomScreen">
            <div className="item" onClick={() => this.catch()}>
              <img src={pokeball}/>
              <p>Poke ball</p>
            </div>
            
            <div className="cancel" onClick={() => this.cancel()}>
              ANNULER
            </div>
          </div>
        )
      } else if (this.state.bottomScreen === 'contact') {
        bottomScreen.push(
          <div className="bottomScreen">
            <div className="contactZone">
              <p>Email: <a href="mailto:theophane.duval@gmail.com">theophane.duval@gmail.com</a></p>
              <p>Mobile: <a href="tel:0648588091">0648588091</a></p>
              <p>LinkedIn: <a target="_blank" href="https://fr.linkedin.com/in/theophane-duval-a47a5911b">theophane-duval</a></p>
            </div>
            
            <div className="cancel" onClick={() => this.cancel()}>
              ANNULER
            </div>
          </div>
        )
      } else {
        bottomScreen.push(
          <div className="bottomScreen">

          </div>
        )
      }
      return(
        <div className="fightScreen">
          <div className="topScreen">
            <img style={{'animation': `${this.state.animationActive? '' : 'none'}`}} src={pokeball} className={`pokeballThrowing ${this.state.throwingPokeball? 'active' : ''}`}/>
            <div className="infos">
              <p className="name">Théophane</p>
              <p className="level">lvl. 23</p>
              <div className="healthBar">
                <span>HP</span><progress value="100" max="100"></progress>
              </div>
            </div>
            <div className="visual">
              <img className="theophane" src={theophane}/>
              <img className="platform" src={platform}/>
            </div>
            <div className="allyVisual">
              <img className="employeur" src={employeur}/>
              <img className="platform" src={platform}/>
            </div>
            <div className="dialogBox">{this.state.dialogBox}</div>
          </div>
          {bottomScreen}
        </div>
      )
    }

}

export default Fight;
