let deg = [101, 121, 113, 120, 127, 124, 126, 127, 138, 133, 127, 115, 126, 96, 125, 125, 129, 56, 127, 130, 124, 141, 140, 116, 115, 130, 116, 116, 75, 122, 111, 135, 119, 141, 114, 131, 134, 125, 119, 132, 115, 132, 134, 121, 140, 138, 124, 133, 123, 112, 103, 146, 0, 106, 129, 125, 90, 133, 122, 129, 122, 127, 129, 106, 133, 124, 110, 0, 15, 130, 118, 120, 130, 132, 132, 134, 144, 144, 123, 140, 123, 133, 111, 109, 120, 131, 124, 127, 130, 137, 141, 128, 126, 120, 126, 137, 137, 132];
let deg_sorted = [101, 121, 113, 120, 127, 124, 126, 127, 138, 133, 127, 115, 126, 96, 125, 125, 129, 56, 127, 130, 124, 141, 140, 116, 115, 130, 116, 116, 75, 122, 111, 135, 119, 141, 114, 131, 134, 125, 119, 132, 115, 132, 134, 121, 140, 138, 124, 133, 123, 112, 103, 146, 0, 106, 129, 125, 90, 133, 122, 129, 122, 127, 129, 106, 133, 124, 110, 0, 15, 130, 118, 120, 130, 132, 132, 134, 144, 144, 123, 140, 123, 133, 111, 109, 120, 131, 124, 127, 130, 137, 141, 128, 126, 120, 126, 137, 137, 132];

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
    document.getElementById("title").innerHTML = "2nd Communications & Computer (2nd term)<br><br>" + course;
}

