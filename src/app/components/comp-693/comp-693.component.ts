/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service693Service } from '../../services/service-693.service';

@Component({
  selector: 'app-comp-693',
  templateUrl: './comp-693.component.html',
  styleUrls: ['./comp-693.component.css']
})
export class Comp693Component implements OnInit {

  constructor(private _service: Service693Service) { }

  ngOnInit() {
  }

}
