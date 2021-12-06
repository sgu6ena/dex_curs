import React from "react";
import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

//TODO: сделать компонент ProjectCardProps
export class ProjectCardProps extends React.Component<IProjectCardProps> {
  render() {
    const color = this.props.project.important ? "red" : "green";
    return (
      <div
        style={{
          backgroundColor: color,
          color: "white",
          padding: "15px",
          margin: "10px 0",
          borderRadius: "8px"
        }}
        onClick={() => this.props.onClick(this.props.id)}
      >
        {this.props.project.text.toUpperCase()}
      </div>
    );
  }
}
