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
    var checkBoxBrand3 = document.getElementById("brand3");
    var checkBoxBrand4 = document.getElementById("brand4");
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
        if (checkBoxBrand3.checked == true) {
            if (product[i].classList.contains("northface")) {
                product[i].style.display = "block !important";
            } else {
                product[i].style.display = "none";
            }
        }
        if (checkBoxBrand4.checked == true) {
            if (product[i].classList.contains("tommy")) {
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

function filterMaterial() {
    var product = document.getElementsByClassName("product");
}

function filterReset() {
    var product = document.getElementsByClassName("product");
    var i;
    
    for (i = 0; i < product.length; i++) {
        product[i].style.display = "block";  
        window.scrollTo(0, 0);  
    }
}

var productList = [{
    "type": "tshirt",
    "color": "red darkblue brown fuchsia black white beige teal yellow green",
    "size": "medium large xlarge",
    "brand": "benetton",
    "material": "cotton",
    "pricerange": "below50",
    "imgsrc": "product_images/productimage1.jpg",
    "brandNameShow": "UNITED COLORS OF BENETTON",
    "productName": "LONG SLEEVE T-SHIRT",
    "priceShow": "$19.95",
    "price": 19.95,
    "color1": "background-color: red;",
    "color2": "background-color: darkblue;",
    "color3": "background-color: brown;",
    "color4": "background-color: brown;",
    "color5": "background-color: #f56fa1;",
    "color6": "background-color: black;",
    "color7": "background-color: white; border: 1px solid #d6d6d6;",
    "color8": "background-color: beige; border: 1px solid #d6d6d6;",
    "color9": "background-color: teal;",
    "color10": "background-color:yellow;",
    "color11": "background-color: green;"
    }, {
    "type": "jacket",
    "color": "darkgray orange brown",
    "size": "small medium large",
    "brand": "benetton",
    "material": "wool",
    "pricerange": "below100",
    "imgsrc": "product_images/benetton_brown_jacket.jpg",
    "brandNameShow": "UNITED COLORS OF BENETTON",
    "productName": "COAT IN PURE SHETLAND WOOL",
    "priceShow": "$99.95",
    "price": 99.95,
    "color1": "background-color: brown;",
    "color2": "background-color: gray;",
    "color3": "background-color: orange;"
    }, {
    "type": "trousers",
    "color": "darkblue black wheat lightgray green brown",
    "size": "xsmall small medium large xlarge",
    "brand": "benetton",
    "material": "cotton",
    "pricerange": "below100",
    "imgsrc": "product_images/benetton_black_trousers.jpg",
    "brandNameShow": "UNITED COLORS OF BENETTON",
    "productName": "SKINNY FIT VELVET TROUSERS",
    "priceShow": "$59.95",
    "price": 59.95,
    "color1": "background-color: darkblue;",
    "color2": "background-color: black;",
    "color3": "background-color: wheat;",
    "color4": "background-color: lightgray;",
    "color5": "background-color: green;",
    "color6": "background-color: brown;"
    }, {
    "type": "tshirt",
    "color": "multicolor",
    "size": "small medium",
    "brand": "benetton",
    "material": "cotton",
    "pricerange": "below100",
    "imgsrc": "product_images/benetton_multicolor_tshirt.jpg",
    "brandNameShow": "UNITED COLORS OF BENETTON",
    "productName": "MULTICOLOR POLO TRICOT",
    "priceShow": "$69.95",
    "price": 69.95,
    "color1": "background-image: linear-gradient(to right, blue, red, yellow);",
    "color2": "background-image: linear-gradient(to right, green, white, pink);",
    "color3": "background-image: linear-gradient(to right, red, green, blue);"
    }, {
    "type": "jeans",
    "color": "darkblue",
    "size": "xsmall medium",
    "brand": "benetton",
    "material": "cotton",
    "pricerange": "below100",
    "imgsrc": "product_images/benetton_jeans.jpg",
    "brandNameShow": "UNITED COLORS OF BENETTON",
    "productName": "HIGH-WAISTED SKINNY FIT JEANS",
    "priceShow": "$59.95",
    "price": 59.95,
    "color1": "background-color: darkblue;"
    }, {
    "type": "trousers",
    "color": "black",
    "size": "large xlarge",
    "brand": "hm",
    "material": "polyester",
    "pricerange": "below50",
    "imgsrc": "product_images/hm_trousers.jpg",
    "brandNameShow": "H&M",
    "productName": "TAILORED TROUSERS",
    "priceShow": "$14.95",
    "price": 14.95,
    "color1": "background-color: black;"
    }, {
    "type": "jacket",
    "color": "black",
    "size": "medium xlarge",
    "brand": "hm",
    "material": "leather",
    "pricerange": "above200",
    "imgsrc": "product_images/hm_leather_jacket.jpg",
    "brandNameShow": "H&M",
    "productName": "TAILORED TROUSERS",
    "priceShow": "$229.95",
    "price": 229.95,
    "color1": "background-color: black;"
    }, {
    "type": "tshirt",
    "color": "black green white gray",
    "size": "xsmall xlarge",
    "brand": "hm",
    "material": "cotton",
    "pricerange": "below50",
    "imgsrc": "product_images/hm_green_tshirt.jpg",
    "brandNameShow": "H&M",
    "productName": "OVERSIZED PRINTED T-SHIRT",
    "priceShow": "$12.95",
    "price": 12.95,
    "color1": "background-color: darkgreen;",
    "color2": "background-color: black;",
    "color3": "background-color: white; border: 1px solid #d6d6d6;",
    "color4": "background-color: gray;"
    }, {
    "type": "jeans",
    "color": "blue lightblue",
    "size": "xsmall large",
    "brand": "hm",
    "material": "cotton",
    "pricerange": "below50",
    "imgsrc": "product_images/hm_jeans.jpg",
    "brandNameShow": "H&M",
    "productName": "WIDE HIGH JEANS",
    "priceShow": "$24.95",
    "price": 24.95,
    "color1": "background-color: blue;",
    "color2": "background-color: lightblue;"
    }, {
    "type": "jacket",
    "color": "black",
    "size": "medium large",
    "brand": "hm",
    "material": "polyester",
    "pricerange": "below50",
    "imgsrc": "product_images/hm_black_jacket.jpg",
    "brandNameShow": "H&M",
    "productName": "TIE-BELT JACKET",
    "priceShow": "$39.95",
    "price": 39.95,
    "color1": "background-color: black;"
    }, {
    "type": "trousers",
    "color": "black gray",
    "size": "medium large",
    "brand": "northface",
    "material": "polyester",
    "pricerange": "below100",
    "imgsrc": "product_images/northface_trousers.jpg",
    "brandNameShow": "THE NORTH FACE",
    "productName": "SPEEDLIGHT TROUSERS",
    "priceShow": "$90.00",
    "price": 90.00,
    "color1": "background-color: black;",
    "color2": "background-color: gray;"
    }, {
    "type": "trousers",
    "color": "brown",
    "size": "small medium large",
    "brand": "northface",
    "material": "cotton",
    "pricerange": "below100",
    "imgsrc": "product_images/northface_brown_trousers.jpg",
    "brandNameShow": "THE NORTH FACE",
    "productName": "CARGO TROUSERS",
    "priceShow": "$65.00",
    "price": 65.00,
    "color1": "background-color: brown;"
    }, {
    "type": "tshirt",
    "color": "white lightblue black",
    "size": "small medium large xlarge",
    "brand": "northface",
    "material": "cotton",
    "pricerange": "below50",
    "imgsrc": "product_images/northface_tshirt.jpg",
    "brandNameShow": "THE NORTH FACE",
    "productName": "CROPPED SIMPLE DOME T-SHIRT",
    "priceShow": "$13.20",
    "price": 13.20,
    "color1": "background-color: white; border: 1px solid #d6d6d6;",
    "color2": "background-color: lightblue;",
    "color3": "background-color: black;"
    }, {
    "type": "tshirt",
    "color": "black gray orange",
    "size": "xsmall medium",
    "brand": "northface",
    "material": "cotton",
    "pricerange": "below50",
    "imgsrc": "product_images/northface_black_tshirt.jpg",
    "brandNameShow": "THE NORTH FACE",
    "productName": "ACTIVE TRAIL DAWN DREAM T-SHIRT",
    "priceShow": "$40.00",
    "price": 40.00,
    "color1": "background-color: black;",
    "color2": "background-color: gray;",
    "color3": "background-color: orange;"
    }, {
    "type": "jacket",
    "color": "gray black orange",
    "size": "medium large xlarge",
    "brand": "northface",
    "material": "polyester",
    "pricerange": "below200",
    "imgsrc": "product_images/northface_jacket.jpg",
    "brandNameShow": "THE NORTH FACE",
    "productName": "DRYZZLE FUTURELIGHT™ JACKET",
    "priceShow": "$190.00",
    "price": 190.00,
    "color1": "background-color: gray;",
    "color2": "background-color: black;",
    "color3": "background-color: orange;"
    }, {
    "type": "jacket",
    "color": "blue red black",
    "size": "small medium large xlarge",
    "brand": "northface",
    "material": "polyester",
    "pricerange": "below150",
    "imgsrc": "product_images/northface_blue_jacket.jpg",
    "brandNameShow": "THE NORTH FACE",
    "productName": "HIKESTELLER PARKA SHELL JACKET",
    "priceShow": "$135.00",
    "price": 135.00,
    "color1": "background-color: blue;",
    "color2": "background-color: red;",
    "color3": "background-color: black;"
    }, {
    "type": "tshirt",
    "color": "white",
    "size": "small medium large xlarge",
    "brand": "tommy",
    "material": "cotton",
    "pricerange": "below50",
    "imgsrc": "product_images/tommy_tshirt.jpg",
    "brandNameShow": "TOMMY HILFIGER",
    "productName": "FLOWER PRINT LONG SLEEVE T-SHIRT",
    "priceShow": "$45.00",
    "price": 45.00,
    "color1": "background-color: white; border: 1px solid #d6d6d6;"
    }, {
    "type": "tshirt",
    "color": "fuchsia white",
    "size": "xsmall small medium",
    "brand": "tommy",
    "material": "cotton",
    "pricerange": "below50",
    "imgsrc": "product_images/tommy_pink_tshirt.jpg",
    "brandNameShow": "TOMMY HILFIGER",
    "productName": "SMILEY BADGE LONG SLEEVE T-SHIRT",
    "priceShow": "$40.00",
    "price": 40.00,
    "color1": "background-color: #f56fa1;",
    "color2": "background-color: white; border: 1px solid #d6d6d6;"
    },
];


// var orderNumber="";
// function listProducts() {
// if (orderNumber!="") { 
//     switch(orderNumber) {
//         case 1:
//             productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//         break;
//         case 2:
//             productList.sort((b, a) => parseFloat(a.price) - parseFloat(b.price));
//         break;
//     }
// }
//     orderNumber=1;
//     listProducts();
//     orderNumber="";

//     fillProducts(productList);
// }

function listProducts() {
    $('#products').html('');
    fillProducts(productList);
}

function newProducts() {
    location.reload();
    fillProducts(productList);
}

function sortByPriceInc() {
    $('#products').html('');
    productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    fillProducts(productList);
}

function sortByPriceDec() {
    $('#products').html('');
    productList.sort((b, a) => parseFloat(a.price) - parseFloat(b.price));
    fillProducts(productList);
}


function fillProducts(arr) {

    

    $.each(arr,function(index, value){
    var product=`
        <div data-value="`+value.price+`" class="col justify-content-center px-1 product `+value.type+` `+value.color+` `+value.size+` `+value.brand+` `+value.material+` `+value.pricerange+`">  
            <figure class="featured_container">
                <div class="list-fav-button-box">
                    <button class="list-fav-button bi bi-heart-fill px-0"></button>
                </div>
                <div class="featured_image_box">
                    <img src="`+value.imgsrc+`" class="img-fluid featured_image" alt="">
                    <div class="hover_featured">
                        <a href="productdetail.html">
                        <img src="images/view_icon.png" class="view_icon" alt="">
                        </a>
                    </div>  
                </div>
                <p class="featured_item_brand mb-0 pt-2">`+value.brandNameShow+`</p>
                <p class="featured_item_text mb-0">`+value.productName+`</p>
                <div class="pt-2">
                    <p class="list-price mb-0">`+value.priceShow+`</p>
                </div>
                <div>
                    <ul class="list_product_color px-0">
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color1+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color2+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color3+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color4+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color5+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color6+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color7+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color8+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color9+`"></span>
                            </button>
                        </li>
                        <li>
                            <button class="list_color_button">
                            <span class="list_inner_color" style="`+value.color10+`"></span>
                            </button>
                        </li>
                    </ul>                          
                </div>
            </figure>
        </div>`
        $('#products').append(product);
    });
}

