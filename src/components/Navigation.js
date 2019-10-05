import React from 'react'
import React from 'Navigation'


import React, { Component } from 'react';
import { Card, CardContent, Typography, Switch } from '@material-ui/core';
import InputSlider from './Slider'
import NativeSelects from './Option'

class Navigation extends Component {
state = { 
switch: false,
slider: false,
drop: false
}

switchClick = () => {
this.setState({switch: !this.state.switch})
}
handleKids = (x) => {
const k = Object.keys(x)[0]
const newState = {}
newState[k] = x[k] 
this.setState(newState)
} 




render() { 
return (
<div>
<h1>Welcome to the Jungle</h1>

<div className='wrapper'>

<Card className='card' >
<CardContent>
<Typography color="textSecondary" gutterBottom>
Word of the Day
</Typography>
<Typography variant="h5" component="h2">
Baby
</Typography>
<Typography variant="body2" component="p">
Be kind rewind.
<br />
{'" hello "'}
<br></br>
</Typography>
<Switch onClick={this.switchClick} color="secondary"/>
</CardContent>
</Card>

<Card className='card'>
<CardContent>
<Typography color="textSecondary" gutterBottom>
Word of the Day
</Typography>
<Typography variant="h5" component="h2">
Monkey
</Typography>
<Typography variant="body2" component="p">
well meaning and kindly.
<br />
{'"mischief and high jinks"'}
</Typography>
<InputSlider parentfun={this.handleKids}/>
</CardContent>
</Card>


<Card className='card' >
<CardContent>
<Typography color="textSecondary" gutterBottom>
Bonjour!
</Typography>
<Typography variant="h5" component="h2">
Le Monde
</Typography>

<Typography variant="body2" component="p">
Le monde est petit!
<br />
{'"a content smile"'}
</Typography>
<NativeSelects parentfun={this.handleKids} />
</CardContent>
</Card>
</div>
{/* <div className='system'>

<h1>System Notifications:</h1>
{this.state.switch ? (<iframe title='howdy' width="560" height="315" src="https://www.youtube.com/watch?v=IkMN2ZpBl4M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
: <p></p>}
{/* // {this.state.slider ? (<h5></h5>) : <p></p>}
// {this.state.drop ? (<h1>More Cow Bell!!</h1>) : <p></p>} */}
{/* </div> */} */}

</div>
);
}
}

export default Navigation;