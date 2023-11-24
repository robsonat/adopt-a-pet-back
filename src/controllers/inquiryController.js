import pet from "../models/Pet.js";
import {adopter} from "../models/Adopter.js";
import { inquiry } from "../models/Inquiry.js";
class InquiryController {
    static async listarInqs (req, res) {
        try {
            const listaInqs = await inquiry.find({}).populate("pet").populate("adopter");
            res.status(200).json(listaInqs);
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na conexão`});
        }
    }
    static async cadastrarInq (req, res) {
        const novaInq = await req.body;
        try {
            const petEncontrado = await pet.findById(novaInq.pet);
            const adopterEncontrado = await adopter.findById(novaInq.adopter);
            const inqCompleta = {pet: petEncontrado._doc._id, adopter: adopterEncontrado._doc._id};
            const inqCriada = await inquiry.create(inqCompleta);
            res.status(201).json({ message: "Criado com sucesso", inquiry: inqCriada });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - Falha ao cadastrar.` });
        }
    }
    static async listarInqPorId (req, res) {
        try {
            const id = req.params.id;
            const inqEncontrado = await inquiry.findById(id);
            res.status(200).json(inqEncontrado);
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na requsição do Inquiry`});
        }
    }
    static async atualizarInq (req, res) {
        try {
            const id = req.params.id;
            await inq.findByIdAndUpdate(id, req.body);
            res.status(200).json( { message: `Inq atualizado com sucesso`} );
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na atualização`});
        }
    }
    static async excluirInq (req, res) {
        try {
            const id = req.params.id;
            await inquiry.findByIdAndDelete(id);
            res.status(200).json( { message: `Inquiry excluídaPet com sucesso`} );
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na exclusão`});
        }
    }
};
export default InquiryController;