window.onload = function (e) {
  $(document).ready(function () {
    $('.jumbotron').append(`
      <div class="row row-content">
        <div class="mb-0 text-center col-12 col-sm col-md">
          <span id="jumbo-images1">
          <i><img src="kiit images/du.jpg" alt="KIITlogo" class="img-fluid jumbotron-img-top"></i> <br><br>
        <i>   <img src="kiit images/rajguru.png" alt="" class="img-fluid jumbotron-img-bottom"></i>
           
          </span>
          
        </div>
        <div class="col-12 col-sm col-md mb-0 text-center">
          <h1 class="jumbotron-top-heading">INTERNATIONAL SYMPOSIUM ON COMPUTING AND COMMUNICATION SYSTEMS FOR INDUSTRIAL APPLICATIONS(ComSIA)</h1>
           <!--<h1 style="font-family: 'Merriweather', serif;font-size: x-large;">Theme: Intelligent Computing & Communication Technologies</h1>-->
          <h1 style="font-family: 'Merriweather', serif;font-size: x-large;">10-11 May 2024</h1>
          <h2 style="font-family: 'Merriweather', serif;font-size:1.0rem;text-transform:uppercase">ComSIA 2024 will be jointly organsied by School of Open Learning, University of Delhi and
Shaheed Rajguru College of Applied Sciences, University of Delhi</h2>
       <!--   <h3 style="font-family: 'Merriweather', serif;font-size:1.0rem;text-transform:uppercase"> In Association With </h3>
          <hr id="hrr">
          <h3 style="font-family: 'Merriweather', serif;font-size:1.0rem;text-transform:uppercase">World Leadership Academy</h3>-->
          <p id="demo" style="font-family: 'Merriweather', serif;font-size:1.4rem">10-11 MAY 2024</p>
        </div>
        <div class="col-12 col-sm text-center">
        <!--<img src="kiit images/springer.png" alt="" class="img-fluid jumbotron-img-bottom">--> <br><br>
        <!--  <img src="kiit images/CEUR.png" alt="" class="img-fluid jumbotron-img-bottom">-->
        </div>
      </div>
      `);

    $('.footer').append(`
      <div class="container">
                <div class="row">
                    <div class="col-4 offset-1 col-sm-2">
                        <h5> <span class="fa fa-link"></span> Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="index.html" style="font-family: 'Merriweather', serif;font-size:1.0rem;">Home</a></li>
                          <!--  <li><a href="Registrations.html">Registrations</a></li>-->
                            <li><a href="spon_sorship.html">Sponsorship</a></li>
                            <li><a href="call_for_papers.html">Call for Papers</a></li>
                            <li><a href="important_dates.html">Important Dates</a></li>
                            <li><a href="downloads.html">Downloads</a></li>
                            <li><a href="https://cmt3.research.microsoft.com/">CMT portal</a></li>
                        </ul>
                    </div>
                    <div class="col-7 col-sm-5">
                        <h5> <span class="fa fa-map-marker"></span> Address</h5>
                        <address class="address">
                       Shaheed Rajguru College of Applied Sciences for Women,<br> Vasundhara Enclave,<br> Delhi-110096, <br> INDIA 
                      <br>
                      <!-- <i class="fa fa-phone"> </i> &nbsp;: +9888767262<br>
          <i class="fa fa-fax"> </i> : +9888767262<br> -->
          <i class="fa-solid fa-envelope" style="color: #dc3545;"></i> : <a href="mailto:comsia.conf@gmail.com">comsia.conf@gmail.com</a>
                   </address>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="text-center">
                            <h5 class="text-center">Social Media</h5>
                            <hr style="border-top: 1px dashed #327FBF">
                            <a class="btn btn-social-icon btn-facebook" href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-linkedin" href="#"><i class="fa-brands fa-linkedin"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a class="btn btn-social-icon bg-light" href="mailto:comsia.conf@gmail.com"><i class="fa-solid fa-envelope" style="color: #dc3545;"></i></a>
                        </div>
                    </div>
               </div>
               </div>
               <hr color="white">
               <div class="row justify-content-center">
                    <div class="col-auto">
              
                      <p class="footer_p_i_h2_a footer_p_i_a">Copyright © Intelligent Communication and Computational Research Laboratory|<a href="##"> All Rights Reserved | </a></p>
                      
                    </div>
               </div>
      `);


    $('.navbar').append(`
      <button type="button"class="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
                    <span class="navbar-toggler-icon"></span>
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
                            <div class="dropdown-divider"></div>
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
                       <!-- <li class="nav-item">
                          <a class="nav-link text-white" href="Registrations.html">Registrations</a>
                        </li>-->
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
                    <!-- <li class="nav-item">
                    <a class="nav-link text-white" href="Gallary.html">Gallery</a>
                  </li> -->
                <!--    <li class="nav-item">
                      <a class="nav-link text-white" href="spon_sorship.html">Sponsorship</a>
                    </li>-->
                    
                    <!-- <li class="nav-item">
                    <a class="nav-link text-white" href="#">Accommodation</a>
                  </li> -->
                    <li class="nav-item dropdown dmenu">
                  <a class="nav-link text-white" href="session-1.html">
                    Special Sessions
                  </a>
                <!--  <div class="dropdown-menu sm-menu">
                    <a class="dropdown-item text-white" href="/gallery/Session1.pdf">Session 1</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="#">Session 2</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="#">Session 3</a>
            
                  </div>-->
                     <li class="nav-item dropdown dmenu">
                  <a class="nav-link text-white" href="#">
                    Workshops
                  </a>
                <div class="dropdown-menu sm-menu">
                    <a class="dropdown-item text-white" href="WS1.html">Workshop 1 </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="WS2.html">Workshop 2</a>
                    
            
                  </div>
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
var countDownDate = new Date("may 10, 2024 12:00:00").getTime();

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
  document.getElementById("demo").innerHTML = days + "Days " + ":" + hours + "Hours " + ": "
    + minutes + "Min" + ": " + seconds + "Sec";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
document.getElementById('demo').innerHTML = '10-11 MAY 2024';