let opened = 0;
function sideMenuBtn(x){
    mobileDropdownContainer1.style.height = "0";
    mobileCourseDropdownContainer1.style.height = "0";
    mobileCourseDropdownContainer2.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[0].style.transform = "rotate(0deg)";
    document.getElementsByClassName("fa-caret-down")[1].style.transform = "rotate(0deg)";
    document.getElementsByClassName("fa-caret-down")[3].style.transform = "rotate(0deg)";
    mobileDropdownOpened = 0;
    mobileCourseDropdownOpened1 = 0;
    mobileCourseDropdownOpened2 = 0;
    mobileDropdownContainer2.style.height = "0";
    mobileCourseDropdownContainer5.style.height = "0";
    mobileCourseDropdownContainer6.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[5].style.transform = "rotate(0deg)";
    document.getElementsByClassName("fa-caret-down")[6].style.transform = "rotate(0deg)";
    document.getElementsByClassName("fa-caret-down")[8].style.transform = "rotate(0deg)";
    mobileDropdownOpened2 = 0;
    mobileCourseDropdownOpened5 = 0;
    mobileCourseDropdownOpened6 = 0;
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

let mobileDropdownContainer1 = document.getElementById("dropdown-container");
let mobileDropdownHeight1;

let mobileCourseDropdownContainer1 = document.getElementById("dropdown-container2");
let mobileCourseDropdownHeight1min;
let mobileCourseDropdownHeight1max;

let mobileCourseDropdownContainer2 = document.getElementById("dropdown-container3");
let mobileCourseDropdownHeight2min;
let mobileCourseDropdownHeight2max;

let mobileCourseDropdownContainer3 = document.getElementById("dropdown-container4");
let mobileCourseDropdownHeight3;

let mobileCourseDropdownContainer4 = document.getElementById("dropdown-container5");
let mobileCourseDropdownHeight4;


let mobileDropdownContainer2 = document.getElementById("dropdown-container6");
let mobileDropdownHeight2;

let mobileCourseDropdownContainer5 = document.getElementById("dropdown-container7");
let mobileCourseDropdownHeight5min;
let mobileCourseDropdownHeight5max;

let mobileCourseDropdownContainer6 = document.getElementById("dropdown-container8");
let mobileCourseDropdownHeight6min;
let mobileCourseDropdownHeight6max;

let mobileCourseDropdownContainer7 = document.getElementById("dropdown-container9");
let mobileCourseDropdownHeight7;

let mobileCourseDropdownContainer8 = document.getElementById("dropdown-container10");
let mobileCourseDropdownHeight8;



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

let dropbtnCourse3 = document.getElementById("dropbtn4");
let dropdownCourseLeft3;

let dropdownContainer5 = document.getElementById("myDropdown4");
let dropdownHeight5;

let dropbtnCourse4 = document.getElementById("dropbtn5");
let dropdownCourseLeft4;

let dropdownContainer6 = document.getElementById("myDropdown5");
let dropdownHeight6;


let dropbtn2 = document.getElementById("dropbtn6");
let dropbtnWidth2;

let dropdownContainer7 = document.getElementById("myDropdown6");
let dropdownHeight7;

let dropbtnCourse5 = document.getElementById("dropbtn7");
let dropdownCourseLeft5;

let dropdownContainer8 = document.getElementById("myDropdown7");
let dropdownHeight8;

let dropbtnCourse6 = document.getElementById("dropbtn8");
let dropdownCourseLeft6;

let dropdownContainer9 = document.getElementById("myDropdown8");
let dropdownHeight9;

let dropbtnCourse7 = document.getElementById("dropbtn9");
let dropdownCourseLeft7;

let dropdownContainer10 = document.getElementById("myDropdown9");
let dropdownHeight10;

let dropbtnCourse8 = document.getElementById("dropbtn10");
let dropdownCourseLeft8;

let dropdownContainer11 = document.getElementById("myDropdown10");
let dropdownHeight11;


document.getElementById("page").onload = function(){
    mobileCourseDropdownContainer1.style.height = "0";
    mobileCourseDropdownContainer2.style.height = "0";
    mobileDropdownHeight1 = getComputedStyle(mobileDropdownContainer1).height;
    mobileDropdownContainer1.style.height = "0";
    mobileCourseDropdownContainer1.style.height = "fit-content";
    mobileCourseDropdownContainer2.style.height = "fit-content";
    
    mobileCourseDropdownContainer3.style.height = "0";
    mobileCourseDropdownHeight1min = getComputedStyle(mobileCourseDropdownContainer1).height;
    mobileCourseDropdownContainer3.style.height = "fit-content";
    mobileCourseDropdownHeight1max = getComputedStyle(mobileCourseDropdownContainer1).height;
    mobileCourseDropdownContainer1.style.height = "0";
    
    mobileCourseDropdownContainer4.style.height = "0";
    mobileCourseDropdownHeight2min = getComputedStyle(mobileCourseDropdownContainer2).height;
    mobileCourseDropdownContainer4.style.height = "fit-content";
    mobileCourseDropdownHeight2max = getComputedStyle(mobileCourseDropdownContainer2).height;
    mobileCourseDropdownContainer2.style.height = "0";
    
    mobileCourseDropdownHeight3 = getComputedStyle(mobileCourseDropdownContainer3).height;
    mobileCourseDropdownContainer3.style.height = "0";
    
    mobileCourseDropdownHeight4 = getComputedStyle(mobileCourseDropdownContainer4).height;
    mobileCourseDropdownContainer4.style.height = "0";
    
    mobileCourseDropdownContainer5.style.height = "0";
    mobileCourseDropdownContainer6.style.height = "0";
    mobileDropdownHeight2 = getComputedStyle(mobileDropdownContainer2).height;
    mobileDropdownContainer2.style.height = "0";
    mobileCourseDropdownContainer5.style.height = "fit-content";
    mobileCourseDropdownContainer6.style.height = "fit-content";

    mobileCourseDropdownContainer7.style.height = "0";
    mobileCourseDropdownHeight5min = getComputedStyle(mobileCourseDropdownContainer5).height;
    mobileCourseDropdownContainer7.style.height = "fit-content";
    mobileCourseDropdownHeight5max = getComputedStyle(mobileCourseDropdownContainer5).height;
    mobileCourseDropdownContainer5.style.height = "0";
    
    mobileCourseDropdownContainer8.style.height = "0";
    mobileCourseDropdownHeight6min = getComputedStyle(mobileCourseDropdownContainer6).height;
    mobileCourseDropdownContainer8.style.height = "fit-content";
    mobileCourseDropdownHeight6max = getComputedStyle(mobileCourseDropdownContainer6).height;
    mobileCourseDropdownContainer6.style.height = "0";
    
    mobileCourseDropdownHeight7 = getComputedStyle(mobileCourseDropdownContainer7).height;
    mobileCourseDropdownContainer7.style.height = "0";
    
    mobileCourseDropdownHeight8 = getComputedStyle(mobileCourseDropdownContainer8).height;
    mobileCourseDropdownContainer8.style.height = "0";

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

    dropdownHeight5 = getComputedStyle(dropdownContainer5).height;
    dropdownContainer5.style.height = "0";
    dropdownContainer5.style.visibility = "visible";
    dropdownCourseLeft3 = parseFloat(getComputedStyle(dropbtnCourse3).width) + parseFloat(getComputedStyle(dropbtnCourse3).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse3).paddingLeft);
    dropdownContainer5.style.left = dropdownCourseLeft3 + "px";

    dropdownHeight6 = getComputedStyle(dropdownContainer6).height;
    dropdownContainer6.style.height = "0";
    dropdownContainer6.style.visibility = "visible";
    dropdownCourseLeft4 = parseFloat(getComputedStyle(dropbtnCourse4).width) + parseFloat(getComputedStyle(dropbtnCourse4).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse4).paddingLeft);
    dropdownContainer6.style.left = dropdownCourseLeft4 + "px";
    

    dropdownHeight7 = getComputedStyle(dropdownContainer7).height;
    dropdownContainer7.style.height = "0";
    dropdownContainer7.style.visibility = "visible";
    dropbtnWidth2 = parseFloat(getComputedStyle(dropbtn2).width) + parseFloat(getComputedStyle(dropbtn2).paddingRight) + parseFloat(getComputedStyle(dropbtn2).paddingLeft);
    dropdownContainer7.style.width = dropbtnWidth2 + "px";

    dropdownHeight8 = getComputedStyle(dropdownContainer8).height;
    dropdownContainer8.style.height = "0";
    dropdownContainer8.style.visibility = "visible";
    dropdownCourseLeft5 = parseFloat(getComputedStyle(dropbtnCourse5).width) + parseFloat(getComputedStyle(dropbtnCourse5).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse5).paddingLeft);
    dropdownContainer8.style.left = dropdownCourseLeft5 + "px";

    dropdownHeight9 = getComputedStyle(dropdownContainer9).height;
    dropdownContainer9.style.height = "0";
    dropdownContainer9.style.visibility = "visible";
    dropdownCourseLeft6 = parseFloat(getComputedStyle(dropbtnCourse6).width) + parseFloat(getComputedStyle(dropbtnCourse6).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse6).paddingLeft);
    dropdownContainer9.style.left = dropdownCourseLeft6 + "px";

    dropdownHeight10 = getComputedStyle(dropdownContainer10).height;
    dropdownContainer10.style.height = "0";
    dropdownContainer10.style.visibility = "visible";
    dropdownCourseLeft7 = parseFloat(getComputedStyle(dropbtnCourse7).width) + parseFloat(getComputedStyle(dropbtnCourse7).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse7).paddingLeft);
    dropdownContainer10.style.left = dropdownCourseLeft7 + "px";

    dropdownHeight11 = getComputedStyle(dropdownContainer11).height;
    dropdownContainer11.style.height = "0";
    dropdownContainer11.style.visibility = "visible";
    dropdownCourseLeft8 = parseFloat(getComputedStyle(dropbtnCourse8).width) + parseFloat(getComputedStyle(dropbtnCourse8).paddingRight) + parseFloat(getComputedStyle(dropbtnCourse8).paddingLeft);
    dropdownContainer11.style.left = dropdownCourseLeft8 + "px";
};

