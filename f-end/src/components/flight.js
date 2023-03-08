import React, { Component } from "react";
import axios from "axios";



class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seat_no: "",
            pass_name: "",
            depart: "",
            arri: "",
           age: "",
            cost: "",
            fuelData: [], // Array to storeFlights data fetched from the server
        };
    }

    componentDidMount() {
        // FetchFlights data from server when component mounts
        axios.get("http://localhost:8081/show").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }

    handleseat_noChange = (event) => {
        this.setState({ seat_no: event.target.value });
    };
    handlepass_name = (event) => {
        this.setState({ pass_name: event.target.value });
    };
    handledepart = (event) => {
        this.setState({ depart: event.target.value });
    };
    handlearri = (event) => {
        this.setState({ arri: event.target.value });
    };
    handleage = (event) => {
        this.setState({age: event.target.value });
    };
    handlecost = (event) => {
        this.setState({ cost: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            seat_no: this.state.seat_no,
            pass_name: this.state.pass_name,
            depart: this.state.depart,
            arri: this.state.arri,
           age: this.state.age,
            cost: this.state.cost,
        };
        console.log(data);
        axios.post("http://localhost:8081/add", data).then((response) => {
            // Add newFlights data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                seat_no: "",
                pass_name: "",
                depart: "",
                arri: "",
               age: "",
                cost: "",
            });
        });
    };

    handleUpdate = (seat_no, data) => {
        // Send PUT request to updateFlights data with the given ID
        axios.put(`http://localhost:8081/put/${seat_no}`, data).then((response) => {
            // Update the state to reflect the updatedFlights data
            const updatedfuelData = this.state.fuelData.map((Flights) => {
                if (Flights.seat_no === response.data.seat_no) {
                    return response.data;
                } else {
                    return Flights;
                }
            });
            this.setState({ fuelData: updatedfuelData });
        });
    };

    handleDelete = (seat_no) => {
        // Send DELETE request to removeFlights data with the given ID
        axios.delete(`http://localhost:8081/delete/${seat_no}`).then((response) => {
            // Update the state to remove the deletedFlights data
            const updatedfuelData = this.state.fuelData.filter(
                (Flights) => Flights.seat_no !== seat_no
            );
            this.setState({ fuelData: updatedfuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
           
            seat_no: data.seat_no,
            pass_name: data.pass_name,
            depart: data.depart,
            arri: data.arri,
           age: data.age,
            cost: data.cost,
            isEdit: true,
        });
        console.log(this.state.seat_no);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    // handleUpdate = (event) => {
    //     event.preventDefault();
    //     const data = {
    //         seat_no: this.state.seat_no,
    //         pass_name: this.state.pass_name,
    //         depart: this.state.depart,
    //         arri: this.state.arri,
    //         age:this.state.age,
    //         cost:this.state.cost,
            
    //     };
    //     const seat_no = this.state.seat_no;
    //     axios
    //         .put(`http://localhost:8081/put/${seat_no}`, data)
    //         .then((res) => {
    //             console.log(res.data);
    //             this.setState({
    //                 seat_no: "",
    //                 pass_name: "",
    //                 depart: "",
    //                 arri: "",
    //                 age:"",
    //                 cost:"",
                    
    //             });
    //             this.props.history.push("/");
    //         })
    //         .catch((err) => console.log(err));
    // };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="fuelData-label">Seat No</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.seat_no}
                        onChange={this.handleseat_noChange}
                    />
                    
                    <label className="fuelData-label">Passanger Name</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.pass_name}
                        onChange={this.handlepass_name}
                    />
                    

                    <label className="fuelData-label">Departure</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.depart}
                        onChange={this.handledepart}
                    />
                   

                    <label className="fuelData-label">Arrival</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.arri}
                        onChange={this.handlearri}
                    />
                  

                    <label className="fuelData-label">Age</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleage}
                    />
                   

                    <label className="fuelData-label">Price</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.cost}
                        onChange={this.handlecost}
                    />
                   

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                  
                </form>

                <table className="output">
                    <thead>
                        <tr>
                          
                            <th>Seat No</th>
                            <th>Passanger Name</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Age</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.seat_no}>
                               
                                <td>{data.seat_no}</td>
                                <td>{data.pass_name}</td>
                                <td>{data.depart}</td>
                                <td>{data.arri}</td>
                                <td>{data.age}</td>
                                <td>{data.cost}</td>
                                <td>
                                    <div className="edit ">
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                    </div>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.seat_no)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate} className="fuel">
                    <input type="hidden" name="seat_no" value={this.state.seat_no} />
                    <label className="fuelData-label">Seat No:</label>
                    <input
                        className="fuel"
                        type="text"
                        name="seat_no"
                        value={this.state.seat_no}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label className="fuelData-label">Passanger Name:</label>
                    <input
                        className="fuel"
                        type="text"
                        name="pass_name"
                        value={this.state.pass_name}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label className="fuelData-label">Departure:</label>
                    <input
                        className="fuel"
                        type="text"
                        name="depart"
                        value={this.state.depart}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label className="fuelData-label">Arrival:</label>
                    <input
                        className="fuel"
                        type="text"
                        name="arri"
                        value={this.state.arri}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label className="fuelData-label">Age:</label>
                    <input
                        className="fuel"
                        type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label className="fuelData-label">Price:</label>
                    <input
                        className="fuel"
                        type="number"
                        name="cost"
                        value={this.state.cost}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Create;