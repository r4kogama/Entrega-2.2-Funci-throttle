
interface ApiUrl {
  url : string,
  attribute : string,
  param : number
}


const objApi: ApiUrl = { 
  url : 'https://swapi.dev/api/',
  attribute : 'people/',
  param : 4
}

type Person<T>  = {
"name": T,
"height": T,
"mass": T,
"hair_color": T,
"skin_color": T,
"eye_color": T,
"birth_year": T,
"gender": T,
"homeworld": T,
"films": T[],
"species": T[],
"vehicles": T[],
"starships": T[],
"created": T,
"edited": T,
"url": T
} 

type Args <T extends any[], E> = (...args : T) => E | undefined;

export const throttle = <T extends any[], E>(callbackThrottle: Args<T, E>, delay: number): Args <T, E>  => {
let throttleTimer: NodeJS.Timeout | undefined  = undefined;
  return (...args: T) => {
      if (throttleTimer !== undefined) return;
      throttleTimer = setTimeout(() => {
        throttleTimer = undefined;
      }, delay);
      console.log(...args);
      return callbackThrottle(...args);
    };
}




const callbackApi = async <T>(): Promise<Person<T>[] | undefined> =>{
  //fetch
  const container: HTMLElement | null = document.querySelector('.wrapp');
  const  positionScroll: number = Math.ceil(window.scrollY) -1;
  if(container?.scrollHeight !== undefined) {
    const heightContainer: number = (container?.scrollHeight  - window.innerHeight) - 287;
    console.log("posicion scroll: "+ positionScroll)
    console.log("altura container: "+heightContainer)
    if(positionScroll > heightContainer) {
      try{
        const response: Response = await fetch(objApi.url + objApi.attribute, {
          method: 'GET', 
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'omit', // include, *same-origin, omit
          headers:{
              'Content-Type': 'application/json',
          },
        })
        const data = await response.json();
        let results: Person<T>[] = data.results;
        return results;
      }catch(err){
        console.error('Resquest error: '+ err);
      }
    }
  }    
}

// addEventListener solo  puede manejar un argumento: es decir el evento
//eventThrottle se invoca cada vez que se dispara el evento de scroll
//resultado de llamar a scrollThrottle que contiene 2 argumentos una devolucion y el delay
const eventThrottle = throttle(() => {
  return callbackApi().then(<T>(datas: Person<T>[] | undefined) => {
    if(datas !== undefined ){
      createPersonList(datas);
      return datas;
    }
  })},500);
 

// create list of persons
const createPersonList = <T>(persons:  Person<T>[]): void => {
  const list = document.querySelector(".persons-list") as  HTMLUListElement | null;
  if(list === null )return;
  let liNodes = '' as string;
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

const init = (): void => {
  window.addEventListener('scroll', eventThrottle);
};

window.addEventListener("load", init);