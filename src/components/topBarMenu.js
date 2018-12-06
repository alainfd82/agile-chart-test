import React from 'react'
import {ActionList, Card, TopBar} from '@shopify/polaris'

export default class TopBarExample extends React.Component {
    state = {
        userMenuOpen: false,
        searchActive: false,
        searchText: '',
    };

    render() {
        const {userMenuOpen, searchText, searchActive} = this.state;

        const userMenuMarkup = (
            <TopBar.UserMenu
                actions={[
                    {
                        items: [{content: 'Logout', icon: 'logOut'}],
                    }
                ]}
                name="AlainFD"
                detail="Sales Manager"
                initials="AFD"
                open={userMenuOpen}
                onToggle={this.toggleUserMenu}
            />
        );

        const searchResultsMarkup = (
            <Card>
                <ActionList
                    items={[
                        {
                            content: 'Agile Chart Test Center',
                            onAction: () => this.handleSearchResultSelect('Agile Chart Test Center')

                        },
                        {
                            content: 'Agile Chart Test forums',
                            onAction: () => this.handleSearchResultSelect('Agile Chart Test forums')
                        }
                    ]}
                />
            </Card>
        );

        const searchFieldMarkup = (
            <TopBar.SearchField
                onChange={this.handleSearchChange}
                value={searchText}
                placeholder="Search"
            />
        );

        return (
            <TopBar
                showNavigationToggle={true}
                userMenu={userMenuMarkup}
                searchResultsVisible={searchActive}
                searchField={searchFieldMarkup}
                searchResults={searchResultsMarkup}
                onSearchResultsDismiss={this.handleSearchResultsDismiss}
                onNavigationToggle={() => {
                    console.log('toggle navigation visibility');
                }}
            />
        );
    }

    toggleUserMenu = () => {
        this.setState(({userMenuOpen}) => ({userMenuOpen: !userMenuOpen}));
    };

    handleSearchResultsDismiss = () => {
        this.setState(() => {
            return {
                searchActive: false,
                searchText: '',
            };
        });
    };

    handleSearchResultSelect = (value) => {
        this.handleSearchChange(value);
        this.setState({searchActive: false});
    }

    handleSearchChange = (value) => {
        this.setState({searchText: value});
        if (value.length > 0) {
            this.setState({searchActive: true});
        } else {
            this.setState({searchActive: false});
        }
    };
}