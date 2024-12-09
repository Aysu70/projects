// const nav_links = document.querySelectorAll(".nav-link");
// const main_header = document.querySelectorAll(".wordsofword");


// const langbtn = document.querySelector("#lan-btn");

// let changes = [nav_links, main_header];

// const lang = {
//     nav_bar:{
//         en : ["Demos", "Pages", "Projects", "Blog", "Blocks", "Documentation"],
//         az : ["Demolar","Səhifələr", "Layihələr", "Bloq", "Bloklar", "Sənədlər"]
//     },
//     header_end:{
//         en: ["We bring solutions to make life easier", "We are a creative company that focuses on long term relationships with customers.", "Read More"],
//         az: ["Biz həyatı asanlaşdırmaq üçün həllər təqdim edirik", "Biz müştərilərlə uzunmüddətli münasibətlərə diqqət yetirən kreativ şirkətik.", "Daha çoxu üçün"]
//     },


// };

// console.log(main_header)

// function changethelan(){   
//     if(langbtn.innerHTML === "EN"){
//         lang.nav_bar.az.map((item,index)=>{
//             nav_links[index].innerHTML = lang.nav_bar.az[index];
//         })
//         lang.header_end.az.map((item,index)=>{
//             main_header[index].innerHTML = lang.header_end.az[index];
//         })
//         langbtn.innerHTML = "AZ";
//     }else{
//         lang.nav_bar.en.map((item,index)=>{
//             nav_links[index].innerHTML = lang.nav_bar.en[index];
//         })
//         lang.header_end.en.map((item,index)=>{
//             main_header[index].innerHTML = lang.header_end.en[index];
//         })
//         langbtn.innerHTML = "EN";       
//     }
// }

// langbtn.addEventListener("click", changethelan);



const nav_links = document.querySelectorAll(".drop-menu");
const main_header = document.querySelectorAll(".wordsofword");
const cart_start = document.querySelectorAll(".card-start");
const cart_end = document.querySelectorAll(".card-end");
const icons = document.querySelectorAll(".icon_lan");
const save_up = document.querySelectorAll(".savings");
const profession = document.querySelectorAll(".profession");
const project = document.querySelectorAll(".projects-all");
const diff_headers = document.querySelectorAll(".diff");
//footerda queryselector islemedi
const footer_widget = document.getElementsByClassName("footwid");
const footer_tit = document.getElementsByClassName("tit");
const fcontents = document.getElementsByClassName("contents");
console.log(fcontents);


const langbtn = document.querySelector("#lan-btn");

let changes = [nav_links, main_header, cart_start, cart_end];

const lang = {
    EN: {
        nav_bar: ["Demos", "Pages", "Projects", "Blog", "Blocks", "Log in"],
        header_end: ["We bring solutions to make life easier", "We are a creative company that focuses on long term relationships with customers.", "Read More"],
        card_title: ["Content Marketing", "Social Engagement", "Identity & Branding", "Product Design"],
        card_finish: ["Learn more", "Learn more","Learn more", "Learn more"],
        icon_cards: ["Why Choose Sandbox?", "Here are a few reasons why our","customers choose Sandbox." ,"Collect Ideas", "Collect Ideas","Collect Ideas","Collect Ideas","Learn More"],
        save: ["Save Time and Money", "Save your time and money by choosing our professional team.", "Customer Satisfaction", "Increased Revenue"],
        proffs: ["Sales Manager","Sales Manager","Sales Manager"],
        projects_all: ["Latest Projects","Check out some of our awesome projects with creative ideas and great design.","Stationary","Stationary","Stationary"],
        differ: ["What Makes Us Different?","We bring solutions to make life easier for our customers.","Creativity","Innovative Thinking","Rapid Solutions", "Top-Notch Support"],
        footer_start: ["Join Our Community","We are trusted by over 5000+ clients. Join them now and grow your business.","Get Started"],
        footer_title: ["© 2024 Sandbox. All rights reserved.","Get in Touch","Learn More","Our Newsletter"],
        footer_cont: ["Moonshine St. 14/05 Light City, London, United Kingdom","About Us","Our Story","Projects","Terms of Use","Privacy Policy","Subscribe to our newsletter to get our news & deals delivered to you.","JOIN"]
    },
    AZ: {
        nav_bar:  ["Demolar","Səhifələr", "Layihələr", "Bloq", "Bloklar", "Daxil ol"],
        header_end: ["Biz həyatı asanlaşdırmaq üçün həllər təqdim edirik", "Biz müştərilərlə uzunmüddətli münasibətlərə diqqət yetirən kreativ şirkətik.", "Daha çoxu üçün"],    
        card_title: ["Kontent Marketinq", "İctimai İştirak", "Kimlik və Brendləşmə", "Məhsul Dizaynı"],
        card_finish: ["Daha çoxu üçün", "Daha çoxu üçün", "Daha çoxu üçün", "Daha çoxu üçün"],
        icon_cards: ["Nə üçün Sandbox?","Müştərilərimizin Sandboxu seçməsinin","bir neçə səbəbi bunlardır.","İdeyaları toplayın","İdeyaları toplayın","İdeyaları toplayın","İdeyaları toplayın", "Daha çoxu üçün"],
        save: ["Zaman və Pulundan Qənaət Et", "Bizim ustalaşmış komandamızı seçməklə vaxt və pulunuza qənaət edin","Müştəri məmnunluğu", "Artan Gəlir"],
        proffs: ["Satış meneceri","Satış meneceri","Satış meneceri"],
        projects_all: ["Son işlərimiz","Yaradıcı ideyaları və gözəl dizaynı olan bəzi möhtəşəm layihələrimizə baxın.","Dəftər","Dəftər","Dəftər"],
        differ: ["Bizi Fərqli Edən Nələrdir?", "Biz həyatı asanlaşdırmaq üçün həllər təqdim edirik.", "Yaradıcılıq", "Yenilikçi Düşünce", "Sürətli Çözümlər", "Ən yüksək səviyyəli dəstək"],
        footer_start: ["Bizim Bir Parçamız Olun","Biz 5000+ müştıri tərəfindən güvənilirik. Onlara qoşulub öz biznesinizi böyüdün.","İndi Başlayın"],
        footer_title: ["© 2024 Sandbox. Bütün haqlar qorunur.","Əlaqələr", "Daha Çox Məlumat","Bizim Xəbərlər"],
        footer_cont: ["Moonshine St. 14/05 Light City, London, Birləşmiş Krallıq","Haqqımızda","Bizim Hekayəmiz","İşlərimiz","İstifadə Şərtləri","Məxfilik Siyasəti","Xəbər və təkliflərimiz barədə məlumat almaq üçün bizə abone olun","QOŞULUN"]
    }   
};


