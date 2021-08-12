import React from "react";
import './userTable.css';
class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "",
            mainData: "",
            items :[
                { value: "tv" },
                { value: "crackers" },
                { value: "chips" },
                { value: "item " },
                { value: "carrot" },
                { value: "apple" },
                { value: "grapes" },
                { value: "cake" },
                { value: "ham" }
              ],
              headers: ['User','Age']
        }
        this.onChangeOfVal = this.onChangeOfVal.bind(this);
    }

    onChangeOfVal (event) {
        const { data, ageData } = this.props;
        this.setState({selectedValue:event.target.value});
        const tempData = data.filter((val)=>Object.keys(ageData).filter((val) => ageData[val].includes(event.target.value)).includes(val.username));
        const secondTempData = tempData.reduce((value, currentValue) => 
        {
            const age = `${currentValue.age}`;
            !value[age] ? value[age] = { ...currentValue, count: 1 } : value[age].count++;
            return value;
        }, {});
        this.setState({mainData:Object.values(secondTempData)});
    }

    render() {
        const {items, headers, selectedValue, mainData} = this.state;
        return (
        <>
            <div className="top-container">
                <h2>Age Demographic of Users with __</h2>
                <select
                    placeholder="users"
                    value={selectedValue}
                    onChange={(e)=>this.onChangeOfVal(e)}>
                    {items && items.map((item, index) =>
                        <option value={item.value} key={index}>{item.value}</option>
                    )}
                </select>
            </div>
            <div className="bottom-container">
                <table>
                    <tbody>
                        <tr>{headers.map((header,key)=><td key={header+key}>{header}</td>)}</tr>
                        {mainData && mainData.map((data, index) => {
                            return (<tr key={'tr_'+index}>
                                <td>{data.age}</td>
                                <td>{data.count}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );}
}
export default UsersTable;