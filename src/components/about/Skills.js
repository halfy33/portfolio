const programming = [
  { id: 1, name: "Routage : OSPF, OpenVPN", value: 80 },
  { id: 2, name: "Switch : Cisco, HP", value: 85 },
  { id: 3, name: "IOT, OT interconnexion", value: 75 },
];
const language = [
  { id: 1, name: "Linux, Bash", value: 85 },
  { id: 2, name: "Windows, Powershell", value: 80 },
  { id: 3, name: "Base de données : Mysql, MariaDB, PostgreSQL", value: 85 },
];
const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Compétences Réseau</h3>
            </div>
            <div className="tokyo_progress">
              {programming.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Compétences Système</h3>
            </div>
            <div className="tokyo_progress">
              {language.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
