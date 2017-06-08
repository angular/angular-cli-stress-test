/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service342Service } from './service-342.service';

describe('Service342Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service342Service]
    });
  });

  it('should ...', inject([Service342Service], (service: Service342Service) => {
    expect(service).toBeTruthy();
  }));
});
