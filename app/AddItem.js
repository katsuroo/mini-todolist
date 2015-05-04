var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return{
        newItem:''
    }
  },
  handleChange: function(ele){
    this.setState(
        {newItem:ele.target.value}
    )
  },
  handleSubmit: function(ele){
    if(ele.keyCode === 13){
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      });
    }
  },
  render: function(){
    return(
      <div>
        <input type="text"
        className= "form-control"
        value={this.state.newItem}
        placerholder="New Item"
        onKeyDown={this.handleSubmit}
        onChange={this.handleChange}
        />
      </div>
    )
  }
});

module.exports= AddItem;