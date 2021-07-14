/*
 * AllInOne Banner - Banner Rotator v3.5
 *
 * Copyright 2012-2017, LambertGroup
 *
 */
(function (f) {
    function I(a, b, c) {
        c.responsive && (newCss = "", -1 != a.css("font-size")
            .lastIndexOf("px") ? (fontSize = a.css("font-size")
                .substr(0, a.css("font-size")
                    .lastIndexOf("px")), newCss += "font-size:" + fontSize / (c.origWidth / c.width) + "px;") : -1 != a.css("font-size")
            .lastIndexOf("em") && (fontSize = a.css("font-size")
                .substr(0, a.css("font-size")
                    .lastIndexOf("em")), newCss += "font-size:" + fontSize / (c.origWidth / c.width) + "em;"), -1 != a.css("line-height")
            .lastIndexOf("px") ? (lineHeight = a.css("line-height")
                .substr(0, a.css("line-height")
                    .lastIndexOf("px"))
                , newCss += "line-height:" + lineHeight / (c.origWidth / c.width) + "px;") : -1 != a.css("line-height")
            .lastIndexOf("em") && (lineHeight = a.css("line-height")
                .substr(0, a.css("line-height")
                    .lastIndexOf("em")), newCss += "line-height:" + lineHeight / (c.origWidth / c.width) + "em;"), a.wrapInner('<div class="newFS" style="' + newCss + '" />'));
        var h = a.attr("data-final-left")
            , d = a.attr("data-final-top");
        c.responsive && (h = parseInt(h / (c.origWidth / c.width), 10), d = parseInt(d / (c.origWidth / c.width), 10));
        c = 1;
        1 == b.isVideoPlaying && (c = 0);
        a.animate({
            opacity: c
            , left: h + "px"
            , top: d + "px"
        }, 1E3 * a.attr("data-duration"), function () {
            1 == b.isVideoPlaying && f(b.currentImg.attr("data-text-id"))
                .children()
                .css("opacity", 0)
        })
    }

    function F(a, b, c, h) {
        f(a.currentImg.attr("data-text-id"))
            .css("display", "block");
        c = f(a.currentImg.attr("data-text-id"))
            .children();
        var d = 0;
        currentText_arr = [];
        c.each(function () {
            currentText_arr[d] = f(this);
            var c = currentText_arr[d].attr("data-initial-left")
                , h = currentText_arr[d].attr("data-initial-top");
            b.responsive && (c = parseInt(c / (b.origWidth / b.width), 10)
                , h = parseInt(h / (b.origWidth / b.width), 10));
            currentText_arr[d].css({
                left: c + "px"
                , top: h + "px"
                , opacity: parseInt(currentText_arr[d].attr("data-fade-start"), 10) / 100
            });
            var n = currentText_arr[d];
            setTimeout(function () {
                I(n, a, b)
            }, 1E3 * currentText_arr[d].attr("data-delay"));
            d++
        })
    }

    function J(a) {
        for (var b, c, f = a.length; f; b = parseInt(Math.random() * f, 10), c = a[--f], a[f] = a[b], a[b] = c);
        return a
    }

    function G(a, b) {
        nowx = (new Date)
            .getTime();
        a.mouseOverBanner || a.effectIsRunning || !b.showCircleTimer || (a.ctx.clearRect(0, 0, a.canvas.width
                , a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, (a.timeElapsed + nowx - a.arcInitialTime) / 1E3 * 2 / b.autoPlay * Math.PI, !1), a.ctx.lineWidth =
            b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
    }

    function H(a, b, c) {
        var h = D();
        f(".stripe", a)
            .remove();
        f(".block", a)
            .remove();
        z = q = Math.round(b.width / b.numberOfStripes);
        for (var d = !0, g = 0; g < b.numberOfStripes; g++) g == b.numberOfStripes - 1 && (z = a.width() - q * (b.numberOfStripes - 1)), !b.responsive || -1 == h || -1 != h && 9 <= h ? -1 != n.indexOf("ipad") || -1 != n.indexOf("iphone") || -1 != n.indexOf("ipod") || -1 != n.indexOf("webos") ? d = !1 : a.append(f('<div class="stripe"></div>')
            .css({
                opacity: "0"
                , left: q * g + "px"
                , width: z + "px"
                , height: "0px"
                , background: 'url("' + c.current_imgInside.attr("src") + '") ' + -1 * g * q + "px 0%"
            })) : d = !1, d || (mleft = -1 * q * g, a.append(f('<div class="stripe"><img src="' + c.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + 'px;"></div>')
            .css({
                opacity: "0"
                , left: q * g + "px"
                , width: z + "px"
                , height: "0px"
            })));
        b.responsive && d && (-1 == h || -1 != h && 9 <= h) && f(".stripe", a)
            .css({
                "-webkit-background-size": b.width + "px " + b.height + "px"
                , "-moz-background-size": b.width + "px " + b.height + "px"
                , "-o-background-size": b.width +
                    "px " + b.height + "px"
                , "-ms-background-size": b.width + "px " + b.height + "px"
                , "background-size": b.width + "px " + b.height + "px"
            })
    }

    function K(a, b, c) {
        var h = D();
        f(".stripe", a)
            .remove();
        f(".block", a)
            .remove();
        for (var d = Math.round(b.width / b.numberOfColumns), g = Math.round(b.height / b.numberOfRows), p, w, r, k, l = !0, m = 0; m < b.numberOfRows; m++)
            for (var t = 0; t < b.numberOfColumns; t++) r = d * t, k = g * m, p = t == b.numberOfColumns - 1 ? b.width - d * (b.numberOfColumns - 1) : d, w = m == b.numberOfRows - 1 ? b.height - g * (b.numberOfRows - 1) : g, !b.responsive || -1 == h || -1 !=
                h && 9 <= h ? -1 != n.indexOf("ipad") || -1 != n.indexOf("iphone") || -1 != n.indexOf("ipod") || -1 != n.indexOf("webos") ? l = !1 : a.append(f('<div class="block"></div>')
                    .css({
                        opacity: "0"
                        , left: r + "px"
                        , top: k + "px"
                        , width: p + "px"
                        , height: w + "px"
                        , background: 'url("' + c.current_imgInside.attr("src") + '") -' + r + "px -" + k + "px"
                    })) : l = !1, l || (mleft = -1 * r, mtop = -1 * k, a.append(f('<div class="block"><img src="' + c.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + "px; margin-top:" + mtop + 'px;"></div>')
                    .css({
                        opacity: "0"
                        , left: r + "px"
                        , top: k + "px"
                        , width: p + "px"
                        , height: w + "px"
                    })));
        b.responsive && l && (-1 == h || -1 != h && 9 <= h) && f(".block", a)
            .css({
                "-webkit-background-size": b.width + "px " + b.height + "px"
                , "-moz-background-size": b.width + "px " + b.height + "px"
                , "-o-background-size": b.width + "px " + b.height + "px"
                , "-ms-background-size": b.width + "px " + b.height + "px"
                , "background-size": b.width + "px " + b.height + "px"
            })
    }

    function E(a, b, c, f, d) {
        var g = a.width()
            , h = a.height();
        a.css({
            width: "0"
            , height: "0"
        });
        b == f.numberOfRows - 1 && c == f.numberOfColumns - 1 ? setTimeout(function () {
            a.animate({
                opacity: "1.0"
                , width: g
                , height: h
            }, 1E3 * f.effectDuration / 3, "", function () {
                d.trigger("effectComplete")
            })
        }, p) : setTimeout(function () {
            a.animate({
                opacity: "1.0"
                , width: g
                , height: h
            }, 1E3 * f.effectDuration / 3)
        }, p);
        p += 25
    }

    function A(a, b, c, h, d, g, n, w) {
        var r = !0;
        if (!b.loop && c.current_img_no + a >= h || !b.loop && 0 > c.current_img_no + a) r = !1;
        if (r) {
            f(".newFS", g)
                .contents()
                .unwrap();
            b.showCircleTimer && (c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height), c.ctx.beginPath(), c.ctx.globalAlpha = b.behindCircleAlpha / 100, c.ctx.arc(b.circleRadius + 2 * b.circleLineWidth
                , b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), c.ctx.lineWidth = b.circleLineWidth + 2, c.ctx.strokeStyle = b.behindCircleColor, c.ctx.stroke(), c.ctx.beginPath(), c.ctx.globalAlpha = b.circleAlpha / 100, c.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 0, !1), c.ctx.lineWidth = b.circleLineWidth, c.ctx.strokeStyle = b.circleColor, c.ctx.stroke());
            f(c.currentImg.attr("data-text-id"))
                .css("display", "none");
            f(n[c.current_img_no])
                .removeClass("bottomNavButtonON");
            b.randomizeImages && !c.bottomNavClicked ? (r = Math.floor(Math.random() * h), c.current_img_no = c.current_img_no === r ? Math.floor(Math.random() * h) : r) : c.current_img_no = c.current_img_no + a >= h ? 0 : 0 > c.current_img_no + a ? h - 1 : c.current_img_no + a;
            c.bottomNavClicked = !1;
            f(n[c.current_img_no])
                .addClass("bottomNavButtonON");
            c.currentImg = f(w[c.current_img_no]);
            c.current_imgInside = c.currentImg.find("img:first");
            c.currentImg.attr("data-transition") ? (d = c.currentImg.attr("data-transition"), "random" == d && (d = B[Math.floor(Math.random() *
                B.length)])) : d = "random" != b.defaultEffect ? b.defaultEffect : B[Math.floor(Math.random() * B.length)];
            "alternateSlide" == d && (d = 1 === a ? "slideFromRight" : "slideFromLeft");
            c.effectIsRunning = !0;
            if ("fade" == d || "slideFromLeft" == d || "slideFromRight" == d || "slideFromTop" == d || "slideFromBottom" == d) H(g, b, c), a = f(".stripe:first", g), "fade" == d && (a.css({
                    top: "0px"
                    , height: "100%"
                    , width: g.width() + "px"
                }), a.animate({
                    opacity: "1.0"
                }, 2E3 * b.effectDuration, "", function () {
                    g.trigger("effectComplete")
                })), "slideFromLeft" == d && (a.css({
                    top: "0px"
                    , height: "100%"
                    , width: "0"
                }), a.animate({
                    opacity: "1.0"
                    , width: g.width() + "px"
                }, 1E3 * b.effectDuration, "", function () {
                    g.trigger("effectComplete")
                })), "slideFromRight" == d && (a.css({
                    top: "0px"
                    , height: "100%"
                    , width: "0"
                    , left: g.width() + 5 + "px"
                }), a.animate({
                    opacity: "1.0"
                    , left: "0"
                    , width: g.width() + "px"
                }, 1E3 * b.effectDuration, "", function () {
                    g.trigger("effectComplete")
                })), "slideFromTop" == d && (a.css({
                    top: "0px"
                    , height: "0"
                    , width: g.width() + "px"
                }), a.animate({
                    opacity: "1.0"
                    , height: g.height() + "px"
                }, 1E3 * b.effectDuration, "", function () {
                    g.trigger("effectComplete")
                }))
                , "slideFromBottom" == d && (a.css({
                    height: "0"
                    , width: g.width() + "px"
                    , top: g.height() + "px"
                }), a.animate({
                    opacity: "1.0"
                    , top: 0
                    , height: g.height() + "px"
                }, 1E3 * b.effectDuration, "", function () {
                    g.trigger("effectComplete")
                }));
            0 <= d.indexOf("Stripes") && (H(g, b, c), a = 0 <= d.indexOf("Reverse") ? f(".stripe", g)
                .myReverse() : f(".stripe", g), p = 100, i = 0, a.each(function () {
                    var a = f(this);
                    "topBottomDroppingStripes" != d && "topBottomDroppingReverseStripes" != d || a.css({
                        top: "0px"
                    });
                    "bottomTopDroppingStripes" != d && "bottomTopDroppingReverseStripes" !=
                        d || a.css({
                            bottom: "0px"
                        });
                    "leftRightFadingStripes" != d && "leftRightFadingReverseStripes" != d || a.css({
                        top: "0px"
                        , height: "100%"
                        , width: "0"
                    });
                    "asynchronousDroppingStripes" == d && (i % 2 ? a.css({
                        top: "0px"
                    }) : a.css({
                        bottom: "0px"
                    }));
                    if ("leftRightFadingStripes" == d || "leftRightFadingReverseStripes" == d) {
                        var c = q;
                        if ("leftRightFadingStripes" == d && i == b.numberOfStripes - 1 || "leftRightFadingReverseStripes" == d && 0 == i) c = z;
                        i == b.numberOfStripes - 1 ? setTimeout(function () {
                                a.animate({
                                    width: c + "px"
                                    , opacity: "1.0"
                                }, 800 * b.effectDuration, "", function () {
                                    g.trigger("effectComplete")
                                })
                            }
                            , p) : setTimeout(function () {
                            a.animate({
                                width: c + "px"
                                , opacity: "1.0"
                            }, 800 * b.effectDuration)
                        }, p)
                    } else i == b.numberOfStripes - 1 ? setTimeout(function () {
                        a.animate({
                            height: "100%"
                            , opacity: "1.0"
                        }, 1E3 * b.effectDuration, "", function () {
                            g.trigger("effectComplete")
                        })
                    }, p) : setTimeout(function () {
                        a.animate({
                            height: "100%"
                            , opacity: "1.0"
                        }, 1E3 * b.effectDuration)
                    }, p);
                    p += 50;
                    i++
                }));
            if (0 <= d.indexOf("Blocks"))
                if (K(g, b, c), c = 0 <= d.indexOf("Reverse") ? f(".block", g)
                    .myReverse() : "randomBlocks" == d ? J(f(".block", g)) : f(".block", g), p = 100, "randomBlocks" ==
                    d) {
                    i = 0;
                    var k = b.numberOfRows * b.numberOfColumns;
                    c.each(function () {
                        var a = f(this)
                            , d = a.width()
                            , e = a.height();
                        a.css({
                            width: "0"
                            , height: "0"
                        });
                        i == k - 1 ? setTimeout(function () {
                            a.animate({
                                opacity: "1.0"
                                , width: d
                                , height: e
                            }, 1E3 * b.effectDuration / 3, "", function () {
                                g.trigger("effectComplete")
                            })
                        }, p) : setTimeout(function () {
                            a.animate({
                                opacity: "1.0"
                                , width: d
                                , height: e
                            }, 1E3 * b.effectDuration / 3)
                        }, p);
                        p += 25;
                        i++
                    })
                } else {
                    var l = 0
                        , m = 0
                        , t = [];
                    t[l] = [];
                    c.each(function () {
                        t[l][m] = f(this);
                        m++;
                        m == b.numberOfColumns && (l++, m = 0, t[l] = [])
                    });
                    m = l = 0;
                    p = 100;
                    c = f(t[l][m]);
                    for (E(c, 0, 0, b, g); l < b.numberOfRows - 1 || m < b.numberOfColumns - 1;)
                        for (l < b.numberOfRows - 1 && l++, m < b.numberOfColumns - 1 && m++, i = l, m < l && b.numberOfRows > b.numberOfColumns && (i = l - m), j = 0, l < m && b.numberOfRows < b.numberOfColumns && (j = m - l); 0 <= i && j <= m;) c = f(t[i--][j++]), E(c, i, j, b, g);
                    p = b.numberOfRows < b.numberOfColumns ? p - 25 * (b.numberOfRows - 1) : p - 25 * (b.numberOfColumns - 1);
                    limit_i = 0;
                    for (limit_j = m - l; limit_i < l && limit_j < m;) {
                        i = l + 1;
                        for (j = limit_j; i > limit_i && j < m;) --i, j += 1, c = f(t[i][j]), E(c, i, j, b, g);
                        limit_i++;
                        limit_j++
                    }
                }
        }
    }

    function D() {
        var a = -1;
        "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
        return parseInt(a, 10)
    }
    var B = "fade slideFromLeft slideFromRight slideFromTop slideFromBottom topBottomDroppingStripes topBottomDroppingReverseStripes bottomTopDroppingStripes bottomTopDroppingReverseStripes asynchronousDroppingStripes leftRightFadingStripes leftRightFadingReverseStripes topBottomDiagonalBlocks topBottomDiagonalReverseBlocks alternateSlide randomBlocks".split(" ")
        , q, z, p = 100
        , n = navigator.userAgent.toLowerCase();
    f.fn.allinone_bannerRotator = function (a) {
        a = f.extend({}, f.fn.allinone_bannerRotator.defaults, a);
        return this.each(function () {
            var b = f(this);
            responsiveWidth = b.parent()
                .width();
            responsiveHeight = b.parent()
                .height();
            a.responsiveRelativeToBrowser && (responsiveWidth = f(window)
                .width(), responsiveHeight = f(window)
                .height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            a.responsive && (a.origWidth !=
                responsiveWidth || a.width100Proc) && (a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight)));
            a.width = parseInt(a.width, 10);
            a.height = parseInt(a.height, 10);
            b.css("display", "block");
            var c = f("<div></div>")
                .addClass("allinone_bannerRotator")
                .addClass(a.skin)
                , h = f('<div class="bannerControls">   <div class="leftNav"></div>   <div class="rightNav"></div>      </div> <canvas class="mycanvas"></canvas>');
            b.wrap(c);
            b.after(h);
            var d = b.parent(".allinone_bannerRotator")
                , g = f(".bannerControls", d)
                , c = f('<div class="bottomNavLeft"></div>')
                , h = f('<div class="bottomNav"></div>')
                , p = f('<div class="bottomNavRight"></div>');
            b.after(c);
            b.after(h);
            b.after(p);
            a.showAllControllers || g.css("display", "none");
            var w = f(".leftNav", d)
                , r = f(".rightNav", d);
            w.css("display", "none");
            r.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (w.css("display", "block"), r.css("display", "block"));
            var k = f(".bottomNav", d)
                , l = f(".bottomNavLeft", d)
                , m = f(".bottomNavRight"
                    , d)
                , t;
            k.css("display", "block");
            l.css("display", "block");
            m.css("display", "block");
            k.css("top", a.height + "px");
            k.css({
                bottom: a.thumbsWrapperMarginBottom + "px"
                , top: "auto"
            });
            l.css({
                bottom: a.thumbsWrapperMarginBottom + "px"
                , top: "auto"
            });
            m.css({
                bottom: a.thumbsWrapperMarginBottom + "px"
                , top: "auto"
            });
            a.showBottomNav || (k.css("display", "none"), l.css("display", "none"), m.css("display", "none"));
            a.showOnInitBottomNav || (k.css("left", "-5000px"), l.css("left", "-5000px"), m.css("left", "-5000px"));
            var c = D()
                , C = a.defaultEffect
                , v = 0
                , e = {
                    current_img_no: 0
                    , currentImg: 0
                    , current_imgInside: ""
                    , bottomNavClicked: !1
                    , effectIsRunning: !1
                    , mouseOverBanner: !1
                    , rightVal: 0
                    , isAttractiveResp: !1
                    , timeoutID: ""
                    , intervalID: ""
                    , arcInitialTime: (new Date)
                        .getTime()
                    , timeElapsed: 0
                    , windowWidth: 0
                    , canvas: ""
                    , ctx: ""
                    , bannerRatio: a.origWidth / a.origHeight
                };
            e.canvas = f(".mycanvas", d)[0];
            e.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
            e.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth; - 1 != c && 9 > c && (a.showCircleTimer = !1);
            a.showCircleTimer && (e.ctx = e.canvas.getContext("2d"));
            d.width(a.width);
            d.height(a.height);
            g.css("margin-top", parseInt((a.height - w.height()) / 2, 10) + "px");
            var u = b.find("ul:first")
                .children()
                , x, q = 0
                , z = 0;
            u.each(function () {
                e.currentImg = f(this);
                e.currentImg.is("li") || (e.currentImg = e.currentImg.find("li:first"));
                e.currentImg.is("li") && (e.currentImg.css("display", "none"), v++, x = f('<div class="bottomNavButtonOFF" rel="' + (v - 1) + '"></div>'), k.append(x), q += parseInt(x.css("padding-left")
                    .substring(0, x.css("padding-left")
                        .length - 2), 10) + x.width(), z = parseInt((k.height() -
                    parseInt(x.css("height")
                        .substring(0, x.css("height")
                            .length - 2))) / 2, 10), x.css("margin-top", z + "px"))
            });
            k.width(q);
            a.showOnInitBottomNav && (k.css("left", parseInt((d.width() - q) / 2, 10) + "px"), l.css("left", parseInt(k.css("left")
                .substring(0, k.css("left")
                    .length - 2), 10) - l.width() + "px"), m.css("left", parseInt(k.css("left")
                .substring(0, k.css("left")
                    .length - 2), 10) + k.width() + parseInt(x.css("padding-left")
                .substring(0, x.css("padding-left")
                    .length - 2), 10) + "px"));
            e.current_img_no = a.firstImg;
            a.firstImg > v && (e.current_img_no =
                v);
            0 > a.firstImg && (e.current_img_no = 0);
            a.randomizeImages && (e.current_img_no = Math.floor(Math.random() * v));
            e.currentImg = f(u[e.current_img_no]);
            e.current_imgInside = e.currentImg.find("img:first"); - 1 != n.indexOf("ipad") || -1 != n.indexOf("iphone") || -1 != n.indexOf("ipod") || -1 != n.indexOf("webos") || -1 != c && 7 >= c ? d.append('<img id="curBgImgIos" src="' + e.current_imgInside.attr("src") + '" width="' + a.width + '" height="' + a.height + '">') : (d.css("background", 'url("' + e.current_imgInside.attr("src") + '") no-repeat'), a.responsive &&
                (-1 == c || -1 != c && 9 <= c ? d.css({
                    "-webkit-background-size": a.width + "px " + a.height + "px"
                    , "-moz-background-size": a.width + "px " + a.height + "px"
                    , "-o-background-size": a.width + "px " + a.height + "px"
                    , "-ms-background-size": a.width + "px " + a.height + "px"
                    , "background-size": a.width + "px " + a.height + "px"
                }) : 8 == c && d.css({
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.current_imgInside.attr("src") + "',sizingMethod='scale')"
                })));
            a.enableTouchScreen && d.swipe({
                swipe: function (b, c, f, g, k) {
                    e.effectIsRunning || A("right" ==
                        c ? -1 : 1, a, e, v, C, d, y, u)
                }
            });
            F(e, a, b, g);
            d.bind("effectComplete", function () {
                var c = D();
                e.effectIsRunning = !1; - 1 != n.indexOf("ipad") || -1 != n.indexOf("iphone") || -1 != n.indexOf("ipod") || -1 != n.indexOf("webos") || -1 != c && 7 >= c ? (f("#curBgImgIos", d)
                    .attr("src", e.current_imgInside.attr("src")), f("#curBgImgIos", d)
                    .width(a.width), f("#curBgImgIos", d)
                    .height(a.height)) : (d.css("background", 'url("' + e.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (-1 == c || -1 != c && 9 <= c ? d.css({
                    "-webkit-background-size": a.width + "px " +
                        a.height + "px"
                    , "-moz-background-size": a.width + "px " + a.height + "px"
                    , "-o-background-size": a.width + "px " + a.height + "px"
                    , "-ms-background-size": a.width + "px " + a.height + "px"
                    , "background-size": a.width + "px " + a.height + "px"
                }) : 8 == c && d.css({
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.current_imgInside.attr("src") + "',sizingMethod='scale')"
                })));
                e.arcInitialTime = (new Date)
                    .getTime();
                e.timeElapsed = 0;
                a.showCircleTimer && (clearInterval(e.intervalID), e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height)
                    , e.ctx.beginPath(), e.ctx.globalAlpha = a.behindCircleAlpha / 100, e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 2 * Math.PI, !1), e.ctx.lineWidth = a.circleLineWidth + 2, e.ctx.strokeStyle = a.behindCircleColor, e.ctx.stroke(), e.ctx.beginPath(), e.ctx.globalAlpha = a.circleAlpha / 100, e.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), e.ctx.lineWidth = a.circleLineWidth, e.ctx.strokeStyle = a.circleColor, e.ctx.stroke(), e.intervalID =
                    setInterval(function () {
                        G(e, a)
                    }, 125));
                F(e, a, b, g);
                0 < a.autoPlay && 1 < v && !e.mouseOverBanner && (clearTimeout(e.timeoutID), e.timeoutID = setTimeout(function () {
                    A(1, a, e, v, C, d, y, u)
                }, 1E3 * a.autoPlay))
            });
            d.mouseenter(function () {
                e.mouseOverBanner = !0;
                clearTimeout(e.timeoutID);
                nowx = (new Date)
                    .getTime();
                e.timeElapsed += nowx - e.arcInitialTime;
                a.autoHideNavArrows && a.showNavArrows && (w.css("display", "block"), r.css("display", "block"));
                a.autoHideBottomNav && a.showBottomNav && (k.css({
                    display: "block"
                    , left: parseInt((d.width() - q) /
                        2, 10) + "px"
                }), l.css({
                    display: "block"
                    , left: parseInt(k.css("left")
                        .substring(0, k.css("left")
                            .length - 2), 10) - l.width() + "px"
                }), m.css({
                    display: "block"
                    , left: parseInt(k.css("left")
                        .substring(0, k.css("left")
                            .length - 2), 10) + k.width() + parseInt(x.css("padding-left")
                        .substring(0, x.css("padding-left")
                            .length - 2), 10) + "px"
                }))
            });
            d.mouseleave(function () {
                e.mouseOverBanner = !1;
                nowx = (new Date)
                    .getTime();
                a.autoHideNavArrows && a.showNavArrows && (w.css("display", "none"), r.css("display", "none"));
                a.autoHideBottomNav && a.showBottomNav &&
                    (k.css("display", "none"), l.css("display", "none"), m.css("display", "none"));
                if (0 < a.autoPlay && 1 < v) {
                    clearTimeout(e.timeoutID);
                    e.arcInitialTime = (new Date)
                        .getTime();
                    var b = parseInt(1E3 * a.autoPlay - (e.timeElapsed + nowx - e.arcInitialTime), 10);
                    e.timeoutID = setTimeout(function () {
                        A(1, a, e, v, C, d, y, u)
                    }, b)
                }
            });
            d.click(function () {
                if (void 0 != f(u[e.current_img_no])
                    .attr("data-link") && !e.effectIsRunning && "" != f(u[e.current_img_no])
                    .attr("data-link")) {
                    var b = a.target;
                    void 0 != f(u[e.current_img_no])
                        .attr("data-target") && "" !=
                        f(u[e.current_img_no])
                        .attr("data-target") && (b = f(u[e.current_img_no])
                            .attr("data-target"));
                    "_blank" == b ? window.open(f(u[e.current_img_no])
                            .attr("data-link")) : window.location = f(u[e.current_img_no])
                        .attr("data-link")
                }
            });
            w.click(function () {
                e.effectIsRunning || (clearTimeout(e.timeoutID), A(-1, a, e, v, C, d, y, u))
            });
            r.click(function () {
                e.effectIsRunning || (clearTimeout(e.timeoutID), A(1, a, e, v, C, d, y, u))
            });
            var B = !1;
            f(window)
                .resize(function () {
                    var c = D();
                    doResizeNow = !0; - 1 != navigator.userAgent.indexOf("Android") && (0 ==
                        a.windowOrientationScreenSize0 && 0 == window.orientation && (a.windowOrientationScreenSize0 = f(window)
                            .width()), 0 == a.windowOrientationScreenSize90 && 90 == window.orientation && (a.windowOrientationScreenSize90 = f(window)
                            .height()), 0 == a.windowOrientationScreenSize_90 && -90 == window.orientation && (a.windowOrientationScreenSize_90 = f(window)
                            .height()), a.windowOrientationScreenSize0 && 0 == window.orientation && f(window)
                        .width() > a.windowOrientationScreenSize0 && (doResizeNow = !1), a.windowOrientationScreenSize90 && 90 == window.orientation &&
                        f(window)
                        .height() > a.windowOrientationScreenSize90 && (doResizeNow = !1), a.windowOrientationScreenSize_90 && -90 == window.orientation && f(window)
                        .height() > a.windowOrientationScreenSize_90 && (doResizeNow = !1), 0 == e.windowWidth && (doResizeNow = !1, e.windowWidth = f(window)
                            .width())); - 1 != c && 9 == c && 0 == e.windowWidth && (doResizeNow = !1);
                    e.windowWidth == f(window)
                        .width() ? (doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") && (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : e.windowWidth = f(window)
                        .width();
                    a.responsive && doResizeNow && (!1 !== B && clearTimeout(B), B = setTimeout(function () {
                            var c = a
                                , h = v
                                , p = y
                                , t = x
                                , q = D();
                            responsiveWidth = b.parent()
                                .parent()
                                .width();
                            responsiveHeight = b.parent()
                                .parent()
                                .height();
                            c.responsiveRelativeToBrowser && (responsiveWidth = f(window)
                                .width(), responsiveHeight = f(window)
                                .height());
                            c.width100Proc && (c.width = responsiveWidth);
                            c.height100Proc && (c.height = responsiveHeight);
                            "attractive" == c.skin && (c.isAttractiveResp = !1, r.css("right", c.rightVal + "px"));
                            if (c.origWidth !=
                                responsiveWidth || c.width100Proc) {
                                c.origWidth > responsiveWidth || c.width100Proc ? (c.width = responsiveWidth, c.isAttractiveResp = !0, "attractive" == c.skin && r.css("right", c.rightVal - 1 + "px")) : c.width100Proc || (c.width = c.origWidth);
                                c.height100Proc || (c.height = c.width / e.bannerRatio);
                                c.width = parseInt(c.width, 10);
                                c.height = parseInt(c.height, 10);
                                d.width(c.width);
                                d.height(c.height); - 1 != n.indexOf("ipad") || -1 != n.indexOf("iphone") || -1 != n.indexOf("ipod") || -1 != n.indexOf("webos") || -1 != q && 7 >= q ? (f("#curBgImgIos", d)
                                    .attr("src"
                                        , e.current_imgInside.attr("src")), f("#curBgImgIos", d)
                                    .width(c.width), f("#curBgImgIos", d)
                                    .height(c.height)) : -1 == q || -1 != q && 9 <= q ? d.css({
                                    "-webkit-background-size": c.width + "px " + c.height + "px"
                                    , "-moz-background-size": c.width + "px " + c.height + "px"
                                    , "-o-background-size": c.width + "px " + c.height + "px"
                                    , "-ms-background-size": c.width + "px " + c.height + "px"
                                    , "background-size": c.width + "px " + c.height + "px"
                                }) : 8 == q && d.css({
                                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.current_imgInside.attr("src") + "',sizingMethod='scale')"
                                });
                                g.css("margin-top", parseInt((c.height - w.height()) / 2, 10) + "px");
                                for (i = 0; i < h; i++) f(f(u[i])
                                        .attr("data-text-id"))
                                    .css("width", b.width() + "px");
                                k.css("left", parseInt((d.width() - k.width()) / 2, 10) + "px");
                                l.css("left", parseInt(k.css("left")
                                    .substring(0, k.css("left")
                                        .length - 2), 10) - l.width() + "px");
                                m.css("left", parseInt(k.css("left")
                                    .substring(0, k.css("left")
                                        .length - 2), 10) + k.width() + parseInt(t.css("padding-left")
                                    .substring(0, t.css("padding-left")
                                        .length - 2), 10) + "px");
                                clearTimeout(e.timeoutID);
                                A(1, c, e, h, C, d, p, u)
                            }
                        }
                        , 300))
                });
            var y = f(".bottomNavButtonOFF", d);
            y.click(function () {
                if (!e.effectIsRunning) {
                    var b = f(this)
                        .attr("rel");
                    f(y[e.current_img_no])
                        .removeClass("bottomNavButtonON");
                    e.bottomNavClicked = !0;
                    e.current_img_no = b - 1;
                    A(1, a, e, v, C, d, y, u)
                }
            });
            y.mouseenter(function () {
                var b = f(this)
                    , c = b.attr("rel");
                a.showPreviewThumbs && (t = f('<div class="bottomOverThumb"></div>'), b.append(t), c = f(u[c])
                    .attr("data-bottom-thumb"), t.html('<img src="' + c + '">'));
                b.addClass("bottomNavButtonON")
            });
            y.mouseleave(function () {
                var b = f(this)
                    , c = b.attr("rel");
                a.showPreviewThumbs && t.remove();
                e.current_img_no != c && b.removeClass("bottomNavButtonON")
            });
            f(y[e.current_img_no])
                .addClass("bottomNavButtonON");
            0 < a.autoPlay && 1 < v && (a.showCircleTimer && (e.intervalID = setInterval(function () {
                G(e, a)
            }, 125)), e.timeoutID = setTimeout(function () {
                A(1, a, e, v, C, d, y, u)
            }, 1E3 * a.autoPlay))
        })
    };
    f.fn.myReverse = [].reverse;
    f.fn.allinone_bannerRotator.defaults = {
        skin: "classic"
        , width: 960
        , height: 384
        , width100Proc: !1
        , height100Proc: !1
        , randomizeImages: !1
        , firstImg: 0
        , numberOfStripes: 7
        , numberOfRows: 5
        , numberOfColumns: 10
        , defaultEffect: "random"
        , effectDuration: 1.5
        , autoPlay: 4
        , loop: !0
        , target: "_blank"
        , showAllControllers: !0
        , showNavArrows: !0
        , showOnInitNavArrows: !0
        , autoHideNavArrows: !0
        , showBottomNav: !0
        , showOnInitBottomNav: !0
        , autoHideBottomNav: !0
        , showPreviewThumbs: !0
        , enableTouchScreen: !0
        , absUrl: ""
        , showCircleTimer: !0
        , showCircleTimerIE8IE7: !1
        , circleRadius: 10
        , circleLineWidth: 4
        , circleColor: "#FF0000"
        , circleAlpha: 100
        , behindCircleColor: "#000000"
        , behindCircleAlpha: 50
        , responsive: !1
        , responsiveRelativeToBrowser: !0
        , origWidth: 0
        , origHeight: 0
        , thumbsWrapperMarginBottom: 0
        , windowOrientationScreenSize0: 0
        , windowOrientationScreenSize90: 0
        , windowOrientationScreenSize_90: 0
        , windowCurOrientation: 0
    }
})(jQuery);
