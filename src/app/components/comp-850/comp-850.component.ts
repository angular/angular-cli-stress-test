/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service850Service } from '../../services/service-850.service';

@Component({
  selector: 'app-comp-850',
  templateUrl: './comp-850.component.html',
  styleUrls: ['./comp-850.component.css']
})
export class Comp850Component implements OnInit {

  constructor(private _service: Service850Service) { }

  ngOnInit() {
  }

}
