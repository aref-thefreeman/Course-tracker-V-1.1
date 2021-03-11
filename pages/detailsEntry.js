import React from 'react';

const detailsEntry = () => {
    return (
        <div>
            <h1>Entry Point Page</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default detailsEntry;