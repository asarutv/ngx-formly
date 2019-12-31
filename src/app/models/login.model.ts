import { FormlyFieldConfig } from '@ngx-formly/core';

export class Login {
    email: string;
    phoneNumber: string;
    password: string;

    formField() {
        return <FormlyFieldConfig[ ]> [
            {  
            key: 'email',            
            type: 'input',            
            templateOptions: {
                type: 'text',
                label: 'Email',
                placeholder: 'Email',
                required: true,
                },
          
            },
            {
            key: 'phoneNumber',            
            type: 'input',            
            templateOptions: {
                type: 'text',
                label: 'PhoneNumber',
                placeholder: 'Phone Number',
                required: true,
                },
                validation:{
                    messages:{
                        required: ' Email required !'
                    }
                }
            },
            {
            key: 'password',            
            type: 'input',            
            templateOptions: {
                type: 'text',
                label: 'Password',
                placeholder: 'Password',
                required: true,
                },
                validation:{
                    messages:{
                        required: ' Email required !'
                    }
                }
            }
        ];

    }
}