var utility = require('./utility.js');
var exports = module.exports = {};

namesArray = [
  "Amelia",
  "Olivia",
  "Emily",
  "Isla",
  "Ava",
  "Jessica",
  "Ella",
  "Isabella",
  "Poppy",
  "Mia",
  "Sophie",
  "Sophia",
  "Lily",
  "Grace",
  "Evie",
  "Scarlett",
  "Ruby",
  "Chloe",
  "Daisy",
  "Isabelle",
  "Phoebe",
  "Florence",
  "Freya",
  "Alice",
  "Charlotte",
  "Sienna",
  "Matilda",
  "Evelyn",
  "Eva",
  "Millie",
  "Sofia",
  "Lucy",
  "Elsie",
  "Imogen",
  "Layla",
  "Rosie",
  "Maya",
  "Elizabeth",
  "Esme",
  "Willow",
  "Lola",
  "Ivy",
  "Holly",
  "Emilia",
  "Molly",
  "Erin",
  "Jasmine",
  "Eliza",
  "Ellie",
  "Abigail",
  "Lilly",
  "Eleanor",
  "Georgia",
  "Hannah",
  "Harriet",
  "Maisie",
  "Amber",
  "Emma",
  "Annabelle",
  "Bella",
  "Amelie",
  "Thea",
  "Harper",
  "Rose",
  "Gracie",
  "Summer",
  "Violet",
  "Martha",
  "Penelope",
  "Anna",
  "Zara",
  "Nancy",
  "Maria",
  "Maryam",
  "Darcie",
  "Darcey",
  "Heidi",
  "Megan",
  "Francesca",
  "Mila",
  "Lexi",
  "Bethany",
  "Julia",
  "Lacey",
  "Robyn",
  "Aisha",
  "Victoria",
  "Zoe",
  "Clara",
  "Sara",
  "Beatrice",
  "Darcy",
  "Leah",
  "Arabella",
  "Hollie",
  "Sarah",
  "Maddison",
  "Katie",
  "Eloise",
  "Oliver",
  "Jack",
  "George",
  "Charlie",
  "Jacob",
  "Thomas",
  "Noah",
  "William",
  "Oscar",
  "James",
  "Muhammad",
  "Henry",
  "Alfie",
  "Leo",
  "Joshua",
  "Freddie",
  "Ethan",
  "Archie",
  "Alexander",
  "Isaac",
  "Joseph",
  "Samuel",
  "Daniel",
  "Edward",
  "Logan",
  "Lucas",
  "Mohammed",
  "Max",
  "Benjamin",
  "Mason",
  "Harrison",
  "Theo",
  "Sebastian",
  "Arthur",
  "Jake",
  "Finley",
  "Adam",
  "Dylan",
  "Riley",
  "Zachary",
  "Teddy",
  "David",
  "Toby",
  "Theodore",
  "Matthew",
  "Elijah",
  "Jenson",
  "Harvey",
  "Jayden",
  "Michael",
  "Hugo",
  "Luca",
  "Reuben",
  "Lewis",
  "Harley",
  "Stanley",
  "Luke",
  "Frankie",
  "Tommy",
  "Jude",
  "Nathan",
  "Charles",
  "Louie",
  "Mohammad",
  "Gabriel",
  "Blake",
  "Bobby",
  "Albert",
  "Ryan",
  "Elliott",
  "Tyler",
  "Rory",
  "Elliot",
  "Frederick",
  "Alex",
  "Louis",
  "Liam",
  "Ollie",
  "Dexter",
  "Ronnie",
  "Jackson",
  "Callum",
  "Jaxon",
  "Leon",
  "Aaron",
  "Kai",
  "Roman",
  "Austin",
  "Reggie",
  "Jamie",
  "Seth",
  "Felix",
  "Ibrahim",
  "Ellis",
  "Carter",
  "Kian",
  "Sonny",
  "Connor",
  "Caleb",
  "Olivia",
  "Mia",
  "Charlotte",
  "Amelia",
  "Ava",
  "Emily",
  "Chloe",
  "Ruby",
  "Isabella",
  "Sophie",
  "Grace",
  "Ella",
  "Isla",
  "Sophia",
  "Zoe",
  "Sienna",
  "Ivy",
  "Evie",
  "Scarlett",
  "Emma",
  "Lily",
  "Matilda",
  "Hannah",
  "Harper",
  "Zara",
  "Georgia",
  "Lucy",
  "Layla",
  "Abigail",
  "Annabelle",
  "Evelyn",
  "Eva",
  "Isabelle",
  "Jasmine",
  "Willow",
  "Sofia",
  "Audrey",
  "Maddison",
  "Imogen",
  "Jessica",
  "Aria",
  "Mila",
  "Maya",
  "Sarah",
  "Savannah",
  "Alexis",
  "Alice",
  "Stella",
  "Violet",
  "Poppy",
  "Elizabeth",
  "Ellie",
  "Chelsea",
  "Summer",
  "Anna",
  "Claire",
  "Bella",
  "Madison",
  "Victoria",
  "Phoebe",
  "Eloise",
  "Lola",
  "Piper",
  "Indiana",
  "Addison",
  "Holly",
  "Alyssa",
  "Lilly",
  "Eden",
  "Lara",
  "Madeleine",
  "Rose",
  "Ariana",
  "Aaliyah",
  "Paige",
  "Isabel",
  "Lillian",
  "Alexandra",
  "Hayley",
  "Elise",
  "Emilia",
  "Eleanor",
  "Olive",
  "Molly",
  "Eliza",
  "Madeline",
  "Lexi",
  "Penelope",
  "Hazel",
  "Amelie",
  "Harriet",
  "Mackenzie",
  "Jade",
  "Natalie",
  "Elsie",
  "Ayla",
  "Charlie",
  "Indie",
  "Frankie",
  "Samantha",
  "Oliver",
  "William",
  "Noah",
  "Jack",
  "James",
  "Lucas",
  "Thomas",
  "Alexander",
  "Ethan",
  "Liam",
  "Max",
  "Jacob",
  "Cooper",
  "Isaac",
  "Lachlan",
  "Harrison",
  "Joshua",
  "Samuel",
  "Benjamin",
  "Mason",
  "Henry",
  "Charlie",
  "Ryan",
  "Jayden",
  "Daniel",
  "Oscar",
  "Harry",
  "Hunter",
  "Leo",
  "Xavier",
  "Elijah",
  "Sebastian",
  "Archie",
  "George",
  "Jackson",
  "Levi",
  "Logan",
  "Aiden",
  "Nicholas",
  "Flynn",
  "Riley",
  "Tyler",
  "Hugo",
  "Matthew",
  "Hudson",
  "Michael",
  "Edward",
  "Zachary",
  "Adam",
  "Joseph",
  "Patrick",
  "Dylan",
  "Nate",
  "Jake",
  "Jaxon",
  "Luke",
  "Kai",
  "Luca",
  "Archer",
  "Ashton",
  "Beau",
  "Jordan",
  "Eli",
  "Connor",
  "Marcus",
  "Ali",
  "Austin",
  "Finn",
  "Gabriel",
  "Lincoln",
  "Christian",
  "Jasper",
  "Nathan",
  "Blake",
  "Chase",
  "Braxton",
  "Louis",
  "Angus",
  "Dominic",
  "Muhammad",
  "Toby",
  "Hayden",
  "Caleb",
  "Bailey",
  "Hamish",
  "Felix",
  "Charles",
  "Anthony",
  "Owen",
  "Aaron",
  "Ryder",
  "David",
  "John",
  "Christopher",
  "Jesse",
  "Phoenix",
  "Darcy",
  "Jonathan",
  "Omar",
  "Maxwell",
  "Patrick",
  "George",
  "Andrew",
  "Robert",
  "Natasha",
  "Thomas",
  "Leon",
  "Elsa",
  "Alice",
  "Maja",
  "Agnes",
  "Lilly",
  "Olivia",
  "Julia",
  "Ebba",
  "Linnea",
  "Molly",
  "Ella",
  "Wilma",
  "Klara",
  "Stella",
  "Freja",
  "Alicia",
  "Alva",
  "Alma",
  "Isabelle",
  "Ellen",
  "Saga",
  "Ellie",
  "Astrid",
  "Emma",
  "Nellie",
  "Emilia",
  "Vera",
  "Signe",
  "Elvira",
  "Nova",
  "Selma",
  "Ester",
  "Leah",
  "Felicia",
  "Sara",
  "Sofia",
  "Elise",
  "Ines",
  "Tyra",
  "Amanda",
  "Elin",
  "Ida",
  "Moa",
  "Meja",
  "Isabella",
  "Tuva",
  "Nora",
  "Siri",
  "Matilda",
  "Sigrid",
  "Edith",
  "Lovisa",
  "Juni",
  "Liv",
  "Lova",
  "Hanna",
  "Tilde",
  "Iris",
  "Thea",
  "Emelie",
  "Melissa",
  "Cornelia",
  "Leia",
  "Ingrid",
  "Livia",
  "Jasmine",
  "Natalie",
  "Greta",
  "Stina",
  "Joline",
  "Filippa",
  "Emmy",
  "Svea",
  "Marta",
  "Tilda",
  "Hilda",
  "Majken",
  "Celine",
  "Ellinor",
  "Lykke",
  "Novalie",
  "Linn",
  "Tindra",
  "Liam",
  "Mira",
  "Rut",
  "Ronja",
  "Hilma",
  "Lisa",
  "Maria",
  "Elina",
  "Lovis",
  "Minna",
  "Hedda",
  "Amelia",
  "Sally",
  "Nicole",
  "Victoria",
  "Luna",
  "Anna",
  "William",
  "Lucas",
  "Liam",
  "Oscar",
  "Elias",
  "Hugo",
  "Oliver",
  "Charlie",
  "Axel",
  "Vincent",
  "Alexander",
  "Noah",
  "Leo",
  "Ludvig",
  "Adam",
  "Arvid",
  "Nils",
  "Elliot",
  "Filip",
  "Leon",
  "Melvin",
  "Viktor",
  "Valter",
  "Edvin",
  "Benjamin",
  "Isak",
  "Alfred",
  "Theo",
  "Emil",
  "Harry",
  "Olle",
  "Love",
  "Theodor",
  "Anton",
  "Sixten",
  "Erik",
  "Adrian",
  "Albin",
  "Gustav",
  "Melker",
  "Malte",
  "Ebbe",
  "Mohamed",
  "Gabriel",
  "Alvin",
  "Max",
  "August",
  "Josef",
  "Viggo",
  "Casper",
  "Colin",
  "Sam",
  "Noel",
  "Loke",
  "Loui",
  "Henry",
  "Wilmer",
  "Kevin",
  "Sigge",
  "Vidar",
  "Carl",
  "Jacob",
  "Frank",
  "Jonathan",
  "Matteo",
  "Milton",
  "Jack",
  "Milo",
  "Elton",
  "Felix",
  "Ville",
  "Simon",
  "Wilhelm",
  "Samuel",
  "Vilgot",
  "Julian",
  "Otto",
  "Sebastian",
  "John",
  "Elis",
  "Daniel",
  "Ivar",
  "Joel",
  "Tage",
  "David",
  "Aron",
  "Hjalmar",
  "Kian",
  "Rasmus",
  "Eddie",
  "Maximilian",
  "Algot",
  "Linus",
  "Alex",
  "Ali",
  "Edward",
  "Ture",
  "Elvin",
  "Folke",
  "Levi",
  "Sofia",
  "Maria",
  "Anna",
  "Anastasia",
  "Viktoria",
  "Elizabeta",
  "Polina",
  "Alisa",
  "Darya",
  "Aleksandra",
  "Varvara",
  "Ekaterina",
  "Ksenia",
  "Arina",
  "Veronika",
  "Vasilisa",
  "Valeria",
  "Milana",
  "Eva",
  "Ulyana",
  "Kira",
  "Vera",
  "Margarita",
  "Alyona",
  "Taisia",
  "Kristina",
  "Alina",
  "Olga",
  "Diana",
  "Yulia",
  "Aleksander",
  "Maxim",
  "Artem",
  "Mikhail",
  "Kirill",
  "Andrei",
  "Igor",
  "Ilya",
  "Timofei",
  "Alexei",
  "Matvei",
  "Nikita",
  "Vladimir",
  "Roman",
  "Mark",
  "Yaroslav",
  "Fyodor",
  "Sergei",
  "Lev",
  "Stepan",
  "Konstantin",
  "Vladislav",
  "Georgi",
  "Nikolai",
  "Gleb",
  "Timur",
  "Pavel"
]

exports.namesForLevel = function(melee,ranged,mage){
  meleeNames=[];
  rangeNames=[];
  mageNames=[];


  shuffledNames = utility.shuffle(namesArray);

  meleeNames = shuffledNames.slice(0,melee);
  rangeNames = shuffledNames.slice(melee+2,melee+2+ranged);
  mageNames =shuffledNames.slice(melee+2+ranged+3,melee+2+ranged+3+mage);

  return [meleeNames,rangeNames,mageNames]
}
