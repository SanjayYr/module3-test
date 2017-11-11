import React, { Component } from 'react';

// import frustratedMonkey from './frustrated-monkey.gif';
import './frontpage.css';

const countStyle = {
  color: 'brown',
};

class Frontpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeId: 0
    }
    this.setActiveElement = this.setActiveElement.bind(this);
    this.resetActiveElement = this.resetActiveElement.bind(this);
  }
  setActiveElement(id){
    this.setState({activeId: id}),
    document.getElementById(10+id).setAttribute('class', 'is-active'),
    document.getElementById(10+id).style.display="block"
  }
  resetActiveElement(id){
    this.setState({activeId: 0}),
    document.getElementById(10+id).removeAttribute('class', 'is-active'),
    document.getElementById(10+id).style.display="none"
  }

  render() {
    return (
      <div >
        <div className="container">

          <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                  <a className="navbar-item is-tab is-hidden-mobile is-active" id="md1" onClick={() => this.setActiveElement(1)}><span className="icon is-small"><i className="fa fa-tachometer"></i></span>Dashboard</a>
                  <a className="navbar-item is-tab is-hidden-mobile" id="md2" onClick={() => this.setActiveElement(2)}><span className="icon is-small"><i className="fa fa-pencil-square-o"></i></span>Add a Transaction</a>
                  <a className="navbar-item is-tab is-hidden-mobile" id="md3" onClick={() => this.setActiveElement(3)}><span className="icon is-small"><i className="fa fa-table"></i></span>Transaction history</a>
                  <a className="navbar-item is-tab is-hidden-mobile" id="md4" onClick={() => this.setActiveElement(4)}><span className="icon is-small"><i className="fa fa-bar-chart"></i></span>Detailed Summary</a>

                  <button className="button navbar-burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
          </nav>
        </div>

        <div id="11" className="modal (this.id === this.state.activeId)?is-active:'' modalbackgd">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title title">Creating a transaction</p>
              <button className="delete" aria-label="close" onClick={() => this.resetActiveElement(1)}></button>
            </header>
            <section className="modal-card-body">
            <div className="columns is-multiline">
              <div className="column is-9">

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Subject</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input className="input is-danger" type="text" placeholder="e.g. Parking"/>
                    </div>
                    <p className="help is-danger">This field is required</p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Time</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                          <select>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option><option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option><option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>
                          <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                          </select>
                          <select>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                          </select>
                    </div>
                  </div>
                </div>
              </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Amount</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded"/>
                        <input className="input" type="text" placeholder="$"/>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Category</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select>
                            <option>Tranportation</option>
                            <option>Food</option>
                            <option>Entertainment</option>
                            <option>Education</option>
                            <option>Health</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Type</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-narrow">
                      <div className="control">
                        <label className="radio">
                          <input type="radio" name="member"/>
                          Cash
                        </label>
                        <label className="radio">
                          <input type="radio" name="member"/>
                          Credit Card
                        </label>
                        <label className="radio">
                          <input type="radio" name="member"/>
                          Debit Card
                        </label>
                        <label className="radio">
                          <input type="radio" name="member"/>
                          Check
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Annotation</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <textarea className="textarea" placeholder="Notes"></textarea>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button" onClick={() => this.resetActiveElement(1)}>Cancel</button>
            </footer>
          </div>
        </div>

        <div id="12" className="modal (this.id === this.state.activeId)?is-active:'' modalbackgd">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close" onClick={() => this.resetActiveElement(2)}></button>
            </header>
            <section className="modal-card-body">

            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button" onClick={() => this.resetActiveElement(2)}>Cancel</button>
            </footer>
          </div>
        </div>

        <div id="13" className="modal (this.id === this.state.activeId)?is-active:'' modalbackgd">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close" onClick={() => this.resetActiveElement(3)}></button>
            </header>
            <section className="modal-card-body">

            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button" onClick={() => this.resetActiveElement(3)}>Cancel</button>
            </footer>
          </div>
        </div>

        <div className="container">
            <main className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="title">Dashboard</div>
                  </div>
                </div>
              </div>

              <div className="columns is-multiline">
                <div className="column">
                  <div className="box">
                    <div className="heading">Top Seller Total</div>
                    <div className="title">56,950</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Sales $</div>
                          <div className="title is-5">250K</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Overall $</div>
                          <div className="title is-5">750K</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Sales %</div>
                          <div className="title is-5">25%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="box ">
                    <div className="heading">Revenue / Expenses</div>
                    <div className="title">55% / 45%</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Rev Prod $</div>
                          <div className="title is-5">30%</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Rev Serv $</div>
                          <div className="title is-5">25%</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Exp %</div>
                          <div className="title is-5">45%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <div className="heading">Feedback Activity</div>
                    <div className="title">78% &uarr;</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Pos</div>
                          <div className="title is-5">1560</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Neg</div>
                          <div className="title is-5">368</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Pos/Neg %</div>
                          <div className="title is-5">77% / 23%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <div className="heading">Orders / Returns</div>
                    <div className="title">75% / 25%</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Orders $</div>
                          <div className="title is-5">425K</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Returns $</div>
                          <div className="title is-5">106K</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Success %</div>
                          <div className="title is-5">+ 28,5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns is-multiline">
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Chart - Bar Style (Chart.js)
                    </p>
                    <div className="panel-block">
                      <canvas id="chartBar" width="400" height="400"></canvas>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Chart - Line Style (Chart.js)
                    </p>
                    <div className="panel-block">
                      <canvas id="chartLine" width="400" height="400"></canvas>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Chart - Doughnut Style (Chart.js)
                    </p>
                    <div className="panel-block">
                      <canvas id="chartDoughnut" width="400" height="400"></canvas>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Chart - Scatter Style (Chart.js)
                    </p>
                    <div className="panel-block">
                      <canvas id="chartScatter" width="400" height="400"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </main>
        </div>

      </div>
    );
  }
}

export default Frontpage;
