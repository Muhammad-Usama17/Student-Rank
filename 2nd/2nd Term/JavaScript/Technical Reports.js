let deg = [45, 42, 41, 41, 46, 48, 43, 48, 47, 44, 48, 46, 47, 40, 46, 48, 47, 30, 46, 45, 44, 47, 47, 43, 42, 47, 44, 48, 25, 41, 47, 47, 44, 46, 43, 40, 45, 44, 47, 50, 41, 45, 48, 48, 49, 49, 43, 48, 46, 39, 43, 48, 0, 45, 45, 46, 46, 49, 49, 47, 48, 47, 46, 44, 46, 44, 41, 0, 42, 49, 48, 47, 46, 46, 46, 49, 49, 47, 44, 48, 46, 42, 44, 45, 47, 48, 46, 45, 45, 48, 48, 46, 45, 43, 45, 46, 49, 43];
let deg_sorted = [45, 42, 41, 41, 46, 48, 43, 48, 47, 44, 48, 46, 47, 40, 46, 48, 47, 30, 46, 45, 44, 47, 47, 43, 42, 47, 44, 48, 25, 41, 47, 47, 44, 46, 43, 40, 45, 44, 47, 50, 41, 45, 48, 48, 49, 49, 43, 48, 46, 39, 43, 48, 0, 45, 45, 46, 46, 49, 49, 47, 48, 47, 46, 44, 46, 44, 41, 0, 42, 49, 48, 47, 46, 46, 46, 49, 49, 47, 44, 48, 46, 42, 44, 45, 47, 48, 46, 45, 45, 48, 48, 46, 45, 43, 45, 46, 49, 43];

let names = ["ابانوب امير يوسف يعقوب", "ابانوب شفيق زاخر عطيه", "ابرام ماهر جرجس بشاى", "ابراهيم محمد حسن ابراهيم العكل", "احمد ابراهيم سالم احمد الجعفرى",
        "احمد حسن عبدالمجيد حسن السيد", "احمد حسين احمد محمد", "احمد خالد السيد احمد طلحا", "احمد خالد حسين نجيب محمد عزت", "احمد سمير جوده السيد ابراهيم",
        "احمد سيد محمد بيومى", "احمد عصام صالح محمود", "احمد مجدى طلعت عبدالمجيد العرباوى", "احمد محمد عبدالغنى على شعله", "احمد محمود سند عبدالله",
        "احمد محمود عامر عوده", "احمد محمود محمد جوده ابراهيم", "احمد مصطفى ابراهيم احمد", "اسراء مجدى مسعد حسن", "اسلام ناصر محمود ابوالخير",
        "امنه على عبدالوهاب اسماعيل", "انطونيوس عماد كامل سعيد", "ايمان محمد عبدالحميد عبدالوهاب", "ايه حسام على محمد", "بافلى جورج حسنى دوس",
        "بسمة احمد صابر محمد", "بسمله يوسف اسماعيل احمد", "بسنت ايهاب صابر اسماعيل", "بطرس لبيب سليمان رزق", "بولا ايمن ميخائيل بقطر", "بولا عماد شهدى عزمى",
        "تقى سامح صلاح السيد", "تونى ميخائيل سريان بشاى", "خالد مجاهد ابراهيم على الابيض", "داليا خالد محمد حنفى", "دميانه شارل شاكر زكى",
        "روان محمد فتحى محمد", "ريهام جلال عبدالعزيز محمد", "ريهام ماهر عبدالفتاح حسن", "شادى بهاء القس ابراهيم انيس", "صفيه عادل سعيد محمد",
        "عبدالرحمن خالد فاروق مغاورى", "عبدالرحمن نبيل جمعه صادق", "عبدالله حافظ سعد عبدالحليم بدر", "عبدالله علاء الدين احمد عواد عبداللطيف",
        "عفاف رافت ابراهيم عبدالحميد", "علاء جابر حماده احمد عبدالرحمن", "على ايمن محمد عبدالودود", "على عبدالمنعم محمد فواد مصطفى السيد",
        "عمار محمد عبدالواحد عبدالحميد", "كريم محمد سعد عبدالمطلب", "كريم وليد محمد السيد", "كيرلس عزت لبيب ذكي", "كيرلس مجدى عبدالملاك حبيب",
        "ماريو مفدى حبيب بشوى", "ماهر شحته عبده عامر بدران", "مايكل سامى حبشى ميلاد", "محمد احمد ابراهيم منصور", "محمد احمد ربيع محروس", "محمد احمد صالح على",
        "محمد اسامة محمد بكر سيد احمد", "محمد اسامه عواد عواد", "محمد خالد عبدالقادر هاشم", "محمد سعد عبدالنعيم محمد", "محمد شريف محمد عبدالفتاح",
        "محمد عادل عبدالعزيز عبدالمقصود", "محمد عادل يوسف محمد على", "محمد محمود محمد محمود محمد", "محمد ممدوح صلاح عبدالعزيز", "محمد ممدوح محمد سعيد",
        "محمد هشام فتحى عبدالحفيظ احمد", "محمد ياسر عبدالعزيز ابراهيم", "محمد يوسف حلمى ابوالصفا", "محى الدين ايهاب ابراهيم محى العزب",
        "مروان محمد شعبان احمد", "مريم رضا ابراهيم كامل", "مصطفى شكرى الكامل محمد عيد", "مصطفى عبدالله مصطفى منصور", "مصطفى وائل حسين حسين",
        "مصطفى ايمن عبدالحفيظ محمد", "منةالله عمر عبداللاه يوسف", "مهند عماد محمد مصطفى خفاجى", "مهند مدحت مصطفى عبدالغنى", "ميريام هانى عدلى كامل",
        "مينا عاطف موريس صورى", "مينا غطاس جرجس واصف", "نرمين احمد فواد على", "نعمة الله محمد احمد محمد", "نور الدين نبيل ابراهيم احمد",
        "نيرة محمود احمد محمد", "هاجر سلامة سليمان بيومى", "هايدى وليد محمد سعيد عبدالفضيل بيومى", "هايدى هشام فكرى محمد عماره",
        "هشام عصام عبدالفتاح محمد السيد", "يوسف احمد عبده حسين", "يوسف عادل السيد ابراهيم", "يوسف عثمان فاضل حسين", "يوسف محسن محمد مهدى الشيمى"];

let body = document.getElementsByTagName("body")[0];
let course = document.getElementsByClassName("active")[2].innerHTML;
let w = getComputedStyle(body).width;
if(parseInt(w) <= 1000){
    document.getElementById("title").innerHTML = "2nd Communications & Computer (1st term)<br><br>" + course;
}

