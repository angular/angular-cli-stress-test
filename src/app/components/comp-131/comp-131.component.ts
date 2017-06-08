/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service131Service } from '../../services/service-131.service';

@Component({
  selector: 'app-comp-131',
  templateUrl: './comp-131.component.html',
  styleUrls: ['./comp-131.component.css']
})
export class Comp131Component implements OnInit {

  constructor(private _service: Service131Service) { }

  ngOnInit() {
  }

}
