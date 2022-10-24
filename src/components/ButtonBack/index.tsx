import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
import { propsStack } from "../../services/types";
import { styles } from "./styles";

export function ButtonBack() {
    const navigation = useNavigation<propsStack>();
    return(
        <View style={{ width: 42, height: 42, justifyContent: 'center' }}>
            <View style={{  }}>
                <Pressable onPress={() => navigation.goBack()} style={styles.buttonBack}>
                    <Icons name='chevron-back' size={28} color="#000" />
                </Pressable>
            </View>
        </View>
    );
}