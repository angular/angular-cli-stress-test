/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service218Service } from './service-218.service';

describe('Service218Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service218Service]
    });
  });

  it('should ...', inject([Service218Service], (service: Service218Service) => {
    expect(service).toBeTruthy();
  }));
});
