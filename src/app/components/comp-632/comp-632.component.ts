/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service632Service } from '../../services/service-632.service';

@Component({
  selector: 'app-comp-632',
  templateUrl: './comp-632.component.html',
  styleUrls: ['./comp-632.component.css']
})
export class Comp632Component implements OnInit {

  constructor(private _service: Service632Service) { }

  ngOnInit() {
  }

}