let mobileDropdownOpened = 0;
function mobileDropdown1(){
    mobileCourseDropdownContainer1.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[6].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened1 = 0;
    mobileCourseDropdownContainer2.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[8].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened2 = 0;
    mobileCourseDropdownContainer3.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[7].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened3 = 0;
    mobileCourseDropdownContainer4.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[9].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened4 = 0;
    if(mobileDropdownOpened == 0){
        mobileDropdownContainer1.style.height = mobileDropdownHeight1;
        document.getElementsByClassName("fa-caret-down")[5].style.transform = "rotate(-180deg)";
        mobileDropdownOpened = 1;
    }else if(mobileDropdownOpened == 1){
        mobileDropdownContainer1.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[5].style.transform = "rotate(0deg)";
        mobileDropdownOpened = 0;
    }
}

let current1;
let current2;
let mobileCourseDropdownOpened1 = 0;
function mobileDropdown2(){
    mobileCourseDropdownContainer3.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[7].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened3 = 0;
    current1 = getComputedStyle(mobileDropdownContainer1).height;
    if(mobileCourseDropdownOpened1 == 0){
        mobileDropdownContainer1.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight1min) + "px";
        mobileCourseDropdownContainer1.style.height = mobileCourseDropdownHeight1min;
        document.getElementsByClassName("fa-caret-down")[6].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened1 = 1;
    }else if(mobileCourseDropdownOpened1 == 1){
        current2 = getComputedStyle(mobileCourseDropdownContainer1).height;
        mobileDropdownContainer1.style.height = (parseFloat(current1) - parseFloat(current2)) + "px";
        mobileCourseDropdownContainer1.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[6].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened1 = 0;
    }
}

let mobileCourseDropdownOpened2 = 0;
function mobileDropdown3(){
    mobileCourseDropdownContainer4.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[7].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened4 = 0;
    current1 = getComputedStyle(mobileDropdownContainer1).height;
    if(mobileCourseDropdownOpened2 == 0){
        mobileDropdownContainer1.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight2min) + "px";
        mobileCourseDropdownContainer2.style.height = mobileCourseDropdownHeight2min;
        document.getElementsByClassName("fa-caret-down")[8].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened2 = 1;
    }else if(mobileCourseDropdownOpened2 == 1){
        current2 = getComputedStyle(mobileCourseDropdownContainer2).height;
        mobileDropdownContainer1.style.height = (parseFloat(current1) - parseFloat(current2)) + "px";
        mobileCourseDropdownContainer2.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[8].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened2 = 0;
    }
}

let mobileCourseDropdownOpened3 = 0;
function mobileDropdown4(){
    current1 = getComputedStyle(mobileDropdownContainer1).height;
    if(mobileCourseDropdownOpened3 == 0){
        mobileDropdownContainer1.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight3) + "px";
        mobileCourseDropdownContainer1.style.height = mobileCourseDropdownHeight1max;
        mobileCourseDropdownContainer3.style.height = mobileCourseDropdownHeight3;
        document.getElementsByClassName("fa-caret-down")[7].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened3 = 1;
    }else if(mobileCourseDropdownOpened3 == 1){
        mobileDropdownContainer1.style.height = (parseFloat(current1) - parseFloat(mobileCourseDropdownHeight3)) + "px";
        mobileCourseDropdownContainer1.style.height = mobileCourseDropdownHeight1min;
        mobileCourseDropdownContainer3.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[7].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened3 = 0;
    }
}

let mobileCourseDropdownOpened4 = 0;
function mobileDropdown5(){
    current1 = getComputedStyle(mobileDropdownContainer1).height;
    if(mobileCourseDropdownOpened4 == 0){
        mobileDropdownContainer1.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight4) + "px";
        mobileCourseDropdownContainer2.style.height = mobileCourseDropdownHeight2max;
        mobileCourseDropdownContainer4.style.height = mobileCourseDropdownHeight4;
        document.getElementsByClassName("fa-caret-down")[9].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened4 = 1;
    }else if(mobileCourseDropdownOpened4 == 1){
        mobileDropdownContainer1.style.height = (parseFloat(current1) - parseFloat(mobileCourseDropdownHeight4)) + "px";
        mobileCourseDropdownContainer2.style.height = mobileCourseDropdownHeight2min;
        mobileCourseDropdownContainer4.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[9].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened4 = 0;
    }
}

