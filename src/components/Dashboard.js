import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const Dashboard = (props) => {

    return(
     <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
 
    <div className= ''> 
            {props.dashboard ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.dashboard.fields.dashboardImage.field.file.url}
                    title={props.dashboard.fields.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" components="h2">
                         dashboard {props.course.fields.title}
                        </Typography>
                        <Typography gutterBottom variant="headline" components="h2">
                        {props.dashboard.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.course.fields.url} target="_blank"></Button>
                    </CardActions>
                </Card>

            ) :  <Card>
            <CardMedia style={{height: 0, paddingTop: '56.25%'}}
            // image={props.dashboard.fields.dashboardImage.field.file.url}
            // title={props.dashboard.fields.title}
            />
            <CardContent>
                <Typography gutterBottom variant="headline" components="h2">
                 dashboard {props.course.fields.title}
                </Typography>
                <Typography gutterBottom variant="headline" components="h2">
                {props.dashboard.fields.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" href={props.course.fields.url} target="_blank"></Button>
            </CardActions>
        </Card>
     
            }
            
        </div>
  </div>
</div>
    )
}


export default Dashboard
