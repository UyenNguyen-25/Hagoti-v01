import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

export default function Policies() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.content}>
                    <Text style={styles.headerContent}>1. Giới thiệu</Text>{"\n"}
                    Ứng dụng Lên Kế Hoạch Đi Chơi được phát triển nhằm hỗ trợ người dùng trong việc tổ chức và quản lý các kế hoạch đi chơi cá nhân hoặc nhóm.{"\n\n"}

                    <Text style={styles.headerContent}>2. Sử dụng Dịch vụ</Text>{"\n"}
                    Người dùng có thể tạo và lưu trữ các kế hoạch đi chơi. Ứng dụng không chịu trách nhiệm về việc hủy bỏ hoặc thay đổi kế hoạch mà người dùng đã thiết lập.{"\n\n"}

                    <Text style={styles.headerContent}>3. Quyền riêng tư</Text>{"\n"}
                    Chúng tôi cam kết bảo mật mọi thông tin cá nhân mà người dùng cung cấp, và chỉ sử dụng thông tin này cho mục đích cung cấp dịch vụ trong phạm vi ứng dụng.{"\n\n"}

                    <Text style={styles.headerContent}>4. Giới hạn Trách nhiệm</Text>{"\n"}
                    Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng ứng dụng, bao gồm nhưng không giới hạn ở các sự cố trong việc quản lý kế hoạch, thay đổi lộ trình, hoặc các vấn đề cá nhân.{"\n\n"}

                    <Text style={styles.headerContent}>5. Thay đổi Điều Khoản</Text>{"\n"}
                    Chúng tôi có quyền thay đổi các điều khoản này bất kỳ lúc nào mà không cần thông báo trước. Phiên bản cập nhật sẽ được hiển thị trên ứng dụng và người dùng được khuyến khích xem lại định kỳ.{"\n"}
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scroll: {
        flex: 1,
        marginBottom: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "inter"
    },
    headerContent: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: "inter-bold"
    }
});