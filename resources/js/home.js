document.querySelector('.option-1')
.addEventListener('mouseover', function() {
    document.querySelector('.sub-menu').style.display = "flex";
});

document.querySelector('.option-1')
.addEventListener('mouseout', function() {
    document.querySelector('.sub-menu').style.display = "none";
})