let mobileDropdownOpened2 = 0;
function mobileDropdown6(){
    mobileCourseDropdownContainer5.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[1].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened5 = 0;
    mobileCourseDropdownContainer6.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[3].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened6 = 0;
    mobileCourseDropdownContainer7.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[2].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened7 = 0;
    mobileCourseDropdownContainer8.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[4].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened8 = 0;
    if(mobileDropdownOpened2 == 0){
        mobileDropdownContainer2.style.height = mobileDropdownHeight2;
        document.getElementsByClassName("fa-caret-down")[0].style.transform = "rotate(-180deg)";
        mobileDropdownOpened2 = 1;
    }else if(mobileDropdownOpened2 == 1){
        mobileDropdownContainer2.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[0].style.transform = "rotate(0deg)";
        mobileDropdownOpened2 = 0;
    }
}

let mobileCourseDropdownOpened5 = 0;
function mobileDropdown7(){
    mobileCourseDropdownContainer7.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[2].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened7 = 0;
    current1 = getComputedStyle(mobileDropdownContainer2).height;
    if(mobileCourseDropdownOpened5 == 0){
        mobileDropdownContainer2.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight5min) + "px";
        mobileCourseDropdownContainer5.style.height = mobileCourseDropdownHeight5min;
        document.getElementsByClassName("fa-caret-down")[1].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened5 = 1;
    }else if(mobileCourseDropdownOpened5 == 1){
        current2 = getComputedStyle(mobileCourseDropdownContainer5).height;
        mobileDropdownContainer2.style.height = (parseFloat(current1) - parseFloat(current2)) + "px";
        mobileCourseDropdownContainer5.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[1].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened5 = 0;
    }
}

let mobileCourseDropdownOpened6 = 0;
function mobileDropdown8(){
    mobileCourseDropdownContainer8.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[4].style.transform = "rotate(0deg)";
    mobileCourseDropdownOpened8 = 0;
    current1 = getComputedStyle(mobileDropdownContainer2).height;
    if(mobileCourseDropdownOpened6 == 0){
        mobileDropdownContainer2.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight5min) + "px";
        mobileCourseDropdownContainer6.style.height = mobileCourseDropdownHeight6min;
        document.getElementsByClassName("fa-caret-down")[3].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened6 = 1;
    }else if(mobileCourseDropdownOpened6 == 1){
        current2 = getComputedStyle(mobileCourseDropdownContainer6).height;
        mobileDropdownContainer2.style.height = (parseFloat(current1) - parseFloat(current2)) + "px";
        mobileCourseDropdownContainer6.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[3].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened6 = 0;
    }
}

let mobileCourseDropdownOpened7 = 0;
function mobileDropdown9(){
    current1 = getComputedStyle(mobileDropdownContainer2).height;
    if(mobileCourseDropdownOpened7 == 0){
        mobileDropdownContainer2.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight7) + "px";
        mobileCourseDropdownContainer5.style.height = mobileCourseDropdownHeight5max;
        mobileCourseDropdownContainer7.style.height = mobileCourseDropdownHeight7;
        document.getElementsByClassName("fa-caret-down")[2].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened7 = 1;
    }else if(mobileCourseDropdownOpened7 == 1){
        mobileDropdownContainer2.style.height = (parseFloat(current1) - parseFloat(mobileCourseDropdownHeight7)) + "px";
        mobileCourseDropdownContainer5.style.height = mobileCourseDropdownHeight5min;
        mobileCourseDropdownContainer7.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[2].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened7 = 0;
    }
}

let mobileCourseDropdownOpened8 = 0;
function mobileDropdown10(){
    current1 = getComputedStyle(mobileDropdownContainer2).height;
    if(mobileCourseDropdownOpened8 == 0){
        mobileDropdownContainer2.style.height = parseFloat(current1) + parseFloat(mobileCourseDropdownHeight8) + "px";
        mobileCourseDropdownContainer6.style.height = mobileCourseDropdownHeight6max;
        mobileCourseDropdownContainer8.style.height = mobileCourseDropdownHeight8;
        document.getElementsByClassName("fa-caret-down")[4].style.transform = "rotate(-180deg)";
        mobileCourseDropdownOpened8 = 1;
    }else if(mobileCourseDropdownOpened8 == 1){
        mobileDropdownContainer2.style.height = (parseFloat(current1) - parseFloat(mobileCourseDropdownHeight8)) + "px";
        mobileCourseDropdownContainer6.style.height = mobileCourseDropdownHeight6min;
        mobileCourseDropdownContainer8.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[4].style.transform = "rotate(0deg)";
        mobileCourseDropdownOpened8 = 0;
    }
}