let opened = 0;
function sideMenuBtn(x){
    document.getElementById("dropdown-container").style.height = "0";
    document.getElementById("dropdown-container2").style.height = "0";
    document.getElementById("dropdown-container3").style.height = "0";
    mobileDropdownOpened = 0;
    mobileCourseDropdownOpened1 = 0;
    mobileCourseDropdownOpened2 = 0;
    x.classList.toggle("change");
    if(opened == 0){
        document.getElementById("mySidepanel").style.width = "700px";
        opened = 1;
    }else if(opened == 1){
        document.getElementById("mySidepanel").style.width = "0";
        opened = 0;
    }
}

let navbar = document.getElementById("navbar");
let h = getComputedStyle(navbar).height;
document.getElementById("mySidepanel").style.top = h;
document.getElementsByTagName("body")[0].style.paddingTop = h;

let mobileDropdownContainer = document.getElementById("dropdown-container");
let mobileDropdownHeight;

let mobileCourseDropdownContainer1 = document.getElementById("dropdown-container2");
let mobileCourseDropdownHeight1;

let mobileCourseDropdownContainer2 = document.getElementById("dropdown-container3");
let mobileCourseDropdownHeight2;

let dropbtn = document.getElementById("dropbtn");
let dropbtnWidth;

let dropdownContainer2 = document.getElementById("myDropdown");
let dropdownHeight2;

let dropbtnCourse1 = document.getElementById("dropbtn2");
let dropdownCourseLeft1;

let dropdownContainer3 = document.getElementById("myDropdown2");
let dropdownHeight3;

let dropbtnCourse2 = document.getElementById("dropbtn3");
let dropdownCourseLeft2;

let dropdownContainer4 = document.getElementById("myDropdown3");
let dropdownHeight4;

document.getElementById("page").onload = function(){
    mobileDropdownHeight = getComputedStyle(mobileDropdownContainer).height;
    mobileDropdownContainer.style.height = "0";

    mobileCourseDropdownHeight1 = getComputedStyle(mobileCourseDropdownContainer1).height;
    mobileCourseDropdownContainer1.style.height = "0";

    mobileCourseDropdownHeight2 = getComputedStyle(mobileCourseDropdownContainer2).height;
    mobileCourseDropdownContainer2.style.height = "0";

    dropdownHeight2 = getComputedStyle(dropdownContainer2).height;
    dropdownContainer2.style.height = "0";
    dropdownContainer2.style.visibility = "visible";
    dropbtnWidth = parseFloat(getComputedStyle(dropbtn).width) + parseFloat(getComputedStyle(dropbtn).paddingRight) + parseFloat(getComputedStyle(dropbtn).paddingLeft);
    dropdownContainer2.style.width = dropbtnWidth + "px";

    dropdownHeight3 = getComputedStyle(dropdownContainer3).height;
    dropdownContainer3.style.height = "0";
    dropdownContainer3.style.visibility = "visible";
    dropdownCourseLeft1 = parseFloat(getComputedStyle(dropbtnCourse1).width) + parseFloat(getComputedStyle(dropbtnCourse1).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse1).paddingLeft);
    dropdownContainer3.style.left = dropdownCourseLeft1 + "px";

    dropdownHeight4 = getComputedStyle(dropdownContainer4).height;
    dropdownContainer4.style.height = "0";
    dropdownContainer4.style.visibility = "visible";
    dropdownCourseLeft2 = parseFloat(getComputedStyle(dropbtnCourse2).width) + parseFloat(getComputedStyle(dropbtnCourse2).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse2).paddingLeft);
    dropdownContainer4.style.left = dropdownCourseLeft2 + "px";
};

let mobileDropdownOpened = 0;
function mobileDropdown1(){
    document.getElementById("dropdown-container2").style.height = "0";
    mobileCourseDropdownOpened1 = 0;
    document.getElementById("dropdown-container3").style.height = "0";
    mobileCourseDropdownOpened2 = 0;
    if(mobileDropdownOpened == 0){
        document.getElementById("dropdown-container").style.height = mobileDropdownHeight;
        mobileDropdownOpened = 1;
    }else if(mobileDropdownOpened == 1){
        document.getElementById("dropdown-container").style.height = "0";
        mobileDropdownOpened = 0;
    }
}

let mobileCourseDropdownOpened1 = 0;
function mobileDropdown2(){
    if(mobileCourseDropdownOpened1 == 0){
        document.getElementById("dropdown-container2").style.height = mobileCourseDropdownHeight1;
        mobileCourseDropdownOpened1 = 1;
    }else if(mobileCourseDropdownOpened1 == 1){
        document.getElementById("dropdown-container2").style.height = "0";
        mobileCourseDropdownOpened1 = 0;
    }
}

let mobileCourseDropdownOpened2 = 0;
function mobileDropdown3(){
    if(mobileCourseDropdownOpened2 == 0){
        document.getElementById("dropdown-container3").style.height = mobileCourseDropdownHeight2;
        mobileCourseDropdownOpened2 = 1;
    }else if(mobileCourseDropdownOpened2 == 1){
        document.getElementById("dropdown-container3").style.height = "0";
        mobileCourseDropdownOpened2 = 0;
    }
}


let dropdownOpened2 = 0;
function dropdown2(){
    document.getElementById("myDropdown2").style.height = "0";
    dropdownOpened3 = 0;
    document.getElementById("myDropdown3").style.height = "0";
    dropdownOpened4 = 0;
    if(dropdownOpened2 == 0){
        document.getElementById("myDropdown").style.height = dropdownHeight2;
        document.getElementById("myDropdown").style.overflowX = "visible";
        dropdownOpened2 = 1;
    }else if(dropdownOpened2 == 1){
        document.getElementById("myDropdown").style.height = "0";
        document.getElementById("myDropdown").style.overflowX = "hidden";
        dropdownOpened2 = 0;
    }
}

let dropdownOpened3 = 0;
function dropdown3(){
    document.getElementById("myDropdown3").style.height = "0";
    dropdownOpened4 = 0;
    if(dropdownOpened3 == 0){
        document.getElementById("myDropdown2").style.height = dropdownHeight3;
        dropdownOpened3 = 1;
    }else if(dropdownOpened3 == 1){
        document.getElementById("myDropdown2").style.height = "0";
        dropdownOpened3 = 0;
    }
}

let dropdownOpened4 = 0;
function dropdown4(){
    document.getElementById("myDropdown2").style.height = "0";
    dropdownOpened3 = 0;
    if(dropdownOpened4 == 0){
        document.getElementById("myDropdown3").style.height = dropdownHeight3;
        dropdownOpened4 = 1;
    }else if(dropdownOpened4 == 1){
        document.getElementById("myDropdown3").style.height = "0";
        dropdownOpened4 = 0;
    }
}


let j = 1;
let i = 0;
let search = 1;
deg_sorted.sort(function(a, b){return b - a});
while (i < deg_sorted.length){
    if (deg_sorted[i] == deg_sorted[j]){
        deg_sorted.splice(j, 1);
        continue;
    }
    j++;
    i++;
}
document.getElementById("rankRange").innerHTML = "*Range from 1 to " + deg_sorted.length + " *";
document.getElementById("bnRange").innerHTML = "*Range from 1 to " + names.length + " *";


