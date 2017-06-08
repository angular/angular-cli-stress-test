/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service589Service } from '../../services/service-589.service';

@Component({
  selector: 'app-comp-589',
  templateUrl: './comp-589.component.html',
  styleUrls: ['./comp-589.component.css']
})
export class Comp589Component implements OnInit {

  constructor(private _service: Service589Service) { }

  ngOnInit() {
  }

}
