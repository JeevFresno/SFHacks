/**
 * Created by Jeevjyot on 3/6/17.
 */


$(document).ready(function(){

    //Introduction page
    $('#introductionPage').click(function(e){
        e.preventDefault();
        $('#introDiv').show();
        $('#introDiv').siblings().hide();

    }); //Handling introduction div.

    //When user click the enter button
    $('#introductionPage1').click(function(e){
        e.preventDefault();

        $('#introDiv').show();
        $('#introDiv').siblings().hide();

    }); //Handling introduction div.
    //Faculty Page
    $('#facultyPage').click(function(e){
        e.preventDefault();
        $('#facultyDiv').show();
        $('#facultyDiv').siblings().hide();

    });
    //Syllabus Page
    $('#syllabusPage').click(function(e){
        e.preventDefault();
        $('#syllabus').show();
        $('#syllabus').siblings().hide();
    })

    //handling the inner div of the experiments
    $('a').on('click', function(){
        //alert(JSON.stringify($(this).attr('rel')));
        // var target = $(this).attr('rel');
        // $("#"+target).show().siblings("div").hide();
        $(this).addClass('active');
        var target = $(this).attr('rel'); $(this).removeClass('active');
        $("#"+target).fadeIn().siblings("div").hide();
    });

    //handling the inner div of the experiments
    $('.link').on('click', function (e) {
        e.preventDefault();
        var id = $(e.target).attr('id');
        $('.tab').hide();
        $('.tab1').hide();  //introduction contained
        $('.tab3').hide();  //syllabus
        $('#facultyDiv').hide();
        $('#introDiv').hide();
        $('#' + id  + '-details').fadeIn();
    });

    //Fancy Box for displaying the word file.
    $(".word").fancybox({
        'width': 600, // or whatever
        'height': 320,
        'type': 'iframe'
    });
}); //End of document.ready function


// Syllabus function
function showSyllabus(){
    $('.tab1').hide();
    $('#syllabus').show();
    $('#one').hide();
    $('#two').hide();
    $('#syllabus').siblings().hide();
}


//Experiment 2 section
var sections ={
    '4-Point mode':'four_point',
    '3-Point mode':'three_point',
}
//Experiment 2 section manipulation
var selection = function(select) {


    // alert('Length = ' +document.getElementById("length").value);
    //alert('SELECT value ='+select.value);

    for(i in sections)
        document.getElementById(sections[i]).style.display = "none";

    document.getElementById('fourPoint10').style.display = "none";
    document.getElementById('ThreePoint10').style.display = "none";

    if(select.value =='4-Point mode' && document.getElementById("length").value =='34')
    {
        document.getElementById('four_point').style.display = "block";
        document.getElementById("Li").style.display = "block";
        b1d1Hide();
        b2d2hide();
        bdHide();
    }
    if(select.value =='4-Point mode' && document.getElementById("length").value =='10')
    {
        document.getElementById('fourPoint10').style.display = "block";
        document.getElementById("Li").style.display = "block";
        b1d1Hide();
        b2d2show();
        bdHide();
    }
    if(select.value =='3-Point mode' && document.getElementById("length").value =='34')
    {
        document.getElementById('three_point').style.display = "block";
        document.getElementById("Li").style.display = "none";
        bdHide();
        b1d1Show();
        b2d2hide();

    }
    if(select.value =='3-Point mode' && document.getElementById("length").value =='10')
    {
        document.getElementById('ThreePoint10').style.display = "block";
        document.getElementById("Li").style.display = "none";
        //b1d1Hide();
        //b2d2hide();
        bdshow();
    }

}

function b1d1Show(){
    document.getElementById("b1").style.display ="block";
    document.getElementById("d1").style.display ="block";
}
function b1d1Hide(){
    document.getElementById("b1").style.display ="none";
    document.getElementById("d1").style.display ="none";
}
function b2d2show(){
    document.getElementById("b2").style.display = "block";
    document.getElementById("d2").style.display ="block";
}
function b2d2hide(){
    document.getElementById("b2").style.display = "none";
    document.getElementById("d2").style.display ="none";
}
function bdHide(){

    document.getElementById("b").style.display = "none";
    document.getElementById("d").style.display ="none";
}
function bdshow(){

    document.getElementById("b").style.display = "block";
    document.getElementById("d").style.display ="block";
}
var selection2 = function(select){

    for(i in sections)
        document.getElementById(sections[i]).style.display = "none";

    document.getElementById('fourPoint10').style.display = "none";
    document.getElementById('ThreePoint10').style.display = "none";
    if(select.value == '10' && document.getElementById("loading").value == '4-Point mode'){
        document.getElementById('fourPoint10').style.display = "block";
        document.getElementById("Li").style.display = "block";
        b1d1Hide(); //hiding B1D1
        b2d2show();
        bdHide();
    }
    if(select.value == '10' && document.getElementById("loading").value == '3-Point mode'){
        document.getElementById('ThreePoint10').style.display = "block";
        document.getElementById("Li").style.display = "none";
        bdshow();
        b1d1Hide(); //hiding B1D1
        b2d2hide();
    }
    if(select.value == '34' && document.getElementById("loading").value == '3-Point mode'){
        document.getElementById('three_point').style.display = "block";
        document.getElementById("Li").style.display = "none";
        bdHide();
        b1d1Show(); //showing B1D1;
        b2d2hide();

    }
    if(select.value == '34' && document.getElementById("loading").value == '4-Point mode'){
        document.getElementById('four_point').style.display = "block";
        document.getElementById("Li").style.display = "block";
        b1d1Hide(); //hiding B1D1;
        b2d2hide();
        bdHide();
    }

}// end os section2

var exp_section={

    '1018CF Steel, Tensile: 82,000 psi; Yield: 70,000 psi; Elongation: 20%':'specimen0',
    'A36HR Steel, Tensile: 59,000 psi; Yield: 36,000 psi; Elongation: 23%':'specimen1',
    '2011T3 Aluminum: Tensile: 55,000 psi; Yield: 43,000 psi; Elongation: 15%':'specimen2',
    'Brass: Tensile: 63,000 psi; Yield: 35,000 psi; Elongation: 30%':'specimen3'
}

var selection_exp1 = function(select){

    for(x in exp_section)
    {
        document.getElementById(exp_section[x]).style.display = "none";
    }
    document.getElementById(exp_section[select.value]).style.display = "block";
    var label1 = document.getElementById('gaugeLength');
    var label2 = document.getElementById('iniDiameter');
    if (select.value == '1018CF Steel, Tensile: 82,000 psi; Yield: 70,000 psi; Elongation: 20%'){
        label1.textContent='2/2.302'
    }else{
        label1.textContent='';
    }
    if(select.value == '1018CF Steel, Tensile: 82,000 psi; Yield: 70,000 psi; Elongation: 20%' || select.value == 'A36HR Steel, Tensile: 59,000 psi; Yield: 36,000 psi; Elongation: 23%' || select.value == '2011T3 Aluminum: Tensile: 55,000 psi; Yield: 43,000 psi; Elongation: 15%'){
        label2.textContent='0.507';
    }else{
        label2.textContent='0.509';

    }
}

