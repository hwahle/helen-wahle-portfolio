$(document).ready(function() {
    $('.img-holder').imageScroll({
        holderMaxHeight: 600
    })

    // 1st modal does not need any options
    $("#portfolio01").animatedModal();

    // 2nd modal on must specify modalTarget!
    $("#portfolio02").animatedModal({
        modalTarget: 'modal-02'
    });


    // fancier example
    $("#portfolio03").animatedModal({
        modalTarget: 'modal-03',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#3498db',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },
        afterOpen: function() {
            console.log("The animation is completed");
        },
        beforeClose: function() {
            console.log("The animation was called");
        },
        afterClose: function() {
            console.log("The animation is completed");
        }
    });

     $("#portfolio04").animatedModal({
        modalTarget: 'modal-04',
        animatedIn: 'fadeInUp',
        animatedOut: 'fadeOutUp',
        color: '#6633CC',
        // Callbacks
        beforeOpen: function() {
            console.log("The animation was called");
        },
        afterOpen: function() {
            console.log("The animation is completed");
        },
        beforeClose: function() {
            console.log("The animation was called");
        },
        afterClose: function() {
            console.log("The animation is completed");
        }
    });
})
