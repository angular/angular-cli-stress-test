/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service181Service } from './service-181.service';

describe('Service181Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service181Service]
    });
  });

  it('should ...', inject([Service181Service], (service: Service181Service) => {
    expect(service).toBeTruthy();
  }));
});
