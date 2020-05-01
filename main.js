$(document).ready(function () {
  
    const imgArray = [
        'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
        'https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1832&q=80',
        'https://images.unsplash.com/photo-1536383389102-0ac333c44981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1760&q=80',
        'https://images.unsplash.com/photo-1568160922344-092593e55669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    ];

    $('#particle-canvas').css('background-image', 'url(' + imgArray[0] + ')');

    let interval = 0;

    setInterval(function () {
        if (interval < (imgArray.length - 1)) {
            interval++;
        } else {
            interval = 0;
        }
        $('#particle-canvas').css('background-image',
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + imgArray[
                interval] + ')');
    }, 4000);
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}