var mainImageDIv = document.getElementById('mainDiv')
images = mainImageDIv.getElementsByTagName("img")
caps = document.getElementsByTagName("figcaption")
model = ["iphone x", "iphone 11", "iphone 12", "samsung s8", "samsung s9", "samsung s10", "oppo f8", "oppo f9", "oppo f10", "infinix hot 8", "infinix hot 9", "infinix hot 10", "pocox3", "poco M20", "motorola e4", "motorola e6",]
mobile = ["apple", "poco", "oppo", "samsung", "infinix", "motorola"]
sources = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg"]

// drop down
// var drop1 = document.getElementById("1")
// drop2 = document.getElementById("2")
// drop3 = document.getElementById("3")
// document.getElementById("1").innerHTML = phones[brand][model]
// document.getElementById("2").innerHTML = phones[brand][model]
// document.getElementById("3").innerHTML = phones[brand][model]





// getting all phones in home page
for (var i = 0; i < images.length; i++) {
    images[i].src = sources[i]
    for (var j = 0; j < caps.length; j++) {
        caps[j].innerHTML = model[j].toUpperCase()
    }
}

// objects
var phones = {
    iphone: {
        iphonex: {
            brand: "Iphone",
            model: "Iphone X",
            price: "150000 PKR",
            color: "Gray,Black & White",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front 5mx",
            src: " images/1.jpg"

        },
        iphone11: {
            brand: "Iphone",
            model: "Iphone 11",
            price: "200000 PKR",
            color: "Gray,Black & White & Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256, 12 & 512",
            camera: "16px Back, And 6px Front 5mx",
            src: " images/2.jpg"

        },
        iphone12: {
            brand: "Iphone",
            model: "Iphone 12",
            price: "250000 PKR",
            color: "Gray,Black & White & Crystal & New Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "20px Back, And 8px Front 5mx",
            src: " images/3.jpg"

        }
    },
    samsung: {
        s8: {
            brand: "Samsung",
            model: "Samsung Galaxy S8",
            price: "70000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: " images/4.jpg"

        },
        s9: {
            brand: "Samsung",
            model: "Samsung Galaxy S9",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: " images/5.jpg"

        },
        s10: {
            brand: "Samsung",
            model: "Samsung Galaxy S10",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: " images/6.jpg"

        }
    },
    oppo: {
        f8: {
            brand: "Oppo",
            model: "Oppo F8",
            price: "50000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: " images/7.jpg"

        },
        f9: {
            brand: "Oppo",
            model: "Oppo F9",
            price: "75000 PKR",
            color: "Golden & White",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: " images/8.jpg"

        },
        f10: {
            brand: "Oppo",
            model: "Oppo F10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/9.jpg"

        }
    },
    infinix: {
        hot8: {
            brand: "Infinix",
            model: "Infinix Hote 8",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/10.jpg"

        },
        hot9: {
            brand: "Infinix",
            model: "Infinix Hote 9",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/11.jpg"

        },
        hot10: {
            brand: "Infinix",
            model: "Infinix Hote 10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/12.jpg"

        }
    },
    poco: {
        x3: {
            brand: "Poco",
            model: "Poco X3",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/13.jpg"

        },
        m20: {
            brand: "Poco",
            model: "Poco M20",
            price: "10000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/14.jpg"

        }
    },

    motorola: {
        e4: {
            brand: "Motorola",
            model: "Motorola E4",
            price: "10000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/15.jpg"


        },

        e6: {
            brand: "Motorola",
            model: "Motorola E6",
            price: "15000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: " images/16.jpg"


        }
    }
}
var drop = document.getElementById("dropdown")
model0 = document.getElementById("model")
// when you click on search
function search() {

    var brand = drop.value.toLowerCase()
    var model = model0.value.toLowerCase()


    var namess = phones[brand]
    console.log(namess)
    if (namess == undefined) {
        if (brand == "") {
            drop.setAttribute("placeholder", "Please Enter Brand Name !")
            drop.classList.add("emptyField")
        }
        else {
            document.getElementById('mainDiv').innerHTML = ""
            document.getElementById("mainDivSearch").innerHTML = ""
            document.getElementById("warImage").src = "no.gif"
        }
    }
    else {
        namess = phones[brand][model]
        if (namess == undefined) {
            if (model == "") {
                model.classList.add("emptyField")
                model.setAttribute("placeholder", "Please Enter Brand Name !")
            }
            else {
                document.getElementById('mainDiv').innerHTML = ""
                document.getElementById("mainDivSearch").innerHTML = ""
                document.getElementById("warImage").src = "no.gif"
            }
        }
        // var nodeToAdd = document.createElement("div");
        // var imgNodeToAdd = document.createElement("img");
        // nodeToAdd.setAttribute("class", "image");
        // nodeToAdd.setAttribute("id", "image");
        // notfound = imgNodeToAdd.src = "images/no.gif"
        // if (namess !== phones[brand][model]) {

        // }

    }
}
    // accept search by enter key
    function enter(code) {
        if (code.keyCode === 13) {
            search()
        }
    
    }

