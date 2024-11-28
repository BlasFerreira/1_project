//playerController.ts
import { Request, Response } from 'express';
import Player from '../models/Player';

export const getAllPlayers = async (req: Request, res: Response) => {
  try{
    const players = await Player.findAll();
    res.json(players);
  }catch (error) {
    res.status(500).send('Error fetching');
  }
};

export const createPlayer = async (req: Request, res: Response) => {
  try {
    const { name, position, club, nationality, rating } = req.body;
    const newPlayer = await Player.create({
      name,
      position,
      club,
      nationality,
      rating,
    });
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).send('Error creating player');
  }
};
