import Nav from './components/navbar';
import Card from './components/card';
import Footer from './components/footer';
import Counter from './components/Counter';
import New from './components/New';
import Users from './components/Users';
import axios from "axios";
import { useEffect, useState } from 'react';

function App(){

  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const { data }  = await axios.get("https://randomuser.me/api/")
    const details = data.results[0]
    setDetails(details)
    console.log(details);
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <>
      <Nav/>
      <New/>
      <Counter/>

      <Users details= {details}/>
      
      <div style={{display:"flex", flexWrap:"wrap", justifyContent: "center"}}>
        <Card name="Person 1" imgurl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0AnkEFW0bDeZGRP5UT5Z7AHaDt%26pid%3DApi&f=1&ipt=d798efb768788e5fd1865fe72debc532ca053eeb5f972c92a57035ffd592c977&ipo=images" />
        <Card name="Person 2" imgurl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8J3Q8SUFSedk9J_XQcsKKgHaHa%26pid%3DApi&f=1&ipt=6e33722bbed85ef25a44226b1f4c03fd30f20a408685e64d06ca75aae61fff1e&ipo=images" />
        <Card name="Person 3" imgurl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.avb9nDfw3kq7NOoP0grM4wHaEK%26pid%3DApi&f=1&ipt=ec51a22992b9e4d05302562ab1ac2a8fb3b0929b875cc90ce82ad9349a22cf36&ipo=images" />
        <Card name="Person 4" imgurl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4XB8NF1awQyApnQDDmBmQwHaEo%26pid%3DApi&f=1&ipt=59c60ebb45f1b6fbb6409cd695b3b608761343c805c1e4522829cc3e475d266f&ipo=images" />
      </div>
      <Footer/>
    </>
  )
}

export default App;
