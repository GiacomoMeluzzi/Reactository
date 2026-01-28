import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import type { RootState } from "../../../store/store";

const Users = () => {

    const users = useSelector((state: RootState) => state.userlist.users)

    return (
         <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Username</th>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Mail</th>
                <th>Data di nascita</th>
                </tr>
            </thead>
            <tbody>
            {users.map((e, f = 0) => (
                <tr key={e.mail}>
                <th>{f++}</th>
                <td>{e.user || "N/A"}</td>
                <td>{e.nome || "N/A"}</td>
                <td>{e.cognome || "N/A"}</td>
                <td>{e.mail || "N/A"}</td>
                <td>{e.dataNascita || "N/A"}</td>
                </tr>
            ))}            
            </tbody>
        </Table>
    )

}

export default Users