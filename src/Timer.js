import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }
 
  onChange(e) {
     this.setState({
       [e.target.name]: e.target.value,
     });
    }

    changeTitle(e){
        this.setState({
          globalTitle: `Mon Formulaire - ${this.state.title}`
        });
    }

 submitForm(e) {
     e.preventDefault();
     const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };

     const url = "http://campus-bordeaux.ovh:3001/api/quests/employees/";

     fetch(url, config)
     .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un titre');
      });
    }

    componentDidMount() {
        console.log('Formulaire rendu');
    }

    componentDidUpdate() {
        console.log('Titre changé');
    }
    



render() {
    return (
<div className="Timer">
 <h1>{this.state.globalTitle}</h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Informations</legend>
     <div className="form-data">
       <label htmlFor="title">Title</label>
       <input
         type="text"
         id="title"
         name="title"
         onChange={this.onChange}
         value={this.state.title}
       />
     </div>

     <hr />
     <div className="form-data">
       <input onClick={this.changeTitle} type="submit" value="Validation" />
     </div>
   </fieldset>
 </form>
</div>
    )
}





}



export default Timer;