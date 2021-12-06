import React from "react";
import { IProject } from "../types";
import { ProjectCardProps } from "./ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}

//TODO: Добавить компонент ProjectsList
// важные подкрасить красным, неважные зелёным
export class ProjectsList extends React.Component<IProjectsListProps> {
  render() {
    const projects = this.props.projects.map((project) => (
      <ProjectCardProps
        key={project.id}
        id={project.id}
        onClick={this.props.onClick}
        project={project}
      />
    ));
    return <div>{projects}</div>;
  }
}