function changethelan(){   
    if(langbtn.innerHTML === "EN"){
        lang.AZ.nav_bar.map((item,index)=>{
            nav_links[index].innerHTML = lang.AZ.nav_bar[index];
        })
        lang.AZ.header_end.map((item,index)=>{
            main_header[index].innerHTML = lang.AZ.header_end[index];
        })
        lang.AZ.card_title.map((item,index)=>{
            cart_start[index].innerHTML = lang.AZ.card_title[index];
        })
        lang.AZ.card_finish.map((item, index)=>{
            cart_end[index].innerHTML = lang.AZ.card_finish[index];
        })
        lang.AZ.icon_cards.map((item, index)=>{
            icons[index].innerHTML = lang.AZ.icon_cards[index];
        }) 
        lang.AZ.save.map((item, index)=>{
            save_up[index].innerHTML = lang.AZ.save[index];
        }) 
        lang.AZ.proffs.map((item, index)=>{
            profession[index].innerHTML = lang.AZ.proffs[index];
        })
        lang.AZ.projects_all.map((item, index)=>{
            project[index].innerHTML = lang.AZ.projects_all[index];
        })
        lang.AZ.differ.map((item, index)=>{
            diff_headers[index].innerHTML = lang.AZ.differ[index];
        })
        lang.AZ.footer_start.map((item,index)=>{
            footer_widget[index].innerHTML = lang.AZ.footer_start[index];
        })
        lang.AZ.footer_title.map((item,index)=>{
            footer_tit[index].innerHTML = lang.AZ.footer_title[index];
        })
        lang.AZ.footer_cont.map((item,index)=>{
            fcontents[index].innerHTML = lang.AZ.footer_cont[index];
        })
        langbtn.innerHTML = "AZ";
    }else{
        lang.EN.nav_bar.map((item,index)=>{
            nav_links[index].innerHTML = lang.EN.nav_bar[index];
        })
        lang.EN.header_end.map((item,index)=>{
            main_header[index].innerHTML = lang.EN.header_end[index];
        })
        lang.EN.card_title.map((item,index)=>{
            cart_start[index].innerHTML = lang.EN.card_title[index];
        })
        lang.EN.card_finish.map((item, index)=>{
            cart_end[index].innerHTML = lang.EN.card_finish[index];
        })
        lang.EN.icon_cards.map((item, index)=>{
            icons[index].innerHTML = lang.EN.icon_cards[index];
        }) 
        lang.EN.save.map((item, index)=>{
            save_up[index].innerHTML = lang.EN.save[index];
        }) 
        lang.EN.proffs.map((item, index)=>{
            profession[index].innerHTML = lang.EN.proffs[index];
        })
        lang.EN.projects_all.map((item, index)=>{
            project[index].innerHTML = lang.EN.projects_all[index];
        })
        lang.EN.differ.map((item, index)=>{
            diff_headers[index].innerHTML = lang.EN.differ[index];
        })
        lang.EN.footer_start.map((item,index)=>{
            footer_widget[index].innerHTML = lang.EN.footer_start[index];
        })
        lang.EN.footer_title.map((item,index)=>{
            footer_tit[index].innerHTML = lang.EN.footer_title[index];
        })
        lang.EN.footer_cont.map((item,index)=>{
            fcontents[index].innerHTML = lang.EN.footer_cont[index];
        })
        langbtn.innerHTML = "EN";       
    }
}

langbtn.addEventListener("click", changethelan);



