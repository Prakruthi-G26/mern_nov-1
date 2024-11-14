const Trainer = require('../model1/module/trainer');
exports.createTrainer = async (req, res) => {
	try {
			const trainer = new Trainer(req.body);
			const savedTrainer = await trainer.save();
			res.status(201).json(savedTrainer);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	};
exports.getAllTrainers = async (req, res) => {
	try {
			const trainers = await Trainer.find();
			res.status(200).json(trainers);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};
exports.getTrainerById =  async (req, res) => {
	try{
			const trainer = await Trainer.findById(req.params.id);
					// const item = await Item.findOne({_id:req.params.id}); 
			res.status(200).json(trainer);
		} catch(error){
			res.status(500).json({ message: error.message });
		}
	};
exports.updateTrainer = async (req, res) => {
	try {
			const updatedTrainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });//await Item.updateOne({_id:req.params.id},{$set: req.body}) 
			if (!updatedTrainer) return res.status(404).json({ message: "Item not found" });
				res.status(200).json(updatedTrainer);
			} catch (error) {
				res.status(500).json({ message: error.message });
			}
		};
exports.deleteTrainer = async (req, res) => {
	try {
			const deletedTrainer = await Trainer.findByIdAndDelete(req.params.id);
			if (!deletedTrainer) return res.status(404).json({ message: "Item not found" });
				res.status(200).json({ message: "Trainer deleted successfully" });
			} catch (error) {
				res.status(500).json({ message: error.message });
			}
		};