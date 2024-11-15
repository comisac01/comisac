window.onload = function (e) {
  $(document).ready(function () {
    $('.jumbotron').append(`
    <span id="jumbo-images1">
    <i><img src="kiit images/comsia.jpg" alt="KIITlogo" class="img-fluid jumbotron-img-top rounded-4 rounded box-shadow" width="120"></i><br><br>
    <i><img src="kiit images/du.jpg" alt="KIITlogo" class="img-fluid jumbotron-img-top rounded-4 rounded box-shadow" width="120"></i> <br><br>
    <i> <img src="kiit images/rajguru.png" alt="" class="img-fluid jumbotron-img-bottom rounded-4 rounded box-shadow" width="120"></i>

  </span>
  <div class="jumbo-details">
    <h1><b>INTERNATIONAL CONFERENCE ON COMPUTING SYSTEMS AND INTELLIGENT APPLICATIONS </b><br> (ComSIA 2025) <br></h1>
    <hr>
    <h2 class="">
      March 28-29<sup>th</sup>,2025
    </h2> 
    <h4 class="">COMSIA 2025 WILL BE JOINTLY ORGANISED BY SCHOOL OF <br> OPEN LEARNING, UNIVERSITY OF DELHI AND <br> SHAHEED RAJGURU COLLEGE OF APPLIED SCIENCES, <br> UNIVERSITY OF DELHI <br></h4>
    <p id="demo" style="font-size:1.4rem;font-weight:500"></p>
  </div>
  <div class="right-part-container">
    <div class="right-part box-shadow">
      <img src="./gallery/university.jpg" alt="">
    </div>
  </div>
      `);

    $('.footer').append(`
    <div class="container">
    <div class="row">
    <div class="col-4 offset-1 col-sm-2">
            <h5> <span class="fa fa-link"></span> Links</h5>
            <ul class="list-unstyled">
                <li><a href="index.html" class="foot-link">Home</a></li>
                <li><a href="Registrations.html" class="foot-link">Registrations</a></li>
                <li><a href="spon_sorship.html" class="foot-link">Sponsorship</a></li>
                <li><a href="downloads.html" class="foot-link">Downloads</a></li>
                <li><a href="call_for_papers.html" class="foot-link">Call for Papers</a></li>
                <li><a href="important_dates.html" class="foot-link">
                Important Dates</a></li>
                <li><a href="#" class="foot-link">
                CMT portal</a></li>
            </ul>
        </div>
        <div class="col-7 col-sm-5 text-center ">
            <h5> <span class="fa fa-map-marker"></span> Address</h5>
            <address class="address">
          <br>
          <!--<i class="fa fa-phone"> &nbsp;: +</i> <br>--!>
          <!--<i class="fa fa-fax"> : +</i> <br>--!>
          <i class="fa fa-envelope fa-lg"></i>  : <a href="mailto:" class="foot-link">comsia.conf@gmail.com</a>
       </address>
        </div>
        <div class="col-12 col-sm-4 align-self-center">
            <div class="text-center">
                <h5 class="text-center">Social Media</h5>
                <div class="d-flex align-items-center justify-content-center">
                <hr id="hrr" width="200"/>
                </div>
                <a class="btn btn-social-icon btn-facebook mr-2 foot-icon" href="#"><i class="fa fa-facebook fa-lg"></i></a>

                <a class="btn btn-social-icon btn-linkedin mr-2 foot-icon" href="#"><i class="fa fa-linkedin fa-lg"></i></a>

                <a class="btn btn-social-icon btn-twitter mr-2 foot-icon" href="#"><i class="fa fa-twitter fa-lg"></i></a>
                
                <a class="btn btn-social-icon bg-light text-primary mr-2 foot-icon" href="mailto:icicc.editor@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
            </div>
        </div>
        <!--<div class="row justify-content-center">
          <div class="col-auto">

        <p class="footer_p_i_h2_a footer_p_i_a">Copyright © Intelligent Communication and Computational Research Laboratory|<a href="##"> All Rights Reserved | </a></p>
        
            </div>
            </div>--!>
      </div>
   </div>
</div>
      `);


    $('.navbar').append(`
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#Navbar" id="navmenu" onclick="toggleIcon();">
      <i class="fa-solid fa-bars"></i>
    </button>
                                 <div class="collapse navbar-collapse" id="Navbar" style="justify-content: center;">
                    <ul class="nav navbar-nav" style="width: 80%;justify-content: space-evenly;">
                      <li class="nav-item">
                        <a class="nav-link text-white" href="index.html">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item dropdown dmenu">
                          <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                            About
                          </a>
                          <div class="dropdown-menu sm-menu text-white">
                          <!-- <a class="dropdown-item text-white" href="about_iccr_lab.html">About ICCRLAB</a> -->
                            <!--<div class="dropdown-divider"></div>--!>
                            <a class="dropdown-item text-white" href="about_institute.html">About Institute</a>
                          </div>
                        </li>
                        <li class="nav-item dropdown dmenu">
                          <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                            Papers
                          </a>
                          <div class="dropdown-menu sm-menu">
                            <a class="dropdown-item text-white" href="call_for_papers.html">Call For Papers</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-white" href="paper_submission.html">Paper Submission</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-white" href="call_for_special_sessions.html">Call For Special Sessions</a>
                          </div>
                        </li>  
                        <li class="nav-item">
                          <a class="nav-link text-white" href="sessions.html">Special Sessions</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="Registrations.html">Registrations</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="important_dates.html">Important Dates</a>
                      </li>
                        <li class="nav-item">
                          <a class="nav-link text-white" href="publications.html">Publications</a>
                        </li>
                      <li class="nav-item dropdown dmenu">
                      <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                        Committee
                      </a>
                      <div class="dropdown-menu sm-menu">
                        <a class="dropdown-item text-white" href="steering_committee.html">Steering Committee</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="Advisory_committee.html">Advisory Committee</a>
                         <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="Technical_committee.html">Technical Committee</a>
              
                      </div>
                      
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white " href="conference_venue.html">Conference Venue</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="downloads.html">Downloads</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="prevconf.html">Previous Conference (ComSIA 2024)</a>
                    </li>
                    <!-- <li class="nav-item">
                    <a class="nav-link text-white" href="Gallary.html">Gallery</a>
                  </li> -->
                <!--    <li class="nav-item">
                      <a class="nav-link text-white" href="spon_sorship.html">Sponsorship</a>
                    </li>-->
                    
                    <!-- <li class="nav-item">
                    <a class="nav-link text-white" href="#">Accommodation</a>
                  </li> 
                    <li class="nav-item dropdown dmenu">
                  <a class="nav-link text-white" href="session-1.html">
                    Special Sessions
                  </a>-->
                <!--  <div class="dropdown-menu sm-menu">
                    <a class="dropdown-item text-white" href="/gallery/Session1.pdf">Session 1</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="#">Session 2</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="#">Session 3</a>
            
                  </div>-->
                   <!-- <li class="nav-item dropdown dmenu">
                      <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                        Workshops
                      </a>-->
                     <!-- <div class="dropdown-menu sm-menu">
                        <a class="dropdown-item text-white" href="WS1.html">Workshop 1</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-white" href="WS2.html">Workshop 2</a>
                    
            
                  </div> -->
                 <!--   <div class="col col-12 col-lg-6 col-md-4">
        <a href="/gallery/Session 1.pdf"
            target="_blank"><button class="btn" style="width:100%;margin-bottom:1px;">Session 1
               <i class="fa fa-download"></i></button></a>

      

      </div>-->
                </li> 
               
                    </ul>
                  </div>
      `);
  });
}




// me commented
// Set the date we're counting down to
var countDownDate = new Date("March 28, 2025 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "Days " + " : " + hours + "Hours " + " : "
    + minutes + "Min" + " : " + seconds + "Sec";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
document.getElementById('demo').innerHTML = '10-11 MAY 2024';

// navmenu toggle
function toggleIcon() {
  const icon = document.querySelector('#navmenu i');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
}

// dropdown
$(document).ready(function () {
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });
});