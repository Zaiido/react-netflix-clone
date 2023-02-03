import { Component } from "react";
import { Alert, Card, Col, Spinner } from "react-bootstrap";
import { PlusLg, HandThumbsUp, ChevronDown, VolumeUp } from "react-bootstrap-icons";


class BuildingGallery extends Component {
    state = {
        movies: [],
        isLoading: true,
        isError: false
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=f26f50a5&s=" + this.props.query);

            if (response.ok) {
                let movies = await response.json()
                this.setState({ movies: movies.Search, isLoading: false })
            } else {
                this.setState({ isError: true, isLoading: false })
            }
        } catch (error) {
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        return (
            this.state.movies.splice(0, 6).map((movie) => {
                return (
                    <>
                        {this.state.isLoading && <Spinner animation="border" variant="danger" />}
                        {this.state.isError && <Alert variant="danger">Oww snap...Something went wrong 😐</Alert>}
                        <Col className="col-12 col-sm-6 col-md-4 col-lg-2 movie-img" key={movie.imdbID}>
                            <Card className="border-0">
                                <Card.Img variant="top" src={movie.Poster} />
                                <Card.Body>
                                    <Card.Title className="movie-title">{movie.Title}</Card.Title>
                                    <div className="volume">
                                        <VolumeUp />
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <div className="icon mr-2 icon-special">
                                                <div className="right-triangle"></div>
                                            </div>
                                            <div className="icon mr-2"><PlusLg /></div>
                                            <div className="icon mr-2"><HandThumbsUp /></div>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="icon"><ChevronDown /></div>
                                        </div>
                                    </div>
                                    <div className="d-flex my-2 align-items-center">
                                        <span className="match mr-1">98% Match</span>
                                        <div className="age mr-1 px-1">16</div>
                                        <span className="limited mr-1">Limited Series</span>
                                        <i className="bi bi-badge-hd text-white"></i>
                                    </div>
                                    <div className="text-white genre">
                                        Mistery · Action
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </>
                )
            })
        )
    }
}

export default BuildingGallery