interface IInfo {
  next:string;
}

interface IResult {
  characters:string[];
}

interface IData {
  into:IInfo;
  results:IResult[];
}

const url = "https://rickandmortyapi.com/api/episode/";

let response = await fetch(url);
let data: IData = await response.json();

const episodes: IResult[] = data.results;

while(data.info.next){
  response = await fetch(data.info.next);
  data = await response.json();
  episodes.push(...data.results);
}

const characters: { [key:string] :number } = {};

episodes.forEach((ep) => {
  ep.characters.forEach((url) => {
    if(characters[url]) characters[url]++;
    else characters[url] = 1;
  });
});

const char: {
  url:string;
  num:number;
} = { url: "", num:0 };

Object.keys(characters).forEach((url:string) => {
  if(characters[url] > char.num){
    char.url = url;
    char.num = characters[url];
  }
});

response = await fetch(char.url);
const max = await response.json();
console.log(max);

console.log("done"); 
