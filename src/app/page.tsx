'use client'

export default function Home() {
  return (
    <div>
        <h2>About Me</h2>
        <hr/>
      <div id="about-body">
            <div className="answer">
                <p>Hi, my name is <b>jess</b> and I really like to make chaotic things!!</p>
                <p>I think a lot about the intersection of tech and humanity and how a lot of our social interactions get lost in the web without an physical nudge! thus, i really like to think about, what happens when you create tech that is specifically centered around starting and ending with a human. </p>
                <p>I also really love the returning to and reflecting upon the websites that influenced my early days on the internet including: <a href="https://www.addictinggames.com/" target="_blank">addicting games</a>, <a href="https://www.neopets.com/" target="_blank">neopets</a>, <a href="https://www.gaiaonline.com/" target="_blank">gaia online</a>, <a href="https://www.tumblr.com/" target="_blank">tumblr</a>, and so many more!</p>
                <p>I hope my websites reflect this and i'd love to talk more about how your projects do this in their own way!</p>
            </div>
            <hr/>
            <h2>faq</h2>
            <div>
                <ol>
                    <li>jess ! why is there such a large gap in your employment??</li>
                    <p className="answer">I'm so glad you asked!! I decided to take some time for myself to work on my coding skills and travel. You can find a more in-depth answer in my "Resume" page!</p>
                    <li>jess! what are you looking for next in your career</li>
                    <p  className="answer">great question! I currently find myself at an intersection between two different options. Both of which include: autonomy, growth, and interesting subject matter for me. </p>
                    <p  className="answer">on one side, working for a high speed start up where I can wear many hats is extremely interesting for me. But I'd like those roles to focus around industries that I want to learn more about such as: educational technology, finance, legislature, or fashion.</p>
                    <p  className="answer">on the other side, this period of time unemployed has allowed me to really appreciate the public sector and support provided by the city to the community - so I would love to give back either by working for the city or working for a non-profit focused on public good. </p>
                    <p  className="answer">I'd most enjoy roles that are fullstack or front-end focused for web development.</p>
                    <li>jess! what have you learned through this period of unemployment</li>
                    <p  className="answer">i've gotten to learn how to be passionate and curious about code again! it's been wonderful to see what everyone at the recurse center has been cooking up & to grow outside of the box I once put myself in.</p>
                    <p  className="answer">Additionally, there have been so many interesting people and events throughout the city that I have learned about through this period such as <a href="https://toddwords.com/wordhack/" target="_blank">wordhack </a>, <a href="https://rhizome.org/" target="_blank">rhizome</a>, and <a href="https://sfpc.study/" target="_blank">school of poetic computation</a>.</p>
                </ol>
            </div>
            <hr/>
            <h2>fun facts</h2>
            <p > if you guess which one is wrong correctly you can request i make one website for u for free <sub>this is not legally binding</sub></p>
            <div id="facts">
            <div ><p className="fun-fact">i have broken my spine before at a concert</p></div>
            <div className="fun-fact"><p>i was head of recruitment in a sorority</p></div>
            <div className="fun-fact"><p>i learned how to do the worm this year</p></div>
            </div>

        </div>
                <style jsx>
            {`
                #about-body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0 50px;
                }
                #facts {
                    display: flex;
                    flex-direction: row;
                    align-items: space-around;
                    margin-bottom: 20px;
                }
                .fun-fact {
                    border: 2px dotted black;
                    border-radius: 10px;
                    margin: 5px;
                    background-color: peachpuff;
                    padding: 10px;
                }
                .answer {
                    border: 2px dotted grey;
                    border-radius: 10px;
                    margin: 5px;
                    padding: 5px;
                    background-color: peachpuff;
                }
                h2 {
                    text-align: center;
                }
                li {
                    font-weight: 600;
                }
            `}
        </style>
        </div>
  );
}
