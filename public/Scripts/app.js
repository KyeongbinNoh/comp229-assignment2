/*File name:app.js*/
/*Name : Kyeongbin Noh*/
/*StudentID: 301130132*/
/*Date : OCT 22*/

//IIFE - Immeiately Invorked Function Expression
(function(){

    function Start()
    {
        console.log('App Started...');

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');

                }
            });
        }
    }

    window.addEventListener('load', Start);
})();