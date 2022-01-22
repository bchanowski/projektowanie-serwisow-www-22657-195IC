//Importowanie używanych funkcji/komponentów z pobranych pakietów
import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import './App.css';
import { Button, Card } from 'react-bootstrap';

//Funkcja MoreText jest uproszczoną wersją głównej funkcji (bez komponentu card), ma za zadanie stworzenie elementu,
//który będzie się rozwijać. Jeśli chcemy stworzyć Collapse w środku innego Collapse'a musimy właśnie stworzyć osobną funkcję
//aby jeden przycisk nie odpowiadał za oba elementy.

function MoreText() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return(
        <div>
            <p {...getCollapseProps()}>Więcej tekstu</p>
            <Button style={{  marginTop: '10px' }}
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
                >
                {isExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
            </Button>
        </div>
    );
}

//Nasza główna funkcja. Na samym początku ustawiamy wartości isExpanded na false (na true element się rozwija, setExpanded odpowiada za zmianę wartości isExpanded)
//getCollapseProps i getToggleProps to funkcje zwracająca obiekt prop przypisany do odpowiednio Collapse lub Toggle

function App() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    //W głównym div'ie dodałem komponent card z react-bootsrtap, aby poprawić wizualnie stronę, następnie dodajemy button
    //odpowiadający za zmianę wartości isExpanded za pomocą setExpanded przy przyciśnięciu
    //Napis na przycisku jest również ustalany po sprawdzeniu wartości isExpanded
    //w komponencie p znajduję się nasz tekst, oraz funkcja MoreText(Collapse w Collaps'ie)

  return (
      <div>
          <Card className="text-center center" border="primary" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '18rem' }}>
              <Card.Body>
                <Button variant="outline-primary" style={{ marginBottom: '10px' }}
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    {isExpanded ? 'Ukryj' : 'Pokaż'}
                </Button>
                  <p {...getCollapseProps()}>Testowy tekst<MoreText /></p>
              </Card.Body>
          </Card>
      </div>
  )
}

export default App;
