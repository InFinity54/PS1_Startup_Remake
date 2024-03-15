const page = $("body");
const welcomeTexts = $("#welcome p");
const playButton = $("#playbutton");

const sceContainer = $("#sce");
const sceLogoTop = $("#sce_logo_top");
const sceLogoBackground = $("#sce_logo_background");
const sceLogoTriangle1 = $("#sce_logo_triangle1");
const sceLogoTriangle2 = $("#sce_logo_triangle2");
const sceTrademark = $("#sce_trademark");
const sceLogoBottom = $("#sce_logo_bottom");

const psIcon = $("#ps_icon");
const psLogo = $("#ps_logo");
const psCredits = $("#ps_credits");

function ps1StartupAnimation() {
    page.animate({
        backgroundColor: "#FFFFFF"
    }, 998);

    setTimeout(() => {
        sceLogoBackground.fadeIn(100);
    }, 1000);

    setTimeout(() => {
        const sceHeight = sceContainer.css("height").replace("px", "");
        const sceWidth = sceContainer.css("width").replace("px", "");

        const triangle1X = sceHeight / 2 - sceHeight * 0.19;
        const triangle1Y = sceWidth / 2 - sceWidth * 0.09;
        const triangle2X = sceHeight / 2 - sceHeight * 0.01;
        const triangle2Y = sceWidth / 2 - sceWidth * 0.01;

        sceLogoTriangle1.show();
        sceLogoTriangle2.show();

        sceLogoTriangle1.animate({
            width: "10%",
            height: "20%",
            top: triangle1X + "px",
            left: triangle1Y + "px"
        }, 850);

        sceLogoTriangle2.animate({
            width: "10%",
            height: "20%",
            top: triangle2X + "px",
            left: triangle2Y + "px"
        }, 850);
    }, 1150);

    setTimeout(() => {
        sceLogoTop.fadeIn(300);
        sceLogoBottom.fadeIn(300);
        sceTrademark.fadeIn(300);
    }, 2000);

    setTimeout(() => {
        sceContainer.fadeOut(100);
    }, 7000);

    setTimeout(() => {
        page.animate({
            backgroundColor: "#000000"
        }, 200);
    }, 7030);

    setTimeout(() => {
        psIcon.fadeIn(450);
    }, 7250);

    setTimeout(() => {
        psCredits.fadeIn(50);
    }, 7700);

    setTimeout(() => {
        psLogo.fadeIn(400);
    }, 7750);

    setTimeout(() => {
        psIcon.fadeOut(150);
        psLogo.fadeOut(150);
        psCredits.fadeOut(150);
    }, 15500);

    setTimeout(() => {
        welcome();
    }, 16650);
}

function ps1StartupSound() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'snd/ps1_startup.wav');
    audioElement.play();
}

playButton.click(() => {
    playButton.fadeOut(500);
    welcomeTexts.fadeOut(500);

    setTimeout(() => {
        $("*").css("cursor", "none");
    }, 500);

   setTimeout(() => {
       ps1StartupSound();
       ps1StartupAnimation();
   }, 1500);
});

function welcome() {
    $("*").css("cursor", "default");

    welcomeTexts.fadeIn(500);

    setTimeout(() => {
        playButton.fadeIn(500);
    }, 1000);
}

welcome();