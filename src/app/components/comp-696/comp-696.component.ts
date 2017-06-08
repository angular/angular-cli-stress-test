/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service696Service } from '../../services/service-696.service';

@Component({
  selector: 'app-comp-696',
  templateUrl: './comp-696.component.html',
  styleUrls: ['./comp-696.component.css']
})
export class Comp696Component implements OnInit {

  constructor(private _service: Service696Service) { }

  ngOnInit() {
  }

}
