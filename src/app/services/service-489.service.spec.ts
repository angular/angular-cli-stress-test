/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service489Service } from './service-489.service';

describe('Service489Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service489Service]
    });
  });

  it('should ...', inject([Service489Service], (service: Service489Service) => {
    expect(service).toBeTruthy();
  }));
});
