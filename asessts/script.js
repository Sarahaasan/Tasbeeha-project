const p = document.querySelector('.azkar');
const num = document.getElementById('num');
const reset = document.getElementById('reset');
const next = document.getElementById('next');

let azkar = [
    "سبحان الله ",
    "الله أكبر",
    "لا إله إلا الله ",
    "الحمد لله ",
    "أستغفر الله العظيم وأتوب إليه",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    "سبحان الله وبحمده سبحان الله العظيم",
    "لا إله إلا أنت سبحانك إني كنت من الظالمين",
    "لا حول ولا قوة إلا بالله العلي العظيم",
    "اللهمَّ إني أسألُك علمًا نافعًا ورزقًا طيبًا وعملًا متقبلًا",
    "اللَّهُمَّ أنتَ ربِّي لا إلَهَ إلَّا أنتَ خلَقتَني وأَنا عبدُكَ وأَنا على عَهْدِكَ ووعدِكَ ما استطَعتُ، أعوذُ بِكَ من شرِّ ما صنعتُ، أبوءُ لَكَ بنعمتِكَ عليَّ وأبوءُ بذَنبي، فاغفِر لي فإنَّهُ لا يغفرُ الذُّنوبَ إلَّا أنتَ",
    "اللَّهُمَّ اجعلني لكَ ذَكَّارًا، لكَ شَكَّارًا، لكَ رَهَّابًا، لكَ مِطْواعًا، لكَ مُخْبِتًا، لكَ أَوَّاهًا مُنِيبًا، رَبِّ تَقَبَّلْ تَوْبَتِي وَاغْسِلْ حَوْبَتِي وَأَجِبْ دَعْوَتِي وَاهْدِ قَلْبِي وَسَدِّدْ لِسَانِي وَاسْلُلْ سَخِيمَةَ قَلْبِي"
];
//   let randomIndex = Math.floor(Math.random() * azkar.length);
  let counter = 0;
  next.addEventListener('click', ()=>
{
    let randomIndex = Math.floor(Math.random() * azkar.length);
    p.innerText = azkar[randomIndex]
    counter++;
    num.innerText = counter;
}
)
reset.addEventListener('click' , ()=>
{
    num.innerText = 0; 
}
)


  