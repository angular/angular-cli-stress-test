/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service583Service } from '../../services/service-583.service';

@Component({
  selector: 'app-comp-583',
  templateUrl: './comp-583.component.html',
  styleUrls: ['./comp-583.component.css']
})
export class Comp583Component implements OnInit {

  constructor(private _service: Service583Service) { }

  ngOnInit() {
  }

}
