/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service436Service } from '../../services/service-436.service';

@Component({
  selector: 'app-comp-436',
  templateUrl: './comp-436.component.html',
  styleUrls: ['./comp-436.component.css']
})
export class Comp436Component implements OnInit {

  constructor(private _service: Service436Service) { }

  ngOnInit() {
  }

}
