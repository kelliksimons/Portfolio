import React, {Component} from 'react';

class Home extends React.Component {
    render(){
        return(

<div>
    <header id="header">
    <h1 id="logo"><a href="index.html">Kellik Simons</a></h1>
    <nav id="nav">
      <ul>
        <li><a href="index.html">Home</a></li>
        
        <li><a href="#four">Projects</a></li>
        <li><a href="#" className="button primary">Contact Me</a></li>
      </ul>
    </nav>
  </header>
  <section id="banner">
    <div className="content">
      <header>
        <h2>"Jump and Grow Wings on the Way Down."< br/>
            - Jack Canfield
        </h2>
        <p>Full Stack Web Developer<br />
        Kellik Simons </p>
      </header>
      <span className="image"><img src="./assets/images/kellik.jpg" alt="" /></span>
    </div>
    <a href="#one" className="goto-next scrolly">Next</a>
  </section>

  <section id="one" className="spotlight style1 bottom">
    <span className="image fit main"><img src="./assets/images/pic09.jpg" alt="" /></span>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-4 col-12-medium">
            <header>
              <h2>Background</h2>
              <p>Hi I'm Kellik Simons, I am a Full Stack Web Developer & Computer Science Graduate from North Carolina A&T State University. </p>
            </header>
          </div>
          <div className="col-4 col-12-medium">
            <p>My professional background is in Software Development and Project Management. I also enjoy Gaming, Traveling and Drone Videography.
                Web development has been my focus & passion and I enjoy learning & building using the latest technologies. </p>
          </div>
          {/* <div className="col-4 col-12-medium">
            <p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
            adipiscing adipiscing metus massa. Blandit orci porttitor semper.
            Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
            mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
            ipsum dolor nullam.</p>
          </div> */}
        </div>
      </div>
    </div>
    <a href="#two" className="goto-next scrolly">Next</a>
  </section>


  <section id="two" className="spotlight style2 right">
    <span className="image fit main"><img src="./assets/images/pic03.jpg" alt="" /></span>
    <div className="content">
      <header>
        <h2>Professional Work Experience</h2>
        <p>Bank of America GT&O Development Program Analyst</p>
      </header>
      <p>During my time in the Global Technology & Operations Rotational Program at Bank of America, I have 
          participated & contributed in a variety of roles. Those being heavily focused around Project Management, while 
          using my computer science background to continue my interests in Web Development. I have been able to contribute to highly technical teams
          using my technical expertise to effectively communicate and deliver highly active projects during my time. 
      </p>
      <ul className="actions">
        <li><a href="#" className="button">Learn More</a></li>
      </ul>
    </div>
    <a href="#three" className="goto-next scrolly">Next</a>
  </section>

  <section id="three" className="spotlight style3 left">
    <span className="image fit main bottom"><img src="./assets/images/pic04.jpg" alt="" /></span>
    <div className="content">
      <header>
        <h2>Education & Courses </h2>
        <p>North Carolina A&T State University <br/> Degree of Bachelors in Computer Science </p>
      </header>
      <p>The Complete Web Developer in 2021: Zero To Mastery Academy - 2021 Udemy Course</p>
      <ul className="actions">
        <li><a href="#" className="button">Learn More</a></li>
      </ul>
    </div>
    <a href="#four" className="goto-next scrolly">Next</a>
  </section>

  <section id="four" className="wrapper style1 special fade-up">
    <div className="container">
      <header className="major">
        <h2>Projects</h2>
        <p>Below are Projects that I have enjoyed contributing to and/or am currently working on. </p>
      </header>
      <div className="box alt">
        <div className="row gtr-uniform">
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-chart-area"></span>
            <h3>Pet iOS App</h3>
            <p>This Application was created for pet owners who would like assistance with managing their new pet! <br/> 
            The Pet App is a Manager that allows you to track your dogs diet, get tips on your certain breed and you can also <br/>
            Attach a in-app generated QR Code dog tag to your dog to add your personal information incase your dog is missing.</p>
          </section>
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-comment"></span>
            <h3>Goals React Native App</h3>
            <p>Coming Soon</p>
          </section>
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-flask"></span>
            <h3>Great Day Ahead React Website</h3>
            <p>Coming Soon for my Daily Great Day Aheaders!</p>
          </section>
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-paper-plane"></span>
            <h3>React Portfolio Site</h3>
            <p>You're looking at it!</p>
          </section>
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-file"></span>
            <h3>Smart Brain Web Application</h3>
            <p>In Progress</p>
          </section>
          <section className="col-4 col-6-medium col-12-xsmall">
            <span className="icon solid alt major fa-lock"></span>
            <h3>Budget React Native App</h3>
            <p>Coming Soon</p>
          </section>
        </div>
      </div>
      <footer className="major">
        <ul className="actions special">
          <li><a href="#" className="button">Contact Me</a></li>
        </ul>
      </footer>
    </div>
  </section>

  <section id="five" className="wrapper style2 special fade">
    <div className="container">
      <header>
        <h2>Contact Me </h2>
        <p>Have any outstanding questions? Feel free to contact me!</p>
      </header>
      <form method="post" action="#" className="cta">
        <div className="row gtr-uniform gtr-50">
          <div className="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address" /></div>
          <div className="col-4 col-12-xsmall"><input type="submit" value="Get Started" className="fit primary" /></div>
        </div>
      </form>
    </div>
  </section>
</div>

        )

    }
}

export default Home