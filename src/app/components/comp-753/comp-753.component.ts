/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service753Service } from '../../services/service-753.service';

@Component({
  selector: 'app-comp-753',
  templateUrl: './comp-753.component.html',
  styleUrls: ['./comp-753.component.css']
})
export class Comp753Component implements OnInit {

  constructor(private _service: Service753Service) { }

  ngOnInit() {
  }

}
