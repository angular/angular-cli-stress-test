/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service300Service } from '../../services/service-300.service';

@Component({
  selector: 'app-comp-300',
  templateUrl: './comp-300.component.html',
  styleUrls: ['./comp-300.component.css']
})
export class Comp300Component implements OnInit {

  constructor(private _service: Service300Service) { }

  ngOnInit() {
  }

}
