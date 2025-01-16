import "../styles/Contact.css"
import { db } from "../firebaseConfig/firebase"
import { ref, push } from "firebase/database"
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react";
import Footer from "./footer";
import {
  Modal,
  ModalOverlay,
  Button,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Contact = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleFormSubmit(e){
        e.preventDefault();
        const formSubmissionRef = ref(db, "Contact/")
        push(formSubmissionRef, formValue)
        .then(()=>{
            console.log("data Submitted succesfully");
            onOpen()
            setFormValue({
                name: "",
                email: "",
                message: ""
            })
        })
        .catch((error)=>{
            console.log("could not submit data", error)
        })
    }    

    function handleContactChange(e){
        const {name, value} = e.target;
        setFormValue((prev) =>({
            ...prev,
            [name]: value,
        })) 
    }

    return (
        <>
            <div className="contact">
                <div className="left-contact">
                    <h1>Get in Touch</h1>
                    <form onSubmit={handleFormSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={formValue.name} placeholder="Enter your Name" onChange={handleContactChange} required/>
                        <label>Email</label>
                        <input type="email" name="email" value={formValue.email} placeholder="Enter your Email" onChange={handleContactChange} required/>
                        <label>Message</label>
                        <textarea type="text" name="message" className="message" value={formValue.message} placeholder="Enter your Message" onChange={handleContactChange}/>
                        <Button marginTop="13px" type="submit">Submit</Button>
                    </form>
                </div>
                <div className="company-address">
                    <h2>
                        <i className="fa-solid fa-house"></i> Mumbai Central Way
                    </h2>
                    <p>bunglow, CA 91770</p>
                    
                    <h2>
                        <i className="fa-solid fa-phone"></i> 91+ 9875435774
                    </h2>
                    <p>
                        Mon to Fri 9am to 6pm
                    </p>
                    <h2>
                        <i className="fa-regular fa-envelope"></i> Support@tourizo.com
                    </h2>
                    <p>
                        send us query for anytime
                    </p>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Message Sent!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize="19px" textColor="green">Your message was sent successfully!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Footer/>
        </>
    )
}
export default Contact