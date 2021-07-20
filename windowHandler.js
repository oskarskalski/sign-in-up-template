(() => {
    let getLoginBtn = document.querySelector('.sign-in-container__go-to-sign-in-section');

    let getRegisterSection = document.querySelector('.form-operations__sign-up');
    let getLoginSection = document.querySelector('.form-operations__sign-in');
    let test = document.querySelector('.page-main__form-operations');

    if(getLoginBtn){

        getLoginBtn.addEventListener('click', () => {
            test.classList.toggle('outAnimation')
            test.classList.toggle('inAnimation')

            getRegisterSection.classList.toggle('disabledSection')
            getLoginSection.classList.toggle('disabledSection')

        }, false)
    }

    let getRegisterBtn = document.querySelector('.sign-up-container__go-to-sign-up-section');

    if(getRegisterBtn){
        getRegisterBtn.addEventListener('click', () => {
            test.classList.toggle('inAnimation')

            getRegisterSection.classList.toggle('disabledSection')
            getLoginSection.classList.toggle('disabledSection')

            if(document.querySelector('.outAnimation')){
                test.classList.toggle('outAnimation')
            }
        }, false)
    }
})()

