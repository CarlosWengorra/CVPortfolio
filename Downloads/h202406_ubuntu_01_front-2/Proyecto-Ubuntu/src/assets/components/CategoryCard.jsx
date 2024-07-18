
import '../css/categoryCard.css'
import GroupsIcon from '@mui/icons-material/Groups';

function CategoryCard({ima,texto}){
    

return (
     
    <button className='category-card'>
        <div className='frame-37'>

            <div className='frame-38'>
            
            {
                ima ? <img className="frame-38-img"  src={ima} /> 
                : 
                <div className='defaultIcon'><GroupsIcon sx={{ fontSize: 28 }}/></div> 
            }    
            
            </div>
          
            <div className='frame-143'>
            <p className='frame-143-text'>{texto}</p>
            </div>
            
        </div>
    
    </button>


)


}

export default CategoryCard