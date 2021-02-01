import colchis from '../img/colchis.png';
import sushi from '../img/sushi.png';
import bibliflix from '../img/bibliflix.png'


export const projectList = {
    projectName : ["Kingdom of Colchis", "SushiBar", "Biblifix"]
}

export const projects = {
    project0 :{ 
        number : 1,
        title : "Kingdom of Colchis",
        technos : "JS Vanilla-localStorage",
        image : colchis,
        description : {
            fr : {
                p1:"Site officiel du Royaume de Colchis",
                p2:"7 clicks cachés protègent le trésor du Roi, saurez-vous les retrouver.",
                p3:"Accompagné par le localStorage pour mémoriser les click découvert même après avoir quitté le royaume, il vous faudra beaucoup de patience et de malice !"
            },
            en : "Shit test for the fucking Wild Code Scholl"
        },
    },
    project1 :{ 
        number : 2,
        title : "SushiBar",
        technos : "JS Vanilla-animations",
        image : sushi,
        description : {
            fr : {
               p1: "Site pour un sushi bar",
               p2: "Vértiable sparing partner, ce site m'as permis de découvrir, m'exercer et progresser sur javascript et notement sur les animations",
               p3: "Au programme, parallax, hover, transition etc..., le tout sans librairie"
            },
            en : "Japoneese food gangsta shit"
        },
    },
    project2 :{ 
        number : 3,
        title : "Biblifix",
        technos : "React-Bootstrap-Firebase",
        image : bibliflix,
        description : {
            fr : "Blog de littérature",
            en : "Blog for fucking readers"
        },
    }

}