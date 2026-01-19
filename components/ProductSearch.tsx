import { View, TextInput } from 'react-native'
import { Search } from 'lucide-react-native'

const ProductSearch = () => {
  return (
    <View className='bg-slate-300 rounded-2xl my-12 flex-row gap-8 items-center py-2 px-1'>
      <Search />
      <TextInput placeholder='Search products...' className='' />
    </View>
  )
}

export default ProductSearch