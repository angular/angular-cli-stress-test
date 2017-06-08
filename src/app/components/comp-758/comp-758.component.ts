/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service758Service } from '../../services/service-758.service';

@Component({
  selector: 'app-comp-758',
  templateUrl: './comp-758.component.html',
  styleUrls: ['./comp-758.component.css']
})
export class Comp758Component implements OnInit {

  constructor(private _service: Service758Service) { }

  ngOnInit() {
  }

}
