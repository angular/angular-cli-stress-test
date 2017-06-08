/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service963Service } from './service-963.service';

describe('Service963Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service963Service]
    });
  });

  it('should ...', inject([Service963Service], (service: Service963Service) => {
    expect(service).toBeTruthy();
  }));
});
