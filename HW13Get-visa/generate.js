const names = new Array(
    "Allen Adams", "Bob Bowen", "Carlton Conway",
    "David Darden", "Ernie Edwards", "Foster Flynn",
    "George Gilliam", "Howard Ingram", "Ian Gilliam",
    "Jeffery Holiday", "Kenneth Kraemer", "Lawrence Johnson",
    "Michael Hunter", "Nathen McDonald", "Orson Pierce",
    "Peter Nichols", "Quinten Schmidt", "Reginald Sawyer",
    "Stephen Saunders", "Thomas Schroeder", "Morris Smith",
    "Victor Douglas", "Walter Ward", "Xavier Watson",
    "Charles Ford", "Anthony Winters", "Gordon Yeager",
    "Percy Brown", "Conrad Clark", "Quincey Williams",
    "Armand Forman", "Jamal Dixon", "Leroy Jenkins",
    "Matthew Anderson", "Mark Blum", "Gerald Churchill",
    "Alice Churchill", "Bonnie Blum", "Cassie Anderson",
    "Donna Doctor", "Ethel", "Grace",
    "Heather", "Jan Jenkins", "Katherine Dixon",
    "Julie Forman", "Marisa Addams", "Patricia Forman",
    "Mabel Brown", "Jennifer Clark", "Dorthey Ford",
    "Mary Ellen", "Jacki Blu", "Jean Dixon",
    "Betty Watson", "Diane Winters", "Annette Yeager",
    "Dawn Saunders", "Jody Schroeder", "Karen Smith",
    "Mary Jane Watson", "Shannon Nichols", "Stephanie Mayer",
    "Kathleen Schmid", "Emily Sawyer", "Tiffany Holiday",
    "Angela Mercel", "Christine Black", "Debbie Miller",
    "Karla Jhons", "Sandy Conway", "Marilyn Darden",
    "Brenda Stark", "Hayley Bowen", "Linda Cooper"
);

const balance = new Array(2000, 2200, 2300,
    2450, 3200, 2500, 1200, 1700, 1000, 700);
const age = new Array(15, 17, 73, 20, 45, 32, 18, 59, 40, 38)


addListener("name-generate", 'click', randomName);
addListener("balance-generate", 'click', randomBalance);
addListener("age-generate", 'click', randomAge);
addListener("eng-generate", 'click', randomEngLevell);
addListener("doc-generate", 'click', randomDocument);
addListener("clearBtn", 'onclick', clearall);
// addListener("generateAllBtn", 'event', generateAll);


function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

function randomName() {
    let r = 0;
    r = Math.floor(Math.random() * names.length);
    document.getElementById("input-name").value = names[r];
}

function randomBalance() {
    let m = 0;
    m = Math.floor(Math.random() * balance.length);
    document.getElementById("input-balance").value = balance[m];
}

function randomAge() {
    let a = 0;
    a = Math.floor(Math.random() * age.length);
    document.getElementById("input-age").value = age[a];
}


function randomEngLevell() {
    let random = Math.floor(Math.random() * 100) + 1; // 1..100
    switch (true) {
        case random < 11:
            return document.getElementById("input-eng").value = ['B1'];
            break;  // 10%
        case random < 22:
            return document.getElementById("input-eng").value = ['B2'];
            break;// 10%
        case random < 33:
            return document.getElementById("input-eng").value = ['C1'];
            break; // 10%
        default:
            document.getElementById("input-eng").value = ['no'];

    }
}

function randomDocument() {
    let random = Math.floor(Math.random() * 100) + 1; // 1..100
    switch (true) {
        case random < 81:
            return document.getElementById("input-doc").value = ['passport', 'insurance', 'photo'];
            break;  // 80%
        case random < 95:
            return document.getElementById("input-doc").value = ['passport', 'photo'];
            break;
        case random < 98:
            return document.getElementById("input-doc").value = ['passport', 'insurance'];
            break;
        default:
            document.getElementById("input-doc").value = ['photo'];

    }
}

/*function generateAll () {
    randomName();
    randomBalance();
    randomAge();
    randomEngLevell();
    randomDocument()
}*/

function clearall() {
    document.getElementById("input-doc").value = '';
    document.getElementById("input-eng").value = '';
    document.getElementById("input-age").value = '';
    document.getElementById("input-balance").value = '';
    document.getElementById("input-name").value = '';
}

/*let nameInfo = document.getElementById("input-id").value;
console.log(nameInfo);*/
