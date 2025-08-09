class Movie{
  constructor(title, genre, image, desc){
    this.title = title;
    this.genre = genre;
    this.image = image;
    this.desc = desc;
  }
}

!async function(){ //step 1

  const url = 'https://imdb236.p.rapidapi.com/api/imdb/tt28821371';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '85a3293347msh341b57b0132f25ep100f98jsn6d6bf29d1206',
      'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  };

let data = await fetch(url, options)
.then((response) => response.json())
.catch((error) => console.error(error));

console.log(data); 

let image = data.primaryImage || "NOT RECIEVING IMAGE AHHHHH"; //step 3 create object
let desc = data.description || "null desc";
let title = data.primaryTitle || "null title";
let genre = data.genres || "null genre";

let newMovie = new Movie(title, genre, image, desc); 

document.getElementById('madsPoster').src = newMovie.image; //img tags have no innerHTML, they display whatever image file the src is linked to
document.getElementById('madsInfo').innerHTML = newMovie.desc;
document.getElementById('madsTitle').innerHTML = newMovie.title;
document.getElementById('madsGenre').innerHTML = newMovie.genre;

  console.log(newMovie);
}();



console.log("Welcome to Spoilt Milk")

const rem = "Remazani Malade Ngalwana";// this is a string
console.log(rem);

var genre = ["horror", "thriller", "psycological", "found-footage", "slasher"]; //array - list of things, split with commas, [use square brackets]
console.log(genre);
console.log(genre[0]);

var object = {//used for parts of things that are all part of the same thing, you want to access at different times
    name: "object",
    isUseful: true,
    parts: ["movie", "year", "genre"],
    pairs: 4,
}
console.log(object);
console.log(object.parts[0]);

//UPON ENTERING WEBSITE THERE NEEDS TO BE A BLOCK THAT ASKS FOR AGE, LIKE FOR DRUGS AND PORN

function getAge(){
    var age = document.getElementById('age').value;

    var ratings = ["13", "16", "18"]
    var rating = 18;

    if(age >= rating){
        console.log("yayy, you can access this website, thanks for not lying about your age");
    }if(rating > age && age >= 13){
        console.log("yayy, you can enter this website BUT you're a minor so your access will be limited");
    }if(age < 13){
        console.log("sorry, you can't enter this website, lie about your age next time");
    }

}

function search_sections() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    const list = document.getElementById('list');
    const items = list.getElementsByClassName('films');
  
    let anyVisible = false;
  
    for (let i = 0; i < items.length; i++) {
      const text = items[i].textContent.toLowerCase();
      if (text.includes(input) && input !== '') {
        items[i].style.display = 'block';
        anyVisible = true;
      } else {
        items[i].style.display = 'none';
      }
    }
  
    list.style.display = anyVisible ? 'block' : 'none';
  }


