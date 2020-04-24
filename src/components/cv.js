import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'





class Cv extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
        activeTab: 'aPropos'
      }
    }

    changeActiveTab(tab){
      this.setState({
        activeTab: tab
      })
    }



    render(){
      return(
        <div className="cv">
          <div className="left">
            <div className="containerInfos">
              <h2>Informations</h2>
              <p><span>Nom: </span>DUVAL</p>
              <p><span>Prénom: </span>Théophane</p>
              <p><span>Né le: </span>06/05/1996</p>
              <p><span>Nationalité: </span>Française</p>
              <p><span>Ville: </span>Grenoble</p>
            </div>
            <div className="containerInfos">
              <h2>Compétences</h2>
              <p><span>HTML/CSS: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/></p>
              <p><span>ReactJS: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/></p>
              <p><span>Angular2: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/><FontAwesomeIcon icon={faCircleNotch}/></p>
              <p><span>NodeJS: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/><FontAwesomeIcon icon={faCircleNotch}/></p>
              <p><span>React Native: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/><FontAwesomeIcon icon={faCircleNotch}/></p>
              <p><span>PHP: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/><FontAwesomeIcon icon={faCircleNotch}/></p>
              <p><span>SQL: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/><FontAwesomeIcon icon={faCircleNotch}/></p>
              <p><span>WordPress: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/><FontAwesomeIcon icon={faCircleNotch}/></p>
            </div>
            <div className="containerInfos">
              <h2>Langues</h2>
              <p><span>Français: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/></p>
              <p><span>Anglais: </span><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faCircleNotch}/></p>
            </div>
            <div className="containerInfos">
              <h2>Contact</h2>
              <p><FontAwesomeIcon icon={faEnvelope}/><a href="mailto:theophane.duval@gmail.com">theophane.duval@gmail.com</a></p>
              <p><FontAwesomeIcon icon={faPhone}/><a href="tel:0648588091">0648588091</a></p>
              <p><FontAwesomeIcon icon={faHome}/>2 rue Jean Macé, 38000 Grenoble</p>
              <p><FontAwesomeIcon icon={faLinkedin}/><a target="_blank" href="http://bit.ly/2Zxs54G">LinkedIn</a></p>
              <p><FontAwesomeIcon icon={faGithub}/><a target="_blank" href="http://bit.ly/32hDV4J">Github</a></p>
            </div>
          </div>
          <div className="right">
            <h2 className={this.state.activeTab === 'aPropos'? 'active' : ''} onClick={() => this.changeActiveTab('aPropos')}>A propos</h2>
            <h2 className={this.state.activeTab === 'experiences'? 'active' : ''} onClick={() => this.changeActiveTab('experiences')}>Experiences professionnelles</h2>
            <h2 className={this.state.activeTab === 'formation'? 'active' : ''} onClick={() => this.changeActiveTab('formation')}>Formation</h2>
            <div className={`rightContainer ${this.state.activeTab === 'aPropos'? 'active' : ''}`}>
              <p className="profilText">Développeur fullstack de formation, je suis un passionné du développement front-end et notamment des technologies ReactJS et NodeJS. J'ai commencé la programmation web lorsque j'étais encore au lycée et ne m'en suis jamais lassé, j'ai donc suivi des études dans ce domaine.</p>
            </div>
            <div className={`rightContainer ${this.state.activeTab === 'experiences'? 'active' : ''}`}>
              <div className="experiences">
                  <h3>Réalisation de sites internet à titre personnel</h3>
                  <h4>Autodidacte | 2014 - Présent</h4>
                  <p>Réalisation de nombreux sites afin d'apprendre à coder en m'amusant. Mon dernier projet en cours est le développement d'une application web de combats Pokemon en ligne.</p>
                  <p><i>Langages utilisés: HTML/CSS, ReactJS, NodeJS, Socket.IO, SQL</i></p>
              </div>
              <div className="experiences">
                  <h3>Création d'une application web pour l'entreprise Zetrott</h3>
                  <h4>Zetrott, Grenoble | 2017 - 2019</h4>
                  <p>Création et maintenance d'un site web pour l'entreprise Zetrott, spécialisée dans la location et vente de trottinettes électriques.</p>
                  <p><i>Langages utilisés: HTML/CSS, ReactJS, PHP, SQL</i></p>
              </div>
              <div className="experiences">
                  <h3>Stage dans l'association Entourage</h3>
                  <h4>Entourage, Paris | mai 2017 - juillet 2017</h4>
                  <p>Réalisation d'un site en WordPress pour Entourage qui a pour but de sensibiliser les utilisateurs à la conditions des personnes sans-abri.</p>
                  <p><i>Langages utilisés: HTML/CSS, Javascript, PHP, WordPress</i></p>
              </div>
              <div className="experiences">
                  <h3>Alternance au sein du Département de l'Isère</h3>
                  <h4>Département de l'Isère, Grenoble | septembre 2017 - août 2018</h4>
                  <p>Alternance durant laquelle j'ai eu la mission de créer une application web permettant l’échange de bureaux entre différents agents le la collectivité.</p>
                  <p><i>Langages utilisés: ReactJS, react native, HTML/CSS, PHP, SQL</i></p>
              </div>
              <div className="experiences">
                  <h3>Collaborateur chez Capgemini</h3>
                  <h4>Capgemini, Grenoble | novembre 2019 - Présent</h4>
                  <p>Développeur web en technologies front-end.</p>
                  <p><i>Langages utilisés: ReactJS, Angular2, HTML/CSS, Python</i></p>
              </div>
            </div>
            <div className={`rightContainer ${this.state.activeTab === 'formation'? 'active' : ''}`}>
              <div className="experiences">
                  <h3>IUT Métiers du Multimédia et de l'Internet</h3>
                  <h4>IUT1, Grenoble | 2015 - 2017</h4>
                  <p>Deux années de formation durant lesquelles j'ai étudié le développement web, la vidéo, le graphisme et la communication.</p>
              </div>
              <div className="experiences">
                  <h3>Licence Professionnelle Service Mobile et Interfaces Nomades</h3>
                  <h4>IUT1, Grenoble | 2017 - 2018</h4>
                  <p>Année de formation spécialisée dans le développement web et mobile durant laquelle j'ai effectué une alternance au sein du Département de l'Isère.</p>
              </div>
              <div className="experiences">
                  <h3>Année de formation humaine et spirituelle</h3>
                  <h4>Emmanuel School of Mission, New York | 2018 - 2019</h4>
                  <p>Année de break entre mes études et la vie professionnelle pour me former spirituellement et humainement. Cette année dans le Bronx à New York m'a appris le travail d'équipe et la compassion. Ce programme m'a également permis une plus grande maîtrise de l'anglais.</p>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => this.props.backToMap('cv')}>SORTIR</div>
        </div>
      )
    }

}

export default Cv;
