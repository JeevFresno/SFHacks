/**
 * Created by Jeevjyot on 9/12/16.
 */

$(document).ready(function(){


    $('#register').click(function(e){

        e.preventDefault();
        //alert('Registered');
        var fresnostateid = document.getElementById('fsid').value;
        var username = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        $.get('/register',{fsid:fresnostateid,user:username,p:pass},function(data){
           // alert(data);
            if(data == 'success'){
                alert('You are registered, please login!');
                location.reload();
            }else{
                alert('Error! Please try again in sometime');
                location.reload();
            }
        });

    });  // END OF THE REGISTER FUNCTION

    $('#out_out').click(function(e){
        e.preventDefault();
       // alert('logout');
        $.get('/logout',function(data){
           // alert(data);
            if(data=='success'){
               window.location ="/";
                console.log('cookie expired');
            }
        })
    });

    $('#login').click(function(e){

        e.preventDefault();
       // alert('login');
        var fresnostateid = document.getElementById('fresnoid').value;
        var password = document.getElementById('password').value;
        var cred = {id:fresnostateid,pass:password}
        $.get('/login',cred,function(data){
           // alert(data);
            if(data == 'success'){
                console.log('You being log out');
                window.location ='/admin'

            }else{
                alert('Invalid Email or password, please try again');
            }
        });
    });  // END OF THE LOGIN FUNCTION




});// document ready function



