/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service518Service } from '../../services/service-518.service';

@Component({
  selector: 'app-comp-518',
  templateUrl: './comp-518.component.html',
  styleUrls: ['./comp-518.component.css']
})
export class Comp518Component implements OnInit {

  constructor(private _service: Service518Service) { }

  ngOnInit() {
  }

}
