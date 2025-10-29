// Global Variables
let itemsToGuess = [];
let remainingHints = 2;
let currentLevel = 1;
let currentItemIndex = 0;
let incorrectAttempts = 0;

// Function to shuffle items in random order
function shuffleItems(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate four random items for guessing
function getFourRandomItems() {
    const items = [
        
        
        //Animals & Nature
        
        { name: "dog face", emoji: "🐶" },
  { name: "cat face", emoji: "🐱" },
  { name: "mouse face", emoji: "🐭" },
  { name: "hamster face", emoji: "🐹" },
  { name: "rabbit face", emoji: "🐰" },
  { name: "fox face", emoji: "🦊" },
  { name: "bear face", emoji: "🐻" },
  { name: "panda face", emoji: "🐼" },
  { name: "polar bear face", emoji: "🐻‍❄" },
  { name: "koala face", emoji: "🐨" },
  { name: "tiger face", emoji: "🐯" },
  { name: "lion face", emoji: "🦁" },
  { name: "cow face", emoji: "🐮" },
  { name: "pig face", emoji: "🐷" },
  { name: "pig nose", emoji: "🐽" },
  { name: "frog face", emoji: "🐸" },
  { name: "monkey face", emoji: "🐵" },
  { name: "see no evil", emoji: "🙈" },
  { name: "hear no evil", emoji: "🙉" },
  { name: "speak no evil", emoji: "🙊" },
        
        { name: "monkey", emoji: "🐒" },
  { name: "chicken face", emoji: "🐔" },
  { name: "penguin", emoji: "🐧" },
  { name: "bird", emoji: "🐦" },
  { name: "baby chick", emoji: "🐤" },
  { name: "hatching chick", emoji: "🐣" },
  { name: "front-facing chick", emoji: "🐥" },
  { name: "goose", emoji: "🪿" },
  { name: "duck", emoji: "🦆" },
  { name: "black bird", emoji: "🐦‍⬛" },
  { name: "eagle", emoji: "🦅" },
  { name: "owl", emoji: "🦉" },
  { name: "bat", emoji: "🦇" },
  { name: "wolf face", emoji: "🐺" },
  { name: "boar face", emoji: "🐗" },
  { name: "horse face", emoji: "🐴" },
  { name: "unicorn face", emoji: "🦄" },
  { name: "moose face", emoji: "🫎" },
  { name: "bee", emoji: "🐝" },
  { name: "worm", emoji: "🪱" },
        
        { name: "caterpillar", emoji: "🐛" },
  { name: "butterfly", emoji: "🦋" },
  { name: "snail", emoji: "🐌" },
  { name: "lady beetle", emoji: "🐞" },
  { name: "ant", emoji: "🐜" },
  { name: "fly", emoji: "🪰" },
  { name: "beetle", emoji: "🪲" },
  { name: "cockroach", emoji: "🪳" },
  { name: "mosquito", emoji: "🦟" },
  { name: "cricket", emoji: "🦗" },
  { name: "spider", emoji: "🕷️" },
  { name: "spider web", emoji: "🕸️" },
  { name: "scorpion", emoji: "🦂" },
  { name: "turtle", emoji: "🐢" },
  { name: "snake", emoji: "🐍" },
  { name: "lizard", emoji: "🦎" },
  { name: "tyrannosaurus rex", emoji: "🦖" },
  { name: "sauropod", emoji: "🦕" },
  { name: "octopus", emoji: "🐙" },
  { name: "squid", emoji: "🦑" },
        
        { name: "jellyfish", emoji: "🪼" },
  { name: "shrimp", emoji: "🦐" },
  { name: "lobster", emoji: "🦞" },
  { name: "crab", emoji: "🦀" },
  { name: "blowfish", emoji: "🐡" },
  { name: "tropical fish", emoji: "🐠" },
  { name: "fish", emoji: "🐟" },
  { name: "dolphin", emoji: "🐬" },
  { name: "spouting whale", emoji: "🐳" },
  { name: "shark", emoji: "🦈" },
  { name: "seal", emoji: "🦭" },
  { name: "crocodile", emoji: "🐊" },
  { name: "tiger", emoji: "🐅" },
  { name: "leopard", emoji: "🐆" },
  { name: "zebra", emoji: "🦓" },
  { name: "gorilla", emoji: "🦍" },
  { name: "orangutan", emoji: "🦧" },
  { name: "mammoth", emoji: "🦣" },
  { name: "elephant", emoji: "🐘" },
        
        { name: "hippopotamus", emoji: "🦛" },
  { name: "rhinoceros", emoji: "🦏" },
  { name: "camel", emoji: "🐪" },
  { name: "two-hump camel", emoji: "🐫" },
  { name: "giraffe", emoji: "🦒" },
  { name: "kangaroo", emoji: "🦘" },
  { name: "bison", emoji: "🦬" },
  { name: "water buffalo", emoji: "🐃" },
  { name: "ox", emoji: "🐂" },
  { name: "cow", emoji: "🐄" },
  { name: "donkey", emoji: "🫏" },
  { name: "horse", emoji: "🐎" },
  { name: "pig", emoji: "🐖" },
  { name: "ram", emoji: "🐏" },
  { name: "sheep", emoji: "🐑" },
  { name: "llama", emoji: "🦙" },
  { name: "goat", emoji: "🐐" },
  { name: "deer", emoji: "🦌" },
  { name: "dog", emoji: "🐕" },
  { name: "poodle", emoji: "🐩" },
        
        { name: "guide dog", emoji: "🦮" },
  { name: "service dog", emoji: "🐕‍🦺" },
  { name: "cat", emoji: "🐈" },
  { name: "black cat", emoji: "🐈‍⬛" },
  { name: "feather", emoji: "🪶" },
  { name: "wing", emoji: "🪽" },
  { name: "rooster", emoji: "🐓" },
  { name: "turkey", emoji: "🦃" },
  { name: "dodo", emoji: "🦤" },
  { name: "peacock", emoji: "🦚" },
  { name: "parrot", emoji: "🦜" },
  { name: "swan", emoji: "🦢" },
  { name: "flamingo", emoji: "🦩" },
  { name: "dove", emoji: "🕊️" },
  { name: "rabbit", emoji: "🐇" },
  { name: "raccoon face", emoji: "🦝" },
  { name: "skunk", emoji: "🦨" },
  { name: "badger", emoji: "🦡" },
  { name: "beaver", emoji: "🦫" },
  { name: "otter", emoji: "🦦" },
        
        { name: "sloth", emoji: "🦥" },
  { name: "mouse", emoji: "🐁" },
  { name: "rat", emoji: "🐀" },
  { name: "chipmunk", emoji: "🐿️" },
  { name: "hedgehog", emoji: "🦔" },
  { name: "paw prints", emoji: "🐾" },
  { name: "dragon", emoji: "🐉" },
  { name: "dragon face", emoji: "🐲" },
  { name: "phoenix", emoji: "🐦‍🔥" },
  { name: "cactus", emoji: "🌵" },
  { name: "christmas tree", emoji: "🎄" },
  { name: "evergreen tree", emoji: "🌲" },
  { name: "deciduous tree", emoji: "🌳" },
  { name: "palm tree", emoji: "🌴" },
  { name: "wood", emoji: "🪵" },
  { name: "seedling", emoji: "🌱" },
  { name: "leafy branch", emoji: "🌿" },
  { name: "clover", emoji: "☘️" },
  { name: "four-leaf clover", emoji: "🍀" },
  { name: "pine decoration", emoji: "🎍" },
        
        { name: "plant", emoji: "🪴" },
  { name: "bamboo", emoji: "🎋" },
  { name: "herb", emoji: "🍃" },
  { name: "fallen leaf", emoji: "🍂" },
  { name: "maple leaf", emoji: "🍁" },
  { name: "nest with eggs", emoji: "🪺" },
  { name: "nesting bird", emoji: "🪹" },
  { name: "mushroom", emoji: "🍄" },
  { name: "brown mushroom", emoji: "🍄‍🟫" },
  { name: "shell", emoji: "🐚" },
  { name: "coral", emoji: "🪸" },
  { name: "rock", emoji: "🪨" },
  { name: "wheat", emoji: "🌾" },
  { name: "bouquet", emoji: "💐" },
  { name: "tulip", emoji: "🌷" },
  { name: "rose", emoji: "🌹" },
  { name: "wilted rose", emoji: "🥀" },
  { name: "bougainvillea", emoji: "🪻" },
  { name: "water lily", emoji: "🪷" },
  { name: "hibiscus", emoji: "🌺" },
        
        { name: "cherry blossom", emoji: "🌸" },
  { name: "blossom", emoji: "🌼" },
  { name: "sunflower", emoji: "🌻" },
  { name: "sun with face", emoji: "🌞" },
  { name: "full moon face", emoji: "🌝" },
  { name: "waning crescent moon", emoji: "🌛" },
  { name: "last quarter moon", emoji: "🌜" },
  { name: "waning gibbous moon", emoji: "🌚" },
  { name: "new moon", emoji: "🌑" },
  { name: "waxing crescent moon", emoji: "🌒" },
  { name: "first quarter moon", emoji: "🌓" },
  { name: "waxing gibbous moon", emoji: "🌔" },
  { name: "crescent moon", emoji: "🌙" },
  { name: "earth globe europe-africa", emoji: "🌍" },
  { name: "earth globe americas", emoji: "🌎" },
  { name: "earth globe asia-australia", emoji: "🌏" },
  { name: "globe with meridians", emoji: "🪐" },
  { name: "shooting star", emoji: "💫" },
  { name: "star", emoji: "⭐" },
  { name: "glowing star", emoji: "🌟" },
        
        { name: "sparkles", emoji: "✨" },
  { name: "high voltage", emoji: "⚡" },
  { name: "comet", emoji: "☄️" },
  { name: "collision", emoji: "💥" },
  { name: "fire", emoji: "🔥" },
  { name: "tornado", emoji: "🌪️" },
  { name: "rainbow", emoji: "🌈" },
  { name: "sun behind cloud", emoji: "☀️" },
  { name: "partly cloudy", emoji: "🌤️" },
  { name: "cloud with sun", emoji: "⛅" },
  { name: "sun behind large cloud", emoji: "🌥️" },
  { name: "cloud", emoji: "☁️" },
  { name: "cloud with rain", emoji: "🌦️" },
  { name: "cloud with lightning", emoji: "🌧️" },
  { name: "cloud with storm", emoji: "⛈️" },
  { name: "cloud with rain and lightning", emoji: "🌩️" },
  { name: "snowflake", emoji: "❄️" },
  { name: "snowman", emoji: "☃️" },
  { name: "snowman without snow", emoji: "⛄" },
  { name: "wind face", emoji: "🌬️" },
        
        { name: "dash", emoji: "💨" },
  { name: "droplet", emoji: "💧" },
  { name: "water wave", emoji: "🌊" },
  { name: "umbrella", emoji: "☂️" },
  { name: "umbrella with rain drops", emoji: "☔" },
  { name: "droplet of water", emoji: "🫧" },
  { name: "fog", emoji: "🌫️" },
  
        
        
        //Smileys & People
        
        { name: "grinning face", emoji: "😀" },
  { name: "smiling face", emoji: "😃" },
  { name: "beaming face", emoji: "😄" },
  { name: "grinning face with big eyes", emoji: "😁" },
  { name: "laughing face", emoji: "😆" },
  { name: "face holding back tears", emoji: "🥹" },
  { name: "grinning face with sweat", emoji: "😅" },
  { name: "face with tears of joy", emoji: "😂" },
  { name: "rolling on the floor laughing", emoji: "🤣" },
  { name: "smiling face with tear", emoji: "🥲" },
  { name: "smiling face with halo", emoji: "😇" },
  { name: "neutral face", emoji: "😐" },
  { name: "sleepy face", emoji: "😪" },
  { name: "money-mouth face", emoji: "🤑" },
  { name: "smiling devil", emoji: "😈" },
  { name: "angry devil", emoji: "👿" },
  { name: "alien", emoji: "👽" },
  { name: "ghost", emoji: "👻" },
  { name: "robot", emoji: "🤖" },
  { name: "pumpkin face", emoji: "🎃" },
        
        { name: "smiling cat face", emoji: "😺" },
  { name: "grinning cat face", emoji: "😸" },
  { name: "cat face with tears of joy", emoji: "😹" },
  { name: "smiling cat with heart eyes", emoji: "😻" },
  { name: "cat face with wry smile", emoji: "😼" },
  { name: "kissing cat face", emoji: "😽" },
  { name: "weary cat face", emoji: "🙀" },
  { name: "crying cat face", emoji: "😿" },
  { name: "pouting cat face", emoji: "😾" },
  { name: "heart hands", emoji: "🫶🏻" },
  { name: "open hands", emoji: "🤲🏻" },
  { name: "raising hands", emoji: "🙌🏻" },
  { name: "clapping hands", emoji: "👏🏻" },
  { name: "handshake", emoji: "🤝" },
  { name: "thumbs up", emoji: "👍🏻" },
  { name: "thumbs down", emoji: "👎🏻" },
  { name: "fist bump", emoji: "👊🏻" },
  { name: "raised fist", emoji: "✊🏻" },
  { name: "left-facing fist", emoji: "🤛🏻" },
  { name: "right-facing fist", emoji: "🤜🏻" },
        
        { name: "pinched fingers", emoji: "🤌🏻" },
  { name: "pinching hand", emoji: "🤏🏻" },
  { name: "backhand index pointing left", emoji: "👈🏻" },
  { name: "backhand index pointing right", emoji: "👉🏻" },
  { name: "backhand index pointing up", emoji: "👆🏻" },
  { name: "backhand index pointing down", emoji: "👇🏻" },
  { name: "index pointing up", emoji: "☝🏻" },
  { name: "raised hand", emoji: "✋🏻" },
  { name: "hand with fingers splayed", emoji: "🖐🏻" },
  { name: "vulcan salute", emoji: "🖖🏻" },
  { name: "waving hand", emoji: "👋🏻" },
  { name: "call me hand", emoji: "🤙🏻" },
  { name: "backhand index pointing up", emoji: "🤚🏻" },
  { name: "flexed biceps", emoji: "💪🏻" },
  { name: "prosthetic arm", emoji: "🦾" },
  { name: "writing hand", emoji: "✍🏻" },
  { name: "folded hands", emoji: "🙏🏻" },
  { name: "index pointing at viewer", emoji: "🫵🏻" },
  { name: "foot", emoji: "🦶🏻" },
  { name: "leg", emoji: "🦵🏻" },
        
        { name: "prosthetic leg", emoji: "🦿" },
  { name: "lipstick", emoji: "💄" },
  { name: "kiss mark", emoji: "💋" },
  { name: "mouth", emoji: "👄" },
  { name: "biting lip", emoji: "🫦" },
  { name: "tooth", emoji: "🦷" },
  { name: "tongue", emoji: "👅" },
  { name: "ear", emoji: "👂🏻" },
  { name: "ear with hearing aid", emoji: "🦻🏻" },
  { name: "nose", emoji: "👃🏻" },
  { name: "footprints", emoji: "👣" },
  { name: "eye", emoji: "👁️" },
  { name: "eyes", emoji: "👀" },
  { name: "anatomical heart", emoji: "🫀" },
  { name: "lungs", emoji: "🫁" },
  { name: "brain", emoji: "🧠" },
  { name: "speaking head", emoji: "🗣️" },
  { name: "silhouette of person", emoji: "👤" },
  { name: "silhouettes of people", emoji: "👥" },
  { name: "people hugging", emoji: "🫂" },
        
        { name: "baby", emoji: "👶🏻" },
  { name: "girl", emoji: "👧🏻" },
  { name: "child", emoji: "🧒🏻" },
  { name: "boy", emoji: "👦🏻" },
  { name: "woman", emoji: "👩🏻" },
  { name: "man", emoji: "👨🏻" },
  { name: "woman with curly hair", emoji: "👩🏻‍🦱" },
  { name: "man with curly hair", emoji: "👨🏻‍🦱" },
  { name: "woman with red hair", emoji: "👩🏻‍🦰" },
  { name: "man with red hair", emoji: "👨🏻‍🦰" },
  { name: "blonde woman", emoji: "👱🏻‍♀️" },
  { name: "blonde man", emoji: "👱🏻‍♂️" },
  { name: "woman with white hair", emoji: "👩🏻‍🦳" },
  { name: "man with white hair", emoji: "👨🏻‍🦳" },
  { name: "woman with bald head", emoji: "👩🏻‍🦲" },
  { name: "man with bald head", emoji: "👨🏻‍🦲" },
  { name: "bearded man", emoji: "🧔🏻‍♂" },
  { name: "older person", emoji: "🧓🏻" },
  { name: "older man", emoji: "👴🏻" },
  { name: "man with Chinese hat", emoji: "👲🏻" },
  { name: "woman wearing turban", emoji: "👳🏻‍♀️" },
  { name: "man wearing turban", emoji: "👳🏻‍♂️" },
  { name: "woman with headscarf", emoji: "🧕🏻" },
  { name: "female police officer", emoji: "👮🏻‍♀️" },
  { name: "police officer", emoji: "👮🏻" },
  { name: "male police officer", emoji: "👮🏻‍♂️" },
  { name: "female construction worker", emoji: "👷🏻‍♀️" },
  { name: "construction worker", emoji: "👷🏻" },
  { name: "male construction worker", emoji: "👷🏻‍♂️" },
  { name: "female guard", emoji: "💂🏻‍♀️" },
  { name: "male guard", emoji: "💂🏻‍♂️" },
        
        { name: "female detective", emoji: "🕵🏻‍♀️" },
  { name: "male detective", emoji: "🕵🏻‍♂️" },
  { name: "female doctor", emoji: "👩🏻‍⚕️" },
  { name: "male doctor", emoji: "👨🏻‍⚕️" },
  { name: "female farmer", emoji: "👩🏻‍🌾" },
  { name: "male farmer", emoji: "👨🏻‍🌾" },
  { name: "female cook", emoji: "👩🏻‍🍳" },
  { name: "male cook", emoji: "👨🏻‍🍳" },
  { name: "female graduate", emoji: "👩🏻‍🎓" },
  { name: "male graduate", emoji: "👨🏻‍🎓" },
  { name: "female singer", emoji: "👩🏻‍🎤" },
  { name: "male singer", emoji: "👨🏻‍🎤" },
  { name: "female teacher", emoji: "👩🏻‍🏫" },
        
        { name: "male teacher", emoji: "👨🏻‍🏫" },
  { name: "female factory worker", emoji: "👩🏻‍🏭" },
  { name: "male factory worker", emoji: "👨🏻‍🏭" },
  { name: "female technologist", emoji: "👩🏻‍💻" },
  { name: "male technologist", emoji: "👨🏻‍💻" },
  { name: "female office worker", emoji: "👩🏻‍💼" },
  { name: "male office worker", emoji: "👨🏻‍💼" },
  { name: "female mechanic", emoji: "👩🏻‍🔧" },
  { name: "male mechanic", emoji: "👨🏻‍🔧" },
  { name: "female scientist", emoji: "👩🏻‍🔬" },
  { name: "male scientist", emoji: "👨🏻‍🔬" },
  { name: "female artist", emoji: "👩🏻‍🎨" },
  { name: "male artist", emoji: "👨🏻‍🎨" },
        
        { name: "female firefighter", emoji: "👩🏻‍🚒" },
  { name: "male firefighter", emoji: "👨🏻‍🚒" },
  { name: "female pilot", emoji: "👩🏻‍✈️" },
  { name: "male pilot", emoji: "👨🏻‍✈️" },
  { name: "female astronaut", emoji: "👩🏻‍🚀" },
  { name: "male astronaut", emoji: "👨🏻‍🚀" },
  { name: "female judge", emoji: "👩🏻‍⚖️" },
  { name: "male judge", emoji: "👨🏻‍⚖️" },
  { name: "bride with veil", emoji: "👰🏻‍♀" },
  { name: "bride", emoji: "👰🏻" },
  { name: "groom", emoji: "🤵🏻‍♂" },
  { name: "princess", emoji: "👸🏻" },
  { name: "female ninja", emoji: "🥷🏻" },
        
        { name: "male superhero", emoji: "🦸🏻‍♂️" },
  { name: "female villain", emoji: "🦹🏻‍♀️" },
  { name: "male villain", emoji: "🦹🏻‍♂️" },
  { name: "female Santa", emoji: "🧑🏻‍🎄" },
  { name: "Santa", emoji: "🎅🏻" },
  { name: "female wizard", emoji: "🧙🏻‍♀️" },
  { name: "male wizard", emoji: "🧙🏻‍♂️" },
  { name: "female elf", emoji: "🧝🏻‍♀️" },
  { name: "male elf", emoji: "🧝🏻‍♂️" },
  { name: "female vampire", emoji: "🧛🏻‍♀️" },
  { name: "male vampire", emoji: "🧛🏻‍♂️" },
  { name: "female zombie", emoji: "🧟‍♀️" },
  { name: "male zombie", emoji: "🧟‍♂️" },
        
        { name: "raising hand", emoji: "🙋🏻" },
  { name: "deaf woman", emoji: "🧏🏻‍♀️" },
  { name: "deaf man", emoji: "🧏🏻" },
  { name: "facepalm woman", emoji: "🤦🏻‍♀️" },
  { name: "facepalm man", emoji: "🤦🏻‍♂️" },
  { name: "shrug woman", emoji: "🤷🏻‍♀️" },
  { name: "shrug man", emoji: "🤷🏻‍♂️" },
  { name: "pouting woman", emoji: "🙎🏻‍♀️" },
  { name: "pouting man", emoji: "🙎🏻‍♂️" },
  { name: "frowning woman", emoji: "🙍🏻‍♀️" },
  { name: "frowning man", emoji: "🙍🏻‍♂️" },
  { name: "woman haircut", emoji: "💇🏻‍♀️" },
  { name: "man haircut", emoji: "💇🏻‍♂️" },
  { name: "woman massage", emoji: "💆🏻‍♀️" },
  { name: "man massage", emoji: "💆🏻‍♂️" },
  { name: "woman sauna", emoji: "🧖🏻‍♀️" },
  { name: "man sauna", emoji: "🧖🏻‍♂️" },
  { name: "nail polish", emoji: "💅🏻" },
  { name: "selfie", emoji: "🤳🏻" },
  { name: "dancing woman", emoji: "💃🏻" },
  { name: "dancing man", emoji: "🕺🏻" },
  { name: "women with bunny ears", emoji: "👯🏻‍♀️" },
  { name: "men with bunny ears", emoji: "👯🏻‍♂️" },
  { name: "man in suit", emoji: "🕴🏻" },
  { name: "woman wheelchair", emoji: "👩🏻‍🦽" },
  { name: "man wheelchair", emoji: "👨🏻‍🦽" },
  { name: "woman motor wheelchair", emoji: "👩🏻‍🦼" },
  { name: "man motor wheelchair", emoji: "👨🏻‍🦼" },
  { name: "walking woman", emoji: "🚶🏻‍♀️" },
  { name: "walking man", emoji: "🚶🏻‍♂️" },
  { name: "woman cane", emoji: "👩🏻‍🦯" },
  { name: "man cane", emoji: "👨🏻‍🦯" },
  { name: "kneeling woman", emoji: "🧎🏻‍♀️" },
  { name: "kneeling man", emoji: "🧎🏻‍♂️" },
  { name: "running woman", emoji: "🏃🏻‍♀️" },
  { name: "running man", emoji: "🏃🏻‍♂️" },
  { name: "standing woman", emoji: "🧍🏻‍♀️" },
  { name: "standing man", emoji: "🧍🏻‍♂️" },
  { name: "couple with heart", emoji: "👩🏻‍❤️‍👨🏻" },
  { name: "couple kissing", emoji: "👩🏻‍❤️‍💋‍👨🏻" },
  { name: "knot", emoji: "🪢" },
  { name: "yarn", emoji: "🧶" },
  { name: "thread", emoji: "🧵" },
  { name: "needle", emoji: "🪡" },
  { name: "coat", emoji: "🧥" },
  { name: "lab coat", emoji: "🥼" },
  { name: "vest", emoji: "🦺" },
  { name: "blouse", emoji: "👚" },
  { name: "shirt", emoji: "👕" },
  { name: "pants", emoji: "👖" },
  { name: "briefs", emoji: "🩲" },
  { name: "shorts", emoji: "🩳" },
  { name: "tie", emoji: "👔" },
  { name: "dress", emoji: "👗" },
  { name: "bikini", emoji: "👙" },
  { name: "swimsuit", emoji: "🩱" },
  { name: "kimono", emoji: "👘" },
  { name: "sari", emoji: "🥻" },
  { name: "sandals", emoji: "🩴" },
  { name: "flat shoe", emoji: "🥿" },
  { name: "high heel", emoji: "👠" },
  { name: "open heel", emoji: "👡" },
  { name: "boots", emoji: "👢" },
  { name: "dress shoe", emoji: "👞" },
  { name: "sneakers", emoji: "👟" },
  { name: "hiking boot", emoji: "🥾" },
  { name: "socks", emoji: "🧦" },
  { name: "gloves", emoji: "🧤" },
  { name: "scarf", emoji: "🧣" },
  { name: "top hat", emoji: "🎩" },
  { name: "cap", emoji: "🧢" },
  { name: "woman hat", emoji: "👒" },
  { name: "graduate cap", emoji: "🎓" },
  { name: "helmet", emoji: "⛑️" },
  { name: "military helmet", emoji: "🪖" },
  { name: "crown", emoji: "👑" },
  { name: "ring", emoji: "💍" },
  { name: "pouch", emoji: "👝" },
  { name: "purse", emoji: "👛" },
  { name: "handbag", emoji: "👜" },
  { name: "briefcase", emoji: "💼" },
  { name: "backpack", emoji: "🎒" },
  { name: "luggage", emoji: "🧳" },
  { name: "glasses", emoji: "👓" },
  { name: "sunglasses", emoji: "🕶️" },
  { name: "goggles", emoji: "🥽" },
  { name: "umbrella", emoji: "🌂" },
        
        
        //Food & Drink
        
        { name: "green apple", emoji: "🍏" },
  { name: "red apple", emoji: "🍎" },
  { name: "pear", emoji: "🍐" },
  { name: "orange", emoji: "🍊" },
  { name: "lemon", emoji: "🍋" },
  { name: "banana", emoji: "🍌" },
  { name: "watermelon", emoji: "🍉" },
  { name: "grapes", emoji: "🍇" },
  { name: "strawberry", emoji: "🍓" },
  { name: "blueberry", emoji: "🫐" },
  { name: "melon", emoji: "🍈" },
  { name: "cherries", emoji: "🍒" },
  { name: "peach", emoji: "🍑" },
  { name: "mango", emoji: "🥭" },
  { name: "pineapple", emoji: "🍍" },
  { name: "coconut", emoji: "🥥" },
  { name: "kiwi", emoji: "🥝" },
  { name: "tomato", emoji: "🍅" },
  { name: "eggplant", emoji: "🍆" },
  { name: "avocado", emoji: "🥑" },
  { name: "peas", emoji: "🫛" },
  { name: "broccoli", emoji: "🥦" },
  { name: "lettuce", emoji: "🥬" },
  { name: "cucumber", emoji: "🥒" },
  { name: "hot pepper", emoji: "🌶️" },
  { name: "bell pepper", emoji: "🫑" },
  { name: "corn", emoji: "🌽" },
  { name: "carrot", emoji: "🥕" },
  { name: "olive", emoji: "🫒" },
  { name: "garlic", emoji: "🧄" },
  { name: "onion", emoji: "🧅" },
  { name: "potato", emoji: "🥔" },
  { name: "sweet potato", emoji: "🍠" },
  { name: "ginger", emoji: "🫚" },
  { name: "croissant", emoji: "🥐" },
  { name: "bagel", emoji: "🥯" },
  { name: "bread", emoji: "🍞" },
  { name: "baguette", emoji: "🥖" },
  { name: "pretzel", emoji: "🥨" },
  { name: "cheese", emoji: "🧀" },
  { name: "egg", emoji: "🥚" },
  { name: "fried egg", emoji: "🍳" },
  { name: "butter", emoji: "🧈" },
  { name: "pancakes", emoji: "🥞" },
  { name: "waffles", emoji: "🧇" },
  { name: "bacon", emoji: "🥓" },
  { name: "steak", emoji: "🥩" },
  { name: "poultry leg", emoji: "🍗" },
  { name: "meat on bone", emoji: "🍖" },
  { name: "bone", emoji: "🦴" },
  { name: "hot dog", emoji: "🌭" },
  { name: "burger", emoji: "🍔" },
  { name: "fries", emoji: "🍟" },
  { name: "pizza", emoji: "🍕" },
  { name: "flatbread", emoji: "🫓" },
  { name: "sandwich", emoji: "🥪" },
  { name: "stuffed flatbread", emoji: "🥙" },
  { name: "falafel", emoji: "🧆" },
  { name: "taco", emoji: "🌮" },
  { name: "burrito", emoji: "🌯" },
  { name: "tamale", emoji: "🫔" },
  { name: "salad", emoji: "🥗" },
  { name: "paella", emoji: "🥘" },
  { name: "fondue", emoji: "🫕" },
  { name: "canned food", emoji: "🥫" },
  { name: "jar", emoji: "🫙" },
  { name: "spaghetti", emoji: "🍝" },
  { name: "ramen", emoji: "🍜" },
  { name: "stew", emoji: "🍲" },
  { name: "curry", emoji: "🍛" },
  { name: "sushi", emoji: "🍣" },
  { name: "bento", emoji: "🍱" },
  { name: "dumpling", emoji: "🥟" },
  { name: "oyster", emoji: "🦪" },
  { name: "fried shrimp", emoji: "🍤" },
  { name: "rice ball", emoji: "🍙" },
  { name: "cooked rice", emoji: "🍚" },
  { name: "rice cracker", emoji: "🍘" },
  { name: "fish cake", emoji: "🍥" },
  { name: "fortune cookie", emoji: "🥠" },
  { name: "mooncake", emoji: "🥮" },
  { name: "oden", emoji: "🍢" },
  { name: "dango", emoji: "🍡" },
  { name: "shaved ice", emoji: "🍧" },
  { name: "ice cream", emoji: "🍨" },
  { name: "soft serve", emoji: "🍦" },
  { name: "pie", emoji: "🥧" },
  { name: "cupcake", emoji: "🧁" },
  { name: "cake", emoji: "🍰" },
  { name: "birthday cake", emoji: "🎂" },
  { name: "flan", emoji: "🍮" },
  { name: "lollipop", emoji: "🍭" },
  { name: "candy", emoji: "🍬" },
  { name: "chocolate", emoji: "🍫" },
  { name: "popcorn", emoji: "🍿" },
  { name: "doughnut", emoji: "🍩" },
  { name: "cookie", emoji: "🍪" },
  { name: "chestnut", emoji: "🌰" },
  { name: "peanut", emoji: "🥜" },
  { name: "beans", emoji: "🫘" },
  { name: "honey", emoji: "🍯" },
  { name: "milk", emoji: "🥛" },
  { name: "water", emoji: "🫗" },
  { name: "baby bottle", emoji: "🍼" },
  { name: "teapot", emoji: "🫖" },
  { name: "coffee", emoji: "☕" },
  { name: "tea", emoji: "🍵" },
  { name: "juice box", emoji: "🧃" },
  { name: "soda", emoji: "🥤" },
  { name: "bubble tea", emoji: "🧋" },
  { name: "sake", emoji: "🍶" },
  { name: "beer", emoji: "🍺" },
  { name: "cheers", emoji: "🍻" },
  { name: "wine", emoji: "🍷" },
  { name: "whiskey", emoji: "🥃" },
  { name: "cocktail", emoji: "🍸" },
  { name: "tropical drink", emoji: "🍹" },
  { name: "mate", emoji: "🧉" },
  { name: "champagne", emoji: "🍾" },
  { name: "ice", emoji: "🧊" },
  { name: "spoon", emoji: "🥄" },
  { name: "fork and knife", emoji: "🍴" },
  { name: "plate", emoji: "🍽️" },
  { name: "bowl", emoji: "🥣" },
  { name: "takeout box", emoji: "🥡" },
  { name: "chopsticks", emoji: "🥢" },
  { name: "salt", emoji: "🧂" },
        
        
        //Activity
        
        { name: "soccer ball", emoji: "⚽" },
  { name: "basketball", emoji: "🏀" },
  { name: "american football", emoji: "🏈" },
  { name: "baseball", emoji: "⚾" },
  { name: "softball", emoji: "🥎" },
  { name: "tennis ball", emoji: "🎾" },
  { name: "volleyball", emoji: "🏐" },
  { name: "rugby football", emoji: "🏉" },
  { name: "flying disc", emoji: "🥏" },
  { name: "pool 8 ball", emoji: "🎱" },
  { name: "yo-yo", emoji: "🪀" },
  { name: "ping pong", emoji: "🏓" },
  { name: "badminton", emoji: "🏸" },
  { name: "ice hockey", emoji: "🏒" },
  { name: "field hockey", emoji: "🏑" },
  { name: "lacrosse", emoji: "🥍" },
  { name: "cricket bat", emoji: "🏏" },
  { name: "boomerang", emoji: "🪃" },
  { name: "goal net", emoji: "🥅" },
  { name: "golf hole", emoji: "⛳" },
        
        { name: "kite", emoji: "🪁" },
  { name: "playground slide", emoji: "🛝" },
  { name: "bow and arrow", emoji: "🏹" },
  { name: "fishing pole", emoji: "🎣" },
  { name: "diving mask", emoji: "🤿" },
  { name: "boxing glove", emoji: "🥊" },
  { name: "karate uniform", emoji: "🥋" },
  { name: "running shirt", emoji: "🎽" },
  { name: "skateboard", emoji: "🛹" },
  { name: "roller skate", emoji: "🛼" },
  { name: "sled", emoji: "🛷" },
  { name: "ice skate", emoji: "⛸️" },
  { name: "curling stone", emoji: "🥌" },
  { name: "ski", emoji: "🎿" },
  { name: "skier", emoji: "⛷️" },
  { name: "snowboarder", emoji: "🏂" },
  { name: "parachute", emoji: "🪂" },
  { name: "female weightlifter", emoji: "🏋🏻‍♀️" },
  { name: "male weightlifter", emoji: "🏋🏻‍♂️" },
  { name: "female wrestler", emoji: "🤼‍♀️" },
        
        { name: "male wrestler", emoji: "🤼‍♂️" },
  { name: "female gymnast", emoji: "🤸🏻‍♀️" },
  { name: "male gymnast", emoji: "🤸🏻‍♂️" },
  { name: "female basketball player", emoji: "⛹🏻‍♀️" },
  { name: "male basketball player", emoji: "⛹🏻‍♂️" },
  { name: "fencer", emoji: "🤺" },
  { name: "female handball player", emoji: "🤾🏻‍♀️" },
  { name: "male handball player", emoji: "🤾🏻‍♂️" },
  { name: "female golfer", emoji: "🏌🏻‍♀️" },
  { name: "male golfer", emoji: "🏌🏻‍♂️" },
  { name: "horseback rider", emoji: "🏇🏻" },
  { name: "female meditating", emoji: "🧘🏻‍♀️" },
  { name: "male meditating", emoji: "🧘🏻‍♂️" },
  { name: "female surfer", emoji: "🏄🏻‍♀️" },
  { name: "male surfer", emoji: "🏄🏻‍♂️" },
  { name: "female swimmer", emoji: "🏊🏻‍♀️" },
  { name: "male swimmer", emoji: "🏊🏻‍♂️" },
  { name: "female water polo player", emoji: "🤽🏻‍♀️" },
  { name: "male water polo player", emoji: "🤽🏻‍♂️" },
  { name: "female rower", emoji: "🚣🏻‍♀️" },
        
        { name: "male rower", emoji: "🚣🏻‍♂️" },
  { name: "female climber", emoji: "🧗🏻‍♀️" },
  { name: "male climber", emoji: "🧗🏻‍♂️" },
  { name: "female cyclist", emoji: "🚵🏻‍♀️" },
  { name: "male cyclist", emoji: "🚵🏻‍♂️" },
  { name: "female biker", emoji: "🚴🏻‍♀️" },
  { name: "male biker", emoji: "🚴🏻‍♂️" },
  { name: "trophy", emoji: "🏆" },
  { name: "gold medal", emoji: "🥇" },
  { name: "silver medal", emoji: "🥈" },
  { name: "bronze medal", emoji: "🥉" },
  { name: "sports medal", emoji: "🏅" },
  { name: "military medal", emoji: "🎖️" },
  { name: "rosette", emoji: "🏵️" },
  { name: "reminder ribbon", emoji: "🎗️" },
  { name: "ticket", emoji: "🎫" },
  { name: "admission ticket", emoji: "🎟️" },
  { name: "circus tent", emoji: "🎪" },
  { name: "female juggling", emoji: "🤹🏻‍♀️" },
  { name: "male juggling", emoji: "🤹🏻‍♂️" },
        
        { name: "performing arts", emoji: "🎭" },
  { name: "ballet shoes", emoji: "🩰" },
  { name: "artist palette", emoji: "🎨" },
  { name: "clapper board", emoji: "🎬" },
  { name: "microphone", emoji: "🎤" },
  { name: "headphones", emoji: "🎧" },
  { name: "musical score", emoji: "🎼" },
  { name: "keyboard", emoji: "🎹" },
  { name: "shaker", emoji: "🪇" },
  { name: "drum", emoji: "🥁" },
  { name: "long drum", emoji: "🪘" },
  { name: "saxophone", emoji: "🎷" },
  { name: "trumpet", emoji: "🎺" },
  { name: "accordion", emoji: "🪗" },
  { name: "guitar", emoji: "🎸" },
  { name: "banjo", emoji: "🪕" },
  { name: "violin", emoji: "🎻" },
  { name: "flute", emoji: "🪈" },
  { name: "game die", emoji: "🎲" },
  { name: "chess pawn", emoji: "♟️" },
        
        { name: "bullseye", emoji: "🎯" },
  { name: "bowling", emoji: "🎳" },
  { name: "video game", emoji: "🎮" },
  { name: "slot machine", emoji: "🎰" },
  { name: "puzzle piece", emoji: "🧩" },
        
        
        //Travel & Places
        
        { name: "bus", emoji: "🚌" },
  { name: "race car", emoji: "🏎️" },
  { name: "ambulance", emoji: "🚑" },
  { name: "fire truck", emoji: "🚒" },
  { name: "minivan", emoji: "🚐" },
  { name: "pickup truck", emoji: "🛻" },
  { name: "delivery truck", emoji: "🚚" },
  { name: "tractor", emoji: "🚛" },
  { name: "green tractor", emoji: "🚜" },
  { name: "guide dog", emoji: "🦯" },
  { name: "manual wheelchair", emoji: "🦽" },
  { name: "motorized wheelchair", emoji: "🦼" },
  { name: "crutch", emoji: "🩼" },
  { name: "kick scooter", emoji: "🛴" },
  { name: "bicycle", emoji: "🚲" },
  { name: "motor scooter", emoji: "🛵" },
  { name: "motorcycle", emoji: "🏍️" },
  { name: "auto rickshaw", emoji: "🛺" },
  { name: "car tire", emoji: "🛞" },
  { name: "police car light", emoji: "🚨" },
  { name: "police car", emoji: "🚔" },
  { name: "bus stop", emoji: "🚍" },
  { name: "red car", emoji: "🚘" },
  { name: "yellow taxi", emoji: "🚖" },
  { name: "aerial tramway", emoji: "🚡" },
  { name: "mountain cableway", emoji: "🚠" },
  { name: "suspension railway", emoji: "🚟" },
  { name: "railway car", emoji: "🚋" },
  { name: "high-speed train", emoji: "🚅" },
  { name: "train", emoji: "🚂" },
  { name: "metro", emoji: "🚇" },
  { name: "train station", emoji: "🚉" },
  { name: "airplane", emoji: "✈️" },
  { name: "airplane departure", emoji: "🛫" },
  { name: "airplane arrival", emoji: "🛬" },
  { name: "small airplane", emoji: "🛩️" },
  { name: "seat", emoji: "💺" },
  { name: "satellite", emoji: "🛰️" },
  { name: "rocket", emoji: "🚀" },
  { name: "flying saucer", emoji: "🛸" },
  { name: "helicopter", emoji: "🚁" },
  { name: "canoe", emoji: "🛶" },
  { name: "sailboat", emoji: "⛵" },
  { name: "motorboat", emoji: "🚤" },
  { name: "ship", emoji: "🛳️" },
  { name: "ferry", emoji: "⛴️" },
  { name: "rescue boat", emoji: "🛟" },
  { name: "anchor", emoji: "⚓" },
  { name: "hook", emoji: "🪝" },
  { name: "fuel pump", emoji: "⛽" },
  { name: "construction", emoji: "🚧" },
  { name: "traffic light", emoji: "🚦" },
  { name: "bus stop", emoji: "🚏" },
  { name: "map", emoji: "🗺️" },
  { name: "moai", emoji: "🗿" },
  { name: "statue of liberty", emoji: "🗽" },
  { name: "tokyo tower", emoji: "🗼" },
  { name: "castle", emoji: "🏰" },
  { name: "shinto shrine", emoji: "🏯" },
  { name: "stadium", emoji: "🏟️" },
  { name: "ferris wheel", emoji: "🎡" },
  { name: "roller coaster", emoji: "🎢" },
  { name: "carousel", emoji: "🎠" },
  { name: "fountain", emoji: "⛲" },
  { name: "beach umbrella", emoji: "⛱️" },
  { name: "beach with umbrella", emoji: "🏖️" },
  { name: "island", emoji: "🏝️" },
  { name: "desert island", emoji: "🏜️" },
  { name: "volcano", emoji: "🌋" },
  { name: "mountain", emoji: "⛰️" },
  { name: "snow-capped mountain", emoji: "🏔️" },
  { name: "mountain", emoji: "🗻" },
  { name: "camping", emoji: "🏕️" },
  { name: "tent", emoji: "⛺" },
  { name: "house", emoji: "🏠" },
  { name: "derelict house", emoji: "🏚️" },
  { name: "construction", emoji: "🏗️" },
  { name: "factory", emoji: "🏭" },
  { name: "office building", emoji: "🏢" },
  { name: "department store", emoji: "🏬" },
  { name: "post office", emoji: "🏣" },
  { name: "hospital", emoji: "🏥" },
  { name: "bank", emoji: "🏦" },
  { name: "hotel", emoji: "🏨" },
  { name: "convenience store", emoji: "🏪" },
  { name: "school", emoji: "🏫" },
  { name: "love hotel", emoji: "🏩" },
  { name: "wedding", emoji: "💒" },
  { name: "building", emoji: "🏛️" },
  { name: "church", emoji: "⛪" },
  { name: "mosque", emoji: "🕌" },
  { name: "synagogue", emoji: "🕍" },
  { name: "hindu temple", emoji: "🛕" },
  { name: "kaaba", emoji: "🕋" },
  { name: "shinto shrine", emoji: "⛩️" },
  { name: "railroad track", emoji: "🛤️" },
  { name: "motorway", emoji: "🛣️" },
  { name: "map of japan", emoji: "🗾" },
  { name: "mountain", emoji: "🎑" },
  { name: "national park", emoji: "🏞️" },
  { name: "sunrise", emoji: "🌅" },
  { name: "sunset", emoji: "🌄" },
  { name: "fireworks", emoji: "🎆" },
  { name: "cityscape", emoji: "🌇" },
  { name: "city at dusk", emoji: "🌆" },
  { name: "city", emoji: "🏙️" },
  { name: "night with stars", emoji: "🌃" },
  { name: "milky way", emoji: "🌌" },
  { name: "bridge at night", emoji: "🌉" },
        
        
        //Objects
        
        { name: "watch", emoji: "⌚" },
  { name: "mobile phone", emoji: "📱" },
  { name: "mobile phone with arrow", emoji: "📲" },
  { name: "laptop", emoji: "💻" },
  { name: "keyboard", emoji: "⌨️" },
  { name: "desktop computer", emoji: "🖥️" },
  { name: "printer", emoji: "🖨️" },
  { name: "computer mouse", emoji: "🖱️" },
  { name: "trackball", emoji: "🖲️" },
  { name: "joystick", emoji: "🕹️" },
  { name: "clamp", emoji: "🗜️" },
  { name: "floppy disk", emoji: "💾" },
  { name: "DVD", emoji: "📀" },
  { name: "cassette tape", emoji: "📼" },
  { name: "camera", emoji: "📷" },
  { name: "camera with flash", emoji: "📸" },
  { name: "video camera", emoji: "📹" },
  { name: "movie camera", emoji: "🎥" },
  { name: "film projector", emoji: "📽️" },
        
        { name: "film frames", emoji: "🎞️" },
  { name: "telephone", emoji: "☎️" },
  { name: "pager", emoji: "📟" },
  { name: "fax machine", emoji: "📠" },
  { name: "television", emoji: "📺" },
  { name: "radio", emoji: "📻" },
  { name: "studio microphone", emoji: "🎙️" },
  { name: "level slider", emoji: "🎚️" },
  { name: "control knobs", emoji: "🎛️" },
  { name: "compass", emoji: "🧭" },
  { name: "stopwatch", emoji: "⏱️" },
  { name: "timer clock", emoji: "⏲️" },
  { name: "alarm clock", emoji: "⏰" },
  { name: "mantelpiece clock", emoji: "🕰️" },
  { name: "hourglass done", emoji: "⌛" },
  { name: "hourglass not done", emoji: "⏳" },
  { name: "satellite antenna", emoji: "📡" },
  { name: "battery", emoji: "🔋" },
  { name: "low battery", emoji: "🪫" },
        
        { name: "plug", emoji: "🔌" },
  { name: "light bulb", emoji: "💡" },
  { name: "flashlight", emoji: "🔦" },
  { name: "candle", emoji: "🕯️" },
  { name: "diya lamp", emoji: "🪔" },
  { name: "fire extinguisher", emoji: "🧯" },
  { name: "oil drum", emoji: "🛢️" },
  { name: "money with wings", emoji: "💸" },
  { name: "dollar banknote", emoji: "💵" },
  { name: "yen banknote", emoji: "💴" },
  { name: "euro banknote", emoji: "💶" },
  { name: "pound banknote", emoji: "💷" },
  { name: "coin", emoji: "🪙" },
  { name: "money bag", emoji: "💰" },
  { name: "credit card", emoji: "💳" },
  { name: "identification card", emoji: "🪪" },
  { name: "gem stone", emoji: "💎" },
  { name: "balance scale", emoji: "⚖️" },
  { name: "ladder", emoji: "🪜" },
  { name: "toolbox", emoji: "🧰" },
        
        { name: "screwdriver", emoji: "🪛" },
  { name: "wrench", emoji: "🔧" },
  { name: "hammer", emoji: "🔨" },
  { name: "hammer and pick", emoji: "⚒️" },
  { name: "hammer and wrench", emoji: "🛠️" },
  { name: "pick", emoji: "⛏️" },
  { name: "saw", emoji: "🪚" },
  { name: "bolt", emoji: "🔩" },
  { name: "gear", emoji: "⚙️" },
  { name: "mouse trap", emoji: "🪤" },
  { name: "bricks", emoji: "🧱" },
  { name: "chains", emoji: "⛓️" },
  { name: "explosion", emoji: "💥" },
  { name: "magnet", emoji: "🧲" },
  { name: "water gun", emoji: "🔫" },
  { name: "bomb", emoji: "💣" },
  { name: "firecracker", emoji: "🧨" },
  { name: "axe", emoji: "🪓" },
  { name: "kitchen knife", emoji: "🔪" },
  { name: "dagger", emoji: "🗡️" },
        
        { name: "crossed swords", emoji: "⚔️" },
  { name: "shield", emoji: "🛡️" },
  { name: "cigarette", emoji: "🚬" },
  { name: "coffin", emoji: "⚰️" },
  { name: "headstone", emoji: "🪦" },
  { name: "funeral urn", emoji: "⚱️" },
  { name: "amphora", emoji: "🏺" },
  { name: "crystal ball", emoji: "🔮" },
  { name: "prayer beads", emoji: "📿" },
  { name: "nazar amulet", emoji: "🧿" },
  { name: "hamsa", emoji: "🪬" },
  { name: "barber pole", emoji: "💈" },
  { name: "alembic", emoji: "⚗️" },
  { name: "telescope", emoji: "🔭" },
  { name: "microscope", emoji: "🔬" },
  { name: "hole", emoji: "🕳️" },
  { name: "x-ray", emoji: "🩻" },
  { name: "adhesive bandage", emoji: "🩹" },
  { name: "stethoscope", emoji: "🩺" },
  { name: "pill", emoji: "💊" },
        
        { name: "syringe", emoji: "💉" },
  { name: "drop of blood", emoji: "🩸" },
  { name: "dna strand", emoji: "🧬" },
  { name: "microbe", emoji: "🦠" },
  { name: "petri dish", emoji: "🧫" },
  { name: "test tube", emoji: "🧪" },
  { name: "thermometer", emoji: "🌡️" },
  { name: "broom", emoji: "🧹" },
  { name: "plunger", emoji: "🪠" },
  { name: "laundry basket", emoji: "🧺" },
  { name: "toilet paper", emoji: "🧻" },
  { name: "toilet", emoji: "🚽" },
  { name: "faucet", emoji: "🚰" },
  { name: "shower", emoji: "🚿" },
  { name: "bathtub", emoji: "🛁" },
  { name: "person taking a bath", emoji: "🛀🏻" },
  { name: "soap", emoji: "🧼" },
  { name: "toothbrush", emoji: "🪥" },
  { name: "razor", emoji: "🪒" },
        
        { name: "comb", emoji: "🪮" },
  { name: "sponge", emoji: "🧽" },
  { name: "bucket", emoji: "🪣" },
  { name: "lotion bottle", emoji: "🧴" },
  { name: "bell", emoji: "🛎️" },
  { name: "key", emoji: "🔑" },
  { name: "old key", emoji: "🗝️" },
  { name: "door", emoji: "🚪" },
  { name: "chair", emoji: "🪑" },
  { name: "couch and lamp", emoji: "🛋️" },
  { name: "bed", emoji: "🛏️" },
  { name: "person in bed", emoji: "🛌🏻" },
  { name: "teddy bear", emoji: "🧸" },
  { name: "nesting dolls", emoji: "🪆" },
  { name: "framed picture", emoji: "🖼️" },
  { name: "mirror", emoji: "🪞" },
  { name: "window", emoji: "🪟" },
  { name: "shopping bags", emoji: "🛍️" },
  { name: "shopping cart", emoji: "🛒" },
        
        { name: "gift box", emoji: "🎁" },
  { name: "balloon", emoji: "🎈" },
  { name: "carp streamer", emoji: "🎏" },
  { name: "ribbon", emoji: "🎀" },
  { name: "magic wand", emoji: "🪄" },
  { name: "piñata", emoji: "🪅" },
  { name: "confetti ball", emoji: "🎊" },
  { name: "party popper", emoji: "🎉" },
  { name: "Japanese dolls", emoji: "🎎" },
  { name: "folding fan", emoji: "🪭" },
  { name: "red lantern", emoji: "🏮" },
  { name: "wind chime", emoji: "🎐" },
  { name: "mirror ball", emoji: "🪩" },
  { name: "red envelope", emoji: "🧧" },
  { name: "envelope", emoji: "✉️" },
  { name: "incoming envelope", emoji: "📩" },
  { name: "envelope with arrow", emoji: "📨" },
  { name: "e-mail", emoji: "📧" },
  { name: "love letter", emoji: "💌" },
  { name: "inbox tray", emoji: "📥" },
        
        { name: "outbox tray", emoji: "📤" },
  { name: "package", emoji: "📦" },
  { name: "label", emoji: "🏷️" },
  { name: "placard", emoji: "🪧" },
  { name: "mailbox with no mail", emoji: "📪" },
  { name: "mailbox with mail", emoji: "📫" },
  { name: "closed mailbox with mail", emoji: "📬" },
  { name: "closed mailbox with no mail", emoji: "📭" },
  { name: "postbox", emoji: "📮" },
  { name: "postal horn", emoji: "📯" },
  { name: "scroll", emoji: "📜" },
  { name: "page with curl", emoji: "📃" },
  { name: "page facing up", emoji: "📄" },
  { name: "bookmark tabs", emoji: "📑" },
  { name: "receipt", emoji: "🧾" },
  { name: "bar chart", emoji: "📊" },
  { name: "chart increasing", emoji: "📈" },
  { name: "chart decreasing", emoji: "📉" },
  { name: "spiral notepad", emoji: "🗒️" },
  { name: "spiral calendar", emoji: "🗓️" },
        
        { name: "calendar", emoji: "📆" },
  { name: "tear-off calendar", emoji: "📅" },
  { name: "wastebasket", emoji: "🗑️" },
  { name: "card index", emoji: "📇" },
  { name: "card file box", emoji: "🗃️" },
  { name: "ballot box with ballot", emoji: "🗳️" },
  { name: "file cabinet", emoji: "🗄️" },
  { name: "clipboard", emoji: "📋" },
  { name: "file folder", emoji: "📁" },
  { name: "open file folder", emoji: "📂" },
  { name: "card index dividers", emoji: "🗂️" },
  { name: "rolled-up newspaper", emoji: "🗞️" },
  { name: "newspaper", emoji: "📰" },
  { name: "notebook", emoji: "📓" },
  { name: "notebook with decorative cover", emoji: "📔" },
  { name: "ledger", emoji: "📒" },
  { name: "red book", emoji: "📕" },
  { name: "green book", emoji: "📗" },
  { name: "blue book", emoji: "📘" },
  { name: "orange book", emoji: "📙" },
        
        { name: "stack of books", emoji: "📚" },
  { name: "open book", emoji: "📖" },
  { name: "bookmark", emoji: "🔖" },
  { name: "link", emoji: "🧷" },
  { name: "chains", emoji: "🔗" },
  { name: "paperclip", emoji: "📎" },
  { name: "linked paperclips", emoji: "🖇️" },
  { name: "triangular ruler", emoji: "📐" },
  { name: "straight ruler", emoji: "📏" },
  { name: "abacus", emoji: "🧮" },
  { name: "pushpin", emoji: "📌" },
  { name: "round pushpin", emoji: "📍" },
  { name: "scissors", emoji: "✂️" },
  { name: "pen", emoji: "🖊️" },
  { name: "fountain pen", emoji: "🖋️" },
  { name: "black nib", emoji: "✒️" },
  { name: "paintbrush", emoji: "🖌️" },
  { name: "crayon", emoji: "🖍️" },
  { name: "pencil", emoji: "✏️" },
  { name: "magnifying glass tilted left", emoji: "🔍" },
        
        { name: "magnifying glass tilted right", emoji: "🔎" },
  { name: "locked", emoji: "🔏" },
  { name: "unlocked", emoji: "🔐" },
  { name: "lock", emoji: "🔒" },
  { name: "open lock", emoji: "🔓" },
        
        
        //symbols
        
        { name: "pink heart", emoji: "🩷" },
  { name: "red heart", emoji: "❤️" },
  { name: "orange heart", emoji: "🧡" },
  { name: "yellow heart", emoji: "💛" },
  { name: "green heart", emoji: "💚" },
  { name: "light blue heart", emoji: "🩵" },
  { name: "dark blue heart", emoji: "💙" },
  { name: "purple heart", emoji: "💜" },
  { name: "black heart", emoji: "🖤" },
  { name: "gray heart", emoji: "🩶" },
  { name: "white heart", emoji: "🤍" },
  { name: "brown heart", emoji: "🤎" },
  { name: "broken heart", emoji: "💔" },
  { name: "fire heart", emoji: "❤‍🔥" },
  { name: "bandaged heart", emoji: "❤‍🩹" },
  { name: "heart with exclamation", emoji: "❣️" },
  { name: "two hearts", emoji: "💕" },
  { name: "revolving hearts", emoji: "💞" },
  { name: "heartbeat", emoji: "💓" },
  { name: "growing heart", emoji: "💗" },
  { name: "sparkling heart", emoji: "💖" },
  { name: "heart with arrow", emoji: "💘" },
  { name: "heart with ribbon", emoji: "💝" },
  { name: "heart decoration", emoji: "💟" },
  { name: "peace symbol", emoji: "☮️" },
  { name: "star and crescent", emoji: "☪️" },
  { name: "yinyang", emoji: "☯️" },
  { name: "id", emoji: "🆔" },
  { name: "atom symbol", emoji: "⚛️" },
  { name: "radioactive", emoji: "☢️" },
  { name: "biohazard", emoji: "☣️" },
  { name: "no mobile", emoji: "📴" },
  { name: "vibration mode", emoji: "📳" },
  { name: "versus", emoji: "🆚" },
  { name: "A button", emoji: "🅰️" },
  { name: "B button", emoji: "🅱️" },
  { name: "AB button", emoji: "🆎" },
  { name: "CL button", emoji: "🆑" },
  { name: "O button", emoji: "🅾️" },
  { name: "save our souls symbol", emoji: "🆘" },
  { name: "cross mark", emoji: "❌" },
  { name: "circle", emoji: "⭕" },
  { name: "stop sign", emoji: "🛑" },
  { name: "no entry", emoji: "⛔" },
  { name: "prohibited", emoji: "📛" },
  { name: "no symbol", emoji: "🚫" },
  { name: "100", emoji: "💯" },
  { name: "anger symbol", emoji: "💢" },
  { name: "hot springs", emoji: "♨️" },
  { name: "no pedestrians", emoji: "🚷" },
  { name: "no smoking", emoji: "🚭" },
  { name: "exclamation mark", emoji: "❗" },
  { name: "question mark", emoji: "❓" },
  { name: "exclamation question mark", emoji: "⁉️" },
  { name: "black small square", emoji: "🔅" },
  { name: "high brightness", emoji: "🔆" },
  { name: "part alternation mark", emoji: "〽️" },
  { name: "warning sign", emoji: "⚠️" },
  { name: "children crossing", emoji: "🚸" },
  { name: "trident emblem", emoji: "🔱" },
  { name: "fleur-de-lis", emoji: "⚜️" },
  { name: "beginner's luck", emoji: "🔰" },
  { name: "recycle symbol", emoji: "♻️" },
  { name: "check mark", emoji: "✅" },
  { name: "chart increasing", emoji: "💹" },
  { name: "sparkle", emoji: "❇️" },
  { name: "eight-point star", emoji: "✳️" },
  { name: "negative squared cross mark", emoji: "❎" },
  { name: "blue globe with meridians", emoji: "🌐" },
  { name: "diamond shape with a dot inside", emoji: "💠" },
  { name: "circled M", emoji: "Ⓜ️" },
  { name: "cyclone", emoji: "🌀" },
  { name: "zzz", emoji: "💤" },
  { name: "ATM sign", emoji: "🏧" },
  { name: "restroom", emoji: "🚾" },
  { name: "wheelchair", emoji: "♿" },
  { name: "parking", emoji: "🅿️" },
  { name: "elevator", emoji: "🛗" },
  { name: "passport control", emoji: "🛂" },
  { name: "customs", emoji: "🛃" },
  { name: "baggage claim", emoji: "🛄" },
  { name: "left luggage", emoji: "🛅" },
  { name: "railway track", emoji: "🛜" },
  { name: "man symbol", emoji: "🚹" },
  { name: "woman symbol", emoji: "🚺" },
  { name: "baby symbol", emoji: "🚼" },
  { name: "family", emoji: "🧑‍🧑‍🧒" },
  { name: "woman and child", emoji: "🧑‍🧒" },
  { name: "restroom sign", emoji: "🚻" },
  { name: "no littering", emoji: "🚮" },
  { name: "television", emoji: "🎦" },
  { name: "signal strength", emoji: "📶" },
  { name: "input symbol", emoji: "🔣" },
  { name: "information", emoji: "ℹ️" },
  { name: "alphabet", emoji: "🔤" },
  { name: "lowercase letters", emoji: "🔡" },
  { name: "uppercase letters", emoji: "🔠" },
  { name: "NG button", emoji: "🆖" },
        
        { name: "Okay button", emoji: "🆗" },
  { name: "UP button", emoji: "🆙" },
  { name: "cool button", emoji: "🆒" },
  { name: "new button", emoji: "🆕" },
  { name: "free button", emoji: "🆓" },
  { name: "zero", emoji: "0️⃣" },
  { name: "one", emoji: "1️⃣" },
  { name: "two", emoji: "2️⃣" },
  { name: "three", emoji: "3️⃣" },
  { name: "four", emoji: "4️⃣" },
  { name: "five", emoji: "5️⃣" },
  { name: "six", emoji: "6️⃣" },
  { name: "seven", emoji: "7️⃣" },
  { name: "eight", emoji: "8️⃣" },
  { name: "nine", emoji: "9️⃣" },
  { name: "ten", emoji: "🔟" },
  { name: "input numbers", emoji: "🔢" },
  { name: "hashtag", emoji: "#️⃣" },
  { name: "asterisk", emoji: "*️⃣" },
  { name: "eject button", emoji: "⏏️" },
  { name: "play button", emoji: "▶️" },
  { name: "pause button", emoji: "⏸️" },
  { name: "play pause button", emoji: "⏯️" },
  { name: "stop button", emoji: "⏹️" },
  { name: "record button", emoji: "⏺️" },
  { name: "next track", emoji: "⏭️" },
  { name: "previous track", emoji: "⏮️" },
  { name: "fast forward", emoji: "⏩" },
  { name: "rewind", emoji: "⏪" },
  { name: "upwards button", emoji: "⏫" },
  { name: "downwards button", emoji: "⏬" },
  { name: "leftwards button", emoji: "◀️" },
  { name: "upwards arrow", emoji: "🔼" },
  { name: "downwards arrow", emoji: "🔽" },
  { name: "rightwards arrow", emoji: "➡️" },
  { name: "leftwards arrow", emoji: "⬅️" },
  { name: "upwards arrow", emoji: "⬆️" },
  { name: "downwards arrow", emoji: "⬇️" },
  { name: "north east arrow", emoji: "↗️" },
  { name: "south east arrow", emoji: "↘️" },
  { name: "south west arrow", emoji: "↙️" },
  { name: "north west arrow", emoji: "↖️" },
  { name: "up and down arrow", emoji: "↕️" },
  { name: "left right arrow", emoji: "↔️" },
  { name: "rightwards arrow with hook", emoji: "↪️" },
  { name: "leftwards arrow with hook", emoji: "↩️" },
  { name: "turn right arrow", emoji: "⤴️" },
  { name: "turn left arrow", emoji: "⤵️" },
  { name: "shuffle tracks", emoji: "🔀" },
  { name: "repeat button", emoji: "🔁" },
  { name: "musical note", emoji: "🎵" },
  { name: "musical notes", emoji: "🎶" },
  { name: "plus sign", emoji: "➕" },
  { name: "minus sign", emoji: "➖" },
  { name: "divide sign", emoji: "➗" },
  { name: "multiply sign", emoji: "✖️" },
  { name: "equal sign", emoji: "🟰" },
  { name: "infinity", emoji: "♾️" },
  { name: "dollar sign", emoji: "💲" },
  { name: "currency exchange", emoji: "💱" },
  { name: "trademark", emoji: "™️" },
  { name: "copyright", emoji: "©️" },
  { name: "registered trademark", emoji: "®️" },
  { name: "eye in speech bubble", emoji: "👁️‍🗨️" },
  { name: "backwards button", emoji: "🔚" },
  { name: "reverse button", emoji: "🔙" },
  { name: "leftwards button", emoji: "🔛" },
  { name: "top button", emoji: "🔝" },
  { name: "rightwards button", emoji: "🔜" },
  { name: "wavy dash", emoji: "〰️" },
  { name: "curly loop", emoji: "➰" },
  { name: "part of the loop", emoji: "➿" },
  { name: "black check mark", emoji: "✔️" },
  { name: "ballot box with check", emoji: "☑️" },
  { name: "circle with dot", emoji: "🔘" },
  { name: "red circle", emoji: "🔴" },
  { name: "orange circle", emoji: "🟠" },
  { name: "yellow circle", emoji: "🟡" },
  { name: "green circle", emoji: "🟢" },
  { name: "blue circle", emoji: "🔵" },
  { name: "purple circle", emoji: "🟣" },
  { name: "black circle", emoji: "⚫" },
  { name: "white circle", emoji: "⚪" },
  { name: "brown circle", emoji: "🟤" },
  { name: "red triangle", emoji: "🔺" },
  { name: "downwards triangle", emoji: "🔻" },
  { name: "diamond", emoji: "🔸" },
  { name: "small diamond", emoji: "🔹" },
  { name: "large diamond", emoji: "🔶" },
  { name: "blue diamond", emoji: "🔷" },
  { name: "white square", emoji: "🔳" },
  { name: "black square", emoji: "🔲" },
        
        { name: "black small square", emoji: "▪️" },
  { name: "white small square", emoji: "▫️" },
  { name: "black medium square", emoji: "◾" },
  { name: "white medium square", emoji: "◽" },
  { name: "black large square", emoji: "◼️" },
  { name: "white large square", emoji: "◻️" },
  { name: "red square", emoji: "🟥" },
  { name: "orange square", emoji: "🟧" },
  { name: "yellow square", emoji: "🟨" },
  { name: "green square", emoji: "🟩" },
  { name: "blue square", emoji: "🟦" },
  { name: "purple square", emoji: "🟪" },
  { name: "black square button", emoji: "⬛" },
  { name: "white square button", emoji: "⬜" },
  { name: "brown square", emoji: "🟫" },
  { name: "speaker with sound", emoji: "🔈" },
  { name: "muted speaker", emoji: "🔇" },
  { name: "speaker with low volume", emoji: "🔉" },
  { name: "speaker with high volume", emoji: "🔊" },
  { name: "bell", emoji: "🔔" },
  { name: "no bell", emoji: "🔕" },
  { name: "megaphone", emoji: "📣" },
  { name: "loudspeaker", emoji: "📢" },
  { name: "speech balloon", emoji: "💬" },
  { name: "thought balloon", emoji: "💭" },
  { name: "anger symbol", emoji: "🗯️" },
  { name: "spade", emoji: "♠️" },
  { name: "club", emoji: "♣️" },
  { name: "heart", emoji: "♥️" },
  { name: "diamond", emoji: "♦️" },
  { name: "joker", emoji: "🃏" },
  { name: "flower card", emoji: "🎴" },
  { name: "one o'clock", emoji: "🕐" },
  { name: "two o'clock", emoji: "🕑" },
  { name: "three o'clock", emoji: "🕒" },
  { name: "four o'clock", emoji: "🕓" },
  { name: "five o'clock", emoji: "🕔" },
  { name: "six o'clock", emoji: "🕕" },
  { name: "seven o'clock", emoji: "🕖" },
  { name: "eight o'clock", emoji: "🕗" },
  { name: "nine o'clock", emoji: "🕘" },
  { name: "ten o'clock", emoji: "🕙" },
  { name: "eleven o'clock", emoji: "🕚" },
  { name: "twelve o'clock", emoji: "🕛" },
  { name: "one thirty", emoji: "🕜" },
  { name: "two thirty", emoji: "🕝" },
  { name: "three thirty", emoji: "🕞" },
  { name: "four thirty", emoji: "🕟" },
  { name: "five thirty", emoji: "🕠" },
  { name: "six thirty", emoji: "🕡" },
  { name: "seven thirty", emoji: "🕢" },
  { name: "eight thirty", emoji: "🕣" },
  { name: "nine thirty", emoji: "🕤" },
  { name: "ten thirty", emoji: "🕥" },
  { name: "eleven thirty", emoji: "🕦" },
  { name: "twelve thirty", emoji: "🕧" },
        
        //Flags
        
        { name: "white flag", emoji: "🏳️" },
  { name: "black flag", emoji: "🏴" },
  { name: "pirate flag", emoji: "🏴‍☠️" },
  { name: "checkered flag", emoji: "🏁" },
  { name: "red flag", emoji: "🚩" },
  { name: "flag of Mauritania ♥️", emoji: "🇲🇷" },
  { name: "United Nations flag", emoji: "🇺🇳" },
  { name: "flag of Afghanistan", emoji: "🇦🇫" },
  { name: "flag of Åland Islands", emoji: "🇦🇽" },
  { name: "flag of Albania", emoji: "🇦🇱" },
  { name: "flag of Algeria", emoji: "🇩🇿" },
  { name: "flag of American Samoa", emoji: "🇦🇸" },
  { name: "flag of Andorra", emoji: "🇦🇩" },
  { name: "flag of Angola", emoji: "🇦🇴" },
  { name: "flag of Anguilla", emoji: "🇦🇮" },
  { name: "flag of Antarctica", emoji: "🇦🇶" },
  { name: "flag of Antigua and Barbuda", emoji: "🇦🇬" },
        
        { name: "flag of Argentina", emoji: "🇦🇷" },
  { name: "flag of Armenia", emoji: "🇦🇲" },
  { name: "flag of Aruba", emoji: "🇦🇼" },
  { name: "flag of Australia", emoji: "🇦🇺" },
  { name: "flag of Austria", emoji: "🇦🇹" },
  { name: "flag of Azerbaijan", emoji: "🇦🇿" },
  { name: "flag of Bahamas", emoji: "🇧🇸" },
  { name: "flag of Bahrain", emoji: "🇧🇭" },
  { name: "flag of Bangladesh", emoji: "🇧🇩" },
  { name: "flag of Barbados", emoji: "🇧🇧" },
  { name: "flag of Belarus", emoji: "🇧🇾" },
  { name: "flag of Belgium", emoji: "🇧🇪" },
  { name: "flag of Belize", emoji: "🇧🇿" },
  { name: "flag of Benin", emoji: "🇧🇯" },
  { name: "flag of Bermuda", emoji: "🇧🇲" },
  { name: "flag of Bhutan", emoji: "🇧🇹" },
  { name: "flag of Bolivia", emoji: "🇧🇴" },
  { name: "flag of Bosnia and Herzegovina", emoji: "🇧🇦" },
  { name: "flag of Botswana", emoji: "🇧🇼" },
  { name: "flag of Brazil", emoji: "🇧🇷" },
        
        { name: "flag of British Virgin Islands", emoji: "🇻🇬" },
  { name: "flag of Brunei", emoji: "🇧🇳" },
  { name: "flag of Bulgaria", emoji: "🇧🇬" },
  { name: "flag of Burkina Faso", emoji: "🇧🇫" },
  { name: "flag of Burundi", emoji: "🇧🇮" },
  { name: "flag of Cambodia", emoji: "🇰🇭" },
  { name: "flag of Cameroon", emoji: "🇨🇲" },
  { name: "flag of Canada", emoji: "🇨🇦" },
  { name: "flag of Canary Islands", emoji: "🇮🇨" },
  { name: "flag of Cape Verde", emoji: "🇨🇻" },
  { name: "flag of Caribbean Netherlands", emoji: "🇧🇶" },
  { name: "flag of Cayman Islands", emoji: "🇰🇾" },
  { name: "flag of Central African Republic", emoji: "🇨🇫" },
  { name: "flag of Chad", emoji: "🇹🇩" },
  { name: "flag of Chile", emoji: "🇨🇱" },
  { name: "flag of China", emoji: "🇨🇳" },
  { name: "flag of Christmas Island", emoji: "🇨🇽" },
  { name: "flag of Cocos Islands", emoji: "🇨🇨" },
  { name: "flag of Colombia", emoji: "🇨🇴" },
  { name: "flag of Comoros", emoji: "🇰🇲" },
        
        { name: "flag of Republic of the Congo", emoji: "🇨🇬" },
  { name: "flag of Democratic Republic of the Congo", emoji: "🇨🇩" },
  { name: "flag of Cook Islands", emoji: "🇨🇰" },
  { name: "flag of Costa Rica", emoji: "🇨🇷" },
  { name: "flag of Côte d'Ivoire", emoji: "🇨🇮" },
  { name: "flag of Croatia", emoji: "🇭🇷" },
  { name: "flag of Cuba", emoji: "🇨🇺" },
  { name: "flag of Curaçao", emoji: "🇨🇼" },
  { name: "flag of Cyprus", emoji: "🇨🇾" },
  { name: "flag of Czechia", emoji: "🇨🇿" },
  { name: "flag of Denmark", emoji: "🇩🇰" },
  { name: "flag of Djibouti", emoji: "🇩🇯" },
  { name: "flag of Dominica", emoji: "🇩🇲" },
  { name: "flag of Dominican Republic", emoji: "🇩🇴" },
  { name: "flag of Ecuador", emoji: "🇪🇨" },
  { name: "flag of Egypt", emoji: "🇪🇬" },
  { name: "flag of El Salvador", emoji: "🇸🇻" },
  { name: "flag of Equatorial Guinea", emoji: "🇬🇶" },
  { name: "flag of Eritrea", emoji: "🇪🇷" },
  { name: "flag of Estonia", emoji: "🇪🇪" },
        
        { name: "flag of Eswatini", emoji: "🇸🇿" },
  { name: "flag of Ethiopia", emoji: "🇪🇹" },
  { name: "flag of European Union", emoji: "🇪🇺" },
  { name: "flag of Falkland Islands", emoji: "🇫🇰" },
  { name: "flag of Faroe Islands", emoji: "🇫🇴" },
  { name: "flag of Fiji", emoji: "🇫🇯" },
  { name: "flag of Finland", emoji: "🇫🇮" },
  { name: "flag of France", emoji: "🇫🇷" },
  { name: "flag of French Guiana", emoji: "🇬🇫" },
  { name: "flag of French Polynesia", emoji: "🇵🇫" },
  { name: "flag of French Southern Territories", emoji: "🇹🇫" },
  { name: "flag of Gabon", emoji: "🇬🇦" },
  { name: "flag of Gambia", emoji: "🇬🇲" },
  { name: "flag of Georgia", emoji: "🇬🇪" },
  { name: "flag of Germany", emoji: "🇩🇪" },
  { name: "flag of Ghana", emoji: "🇬🇭" },
  { name: "flag of Gibraltar", emoji: "🇬🇮" },
  { name: "flag of Greece", emoji: "🇬🇷" },
  { name: "flag of Greenland", emoji: "🇬🇱" },
  { name: "flag of Grenada", emoji: "🇬🇩" },
        
        { name: "flag of Japan", emoji: "🇯🇵" },
  { name: "crossed flags", emoji: "🎌" },
  { name: "flag of Jersey", emoji: "🇯🇪" },
  { name: "flag of Jordan", emoji: "🇯🇴" },
  { name: "flag of Kazakhstan", emoji: "🇰🇿" },
  { name: "flag of Kenya", emoji: "🇰🇪" },
  { name: "flag of Kiribati", emoji: "🇰🇮" },
  { name: "flag of Kosovo", emoji: "🇽🇰" },
  { name: "flag of Kuwait", emoji: "🇰🇼" },
  { name: "flag of Kyrgyzstan", emoji: "🇰🇬" },
  { name: "flag of Laos", emoji: "🇱🇦" },
  { name: "flag of Latvia", emoji: "🇱🇻" },
  { name: "flag of Lebanon", emoji: "🇱🇧" },
  { name: "flag of Lesotho", emoji: "🇱🇸" },
  { name: "flag of Liberia", emoji: "🇱🇷" },
  { name: "flag of Libya", emoji: "🇱🇾" },
  { name: "flag of Liechtenstein", emoji: "🇱🇮" },
  { name: "flag of Lithuania", emoji: "🇱🇹" },
  { name: "flag of Luxembourg", emoji: "🇱🇺" },
  { name: "flag of Macau", emoji: "🇲🇴" },
        
        
  { name: "flag of Madagascar", emoji: "🇲🇬" },
  { name: "flag of Malawi", emoji: "🇲🇼" },
  { name: "flag of Malaysia", emoji: "🇲🇾" },
  { name: "flag of Maldives", emoji: "🇲🇻" },
  { name: "flag of Mali", emoji: "🇲🇱" },
  { name: "flag of Malta", emoji: "🇲🇹" },
  { name: "flag of Marshall Islands", emoji: "🇲🇭" },
  { name: "flag of Martinique", emoji: "🇲🇶" },
  { name: "flag of Mauritius", emoji: "🇲🇺" },
  { name: "flag of Mayotte", emoji: "🇾🇹" },
  { name: "flag of Mexico", emoji: "🇲🇽" },
  { name: "flag of Micronesia", emoji: "🇫🇲" },
  { name: "flag of Moldova", emoji: "🇲🇩" },
  { name: "flag of Monaco", emoji: "🇲🇨" },
  { name: "flag of Mongolia", emoji: "🇲🇳" },
  { name: "flag of Montenegro", emoji: "🇲🇪" },
  { name: "flag of Montserrat", emoji: "🇲🇸" },
  { name: "flag of Morocco", emoji: "🇲🇦" },
  { name: "flag of Mozambique", emoji: "🇲🇿" },
        
        { name: "flag of Myanmar", emoji: "🇲🇲" },
  { name: "flag of Namibia", emoji: "🇳🇦" },
  { name: "flag of Nauru", emoji: "🇳🇷" },
  { name: "flag of Nepal", emoji: "🇳🇵" },
  { name: "flag of Netherlands", emoji: "🇳🇱" },
  { name: "flag of New Caledonia", emoji: "🇳🇨" },
  { name: "flag of New Zealand", emoji: "🇳🇿" },
  { name: "flag of Nicaragua", emoji: "🇳🇮" },
  { name: "flag of Niger", emoji: "🇳🇪" },
  { name: "flag of Nigeria", emoji: "🇳🇬" },
  { name: "flag of Niue", emoji: "🇳🇺" },
  { name: "flag of Norfolk Island", emoji: "🇳🇫" },
  { name: "flag of North Korea", emoji: "🇰🇵" },
  { name: "flag of North Macedonia", emoji: "🇲🇰" },
  { name: "flag of Northern Mariana Islands", emoji: "🇲🇵" },
  { name: "flag of Norway", emoji: "🇳🇴" },
  { name: "flag of Oman", emoji: "🇴🇲" },
  { name: "flag of Pakistan", emoji: "🇵🇰" },
  { name: "flag of Palau", emoji: "🇵🇼" },
  { name: "flag of ♡ 𓂆 Palestine ♥️ ᥫ᭡  ♡ ", emoji: "🇵🇸" },
        
        { name: "flag of Panama", emoji: "🇵🇦" },
  { name: "flag of Papua New Guinea", emoji: "🇵🇬" },
  { name: "flag of Paraguay", emoji: "🇵🇾" },
  { name: "flag of Peru", emoji: "🇵🇪" },
  { name: "flag of Philippines", emoji: "🇵🇭" },
  { name: "flag of Pitcairn Islands", emoji: "🇵🇳" },
  { name: "flag of Poland", emoji: "🇵🇱" },
  { name: "flag of Portugal", emoji: "🇵🇹" },
  { name: "flag of Puerto Rico", emoji: "🇵🇷" },
  { name: "flag of Qatar", emoji: "🇶🇦" },
  { name: "flag of Réunion", emoji: "🇷🇪" },
  { name: "flag of Romania", emoji: "🇷🇴" },
  { name: "flag of Russia", emoji: "🇷🇺" },
  { name: "flag of Rwanda", emoji: "🇷🇼" },
  { name: "flag of Samoa", emoji: "🇼🇸" },
  { name: "flag of San Marino", emoji: "🇸🇲" },
  { name: "flag of São Tomé and Príncipe", emoji: "🇸🇹" },
  { name: "flag of Saudi Arabia", emoji: "🇸🇦" },
  { name: "flag of Senegal", emoji: "🇸🇳" },
  { name: "flag of Serbia", emoji: "🇷🇸" },
        
        { name: "flag of Seychelles", emoji: "🇸🇨" },
  { name: "flag of Sierra Leone", emoji: "🇸🇱" },
  { name: "flag of Singapore", emoji: "🇸🇬" },
  { name: "flag of Sint Maarten", emoji: "🇸🇽" },
  { name: "flag of Slovakia", emoji: "🇸🇰" },
  { name: "flag of Slovenia", emoji: "🇸🇮" },
  { name: "flag of Solomon Islands", emoji: "🇸🇧" },
  { name: "flag of Somalia", emoji: "🇸🇴" },
  { name: "flag of South Africa", emoji: "🇿🇦" },
  { name: "flag of South Georgia and the South Sandwich Islands", emoji: "🇬🇸" },
  { name: "flag of South Korea", emoji: "🇰🇷" },
  { name: "flag of South Sudan", emoji: "🇸🇸" },
  { name: "flag of Spain", emoji: "🇪🇸" },
  { name: "flag of Sri Lanka", emoji: "🇱🇰" },
  { name: "flag of Sudan", emoji: "🇸🇩" },
  { name: "flag of Suriname", emoji: "🇸🇷" },
  { name: "flag of Svalbard and Jan Mayen", emoji: "🇸🇯" },
  { name: "flag of Sweden", emoji: "🇸🇪" },
  { name: "flag of Switzerland", emoji: "🇨🇭" },
  { name: "flag of Syria", emoji: "🇸🇾" },
        
        
        { name: "flag of Taiwan", emoji: "🇹🇼" },
  { name: "flag of Tajikistan", emoji: "🇹🇯" },
  { name: "flag of Tanzania", emoji: "🇹🇿" },
  { name: "flag of Thailand", emoji: "🇹🇭" },
  { name: "flag of Timor-Leste", emoji: "🇹🇱" },
  { name: "flag of Togo", emoji: "🇹🇬" },
  { name: "flag of Tokelau", emoji: "🇹🇰" },
  { name: "flag of Tonga", emoji: "🇹🇴" },
  { name: "flag of Trinidad and Tobago", emoji: "🇹🇹" },
  { name: "flag of Tunisia", emoji: "🇹🇳" },
  { name: "flag of Turkey", emoji: "🇹🇷" },
  { name: "flag of Turkmenistan", emoji: "🇹🇲" },
  { name: "flag of Tuvalu", emoji: "🇹🇻" },
  { name: "flag of Uganda", emoji: "🇺🇬" },
  { name: "flag of Ukraine", emoji: "🇺🇦" },
  { name: "flag of United Arab Emirates", emoji: "🇦🇪" },
  { name: "flag of United Kingdom", emoji: "🇬🇧" },
  { name: "flag of United States", emoji: "🇺🇸" },
  { name: "flag of Uruguay", emoji: "🇺🇾" },
  { name: "flag of Uzbekistan", emoji: "🇺🇿" },
        
        { name: "flag of Vanuatu", emoji: "🇻🇺" },
  { name: "flag of Vatican City", emoji: "🇻🇦" },
  { name: "flag of Venezuela", emoji: "🇻🇪" },
  { name: "flag of Vietnam", emoji: "🇻🇳" },
  { name: "flag of Wallis and Futuna", emoji: "🇼🇫" },
  { name: "flag of Western Sahara", emoji: "🇪🇭" },
  { name: "flag of Yemen", emoji: "🇾🇪" },
  { name: "flag of Zambia", emoji: "🇿🇲" },
  { name: "flag of Zimbabwe", emoji: "🇿🇼" },
        
        
        
        
        // Said ElHachmy says:"Keep adding emojis/items here"
    ];

    let selectedItems = [];
    while (selectedItems.length < 4) {
        let randomItem = items[Math.floor(Math.random() * items.length)];
        if (!selectedItems.some(item => item.name === randomItem.name)) {
            selectedItems.push(randomItem);
        }
    }
    return selectedItems;
}



//_____2

// Function to highlight one emoji when the hint button is clicked
// Function to highlight one emoji when the hint button is clicked
// Function to highlight one emoji when the hint button is clicked
function showHint() {
    const emojiContainer = document.getElementById("emoji-play-zone");
    const emojis = emojiContainer.getElementsByClassName("emoji-button");

    //console.log("Available emojis:", emojis.length);

    if (remainingHints > 0) {
        alert(`Right now you have  ${remainingHints} hint(s), but be very careful using the hint(s), because I do make mistakes sometimes                         — Said ElHachmy`);
        for (let i = 0; i < emojis.length; i++) {
            if (!emojis[i].style.border) {
                emojis[i].style.border = "2px solid yellow";
                emojis[i].style.backgroundColor = "black";
                remainingHints--;
                //console.log(`Hint used! Remaining hints: ${remainingHints}`);
                break;
            }
        }
    } else {
        alert("No remaining hints available for this level. Use them wisely next time!");
        console.warn("No remaining hints to use!");
    }

    if (remainingHints === 0) {
        document.getElementById("hint-btn").disabled = true;
        document.getElementById("hint-btn").style.backgroundColor= "gray";
        document.getElementById("hint-btn").style.color= "white";
        document.getElementById("hint-btn").style.boxShadow= "0 0 10px black";
    }
    
    
}




// Function to reset for the new level (resetting hints)
function startNewLevel() {
    remainingHints = 2; // Adjust this if you want more hints per level
    //console.log("New level started. Remaining hints reset to:", remainingHints);

    const emojis = document.querySelectorAll(".emoji-button");
    emojis.forEach((emoji) => {
        emoji.style.border = "";
        emoji.style.backgroundColor = ""; // Reset any previous hint highlights
    });

    document.getElementById("hint-btn").disabled = false;
    document.getElementById("hint-btn").style.backgroundColor= "black";
        document.getElementById("hint-btn").style.color= "yellow";
        document.getElementById("hint-btn").style.boxShadow= "0 0 10px yellow";
    loadLevel();
}

// Function to update the level display
function updateLevel() {
    const levelDisplay = document.getElementById("level");
    if (levelDisplay) {
        levelDisplay.textContent = `Level ${currentLevel}`;
        //console.log(`Level updated to: ${currentLevel}`);
    } else {
        console.error("Level display element not found!");
    }
}

// Function to load level and select items for guessing
function loadLevel() {
    //console.log("Loading new level...");

    updateLevel();
    itemsToGuess = getFourRandomItems();
    shuffleItems(itemsToGuess);

    currentItemIndex = 0;
    //console.log("Items selected for this level:", itemsToGuess);

    showPopupMessage();
    showEmojisForLevel();
}

// Function to start the game
function startGame() {
    const startButton = document.getElementById("start-btn");
    const levelDisplay = document.getElementById("level");
    const emojiContainer = document.getElementById("emoji-play-zone");
    const characterEmoji = document.getElementById("character-emoji");
    const popup = document.getElementById("popup");
    const emojiPlayZone = document.getElementById("emoji-play-zone");
    const hintButton = document.getElementById("hint-btn");

    if (startButton) startButton.style.display = "none";
    if (levelDisplay) levelDisplay.style.display = "block";
    if (emojiContainer) emojiContainer.style.display = "flex";
    if (emojiPlayZone) emojiPlayZone.style.display = "block";
    if (characterEmoji) characterEmoji.style.display = "block";
    if (popup) popup.style.display = "block";
    if (hintButton) hintButton.style.display = "block";

    currentLevel = 1;
    incorrectAttempts = 0;

    //console.log("Game started! Current level:", currentLevel);

    loadLevel();
}

//_____4

// Function to check answers and control level progression
function checkAnswer(selectedItem) {
    const currentItem = itemsToGuess[currentItemIndex];
    const popupMessage = document.getElementById("popup-message");

    if (selectedItem === currentItem.name) {
        // Correct answer logic
        popupMessage.innerHTML = `Correct! You found the <span style="border-bottom:2px solid red">${currentItem.name}</span>.<br><br><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — Said ElHachmy</strong>`;
        
        currentItemIndex++;
        incorrectAttempts = 0;

        // Change the body background color to green for a correct answer
        document.body.style.backgroundColor = "green"; 

        // Reset the background color to default after 0.5 second (temporary effect)
        setTimeout(() => {
            document.body.style.backgroundColor = ""; 
        }, 500); // 500 milliseconds = 0.5 second

        if (currentItemIndex >= itemsToGuess.length) {
            setTimeout(() => {
                currentLevel++;
                startNewLevel();
            }, 2000);
        } else {
            setTimeout(() => {
                showPopupMessage();
            }, 2000);
        }
    } else {
        // Incorrect answer logic
        popupMessage.innerHTML = `Incorrect! Try again. ( <span style="border-bottom:2px solid red">${currentItem.name} </span>!) <br><br><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  — Said ElHachmy</strong>`;
        
        // Change the body background color to red for an incorrect answer
        document.body.style.backgroundColor = "red"; 

        // Reset the background color to default after 0.5 second (temporary effect)
        setTimeout(() => {
            document.body.style.backgroundColor = ""; 
        }, 500); // 500 milliseconds = 0.5 second

        incorrectAttempts++;

        if (incorrectAttempts > 1) {
            setTimeout(() => {
                let punishmentLevel = Math.max(currentLevel - 4, 1);
                currentLevel = punishmentLevel;
                if (currentLevel < 4) {
                    alert("Incorrect! You’ve been pushed back. Keep going!   — Said ElHachmy");
                } else {
                    alert("Incorrect! You’ve been pushed back 4 levels. Try again!  — Said ElHachmy");
                }

                loadLevel();
            }, 2000);
        }
    }
}


// Global function to handle emoji selection
function handleEmojiSelection(selectedIndex) {
    const selectedItem = itemsToGuess[selectedIndex].name;
    checkAnswer(selectedItem);
}


//_____5

// Function to show emojis for the current level
function showEmojisForLevel() {
    const emojiPlayZone = document.getElementById("emoji-play-zone");
    emojiPlayZone.innerHTML = "";

    emojiPlayZone.style.position = "relative";
    emojiPlayZone.style.width = "100%";
    emojiPlayZone.style.height = "400px";

    const emojiSize = 120;
    const emojis = itemsToGuess;

    emojis.forEach((item, index) => {
        const emojiButton = document.createElement("button");
        emojiButton.classList.add("emoji-button");
        emojiButton.textContent = item.emoji;
        emojiButton.setAttribute("data-index", index);

        setRandomPosition(emojiButton);

        emojiButton.style.position = "absolute";
        emojiButton.style.fontSize = "4.5rem";
        emojiButton.style.width = `${emojiSize}px`;
        emojiButton.style.height = `${emojiSize}px`;
        emojiButton.style.borderRadius = "50%";

        emojiButton.addEventListener("click", () => {
            setRandomPosition(emojiButton);
            handleEmojiSelection(index);
        });

        emojiPlayZone.appendChild(emojiButton);
    });

    setInterval(() => {
        document.querySelectorAll(".emoji-button").forEach((emojiButton) => {
            setRandomPosition(emojiButton);
        });
    }, 6000);
}

// Helper function to set a random position for an emoji button
function setRandomPosition(emojiButton) {
    const emojiPlayZone = document.getElementById("emoji-play-zone");
    const emojiSize = 120;
    const margin = 20;

    const maxX = emojiPlayZone.offsetWidth - emojiSize - margin;
    const maxY = emojiPlayZone.offsetHeight - emojiSize - margin;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    emojiButton.style.left = `${randomX}px`;
    emojiButton.style.top = `${randomY}px`;
}

//_____6

// Function to show popup with the current question
//________________________6

// Function to show popup with the current question
function showPopupMessage() {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const currentItem = itemsToGuess[currentItemIndex];

    if (popup && popupMessage && currentItem) {
        popup.style.display = "block";
        popupMessage.innerHTML = `Where is the
        <span style="color:red;border-bottom:2px solid darkblue"><b>${currentItem.name}</b></span>?<br><br><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — Said ElHachmy</strong>`;
        
        popupMessage.style.backgroundColor = "";
    } else {
        console.error("Popup or popupMessage element not found, or currentItem is undefined!");
        // Optionally, you can display an alert to the user or take other actions here
    }
}

// Music Control Functions

// Global variable to store music
/*

// Function to start music
let audio = new Audio('D&D.mp3'); // Replace with your audio file path

// Function to start music and loop it
function startMusic() {
    audio.play();    // Play the audio
    audio.loop = true;  // Enable looping
}

// Function to stop music
function stopMusic() {
    audio.pause();   // Pause the audio
    audio.currentTime = 0;  // Reset the audio to the beginning
}

// Function to reset music and start from the beginning
function resetMusic() {
    audio.currentTime = 0;  // Reset the audio to the beginning
    audio.play();    // Start the audio
    audio.loop = true;  // Enable looping
}

// Attach event listeners to buttons (ensure the buttons have the correct IDs)
document.getElementById('start-music-btn').addEventListener('click', startMusic);
document.getElementById('stop-music-btn').addEventListener('click', stopMusic);
document.getElementById('reset-music-btn').addEventListener('click', resetMusic);
*/
//try this
//try this


//try this


//try this

//try this


// Wait for the DOM to fully load before running the code
document.addEventListener("DOMContentLoaded", () => {

  // Get the buttons
  const startBtn = document.getElementById("start-btn");
  const hintBtn = document.getElementById("hint-btn");
  const resetBtn = document.getElementById("reset-game");
  const levelShow = document.getElementById("level");

  if (!startBtn || !hintBtn || !resetBtn || !levelShow) {
    console.error("One or more buttons not found in the HTML!");
    return;
  }

  // Hide the levelShow by default
  levelShow.style.display = "none";

  // Hide the hint button by default
  hintBtn.style.display = "none";

  // Hide the reset-game button by default
  resetBtn.style.display = "none";

  // When the Start button is clicked
  startBtn.addEventListener("click", () => {
    // Only show if they are hidden
    levelShow.style.display = "inline-block";
    hintBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
  });

  // When the Reset button is clicked
  resetBtn.addEventListener("click", () => {
    // Hide them safely
    levelShow.style.display = "none";
    hintBtn.style.display = "none";
    resetBtn.style.display = "none";

    // Optional: reset game logic or visual state (if needed)
    // For example, if your game uses variables, reset them here
    //console.log("Game reset!");
  });
});
