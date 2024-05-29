import { useEffect, useState } from 'react';
import { Text, View, Pressable, Alert, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';

import { styles } from './src/style/style';

export default function App() {
  const [recordingAudio, setRecordingAudio] = useState(null);
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recordingFileURI, setRecordingFileURI] = useState('');

  useEffect(() => {
    //solicita permissao para utiliza o recurso de audio do dispositivo
    requestPermission()
    //console.log(permissionRequest)
  }, []);

  async function handleRecordingStart() {
    if (permissionResponse.granted) {
      try {
        const { recording } = await Audio.Recording.createAsync();
        //console.log(recording)
        setRecordingAudio(recording);
      } catch (error) {
        console.log(error);
        Alert.alert('Erro ao gravar', 'Não foi possivel iniciar a gravação!');
      }
    }
  }

  //função responsavel por parar a gravação
  async function handleRecordingStop() {
    try {
      console.log(recordingAudio);
      if (recordingAudio) {
        await recordingAudio.stopAndUnloadAsync();
        const fileURI = recordingAudio.getURI();
        console.log('Parou a gravação =>', fileURI);
        setRecordingFileURI(fileURI);
        setRecordingAudio(null);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao pausar', 'Não foi possivel parar a gravação!');
    }
  }

  //função responsavel por reproduzir audio gravado
  async function hanldeAudioPlay() {
    const { sound } = await Audio.Sound.createAsync({ uri: recordingFileURI }, { shouldPlay: true });
    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>

      <Pressable
        onPressIn={handleRecordingStart}
        onPressOut={handleRecordingStop}
        style={[styles.button, recordingAudio && styles.recording]}
      >

        <MaterialIcons name='mic' size={44} color='#212121' />

      </Pressable>

      {recordingAudio &&

        <Text style={styles.label}>Gravando</Text>

      }
      {recordingFileURI &&

        <Button
          onPress={hanldeAudioPlay}
          title='Ouvir audio'
        />

      }

    </View>
  );
}
