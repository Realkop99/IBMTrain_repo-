import React from 'react';
import pList from './player-data';
import Player from './player';
import Players from './player1';
import PlayerCrud from './player-crud';
class PlayerList extends React.Component
{ 
  constructor()
  {
  super();
  this.state = {pList:[
             new Player(1,1992,"Martin Crowe","New Zealand"),
             new Player(2,1996,"Sanath Jayasuriya","Sri Lanka"),
			 new Player(3,1999,"Lance Klusener","South Africa"),
			 new Player(4,2003,"Sachin Tendulkar","India"),
			 new Player(5,2007,"Glenn McGrath","Australia"),
			 new Player(6,2011,"Yuvraj Singh","India"),
			 new Player(7,2015,"Mitchell Starc","Australia"),
             new Player(8,2019,"Kane Williamson","New Zealand")
			 ]
             };
	           
  }
 
 getNoFromChild=(no)=>
 {
   
   this.deletePlayer(no)
  }
 deletePlayer=(no) =>
 {
  for(let i=0;i<this.state.pList.length;i++)
  {
    if(no == this.state.pList[i].no)
	{
	  this.setState(this.state.pList.splice(i,1));
	  
	  break;
	}
  }
 }
 getPlayerFromChild =(Player,label) =>
 {
	 if(label == 'A') this.addPlayer(Player);
	 else if(label== 'M') this.modifyPlayer(Player);
	 else if(label == 'D') this.deletePlayer(Player);
	 else this.getPlayer(Player.no)
	 
 }
 addPlayer = (Player) => {
	 this.setSate({pList : [...this.state.pList,Player]});
 }
 modifyPlayer = (Player) => {
	for (let i=0;i<this.state.pList.length;i++)
	{
		if(this.state.pList[i].no == Player.no)
		  this.setState(this.state.pList[i]=Player)
	  
	}		
 }
 getPlayer = (no) =>{
	 
 }
	 
 render()
 {
  return (
       <div>
         <table width="50%" align="border" border="1">
         <caption>Players with Man of The Tournament Award in ICC ODI WC</caption>
		 
		   <tr>
		     <th>Number</th>
		     <th>Year</th>
			 <th>Player Name</th>
			 <th>Country</th>
			 <th>Action</th>
		   </tr>
		   {this.state.pList.map( (mos) => <tbody><Players ply ={mos} getNo={this.getNoFromChild}/></tbody>)}
		 
		 </table>
		 <PlayerCrud getPlayer={this.getPlayerFromChild}/>
		 </div>
		);
        
  }
}
export default PlayerList