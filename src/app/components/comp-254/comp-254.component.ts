/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service254Service } from '../../services/service-254.service';

@Component({
  selector: 'app-comp-254',
  templateUrl: './comp-254.component.html',
  styleUrls: ['./comp-254.component.css']
})
export class Comp254Component implements OnInit {

  constructor(private _service: Service254Service) { }

  ngOnInit() {
  }

}
