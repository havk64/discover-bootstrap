document.addEventListener('DOMContentLoaded', function(){
    var options = ({ // => Options to be added to popover.
        trigger:"hover",
        placement: "right",
        title: "What's behind that link",
        content: "Tons of information about Acme's products and services. Click now, you wont be disappointed"
    })
    $('#Learn-More').popover(options); // => Call to popover on "hover".
    
    // => Options to Star Rating.
    $(".input-id").rating({ 
        stars: 3,
        type: "number",
        class: "rating",
        min: 0,
        max: 3,
        size: 'xs'
    }).on('rating.change', function(event,value,caption){ // On change alert value.
        alert("New value is: "+value);
    });
    
    // => Adding color picker call using modal.
    $('#colorpicker').click(function() {
        $('#modal').modal('toggle');
    });
    
    // => Adding color picker to input element.
    $('.colorpicker-element').colorpicker({
        colorSelectors: {  // => Adding Bootstrap colors to the picker.
            'default': '#777777',
            'primary': '#337ab7',
            'success': '#5cb85c',
            'info': '#5bc0de',
            'warning': '#f0ad4e',
            'danger': '#d9534f'
        }
    }).on('changeColor.colorpicker', function(event){ // => On change of color changes the background.
        $('body').css('background-color', event.color.toHex());
    });
})