function name_search(){
    let name_to_find = document.getElementById("namein").value;

    if(name_to_find != ""){
        let name_to_find_splited = name_to_find.split(" ");


        // SPLITTING عبد AND الله
        for(let j in name_to_find_splited){
            for(let i = 0; i < name_to_find_splited[j].length; i++){
                if(name_to_find_splited[j].slice(i, i+5) == "الله"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
                if(name_to_find_splited[j].slice(i, i+3) == "عبد"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i+3, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
            }
        }
        name_to_find = name_to_find_splited.join(" ");
        name_to_find_splited = name_to_find.split(" ");
        // SPLITTING عبد AND الله

        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى
        let i = 0;
        while (i < name_to_find_splited.length){
            // REMOVE WHITE SPACES FROM THE INPUT NAME
            if (name_to_find_splited[i] == ''){
                name_to_find_splited.splice(i, 1);
                continue;
            }
            // REMOVE WHITE SPACES FROM THE INPUT NAME

            // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى
            if (name_to_find_splited[i].slice(0, 2) == "ال" && name_to_find_splited[i] != "الله" && name_to_find_splited[i - 1] != "عبد"){
                name_to_find_splited[i] = removeCharFrom(name_to_find_splited[i], 1, 2);
            }
            // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى

            let y = name_to_find_splited[i].trim().split("");
            for (let j in y){
                if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                    y[j] = "ا";
                }
            }
            name_to_find_splited[i] = y.join("");
            if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ي"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ى";
                name_to_find_splited[i] = x.join("");
            }else if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ة"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ه";
                name_to_find_splited[i] = x.join("");
            }
            i++
        }
        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى


        let found = 0;
        let found_ind = 0;
        let suggest = 0;
        let suggest_ind = 0;
        let always = 0;
        let repeated = 0;
        let index = -1;
        let j = 0;
        let k = 0;
        let t_splited;
        let degree = -1;
        let rank = -1;
        let name;
        for (let t of names){
            

            // SPLITTING عبد AND الله
            t_splited = t.split(" ");
            for(let j in t_splited){
                for(let i = 0; i < t_splited[j].length; i++){
                    if(t_splited[j].slice(i, i+5) == "الله"){
                        let letters = t_splited[j].split("");
                        letters.splice(i, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                    if(t_splited[j].slice(i, i+3) == "عبد"){
                        let letters = t_splited[j].split("");
                        letters.splice(i+3, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                }
            }
            let temp = t_splited.join(" ");
            t_splited = temp.split(" ");
            // SPLITTING عبد AND الله
            
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى
            let i = 0;
            while (i < t_splited.length){
                // REMOVE WHITE SPACES FROM THE NAME IN THE ARRAY
                if (t_splited[i] == ''){
                    t_splited.splice(i, 1);
                    continue;
                }
                // REMOVE WHITE SPACES FROM THE NAME IN THE ARRAY

                // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى
                if (t_splited[i].slice(0, 2) == "ال" && t_splited[i] != "الله" && t_splited[i - 1] != "عبد"){
                    t_splited[i] = removeCharFrom(t_splited[i], 1, 2);
                }
                // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى

                let y = t_splited[i].trim().split("");
                for (let j in y){
                    if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                        y[j] = "ا";
                    }
                }
                t_splited[i] = y.join("");
                if (t_splited[i][t_splited[i].length - 1] == "ي"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ى";
                    t_splited[i] = x.join("");
                }else if (t_splited[i][t_splited[i].length - 1] == "ة"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ه";
                    t_splited[i] = x.join("");
                }
                i++;
            }
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى

            
            for (let i of name_to_find_splited){
                if (i == t_splited[j]){
                    found_ind++;
                }else{
                    if (t_splited[j] == "الله" && t_splited[j - 1] != "عبد" && i == t_splited[j + 1]){
                        found_ind++;
                    }else{
                        found_ind = 0;
                        break;
                    }
                }
                j++;
            }

            // TO GET THE SEGGESTION (DO YOU MEAN)
            if (found_ind == 0 && found == 0){
                for (let i of name_to_find_splited){
                    for (let l = k ; l <= t_splited.length; l++){
                        if (i == t_splited[l]){
                            suggest_ind++;
                            break;
                        }
                    }
                    k++;
                }
                k = 0;
            }
            if (suggest_ind != name_to_find_splited.length){
                suggest_ind = 0;
            }
            if (suggest_ind > 0){
                if (suggest_ind > suggest){
                    suggest = suggest_ind;
                    index = names.indexOf(t);
                    if (suggest_ind > repeated){
                        always = 0;
                    }
                }else if(suggest_ind == suggest){
                    repeated = suggest_ind;
                    suggest = -1;
                    always = 1;
                }
                suggest_ind = 0;
                if (always == 1){
                    suggest = -1;
                }
            }
            // TO GET THE SEGGESTION (DO YOU MEAN)

            if (found_ind > 0){
                found++;
                index = names.indexOf(t);
                found_ind = 0;
            }
            j = 0;
        }   
        if (found == 1){
            degree = deg[index];
            rank = deg_sorted.indexOf(degree) + 1;
            name = names[index];
            document.getElementById("suggest").style.display = "none";
            document.getElementById("suggest_name").innerHTML = "";
            document.getElementById("more_details").innerHTML = "";
            document.getElementById("suggest_all").style.display = "none";
            document.getElementById("suggest_name_all").innerHTML = "";
            document.getElementById("more_details_all").innerHTML = "";
            document.getElementById("error3").style.display = "none";
            document.getElementById("tbl1").style.display = "none";
            document.getElementById("nameSearchTbl").style.display = "block";
            document.getElementById("degree3").innerHTML = degree;
            document.getElementById("percentage1").innerHTML = ((degree / 50) * 100).toFixed(2) + "%";
            document.getElementById("rank3").innerHTML = rank;
            document.getElementById("bn1").innerHTML = names.indexOf(name) + 1;
            document.getElementById("name3").innerHTML = name;
        }else if (found > 1){
            document.getElementById("suggest").style.display = "none";
            document.getElementById("suggest_name").innerHTML = "";
            document.getElementById("more_details").innerHTML = "";
            document.getElementById("suggest_all").style.display = "none";
            document.getElementById("suggest_name_all").innerHTML = "";
            document.getElementById("more_details_all").innerHTML = "";
            document.getElementById("nameSearchTbl").style.display = "none";
            document.getElementById("tbl1").style.display = "none";
            document.getElementById("error3").style.display = "flex";
            document.getElementById("error3").innerHTML = "Complete the name";
        }else{
            document.getElementById("suggest").style.display = "none";
            document.getElementById("suggest_name").innerHTML = "";
            document.getElementById("more_details").innerHTML = "";
            document.getElementById("suggest_all").style.display = "none";
            document.getElementById("suggest_name_all").innerHTML = "";
            document.getElementById("more_details_all").innerHTML = "";
            if (suggest > 0){
                document.getElementById("suggest").style.display = "inline-block";
                document.getElementById("suggest_name").innerHTML = names[index];
            }else if (suggest == -1){
                document.getElementById("suggest").style.display = "inline-block";
                document.getElementById("suggest_name").innerHTML = "";
                document.getElementById("more_details").innerHTML = "Need more details";
            }

            document.getElementById("nameSearchTbl").style.display = "none";
            document.getElementById("tbl1").style.display = "none";
            document.getElementById("error3").style.display = "flex";
            document.getElementById("error3").innerHTML = "Invalid name! please try again";
        }
    }
}

let current = document.getElementById("namein").value;
let previous = document.getElementById("namein").value;
document.getElementById("namein").addEventListener('keyup', (e) => {
    let sug = document.getElementById("suggest");
    let moreDetails = document.getElementById("more_details");
    if(e.keyCode == 13){
        current = document.getElementById("namein").value;
        if(current == previous && getComputedStyle(sug).display != "none" && moreDetails.innerHTML == ""){
            name_search_suggest();
        }else if(search == 1 || current != previous){
            name_search();
            search = 2;
        }else if(search == 2 && current == previous){
            name_search_all();
            search = 1;
        }
        previous = document.getElementById("namein").value;
    }
});

function name_search_suggest(){
    let wanted_name = document.getElementById("suggest_name").innerHTML;
    document.getElementById("namein").value = wanted_name;
    document.getElementById("suggest").style.display = "none";
    document.getElementById("suggest_name").innerHTML = "";
    name_search();
}

function name_search_all(){
    let name_to_find = document.getElementById("namein").value;

    if(name_to_find != ""){
        let name_to_find_splited = name_to_find.split(" ");


        // SPLITTING عبد AND الله
        for(let j in name_to_find_splited){
            for(let i = 0; i < name_to_find_splited[j].length; i++){
                if(name_to_find_splited[j].slice(i, i+5) == "الله"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
                if(name_to_find_splited[j].slice(i, i+3) == "عبد"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i+3, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
            }
        }
        name_to_find = name_to_find_splited.join(" ");
        name_to_find_splited = name_to_find.split(" ");
        // SPLITTING عبد AND الله

        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى
        let i = 0;
        while (i < name_to_find_splited.length){
            // REMOVE WHITE SPACES FROM THE INPUT NAME
            if (name_to_find_splited[i] == ''){
                name_to_find_splited.splice(i, 1);
                continue;
            }
            // REMOVE WHITE SPACES FROM THE INPUT NAME

            // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى
            if (name_to_find_splited[i].slice(0, 2) == "ال" && name_to_find_splited[i] != "الله" && name_to_find_splited[i - 1] != "عبد"){
                name_to_find_splited[i] = removeCharFrom(name_to_find_splited[i], 1, 2);
            }
            // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى

            let y = name_to_find_splited[i].trim().split("");
            for (let j in y){
                if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                    y[j] = "ا";
                }
            }
            name_to_find_splited[i] = y.join("");
            if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ي"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ى";
                name_to_find_splited[i] = x.join("");
            }else if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ة"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ه";
                name_to_find_splited[i] = x.join("");
            }
            i++
        }
        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى


        let found = 0;
        let found_ind = 0;
        let suggest = 0;
        let suggest_ind = 0;
        let always = 0;
        let repeated = 0;
        let suggest_index = -1;
        let index = [];
        let j = 0;
        let k = 0;
        let t_splited;
        for (let t of names){
            

            // SPLITTING عبد AND الله
            t_splited = t.split(" ");
            for(let j in t_splited){
                for(let i = 0; i < t_splited[j].length; i++){
                    if(t_splited[j].slice(i, i+5) == "الله"){
                        let letters = t_splited[j].split("");
                        letters.splice(i, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                    if(t_splited[j].slice(i, i+3) == "عبد"){
                        let letters = t_splited[j].split("");
                        letters.splice(i+3, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                }
            }
            let temp = t_splited.join(" ");
            t_splited = temp.split(" ");
            // SPLITTING عبد AND الله
            
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى
            let i = 0;
            while (i < t_splited.length){
                // REMOVE WHITE SPACES FROM THE NAME IN THE ARRAY
                if (t_splited[i] == ''){
                    t_splited.splice(i, 1);
                    continue;
                }
                // REMOVE WHITE SPACES FROM THE NAME IN THE ARRAY

                // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى
                if (t_splited[i].slice(0, 2) == "ال" && t_splited[i] != "الله" && t_splited[i - 1] != "عبد"){
                    t_splited[i] = removeCharFrom(t_splited[i], 1, 2);
                }
                // REMOVING ال FROM THE BEGINING OF ANY NAME EXCEPT أسماء الله الحسنى

                let y = t_splited[i].trim().split("");
                for (let j in y){
                    if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                        y[j] = "ا";
                    }
                }
                t_splited[i] = y.join("");
                if (t_splited[i][t_splited[i].length - 1] == "ي"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ى";
                    t_splited[i] = x.join("");
                }else if (t_splited[i][t_splited[i].length - 1] == "ة"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ه";
                    t_splited[i] = x.join("");
                }
                i++;
            }
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى

            for (let i of name_to_find_splited){
                if (i == t_splited[j]){
                    found_ind++;
                }else{
                    if (t_splited[j] == "الله" && t_splited[j - 1] != "عبد" && i == t_splited[j + 1]){
                        found_ind++;
                    }else{
                        found_ind = 0;
                        break;
                    }
                }
                j++;
            }

            // TO GET THE SUGGESTION (DO YOU MEAN)
            if (found_ind == 0 && found == 0){
                for (let i of name_to_find_splited){
                    for (let l = k ; l <= t_splited.length; l++){
                        if (i == t_splited[l]){
                            suggest_ind++;
                            break;
                        }
                    }
                    k++;
                }
                k = 0;
            }
            if (suggest_ind != name_to_find_splited.length){
                suggest_ind = 0;
            }
            if (suggest_ind > 0){
                if (suggest_ind > suggest){
                    suggest = suggest_ind;
                    suggest_index = names.indexOf(t);
                    if (suggest_ind > repeated){
                        always = 0;
                    }
                }else if(suggest_ind == suggest){
                    repeated = suggest_ind;
                    suggest = -1;
                    always = 1;
                }
                suggest_ind = 0;
                if (always == 1){
                    suggest = -1;
                }
            }
            // TO GET THE SUGGESTION (DO YOU MEAN)
            
            if (found_ind > 0){
                found++;
                index.push(names.indexOf(t));
                found_ind = 0;
            }
            j = 0;
        }
        if (found != 0){
            document.getElementById("suggest").style.display = "none";
            document.getElementById("suggest_name").innerHTML = "";
            document.getElementById("more_details").innerHTML = "";
            document.getElementById("suggest_all").style.display = "none";
            document.getElementById("suggest_name_all").innerHTML = "";
            document.getElementById("more_details_all").innerHTML = "";
            document.getElementById("nameSearchTbl").style.display = "none";
            document.getElementById("error3").style.display = "none";
            let tbl1 = document.getElementById("tbl1");
            tbl1.style.display = "table";
            let ranks = [];
            let ranks_arng = [];
            let num = 1;

            // TO PRINT SEARCH RESULTS BY RANK
            for(let u of index){
                ranks.push(deg_sorted.indexOf(deg[u]) + 1);
                ranks_arng.push(deg_sorted.indexOf(deg[u]) + 1);
            }
            ranks_arng.sort(function(a, b){return a - b});
            // TO PRINT SEARCH RESULTS BY RANK

            // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
            while(tbl1.hasChildNodes()){
                if(tbl1.firstElementChild == tbl1.lastElementChild){
                    break;
                }
                tbl1.removeChild(tbl1.lastChild);
            }
            // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
            
            for(let r of ranks_arng){
                let inner_index = index[ranks.indexOf(r)];
                let row = document.createElement("tr");
                let dataNum = document.createElement("td");
                let dataN = document.createElement("td");
                dataN.className = "name";
                let dataBN = document.createElement("td");
                let dataD = document.createElement("td");
                let dataP = document.createElement("td");
                let dataR = document.createElement("td");
                dataNum.innerHTML = num;
                dataN.innerHTML = names[inner_index];
                dataBN.innerHTML = inner_index + 1;
                dataD.innerHTML = deg[inner_index];
                dataP.innerHTML = ((deg[inner_index] / 50) * 100).toFixed(2) + "%";
                dataR.innerHTML = deg_sorted.indexOf(deg[inner_index]) + 1;
                row.appendChild(dataR);
                row.appendChild(dataP);
                row.appendChild(dataD);
                row.appendChild(dataBN);
                row.appendChild(dataN);
                row.appendChild(dataNum);
                tbl1.appendChild(row);
                num++;
                ranks[ranks.indexOf(r)] = -1;   // TO MARK THE TAKEN ITEM 
                                // يعني عشان لو بتعمل سيرش ؤول على "محمد" وفي اتنين اسمهم محمد ف المركز ال 17 ميكتبش اسم اول واحد فيهم مرتين
                                // انا عارف انك مش هتفهم حاجة من الكومنت دا لما تقرأه بعدين بس اهو يمكن تفتكر اي حاجة
            }
        }else{
            document.getElementById("suggest").style.display = "none";
            document.getElementById("suggest_name").innerHTML = "";
            document.getElementById("more_details").innerHTML = "";
            document.getElementById("suggest_all").style.display = "none";
            document.getElementById("suggest_name_all").innerHTML = "";
            document.getElementById("more_details_all").innerHTML = "";
            if (suggest > 0){
                document.getElementById("suggest_all").style.display = "inline-block";
                document.getElementById("suggest_name_all").innerHTML = names[suggest_index];
            }else if (suggest == -1){
                document.getElementById("suggest_all").style.display = "inline-block";
                document.getElementById("suggest_name_all").innerHTML = "";
                document.getElementById("more_details_all").innerHTML = "Need more details";
            }

            document.getElementById("nameSearchTbl").style.display = "none";
            document.getElementById("tbl1").style.display = "none";
            document.getElementById("error3").style.display = "flex";
            document.getElementById("error3").innerHTML = "Invalid name! please try again";
        }
    }
}

function name_search_all_suggest(){
    let wanted_name = document.getElementById("suggest_name_all").innerHTML;
    document.getElementById("namein").value = wanted_name;
    document.getElementById("suggest_all").style.display = "none";
    document.getElementById("suggest_name_all").innerHTML = "";
    name_search_all();
}

function bn_search(){
    let index = parseInt((document.getElementById("bnin").value) - 1);
    if(index >= 0 && index < names.length){
        let name = names[index];
        let degree = deg[index];
        let rank = (deg_sorted.indexOf(degree)) + 1;
        document.getElementById("bnSearchTbl").style.display = "block";
        document.getElementById("error4").style.display = "none";
        document.getElementById("degree4").innerHTML = degree;
        document.getElementById("percentage2").innerHTML = ((degree / 50) * 100).toFixed(2) + "%";
        document.getElementById("rank4").innerHTML = rank;
        document.getElementById("bn2").innerHTML = index + 1;
        document.getElementById("name4").innerHTML = name;
    }else{
        document.getElementById("bnSearchTbl").style.display = "none";
        document.getElementById("error4").style.display = "flex";
        document.getElementById("error4").innerHTML = "Invalid B.N.! please try again";
    }
}

document.getElementById("bnin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        bn_search();
    }
});
function rank_search(){
    if(document.getElementById("rankin").value != ""){
        let rank = parseInt(document.getElementById("rankin").value);
        let degree = deg_sorted[rank - 1];
        let name_index = [];
        for (let b in deg){
            if (degree == deg[b]){
                name_index.push(b);
            }
        }
        if (degree == undefined){
            document.getElementById("error2").style.display = "flex";
            document.getElementById("rankSearchTbl").style.display = "none";
            document.getElementById("error2").innerHTML = "Invalid rank! please try again";
        }else{
            document.getElementById("rankSearchTbl").style.display = "block";
            document.getElementById("error2").style.display = "none";
            document.getElementById("degree2").innerHTML = degree;
            document.getElementById("percentage3").innerHTML = ((degree / 50) * 100).toFixed(2) + "%";
            document.getElementById("rank2").innerHTML = deg_sorted.indexOf(degree) + 1;
            document.getElementById("name2").innerHTML = "";
            document.getElementById("bn3").innerHTML = "";
            if (name_index.length == 1){
                document.getElementById("name2").innerHTML += names[name_index[0]];
                document.getElementById("bn3").innerHTML += names.indexOf(names[name_index[0]]) + 1;
            }else{
                for (let n = 0; n < name_index.length; n++){
                    if((n + 1) == name_index.length){
                        document.getElementById("name2").innerHTML += names[name_index[n]];
                        document.getElementById("bn3").innerHTML += names.indexOf(names[name_index[n]]) + 1;
                    }else if ((n + 1) != name_index.length){
                        document.getElementById("name2").innerHTML += names[name_index[n]] + "<br>";
                        document.getElementById("bn3").innerHTML += (names.indexOf(names[name_index[n]]) + 1) + "<br>";
                    }
                }
            }
        }
    }
}

document.getElementById("degree").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        degree_search();
    }
});


