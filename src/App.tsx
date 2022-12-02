import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { MessageBox } from './components/message';
import { Search } from './components/Search';
import { getTopSecretContract } from './hooks';
import { useConnectWallet } from './hooks/useWalletConnect';

export type Message = {
  message: string;
  sender: string;
  username?: string;
};

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
        // contract.createKey(BigNumber.from('0x42'), {gasLimit: 1000000}).then((tx) => {
        //   console.log(tx);
        // });
      });
    }
  }, [provider]);

  async function getMessagesCount() {
    return await contract.messageCount();
  }
  async function getMessage(indice: number) {
    return await contract.messages(indice);
  }

  async function allMessages() {
    const count = await getMessagesCount();
    const messages: Message[] = [];
    for (let i = 0; i < count; i++) {
      const message: Message = await getMessage(i);
      let username = await searchMember(message.sender);
      messages.push({ username, ...message });
    }
    return messages;
  }

  async function searchMember(address: string) {
    return await contract.members(address);
  }

  async function addMember(name: string) {
    return await contract.addMember(address, name, { gasLimit: 1000000 });
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" color="inherit" component="div">
              SidoMessages
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Search />
        {isLoading && (
          <Box sx={{ display: 'flex', marginY: '10px' }}>
            <CircularProgress />
          </Box>
        )}
        {!isLoading &&
          messages.map((message: Message, index: number) => (
            <MessageBox
              key={index}
              message={message.message}
              sender={message.sender}
              username={message.username}
            />
          ))}

        <Button
          onClick={async () => {
            console.log(await addMember('test'));
          }}
        >
          add name
        </Button>
      </Container>
    </>
  );
}

export default App;
