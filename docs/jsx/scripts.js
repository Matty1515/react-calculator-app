// use the concat() method to easily solve the selectNumber() problem: https://www.w3schools.com/jsref/jsref_concat_string.asp
// i would do it now but tbh i can't really be bothered

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      str: ""
    };
    this.selectNumber = this.selectNumber.bind(this);
    this.selectClear = this.selectClear.bind(this);
    this.selectEquals = this.selectEquals.bind(this);
  }
  selectEquals() {
    this.setState({
      arr: [+eval(this.state.str).toFixed(4)],
      str: +eval(this.state.str).toFixed(4)
    });
  }
  selectClear() {
    this.setState({
      arr: [],
      str: ""
    });
  }
  selectNumber(e) {
    // basically, arr keeps turning into the number of items in the array (array.length) when a new number is pushed rather than displaying the actual bloody operation (e.g. 1 + 1). So, newArr is needed to grab the operation and then 500 milliseconds later push it back to arr. This way arr can update and str can keep working. Yes, it is pointlessly convoluted but, after trying loads of ideas, I cannot find another way. It must be some sort of default behaviour or something IDK
    this.setState({
      arr: this.state.arr.push(e.target.id),
      newArr: this.state.arr,
      str: this.state.arr.join('')
    });
    setTimeout( () => {
      this.setState({
        arr: this.state.newArr
      });
      // console.log(this.state.arr);
      // console.log(this.state.str);
    }, 200);
  }
  render() {
    return (
      <div class="container">
        <div class="output">
          <span class="output-text">{this.state.str}</span>
        </div>

        <div id="clear" onClick={this.selectClear} class="button clear">C</div>
        <div id="(" onClick={this.selectNumber} class="button open-bracket">(</div>
        <div id=")" onClick={this.selectNumber} class="button close-bracket">)</div>
        <div id=" / " onClick={this.selectNumber} class="button divide">÷</div>

        <div id="7" onClick={this.selectNumber} class="button seven">7</div>
        <div id="8" onClick={this.selectNumber} class="button eight">8</div>
        <div id="9" onClick={this.selectNumber} class="button nine">9</div>
        <div id=" * " onClick={this.selectNumber} class="button multiply">x</div>

        <div id="4" onClick={this.selectNumber} class="button four">4</div>
        <div id="5" onClick={this.selectNumber} class="button five">5</div>
        <div id="6" onClick={this.selectNumber} class="button six">6</div>
        <div id=" - " onClick={this.selectNumber} class="button minus">-</div>

        <div id="1" onClick={this.selectNumber} class="button one">1</div>
        <div id="2" onClick={this.selectNumber} class="button two">2</div>
        <div id="3" onClick={this.selectNumber} class="button three">3</div>
        <div id=" + " onClick={this.selectNumber} class="button plus">+</div>

        <div id="0" onClick={this.selectNumber} class="button zero">0</div>
        <div id="." onClick={this.selectNumber} class="button dot">.</div>
        <div id="nothing" class="button nothing"> </div>
        <div id="equals" onClick={this.selectEquals} class="button equals">=</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);