"use client";

import React, { useState } from "react";
import styles from "./Home.module.css";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Table from "@/components/Table";



const Home = () => {

    const [task , setTask] = useState<string>('')
    
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
      setTask(e.target.value)
        console.log(task)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
        console.log("dispatch", task)
    }

  return (
    <Box className={styles.homePage}>
      <Paper className={styles.TodoBox}>
        <Typography className={styles.heading}>LIST</Typography>

        <FormControl className={styles.addTask} onSubmit={(e) => handleSubmit(e)} component={'form'} >
          <InputBase 
            placeholder="Add New Task" 
            className={styles.inputBase} 
            value={task}
            onChange={(e) => handleChange(e)}
            />
          <Button variant="contained" type='submit' className={styles.addbtn}>
            Add Task
          </Button>
        </FormControl>

        <Box>
          <Table />
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
