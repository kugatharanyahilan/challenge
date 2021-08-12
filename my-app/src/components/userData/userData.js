import React from 'react';
import ItemsList from "../itemsData/itemsData";
import UsersTable from "../usersTable/userTable"

class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            ageData: []
        }
        this.getAgeInfo = this.getAgeInfo.bind(this);
        this.getData = this.getData.bind(this);
    }
    getAgeInfo()  {
        return fetch('/users/age', {
          method: "GET"
        }).then(res => res.json())
      }
    
      getData() {
          return fetch('/users', {
            method: "GET"
          }).then(res => res.json())
      }
    componentDidMount() {
        this.getAgeInfo().then(resp => this.setState({ageData:resp}));
        this.getData().then(resp => this.setState({data:resp}));
    }
    render() {
        const {data, ageData} = this.state;
        return (
            <React.Fragment>
                <ItemsList data={data} />
                <UsersTable data={data} ageData={ageData} />
            </React.Fragment>
        );
    }
}

export default UserData;