function degree_search(){    
    if(document.getElementById("degree").value != ""){
        let degree = parseFloat(document.getElementById("degree").value);
        let rank = deg_sorted.indexOf(degree);
        let name_index = [];
        for (let b in deg){
            if (degree == deg[b]){
                name_index.push(b);
            }
        }
        if (rank == -1){
            document.getElementById("error").style.display = "flex";
            document.getElementById("degSearchTbl").style.display = "none";
            document.getElementById("error").innerHTML = "Invalid degree! please try again";
        }else{
            document.getElementById("degSearchTbl").style.display = "block";
            document.getElementById("error").style.display = "none";
            document.getElementById("rank").innerHTML = rank + 1;
            document.getElementById("degree1").innerHTML = deg_sorted[rank];
            document.getElementById("percentage4").innerHTML = ((deg_sorted[rank] / 50) * 100).toFixed(2) + "%";
            document.getElementById("name").innerHTML = "";
            document.getElementById("bn4").innerHTML = "";
            if (name_index.length == 1){
                document.getElementById("name").innerHTML += names[name_index[0]];
                document.getElementById("bn4").innerHTML += names.indexOf(names[name_index[0]]) + 1;
            }else{
                for (let n = 0; n < name_index.length; n++){
                    if((n + 1) == name_index.length){
                        document.getElementById("name").innerHTML += names[name_index[n]];
                        document.getElementById("bn4").innerHTML += names.indexOf(names[name_index[n]]) + 1;
                    }else if ((n + 1) != name_index.length){
                        document.getElementById("name").innerHTML += names[name_index[n]] + "<br>";
                        document.getElementById("bn4").innerHTML += (names.indexOf(names[name_index[n]]) + 1) + "<br>";
                    }
                }
            }
        }
    }
}

