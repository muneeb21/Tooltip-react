import React from 'react';

class Item extends React.Component{
    constructor(props) {
        super(props);
        // defining the state at first
        this.state = 
        { hover: false,
          topDirection:true,
          bottomDirection:false
        }
      }
    //   The event handler when mouse hovers on the button
      handleMouseIn=()=> {
        this.setState({ hover: true })
      }
    //   The event handler when mouse hovers out of the button
      handleMouseOut=()=> {
        this.setState({ hover: false })
      }
    // Event handlers to decide the position of tooltip
      handletopDirection=()=>{
          this.setState({topDirection:true,bottomDirection:false})
      }
      handlebottomDirection=()=>{
        this.setState({topDirection:false,bottomDirection:true})
    }
     
    render(){
        
        
        const tooltipStyle2 = {
        height: 40,
        width: 80,
        borderRadius: 4,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        backgroundColor:"gray",
        color:"white",
        position:"absolute",
         top:203,
        
         //  if hover and topDirection of state are true then display 
            display: this.state.hover && this.state.topDirection ? 'flex' : 'none'
          };

          const tooltipStyle1 = {
            height: 40,
        width: 80,
        borderRadius: 4,
         marginTop:5,       
        backgroundColor:"gray",
        color:"white",
        
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",

        // //  if hover and botto,Direction of state are true then display
        display: this.state.hover && this.state.bottomDirection ? 'flex' : 'none'
          };  
        

        return(
            
            <div style={styles.maindiv}>
                <div style={styles.upperdiv}>
                    
                    <div style={styles.direction} onClick={this.handletopDirection}>Top</div>
                    <div style={styles.direction} onClick={this.handlebottomDirection}>Bottom</div>
                </div>
                <div style={tooltipStyle2}>
           Top
       </div>

            <div style={styles.button}
            onMouseOver={this.handleMouseIn}
             onMouseOut={this.handleMouseOut} >
        Press
       </div>
       <div style={tooltipStyle1}>
          Bottom
       </div>
       </div>
        );
    }
}

// Styling
const styles={
    button:{
        height: 60,
        width: 100,
        borderRadius: 4,
        backgroundColor: "rgb(247, 179, 54)",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        
        

    },
    maindiv:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    },
    upperdiv:{
        marginBottom:100
    },
    direction:{
        height:27,
        width:65,
        fontSize:12,
        borderRadius:17,
        backgroundColor:"black",
        margin:3,
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
   
  }


export default Item;