let dropdownOpened2 = 0;
function dropdown2(){
    dropdownContainer3.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[4].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened3 = 0;
    dropdownContainer4.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[6].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened4 = 0;
    dropdownContainer5.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[5].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened5 = 0;
    dropdownContainer6.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[7].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened6 = 0;

    dropdownContainer7.style.visibility = "hidden";
    dropdownContainer7.style.overflowX = "hidden";
    dropdownContainer7.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[10].style.transform = "rotate(0deg)";
    dropdownOpened7 = 0;
    dropdownContainer8.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[0].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened8 = 0;
    dropdownContainer9.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[2].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened9 = 0;
    dropdownContainer10.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[1].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened10 = 0;
    dropdownContainer11.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[3].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened11 = 0;
    if(dropdownOpened2 == 0){
        dropdownContainer2.style.visibility = "visible";
        dropdownContainer2.style.height = dropdownHeight2;
        document.getElementsByClassName("fa-caret-down")[11].style.transform = "rotate(-180deg)";
        dropdownOpened2 = 1;
    }else if(dropdownOpened2 == 1){
        dropdownContainer2.style.visibility = "hidden";
        dropdownContainer2.style.overflowX = "hidden";
        dropdownContainer2.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[11].style.transform = "rotate(0deg)";
        dropdownOpened2 = 0;
    }
}

let dropdownOpened3 = 0;
function dropdown3(){
    dropdownContainer4.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[6].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened4 = 0;
    dropdownContainer5.style.height = "0";
    dropdownContainer3.style.overflowX = "hidden";
    dropdownContainer4.style.overflowX = "hidden";
    document.getElementsByClassName("fa-caret-right")[5].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened5 = 0;
    dropdownContainer6.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[7].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened6 = 0;
    if(dropdownOpened3 == 0){
        dropdownContainer2.style.overflowX = "visible";
        dropdownContainer3.style.height = dropdownHeight3;
        document.getElementsByClassName("fa-caret-right")[4].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened3 = 1;
    }else if(dropdownOpened3 == 1){
        dropdownContainer3.style.overflowX = "hidden";
        dropdownContainer3.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[4].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened3 = 0;
    }
}

let dropdownOpened4 = 0;
function dropdown4(){
    dropdownContainer3.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[4].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened3 = 0;
    dropdownContainer5.style.height = "0";
    dropdownContainer4.style.overflowX = "hidden";
    dropdownContainer3.style.overflowX = "hidden";
    document.getElementsByClassName("fa-caret-right")[5].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened5 = 0;
    dropdownContainer6.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[7].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened6 = 0;
    if(dropdownOpened4 == 0){
        dropdownContainer2.style.overflowX = "visible";
        dropdownContainer4.style.height = dropdownHeight4;
        document.getElementsByClassName("fa-caret-right")[6].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened4 = 1;
    }else if(dropdownOpened4 == 1){
        dropdownContainer4.style.overflowX = "hidden";
        dropdownContainer4.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[6].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened4 = 0;
    }
}

let dropdownOpened5 = 0;
function dropdown5(){
    if(dropdownOpened5 == 0){
        dropdownContainer3.style.overflowX = "visible";
        dropdownContainer5.style.height = dropdownHeight5;
        document.getElementsByClassName("fa-caret-right")[5].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened5 = 1;
    }else if(dropdownOpened5 == 1){
        dropdownContainer5.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[5].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened5 = 0;
    }
}

let dropdownOpened6 = 0;
function dropdown6(){
    if(dropdownOpened6 == 0){
        dropdownContainer4.style.overflowX = "visible";
        dropdownContainer6.style.height = dropdownHeight6;
        document.getElementsByClassName("fa-caret-right")[7].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened6 = 1;
    }else if(dropdownOpened6 == 1){
        dropdownContainer6.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[7].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened6 = 0;
    }
}


let dropdownOpened7 = 0;
function dropdown7(){
    dropdownContainer2.style.visibility = "hidden";
    dropdownContainer2.style.overflowX = "hidden";
    dropdownContainer2.style.height = "0";
    document.getElementsByClassName("fa-caret-down")[11].style.transform = "rotate(0deg)";
    dropdownOpened2 = 0;
    dropdownContainer3.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[4].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened3 = 0;
    dropdownContainer4.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[6].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened4 = 0;
    dropdownContainer5.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[5].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened5 = 0;
    dropdownContainer6.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[7].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened6 = 0;

    dropdownContainer8.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[0].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened8 = 0;
    dropdownContainer9.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[2].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened9 = 0;
    dropdownContainer10.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[1].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened10 = 0;
    dropdownContainer11.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[3].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened11 = 0;
    if(dropdownOpened7 == 0){
        dropdownContainer7.style.visibility = "visible";
        dropdownContainer7.style.height = dropdownHeight7;
        document.getElementsByClassName("fa-caret-down")[10].style.transform = "rotate(-180deg)";
        dropdownOpened7 = 1;
    }else if(dropdownOpened7 == 1){
        dropdownContainer7.style.visibility = "hidden";
        dropdownContainer7.style.overflowX = "hidden";
        dropdownContainer7.style.height = "0";
        document.getElementsByClassName("fa-caret-down")[10].style.transform = "rotate(0deg)";
        dropdownOpened7 = 0;
    }
}

