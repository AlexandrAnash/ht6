import {TaskModel} from '../app/taskModel';
import {TaskFactory} from '../app/taskFactory';

describe('Test task model', function() {
    it('should be right a constructor', function() {
        TaskFactory.isCorrect = function(){return true;};
        let taskModel = new TaskModel(1,2,3);
        expect(taskModel.red).toBe(1);
        expect(taskModel.green).toBe(2);
        expect(taskModel.blue).toBe(3);
    });
    
    it('should be throw if bad params', function() {
        TaskFactory.isCorrect = function(){return false;};
        expect(function() {
            new TaskModel(1,2,3);
        }).toThrowError('no valid input data: red = 1, green = 2, blue = 3');
    });
});