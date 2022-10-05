// variables declaration
const forms = document.querySelector('.forms');
const pwShowHide = document.querySelectorAll('.eye-icon');
const linkIn = document.querySelector('.link-in');
const linkUp = document.querySelector('.link-up');



pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () =>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll('.password');
        pwFields.forEach(password => {
            if(password.type === 'password'){
                password.type = 'text';
                eyeIcon.classList.replace('bx-hide','bx-show');
                return;
            }else{
                password.type = 'password';
                eyeIcon.classList.replace('bx-show','bx-hide');


            }
        });
    });

    linkIn.addEventListener('click',() =>{
        forms.classList.add('show-signup');
    });

    linkUp.addEventListener('click',()=>{
        forms.classList.remove('show-signup');
    });
});