# India Free Quiz Website 🇮🇳

**100% Free • No Paid Content • Sirf Side Ads**

## Features
- CBSE Class 10 Maths & Science quizzes
- State Board style + General Knowledge
- Competitive: JEE Main, NEET, SSC samples
- Har quiz mein **exactly 10 questions**
- Galat answer pe **bahut easy explanation** (simple language)
- Side ads (left + right) – Google AdSense ready
- Super fast loading (pure HTML/CSS/JS, no heavy library)
- Mobile friendly

## Files
```
quiz-website/
├── index.html      ← Main page
├── style.css       ← Design
├── script.js       ← Quiz logic
├── questions.js    ← Saare questions + explanations
└── README.md
```

## Kaise Use Karein

1. **Local pe chalane ke liye:**
   - Folder download karo
   - `index.html` ko browser mein open karo (double click)

2. **Website pe host karne ke liye (Free options):**
   - Netlify / Vercel / GitHub Pages pe upload karo
   - Ya koi bhi free hosting

3. **Ads lagane ke liye:**
   - `index.html` mein left-ad aur right-ad wale divs mein
   - Google AdSense code paste kar do
   - Abhi placeholder hai

## Questions Badhana / Naye Add Karna

`questions.js` file kholo.

Naya category banane ke liye:
```js
"naya-category": [
    {
        q: "Sawal yahan?",
        options: ["A", "B", "C", "D"],
        correct: 0,   // 0 = pehla option, 1 = doosra...
        explain: "Bahut simple explanation yahan likho."
    },
    // 10 questions minimum rakho
]
```

Phir `subCategories` object mein bhi add kar do.

## Future Improvements (Suggestions)
- Aur subjects (Class 12, Physics, Chemistry, Biology alag)
- State boards ke specific questions (UP Board, Maharashtra etc.)
- Timer add kar sakte ho
- Leaderboard (localStorage se)
- Dark/Light mode

---

Bana diya maine pure scripts.  
Koi doubt ho to pooch lena!  
All the best for your website 🚀
