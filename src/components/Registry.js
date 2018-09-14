import React from 'react'
import { withStyles, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, ListSubheader, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { getCatalog, openRepository, getTags } from '../actions/registryActions'

const styles = theme => {
  const scrollbar = {
    '&::-webkit-scrollbar': {
      width: theme.spacing.unit
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.grey[100]
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.grey[300]
    }
  }
  return {
    root: {
      flexGrow: 1,
      zIndex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      overfloat: 'hidden'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
      position: 'relative',
      width: 240,
      ...scrollbar
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      minWidth: 0,
      overflowX: 'hidden',
      overflowY: 'scroll',
      ...scrollbar
    },
    toolbar: theme.mixins.toolbar
  }
}

class Registry extends React.Component {
  componentWillMount () {
    this.props.getCatalog()
  }

  handleRepositorySelect (repository) {
    const { openRepository, getTags } = this.props
    openRepository(repository)
    getTags(repository)
  }

  render () {
    const { classes, registry: { repositories, openedRepository, tags } } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='absolute' className={classes.appBar}>
          <Toolbar variant='dense'>
            <Typography variant='title' color='inherit'>
              Registry
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListSubheader>Repositories</ListSubheader>
            {repositories.map(repository =>
              <ListItem key={repository} selected={repository === openedRepository} onClick={() => this.handleRepositorySelect(repository)} button value={repository}>
                <ListItemText primary={repository} />
              </ListItem>
            )}
          </List>
        </Drawer>
        <main className={classes.content}>
          {openedRepository && <React.Fragment>
            <div className={classes.toolbar} />
            <Typography variant='title' noWrap >{openedRepository}</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tag</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tags.map(tag =>
                  <TableRow>
                    <TableCell>{tag}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </React.Fragment>}
        </main>
      </div>
    )
  }
}

export default compose(
  withStyles(styles, {name: 'Registry'}),
  connect(
    state => ({ registry: state.registry }),
    { getCatalog, openRepository, getTags }
  )
)(Registry)
