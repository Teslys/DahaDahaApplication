import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import DataActions from '../actions/DataActions';

const initialState = {
  selectedWindow: null,
  windowsData: [
    {
      title: 'Sprite',
      id: 1,
      logo: require('../../assets/windows/sprite.png'),
      largeLogo: require('../../assets/windows/big/sprite.png'),
    },
    {
      title: 'Burger King',
      id: 2,
      logo: require('../../assets/windows/burgerking.png'),
      largeLogo: require('../../assets/windows/big/burgerking.png'),
    },
    {
      title: 'Trendyol',
      id: 3,
      logo: require('../../assets/windows/trendyol.png'),
      largeLogo: require('../../assets/windows/big/trendyol.png'),
    },
  ],
  carouselData: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Sprite kapakları Coca-Cola +Coffee kazandırıyor!',
      image:
        'https://www.cocacolaep.com/assets/Uploads/resources/Sprite-Lets-Be-Clear-2.png',
      categoryId: 1,
      color: '#009639',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ipsum urna. Phasellus vitae pellentesque lectus, hendrerit rhoncus urna. Etiam egestas malesuada risus, sed consectetur enim faucibus ac. Praesent tempor lacus vitae lectus fermentum, eget fermentum massa blandit. Fusce ultrices ac diam non cursus. Aenean nec faucibus magna. Quisque at mauris pretium, luctus nibh et, rutrum massa.

      Cras condimentum purus dolor, non iaculis est maximus sit amet. Sed neque libero, rutrum vel consequat id, convallis eget mauris. Nullam sem elit, porttitor nec odio pulvinar, rhoncus consectetur enim. Proin sit amet massa ullamcorper risus vestibulum euismod. Nam ut orci porttitor odio tempus faucibus. Morbi pellentesque laoreet augue vitae pretium. Ut posuere mi eget elit vestibulum feugiat. Donec vel placerat nunc, vitae viverra mauris. Ut nibh augue, sagittis ac bibendum eu, vehicula et elit. Vestibulum pharetra, elit sit amet vestibulum blandit, velit odio fermentum leo, nec tincidunt lectus neque eu libero.
      
      Mauris ut mauris nec lectus tincidunt pretium non a nibh. Nam eleifend iaculis erat, ut venenatis orci. Sed feugiat porta nibh sagittis venenatis. Nam vitae molestie nisi, in sagittis mi. Aliquam sed augue sollicitudin, faucibus nisi dignissim, vehicula orci. Sed cursus a urna posuere mollis. Praesent nulla sem, laoreet a erat in, fringilla viverra nunc. Mauris lobortis blandit eros congue sagittis. Donec dignissim auctor est, a tincidunt sem feugiat faucibus. Quisque a ligula sem. Suspendisse non nulla ornare, bibendum purus nec, egestas magna. Integer bibendum sed ligula at dignissim. Sed dictum felis nec nisi porta ultricies. Integer lectus arcu, iaculis nec ex vitae, sollicitudin molestie ligula. Aliquam ut aliquet urna, egestas blandit eros. Donec scelerisque condimentum magna, at pulvinar neque condimentum at.
      
      Sed egestas est libero, sed faucibus justo tincidunt ac. Nulla tempus iaculis tempor. Nam venenatis, lacus ut iaculis blandit, dui urna faucibus sem, id tempor augue massa id magna. Mauris gravida diam mauris, et suscipit enim tempus et. Integer congue, augue vitae congue molestie, justo lacus congue elit, vel accumsan lacus nisl at augue. Nulla vitae finibus sapien. Phasellus sit amet diam lobortis, tincidunt nulla sit amet, venenatis est. Aenean vulputate purus id dignissim porta. Morbi auctor ut tortor eu mollis. Proin et aliquam tortor.
      
      Pellentesque tincidunt, nulla eu interdum mollis, mi tortor faucibus libero, id commodo sapien lectus ut massa. Nullam sodales ante et elit iaculis varius sed in diam. Sed eget malesuada libero, id elementum sapien. Morbi nec egestas felis. Aliquam erat volutpat. Curabitur porttitor faucibus bibendum. Phasellus bibendum interdum pharetra. Sed a maximus tellus, eu lobortis ipsum. In at sem commodo, sagittis nisl id, placerat ex. Pellentesque gravida fermentum mi elementum finibus. Curabitur mattis ipsum sit amet malesuada aliquam. Vestibulum quis ante interdum, aliquet quam ut, tincidunt diam. Nunc pellentesque condimentum fermentum. Fusce pulvinar vehicula tellus, ac tempor ex luctus ut.`,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-f5bd91aa97f63',
      title: 'Sprite kazandırıyor!',
      image:
        'https://www.coca-colacompany.com/content/dam/journey/au/en/private/2015/11/sprite-to-the-rescue-campaign-article-lead-full-939-456-ffefdcfc.jpg',
      categoryId: 1,
      color: '#009639',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ipsum urna. Phasellus vitae pellentesque lectus, hendrerit rhoncus urna. Etiam egestas malesuada risus, sed consectetur enim faucibus ac. Praesent tempor lacus vitae lectus fermentum, eget fermentum massa blandit. Fusce ultrices ac diam non cursus. Aenean nec faucibus magna. Quisque at mauris pretium, luctus nibh et, rutrum massa.

      Cras condimentum purus dolor, non iaculis est maximus sit amet. Sed neque libero, rutrum vel consequat id, convallis eget mauris. Nullam sem elit, porttitor nec odio pulvinar, rhoncus consectetur enim. Proin sit amet massa ullamcorper risus vestibulum euismod. Nam ut orci porttitor odio tempus faucibus. Morbi pellentesque laoreet augue vitae pretium. Ut posuere mi eget elit vestibulum feugiat. Donec vel placerat nunc, vitae viverra mauris. Ut nibh augue, sagittis ac bibendum eu, vehicula et elit. Vestibulum pharetra, elit sit amet vestibulum blandit, velit odio fermentum leo, nec tincidunt lectus neque eu libero.
      
      Mauris ut mauris nec lectus tincidunt pretium non a nibh. Nam eleifend iaculis erat, ut venenatis orci. Sed feugiat porta nibh sagittis venenatis. Nam vitae molestie nisi, in sagittis mi. Aliquam sed augue sollicitudin, faucibus nisi dignissim, vehicula orci. Sed cursus a urna posuere mollis. Praesent nulla sem, laoreet a erat in, fringilla viverra nunc. Mauris lobortis blandit eros congue sagittis. Donec dignissim auctor est, a tincidunt sem feugiat faucibus. Quisque a ligula sem. Suspendisse non nulla ornare, bibendum purus nec, egestas magna. Integer bibendum sed ligula at dignissim. Sed dictum felis nec nisi porta ultricies. Integer lectus arcu, iaculis nec ex vitae, sollicitudin molestie ligula. Aliquam ut aliquet urna, egestas blandit eros. Donec scelerisque condimentum magna, at pulvinar neque condimentum at.
      
      Sed egestas est libero, sed faucibus justo tincidunt ac. Nulla tempus iaculis tempor. Nam venenatis, lacus ut iaculis blandit, dui urna faucibus sem, id tempor augue massa id magna. Mauris gravida diam mauris, et suscipit enim tempus et. Integer congue, augue vitae congue molestie, justo lacus congue elit, vel accumsan lacus nisl at augue. Nulla vitae finibus sapien. Phasellus sit amet diam lobortis, tincidunt nulla sit amet, venenatis est. Aenean vulputate purus id dignissim porta. Morbi auctor ut tortor eu mollis. Proin et aliquam tortor.
      
      Pellentesque tincidunt, nulla eu interdum mollis, mi tortor faucibus libero, id commodo sapien lectus ut massa. Nullam sodales ante et elit iaculis varius sed in diam. Sed eget malesuada libero, id elementum sapien. Morbi nec egestas felis. Aliquam erat volutpat. Curabitur porttitor faucibus bibendum. Phasellus bibendum interdum pharetra. Sed a maximus tellus, eu lobortis ipsum. In at sem commodo, sagittis nisl id, placerat ex. Pellentesque gravida fermentum mi elementum finibus. Curabitur mattis ipsum sit amet malesuada aliquam. Vestibulum quis ante interdum, aliquet quam ut, tincidunt diam. Nunc pellentesque condimentum fermentum. Fusce pulvinar vehicula tellus, ac tempor ex luctus ut.`,
    },
    {
      id: '5863a0f-3da1-471f-bd96-145571e29d72',
      title: 'Burger king doyuruyor!',
      image:
        'https://www.pazarlamasyon.com/wp-content/uploads/2020/05/social-distancing-whopper-final-hed-2020.jpg',
      categoryId: 2,
      color: '#F2A900',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ipsum urna. Phasellus vitae pellentesque lectus, hendrerit rhoncus urna. Etiam egestas malesuada risus, sed consectetur enim faucibus ac. Praesent tempor lacus vitae lectus fermentum, eget fermentum massa blandit. Fusce ultrices ac diam non cursus. Aenean nec faucibus magna. Quisque at mauris pretium, luctus nibh et, rutrum massa.

      Cras condimentum purus dolor, non iaculis est maximus sit amet. Sed neque libero, rutrum vel consequat id, convallis eget mauris. Nullam sem elit, porttitor nec odio pulvinar, rhoncus consectetur enim. Proin sit amet massa ullamcorper risus vestibulum euismod. Nam ut orci porttitor odio tempus faucibus. Morbi pellentesque laoreet augue vitae pretium. Ut posuere mi eget elit vestibulum feugiat. Donec vel placerat nunc, vitae viverra mauris. Ut nibh augue, sagittis ac bibendum eu, vehicula et elit. Vestibulum pharetra, elit sit amet vestibulum blandit, velit odio fermentum leo, nec tincidunt lectus neque eu libero.
      
      Mauris ut mauris nec lectus tincidunt pretium non a nibh. Nam eleifend iaculis erat, ut venenatis orci. Sed feugiat porta nibh sagittis venenatis. Nam vitae molestie nisi, in sagittis mi. Aliquam sed augue sollicitudin, faucibus nisi dignissim, vehicula orci. Sed cursus a urna posuere mollis. Praesent nulla sem, laoreet a erat in, fringilla viverra nunc. Mauris lobortis blandit eros congue sagittis. Donec dignissim auctor est, a tincidunt sem feugiat faucibus. Quisque a ligula sem. Suspendisse non nulla ornare, bibendum purus nec, egestas magna. Integer bibendum sed ligula at dignissim. Sed dictum felis nec nisi porta ultricies. Integer lectus arcu, iaculis nec ex vitae, sollicitudin molestie ligula. Aliquam ut aliquet urna, egestas blandit eros. Donec scelerisque condimentum magna, at pulvinar neque condimentum at.
      
      Sed egestas est libero, sed faucibus justo tincidunt ac. Nulla tempus iaculis tempor. Nam venenatis, lacus ut iaculis blandit, dui urna faucibus sem, id tempor augue massa id magna. Mauris gravida diam mauris, et suscipit enim tempus et. Integer congue, augue vitae congue molestie, justo lacus congue elit, vel accumsan lacus nisl at augue. Nulla vitae finibus sapien. Phasellus sit amet diam lobortis, tincidunt nulla sit amet, venenatis est. Aenean vulputate purus id dignissim porta. Morbi auctor ut tortor eu mollis. Proin et aliquam tortor.
      
      Pellentesque tincidunt, nulla eu interdum mollis, mi tortor faucibus libero, id commodo sapien lectus ut massa. Nullam sodales ante et elit iaculis varius sed in diam. Sed eget malesuada libero, id elementum sapien. Morbi nec egestas felis. Aliquam erat volutpat. Curabitur porttitor faucibus bibendum. Phasellus bibendum interdum pharetra. Sed a maximus tellus, eu lobortis ipsum. In at sem commodo, sagittis nisl id, placerat ex. Pellentesque gravida fermentum mi elementum finibus. Curabitur mattis ipsum sit amet malesuada aliquam. Vestibulum quis ante interdum, aliquet quam ut, tincidunt diam. Nunc pellentesque condimentum fermentum. Fusce pulvinar vehicula tellus, ac tempor ex luctus ut.`,
    },
    {
      id: '58694a0f-41-471f-bd96-145571e29d72',
      title: 'Burger king kazandırıyor!',
      image:
        'https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/WHOPPER_SWAPPER_STRAIGHT_EQUALS_V8.jpeg',
      categoryId: 2,
      color: '#F2A900',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ipsum urna. Phasellus vitae pellentesque lectus, hendrerit rhoncus urna. Etiam egestas malesuada risus, sed consectetur enim faucibus ac. Praesent tempor lacus vitae lectus fermentum, eget fermentum massa blandit. Fusce ultrices ac diam non cursus. Aenean nec faucibus magna. Quisque at mauris pretium, luctus nibh et, rutrum massa.

      Cras condimentum purus dolor, non iaculis est maximus sit amet. Sed neque libero, rutrum vel consequat id, convallis eget mauris. Nullam sem elit, porttitor nec odio pulvinar, rhoncus consectetur enim. Proin sit amet massa ullamcorper risus vestibulum euismod. Nam ut orci porttitor odio tempus faucibus. Morbi pellentesque laoreet augue vitae pretium. Ut posuere mi eget elit vestibulum feugiat. Donec vel placerat nunc, vitae viverra mauris. Ut nibh augue, sagittis ac bibendum eu, vehicula et elit. Vestibulum pharetra, elit sit amet vestibulum blandit, velit odio fermentum leo, nec tincidunt lectus neque eu libero.
      
      Mauris ut mauris nec lectus tincidunt pretium non a nibh. Nam eleifend iaculis erat, ut venenatis orci. Sed feugiat porta nibh sagittis venenatis. Nam vitae molestie nisi, in sagittis mi. Aliquam sed augue sollicitudin, faucibus nisi dignissim, vehicula orci. Sed cursus a urna posuere mollis. Praesent nulla sem, laoreet a erat in, fringilla viverra nunc. Mauris lobortis blandit eros congue sagittis. Donec dignissim auctor est, a tincidunt sem feugiat faucibus. Quisque a ligula sem. Suspendisse non nulla ornare, bibendum purus nec, egestas magna. Integer bibendum sed ligula at dignissim. Sed dictum felis nec nisi porta ultricies. Integer lectus arcu, iaculis nec ex vitae, sollicitudin molestie ligula. Aliquam ut aliquet urna, egestas blandit eros. Donec scelerisque condimentum magna, at pulvinar neque condimentum at.
      
      Sed egestas est libero, sed faucibus justo tincidunt ac. Nulla tempus iaculis tempor. Nam venenatis, lacus ut iaculis blandit, dui urna faucibus sem, id tempor augue massa id magna. Mauris gravida diam mauris, et suscipit enim tempus et. Integer congue, augue vitae congue molestie, justo lacus congue elit, vel accumsan lacus nisl at augue. Nulla vitae finibus sapien. Phasellus sit amet diam lobortis, tincidunt nulla sit amet, venenatis est. Aenean vulputate purus id dignissim porta. Morbi auctor ut tortor eu mollis. Proin et aliquam tortor.
      
      Pellentesque tincidunt, nulla eu interdum mollis, mi tortor faucibus libero, id commodo sapien lectus ut massa. Nullam sodales ante et elit iaculis varius sed in diam. Sed eget malesuada libero, id elementum sapien. Morbi nec egestas felis. Aliquam erat volutpat. Curabitur porttitor faucibus bibendum. Phasellus bibendum interdum pharetra. Sed a maximus tellus, eu lobortis ipsum. In at sem commodo, sagittis nisl id, placerat ex. Pellentesque gravida fermentum mi elementum finibus. Curabitur mattis ipsum sit amet malesuada aliquam. Vestibulum quis ante interdum, aliquet quam ut, tincidunt diam. Nunc pellentesque condimentum fermentum. Fusce pulvinar vehicula tellus, ac tempor ex luctus ut.`,
    },
    {
      id: '58694a0f-3da1-471f-b126-145571e29d72',
      title: '2,5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!',
      image:
        'https://www.yorumla.net/wp-content/uploads/2023/04/20221007-18.jpg',
      categoryId: 3,
      color: '#ff7f00',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ipsum urna. Phasellus vitae pellentesque lectus, hendrerit rhoncus urna. Etiam egestas malesuada risus, sed consectetur enim faucibus ac. Praesent tempor lacus vitae lectus fermentum, eget fermentum massa blandit. Fusce ultrices ac diam non cursus. Aenean nec faucibus magna. Quisque at mauris pretium, luctus nibh et, rutrum massa.

      Cras condimentum purus dolor, non iaculis est maximus sit amet. Sed neque libero, rutrum vel consequat id, convallis eget mauris. Nullam sem elit, porttitor nec odio pulvinar, rhoncus consectetur enim. Proin sit amet massa ullamcorper risus vestibulum euismod. Nam ut orci porttitor odio tempus faucibus. Morbi pellentesque laoreet augue vitae pretium. Ut posuere mi eget elit vestibulum feugiat. Donec vel placerat nunc, vitae viverra mauris. Ut nibh augue, sagittis ac bibendum eu, vehicula et elit. Vestibulum pharetra, elit sit amet vestibulum blandit, velit odio fermentum leo, nec tincidunt lectus neque eu libero.
      
      Mauris ut mauris nec lectus tincidunt pretium non a nibh. Nam eleifend iaculis erat, ut venenatis orci. Sed feugiat porta nibh sagittis venenatis. Nam vitae molestie nisi, in sagittis mi. Aliquam sed augue sollicitudin, faucibus nisi dignissim, vehicula orci. Sed cursus a urna posuere mollis. Praesent nulla sem, laoreet a erat in, fringilla viverra nunc. Mauris lobortis blandit eros congue sagittis. Donec dignissim auctor est, a tincidunt sem feugiat faucibus. Quisque a ligula sem. Suspendisse non nulla ornare, bibendum purus nec, egestas magna. Integer bibendum sed ligula at dignissim. Sed dictum felis nec nisi porta ultricies. Integer lectus arcu, iaculis nec ex vitae, sollicitudin molestie ligula. Aliquam ut aliquet urna, egestas blandit eros. Donec scelerisque condimentum magna, at pulvinar neque condimentum at.
      
      Sed egestas est libero, sed faucibus justo tincidunt ac. Nulla tempus iaculis tempor. Nam venenatis, lacus ut iaculis blandit, dui urna faucibus sem, id tempor augue massa id magna. Mauris gravida diam mauris, et suscipit enim tempus et. Integer congue, augue vitae congue molestie, justo lacus congue elit, vel accumsan lacus nisl at augue. Nulla vitae finibus sapien. Phasellus sit amet diam lobortis, tincidunt nulla sit amet, venenatis est. Aenean vulputate purus id dignissim porta. Morbi auctor ut tortor eu mollis. Proin et aliquam tortor.
      
      Pellentesque tincidunt, nulla eu interdum mollis, mi tortor faucibus libero, id commodo sapien lectus ut massa. Nullam sodales ante et elit iaculis varius sed in diam. Sed eget malesuada libero, id elementum sapien. Morbi nec egestas felis. Aliquam erat volutpat. Curabitur porttitor faucibus bibendum. Phasellus bibendum interdum pharetra. Sed a maximus tellus, eu lobortis ipsum. In at sem commodo, sagittis nisl id, placerat ex. Pellentesque gravida fermentum mi elementum finibus. Curabitur mattis ipsum sit amet malesuada aliquam. Vestibulum quis ante interdum, aliquet quam ut, tincidunt diam. Nunc pellentesque condimentum fermentum. Fusce pulvinar vehicula tellus, ac tempor ex luctus ut.`,
    },
  ],
};
export const DataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: DataActions,
});

export const {selectWindow} = DataSlice.actions;

export default DataSlice.reducer;
