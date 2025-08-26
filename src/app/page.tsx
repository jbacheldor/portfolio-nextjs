'use client'

export default function Home() {
  return (
    <div>
        <h2>About Me</h2>
        <hr/>
      <div id="about-body">
            <div>
                <p>Hi, my name is jess and I really like to make chaotic things!!</p>
                <p>I think a lot about the intersection of tech and humanity and how a lot of our social interactions get lost in the web without an physical nudge! </p>
                <p>thus, i really like to think about, what happens when you create tech that is specifically centered around starting and ending with a human - with only a little technical nudge around the way</p>
                <p>i hope my websites reflect this and i'd love to talk more about how your projects do this in their own way!</p>
            </div>
            <hr/>
            <h2>faq</h2>
            <div>
                <ol>
                    <li>jess ! why is there such a large gap in your employment??</li>
                    <p className="answer">i'm so glad you asked... i decided to solo travel japan for 4 weeks and work on personal projects! I also got busy and married a couple of friends. I also took a couple of courses for my masters in computer science at georgia tech!</p>
                    {/* maybe put pics from wedding & also from traveling in Japan */}
                    <li>jess! what are you looking for next</li>
                    <p  className="answer">great question! either something realllly, interesting and challening that makes me wear many hats or - a product with a great impact for the public such as...::: </p>
                    <p  className="answer"> i know that seems really vague but i just love to code and expand my abilities so whether that's for social good or just a really really cool project - i'm open to learning more about it!</p>
                    <li>jess! what have you learned through this period of unemployment</li>
                    <p  className="answer">i've gotten to learn how to be passionate and curious about code again! it's been wonderful to see what everyone at the recurse center has been cooking up & to grow outside of the box I once put myself in.</p>
                </ol>
            </div>
            <hr/>
            <h2>fun facts</h2>
            <p > if you guess which one is wrong correctly you can request i make one website for u for free <sub>this is not legally binding</sub></p>
            <p>1. i have broken my spine before</p>
            <p>2. i was commencement speaker at my graduation</p>
            <p>3. i do know how to do the worm</p>

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
                p.answer {
                    color: green;
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
