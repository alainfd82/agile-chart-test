import React from 'react';
import {FormLayout, Select} from '@shopify/polaris';
import categorys_data from '../data/categorys';
import products_data from '../data/products';
import brands_data from '../data/brands';

export default class SelectForm extends React.Component {
    state = {
        selectedCategory: 'cells',
        selectedProduct: 'samsung_cell',
        selectedBrand: 'gm',
        categorys: categorys_data,
        products: products_data['cells'],
        brands: brands_data['samsung_cell']
    };

    handleCategoryChange = (newValue) => {
        const products = products_data[newValue];
        const selectedProduct = products_data[newValue].length ? products_data[newValue][0].value : '';
        const brands = selectedProduct ? brands_data[selectedProduct] : [];

        this.setState({
            selectedCategory: newValue,
            products: products,
            selectedProduct: selectedProduct,
            brands: brands,
            selectedBrand: ''
        });
        if (brands.length)
            this.props.handleChartData(brands[0].value);
        else this.props.handleChartData("");
    };

    handleProductChange = (newValue) => {
        this.setState({
            selectedProduct: newValue,
            brands: brands_data[newValue],
            selectedBrand: ''
        });
        if (brands_data[newValue] && brands_data[newValue].length)
            this.props.handleChartData(brands_data[newValue][0].value);
        else this.props.handleChartData("");
    };

    handleBrandChange = (newValue) => {
        this.setState({selectedBrand: newValue});
        this.props.handleChartData(newValue);
    };

    render() {
        return (
            <FormLayout>
                <FormLayout.Group>
                    <Select
                        label="Category"
                        labelInline
                        options={this.state.categorys}
                        onChange={this.handleCategoryChange}
                        value={this.state.selectedCategory}
                    />
                    <Select
                        label="Product"
                        labelInline
                        options={this.state.products}
                        onChange={this.handleProductChange}
                        value={this.state.selectedProduct}
                    />
                    <Select
                        label="Brand"
                        labelInline
                        options={this.state.brands}
                        onChange={this.handleBrandChange}
                        value={this.state.selectedBrand}
                    />
                </FormLayout.Group>
            </FormLayout>
        );
    }
}