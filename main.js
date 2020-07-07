$(document).ready(function () {
    !(function (a) {
        var b =
            ("object" == typeof self && self.self === self && self) ||
            ("object" == typeof global && global.global === global && global);
        "function" == typeof define && define.amd ?
            define(["exports"], function (c) {
                b.ParticleNetwork = a(b, c);
            }) :
            "object" == typeof module && module.exports ?
            (module.exports = a(b, {})) :
            (b.ParticleNetwork = a(b, {}));
    })(function (a, b) {
        var c = function (a) {
            (this.canvas = a.canvas),
            (this.g = a.g),
            (this.particleColor = a.options.particleColor),
            (this.x = Math.random() * this.canvas.width),
            (this.y = Math.random() * this.canvas.height),
            (this.velocity = {
                x: (Math.random() - 0.5) * a.options.velocity,
                y: (Math.random() - 0.5) * a.options.velocity,
            });
        };
        return (
            (c.prototype.update = function () {
                (this.x > this.canvas.width + 20 || this.x < -20) &&
                (this.velocity.x = -this.velocity.x),
                (this.y > this.canvas.height + 20 || this.y < -20) &&
                (this.velocity.y = -this.velocity.y),
                (this.x += this.velocity.x),
                (this.y += this.velocity.y);
            }),
            (c.prototype.h = function () {
                this.g.beginPath(),
                    (this.g.fillStyle = this.particleColor),
                    (this.g.globalAlpha = 0.7),
                    this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI),
                    this.g.fill();
            }),
            (b = function (a, b) {
                (this.i = a),
                (this.i.size = {
                    width: this.i.offsetWidth,
                    height: this.i.offsetHeight,
                }),
                (b = void 0 !== b ? b : {}),
                (this.options = {
                    particleColor: void 0 !== b.particleColor ? b.particleColor : "#fff",
                    interactive: void 0 !== b.interactive ? b.interactive : !0,
                    velocity: this.setVelocity(b.speed),
                    density: this.j(b.density),
                }),
                this.init();
            }),
            (b.prototype.init = function () {
                if (
                    !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor)
                )
                    return (
                        console.error(
                            "Please specify a valid particleColor hexadecimal color"
                        ),
                        !1
                    );
                (this.canvas = document.createElement("canvas")),
                this.i.appendChild(this.canvas),
                    (this.g = this.canvas.getContext("2d")),
                    (this.canvas.width = this.i.size.width),
                    (this.canvas.height = this.i.size.height),
                    this.l(this.i, {
                        position: "relative",
                    }),
                    this.l(this.canvas, {
                        "z-index": "20",
                        position: "relative",
                    }),
                    window.addEventListener(
                        "resize",
                        function () {
                            return this.i.offsetWidth === this.i.size.width &&
                                this.i.offsetHeight === this.i.size.height ?
                                !1 :
                                ((this.canvas.width = this.i.size.width = this.i.offsetWidth),
                                    (this.canvas.height = this.i.size.height = this.i.offsetHeight),
                                    clearTimeout(this.m),
                                    void(this.m = setTimeout(
                                        function () {
                                            this.o = [];
                                            for (
                                                var a = 0; a <
                                                (this.canvas.width * this.canvas.height) /
                                                this.options.density; a++
                                            )
                                                this.o.push(new c(this));
                                            this.options.interactive && this.o.push(this.p),
                                                requestAnimationFrame(this.update.bind(this));
                                        }.bind(this),
                                        500
                                    )));
                        }.bind(this)
                    ),
                    (this.o = []);
                for (
                    var a = 0; a < (this.canvas.width * this.canvas.height) / this.options.density; a++
                )
                    this.o.push(new c(this));
                this.options.interactive &&
                    ((this.p = new c(this)),
                        (this.p.velocity = {
                            x: 0,
                            y: 0,
                        }),
                        this.o.push(this.p),
                        this.canvas.addEventListener(
                            "mousemove",
                            function (a) {
                                (this.p.x = a.clientX - this.canvas.offsetLeft),
                                (this.p.y = a.clientY - this.canvas.offsetTop);
                            }.bind(this)
                        ),
                        this.canvas.addEventListener(
                            "mouseup",
                            function (a) {
                                (this.p.velocity = {
                                    x: (Math.random() - 0.5) * this.options.velocity,
                                    y: (Math.random() - 0.5) * this.options.velocity,
                                }),
                                (this.p = new c(this)),
                                (this.p.velocity = {
                                    x: 0,
                                    y: 0,
                                }),
                                this.o.push(this.p);
                            }.bind(this)
                        )),
                    requestAnimationFrame(this.update.bind(this));
            }),
            (b.prototype.update = function () {
                this.g.clearRect(0, 0, this.canvas.width, this.canvas.height),
                    (this.g.globalAlpha = 1);
                for (var a = 0; a < this.o.length; a++) {
                    this.o[a].update(), this.o[a].h();
                    for (var b = this.o.length - 1; b > a; b--) {
                        var c = Math.sqrt(
                            Math.pow(this.o[a].x - this.o[b].x, 2) +
                            Math.pow(this.o[a].y - this.o[b].y, 2)
                        );
                        c > 120 ||
                            (this.g.beginPath(),
                                (this.g.strokeStyle = this.options.particleColor),
                                (this.g.globalAlpha = (120 - c) / 120),
                                (this.g.lineWidth = 0.7),
                                this.g.moveTo(this.o[a].x, this.o[a].y),
                                this.g.lineTo(this.o[b].x, this.o[b].y),
                                this.g.stroke());
                    }
                }
                0 !== this.options.velocity &&
                    requestAnimationFrame(this.update.bind(this));
            }),
            (b.prototype.setVelocity = function (a) {
                return "fast" === a ? 1 : "slow" === a ? 0.33 : "none" === a ? 0 : 0.66;
            }),
            (b.prototype.j = function (a) {
                return "high" === a ?
                    5e3 :
                    "low" === a ?
                    2e4 :
                    isNaN(parseInt(a, 10)) ?
                    1e4 :
                    a;
            }),
            (b.prototype.l = function (a, b) {
                for (var c in b) a.style[c] = b[c];
            }),
            b
        );
    });
    var canvasDiv = document.getElementById("particle-canvas");
    var options = {
        background: "#000",
        interactive: true,
        speed: "low",
        density: "high",
    };
    var particleCanvas = new ParticleNetwork(canvasDiv, options);
    const imgArray = [
        "images/c9.png",
        "images/c1.png",
        "images/c2.png",
        "images/c3.png",
        "images/c4.png",
        "images/c5.png",
        "images/c6.png",
        "images/c7.png",
        "images/c8.png",
        "images/c10.png",
        "images/c11.png",
        "images/c12.png",
        "images/c13.png",
        "images/c14.png",
        "images/c15.png",
        "images/c16.png",
        "images/c17.png",
        "images/c18.png",
        "images/c19.png",
        "images/c20.png",
        "images/c21.png",
        "images/c22.png",
        "images/c23.png",
        "images/c24.png",
        "images/c25.png",
        "images/c26.png",
        "images/c27.png",
        "images/c28.png",
    ];
    $("#particle-canvas").css("background-image", "url(" + imgArray[Math.floor(Math.random() * imgArray.length)] + ")");

    let interval = 0;

    setInterval(function () {
        interval = Math.floor(Math.random() * imgArray.length);
        console.log(interval);
        $("#particle-canvas").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" +
            imgArray[interval] +
            ")"
        );
    }, 10000);
    $.getJSON("Data.json", function (data) {
        var project =
            '<div  class=" row" style="text-align: center;align-content: space-around;">';
        $.each(data["projects"], function (key, value) {
            project +=
                '<div class="col"><div class=" card text-white z-depth-5" style="background-color: #f2f2f2; width: 18rem;height:330px;">' +
                ' <a target="_blank" href="' +
                value.url +
                '">';
            if (value.image != "NULL") {
                project += '<img src="' + value.image + '"class="card-img"></a>';
                project +=
                    ' <div class="card-body" style="color: black; "> <h5 class="card-title">' +
                    value.title +
                    "</h5>";
                project +=
                    '<p class="card-text">' + value.text + "</p></div></div></div>";
            } else {
                project += "</a>";
                project +=
                    ' <div class="card-body" style="color: black; "> <h5 class="card-title"><a target="_blank" href="' +
                    value.url +
                    '">' +
                    value.title +
                    "</a></h5>";
                project +=
                    '<p class="card-text">' + value.text + "</p></div></div></div>";
            }
        });
        project += "</div>";
        $("#projects").append(project);
        education = "";
        $.each(data["Education"], function (key, value) {
            education +=
                '<div class="row"><div class="col-md-4"><h4>' +
                value.institute +
                "</h4> <p>" +
                value.Timeline +
                "</p></div>";
            education +=
                '<div class="col-md-8">' +
                "<p> <strong>" +
                value.Course +
                '</strong> <span class="hidden-phone">' +
                value.experience;
            education +=
                '</br> </span> <span> <span> <img src="https://images.vexels.com/media/users/3/131261/isolated/preview/b2e48580147ca0ed3f970f30bf8bb009-map-location-marker-by-vexels.png" alt="Location" style="width: 15px;">' +
                value.locaton +
                "</span> </span></p>";
            education += "</div></div> </br>";
        });
        $("#education").append(education);
        delete project;
        delete education;
    });
    $("a").bind("click", function () {
        window.location.href = $(this).attr("href");
    });
});