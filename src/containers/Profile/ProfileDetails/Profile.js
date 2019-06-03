import React, { Component } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';
 
class Profile extends Component {

    componentDidMount = () => {
        let url = 'api/Profile';
        this.props.onGetData(url, { ...this.props });
    }

    render() {
        let employeedetail = [];

        console.log(this.props.data);
        if (this.props.data && this.props.data.length > 0) {
            employeedetail = this.props.data.map((emp) => {
                return (
                   /*  <Owner key={owner.id} owner={owner} {...this.props} /> */
                 //  console.log(emp.ClientID)
                    <Aux>
                            <tr>
                                <td>{emp.ClientID}</td>
                                <td>{emp.Chrisname + ' ' + emp.Surname}</td>
                                <td>{emp.DOB}</td>
                                <td>{emp.Address1}</td>
                                <td>{emp.Email}</td>
                            </tr>
                     </Aux>
                )
            })
        }
        return (
            <Aux>
                {/* <Row>
                    <Col mdOffset={10} md={2}>
                        <Link to='/createProfile' >Create Profile</Link>
                    </Col>
                </Row> */}
                <br />
                <Row>
                    <Col md={12}>
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Client ID</th>
                                    <th>Name</th>
                                    <th>Date of birth</th>
                                    <th>Address</th>
                                    <th>Email</th>
                               {/*      <th>Update</th>
                                    <th>Delete</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {employeedetail}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Aux>
        )
    }
}
 const mapStateToProps = (state) => {     
    return {  
       data: state.data     
    } 
}
const mapDispatchToProps = (dispatch) => {
     return {
         onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))     
    } 
} 
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
//export default Profile;