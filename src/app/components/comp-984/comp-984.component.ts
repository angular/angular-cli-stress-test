/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service984Service } from '../../services/service-984.service';

@Component({
  selector: 'app-comp-984',
  templateUrl: './comp-984.component.html',
  styleUrls: ['./comp-984.component.css']
})
export class Comp984Component implements OnInit {

  constructor(private _service: Service984Service) { }

  ngOnInit() {
  }

}
