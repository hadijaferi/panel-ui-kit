import React from "react";
import { IFeaturedSpecificationAttributes } from './../../../../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes';

export interface ISpecificationsProps {
  specifications: IFeaturedSpecificationAttributes[];
  title: string;
}

const SpecificationsDesktop = (props: ISpecificationsProps) => {
  return props.specifications.length ? (
    <div className="card m-t-16 m-b-64">
      <div className="p-y-32 p-x-24">
        <div className="fontSize-18 fontWeight-500 m-b-8">{props.title}</div>
      </div>
      <div className="table">
        <table>
          <tbody>
            {props.specifications.map(specification => {
              return (
                <tr key={`SpecificationAttributes${specification.Id}`}>
                  <td className="col-3">{specification.Name}</td>
                  <td className="col-9">
                    {specification.Values.map(value => {
                      return value;
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
};

export default SpecificationsDesktop;
