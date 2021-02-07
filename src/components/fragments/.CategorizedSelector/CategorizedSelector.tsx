import { useState, useEffect, useReducer, useRef } from 'react';
import styles from './styles';
import './styles.css'

export interface CategorizedSelectorProps {
	hidden: boolean
}

export default function CategorizedSelector(props: CategorizedSelectorProps = { hidden: false }) {
	const { hidden } = props;
	const [count, setCount] = useState();
	const ariaLabel = 'categorizedselector';
	function openMulti() {
		if (document.querySelector<HTMLElement>(".selectWrapper").style.pointerEvents == "all") {
			document.querySelector<HTMLElement>(".selectWrapper").style.opacity = "0";
			document.querySelector<HTMLElement>(".selectWrapper").style.pointerEvents = "none";
			resetAllMenus();
		} else {
			document.querySelector<HTMLElement>(".selectWrapper").style.opacity = "1";
			document.querySelector<HTMLElement>(".selectWrapper").style.pointerEvents = "all";
		}
	}
	function nextMenu(e) {
		const menuIndex = e.target.parentNode.id.slice(-1);
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex].style.transform =
			"translateX(-100%)";
		// document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex].style.clipPath =
			"polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex + 1].style.transform =
			"translateX(0)";
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex + 1].style.clipPath =
			"polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
	}
	function prevMenu(e) {
		const menuIndex = e.target.parentNode.id.slice(-1);
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex].style.transform =
			"translateX(100%)";
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex].style.clipPath =
			"polygon(0 0, 0 0, 0 100%, 0% 100%)";
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex - 1].style.transform =
			"translateX(0)";
		document.querySelectorAll<HTMLElement>(".multiSelect")[menuIndex - 1].style.clipPath =
			"polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
	}
	function resetAllMenus() {
		setTimeout(function () {
			var x = document.getElementsByClassName("multiSelect");
			var i;
			for (i = 1; i < x.length; i++) {
				x[i].style.transform = "translateX(100%)";
				x[i].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
			}
			document.querySelectorAll<HTMLElement>(".multiSelect")[0].style.transform =
				"translateX(0)";
			document.querySelectorAll<HTMLElement>(".multiSelect")[0].style.clipPath =
				"polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
		}, 300);
	}

	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<div className="flexDiv">
				<button className="sec_btn" onClick={openMulti}>Add to feature vector</button>
				<div className="selectWrapper">
					<div className="multiSelect" id="menu-0">
						<div className="bottomBorder">New feature vector</div>
						<div onClick={openMulti}>Vector_01</div>
						<div onClick={openMulti}>myVector</div>
						<div onClick={openMulti}>featureVector</div>
						<div className="topBorder iconDiv" onClick={nextMenu}>Other projects<i className="material-icons">arrow_right</i></div>
					</div>
					<div className="multiSelect" id="menu-1">
						<div className="bottomBorder iconDiv noSpace narrow placeholder"><i className="material-icons">search</i>Search</div>
						<div className="iconDiv justHover" onClick={nextMenu}>Project Example<i className="material-icons">arrow_right</i></div>
						<div className="iconDiv justHover" onClick={nextMenu}>David’s project<i className="material-icons">arrow_right</i></div>
						<div className="iconDiv justHover" onClick={nextMenu}>Project Idan<i className="material-icons">arrow_right</i></div>
						<div className="iconDiv justHover" onClick={nextMenu}>Manhattan<i className="material-icons">arrow_right</i></div>
						<div className="topBorder iconDiv noSpace" onClick={prevMenu}><i className="material-icons">arrow_back</i>Back</div>
					</div>
					<div className="multiSelect" id="menu-2">
						<div className="bottomBorder titleDiv">Project Idan</div>
						<div onClick={openMulti}>Idan Vector</div>
						<div onClick={openMulti}>Testings</div>
						<div onClick={openMulti}>Features_120</div>
						<div onClick={openMulti}>Aggregators</div>
						<div id="menu-1" className="topBorder iconDiv noSpace" onClick={prevMenu}><i className="material-icons">arrow_back</i>Back</div>
					</div>
				</div>
				</div>
		</div>

	);
};