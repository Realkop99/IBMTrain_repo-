import { useParams } from 'react-router-dom';
export default function BookImage(props)
{
 const {bno} = useParams()
 return (
         <div>
        <h1>Book Image {bno}</h1>
		<img src={require('./'+bno+'.jpg')} width="300" height="400"/>
		</div>
		)
}