<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="login-register.css">
  </head>

  <body>
    <div class="row">
      <div class="col-md-6 mx-auto p-0">
          <div class="card">
              <?php
              if (isset($_GET['err_num']) && !empty($_GET['err_num'])){
                  $error = $_GET['err_num'];
                  if($error=='5'){
                      echo '<div>Email is already used</div>';
                  }

              }
              ?>
              <div class="login-box" id="login-box">
                  <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
                      <div class="login-space">
                          <form class="login" method="POST" action="classes/Login.php">
                              <div class="group"> <label for="email-login" class="label">Email Address</label> <input id="email-login" name="email" type="email" class="input" placeholder="Enter your email address" required> </div>
                              <div class="group"> <label for="pass-login" class="label">Password</label> <input id="pass-login" name="password" type="password" class="input" data-type="password" placeholder="Enter your password" required> </div>
                              <div class="group" style="margin-top: 50px"> <input type="submit" name="login" class="button" value="Sign In"> </div>
                          </form>
                          <form id="register" class="sign-up-form" method="POST" action="classes/Registration.php">

                              <div class="group"> <label for="f-name" class="label">First Name</label> <input id="f-name" name="f-name" type="text" class="input" placeholder="Type your Fist Name" required> </div>
                              <div class="group"> <label for="l-name" class="label">Last Name</label> <input id="l-name" name="l-name" type="text" class="input" placeholder="Type your Last Name" required> </div>
                              <div class="group"> <label id="register-password" for="pass-register" class="label">Password</label> <input id="pass-register" name="password" type="password" class="input" data-type="password" placeholder="Create your password" required> </div>
                              <div class="group"> <label id="repeat-password" for="pass-confirm" class="label">Repeat Password</label> <input id="pass-confirm" type="password" class="input" data-type="password" placeholder="Repeat your password" required> </div>
                              <div class="group"> <label for="email-register" class="label">Email Address</label> <input id="email-register" name="email" type="text" class="input" placeholder="Enter your email address" required> </div>
                              <div class="group"> <label for="f-name" class="label">Department</label>
                                  <select class="input departments" id="exampleFormControlSelect1" name="department">
                                      <option value="-1">-select one department-</option>
                                      <option value="1">Poslovi</option>
                                      <option value="2">Polovni Automobili</option>
                                      <option value="3">4zida</option>
                                  </select>
                              </div>
                              <div class="group"> <input type="submit" name="register" class="button" value="Sign Up"> </div>
                              <div class="hr"></div>
                              <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>

</html>