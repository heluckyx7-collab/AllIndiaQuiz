// Bilingual Question Bank
// lang: "hi" | "en" | "both"
// q = English, q_hi = Hindi
// options = English, options_hi = Hindi
// explain = English, explain_hi = Hindi

const questionBank = {
    "cbse-maths": [
        {
            lang: "both",
            q: "Which of the following is a prime number?",
            q_hi: "निम्नलिखित में से कौन सा अभाज्य संख्या है?",
            options: ["27", "31", "33", "35"],
            options_hi: ["27", "31", "33", "35"],
            correct: 1,
            explain: "31 is only divisible by 1 and itself. Others are composite.",
            explain_hi: "31 केवल 1 और स्वयं से विभाजित होता है। बाकी सभी भाज्य संख्याएँ हैं।"
        },
        {
            lang: "both",
            q: "The decimal expansion of 22/7 is:",
            q_hi: "22/7 का दशमलव प्रसार कैसा है?",
            options: ["Terminating", "Non-terminating repeating", "Non-terminating non-repeating", "None"],
            options_hi: ["समाप्य", "असमाप्य आवर्ती", "असमाप्य अनावर्ती", "इनमें से कोई नहीं"],
            correct: 1,
            explain: "22/7 = 3.142857142857... it repeats, so non-terminating repeating.",
            explain_hi: "22/7 = 3.142857... बार-बार दोहराता है, इसलिए असमाप्य आवर्ती है।"
        },
        {
            lang: "both",
            q: "Degree of the polynomial 3x² + 5x + 1 is:",
            q_hi: "बहुपद 3x² + 5x + 1 की घात क्या है?",
            options: ["1", "2", "3", "4"],
            options_hi: ["1", "2", "3", "4"],
            correct: 1,
            explain: "Highest power of x is 2, so degree is 2.",
            explain_hi: "x की सबसे बड़ी घात 2 है, इसलिए घात 2 है।"
        },
        {
            lang: "both",
            q: "Maximum number of roots of a quadratic equation is:",
            q_hi: "द्विघात समीकरण के अधिकतम मूल कितने हो सकते हैं?",
            options: ["1", "2", "3", "4"],
            options_hi: ["1", "2", "3", "4"],
            correct: 1,
            explain: "A quadratic equation has degree 2, so maximum 2 roots.",
            explain_hi: "द्विघात समीकरण की घात 2 होती है, इसलिए अधिकतम 2 मूल।"
        },
        {
            lang: "both",
            q: "If a₁₄ - a₈ = 24 in an A.P., common difference is:",
            q_hi: "यदि किसी समांतर श्रेणी में a₁₄ - a₈ = 24 हो, तो सार्व अंतर क्या होगा?",
            options: ["6", "4", "±4", "3"],
            options_hi: ["6", "4", "±4", "3"],
            correct: 1,
            explain: "a₁₄ = a+13d, a₈ = a+7d → 6d = 24 → d = 4",
            explain_hi: "a₁₄ = a+13d, a₈ = a+7d → 6d = 24 → d = 4"
        },
        {
            lang: "both",
            q: "Sum of a rational and an irrational number is always:",
            q_hi: "एक परिमेय और एक अपरिमेय संख्या का योग सदैव होता है:",
            options: ["Rational", "Irrational", "Zero", "One"],
            options_hi: ["परिमेय", "अपरिमेय", "शून्य", "एक"],
            correct: 1,
            explain: "Rational + Irrational is always Irrational.",
            explain_hi: "परिमेय + अपरिमेय हमेशा अपरिमेय होता है।"
        },
        {
            lang: "both",
            q: "LCM of x and y (when y is multiple of x) is:",
            q_hi: "x और y का LCM (जब y, x का गुणज हो) क्या होगा?",
            options: ["x", "y", "xy", "x+y"],
            options_hi: ["x", "y", "xy", "x+y"],
            correct: 1,
            explain: "If y is multiple of x, LCM is y.",
            explain_hi: "यदि y, x का गुणज है तो LCM y ही होगा।"
        },
        {
            lang: "both",
            q: "If zeroes of ax²+bx+c are equal, then:",
            q_hi: "यदि ax²+bx+c के शून्यक समान हों, तो:",
            options: ["c and b opposite signs", "c and a opposite signs", "c and b same signs", "c and a same signs"],
            options_hi: ["c और b विपरीत चिह्न", "c और a विपरीत चिह्न", "c और b समान चिह्न", "c और a समान चिह्न"],
            correct: 3,
            explain: "For equal roots D=0 → b²=4ac, so a and c same sign.",
            explain_hi: "समान मूलों के लिए D=0 → b²=4ac, इसलिए a और c समान चिह्न के होने चाहिए।"
        },
        {
            lang: "both",
            q: "Number of polynomials having zeroes -2 and 5 is:",
            q_hi: "-2 और 5 शून्यक वाले बहुपदों की संख्या है:",
            options: ["1", "2", "3", "More than 3"],
            options_hi: ["1", "2", "3", "3 से अधिक"],
            correct: 3,
            explain: "k(x+2)(x-5) can have infinite values of k.",
            explain_hi: "k(x+2)(x-5) में k के अनगिनत मान हो सकते हैं।"
        },
        {
            lang: "both",
            q: "If pair of linear equations is consistent, lines are:",
            q_hi: "यदि रैखिक समीकरणों का युग्म संगत है, तो रेखाएँ होंगी:",
            options: ["Parallel", "Always coincident", "Always intersecting", "Intersecting or coincident"],
            options_hi: ["समांतर", "हमेशा संपाती", "हमेशा प्रतिच्छेद करती", "प्रतिच्छेद या संपाती"],
            correct: 3,
            explain: "Consistent means solution exists → intersecting or coincident.",
            explain_hi: "संगत का मतलब हल मौजूद है → रेखाएँ प्रतिच्छेद करती हैं या संपाती होती हैं।"
        },
        {
            lang: "both",
            q: "Value of (√2 + √3)(√2 - √3) is:",
            q_hi: "(√2 + √3)(√2 - √3) का मान है:",
            options: ["-1", "1", "5", "-5"],
            options_hi: ["-1", "1", "5", "-5"],
            correct: 0,
            explain: "(a+b)(a-b) = a² - b² = 2 - 3 = -1",
            explain_hi: "(a+b)(a-b) = a² - b² = 2 - 3 = -1"
        },
        {
            lang: "both",
            q: "The graph of y = ax² + bx + c is a parabola when:",
            q_hi: "y = ax² + bx + c का ग्राफ परवलय कब होता है?",
            options: ["a = 0", "a ≠ 0", "b = 0", "c = 0"],
            options_hi: ["a = 0", "a ≠ 0", "b = 0", "c = 0"],
            correct: 1,
            explain: "When a ≠ 0 it is quadratic, graph is parabola.",
            explain_hi: "जब a ≠ 0 हो तो यह द्विघात है, ग्राफ परवलय होता है।"
        }
    ],

    "cbse-science": [
        {
            lang: "both",
            q: "Which gas is released during photosynthesis?",
            q_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
            correct: 1,
            explain: "Plants take CO₂ and release O₂ during photosynthesis.",
            explain_hi: "पौधे CO₂ लेते हैं और प्रकाश संश्लेषण में O₂ छोड़ते हैं।"
        },
        {
            lang: "both",
            q: "How many chambers does the human heart have?",
            q_hi: "मनुष्य के हृदय में कितने कक्ष होते हैं?",
            options: ["2", "3", "4", "5"],
            options_hi: ["2", "3", "4", "5"],
            correct: 2,
            explain: "Human heart has 4 chambers: 2 atria and 2 ventricles.",
            explain_hi: "मनुष्य के हृदय में 4 कक्ष होते हैं: 2 अलिंद और 2 निलय।"
        },
        {
            lang: "both",
            q: "pH of pure water is:",
            q_hi: "शुद्ध जल का pH मान है:",
            options: ["0", "7", "14", "1"],
            options_hi: ["0", "7", "14", "1"],
            correct: 1,
            explain: "Pure water is neutral, so pH = 7.",
            explain_hi: "शुद्ध जल उदासीन होता है, इसलिए pH = 7।"
        },
        {
            lang: "both",
            q: "Functional unit of kidney is:",
            q_hi: "वृक्क की कार्यात्मक इकाई है:",
            options: ["Neuron", "Nephron", "Alveoli", "Osteocyte"],
            options_hi: ["न्यूरॉन", "नेफ्रॉन", "एल्वियोली", "ओस्टियोसाइट"],
            correct: 1,
            explain: "Nephron is the functional unit of kidney.",
            explain_hi: "नेफ्रॉन वृक्क की कार्यात्मक इकाई है।"
        },
        {
            lang: "both",
            q: "Powerhouse of the cell is:",
            q_hi: "कोशिका का पावरहाउस है:",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
            options_hi: ["केन्द्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी बॉडी"],
            correct: 1,
            explain: "Mitochondria produces ATP, hence called powerhouse.",
            explain_hi: "माइटोकॉन्ड्रिया ATP बनाता है, इसलिए इसे पावरहाउस कहते हैं।"
        },
        {
            lang: "both",
            q: "Vitamin C deficiency causes:",
            q_hi: "विटामिन C की कमी से होता है:",
            options: ["Scurvy", "Rickets", "Beriberi", "Night blindness"],
            options_hi: ["स्कर्वी", "रिकेट्स", "बेरीबेरी", "रतौंधी"],
            correct: 0,
            explain: "Deficiency of Vitamin C causes Scurvy.",
            explain_hi: "विटामिन C की कमी से स्कर्वी होता है।"
        },
        {
            lang: "both",
            q: "Ozone layer is found in:",
            q_hi: "ओजोन परत कहाँ पाई जाती है?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            options_hi: ["ट्रोपोस्फियर", "स्ट्रेटोस्फियर", "मेसोस्फियर", "थर्मोस्फियर"],
            correct: 1,
            explain: "Ozone layer is present in Stratosphere.",
            explain_hi: "ओजोन परत स्ट्रेटोस्फियर में पाई जाती है।"
        },
        {
            lang: "both",
            q: "Basic unit of nervous system is:",
            q_hi: "तंत्रिका तंत्र की मूल इकाई है:",
            options: ["Neuron", "Nephron", "Alveoli", "Osteocyte"],
            options_hi: ["न्यूरॉन", "नेफ्रॉन", "एल्वियोली", "ओस्टियोसाइट"],
            correct: 0,
            explain: "Neuron is the basic unit of nervous system.",
            explain_hi: "न्यूरॉन तंत्रिका तंत्र की मूल इकाई है।"
        }
    ],

    "jee-maths": [
        {
            lang: "both",
            q: "Derivative of sin x is:",
            q_hi: "sin x का अवकलज है:",
            options: ["cos x", "-cos x", "tan x", "sec x"],
            options_hi: ["cos x", "-cos x", "tan x", "sec x"],
            correct: 0,
            explain: "d/dx (sin x) = cos x",
            explain_hi: "d/dx (sin x) = cos x"
        },
        {
            lang: "both",
            q: "Speed of light in vacuum is approximately:",
            q_hi: "निर्वात में प्रकाश की चाल लगभग है:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
            options_hi: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
            correct: 0,
            explain: "Speed of light c ≈ 3 × 10⁸ m/s",
            explain_hi: "प्रकाश की चाल c ≈ 3 × 10⁸ m/s"
        }
    ],

    "neet-biology": [
        {
            lang: "both",
            q: "Powerhouse of the cell is:",
            q_hi: "कोशिका का पावरहाउस है:",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
            options_hi: ["केन्द्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी बॉडी"],
            correct: 1,
            explain: "Mitochondria produces ATP.",
            explain_hi: "माइटोकॉन्ड्रिया ATP बनाता है।"
        },
        {
            lang: "both",
            q: "DNA full form is:",
            q_hi: "DNA का पूरा नाम है:",
            options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Deoxyribose Acid", "None"],
            options_hi: ["डीऑक्सीराइबोन्यूक्लिक अम्ल", "राइबोन्यूक्लिक अम्ल", "डीऑक्सीराइबोज अम्ल", "कोई नहीं"],
            correct: 0,
            explain: "DNA = Deoxyribonucleic Acid",
            explain_hi: "DNA = डीऑक्सीराइबोन्यूक्लिक अम्ल"
        }
    ],

    "ssc-gk": [
        {
            lang: "both",
            q: "First President of India was:",
            q_hi: "भारत के प्रथम राष्ट्रपति थे:",
            options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "B.R. Ambedkar"],
            options_hi: ["जवाहरलाल नेहरू", "डॉ. राजेंद्र प्रसाद", "सरदार पटेल", "बी.आर. अंबेडकर"],
            correct: 1,
            explain: "Dr. Rajendra Prasad was the first President of India.",
            explain_hi: "डॉ. राजेंद्र प्रसाद भारत के प्रथम राष्ट्रपति थे।"
        },
        {
            lang: "both",
            q: "National Animal of India is:",
            q_hi: "भारत का राष्ट्रीय पशु है:",
            options: ["Lion", "Tiger", "Elephant", "Peacock"],
            options_hi: ["शेर", "बाघ", "हाथी", "मोर"],
            correct: 1,
            explain: "Bengal Tiger is the National Animal of India.",
            explain_hi: "बंगाल टाइगर भारत का राष्ट्रीय पशु है।"
        },
        {
            lang: "both",
            q: "Capital of Maharashtra is:",
            q_hi: "महाराष्ट्र की राजधानी है:",
            options: ["Pune", "Nagpur", "Mumbai", "Nashik"],
            options_hi: ["पुणे", "नागपुर", "मुंबई", "नाशिक"],
            correct: 2,
            explain: "Mumbai is the capital of Maharashtra.",
            explain_hi: "मुंबई महाराष्ट्र की राजधानी है।"
        }
    ],

    // Fallbacks
    "cbse-gk": [],
    "state-maths": [],
    "state-science": [],
    "state-gk": [],
    "jee-science": [],
    "jee-physics": [],
    "neet-science": [],
    "neet-physics": [],
    "ssc-maths": [],
    "ssc-science": []
};

// Map board+subject to available keys
// We reuse some pools for now
questionBank["state-maths"] = questionBank["cbse-maths"];
questionBank["state-science"] = questionBank["cbse-science"];
questionBank["state-gk"] = questionBank["ssc-gk"];
questionBank["jee-science"] = questionBank["cbse-science"];
questionBank["jee-physics"] = questionBank["jee-maths"];
questionBank["neet-science"] = questionBank["cbse-science"];
questionBank["neet-physics"] = questionBank["jee-maths"];
questionBank["ssc-maths"] = questionBank["cbse-maths"];
questionBank["ssc-science"] = questionBank["cbse-science"];
questionBank["cbse-gk"] = questionBank["ssc-gk"];
questionBank["jee-gk"] = questionBank["ssc-gk"];
questionBank["neet-gk"] = questionBank["ssc-gk"];
