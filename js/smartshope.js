/**
 * Created by viki on 9/12/14.
 */
function notifyme(){
    var to=$(".email").val();
    var html=$(".mail").html();


    jQuery.ajax({
        type:"GET",
        url:"http://tracker.cybergen.in/trackuser/1001?EVTNAME=subscribed&USRNAME="+to
    }).done(function(response){
        
    });
    jQuery.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'jyBQcgOT1KWpK6ELXRk-jA',
            'message': {
                'from_email': 'support@smartshope.in',
                'to': [
                    {
                        'email':to,
                        'name': 'RECIPIENT NAME (OPTIONAL)',
                        'type': 'to'
                    },
                    {
                        'email':'support@smartshope.in',
                        'name': 'RECIPIENT NAME (OPTIONAL)',
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'subject':"Thanks For Registering With Us",
                'html': html
            }
        }
    }).done(function(response) {

        swal("Congratulations", "You have subscribed with us we will intimate you as soon as our site is available", "success")
    });

}
