// Sample Questions Database
// Easy explanations in simple Hindi/English mix

const questionBank = {
    // CBSE Class 10 Maths
    "cbse-maths-10": [
        {
            q: "Kaunsa number prime number hai?",
            options: ["27", "31", "33", "35"],
            correct: 1,
            explain: "31 sirf 1 aur 31 se divide hota hai. 27 = 3×9, 33 = 3×11, 35 = 5×7. Isliye 31 prime hai."
        },
        {
            q: "22/7 ka decimal expansion kaisa hota hai?",
            options: ["Terminating", "Non-terminating repeating", "Non-terminating non-repeating", "None"],
            correct: 1,
            explain: "22/7 = 3.142857142857... yeh bar-bar 142857 repeat karta hai. Isliye non-terminating repeating hai."
        },
        {
            q: "Rational + Irrational number ka sum hamesha kya hota hai?",
            options: ["Rational", "Irrational", "Zero", "One"],
            correct: 1,
            explain: "Jaise 2 + √2 = irrational. Rational + irrational hamesha irrational hi rehta hai."
        },
        {
            q: "Polynomial 3x² + 5x + 1 ka degree kya hai?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explain: "Sabse badi power (exponent) hi degree hoti hai. Yahan x² hai, isliye degree 2."
        },
        {
            q: "Quadratic equation ke maximum kitne roots ho sakte hain?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explain: "Quadratic equation ka degree 2 hota hai, isliye maximum 2 roots hi hote hain."
        },
        {
            q: "Agar pair of linear equations consistent hai, to lines kaisi hongi?",
            options: ["Parallel", "Always coincident", "Always intersecting", "Intersecting ya coincident"],
            correct: 3,
            explain: "Consistent matlab solution exist karta hai. Lines ya to ek point pe milti hain (intersect) ya bilkul same (coincident) hoti hain."
        },
        {
            q: "Agar a₁₄ - a₈ = 24 ek A.P. mein, to common difference kya hoga?",
            options: ["6", "4", "±4", "3"],
            correct: 1,
            explain: "a₁₄ = a + 13d, a₈ = a + 7d. Difference = 6d = 24 → d = 4."
        },
        {
            q: "LCM of x aur y, jab y multiple of x ho, kya hota hai?",
            options: ["x", "y", "xy", "x+y"],
            correct: 1,
            explain: "Jab y, x ka multiple ho to LCM y hi hota hai. Example: LCM(4,12) = 12."
        },
        {
            q: "Zeroes -2 aur 5 wale polynomials kitne ho sakte hain?",
            options: ["1", "2", "3", "More than 3"],
            correct: 3,
            explain: "k(x+2)(x-5) form ke infinite polynomials ban sakte hain (k alag-alag). Isliye more than 3."
        },
        {
            q: "Agar quadratic ax² + bx + c ke zeroes equal hain, to?",
            options: ["c aur b opposite signs", "c aur a opposite signs", "c aur b same signs", "c aur a same signs"],
            correct: 3,
            explain: "Equal roots ke liye D=0 → b²=4ac. a aur c same sign hone chahiye taaki product positive rahe."
        }
    ],

    // CBSE Science Class 10
    "cbse-science-10": [
        {
            q: "Photosynthesis mein kaunsa gas release hota hai?",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            correct: 1,
            explain: "Plants CO₂ lete hain aur O₂ chhodte hain. Ye oxygen hi hum saans lete hain."
        },
        {
            q: "Human heart mein kitne chambers hote hain?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explain: "2 atria + 2 ventricles = 4 chambers. Left side oxygenated, right side deoxygenated blood."
        },
        {
            q: "pH scale mein pure water ka value kya hota hai?",
            options: ["0", "7", "14", "1"],
            correct: 1,
            explain: "pH 7 neutral hota hai. Pure water neutral hai isliye pH = 7."
        },
        {
            q: "Reflection of light mein angle of incidence = ?",
            options: ["Angle of refraction", "Angle of reflection", "90 degree", "0 degree"],
            correct: 1,
            explain: "Law of reflection: i = r. Incident angle hamesha reflection angle ke barabar hota hai."
        },
        {
            q: "Acid rain ka main cause kya hai?",
            options: ["CO₂", "SO₂ aur NO₂", "O₂", "N₂"],
            correct: 1,
            explain: "Factories se SO₂ aur NO₂ nikalte hain jo rain ke saath milkar sulfuric/nitric acid banate hain."
        },
        {
            q: "Nervous system ka basic unit kya hai?",
            options: ["Neuron", "Nephron", "Alveoli", "Osteocyte"],
            correct: 0,
            explain: "Neuron hi nerve cell hai. Ye signals carry karta hai brain se body tak."
        },
        {
            q: "Metals generally kya hote hain?",
            options: ["Brittle", "Malleable aur ductile", "Non-conductor", "Dull"],
            correct: 1,
            explain: "Metals ko sheets (malleable) aur wires (ductile) mein badla ja sakta hai. Ye unki khas property hai."
        },
        {
            q: "Ozone layer kahan maujood hai?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correct: 1,
            explain: "Ozone layer stratosphere mein hai. Ye UV rays se humari raksha karti hai."
        },
        {
            q: "Respiration ka end product kya hai (aerobic)?",
            options: ["Lactic acid", "Alcohol", "CO₂ + Water + Energy", "Only energy"],
            correct: 2,
            explain: "Aerobic respiration mein glucose + O₂ → CO₂ + H₂O + Energy (ATP)."
        },
        {
            q: "Mendel ne experiments kis plant pe kiye the?",
            options: ["Rose", "Pea plant", "Mango", "Wheat"],
            correct: 1,
            explain: "Gregor Mendel ne pea plant (Pisum sativum) pe genetics ke experiments kiye the."
        }
    ],

    // JEE Main sample
    "jee-main": [
        {
            q: "Speed of light in vacuum approximately?",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
            correct: 0,
            explain: "Light ki speed vacuum mein 3 × 10⁸ meter per second hoti hai. Ye universal constant hai."
        },
        {
            q: "Newton ka pehla law kis naam se jaana jata hai?",
            options: ["Law of acceleration", "Law of inertia", "Law of action-reaction", "Law of gravitation"],
            correct: 1,
            explain: "First law ko Law of Inertia kehte hain. Body rest ya uniform motion mein rehti hai jab tak force na lage."
        },
        {
            q: "Atomic number of Carbon?",
            options: ["6", "12", "8", "14"],
            correct: 0,
            explain: "Carbon ke nucleus mein 6 protons hote hain. Atomic number = number of protons = 6."
        },
        {
            q: "Derivative of sin x kya hota hai?",
            options: ["cos x", "-cos x", "tan x", "sec x"],
            correct: 0,
            explain: "d/dx (sin x) = cos x. Ye basic differentiation formula hai."
        },
        {
            q: "SI unit of Force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1,
            explain: "Force ka SI unit Newton (N) hai. 1 N = 1 kg⋅m/s²."
        },
        {
            q: "Which gas is used in fluorescent lamps?",
            options: ["Neon", "Argon", "Mercury vapour", "Helium"],
            correct: 2,
            explain: "Fluorescent tubes mein mercury vapour use hota hai jo UV light produce karta hai."
        },
        {
            q: "pH of acid solution is?",
            options: ["Less than 7", "Equal to 7", "More than 7", "Equal to 14"],
            correct: 0,
            explain: "Acids ka pH 0 se 7 ke beech hota hai. Jitna kam pH utna strong acid."
        },
        {
            q: "Work done formula?",
            options: ["Force × distance", "Force × time", "Mass × acceleration", "Power × time"],
            correct: 0,
            explain: "Work = F × d × cosθ. Simple language mein force times displacement in direction of force."
        },
        {
            q: "Valency of Oxygen?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explain: "Oxygen ke outer shell mein 6 electrons hain, 2 chahiye to complete. Isliye valency 2."
        },
        {
            q: "Acceleration due to gravity on Earth (approx)?",
            options: ["9.8 m/s²", "6.7 m/s²", "10.5 m/s²", "8.9 m/s²"],
            correct: 0,
            explain: "g ≈ 9.8 m/s². Har free falling object isi acceleration se girta hai (air resistance ignore)."
        }
    ],

    // NEET sample
    "neet": [
        {
            q: "Powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
            correct: 1,
            explain: "Mitochondria ATP banati hai jo cell ki energy hai. Isliye powerhouse kehte hain."
        },
        {
            q: "DNA ka full form?",
            options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Deoxyribose Acid", "None"],
            correct: 0,
            explain: "DNA = Deoxyribonucleic Acid. Ye genetic material hai jo traits pass karta hai."
        },
        {
            q: "Blood group O ka universal donor kyun kehte hain?",
            options: ["Antigens nahi hote", "Antibodies nahi hote", "Rh factor nahi", "Platelets zyada"],
            correct: 0,
            explain: "Blood group O mein A aur B antigens nahi hote, isliye kisi ko bhi de sakte hain (universal donor)."
        },
        {
            q: "Kidney ka functional unit?",
            options: ["Neuron", "Nephron", "Alveolus", "Hepatocyte"],
            correct: 1,
            explain: "Nephron urine banata hai. Har kidney mein lakhs of nephrons hote hain."
        },
        {
            q: "Vitamin C deficiency se kya hota hai?",
            options: ["Scurvy", "Rickets", "Beriberi", "Night blindness"],
            correct: 0,
            explain: "Vitamin C ki kami se Scurvy hota hai – gums se khoon aana, weakness etc."
        },
        {
            q: "Insulin hormone kahan se secrete hota hai?",
            options: ["Thyroid", "Pancreas", "Adrenal", "Pituitary"],
            correct: 1,
            explain: "Pancreas ke beta cells insulin banate hain jo blood sugar control karta hai."
        },
        {
            q: "Largest gland in human body?",
            options: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
            correct: 1,
            explain: "Liver sabse badi gland hai. Detoxification, bile production, metabolism sab karti hai."
        },
        {
            q: "Normal human body temperature?",
            options: ["98.6°F", "37°C", "Both a and b", "100°F"],
            correct: 2,
            explain: "37°C = 98.6°F. Dono same temperature hain, alag units mein."
        },
        {
            q: "RBCs ka lifespan approximately?",
            options: ["30 days", "60 days", "120 days", "365 days"],
            correct: 2,
            explain: "Red blood cells lagbhag 120 din tak jeete hain, phir spleen unhe tod deta hai."
        },
        {
            q: "Which blood cells help in clotting?",
            options: ["RBC", "WBC", "Platelets", "Plasma"],
            correct: 2,
            explain: "Platelets (thrombocytes) blood clot banate hain taaki bleeding ruk jaye."
        }
    ],

    // SSC / General
    "ssc": [
        {
            q: "Bharat ke pehle President kaun the?",
            options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "B.R. Ambedkar"],
            correct: 1,
            explain: "Dr. Rajendra Prasad 1950 se 1962 tak pehle President rahe."
        },
        {
            q: "Indian Constitution kab adopt hua?",
            options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1947"],
            correct: 2,
            explain: "Constitution 26 November 1949 ko adopt hua, lekin 26 January 1950 se lagu hua (Republic Day)."
        },
        {
            q: "National Animal of India?",
            options: ["Lion", "Tiger", "Elephant", "Peacock"],
            correct: 1,
            explain: "Bengal Tiger (Panthera tigris) India ka national animal hai."
        },
        {
            q: "Longest river in India?",
            options: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
            correct: 1,
            explain: "Ganga sabse lambi river hai India mein (approx 2525 km)."
        },
        {
            q: "Who wrote National Anthem?",
            options: ["Bankim Chandra", "Rabindranath Tagore", "Iqbal", "Sarojini Naidu"],
            correct: 1,
            explain: "Jana Gana Mana Rabindranath Tagore ne likha tha. 1911 mein pehli baar gaya gaya."
        },
        {
            q: "How many states in India currently?",
            options: ["28", "29", "27", "30"],
            correct: 0,
            explain: "Abhi 28 states aur 8 Union Territories hain (2026 tak)."
        },
        {
            q: "Capital of Maharashtra?",
            options: ["Pune", "Nagpur", "Mumbai", "Nashik"],
            correct: 2,
            explain: "Mumbai Maharashtra ki capital hai. Nagpur winter capital maani jaati hai."
        },
        {
            q: "Currency of India?",
            options: ["Dollar", "Rupee", "Yen", "Euro"],
            correct: 1,
            explain: "Indian Rupee (₹) humari currency hai. RBI issue karti hai."
        },
        {
            q: "Who is known as Father of Nation?",
            options: ["Nehru", "Gandhi", "Ambedkar", "Bose"],
            correct: 1,
            explain: "Mahatma Gandhi ko Father of the Nation kehte hain. Unhone non-violence se azadi dilayi."
        },
        {
            q: "Taj Mahal kis city mein hai?",
            options: ["Delhi", "Jaipur", "Agra", "Lucknow"],
            correct: 2,
            explain: "Taj Mahal Agra, Uttar Pradesh mein hai. Shah Jahan ne banwaya tha."
        }
    ],

    // General / Current style
    "general": [
        {
            q: "Earth ka nearest planet kaunsa hai?",
            options: ["Mars", "Venus", "Mercury", "Jupiter"],
            correct: 1,
            explain: "Venus Earth ke sabse kareeb hai distance ke hisaab se (average)."
        },
        {
            q: "Water ka chemical formula?",
            options: ["H2O", "CO2", "O2", "H2O2"],
            correct: 0,
            explain: "Do hydrogen + ek oxygen = H₂O. Ye basic chemistry hai."
        },
        {
            q: "Sun se light Earth tak kitne time mein aati hai?",
            options: ["8 minutes", "8 seconds", "8 hours", "1 day"],
            correct: 0,
            explain: "Approx 8 minutes 20 seconds. Light ki speed bahut tez hai lekin distance bhi bahut zyada hai."
        },
        {
            q: "Largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: 2,
            explain: "Pacific Ocean sabse bada aur gehra ocean hai."
        },
        {
            q: "Human body mein kitne bones hote hain (adult)?",
            options: ["206", "300", "180", "250"],
            correct: 0,
            explain: "Adult human skeleton mein 206 bones hote hain. Bacchon mein zyada hote hain jo baad mein jud jaate hain."
        },
        {
            q: "Fastest land animal?",
            options: ["Lion", "Cheetah", "Horse", "Leopard"],
            correct: 1,
            explain: "Cheetah 100+ km/h ki speed se daud sakta hai. Short distance mein sabse tez."
        },
        {
            q: "Which planet is called Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            explain: "Mars ko Red Planet kehte hain kyunki uski surface iron oxide (rust) se red dikhti hai."
        },
        {
            q: "Gas jo plants lete hain photosynthesis ke liye?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            correct: 2,
            explain: "Plants CO₂ absorb karte hain aur oxygen release karte hain."
        },
        {
            q: "Smallest bone in human body?",
            options: ["Femur", "Stapes", "Tibia", "Radius"],
            correct: 1,
            explain: "Stapes (ear mein) sabse chhoti bone hai. Sound vibrations pass karti hai."
        },
        {
            q: "How many colours in rainbow?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explain: "VIBGYOR – Violet, Indigo, Blue, Green, Yellow, Orange, Red. Total 7."
        }
    ]
};

// Sub categories mapping
const subCategories = {
    cbse: [
        { id: "cbse-maths-10", name: "Class 10 Maths", icon: "📐" },
        { id: "cbse-science-10", name: "Class 10 Science", icon: "🔬" }
    ],
    state: [
        { id: "ssc", name: "Common State Board Style (SSC level)", icon: "📝" },
        { id: "general", name: "General Knowledge (All Boards)", icon: "🌍" }
    ],
    competitive: [
        { id: "jee-main", name: "JEE Main (Sample)", icon: "⚡" },
        { id: "neet", name: "NEET (Sample)", icon: "🩺" },
        { id: "ssc", name: "SSC CGL / CHSL", icon: "📋" }
    ]
};
