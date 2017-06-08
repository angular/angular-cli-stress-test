/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service305Service } from '../../services/service-305.service';

@Component({
  selector: 'app-comp-305',
  templateUrl: './comp-305.component.html',
  styleUrls: ['./comp-305.component.css']
})
export class Comp305Component implements OnInit {

  constructor(private _service: Service305Service) { }

  ngOnInit() {
  }

}
