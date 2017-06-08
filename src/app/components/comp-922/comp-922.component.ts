/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service922Service } from '../../services/service-922.service';

@Component({
  selector: 'app-comp-922',
  templateUrl: './comp-922.component.html',
  styleUrls: ['./comp-922.component.css']
})
export class Comp922Component implements OnInit {

  constructor(private _service: Service922Service) { }

  ngOnInit() {
  }

}
