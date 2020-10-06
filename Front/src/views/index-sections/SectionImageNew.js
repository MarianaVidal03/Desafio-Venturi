import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export default class SectionImageNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="images">
                <Container className="d-flex itens-center-align ">
                    <Row >
                        <Col md="4" sm="6">
                            <h4 className="images-title">Past Collection</h4>
                            <img
                                alt="..."
                                className="img-rounded img-responsive"
                                src={this.props.img1}
                            />
                        </Col>
                        <Col className="mr-auto ml-auto mb-5" md="4" sm="3">
                            <h4 className="images-title text-center">Current Collection</h4>
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={this.props.img2}
                            />
                        </Col>
                        <Col className="mr-auto" md="4" sm="3">
                            <h4 className="images-title">New Collection</h4>
                            <img
                                alt="..."
                                className="img-thumbnail img-responsive"
                                src={this.props.img3}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
