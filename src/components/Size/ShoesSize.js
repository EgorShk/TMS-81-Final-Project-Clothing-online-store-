import React from 'react';
import './ShoesSize.css'

const ShoesSize =()=> {
    return(<div className='ShoesSize'>
      <form action='formdata' method='post' name='form1'>
      <p><select name='list_type_shoes'>
      <option>Размер</option>  
      <option>41</option>
      <option>40</option>
      <option>41</option>
      <option>42</option>
      <option>42.5</option>
      <option>43</option>
      <option>44</option>
      <option>45</option>
      </select></p>
</form>
    </div>
    )
  }

  export default ShoesSize;

