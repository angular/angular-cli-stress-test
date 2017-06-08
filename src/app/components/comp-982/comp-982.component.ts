/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service982Service } from '../../services/service-982.service';

@Component({
  selector: 'app-comp-982',
  templateUrl: './comp-982.component.html',
  styleUrls: ['./comp-982.component.css']
})
export class Comp982Component implements OnInit {

  constructor(private _service: Service982Service) { }

  ngOnInit() {
  }

}
