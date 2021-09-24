import Accordion from './components/Accordion';

function App() {
  return (
    <section style={{marginTop: "100px"}}>
      <Accordion title='First FAQ'>
        <p>First FAQ</p>
      </Accordion>
      <Accordion title='Second FAQ'>
        <p>Second FAQ</p>
      </Accordion>
      <Accordion title='Third FAQ'>
        <p>Third FAQ</p>
      </Accordion>
      <Accordion title='Fourth FAQ'>
        <p>Fourth FAQ</p>
      </Accordion>
    </section>
  );
}

export default App;
