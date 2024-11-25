import { Request, Response } from 'express';
import Player from '../models/player';

export const getPlayers = async (req: Request, res: Response) => {
  const players = await Player.findAll();
  res.json(players);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const player = await Player.findByPk(req.params.id);
  if (player) res.json(player);
  else res.status(404).send('Player not found');
};

// Agrega más controladores como createPlayer, updatePlayer y deletePlayer