import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('handleParticipantAdd');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 28 de Maio de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Ednan Dias" />
      <Participant name="Vitor Montorini" />
      <Participant name="Bianca Pazin" />
      <Participant name="Beatryz Pazin" />
    </View>
  );
}
