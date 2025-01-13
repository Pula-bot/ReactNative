import { ArrowRight2 } from "iconsax-react-native";
import React from "react";
import RowComponent from "./RowComponent";
import TextComponent from "./TextComponent";
import { appColors } from "../constants/appColors";

interface Props {
    title: string;
    onPress: () => void;
}

const TagBarComponent = (props: Props) => {
    const { title, onPress } = props;

    return (
        <RowComponent
            styles={{
                marginBottom: 12,
                paddingHorizontal: 16,
            }}
            onPress={onPress}>
            <RowComponent>
                <TextComponent
                    numberOfLines={1}
                    size={18}
                    text={title}
                    flex={1}
                />
                <ArrowRight2 variant="Bold" size={14} color={appColors.gray} />
            </RowComponent>

        </RowComponent>
    );
};

export default TagBarComponent;