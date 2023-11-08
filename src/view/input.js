import { MissionUtils } from '@woowacourse/mission-utils';
import { USER_INPUT_MESSAGE } from '../constants/constants';

class Input {
  async getUserMoney() {
    const money = await MissionUtils.Console.readLineAsyc(
      USER_INPUT_MESSAGE.inputMoneyMessage
    );
    return money.trim();
  }

  async getWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsyc(
      USER_INPUT_MESSAGE.inputWinningNumbersMessage
    );
    return winningNumbers.trim();
  }

  async getBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsyc(
      USER_INPUT_MESSAGE.inputBonusNumberMessage
    );
    return bonusNumber.trim();
  }
}

export default Input;
