import React from "react"

export default function Form(){
  
const [formData, setFormData] = React.useState({
  firstName: "", lastName: "", Email: "", comments: "", isFriendly: true, favColor: ""
})


function handleChange(event){
  const{name, value, type, checked } = event.target
  setFormData(prevFormData => {
    return {...prevFormData, [name]:  type === "checkbox" ? checked : value }
  })
}

function handleSubmit(event){
event.preventDefault()
}

  return(
    <form onSubmit={handleSubmit}>
      <input
    type="text"
    placeholder="firstName"
    onChange={handleChange}
    name="firstName"
    value={formData.firstName}
    />
    <input
    type="text"
    placeholder="lastName"
    onChange={handleChange}
    name="lastName"
    value={formData.lastName}
    />
    <input
    type="text"
    placeholder="Email"
    onChange={handleChange}
    name="Email"
    value={formData.Email}
    />
    <textarea 
      placeholder="comments"
    onChange={handleChange}
    value={formData.comments}
    />
    <input
      type="checkbox"
      id="isFriendly" 
      checked={formData.isFriendly}
      onChange={handleChange}
      name="isFriendly"
    />
    <label htmlFor="isFriendly">Are you friendly?</label> <div></div>
    <label htmlFor="favColor"> WHAT IS YOUR FAVOURITE COLOR?</label>
    <select
    id="favColor"
    value={formData.favColor}
    name="favColor"
    >
<option value="">-- Choose --</option>
<option value="red">Red</option>
<option value="orange">Orange</option>
<option value="yellow">Yellow</option>
<option value="blue">Blue</option>
<option value="green">Green</option>
<option value="violet">Violet</option>
    </select>

    </form>
    
  )
}

