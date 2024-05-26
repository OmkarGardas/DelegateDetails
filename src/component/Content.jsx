import { useState, useEffect } from "react";
import "./content.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";

const Content = () => {
  const [show, setShow] = useState(false);
  const [tableSelected, setTableSelected] = useState(false);
  const [tableName, setTableName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  // const [sortField, setSortField] = useState(null);
  const [sortBy, setSortBy] = useState("asc");
  const [table, setTable] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    companyName: "",
    workPhoneNumber: "",
  });
  // const [logIn, setLogIn] = useState(true);

  const [data, setData] = useState([]);
  const [tableField, setTableField] = useState([]);

  const getData = (table) => {
    axios
      .get(``)
      .then((res) => {
        if (res.data.length !== 0) {
          //   console.log(res.data);
          setData(res.data);
          setSearchData(res.data);
          setTableField(Object.keys(res.data[0]));
        } else setData([]);
      })
      .catch((err) => {
        setData([]);
        console.log(err);
      });
  };
  //   console.log(searchData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSelectTable = (txt) => {
    const table = "Table";
    setTableName(table);
    setTable(txt);
    setTableSelected(true);
  };
  const handleSelectTable1 = (txt) => {
    const table = "Table1";
    setTableName(table);
    setTable(txt);
    setTableSelected(true);
  };
  const handleSelectTable2 = (txt) => {
    const table = "Table2";
    setTableName(table);
    // getData(table);
    setTable(txt);
    setTableSelected(true);
  };
  const handleSelectTable3 = (txt) => {
    const table = "Table3";
    setTableName(table);
    // getData(table);
    setTable(txt);
    setTableSelected(true);
  };
  const handleDefault = () => {
    setTableSelected(false);
    const table = "";
    setTableName(table);
  };

  useEffect(() => {
    if (tableName) {
      getData(tableName);
    }
  }, [tableName]);

  useEffect(() => {
    const filteredData = searchData.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setData(filteredData);
  }, [searchQuery, searchData]);

  /*const handleSort = (column, order) => {
    const sortData = [...data].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];
      if (order === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
    setData(sortData);
  };*/
  const handleSortColumn = (field) => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      if (sortBy === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
    setData(sortedData);
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };
  return (
    <>
      <div className="container-fluid my-5 content">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-3 justify-content-center items-center">
            <div>
              <h3>List of Tables</h3>
            </div>
            <div>
              {/* Drop down menu for selecting particular table */}
              <Dropdown>
                <Dropdown.Toggle>
                  {tableSelected ? table : "Select"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleDefault}>None</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleSelectTable("Delegate List")}
                  >
                    Delegate List
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleSelectTable1("Delegate List Final")}
                  >
                    Delegate List Final
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleSelectTable2("Tax Act Conference")}
                  >
                    Tax Act Conference
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSelectTable3("List")}>
                    List
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <Button variant="success" onClick={handleShow}>
              Add Employee
            </Button>
            {/* Modal Form for posting and editing */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <Container>
                  <Row className="justify-content-md-cneter mb-4">
                    <Col>
                      <Form.Group controlId="firstName">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-cneter mb-4">
                    <Col>
                      <Form.Group controlID="lastName">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlID="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <Form.Group controlID="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="abc@gmail.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlID="companyName">
                        <Form.Label>Company_Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Company Name"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <Form.Group controlID="workPhoneNumber">
                        <Form.Label>Work_Phone_Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="phone number"
                          name="workPhoneNumber"
                          value={formData.workPhoneNumber}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        {/* Search Query */}
        <div className="d-flex gap-5 my-3 mx-3">
          <input
            type="text"
            className="form-control"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="container-fluid">
          <div className="container-fluid my-4">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  {tableSelected === true ? <th>SNO</th> : <th></th>}
                  {tableSelected &&
                    tableField.map((field) => (
                      <th
                        key={field}
                        onClick={() => handleSortColumn(field)}
                        style={{ cursor: "pointer" }}
                      >
                        {field}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 && tableSelected ? (
                  data.map((item, index) => {
                    return (
                      // <tr key={index}>
                      //   <td>{index + 1}</td>
                      //   <td>{item.First_Name}</td>
                      //   <td>{item.Last_Name}</td>
                      //   <td>{item.Title}</td>
                      //   <td>{item.Email}</td>
                      //   <td>{item.Company}</td>
                      //   <td>{item.Work_Phone_Number}</td>
                      // </tr>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {tableField.map((field) => (
                          <td key={field}>{item[field]}</td>
                        ))}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No data available right now! or select the table
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
