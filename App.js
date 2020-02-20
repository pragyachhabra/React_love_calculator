import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput,Appbar,Button} from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

class App extends React.Component {
  state={
    fname:'',
    sname:'',
    result:'loading'
  }
  submitit(){
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
    {
      headers:{"x-rapidapi-host": "love-calculator.p.rapidapi.com",
    	"x-rapidapi-key": "fe2e0c8ce9mshb6ddb54fb299fa2p131ecfjsna5a06065ef06"}})
    .then(data=>data.json())
    .then(data2=>{console.log(data2);
    this.setState({
      result:data2
    })})
  }
  render() {
  return (
    <View style={styles.container}>
       <Appbar.Header>
     
        <Appbar.Content
          title="Title"
          style={{alignItems:"center"}}
     
        />

      </Appbar.Header>
        <TextInput
        label='Personal1(male)'
        value={this.state.fname}
        onChangeText={text => this.setState({ fname:text })}
      />
         <TextInput
        label='Personal2(female)'
        value={this.state.sname}
        onChangeText={text => this.setState({ sname:text })}
      />
        <Button icon="camera" mode="contained" onPress={this.submitit.bind(this)}>
Calculate
  </Button>
  <DisplayLove data={ this.state.result}/>
    </View>
  );
}
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
