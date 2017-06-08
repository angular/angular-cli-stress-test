/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service482Service } from './service-482.service';

describe('Service482Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service482Service]
    });
  });

  it('should ...', inject([Service482Service], (service: Service482Service) => {
    expect(service).toBeTruthy();
  }));
});
