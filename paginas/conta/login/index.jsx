import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ContaServico from '../../../servicos/contaServico';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    const salvar = async (value) => {
        await AsyncStorage.setItem('@hwt-codetur', value);
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          senha: ''
        },
        onSubmit: values => {
            ContaServico.logar(values)
            .then(resultado => {
                console.log(`Resultado ${JSON.stringify(resultado.data)}`)
                formik.setSubmitting(false);
                if(resultado.data.sucesso){
                    //salvar local storage
                    salvar(resultado.data.data.token);
                    navigation.push('Autenticado')
                } else {
                    Alert.alert(resultado.data.mensagem);
                }
            })
            .catch(error => console.error(error));
        },
        validationSchema : Yup.object().shape({
            email: Yup.string()
              .email('Email inválido')         
              .required('Campo Email Obrigatório'),
            senha: Yup.string()
              .required('Campo Senha Obrigatório'),
          })
    });


    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>CODETUR</Text>

            <TextInput
                style={styles.input}
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                name="email"
                placeholder="Digite seu email"
            />
            {formik.errors.email  && formik.touched.email ? (<Text style={styles.error}>{formik.errors.email}</Text>) : null}

            <TextInput
                style={styles.input}
                value={formik.values.senha}
                onChange={formik.handleChange('senha')}
                name="senha"
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />
            {formik.errors.senha  && formik.touched.senha ? (<Text style={styles.error}>{formik.errors.senha}</Text>) : null}
 
            <TouchableOpacity
                style={styles.button}
                onPress={formik.handleSubmit}
                disabled={formik.isSubmitting}
            >
                <Text style={styles.textButton} >ENTRAR</Text>
            </TouchableOpacity>
 
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input : {
        width: '90%',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop : 20,
        padding: 5,
        borderRadius: 6
    },
    button : {
        backgroundColor : 'black',
        width: '90%',
        padding : 10,
        borderRadius: 6,
        marginTop : 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton : {
        color : 'white'
    },
    titulo : {
        fontSize : 48,
        color : 'red'
    },
    error : {
        textAlign : 'left',
        color : 'red'
    }
  });


export default Login;