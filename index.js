
var question = document.querySelectorAll(".main__faq__ques");
var answer = document.querySelectorAll(".main__faq__ans");
var arrow = document.querySelectorAll(".arrow");
var idOfActive = '';

for (var i=0; i < question.length; i++) {
    question[i].addEventListener("click", function(e){
        var x = this.id;         //ID of clicked question or index number of question

            if ( idOfActive.length === 0) {
                this.classList.toggle("main__faq__ques--active");
                answer[x].classList.toggle("main__faq__ans--hidden");
                answer[x].classList.toggle("animation");
                // answer[x].classList.toggle("animation-remove");
                arrow[x].classList.toggle("arrow--up");

                idOfActive = x;
            }

            else if (idOfActive===x) {
                this.classList.toggle("main__faq__ques--active");
                answer[x].classList.toggle("main__faq__ans--hidden");
                answer[x].classList.toggle("animation");
                arrow[x].classList.toggle("arrow--up");

                idOfActive= "";
            }

            if (idOfActive !== x && idOfActive.length > 0) {
                question[idOfActive].classList.toggle("main__faq__ques--active");
                answer[idOfActive].classList.toggle("main__faq__ans--hidden");
                answer[idOfActive].classList.toggle("animation");
                arrow[idOfActive].classList.toggle("arrow--up");

                this.classList.toggle("main__faq__ques--active");
                answer[x].classList.toggle("main__faq__ans--hidden");
                answer[x].classList.toggle("animation");
                arrow[x].classList.toggle("arrow--up");

                idOfActive = x;
            }

    });
}