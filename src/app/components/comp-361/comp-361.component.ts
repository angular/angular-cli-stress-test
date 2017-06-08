/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service361Service } from '../../services/service-361.service';

@Component({
  selector: 'app-comp-361',
  templateUrl: './comp-361.component.html',
  styleUrls: ['./comp-361.component.css']
})
export class Comp361Component implements OnInit {

  constructor(private _service: Service361Service) { }

  ngOnInit() {
  }

}