document.getElementById("rankin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        rank_search();
    }
});


function rank_show(){
    let initIndex = parseInt(document.getElementById("initrankin").value) - 1;
    let finIndex = parseInt(document.getElementById("finrankin").value) - 1;
    let tbl2 = document.getElementById("tbl2");
    if(isNaN(initIndex)){
        initIndex = 0;
    }
    if(isNaN(finIndex)){
        finIndex = deg_sorted.length - 1;
    }

    if(initIndex >= 0 && initIndex < deg_sorted.length && finIndex >= 0 && finIndex < deg_sorted.length && finIndex - initIndex > 0){
        // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER
        let index = [];
        for(let i = 0; i <= finIndex - initIndex; i++){
            let counter = initIndex + i;
            let degree = deg_sorted[counter];
            let count = countInclude(deg, degree);
            index.push(deg.indexOf(degree));
            for(let j = 0; j < count - 1; j++){
                index.push(deg.indexOf(degree, index[index.length - 1] + 1));
            }
        }
        // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER

        // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
        while(tbl2.hasChildNodes()){
            if(tbl2.firstElementChild == tbl2.lastElementChild){
                break;
            }
            tbl2.removeChild(tbl2.lastChild);
        }
        // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
        
        for(let i = 0; i < index.length; i++){
            tbl2.style.display = "table";
            document.getElementById("error5").style.display = "none";
            let row = document.createElement("tr");
            let dataNum = document.createElement("td");
            let dataN = document.createElement("td");
            dataN.className = "name";
            let dataBN = document.createElement("td");
            let dataD = document.createElement("td");
            let dataP = document.createElement("td");
            let dataR = document.createElement("td");
            dataNum.innerHTML = i + 1;
            dataN.innerHTML = names[index[i]];
            dataBN.innerHTML = index[i] + 1;
            dataD.innerHTML = deg[index[i]];
            dataP.innerHTML = ((deg[index[i]] / 50) * 100).toFixed(2) + "%";
            dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
            row.appendChild(dataR);
            row.appendChild(dataP);
            row.appendChild(dataD);
            row.appendChild(dataBN);
            row.appendChild(dataN);
            row.appendChild(dataNum);
            tbl2.appendChild(row);
        }
    }else{
        tbl2.style.display = "none";
        document.getElementById("error5").style.display = "flex";
        document.getElementById("error5").innerHTML = "Invalid rank range! please try agian"
    }
}

