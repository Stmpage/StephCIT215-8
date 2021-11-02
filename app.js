new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ]
    },})

const card = document.querySelector('.card');
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
});
function flip(){
    const element = event.currentTarget;
    if (element.className === "card") {
        if(element.style.transform === "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)";
        }
    }
}

methods:{
    addCard: function f() {

        this.cards.push({
            question:this.questionInput,
            answer:this.answerInput,
            category:this.categoryInput,
            flipped:false
        })
        this.questionInput="";
        this.answerInput="";
        this.categoryInput="";
    }
};