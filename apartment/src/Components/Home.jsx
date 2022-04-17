import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Table, Thead, Tbody, Th, Tr, Td, Heading } from '@chakra-ui/react'


export default function Home() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async(data) =>{
        const res = await axios.get("http://localhost:4040/apartment/");
        setData([...res.data]);
        console.log(res);
    }
  return (
    <div>
      <Heading>Flats</Heading>
        <Table>
            <Thead>
                <Tr>
                    <Th>Type</Th>
                    <Th>Block</Th>
                    <Th>Number</Th>
                    <Th>residents</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                data.map(e =>{
                    return (
                        <Tr>
                            <Td>{e.type}</Td>
                            <Td>{e.block}</Td>
                            <Td>{e.number}</Td>
                            <Td>{e.recidents}</Td>
                        </Tr>
                    )
                })
                }
            </Tbody>
        </Table>
    </div>
  )
}
