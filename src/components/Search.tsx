import { Button, Input, Typography } from "@mui/material"

export const Search : React.FC = () => {
    // create a search bar
    return (
        <div style={{display:"flex", marginTop:30}}>
            
            <Input style={{marginRight:10}}
            placeholder="0x53c74fb1e05c968b7b021484931f083aad0d3a3bfc97f36f0b11d1b7e1a4af6e" > </Input>
            <Button variant="contained" > Search </Button>
        </div>
    )
}