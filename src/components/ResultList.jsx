import React, { useState, useEffect } from 'react';

export default function ResultList(props) { 
  const { searchResult } = props; 
  return (
    <ul className="ResultList">
      {searchResult.map((item) => (
        <li>Teste</li>
      ))}
    </ul>
  );
}
