    var dummyArray = [];
    // display = [];
      var  displayUser;
     var displayEmail;
     var displayAge;
    
    function register(){
       getInputData();
       localStorage.setItem('userList', JSON.stringify(dummyArray));
      var localUser = JSON.parse(localStorage.getItem('userList'))
      console.log('GET User : ', localUser);
  }
    function login(){
       var username = document.getElementById("login-user").value;
       var pass = document.getElementById("login-password").value;
       var localUser = JSON.parse(localStorage.getItem('userList'));
       
       console.log(localUser);
       console.log(dummyArray);
      // console.log('GET User : ', localUser[0].anyuser);
         for(var i = 0 ;  i< dummyArray.length;i++){
            if(localUser[i].anyuser == username && localUser[i].password == pass){
              if(username == "Admin" && localUser[i].password == pass){
                var admin_obj={
              admin_user : localUser[i].anyuser,
              admin_email : localUser[i].email,
              admin_age : localUser[i].age,
           };
                 localStorage.setItem("Admin" ,JSON.stringify(admin_obj));
                 var localAdmin = JSON.parse(localStorage.getItem("Admin")); 
                adminData(localAdmin);
                document.location.href = "dashboard.html";

              }else{
                   //  console.log(localUser[i].anyuser)
          //  console.log(localUser[i].email)
          //  console.log(localUser[i].password)
           var login_obj={
              obj_user : localUser[i].anyuser,
              obj_email : localUser[i].email,
              obj_age : localUser[i].age,
           };
           localStorage.setItem("Login",JSON.stringify(login_obj));
           var localUser = JSON.parse(localStorage.getItem('userList'))
           console.log('GET User : ', localUser);
           document.location.href = "userDetails.html";
              }
         
         }
         
      }
  }
       

  function getInputData(){
        var username = document.getElementById("reg-username").value;
       var email = document.getElementById("reg-email").value;
       var age = document.getElementById("reg-age").value;
       var password = document.getElementById("reg-password").value;
       var user = {};
      user.anyuser = username;
      user.email = email;
      user.age = age;
      user.password = password;
      console.log('User object : ',user);
      dummyArray.push(user);
  }
  function userData(){
      var localstorage = JSON.parse(localStorage.getItem('Login'));
      console.log(localstorage);
      var name = document.getElementById("name").innerHTML = localstorage.obj_user ;
      var email = document.getElementById("email").innerHTML =localstorage.obj_email;
      var age = document.getElementById("age").innerHTML = localstorage.obj_age;
      console.log(localstorage.obj_user);
      console.log(localstorage.obj_email);
      console.log(localstorage.obj_age); 
      
}
 function adminData(admin){
      // var localstorage = JSON.parse(localStorage.getItem('Admin'));
      // console.log(localstorage);
      
      console.log(admin.admin_user);
      console.log(admin.admin_email);
      console.log(admin.admin_age); 
       var name = document.getElementById("name").innerHTML  ;
      // var email = document.getElementById("email").innerHTML;
      // var age = document.getElementById("age").innerHTML ;
      //  document.getElementsByTagName("span").innerHTML = "khan"; //admin.admin_user.toString();
       document.getElementById("admin_email").innerHTML =admin.admin_email.toString();
    //  document.getElementById("admin_age").innerHTML = admin.admin_age.toString();
   
      
      
}
