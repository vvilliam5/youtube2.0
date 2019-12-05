import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.formSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type='text' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;