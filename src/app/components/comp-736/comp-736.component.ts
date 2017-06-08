/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service736Service } from '../../services/service-736.service';

@Component({
  selector: 'app-comp-736',
  templateUrl: './comp-736.component.html',
  styleUrls: ['./comp-736.component.css']
})
export class Comp736Component implements OnInit {

  constructor(private _service: Service736Service) { }

  ngOnInit() {
  }

}
