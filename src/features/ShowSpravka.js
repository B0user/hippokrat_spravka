import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { API_URL } from "../config";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, CircularProgress, Typography, Box } from "@mui/material";

const fetchSpravka = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const response = await axios.get(`${API_URL}/public/spravka/${id}`);
  return response.data;
};

const ShowSpravka = () => {
  const { id } = useParams(); // Get the ID from the URL
  const { data, isLoading, isError } = useQuery({
    queryKey: ['spravka', id],
    queryFn: fetchSpravka,
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h6" color="error">Ошибка при загрузке данных</Typography>
      </Box>
    );
  }

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>Информация о справке</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Дата прохождения</TableCell>
              <TableCell>{data.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Тип</TableCell>
              <TableCell>{data.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Пациент</TableCell>
              <TableCell>{data.patient_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ИИН пациента</TableCell>
              <TableCell>{data.patient_iin}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Доктор</TableCell>
              <TableCell>{data.doctor_name}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShowSpravka;
