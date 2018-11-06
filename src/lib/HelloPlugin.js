class HelloPlugin {
  constructor(props) {
    this.options = props;
  }

  apply(compiler){
    compiler.hooks.done.tap('HelloPlugin', () => {
      console.log('Done with sync work...');
      console.log(this.options);
    });
  }
}

module.exports = HelloPlugin;