let dropdownOpened8 = 0;
function dropdown8(){
    dropdownContainer9.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[2].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened9 = 0;
    dropdownContainer10.style.height = "0";
    dropdownContainer8.style.overflowX = "hidden";
    dropdownContainer9.style.overflowX = "hidden";
    document.getElementsByClassName("fa-caret-right")[1].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened10 = 0;
    dropdownContainer11.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[3].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened11 = 0;
    if(dropdownOpened8 == 0){
        dropdownContainer7.style.overflowX = "visible";
        dropdownContainer8.style.height = dropdownHeight8;
        document.getElementsByClassName("fa-caret-right")[0].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened8 = 1;
    }else if(dropdownOpened8 == 1){
        dropdownContainer8.style.overflowX = "hidden";
        dropdownContainer8.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[0].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened8 = 0;
    }
}

let dropdownOpened9 = 0;
function dropdown9(){
    dropdownContainer8.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[0].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened8 = 0;
    dropdownContainer10.style.height = "0";
    dropdownContainer9.style.overflowX = "hidden";
    dropdownContainer8.style.overflowX = "hidden";
    document.getElementsByClassName("fa-caret-right")[1].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened10 = 0;
    dropdownContainer11.style.height = "0";
    document.getElementsByClassName("fa-caret-right")[3].style.transform = "translate(0px, 0px) rotate(0deg)";
    dropdownOpened11 = 0;
    if(dropdownOpened9 == 0){
        dropdownContainer7.style.overflowX = "visible";
        dropdownContainer9.style.height = dropdownHeight9;
        document.getElementsByClassName("fa-caret-right")[2].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened9 = 1;
    }else if(dropdownOpened9 == 1){
        dropdownContainer9.style.overflowX = "hidden";
        dropdownContainer9.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[2].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened9 = 0;
    }
}

let dropdownOpened10 = 0;
function dropdown10(){
    if(dropdownOpened10 == 0){
        dropdownContainer8.style.overflowX = "visible";
        dropdownContainer10.style.height = dropdownHeight10;
        document.getElementsByClassName("fa-caret-right")[1].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened10 = 1;
    }else if(dropdownOpened10 == 1){
        dropdownContainer10.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[1].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened10 = 0;
    }
}

