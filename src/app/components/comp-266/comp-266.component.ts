/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service266Service } from '../../services/service-266.service';

@Component({
  selector: 'app-comp-266',
  templateUrl: './comp-266.component.html',
  styleUrls: ['./comp-266.component.css']
})
export class Comp266Component implements OnInit {

  constructor(private _service: Service266Service) { }

  ngOnInit() {
  }

}