document.getElementById("initrankin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        document.getElementById("finrankin").focus();
    }
});
document.getElementById("finrankin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        rank_show();
    }
});


function degree_show(){
    let initdeg = parseInt(document.getElementById("initdegin").value);
    let findeg = parseInt(document.getElementById("findegin").value);
    let tbl3 = document.getElementById("tbl3");
    if(isNaN(initdeg)){
        initdeg = 0;
    }
    if(isNaN(findeg)){
        findeg = 50;
    }

    if(initdeg >= 0 && initdeg <= 50 && findeg >= 0 && findeg <= 50 && findeg - initdeg != 0){
        // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER
        let index = [];
        for(let i = 0; i <= toPositive(findeg - initdeg); i++){
            let degree;
            if(findeg - initdeg > 0){
                degree = initdeg + i;
            }else if(findeg - initdeg < 0){
                degree = initdeg - i;
            }
            let count = countInclude(deg, degree);
            if(count != 0){
                index.push(deg.indexOf(degree));
                for(let j = 0; j < count - 1; j++){
                    index.push(deg.indexOf(degree, index[index.length - 1] + 1));
                }
            }
        }
        // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER
        console.log(index.length);

        if(index.length != 0){
            // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
            while(tbl3.hasChildNodes()){
                if(tbl3.firstElementChild == tbl3.lastElementChild){
                    break;
                }
                tbl3.removeChild(tbl3.lastChild);
            }
            // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
            
            for(let i = 0; i < index.length; i++){
                tbl3.style.display = "table";
                document.getElementById("error6").style.display = "none";
                let row = document.createElement("tr");
                let dataNum = document.createElement("td");
                let dataN = document.createElement("td");
                dataN.className = "name";
                let dataBN = document.createElement("td");
                let dataD = document.createElement("td");
                let dataP = document.createElement("td");
                let dataR = document.createElement("td");
                dataNum.innerHTML = i + 1;
                dataN.innerHTML = names[index[i]];
                dataBN.innerHTML = index[i] + 1;
                dataD.innerHTML = deg[index[i]];
                dataP.innerHTML = ((deg[index[i]] / 50) * 100).toFixed(2) + "%";
                dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
                row.appendChild(dataR);
                row.appendChild(dataP);
                row.appendChild(dataD);
                row.appendChild(dataBN);
                row.appendChild(dataN);
                row.appendChild(dataNum);
                tbl3.appendChild(row);
            }
        }else{
            tbl3.style.display = "none";
            document.getElementById("error6").style.display = "flex";
            document.getElementById("error6").innerHTML = "No degrees in this range! please try again"
        }
    }else{
        tbl3.style.display = "none";
        document.getElementById("error6").style.display = "flex";
        document.getElementById("error6").innerHTML = "Invalid degree range! please try agian"
    }
}