let dropdownOpened11 = 0;
function dropdown11(){
    if(dropdownOpened11 == 0){
        dropdownContainer9.style.overflowX = "visible";
        dropdownContainer11.style.height = dropdownHeight11;
        document.getElementsByClassName("fa-caret-right")[3].style.transform = "translate(0px, -4px) rotate(-180deg)";
        dropdownOpened11 = 1;
    }else if(dropdownOpened11 == 1){
        dropdownContainer11.style.height = "0";
        document.getElementsByClassName("fa-caret-right")[3].style.transform = "translate(0px, 0px) rotate(0deg)";
        dropdownOpened11 = 0;
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


let fullMark = 150;

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
            let percentage = ((degree / fullMark) * 100).toFixed(2);
            let grade;
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
            document.getElementById("percentage1").innerHTML = percentage + "%";
            document.getElementById("rank3").innerHTML = rank;
            document.getElementById("bn1").innerHTML = names.indexOf(name) + 1;
            document.getElementById("name3").innerHTML = name;
            if(percentage >= 85){
                grade = "امتياز";
            }else if(percentage >= 75){
                grade = "جيد جدا";
            }else if(percentage >= 65){
                grade = "جيد";
            }else if(percentage >= 50){
                grade = "مقبول";
            }else if(percentage >= 25){
                grade = "ضعيف";
            }else{
                grade = "ضعيف جدا";
            }
            document.getElementById("grade1").innerHTML = grade;

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
            let percentage;
            let grade;

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
                percentage = ((deg[inner_index] / fullMark) * 100).toFixed(2);
                if(percentage >= 85){
                    grade = "امتياز";
                }else if(percentage >= 75){
                    grade = "جيد جدا";
                }else if(percentage >= 65){
                    grade = "جيد";
                }else if(percentage >= 50){
                    grade = "مقبول";
                }else if(percentage >= 25){
                    grade = "ضعيف";
                }else{
                    grade = "ضعيف جدا";
                }
                let row = document.createElement("tr");
                let dataNum = document.createElement("td");
                let dataN = document.createElement("td");
                dataN.className = "name";
                let dataBN = document.createElement("td");
                let dataD = document.createElement("td");
                let dataP = document.createElement("td");
                let dataG = document.createElement("td");
                dataG.className = "grade";
                let dataR = document.createElement("td");
                dataNum.innerHTML = num;
                dataN.innerHTML = names[inner_index];
                dataBN.innerHTML = inner_index + 1;
                dataD.innerHTML = deg[inner_index];
                dataP.innerHTML = percentage + "%";
                dataG.innerHTML = grade;
                dataR.innerHTML = deg_sorted.indexOf(deg[inner_index]) + 1;
                row.appendChild(dataR);
                row.appendChild(dataG);
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
        let percentage = ((degree / fullMark) * 100).toFixed(2);
        let grade;
        document.getElementById("bnSearchTbl").style.display = "block";
        document.getElementById("error4").style.display = "none";
        document.getElementById("degree4").innerHTML = degree;
        document.getElementById("percentage2").innerHTML = percentage + "%";
        document.getElementById("rank4").innerHTML = rank;
        document.getElementById("bn2").innerHTML = index + 1;
        document.getElementById("name4").innerHTML = name;
        if(percentage >= 85){
            grade = "امتياز";
        }else if(percentage >= 75){
            grade = "جيد جدا";
        }else if(percentage >= 65){
            grade = "جيد";
        }else if(percentage >= 50){
            grade = "مقبول";
        }else if(percentage >= 25){
            grade = "ضعيف";
        }else{
            grade = "ضعيف جدا";
        }
        document.getElementById("grade2").innerHTML = grade;
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
        let percentage = ((degree / fullMark) * 100).toFixed(2);
        let grade;
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
            document.getElementById("percentage3").innerHTML = percentage + "%";
            document.getElementById("rank2").innerHTML = deg_sorted.indexOf(degree) + 1;
            document.getElementById("name2").innerHTML = "";
            document.getElementById("bn3").innerHTML = "";
            if(percentage >= 85){
                grade = "امتياز";
            }else if(percentage >= 75){
                grade = "جيد جدا";
            }else if(percentage >= 65){
                grade = "جيد";
            }else if(percentage >= 50){
                grade = "مقبول";
            }else if(percentage >= 25){
                grade = "ضعيف";
            }else{
                grade = "ضعيف جدا";
            }
            document.getElementById("grade3").innerHTML = grade;
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
        let percentage = ((deg_sorted[rank] / fullMark) * 100).toFixed(2);
        let grade;
        if (rank == -1){
            document.getElementById("error").style.display = "flex";
            document.getElementById("degSearchTbl").style.display = "none";
            document.getElementById("error").innerHTML = "Invalid degree! please try again";
        }else{
            document.getElementById("degSearchTbl").style.display = "block";
            document.getElementById("error").style.display = "none";
            document.getElementById("rank").innerHTML = rank + 1;
            document.getElementById("degree1").innerHTML = deg_sorted[rank];
            document.getElementById("percentage4").innerHTML = percentage + "%";
            document.getElementById("name").innerHTML = "";
            document.getElementById("bn4").innerHTML = "";
            if(percentage >= 85){
                grade = "امتياز";
            }else if(percentage >= 75){
                grade = "جيد جدا";
            }else if(percentage >= 65){
                grade = "جيد";
            }else if(percentage >= 50){
                grade = "مقبول";
            }else if(percentage >= 25){
                grade = "ضعيف";
            }else{
                grade = "ضعيف جدا";
            }
            document.getElementById("grade4").innerHTML = grade;
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
    let percentage;
    let grade;
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
            percentage = ((deg[index[i]] / fullMark) * 100).toFixed(2);
            if(percentage >= 85){
                grade = "امتياز";
            }else if(percentage >= 75){
                grade = "جيد جدا";
            }else if(percentage >= 65){
                grade = "جيد";
            }else if(percentage >= 50){
                grade = "مقبول";
            }else if(percentage >= 25){
                grade = "ضعيف";
            }else{
                grade = "ضعيف جدا";
            }
            tbl2.style.display = "table";
            document.getElementById("error5").style.display = "none";
            let row = document.createElement("tr");
            let dataNum = document.createElement("td");
            let dataN = document.createElement("td");
            dataN.className = "name";
            let dataBN = document.createElement("td");
            let dataD = document.createElement("td");
            let dataP = document.createElement("td");
            let dataG = document.createElement("td");
            dataG.className = "grade";
            let dataR = document.createElement("td");
            dataNum.innerHTML = i + 1;
            dataN.innerHTML = names[index[i]];
            dataBN.innerHTML = index[i] + 1;
            dataD.innerHTML = deg[index[i]];
            dataP.innerHTML = percentage + "%";
            dataG.innerHTML = grade;
            dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
            row.appendChild(dataR);
            row.appendChild(dataG);
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
    let percentage;
    let grade;
    if(isNaN(initdeg)){
        initdeg = 0;
    }
    if(isNaN(findeg)){
        findeg = fullMark;
    }

    if(initdeg >= 0 && initdeg <= fullMark && findeg >= 0 && findeg <= fullMark && findeg - initdeg != 0){
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
                percentage = ((deg[index[i]] / fullMark) * 100).toFixed(2);
                if(percentage >= 85){
                    grade = "امتياز";
                }else if(percentage >= 75){
                    grade = "جيد جدا";
                }else if(percentage >= 65){
                    grade = "جيد";
                }else if(percentage >= 50){
                    grade = "مقبول";
                }else if(percentage >= 25){
                    grade = "ضعيف";
                }else{
                    grade = "ضعيف جدا";
                }
                tbl3.style.display = "table";
                document.getElementById("error6").style.display = "none";
                let row = document.createElement("tr");
                let dataNum = document.createElement("td");
                let dataN = document.createElement("td");
                dataN.className = "name";
                let dataBN = document.createElement("td");
                let dataD = document.createElement("td");
                let dataP = document.createElement("td");
                let dataG = document.createElement("td");
                dataG.className = "grade";
                let dataR = document.createElement("td");
                dataNum.innerHTML = i + 1;
                dataN.innerHTML = names[index[i]];
                dataBN.innerHTML = index[i] + 1;
                dataD.innerHTML = deg[index[i]];
                dataP.innerHTML = percentage + "%";
                dataG.innerHTML = grade;
                dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
                row.appendChild(dataR);
                row.appendChild(dataG);
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
    let percentage;
    let grade;
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
            let index = initIndex + i;
            percentage = ((deg[index] / fullMark) * 100).toFixed(2);
            if(percentage >= 85){
                grade = "امتياز";
            }else if(percentage >= 75){
                grade = "جيد جدا";
            }else if(percentage >= 65){
                grade = "جيد";
            }else if(percentage >= 50){
                grade = "مقبول";
            }else if(percentage >= 25){
                grade = "ضعيف";
            }else{
                grade = "ضعيف جدا";
            }
            tbl4.style.display = "table";
            document.getElementById("error5").style.display = "none";
            let row = document.createElement("tr");
            let dataNum = document.createElement("td");
            let dataN = document.createElement("td");
            dataN.className = "name";
            let dataBN = document.createElement("td");
            let dataD = document.createElement("td");
            let dataP = document.createElement("td");
            let dataG = document.createElement("td");
            dataG.className = "grade";
            let dataR = document.createElement("td");
            dataNum.innerHTML = i + 1;
            dataN.innerHTML = names[index];
            dataBN.innerHTML = index + 1;
            dataD.innerHTML = deg[index];
            dataP.innerHTML = percentage + "%";
            dataG.innerHTML = grade;
            dataR.innerHTML = deg_sorted.indexOf(deg[index]) + 1;
            row.appendChild(dataR);
            row.appendChild(dataG);
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
    let percentage;
    let grade;
    
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
        percentage = ((deg[index] / fullMark) * 100).toFixed(2);
        if(percentage >= 85){
            grade = "امتياز";
        }else if(percentage >= 75){
            grade = "جيد جدا";
        }else if(percentage >= 65){
            grade = "جيد";
        }else if(percentage >= 50){
            grade = "مقبول";
        }else if(percentage >= 25){
            grade = "ضعيف";
        }else{
            grade = "ضعيف جدا";
        }
        let row = document.createElement("tr");
        let dataNum = document.createElement("td");
        let dataN = document.createElement("td");
        dataN.className = "name";
        let dataBN = document.createElement("td");
        let dataD = document.createElement("td");
        let dataP = document.createElement("td");
        let dataG = document.createElement("td");
        dataG.className = "grade";
        let dataR = document.createElement("td");
        dataNum.innerHTML = i + 1;
        dataN.innerHTML = names[index];
        dataBN.innerHTML = index + 1;
        dataD.innerHTML = deg[index];
        dataP.innerHTML = percentage + "%";
        dataG.innerHTML = grade;
        dataR.innerHTML = deg_sorted.indexOf(deg[index]) + 1;
        row.appendChild(dataR);
        row.appendChild(dataG);
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
    let percentage;
    let grade;

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
        percentage = ((deg[index[i]] / fullMark) * 100).toFixed(2);
        if(percentage >= 85){
            grade = "امتياز";
        }else if(percentage >= 75){
            grade = "جيد جدا";
        }else if(percentage >= 65){
            grade = "جيد";
        }else if(percentage >= 50){
            grade = "مقبول";
        }else if(percentage >= 25){
            grade = "ضعيف";
        }else{
            grade = "ضعيف جدا";
        }
        tbl5.style.display = "table";
        document.getElementById("error5").style.display = "none";
        let row = document.createElement("tr");
        let dataNum = document.createElement("td");
        let dataN = document.createElement("td");
        dataN.className = "name";
        let dataBN = document.createElement("td");
        let dataD = document.createElement("td");
        let dataP = document.createElement("td");
        let dataG = document.createElement("td");
        dataG.className = "grade";
        let dataR = document.createElement("td");
        dataNum.innerHTML = i + 1;
        dataN.innerHTML = names[index[i]];
        dataBN.innerHTML = index[i] + 1;
        dataD.innerHTML = deg[index[i]];
        dataP.innerHTML = percentage + "%";
        dataG.innerHTML = grade;
        dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
        row.appendChild(dataR);
        row.appendChild(dataG);
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
    let findeg = fullMark;
    let tbl5 = document.getElementById("tbl5");
    let percentage;
    let grade;

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
        percentage = ((deg[index[i]] / fullMark) * 100).toFixed(2);
        if(percentage >= 85){
            grade = "امتياز";
        }else if(percentage >= 75){
            grade = "جيد جدا";
        }else if(percentage >= 65){
            grade = "جيد";
        }else if(percentage >= 50){
            grade = "مقبول";
        }else if(percentage >= 25){
            grade = "ضعيف";
        }else{
            grade = "ضعيف جدا";
        }
        tbl5.style.display = "table";
        document.getElementById("error6").style.display = "none";
        let row = document.createElement("tr");
        let dataNum = document.createElement("td");
        let dataN = document.createElement("td");
        dataN.className = "name";
        let dataBN = document.createElement("td");
        let dataD = document.createElement("td");
        let dataP = document.createElement("td");
        let dataG = document.createElement("td");
        dataG.className = "grade";
        let dataR = document.createElement("td");
        dataNum.innerHTML = i + 1;
        dataN.innerHTML = names[index[i]];
        dataBN.innerHTML = index[i] + 1;
        dataD.innerHTML = deg[index[i]];
        dataP.innerHTML = percentage + "%";
        dataG.innerHTML = grade;
        dataR.innerHTML = deg_sorted.indexOf(deg[index[i]]) + 1;
        row.appendChild(dataR);
        row.appendChild(dataG);
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