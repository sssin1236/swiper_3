(function(){
    emailjs.init("user_cGcjcB2Z06lEIK1gvpU8U");
})();

window.onload = function() {
    var form = document.getElementById("contact-form1");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        this.contact_number.value = Math.random() * 100000 | 0;


        emailjs
            .sendForm('service_8kbgpqp', 'template_kcdfhzh', this)
            .then(
                function(response) {
                    console.log('메일 발송 성공', response.status, response.text); 
                    alert("메일이 전송되었습니다. 감사합니다 :)");   
                    form.reset();   
                }, 
                function(error) {
                    console.log('메일 발송 실패', error);
                    alert("메일 발송에 실패했습니다.");
                }
            );
    });   
}

(function(){
    emailjs.init("user_cGcjcB2Z06lEIK1gvpU8U");
});

window.onload = function() {
    var form = document.getElementById("contact-form2");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        this.contact_number.value = Math.random() * 100000 | 0;


        emailjs
            .sendForm('service_8kbgpqp', 'template_th6t703', this)
            .then(
                function(response) {
                    console.log('메일 발송 성공', response.status, response.text); 
                    alert("메일이 전송되었습니다. 감사합니다 :)");   
                    form.reset();   
                }, 
                function(error) {
                    console.log('메일 발송 실패', error);
                    alert("메일 발송에 실패했습니다.");
                }
            );
    });   
}

(function(){
    emailjs.init("user_cGcjcB2Z06lEIK1gvpU8U");
});

window.onload = function() {
    var form = document.getElementById("contact-form3");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        this.contact_number.value = Math.random() * 100000 | 0;


        emailjs
            .sendForm('service_8kbgpqp', 'template_th6t703', this)
            .then(
                function(response) {
                    console.log('메일 발송 성공', response.status, response.text); 
                    alert("메일이 전송되었습니다. 감사합니다 :)");   
                    form.reset();   
                }, 
                function(error) {
                    console.log('메일 발송 실패', error);
                    alert("메일 발송에 실패했습니다.");
                }
            );
    });   
}
