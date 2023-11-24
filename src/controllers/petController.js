import pet from "../models/Pet.js";
import { adopter } from "../models/Adopter.js";
// import { inquiry } from "../models/Inquiry.js";

class PetController {

    static async listarPets (req, res) {
        try {
            const listaPets = await pet.find({});
            res.status(200).json(listaPets);            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na conexão`});
        }

    }

    static async cadastrarPet (req, res) {
        const novoPet = req.body;
        try {
            const adopterEncontrado = await adopter.findById(novoPet.adopter);
            const petCompleto = { ...novoPet, adopter: { ...adopterEncontrado._doc } };
            const petCriado = await pet.create(petCompleto);
            res.status(201).json({ message: "Criado com sucesso", pet: petCriado });            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - Falha ao cadastrar.` });
        }
    }

    static async listarPetPorId (req, res) {
        try {
            const id = req.params.id;
            const petEncontrado = await pet.findById(id);
            res.status(200).json(petEncontrado);            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requsição do pet`});
        }

    }

    static async atualizarPet (req, res) {
        try {
            const id = req.params.id;
            await pet.findByIdAndUpdate(id, req.body);
            res.status(200).json( { message: `Pet atualizado com sucesso`} );            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na atualização`});
        }

    }

    static async excluirPet (req, res) {
        try {
            const id = req.params.id;
            await pet.findByIdAndDelete(id);
            res.status(200).json( { message: `Pet excluído com sucesso`} );            
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na exclusão`});
        }

    }

    static async listarPetPorNome (req, res) {
        const nome = req.query.nome;
        try {
            const petPorNome = await pet.find({ name: nome });            
            res.status(200).json(petPorNome);
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na busca`});            
        }
    }


};

export default PetController;