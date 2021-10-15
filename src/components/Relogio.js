import React from "react";

class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  componentWillUnmount() {
    console.log('Relogio sumiu...');
    clearInterval(this.intervalID);
  }

  componentDidMount() {
    console.log('Relogio apareceu...');
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
    this.update = true;

    setTimeout(() => this.update = false, 3000);
    setTimeout(() => this.update = true, 10000);
  }

  shouldComponentUpdate() {
    console.log('Relogio deve atualizar?');
    return this.update;
  }

  componentWillUpdate() {
    console.log('Relogio atualizou...');
  }

  tick() {
    this.setState({
      date: new Date().toLocaleString()
    });
  }

  render() {
    console.log('Relogio renderizando');
    return (
      <p className="App-clock">
        Hora certa (Classe): {this.state.date}.
      </p>
    );
  }
}

export default Relogio;