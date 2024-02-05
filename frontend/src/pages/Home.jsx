import React, { Component } from "react";
import { WorldService } from "../services/WorldService";
import MCButton from "../components/action/MCButton";
import PropTypes from 'prop-types';
import { withRouter } from './utils/withRouter';

class Home extends Component {

    static propTypes = {
        navigate: PropTypes.object.isRequired,
    }

  constructor(props) {
    super(props);
    this.state = {
      worldData: null,
      loading: true,
      error: null,
      activeWorldId: null,
    };

    this.changeActiveWorldId = this.changeActiveWorldId.bind(this);
    this.selectWorld = this.selectWorld.bind(this);
    this.deleteWorld = this.deleteWorld.bind(this);
  }

  changeActiveWorldId(event, activeWorldId) {
    event.preventDefault();
    this.setState({ activeWorldId });
  }

  selectWorld(event) {
    event.preventDefault();
    const {activeWorldId} = this.state;
    if (activeWorldId) {
        this.props.navigate('/world', {id: activeWorldId});
    }
  }

  deleteWorld(event) {
    event.preventDefault();
    const {activeWorldId} = this.state;
    if (activeWorldId) {
        console.log(`deleting world ${activeWorldId}`)
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await WorldService.getAll();
      this.setState({
        worldData: response,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }

  render() {
    const { worldData, loading, error } = this.state;

    return (
      <div>
        <header>
          <h1>Blocky World</h1>
        </header>
        <section>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {worldData && (
            <div id="world-menu">

                <div id="world-info-container">
                    {worldData.map((element) => {
                        console.log(element)
                        return (
                            <div key={element._id} className="world-info" onClick={(event) => this.changeActiveWorldId(event, element._id)}>
                                <div className="world-info-name"><span>{element.name}</span></div>
                                <div className="world-info-updated"><span>{element.updatedAt}</span></div>
                            </div>
                        )
                    })}
                </div>

                <div className="world-info-control">
                    <MCButton classes="" title="Play Selected World" onClick={this.selectWorld}></MCButton>
                    <MCButton classes="" title="Delete Selected World" onClick={this.deleteWorld}></MCButton>
                    <MCButton classes="" title="Create New World" onClick={() => console.log("creating...")}></MCButton>
                </div>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
