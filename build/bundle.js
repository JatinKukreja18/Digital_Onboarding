
    function toggleButton(selector){    
        document.querySelector(selector).disabled = !document.querySelector(selector).disabled ;
    }

    function activateCard(){
        // Activat card code here

        document.querySelector('#body-not-activated').classList.add('hidden');
        document.querySelector('#body-activated').classList.remove('hidden');
        document.querySelector('#body-not-activated-set2').classList.add('hidden');
        document.querySelector('#body-activated-set2').classList.remove('hidden');
        document.querySelector('#card-activation-text').innerHTML = 'Card Activated';
        changeStep('2');
    }

    function changeStep(num){
        if(document.querySelector('.do-step-container.active')){
            document.querySelector('.do-step-container.active').classList.remove('active');
        }
        // if(document.querySelector('.do-step-container.in-progress')){
        //     document.querySelector('.do-step-container.in-progress').classList.remove('in-progress');
        // }
        document.querySelector("#counter-number").innerHTML = num;
        switch (num) {
            case '1':
                // change to 1
                if(document.querySelector("#step-card-activation").classList.contains('done')){
                    document.querySelector("#step-card-activation").classList.add('active');
                }
                else{
                    document.querySelector("#step-card-activation").classList.add('in-progress','active');
                    document.querySelector("#step-card-activation").classList.remove('done');
                }
                document.querySelector('#finish-bottom-box').classList.remove('show');

                break;
            
            case '2':
                // change to 2
                if(document.querySelector("#step-generate-pin").classList.contains('done')){
                    document.querySelector("#step-generate-pin").classList.add('active');                
                }
                else{
                    document.querySelector("#step-card-activation").classList.add('done');
                    document.querySelector("#step-card-activation").classList.remove('in-progress');
                    document.querySelector("#step-card-activation").classList.remove('active');
                    document.querySelector("#step-card-activation .do-step-heading-text").classList.add('clickable');
                    document.querySelector("#step-generate-pin").classList.add('in-progress')
                    document.querySelector("#step-generate-pin").classList.add('active')
                    document.querySelector("#step-generate-pin .do-step-heading-text").classList.add('clickable');
                }
                document.querySelector('#finish-bottom-box').classList.remove('show');

                break;
            
            case '3':
                // change to 3
                if(document.querySelector("#step-estate-sub").classList.contains('done')){
                    document.querySelector("#step-estate-sub").classList.add('active');                
                }
                else{
                    document.querySelector("#step-generate-pin").classList.add('done');
                    document.querySelector("#step-generate-pin").classList.remove('in-progress');
                    document.querySelector("#step-generate-pin .do-step-heading-text").classList.add('clickable');
                    document.querySelector("#step-estate-sub").classList.add('active');
                    document.querySelector("#step-estate-sub").classList.add('in-progress');
                    document.querySelector("#step-estate-sub .do-step-heading-text").classList.add('clickable');
                
                }
                document.querySelector('#finish-bottom-box').classList.remove('show');

                break;
            
            case '4':
                    // change to 4
                if(document.querySelector("#step-international-usage").classList.contains('done')){
                    document.querySelector("#step-international-usage").classList.add('active');                
                }
                else{
                    document.querySelector("#step-estate-sub").classList.add('done');
                    document.querySelector("#step-estate-sub").classList.remove('in-progress');
                    document.querySelector("#step-estate-sub .do-step-heading-text").classList.add('clickable');
                    document.querySelector("#step-international-usage").classList.add('in-progress');
                    document.querySelector("#step-international-usage").classList.add('active');
                    document.querySelector("#step-international-usage .do-step-heading-text").classList.add('clickable');
                
                }
                document.querySelector('#finish-bottom-box').classList.remove('show');
                break;

            case '5':
                    // change to 5
                if(document.querySelector("#step-do-confirmation").classList.contains('done')){
                    document.querySelector("#step-do-confirmation").classList.add('active');                
                }
                else{
                    document.querySelector("#step-international-usage").classList.add('done');
                    document.querySelector("#step-international-usage").classList.remove('in-progress');
                    document.querySelector("#step-international-usage .do-step-heading-text").classList.add('clickable');
                    document.querySelector("#step-do-confirmation").classList.add('in-progress');
                    document.querySelector("#step-do-confirmation").classList.add('active');
                    document.querySelector("#step-do-confirmation .do-step-heading-text").classList.add('clickable');
                
                }
                hangleFinishSticky();
                break;
                    
                
            default:
                break;
        }
        var targetEle = document.querySelector(".do-step-container.active");
        if(targetEle  && window.outerWidth < 768){
            document.querySelector("html").scrollTop = targetEle.offsetTop + 100;
        }
        // targetEle.style.marginTop = '20px';
        // targetEle.scrollIntoView({behaviour:"smooth"})
        
    }
    function hangleFinishSticky(){
        if(window.innerWidth > 768){
            document.querySelector('#body-do-confirmation').addEventListener('scroll',function(){
                if(this.scrollTop > ( this.scrollHeight - this.getBoundingClientRect().height) - 30){
                    document.querySelector('#finish-bottom-box').classList.add('show');
                }    
            })
            if(
                document.querySelector('#body-do-confirmation').getBoundingClientRect().height  == document.querySelector('#body-do-confirmation').scrollHeight || 
                (document.querySelector('#body-do-confirmation').scrollHeight - document.querySelector('#body-do-confirmation').scrollTop) == document.querySelector('#body-do-confirmation').getBoundingClientRect().height) {
                document.querySelector('#finish-bottom-box').classList.add('show');
            }
        }
            else{
                window.addEventListener('scroll',function(){

                if(document.scrollingElement.scrollTop > ( document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight - 30)){
                    if(document.querySelector('#step-do-confirmation').classList.contains('active')){
                        document.querySelector('#finish-bottom-box').classList.add('show');
                    }
                }
            })
        }
    }
    function generateOtp(){
        // Generate Otp Here
        document.querySelector('#otp-input > input').value = '';
        window.location.hash = "generateOtp";
    }
    function generateOtpEmail(){
        // Generate Otp Here
        document.querySelector('#otp-email-input > input').value = '';
        window.location.hash = "generateOtpEmail";
    }
    function switchGeneratedPin(){
        document.querySelector('#body-before-otp').classList.add('hidden');
        document.querySelector('#body-pin-generated').classList.add('hidden');
        // document.querySelector('#body-after-otp').classList.remove('hidden');
        document.querySelector('#new-pin-input > input').value = '';
        document.querySelector('#confirm-pin-input > input').value = '';
    }


    function validateOtp(inputEl){
        
        if(inputEl.value.length == 6){
            // Get Otp Pin here

            // validate if it matches the OTP 
            if(true){
                // replace true with otp condition as per your requirement
                inputEl.blur();
                window.location.hash = "#";
                // switchGeneratedPin();
                generatePin()
            }
            else{
                // incase OTP is not correct
                document.querySelector('#otp-input > input').value = '';
            }
        }
    }
    function switchToUpdateEmail(){
        document.querySelector('#body-before-subscription-set2').classList.add('hidden');
        document.querySelector('#body-after-subscription-set2').classList.add('hidden');
        document.querySelector('#body-update-email-set2').classList.remove('hidden');

        document.querySelector('#body-before-subscription-set3').classList.add('hidden');
        document.querySelector('#body-after-subscription-set3').classList.add('hidden');
        document.querySelector('#body-update-email-set3').classList.remove('hidden');

        document.querySelector('#body-before-subscription-set4').classList.add('hidden');
        document.querySelector('#body-after-subscription-set4').classList.add('hidden');
        document.querySelector('#body-update-email-set4').classList.remove('hidden');
        document.querySelector('#updated-email > input').value = '';
    }

    function validateOtpEmail(inputEl){
        
        if(inputEl.value.length == 6){
            // Get Otp Pin here

            // validate if it matches the OTP 
            if(true){
                // replace true with otp condition as per your requirement
                inputEl.blur();
                window.location.hash = "#";
                // switchToUpdateEmail();
                emailUpdated()
            }
            else{
                // incase OTP is not correct
                document.querySelector('#otp-input > input').value = '';
            }
        }
    }
    function validateUpdatedEmail(el){
        var re = /\S+@\S+\.\S+/;
        if(re.test(el.value)){
            // console.log(el);
            document.querySelector("#update-email-button").disabled = false;
            document.querySelector("#update-email-button-set4").disabled = false;
            document.querySelector("#update-email-button-set3").disabled = false;
        }else{
            document.querySelector("#update-email-button").disabled = true;
            document.querySelector("#update-email-button-set4").disabled = true;
            document.querySelector("#update-email-button-set3").disabled = true;
        }
    }
    function emailUpdated(){
        var value = '';
        if(document.querySelector('.sets.set-3').classList.contains('active')){
            value = 'set3'
        }else if(document.querySelector('.sets.set-4').classList.contains('active')){
            value = 'set4'
        }
        document.querySelector('#body-before-subscription-' + value).classList.add('hidden');
        document.querySelector('#body-after-subscription-' + value).classList.add('hidden');
        document.querySelector('#body-update-email-' + value).classList.add('hidden');   
        document.querySelector('#body-after-update-email-' + value).classList.remove('hidden');
        // changeStep('4');   
        if(value == 'set3' || value == 'set4'){
            document.querySelector('.step-sub-text.' + value).innerHTML = "E-mail ID not Verified";
            document.querySelector('.step-sub-text.' + value).classList.add('grey');
        }
    }
    function cancelUpdate(value){
        if(value == 'set2'){
            document.querySelector('#body-before-subscription-set2').classList.remove('hidden');
            document.querySelector('#body-after-subscription-set2').classList.add('hidden');
            document.querySelector('#body-update-email-set2').classList.add('hidden');   
            document.querySelector('#body-after-update-email-set2').classList.add('hidden');
        }
        if(value == 'set3'){
            document.querySelector('#body-before-subscription-set3').classList.remove('hidden');
            document.querySelector('#body-after-subscription-set3').classList.add('hidden');
            document.querySelector('#body-update-email-set3').classList.add('hidden');   
            document.querySelector('#body-after-update-email-set3').classList.add('hidden');
        }
        if(value == 'set4'){
            document.querySelector('#body-before-subscription-set4').classList.remove('hidden');
            document.querySelector('#body-after-subscription-set4').classList.add('hidden');
            document.querySelector('#body-update-email-set4').classList.add('hidden');   
            document.querySelector('#body-after-update-email-set4').classList.add('hidden');
        }
    }
    function validatePin(){
        var newPinEl = document.querySelector("#new-pin-input > input");
        var confirmPinEl = document.querySelector("#confirm-pin-input > input");
        
         
        if(newPinEl.value.length >= 4){
            if(newPinEl.value.length > 4){
                newPinEl.value = newPinEl.value.slice(0,4);
            }
            confirmPinEl.focus();
        }

        if(confirmPinEl.value.length >= 4){
            if(confirmPinEl.value.length > 4){
                confirmPinEl.value = confirmPinEl.value.slice(0,4);
            }
        }
        if(newPinEl.value.length == 4 && confirmPinEl.value.length == 4){
            if(newPinEl.value != confirmPinEl.value){
                document.querySelector("#step2-pin-button").disabled = true;
            }else{
                document.querySelector("#step2-pin-button").disabled = false;  
                confirmPinEl.blur();
            }   
        }
        else{
            document.querySelector("#step2-pin-button").disabled = true;  
        }
    }
    function validatePinReset(){
        var newPinEl = document.querySelector("#new-pin-reset > input");
        var confirmPinEl = document.querySelector("#confirm-pin-reset > input");
        
         
        if(newPinEl.value.length >= 4){
            if(newPinEl.value.length > 4){
                newPinEl.value = newPinEl.value.slice(0,4);
            }
            confirmPinEl.focus();
        }

        if(confirmPinEl.value.length >= 4){
            if(confirmPinEl.value.length > 4){
                confirmPinEl.value = confirmPinEl.value.slice(0,4);
            }
        }
        if(newPinEl.value.length == 4 && confirmPinEl.value.length == 4){
            if(newPinEl.value != confirmPinEl.value){
                document.querySelector("#step2-pin-button-reset").disabled = true;
            }else{
                document.querySelector("#step2-pin-button-reset").disabled = false;  
                confirmPinEl.blur();
            }
        }else{
            document.querySelector("#step2-pin-button-reset").disabled = true;  
        }
    }

    function generatePin(){
        // Generate Pin Code here
        document.querySelector('#body-before-otp').classList.add('hidden');
        document.querySelector('#body-pin-generated').classList.remove('hidden');
        document.querySelector('#generate-pin-text').innerHTML = 'PIN Generated';
        // changeStep('3');
        if(document.querySelector('#reset-pin-block').classList.contains('show')){
            showResetFields();
        }
    }
    function estateSubscription(){

        // activate E statement usage here;


        document.querySelector('#body-before-subscription').classList.add('hidden');
        document.querySelector('#body-after-subscription').classList.remove('hidden');
        document.querySelector('#estate-sub-text').innerHTML = 
        "E-Statement Subscribed  <span class='reward-sub-text grey'> <img src='./assets/icons/star-grey.svg' alt=''> 100 Reward points claimed</span>";
        window.location.hash = '';
        changeStep('4');
    }
    function set3Subscribe(){
        document.querySelector('#body-before-subscription-set3').classList.add('hidden');
        document.querySelector('#body-after-subscription-set3').classList.remove('hidden');
        // window.location.hash = '';
        document.querySelector('.step-link.subscribed').classList.remove('hide');
        document.querySelector('.step-link.not-subscribed').classList.add('hide');
        changeStep('4'); 
    }
    function set4Subscribe(){
        document.querySelector('#body-before-subscription-set4').classList.add('hidden');
        document.querySelector('#body-after-subscription-set4').classList.remove('hidden');
        document.querySelector('.step-link.subscribed').classList.remove('hide');
        document.querySelector('.step-link.not-subscribed').classList.add('hide');
        // window.location.hash = '';
        changeStep('4'); 
    }
    function verifyEsub(){
        document.querySelector('#body-before-subscription-set2').classList.add('hidden');
        document.querySelector('#body-after-subscription-set2').classList.remove('hidden');
        window.location.hash = '';
        changeStep('4'); 
    }
    function activateInternational(){
        // activate international usage here;

        document.querySelector('#body-before-IUActivation').classList.add('hidden');
        document.querySelector('#body-after-IUActivation').classList.remove('hidden');
        document.querySelector('#international-usage-text').innerHTML =  "International Usage Activated";
        window.location.hash = '';
        changeStep('5');
        // document.querySelector('#finish-bottom-box').classList.add('show');
    }
    function callMeBack(){

    }
    function showResetFields(){
        el = document.querySelector("#reset-text");
        if(el.innerHTML == 'Reset PIN'){
            el.innerHTML = 'Cancel Reset'
        }else{
            el.innerHTML = 'Reset PIN'
        }
        document.querySelector('#new-pin-reset > input').value = '';
        document.querySelector('#confirm-pin-reset  > input').value = '';
        document.querySelector('#step2-pin-button-reset').disabled = true;
        document.querySelector("#reset-pin-block").classList.toggle('show');
        document.querySelector("#reset-buttons").classList.toggle('show');
        document.querySelector("#not-reset-buttons").classList.toggle('show');
    }



    window.addEventListener('keyup',function(e){
        if(e.keyCode == 27){
            window.location.href = "#";
        }
    })
    window.onhashchange = function(e) { 
    //    console.log( document.querySelector(".modal:target"))
        if(document.querySelector(".modal:target")){
            document.querySelector('.do-body-container').classList.add('do-modal-open');   
        }
        else{
            document.querySelector('.do-body-container').classList.remove('do-modal-open');   
        }
    }