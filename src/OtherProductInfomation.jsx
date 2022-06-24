import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import './otherproductinfomation.css';

function OtherProductInfomation() {
  return (
    <>
      <div className="form-container-otherproductinfomation">
        <h4 className="form-container-heading-otherproductinfomation">Other Product Infomation</h4>
        <Row gutter={16}>
          <Col lg={6} md={12} sm={24} xs={24}>
            <h4 className="heading-mt">Product Type</h4>
            <Form.Item name="product_type_1" className="form-margin">
              <Input placeholder="Product Type 1" />
            </Form.Item>
            <Form.Item name="product_type_2" className="form-margin">
              <Input placeholder="Product Type 2" />
            </Form.Item>
            <Form.Item name="product_type_3" className="form-margin">
              <Input placeholder="Product Type 3" />
            </Form.Item>
            <Form.Item name="product_type_4" className="form-margin">
              <Input placeholder="Product Type 4" />
            </Form.Item>
            <Form.Item name="product_type_5" className="form-margin">
              <Input placeholder="Product Type 5" />
            </Form.Item>
            <Form.Item name="product_type_6" className="form-margin">
              <Input placeholder="Product Type 6" />
            </Form.Item>
            <Form.Item name="product_type_7" className="form-margin">
              <Input placeholder="Product Type 7" />
            </Form.Item>
            <Form.Item name="product_type_8">
              <Input placeholder="Product Type 8" />
            </Form.Item>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            <h4 className="heading-mt">Other Product used</h4>
            <Form.Item name="ohter_product_user_1" className="form-margin">
              <Input placeholder="Other Product used 1" />
            </Form.Item>
            <Form.Item name="ohter_product_user_2" className="form-margin">
              <Input placeholder="Other Product used 2" />
            </Form.Item>
            <Form.Item name="ohter_product_user_3" className="form-margin">
              <Input placeholder="Other Product used 3" />
            </Form.Item>
            <Form.Item name="ohter_product_user_4" className="form-margin">
              <Input placeholder="Other Product used 4" />
            </Form.Item>
            <Form.Item name="ohter_product_user_5" className="form-margin">
              <Input placeholder="Other Product used 5" />
            </Form.Item>
            <Form.Item name="ohter_product_user_6" className="form-margin">
              <Input placeholder="Other Product used 6" />
            </Form.Item>
            <Form.Item name="ohter_product_user_7" className="form-margin">
              <Input placeholder="Other Product used 7" />
            </Form.Item>
            <Form.Item name="ohter_product_user_8">
              <Input placeholder="Other Product used 8" />
            </Form.Item>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            <h4 className="heading-mt">Name of Product</h4>
            <Form.Item name="name_of_product_1" className="form-margin">
              <Input placeholder="Name of Product 1" />
            </Form.Item>
            <Form.Item name="name_of_product_2" className="form-margin">
              <Input placeholder="Name of Product 2" />
            </Form.Item>
            <Form.Item name="name_of_product_3" className="form-margin">
              <Input placeholder="Name of Product 3" />
            </Form.Item>
            <Form.Item name="name_of_product_4" className="form-margin">
              <Input placeholder="Name of Product 4" />
            </Form.Item>
            <Form.Item name="name_of_product_5" className="form-margin">
              <Input placeholder="Name of Product 5" />
            </Form.Item>
            <Form.Item name="name_of_product_6" className="form-margin">
              <Input placeholder="Name of Product 6" />
            </Form.Item>
            <Form.Item name="name_of_product_7" className="form-margin">
              <Input placeholder="Name of Product 7" />
            </Form.Item>
            <Form.Item name="name_of_product_8">
              <Input placeholder="Name of Product 8" />
            </Form.Item>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            <h4 className="heading-mt">Status of Use</h4>
            <Form.Item name="status_of_use_1" className="form-margin">
              <Input placeholder="Status of Use 1" />
            </Form.Item>
            <Form.Item name="status_of_use_2" className="form-margin">
              <Input placeholder="Status of Use 2" />
            </Form.Item>
            <Form.Item name="status_of_use_3" className="form-margin">
              <Input placeholder="Status of Use 3" />
            </Form.Item>
            <Form.Item name="status_of_use_4" className="form-margin">
              <Input placeholder="Status of Use 4" />
            </Form.Item>
            <Form.Item name="status_of_use_5" className="form-margin">
              <Input placeholder="Status of Use 5" />
            </Form.Item>
            <Form.Item name="status_of_use_6" className="form-margin">
              <Input placeholder="Status of Use 6" />
            </Form.Item>
            <Form.Item name="status_of_use_7" className="form-margin">
              <Input placeholder="Status of Use 7" />
            </Form.Item>
            <Form.Item name="status_of_use_8">
              <Input placeholder="Status of Use 8" />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OtherProductInfomation;
