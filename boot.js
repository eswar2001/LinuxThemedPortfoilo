$('Document').ready(function () {
    var data = '<script src="terminal.js"></script><style>body{overflow: hidden;height:100%;width:100%;  background-color: black;}pre{ padding-bottom:6%; padding:1%;margin:0}.load{ padding-bottom:6%;min-height:100%;width:100%;background:black}.term{font-family:monospace;color:#fff;opacity:0.8;font-size:2em;overflow-y:auto;overflow-x:hidden;}.term:after{content:"_";opacity:1;animation:cursor 1s infinite}html{font-size:0.2rem}@media (min-width: 576px){html{font-size:0.6rem}}@media (min-width: 768px){html{font-size:0.8rem}}@media (min-width: 992px){html{font-size:1.0rem}}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="container-fluid"><div class="load "><pre class="term"> eswar2001@Kali: ~$ </pre></div></div>'
    $('#loading').fadeIn(4000, "fast");
    setTimeout(function () {
        $("#hmm").empty();
        $('#hmm').append(data);
    }, 4000);


});