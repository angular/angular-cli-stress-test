/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service302Service } from '../../services/service-302.service';

@Component({
  selector: 'app-comp-302',
  templateUrl: './comp-302.component.html',
  styleUrls: ['./comp-302.component.css']
})
export class Comp302Component implements OnInit {

  constructor(private _service: Service302Service) { }

  ngOnInit() {
  }

}
