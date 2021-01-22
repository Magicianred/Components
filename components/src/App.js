import './App.css';
import Registration from './Auth/RegistrationForm.js'
import ParaLanding from './ParaLanding/ParaLanding.js';
import SideNav from './SideNav/SideNav.js';
import StackView from './StackViewer/StackView.js';
import DragDrop from './DragDrop/DragDrop.js';
import MappedTable from './MappedTable/MappedTable.js';
import ColorShadow from './ColorShadow/ColorShadow.js';
import CustomModal from './CustomModal/CustomModalF.js';
import FileDrop from './FileDrops/FileFunc.js';
import MultiSelectCheckBox from './MultiSelectCheckBox/MultiSelectCheckBox.js';
import Carousel from './Carousel/Carousel.js';
import DataList from './DataList/DataList.js';
import Collapse from './Collapse/Collapse.js';

import TreeView from './TreeView/TreeView.js';

// ===================================================
// loader element
const Content = () => {
  return (
      <div>
        <p>Two components walk into a bar, one says:</p>
        <h1>"I'm the dom"</h1>
      </div>
    )
}
// ===================================================



function App() {

  // ==================================================
  // PROPS TO PASS TO MAPPED TABLE COMPONENT
  const people = [
    { name: 'John', surname: 'Smith', age: 42 },
    { name: 'Adam', surname: 'Smith', gender: 'male' }
  ];
  const propertyNames = ['name', 'surname', 'age'];
  // ==================================================

  // ==================================================
  // PROPS TO PASS TO MULTI SELECT CHECK BOX
  const options = [{ label: 'Item One' }, { label: 'Item Two' }];
  // ==================================================

  // ==================================================
  // PROPS TO PASS TO CUSTOM MODAL
  // INCOMPLETE
  const propsToModal = {
    title: 'Hello, world!',
    closeOnClick: true,
    content: <img src="https://github.com/30-seconds/30-seconds-of-react/blob/master/logo.png"/>
  }
  const show = (data) => {
    document.dispatchEvent(new CustomEvent('modal', {
        detail: {
            data
        }
    }));
  }
  // INCOMPLETE
  // ===================================================

  // ===================================================
  // CAROUSEL PROPS
  const carouselItems = [
    <div>carousel item 1</div>,
    <div>carousel item 2</div>,
    <div>carousel item 3</div>
  ];
  // ===================================================
  // ===================================================
  // PASSWORD REVEALER
  const names = ['John', 'Paul', 'Mary'];
  // ===================================================

  // ===================================================
  // TREE VIEW DATA PROPS
  let treeData = {
    lorem: {
      ipsum: "dolor sit",
      amet: {
        consectetur: "adipiscing",
        elit: [
          "duis",
          "vitae",
          {
            semper: "orci"
          },
          {
            est: "sed ornare"
          },
          "etiam",
          ["laoreet", "tincidunt"],
          ["vestibulum", "ante"]
        ]
      },
      ipsum: "primis"
    }
  };

  return (
    <div 
      className="App" 
      >
      <SideNav />
      <TreeView data={treeData} name='data'/>
      {/* <Collapse>
        <h1>Hello world</h1>
        <p>Oye mundo.</p>
      </Collapse> */}
      {/* <DataList data={names} /> */}
      {/* <Carousel carouselItems={carouselItems}/> */}
      {/* <FileDrop handleDrop={console.log}/> */}
      {/* <CustomModal  /> */}
      {/* <Registration /> */}
      {/* <ParaLanding /> */}
      {/* <MappedTable data={people} propertyNames={propertyNames}/> */}
      {/* <div onClick={show(propsToModal)}>
        <ColorShadow />
      </div> */}
      {/* <MultiSelectCheckBox
        options={options}
        onChange={data => {
          console.log(data);
        }}
      /> */}
      {/* <StackView /> */}
      {/* <DragDrop /> */}
    </div>
  );
}

export default App;
