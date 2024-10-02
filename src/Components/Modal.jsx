import { Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";

const ModalCard = ({ open, onOk, onCancel, card }) => {
  const [form] = Form.useForm();
  const [image, setImage] = useState(card?.image || null); // Track the image state

  // Set form fields when editing a card
  useEffect(() => {
    if (card) {
      form.setFieldsValue({
        number: card.cardNumber,
      });
      setImage(card.image); // Set the image from the card being edited
    } else {
      form.resetFields(); // Reset form for new card addition
      setImage(null); // Reset image for new card
    }
  }, [card, form]);

  // Handle file upload with a normal input
  const handleUploadChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result); // Store image as base64
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const updatedCard = {
        cardNumber: values.number,
        image, // Pass the uploaded image
      };
      onOk(updatedCard); // Pass updated card data back to the parent component
    });
  };

  return (
    <Modal
      title={card ? "Edit Card" : "Add New Card"}
      open={open}
      onOk={handleSubmit}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" autoComplete="off">
        {/* Image upload section with a standard input */}
        <Form.Item label="Card Image">
          <input type="file" onChange={handleUploadChange} />
        </Form.Item>

        {/* Preview the uploaded image */}
        {image && (
          <img
            src={image}
            alt="Card"
            style={{ width: "100%", marginTop: "10px" }}
          />
        )}

        {/* Card number input */}
        <Form.Item
          name="number"
          label="Card Number"
          rules={[{ required: true, message: "Please enter the card number" }]}
        >
          <Input placeholder="Enter Card Number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalCard;
