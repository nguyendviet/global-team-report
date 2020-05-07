import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function getCountriesWithReportsFrom(data: any) {
    const countriesWithReports = data.filter((item: any) => Object.values(item)[1] !== 0);
    return countriesWithReports;
}

function createData(code: string, name: string, speed: number, rating: string) {
    return { code, name, speed, rating };
}

function buildCountriesArrayFrom(data: any) {
    const countryArray = data.map((country: any) => {
        const code: string = Object.keys(country)[0];
        const value: string = Object.keys(country)[1];
        const name: string = Object.keys(country)[2];
        let rating: string = '';

        const speed: number = country[value];
        if (speed >= 1 && speed < 2) rating = 'Bad';
        if (speed >= 2 && speed < 5) rating = 'Fair';
        if (speed >= 5 && speed < 9) rating = 'Average';
        if (speed >= 9) rating = 'Good';

        return createData(country[code], country[name], country[value], rating);
    });
    return countryArray;
}

export default function DetailList(props: any) {
    const classes = useStyles();
    const countriesWithReports = getCountriesWithReportsFrom(props.data);
    const countries = buildCountriesArrayFrom(countriesWithReports);
    const sortedCountries = countries.sort((a: any, b: any) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    });
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Country Name</TableCell>
                    <TableCell align="right">Speed (Mbps)</TableCell>
                    <TableCell align="right">Speed Rating</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {sortedCountries.map((row: any) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.speed}</TableCell>
                    <TableCell align="right">{row.rating}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
