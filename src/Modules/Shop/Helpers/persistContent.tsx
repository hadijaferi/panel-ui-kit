import React, { ReactNode, useState } from "react";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";

interface IPersistItem {
  name: string;
  content: ReactNode;
}

interface IPersistContentReturnProps {
  loader: (persistItem: IPersistItem) => void;
  render: () => ReactNode;
  setCurrentPage: (pageName: string) => void;
}

interface IPersistContentProps {
  excepts?: string[];
  currentName: string;
  maxStacks?: number;
}

const usePersistContent = (
  props: IPersistContentProps,
): IPersistContentReturnProps => {
  const [layers, setLayers] = useState<IPersistItem[]>([]);
  const [currentPage, setCurrentPage] = useState<string>(props.currentName);

  const maxStacks = props.maxStacks ?? 20;
  const cleanOlds = () => {
    if (layers.length >= maxStacks) {
      layers.shift();
      setLayers([...layers]);
    }
  };
  const getExcepts = () => {
    return props.excepts ?? [];
  };
  const removePageByName = (name: string) => {
    const newLayers = [...layers.filter(layer => layer.name !== name)];
    setLayers(newLayers);
    return newLayers;
  };
  const loader = (itemData: IPersistItem) => {
    const expects = getExcepts();

    let newLayers = [...layers];
    if (expects.includes(itemData.name)) {
      newLayers = removePageByName(itemData.name);
    }
    cleanOlds();
    const layerIndex = newLayers.findIndex(
      layer => layer.name === itemData.name,
    );
    if (layerIndex === -1) {
      newLayers = [...newLayers, itemData];
      setLayers(newLayers);
    }

    setCurrentPage(itemData.name);
  };

  const render = () => {
    const output: ReactNode[] = [];
    const expects = getExcepts();
    if (expects.includes(currentPage)) {
      output.push(
        <div
          key={`${currentPage}_`}
          className={generateClassName([`layer_${currentPage}`])}>
          {layers.find(layer => layer.name === currentPage)?.content}
        </div>,
      );
    }
    return (
      <div className="persist">
        {output}
        {layers.map((layer, index) => {
          let content: ReactNode = "";
          if (!expects.includes(layer.name)) {
            content = layer.content;
          }
          return (
            <div
              key={`${layer.name}_${index}`}
              className={generateClassName([
                `layer_${layer.name}`,
                currentPage !== layer.name && "d-none",
              ])}>
              {content}
            </div>
          );
        })}
      </div>
    );
  };
  return {
    render,
    loader,
    setCurrentPage,
  };
};
export default usePersistContent;
