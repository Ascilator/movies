import React, { Component } from 'react';

import { Grid, TextField, Button, withStyles } from '@material-ui/core';

import { styles } from './styles';
import { compose } from 'redux';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    const { searchString } = props;
    this.state = {
      searchString: searchString,
    };
  }

  changeHandler = (e) => {
    this.setState({ searchString: e.target.value });
  };

  clickHandler = () => {
    const { onSearch } = this.props;
    const { searchString } = this.state;
    onSearch(searchString);
  };

  render() {
    const { searchString, classes } = this.props;
    return (
      <Grid className={classes.search_component} container direction="row" justify="center" alignItems="stretch">
        <div className={classes.div}>
          <TextField
            fullWidth={true}
            InputProps={{
              classes: { input: classes.textField },
            }}
            InputLabelProps={{
              classes: {
                root: classes.textLabel,
              },
            }}
            variant="outlined"
            label="Type something"
            defaultValue={searchString}
            onChange={(e) => this.changeHandler(e)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.clickHandler();
              }
            }}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => {
              this.clickHandler();
            }}
          >
            Search
          </Button>
        </div>
      </Grid>
    );
  }
}

export default compose(withStyles(styles))(SearchComponent);
