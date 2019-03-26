import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import JoinGameDayTabs from '../containers/JoinGameDayTabs'
import CreateGames from './CreateGames'
import MyGamesTab from '../containers/MyGamesTab'

function TabContainer(props) {
  console.log(props)
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Join Games" />
          <Tab label="Create Games" />
          <Tab label="My Games" />
          <Tab label="FAQ" />
          <Tab label="About" />
        </Tabs>
        {this.state.value === 0 && <TabContainer><JoinGameDayTabs/></TabContainer>}
        {this.state.value === 1 && <TabContainer><CreateGames/></TabContainer>}
        {this.state.value === 2 && <TabContainer><MyGamesTab /></TabContainer>}
        {this.state.value === 3 && <TabContainer>FAQ</TabContainer>}
        {this.state.value === 4 && <TabContainer>About</TabContainer>}
    </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);