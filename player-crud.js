import Player from './player';
import React from 'react';
class PlayerCrud extends React.Component 
{
	constructor()
	{
		super()
		this.state = {player : new Player(0,0,'','')};
		this.no= React.createRef();
		this.year= React.createRef();
		this.name= React.createRef();
		this.team= React.createRef();
		
	}
	addPlayer=(label)=>
	{
		this.props.getPlayer(new Player(`${this.no.current.value}`,`${this.year.current.value}`,`${this.name.current.value}`,`${this.team.current.value}`),label)
	}
	render()
	{
		return(
		        <table width="50%" align="border" border="1">
              
		    <tbody>
			 <tr>
		     <th>Number</th>
			 <td><input type="text"  ref={this.no} /></td>
			 </tr>
			 <tr>
		     <th>Year</th>
			 <td><input type="text" ref={this.year} /></td>
			 </tr>
			 <tr>
		     <th>Name</th>
			 <td><input type="text" ref={this.name} /></td>
			 </tr>
			 <tr>
		     <th>Team</th>
			 <td><input type="text" ref={this.team} /></td>
			 </tr>
			 <tr>
		      <td><button type="button" onClick={()=>this.addPlayer('A')}>Add</button></td>
			  <td><button type="button" onClick={()=>this.addPlayer('G')}>Get</button></td>
			 </tr>
			  <tr>
		      <td><button type="button" onClick={()=>this.addPlayer('D')}>Delete</button></td>
			  <td><button type="button" onClick={()=>this.addPlayer('M')}>Modify</button></td>
			 </tr>
		
		   </tbody>
		 
		 </table>
		
		
		      );
}
}
export default PlayerCrud
		