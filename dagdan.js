// let selectedColors=['red','blue'];
// console.log(selectedColors[0]);

// //length is dynamic 
// selectedColors[2]=1;

// 
$(function(){
    $("#block").hide().slideDown(3000); 

});
$(function(){
    $("#block1").hide().slideDown(3000); 

    $('body').prepend(`<div class="test sticky-top">
    
    <ul>
        <li>
            <img src="/pictures/logo.png" class="logo">
        </li>
        <li><a href="Dagdan1.html"> Dagdan</a></li>
        <li><a href="WhatWeDo.html">What We Do</a></li>
        <li><a href="HowWeDo.html">How We Do It</a></li>
        <li><a href="OurWork.html">Our Work</a></li>
        <li><a href="WhoWeAre.html">Who We Are</a></li>
        <li>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search" href="shoppingbasket.html"
                        class="btn bg-light">
                </form>
            </div>
        </li>
    </ul>
    </div>`);
    $(".image10").hide().show(3000);
    $(".image11").hide().show(3000);
    $(".image12").hide().show(3000);
    $(".image14").hide().show(3000);



    $('footer ').prepend(`<i class="fa fa-fw fa-home"></i>
    <i class="fa fa-fw fa-phone-square"> </i>
    <i class="fa fa-fw fa-envelope"> </i>
    <a href="https://www.instagram.com/dagdan_official/" class="fa fa-instagram"></a>`);

        

});

