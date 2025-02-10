import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload';
const UPLOAD_PRESET = 'your_upload_preset';

const EditProfileScreen = ({ route }) => {
  const { user } = route.params;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [avatar, setAvatar] = useState(user.avatar);
  const [otp, setOtp] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  
  // Chọn ảnh và tải lên Cloudinary
  const handleChooseImage = async () => {
    const options = { mediaType: 'photo', quality: 1 };
    launchImageLibrary(options, async (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Lỗi', 'Không thể chọn ảnh');
        return;
      }
      const imageUri = response.assets[0].uri;
      const uploadedUrl = await uploadImageToCloudinary(imageUri);
      if (uploadedUrl) setAvatar(uploadedUrl);
    });
  };

  // Upload ảnh lên Cloudinary
  const uploadImageToCloudinary = async (imageUri) => {
    const formData = new FormData();
    formData.append('file', { uri: imageUri, type: 'image/jpeg', name: 'avatar.jpg' });
    formData.append('upload_preset', UPLOAD_PRESET);
    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      return response.data.secure_url;
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể tải ảnh lên Cloudinary');
      return null;
    }
  };

  // Gửi OTP xác nhận email
  const sendOtp = async () => {
    try {
      const response = await axios.post('/api/send-otp', { email });
      if (response.data.success) setShowOtpModal(true);
      else Alert.alert('Lỗi', 'Không thể gửi OTP');
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể gửi OTP');
    }
  };

  // Xác thực OTP
  const verifyOtp = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { email, otp });
      if (response.data.success) {
        setShowOtpModal(false);
        updateProfile(); // Sau khi xác nhận OTP thì cập nhật profile
      } else {
        Alert.alert('Lỗi', 'OTP không đúng');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'OTP không hợp lệ');
    }
  };

  // Cập nhật thông tin người dùng
  const updateProfile = async () => {
    try {
      const response = await axios.put('/api/update-profile', { name, email, phone, avatar });
      if (response.data.success) Alert.alert('Thành công', 'Cập nhật profile thành công');
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể cập nhật profile');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chỉnh sửa Profile</Text>
      <Image source={{ uri: avatar }} style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }} />
      <Button title="Chọn ảnh" onPress={handleChooseImage} />
      <TextInput placeholder="Tên" value={name} onChangeText={setName} style={{ marginTop: 10 }} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ marginTop: 10 }} />
      <Button title="Gửi OTP xác nhận email" onPress={sendOtp} />
      <TextInput placeholder="Số điện thoại" value={phone} onChangeText={setPhone} style={{ marginTop: 10 }} />
      <Button title="Cập nhật Profile" onPress={() => setShowOtpModal(true)} style={{ marginTop: 20 }} />
      
      {/* Modal nhập OTP */}
      <Modal visible={showOtpModal} transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Nhập OTP:</Text>
            <OTPInputView pinCount={6} autoFocusOnLoad code={otp} onCodeChanged={setOtp} onCodeFilled={verifyOtp} />
            <Button title="Xác nhận OTP" onPress={verifyOtp} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfileScreen;
