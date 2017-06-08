/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service563Service } from '../../services/service-563.service';

@Component({
  selector: 'app-comp-563',
  templateUrl: './comp-563.component.html',
  styleUrls: ['./comp-563.component.css']
})
export class Comp563Component implements OnInit {

  constructor(private _service: Service563Service) { }

  ngOnInit() {
  }

}
