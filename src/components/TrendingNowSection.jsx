import { Component } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import BuildingGallery from "./BuildingGallery";
class TrendingNowSection extends Component {
    render() {
        return (
            <section id="trending-now">
                <Container fluid>
                    <div className="my-3 align-container">
                        <div className="d-flex align-items-center mb-3 explore">
                            <h3 className="font-weight-bolder mr-2">Trending Now</h3>
                        </div>
                        <Carousel interval={null} indicators={false}>
                            <Carousel.Item>
                                <Row>
                                    <BuildingGallery query="james%20bond" />
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <BuildingGallery query="twilight" />
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <BuildingGallery query="harry%20potter" />
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </section>
        )
    }
}

export default TrendingNowSection