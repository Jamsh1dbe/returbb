import React from 'react'
import {data} from './Student.jsx'
import {Table} from './tabletext.js'
class Studentf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            search: '',
            name: "",
            surname: "",
            status: '',
            phone: '',
            selected: null,
            Search: '',
            restore: data,
            newName: "",
            newSurname: '',
            newStatus: "",
            newPhone: "",
        };
      }
    render() {
        // const inSearch=(e)=>{
        //   let serch=this.state.data.filter((value) => value.id === e.id);
        //   this.setState({
        //     search: serch
        //   });
        // };
        const onDelete = (e) => {
            let map = this.state.data.filter((value) => value.id !== e.id);
            this.setState({
                data: map
            });
          };
          const onChange = (e) => {
            this.setState({
              [e.target.name]: e.target.value,
            });
          };
          const onEdit = (e) => {
            this.setState({
              name: e.name,
              surname: e.surname,
              status: e.status,
              phone: e.phone,
              selected: e.id,
            });
          };
          const onSave = () => {
            let newData = this.state.data.map((value) =>
              value.id === this.state.selected
                ? { ...value, name: this.state.name, surname: this.state.surname, phone:this.state.phone, status:this.state.status}
                : value
            );
            this.setState({
              data: newData,
              selected: null,
            });
          };
          // const inSearch = (e) => {
          //   this.setState({ infoSearch: e.target.value })
      
          // }

        return (
            <div>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Surname</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {this.state.data.map((value) => (
              <Table.Tr key={value.id}>
                <Table.Td>{value.id}</Table.Td>
                <Table.Td>
                  {this.state.selected === value.id ? (
                    <input
                      name="name"
                      onChange={onChange}
                      value={this.state.name}
                    />
                  ) : (
                    value.name
                  )}
                </Table.Td>
                <Table.Td>
                  {this.state.selected === value.id ? (
                    <input
                      name="surname"
                      onChange={onChange}
                      value={this.state.surname}
                    />
                  ) : (
                    value.surname
                  )}
                </Table.Td>
                      <Table.Td>
                        {this.state.selected === value.id ? (
                          <input
                            name="status"
                            onChange={onChange}
                            value={this.state.status}
                          />
                        ) : (
                          value.status
                        )}
                      </Table.Td>
                <Table.Td>
                  {this.state.selected === value.id ? (
                    <input
                      name="phone"
                      onChange={onChange}
                      value={this.state.phone}
                    />
                  ) : (
                    value.phone
                  )}
                </Table.Td>
                
                <Table.Td>
                  {this.state.selected === value.id ? (
                    <button onClick={onSave}>Save</button>
                  ) : (
                    <button onClick={() => onEdit(value)}>Edit</button>
                  )}
                  <button onClick={() => onDelete(value)}>Delete</button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
          </div>
        )
    }
}
export default Studentf
