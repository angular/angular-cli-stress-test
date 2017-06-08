/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service676Service } from '../../services/service-676.service';

@Component({
  selector: 'app-comp-676',
  templateUrl: './comp-676.component.html',
  styleUrls: ['./comp-676.component.css']
})
export class Comp676Component implements OnInit {

  constructor(private _service: Service676Service) { }

  ngOnInit() {
  }

}
