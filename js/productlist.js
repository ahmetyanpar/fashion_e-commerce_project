function filterShowAll() {
    var product = document.getElementsByClassName("product");
    var checkBoxAll = document.getElementById("showAll");
    var checkBoxTshirt = document.getElementById("tshirts");
    var checkBoxJackets = document.getElementById("jackets");
    var checkBoxTrousers = document.getElementById("trousers");
    var checkBoxJeans = document.getElementById("jeans");
    var i;

    for (i = 0; i < product.length; i++) {
        if (checkBoxAll.checked == true) {
            product[i].style.display = "block";
        } else {
            product[i].style.display = "none";
        }
        if (checkBoxTshirt.checked == true) {
            if (product[i].classList.contains("tshirt")) {
                product[i].style.display = "block";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxJackets.checked == true) {
            if (product[i].classList.contains("jacket")) {
                product[i].style.display = "block";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxTrousers.checked == true) {
            if (product[i].classList.contains("trousers")) {
                product[i].style.display = "block";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxJeans.checked == true) {
            if (product[i].classList.contains("jeans")) {
                product[i].style.display = "block";
            } else {
                product[i].style.display = "none";
            }
        }
    }
    window.scrollTo(0, 0);
}

function filterBrand() {
    var product = document.getElementsByClassName("product");
    var checkBoxBrand1 = document.getElementById("brand1");
    var checkBoxBrand2 = document.getElementById("brand2");
    var i;

    for (i = 0; i < product.length; i++) {
        if (checkBoxBrand1.checked == true) {
            if (product[i].classList.contains("benetton")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxBrand2.checked == true) {
            if (product[i].classList.contains("hm")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

function filterColor() {
    var product = document.getElementsByClassName("product");
    var checkBoxRed = document.getElementById("red");
    var checkBoxDarkblue = document.getElementById("darkblue");
    var checkBoxBrown = document.getElementById("brown");
    var checkBoxLightgray = document.getElementById("lightgray");
    var checkBoxFuchsia = document.getElementById("fuchsia");
    var checkBoxBlack = document.getElementById("black");
    var checkBoxWhite = document.getElementById("white");
    var checkBoxBeige = document.getElementById("beige");
    var checkBoxTeal = document.getElementById("teal");
    var checkBoxYellow = document.getElementById("yellow");
    var checkBoxGreen = document.getElementById("green");
    var checkBoxMulticolor = document.getElementById("multicolor");
    var checkBoxOrange = document.getElementById("orange");
    var i;

    for (i = 0; i < product.length; i++) {
        if (checkBoxRed.checked == true) {
            if (product[i].classList.contains("red")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxDarkblue.checked == true) {
            if (product[i].classList.contains("darkblue")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxBrown.checked == true) {
            if (product[i].classList.contains("brown")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxLightgray.checked == true) {
            if (product[i].classList.contains("lightgray")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxFuchsia.checked == true) {
            if (product[i].classList.contains("fuchsia")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxBlack.checked == true) {
            if (product[i].classList.contains("black")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxWhite.checked == true) {
            if (product[i].classList.contains("white")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxBeige.checked == true) {
            if (product[i].classList.contains("beige")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxTeal.checked == true) {
            if (product[i].classList.contains("teal")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxYellow.checked == true) {
            if (product[i].classList.contains("yellow")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxGreen.checked == true) {
            if (product[i].classList.contains("green")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxMulticolor.checked == true) {
            if (product[i].classList.contains("multicolor")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxOrange.checked == true) {
            if (product[i].classList.contains("orange")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

function filterSize() {
    var product = document.getElementsByClassName("product");
    var checkBoxSizexsmall = document.getElementById("xsmall");
    var checkBoxSizesmall = document.getElementById("small");
    var checkBoxSizemedium = document.getElementById("medium");
    var checkBoxSizelarge = document.getElementById("large");
    var checkBoxSizexlarge = document.getElementById("xlarge");
    var i;

    for (i = 0; i < product.length; i++) {
        if (checkBoxSizexsmall.checked == true) {
            if (product[i].classList.contains("xsmall")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxSizesmall.checked == true) {
            if (product[i].classList.contains("small")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxSizemedium.checked == true) {
            if (product[i].classList.contains("medium")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxSizelarge.checked == true) {
            if (product[i].classList.contains("large")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxSizexlarge.checked == true) {
            if (product[i].classList.contains("xlarge")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

function filterReset() {
    var product = document.getElementsByClassName("product");
    var i;
    
    for (i = 0; i < product.length; i++) {
        product[i].style.display = "block";  
        window.scrollTo(0, 0);  
    }
}

function sortByPriceInc() {

    const arr = ["product1", "product2", "product3", "product4", "product5"];
    for (const val of arr) {
        var productPrice = document.getElementById(val).dataset.value;
        console.log(productPrice);    
    }

}