import React from 'react';
import { View, Modal, Pressable } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { toggleModalProductList, initialCategory, selectCategories } from '../../screens/CatalogScreen/CatalogSlice';
import { selectSliderCategory } from '../../screens/HomeScreen/HomeScreenSlice';
import { useSelector, useDispatch } from 'react-redux';

import { width } from '../../api/Kit';

export const SlidersHomeScreen = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const category = useSelector(selectCategories);
	const sliderCategory = [];
	category.forEach(i => {
		if (i.show_on_slider === true) {
			sliderCategory.push(i);
		}
	});

	const action = i => {
		navigation.navigate('Catalog');
		dispatch(toggleModalProductList());
		dispatch(initialCategory(i));
		console.log(i);
	};

	const arr = [
		// {
		// 	id: '1',
		// 	header: 'Акции',
		// 	slides: sliderCategory
		// }
		// {
		// 	id: '2',
		// 	header: 'Акции',
		// 	slides: [
		// 		{ id: '13', name: 'name1', img: '' },
		// 		{ id: '23', name: 'name2', img: '' },
		// 		{ id: '33', name: 'name3', img: '' }
		// 	]
		// },
		// {
		// 	id: '3',
		// 	header: 'Акции',
		// 	slides: [
		// 		{ id: '12', name: 'name1', img: '' },
		// 		{ id: '22', name: 'name2', img: '' },
		// 		{ id: '32', name: 'name3', img: '' }
		// 	]
		// },
		// {
		// 	id: '4',
		// 	header: 'Акции',
		// 	slides: [
		// 		{ id: '11', name: 'name1111', img: '', link: 'выпечка' },
		// 		{ id: '21', name: 'name22', img: '' },
		// 		{ id: '31', name: 'name3', img: '' }
		// 	]
		// }
	];
	console.log(arr);

	const ItemSlider = ({ header, slides }) => {
		return (
			<>
				<Text h2 style={tw.style('text-center', 'py-5')}>
					{header}
				</Text>
				<Swiper
					nextButton={<Text>123</Text>}
					showsButtons={true}
					loop={false}
					style={tw.style({ height: (width * 2) / 3 })}
				>
					{slides.map(i => (
						<View key={i.id} style={tw.style('flex-1', 'items-center', 'justify-center', 'bg-white')}>
							<Image
								style={tw.style('m-0.5', 'p-2', 'rounded-2xl', 'justify-center', {
									height: (width * 2) / 3,
									width: width
								})}
								onPress={() => action(i.name)}
								//TODO:поставить заглушку
								source={{
									uri: i.image
										? `https://test.cafekolhida.ru${i?.image?.url}`
										: `https://test.cafekolhida.ru//uploads/hot_dishes_1cd9b0d8d6.jpg`
								}}
							>
								<Text style={tw.style('text-center')}>{i.name}</Text>
							</Image>
						</View>
						// <View key={i.id}>
						// 	<Image
						// 		style={tw.style('m-0.5', 'p-2', 'rounded-2xl', 'justify-end', {
						// 			height: width,
						// 			width: width
						// 		})}
						// 		onPress={() => action(i.link)}
						// 		// source={{ uri: 'https://test.cafekolhida.ru/' + item.image.url }}
						// 	></Image>
						// 	<Text style={tw.style('text-center', { fontSize: 22 })}>{i.name}</Text>
						// </View>
					))}
				</Swiper>
			</>
		);
	};

	// const listSliders = arr.map(item => {
	// 	return <ItemSlider key={item.id} header={item.header} slides={item.slides} />;
	// });

	return (
		<View style={tw.style('mb-10', 'flex-1')}>
			<ItemSlider slides={sliderCategory} />
		</View>
	);
	// return null;
};
