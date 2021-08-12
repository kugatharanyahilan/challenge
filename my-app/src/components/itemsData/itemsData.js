import React from 'react';
import './itemsData.css';
class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: ['User', 'Age']
        }
    }
    render() {
        const { data } = this.props;
        const {headers} = this.state;
        return (
            <>
                {data && data.length &&
                    <div className='items-list'>
                        <div className="items-title-container">
                            <h2>ALL USERS</h2>
                            <h5>Users and their age</h5>
                        </div>
                        <div className="items-table-container">
                            <table>
                                <thead>
                                    <tr>{headers.map((header, key) => <th key={header + key}>{header}</th>)}</tr>
                                </thead>
                                <tbody>
                                    {data.map((data, key) => {
                                        return (
                                            <tr key={'tr_' + key}>
                                                <td>{data.username}</td>
                                                <td>{data.age}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </>
        );
    }
}
export default ItemsList;