document.getElementById("initdegin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        document.getElementById("findegin").focus();
    }
});
document.getElementById("findegin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        degree_show();
    }
});


function bn_show(){
    let initIndex = parseInt(document.getElementById("initbnin").value) - 1;
    let finIndex = parseInt(document.getElementById("finbnin").value) - 1;
    let tbl4 = document.getElementById("tbl4");
    if(isNaN(initIndex)){
        initIndex = 0;
    }
    if(isNaN(finIndex)){
        finIndex = names.length - 1;
    }

    if(initIndex >= 0 && initIndex < names.length && finIndex >= 0 && finIndex < names.length && finIndex - initIndex > 0){
        // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
        while(tbl4.hasChildNodes()){
            if(tbl4.firstElementChild == tbl4.lastElementChild){
                break;
            }
            tbl4.removeChild(tbl4.lastChild);
        }
        // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
        
        for(let i = 0; i <= finIndex - initIndex; i++){
            tbl4.style.display = "table";
            document.getElementById("error5").style.display = "none";
            let index = initIndex + i;
            let row = document.createElement("tr");
            let dataNum = document.createElement("td");
            let dataN = document.createElement("td");
            dataN.className = "name";
            let dataBN = document.createElement("td");
            let dataD = document.createElement("td");
            let dataP = document.createElement("td");
            let dataR = document.createElement("td");
            dataNum.innerHTML = i + 1;
            dataN.innerHTML = names[index];
            dataBN.innerHTML = index + 1;
            dataD.innerHTML = deg[index];
            dataP.innerHTML = ((deg[index] / 50) * 100).toFixed(2) + "%";
            dataR.innerHTML = deg_sorted.indexOf(deg[index]) + 1;
            row.appendChild(dataR);
            row.appendChild(dataP);
            row.appendChild(dataD);
            row.appendChild(dataBN);
            row.appendChild(dataN);
            row.appendChild(dataNum);
            tbl4.appendChild(row);
        }
    }else{
        tbl2.style.display = "none";
        document.getElementById("error7").style.display = "flex";
        document.getElementById("error7").innerHTML = "Invalid B.N. range! please try agian"
    }
}

document.getElementById("initbnin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        document.getElementById("finbnin").focus();
    }
});
document.getElementById("finbnin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        bn_show();
    }
});


function bn_show_all(){
    let initIndex = 0;
    let finIndex = names.length - 1;
    let tbl5 = document.getElementById("tbl5");
    
    // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
    while(tbl5.hasChildNodes()){
        if(tbl5.firstElementChild == tbl5.lastElementChild){
            break;
        }
        tbl5.removeChild(tbl5.lastChild);
    }
    // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
    
    for(let i = 0; i <= finIndex - initIndex; i++){
        tbl5.style.display = "table";
        let index = initIndex + i;
        let row = document.createElement("tr");
        let dataNum = document.createElement("td");
        let dataN = document.createElement("td");
        dataN.className = "name";
        let dataBN = document.createElement("td");
        let dataD = document.createElement("td");
        let dataP = document.createElement("td");
        let dataR = document.createElement("td");
        dataNum.innerHTML = i + 1;
        dataN.innerHTML = names[index];
        dataBN.innerHTML = index + 1;
        dataD.innerHTML = deg[index];
        dataP.innerHTML = ((deg[index] / 50) * 100).toFixed(2) + "%";
        dataR.innerHTML = deg_sorted.indexOf(deg[index]) + 1;
        row.appendChild(dataR);
        row.appendChild(dataP);
        row.appendChild(dataD);
        row.appendChild(dataBN);
        row.appendChild(dataN);
        row.appendChild(dataNum);
        tbl5.appendChild(row);
    }
}


function rank_show_all(){
    let initIndex = 0;
    let finIndex = deg_sorted.length - 1;
    let tbl5 = document.getElementById("tbl5");

    // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER
    let index = [];
    for(let i = 0; i <= finIndex - initIndex; i++){
        let counter = initIndex + i;
        let degree = deg_sorted[counter];
        let count = countInclude(deg, degree);
        index.push(deg.indexOf(degree));
        for(let j = 0; j < count - 1; j++){
            index.push(deg.indexOf(degree, index[index.length - 1] + 1));
        }
    }
    // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER

    // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
    while(tbl5.hasChildNodes()){
        if(tbl5.firstElementChild == tbl5.lastElementChild){
            break;
        }
        tbl5.removeChild(tbl5.lastChild);
    }
    // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
    
    for(let i = 0; i < index.length; i++){
        tbl5.style.display = "table";
        document.getElementById("error5").style.display = "none";
        let row = document.createElement("tr");
        let dataNum = document.createElement("td");
        let dataN = document.createElement("td");
        dataN.className = "name";
        let dataBN = document.createElement("td");
        let dataD = document.createElement("td");
        let dataP = document.createElement("td");
        let dataR = document.createElement("td");
        dataNum.innerHTML = i + 1;
        dataN.innerHTML = names[index[i]];
        dataBN.innerHTML = index[i] + 1;
        dataD.innerHTML = deg[index[i]];
        dataP.innerHTML = ((deg[index[i]] / 50) * 100).toFixed(2) + "%";
        dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
        row.appendChild(dataR);
        row.appendChild(dataP);
        row.appendChild(dataD);
        row.appendChild(dataBN);
        row.appendChild(dataN);
        row.appendChild(dataNum);
        tbl5.appendChild(row);
    }
}


function degree_show_all(){
    let initdeg = 0;
    let findeg = 50;
    let tbl5 = document.getElementById("tbl5");

    // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER
    let index = [];
    for(let i = 0; i <= toPositive(findeg - initdeg); i++){
        let degree;
        if(findeg - initdeg > 0){
            degree = initdeg + i;
        }else if(findeg - initdeg < 0){
            degree = initdeg - i;
        }
        let count = countInclude(deg, degree);
        if(count != 0){
            index.push(deg.indexOf(degree));
            for(let j = 0; j < count - 1; j++){
                index.push(deg.indexOf(degree, index[index.length - 1] + 1));
            }
        }
    }
    // TO GET ALL BETWEEN THE GIVEN RANGE FROM THE USER

    // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
    while(tbl5.hasChildNodes()){
        if(tbl5.firstElementChild == tbl5.lastElementChild){
            break;
        }
        tbl5.removeChild(tbl5.lastChild);
    }
    // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
    
    for(let i = 0; i < index.length; i++){
        tbl5.style.display = "table";
        document.getElementById("error6").style.display = "none";
        let row = document.createElement("tr");
        let dataNum = document.createElement("td");
        let dataN = document.createElement("td");
        dataN.className = "name";
        let dataBN = document.createElement("td");
        let dataD = document.createElement("td");
        let dataP = document.createElement("td");
        let dataR = document.createElement("td");
        dataNum.innerHTML = i + 1;
        dataN.innerHTML = names[index[i]];
        dataBN.innerHTML = index[i] + 1;
        dataD.innerHTML = deg[index[i]];
        dataP.innerHTML = ((deg[index[i]] / 50) * 100).toFixed(2) + "%";
        dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
        row.appendChild(dataR);
        row.appendChild(dataP);
        row.appendChild(dataD);
        row.appendChild(dataBN);
        row.appendChild(dataN);
        row.appendChild(dataNum);
        tbl5.appendChild(row);
    }
}


