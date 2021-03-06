import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

function IndexPage(props) {
  const user = props.user;
  return (
    <div className="indexpage">
      <h1>Hello, World, { user.username }!</h1>
      <Row>
        <Col md={12}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
        </Col>
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
  user: React.PropTypes.shape(),
};

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(IndexPage);
