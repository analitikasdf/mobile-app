import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { selectCartData } from '../screens/CartScrreen/CartSlice';
import { useSelector } from 'react-redux';

export const Delivery = () => {
	const cartData = useSelector(selectCartData);
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			city: ''
		}
	});
	const onSubmit = data => console.log(data);

	let total = cartData.reduce((sum, item) => {
		return sum + item.price * item.count;
	}, 0);

	totalItem = <Text h4>Итого: {total}</Text>;
	return (
		<View>
			{total ? totalItem : null}
			<Text h2>Доставка</Text>
			<Text h4>Условия доставкаи все такое отправка за полярный круг и все такое</Text>
			<Text h4>Укажите Ваши данные</Text>

			<View>
				<Controller
					control={control}
					rules={{
						required: true
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Имя"
							errorMessage={errors.firstName && <Text style={{ color: 'red' }}>Заполните это поле</Text>}
						/>
					)}
					name="firstName"
				/>
				{/* {errors.firstName && <Text>This is required.</Text>} */}

				<Controller
					control={control}
					rules={{
						required: true
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							style={{ borderColor: 'red' }}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Фамилия"
							errorMessage={errors.lastName && <Text style={{ color: 'red' }}>Заполните это поле</Text>}
						/>
					)}
					name="lastName"
				/>
				{/* {errors.lastName && <Text>This is required.</Text>} */}

				<Controller
					control={control}
					rules={{
						required: true
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Телефон"
							errorMessage={errors.phone && <Text style={{ color: 'red' }}>Заполните это поле</Text>}
						/>
					)}
					name="phone"
				/>
				{/* {errors.phone && <Text>This is required.</Text>} */}

				<Controller
					control={control}
					rules={{
						required: true
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Email"
							errorMessage={errors.email && <Text style={{ color: 'red' }}>Заполните это поле</Text>}
						/>
					)}
					name="email"
				/>
				{/* {errors.email && <Text>This is required.</Text>} */}

				<Controller
					control={control}
					rules={{
						required: true
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Город"
							errorMessage={errors.city && <Text style={{ color: 'red' }}>Заполните это поле</Text>}
						/>
					)}
					name="city"
				/>
				{/* {errors.city && <Text>This is required.</Text>} */}

				<Button title="Заказать" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20
	}
});
