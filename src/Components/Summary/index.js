import React from "react";
import {Text} from "react-native";
import {Styles} from "../../Assets/styles";
import "./Summary.css";

const Summary = ({users, isLoading, isError}) => {
    let approved = 0;
    let pending = 0;
    let isLoadingOrError;

    if (isLoading) {
        isLoadingOrError = <div className="users-box-skeleton"/>;
    } else if (isError) {
        isLoadingOrError = <Text style={Styles.titleText}> -- </Text>;
    }

    for (let user of users) {
        if (user.status === "approved") {
            approved++;
        }
        if (user.status === "pending") {
            pending++;
        }
    }

    return (
        <div className="summary-container">
            <div className="users-box">
                {isLoadingOrError || <Text style={Styles.titleText}> {approved} </Text>}
                <br/>
                <Text style={Styles.baseText}> Active</Text>
            </div>
            <div className="users-box">
                {isLoadingOrError || <Text style={Styles.titleText}> {pending} </Text>}
                <br/>
                <Text style={Styles.baseText}> pending</Text>
            </div>
        </div>
    );
};

export default Summary;
