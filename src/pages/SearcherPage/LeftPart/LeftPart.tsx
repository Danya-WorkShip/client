import React, { FC } from 'react'
import classes from './LeftPart.module.scss';
import { IUser } from '../../../types/types';
import SearcherLeftProfile from './SearcherLeftProfile/SearcherLeftProfile';

interface ILeftPart {
    VisitedProfileHistory: IUser[]
}

const LeftPart: FC<ILeftPart> = ({VisitedProfileHistory}) => {
  return (
    <div className={classes.LeftPart}>
        <div className={classes.History}>
            <div className={classes.Title}>История</div>
            <div className={classes.List}>
                {VisitedProfileHistory.map((Profile, id )=> {
                    return <SearcherLeftProfile key={id} user={Profile}/>
                }
                )}
            </div>
        </div>
    </div>
  )
}

export default LeftPart