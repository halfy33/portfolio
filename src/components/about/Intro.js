import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/yanis_cartoon1.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Guerroudj Yanis</h3>
        <span>Alternant réseau et système</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Bonjour, je m'appelle Guerroudj Yanis et je suis devenu passionné d'informatique. A la base 
          je faisais de la comptabilité, j'ai par ailleurs travaillé dans le domaine pendant 1 an.
          Je me suis réorienté en informatique et plus précisément en système et réseau
          dans le but de comprendre leur fonctionnement et d'appliquer toute mes compétences dans le milieu professionnel.
          Ce qui me plaît le plus est la sécurité informatique. Mais il est évident que sans connaissance ni réseau ni système il est difficile
          de pouvoir comprendre les enjeux de la cybersécurité, d'autant plus en milieu industriel ! 
          
        
        </p>
        <p>
          Je suis actuellement en alternance au CFAI Loire, Drôme, Ardèche et je travaille pour la société Jacobs Douwe Egbert,
           un des leader dans le monde du café. J'ai la chance de pouvoir visualiser un réseau de grande envergure au sein de JDE, et de monter en compétences
           rapidement auprès de mon tuteur et de toutes les personnes qui m'entoure. Je suis autonome et gère mes propres projets sous l'égide de mon supérieur.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Naissance :
                </span>
                <span>27.05.1997</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>26 ans</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:tokyo@gmail.com"
                  >
                    yanis@yginfo.fr
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+77 022 177 05 05"
                  >
                   +33 6 63 51 77 05
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationalité:
                </span>
                <span>Français</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Ecole:
                </span>
                <span>CFAI Loire</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Diplôme:
                </span>
                <span>BTS SIO SISR</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Intérêt:
                </span>
                <span>Football / échecs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/1.jpg" download>
          <span>Télécharger CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
