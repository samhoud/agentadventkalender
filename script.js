document.addEventListener('DOMContentLoaded', () => {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    const mainContent = document.getElementById('main-content');

    const CORRECT_PASSWORD = 'kerst2025';

    function checkPassword() {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === CORRECT_PASSWORD) {
            passwordOverlay.style.display = 'none';
            mainContent.style.display = 'block';
            passwordError.classList.add('hidden');
        } else {
            passwordError.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', checkPassword);
    }

    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        passwordInput.focus();
    }

    const treeContainer = document.getElementById('tree-container');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const charNameEl = document.getElementById('char-name');
    const charDayEl = document.getElementById('char-day');
    const charDescEl = document.getElementById('char-desc');
    const snowContainer = document.getElementById('snow-container');

    // All days of December (1-31), only days 8-12 and 15-19 are interactive
    const characters = [
        {
            type: 'star',
            name: "Een brief van de Kerstman",
            desc: `Ho ho hóó lieve mensen van &samhoud!
De Kerstman heeft zich dit jaar eens niet alleen in zijn slee verstopt, maar is gewoon bij jullie op kantoor langsgekomen. En wat ik daar zag… tjongejonge… wat zijn jullie allemaal brave, lieve consultantjes geweest dit jaar! Dat verdient natuurlijk een flinke beloning.

Daarom ga ik jullie de komende 16 werkdagen elke dag verrassen met een nieuw cadeautje. Maar… zelfs de Kerstman kan dat niet alleen. In het kader van technologische vooruitgang heb ik dit jaar namelijk mijn kerstelfjes met pensioen gestuurd en werk ik nu met de &samhoud agents. Van sommigen weet ik niet eens hoe ze eruitzien—ik hoop stiekem dat een van de cadeautjes dát gaat onthullen. En anderen hebben nog niet eens een naam… misschien kunnen jullie slimme consultantjes mij daarbij helpen.

Het wordt een gezellige, verrassende feesttijd, dat beloof ik jullie.
Elke dag kunnen jullie één kerstbal op de website aanklikken, die die dag het nieuwste cadeautje onthult. Maar heb geduld hoor: de kerstballen openen pas op de dag die erop staat. Op bal 1 staat 1 december, dus die gaat open op 1 december, enzovoort—tot aan 24 december.

En dan nog een bonuscadeautje voor wie écht goed oplet…
Ik heb mij vandaag ergens op jullie kantoor verstopt!
Tussen al het slidesbouwen door: probeer mij maar eens te vinden. Wie mij ontdekt, krijgt een heerlijk zoetigheidje cadeau.

Tot heel snel weer, lieve consultantjes.
Warme groetjes,
de Kerstman 🎅✨`
        },
        { day: 1, name: "1 December", desc: "", interactive: false },
        { day: 2, name: "2 December", desc: "", interactive: false },
        { day: 3, name: "3 December", desc: "", interactive: false },
        { day: 4, name: "4 December", desc: "", interactive: false },
        { day: 5, name: "5 December", desc: "", interactive: false },
        { day: 6, name: "6 December", desc: "", interactive: false },
        { day: 7, name: "7 December", desc: "", interactive: false },
        {
            day: 8,
            name: "Eerste boodschap van de Kerstman",
            interactive: true,
            desc: "",
            video: "images/Santa's Digitale Kalender.mp4"
        },
        {
            day: 9,
            name: "Syl de salesvoorbereider",
            interactive: true,
            image: "images/Syl.png",
            desc: `<b>Syl heeft één missie:</b> ervoor zorgen dat jij nooit meer onvoorbereid een salesgesprek ingaat.

Dit is een <b>Super Prompt</b> voor de Copilot Research Agent. Je stopt er een bedrijfsnaam en gesprekspartner in, Syl geeft je een compleet dossier:
<ul>
<li><i>Strategie</i></li>
<li><i>Financiële analyse</i></li>
<li><i>Externe en interne uitdagingen</i></li>
<li><i>Sales kansen voor &samhoud</i></li>
<li><i>Slimme gespreksvragen voor je gesprekspartner</i></li>
</ul>

<b>Resultaat?</b> Je maakt indruk. Echte indruk. Want voorbereiding = halve werk. En betere voorbereiding = meer deals.

Aan de slag? Check de Sales Super Prompt op SharePoint: <a href="https://samhoud1.sharepoint.com/sites/DATATOOLS-PORTAL/SitePages/Sales-Super-Prompt.aspx" target="_blank" style="color: var(--helio-cosmos); font-weight: bold; text-decoration: underline;">Sales Super Prompt</a>

<i>Maar eerst: wil je weten hoe de toekomst van &samhoud eruitziet met én zonder Syl?</i>`,
            flipCards: {
                withoutAi: 'images/day9_future_ai.jpg',
                withAi: 'images/day9_future_no_ai.jpg',
                labelWithout: 'Toekomst zonder Syl',
                labelWith: 'Toekomst met Syl'
            },
            closingText: "Jouw keuze. Welke &samhoud kies jij?"
        },
        {
            day: 10,
            name: "Fenna de Feedbackfixer",
            interactive: true,
            image: "images/Fenna.png",
            desc: `Ho ho ho, het is weer die tijd van het jaar.
Nee, niet Kerst. <b>Endyears.</b>

En jij hebt vast nog een inbox vol feedbackverzoeken die je vóór 12 december moet schrijven.
Voor sommigen is het heerlijk - eindelijk al die opgekropte feedback eruit gooien. Voor anderen is het een nachtmerrie. Je wilt eerlijk zijn, maar niet hard. Constructief, maar niet vaag. Motiverend, maar niet fake. En dat ook nog eens in de drukste tijd van het jaar.

<b>Gelukkig bestaat er nu Fenna.</b>
Fenna de Feedbackfixer maakt een eind aan alle stress. Ze helpt je om feedback netjes op papier te krijgen én traint je ondertussen in het geven van sterkere feedback.

<i>Wil je alvast een voorproefje van Fenna's skills? Klik op de knop en krijg een compliment - voor jezelf, of als inspiratie voor de feedback die je gaat schrijven.</i>`,
            compliments: true,
            closingText: `Direct aan de slag met Fenna? Kijk in je copilot app of klik op deze link: <a href="https://teams.microsoft.com/l/app/2f02f6b0-f88f-45d1-88b7-7393e8a94f7a?source=app-header-share-entrypoint" target="_blank" style="color: var(--helio-cosmos); font-weight: bold; text-decoration: underline;">Fenna de FeedbackFixer</a>`
        },
        {
            day: 11,
            name: "Identiteitscrisis!",
            interactive: true,
            image: "images/Interview.png",
            desc: `<b>Help deze agent uit haar identiteitscrisis!</b>
Een jaar in ontwikkeling. Sinds oktober live. En ze is een machine.
10 interviews analyseren? <i>Makkelijk.</i> 20? <i>No sweat.</i> 30, 40? <i>The more the merrier!</i> Terwijl jij na 3 interviews al niet meer weet wie wat zei, is zij net lekker warm gedraaid.

<b>Haar superkracht?</b>
Structuur in chaos. Altijd. Ze blijft consistent, ook als jij allang de weg kwijt bent. Vaste Minto-structuur:
<ul>
<li>Hoofdconclusies</li>
<li>Argumenten</li>
<li>Quotes</li>
</ul>
Plus: ze behoudt de <i>tone of voice</i> van de klant. Zodat je quotes herkenbaar blijven. Authentiek. Bruikbaar.

<b>Klinkt goed? Is het ook.</b>
En nu heeft ze eindelijk een gezicht. Maar haar naam?

<i>Intana...</i>

Zeker bedacht door een developer zonder fantasie? Klinkt als een crypto coin die na twee weken crasht. Niet bepaald een naam die past bij de &samhoud familie, toch?

Ze verdient beter. Een naam die matcht met haar skills én haar nieuwe look.

<b>Help haar:</b>
<ul>
<li>Inge de Interviewontleder</li>
<li>Indy de Inzichtmaker</li>
<li>Of jouw eigen geniale creatie?</li>
</ul>
<i>Winnende naam krijgt een flesje bubbels én een plekje op SharePoint.</i>`,
            forms: true,
            closingText: `Ga snel naar SharePoint om haar nog beter te leren kennen: <a href="https://samhoud1.sharepoint.com/sites/DATATOOLS-PORTAL/SitePages/Intana---Interview-Analyser.aspx" target="_blank" style="color: var(--helio-cosmos); font-weight: bold; text-decoration: underline;">Intana - Interview Analyser</a>`
        },
        {
            day: 12,
            name: "Olivia het Orakel",
            interactive: true,
            image: "images/Olivia het Orakel.jpg",
            desc: `Je kent haar al. <a href="https://teams.microsoft.com/l/app/c03c8129-a4fa-4194-972b-e654197fcdda?source=app-header-share-entrypoint" target="_blank" style="color: var(--helio-cosmos); font-weight: bold; text-decoration: underline;">Olivia het Orakel</a>, je vriendelijke Copilot agent in Teams voor al je interne vragen over <b>People</b>, <b>Finance</b> én <b>IT</b>. Van <i>"wie is ook alweer de management assistent van Laura?"</i> tot <i>"welke kosten mag ik declareren?"</i> – Olivia zoekt het voor je uit, zonder oordeel.

<b>Maar wisten jullie al dat Olivia een upgrade heeft gehad?</b>
Olivia blijft hetzelfde orakel als altijd, maar dan met <i>extra superkrachten</i> voor IT-gerelateerde vragen.
Denk aan bijvoorbeeld: <i>"Hoe maak ik een nieuwe groep aan in Teams?"</i> of <i>"Wat is het wifi wachtwoord van KDS?"</i>

Kortom: alles wat nu nog te vaak begint met <i>"Hee Sanne, heb je even…?"</i> is voortaan <b>"Hee Olivia, heb je even...?"</b>

Naast dat onze alwetende Olivia al jouw vragen over People, Finance en IT kan beantwoorden, heeft ze ook een <b>direct lijntje met de toekomst</b>. Durf jij het aan? <i>Trek een van de Tarotkaarten en ontdek wat er op het punt staat te veranderen.</i>`,
            tarotCards: true
        },
        { day: 13, name: "13 December", desc: "", interactive: false },
        { day: 14, name: "14 December", desc: "", interactive: false },
        {
            day: 15,
            name: "Vera de Verhalenverteller",
            interactive: true,
            image: "images/Vera de Verhalenverteller.jpg",
            desc: `<b>Vera de Verhalenverteller</b>

Sinds deze maand heeft elke agent een agent owner. Iemand die verantwoordelijk is voor het bewaken van het gebruik en de kwaliteit ervan.
 
Voor Vera de Verhalenverteller is dat onze lieftallige collega Arnaud. En hij heeft een boodschap voor jullie.

<video controls style="width: 100%; margin: 1.5rem 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
    <source src="images/Arnaud.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<b>Wat doet Vera ook alweer?</b>

Vera helpt je om snel een eerste versie van een veranderverhaal voor een klant te maken, een strategisch communicatie middel dat uitlegt waarom een verandering nodig is, wat er gaat veranderen, hoe dat gebeurt en wat het oplevert.
 
Upload je relevante documenten - deskresearch, interviewtranscripten - en Vera genereert een conceptversie. Je krijgt zelfs twee varianten: één volgens de vaste hoofdstukindeling, en één met een alternatieve structuur die mogelijk beter aansluit bij het verhaal van de klant.
 
Je kan haar terug vinden in Virtual Brain via deze link:

<div style="text-align: center; margin-top: 1.5rem;">
    <a href="https://samhoud.getvirtualbrain.com/applications/2a9eb051-4b92-4263-bfa3-936cf71966b0" target="_blank" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, var(--deep-sky), var(--blue-ocean)); color: var(--infinite-ivory); text-decoration: none; border-radius: 50px; font-weight: bold; font-family: 'Montserrat', sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s;">Naar Virtual Brain</a>
</div>`
        },
        {
            day: 16,
            name: "Sam de Sessiebouwer",
            interactive: true,
            image: "images/Sam de Sessiebouwer.jpg",
            desc: `In deze rustige decemberperiode, waarin we samen terugblikken op het jaar, zetten we graag ook <b>Sam de Sessiebouwer</b> even in het winterlicht.<br>Zijn agent owner, <b>Hester</b>, begeleidt hem scherp en zorgvuldig, en samen vormen ze inmiddels een uitstekend ingespeeld duo.<br><br><b>Wat doet Sam de Sessiebouwer ook alweer?</b><br>Sam de Sessiebouwer helpt je om snel een stevig eerste concept van een sessieprogramma te maken.<br>Met een transcriptbriefing als input, waarin je de doelen, doelgroep en context van de sessie vastlegt, bouwt Sam een volledig uitgewerkt programma. Denk aan logisch opgebouwde interventies, een gedetailleerde materialenlijst en een overzichtelijke actielijst om meteen stappen te kunnen zetten.<br><br>Voor wie benieuwd is naar Sam en Hester hun gezamenlijke ervaringen: <i>vandaag kun je een kijkje nemen in alle avonturen die ze tot nu toe hebben meegemaakt.</i> Je hoeft alleen maar op Hesters pagina hieronder te klikken om hun gedeelde foto's te bekijken.`,
            samPhone: true,
            closingText: `<div style="text-align: center; margin-top: 1.5rem;"><a href="https://samhoud.getvirtualbrain.com/applications/7ae24ac0-8392-4f1d-91a1-f7a4ec160131" target="_blank" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, var(--deep-sky), var(--blue-ocean)); color: var(--infinite-ivory); text-decoration: none; border-radius: 50px; font-weight: bold; font-family: 'Montserrat', sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s;">Naar Virtual Brain</a></div>`
        },
        { day: 17, name: "17 December", desc: "Coming soon...", interactive: true },
        {
            day: 18,
            name: "Throwback Tuesday",
            interactive: true,
            desc: `Ho ho hóó lieve consultantjes van &samhoud!
Zelfs Kerstmis is dit jaar een stuk efficiënter geworden sinds de komst van jullie slimme AI agents. Zo efficiënt zelfs, dat Throwback Thursday twee dagen eerder uitgevoerd kan worden—jawel hoor—op Throwback Tuesday!

Dus leun lekker achterover, neem een warme chocolademelk, en geniet van deze prachtige &samhoud-kiekjes uit vervlogen tijden.

Ho ho hóó, wat een feest! 🎅✨`,
            images: [
                'images/day2_1.jpg',
                'images/day2_2.jpg',
                'images/day2_3.jpg',
                'images/day2_4.jpg',
                'images/day2_5.jpg'
            ]
        },
        { day: 19, name: "19 December", desc: "Coming soon...", interactive: true },
        { day: 20, name: "20 December", desc: "", interactive: false },
        { day: 21, name: "21 December", desc: "", interactive: false },
        { day: 22, name: "22 December", desc: "", interactive: false },
        { day: 23, name: "23 December", desc: "", interactive: false },
        { day: 24, name: "24 December", desc: "", interactive: false },
        { day: 25, name: "25 December", desc: "", interactive: false }
    ];

    const compliments = [
        "Je stakeholdermanagement is zo warm dat zelfs een sneeuwpop ervan smelt.",
        "Jouw advies is zo helder dat het kan dienen als kerstverlichting voor de hele afdeling",
        "Met jouw projectplanning zou zelfs de Kerstman zijn cadeautjes efficiënter kunnen rondbrengen",
        "Jouw deliverables zijn consistenter dan de jaarlijkse kerstafspeellijst",
        "Jij bent inmiddels zo'n goede proces begeleider, dat je de blauwe bal weet te gooien zonder dat er gewonden raken",
        "Je bent de gouden standaard voor slide-opmaak; jouw consistentie in uitlijning is een kerstwonder op zich",
        "Jouw werk ethiek is sterker dan de meeste familiebanden tijdens kerst",
        "Met jouw projectplanning zou zelfs de Kerstman zijn cadeautjes efficiënter kunnen rondbrengen"
    ];

    function createSnow() {
        if (!snowContainer) return;
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random() * 0.5;
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

        snowContainer.appendChild(snowflake);
        setTimeout(() => { snowflake.remove(); }, 5000);
    }
    setInterval(createSnow, 100);

    function createBackgroundIcons() {
        const icons = ['🎄', '🎅', '🦌', '🎁', '🔔', '🕯️', '🍪', '⛄', '❄️', '🎀'];
        const numIcons = 15;

        for (let i = 0; i < numIcons; i++) {
            const icon = document.createElement('div');
            icon.classList.add('bg-icon');
            icon.textContent = icons[Math.floor(Math.random() * icons.length)];
            icon.style.top = Math.random() * 100 + 'vh';
            icon.style.left = Math.random() * 100 + 'vw';
            const size = Math.random() * 3 + 2;
            icon.style.fontSize = `${size}rem`;
            icon.style.animationDelay = `${Math.random() * 5}s`;
            icon.style.animationDuration = `${Math.random() * 5 + 5}s`;
            document.body.appendChild(icon);
        }
    }
    createBackgroundIcons();

    // Check if developer mode is enabled via URL parameter
    function isDevMode() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('dev') === 'true';
    }

    function isDayUnlocked(dayNumber) {
        // Developer mode bypasses all date restrictions
        if (isDevMode()) {
            return true;
        }

        // Get current date
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth(); // 0-indexed, so December = 11
        const currentDay = now.getDate();

        // Check if we're in December 2025 or later
        if (currentYear > 2025 || (currentYear === 2025 && currentMonth === 11)) {
            // We're in December 2025 or later
            // Day is unlocked if the current date is >= the day number
            if (currentYear === 2025 && currentMonth === 11) {
                return currentDay >= dayNumber;
            }
            // If we're past December 2025, all days are unlocked
            return true;
        }

        // We're before December 2025, so nothing is unlocked
        return false;
    }

    function handleDayClick(box, char) {
        // Non-interactive days do nothing on click
        if (!char.interactive) {
            return;
        }

        if (box.classList.contains('ball--locked')) {
            box.classList.add('shake');
            setTimeout(() => { box.classList.remove('shake'); }, 500);
            return;
        }
        openModal(char);
    }

    // Tree Layout Configuration
    // Each row is an array of objects.
    // type: 'star' | 'ball' | 'trunk'
    // style: 'dark' | 'light' (for balls)
    // day: number (optional, for dark balls and trunk)
    const treeLayout = [
        [{ type: 'star' }], // Row 0
        [{ type: 'ball', style: 'dark', day: 8 }], // Row 1
        [{ type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }], // Row 2
        [{ type: 'ball', style: 'dark', day: 9 }, { type: 'ball', style: 'dark', day: 10 }, { type: 'ball', style: 'dark', day: 11 }], // Row 3
        [{ type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }], // Row 4
        [{ type: 'ball', style: 'dark', day: 12 }, { type: 'ball', style: 'dark', day: 15 }, { type: 'ball', style: 'dark', day: 16 }, { type: 'ball', style: 'dark', day: 17 }, { type: 'ball', style: 'dark', day: 18 }], // Row 5
        [{ type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }, { type: 'ball', style: 'light' }], // Row 6
        [{ type: 'trunk', day: 19 }] // Row 7
    ];

    if (treeContainer) {
        treeLayout.forEach((rowItems, rowIndex) => {
            const row = document.createElement('div');
            row.classList.add('tree-row');

            rowItems.forEach(item => {
                let box = document.createElement('div');

                if (item.type === 'star') {
                    box.classList.add('day-box', 'star-box');
                    box.innerHTML = `<div class="star-shape">★</div>`;

                    // Find star character data (usually index 0 or find by type)
                    const starChar = characters.find(c => c.type === 'star');
                    if (starChar) {
                        box.addEventListener('click', () => {
                            const sleighImg = document.getElementById('sleigh-img');
                            if (sleighImg) {
                                // Remove animation class to reset
                                sleighImg.classList.remove('sleigh-animate');
                                // Force reflow to restart animation
                                void sleighImg.offsetWidth;
                                // Add animation class again
                                sleighImg.classList.add('sleigh-animate');
                            }
                        });
                    }

                } else if (item.type === 'trunk') {
                    box.classList.add('tree-trunk');
                    box.textContent = item.day;

                    const char = characters.find(c => c.day === item.day);
                    if (char) {
                        if (isDayUnlocked(char.day)) {
                            // Trunk is always unlocked in this design context or follows same rules
                            box.classList.add('ball--unlocked');
                        } else {
                            box.classList.add('ball--locked');
                        }
                        box.addEventListener('click', () => handleDayClick(box, char));
                    }

                } else if (item.type === 'ball') {
                    box.classList.add('day-box');

                    if (item.style === 'light') {
                        box.classList.add('ball--light');
                        // Light balls are decorative/empty
                    } else {
                        box.classList.add('ball--dark');
                        box.textContent = item.day;

                        const char = characters.find(c => c.day === item.day);
                        if (char) {
                            if (!char.interactive) {
                                box.classList.add('ball--non-interactive');
                            }

                            if (isDayUnlocked(char.day)) {
                                box.classList.add('ball--unlocked');
                            } else {
                                box.classList.add('ball--locked');
                            }

                            box.addEventListener('click', () => handleDayClick(box, char));
                        }
                    }
                }

                row.appendChild(box);
            });

            treeContainer.appendChild(row);
        });

        // Remove the old stump generation since it's now part of the layout
    }

    let slideIndex = 1;

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("carousel-slide");
        let dots = document.getElementsByClassName("dot");
        if (!slides.length) return;

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove('active');
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
            slides[slideIndex - 1].classList.add('active');
            if (dots.length > 0) dots[slideIndex - 1].className += " active";
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) prevBtn.addEventListener('click', () => plusSlides(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => plusSlides(1));

    const complimentContainer = document.getElementById('compliment-container');
    const complimentBtn = document.getElementById('compliment-btn');
    const complimentText = document.getElementById('compliment-text');

    if (complimentBtn) {
        complimentBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * compliments.length);
            const randomCompliment = compliments[randomIndex];
            complimentText.textContent = randomCompliment;
        });
    }

    function openModal(char) {
        charNameEl.textContent = char.name;
        charDayEl.textContent = char.day;

        // Handle HTML in description (for links)
        // Always use innerHTML to support formatting tags like <b>, <i>, <ul>
        charDescEl.innerHTML = char.desc;

        const carouselContainer = document.getElementById('carousel-container');
        const carouselSlides = document.getElementById('carousel-slides');
        const carouselDots = document.getElementById('carousel-dots');
        const formsContainer = document.getElementById('forms-container');
        const flipCardsContainer = document.getElementById('flip-cards-container');
        const tarotCardsContainer = document.getElementById('tarot-cards-container');
        const imageContainer = document.getElementById('image-container');
        const closingTextContainer = document.getElementById('closing-text-container');

        if (carouselContainer) carouselContainer.style.display = 'none';
        if (formsContainer) formsContainer.style.display = 'none';
        if (complimentContainer) complimentContainer.style.display = 'none';
        if (flipCardsContainer) flipCardsContainer.style.display = 'none';
        if (tarotCardsContainer) tarotCardsContainer.style.display = 'none';
        if (imageContainer) imageContainer.style.display = 'none';
        if (closingTextContainer) closingTextContainer.style.display = 'none';
        if (complimentText) complimentText.textContent = '';

        // Display single image if present
        if (char.image && imageContainer) {
            imageContainer.style.display = 'block';
            imageContainer.innerHTML = `<img src="${char.image}" alt="${char.name}" class="character-image">`;
        }

        if (char.images && char.images.length > 0 && carouselContainer) {
            carouselContainer.style.display = 'block';
            carouselSlides.innerHTML = '';
            carouselDots.innerHTML = '';

            char.images.forEach((imgSrc, index) => {
                const slide = document.createElement('img');
                slide.src = imgSrc;
                slide.classList.add('carousel-slide');
                carouselSlides.appendChild(slide);

                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => currentSlide(index + 1));
                carouselDots.appendChild(dot);
            });

            slideIndex = 1;
            showSlides(slideIndex);
        }

        if (char.forms && formsContainer) {
            formsContainer.style.display = 'block';
        }

        if (char.compliments && complimentContainer) {
            complimentContainer.style.display = 'block';
        }

        if (char.flipCards && flipCardsContainer) {
            flipCardsContainer.style.display = 'flex';
            const flipImgNoAi = document.getElementById('flip-img-no-ai');
            const flipImgAi = document.getElementById('flip-img-ai');
            const flipLabelWithout = document.querySelector('.flip-card-front h3:first-of-type');
            const flipLabelWith = document.querySelectorAll('.flip-card-front h3')[1];

            if (flipImgNoAi) flipImgNoAi.src = char.flipCards.withoutAi;
            if (flipImgAi) flipImgAi.src = char.flipCards.withAi;

            // Update flip card labels if custom labels provided
            if (char.flipCards.labelWithout && flipLabelWithout) {
                flipLabelWithout.textContent = char.flipCards.labelWithout;
            }
            if (char.flipCards.labelWith && flipLabelWith) {
                flipLabelWith.textContent = char.flipCards.labelWith;
            }
        }

        // Tarot Cards Section (Day 12)
        const tarotMessageContainer = document.getElementById('tarot-message-container');
        if (tarotCardsContainer) {
            tarotCardsContainer.style.display = 'none';
        }
        if (tarotMessageContainer) {
            tarotMessageContainer.style.display = 'none';
        }

        if (char.tarotCards && tarotCardsContainer) {
            tarotCardsContainer.style.display = 'flex';

            // Reset all cards to unflipped state and make visible
            const tarotCards = tarotCardsContainer.querySelectorAll('.tarot-card');
            tarotCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.display = 'block';
            });

            // Hide all messages
            if (tarotMessageContainer) {
                const allMessages = tarotMessageContainer.querySelectorAll('.tarot-message');
                allMessages.forEach(msg => msg.classList.remove('active'));
            }

            // Add click event to each card
            tarotCards.forEach(card => {
                card.onclick = function () {
                    const cardNumber = this.getAttribute('data-card');

                    // Flip this card
                    this.classList.add('flipped');

                    // Hide other cards
                    tarotCards.forEach(otherCard => {
                        if (otherCard !== this) {
                            otherCard.style.display = 'none';
                        }
                    });

                    // Show corresponding message
                    if (tarotMessageContainer) {
                        tarotMessageContainer.style.display = 'block';
                        const message = tarotMessageContainer.querySelector(`[data - message="${cardNumber}"]`);
                        if (message) {
                            message.classList.add('active');
                        }
                    }
                };
            });
        }

        // Sam's Phone Interaction Logic
        const samPhoneContainer = document.getElementById('sam-phone-container');
        if (samPhoneContainer) {
            if (char.samPhone) {
                samPhoneContainer.style.display = 'flex'; // Use flex to center

                const phoneWrapper = samPhoneContainer.querySelector('.sam-phone-wrapper');
                const phoneImg = document.getElementById('sam-phone-img');
                const resultImg = document.getElementById('sam-result-img');
                const photoZones = samPhoneContainer.querySelector('.sam-photo-zones');

                // Map photo names to image paths
                const photoMap = {
                    'bovensterij1': 'images/bovensterij1.jpg',
                    'bovensterij2': 'images/bovensterij2.jpg',
                    'bovensterij3': 'images/bovensterij3.jpg',
                    'ondersterij1': 'images/ondersterij1.jpg',
                    'ondersterij2': 'images/ondersterij2.jpg',
                    'ondersterij3': 'images/ondersterij3.jpg'
                };

                let isShowingResult = false;

                // Reset state
                phoneImg.style.display = 'block';
                resultImg.style.display = 'none';
                if (photoZones) photoZones.style.display = 'grid';
                isShowingResult = false;

                // Remove existing click listeners to prevent duplicates (clone node)
                const newWrapper = phoneWrapper.cloneNode(true);
                phoneWrapper.parentNode.replaceChild(newWrapper, phoneWrapper);

                // Re-select elements after clone
                const activeWrapper = samPhoneContainer.querySelector('.sam-phone-wrapper');
                const activePhoneImg = document.getElementById('sam-phone-img');
                const activeResultImg = document.getElementById('sam-result-img');
                const activeCloseBtn = document.getElementById('sam-close-btn');
                const activePhotoZones = activeWrapper.querySelector('.sam-photo-zones');

                // Initial state for close button
                if (activeCloseBtn) activeCloseBtn.style.display = 'none';

                // Add click handlers to each photo zone
                const zones = activeWrapper.querySelectorAll('.photo-zone');
                zones.forEach(zone => {
                    zone.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!isShowingResult) {
                            const photoName = zone.getAttribute('data-photo');
                            const imagePath = photoMap[photoName];
                            if (imagePath) {
                                activeResultImg.src = imagePath;
                                activePhoneImg.style.display = 'none';
                                activeResultImg.style.display = 'block';
                                if (activePhotoZones) activePhotoZones.style.display = 'none';
                                if (activeCloseBtn) activeCloseBtn.style.display = 'flex';
                                isShowingResult = true;
                            }
                        }
                    });
                });

                // Click on result image or close button to go back
                activeResultImg.addEventListener('click', () => {
                    if (isShowingResult) {
                        activeResultImg.style.display = 'none';
                        activePhoneImg.style.display = 'block';
                        if (activePhotoZones) activePhotoZones.style.display = 'grid';
                        if (activeCloseBtn) activeCloseBtn.style.display = 'none';
                        isShowingResult = false;
                    }
                });

                if (activeCloseBtn) {
                    activeCloseBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        activeResultImg.style.display = 'none';
                        activePhoneImg.style.display = 'block';
                        if (activePhotoZones) activePhotoZones.style.display = 'grid';
                        activeCloseBtn.style.display = 'none';
                        isShowingResult = false;
                    });
                }

            } else {
                samPhoneContainer.style.display = 'none';
            }
        }

        // Display closing text if present
        if (char.closingText && closingTextContainer) {
            closingTextContainer.style.display = 'block';
            // Use innerHTML to support HTML links
            if (char.closingText.includes('<a')) {
                closingTextContainer.innerHTML = char.closingText;
            } else {
                closingTextContainer.textContent = char.closingText;
            }
        }

        const videoContainer = document.getElementById('video-container');
        if (char.video && videoContainer) {
            videoContainer.style.display = 'block';
            videoContainer.innerHTML = `<video class="video-player" controls>
        <source src="${char.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>`;
        } else if (videoContainer) {
            videoContainer.style.display = 'none';
            videoContainer.innerHTML = '';
        }

        modal.classList.remove('hidden');

        // Auto-close modal after 2 minutes (120000ms)
        if (window.modalAutoCloseTimer) {
            clearTimeout(window.modalAutoCloseTimer);
        }
        window.modalAutoCloseTimer = setTimeout(() => {
            modal.classList.add('hidden');
        }, 120000);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (window.modalAutoCloseTimer) {
                clearTimeout(window.modalAutoCloseTimer);
            }
            modal.classList.add('hidden');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (window.modalAutoCloseTimer) {
                    clearTimeout(window.modalAutoCloseTimer);
                }
                modal.classList.add('hidden');
            }
        });
    }

    // Keyboard navigation with Enter key
    let currentDayIndex = -1; // Start before the first item (star)
    let dayElements = []; // Will store references to clickable elements

    // Populate dayElements after the tree is built
    function initializeKeyboardNavigation() {
        dayElements = [];

        // Find the star element
        const starElement = document.querySelector('.star-box');
        if (starElement) {
            dayElements.push({ element: starElement, day: 'star' });
        }

        // Find all interactive days in order (8-19)
        const interactiveDays = [8, 9, 10, 11, 12, 15, 16, 17, 18, 19];
        interactiveDays.forEach(dayNum => {
            const char = characters.find(c => c.day === dayNum);
            if (char && char.interactive && isDayUnlocked(dayNum)) {
                // Find the corresponding day box
                const dayBoxes = document.querySelectorAll('.day-box.ball--dark, .tree-trunk');
                dayBoxes.forEach(box => {
                    if (box.textContent === String(dayNum) && !box.classList.contains('ball--locked')) {
                        dayElements.push({ element: box, day: dayNum });
                    }
                });
            }
        });
    }

    // Call after tree is built
    setTimeout(initializeKeyboardNavigation, 100);

    // Listen for Enter key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // Don't interfere with password input
            if (passwordOverlay && passwordOverlay.style.display !== 'none') {
                return;
            }

            e.preventDefault();

            // If modal is open, close it first
            if (modal && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }

            // Move to next day
            currentDayIndex++;

            // Wrap around to beginning if we've gone past the end
            if (currentDayIndex >= dayElements.length) {
                currentDayIndex = 0;
            }

            // Click the current day
            if (dayElements[currentDayIndex]) {
                dayElements[currentDayIndex].element.click();
            }
        }
    });
});
