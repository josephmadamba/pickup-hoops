import React from 'react'
import { connect } from 'react-redux'
import List from '../components/JoinGame/JoinGameList'
import axios from 'axios'
import NoMyGames from '../components/NoMyGames'

class MyGames extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showGames: null,
      getGames: false
    }
  }

  componentDidMount () {
    this.setState({ getGames: false })
    axios.get('/mygames', { params: { user: this.props.user.id } })
      .then(games => {
        this.props.addMyGames(games.data.data)
        this.setState({ getGames: true })
      })
  }

  render () {
    return (
      this.props.myGames.length !== 0
        ? this.props.myGames.map((data, index) => {
          return (
            <List index={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              user={this.props.user}
              gameid={data.game_id}
              addMyGames={this.props.addMyGames}
              myGames={this.props.myGames.length}
              city={data.city}
              state={data.state}
              zip={data.zip}
              address={data.address}
            />
          )
        }) : <NoMyGames tab={this.props.tab} />
    )
  }
}

const mapStateToProps = (state) => ({
  myGames: state.myGames,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  addMyGames: (payload) => dispatch({
    type: 'ADD_MY_GAME',
    payload
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(MyGames)
