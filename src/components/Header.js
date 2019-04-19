import React from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
export default function Header() {
  return (
    <div className="Header">
      <Grid>
        <Grid.Column floated="left" width={5}>
          <div className="edabit">edabit</div>
        </Grid.Column>
        <Grid.Column floated="right" width={4}>
          <Button inverted floated="right">
            Sign In
          </Button>
          <Button inverted floated="right">
            Register
          </Button>
        </Grid.Column>
      </Grid>
      <hr />

      <Grid>
        <Grid.Column floated="left" width={8}>
          <div className="Learn-to-code">
            Learn to code with interactive challenges
          </div>
          <div className="It-is-the-fastest">
            It's the fastest, easiest, most addictive way to learn.
          </div>
          <div className="Button1">
            <Button inverted size="massive">
              Watch Demo
            </Button>
            <Button inverted size="massive">
              Explore Challenges
            </Button>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" width={7}>
          <div className="Form">
            <div>
              <Button color="facebook" size="large">
                Sign in with Facebook
              </Button>
              <Button color="google plus" size="large">
                Sign in with Google
              </Button>
            </div>
            <Input
              icon="user"
              iconPosition="left"
              size="large"
              fluid
              placeholder="Pick a username"
            />
            <Input
              icon="envelope"
              iconPosition="left"
              size="large"
              fluid
              placeholder="Your email address"
            />
            <Input
              icon="lock"
              iconPosition="left"
              size="large"
              fluid
              placeholder="Create a password"
            />
            <Button color="green" size="large" fluid>
              Create My Free Account
            </Button>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
