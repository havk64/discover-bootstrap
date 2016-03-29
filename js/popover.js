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
        min: 0,
        max: 3,
        size: 'xs'
    }).on('rating.change', function(event,value,caption){
        alert("New value is: "+value);
    });
})
