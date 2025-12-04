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
            name: "Speurtocht naar de verstopplekken",
            interactive: true,
            desc: `Ho ho ho, &samhoud.
 
Zo, Sinterklaas is eindelijk weer vertrokken naar Spanje. Nu is het mijn beurt. En ik heb iets leuks meegenomen: een digitale agent advent kalender. Speciaal voor jullie.
 
Hoe werkt het? Simpel: elke maandag t/m vrijdag een vakje tot de kerstvakantie. Volgens mij hoef ik het niet uit te leggen, dat eerste vakje hebben jullie ook open gekregen.
 
Wat hebben jullie dit jaar mooie stappen gezet. Copilot gebruik +500% sinds de zomer. Chapeau! Je zou denken: met al die AI kunnen we nu lekker 3 dagen per week werken, toch?
 
Maar... ik heb even rondgekeken. Niets is minder waar. Jullie zijn keihard aan het werken. Die vierdaagse werkweek lijkt voor sommige van jullie ook allang verleden tijd.
 
Dus even een eerlijke vraag tussen ons: gebruiken jullie die agents wel goed genoeg? Want wat ik ook zie: een hele familie aan agents die gewoon klaarstaat. Wachtend. Tot iemand ze eindelijk inzet. 'Agentic workforce' - jullie kennen die term wel, het buzzword van het jaar. Maar &samhoud noemt het natuurlijk liever: de familie.
 
Misschien weet ik al wat het probleem is: die familie heeft bij de meesten van jullie nog geen gezicht. Ze zijn er wel, maar een beetje onzichtbaar. Nog maar even...
 
Hou deze kalender goed in de gaten. Want binnenkort stellen ze zich eindelijk écht voor. Geloof me, dit wil je niet missen.`
        },
        {
            day: 9,
            name: "De Toekomst van &samhoud",
            interactive: true,
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            flipCards: {
                withoutAi: 'images/day9_future_ai.jpg',
                withAi: 'images/day9_future_no_ai.jpg'
            }
        },
        {
            day: 10,
            name: "The InterviewAnalyzer Elf",
            interactive: true,
            desc: `Ho ho hóó lieve consultantjes van &samhoud!
Mijn nieuwe hulpjes—jullie slimme AI agents—staan te trappelen om hun grote face reveal aan jullie te doen. Maar één laatste elfje houdt zich nog een beetje schuil… en dat is omdat ze vóór ze haar gezicht laat zien, eerst een mooie naam van jullie wil krijgen!

Dit lieve elfje is de InterviewAnalyzer. En ze wil graag een naam die begint met de letter I.
Misschien Inge? Ian? Ilse? Isabelle?
Maar natuurlijk: de eer is helemaal aan jullie!

Stuur mij via het vakje een klein briefje met haar naam, en aan het einde van de dag kiezen we de meest populaire uit.

Ho ho hóó, wat spannend allemaal! 🎅✨`,
            forms: true
        },
        {
            day: 11,
            name: "Kerstcomplimenten",
            interactive: true,
            desc: `Ho ho hóó lieve consultant! 🎅✨
De Kerstman heeft even door al jullie collega-feedback gesnuffeld — en wat heb ik daar gezien? Jij bent echt een topper! Een glinsterende piek op de kerstboom, om precies te zijn.

Mijn geheugen wordt met de jaren natuurlijk niet béter… al die cadeaus, rendieren en namen onthoudt een oude man niet zomaar. Maar geen zorgen! Als je op de knop klikt, fluister ik je precies in wat jouw collega's allemaal over je hebben gezegd.

Ho ho hóó, ik kan je alvast verklappen: het is héél feestelijk. 🎄✨`,
            compliments: true
        },
        { day: 12, name: "12 December", desc: "Coming soon...", interactive: true },
        { day: 13, name: "13 December", desc: "", interactive: false },
        { day: 14, name: "14 December", desc: "", interactive: false },
        { day: 15, name: "15 December", desc: "Coming soon...", interactive: true },
        { day: 16, name: "16 December", desc: "Coming soon...", interactive: true },
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
        "Jij bent de Rudolph van het project: altijd voorop, altijd lichtgevende KPI's.",
        "Je hebt dit jaar meer impact gemaakt dan de Kerstman in één nacht.",
        "Je stakeholdermanagement is zo warm dat zelfs een sneeuwpop ervan smelt.",
        "Als er één iemand is die echte value onder de kerstboom legt, ben jij het.",
        "Jouw deliverables zijn consistenter dan de jaarlijkse kerstafspeellijst.",
        "Je bent de kerstlichtjes van het team: je brengt structuur, helderheid én een beetje magie.",
        "Je bent een echte North Star voor je collega's—altijd richting gevend.",
        "Je weet elke bottleneck sneller op te lossen dan de Kerstman zijn cadeautjes sorteert.",
        "Jouw work ethic is sterker dan kerstkoekjes in een trommel vol hongerige consultants.",
        "Je behoudt meer alignment dan een perfect versierde kerstboom met symmetrische ballen.",
        "Je output is zo high-quality, zelfs de kerstelfjes vragen om je templates.",
        "Jij bent onze jaarlijkse Q4 miracle KPI booster.",
        "Met jouw projectplanning zou zelfs de Kerstman zijn wereldreis efficiënter kunnen doen.",
        "Je brengt more joy in het team dan een onverwacht vrije middag in december.",
        "Je bent betrouwbaarder dan een SLA met kerstgarantie.",
        "Je bent de menselijke versie van een end-of-year performance uplift.",
        "Je houdt de scope beter in toom dan de Kerstman zijn rendieren.",
        "Jouw werktempo is sneller dan een kerstelf die achterloopt op zijn deadlines.",
        "Als consultants een adventskalender waren, dan was jij het vakje met de grootste chocolaatjes.",
        "Je bent het ultieme voorbeeld van een high-impact, low-maintenance Christmas miracle."
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

    function isDayUnlocked(dayNumber) {
        return true;
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
                    // Star is no longer clickable
                    /*
                    const starChar = characters.find(c => c.type === 'star');
                    if (starChar) {
                        box.addEventListener('click', () => {
                            charNameEl.textContent = starChar.name;
                            charDayEl.textContent = '';
                            charDescEl.textContent = starChar.desc;
                            document.getElementById('carousel-container').style.display = 'none';
                            document.getElementById('forms-container').style.display = 'none';
                            document.getElementById('compliment-container').style.display = 'none';
                            modal.classList.remove('hidden');
                        });
                    }
                    */

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
        charDescEl.textContent = char.desc;

        const carouselContainer = document.getElementById('carousel-container');
        const carouselSlides = document.getElementById('carousel-slides');
        const carouselDots = document.getElementById('carousel-dots');
        const formsContainer = document.getElementById('forms-container');
        const flipCardsContainer = document.getElementById('flip-cards-container');

        if (carouselContainer) carouselContainer.style.display = 'none';
        if (formsContainer) formsContainer.style.display = 'none';
        if (complimentContainer) complimentContainer.style.display = 'none';
        if (flipCardsContainer) flipCardsContainer.style.display = 'none';
        if (complimentText) complimentText.textContent = '';

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
            if (flipImgNoAi) flipImgNoAi.src = char.flipCards.withoutAi;
            if (flipImgAi) flipImgAi.src = char.flipCards.withAi;
        }

        modal.classList.remove('hidden');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});
