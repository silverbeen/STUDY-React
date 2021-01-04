import React from "react";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHaad from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class App extends React.Component {
  //변경될 수 있는 값들
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHaad>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHaad>
            <TableBody>
              {this.state.customers
                ? this.state.customers.map((c) => {
                    return (
                      <Customer
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        image={c.image}
                        birthday={c.birthday}
                        job={c.job}
                      />
                    );
                  })
                : ""}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(App);
