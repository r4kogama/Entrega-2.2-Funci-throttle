const objApi = {
    url: 'https://swapi.dev/api/',
    attribute: 'people/',
    param: 4
};
export const throttle = (callbackThrottle, delay) => {
    let throttleTimer = undefined;
    return (...args) => {
        if (throttleTimer !== undefined)
            return;
        throttleTimer = setTimeout(() => {
            throttleTimer = undefined;
        }, delay);
        return callbackThrottle(...args);
    };
};
const callbackApi = async () => {
    const container = document.querySelector('.wrapp');
    const positionScroll = Math.ceil(window.scrollY) - 1;
    if ((container === null || container === void 0 ? void 0 : container.scrollHeight) !== undefined) {
        const heightContainer = ((container === null || container === void 0 ? void 0 : container.scrollHeight) - window.innerHeight) - 287;
        console.log("posicion scroll: " + positionScroll);
        console.log("altura container: " + heightContainer);
        if (positionScroll > heightContainer) {
            try {
                const response = await fetch(objApi.url + objApi.attribute, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'omit',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                let results = data.results;
                return results;
            }
            catch (err) {
                console.error('Resquest error: ' + err);
            }
        }
    }
};
const eventThrottle = throttle(() => {
    return callbackApi().then((datas) => {
        if (datas !== undefined) {
            createPersonList(datas);
            return datas;
        }
    });
}, 500);
const createPersonList = (persons) => {
    const list = document.querySelector(".persons-list");
    if (list === null)
        return;
    let liNodes = '';
    for (const person of persons) {
        liNodes +=
            `<li class="info-person" >
          <span>${person.name}</span>
          <span>Gender: ${person.gender}</span>
          <span>Weight: ${person.mass}</span>
          <span>Height: ${person.height}</span>
          <span>Hair color: ${person.hair_color}</span>
          <span>Eye color: ${person.eye_color}</span>
          <span>Skin: ${person.skin_color}</span>
          <span>Birtday: ${person.birth_year}</span>
          <span>Homeworld: ${person.homeworld}</span>
          <span class="last-child">Url: ${person.url}</span>          
      </li>`;
    }
    list.innerHTML = liNodes;
};
const init = () => {
    window.addEventListener('scroll', eventThrottle);
};
window.addEventListener("load", init);
//# sourceMappingURL=index.js.map
