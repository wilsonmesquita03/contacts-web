import { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../../contexts/AuthContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const TableMain = () => {
    const { loadContacts, contacts } = useContext(AuthContext)

    useEffect(() => {
        loadContacts()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell align="right">id</StyledTableCell>
                <StyledTableCell align="right">Número de telefone</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Data GMT</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contacts?.map((contact) => (
                <StyledTableRow key={contact.name}>
                    <StyledTableCell component="th" scope="row">
                    {contact.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{contact.id}</StyledTableCell>
                    <StyledTableCell align="right">{contact.tel_number}</StyledTableCell>
                    <StyledTableCell align="right">{contact.email}</StyledTableCell>
                    <StyledTableCell align="right">{contact.created_at}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        );
}

export default TableMain