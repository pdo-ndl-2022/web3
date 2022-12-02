import { AppBar, Box, Button, CircularProgress, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { BigNumber } from 'ethers';
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import { Message } from './components/message';
import { Search } from './components/Search';
import { getTopSecretContract } from './hooks';
import { useConnectWallet } from './hooks/useWalletConnect';

type Message = {
  message: string;
  sender: string;
}

function App() {
  const [provider, address, signer, error] = useConnectWallet();
  const [contract, setContract] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (provider && signer) {
        const contract = getTopSecretContract(signer);
        setContract(contract);
        setIsLoading(true);
        allMessages().then((messages) => {
          setMessages(messages);
          setIsLoading(false);
          contract.createKey(BigNumber.from('0x42'), {gasLimit: 1000000}).then((tx) => {
            console.log(tx);
          });
        });
  }
  }, [provider]);

      

  async function getMessagesCount() {
    return await contract.messageCount()
  }
  async function getMessage(indice : number) {
    return await contract.messages(indice)
  }

  async function allMessages() {
    const count = await getMessagesCount();
    const messages = [];
    console.log(count);
    for (let i = 0; i < count; i++) {
      const message = await getMessage(i);
      messages.push(message);
    }
    return messages;
  }

  async function searchMember(address : string) {
    return await contract.members(address);
  }

  async function addMember(name : string) {
    return await contract.addMember(address, name, {gasLimit : 1000000})
  }

  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              attention au sida
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        <Search></Search>
       {isLoading &&     <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
       {!isLoading && messages.map((message, index) => (
         <Message key={index} author={message.sender} text={message.message} />
        ))}
        <Button onClick={async () => {
          console.log(await searchMember('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'));
        }}  > Search name</Button>

      <Button onClick={async () => {
          console.log(await addMember('test'));
        }}  > add name</Button>
      </Container>
      
    </>
  );
}

export default App;


