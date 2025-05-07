import React from "react";

import Typescript from "../assets/typescript.svg";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import ReactNative from "../assets/reactnative.svg";
import GraphQL from "../assets/graphql.svg";
import Go from "../assets/go.svg";
import Postgres from "../assets/elephant.png";
// import FireBase from '../assets/firebase.png';

import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#47b2ff]">
            Skills
          </p>
          <p className="py-4">
            Here are some of the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img
              className="w-20 mx-auto"
              src={Typescript}
              alt="Typescript Icon"
            />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img className="w-20 mx-auto" src={GraphQL} alt="GraphQL Icon" />
            <p className="my-4">GRAPH QL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Go} alt="Go Icon" />
            <p className="my-4">GO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img
              className="w-20 mx-auto"
              src={ReactNative}
              alt="React Native Icon"
            />
            <p className="my-4">REACT NATIVE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Postgres} alt="Appwrite Icon" />
            <p className="my-4">POSTGRESQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#47b2ff] duration-500 rounded-md">
            <img className="w-20 mx-auto" src={Mongo} alt="Mong DB Icon" />
            <p className="my-4">MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
