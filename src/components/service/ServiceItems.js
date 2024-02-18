import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Claroty",
    text: [
      "Claroty est une entreprise spécialisée dans la sécurité industrielle, offrant des solutions conçues pour protéger les systèmes de contrôle industriels (ICS) contre les cybermenaces. Les systèmes de contrôle industriels sont utilisés dans divers secteurs tels que l'énergie, la fabrication, les infrastructures critiques, etc., pour superviser et contrôler les processus industriels.",
      "Les principaux aspects de la technologie Claroty incluent :",
      "",
      "1. Détection des menaces industrielles : Claroty utilise des méthodes avancées de détection des menaces spécifiquement adaptées aux environnements industriels. Cela comprend la surveillance du trafic réseau, l'analyse du comportement des dispositifs, et la détection d'anomalies potentielles.",
      "2. Visibilité du réseau industriel : Claroty offre une visibilité approfondie sur le réseau industriel, ce qui permet aux entreprises de mieux comprendre leur architecture, les dispositifs connectés, et les communications entre les différents composants.",
      "3. Gestion des vulnérabilités : La plateforme Claroty permet la gestion proactive des vulnérabilités en identifiant et en évaluant les faiblesses potentielles dans les systèmes de contrôle industriel.",
      "4. Réponse aux incidents : En cas de détection d'une menace, Claroty propose des fonctionnalités de réponse aux incidents, permettant aux équipes de sécurité de réagir rapidement pour atténuer les risques.",
      "5. Intégration avec d'autres solutions de sécurité : Claroty peut souvent s'intégrer avec d'autres solutions de sécurité déjà en place dans l'infrastructure informatique de l'entreprise, améliorant ainsi la cohérence et l'efficacité des mesures de sécurité globales.",
      "",

       "Avantages de la technologie Claroty :",

      "1. Protection spécialisée pour les environnements industriels : Claroty se concentre sur les systèmes de contrôle industriels, offrant une protection spécialisée adaptée aux défis uniques de ces environnements.",
      "2. Visibilité approfondie : La plateforme Claroty offre une visibilité approfondie sur les réseaux industriels, permettant aux organisations de mieux comprendre et surveiller leurs infrastructures.",
      "3. Détection avancée des menaces : La technologie de détection des menaces de Claroty utilise des techniques avancées pour identifier les activités suspectes et les menaces potentielles.",
      "",

       "Inconvénients de la technologie Claroty :",

      "1. Complexité d'implémentation : Les solutions de sécurité industrielle peuvent parfois être complexes à mettre en œuvre, en particulier dans des environnements où la continuité opérationnelle est critique.",
      "2. Coût : Les solutions de sécurité spécialisées peuvent être coûteuses, ce qui peut être un facteur limitant pour certaines organisations, en particulier les petites et moyennes entreprises.",
      "3. Dépendance à l'égard des mises à jour : Comme pour toute solution de sécurité, la dépendance à l'égard des mises à jour fréquentes et des correctifs de sécurité est un aspect à prendre en compte.",
    ],
    image: "assets/img/news/claroty_img.jpg",
  },
  {
    id: 2,
    name: "Content Writing",
    text: [
      "Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Brand Identity",
    text: [
      "Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    name: "Live Chat",
    text: [
      "Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/4.jpg",
  },
  {
    id: 5,
    name: "After Effects",
    text: [
      "Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 6,
    name: "Mobile App",
    text: [
      "Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/2.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
