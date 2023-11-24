import { adopter } from "../models/Adopter.js";

class AdopterController {

    static async listarAdopters (req, res) {
        try {
            const listaAdopters = await adopter.find({});
            res.status(200).json(listaAdopters);            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na conexão`});
        }
    }

    static async cadastrarAdopter (req, res) {
        try {
            const novoAdopter = await adopter.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", adopter: novoAdopter });            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - Falha ao cadastrar.` });
        }
    }

    static async listarAdopterPorId (req, res) {
        try {
            const id = req.params.id;
            const adopterEncontrado = await adopter.findById(id);
            res.status(200).json(adopterEncontrado);            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requsição do adopter`});
        }
    }

    static async atualizarAdopter (req, res) {
        try {
            const id = req.params.id;
            await adopter.findByIdAndUpdate(id, req.body);
            res.status(200).json( { message: `Adopter atualizado com sucesso`} );            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na atualização`});
        }
    }

    static async excluirAdopter (req, res) {
        try {
            const id = req.params.id;
            await adopter.findByIdAndDelete(id);
            res.status(200).json( { message: `Adopter excluído com sucesso`} );            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na exclusão`});
        }
    }

};

export default AdopterController;