import React from 'react';
import { Grid, Image, Header, Button } from 'semantic-ui-react';
export default function Main() {
  return (
    <>
      <Grid centered columns={2}>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image src="https://s3.amazonaws.com/edabit-images/monster001.png" />
          </Grid.Column>
          <Grid.Column>
            <div className="Div-column">
              <Header as="h1" color="grey">
                The Fastest Way To Learn
              </Header>
              <span>
                Everyone knows the fastest way to learn a spoken language is by
                having conversations with native speakers. Likewise, the fastest
                way to learn to code is by actually coding. Edabit offers an
                almost limitless supply of bite-sized challenges, so you can
                rapidly advance your abilities. It's the absolute fastest way to
                learn.
              </span>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={3}>
          <Grid.Column>
            <div className="Div-column">
              <Header as="h1" color="grey">
                The Easiest Way To Learn
              </Header>

              <p>
                Do you feel like you’re stuck between learning material that’s
                too easy and material that’s too hard? Once the basics are
                learned, you realize everything is made for either total
                beginner or an advanced coder. Edabit bridges this gap. You
                start on easy and progress at your own pace until you're able to
                master the toughest challenges.
              </p>
            </div>{' '}
          </Grid.Column>
          <Grid.Column>
            <Image src="https://s3.amazonaws.com/edabit-images/monster002.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image src="https://s3.amazonaws.com/edabit-images/monster003.png" />
          </Grid.Column>
          <Grid.Column>
            <div className="Div-column">
              <Header as="h1" color="grey">
                The Most Addictive Way To Learn
              </Header>

              <p>
                Edabit simulates what programming is like in the real world
                while removing any tedious, non-educational aspects. We add
                simple game mechanics to make the learning process fun and
                addictive. Gain XP, unlock achievements and level up. You’ll
                spend hours completing challenges and it won't even feel like
                work.
              </p>
            </div>{' '}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="Language-container">
        <Grid>
          <Grid.Row>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                C#
              </Button>
            </div>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                C++
              </Button>
            </div>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                java
              </Button>
            </div>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                JavaScript
              </Button>
            </div>
          </Grid.Row>
          <Grid.Row>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                {' '}
                PHP{' '}
              </Button>
            </div>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                {' '}
                Pthon{' '}
              </Button>
            </div>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                {' '}
                Ruby{' '}
              </Button>
            </div>
            <div className="Language-button">
              <Button inverted size="huge" fluid>
                {' '}
                Swift{' '}
              </Button>
            </div>
          </Grid.Row>
        </Grid>
      </div>
      <div className="people-container">
        <Grid>
          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                <Image
                  circular
                  src="https://s3.amazonaws.com/edabit-images/testimonial002.jpg "
                />{' '}
                <br />
                Anjali
              </Header>
              <i>
                "Extremely well done and an excellent example of learning by
                doing. Perfect execution."
              </i>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                <Image
                  circular
                  src="https://s3.amazonaws.com/edabit-images/testimonial001.jpg"
                />{' '}
                <br />
                Martin
              </Header>
              <i>
                "I swear, Edabit has been more useful than the last coding
                bootcamp I attended. Well done sir."
              </i>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                <Image
                  circular
                  src="https://s3.amazonaws.com/edabit-images/testimonial003.jpg "
                />{' '}
                <br />
                Simon
              </Header>
              <i>
                "I just spent the past five hours on Edabit and I don't even
                feel bad about it. This is addictive stuff!"
              </i>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}
