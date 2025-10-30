'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export interface Project {
  id: string;
  image: string;
  name: string;
  description: string;
  progress?: number; // 0-100
}

type Props = Omit<Project, 'id'>;

const ProjectCard = ({ name, image, description, progress }: Props) => {
  return (
    <motion.div
      className="w-full h-max flex-none bg-opacity-30 shadow rounded-lg overflow-hidden group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)' }}
    >
      {/* Image Section with Hover Effect */}
      <motion.div className="relative w-full h-60 lg:h-72 overflow-hidden">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image src={image} className="object-cover rounded-lg" alt={name} fill />
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <div className="my-4 px-4">
        <h5 className="text-white font-bold text-lg mb-1">{name}</h5>
        <p className="text-white text-sm mb-3 line-clamp-2">{description}</p>
        {progress !== undefined && (
          <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between text-xs text-white/80 mb-1">
              <span>In Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-orange-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
