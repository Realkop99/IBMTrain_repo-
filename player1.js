import React , { Component } from 'react';
class Players extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  getNo=(no)=>
  {
   
	this.props.getNo(no)
  }
  render()
  {
    return <tr>
	       <td>{this.props.ply.no}</td>
	       <td>{this.props.ply.year}</td>
		   <td>{this.props.ply.name}</td>
		   <td>{this.props.ply.team}</td>
		   <td><button type="button" onClick={() => this.getNo(this.props.ply.no)}>Delete</button></td>
		   </tr>
  }
}
export default Players;