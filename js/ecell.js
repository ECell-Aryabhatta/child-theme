
window.onscroll = function() {
    navbarSolid()
};
function navbarSolid() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('masthead').classList.add('solid');
    }
    else {
        document.getElementById('masthead').classList.remove('solid');
    }
}