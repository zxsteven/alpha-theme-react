import React from 'react'

const ElementsMain = () => {
  return (
    <section id="main" className="container">
      <header>
        <h2>Elements</h2>
        <p>Just an assorted selection of elements.</p>
      </header>
      <div className="row">
        <div className="col-12">

        <section className="box">
          <h3>Text</h3>
          <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code: . Finally, <a href="/elements">this is a link</a>.</p>

          <hr />

          <header>
            <h3>Heading with a Subtitle</h3>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
          <header>
            <h4>Heading with a Subtitle</h4>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

          <hr />

          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>

          <hr />

          <h4>Blockquote</h4>
          <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>

          <h4>Preformatted</h4>

            </section>

        </div>
      </div>
      <div className="row">
        <div className="col-12">

          <section className="box">
            <h3>Lists</h3>
            <div className="row">
              <div className="col-6 col-12-mobilep">

                <h4>Unordered</h4>
                <ul>
                  <li>Dolor pulvinar etiam magna etiam.</li>
                  <li>Sagittis adipiscing lorem eleifend.</li>
                  <li>Felis enim feugiat dolore viverra.</li>
                </ul>

                <h4>Alternate</h4>
                <ul className="alt">
                  <li>Dolor pulvinar etiam magna etiam.</li>
                  <li>Sagittis adipiscing lorem eleifend.</li>
                  <li>Felis enim feugiat dolore viverra.</li>
                </ul>

              </div>
              <div className="col-6 col-12-mobilep">

                <h4>Ordered</h4>
                <ol>
                  <li>Dolor pulvinar etiam magna etiam.</li>
                  <li>Etiam vel felis at lorem sed viverra.</li>
                  <li>Felis enim feugiat dolore viverra.</li>
                  <li>Dolor pulvinar etiam magna etiam.</li>
                  <li>Etiam vel felis at lorem sed viverra.</li>
                  <li>Felis enim feugiat dolore viverra.</li>
                </ol>

                <h4>Icons</h4>
                <ul className="icons">
                  <li><a href="/elements" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="/elements" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                  <li><a href="/elements" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="/elements" className="icon brands fa-github"><span className="label">Github</span></a></li>
                  <li><a href="/elements" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                  <li><a href="/elements" className="icon brands fa-tumblr"><span className="label">Tumblr</span></a></li>
                </ul>

              </div>
            </div>

            <h4>Actions</h4>
            <ul className="actions">
              <li><a href="/elements" className="button special">Default</a></li>
              <li><a href="/elements" className="button">Default</a></li>
              <li><a href="/elements" className="button alt">Default</a></li>
            </ul>
            <ul className="actions small">
              <li><a href="/elements" className="button special small">Small</a></li>
              <li><a href="/elements" className="button small">Small</a></li>
              <li><a href="/elements" className="button alt small">Small</a></li>
            </ul>
            <div className="row">
              <div className="col-3 col-6-narrower col-12-mobilep">
                <ul className="actions stacked">
                  <li><a href="/elements" className="button special">Default</a></li>
                  <li><a href="/elements" className="button">Default</a></li>
                  <li><a href="/elements" className="button alt">Default</a></li>
                </ul>
              </div>
              <div className="col-3 col-6-narrower col-12-mobilep">
                <ul className="actions stacked">
                  <li><a href="/elements" className="button special small">Small</a></li>
                  <li><a href="/elements" className="button small">Small</a></li>
                  <li><a href="/elements" className="button alt small">Small</a></li>
                </ul>
              </div>
              <div className="col-3 col-6-narrower col-12-mobilep">
                <ul className="actions stacked">
                  <li><a href="/elements" className="button special fit">Default</a></li>
                  <li><a href="/elements" className="button fit">Default</a></li>
                  <li><a href="/elements" className="button alt fit">Default</a></li>
                </ul>
              </div>
              <div className="col-3 col-6-narrower col-12-mobilep">
                <ul className="actions stacked">
                  <li><a href="/elements" className="button special small fit">Small</a></li>
                  <li><a href="/elements" className="button small fit">Small</a></li>
                  <li><a href="/elements" className="button alt small fit">Small</a></li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
      <div className="row">
        <div className="col-12">

          <section className="box">
            <h3>Table</h3>

            <h4>Default</h4>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Nothing</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Something</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Nothing</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Something</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2"></td>
                    <td>100.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h4>Alternate</h4>
            <div className="table-wrapper">
              <table className="alt">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Nothing</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Something</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Nothing</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Something</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2"></td>
                    <td>100.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

        </div>
      </div>
      <div className="row">
        <div className="col-12">

          <section className="box">
            <h3>Buttons</h3>
            <ul className="actions">
              <li><a href="/elements" className="button special">Special</a></li>
              <li><a href="/elements" className="button">Default</a></li>
              <li><a href="/elements" className="button alt">Alternate</a></li>
            </ul>
            <ul className="actions">
              <li><a href="/elements" className="button special big">Big</a></li>
              <li><a href="/elements" className="button">Default</a></li>
              <li><a href="/elements" className="button alt small">Small</a></li>
            </ul>
            <ul className="actions fit">
              <li><a href="/elements" className="button special fit">Fit</a></li>
              <li><a href="/elements" className="button fit">Fit</a></li>
              <li><a href="/elements" className="button alt fit">Fit</a></li>
            </ul>
            <ul className="actions fit small">
              <li><a href="/elements" className="button special fit small">Fit + Small</a></li>
              <li><a href="/elements" className="button fit small">Fit + Small</a></li>
              <li><a href="/elements" className="button alt fit small">Fit + Small</a></li>
            </ul>
            <ul className="actions">
              <li><a href="/elements" className="button special icon solid fa-search">Icon</a></li>
              <li><a href="/elements" className="button icon solid fa-download">Icon</a></li>
              <li><a href="/elements" className="button alt icon solid fa-check">Icon</a></li>
            </ul>
            <ul className="actions">
              <li><span className="button special disabled">Special</span></li>
              <li><span className="button disabled">Default</span></li>
              <li><span className="button alt disabled">Alternate</span></li>
            </ul>
          </section>

        </div>
      </div>
      <div className="row">
        <div className="col-12">

          <section className="box">
            <h3>Form</h3>
            <form method="post" action="/elements">
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-mobilep">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-mobilep">
                  <input type="email" name="email" id="email"  placeholder="Email" />
                </div>
                <div className="col-12">
                  <select name="category" id="category">
                    <option >- Category -</option>
                    <option value="1">Manufacturing</option>
                    <option value="1">Shipping</option>
                    <option value="1">Administration</option>
                    <option value="1">Human Resources</option>
                  </select>
                </div>
                <div className="col-4 col-12-narrower">
                  <input type="radio" id="priority-low" name="priority" defaultChecked />
                  <label or="priority-low">Low Priority</label>
                </div>
                <div className="col-4 col-12-narrower">
                  <input type="radio" id="priority-normal" name="priority" />
                  <label or="priority-normal">Normal Priority</label>
                </div>
                <div className="col-4 col-12-narrower">
                  <input type="radio" id="priority-high" name="priority" />
                  <label or="priority-high">High Priority</label>
                </div>
                <div className="col-6 col-12-narrower">
                  <input type="checkbox" id="copy" name="copy" />
                  <label or="copy">Email me a copy of this message</label>
                </div>
                <div className="col-6 col-12-narrower">
                  <input type="checkbox" id="human" name="human" defaultChecked />
                  <label or="human">I am a human and not a robot</label>
                </div>
                <div className="col-12">
                  <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li><input type="submit" value="Send Message" /></li>
                    <li><input type="reset" value="Reset" className="alt" /></li>
                  </ul>
                </div>
              </div>
            </form>

            <hr />

            <form method="post" action="/elements">
              <div className="row gtr-uniform gtr-50">
                <div className="col-9 col-12-mobilep">
                  <input type="text" name="query" id="query"  placeholder="Query" />
                </div>
                <div className="col-3 col-12-mobilep">
                  <input type="submit" value="Search" className="fit" />
                </div>
              </div>
            </form>


          </section>

        </div>
      </div>
      <div className="row">
        <div className="col-12">

            <section className="box">
              <h3>Image</h3>
              <h4>Fit</h4>
              <span className="image fit"><img src="images/pic04.jpg" alt="" /></span>
              <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
                </div>
              </div>

              <h4>Left &amp; Right</h4>
              <p><span className="image left"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
              <p><span className="image right"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
            </section>

        </div>
      </div>
    </section>
  )
}

export default ElementsMain