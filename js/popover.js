document.addEventListener('DOMContentLoaded', function(){
    var options = ({ // => Options to be added to popover.
        trigger:"hover",
        placement: "right",
        title: "What's behind that link",
        content: "Tons of information about Acme's products and services. Click now, you wont be disappointed"
    })
    $('#Learn-More').popover(options); // => Call to popover on "hover".
    $("#input-id").rating({ 
        stars: 3,
        type: "number",
        class: "rating",
        max: 3,
        size: 'xs'
    })
})
