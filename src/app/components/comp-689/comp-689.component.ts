/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service689Service } from '../../services/service-689.service';

@Component({
  selector: 'app-comp-689',
  templateUrl: './comp-689.component.html',
  styleUrls: ['./comp-689.component.css']
})
export class Comp689Component implements OnInit {

  constructor(private _service: Service689Service) { }

  ngOnInit() {
  }

}
