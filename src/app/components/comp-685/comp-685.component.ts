/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service685Service } from '../../services/service-685.service';

@Component({
  selector: 'app-comp-685',
  templateUrl: './comp-685.component.html',
  styleUrls: ['./comp-685.component.css']
})
export class Comp685Component implements OnInit {

  constructor(private _service: Service685Service) { }

  ngOnInit() {
  }

}
