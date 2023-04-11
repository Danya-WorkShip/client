import { useState } from 'react';
import classes from './SearchForm.module.scss';
import SearchUsersResult from './SearchUsersResult/SearchUsersResult';
import { CSSTransition } from 'react-transition-group';

const SearchForm = (props: any) => {
  //const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  
  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(document.getElementById('searchForm')!)
    if (!withinBoundaries) {
      setOpen(false)
    }
  })

  document.addEventListener('keydown', (e) => {
    if( e.keyCode === 27 ){
      setOpen(false)
    }
  })
  
  return (
    <div  id='searchForm'>
      <div className={classes.SearchForm}>
        <form {...props} >
          {/* <MyInput type="search" name="search" placeholder="Поиск" value={value} onChange={e => {setValue(e.target.value)}} onClick={() => {setOpen(true)}}/> */}
        </form>
        <CSSTransition
            in={open}
            unmountOnExit 
            timeout={400} 
            classNames="searchResults">
            <SearchUsersResult value=''/>
        </CSSTransition>
      </div>
    </div>
  )
}

export default SearchForm;