function show_all_clear(){
    document.getElementById("tbl5").style.display = "none";
}



function focus_out1(){
    let input = document.getElementById("namein").value;
    if(input == ""){
        document.getElementById("nameSearchTbl").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("tbl1").style.display = "none";
        document.getElementById("suggest").style.display = "none";
        document.getElementById("suggest_name").innerHTML = "";
        search = 1;
    }
}
function focus_out2(){
    let input = document.getElementById("rankin").value;
    if(input == ""){
        document.getElementById("rankSearchTbl").style.display = "none";
        document.getElementById("error2").style.display = "none";
    }
}
function focus_out3(){
    let input = document.getElementById("degree").value;
    if(input == ""){
        document.getElementById("degSearchTbl").style.display = "none";
        document.getElementById("error").style.display = "none";
    }
}
function focus_out4(){
    let input = document.getElementById("bnin").value;
    if(input == ""){
        document.getElementById("bnSearchTbl").style.display = "none";
        document.getElementById("error4").style.display = "none";
    }
}
function focus_out5(){
    let input1 = document.getElementById("initrankin").value;
    let input2 = document.getElementById("finrankin").value;
    if(input1 == "" && input2 == ""){
        document.getElementById("tbl2").style.display = "none"; 
        document.getElementById("error5").style.display = "none";
    }
}
function focus_out6(){
    let input1 = document.getElementById("initdegin").value;
    let input2 = document.getElementById("findegin").value;
    if(input1 == "" && input2 == ""){
        document.getElementById("tbl3").style.display = "none"; 
        document.getElementById("error6").style.display = "none";
    }
}
function focus_out7(){
    let input1 = document.getElementById("initbnin").value;
    let input2 = document.getElementById("finbnin").value;
    if(input1 == "" && input2 == ""){
        document.getElementById("tbl4").style.display = "none"; 
        document.getElementById("error7").style.display = "none";
    }
}


function btn_disable(){
    let namein = document.getElementById("namein").value;
    let rankin = document.getElementById("rankin").value;
    let degreein = document.getElementById("degree").value;
    let bnin = document.getElementById("bnin").value;
    let initrank = document.getElementById("initrankin").value;
    let finrank = document.getElementById("finrankin").value;
    let initdeg = document.getElementById("initdegin").value;
    let findeg = document.getElementById("findegin").value;
    let initbn = document.getElementById("initbnin").value;
    let finbn = document.getElementById("finbnin").value;
    let tbl5 = document.getElementById("tbl5");
    if(namein == ""){
        document.getElementById("btn3").className = "btn";
        document.getElementById("btn4").className = "btn";
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn3").style.opacity = 0.5;
        document.getElementById("btn4").style.opacity = 0.5;
        document.getElementById("btn3").style.cursor = "not-allowed";
        document.getElementById("btn4").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn3").className = "btn anim";
        document.getElementById("btn4").className = "btn anim";
        document.getElementById("btn3").disabled = false;
        document.getElementById("btn4").disabled = false;
        document.getElementById("btn3").style.opacity = 1;
        document.getElementById("btn4").style.opacity = 1;
        document.getElementById("btn3").style.cursor = "pointer";
        document.getElementById("btn4").style.cursor = "pointer";
    }
    if(rankin == ""){
        document.getElementById("btn2").className = "btn";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn2").style.opacity = 0.5;
        document.getElementById("btn2").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn2").className = "btn anim";
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn2").style.opacity = 1;
        document.getElementById("btn2").style.cursor = "pointer";
    }
    if(degreein == ""){
        document.getElementById("btn").className = "btn";
        document.getElementById("btn").disabled = true;
        document.getElementById("btn").style.opacity = 0.5;
        document.getElementById("btn").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn").className = "btn anim";
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").style.opacity = 1;
        document.getElementById("btn").style.cursor = "pointer";
    }
    if(bnin == ""){
        document.getElementById("btn5").className = "btn";
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn5").style.opacity = 0.5;
        document.getElementById("btn5").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn5").className = "btn anim";
        document.getElementById("btn5").disabled = false;
        document.getElementById("btn5").style.opacity = 1;
        document.getElementById("btn5").style.cursor = "pointer";
    }
    if(initrank == "" && finrank == ""){
        document.getElementById("btn6").className = "btn";
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn6").style.opacity = 0.5;
        document.getElementById("btn6").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn6").className = "btn anim";
        document.getElementById("btn6").disabled = false;
        document.getElementById("btn6").style.opacity = 1;
        document.getElementById("btn6").style.cursor = "pointer";
    }
    if(initdeg == "" && findeg == ""){
        document.getElementById("btn7").className = "btn";
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn7").style.opacity = 0.5;
        document.getElementById("btn7").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn7").className = "btn anim";
        document.getElementById("btn7").disabled = false;
        document.getElementById("btn7").style.opacity = 1;
        document.getElementById("btn7").style.cursor = "pointer";
    }
    if(initbn == "" && finbn == ""){
        document.getElementById("btn8").className = "btn";
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn8").style.opacity = 0.5;
        document.getElementById("btn8").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn8").className = "btn anim";
        document.getElementById("btn8").disabled = false;
        document.getElementById("btn8").style.opacity = 1;
        document.getElementById("btn8").style.cursor = "pointer";
    }
    if(getComputedStyle(tbl5).display == "none"){
        document.getElementById("btn12").className = "btn";
        document.getElementById("btn12").disabled = true;
        document.getElementById("btn12").style.opacity = 0.5;
        document.getElementById("btn12").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn12").className = "btn anim";
        document.getElementById("btn12").disabled = false;
        document.getElementById("btn12").style.opacity = 1;
        document.getElementById("btn12").style.cursor = "pointer";
    }
}
setInterval(btn_disable);


function countInclude(x, y){
    let count = 0;
    for(let i of x){
        if(i == y){
            count ++;
        }
    }
    return count;
}
function toPositive(x){
    if(x >= 0){
        return x;
    }else{
        return -x;
    }
}
function removeCharFrom(str, from, to){
    let strArr = str.split("");
    let index = from - 1;
    let howMany = to - index;
    strArr.splice(index, howMany);
    let res = strArr.join("");
    return res;
}