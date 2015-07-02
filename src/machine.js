(function(){
	// The turing machine
	turingMachine = function(){
		
		//The head of the machine varies -MAX_SAFE_INTEGER to +MAX_SAFE_INTEGER
		var head = 0;

		//Tape is represented by two stacks
		// leftStack's growth represent tape growth on the left
		// rightStack's growth represent tape growth on the right
		var leftStack=[],rightStack=[];

		//Current state of the machine
		var currentState;

		//Table of instructions
		//Each instruction is denoted as {currentState,valueOnStack,replacementValue,headMovement}
		var table=[];
		
		//To add instruction sets to the table
		//No replacementValue signifies no replacement
		//No headMovement signifies HALT
		this.addInstruction = function(instruction){
			if(!(instruction && instruction.currentState && instruction.valueOnStack ))
				throw new Error("Instruction not structured properly.");
			return table.push(instruction);		
		}
	};

	
})();
