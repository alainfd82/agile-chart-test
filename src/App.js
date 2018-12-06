import React, {Component} from 'react';
import './App.css';
import '@shopify/polaris/styles.css';
import {AppProvider, Frame, Layout, Page} from '@shopify/polaris';
import BarExample from './components/barChart';
import TopBarExample from './components/topBarMenu';
import SelectForm from './components/formFilter';
import chart_data from './data/chart';

const initial_data = [
    {
        label: 'January',
        backgroundColor: 'rgba(39,132,219,0.2)',
        borderColor: 'rgba(39,132,219,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(39,132,219,0.4)',
        hoverBorderColor: 'rgba(39,132,219,1)',
        data: []
    },
    {
        label: 'February',
        backgroundColor: 'rgba(57,163,54,0.2)',
        borderColor: 'rgba(57,163,54,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(57,163,54,0.4)',
        hoverBorderColor: 'rgba(57,163,54,1)',
        data: []
    },
    {
        label: 'March',
        backgroundColor: 'rgba(200,165,29,0.2)',
        borderColor: 'rgba(200,165,29,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(200,165,29,0.4)',
        hoverBorderColor: 'rgba(200,165,29,1)',
        data: []
    },
    {
        label: 'April',
        backgroundColor: 'rgba(227,117,19,0.2)',
        borderColor: 'rgba(227,117,19,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(227,117,19,0.4)',
        hoverBorderColor: 'rgba(227,117,19,1)',
        data: []
    }
];

class App extends Component {
    state = {
        chartData: []
    };

    componentWillMount() {
        this.handleChartData('gm')
    }

    handleChartData = (selectedBrand) => {
        let chartData = [];
        initial_data.forEach(function (value) {
            let dataset = value;
            if (chart_data[selectedBrand])
                dataset.data[0] = (chart_data[selectedBrand][value.label]);
            else
                dataset.data[0] = 0;
            chartData.push(dataset)
        });
        this.setState({chartData});
    };

    render() {
        const {chartData} = this.state;
        const theme = {
            colors: {
                topBar: {
                    background: '#357997',
                    backgroundDarker: '#357997',
                    backgroundLighter: '#6192a9',
                    color: '#FFFFFF',
                },
            },
            logo: {
                width: 120,
                topBarSource: 'https://www.vectorlogo.zone/logos/usefulcharts/usefulcharts-ar21.svg',
                url: 'https://agile-chart-test.now.sh',
                accessibilityLabel: 'Agile Chart Test',
            },
        };

        return (
            <AppProvider theme={theme}>
                <Frame topBar={<TopBarExample/>}>
                    <Page
                        title={"Sales report"}
                        titleMetadata={"Sales by month for: (Selected items)"}
                    >
                        <Layout>
                            <Layout.Section>
                                <SelectForm handleChartData={this.handleChartData}/>
                            </Layout.Section>
                            <Layout.Section>
                                <BarExample chartData={chartData}/>
                            </Layout.Section>
                        </Layout>
                    </Page>

                </Frame>
            </AppProvider>
        );
    }
}

export default App;
