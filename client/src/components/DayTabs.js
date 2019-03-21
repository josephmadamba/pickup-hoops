import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import JoinGames from '../containers/JoinGames'


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
          <Tab label="Sunday" />
          <Tab label="Monday" />
          <Tab label="Tuesday" />
          <Tab label="Wednesday" />
          <Tab label="Thursday" />
          <Tab label="Friday" />
          <Tab label="Saturday" />
        </Tabs>
        {this.state.value === 0 && <TabContainer><JoinGames /></TabContainer>}
        {this.state.value === 1 && <TabContainer>Monday</TabContainer>}
        {this.state.value === 2 && <TabContainer>Tuesday</TabContainer>}
        {this.state.value === 3 && <TabContainer>Wednesday</TabContainer>}
        {this.state.value === 4 && <TabContainer>Thursday</TabContainer>}
        {this.state.value === 5 && <TabContainer>Friday</TabContainer>}
        {this.state.value === 6 && <TabContainer>Saturday</TabContainer>}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);