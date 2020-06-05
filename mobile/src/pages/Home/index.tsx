import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import Axios from 'axios';

const Home: React.FC = () => {
	const navigation = useNavigation();

	const [ufs, setUfs] = useState<string[]>([]);
	const [cities, setCities] = useState<Array<string>>([]);

	const [selectedUf, setSelectedUf] = useState<string>("0");
	const [selectedCity, setSelectedCity] = useState<string>("0");

	useEffect(() => {
		Axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
			.then(response => {
				const ufsInitials = response.data.map((uf: any) => uf.sigla);
				setUfs(ufsInitials);
			})
	}, [])

	useEffect(() => {
		if (selectedUf != "0") {
			Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
				.then(response => {
					const citiesName = response.data.map((city: any) => city.nome);
					setCities(citiesName);
				})
		} else {
			setCities([]);
		}
	}, [selectedUf])

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : undefined}>
			<ImageBackground
				source={require("../../assets/home-background.png")}
				style={styles.container}
				imageStyle={{
					width: 274,
					height: 368
				}}>
				<View style={styles.main}>
					<Image
						source={require("../../assets/logo.png")}
					/>
					<Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
					<Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
				</View>

				<View style={styles.footer}>
					<RNPickerSelect
						value={selectedUf}
						onValueChange={value => setSelectedUf(value)}
						Icon={() => (<Icon name="chevron-down" size={22} style={{ marginTop: 20, marginRight: 16 }} />)}
						style={{
							viewContainer: styles.input,
						}}
						placeholder={{
							label: "Selecione o estado...",
							value: "0",
							color: "#ccc"
						}}
						items={ufs.map(uf => ({
							label: uf,
							value: uf,
							color: "#000"
						}))}
					/>

					<RNPickerSelect
						value={selectedCity}
						onValueChange={value => setSelectedCity(value)}
						Icon={() => (<Icon name="chevron-down" size={22} style={{ marginTop: 20, marginRight: 16 }} />)}
						style={{
							viewContainer: styles.input,
						}}
						placeholder={{
							label: "Selecione a cidade...",
							value: "0",
							color: "#ccc"
						}}
						items={cities.map(city => ({
							label: city,
							value: city,
							color: "#000"
						}))}
					/>

					<RectButton
						onPress={() => navigation.navigate("Points", { uf: selectedUf, city: selectedCity })}
						style={styles.button}>
						<View style={styles.buttonIcon}>
							<Icon name="arrow-right" color="white" size={24} />
						</View>
						<Text style={styles.buttonText}>
							Entrar
						</Text>
					</RectButton>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		backgroundColor: "#f0f0f5"
	},

	main: {
		flex: 1,
		justifyContent: 'center',
	},

	title: {
		color: '#322153',
		fontSize: 32,
		fontFamily: 'Ubuntu_700Bold',
		maxWidth: 260,
		marginTop: 64,
	},

	description: {
		color: '#6C6C80',
		fontSize: 16,
		marginTop: 16,
		fontFamily: 'Roboto_400Regular',
		maxWidth: 260,
		lineHeight: 24,
	},

	footer: {},

	select: {},

	input: {
		backgroundColor: '#FFF',
		borderRadius: 10,
		marginBottom: 8,
		paddingHorizontal: 10,
		paddingVertical: 4,
		fontSize: 16,
	},

	button: {
		backgroundColor: '#34CB79',
		height: 60,
		flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
		marginTop: 8,
	},

	buttonIcon: {
		height: 60,
		width: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		justifyContent: 'center',
		alignItems: 'center'
	},

	buttonText: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FFF',
		fontFamily: 'Roboto_500Medium',
		fontSize: 16,
	}
});