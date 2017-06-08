/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service654Service } from '../../services/service-654.service';

@Component({
  selector: 'app-comp-654',
  templateUrl: './comp-654.component.html',
  styleUrls: ['./comp-654.component.css']
})
export class Comp654Component implements OnInit {

  constructor(private _service: Service654Service) { }

  ngOnInit() {
  }

}
