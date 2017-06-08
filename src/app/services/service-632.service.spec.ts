/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service632Service } from './service-632.service';

describe('Service632Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service632Service]
    });
  });

  it('should ...', inject([Service632Service], (service: Service632Service) => {
    expect(service).toBeTruthy();
  }));
});
