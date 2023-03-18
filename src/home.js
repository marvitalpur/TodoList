import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState();

  const addNote = () => {
    if (note.length !== 0) {
      var notesCpy = notes;
      notesCpy.push(note);
      setNotes(notesCpy);
      setNote('');
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Take your Notes</Text>
      <View style={styles.form}>
        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Enter the task"
          style={styles.field}
        />
        <View>
          <TouchableOpacity onPress={addNote}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {notes.length === 0 ? (
        <Text style={{fontSize: 28, marginTop: 20, textAlign: 'center'}}>
          No Task added..
        </Text>
      ) : (
        <View>
          {notes.map((note, index) => (
            <Text
              key={index}
              style={{
                margin: 16,
                borderRadius: 40,
                padding: 10,
                fontSize: 22,
                elevation: 4,
                backgroundColor: 'white',
              }}>
              {note}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    marginVertical: 40,
    width: deviceWidth,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    textShadowColor: 'blue',
    textShadowRadius: 2,
  },
  field: {
    borderColor: 'black',
    borderWidth: 1,
    width: 3 * (deviceWidth / 4),
    borderRadius: 40,
    paddingLeft: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    fontSize: 28,
    height: 50,
    width: 50,
    textAlign: 'center',
    backgroundColor: 'gray',
    borderRadius: 50,
    paddingTop: 4,
  },
});

export default Home;
