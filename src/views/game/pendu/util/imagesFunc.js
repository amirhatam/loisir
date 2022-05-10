import PenduTwo from "../../../../assets/pic/pendu/Le-Pendu-2.png"
import PenduThree from "../../../../assets/pic/pendu/Le-Pendu-3.png"
import PenduFour from "../../../../assets/pic/pendu/Le-Pendu-4.png"
import PenduFive from "../../../../assets/pic/pendu/Le-Pendu-5.png"
import PenduSix from "../../../../assets/pic/pendu/Le-Pendu-6.png"

export const setImagesFunc = (n, setPenduImg) => { // Function for set Pendu Image

    if (n === 5) {
        setPenduImg([PenduTwo])
    } else if (n === 4) {
        setPenduImg([PenduThree])
    } else if (n === 3) {
        setPenduImg([PenduFour])
    } else if (n === 2) {
        setPenduImg([PenduFive])
    } else if (n === 1) {
        setPenduImg([PenduSix])
    } else {
        setPenduImg([PenduOne])
    }
}