
var question = document.querySelectorAll(".main__faq__ques");
var answer = document.querySelectorAll(".main__faq__ans");
var arrow = document.querySelectorAll(".arrow");
var idOfActive = '';

for (var i=0; i < question.length; i++) {
    question[i].addEventListener("click", function(e){
        var x = this.id;         //ID of clicked question or index number of question array

            if ( idOfActive.length === 0) {         //When no question is active
                this.classList.toggle("main__faq__ques--active");
                answer[x].classList.toggle("main__faq__ans--hidden");
                answer[x].classList.toggle("animation");
                arrow[x].classList.toggle("arrow--up");

                idOfActive = x;
            }

            else if (idOfActive===x) {          //when active question is clicked again -- goes back to inactive state
                this.classList.toggle("main__faq__ques--active");
                answer[x].classList.toggle("main__faq__ans--hidden");
                answer[x].classList.toggle("animation");
                arrow[x].classList.toggle("arrow--up");

                idOfActive= "";
            }

            if (idOfActive !== x && idOfActive.length > 0) {        //when inactive question is clicked & one of the question is already active 
                                                                    // -- deactivate the active question and activates the clicked question
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