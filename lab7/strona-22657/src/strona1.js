import React from "react";
import {Button, ButtonGroup, Container} from "@material-ui/core";
import Business from "@material-ui/icons/Business";

const Potrawy = props => {
    const potrawy = ['Pizza', 'Pierogi', 'Rosół', 'Lasagna']
    const listaPotraw = potrawy.map(potrawa => <li key={potrawa}>{potrawa}</li>)
    const potrawy2 = ['Zapiekanka', 'Hamburger', 'Spaghetti', 'Pomidorowa']
    const listaPotraw2 = potrawy2.map(potrawa2 => <li key={potrawa2}>{potrawa2}</li>)
    return (
        <div>
            {props.test ? <ul>{listaPotraw}</ul> : <ul>{listaPotraw2}</ul>}
        </div>
    )
}

class Tytul extends React.Component {
    state={
        title: 'Dostępne potrawy'
    }
    przelaczPotrawy(){
        this.setState({ pokazPotrawy : !this.state.pokazPotrawy })
    }
    render(){
        const zmienTytul = () => this.setState({ title: 'Restauracja 22657' })
        return (
            <div>
                <div>
                    <Container class = "kontener" fixed maxWidth="md">
                        <h1>{this.state.title}</h1>
                        <Potrawy test={this.state.pokazPotrawy}/>
                        <ButtonGroup color="primary" aria-label="outlined secondary button group">
                            <Button startIcon={<Business />} onClick={zmienTytul}> Nazwa restauracji </Button>
                            <Button  onClick={()=>this.przelaczPotrawy()}> Inne potrawy </Button>
                        </ButtonGroup>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Tytul;