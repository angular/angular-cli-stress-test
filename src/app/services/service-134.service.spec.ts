/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service134Service } from './service-134.service';

describe('Service134Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service134Service]
    });
  });

  it('should ...', inject([Service134Service], (service: Service134Service) => {
    expect(service).toBeTruthy();
  }));
});
