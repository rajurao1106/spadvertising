import React from 'react'
import './OurTeam.css'


import vision from '../../assets/OurTeam/vision.jpg'
import promise from '../../assets/OurTeam/promise.png'

function OurTeam() {
  return (
      <div className="our-team-con">
        <div className="our-images">
        <div className="our-mission our-mission2" >
        
        <div className='our-mission-con' data-aos="fade-up" >
        <h1>We thrive to help our clients have Global impact</h1>
        <p>We are dedicated to empowering our clients to make a global impact by providing innovative strategies and tailored solutions. Our goal is to help them expand their reach, build meaningful connections, and achieve success across diverse markets, fostering growth and establishing a strong presence on the international stage.</p>
        </div>
        <img src={vision} alt=" " data-aos="fade-up" />
        </div>

        <div className="our-mission " >
        <img src={promise} alt="Our Promise" data-aos="fade-up" />
        <div className='our-mission-con' data-aos="fade-up" >
        <h1>Our Promise</h1>
        <p>We are committed to delivering exceptional quality, fostering creativity, and driving impactful results. With a focus on your goals, we ensure every solution aligns with your vision. Your success fuels our passion, as we work together to create lasting achievements and build a foundation for mutual growth and excellence.</p>
        </div>
        
        </div>
        </div>
        
{/* <h2 className='vision' data-aos="fade-up" >Meet the Visionaries Behind Your Success</h2>
        <div className="head-box">
        <div className="head1-con">
          
          <div className="head-left" data-aos="fade-right">
            
            <h2>Sushant Paretkar</h2>
            <p>Partner</p>
          </div>
          <div className="head-right"> 
            <img src={sushant_sir} alt="Sushant Paretkar" data-aos="fade"/>
          </div>
        </div>
        
        <div className="head1-con">
          <div className="head-left" data-aos="fade-right">
            
            <h2>Vishal Shadangi</h2>
            <p>Partner</p>
          </div>
          <div className="head-right">
            <img src={male} alt="Vishal Shadangi" data-aos="fade"/>
          </div>
        </div>

        <div className="head1-con">
          <div className="head-left" data-aos="fade-right">
            
            <h2>Piyush Mishra</h2>
            <p>Partner</p>
          </div>
          <div className="head-right">
            <img src={piyush_sir} alt="Piyush Mishra" data-aos="fade"/>
          </div>
        </div>
        </div>
        <br />
        <div className="team-headline" data-aos="fade-up">
        <h1>Meet our team members</h1>
        </div><br />
        <div className="team-member">
          <div className="team-con">

          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our HR Miss Shreeya Singh
Keeping our workplace fun and fabulous! When not organizing interviews, She is busy planning the next team party or trip and perfecting the office vibe.
"</p>
                </div>
              </div>
              <img src={shreeya_mam} alt="Shreeya Singh" />
            </div>
            <div className="name"><h2>Shreeya Singh</h2></div>
            <div className="position"><p>HR</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Digital Manager Vaibhav Watkar
All in One who helps everyone with their work and even give advice to make it more better. But sometimes forgets his own work. Our idea factory but always says "take reference" from different sources who turns clicks into gold!
"</p>
                </div>
              </div>
              <img src={male} alt="Vaibhav Watkar" />
            </div>
            <div className="name"><h2>Vaibhav Watkar</h2></div>
            <div className="position"><p>Digital Manager</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Web Developer Rahul Nishad 
                  Crafting websites with lots of patience and punctuality. Never takes a day off but somehow manages to get a day off and make digital dreams come true! Master of turning “404 Not Found” into “404 Awesome!"</p>
                </div>
              </div>
              <img src={rahul} alt="Rahul Nishad " />
            </div>
            <div className="name"><h2>Rahul Nishad</h2></div>
            <div className="position"><p>Web Developer</p></div>
          </div>
          
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Digital Marketer Miss Ruchi Dua 
Her life motive is to “Post, like, repeat.” Make sure your brand not only stands out but also stands up and dances! Keeps saying the same thing over and over i.e lets make a reel on this trend.  

"</p>
                </div>
              </div>
              <img src={female} alt="Ruchi Dua " />
            </div>
            <div className="name"><h2>Ruchi Dua</h2></div>
            <div className="position"><p>Digital Marketer</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Web Developer D. Raju Rao
Crafting websites with the superhero speed as he loves marvels and avengers. He is the spiderman of our company because he develops the web."</p>
                </div>
              </div>
              <img src={raju} alt="Raju Rao" />
            </div>
            <div className="name"><h2>D. Raju Rao</h2></div>
            <div className="position"><p>Web Developer</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Prashant Dewangan Turning pitches into wins and clients into fans! As our Sales Executive, Prashant has a knack for closing deals with flair and finesse. When he’s not engaging with clients, he’s probably on the hunt for the perfect snack around the office."</p>
                </div>
              </div>
              <img src={prashant} alt="Prashant Dewangan" />
            </div>
            <div className="name prashant"><h2>Prashant Dewangan</h2></div>
            <div className="position"><p>Sales Executive</p></div>
          </div>
          
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Graphic Designer Miss Shivani vaswani says
                  Crafting visuals that speak louder than words, our Graphic Designer transforms ideas into captivating stories that leave a lasting impression."</p>
                </div>
              </div>
              <img src={shivani} alt="Shivani vaswani" />
            </div>
            <div className="name"><h2>Shivani vaswani</h2></div>
            <div className="position"><p>Graphics Designer</p></div>
          </div>
          
          </div>

        </div>
         */}
        
  

       </div>
  )
}

export default OurTeam
