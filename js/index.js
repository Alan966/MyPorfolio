import "./header.js";

let divButtonLenguage = document.getElementById('div_button');
var userLang = navigator.language || navigator.userLanguage;

const cleanChildElement = (element) => {
    element.childElementCount > 0 ?
        element.removeChild(element.children[0]) : null;
}
const insertElement = (oldElement, newElement) => {
    oldElement.appendChild(newElement);
}
const createElementContent = (element, classElement, textContent, idElement, href) => {
    const newElement = document.createElement(element);
    newElement.classList.add(classElement);
    newElement.textContent = textContent;
    newElement.setAttribute('id', idElement);
    if (href) {
        newElement.setAttribute('href', href);
    }
    return newElement;
}
cleanChildElement(divButtonLenguage);
insertElement(divButtonLenguage, createElementContent('button', 'button_lenguage', userLang, 'buttonlenguage'));
document.getElementById('buttonlenguage').addEventListener('click', () => {

    if (userLang === 'es') {
        userLang = 'en';
        contentCard(userLang);
        contentAboutMe(userLang);
        contentHeader(userLang);
        document.getElementById('buttonlenguage').textContent = `${userLang}`;
    } else if (userLang === 'en') {
        userLang = 'es';
        contentCard(userLang);
        contentAboutMe(userLang);
        contentHeader(userLang);
        document.getElementById('buttonlenguage').textContent = `${userLang}`;
    }
})

//header
const ullist = document.getElementById('list_ul');
const me = ullist.children[0];
const projects = ullist.children[1];
const experience = ullist.children[2];
const contact = ullist.children[3];



const contentHeader = (lenguage) => {
    cleanChildElement(me);
    cleanChildElement(projects);
    cleanChildElement(experience);
    cleanChildElement(contact);

    if (lenguage === 'es') {
        insertElement(me, createElementContent('a', 'link', 'Sobre mi', 'link', '#me'))
        insertElement(projects, createElementContent('a', 'link', 'Proyectos', 'link', '/'))
        insertElement(experience, createElementContent('a', 'link', 'Experiencia', 'link', '/'))
        insertElement(contact, createElementContent('a', 'link', 'Contacto', 'link', '/'))
    } else if (lenguage === 'en') {
        insertElement(me, createElementContent('a', 'link', 'About me', 'link', '#me'));
        insertElement(projects, createElementContent('a', 'link', 'Projects', 'link', '/'));
        insertElement(experience, createElementContent('a', 'link', 'Experience', 'link', '/'));
        insertElement(contact, createElementContent('a', 'link', 'Contact', 'link', '/'));
    }
};


contentHeader(userLang);

//section card
const titleCard = document.getElementById('title_card');
const pCard = document.getElementById('p_card');

const contentCard = (lengugage) => {
    if (lengugage === 'es') {
        titleCard.textContent = 'Hola mi nombre es Alan';
        pCard.textContent = 'Soy un desarrollador Fullstack';
    } else if (lengugage === 'en') {
        titleCard.textContent = "Hi! I'm Alan";
        pCard.textContent = "I'm Fullstack Developer";
    }
}
contentCard(userLang);

// section about me
const titleAboutMe = document.getElementById('title_about_me');
const description = document.getElementById('description_about_me');
const list = document.getElementById('list_I_learn');
const title_gallery = document.getElementById('title_gallery');
const contentAboutMe = (lenguage) => {
    if (lenguage === 'es') {
        titleAboutMe.textContent = 'Sobre mi';
        description.innerHTML = `
        <p>
        Soy un desarrollador Fullstack con Javascript
        Empece en el mundo de la programacion en el 2020,
        cuando tenia 19 años, estudio en la fes Cuautitlan,
        la carrera de administracion con especializacion en sistemas informaticos,
        empece con lo basico de HTML y CSS,
        </p>
            <img  class="img_about" src="../images/content/about_me_one.jpg" alt="lo que sea"/>
        <p>
        despues aprendi Javascript por 6 meses una vez que tenia conocimientos basicos de programacion,
        aprendi react por 8 meses haciendo proyectos con react, despues de hacer paginas sin backend,
        decidi aprender Nodejs por 6 meses con mongodb como base de datos,
        con esa experiencia cree un proyecto el cual es una replica de un ecommerce
        , con esa experiencia y ya sabiendo lo basico de Git,
        </p>
            <img class="img_about" src="../images/content/about_me_two.jpg"/>
        <p>
        hice un intership como desarrollador Backend con Nodejs por 6 meses para una empresa de Logistica,
        era el encargado de conectar el sistema de las empresas de transporte con el sistema
        de la empresa por medio de API's, aprendi mucho en mi intership y me encanto la experiencia
        , ahora estoy buscando un trabajo como desarrollador Fullstack con Javascript,
        </p>
            <img class="img_about" src="../images/content/otif.png"/>
        `
        list.innerHTML = `
        <p class="introduction" id="introduction">
        Cosas que aprendi en mi intership:
        </p>
        <li>Manejo de Apis Reales</li>
        <li>Trabajar en un proyecto en la nube de google cloud</li>
        <li>Manejo de Git</li>
        <li>Utilizar postman para pruevas</li>
        <li>Manejo de formatos XML</li>
        <li>Integraciones de sistemas de paqueterias</li>
        <li>Uso de librerias para nodejs</li>
        <li>Trabajo en equipo</li>
        `
        introduction.textContent = `Cosas que aprendi en mi intership:`
    } else if (lenguage === 'en') {
        titleAboutMe.textContent = 'About me';
        description.innerHTML = `
        <p>
        I'm a Fullstack developer with Javascript
        I started in the coding world in 2020,
        when I was 19 yeats old, I studied at the fes Cuautitlan,
        the degree of administration with specialization in computer systems,
        I started with the basic of HTML and CSS,
        </p>
        <img  class="img_about" src="../images/content/about_me_one.jpg" alt="lo que sea"/>
        <p>
        then I learned Javascript for 6 months once I had basic programming knowledge,
        I learn react for 8 months making projects with react, after making pages without backend,
        i decided to learn Nodejs for 6 months with mongodb as a database,
        witht that experience I created a project which is a replica of an ecommerce,
        with that experience and already knowing the basic of Git,
        </p>
        <img class="img_about" src="../images/content/about_me_two.jpg"/>
        <p>
        I did a intership as a Backend developer with Nodejs for 6 months for a logistics company,
        i was in charge of connecting the system of the companies about transport with the company's system
        through API's, I learned a lot in my intership and I loved the experience,
        now I'm looking for a job as a Fullstack developer with Javascript
        </p>
        <img class="img_about" src="../images/content/otif.png"/>
        `
        list.innerHTML = `
        <p class="introduction" id="introduction">
            Things I learned in my intership:
        </p>
        <li>managment of really API's</li>
        <li>Work in a project there in google cloud</li>
        <li>Git managment</li>
        <li>Use of postman for tests</li>
        <li>Managment of XML formats</li>
        <li>Integrations of shipping systems</li>
        <li>Use of libraries for nodejs</li>
        <li>Team work</li>
        `
    }
}
contentAboutMe(userLang);
