/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service55Service } from './service-55.service';

describe('Service55Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service55Service]
    });
  });

  it('should ...', inject([Service55Service], (service: Service55Service) => {
    expect(service).toBeTruthy();
  }));
});
