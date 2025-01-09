import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import { useState } from "react"

export function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    
    function handleParticipantAdd() {
      if(participants.includes('Rodrigo')) {
        Alert.alert('Participante já adicionado', 'Já existe um participante com esse nome')
        return
      }
      const newParticipant = 'Rodrigo'
      setParticipants([...participants, newParticipant])
    }

    function handleParticipantRemove(name: string) {
      Alert.alert('Remover participante', `Tem certeza que quer remover ${name}`, [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => Alert.alert('Removido!')
        }
      ])
    }
  return (
    <View style={styles.container}>
      <Text key='1' style={styles.eventName}>Nome do evento</Text>
      <Text key='2' style={styles.eventDate}>Terça, 06 de Janeiro de 2025</Text>

        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Digite aqui seu e-mail" placeholderTextColor='#6b6b6b'/>

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <FlatList 
          data={participants}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Participant name={item} onRemove={() => handleParticipantRemove(item)}/>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => 
              <Text style={styles.emptyList}>
                Nenhum participante adicionado!
              </Text>
            }
        />
    </View>
  )
}