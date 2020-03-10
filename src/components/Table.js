import React from "react";

class Table extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Roger Federer</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ahmad F</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dazzla R</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Peter S</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Roger Federer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;