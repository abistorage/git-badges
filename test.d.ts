// tsd testfile
import {expectType, expectAssignable} from 'tsd';
import abi from './index.js';

expectType<string>(abi('abi', 'ERC20'));
